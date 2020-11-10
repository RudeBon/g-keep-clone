import logo from '../logo.svg';
import './App.css';
import { Layout, Button, Divider } from 'antd';
import 'antd/dist/antd.css';
import NotesList from './NotesList'
import AddNoteComp from './AddNoteComp'

const { Header, Footer, Content } = Layout;


function App() {
  return (
    <div className="App">
      <Layout style={{ height: "100vh" }}>
        <Header className="App-header">
          G-Keep
          <div>
            <Button type="primary" className="Header-btn">Login</Button>
            <Button className="Header-btn">Register</Button>
          </div>
        </Header>
        <Content className="App-content">
          <AddNoteComp />
          <Divider/>
          <NotesList />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
