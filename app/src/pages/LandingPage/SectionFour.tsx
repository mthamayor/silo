import styled from "styled-components";
import Button from "../../components/Button/Button";
import { ButtonSize, ButtonType } from "../../components/Button/types";
import TextSize, { FontFamily } from "../../components/Text/TextEnum";
import { FlexAlignItems, HorizontalLayout, VerticalLayout } from "../../components/Layout";
import Text from "../../components/Text/Text";
import { useTranslation } from "react-i18next";

const SectionFour = () => {
    const { t } = useTranslation();
    
    return (
        <SectionFourWrapper>
          <VerticalLayout alignItems={FlexAlignItems.CENTER}>
            <HorizontalLayout marginBottom="12px">
              <Text
                fontSize={TextSize.TS16}
                fontWeight={600}
                fontSizeLg={TextSize.TS16}
              >
                {t("sectionFour.shopLevelUp")}
              </Text>
            </HorizontalLayout>
            <HorizontalLayout marginBottom="8px">
              <Text
                fontSize={TextSize.TS30}
                fontWeight={600}
                fontSizeLg={TextSize.TS48}
              >
                {t("sectionFour.upgradeGamingExperience")}
              </Text>
            </HorizontalLayout>
            <HorizontalLayout marginBottom="32px">
              <Text
                fontFamily={FontFamily.SATOSHI}
                fontSize={TextSize.TS14}
                fontSizeLg={TextSize.TS20}
              >
                {t("sectionFour.upgradeGamingExperienceSubtitle")}
              </Text>
            </HorizontalLayout>
            <Button
              size={ButtonSize.XL}
              type={ButtonType.FILLED}
              minWidth="221px"
            >
              {t("sectionTwo.signUpStartWinning")}
            </Button>
          </VerticalLayout>
        </SectionFourWrapper>
    )
}

export default SectionFour;

const SectionFourWrapper = styled.div`
  display: flex;
  text-align: center;
  height: 778px;
  padding: 172px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  background: radial-gradient(
      37.56% 37.55% at 51.39% 47.68%,
      rgba(0, 0, 0, 0.54) 59.79%,
      rgba(0, 0, 0, 0.18) 100%
    ),
    radial-gradient(
      26.9% 21.16% at 51.39% 47.68%,
      rgba(0, 0, 0, 0.27) 67.41%,
      rgba(0, 0, 0, 0.09) 100%
    ),
    url("/images/section-two-bg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (min-width: 992px) {
    display: flex;
    height: 1088px;
    padding: 172px 151px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    align-self: stretch;
  }
`;
