import { Button as Btn } from "./Button";

export const Button = (props) => {
  return(<Btn {...props} />)
};
export const BtnFill = (props) => {
  return(<Btn {...props} variant="btn-fill" />)
};
export const BtnOutline = (props) => {
  return(<Btn {...props} variant="btn-outline" />)
};
export const BtnText = (props) => {
  return(<Btn {...props} variant="btn-text" />)
};
