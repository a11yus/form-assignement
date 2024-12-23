import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { name, email } = useSelector((state) => state.user);

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Dashboard</h2>
      {name && email ? (
        <div>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
        </div>
      ) : (
        <p>No user information available. Please log in.</p>
      )}
    </div>
  );
};

export default Dashboard;
