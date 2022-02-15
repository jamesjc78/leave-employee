import React, { Component, useState } from "react";
import Update from "./update";
import ChangePassword from "./changePassword";
const Account = () => {
  const [modalShowPass, setModalShowPass] = useState(false);
  return (
    <div>
      <Update setModalShowPass={setModalShowPass} />
      <ChangePassword
        modalShowPass={modalShowPass}
        setModalShowPass={setModalShowPass}
      />
    </div>
  );
};

export default Account;
