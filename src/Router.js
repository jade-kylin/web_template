/*
 * @Author: BZNH
 * @Date: 2022-03-02 10:39:19
 * @LastEditors: BZNH
 * @LastEditTime: 2022-03-02 10:50:55
 * @FilePath: \web_template\src\Router.js
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Home from './pages/Home'
import Page1 from './pages/Page1'
import React, { Component } from 'react'
import { Route, Switch, withRouter, BrowserRouter } from 'react-router-dom'
class Router extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={withRouter(Home)} />
          <Route exact path="/page1" component={withRouter(Page1)} />
        </Switch>
      </BrowserRouter>
    )
  }
}
export default Router