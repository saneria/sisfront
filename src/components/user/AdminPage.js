import React, { useState } from "react";

const AdminPage = () => {

  const handleReturn = () => {

    window.location.href = "/"; 
  };

  return (
    <div>
      <button onClick={handleReturn}>Return</button>
    </div>
  );
};

export default AdminPage;
