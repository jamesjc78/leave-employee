import React from "react";
import { arrayMonth } from "../../../common/common";
function LeaveList({ leaves }) {
  let counter = 1;
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
              {leaves.map((leave) => (
                <tr key={counter}>
                  <th scope="row">{counter++}</th>
                  <td>
                    {arrayMonth[new Date(leave?.date).getMonth()] +
                      " " +
                      new Date(leave?.date).getDate() +
                      ", " +
                      new Date(leave?.date).getFullYear()}
                  </td>
                  <td>{leave.type}</td>
                  <td>{leave.notes}</td>
                </tr>
              ))}
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
