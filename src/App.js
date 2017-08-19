import React from 'react';
import HelloWorld from './HelloWorld';

const App = () => {
  return (
    <div className="App">
     <HelloWorld />
     <HelloWorld name="Sally"/>
    </div>
    );
};

export default App;
