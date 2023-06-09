export const SET_PROFILE_NAME = 'SET_PROFILE_NAME';
export const SET_PROFILE_LASTNAME = 'SET_PROFILE_LASTNAME';
export const SET_PROFILE_EMAIL = 'SET_PROFILE_EMAIL';
export const SET_PROFILE_BIO = 'SET_PROFILE-BIO';
export const SET_PROFILE_TITLE = 'SET_PROFILE_TITLE';
export const SET_PROFILE_AREA = 'SET_PROFILE_AREA';
export const SET_PROFILE_USERNAME = 'SET_PROFILE_USERNAME';
export const SET_PROFILE_ID = 'SET_PROFILE_ID';
export const SET_PROFILE_IMG = 'SET_PROFILE_IMG';
export const ADD_IMAGE = 'ADD_IMAGE';

export const GET_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POST';
export const POST_IMAGE = 'POST_IMAGE';
export const GET_POST_COMMENTS = 'GET_POST_COMMENTS';
export const ADD_POST_COMMENT = 'ADD_POST_COMMENT';

export const GET_EXPERIENCES = 'GET_EXPERIENCES';

export const SET_LOADING = 'SET_LOADING';
export const SET_SHOWING = 'SET_SHOWING';
export const SET_EXP_IMG = 'SET_EXP_IMG';

export const GET_JOBS = 'GET_JOBS';
export const GET_SEARCHED_JOBS = 'GET_SEARCHED_JOBS';
export const SEARCHED_QUERIES = 'SEARCHED_QUERIES';

export const SET_FAVORITE = 'SET_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const SET_FOLLOW = 'SET_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

// const getOptions = (method) => {
// 	return {
// 		method: method,
// 		headers: {
// 			Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
// 			'Content-Type': 'application/json',
// 		},
// 	};
// };

export const personalProfileFetch = async (dispatch) => {
	try {
		const response = await fetch('https://striveschool-api.herokuapp.com/api/profile/me', {
			headers: {
				authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
			},
		});
		if (response.ok) {
			const data = await response.json();
			dispatch({ type: SET_PROFILE_NAME, payload: data.name });
			dispatch({ type: SET_PROFILE_LASTNAME, payload: data.surname });
			dispatch({ type: SET_PROFILE_EMAIL, payload: data.email });
			dispatch({ type: SET_PROFILE_BIO, payload: data.bio });
			dispatch({ type: SET_PROFILE_TITLE, payload: data.title });
			dispatch({ type: SET_PROFILE_AREA, payload: data.area });
			dispatch({ type: SET_PROFILE_USERNAME, payload: data.username });
			dispatch({ type: SET_PROFILE_ID, payload: data._id });
			dispatch({ type: SET_PROFILE_IMG, payload: data.image });
		}
	} catch (error) {
		console.log(error);
	}
};

export const personalProfileEdit = (updatedProfile) => {
	return async (dispatch) => {
		try {
			const response = await fetch('https://striveschool-api.herokuapp.com/api/profile/', {
				method: 'PUT',
				headers: {
					authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(updatedProfile),
			});
			if (response.ok) {
				const updatedProfileData = await response.json();
				dispatch({ type: SET_PROFILE_NAME, payload: updatedProfileData.name });
				dispatch({ type: SET_PROFILE_LASTNAME, payload: updatedProfileData.surname });
				dispatch({ type: SET_PROFILE_EMAIL, payload: updatedProfileData.email });
				dispatch({ type: SET_PROFILE_BIO, payload: updatedProfileData.bio });
				dispatch({ type: SET_PROFILE_TITLE, payload: updatedProfileData.title });
				dispatch({ type: SET_PROFILE_AREA, payload: updatedProfileData.area });
			}
		} catch (error) {
			console.log(error);
		}
		console.log('SUBMIT HAS BEEN SUBMITTED');
	};
};

export const experienceFetch = async (dispatch, userId) => {
	try {
		const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
			headers: {
				authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
			},
		});
		if (response.ok) {
			const data = await response.json();
			dispatch({ type: GET_EXPERIENCES, payload: data });
			dispatch({ type: SET_LOADING, payload: false });
		}
	} catch (error) {
		console.log(error);
	}
};

