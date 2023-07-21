import * as postsApi from "./postsApi"

import { Post, PostsState } from "./posts.types"
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState: PostsState = {
  posts: [],
  status: 'idle',
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    
  try {
    const posts = await postsApi.fetchPosts()
    return posts
  } 
  
  catch (error) {
  
    throw error
  
}

})

export const createPost = createAsyncThunk('posts/createPost', async (post: Post) => {
    
  try {
    const newPost = await postsApi.createPost(post)
    return newPost
  } 
  
  catch (error) {
  
    throw error
  
}

})

export const updatePost = createAsyncThunk('posts/updatePost', async ({ postId, post }: { postId: string, post: Post }) => {
    
  try {
    const updatedPost = await postsApi.updatePost(postId, post)
    return updatedPost
  } 
  
  catch (error) {
  
    throw error
  
}

})

export const likePost = createAsyncThunk('posts/likePost', async (postId: string) => {
    
  try {
    const updatedPost = await postsApi.likePost(postId)
    return updatedPost
  } 
  
  catch (error) {
  
    throw error
  
}

})

export const deletePost = createAsyncThunk('posts/deletePost', async (postId: string) => {
    
  try {
    await postsApi.deletePost(postId)
    return postId
  } 
  
  catch (error) {
  
    throw error
  
}

})

const postsSlice = createSlice({
    
  name: 'posts',
  
  initialState,
  
  reducers: {},
  
  extraReducers: (builder) => {
    
    builder
      .addCase(fetchPosts.pending, (state) => {
        
        state.status = 'loading'
      
    })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        
        state.status = 'succeeded'

        state.posts = action.payload
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        
        state.status = 'failed'
      
    })
      .addCase(createPost.fulfilled, (state, action) => {
        
        state.posts.push(action.payload)
      
    })
      .addCase(updatePost.fulfilled, (state, action) => {
        
        const updatedPost = action.payload

        const index = state.posts.findIndex((post) => post._id === updatedPost._id)
        
        if (index !== -1) {
          state.posts[index] = updatedPost
        }
        
      })
      .addCase(likePost.fulfilled, (state, action) => {
        
        const updatedPost = action.payload

        const index = state.posts.findIndex((post) => post._id === updatedPost._id)
        
        if (index !== -1) {
          state.posts[index] = updatedPost
        }
        
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        
        const deletedPostId = action.payload

        state.posts = state.posts.filter((post) => post._id !== deletedPostId)
        
      })
  },
})

export default postsSlice.reducer
