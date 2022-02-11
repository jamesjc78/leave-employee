import React, { Component, useState } from "react";
import Update from "./update/update";
import ChangePassword from "./changePassword/changePassword";
function Account() {
  const [modalShowUpdate, setModalShowUpdate] = useState(false);
  const [passError, setPassError] = useState({
    oldPassError: "",
    newPassError: "",
  });
  return (
    <div>
      <Update
        setModalShowUpdate={setModalShowUpdate}
        setPassError={setPassError}
      />
      <ChangePassword
        modalShowUpdate={modalShowUpdate}
        setModalShowUpdate={setModalShowUpdate}
        setPassError={setPassError}
        passError={passError}
      />
    </div>
  );
}

export default Account;
