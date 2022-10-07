import styled from "styled-components";
export default function header() {
    return (
        <Header>CINEFLEX</Header>
    )
}

const Header = styled.div`
    background-color: #C3CFD9;
    width: 100%;
    height: 70px;
    color: #E8833A;
    font-family: Roboto;
    font-size: 35px;
    text-align: center;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`