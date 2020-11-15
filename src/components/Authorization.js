import { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Input, Button } from 'antd';
import firebase from 'firebase';
import { Link, useHistory } from 'react-router-dom';

export default function Authorization(props) {
    const history = useHistory();
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        notes: [/* {title: "title", text:"text"}, ...*/]
    });

    function writeUserData(userId, userData) {
        firebase.database().ref('users/' + userId).set({
            email: userData.email,
            notes: userData.notes,
        });
    };

    const handleChange = ({ target: { value, id } }) => {
        setUserData({
            ...userData,
            [id]: value,
        });
    };

    const createAccount = () => {
        const { email, password } = userData;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => signIn())
            .then(() => writeUserData(firebase.auth().currentUser.uid, userData))
            .catch(error => console.log(error));
    }

    const historyRedirect = (dest) => { history.push(`/${dest}`) }

    const signIn = () => {
        const { email, password } = userData;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => { historyRedirect(firebase.auth().currentUser.uid) })
            .catch(error => console.log(error));
    }


    return (
        <>
            <Input
                id="email"
                placeholder="Enter your email"
                required
                onChange={handleChange}
            />
            <Input.Password
                id="password"
                placeholder="Input password"
                required
                onChange={handleChange}
            />
            {props.authType.toLowerCase() === "register"
                ? <>
                    <Input.Password
                        id="repeatedPassword"
                        placeholder="Repeat password"
                        required />
                    <Button
                        key={props.authType}
                        type="primary"
                        className="btn"
                        onClick={createAccount}
                    >
                        {props.authType}
                    </Button>
                </>
                : <Button
                    key={props.authType}
                    type="primary"
                    className="btn"
                    onClick={signIn}
                >
                    {props.authType}
                </Button>
            }
        </>
    )
}