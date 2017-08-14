import Inferno from 'inferno';

const NavigationItem = ({href, title, content}) => {
    return <a href={href} title={title}>{content}</a>;
}

export default NavigationItem;