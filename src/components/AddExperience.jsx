import React, { useEffect, useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { addImgExp, experienceFetch } from "../redux/actions";

function AddExperience() {
  const [show, setShow] = useState(false);
  const [expId, setExpId] = useState("");
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const userId = useSelector(state => state.personalProfile.id);

  const handleSave = async () => {
    await AddExperienceFetch(userId);
    setShow(false);
  };

  useEffect(() => {
    if (expId) {
      console.log(expId);
      dispatch(addImgExp(formData, userId, expId));
    }
  }, [expId]);

  const [experienceInfo, setExperienceInfo] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: ""
  });

  const AddExperienceFetch = async userId => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(experienceInfo)
      });
      if (response.ok) {
        const data = await response.json();
        setExpId(data._id);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [image, setImage] = useState([]);
  const formData = new FormData();
  formData.append("experience", image);

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
      <Plus size={35} className="content-buttons me-4" onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD EXPERIENCE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="role">
              <Form.Label>Role</Form.Label>
              <Form.Control
                onChange={e => {
                  setExperienceInfo({ ...experienceInfo, role: e.target.value });
                }}
                type="text"
                placeholder="Enter your role"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="company">
              <Form.Label>Company</Form.Label>
              <Form.Control
                onChange={e => {
                  setExperienceInfo({ ...experienceInfo, company: e.target.value });
                }}
                type="text"
                placeholder="Enter the Company's name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Sdate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                onChange={e => {
                  setExperienceInfo({ ...experienceInfo, startDate: e.target.value });
                }}
                type="date"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Edate">
              <Form.Label>End Date (can be empty)</Form.Label>
              <Form.Control
                onChange={e => {
                  setExperienceInfo({ ...experienceInfo, endDate: e.target.value });
                }}
                type="date"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                onChange={e => {
                  setExperienceInfo({ ...experienceInfo, description: e.target.value });
                }}
                type="text"
                placeholder="Describe your experience"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Area">
              <Form.Label>Area</Form.Label>
              <Form.Control
                onChange={e => {
                  setExperienceInfo({ ...experienceInfo, area: e.target.value });
                }}
                type="text"
                placeholder="Enter your country name"
              />
            </Form.Group>
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
                {/* <Button
                  className="mt-2"
                  variant="primary"
                  onClick={e => {
                    e.preventDefault();

                    formData.append("experience", image);
                    dispatch(addImgExp(formData, userId, expId));
                  }}
                >
                  Upload
                </Button> */}
              </Modal.Footer>
            </Card>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddExperience;
