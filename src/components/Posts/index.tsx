import { useAppDispatch, useAppSelector } from 'app/hooks'

import { Post } from 'components'
import { StyledPosts } from './Posts.styles'
import { fetchPosts } from 'features/posts/postsSlice'
import { useEffect } from 'react'

function Posts() {
  const { posts } = useAppSelector(state => state.posts)
  const dispatch = useAppDispatch()


  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  return (
    <StyledPosts>
      {posts.map(post => (
        <Post post={post} />
      ))}
    </StyledPosts>
  )
}

export default Posts