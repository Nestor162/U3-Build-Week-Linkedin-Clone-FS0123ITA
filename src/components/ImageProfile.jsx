import React from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addImageAsync } from "../redux/actions";

function ImageProfile() {
  const dispatch = useDispatch();
  const [image, setImage] = useState([]);
  const formData = new FormData();
  const userId = useSelector((state) => state.personalProfile.id);
  const [show, setShow] = useState(false);
  // const [image, setImage] = useState("")

  const handleClose = () => setShow(false);

  const addImageEventHandler = (event) => {
    event.preventDefault();
    setImage(event.target.files[0]);
    console.log(image, "files");
    // if (image !== 0) {
    //   // dispatch(addImageAsync(formData, userId));
    // }
    // formData.append(dispatch(addImageAsync(image)));
    console.log(formData, "formData");
  };

  return (
    <>
      <div>
        <Modal.Header closeButton>
          <Modal.Title>Upload Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control
                type="file"
                rows={4}
                // placeholder="What do you want to talk about"
                onChange={(e) => addImageEventHandler(e)}
              />
              {console.log(image, "imgsdfghj")}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" /*onClick={props.handleClose}*/>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={(e) => {
              e.preventDefault();
              handleClose();
              formData.append("profile", image);
              dispatch(addImageAsync(formData, userId));
            }}
          >
            Upload
          </Button>
        </Modal.Footer>
      </div>
    </>
  );
}

export default ImageProfile;
