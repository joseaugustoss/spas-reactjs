import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "success" | "danger";

const buttonVariants = {
  primary: "purple",
  secondary: "orange",
  success: "green",
  danger: "red",
};

interface ButtonContainerProps {
  variant: ButtonVariant;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  margin: 8px;
  border-radius: 8px;

  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};

  /* ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `;
  }} */
`;
