import React, { Component } from "react";
import { Button } from "react-bootstrap";
function LeaveList() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-48 col-sm-24 col-md-12 ">
          <table className="table table-striped table-hover rounded">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Date</th>
                <th scope="col">Type</th>
                <th scope="col">Notes</th>
              </tr>
            </thead>
            <tbody>
              {/* {employees.map((employee) => (
                <tr
                  key={employee.username}
                  id={employee.username}
                  onClick={() =>
                    HandleUserRowClick(employee.username, navigate)
                  }
                >
                  <th scope="row">{counter++}</th>
                  <td>{employee.username}</td>
                  <td>{employee.firstName + " " + employee.lastName}</td>
                  <td>{employee.position}</td>
                </tr>
              ))} */}
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="row justify-content-center">
            <div className="col-8 col-sm-4  col-md-2 ">
              <button className="btn btn-primary add-employee">Show More</button>
            </div>
          </div> */}
    </div>
  );
}

export default LeaveList;
