import styled from "styled-components";
import { FormLogin, LoginContainer } from "../Login/styles";

export const ResetPasswordContainer = styled(LoginContainer)`
  margin: 15rem 0;

  @media (max-width: 768px){
    margin: 10rem 0;
  }
`;

export const ResetPasswordForm = styled(FormLogin)``;

export const DescriptionResetPassword = styled.div`
  padding: 2rem 2.5rem;
  font-size: 1.4rem;
  line-height: 2;
  color: #515365;
`;