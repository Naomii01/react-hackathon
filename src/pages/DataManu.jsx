import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DataManu.css";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function DataManu() {
  const [users, setUsers] = useState([]);
  const [originalUsers, setOriginalUsers] = useState([]);
  const [sorted, setSorted] = useState({ sorted: "id", reversed: false });
  const [searchPhrase, setSearchPhrase] = useState("");
  const [filterOption, setFilterOption] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        setUsers(response.data);
        setOriginalUsers(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []); 

  const resetListAndFilter = () => {
    setUsers(originalUsers);
    setFilterOption(""); 
  };

  const sortById = () => {
    setSorted({ sorted: "id", reversed: !sorted.reversed });
    const usersCopy = [...users];
    usersCopy.sort((userA, userB) => {
      return sorted.reversed ? userB.id - userA.id : userA.id - userB.id;
    });
    setUsers(usersCopy);
  };

  const sortByName = () => {
    setSorted({ sorted: "name", reversed: !sorted.reversed });
    const usersCopy = [...users];
    usersCopy.sort((userA, userB) => {
      return sorted.reversed ? userB.name.localeCompare(userA.name) : userA.name.localeCompare(userB.name);
    });
    setUsers(usersCopy);
  };

  const search = (event) => {
    const matchedUsers = originalUsers.filter((user) => {
      return user.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setUsers(matchedUsers);
    setSearchPhrase(event.target.value);
  };

  const filterByOption = (event) => {
    const selectedOption = event.target.value;
    setFilterOption(selectedOption);

    if (selectedOption === "all") {
      setUsers(originalUsers);
    } else if (selectedOption === "name") {
      const filteredUsers = originalUsers.map(user => ({ id: user.id, name: user.name }));
      setUsers(filteredUsers);
    } else if (selectedOption === "email") {
      const filteredUsers = originalUsers.map(user => ({ id: user.id, email: user.email }));
      setUsers(filteredUsers);
    }
  };

  const renderUsers = () => {
    return users.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          {filterOption !== "email" && <td>{user.name}</td>}
          {filterOption !== "name" && <td>{user.email}</td>}
        </tr>
      );
    });
  };

  const renderArrow = () => {
    return sorted.reversed ? <FaArrowUp /> : <FaArrowDown />;
  };

  return (
    <div className="DataManu">
      <div className="search-container">
        <TextField
          label="Search"
          variant="outlined"
          value={searchPhrase}
          onChange={search}
          onClear={resetListAndFilter} 
        />
        <Select
          value={filterOption}
          onChange={filterByOption}
          displayEmpty
          inputProps={{ "aria-label": "Filter by option" }}
        >
          <MenuItem value="" disabled>
            Filter by Option
          </MenuItem>
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="email">Email</MenuItem>
        </Select>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th onClick={sortById}>
                <span style={{ marginRight: 10 }}>Id</span>
                {sorted.sorted === "id" && renderArrow()}
              </th>
              {filterOption !== "email" && <th onClick={sortByName}>
                <span style={{ marginRight: 10 }}>Name</span>
                {sorted.sorted === "name" && renderArrow()}
              </th>}
              {filterOption !== "name" && <th>
                <span>Email</span>
              </th>}
            </tr>
          </thead>
          <tbody>{renderUsers()}</tbody>
        </table>
      </div>
    </div>
  );
}

export default DataManu;
