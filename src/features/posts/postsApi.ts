import { INewPost, Post } from "./posts.types"

import axios from "axios"

const API_BASE_URL = (process.env.REACT_APP_API_BASE_URL as string)


export const fetchPosts = async (): Promise<Post[]> => {
    
  try {
    
    const { data: posts } = await axios.get(API_BASE_URL)
    
    return (posts)
    
  } 
  
  catch (error) {
    throw error
  }
  
}

export const createPost = async (post: INewPost): Promise<Post> => {
    
  try {
    
    const { data: newPost } = await axios.post(API_BASE_URL, post)
    
    return newPost
  
  } 
  
  catch (error) {
    throw error
  }
}

export const updatePost = async (postId: string, post: Post): Promise<Post> => {
    
  try {
    
    const { data: updatedPost } = await axios.patch(`${API_BASE_URL}/${postId}`, post)
    
    return updatedPost
  
  } 
  
  catch (error) {
    throw error
  }
  
}

export const likePost = async (postId: string): Promise<Post> => {
    
    try {
        
       const { data: updatedPost } = await axios.patch(`${API_BASE_URL}/likePost/${postId}`)
        
       return updatedPost
       
    } 
    
    catch (error) {
        throw error
    }
}

export const deletePost = async (postId: string) => {
    
  try {
    
    await axios.delete(`${API_BASE_URL}/${postId}`)
    
    return postId
    
  } 
  
  catch (error) {
    throw error
  }

  
}
