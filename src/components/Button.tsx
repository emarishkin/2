import {FC, ReactNode } from "react";

interface buttonProops{
    children:ReactNode
    onClick: () => void
}

export const Button:FC<buttonProops> = ({children,onClick}) =>{
    return(
        <button onClick={onClick}>{children}</button>
    )
}