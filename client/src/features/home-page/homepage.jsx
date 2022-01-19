import React from "react";
import "./hompage.styles.scss";
import Directory from "../../features/directory/directory.component";
import axios from "axios";

const app = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});
const HomePage = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;
