
import styled from "@emotion/styled"
import store from "../store"
import GalleryItem from "./GalleryItem"
import { observer } from "mobx-react"
import GalleryControls from "./GalleryControls";
import React from "react";

const GalleryContainer = styled.div`
	display: grid;
    grid-template-columns: repeat(5, 1fr);
    overflow: hidden;
`


const Centered = styled.div`
    display: flex;
    place-items: center;
    justify-content: center;
    flex-direction: column;
`

const PageLegend = styled.p`
    color: #9c9ca4;
    font-size: 12px;
    font-weight: 100;
`

const PokemonGallery = () => {
    const [offset, setOffset] = React.useState(0);
    const PAGE_LIMIT = 20;

    //$currentPage = ceil( ($startIndex - 1) / $itemsPerPage ) + 1;
    var current_page = Math.ceil((offset - 1) / PAGE_LIMIT ) + 1;
    var page_count = Math.ceil(store.pokemon.length / PAGE_LIMIT);

    const nextPage = () => { setOffset(offset + PAGE_LIMIT) }
    const prevPage = () => { setOffset(offset - PAGE_LIMIT) }

    const canNext = current_page < page_count 
    const canPrev = current_page > 1

    console.log(canPrev)


    
    return (
        <>
            <GalleryContainer>
                {
                    store.pokemon.slice(offset, offset + PAGE_LIMIT).map(pokemon => (
                        <GalleryItem pokemon={pokemon} key={pokemon.id}></GalleryItem>
                    ))
                }
            </GalleryContainer>
            <Centered>
                <GalleryControls nextPage={nextPage} prevPage={prevPage} canNext={canNext} canPrev={canPrev}></GalleryControls>
                <PageLegend>Page {current_page} out of {page_count}</PageLegend>
            </Centered>
        </>

    )
}

export default observer(PokemonGallery);