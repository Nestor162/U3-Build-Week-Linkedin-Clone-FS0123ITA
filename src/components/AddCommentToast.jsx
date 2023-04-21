import { useState } from 'react';
import { Button, Form, Toast } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { postCommentsAdd, postCommentsFetch } from '../redux/actions';

const AddCommentToast = (props) => {
	const dispatch = useDispatch();
	const [comment, setComment] = useState('');

	const newComment = {
		rate: '1',
		comment: comment,
		elementId: props.id,
	};

	const addNewComment = (e) => {
		e.preventDefault();
		postCommentsAdd(dispatch, newComment);
		postCommentsFetch(dispatch);
	};

	return (
		<>
			<Toast.Header>
				<img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
				<strong className="me-auto">Add new comment</strong>
			</Toast.Header>
			<Toast.Body>
				<Form>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Control type="text" placeholder="Write your comment" onChange={(e) => setComment(e.target.value)} />
					</Form.Group>
					<Button variant="primary" type="submit" onClick={(e) => addNewComment(e)}>
						Comment
					</Button>
				</Form>
			</Toast.Body>
		</>
	);
};

export default AddCommentToast;
