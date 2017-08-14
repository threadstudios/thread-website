import Inferno from 'inferno';
import Component from 'inferno-component';
import Wrapper from './components/Wrapper';

class App extends Component {
    render() {
        return (
            <section id="app">
                <Wrapper components={this.props.components} />
            </section>
        );
    }
}

export default App;