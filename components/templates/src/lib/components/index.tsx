import React from "react"

interface Props {
    title: String,
    children: any
}

const ESComponents = (props: Props) => {
    return (
        <>
            <h1>{props.title}</h1>
            <div>
                {props.children}
            </div>
        </>
    )
}

ESComponents.defaultProps = {
    title: "Component Title"
}

export { ESComponents }