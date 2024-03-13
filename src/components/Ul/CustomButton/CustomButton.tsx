import { FC, ReactNode } from "react"
import scss from './CustomButton.module.scss';

const CustomButton: FC<{
  children: ReactNode
}> = ({children}) => {
  return <button className={scss.buttons}>{children}</button>
}

export default CustomButton