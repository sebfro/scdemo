import styled, {keyframes} from "styled-components";

const Input = () => {
    return (
        <StyledInput $size="2em" placeholder='noe' />
    );
};

export default Input;


const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const StyledInput = styled.input.attrs<{ $size: string }>(props => ({
    type: 'text',
    $size: props.$size || '1em',
}))`
    border: 2px solid #077197;
    border-radius: 3px;
    margin: ${(props) => props.$size};
    padding: ${(props) => props.$size};
    animation: ${rotate} 2s linear infinite;
`;


// const StyledInput2 = styled.input.attrs<{ $size?: string; }>(props => ({
//     // we can define static props
//     type: "text",
//
//     // or we can define dynamic ones
//     $size: props.$size || "1em",
// }))`
//   color: #BF4F74;
//   font-size: 1em;
//   border: 2px solid #BF4F74;
//   border-radius: 3px;
//
//   /* here we use the dynamically computed prop */
//   margin: ${props => props.$size};
//   padding: ${props => props.$size};
// `;
