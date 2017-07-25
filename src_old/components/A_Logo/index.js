import React, { Component } from 'react';
import * as T from "prop-types";
import A_Link from 'A_Link'
import M_Ripple from 'M_Ripple'
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_Logo')
import history from 'history'

class A_Logo extends Component {

  handleClick = () => {
    setTimeout(() => history.push('/'), 300)
  }

  render() {
    const {theme, size} = this.props
    const color = theme === 'dark' ? '#253039' : '#fff'
    return (
      <M_Ripple>
        <div className={cn('root')} onClick={this.handleClick}>
          <div className={cn('image', {color, size})} >
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 131 32" style={{verticalAlign: 'top'}}>
              <path fill={color} stroke={color} fillRule="evenodd" strokeWidth=".5" d="M106.271 24.343V8.283h2.621v16.06h-2.62zM72.732 6.614c5.037 0 9.134 4.206 9.134 9.375v8.03h-2.622v-1.464c-1.657 1.733-3.964 2.81-6.512 2.81-5.035 0-9.132-4.206-9.132-9.376 0-5.169 4.097-9.375 9.132-9.375zm0 16.06c3.591 0 6.512-2.999 6.512-6.685 0-3.685-2.92-6.684-6.512-6.684-3.59 0-6.511 2.999-6.511 6.684 0 3.686 2.921 6.686 6.511 6.686zm-35.06-7.647V8.284h2.62v6.743c0 5.17-4.096 9.376-9.131 9.376-5.037 0-9.134-4.206-9.134-9.376V8.284h2.621v6.743c0 3.686 2.922 6.685 6.513 6.685 3.59 0 6.51-2.999 6.51-6.685zm14.682-.616l5.889-6.127h2.703v16.119h-2.415V11.362l-5.233 5.34v7.701h-2.416v-7.701l-5.235-5.34v13.041h-2.415V8.284h3.233l5.89 6.127zm77.645 1.6H130c0 .059-.003.118-.005.178H130V31h-2.622v-8.425c-1.657 1.733-3.964 2.81-6.511 2.81-5.036 0-9.133-4.206-9.133-9.375v-.02c0-5.17 4.097-9.375 9.133-9.375 5.036 0 9.133 4.206 9.133 9.375v.02zm-9.132-6.706c-3.59 0-6.512 2.999-6.512 6.685 0 3.686 2.922 6.685 6.512 6.685 3.59 0 6.511-3 6.511-6.685 0-3.686-2.92-6.685-6.511-6.685zm-20.355-1.021h2.818v16.119h-2.941L87.63 11.926v12.477H84.81V8.283H87.99l12.522 12.245V8.284zM19.21 15.879h.003v8.14h-2.62v-8.03c0-3.685-2.922-6.684-6.513-6.684-3.324 0-6.07 2.572-6.46 5.88v8.835H1V1h2.62v8.369c1.655-1.701 3.94-2.755 6.46-2.755 5 0 9.072 4.147 9.13 9.265z"/>
            </svg>
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
  ]).isRequired,
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
