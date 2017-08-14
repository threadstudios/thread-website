import Inferno from 'inferno';
import App from './App';

export default () => {
    return <App {...window.__PAGE__} />
}