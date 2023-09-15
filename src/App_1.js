import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.handlePClick = this.handlePClick.bind(this);
    this.state = {
      name: 'Gaspar Amaral',
      counter: 0
    };
  }

  handlePClick() { // faltou o binding, neste caso precisa ser manual
    this.setState({name: `React`});
  }

  handleAClick = (event) => { // não usa this, puxa o this do elemento pai
    // com exceção dos life cycles methods
    event.preventDefault();
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  render () {
    // const name = this.state.name;
    const {name, counter} = this.state; // most used, but is the same of before

      return (   
            <div className="App">
              <h1>Hello World</h1>
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p onClick={this.handlePClick}>
                  {name} {counter}
                </p>
                <a
                  onClick={this.handleAClick}
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Here goes the link
                </a>
              </header>
            </div>
      )
    }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
