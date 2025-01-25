import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";
export const categoryAdd = createAsyncThunk(
  "category/categoryAdd",
  async ({ name, image }, { rejectWithValue, fulfillWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("image", image);
      const { data } = await api.post("/category-add", formData, {
        withCredentials: true,
      });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const get_category = createAsyncThunk(
  "category/get_category",
  async (
    { parPage, page, searchValue },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const { data } = await api.get(
        `/category-get?page=${page}&&searchValue=${searchValue}&&parPage=${parPage}`,
        { withCredentials: true }
      );
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Delete category thunk
export const delete_category = createAsyncThunk(
  "category/delete_category",
  async (categoryId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post(`/delete_category/${categoryId}`, null, {
        withCredentials: true,
      });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const categoryReducer = createSlice({
  name: "category",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    categorys: [],
    totalCategory: 0,
  },
  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: {
    [categoryAdd.pending]: (state, _) => {
      state.loader = true;
    },
    [categoryAdd.rejected]: (state, { payload }) => {
      state.loader = false;
      state.errorMessage = payload.error;
    },
    [categoryAdd.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.successMessage = payload.message;
      state.categorys = [...state.categorys, payload.category];
    },
    [get_category.fulfilled]: (state, { payload }) => {
      state.totalCategory = payload.totalCategory;
      state.categorys = payload.categorys;
    },
    // Handling delete category actions
    [delete_category.pending]: (state, _) => {
      state.loader = true;
    },
    [delete_category.rejected]: (state, { payload }) => {
      state.loader = false;
      state.errorMessage = payload.error;
    },
    [delete_category.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.successMessage = payload.message;
      // Remove the deleted category from the state
      state.categorys = state.categorys.filter(
        (category) => category._id !== payload.deletedCategoryId
      );
    },
  },
});

export const { messageClear } = categoryReducer.actions;
export default categoryReducer.reducer;
