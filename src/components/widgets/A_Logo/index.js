import React, { Component } from 'react';
import * as T from "prop-types";
import M_Ripple from 'M_Ripple'
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_Logo')
import history from 'history'

class A_Logo extends Component {

  render() {
    const {theme, size} = this.props
    const color = theme === 'dark' ? '#253039' : '#fff'
    return (
      <M_Ripple onClick={() => history.push('/')} type="flex">
        <div className={cn('root', {size})}>
          <div className={cn('image', {size})} >
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
               viewBox="0 0 1366 450" style={{enableBackground: "new 0 0 1366 450", verticalAlign: 'top'}}>
            <g>
              <path fill={color} d="M771.4,142.8c-44.3,0-80.3,36-80.3,80.3s36,80.3,80.3,80.3c22.3,0,42.6-9.3,57.2-24v24h23.1v-80.3
                C851.7,178.8,815.5,142.8,771.4,142.8z M771.4,280.3c-31.6,0-57.2-25.6-57.2-57.2s25.6-57.2,57.2-57.2c31.6,0,57.2,25.6,57.2,57.2
                S803,280.3,771.4,280.3z"/>
              <path fill={color} d="M251.9,230.7c0-55.3-32.7-87.9-81.3-87.9c-24.5,0-40.7,9.9-56.7,26.1V97.7H88.5v57.8v147.7H114v-44.6v-6v-28.9
                c0-30.5,24.5-55.6,56.7-55.6c34.9,0,55.8,28.6,55.8,63.5v71.5h25.5L251.9,230.7L251.9,230.7z"/>
              <polyline fill={color} points="878.9,303.4 902.4,303.4 902.4,183.5 1027.2,303.4 1051.1,303.4 1051.1,293.8 1051.1,150.8 
                1027.7,150.8 1027.7,271.2 902.4,150.8 878.7,150.8 	"/>
              <rect x="1078.5" y="151.1" fill={color} width="23.7" height="152.3"/>
              <path fill={color} d="M1209.7,142.8c-44.3,0-80.3,36-80.3,80.3s36,80.3,80.3,80.3c22.3,0,42.6-9.3,57.2-24v75h23.1V223.1
                C1290,178.8,1254,142.8,1209.7,142.8z M1209.7,280.3c-31.6,0-57.2-25.6-57.2-57.2s25.6-57.2,57.2-57.2s57.2,25.6,57.2,57.2
                C1266.9,254.7,1241.3,280.3,1209.7,280.3z"/>
              <path fill={color} d="M415.6,150.7v63.8c0,34.9-20.6,63.2-55.3,63.2c-34.9,0-55.3-28.4-55.3-63.2v-63.8h-25.5v63.8
                c0,48.9,31.9,88.6,80.8,88.6s80.8-39.8,80.8-88.6v-63.8H415.6z"/>
              <polygon fill={color} points="629.5,150.8 566.1,202.4 502.6,150.8 468.4,150.8 468.4,303.4 491.8,303.4 491.8,173.6 554.3,224.4 
                554.3,303.4 566.1,303.4 577.7,303.4 577.7,224.4 640.3,173.6 640.3,303.4 663.7,303.4 663.7,150.8 	"/>
            </g>
            </svg>

            {/*<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 131 32" style={{verticalAlign: 'top'}}>*/}
              {/*<path fill={color} stroke={color} fillRule="evenodd" strokeWidth=".5" d="M106.271 24.343V8.283h2.621v16.06h-2.62zM72.732 6.614c5.037 0 9.134 4.206 9.134 9.375v8.03h-2.622v-1.464c-1.657 1.733-3.964 2.81-6.512 2.81-5.035 0-9.132-4.206-9.132-9.376 0-5.169 4.097-9.375 9.132-9.375zm0 16.06c3.591 0 6.512-2.999 6.512-6.685 0-3.685-2.92-6.684-6.512-6.684-3.59 0-6.511 2.999-6.511 6.684 0 3.686 2.921 6.686 6.511 6.686zm-35.06-7.647V8.284h2.62v6.743c0 5.17-4.096 9.376-9.131 9.376-5.037 0-9.134-4.206-9.134-9.376V8.284h2.621v6.743c0 3.686 2.922 6.685 6.513 6.685 3.59 0 6.51-2.999 6.51-6.685zm14.682-.616l5.889-6.127h2.703v16.119h-2.415V11.362l-5.233 5.34v7.701h-2.416v-7.701l-5.235-5.34v13.041h-2.415V8.284h3.233l5.89 6.127zm77.645 1.6H130c0 .059-.003.118-.005.178H130V31h-2.622v-8.425c-1.657 1.733-3.964 2.81-6.511 2.81-5.036 0-9.133-4.206-9.133-9.375v-.02c0-5.17 4.097-9.375 9.133-9.375 5.036 0 9.133 4.206 9.133 9.375v.02zm-9.132-6.706c-3.59 0-6.512 2.999-6.512 6.685 0 3.686 2.922 6.685 6.512 6.685 3.59 0 6.511-3 6.511-6.685 0-3.686-2.92-6.685-6.511-6.685zm-20.355-1.021h2.818v16.119h-2.941L87.63 11.926v12.477H84.81V8.283H87.99l12.522 12.245V8.284zM19.21 15.879h.003v8.14h-2.62v-8.03c0-3.685-2.922-6.684-6.513-6.684-3.324 0-6.07 2.572-6.46 5.88v8.835H1V1h2.62v8.369c1.655-1.701 3.94-2.755 6.46-2.755 5 0 9.072 4.147 9.13 9.265z"/>*/}
            {/*</svg>*/}
          </div>
        </div>
      </M_Ripple>
    )
  }
}

A_Logo.propTypes = {
  theme: T.oneOf([
    'dark', // black logo
    'light', // white logo
  ]),
  size: T.oneOf([
    'normal', // normal size 131x32
    'small', // white logo 101x23
  ])
};

A_Logo.defaultProps = {
  theme: 'dark',
  size: 'normal'
};



export default A_Logo



// import React from 'react';

//
// const A_Logo = ({theme, size}) => {
//   const color = theme === 'dark' ? '#253039' : '#fff'
//   const style = {
//     width: size === 'small' ? 103 : 131,
//   }
//   return (

//   )
// }
//