// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// import styles from './app.module.css';

// import NxWelcome from './nx-welcome';

// export function App() {
//   return (
//     <div>
//       <NxWelcome title="bliss-frontend" />
//     </div>
//   );
// }

// export default App;

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
