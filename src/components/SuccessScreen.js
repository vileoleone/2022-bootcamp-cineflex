import { Navigate, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "./footer";
export default function Sucess({ ListSuccess, ListSuccessSet }) {
    const navigate= useNavigate()
    function navigateToHome() {
        navigate("/")
    }
    return (
        <FooterContainer>
            <Text>
                <h1>Pedido feito com sucesso</h1>
            </Text>
            <Section data-identifier="movie-session-infos-reserve-finished">
                <h2>Filme e sessão</h2>
                <p>{ListSuccess.name} <br /></p>
                <p> {ListSuccess.date} {ListSuccess.hour}</p>
            </Section>
            <Section>
                <h2>Ingressos</h2>
                {ListSuccess.buyerSeats.map((seats) => {
                    return (
                        <p>Assento {seats} </p>
                    )
                })}
            </Section>
            <Section data-identifier="buyer-infos-reserve-finished">
                <h2>Comprador</h2>
                <p>Nome: {ListSuccess.buyerName}</p>
                <p> CPF: {ListSuccess.buyerCPF}</p>
            </Section>
            <SuccessButton data-identifier="back-to-home-btn" type="submit" onClick={()=> {navigateToHome()}}>Voltar para Home</SuccessButton>
        </FooterContainer>
    )

}

const Text = styled.div`
 width: 100%;
 height: 110px;
 text-align: center;
 color: #247A6B;
 font-size: 22px;
 margin-bottom: 50px;
 font-family: roboto;
`

const Section = styled.section`
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 25px;
        font-weight: 700;
        color: #293845;
        margin-bottom:10px;
        font-family: roboto;
        text-align: justify;
    }
    p {
        font-size: 20px;
        font-weight: 400;
        color: #293845;
        margin-bottom: 1px;
        margin-top: 10px;
        font-family: roboto;
        text-align: justify;
    }
`

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const SuccessButton = styled.button`
margin-top: 50px;
margin-bottom: 30px;
background-color: #E8833A;
width: 200px;
height: 40px;
color: #FFFFFF;
Font-size: 18px;
fint-weight: 400px;
border-radius: 3px;
border: none;
align-self: center;
`