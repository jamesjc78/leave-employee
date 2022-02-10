import { addLeave } from "../../../endpoints/leave";

// submit handler
export const HandleAddLeave = (
  event,
  type,
  notes,
  typeError,
  setTypeError,
  noteError,
  setNoteError,
  refreshList,
  setRefreshList
) => {
  event.preventDefault();
  if (!type) {
    setTypeError("please include leave type");
  }
  if (!notes) {
    setNoteError("Please include note");
  }
  if (notes && type) {
    let date;
    if (type && notes) date = new Date().getTime();
    addLeave(date, type, notes).then((body) => {
      alert(body.message);
      if (body.status === "success") {
        setRefreshList(!refreshList);
        setTypeError("");
        setNoteError("");
      }
    });
  }
};

// input change handler
export const HandleAddChange = (
  event,
  setLeaveType,
  setNote,
  typeError,
  setTypeError,
  noteError,
  setNoteError
) => {
  event.preventDefault();
  const { name, value } = event.target;
  let newNoteError = noteError;
  let newTypeError = typeError;

  switch (name) {
    case "leaveType": // validating leave type
      setLeaveType(value);
      newTypeError = value === "" ? "Please include leave type" : "";
      break;
    case "notes": // validating notes
      setNote(value);
      newNoteError = value.length === 0 ? "Please include note" : "";
      break;
    default:
      break;
  }
  // setting input error
  setTypeError(newTypeError);
  setNoteError(newNoteError);
};
