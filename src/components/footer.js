import styled from "styled-components"
export default function Footer({ ListSuccess }) {

    if (Object.keys(ListSuccess).length !== 0) {
        return (

            <Footerdiv>
                <img src={ListSuccess.movie} alt="" />
                <p>{ListSuccess.name} <br /> {ListSuccess.hour}</p>
                <p>

                </p>
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
    tect-align: left;


    img {
        width: 57px;
        height:90px;
    }
    p{
        font-size: 25px;
        font-weight: 40px;
        color: #293845;
        margin-left: 20px;
    }
`

