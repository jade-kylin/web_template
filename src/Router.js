/*
 * @Author: BZNH
 * @Date: 2022-03-02 10:39:19
 * @LastEditors: BZNH
 * @LastEditTime: 2022-03-02 11:26:51
 * @FilePath: \web_template\src\Router.js
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Home from './pages/Home'
import MobxTest from './pages/MobxTest'
import React, { Component } from 'react'
import { Route, Switch, withRouter, BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import store from './mobx/store'
class Router extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <Provider {...store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={withRouter(Home)} />
            <Route exact path="/mobxtest" component={withRouter(MobxTest)} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}
export default Router