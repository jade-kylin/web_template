/*
 * @Author: BZNH
 * @Date: 2022-03-02 10:38:21
 * @LastEditors: BZNH
 * @LastEditTime: 2022-03-02 10:43:09
 * @FilePath: \web_template\src\pages\page1.js
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'

export class Page1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  };
  render() {
    return (
      <div style={{
        width: '100%',
        height: window.innerHeight,
        background: '#001D37',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div
          onClick={() => {
            // this.props.history.push('/page2/' + 666 + '')
            this.props.history.push({pathname:'/'}) 
            // this.props.history.push({pathname:"/page2",state : { id : '111' }});
          }}
          style={{
            width: '500px',
            height: '200px',
            background: '#fff',
            padding: '30px',
            borderRadius: '10px',
            lineHeight: '200px',
            textAlign: 'center',
          }}>
          我是页面二二二二二二
          点我可以去页面Home
        </div>
      </div>
    )
  }
}

export default Page1