export const addImageAsync = (data, userId) => {
	const url = `https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`;
	let header = {
		method: 'POST',
		headers: {
			authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
		},
	};
	return async (dispatch, getState) => {
		try {
			let res = await fetch(url, { ...header, body: data });

			if (res.ok) {
				let addedImage = await res.json();
				// dispatch(personalProfileFetch(dispatch));

				console.log(addedImage);

				dispatch({
					type: ADD_IMAGE,
					payload: addedImage,
				});
			} else {
				console.log('error');
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const postsFetch = async (dispatch) => {
	try {
		let response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/ `, {
			headers: {
				authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
				'Content-Type': 'application/json',
			},
		});
		if (response.ok) {
			let fetchedPosts = await response.json();
			dispatch({
				type: GET_POSTS,
				payload: fetchedPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
			});
		} else {
			console.log('error');
		}
	} catch (error) {
		console.log(error);
	}
};

export const addPosts = async (dispatch, data) => {
	try {
		let response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/`, {
			method: 'POST',
			headers: {
				authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		if (response.ok) {
			let addedPost = await response.json();
			console.log(addedPost);
			dispatch({ type: ADD_POST, payload: addedPost });
			postsFetch(dispatch);
		} else {
			console.log('error');
		}
	} catch (error) {
		console.log(error);
	}
};

export const deletePosts = async (id, dispatch) => {
	try {
		let response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${id}`, {
			method: 'DELETE',
			headers: {
				authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
				'Content-Type': 'application/json',
			},
		});
		if (response.ok) {
			const data = response.json();
			console.log(data);
		}
	} catch (error) {
		console.log(error);
	}
};

export const modifyPosts = async (id, data) => {
	try {
		let response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${id}`, {
			method: 'PUT',
			headers: {
				authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		if (response.ok) {
			const data = response.json();
			console.log(data);
		}
	} catch (error) {
		console.log(error);
	}
};

export const jobsFetch = async (dispatch) => {
	try {
		const response = await fetch('https://strive-benchmark.herokuapp.com/api/jobs');
		if (response.ok) {
			const jobs = await response.json();
			dispatch({ type: GET_JOBS, payload: jobs.data });
			console.log(jobs.data);
		}
	} catch (error) {
		console.log(error);
	}
};

export const searchedJobs = async (dispatch, query) => {
	try {
		const response = await fetch('https://strive-benchmark.herokuapp.com/api/jobs?search=' + query);
		if (response.ok) {
			const data = await response.json();
			dispatch({ type: GET_SEARCHED_JOBS, payload: data.data });
			console.log(data.data);
		}
	} catch (error) {
		console.log(error);
	}
};

export const searchedJobsCategory = async (dispatch, query) => {
	try {
		const response = await fetch('https://strive-benchmark.herokuapp.com/api/jobs?category=' + query);
		if (response.ok) {
			const data = await response.json();
			dispatch({ type: GET_SEARCHED_JOBS, payload: data.data });
			console.log(data.data);
		}
	} catch (error) {
		console.log(error);
	}
};

export const searchedJobsCompany = async (dispatch, query) => {
	try {
		const response = await fetch('https://strive-benchmark.herokuapp.com/api/jobs?company=' + query);
		if (response.ok) {
			const data = await response.json();
			dispatch({ type: GET_SEARCHED_JOBS, payload: data.data });
			console.log(data.data);
		}
	} catch (error) {
		console.log(error);
	}
};

export const addImgExp = (data, userId, expId) => {
	const url = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}/picture`;
	const headers = {
		Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
	};
	const options = {
		method: 'POST',
		headers: headers,
		body: data,
	};

	return async (dispatch) => {
		try {
			console.log(data);
			const response = await fetch(url, options);

			if (response.ok) {
				const expImg = await response.json();

				dispatch({
					type: SET_EXP_IMG,
					payload: expImg,
				});

				// dispatch(experienceFetch(dispatch));
			} else {
				console.log('Error: ', response.status, response.statusText);
			}
		} catch (error) {
			console.log('Error: ', error.message);
		}
	};
};

export const postCommentsFetch = async (dispatch, id) => {
	try {
		const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + id, {
			headers: {
				authorization: `Bearer ${process.env.REACT_APP_STRIVE_KEY}`,
				'Content-Type': 'application/json',
			},
		});
		if (response.ok) {
			const comments = await response.json();
			dispatch({ type: GET_POST_COMMENTS, payload: comments });
			console.log('FETCHED COMMENTS:', comments);
		}
	} catch (error) {
		console.log(error);
	}
};

export const postCommentsAdd = async (dispatch, newComment) => {
	try {
		const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
			method: 'POST',
			headers: {
				authorization: `Bearer ${process.env.REACT_APP_STRIVE_KEY}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newComment),
		});
		if (response.ok) {
			const addedComment = await response.json();
			dispatch({ type: ADD_POST_COMMENT, payload: addedComment });
		}
	} catch (error) {
		console.log(error);
	}
};
