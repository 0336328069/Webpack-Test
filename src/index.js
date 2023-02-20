import _ from 'lodash';
import '../src/main.css';
import Icon from '../src/assets/icon.png';
import Data from '../src/assets/data.json';

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    const iconPng = new Image();
    iconPng.src = Icon;

    element.appendChild(iconPng);

    return element;
  }

document.body.appendChild(component());

console.log(Data);