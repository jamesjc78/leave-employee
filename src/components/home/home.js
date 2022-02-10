import React, { useEffect, useState } from "react";
import LeaveForm from "./leaveForm/leaveForm";
import LeaveList from "./leaveList/leaveList";
import { getLeave } from "../../endpoints/leave";
import { mySort } from "../../common/common";
import { useNavigate } from "react-router-dom";
function Home() {
  const [leaveType, setLeaveType] = useState(null);
  const [note, setNote] = useState(null);
  const [noteError, setNoteError] = useState("");
  const [typeError, setTypeError] = useState("");
  const [leaves, setLeaves] = useState([]);
  const [refreshList, setRefreshList] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // checking access token
    if (localStorage.getItem("accessToken") == null) {
      navigate("/");
    }
    getLeave().then((body) => {
      if (body.authmessage) {
        if (body.authmessage == "access token expired!")
          localStorage.removeItem("accessToken");
        navigate("/");
      }
      if (body.status === "success") {
        mySort(body.employeeLeaves, "username");
        setLeaves(body.employeeLeaves);
      }
    });
  }, [refreshList]);

  return (
    <div>
      <LeaveForm
        leaveType={leaveType}
        setLeaveType={setLeaveType}
        note={note}
        setNote={setNote}
        noteError={noteError}
        setNoteError={setNoteError}
        typeError={typeError}
        setTypeError={setTypeError}
        refreshList={refreshList}
        setRefreshList={setRefreshList}
      />
      <LeaveList leaves={leaves} />
    </div>
  );
}

export default Home;
