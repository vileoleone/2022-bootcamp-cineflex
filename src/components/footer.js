import styled from "styled-components"
export default function Footer({ ListSuccess }) {

    if (Object.keys(ListSuccess).length !== 0) {
        return (

            <Footerdiv data-identifier="movie-and-session-infos-preview">
                <img data-identifier="movie-img-preview" src={ListSuccess.movie} alt="" />
                <p>{ListSuccess.name} <br /> {ListSuccess.hour}</p>
            </Footerdiv>

        )
    }

    else {
        return (
            <Footerdiv></Footerdiv>
        )
    }
    
}

const Footerdiv = styled.div`
    width: 100vw;
    background-color: #DFE6ED;
    height: 90px;
    padding: 20px;
    display: flex;
    align-items: center;
    margin-top: 20px;
    flex-wrap: wrap;
    text-align: left;
    

    img {
        width: 57px;
        height:80px;
        border: 10px solid white;
        box-shadow:  2px 2px 10px 2px gray;
    }
    p{
        font-size: 25px;
        font-weight: 40px;
        color: #293845;
        margin-left: 20px;
    }
`

