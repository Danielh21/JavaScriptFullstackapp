import React from 'react';
import Header from './header'


class App extends React.Component {
    state = {
        pageHeader: "From header!"};

        componentDidMount(){
            console.log("hrg");
            debugger;
        }
        componentWillUnmount(){
            console.log("Will unmount");
            debugger;
        }
    
    render(){
        return(
             <div className="App">
           <Header message = {this.state.pageHeader} />
            <div>
            ...
            </div>
        </div>

        );
    }
}

export default App;