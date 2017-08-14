import Inferno from 'inferno';

const Footer = ({email, telephone}) => {
    return (
        <footer>
            <div className="container">
            <a href={`mailto:${email}`}>E-mail</a> or <a href={`tel:${telephone}`}>Call {telephone}</a>
            <p>Copyright 2017 Thread Web Studios <sup>Ltd</sup></p>
            </div>
        </footer>
    );
}
export default Footer;