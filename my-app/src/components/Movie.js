import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import ModalMovie from "./ModalMovie";

export default function Movie(element) {
//   console.log(element);
const [show, setShow] = useState(false);
const [chosenM, setChosenM] = useState();

const handleClose = () => setShow(false);
const handleShow = (movies) => {
    setChosenM(movies);
    setShow(true);}
  
   
  return (
    <>
    {/* card must be hereeeeeeeeeee */}
     {/* {console.log(element.movies.poster_path)} */}
    <><p>title : {element.movies.title}</p>
    <img src={"https://image.tmdb.org/t/p/w500"+element.movies.poster_path} ></img>
      <p>overview : {element.movies.overview}</p>
      <p>release_date : {element.movies.release_date}</p>
      <p>====================================================</p></>
     
      {
            
                chosenM && <ModalMovie show={show} handleClose={handleClose} chosenM={chosenM} />
            }
             {/* {console.log("chosenM="+chosenM)} */}
    </>
  );
}
