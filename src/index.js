import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Router, browserHistory} from 'react-router';
import routes from './routes';

import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';


const history = browserHistory;

ReactDOM.render(
  <React.StrictMode>
     <MuiPickersUtilsProvider utils={DateFnsUtils}>
         <Router history={history} routes={routes} />
     </MuiPickersUtilsProvider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <MuiPickersUtilsProvider utils={DateFnsUtils}>
//       <Router history={history} routes={routes} />
//   </MuiPickersUtilsProvider>,
//   document.getElementById('root')
// );



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
