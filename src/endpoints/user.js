import axios from "axios";

// GET ~/employee/user
export const getUser = async (username) => {
  const response = await axios.get(`/employee/user`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  const data = response.data;
  return data;
};

// PUT ~/employee/user
export const updateUser = async (firstName, lastName, position) => {
  const response = await axios.put(
    `/employee/user`,
    { firstName, lastName, position },
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
