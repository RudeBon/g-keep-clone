import { useState } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, Modal } from 'antd';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';

export default function AuthorizationModal(props) {
    const history = useHistory();
    const [errorMessage, setErrorMessage] = useState('')
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        repeatedPassword: '',
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

    const closeModal = () => {
        props.handleModal();
        setErrorMessage('');
    }

    const createAccount = () => {
        const { email, password } = userData;
        checkRepeatedPass();
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => signIn())
            .then(() => writeUserData(firebase.auth().currentUser.uid, userData))
            .catch(error => {
                console.error(error);
                setErrorMessage(error.message);
            });
    }

    const historyRedirect = (dest) => { history.push(`/${dest}`) };

    const checkRepeatedPass = () => {
        if (userData.password !== userData.repeatedPassword) {
            setErrorMessage('You entered two different passwords. Please try again.')
            throw errorMessage;
            
        }
    }

    const signIn = () => {
        const { email, password } = userData;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => { historyRedirect(firebase.auth().currentUser.uid) })
            .catch(error => {
                console.error(error);
                setErrorMessage(error.message);
            });
    }

    return (
        <Modal
            title={props.authType}
            visible={props.visible}
            centered
            onCancel={closeModal}
            onOk={closeModal}
            footer={[
                <Button key="cancel" onClick={closeModal}>
                    Cancel
                </Button>,
                <Button
                    key={props.authType}
                    type="primary"
                    className="btn"
                    onClick={props.authType.toLowerCase() === "register" ? createAccount : signIn}
                >
                    {props.authType}
                </Button>
            ]}
        >
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
                ? <Input.Password
                    id="repeatedPassword"
                    placeholder="Repeat password"
                    required
                    onChange={handleChange}
                />
                : <></>
            }
            <h6 style={{ color: "red" }}>{errorMessage}</h6>
        </Modal>
    )
}