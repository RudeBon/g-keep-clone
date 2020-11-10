import logo from '../logo.svg';
import './App.css';
import { Layout, Button } from 'antd';
import 'antd/dist/antd.css';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout style={{height:"100vh"}}>
        <Header className="App-header">
          G-Keep
          <div>
          <Button type="primary" className="Header-btn">Login</Button>
          <Button className="Header-btn">Register</Button>
          </div>
        </Header>
        <Content className="App-content">
          <h2>Sign in to use the app</h2>
        </Content> 
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
