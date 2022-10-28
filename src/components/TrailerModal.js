import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../style/moviedetail.css";
import "../style/moviedetail.css";
import YoutubeMovie from "./YouTube";
const TrailerModal = ({ movieData }) => {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
   
  return (
    <div>
      <Button id="trailer" variant="danger" onClick={() => setLgShow(true)}>
        예고편 보러가기
      </Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">{movieData?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <YoutubeMovie movieData={movieData}/>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TrailerModal;
