import { ReactNode } from "react"
import "./styles.css"

interface ButtonProps extends React.ComponentProps<'button'>{
    children ?: ReactNode
}

export const Button = ({children, onClick}: ButtonProps) => {
    return <button className="buttonOperators" onClick={onClick}>{children}</button>;
};