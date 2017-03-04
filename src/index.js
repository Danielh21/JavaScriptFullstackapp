import React from 'react';
import ReactDOM from 'react-dom';
import App from './componets/app'

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


setTimeout(()=>{
ReactDOM.render(
    <h2> Hey Hey </h2>,
    document.getElementById('root')
        );
}, 4000)