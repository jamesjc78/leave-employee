import React, { Component } from "react";
function LeaveForm() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center ">
        <div className="col-16 col-sm-8 col-md-4 ">
          <form className="add-form shadow bg-white">
            <div className="mb-3">
              <label for="leaveType" className="form-label">
                Leave Type
              </label>
              <select id="leaveType" className="form-select border-0">
                <option>Sick Leave</option>
                <option>Vacation Leave</option>
                <option>Emergency Leave</option>
              </select>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Notes
              </label>
              <textarea
                class="form-control border-0"
                aria-label="With textarea"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary add-btn col-12">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LeaveForm;
