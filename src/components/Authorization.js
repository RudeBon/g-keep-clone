import 'antd/dist/antd.css'
import { Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

export default function Authorization (props) {
     


    return (
        <form>
            <h3>Authorize to use the app</h3>
            <Input id="login" placeholder="Enter your email" required/>
            <Input.Password id="pass" placeholder="Input password" required/>
            {props.authType.toLowerCase() === "register" 
                ? <Input.Password id="repeatedPass" placeholder="Repeat password" required/>
                : <></>
            }
            <Button key={props.authType} type="primary" className="btn">{props.authType}</Button>
        </form>
    )
}