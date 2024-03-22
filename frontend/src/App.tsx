import React from 'react'; 
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Login from './component/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
