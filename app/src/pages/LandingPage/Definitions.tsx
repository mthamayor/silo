import styled from "styled-components";

interface Image {
  height?: string;
  width?: string;
  LGheight?: string;
}

export const RoundedImage = styled.img<Image>`
  height: ${(props) => props.height || "100%"};
  border-radius: 24px;
  object-fit: cover;
  width: ${(props) => props.width || "100%"};

  @media (min-width: 992px) {
    height: ${(props) => props.LGheight || "100%"};
  }
`;
