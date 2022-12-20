import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    height: 3.438rem;
    background-color: #fff;
    border: 0;
    margin-bottom: 1.5rem;
    color: black;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 1.5rem;
    font-family: 'Roboto Mono', monospace;

    input {
        width: 100%;
        height: 3.438rem;
        border: .125rem solid #000;
        color: #000;
    
        text-align: right;
        padding: .5rem 1rem;
        border-radius: .5rem;
        color: black;

        font-size: 2rem;
        font-family: 'Roboto Mono', monospace;
    }
`