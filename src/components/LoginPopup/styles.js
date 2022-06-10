import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const FormLogin = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: #ffffff;
  min-width: 50rem;
  border-radius: 0.5rem;

  @media (max-width: 600px) {
    min-width: 60%;
  }

  .login-headline {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.5rem;
    border-bottom: 1px solid #e6ecf5;

    .login-headline-description {
      font-weight: 500;
      color: #515365;
      font-size: 1.4rem;
    }

    .close-button .close-icon-login {
      font-size: 3rem;
      color: #515365;
      cursor: pointer;
    }

    
  }

  .form-login {
    padding: 5rem 2.5rem;

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 2.5rem;

      .login-username,
      .login-password {
        width: 100%;

        input[type="text"],
        input[type="password"] {
          width: 100%;
          padding: 1.5rem;
          border-radius: 0.5rem;
          border: 1px solid #e6ecf5;
          outline: none;
          transition: all ease 0.5s;

          &:focus {
            border-color: #ff5e3a;
          }
        }
      }
    }
  }

  .remember-login {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    width: 100%;
    padding: 1rem 0;

    .remember-credentials label {
      display: block;
      position: relative;
      padding-left: 3.5rem;
      cursor: pointer;
      user-select: none;
      line-height: 2.5rem;
      color: #515365;

      input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;

        &:checked ~ .checkmark {
          background-color: #ff5e3a;
          transition: 0.5s;
        }

        &:checked ~ .checkmark:after {
          display: block;
        }
      }

      .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 2.5rem;
        width: 2.5rem;
        border: 1px solid #e6ecf5;
        border-radius: 0.3rem;

        &:after {
          content: "";
          position: absolute;
          display: none;
          left: 0.8rem;
          top: 0.4rem;
          width: 0.5rem;
          height: 1rem;
          border: solid white;
          border-width: 0 3px 3px 0;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
        }
      }
    }
  }

  .send-button-login {
    width: 100%;

    input[type="submit"] {
      background-color: #ff5e3a;
      border: none;
      border-radius: 0.5rem;
      width: 100%;
      padding: 1.5rem;
      font-size: 1.4rem;
      font-weight: bold;
      color: #FFFFFF;
      cursor: pointer;
      transition: 0.4s;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;