import styled from "styled-components";
import TextSize, { FontFamily } from "../../components/Text/TextEnum";
import Text, { GradientText } from "../../components/Text/Text";
import { Trans, useTranslation } from "react-i18next";
import { useThemeColors } from "../../providers/ThemeProvider/ThemeProvider";
import { RoundedImage } from "./Definitions";
import Button from "../../components/Button/Button";
import { ButtonSize, ButtonType } from "../../components/Button/types";

import React from "react";
import { VerticalLayout } from "../../components/Layout";

export default function SectionSeven() {
  const { t } = useTranslation();
  const themeColors = useThemeColors();

  const partnershipBenefits = [
    t("sectionSeven.benefitsOfPartnership.benefits.0"),
    t("sectionSeven.benefitsOfPartnership.benefits.1"),
    t("sectionSeven.benefitsOfPartnership.benefits.2"),
  ];

  return (
    <SectionSevenWrapper>
      <SectionSevenInner>
        <SectionSevenOne>
          <SectionSevenOneText>
            <GradientText
              themeColors={themeColors}
              fontSize={TextSize.TS16}
              fontSizeLg={TextSize.TS16}
              fontWeight={600}
            >
              {t("sectionSeven.partnership")}
            </GradientText>
            <Text
              themeColors={themeColors}
              fontSize={TextSize.TS24}
              fontSizeLg={TextSize.TS36}
              fontWeight={600}
              color={themeColors.TEXT_DARK}
            >
              <Trans t={t}>{t("sectionSeven.gamingPatner")}</Trans>
            </Text>
          </SectionSevenOneText>
          <Text
            fontFamily={FontFamily.SATOSHI}
            themeColors={themeColors}
            fontSize={TextSize.TS14}
            fontSizeLg={TextSize.TS18}
            color={themeColors.TEXT_DARK}
          >
            {t("sectionSeven.gamingPatnerSubtitle")}
          </Text>
        </SectionSevenOne>

        <SectionSevenCenter distance="24px">
          <CenteredButton>
            <Button size={ButtonSize.XL} type={ButtonType.FILLED}>
              {t("sectionSeven.button")}
            </Button>
          </CenteredButton>
          <RoundedImage
            height="588px"
            width="100%"
            src="/images/section-seven-img.jpeg"
          />
        </SectionSevenCenter>
        <SectionSevenBenefits>
          <SectionSevenBenefitsInner>
            <GradientText
              themeColors={themeColors}
              fontSize={TextSize.TS16}
              fontSizeLg={TextSize.TS16}
              fontWeight={600}
            >
              {t("sectionSeven.benefitsOfPartnership.title")}
            </GradientText>
            <SectionSevenBenefitTexts>
              {partnershipBenefits.map((benefit, index) => (
                <Text
                  key={index + benefit}
                  themeColors={themeColors}
                  fontSize={TextSize.TS24}
                  fontSizeLg={TextSize.TS24}
                  color={themeColors.TEXT_DARK}
                >
                  {benefit}
                </Text>
              ))}
            </SectionSevenBenefitTexts>
          </SectionSevenBenefitsInner>
        </SectionSevenBenefits>
      </SectionSevenInner>
    </SectionSevenWrapper>
  );
}

const SectionSevenWrapper = styled.div`
  padding: 56px 16px;

  @media (min-width: 992px) {
    padding: 120px 151px 172px 151px;
    max-height: 924px;
  }
`;

const SectionSevenInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media (min-width: 992px) {
    position: relative;
    height: 588px;
    flex-direction: row;
  }
`;

const SectionSevenOne = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 16px;
`;

const SectionSevenOneText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  gap: 12px;
`;

const SectionSevenCenter = styled(VerticalLayout)`
  position: relative;

  width: 100%;
  
  @media (min-width: 992px) {
    max-width: 418px;
  }
`

const SectionSevenBenefits = styled.div`
  height: 588px;
  align-items: start;
  padding: 41px 0px;
  gap: 24px;
  width: 100%;
`;

const SectionSevenBenefitsInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
  @media (min-width: 992px) {
    justify-content: center;
    align-items: start;
  }
`;

const SectionSevenBenefitTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  height: 100%;
`;

const CenteredButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 992px) {
    padding: 16px 28px;
    display: block;
    position: absolute;
    left: -130px;
    bottom: 184px;
  }
`;
