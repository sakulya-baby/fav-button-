import React from "react";
import styled from "styled-components";
const StylesButton = (variant) => {
  switch (variant) {
    case "contained": {
      return {
        background: "#1f6ed4",
        "&:hover": {
          background: "#4C94F0",
        },
        "&:active": {
          background: "#0052BC",
        },
        "&:disabled": {
          background: "#c9c9c9",
        },
      };
    }
    case "outlined": {
      return {
        border: "none",
        border: "1px solid #4C94F0",
        color: "black",
        "&:hover": {
          border: "2px solid#0052BC",
        },
        "&:active": {
          background: "#1f6ed4",
          color: "white",
        },
        "&:disabled": {
          background: "blue",
        },
      };
    }
    case "warning": {
      return {
        background: "#F37705",
        "&:hover": {
          background: "#FF912B",
        },
        "&:active": {
          background: "#CF6300",
        },
        "&:disabled": {
          background: "#c9c9c9",
        },
      };
    }
    case "danger": {
      return {
        background: "#DF2D2D",
        "&:hover": {
          background: "#E54343",
        },
        "&:active": {
          background: " #C20B0B",
        },
        "&:disabled": {
          background: "#c9c9c9",
        },
      };
    }
  }
};
export const Button = ({
  children,
  disabled,
  type = "button",
  onClick,
  variant = "contained",
}) => {
  return (
    <>
      <StyledButton
        type={type}
        onClick={onClick}
        disabled={disabled}
        variant={variant}
      >
        {children}
      </StyledButton>
    </>
  );
};

const StyledButton = styled.button`
  color: #ffffff;
  text-transform: uppercase;
  border-radius: 10px;
  font-size: 21px;
  font-weight: 600;
  ${({ variant }) => StylesButton(variant)}
`;
