export const passValid = (passError, oldPassword, newPassword) => {
  let valid = true;

  // validate form errors being empty
  Object.values(passError).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  oldPassword === null && (valid = false);
  newPassword === null && (valid = false);

  return valid;
};
