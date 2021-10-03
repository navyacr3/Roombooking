import "./App.css";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { FaBed, FaChild } from "react-icons/fa";
import { IoManSharp } from "react-icons/io5";
import React, { useState } from "react";

function Roombooking() {
  const [rooms, setrooms] = useState(0);
  const [adult, setadult] = useState(0);
  const [child, setchild] = useState(0);
  
  const roomplus = () => {
    if (rooms <= 4) {
      setrooms(rooms + 1);
    }
    if (rooms === 0) {
      setadult(4);
      setchild(0);
    } else if (rooms === 1) {
      setadult(8);
      setchild(0);
    } else if (rooms === 2) {
      setadult(12);
      setchild(0);
    }
    else if (rooms === 3) {
      setadult(16);
      setchild(0);
    }
    else if (rooms === 4) {
      setadult(20);
      setchild(0);
    }
  }

  const roomminus = () =>  {
    if (rooms >= 1) {
      setrooms(rooms - 1);
    }
    if (rooms === 1) {
      setadult(0);
      setchild(0);
    } else if (rooms === 2) {
      setadult(4);
      setchild(0);
    } else if (rooms === 3) {
      setadult(8);
      setchild(0);
    }
    if (rooms === 4) {
      setadult(12);
      setchild(0);
    }
    if (rooms === 5) {
      setadult(16);
      setchild(0);
    }
  }
 const adultplus = () => {
    if (rooms === 1) {
      if (adult + child <= 3) {
        setadult(adult + 1);
      }
    } else if (rooms === 2) {
      if (adult + child <= 7) {
        setadult(adult + 1);
      }
    } else if (rooms === 3) {
      if (adult + child <= 11) {
        setadult(adult + 1);
      }
    } else if (rooms === 4) {
      if (adult + child <= 15) {
        setadult(adult + 1);
      }
    } else if (rooms === 5) {
      if (adult + child <= 19) {
        setadult(adult + 1);
      }
    }
  }

const adultminus = () => {
    if (adult >= 1) {
      setadult(adult - 1);
    }
    if(adult === 1){
      
      setchild(0)
    }
  }

const childplus = () => {
    if (adult >= 1) {
      if (rooms === 1) {
        if (adult + child <= 3) setchild(child + 1);
      } else if (rooms === 2) {
        if (adult + child <= 7) setchild(child + 1);
      } else if (rooms === 3) {
        if (adult + child <= 11) setchild(child + 1);
      } else if (rooms === 4) {
        if (adult + child <= 15) setchild(child + 1);
      } else if (rooms === 5) {
        if (adult + child <= 19) setchild(child + 1);
      }
    }
  }
const childminus = () => {
    if (child >= 1) {
      setchild(child - 1);
    }
  }
  return (
    <div className="roombooking">
      <h1>Room Booking</h1>

      <div className="booking">
        <div className="rooms">
          <h3>
            <FaBed /> Rooms
          </h3>
          <div className="room">
          <button onClick={roomminus}>
              <AiFillMinusCircle style={{ color: "red" }} />
            </button>
            <h2>{rooms}</h2>
            <button onClick={roomplus}>
              <AiFillPlusCircle style={{ color: "green" }} />
            </button>
          </div>
        </div>

        <div className="adults">
          <h3>
            <IoManSharp /> Adult
          </h3>
          <div className="adult">
          <button onClick={adultminus}>
              <AiFillMinusCircle style={{ color: "red" }} />
            </button>
            <h2>{adult}</h2>
            <button onClick={adultplus}>
              <AiFillPlusCircle style={{ color: "green" }} />
            </button>
          </div>
        </div>

        <div className="children">
          <h3>
            <FaChild />
            Children
          </h3>
          <div className="child">
          <button onClick={childminus}>
              <AiFillMinusCircle style={{ color: "red" }} />
            </button>
            <h2>{child}</h2>
            <button onClick={childplus}>
              <AiFillPlusCircle style={{ color: "green" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roombooking;
