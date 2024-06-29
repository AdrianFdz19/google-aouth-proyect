import {createRoot} from 'react-dom/client';
import App from './src/app';
import {BrowserRouter as Router} from 'react-router-dom'

const root = createRoot(document.getElementById('app'));

root.render(
    <Router>
        <App />
    </Router>
)