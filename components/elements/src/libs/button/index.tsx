import { Button, ButtonProps } from "react-bootstrap"

interface IButton extends ButtonProps {
    busy: boolean
}

const ESButton = (props: IButton) => {
    return (
        <Button {...props}>Primary</Button>
    )
}

ESButton.defaultProps = {
    busy: false,
    variant: "primary"
}

export { ESButton }