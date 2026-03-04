const { createContext, useReducer } = require("react");
import jsonServer from "../api/jsonServer";
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "GET_BLOG":
      return action.payload;
    case "EDIT_BLOG":
      return state.map((blogPost) => {
        // Verify by id
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case "ADD_BLOG":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "DELETE_BLOG":
      return state.filter((blogPost) => blogPost.id !== action.payload);

    default:
      return state;
  }
};

const getBlogPost = (dispatch) => {
  return async () => {
    const res = await jsonServer.get("/blogposts");
    dispatch({ type: "GET_BLOG", payload: res.data });
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post("/blogposts", { title, content });
    // dispatch({ type: "ADD_BLOG", payload: { title, content } });
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: "DELETE_BLOG", payload: id });
  };
};
const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { id, title, content });
    dispatch({ type: "EDIT_BLOG", payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};
export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPost },
  [],
);
