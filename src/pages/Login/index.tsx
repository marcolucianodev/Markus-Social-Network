import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  LoginContainer, 
  Logo, 
  FormLogin, 
  FormHeadline, 
  FormHeadlineDescription,
  FormContainer,
  UserNameInputContainer,
  PasswordInputContainer,
  LoginRemember,
  UserNameInput,
  PasswordInput,
  FormButtomContainer,
  FormButton,
  FormFooterInfo,
  Label
} from "./styles";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LogoImage from "../../components/_assets/img/logo.png";

const Login = () => {

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
            <UserNameInputContainer inputBoxWidth="100%">
              <Label htmlFor="username">
                <UserNameInput
                 type="text"
                 name="username"
                 id="username" 
                 placeholder="Usuário" 
                 inputWidth="100%" 
                 autoComplete="none"
                 />
              </Label>
            </UserNameInputContainer>
            <PasswordInputContainer inputWidth="100%">
              <Label htmlFor="user-password">
                <PasswordInput 
                  type={showPassword ? "text" : "password"} 
                  name="user-password" id="user-password" 
                  placeholder="Senha" 
                  inputWidth="100%" 
                  autoComplete="none"
                 />
                {showPassword ? <VisibilityOffIcon className="visibility-password-icon-login" onClick={handleShowPassword} /> :  <VisibilityIcon className="visibility-password-icon-login" onClick={handleShowPassword} />}
              </Label>
            </PasswordInputContainer>
            <LoginRemember>
              <div className="remember-credentials">
                <Label htmlFor="remember-password">
                  <input type="checkbox" name="remember-password" id="remember-password" /> Lembrar
                  <span className="checkmark"></span>
                </Label>
              </div>
              <div className="forgot-password">
                <Link to="/redefinir-senha">Esqueci minha senha</Link>
              </div>
            </LoginRemember>
            <FormButtomContainer>
              <FormButton 
                type="submit" 
                value="Login"
                backgroundButton="var(--main-color)"
              />
            </FormButtomContainer>
          </form>
        </FormContainer>
        <FormFooterInfo>  
          <p>Não tem uma conta? <span><Link to="/signup">Inscreva-se</Link></span></p>
        </FormFooterInfo>
      </FormLogin>
    </LoginContainer>
  )
};

export default Login;