export interface INewPost {
    title: string
    message: string
    creator: string
    tags: string[]
    selectedFile: string
}

export interface Post extends INewPost {
    _id: string
    createdAt: Date
    likes: number
}



export interface PostsState {
    posts: Post[]
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
}