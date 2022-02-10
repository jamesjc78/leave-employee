export const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

export const nameRegex = RegExp(/^[a-zA-Z. '-]*$/);

export const arrayMonth = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// sorting data
export const mySort = (arr, sortBy) => {
  arr.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
};
