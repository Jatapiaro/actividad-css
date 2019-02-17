import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './components/Wrapper';

/**
 * These two files will be
 * extracted as a separate css file
 */
import 'normalize.css/normalize.css';
import './styles/styles.css';

ReactDOM.render(<Wrapper />, document.getElementById("app"));