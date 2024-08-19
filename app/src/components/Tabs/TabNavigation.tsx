import styled from "styled-components";
import { useThemeColors } from "../../providers/ThemeProvider/ThemeProvider";
import Text, { TextWrapper } from "../Text/Text";
import TextSize, { FontFamily } from "../Text/TextEnum";
import {
  VerticalLayout,
} from "../Layout";
import { ThemeColors } from "../../providers/ThemeProvider/colors";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

type NavigationData = {
  title: string;
  description: string;
};

type TabNavigationProps = {
  readonly data: NavigationData[];
};

type NavigationProps = {
  readonly data: NavigationData[];
  onClick?: (index: number) => void;
};

function NavigationMobile({
  index,
  data,
  onClick,
}: NavigationProps & { index: number }) {
  const themeColors = useThemeColors();
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {data.map((item, i) => {
        const selected = index === i;

        console.log(selected);

        return (
          <HeaderMobileVerticallayout
            key={item.title}
            themeColors={themeColors}
            selected={selected}
            onClick={() => onClick?.(i)}
          >
            <Text
              themeColors={themeColors}
              color={selected ? themeColors.TEXT_PRIMARY : themeColors.TEXT_LIGHT}
              fontSize={TextSize.TS18}
              fontWeight={600}
            >
              {t(item.title)}
            </Text>
            <AnimatePresence>
              {selected && (
                <DescriptionText
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  isLast={i === data.length - 1}
                  themeColors={themeColors}
                  color={themeColors.TEXT_LIGHT}
                  fontSize={TextSize.TS16}
                  fontFamily={FontFamily.SATOSHI}
                  fontWeight={400}
                >
                  {t(item.description)}
                </DescriptionText>
              )}
            </AnimatePresence>
          </HeaderMobileVerticallayout>
        );
      })}
    </AnimatePresence>
  );
}

function TabNavigation({ data }: TabNavigationProps) {
  const [index, setIndex] = useState(0);
  const switchRef = useRef<number>();

  useEffect(() => {
    switchRef.current = window.setInterval(() => {
        setIndex((prev) => (prev + 1) % data.length);
    }, 7000);
    return () => {
        window.clearTimeout(switchRef.current);
    }
  }, [data.length])

  const onClick = (index: number) => {
    setIndex(index);
  };

  const mobileView = (
    <div>
      <NavigationMobile onClick={onClick} index={index} data={data} />
    </div>
  );


  return (
      <div>{mobileView}</div>
  );
}

export default TabNavigation;

const HeaderMobileVerticallayout = styled(VerticalLayout)<{
  selected: boolean;
  themeColors: ThemeColors;
}>`
  border-left: 4px solid
    ${({ selected, themeColors }) =>
      selected ? themeColors.TEXT_PRIMARY : themeColors.TEXT_LIGHT};
  padding: 16px 0 16px 24px;
  cursor: pointer;
`;

const DescriptionText = styled(motion(TextWrapper))<{ isLast: boolean }>`
  display: -webkit-box;
  overflow: hidden;
`;
