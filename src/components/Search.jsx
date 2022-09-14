import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsFillMicFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import "./Search.css";

function Search({hideButtons=false}) {
   const [{}, dispatch] = useStateValue();
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input
    })
    navigate("/search");
  };
  return (
    <form className="search">
      <div className="search__input">
        <BiSearch className="search__inputIcon" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <BsFillMicFill />
      </div>
      {!hideButtons ? (<div className="search__buttons">
        <button type="submit" className="btn" onClick={search}>
          Zearch Search
        </button>
        <button className="btn">I'm Feeling Hyped</button>
      </div>) : (<div className="search__buttonsHidden">
        <button type="submit" className="btn" onClick={search}>
          Zearch Search
        </button>
        <button className="btn">I'm Feeling Hyped</button>
      </div>)}
      
    </form>
  );
}

export default Search;
