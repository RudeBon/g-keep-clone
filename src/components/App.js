// import { useEffect, useState } from 'react';
import './App.css';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Unauthorized from './Unathorized';
import Authorized from './Authorized';
// import firebase from 'firebase';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const { Header, Content } = Layout;


function App() {
  // useEffect(() => {
  //   const db = firebase.database();
  //   console.log(db);
  // }, [])

  return (
    <div className="App">
      <Layout style={{ minHeight: "100vh" }}>
        <Header className="App-header">
          <p style={{ color: "white", marginTop: 'auto' }}> G-Keep</p>
        </Header>
        <Content className="App-content">
          <Router>
            <Switch>
              <Route path="/" exact component={Unauthorized} />
              <Route path="/:uid" component={Authorized} />
            </Switch>
          </Router>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
