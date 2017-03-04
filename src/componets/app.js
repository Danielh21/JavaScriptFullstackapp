import React from 'react';
import Header from './header'
import ContestPreview from './contestPreview'
import axios from 'axios'

class App extends React.Component {
    state = {
        pageHeader: "From header!",
        cosntests: []
    };

        componentDidMount(){
            axios.get('/api/contest')
            .then(resp =>{
                this.setState({
                    cosntests : resp.data.contests
                })
            })
            .catch(console.error)
            
    
        }
        componetWillUnmount(){
            // Clean Timers listernes
        }
    
    render(){
        return(
             <div className="App">
           <Header message = {this.state.pageHeader} />
            <div>
                {this.state.cosntests.map(contest =>
                    <ContestPreview key={contest.id} {... contest} />
                )}
            </div>

        </div>

        );
    }
}

export default App;