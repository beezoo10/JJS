import React, {Component} from "react";
import PromptBox from "./PromptBox";
import styles from '../scss/application.scss'

// function App(){
//     return (
//         <h1>i hope this works</h1>
//     )
// }

class App extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <PromptBox />
        </div>
      );
    }
}

export default App;
