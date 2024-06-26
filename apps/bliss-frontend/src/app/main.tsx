import * as ReactDOM from 'react-dom/client';
import 'tachyons';

import { StrictMode } from 'react';

import App from 'src/app';
import './styles.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
