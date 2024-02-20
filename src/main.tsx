import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { CookiesProvider } from 'react-cookie';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <CookiesProvider>
        <App />
        <Toaster />
    </CookiesProvider>
);
