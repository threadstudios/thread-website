import Inferno from 'inferno';
import Organisation from './Organisation';

const Supporting = ({organisations, className}) => {
    return (
        <section className={className}>
            <h2>Proud Sponsors of:</h2>
            <ul>
                {organisations.map((org, i) => {
                    return (<Organisation key={i} {...org} />)
                })}
            </ul>
        </section>
    )
}

export default Supporting;