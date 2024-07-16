import './App.css';
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={
          <Provider store={store}>
            <Login/>
          </Provider>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
