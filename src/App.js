import './App.css';
import Cart from './Components/Cart';
import { Provider } from 'react-redux';
import store from './Redux/Store';

function App() {
  return (
    <Provider store={store}>
   <div>
     <Cart/>
   </div>
    </Provider>
  );
}

export default App;
