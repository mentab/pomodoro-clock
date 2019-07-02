import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PomodoroClock from './components/PomodoroClock';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<PomodoroClock />, document.getElementById('root'));

serviceWorker.unregister();
