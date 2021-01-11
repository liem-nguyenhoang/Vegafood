import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import AppHeader from './components/common/header';
import AppFooter from './components/common/footer';
import DetailMenuOrder from './components/menu/detailMenuOrder';
import AppHome from './views/home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div>
      <Layout className="mainLayout">
        <Router>
          <div>
            <Switch>
              <Route path="/:id" children={<DetailMenuOrder />} />
              <Route path="/">
                <Header>
                  <AppHeader />
                </Header>
                <Content>
                  <AppHome />
                </Content>
              </Route>
            </Switch>
          </div>
        </Router>
        <Footer>
          <AppFooter />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;