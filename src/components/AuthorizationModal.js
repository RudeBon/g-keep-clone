import { useState } from 'react';
import 'antd/dist/antd.css';
import { Input, Button } from 'antd';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';

export default function AuthorizationModal(props) {
    const history = useHistory();
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        notes: []
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
            .catch(error => console.error(error));
    }

    const historyRedirect = (dest) => { history.push(`/${dest}`) }

    const signIn = () => {
        const { email, password } = userData;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => { historyRedirect(firebase.auth().currentUser.uid) })
            .catch(error => console.error(error));
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