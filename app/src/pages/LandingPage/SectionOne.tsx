import styled from "styled-components";
import { FlexAlignItems, VerticalLayout } from "../../components/Layout";
import { BorderedText, GradientText } from "../../components/Text/Text";
import { useThemeColors } from "../../providers/ThemeProvider/ThemeProvider";
import TextSize from "../../components/Text/TextEnum";
import { useTranslation } from "react-i18next";

const SectionOne = () => {
  const themeColors = useThemeColors();
  const { t } = useTranslation();

  return (
    <SectionOneWrapper>
      <VerticalLayout marginTop="32px" alignItems={FlexAlignItems.CENTER}>
        <BorderedText
          themeColors={themeColors}
          fontSize={TextSize.TS24}
          fontSizeLg={TextSize.TS30}
          fontWeight={800}
        >
          {t("sectionOne.subTitle")}
        </BorderedText>
        <GradientText
          themeColors={themeColors}
          fontSize={TextSize.TS72}
          fontSizeLg={TextSize.TS132}
          fontWeight={800}
        >
          {t("sectionOne.title")}
        </GradientText>
      </VerticalLayout>
    </SectionOneWrapper>
  );
};

export default SectionOne;

const SectionOneWrapper = styled(VerticalLayout)`
  width: 100%;
  height: calc(100vw * 0.8);
  max-height: 751px;
  padding: 0 16px;
  background-image: url("/images/section-one-bg-optimized.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  text-align: center;
`;
