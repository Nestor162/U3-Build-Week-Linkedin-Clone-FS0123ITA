import React from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addImageAsync } from "../redux/actions";

const ImageProfile = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState([]);
  const formData = new FormData();
  const userId = useSelector((state) => state.personalProfile.id);

  const [show, setShow] = useState(false);
  // const [image, setImage] = useState("")

  const handleClose = () => setShow(false);

  const addImageEventHandler = (event) => {
    event.preventDefault();
    if (!image) {
      alert("Please select an image to upload");
      return;
    }

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
          <p className="text-center text-dark-emphasis py-4 fs-4">
            Your photo doesn't have to be a close-up of you! But something that
            represents you.
          </p>

          <p className="text-center text-dark-emphasis py-4">
            We ask LinkedIn users to use their real identities, so take or
            upload a picture of yourself.
            <br /> Then crop it, apply filters and refine it however you want.
          </p>
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
          <Button
            className="mt-2 mx-2"
            variant="secondary" /*onClick={props.handleClose}*/
          >
            Close
          </Button>
          <Button
            className="mt-2"
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
};

export default ImageProfile;
