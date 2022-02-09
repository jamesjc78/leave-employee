import React, { Component } from "react";
import LeaveForm from "./leaveForm/leaveForm";
import LeaveList from "./leaveList/leaveList";
function Home() {
  return (
    <div>
      <LeaveForm />
      <LeaveList />
    </div>
  );
}

export default Home;
