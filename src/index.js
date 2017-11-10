import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import Routes from './Routes';

import * as firebase from 'firebase';

window.FirebaseInitialized = firebase.initializeApp({
  apiKey: 'AIzaSyBV8ZBplNi1n9os3Z7Sv_fXmjjBjZHCHCM',
  authDomain: 'cyf-events.firebaseapp.com',
  databaseURL: 'https://cyf-events.firebaseio.com',
  storageBucket: 'cyf-events.appspot.com'
});

let stripe = document.createElement('script');
stripe.setAttribute('src', 'https://checkout.stripe.com/checkout.js');
stripe.setAttribute('async', true);
document.head.appendChild(stripe);

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
