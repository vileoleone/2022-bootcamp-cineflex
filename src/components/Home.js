import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios";
import styled from "styled-components";

export default function Home({ ListSuccess, ListSuccessSet }) {

    const [movies, setMovies] = useState(null)
    useEffect(() => {
        const promisse = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")

        promisse.then(resp => {
            setMovies(resp.data)
            ListSuccessSet({})
        })

        promisse.catch((erro) => {

            console.log(erro.response.data)
        })


    }, [])

    if (movies === null) {
        return <img src="loading.gif" alt="Requisição errada" />;
    }


    return (
        <Main>
            <p> Selecione o Filme</p>
            <Movies>
                {movies.map((movie, i) => {
                    return (
                        <Link to={`/filme/${movie.id}`}>
                            <Movie
                                data-identifier="movie-outdoor"
                                key={i}
                                onClick={() => { ListSuccessSet({...ListSuccess, "movie": movie.posterURL, "name":movie.title}) } }
                            >
                                <img src={movie.posterURL} alt={movie.title} ></img>

                            </Movie>
                        </Link>
                    )
                })}
            </Movies>
        </Main>
    )
}

const Main = styled.main` 
    align-itens:center;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
        align-self: center;
        font-size: 25px;
    }
`

const Movies = styled.div` 
    align-itens:center;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    border: 2px solid green;
    justify-content: center;
`

const Movie = styled.div` 
    display: flex;
    flex-direction: row;
    width: 130px;
    height: 190px;
    margin: 40px;
    border: 10px solid white;
    box-shadow:  2px 2px 10px 2px gray;
`