import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Organizational Administration</h1>
    <p>This is all the things you can do with this Organizational Chart Application. It slices it dices it even makes julien fries.</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;
