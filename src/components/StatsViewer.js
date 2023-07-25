import styled from "@emotion/styled";
import { observer } from "mobx-react";
import store from "../store";

const ViewerContainers = styled.div`
    width: 100%;
    min-height: 200px;
    padding: 10px;
    display: flex;
    margin-bottom: 50px;
    text-align: center;
`;

const ViewerStats = styled.div`
    border: 1px dotted white;
    min-height: 100%; /* Make the minimum height equal to the parent's height */
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    place-items: center;
    justify-content: center;
`

const StatsViewer = () => {

    let selectedPokemon = store.selected;

    console.log(selectedPokemon)

    let statsView = (selectedPokemon) ? (

        <>
            { /* I got lazy towards the end and just added everything in native HTML */ }

            <h2 style={{color: "white", margin: "0px"}}>
                {selectedPokemon.name.english},
                <small> {selectedPokemon.name.japanese}</small>, 
                <small> {selectedPokemon.name.chinese}</small>, 
                <small> {selectedPokemon.name.french}</small>
            </h2>
            <p style={{color: "white", margin: "0px", marginTop:"-10px"}}>{selectedPokemon.type.join(", ")}</p>
            <table style={{marginTop:"10px"}}>
                <tbody>
                    {
                        Object.keys(selectedPokemon.base).map(key => (
                                <tr>
                                    <td style={{width: "100px"}}>{key}</td>
                                    <td style={{width: "100px"}}>{selectedPokemon.base[key]}</td>
                                </tr>
                            )
                        )
                    }

                </tbody>
            </table>
        </>


    ) : ( <p style={{color: "white", margin: "0px"}}>No Pokemon Selected</p>)

    return (
        <ViewerContainers>
            <ViewerStats>
                {statsView}
            </ViewerStats>
        </ViewerContainers>
    );
}

export default observer(StatsViewer);