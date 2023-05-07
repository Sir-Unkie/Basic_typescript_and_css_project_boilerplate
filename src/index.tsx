import { createRoot } from 'react-dom/client';

import { App } from '@app';

const rootDiv = document.getElementById('root');

const root = rootDiv && createRoot(rootDiv);
root?.render(<App />);
