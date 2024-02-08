import styled, {css} from "styled-components";

const Button = () => {
    return (
        <>
        <StyledButton
            props={{
                border: 'none',
                color: 'white',
                backgroundColor: 'black',
            }}
        >Trykk på meg
        </StyledButton>
        <StyledButton2
            as='a'
            props={{
                border: 'none',
                color: 'white',
                backgroundColor: 'black',
            }}
        >Trykk på meg
        </StyledButton2>
        </>

    );
};

export default Button;

interface StyledButtonProps {
    color: string;
    border?: string;
    backgroundColor?: string;
    union?: 'one' | 'two' | 'three';
}

const TextStyles = {
    knapp: css`
        font-weight: bold;
        font-size: 1.5rem;
        line-height: 2rem;
        color: red;
    `,
    heading: (color: string) => css`
        font-weight: bold;
        font-size: 2.5rem;
        line-height: 3rem;
        color: ${color};
    `,
}

const StyledButton = styled.button<{ props: StyledButtonProps }>`
    color: ${({props}) => props.color};
    ${({props}) => props.border ? `border: ${props.border};` : 'border: 1px solid black;'}
    ${({props}) => props.backgroundColor &&
            css`
                background-color: ${props.backgroundColor};
            `}
    ${({props}) => {
        switch (props.union) {
            case 'one':
                return TextStyles.knapp;
            case 'two':
                return TextStyles.heading('green');
            case 'three':
                return TextStyles.heading('blue');
            default:
                return TextStyles.knapp;
        }
    }}
    ${TextStyles.heading('blue')};
`;

const StyledButton2 = styled(StyledButton)`
    color: pink;
    height: 5rem;
    width: 100%;
`;

//const Kos = styled.div`
//    background-color: #535bf2;
//`