import Inferno from 'inferno';
import Service from './Service';

const Services = ({services, className}) => {
    return (
        <section className={className}>
            <h2>Services</h2>
            <ul>
                {services.map((service, i) => {
                    return (<Service key={i} {...service} />)
                })}
            </ul>
        </section>
    );
}

export default Services;