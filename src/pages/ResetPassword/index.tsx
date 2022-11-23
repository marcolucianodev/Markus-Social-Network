import React from "react";
import { Link } from "react-router-dom";
import {
  Logo,
  FormHeadline, 
  FormHeadlineDescription,
  UserNameInputContainer,
  UserNameInput,
  FormButtomContainer,
  FormButton
} from "../Login/styles";
import { 
  DescriptionResetPassword, 
  ResetPasswordContainer, 
  ResetPasswordForm, 
  ResetPasswordFormContainer
} from "./styles";
import LogoImage from "../../components/_assets/img/logo.png";
import { Legend } from "../Signup/styles";

const ResetPassword = () => {
  return (
    <ResetPasswordContainer>
      <Logo>
        <Link to="/">
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
      <ResetPasswordForm>
        <FormHeadline>
          <FormHeadlineDescription fontSize="2rem">
            Esqueceu sua senha?
          </FormHeadlineDescription>
        </FormHeadline>
        <DescriptionResetPassword>
          <span>Digite seu endereço de e-mail e nós enviaremos um link para que você possa usar para escolher uma nova senha.</span>
        </DescriptionResetPassword>
        <ResetPasswordFormContainer>
          <form>
            <UserNameInputContainer>
            <Legend fontSizeLegend="1.4rem">E-mail</Legend>
              <UserNameInput 
              type="email"
              name="email"
              id="email"
              inputWidth="100%"
              />
            </UserNameInputContainer>
            <FormButtomContainer>
              <FormButton 
                type="submit" 
                value="Redefinir Senha"
                backgroundButton="var(--ligth-blue)"
                />
              <FormButton 
                type="submit" 
                value="Entrar"
                backgroundButton="var(--ligth-green)"
                />
            </FormButtomContainer>
          </form>
        </ResetPasswordFormContainer>
      </ResetPasswordForm>
    </ResetPasswordContainer>
  )
}

export default ResetPassword;