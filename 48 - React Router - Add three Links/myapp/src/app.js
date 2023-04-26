import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Link1 } from "./link1";
import { Link2 } from "./link2";
import { Link3 } from "./link3";

export function App() {
  return (
    <Router>
      <div>
      <nav>
          <ul>
            <li>
              <Link to="/link1">Link1</Link>
            </li>
            <li>
              <Link to="/link2">Link2</Link>
            </li>
            <li>
              <Link to="/link3">Link3</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/link1" element={<Link1 />} />
          <Route exact path="/link2" element={<Link2 />} />
          <Route exact path="/link3" element={<Link3 />} />
        </Routes>
      </div>
    </Router>
  );
}
