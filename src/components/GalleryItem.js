import styled from "@emotion/styled"
import { observer } from "mobx-react"
import store from "../store";

const PokemonItem = styled.button`
    transition: all 0.3s ease; // Smooth transition
    cursor: pointer;
    color: #7c7c8c;
    text-align: center;
    margin: 5px;
    background: none;
    border: none;
    font-size: 15px;
    &:hover {
        color: white; // Change color to red on hover
        transform: translateX(10px); // Move 10px to the right on hover
    }
`;

const selectPokemon = (pokemon) => {
    store.setSelected(pokemon)
}

const GalleryItem = ({pokemon}) => {
    return (
        <PokemonItem onClick={() => selectPokemon(pokemon)}>{pokemon.name.english}</PokemonItem>
    )
}

export default observer(GalleryItem);