import React from "react";
import { useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { SET_SHOWING, addImageAsync, addImgExp } from "../redux/actions";

const ExpImgUpload = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState([]);
  const formData = new FormData();
  const userId = useSelector(state => state.personalProfile.id);
  const expId = useSelector(state => state.experienceList.experiences._id);

  // const [image, setImage] = useState("")

  const addImageEventHandler = event => {
    event.preventDefault();
    if (!image) {
      alert("Please select an image to upload");
      return;
    }

    setImage(event.target.files[0]);
  };

  return (
    <>
      <Card>
        <Modal.Header closeButton>
          <Modal.Title>Upload Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-center text-dark-emphasis py-4 fs-4">Upload an Experience Image</p>

          <Form>
            <Form.Group>
              <Form.Control type="file" rows={4} onChange={e => addImageEventHandler(e)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="mt-2"
            variant="primary"
            onClick={e => {
              e.preventDefault();

              formData.append("experience", image);
              dispatch(addImgExp(formData, userId, expId));
            }}
          >
            Upload
          </Button>
        </Modal.Footer>
      </Card>
    </>
  );
};

export default ExpImgUpload;
