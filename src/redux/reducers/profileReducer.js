import {
  SET_PROFILE_AREA,
  SET_PROFILE_BIO,
  SET_PROFILE_EMAIL,
  SET_PROFILE_ID,
  SET_PROFILE_IMG,
  SET_PROFILE_LASTNAME,
  SET_PROFILE_NAME,
  SET_PROFILE_TITLE,
  SET_PROFILE_USERNAME,
  ADD_IMAGE,
} from "../actions";

const initialState = {
  name: "",
  surname: "",
  email: "",
  bio: "",
  title: "",
  area: "",
  username: "",
  id: "",
  img: "",
  profileName: "",
  profileLastname: "",
  profileEmail: "",
  profileBio: "",
  profileTitle: "",
  profileArea: "",
  profileUsername: "",
  profileId: "",
  profileImg: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_NAME:
      return {
        ...state,
        profileName: action.payload,
      };
    case SET_PROFILE_LASTNAME:
      return {
        ...state,
        profileLastname: action.payload,
      };
    case SET_PROFILE_EMAIL:
      return {
        ...state,
        profileEmail: action.payload,
      };
    case SET_PROFILE_BIO:
      return {
        ...state,
        profileBio: action.payload,
      };
    case SET_PROFILE_TITLE:
      return {
        ...state,
        profileTitle: action.payload,
      };
    case SET_PROFILE_AREA:
      return {
        ...state,
        profileArea: action.payload,
      };
    case SET_PROFILE_USERNAME:
      return {
        ...state,
        profileUsername: action.payload,
      };
    case SET_PROFILE_ID:
      return {
        ...state,
        profileId: action.payload,
      };
    case SET_PROFILE_IMG:
      return {
        ...state,
        profileImg: action.payload,
      };
    default:
      return state;
    case ADD_IMAGE:
      return {
        ...state,
        data: action.payload,
      };
  }
};

export default profileReducer;
