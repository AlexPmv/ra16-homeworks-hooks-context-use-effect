import './App.css';
import { useState } from 'react';
import List from './components/List';
import Details from './components/Details';

function App() {

  const [info, setInfo] = useState({id: null, name: null});
  const [isUserLoading, setUserLoading] = useState(false);

  return (
    <div className="App" onClick={(e) => {
     if (e.target.className === 'user-item') {
      setInfo({id: e.target.id, name: e.target.textContent})
     } 
    }}>
      <List />
      {isUserLoading && <p>Loading...</p>}
      <Details info={info} loading={setUserLoading}/>
    </div>
  );
}

export default App;
