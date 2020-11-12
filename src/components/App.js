import { useEffect } from 'react';
import './App.css';
import { Layout, Divider } from 'antd';
import 'antd/dist/antd.css';
import NotesList from './NotesList'
import AddNoteComp from './AddNoteComp'
import Authorization from './Authorization'
import firebase from 'firebase'

const { Header, Content } = Layout;


function App() {
useEffect(() => {
  const db = firebase.database();
  console.log(db);
}, [])

  return (
    <div className="App">
      <Layout style={{ height: "100vh" }}>
        <Header className="App-header">
         <p> G-Keep</p>
        </Header>
        <Content className="App-content">
          <Authorization authType="Login"/>
          <Divider/>
          <AddNoteComp />
          <Divider/>
          <NotesList />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
