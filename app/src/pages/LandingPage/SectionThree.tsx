import { useState } from "react";
import styled from "styled-components";
import TextSize, { FontFamily } from "../../components/Text/TextEnum";
import Text, { GradientText } from "../../components/Text/Text";
import { Trans, useTranslation } from "react-i18next";
import { useThemeColors } from "../../providers/ThemeProvider/ThemeProvider";
import { RoundedImage } from "./Definitions";
import Button from "../../components/Button/Button";
import { ButtonSize, ButtonType } from "../../components/Button/types";

const SectionThree = () => {
  const { t } = useTranslation();
  const themeColors = useThemeColors();

  const [mission, setMission] = useState(false);
  const [vision, setVision] = useState(true);

  const actiVateMissionTab = () => {
    setMission(true);
    setVision(false);
  };

  const actiVateVisionTab = () => {
    setVision(true);
    setMission(false);
  };

  const options = [
    {
      title: "sectionThree.vision.title",
      function: actiVateVisionTab,
      status: vision,
      text: "sectionThree.vision.text",
    },
    {
      title: "sectionThree.mission.title",
      function: actiVateMissionTab,
      status: mission,
      text: "sectionThree.mission.text",
    },
  ];

  return (
    <SectionThreeWrapper>
      <PlayingHand src="/images/section-three-playing-hand.png" />
      <SectionThreePartOne>
        <SectionThreeOneText>
          <GradientText
            themeColors={themeColors}
            fontSize={TextSize.TS16}
            fontSizeLg={TextSize.TS16}
            fontWeight={800}
          >
            {t("sectionThree.company")}
          </GradientText>
          <Text
            themeColors={themeColors}
            fontSize={TextSize.TS36}
            fontSizeLg={TextSize.TS36}
            fontWeight={600}
          >
            <Trans t={t}>{t("sectionThree.platform")}</Trans>
          </Text>
        </SectionThreeOneText>
        <Text
          fontFamily={FontFamily.SATOSHI}
          themeColors={themeColors}
          fontSize={TextSize.TS16}
          fontSizeLg={TextSize.TS24}
        >
          {t("sectionThree.story")}
        </Text>
      </SectionThreePartOne>
      <SectionThreePartTwo>
        <SectionThreePartTwoToggleSection>
          <SectionThreeToggle>
            {options.map((option, index) => (
              <Button
                onClick={option.function}
                key={index + option.title}
                size={ButtonSize.LG}
                type={option.status ? ButtonType.FILLED : ButtonType.TEXT}
                color={themeColors.TEXT_LIGHT}
              >
                {t(option.title)}
              </Button>
            ))}
          </SectionThreeToggle>
          {options.map((option, index) => (
            <Text
              key={index + option.title}
              fontFamily={FontFamily.SATOSHI}
              themeColors={themeColors}
              fontSize={TextSize.TS18}
              fontSizeLg={TextSize.TS18}
              color={themeColors.BUTTON_OUTLINE_TEXT_COLOR}
              display={option.status ? "block" : "none"}
            >
              {t(option.text)}
            </Text>
          ))}
        </SectionThreePartTwoToggleSection>
        <RoundedImage height="100%" src="/images/section-three-img.jpeg" />
      </SectionThreePartTwo>
    </SectionThreeWrapper>
  );
};

export default SectionThree;

const SectionThreeWrapper = styled.div`
  padding: 72px 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 992px) {
    position: relative;
    padding: 148px 116px;
    flex-direction: row;
    gap: 57px;
    z-index: 10;
  }
`;

const SectionThreePartOne = styled.div`
  height: 563px;
  width: 100%;
  padding: 32px 16px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: end;
  align-items: start;
  background: linear-gradient(
      183deg,
      rgba(0, 0, 0, 0) 17.94%,
      rgba(0, 0, 0, 0.8) 44.55%
    ),
    url(/images/section-three-bg.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 30% 10%;

  @media (min-width: 992px) {
    padding: 48px;
    height: 100%;
  }
`;

const SectionThreeOneText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  gap: 12px;
`;

const SectionThreePartTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
  height: 765px;
  background-color: white;

  @media (min-width: 992px) {
    height: 100%;
  }
`;

const SectionThreePartTwoToggleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  border: 1px solid #f2f4f7;
  padding: 16px;
  border-radius: 24px;
`;

const SectionThreeToggle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: fit-content;
  padding: 6px;
  border-radius: 16px;
  background: linear-gradient(
    180deg,
    rgba(3, 158, 242, 0.3) 0%,
    rgba(2, 126, 194, 0.3) 100%
  );
`;

const PlayingHand = styled.img`
  display: none;
  object-fit: cover;
  width: 226px;
  height: 162px;
  rotate: -1.73deg;

  @media (min-width: 992px) {
    display: block;
    position: absolute;
    right: 208.22px;
    top: 50px;
    z-index: -10;
  }
`;
