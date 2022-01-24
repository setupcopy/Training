import React from 'react';
import {Settings} from './pages/settings'
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
      <Settings />
    </SnackbarProvider>
  );
}

export default App;
