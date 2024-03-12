import { FC } from 'react';
import scss from './Input.module.scss';
const Input: FC<{
  value: string;
  type: string;
  setData: (value: string) => void;
  placeholder: string;
}> = ({value, type, setData, placeholder}) => {
  return <input type={type} placeholder={placeholder} value={value} onChange={(e) => setData(e.target.value)}/>
}

export default Input