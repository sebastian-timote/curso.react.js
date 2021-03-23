//ejecutar serivdor de webpack con npx webpack serve
import React from 'react';
import {render} from 'react-dom';

import "./assets/style.css";
import App from './components/app/index';


render(<App />, document.getElementById('root'))