import React from 'react';
import {MyFirstComponent} from './components/myfirstcomponent/MyFirstComponent.js';
import {Routing} from './routes/Routing';

function App() {
  return (
    <Routing>
      <h1>React tutorial</h1>
      < MyFirstComponent name="blablabla" age="46" />
    </Routing>
  );
}

export default App;
