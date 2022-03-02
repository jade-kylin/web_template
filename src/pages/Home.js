/*
 * @Author: BZNH
 * @Date: 2022-03-02 10:38:08
 * @LastEditors: BZNH
 * @LastEditTime: 2022-03-02 10:43:12
 * @FilePath: \web_template\src\pages\Home.js
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'

export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  };
  render() {
    // console.log(this.props.location.state.id)
    console.log(this.props.location.params)
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
         onClick={()=>{
          this.props.history.push('/page1')
          // this.props.history.push({pathname:'/'}) 
          // this.props.history.push({pathname:"/",state : { id : '222' }});
        }}
        style={{
          width: '500px',
          height: '200px',
          background: '#ff0',
          padding: '30px',
          borderRadius: '10px',
          textAlign:'center',
          lineHeight:'200px',
        }}>
          我是页面Home我是页面Home
          点我可以去页面二二二二二
        </div>
      </div>
    )
  }
}

export default Home
