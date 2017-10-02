import { h, render, Component } from 'preact';

import s from './base.css';
const data = require('../data/data.json');

export default class Base extends Component {

  render(props, state) {
    return(
      <div className={s.container}>
        <div className="cont_circulos">
          <img src="https://c1.staticflickr.com/5/4481/37461102331_5a98d0df7f_b.jpg" />

          <a href="http://lasillavacia.com/node/62840" target="_blank">
            <div className="personaje uno">
              <div className="punto color"><span className="ancho">Norte de Santander</span></div>
            </div>
          </a>

          <a href="http://lasillavacia.com/node/62838" target="_blank">
            <div className="personaje dos">
              <div className="punto color"><span>Quindío</span></div>
            </div>
          </a>

          <a href="http://lasillavacia.com/node/62839" target="_blank">
            <div className="personaje tres">
              <div className="punto color"><span>Nariño</span></div>
            </div>
          </a>


        </div>
      </div>
    )
  }
}
