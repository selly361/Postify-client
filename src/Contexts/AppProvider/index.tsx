import { IAppContext, IProps } from "./AppProvider.types"
import { INewPost, Post } from "features/posts/posts.types"
import { createContext, useContext, useState } from "react"
import { createPost, updatePost } from "features/posts/postsSlice"

import { useAppDispatch } from "app/hooks"

const AppContext = createContext<IAppContext>({
  editing: false,
  formData: {
    title: "",
    message: "",
    creator: "",
    tags: [],
    selectedFile: ""
  },
  setFormData: () => {},
  handleEditPost: () => {},
  handleFinishEdit: () => {},
  handleSubmit: () => {}
})

export function useAppContext() {
  return useContext(AppContext)
}



function AppContextProvider({ children }: IProps) {
  const [editing, setEditing] = useState(false)

  const [formData, setFormData] = useState<INewPost | Post>({
    title: "",
    message: "",
    creator: "",
    tags: [],
    selectedFile: ""
  })

  const dispatch = useAppDispatch()


  const handleEditPost = (postToEdit: Post) => {
    setEditing(true)
    setFormData(postToEdit)
  }

  const handleFinishEdit = () => {
    setEditing(false)
    setFormData({
      title: "",
      message: "",
      creator: "",
      tags: [],
      selectedFile: ""
    })
  }

  const handleSubmit = () => {

    if (editing) {
      const post = formData as Post

      dispatch(updatePost({ postId: post._id, post }))
      handleFinishEdit()
    } else {
      const post = formData as INewPost

      dispatch(createPost(post))
    }
  }

  return (
    <AppContext.Provider
      value={{
        editing,
        formData,
        setFormData,
        handleEditPost,
        handleFinishEdit,
        handleSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider