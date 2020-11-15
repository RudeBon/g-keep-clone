// import { useEffect, useState } from 'react';
import './App.css';
import { Layout, Button } from 'antd';
import 'antd/dist/antd.css';
import Unauthorized from './Unathorized';
import Authorized from './Authorized';
import firebase from 'firebase';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const { Header, Content } = Layout;

function App() {
  // useEffect(() => {
  //   const db = firebase.database();
  //   console.log(db);
  // }, [])

  const getActualUser = () => {
    console.log(`${firebase.auth().currentUser !== null ? firebase.auth().currentUser.uid : null} <------------- CurrentUserID`);
  }

  const handleSignOut = () => {
    firebase.auth().signOut().then(function () {
      console.log('signed out successfully',);
    }).catch(function (error) {
      // An error happened.
      console.log(error);
    });
  }

  return (
    <div className="App">
      <Layout style={{ minHeight: "100vh" }}>
        <Router>
          <Header className="App-header">
            <p style={{ color: "white", marginTop: 'auto' }}> G-Keep</p>
            <Link to='/'><Button onClick={handleSignOut}>Sign Out</Button></Link>
          </Header>
          <Content className="App-content">
            <Switch>
              <Route path="/" exact component={Unauthorized} />
              <Route path="/:uid" component={Authorized} />
            </Switch>
            <Button onClick={getActualUser}>uid</Button>
          </Content>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
