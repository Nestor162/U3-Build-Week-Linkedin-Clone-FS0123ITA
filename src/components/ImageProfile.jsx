import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { SET_SHOWING, addImageAsync, personalProfileFetch } from "../redux/actions";

const ImageProfile = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState([]);
  const formData = new FormData();
  const userId = useSelector(state => state.personalProfile.id);
  const isShowing = useSelector(state => state.isShowing.isShowing);

  // const [image, setImage] = useState("")

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isShowing) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [isShowing]);

  const addImageEventHandler = event => {
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
      <Modal show={show} onHide={() => dispatch({ type: SET_SHOWING, payload: false })}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-center text-dark-emphasis py-4 fs-4">
            Your photo doesn't have to be a close-up of you! But something that represents you.
          </p>

          <p className="text-center text-dark-emphasis py-4">
            We ask LinkedIn users to use their real identities, so take or upload a picture of yourself.
            <br /> Then crop it, apply filters and refine it however you want.
          </p>
          <Form>
            <Form.Group>
              <Form.Control
                type="file"
                rows={4}
                // placeholder="What do you want to talk about"
                onChange={e => addImageEventHandler(e)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="mt-2 mx-2"
            variant="secondary"
            onClick={() => dispatch({ type: SET_SHOWING, payload: false })}
          >
            Close
          </Button>
          <Button
            className="mt-2"
            variant="primary"
            onClick={e => {
              e.preventDefault();
              dispatch({ type: SET_SHOWING, payload: false });
              formData.append("profile", image);
              dispatch(addImageAsync(formData, userId)).then(() => {
                dispatch(personalProfileFetch(dispatch));
              });
            }}
          >
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ImageProfile;
