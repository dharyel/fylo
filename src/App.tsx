import React from 'react';
import {Home} from './pages/Home';
import { ThemeProvider } from 'styled-components';
import { Themes } from './themes';

function App() {
  return (
    <>
      <ThemeProvider theme={Themes.darkTheme}>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
