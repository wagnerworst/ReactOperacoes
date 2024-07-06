import { HTMLAttributes, HTMLInputTypeAttribute, HTMLProps, ReactNode } from "react"
import "./styles.css"

interface InputProps extends React.ComponentProps<'input'>{
    label: string;
    name: string
}

export const Input = ({label, name, onChange}: InputProps) =>{
    return (
        <div className="inputContainer">
            <label htmlFor={name}>{label}</label>
            <input type="Number" name={name} onChange={onChange}/>
        </div>
    )
}