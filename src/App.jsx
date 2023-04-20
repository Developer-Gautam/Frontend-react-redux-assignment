import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import Main from './components/Main';
import ProductView from './components/ProductView';
import ProductEdit from './components/ProductEdit';
import './App.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route exact path="/product" element={<ProductView/>} />
          <Route exact path="/product/edit" element={<ProductEdit/>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
