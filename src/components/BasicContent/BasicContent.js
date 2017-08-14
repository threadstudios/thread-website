import Inferno from 'inferno';
import { toDangerousHTML } from '../../helper/markdown';

const BasicContent = ({className, content}) => {
    return (
        <div className={className} dangerouslySetInnerHTML={toDangerousHTML(content)} />
    ) 
}

export default BasicContent;