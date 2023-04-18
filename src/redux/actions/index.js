export const SET_PROFILE_NAME = "SET_PROFILE_NAME";
export const SET_PROFILE_LASTNAME = "SET_PROFILE_LASTNAME";
export const SET_PROFILE_EMAIL = "SET_PROFILE_EMAIL";
export const SET_PROFILE_BIO = "SET_PROFILE-BIO";
export const SET_PROFILE_TITLE = "SET_PROFILE_TITLE";
export const SET_PROFILE_AREA = "SET_PROFILE_AREA";
export const SET_PROFILE_USERNAME = "SET_PROFILE_USERNAME";
export const SET_PROFILE_ID = "SET_PROFILE_ID";
export const SET_PROFILE_IMG = "SET_PROFILE_IMG";

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
