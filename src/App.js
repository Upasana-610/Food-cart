
import { Fragment } from 'react/cjs/react.production.min';
import './App.css';
import CartDropdown from './Components/CartDropdown';
import MyCart from './Components/MyCart';
import Mycartcontainer from './Components/Mycartcontainer';
import Navbar from './Components/Navbar';


function App() {
  return (
    <Fragment>
    <Navbar/>
      <div className="container">
    <Mycartcontainer/>
    </div>
    
    </Fragment>
      );
}

export default App;
