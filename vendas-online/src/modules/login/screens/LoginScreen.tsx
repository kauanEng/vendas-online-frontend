import { useState } from 'react';

import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, TitleLogin } from "../styles/loginScreen.styles";
import SVGHome from '../../../share/components/icons/SVGHome';
import Input from '../../../share/components/input/input';
import Button from '../../../share/components/buttons/button/Button';
import { useRequests } from '../../../share/hooks/useRequests';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { authRequest, loading } = useRequests();

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleLogin = () => {
        authRequest({
            email: email,
            password: password,
        });
    };
    
    return (
        <ContainerLoginScreen>
            <BackgroundImage src="./background.png" />
            <ContainerLogin>
                <LimitedContainer>
                    <SVGHome />
                    <TitleLogin level={2} type="secondary">LOGIN</TitleLogin>
                    <Input title="USUÁRIO" margin="32px 0px 0px" onChange={handleEmail} value={email} />
                    <Input title="SENHA" margin="32px 0px 0px" type='password' onChange={handlePassword} value={password} />
                    <Button loading={loading} type="primary" margin="64px 0px 16px 0px" onClick={handleLogin}>ENTRAR</Button>
                </LimitedContainer>
            </ContainerLogin>
        </ContainerLoginScreen>
    );
}

export default LoginScreen;