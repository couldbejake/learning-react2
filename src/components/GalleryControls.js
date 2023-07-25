import store from "../store";
import { observer } from "mobx-react"
import * as React from 'react';
import Button from '@mui/joy/Button';
import styled from "@emotion/styled"


const NavBar = styled.div`
    display: flex;
    flex-direction: row;
`

const NavButton = styled.button`
    display: inline-flex;
    font-size: 14px;
    background: #ffffff;
    margin: 10px;
    width: 50px;
    height: 50px;
    place-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    border: none;
    margin-top: 50px;

    &:disabled {
        background-color: gray !important;
        cursor: not-allowed;
    }
    &:hover {
        background-color: rgba(200, 200, 200);
    }
`

const GalleryControls = ({nextPage, prevPage, canNext, canPrev}) => {

    return (
        <NavBar>
            <NavButton onClick={() => prevPage()} disabled={!canPrev}> <i className="fa-solid fa-chevron-left"></i></NavButton>
            <NavButton onClick={() => nextPage()} disabled={!canNext}> <i className="fa-solid fa-chevron-right"></i> </NavButton>
        </NavBar>
    )
}

export default observer(GalleryControls);
