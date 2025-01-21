import { useState } from 'react'
import About from './Components/About';
import Content from './Components/Content';
import List from './Components/List';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-darkGrey min-h-screen flex">
      <About/>
      <Content/>
      <List/>
    </div>
  );
}

export default App
