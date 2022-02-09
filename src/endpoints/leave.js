import axios from "axios";

// GET ~/employee/leave
export const getLeave = async (username) => {
  const response = await axios.get(`/employee/leave`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  const data = response.data;
  return data;
};

// POST ~/employee/leave
export const addLeave = async (date, type, notes) => {
  const response = await axios.post(
    `/employee/leave`,
    { date, type, notes },
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
