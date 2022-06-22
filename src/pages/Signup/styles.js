import styled from 'styled-components';
import { FormLogin, LoginContainer } from '../Login/styles';

export const SignupContainer = styled(LoginContainer)``;

export const SignupForm = styled(FormLogin)``;

export const InputRow = styled.div`
  display: grid;
  grid-template-columns: ${props => props.gridStyle};
  gap: 15px;
  margin-top: ${props => props.rowMargin};
`;

export const SelectContainer = styled.div`
  background-color: red;
`;

export const Select = styled.select`
  padding: 1.4rem;
  border: 1px solid #e6ecf5;
  outline: none;
  background-color: transparent;
  -webkit-appearance: none;
  background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/Yrq8Y9PlN02.png);
  background-position: right 5px center;
  background-repeat: no-repeat;
  background-size: 1.4rem;
  padding-right: 2rem;
  font-size: 1.5rem;
  color: #515365;
  border-radius: 0.5rem;
`;

export const InputRadio = styled.input``;

export const GenderRadioSelect = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e6ecf5;
  color: #515365;
`;

export const Legend = styled.legend`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1.8rem 0 0.5rem;
  color: #515365;
  font-size: ${props => props.fontSizeLegend};
`;