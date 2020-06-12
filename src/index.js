import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import './styles/styles.scss';
import ReactGA from 'react-ga';


ReactGA.initialize('UA-169201015-1', {
    debug: true,
    titleCase: false,
    siteSpeedSampleRate: 100,
});
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);


