import Inferno from 'inferno';

const Organisation = ({ title, content, url }) => {
    return (
        <li>
            <a href={url}>
                <h3>{title}</h3>
                <p>{content}</p>
            </a>
        </li>
    );
}

export default Organisation;