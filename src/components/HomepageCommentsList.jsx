import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postCommentsFetch } from '../redux/actions';
import HomepageSingleComment from './HomepageSingleComment';

const HomepageCommentsList = (props) => {
	const comments = useSelector((state) => state.commentList.comments);
	const dispatch = useDispatch();

	useEffect(() => {
		postCommentsFetch(dispatch, props.id);
	}, [dispatch, props.id]);

	return (
		<>
			{comments.map((comment) => {
				if (comment.elementId === props.id) {
					return <HomepageSingleComment author={comment.author} comment={comment.comment} key={comment._id} id={comment._id} />;
				}
			})}
		</>
	);
};

export default HomepageCommentsList;
