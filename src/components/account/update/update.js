import React, { Component } from "react";
function Update() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center ">
        <div className="col-16 col-sm-8 col-md-4 ">
          <form
            className="add-form shadow bg-white"
            // onSubmit={(event) =>
            //   HandleAddLeave(
            //     event,
            //     leaveType,
            //     note,
            //     typeError,
            //     setTypeError,
            //     noteError,
            //     setNoteError,
            //     refreshList,
            //     setRefreshList
            //   )
            // }
            noValidate
          >
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="form-control border-0"
                noValidate
                // onBlur={(event) =>
                //   HandleAddChange(
                //     event,
                //     setLeaveType,
                //     setNote,
                //     typeError,
                //     setTypeError,
                //     noteError,
                //     setNoteError
                //   )
                // }
                // onChange={(event) =>
                //   HandleAddChange(
                //     event,
                //     setLeaveType,
                //     setNote,
                //     typeError,
                //     setTypeError,
                //     noteError,
                //     setNoteError
                //   )
                // }
              ></input>
              {/* {noteError.length > 0 && (
                <small className="text-danger">{noteError}</small>
              )} */}
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="form-control border-0"
                noValidate
                // onBlur={(event) =>
                //   HandleAddChange(
                //     event,
                //     setLeaveType,
                //     setNote,
                //     typeError,
                //     setTypeError,
                //     noteError,
                //     setNoteError
                //   )
                // }
                // onChange={(event) =>
                //   HandleAddChange(
                //     event,
                //     setLeaveType,
                //     setNote,
                //     typeError,
                //     setTypeError,
                //     noteError,
                //     setNoteError
                //   )
                // }
              ></input>
              {/* {noteError.length > 0 && (
                <small className="text-danger">{noteError}</small>
              )} */}
            </div>
            <div className="mb-3">
              <label htmlFor="position" className="form-label">
                Position
              </label>
              <input
                type="text"
                id="position"
                name="position"
                className="form-control border-0"
                noValidate
                // onBlur={(event) =>
                //   HandleAddChange(
                //     event,
                //     setLeaveType,
                //     setNote,
                //     typeError,
                //     setTypeError,
                //     noteError,
                //     setNoteError
                //   )
                // }
                // onChange={(event) =>
                //   HandleAddChange(
                //     event,
                //     setLeaveType,
                //     setNote,
                //     typeError,
                //     setTypeError,
                //     noteError,
                //     setNoteError
                //   )
                // }
              ></input>
              {/* {noteError.length > 0 && (
                <small className="text-danger">{noteError}</small>
              )} */}
            </div>
            <button type="submit" className="btn btn-primary add-btn col-12">
              Update
            </button>
          </form>
        </div>
      </div>
      <div className="row justify-content-center ">
        <div className="col-16 col-sm-8 col-md-4  text-primary">
          Change Password
        </div>
      </div>
    </div>
  );
}

export default Update;
