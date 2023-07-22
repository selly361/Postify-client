import { Form, Posts } from 'components'

import React from 'react'
import { StyledMain } from './Main.styles'
import { useTabContext } from 'Contexts/TabProvider'

function Main() {

  const { tab } = useTabContext()

  return (
    <StyledMain>
      {tab === "Posts" ? <Posts /> : <Form />}
    </StyledMain>
  )
}

export default Main