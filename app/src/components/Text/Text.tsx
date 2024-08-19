import TextSize, { FontFamily, TextStyle } from "./TextEnum";
import styled from "styled-components";
import { ThemeColors } from "../../providers/ThemeProvider/colors";
import { PropsWithChildren } from "react";
import { useThemeColors } from "../../providers/ThemeProvider/ThemeProvider";

type FontSizeProps = {
  fontSize: string;
  lineHeight: string;
  letterSpacing?: string;
};

export const TextWrapper = styled.span<{
  themeColors: ThemeColors;
  fontSize?: TextSize;
  fontSizeLg?: TextSize;
  fontFamily?: FontFamily;
  fontStyle?: TextStyle;
  fontWeight?: number;
  color?: string;
  display?: string;
}>`
  font-size: ${({ fontSize }) =>
    getFontProperties(fontSize ?? TextSize.TS16).fontSize};
  line-height: ${({ fontSize }) =>
    getFontProperties(fontSize ?? TextSize.TS16).lineHeight};
  letter-spacing: ${({ fontSize }) =>
    getFontProperties(fontSize ?? TextSize.TS16).letterSpacing ?? "0px"};
  font-family: ${({ fontFamily }) => fontFamily ?? FontFamily.LT_RENOVATE};
  font-style: ${({ fontStyle }) => fontStyle ?? TextStyle.NORMAL};
  font-weight: ${({ fontWeight }) => fontWeight ?? 400};
  ${({ color }) => color && `color: ${color}`};
  text-overflow: ellipsis;
  white-space: wrap;
  display: ${({ display }) => display ?? "block"};

  @media (min-width: 992px) {
    font-size: ${({ fontSize, fontSizeLg }) =>
      getFontProperties(fontSizeLg ?? fontSize ?? TextSize.TS16).fontSize};
    line-height: ${({ fontSize, fontSizeLg }) =>
      getFontProperties(fontSizeLg ?? fontSize ?? TextSize.TS16).lineHeight};
    letter-spacing: ${({ fontSize, fontSizeLg }) =>
      getFontProperties(fontSizeLg ?? fontSize ?? TextSize.TS16)
        .letterSpacing ?? "0px"};
  }
`;

const Text = (
  props: PropsWithChildren<{
    fontSize?: TextSize;
    fontSizeLg?: TextSize;
    fontFamily?: FontFamily;
    fontStyle?: TextStyle;
    fontWeight?: number;
    themeColors?: ThemeColors;
    color?: string;
    display?: string;
  }>
) => {
  const themeColors = useThemeColors();

  return (
    <TextWrapper {...props} themeColors={themeColors}>
      {props.children}
    </TextWrapper>
  );
};

export const BorderedText = styled(Text)`
  -webkit-text-stroke-width: 0.6px;
  -webkit-text-stroke-color: ${({ themeColors }) => themeColors?.TEXT_PRIMARY};
  color: transparent;

  @media (min-width: 992px) {
    text-transform: uppercase;
  }
`;

export const GradientText = styled(Text)`
  background: ${({ themeColors }) =>
    `-webkit-linear-gradient(${themeColors?.TEXT_GRADIENT_START}, ${themeColors?.TEXT_GRADIENT_END})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 992px) {
    text-transform: uppercase;
  }
`;

export function getFontProperties(size: TextSize): FontSizeProps {
  switch (size) {
    case TextSize.TS12:
      return {
        fontSize: "0.75rem",
        lineHeight: "1.125rem",
      };
    case TextSize.TS14: {
      return {
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
      };
    }
    case TextSize.TS16: {
      return {
        fontSize: "1rem",
        lineHeight: "1.5rem",
      };
    }
    case TextSize.TS18: {
      return {
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
      };
    }
    case TextSize.TS20: {
      return {
        fontSize: "1.25rem",
        lineHeight: "1.75rem",
      };
    }
    case TextSize.TS24: {
      return {
        fontSize: "1.5rem",
        lineHeight: "2rem",
      };
    }
    case TextSize.TS30: {
      return {
        fontSize: "1.875rem",
        lineHeight: "2.25rem",
      };
    }
    case TextSize.TS36: {
      return {
        fontSize: "2.25rem",
        lineHeight: "2.75rem",
      };
    }
    case TextSize.TS48: {
      return {
        fontSize: "3rem",
        lineHeight: "3.75rem",
        letterSpacing: "-0.02em",
      };
    }
    case TextSize.TS60: {
      return {
        fontSize: "3.75rem",
        lineHeight: "4.5rem",
        letterSpacing: "-0.02em",
      };
    }
    case TextSize.TS72: {
      return {
        fontSize: "4.5rem",
        lineHeight: "5.625rem",
        letterSpacing: "-0.02em",
      };
    }
    default: {
      return {
        fontSize: "132px",
        lineHeight: "1.1",
        letterSpacing: "-0.02em",
      };
    }
  }
}

export default Text;
