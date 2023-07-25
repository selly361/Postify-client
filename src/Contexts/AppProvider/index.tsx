import { IAppContext, IProps } from "./AppProvider.types"
import { INewPost, Post } from "features/posts/posts.types"
import { createContext, useContext, useState } from "react"
import { createPost, updatePost } from "features/posts/postsSlice"

import { useAppDispatch } from "app/hooks"
import { useTabContext } from "Contexts/TabProvider"

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
  handleSubmit: () => {},
  handleInputChange: () => {}
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


  const { setTab } = useTabContext()

  const handleEditPost = (postToEdit: Post) => {
    setTab("Edit Post")
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
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
        handleInputChange
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider