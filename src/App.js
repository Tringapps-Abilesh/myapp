import Side from './Side';
import Menu from './Menu';

import './css/App.css'
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Side/>
        <Menu/>
      </Router>
    </div>
    
 
  );
}

export default App;
