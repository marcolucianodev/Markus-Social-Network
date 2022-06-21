import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  LoginContainer, 
  Logo, 
  FormLogin, 
  FormHeadline, 
  FormHeadlineDescription,
  FormContainer,
  UserNameInput,
  PasswordImput
} from "./styles";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LogoImage from "../_assets/img/logo.png"

const LoginPopup = () => {

  const [ showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <LoginContainer>
      
        <Logo>
          <Link to="/" className="logo-login-link">
            <img src={LogoImage} alt="Logo Markus Social Network" />
            <div className="title-box">
              <div className="title-logo">
                  <h2>Markus</h2>
              </div>
              <div className="desc-logo">
                  <h3>Social Network</h3>
              </div>
            </div>
          </Link>
        </Logo>
      <FormLogin>
        <FormHeadline>
          <FormHeadlineDescription fontSize="1.4rem">
            Faça login na sua conta
          </FormHeadlineDescription>
        </FormHeadline>
        <FormContainer>        
          <form>
            <UserNameInput>
              <label htmlFor="username">
                <input type="text" name="username" id="username" placeholder="Usuário" />
              </label>
            </UserNameInput>
            <PasswordImput>
              <label htmlFor="user-password">
                <input 
                  type={showPassword ? "text" : "password"} 
                  name="user-password" id="user-password" 
                  placeholder="Senha"
                 />
                {showPassword ? <VisibilityOffIcon className="visibility-password-icon" onClick={handleShowPassword} /> :  <VisibilityIcon className="visibility-password-icon" onClick={handleShowPassword} />}
              </label>
            </PasswordImput>
            <div className="remember-login">
              <div className="remember-credentials">
                <label htmlFor="remember-password">
                  <input type="checkbox" name="remember-password" id="remember-password" /> Lembrar
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="forgot-password">
                <Link to="/">Esqueci minha senha</Link>
              </div>
            </div>
            <div className="send-button-login">
              <input type="submit" value="Login" />
            </div>
          </form>
        </FormContainer>
        <div className="create-new-account">
          <p>Não tem uma conta? <span><Link to="/">Inscreva-se</Link></span></p>
        </div>
      </FormLogin>
    </LoginContainer>
  )
};

export default LoginPopup;