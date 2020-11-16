import { useState } from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import AuthorizationModal from './AuthorizationModal';

export default function UnauthorizedPage() {
    const [visible, setVisible] = useState(false);
    const [authType, setAuthType] = useState('');

    const handleAuthorizationLogin = () => {
        setAuthType('Login');
        handleModal();
    }
    const handleModal = () => setVisible(prev => !prev);
    const handleAuthorizationRegister = () => {
        setAuthType('Register');
        handleModal();
    }

    return (
        <>
            <h1>You are not logged in</h1>
            <h3>Authorize to use the app</h3>
            <Button
                type="primary"
                className="btn"
                onClick={handleAuthorizationLogin}
            >
                Login
        </Button>
            <Button
                className="btn"
                onClick={handleAuthorizationRegister}
            >
                Register
        </Button>
            <AuthorizationModal
                authType={authType}
                visible={visible}
                handleModal={handleModal}
            />
        </>
    )
}