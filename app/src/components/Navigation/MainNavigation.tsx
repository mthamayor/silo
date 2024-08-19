import styled from "styled-components";
import Text from "../../components/Text/Text";
import TextSize, { FontFamily } from "../../components/Text/TextEnum";
import { useTranslation } from "react-i18next";
import { useDarkMode, useSetTheme, useThemeColors } from "../../providers/ThemeProvider/ThemeProvider";

import AppLogo from "../Icons/AppLogo";
import { Open, Close, LigthMode, DarkMode, Lang } from "../Icons/NavIcons";
import Button from "../Button/Button";
import { ButtonSize, ButtonType } from "../Button/types";
import { useState } from "react";
import { Theme } from "../../providers/ThemeProvider/colors";

function MainNavigation() {
  const { t } = useTranslation();
  const themeColors = useThemeColors();
  const isDarkMode = useDarkMode();
  const setTheme = useSetTheme();

  const [open, setOpen] = useState(false);

  const handleThemeChange = () => {
    setTheme(isDarkMode ? Theme.LIGHT : Theme.DARK);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const navigations = [
    {
      title: t("navigations.features"),
      link: "#",
    },
    {
      title: t("navigations.company"),
      link: "#",
    },
    {
      title: t("navigations.shop"),
      link: "#",
    },
    {
      title: t("navigations.benefits"),
      link: "#",
    },
    {
      title: t("navigations.partners"),
      link: "#",
    },
    {
      title: t("navigations.contact"),
      link: "#",
    },
  ];

  return (
    <Header>
      <NavigationHeader>
        <AppLogo />
        {open ? (
          <OpenClose onClick={handleOpen}>
            <Close />
          </OpenClose>
        ) : (
          <OpenClose onClick={handleOpen}>
            <Open />
          </OpenClose>
        )}
      </NavigationHeader>
      <NavigationBody open={open}>
        <Reverse>
          <NavigationLightLang>
            <LangLightContainer>
              {isDarkMode ? (
                <ThemeWrapper onClick={handleThemeChange}>
                  <DarkMode />
                </ThemeWrapper>
              ) : (
                <ThemeWrapper onClick={handleThemeChange}>
                  <LigthMode />
                </ThemeWrapper>
              )}
            </LangLightContainer>
            <LangLightContainer>
              <Lang />
              <Text
                fontFamily={FontFamily.SATOSHI}
                themeColors={themeColors}
                fontSize={TextSize.TS16}
                fontSizeLg={TextSize.TS16}
                fontWeight={500}
                color={themeColors.TEXT_DARK}
              >
                {t("lang")}
              </Text>
            </LangLightContainer>
          </NavigationLightLang>
          <Navigation>
            {navigations.map((nav, index) => {
              return (
                <NavigationItem key={index + nav.link}>
                  <Text
                    fontFamily={FontFamily.LT_RENOVATE}
                    themeColors={themeColors}
                    fontSize={TextSize.TS16}
                    fontSizeLg={TextSize.TS16}
                    fontWeight={400}
                    color={themeColors.TEXT_DARK_2}
                  >
                    {nav.title}
                  </Text>
                </NavigationItem>
              );
            })}
          </Navigation>
        </Reverse>
        <Explore>
          <Button size={ButtonSize.XL} type={ButtonType.FILLED} minWidth="100%">
            {t("sectionNine.button")}
          </Button>
        </Explore>
      </NavigationBody>
    </Header>
  );
}

export default MainNavigation;

const Header = styled.div`
  position: relative;

  @media (min-width: 992px) {
    display: flex;
    flex-direction: row;
    padding: 18px 116px;
  }
`;

const NavigationHeader = styled.div`
  padding: 18px 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 992px) {
    padding: 0;
    width: 297px;
  }
`;

const OpenClose = styled.span`
  width: 44px;
  height: 32px;
  display: grid;
  place-items: center;

  @media (min-width: 992px) {
    display: none;
  }
`;

const ThemeWrapper = styled.span`
  display: grid;
  place-items: center;
`;

interface NavigationBodyProps {
  open: boolean;
}

const NavigationBody = styled.div<NavigationBodyProps>`
  display: ${({ open }) => (open ? "block" : "none")};
  width: 100%;
  background: #ffffff; // use the theme color
  position: absolute;

  @media (min-width: 992px) {
    position: static;
    display: flex;
    flex-direction: row;
    height: auto;
  }
`;

const NavigationLightLang = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;

  @media (min-width: 992px) {
    padding-right: 4px;
  }
`;

const LangLightContainer = styled.div`
  padding: 10px 8px;
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const Navigation = styled.div`
  padding: 24px 0px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 8px;

  @media (min-width: 992px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 0;
    gap: 24px;
  }
`;

const NavigationItem = styled.div`
  padding: 12px 16px;

  @media (min-width: 992px) {
    padding: 0;
  }
`;

const Explore = styled.div`
  padding: 24px 16px;
  width: 100%;

  @media (min-width: 992px) {
    padding: 0;
    width: 182px;
  }
`;

const Reverse = styled.div`
  @media (min-width: 992px) {
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
  }
`;
