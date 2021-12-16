import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import { Provider } from 'react-redux'
//import { createStore } from 'redux'


//---------------------------------------------------------------
// FAZ O IMPORT DO JAVASCRIPT, MUDAR O DIRETÓRIO DO ARQUIVO ./APP
import App from './Scripts/PráticasAvançadasComJS/Aula 11 - Smart Components/Aula 11'
//---------------------------------------------------------------

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


/*
import reducer from './Scripts//Aula8 - Redux/Reducers.js'
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
ReactDOM.render(<Provider store={store}>
  <App/>
</Provider>, document.getElementById('root'))
*/
