import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FormContainer, 
  FormHeadline, 
  FormHeadlineDescription, 
  Logo, 
  UserNameInput, 
  UserNameInputContainer,
  PasswordInput,
  Label,
  FormButtomContainer,
  FormButton
} from "../Login/styles";
import { 
  InputRow,
  SignupContainer, 
  SignupForm,
  Select, 
  InputRadio,
  GenderRadioSelect,
  Legend
} from "./styles";
import LogoImage from "../../components/_assets/img/logo.png";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';


const Signup = () => {

  const [ showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

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
        <FormHeadline>
          <FormHeadlineDescription fontSize="2rem">
            Inscreva-se
          </FormHeadlineDescription>
        </FormHeadline>
        <FormContainer>
          <form>
            <UserNameInputContainer>
              <InputRow gridStyle="repeat(auto-fit, minmax(200px,1fr))">
                <Label htmlFor="name">
                  <UserNameInput
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nome"
                    inputWidth="100%"
                    autoComplete="none"
                  />
                </Label>
                <Label htmlFor="surname">
                  <UserNameInput
                    type="text"
                    name="surname"
                    id="surname"
                    placeholder="Sobrenome"
                    inputWidth="100%"
                    autoComplete="none"
                  />
                </Label>
              </InputRow>
              <InputRow rowMargin="15px">
                <Label htmlFor="phone-email">
                  <UserNameInput
                    type="text"
                    name="phone-email"
                    id="phone-email"
                    placeholder="Telefone ou E-mail"
                    inputWidth="100%"
                    autoComplete="none"
                  />
                </Label>
                <Label htmlFor="password">
                  <PasswordInput 
                    type={showPassword ? "text" : "password"} 
                    name="password" 
                    id="password" 
                    placeholder="Senha" 
                    inputWidth="100%"
                    autoComplete="none"
                  />
                  {showPassword ? <VisibilityOffIcon className="visibility-password-icon-signup" onClick={handleShowPassword} /> :  <VisibilityIcon className="visibility-password-icon-signup" onClick={handleShowPassword} />}
                </Label>
              </InputRow> 
              <Legend fontSizeLegend="1.1rem">Data de Nascimento <CalendarMonthIcon /></Legend> 
              <InputRow gridStyle="repeat(auto-fit, minmax(100px,1fr))">
                <Select>
                  <option value="21">1</option>
                </Select>
                <Select>
                  <option value="Dezembro">Dezembro</option>
                </Select>
                <Select>
                  <option value="2022">2022</option>
                </Select>
              </InputRow>
              <Legend fontSizeLegend="1.1rem">Gênero <PeopleAltIcon /></Legend>
              <InputRow gridStyle="repeat(auto-fit, minmax(120px,1fr))">
                <GenderRadioSelect>
                  <Label htmlFor="male">Masculino</Label>
                    <InputRadio
                      type="radio"
                      name="gender"
                      id="male"
                    />
                </GenderRadioSelect>
                <GenderRadioSelect>
                  <Label htmlFor="female">Feminino</Label>
                    <InputRadio
                      type="radio"
                      name="gender"
                      id="female"
                    />
                </GenderRadioSelect>
                <GenderRadioSelect>
                  <Label htmlFor="another">Outro</Label>
                    <InputRadio
                      type="radio"
                      name="gender"
                      id="another"
                    />
                </GenderRadioSelect>
              </InputRow>
            </UserNameInputContainer>
            <FormButtomContainer>
              <FormButton 
                type="submit" 
                value="Inscrever"
                backgroundButton="#ff5e3a"
              />
            </FormButtomContainer>
          </form>
        </FormContainer>
      </SignupForm>
    </SignupContainer>
  )
}

export default Signup;