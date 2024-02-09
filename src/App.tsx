import './App.css'
import Button from "./components/Button.tsx";
import Input from "./components/Input.tsx";
import styled from "styled-components";

function App() {

    return (
        <Container>
            <Input/>
            <Button/>
        </Container>
    )
}

export default App

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 4rem;
    `;