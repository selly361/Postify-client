import { INewPost, Post } from "features/posts/posts.types";

import { ReactNode } from "react";

interface IAppContext {
  editing: boolean;
  formData: INewPost | Post;
  setFormData: React.Dispatch<React.SetStateAction<INewPost | Post>>;
  handleEditPost: (postToEdit: Post) => void;
  handleFinishEdit: () => void;
  handleSubmit: () => void;
}


interface IProps {
    children: ReactNode;
  }

export type { IAppContext, IProps }