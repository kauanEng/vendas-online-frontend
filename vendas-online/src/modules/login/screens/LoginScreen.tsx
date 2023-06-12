import { useState } from 'react';
import Button from "../../../share/buttons/button/Button";
import Input from "../../../share/input/input/input";
import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, LogoImg, TitleLogin } from "../styles/loginScreen.styles";

const LoginScreen = () => {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');


    const handleUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    }

    const handleUserPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserPassword(event.target.value);
    }


    const handleLogin = () => {
        alert(`usuario: ${userName} senha: ${userPassword}`)
    }

    return (
        <ContainerLoginScreen>
            <BackgroundImage src="./background.png" />
            <ContainerLogin>
                <LimitedContainer>
                    <LogoImg />
                    <TitleLogin level={2} type="secondary">LOGIN</TitleLogin>
                    <Input title="USUÁRIO" margin="32px 0px 0px" onChange={handleUserName} value={userName} />
                    <Input title="SENHA" margin="32px 0px 0px" type='password' onChange={handleUserPassword} value={userPassword} />
                    <Button type="primary" margin="64px 0px 16px 0px" onClick={handleLogin}>ENTRAR</Button>
                </LimitedContainer>
            </ContainerLogin>
        </ContainerLoginScreen>
    );
}

export default LoginScreen;