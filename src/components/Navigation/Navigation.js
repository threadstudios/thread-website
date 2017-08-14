import Inferno from 'inferno';
import NavigationItem from './NavigationItem';

const Navigation = ({links}) => {
    
    return (
        <nav>
            <svg width="141px" height="160px" viewBox="0 0 141 160" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <path className="logo__path" id="Path" stroke="#FFFFFF" strokeWidth="6" d="M3 156.138329 97 156.138329 97 144 50.7770929 144 50.7770929 132 96.698713 132 96.698713 120 50.6379597 120 50.6379597 108 96.3074167 108 96.3074167 96 49.9424789 96 49.9424789 84 96.3226127 84 96.3226127 72 50.7355592 72 50.7355592 60 96.6476703 60 96.6476703 48 3 48 3 36 138 36 138 24 3 24 3 12 138 12 138 0">
                    </path>
                </g>
            </svg>
            <h1>Thread <span>Studios</span></h1>
            <ul>
                {links.map((link, i) => {
                    return <li key={i}><NavigationItem {...link} /></li>
                })}
            </ul>
        </nav>
    )
}

export default Navigation;