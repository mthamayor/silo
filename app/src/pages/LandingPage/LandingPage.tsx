import styled from "styled-components";
import {
  FlexJustifyContent,
  HorizontalLayout,
  VerticalLayout,
} from "../../components/Layout";
import MainNavigation from "../../components/Navigation/MainNavigation";
import TextSize, { FontFamily } from "../../components/Text/TextEnum";
import Text from "../../components/Text/Text";
import { useTranslation } from "react-i18next";
import Button from "../../components/Button/Button";
import { ButtonSize, ButtonType } from "../../components/Button/types";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import GlassBackground from "../../components/Background/GlassBackground";
import AssetBackground from "../../components/Background/AssetBackground";
import SectionFour from "./SectionFour";
import SectionThree from "./SectionThree";
import SectionSeven from "./SectionSeven";
import SectionEight from "./SectionEight";
import SectionNine from "./SectionNine";

function LandingPage() {
  const { t } = useTranslation();

  return (
    <div className="container-fluid">
      <div className="row">
        <MainNavigation />
      </div>
      <div className="row">
        <SectionOne />
        <SectionTwo />

        <SectionThree />

        <SectionFour />
        <SectionFiveWrapper>
          <AssetBackground
            backgroundUrl="images/coin2.png"
            width={512}
            height={512}
            top={-86}
            right={-97}
            className="d-none d-lg-block"
          />
          <SectionFiveRow height={752} heightLg={918}>
            <GlassBackground>
              <VerticalLayout>
                <HorizontalLayout marginBottom="8px">
                  <Text fontSize={TextSize.TS24} fontWeight={600}>
                    {t("sectionFive.playMore")}
                  </Text>
                </HorizontalLayout>
                <HorizontalLayout marginBottom="32px">
                  <Text
                    fontSize={TextSize.TS16}
                    fontFamily={FontFamily.SATOSHI}
                  >
                    {t("sectionFive.playMoreSubtitle")}
                  </Text>
                </HorizontalLayout>
                <HorizontalLayout>
                  <Button
                    size={ButtonSize.XL}
                    type={ButtonType.FILLED}
                    minWidth="221px"
                  >
                    {t("sectionTwo.signUpStartWinning")}
                  </Button>
                  <AssetBackground
                    backgroundUrl="/images/gamepad.png"
                    width={422}
                    height={673}
                    right={-176}
                    bottom={-122}
                    rightLg={-187}
                    bottomLg={-124}
                  />
                  <AssetBackground
                    backgroundUrl="/images/discountcoin.png"
                    width={162}
                    height={162}
                    leftLg={61.5}
                    right={174.5}
                    bottom={181.5}
                    bottomLg={179.5}
                  />
                </HorizontalLayout>
              </VerticalLayout>
            </GlassBackground>
          </SectionFiveRow>
          <SectionFiveVerticalLayout>
            <SectionFiveRow height={324}>
              <VerticalLayout
                height="100%"
                justifyContent={FlexJustifyContent.SPACE_BETWEEN}
              >
                <HorizontalLayout>
                  <div
                    style={{
                      borderRadius: 16,
                      padding: 8,
                      background: "rgba(0, 0, 0, 0.10)",
                    }}
                  >
                    <AssetBackground
                      backgroundUrl="/images/basket.png"
                      position="relative"
                      backgroundSize="cover"
                      width={48}
                      height={48}
                    />
                  </div>
                </HorizontalLayout>
                <GlassBackground>
                  <VerticalLayout>
                    <HorizontalLayout marginBottom="8px">
                      <Text fontSize={TextSize.TS24} fontWeight={600}>
                        {t("sectionFive.topUp")}
                      </Text>
                    </HorizontalLayout>
                    <HorizontalLayout>
                      <Text
                        fontSize={TextSize.TS16}
                        fontFamily={FontFamily.SATOSHI}
                      >
                        {t("sectionFive.topUpSubtitle")}
                      </Text>
                    </HorizontalLayout>
                  </VerticalLayout>
                </GlassBackground>
              </VerticalLayout>
            </SectionFiveRow>
            <SectionFiveRow height={562}>
              <GlassBackground>
                <VerticalLayout>
                  <HorizontalLayout marginBottom="8px">
                    <Text fontSize={TextSize.TS24} fontWeight={600}>
                      {t("sectionFive.community")}
                    </Text>
                  </HorizontalLayout>
                  <HorizontalLayout>
                    <Text
                      fontSize={TextSize.TS16}
                      fontFamily={FontFamily.SATOSHI}
                    >
                      {t("sectionFive.communitySubtitle")}
                    </Text>
                  </HorizontalLayout>
                </VerticalLayout>
                <AssetBackground
                  backgroundUrl="/images/user-communication.png"
                  width={372}
                  height={372}
                  right={-52.2}
                  bottom={-65.5}
                />
              </GlassBackground>
            </SectionFiveRow>
          </SectionFiveVerticalLayout>
          <SectionFiveVerticalLayout>
            <SectionFiveRow height={562}>
              <GlassBackground>
                <VerticalLayout>
                  <HorizontalLayout marginBottom="8px">
                    <Text fontSize={TextSize.TS24} fontWeight={600}>
                      {t("sectionFive.paymentMethod")}
                    </Text>
                  </HorizontalLayout>
                  <HorizontalLayout>
                    <Text
                      fontSize={TextSize.TS16}
                      fontFamily={FontFamily.SATOSHI}
                    >
                      {t("sectionFive.paymentMethodSubtitle")}
                    </Text>
                  </HorizontalLayout>
                </VerticalLayout>
                <AssetBackground
                  backgroundUrl="/images/wallet.png"
                  width={292}
                  height={292}
                  right={-21}
                  bottom={-0.5}
                />
              </GlassBackground>
            </SectionFiveRow>
            <SectionFiveRow height={324}>
              <VerticalLayout
                height="100%"
                justifyContent={FlexJustifyContent.SPACE_BETWEEN}
              >
                <HorizontalLayout>
                  <div
                    style={{
                      borderRadius: 16,
                      padding: 8,
                      background: "rgba(0, 0, 0, 0.10)",
                    }}
                  >
                    <AssetBackground
                      backgroundUrl="/images/phone.png"
                      position="relative"
                      backgroundSize="cover"
                      width={48}
                      height={48}
                    />
                  </div>
                </HorizontalLayout>
                <GlassBackground>
                  <VerticalLayout>
                    <HorizontalLayout marginBottom="8px">
                      <Text fontSize={TextSize.TS24} fontWeight={600}>
                        {t("sectionFive.customerSupport")}
                      </Text>
                    </HorizontalLayout>
                    <HorizontalLayout>
                      <Text
                        fontSize={TextSize.TS16}
                        fontFamily={FontFamily.SATOSHI}
                      >
                        {t("sectionFive.customerSupportSubtitle")}
                      </Text>
                    </HorizontalLayout>
                  </VerticalLayout>
                </GlassBackground>
              </VerticalLayout>
            </SectionFiveRow>
          </SectionFiveVerticalLayout>
        </SectionFiveWrapper>
        <SectionSeven />
        <SectionEight />
        <SectionNine />
      </div>
    </div>
  );
}

export default LandingPage;

const SectionFiveWrapper = styled.div`
  position: relative;
  display: flex;
  padding: 72px 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  flex-direction: column;
  gap: 24px;
  overflow: hidden;

  @media (min-width: 992px) {
    display: flex;
    padding: 164px 116px;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    flex-direction: row;
  }
`;

const SectionFiveRow = styled.div<{ height: number; heightLg?: number }>`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: ${({ height }) => height}px;
  padding: 16px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-self: stretch;
  border-radius: 24px;
  background: url(/images/section-five-bg.jpeg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 992px) {
    max-width: 387px;
    ${({ heightLg }) => heightLg && `height: ${heightLg}px`};
    flex-direction: column;
  }
`;

const SectionFiveVerticalLayout = styled(VerticalLayout)`
  gap: 24px;

  @media (min-width: 992px) {
    gap: 32px;
  }
`;
