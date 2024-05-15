import { BrowserRouter } from 'react-router-dom';
import { Routes } from '../Routes';

import { AuthProvider } from '../auth/context-ui';
import { ScrollToTop } from '../ui';
import { EnhancedApolloProvider } from '../utils/apollo';

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
