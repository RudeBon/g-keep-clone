import React from 'react'
import './App.css'
import { Layout, Button } from 'antd'
import 'antd/dist/antd.css'
import UnauthorizedPage from './UnauthorizedPage'
import AuthorizedPage from './AuthorizedPage'
import firebase from 'firebase'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const { Header, Content } = Layout

function App () {
  const handleSignOut = () => {
    firebase.auth().signOut().then(function () {
    }).catch(function (error) {
      console.error(error)
    })
  }

  return (
    <div className='App'>
      <Layout style={{ minHeight: '100vh' }}>
        <Router>
          <Header className='App-header'>
            <p style={{ color: 'white', marginTop: 'auto' }}> G-Keep</p>
            <Link to='/'><Button onClick={handleSignOut}>Sign Out</Button></Link>
          </Header>
          <Content className='App-content'>
            <Switch>
              <Route path='/' exact component={UnauthorizedPage} />
              <Route path='/:uid' component={AuthorizedPage} />
            </Switch>
          </Content>
        </Router>
      </Layout>
    </div>
  )
}

export default App
