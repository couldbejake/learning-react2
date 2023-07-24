import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import styled from "@emotion/styled"
import GlobalStyles from '@mui/joy/GlobalStyles';
import { CssVarsProvider } from '@mui/joy/styles';
import customTheme from './theme';
import './App.css';

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
      <GlobalStyles
        styles={{
          '[data-feather], .feather': {
            color: 'var(--Icon-color)',
            margin: 'var(--Icon-margin)',
            fontSize: 'var(--Icon-fontSize, 20px)',
            width: '1em',
            height: '1em',
          },
        }}
      />
      <CssBaseline />
      <AppContainer>
        <Title>Pokemon Search</Title>
        <PokemonGallery></PokemonGallery>
      </AppContainer>
      </CssVarsProvider>
  );
}

export default App;
