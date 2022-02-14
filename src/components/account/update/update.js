import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../../endpoints/user";
import { HandleUpdateChange, HandleUpdateUser } from "./update.handler";
function Update({ setModalShowUpdate, setPassError }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");
  const [updateError, setUpdateError] = useState({
    // update user error messages
    firstNameError: "",
    lastNameError: "",
    positionError: "",
  });
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
            onSubmit={(event) =>
              HandleUpdateUser(event, firstName, lastName, position)
            }
            noValidate
          >
            <div className="mb-3">
              <label htmlFor="firstname" className="form-label">
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                defaultValue={firstName}
                className="form-control border-0"
                placeholder="First Name"
                noValidate
                onBlur={(event) =>
                  HandleUpdateChange(
                    event,
                    updateError,
                    setFirstName,
                    setLastName,
                    setPosition,
                    setUpdateError
                  )
                }
                onChange={(event) =>
                  HandleUpdateChange(
                    event,
                    updateError,
                    setFirstName,
                    setLastName,
                    setPosition,
                    setUpdateError
                  )
                }
              ></input>
              {updateError.firstNameError.length > 0 && (
                <small className="text-danger">
                  {updateError.firstNameError}
                </small>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                defaultValue={lastName}
                className="form-control border-0"
                placeholder="Last Name"
                noValidate
                onBlur={(event) =>
                  HandleUpdateChange(
                    event,
                    updateError,
                    setFirstName,
                    setLastName,
                    setPosition,
                    setUpdateError
                  )
                }
                onChange={(event) =>
                  HandleUpdateChange(
                    event,
                    updateError,
                    setFirstName,
                    setLastName,
                    setPosition,
                    setUpdateError
                  )
                }
              ></input>
              {updateError.lastNameError.length > 0 && (
                <small className="text-danger">
                  {updateError.lastNameError}
                </small>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="position" className="form-label">
                Position
              </label>
              <input
                type="text"
                id="position"
                name="position"
                defaultValue={position}
                className="form-control border-0"
                placeholder="Position"
                noValidate
                onBlur={(event) =>
                  HandleUpdateChange(
                    event,
                    updateError,
                    setFirstName,
                    setLastName,
                    setPosition,
                    setUpdateError
                  )
                }
                onChange={(event) =>
                  HandleUpdateChange(
                    event,
                    updateError,
                    setFirstName,
                    setLastName,
                    setPosition,
                    setUpdateError
                  )
                }
              ></input>
              {updateError.positionError.length > 0 && (
                <small className="text-danger">
                  {updateError.positionError}
                </small>
              )}
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
