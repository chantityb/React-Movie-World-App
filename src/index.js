import React from 'react';
import {createRoot} from 'react-dom/client';

import App from './App';

createRoot(document.getElementById('root')).render(<App />); //createRoot is a new API that allows us to render the app without a root div

//this is the old way of rendering the app
// createRoot.render(<App />, document.getElementById('root')); 