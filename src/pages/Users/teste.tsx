import React from "react"

type UserName = {
    name: string,
    name2: number
}

export const Teste = ({name, name2}: UserName) => {
    return (
        <>
            <div>{name}</div>
            <div>{name2}</div>
        </>
    )
}