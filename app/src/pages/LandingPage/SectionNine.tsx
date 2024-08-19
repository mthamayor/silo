import React from "react";
import styled from "styled-components";
import Text, { GradientText } from "../../components/Text/Text";
import TextSize, { FontFamily } from "../../components/Text/TextEnum";

import { useTranslation } from "react-i18next";
import { useThemeColors } from "../../providers/ThemeProvider/ThemeProvider";
import Button from "../../components/Button/Button";
import { ButtonSize, ButtonType } from "../../components/Button/types";

// icons
import AppStore from "../../components/Icons/AppStore";
import PlayStore from "../../components/Icons/PlayStore";
import AppLogo from "../../components/Icons/AppLogo";
import Facebook from "../../components/Icons/Facebook";
import Twitter from "../../components/Icons/Twitter";
import Instagram from "../../components/Icons/Instagram";
import LinkedIn from "../../components/Icons/LinkedIn";

export default function SectionNine() {
  const { t } = useTranslation();
  const themeColors = useThemeColors();

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
    <SectionNineWrapper>
      <NewsLetter>
        <NewsLetterPartOne>
          <NewsLetterText>
            <Text
              fontFamily={FontFamily.LT_RENOVATE}
              themeColors={themeColors}
              fontSize={TextSize.TS30}
              fontSizeLg={TextSize.TS30}
              fontWeight={600}
              color="#101828"
            >
              {t("sectionNine.newsletter.title")}
            </Text>
            <Text
              fontFamily={FontFamily.SATOSHI}
              themeColors={themeColors}
              fontSize={TextSize.TS16}
              fontSizeLg={TextSize.TS16}
              fontWeight={400}
              color="#00070B"
            >
              {t("sectionNine.newsletter.subtitle")}
            </Text>
          </NewsLetterText>
          <NewsLetterButtons>
            <Input placeholder={t("sectionNine.newsletter.email")}></Input>
            <SubscribeButton>
              {t("sectionNine.newsletter.button")}
            </SubscribeButton>
          </NewsLetterButtons>
        </NewsLetterPartOne>
      </NewsLetter>
      <SectionTwoWrapper>
        <AppLogo />
        <SectionTwoPlay>
          <SectionTwoPlayPartOne>
            <SectionTwoPlayPartOneText>
              <Text
                fontFamily={FontFamily.LT_RENOVATE}
                themeColors={themeColors}
                fontSize={TextSize.TS12}
                fontSizeLg={TextSize.TS12}
                fontWeight={600}
                color={themeColors.TEXT_SHADE}
              >
                {t("sectionNine.playGames")}
              </Text>
              <Text
                fontFamily={FontFamily.LT_RENOVATE}
                themeColors={themeColors}
                fontSize={TextSize.TS24}
                fontSizeLg={TextSize.TS24}
                fontWeight={600}
                color={themeColors.TEXT_DARK_2}
              >
                {t("sectionNine.playWithNoLimits")}
              </Text>
            </SectionTwoPlayPartOneText>
            <Button
              size={ButtonSize.XXL}
              type={ButtonType.FILLED}
              minWidth="0px"
            >
              {t("sectionNine.button")}
            </Button>
          </SectionTwoPlayPartOne>
          <SectionTwoPlayPartTwo>
            <GradientText
              fontFamily={FontFamily.LT_RENOVATE}
              themeColors={themeColors}
              fontSize={TextSize.TS16}
              fontSizeLg={TextSize.TS16}
              fontWeight={400}
            >
              {t("sectionNine.getApp")}
            </GradientText>
            <SectionTwoPlayPartTwoButtons>
              <AppStore />
              <PlayStore />
            </SectionTwoPlayPartTwoButtons>
          </SectionTwoPlayPartTwo>
        </SectionTwoPlay>
        <SectionTwoPlayPartThreeNav>
          {navigations.map((nav, index) => {
            return (
              <Text
                key={index}
                fontFamily={FontFamily.LT_RENOVATE}
                themeColors={themeColors}
                fontSize={TextSize.TS14}
                fontSizeLg={TextSize.TS16}
                fontWeight={400}
                color={themeColors.TEXT_GRAY}
              >
                {nav.title}
              </Text>
            );
          })}
        </SectionTwoPlayPartThreeNav>
        <HR />
        <SectionTwoPartFour>
          <SectionTwoPartFourSocialMedia>
            <Facebook />
            <Twitter />
            <Instagram />
            <LinkedIn />
          </SectionTwoPartFourSocialMedia>
          <SectionTwoPartFourLegal>
            {["sectionNine.legal.0", "sectionNine.legal.1"].map(
              (legal, index) => {
                return (
                  <Text
                    fontFamily={FontFamily.LT_RENOVATE}
                    themeColors={themeColors}
                    fontSize={TextSize.TS14}
                    fontSizeLg={TextSize.TS16}
                    fontWeight={400}
                    color={themeColors.TEXT_DARK_2}
                  >
                    {t(legal)}
                  </Text>
                );
              }
            )}
          </SectionTwoPartFourLegal>
        </SectionTwoPartFour>
      </SectionTwoWrapper>
    </SectionNineWrapper>
  );
}

const SectionNineWrapper = styled.div`
  padding: 0;
`;

const NewsLetter = styled.div`
  padding: 48px 24px;
  background: linear-gradient(to right, #89f7fe 0%, #66a6ff 100%);

  @media (min-width: 992px) {
    padding: 48px 88px;
  }
`;

const NewsLetterPartOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
  }
`;

const NewsLetterText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const NewsLetterButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 382px;

  @media (min-width: 992px) {
    width: 400px;
    gap: 16px;
  }
`;

const Input = styled.input`
  border-radius: 8px;
  border: 0.6px #98a2b3 solid;
  padding: 8px 12px;
  height: 44px;
  width: 252px;

  @media (min-width: 992px) {
    width: 273px;
  }

  &::placeholder {
    color: #667085;
    font-weight: 400;
    font-size: 16px;
    font-weight: 400;
    font-family: "LTRenovate";
  }
`;

const SubscribeButton = styled.button`
  background-color: #1d2939;
  color: white;
  border: 1px solid #1d2939;
  border-radius: 8px;
  padding: 10px 18px;
  text-align: center;
  text-justify: center;
  font-size: 16px;
  font-weight: 700;
  height: 44px;
  font-family: "Satoshi";
`;

const SectionTwoWrapper = styled.div`
  padding: 64px 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 992px) {
    padding: 64px 88px;
  }
`;

const SectionTwoPlay = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 64px;
  }
`;

const SectionTwoPlayPartOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: fit-content;
`;

const SectionTwoPlayPartOneText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SectionTwoPlayPartTwo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SectionTwoPlayPartTwoButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: start;
  gap: 16px;
`;

const SectionTwoPlayPartThreeNav = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;

  @media (min-width: 992px) {
    gap: 24px;
  }
`;

const SectionTwoPartFour = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-items: space-between;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const SectionTwoPartFourSocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

const SectionTwoPartFourLegal = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

const HR = styled.div`
  border: 1px solid #e4e7ec;
`;
