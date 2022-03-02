/*
 * @Author: BZNH
 * @Date: 2022-03-02 11:05:07
 * @LastEditors: BZNH
 * @LastEditTime: 2022-03-02 11:06:27
 * @FilePath: \web_template\src\pages\MobxTest.js
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject(['MyMobx'])
@observer

class MobxTest extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  };
  render() {
    return (
      <div
      style={{
        width: '100%',
        height: window.innerHeight,
        background: '#001D37',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'column'
      }}>
        <div
          onClick={() => {
            // this.props.history.push('/page2/' + 666 + '')
            this.props.history.push({ pathname: '/' })
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
            cursor: 'pointer',
          }}>
          测试
        </div>
        <div
        onClick={()=>{
          this.props.MyMobx.addNumber()
        }}
        style={{
          width: '300px',
          height: '100px',
          marginTop:'20px',
          background: '#fff',
          lineHeight:'100px',
          textAlign:'center',
          borderRadius:'10px',
          cursor: 'pointer',
        }}>
          mobx中的数字是{this.props.MyMobx.number}&nbsp;&nbsp;&nbsp;&nbsp;
          <div style={{display:'inline'}}>点击增加</div>
        </div>
      </div>
    )
  }
}

export default MobxTest