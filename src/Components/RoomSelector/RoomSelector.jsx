import Button from "../Button";
import "./roomSelector.css";
import useFetch from "../../hooks/useFetch";
import { useSearch } from "../../contexts/useSearch";
import { useState } from "react";
import axios from "axios";

export default function RoomSelector(props) {
  const { rooms, setOpenReserve } = props;
  
  const dateList = getDates();

  const [reservedRooms, setReservedRooms] = useState([]);

  const apiDatas = rooms.map((room) => useFetch(`/api/room/${room}`));

  var selectInputError = undefined;

  async function handleReserve(e) {
    try {
      await Promise.all(
        reservedRooms.map((roomId) => {
          const res = axios.put(`/api/room/book/${roomId}`, { dates: dateList });
        })
      );
    } catch (err) {
      selectInputError = err;
    }
  }

  return (
    <div className="wrapper">
      <div className="frame52">
        <div className="selectText">Select your rooms:</div>
        {apiDatas.map( (apiData) =>
            (apiData.loading && <h1 key={apiData.data._id}>Loading...</h1>) ||
            (apiData.error && ( <h1 key={apiData.data._id}>{apiData.error}</h1>)) || 
            <Room key={apiData.data._id} {...apiData.data} setReservedRooms={setReservedRooms}/>
        )}
        <Button
          onClick={(e) => {
            handleReserve(e);
            setOpenReserve(false);
          }}
          type={"dark"}
          content={"Reserve Now!"}
        />
        <Button
          onClick={() => setOpenReserve(false)}
          type={"dark"}
          content={"Close"}
        />
        {selectInputError && <h1>selectError</h1>}
      </div>
    </div>
  );
}

function getDates() {
  const { dates } = useSearch();
  const startDate = dates[0].startDate;
  const endDate = dates[0].endDate;

  const dateList = [];

  for (
    let date = new Date(startDate);
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    // console.log("Loop", date);
    dateList.push(date.getTime());
  }

  return dateList;
}


function checkIsAvailable(roomNumber) {
  const dateList = getDates();
  const isFound = roomNumber.unavailableDates.some((date) => {
    return dateList.includes(new Date(date).getTime());
  });

  return !isFound;
}

function Room(props) {
  const { title, price, maxPeople, roomNumbers, _id, setReservedRooms } = props;

  function handleCheck(e) {
    let checked = e.target.checked;
    setReservedRooms((prev) => {
      if (checked) return [...prev, e.target.value];
      else return prev.filter((item) => item !== e.target.value);
    });
  }



  return (
    <div className="frame56">
      <div className="frame53">
        <div className="KingText">{title}</div>
        <div className="KingSizeText">
          Max People {maxPeople}, Price: {price}
        </div>
      </div>

      {roomNumbers &&
        roomNumbers.map((roomNumber) => (
          <div key={roomNumber._id} className="frame54">
            <div className="roomNum">{roomNumber.number}</div>
            <input
              onChange={handleCheck}
              className="frame50"
              type="checkbox"
              value={roomNumber._id}
              disabled={!checkIsAvailable(roomNumber)}
            />
          </div>
        ))}
    </div>
  );
}
