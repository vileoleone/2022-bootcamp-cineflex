import { Link, useNavigate } from "react-router-dom"
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react"
import axios from "axios";
import styled from "styled-components";
import Chair from "./Chair";
export default function SeatsScreen({ ListSuccess, ListSuccessSet }) {
    const { session } = useParams()
    const [seat, setSeat] = useState({})
    const [selected, selectedSet] = useState([])
    const [chairNumber, chairNumberSet] = useState([])
    let navigate = useNavigate()
    const [form, setForm] = useState({
        ids: [],
        nome: '',
        CPF: ''
    });
    const { seats } = seat

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${session}/seats`)
        promisse.then(resp => {
            setSeat(resp.data);
            ListSuccessSet({
                ...ListSuccess, "hour": resp.data.name
            })
        })

        promisse.catch((erro) => {

            console.log(erro.response.data)
        })
    }, [session])

    function selectChair(status, key, numberOfChair) {
        if (selected.find((i) => i.key === key)) {
            const newArray = selected.filter((i) => i.key !== key)
            selectedSet(newArray)
            const newIdArray = newArray.map((i) => {
                return (
                    i.key
                )
            })
            setForm({ ...form, ids: newIdArray })

            const newChairArray = chairNumber.filter((n) => n !== numberOfChair + 1)
            chairNumberSet(newChairArray)
        }

        if (status === true && selected.find((i) => i.key === key) === undefined) {
            const newArray = [...selected, { "key": key, "selected": true }]
            selectedSet(newArray)
            const pushId = [...form.ids, key]
            setForm({ ...form, ids: pushId })

            const newChairArray = [...chairNumber, numberOfChair + 1]
            chairNumberSet(newChairArray)

        }
    }
    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })

    }

    function reserveButton(event) {
        event.preventDefault();
        ListSuccessSet({
            ...ListSuccess, "buyerName": form.nome, "buyerCPF": form.CPF, "buyerSeats": chairNumber
        })
        
        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many"
        const promisse = axios.post(URL, form)
        promisse.then(() => {
            navigate("/sucesso")
        })
        promisse.catch((resp) => { console.log(resp) })
    }

    if (seats === undefined) {
        return <img src="loading.gif" alt="Requisição errada" />;
    }

    return (
        <Session>
            <h1> Selecione o(s) assentos</h1>
            <Seats>
                {seats.map((chair, i) => {
                    return (
                        <Chair
                            key={i}
                            name={chair.name}
                            status={chair.isAvailable}
                            selectChair={selectChair}
                            selected={selected}
                            index={chair.id}
                            numberOfChair={i}
                        >

                        </Chair>
                    )
                })}
            </Seats>

            <SeatsLegends>
                <ChairLegends color="#1AAE9E"></ChairLegends>
                <ChairLegends color="#C3CFD9"></ChairLegends>
                <ChairLegends color="#FBE192"></ChairLegends>
            </SeatsLegends>
            <SeatsLegends>
                <h1>Selecionado</h1>
                <h1>Disponível</h1>
                <h1>Indisponível</h1>
            </SeatsLegends>

            <Form onSubmit={reserveButton}>
                <Label>
                    <p>Nome do comprador:</p>
                    <Input required type="text" name="nome" placeholder="Digite seu nome..." onChange={handleForm} value={form.nome} />
                </Label>
                <Label>
                    <p>CPF do comprador:</p>
                    <Input required type="text" name="CPF" placeholder="Digite seu CPF..." onChange={handleForm} value={form.CPF} />
                </Label>
            </Form>
            <Link /* to={`/sucesso`} */>
                <SuccessButton type="submit" onClick={reserveButton}>Reservar Assento(s)</SuccessButton>
            </Link>
        </Session >



    )
}

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
`

const Session = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-family: roboto; 
    font-weight: 400;
    text-align: center;
    width: 80%;
    margin-right: 30px;
    margin-left: 30px;

    h1 {
        font-size: 25px;
        margin-bottom: 30px;
    }
`
const Seats = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
`
const SeatsLegends = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    width: 80%;
    margin-bottom: 5px;
    h1 {
        font-size: 15px;
        font-weight: 400;
        color: #4E5A65;
    }
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    width: 100%;
`
const Label = styled.label`
    display: flex;
    font-size: 18px;
    color: #293845 ;
    font-weight: 400;
    flex-direction: column;
    width: 100%;
    p{
    align-self: flex-start;

    }
`
const Input = styled.input`
    width: 100%;
    height: 50px;
    color: #AFAFAF;
    border: #D4D4D4 1px solid;
    border-radius: 3px;
    padding-left: 20px;

`

const ChairLegends = styled.div`
    width: 25px;
    height: 25px;
    background-color: ${props => (props.color)};
    border-radius: 15px;
    border: 1px #808F9D solid;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    margin: 5px;
`