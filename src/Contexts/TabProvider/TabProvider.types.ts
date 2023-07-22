import { ReactNode } from "react"

interface ITabContext {
  tab: string
  setTab: React.Dispatch<React.SetStateAction<string>>
  className: (currTab: string) => boolean
}

interface IProps {
    children: ReactNode
}

export type { ITabContext, IProps }