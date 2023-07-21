export interface Post {
    title: string
    message: string
    creator: string
    tags: string[]
    selectedFile: string
    likes: number
    createdAt: Date
}

export interface PostsState {
    posts: Post[]
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
}