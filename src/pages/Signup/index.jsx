import { Link } from "react-router-dom";
import { Logo } from "../../components/LoginForm/styles";
import { SignupContainer, SignupForm } from "./styles";
import LogoImage from "../../components/_assets/img/logo.png"

const Signup = () => {
  return (
    <SignupContainer>
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
      <SignupForm>
        ...
      </SignupForm>
    </SignupContainer>
  )
}

export default Signup;