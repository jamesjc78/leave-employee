import React, { Component, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import {
  HandleChangePassword,
  HandleChangePasswordChange,
} from "./changePassword.handler";
function ChangePassword({ modalShowPass, setModalShowPass }) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passError, setPassError] = useState({
    // update password error messages
    oldPassError: "",
    newPassError: "",
  });
  return (
    <div>
      <Modal
        show={modalShowPass}
        aria-labelledby="contained-modal-title-vcenter"
        backdrop="static"
        centered
        onHide={() => {
          setModalShowPass(false);
          setPassError({
            oldPassError: "",
            newPassError: "",
          });
        }}
      >
        <form
          onSubmit={(event) =>
            HandleChangePassword(
              event,
              newPassword,
              oldPassword,
              passError,
              setNewPassword,
              setOldPassword,
              setPassError,
              setModalShowPass
            )
          }
          noValidate
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Change Password
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group">
              <label htmlFor="oldPassword">Old Password</label>
              <input
                type="password"
                className="form-control border-0"
                id="oldPassword"
                name="oldPassword"
                placeholder="Old Password"
                noValidate
                onBlur={(event) =>
                  HandleChangePasswordChange(
                    event,
                    passError,
                    setOldPassword,
                    setNewPassword,
                    setPassError
                  )
                }
                onChange={(event) =>
                  HandleChangePasswordChange(
                    event,
                    passError,
                    setOldPassword,
                    setNewPassword,
                    setPassError
                  )
                }
              ></input>
              {passError.oldPassError.length > 0 && (
                <small className="text-danger">{passError.oldPassError}</small>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="newPassword">New Password</label>
              <input
                type="password"
                className="form-control border-0"
                id="newPassword"
                name="newPassword"
                placeholder="New Password"
                noValidate
                onBlur={(event) =>
                  HandleChangePasswordChange(
                    event,
                    passError,
                    setOldPassword,
                    setNewPassword,
                    setPassError
                  )
                }
                onChange={(event) =>
                  HandleChangePasswordChange(
                    event,
                    passError,
                    setOldPassword,
                    setNewPassword,
                    setPassError
                  )
                }
              ></input>
              {passError.newPassError.length > 0 && (
                <small className="text-danger">{passError.newPassError}</small>
              )}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" className="btn btn-primary">
              Change Password
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}

export default ChangePassword;
