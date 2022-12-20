import { TitleContainer } from "./styles";

const Title = ({label}) => {
    return (
        <TitleContainer>
            <h1>{label}</h1>
        </TitleContainer>
    )
}

export default Title;