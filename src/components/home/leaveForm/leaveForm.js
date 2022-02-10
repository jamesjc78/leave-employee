import React from "react";
import { HandleAddChange, HandleAddLeave } from "./leaveForm.handler";
function LeaveForm({
  leaveType,
  setLeaveType,
  note,
  setNote,
  noteError,
  setNoteError,
  typeError,
  setTypeError,
  refreshList,
  setRefreshList,
}) {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center ">
        <div className="col-16 col-sm-8 col-md-4 ">
          <form
            className="add-form shadow bg-white"
            onSubmit={(event) =>
              HandleAddLeave(
                event,
                leaveType,
                note,
                typeError,
                setTypeError,
                noteError,
                setNoteError,
                refreshList,
                setRefreshList
              )
            }
            noValidate
          >
            <div className="mb-3">
              <label htmlFor="leaveType" className="form-label">
                Leave Type
              </label>
              <select
                defaultValue=""
                id="leaveType"
                name="leaveType"
                className="form-select border-0"
                noValidate
                onBlur={(event) =>
                  HandleAddChange(
                    event,
                    setLeaveType,
                    setNote,
                    typeError,
                    setTypeError,
                    noteError,
                    setNoteError
                  )
                }
                onChange={(event) =>
                  HandleAddChange(
                    event,
                    setLeaveType,
                    setNote,
                    typeError,
                    setTypeError,
                    noteError,
                    setNoteError
                  )
                }
              >
                <option disabled value="">
                  {" "}
                  -- select an option --{" "}
                </option>
                <option value="Sick Leave">Sick Leave</option>
                <option value="Vacation Leave">Vacation Leave</option>
                <option value="Emergency Leave">Emergency Leave</option>
              </select>
              {typeError.length > 0 && (
                <small className="text-danger">{typeError}</small>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="notes" className="form-label">
                Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                className="form-control border-0"
                aria-label="With textarea"
                noValidate
                onBlur={(event) =>
                  HandleAddChange(
                    event,
                    setLeaveType,
                    setNote,
                    typeError,
                    setTypeError,
                    noteError,
                    setNoteError
                  )
                }
                onChange={(event) =>
                  HandleAddChange(
                    event,
                    setLeaveType,
                    setNote,
                    typeError,
                    setTypeError,
                    noteError,
                    setNoteError
                  )
                }
              ></textarea>
              {noteError.length > 0 && (
                <small className="text-danger">{noteError}</small>
              )}
            </div>
            <button type="submit" className="btn btn-primary add-btn col-12">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LeaveForm;
