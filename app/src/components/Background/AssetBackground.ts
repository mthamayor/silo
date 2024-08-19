import styled from "styled-components";

const AssetBackground = styled.div<{
  backgroundUrl: string;
  width: number;
  height: number;
  position?: "relative" | "absolute";
  zIndex?: number;
  widthLg?: number;
  heightLg?: number;
  top?: number;
  topLg?: number;
  left?: number;
  leftLg?: number;
  right?: number;
  rightLg?: number;
  bottom?: number;
  bottomLg?: number;
  backgroundSize?: string;
}>`
  position: ${({ position }) => position ?? "absolute"};
  z-index: ${({ zIndex }) => zIndex ?? 0};
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-image: url(${({ backgroundUrl }) => backgroundUrl});
  background-size: ${({ backgroundSize }) => backgroundSize ?? "contain"};
  background-position: center;
  background-repeat: no-repeat;

  ${({ top }) => top && `top: ${top}px`};
  ${({ left }) => left && `left: ${left}px`};
  ${({ right }) => right && `right: ${right}px`};
  ${({ bottom }) => bottom && `bottom: ${bottom}px`};

  @media (min-width: 992px) {
    ${({ widthLg }) => widthLg && `width: ${widthLg}px`};
    ${({ heightLg }) => heightLg && `height: ${heightLg}px`};
    ${({ topLg }) => topLg && `top: ${topLg}px`};
    ${({ leftLg }) => leftLg && `left: ${leftLg}px`};
    ${({ rightLg }) => rightLg && `right: ${rightLg}px`};
    ${({ bottomLg }) => bottomLg && `bottom: ${bottomLg}px`};
  }
`;

export default AssetBackground;
