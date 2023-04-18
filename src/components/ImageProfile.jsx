import React from "react";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
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
      <Container>
        <Form>
          <Form.Group>
            <label for="avatar">Choose a profile picture:</label>
            <Form.Control
              type="file"
              rows={4}
              onChange={(e) => addImageEventHandler(e)}
            />
            {console.log(image, "ciao")}
          </Form.Group>
        </Form>

        <>
          <Button variant="secondary" className="mt-3">
            Close
          </Button>
          <Button
            variant="primary"
            className="mt-3"
            onClick={(e) => {
              e.preventDefault();
              handleClose();
              formData.append("profile", image);
              dispatch(addImageAsync(formData, userId));
            }}
          >
            Upload
          </Button>
        </>
      </Container>
    </>
  );
}

export default ImageProfile;
