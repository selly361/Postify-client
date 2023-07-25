import {
  BottomSection,
  Container,
  Creator,
  EditButton,
  Like,
  Message,
  StyledImage,
  StyledPost,
  SubContainer,
  Tag,
  Tags,
  TimeAgo,
  Title,
} from "./Post.styles";
import { deletePost, likePost } from "features/posts/postsSlice";

import { DeleteIcon } from "Icons";
import { Post as IPost } from "features/posts/posts.types";
import moment from "moment";
import { useAppContext } from "Contexts/AppProvider";
import { useAppDispatch } from "app/hooks";

function Post({ post }: { post: IPost }) {
  const { handleEditPost } = useAppContext();

  const dispatch = useAppDispatch();

  return (
    <StyledPost>
      <StyledImage image={post.selectedFile}>
        <div>
          <Creator>{post.creator}</Creator>
          <TimeAgo>{moment(post.createdAt).fromNow()}</TimeAgo>
        </div>
        <EditButton onClick={() => handleEditPost(post)}>Edit</EditButton>
      </StyledImage>
      <Container>
        <SubContainer>
          <Tags>
            {post.tags.map((tag) => (
              <Tag>#{tag}</Tag>
            ))}
          </Tags>
          <Title>{post.title}</Title>
          <Message>{post.message}</Message>
        </SubContainer>
        <BottomSection>
          <Like onClick={() => dispatch(likePost(post._id))}>Like {post.likes}</Like>
          <DeleteIcon onClick={() => dispatch(deletePost(post._id))} />
        </BottomSection>
      </Container>
    </StyledPost>
  );
}

export default Post;
