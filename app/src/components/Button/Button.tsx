import { CSSProperties, MouseEvent, PropsWithChildren } from "react";
import styled from "styled-components";
import { ButtonProps, ButtonSize, ButtonType } from "./types";
import noop from "../../util/noop";
import { FontFamily } from "../Text/TextEnum";
import { useThemeColors } from "../../providers/ThemeProvider/ThemeProvider";
import { ThemeColors } from "../../providers/ThemeProvider/colors";

export const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  min-width: 200px;
  outline: none;
  overflow: hidden;

  &:focus {
    outline: none;
  }
`;

function getWrapperStyle(
  { type, size, disabled, minWidth, color }: ButtonProps,
  themeColors: ThemeColors
) {
  const properties: CSSProperties = {
    gap: "12px",
    fontFamily: FontFamily.SATOSHI,
    fontWeight: 700,
    borderRadius: "8px",
    cursor: "pointer",
    background: "0.8px solid transparent",
    minWidth: minWidth ?? "200px",
    border: "0.8px solid transparent",
  };

  switch (size) {
    case ButtonSize.XXL: {
      properties.minHeight = "64px";
      properties.padding = "18px 28px;";
      properties.fontSize = "18px";
      break;
    }
    case ButtonSize.XL: {
      properties.minHeight = "48px";
      properties.padding = "12px 20px;";
      properties.fontSize = "16px";
      break;
    }
    case ButtonSize.LG: {
      properties.minHeight = "44px";
      properties.padding = "10px 16px;";
      properties.fontSize = "16px";
      break;
    }
    case ButtonSize.MD: {
      properties.minHeight = "40px";
      properties.padding = "10px 16px;";
      properties.fontSize = "14px";
      break;
    }
    case ButtonSize.SM: {
      properties.minHeight = "36px";
      properties.padding = "8px 14px;";
      properties.fontSize = "14px";
      break;
    }
  }

  switch (type) {
    case ButtonType.FILLED: {
      properties.background = disabled
        ? themeColors.BUTTON_FILLED_BACKGROUND_COLOR_DISABLED
        : themeColors.BUTTON_FILLED_BACKGROUND_COLOR;
      properties.color = themeColors.BUTTON_FILLED_TEXT_COLOR;
      properties.border = "none";

      break;
    }
    case ButtonType.OUTLINE: {
      properties.border = `0.8px solid ${
        disabled
          ? themeColors.BUTTON_OUTLINE_BORDER_COLOR_DISABLED
          : themeColors.BUTTON_OUTLINE_BORDER_COLOR
      }`;
      properties.color = disabled
        ? themeColors.BUTTON_OUTLINE_TEXT_COLOR_DISABLED
        : themeColors.BUTTON_OUTLINE_TEXT_COLOR;
      properties.background = "transparent";
      break;
    }
    case ButtonType.TEXT: {
      properties.color = disabled
        ? themeColors.BUTTON_OUTLINE_TEXT_COLOR_DISABLED
        : themeColors.BUTTON_OUTLINE_TEXT_COLOR;
      properties.background = "transparent";
      break;
    }
    case ButtonType.DESTRUCTIVE: {
      properties.background = disabled
        ? themeColors.BUTTON_DESTRUCTIVE_BACKGROUND_COLOR_DISABLED
        : themeColors.BUTTON_DESTRUCTIVE_BACKGROUND_COLOR;
      properties.color = themeColors.BUTTON_DESTRUCTIVE_TEXT_COLOR;
      break;
    }
  }

  if (color) {
    properties.color = color;
  }

  return properties;
}

function Button({
  children,
  iconTrailing,
  iconLeading,
  size,
  type,
  disabled = false,
  minWidth = "200px",
  onClick = noop,
}: PropsWithChildren<ButtonProps>) {
  const themeColors = useThemeColors();

  const handleClick = (ev: MouseEvent) => {
    onClick?.(ev);
  };

  return (
    <ButtonWrapper
      style={getWrapperStyle({ type, size, disabled, minWidth }, themeColors)}
      onClick={handleClick}
    >
      {iconTrailing}
      {children}
      {iconLeading}
    </ButtonWrapper>
  );
}

export default Button;
