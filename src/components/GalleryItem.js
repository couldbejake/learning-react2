import styled from "@emotion/styled"
import { observer } from "mobx-react"

const StyledH1 = styled.h1`
    transition: all 0.3s ease; // Smooth transition
    cursor: pointer;
    &:hover {
        color: white; // Change color to red on hover
        transform: translateX(10px); // Move 10px to the right on hover
    }
`;

const GalleryItem = ({pokemon}) => {
    return (
        <StyledH1>{pokemon.name.english}</StyledH1>
    )
}

export default observer(GalleryItem);