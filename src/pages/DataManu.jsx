import React from "react";
import { useState } from "react";
import { data } from "../users";
import "./DataManu.css";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

function DataManu() {
  const [users, setUsers] = useState(data);
  const [sorted, setSorted] = useState({ sorted: "id", reversed: false });
  const [searchPhrase, setSearchPhrase] = useState("");

  const sortById = () => {
    setSorted({ sorted: "id", reversed: !sorted.reversed });
    const usersCopy = [...users];
    usersCopy.sort((userA, userB) => {
      if (sorted.reversed) {
        return userA.id - userB.id;
      }
      return userB.id - userA.id;
    });
    setUsers(usersCopy);
  };

  const sortByName = () => {
    setSorted({ sorted: "name", reversed: !sorted.reversed });
    const usersCopy = [...users];
    usersCopy.sort((userA, userB) => {
      const fullNameA = `${userA.first_name} ${userA.last_name}`;
      const fullNameB = `${userB.first_name} ${userB.last_name}`;

      if (sorted.reversed) {
        return fullNameB.localeCompare(fullNameA);
      }

      return fullNameA.localeCompare(fullNameB);
    });

    setUsers(usersCopy);
  };

  const search = (event) => {
    const matchedUsers = data.filter((user)=>{
    return `${user.first_name} ${user.last_name}`
      .toLowerCase()
      .includes(event.target.value.toLowerCase());
    });
    setUsers(matchedUsers);
    setSearchPhrase(event.target.value)
  }

  const renderUsers = () => {
    return users.map((user) => {
      return (
        <tr>
          <td>{user.id}</td>
          <td>{`${user.first_name} ${user.last_name}`}</td>
          <td>{user.email}</td>
          <td>{user.gender}</td>
        </tr>
      );
    });
  };

  const renderArrow = () => {
    if (sorted.reversed) {
      return <FaArrowUp />;
    }
    return <FaArrowDown />;
  };

  return (
    <div className="DataManu">
      <div className="search-container">
        <input type="text"
         placeholder="Search" 
         value={searchPhrase} onChange={search}/>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th onClick={sortById}>
                <span style={{ marginRight: 10 }}>Id</span>
                {sorted.sorted === "id" ? renderArrow() : null}
              </th>
              <th onClick={sortByName}>
                <span style={{ marginRight: 10 }}>Name</span>
                {sorted.sorted === "name" ? renderArrow() : null}
              </th>
              <th>
                <span>Email</span>
              </th>
              <th>
                <span>Gender</span>
              </th>
            </tr>
          </thead>
          <tbody>{renderUsers()}</tbody>
        </table>
      </div>
    </div>
  );
}

export default DataManu;
