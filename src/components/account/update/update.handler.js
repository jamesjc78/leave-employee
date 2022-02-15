import { nameRegex } from "../../../common";
import { updateUser } from "../../../endpoints/user";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const HandleUpdateUser = (event, firstName, lastName, position) => {
  event.preventDefault();
  toast.configure();
  if (firstName && lastName && position) {
    updateUser(firstName, lastName, position).then((body) => {
      if (body.status == "failed") {
        toast.error(body.message);
      } else {
        toast.success("Successfully updated!");
        localStorage.setItem("accessToken", body.accessToken);
      }
    });
  }
};

export const HandleUpdateChange = (
  event,
  updateError,
  setFirstName,
  setLastName,
  setPosition,
  setUpdateError
) => {
  event.preventDefault();
  const { name, value } = event.target;
  let newUpdateError = { ...updateError };
  switch (name) {
    case "firstname": // validating first name
      setFirstName(value);
      newUpdateError.firstNameError =
        nameRegex.test(value) && value.length > 0 ? "" : "invalid name";
      break;
    case "lastname": // validating last name
      setLastName(value);
      newUpdateError.lastNameError =
        nameRegex.test(value) && value.length > 0 ? "" : "invalid name";
      break;
    case "position": // validating position
      setPosition(value);
      newUpdateError.positionError =
        value.length == 0 ? "invalid position" : "";
      break;
    default:
      break;
  }
  // setting input error
  setUpdateError(newUpdateError);
};
