import styled from "styled-components";
import TabNavigation from "../../components/Tabs/TabNavigation";
import { FlexAlignItems, FlexJustifyContent, HorizontalLayout, VerticalLayout } from "../../components/Layout";
import { Trans, useTranslation } from "react-i18next";
import Button from "../../components/Button/Button";
import { ButtonSize, ButtonType } from "../../components/Button/types";
import TextSize, { FontFamily } from "../../components/Text/TextEnum";
import { useThemeColors } from "../../providers/ThemeProvider/ThemeProvider";
import Text from "../../components/Text/Text";

const sectionTwoNavigationData = [
    {
      title: "sectionTwo.selection",
      description: "sectionTwo.selectionDescription",
    },
    {
      title: "sectionTwo.vouchers",
      description: "sectionTwo.vouchersDescription",
    },
    {
      title: "sectionTwo.data",
      description: "sectionTwo.dataDescription",
    },
    {
      title: "sectionTwo.electricity",
      description: "sectionTwo.electricityDescription",
    },
    {
      title: "sectionTwo.cable",
      description: "sectionTwo.cableDescription",
    },
  ];

const SectionTwo = () => {
    const { t } = useTranslation();
    const themeColors = useThemeColors();
    
    return (

        <SectionTwoWrapper>
          <VerticalLayout
            marginBottom="48px"
            alignItems={FlexAlignItems.CENTER}
          >
            <VerticalLayout textAlign="center" maxWidth="896px">
              <HorizontalLayout
                marginBottom="12px"
                justifyContent={FlexJustifyContent.CENTER}
              >
                <Text
                  themeColors={themeColors}
                  color={themeColors.TEXT_PRIMARY}
                  fontSize={TextSize.TS16}
                  fontSizeLg={TextSize.TS30}
                  fontWeight={600}
                >
                  {t("sectionTwo.features")}
                </Text>
              </HorizontalLayout>
              <HorizontalLayout
                marginBottom="8px"
                justifyContent={FlexJustifyContent.CENTER}
              >
                <div className="d-lg-none">
                  <Text
                    themeColors={themeColors}
                    fontSize={TextSize.TS30}
                    fontSizeLg={TextSize.TS48}
                    fontWeight={600}
                  >
                    <Trans t={t}> {t("sectionTwo.gamingHub")}</Trans>
                  </Text>
                </div>
                <div className="d-none d-lg-block">
                  <Text
                    themeColors={themeColors}
                    fontSize={TextSize.TS30}
                    fontSizeLg={TextSize.TS48}
                    fontWeight={600}
                  >
                    {t("sectionTwo.gamingHubLg")}
                  </Text>
                </div>
              </HorizontalLayout>
              <HorizontalLayout
                marginBottom="32px"
                justifyContent={FlexJustifyContent.CENTER}
              >
                <Text
                  fontFamily={FontFamily.SATOSHI}
                  themeColors={themeColors}
                  fontSize={TextSize.TS14}
                  fontSizeLg={TextSize.TS20}
                >
                  {t("sectionTwo.gamingHubSubtitle")}
                </Text>
              </HorizontalLayout>
              <HorizontalLayout justifyContent={FlexJustifyContent.CENTER}>
                <Button
                  size={ButtonSize.XL}
                  type={ButtonType.FILLED}
                  minWidth="221px"
                >
                  {t("sectionTwo.signUpStartWinning")}
                </Button>
              </HorizontalLayout>
            </VerticalLayout>
          </VerticalLayout>
          <BottomSection>
                <div style={{maxWidth: 601, height: 400 }}>
             <TabNavigation data={sectionTwoNavigationData} />
             </div>
             <div style={{maxWidth: 486, height: 'auto'}}>
                <img draggable={false} src="/images/section-two-foot.png" alt="section-two" style={{width: '100%', height: 'auto'}}/>
             </div>
          </BottomSection>
        </SectionTwoWrapper>
    )
}

export default SectionTwo;

const SectionTwoWrapper = styled.div`
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)
    ),
    linear-gradient(
      270deg,
      rgba(55, 147, 255, 0.2) 0%,
      rgba(0, 23, 228, 0.2) 100%
    ),
    linear-gradient(180deg, rgba(0, 0, 0, 0) 22.02%, rgba(0, 0, 0, 0.75) 39.03%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.45) 22.02%, rgba(0, 0, 0, 0) 39.03%),
    url("/images/section-two-bg.png");
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  padding: 64px 24px;

  @media (min-width: 992px) {
    padding: 172px 116px 0;
    max-height: 1108px;
    overflow: hidden;
  }
`;

const BottomSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 32px;

    @media (min-width: 992px) {
        justify-content: center;
        align-items: flex-start;
        flex-direction: row;
    }
`