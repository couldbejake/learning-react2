import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import styled from "@emotion/styled"
import GlobalStyles from '@mui/joy/GlobalStyles';
import { CssVarsProvider } from '@mui/joy/styles';
import customTheme from './theme';
import './App.css';
import StatsViewer from './components/StatsViewer';

import PokemonGallery from './components/PokemonGallery'

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`

const Title = styled.h1`
	text-align: center;
  color: white;
`;

function App() {
  return (
    <CssVarsProvider disableTransitionOnChange theme={customTheme}>
      
      <CssBaseline />
      <AppContainer>
        <Title>Pokemon Search</Title>
        <StatsViewer></StatsViewer>
        <PokemonGallery></PokemonGallery>
      </AppContainer>
      </CssVarsProvider>
  );
}

export default App;
