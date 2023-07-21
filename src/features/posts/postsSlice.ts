import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { PostsState } from "./posts.types"

const initialState: PostsState = {
  posts: [],
  status: 'idle',
}

const postsSlice = createSlice({
  name: 'posts',
  
  initialState,
  
  reducers: {},
  
  extraReducers: (builder) => {
  
  },

})

export default postsSlice.reducer
