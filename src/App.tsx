import { Header, Main } from 'Layout'

import { Fragment } from 'react'
import { fetchPosts } from 'features/posts/postsSlice'
import { useAppDispatch } from 'app/hooks'

function App() {



  return (
    <Fragment>
      <Header />
      <Main />
    </Fragment>
  )
}

export default App
