import Button from "../Button";
import "./roomSelector.css";
import useFetch from "../../hooks/useFetch";
export default function RoomSelector(props) {
  const { rooms, setOpenReserve } = props;
  const apiDatas = rooms.map((room) => useFetch(`/api/room/${room}`));
  return (
    <div className="frame52">
      <div className="selectText">Select your rooms:</div>
      {apiDatas.map(apiData=>(
        (apiData.loading && <h1 key={apiData.data._id}>Loading...</h1>) || (apiData.error && <h1 key={apiData.data._id}>{apiData.error}</h1>) || <Room key={apiData.data._id} {...apiData.data} />
      ))}
      <Button onClick={(e)=>{handleReserve(e); setOpenReserve(false)}} type={"dark"} content={"Reserve Now!"} />
      <Button
        onClick={() => setOpenReserve(false)}
        type={"dark"}
        content={"Close"}
      />
    </div>
  );
}

function Room(props) {
  console.log(props)
  const { title, price, maxPeople, roomNumbers } = props;
  return (
    <div className="frame56">
      <div className="frame53">
        <div className="KingText">{title}</div>
        <div className="KingSizeText">
          Max People {maxPeople}, Price: {price}
        </div>
      </div>

      {roomNumbers && roomNumbers.map((roomNumber) => (
        <div key={roomNumber._id} className="frame54">
          <div className="roomNum">{roomNumber.number}</div>
          <input
            onChange={handleCheck}
            className="frame50"
            type="checkbox"
            name="roomId"
            id={roomNumber._id}
          />
        </div>
      ))}
    </div>
  );
}

function handleCheck(e){
  console.log(e);
}

function handleReserve(e){
  e.preventDefault();
  
}