import store from "../store";
import { observer } from "mobx-react"
import * as React from 'react';
import Button from '@mui/joy/Button';
import styled from "@emotion/styled"


import Typography from '@mui/joy/Typography';






const GalleryControls = ({nextPage, prevPage, canNext, canPrev}) => {

    return (
        <>
            <Button variant="solid" color="primary" onClick={() => prevPage()} disabled={canPrev ? "" : "true"}> </Button>
            <Button variant="solid" color="primary" onClick={() => nextPage()} disabled={canNext ? "" : "true"}> Next Page </Button>
        </>
    )
}

export default observer(GalleryControls);