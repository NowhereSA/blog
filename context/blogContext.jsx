const { createContext, useReducer } = require("react");
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
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
const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "ADD_BLOG", payload: { title, content } });
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "DELETE_BLOG", payload: id });
  };
};
const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: "EDIT_BLOG", payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};
export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ title: "TESTE_POST", content: "TESTE_CONTENT", id: 1 }],
);
