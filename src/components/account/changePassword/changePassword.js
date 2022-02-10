import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { HandleChangePassword } from "./changePassword.handler";
function ChangePassword({
  modalShowUpdate,
  setModalShowUpdate,
  setPassError,
  oldPassword,
  newPassword,
}) {
  return (
    <div>
      <Modal
        show={modalShowUpdate}
        aria-labelledby="contained-modal-title-vcenter"
        backdrop="static"
        centered
        // onHide={() => {
        //   setModalShowUpdate(false);
        //   setPassError({
        //     oldPassError: "",
        //     newPassError: "",
        //   });
        // }}
      >
        <form
          //   onSubmit={(event) =>
          //     HandleChangePassword(
          //       event,
          //       passwordError,
          //       oldPassword,
          //       newPassword,
          //       setModalShowUpdate
          //     )
          //   }
          noValidate
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add User
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group">
              <label htmlFor="oldPassword">Old Password</label>
              <input
                type="text"
                className="form-control border-0"
                id="oldPassword"
                name="oldPassword"
                placeholder="Old Password"
                noValidate
                // onBlur={(event) =>
                //   HandleChangePasswordChange(
                //     event,
                //     passwordError,
                //     setOldPassword,
                //     setNewPassword,
                //     setPassError
                //   )
                // }
                // onChange={(event) =>
                //   HandleChangePasswordChange(
                //     event,
                //     passwordError,
                //     setOldPassword,
                //     setNewPassword,
                //     setPassError
                //   )
                // }
              ></input>
              {/* {passwordError.userError.length > 0 && (
                <small className="text-danger">{passwordError.userError}</small>
              )} */}
            </div>
            <div className="form-group">
              <label htmlFor="newPassword">New Password</label>
              <input
                type="text"
                className="form-control border-0"
                id="newPassword"
                name="newPassword"
                placeholder="New Password"
                noValidate
                // onBlur={(event) =>
                //   HandleChangePasswordChange(
                //     event,
                //     passwordError,
                //     setOldPassword,
                //     setNewPassword,
                //     setPassError
                //   )
                // }
                // onChange={(event) =>
                //   HandleChangePasswordChange(
                //     event,
                //     passwordError,
                //     setOldPassword,
                //     setNewPassword,
                //     setPassError
                //   )
                // }
              ></input>
              {/* {passwordError.firstNameError.length > 0 && (
                <small className="text-danger">
                  {passwordError.firstNameError}
                </small>
              )} */}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" className="btn btn-primary">
              ChangePassword
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}

export default ChangePassword;
