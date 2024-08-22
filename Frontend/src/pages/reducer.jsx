import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


export const postUserData = createAsyncThunk("postData/userData", async (data) => {
  try {
    const response = await axios.post("http://localhost:5000/api/userDetail", data);
    alert(JSON.stringify(response.data));  // For debugging purposes
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;  // Re-throw the error to handle it in the Redux slice
  }
});

const userDetail = createSlice({
  name: "user",
  initialState: {
    check: 1,
    userData : []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postUserData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(postUserData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.userData = action.payload;
      })
      .addCase(postUserData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }

});

export const { reducer: userDetailReducer } = userDetail;
export default userDetailReducer;
