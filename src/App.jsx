import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Crud from "./pages/Crud";
import DataDisplay from "./pages/DataDisplay";
import DataManu from "./pages/DataManu";
import DataSelection from "./pages/DataSelection";
import ImageHandling from "./pages/ImageHandling";
import ReactDom from "./pages/ReactDom";
import ReactHooks from "./pages/ReactHooks";
import StateProp from "./pages/StateProp";
import Styling from "./pages/Styling";
import Forms from "./pages/Forms";
import AuthPages from "./pages/AuthPages";



function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to="/crud" activeClassName="active">CRUD</NavLink>
          </li>
          <li>
            <NavLink to="/data-display" activeClassName="active">Data Display</NavLink>
          </li>
          <li>
            <NavLink to="/data-manipulation" activeClassName="active">Data Manipulation</NavLink>
          </li>
          <li>
            <NavLink to="/data-selection" activeClassName="active">Data Selection</NavLink>
          </li>
          <li>
            <NavLink to="/image-handling" activeClassName="active">Image Handling</NavLink>
          </li>
          <li>
            <NavLink to="/react-dom" activeClassName="active">React DOM</NavLink>
          </li>
          <li>
            <NavLink to="/react-hooks" activeClassName="active">React Hooks</NavLink>
          </li>
          <li>
            <NavLink to="/state-propagation" activeClassName="active">State Propagation</NavLink>
          </li>
          <li>
            <NavLink to="/styling" activeClassName="active">Styling</NavLink>
          </li>
          <li>
            <NavLink to="/forms" activeClassName="active">Forms</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
      <Route element={<AuthPages />}>
        <Route path="/crud" element={<Crud />} />
        <Route path="/data-display" element={<DataDisplay />} />
        <Route path="/data-manipulation" element={<DataManu />} />
        <Route path="/data-selection" element={<DataSelection />} />
        <Route path="/image-handling" element={<ImageHandling />} />
        <Route path="/react-dom" element={<ReactDom />} />
        <Route path="/react-hooks" element={<ReactHooks />} />
        <Route path="/state-propagation" element={<StateProp />} />
        <Route path="/styling" element={<Styling />} />
        <Route path="/forms" element={<Forms />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
