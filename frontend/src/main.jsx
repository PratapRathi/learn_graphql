import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GridBackground from './components/ui/GridBackground.jsx';

createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<GridBackground>
				<App />
			</GridBackground>
		</BrowserRouter>
	</React.StrictMode>
);
