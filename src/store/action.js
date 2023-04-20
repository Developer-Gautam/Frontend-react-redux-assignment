import {
    GET_PRODUCTS,
    ADD_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    PRODUCTS_ERROR,
    LOGIN_USER,
    LOGOUT_USER,
    USER_ERROR,
    GET_PROFILE,
    UPDATE_PROFILE,
    PROFILE_ERROR
  } from "./actionType";
  
  export const getProducts = () => async dispatch => {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
  
      dispatch({
        type: GET_PRODUCTS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: PRODUCTS_ERROR,
        payload: error.response.data
      });
    }
  };
  
  export const addProduct = productData => async dispatch => {
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        body: JSON.stringify(productData),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await res.json();
  
      dispatch({
        type: ADD_PRODUCT,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: PRODUCTS_ERROR,
        payload: error.response.data
      });
    }
  };
  
  export const updateProduct = (id, productData) => async dispatch => {
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "PUT",
        body: JSON.stringify(productData),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await res.json();
  
      dispatch({
        type: UPDATE_PRODUCT,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: PRODUCTS_ERROR,
        payload: error.response.data
      });
    }
  };
  
  export const deleteProduct = id => async dispatch => {
    try {
      await fetch(`/api/products/${id}`, {
        method: "DELETE"
      });
  
      dispatch({
        type: DELETE_PRODUCT,
        payload: id
      });
    } catch (error) {
      dispatch({
        type: PRODUCTS_ERROR,
        payload: error.response.data
      });
    }
  };
  
  export const loginUser = userData => async dispatch => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await res.json();
  
      dispatch({
        type: LOGIN_USER,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: USER_ERROR,
        payload: error.response.data
      });
    }
  };
  
  export const logoutUser = () => async dispatch => {
    try {
      await fetch("/api/auth/logout", {
        method: "DELETE"
      });
  
      dispatch({
        type: LOGOUT_USER
      });
    } catch (error) {
      dispatch({
        type: USER_ERROR,
        payload: error.response.data
      });
    }
  };
  
  export const getProfile = () => async dispatch => {
    try {
      const res = await fetch("/api/profile");
      const data = await res.json();
  
      dispatch({
        type: GET_PROFILE,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: PROFILE_ERROR,
        payload: error.response.data
      });
    }
  };

  
  export const updateProfile = profileData => async dispatch => {
    try {
      const res = await fetch("/api/profile", {
        method: "PUT",
        body: JSON.stringify(profileData),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await res.json();
  
      dispatch({
        type: UPDATE_PROFILE,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: PROFILE_ERROR,
        payload: error.response.data
      });
    }
  };

  
  