import React from 'react';
import Favicon from 'react-favicon';

const favicon = require('./favicon.ico');

const App = () => (
    <div>
        <Favicon url={favicon}/>
        <span>App</span>
    </div>
);

export default App;
