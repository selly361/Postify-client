import { Fragment, ReactNode } from 'react'

import AppProvider from 'Contexts/AppProvider'
import TabProvider from 'Contexts/TabProvider'

function Wrapper({ children }: { children: ReactNode }) {
  return (
    <Fragment>
        <AppProvider>
            <TabProvider>
                {children}
            </TabProvider>
        </AppProvider>
    </Fragment>
  )
}

export default Wrapper