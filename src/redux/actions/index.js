export const SET_PROFILE_NAME = "SET_PROFILE_NAME";
export const SET_PROFILE_LASTNAME = "SET_PROFILE_LASTNAME";
export const SET_PROFILE_EMAIL = "SET_PROFILE_EMAIL";
export const SET_PROFILE_BIO = "SET_PROFILE-BIO";
export const SET_PROFILE_TITLE = "SET_PROFILE_TITLE";
export const SET_PROFILE_AREA = "SET_PROFILE_AREA";
export const SET_PROFILE_USERNAME = "SET_PROFILE_USERNAME";
export const SET_PROFILE_ID = "SET_PROFILE_ID";
export const SET_PROFILE_IMG = "SET_PROFILE_IMG";
export const ADD_IMAGE = "ADD_IMAGE";

export const GET_POSTS = "GET_POSTS";

export const ADD_POST = "ADD_POST";

export const POST_IMAGE = "POST_IMAGE";

export const GET_EXPERIENCES = "GET_EXPERIENCES";
export const SET_LOADING = "SET_LOADING";

const getOptions = method => {
  return {
    method: method,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      "Content-Type": "application/json"
    }
  };
};

export const personalProfileFetch = async dispatch => {
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
      }
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

export const personalProfileEdit = updatedProfile => {
  return async dispatch => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        method: "PUT",
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedProfile)
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
    console.log("SUBMIT HAS BEEN SUBMITTED");
  };
};

export const experienceFetch = async (dispatch, userId) => {
  try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
      }
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

export const addImageAsync = (formData, userId) => {
  return async dispatch => {
    try {
      let res = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: formData
      });
      if (res.ok) {
        let addedImage = await res.json();
        dispatch({ type: ADD_IMAGE, payload: addedImage });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// export const getPostAsync = () => {

// return async (dispatch, getState) => {

// try {

// let res = await fetch(

// `https://striveschool-api.herokuapp.com/api/posts/ `,

// getOptions("GET") //dichiaro getOptions per non doverlo ripetere per ogni metodo che vogliamo usare

// );

// if (res.ok) {

// let fetchedPost = await res.json();

// console.log(fetchedPost);

// dispatch({

// type: GET_POSTS,

// payload: fetchedPost.sort(

// (a, b) => new Date(b.createdAt) - new Date(a.createdAt)

// ),

// });

// } else {

// console.log("error");

// }

// } catch (error) {

// console.log(error);

// }

// };

// };

export const addPostAsync = (handleClose, data) => {
  return async (dispatch, getState) => {
    try {
      let res = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/:postId`,

        { ...getOptions("POST"), body: JSON.stringify(data) }
      );

      if (res.ok) {
        let addedPost = await res.json();

        console.log(addedPost);

        handleClose();

        dispatch({
          type: ADD_POST,

          payload: addedPost
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
