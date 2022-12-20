import { ButtonContainer } from "./styles";

const Button = ({label, onClick, keyPress}) => {
    return (
        <ButtonContainer onClick={onClick} onKeyPress={keyPress} type="button">
            {label}
        </ButtonContainer>
    )
}

export default Button;