import { BrowserRouter } from 'react-router-dom';

import { ScrollToTop } from '@bliss/ui';

import { AuthProvider } from '@bliss/auth/contex-ui';
import { Routes } from './Routes';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AuthProvider>
          <ScrollToTop />
          <Routes />
        </AuthProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
