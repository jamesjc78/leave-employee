import React, { Component, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../../endpoints/user";
function Update({ setModalShowUpdate, setPassError }) {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [position, setPosition] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      getUser().then((body) => {
        console.log("res ", body);
        const { firstName, lastName, position } = body.user;
        if (body.authmessage) {
          console.log("has authmessage");
          localStorage.removeItem("accessToken");
          navigate("/");
        }
        setFirstName(firstName);
        setLastName(lastName);
        setPosition(position);
      });
    } else {
      console.log("no token");
      navigate("/");
    }
  }, []);

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
                value={firstName}
                className="form-control border-0"
                placeholder="First Name"
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
                value={lastName}
                className="form-control border-0"
                placeholder="Last Name"
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
                value={position}
                className="form-control border-0"
                placeholder="Position"
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
        <div
          className="col-16 col-sm-8 col-md-4"
          onClick={() => {
            setModalShowUpdate(true);
            setPassError({
              oldPassError: "",
              newPassError: "",
            });
          }}
        >
          <button className="click-link text-primary">Change Password</button>
        </div>
      </div>
    </div>
  );
}

export default Update;
