import Inferno from 'inferno';
import { toDangerousHTML } from '../../helper/markdown';

const Service = ({content, title}) => {
    return (
        <li>
            <div>
            <h3>{title}</h3>
            <div dangerouslySetInnerHTML={toDangerousHTML(content)}></div>
            </div>
        </li>
    );
}

export default Service;