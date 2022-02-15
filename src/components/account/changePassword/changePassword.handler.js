import { changePassword } from "../../../endpoints/account";
import { passValid } from "./changePassword.function";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import _ from "lodash";

export const HandleChangePassword = (
  event,
  newPassword,
  oldPassword,
  passError,
  setNewPassword,
  setOldPassword,
  setPassError,
  setModalShowPass
) => {
  event.preventDefault();
  toast.configure();
  if (passValid(passError, oldPassword, newPassword)) {
    changePassword(oldPassword, newPassword).then((body) => {
      if (body.status == "failed") {
        toast.error(body.message);
      } else {
        toast.success("Successfully updated password!");
        localStorage.setItem("accessToken", body.accesstoken);
        setNewPassword("");
        setOldPassword("");
        const newPassError = _.clone(passError);
        newPassError.oldPassError = "";
        newPassError.newPassError = "";
        setPassError(newPassError);
        setModalShowPass(false);
      }
    });
  }
};

export const HandleChangePasswordChange = (
  event,
  passError,
  setOldPassword,
  setNewPassword,
  setPassError
) => {
  event.preventDefault();
  const { name, value } = event.target;
  let newPassError = { ...passError };

  switch (name) {
    case "oldPassword": // validating old password
      setOldPassword(value);
      newPassError.oldPassError =
        value.length < 6 ? "minimum 6 characters required" : "";
      break;
    case "newPassword": // validating new password
      setNewPassword(value);
      newPassError.newPassError =
        value.length < 6 ? "minimum 6 characters required" : "";
      break;
    default:
      break;
  }
  // setting input error
  setPassError(newPassError);
};
