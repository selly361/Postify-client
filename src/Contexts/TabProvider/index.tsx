import { IProps, ITabContext } from "./TabProvider.types"
import { ReactNode, createContext, useContext, useState } from "react"

export const TabContext = createContext<ITabContext>({
  tab: "Create Post",
  setTab: () => {},
  className: (currTab: string) => ""
})

export function useTabContext() {
  return useContext(TabContext)
}

function TabProvider({ children }: IProps) {
  const [tab, setTab] = useState("Create Post")

  const className = (currTab: string) => (currTab === tab ? "active" : "")

  return (
    <TabContext.Provider
      value={{
        tab,
        setTab,
        className,
      }}
    >
      {children}
    </TabContext.Provider>
  )
}

export default TabProvider
