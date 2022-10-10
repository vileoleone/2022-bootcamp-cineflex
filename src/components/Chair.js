import styled from "styled-components"

export default function Chair(props) {
    const { name, status, selectChair, index, selected, numberOfChair } = props
    
    function whatisStatus(chairStatus, index) {
        if (selected.find((i)=> i.key===index)) {
            return "#1AAE9E"
        }

        else {
            if (chairStatus) { return "#C3CFD9" }
            else { return "#FBE192" }
        }
    }

    return (
        <Chairdiv data-identifier="seat" color={whatisStatus(status, index)} onClick={() => selectChair(status, index, numberOfChair)}>
            {name}
        </Chairdiv>
    )
}

const Chairdiv = styled.div`
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