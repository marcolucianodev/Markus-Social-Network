import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, FormLogin } from "./styles";
import VisibilityIcon from '@mui/icons-material/Visibility';
import Logo from "../_assets/img/logo.png"

const LoginPopup = () => {

  const [ showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <Container>
      <Link to="/" className="logo-login-link">
        <div className="logo">
          <img src={Logo} alt="Logo Markus Social Network" />
          <div className="title-box">
            <div className="title-logo">
                <h2>Markus</h2>
            </div>
            <div className="desc-logo">
                <h3>Social Network</h3>
            </div>
          </div>
        </div>
      </Link>
      <FormLogin>
        <div className="login-headline">
          <div className="login-headline-description">
            Faça login na sua conta
          </div>
        </div>
        <div className="form-login">
          <form action="POST">
            <div className="login-username">
              <label htmlFor="username">
                <input type="text" name="username" id="username" placeholder="Usuário" />
              </label>
            </div>
            <div className="login-password">
              <label htmlFor="user-password">
                <input type={showPassword ? "text" : "password"} name="user-password" id="user-password" placeholder="Senha" />
                <VisibilityIcon className="visibility-password-icon" onClick={handleShowPassword} />
              </label>
            </div>
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
        </div>
        <div className="create-new-account">
          <p>Não tem uma conta? <span><Link to="/">Inscreva-se</Link></span></p>
        </div>
      </FormLogin>
    </Container>
  )
};

export default LoginPopup;