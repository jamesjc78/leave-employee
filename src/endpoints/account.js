import axios from "axios";

// POST ~/account/authenticate
export const login = async (username, password) => {
  const response = await axios.post("/account/authenticate", {
    username,
    password,
  });
  const data = response.data;
  return data;
};

// POST ~/account/change-password
export const changePassword = async (oldPassword, newPassword) => {
  const response = await axios.post(
    "/account/change-password",
    {
      oldPassword,
      newPassword,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }
  );
  const data = response.data;
  return data;
};
