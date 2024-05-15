import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from '../auth/context-ui';
import { ScrollToTop } from '../ui';
import { EnhancedApolloProvider } from '../utils/apollo';
import { Routes } from './Routes';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <EnhancedApolloProvider>
          <ScrollToTop />
          <Routes />
        </EnhancedApolloProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
