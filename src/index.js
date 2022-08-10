import _ from 'lodash';
import printMe from './print.js';
import './style.css';

function component() {
   const element = document.createElement('div');
   const btn = document.createElement('button');

   element.innerHTML = _.join(['Hello', 'webpack <br>'], '');

  btn.innerHTML = 'Click  and Check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

   return element;
 }

 document.body.appendChild(component());