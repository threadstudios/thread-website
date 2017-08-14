import Inferno from 'inferno';
import Client from './Client';

const ClientProjects = ({clients, className}) => {
    return (
        <section className={className}>
            <h2>We've worked with</h2>
            <ul>
                {clients.map((client, i) => {
                    return (<Client key={i} {...client} />)
                })}
            </ul>
        </section>
    )
}

export default ClientProjects;