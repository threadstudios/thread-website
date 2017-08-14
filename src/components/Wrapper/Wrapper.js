import Inferno from 'inferno';
import createElement from 'inferno-create-element';

const Wrapper = ({components}) => {
    return (
        <div>
            {components.map((comp) => {
                const component = require(`../${comp.type}/${comp.type}`);
                const props = Object.assign({}, comp.content, { className: comp.className });
                return createElement(component, props);
            })}
        </div>
    )
}

export default Wrapper;