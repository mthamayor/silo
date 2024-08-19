import React from "react";
import styled from "styled-components";
import Text, { GradientText } from "../../components/Text/Text";
import { Trans, useTranslation } from "react-i18next";
import { useThemeColors } from "../../providers/ThemeProvider/ThemeProvider";
import TextSize, { FontFamily } from "../../components/Text/TextEnum";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faComment,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function SectionEight() {
  const { t } = useTranslation();
  const themeColors = useThemeColors();
  const preText = "sectionEight.contactDetails.";

  const contacts = [
    {
      logo: <FontAwesomeIcon icon={faPhone} size="2x" />,
      title: preText + "call.title",
      availability: preText + "call.availability",
      address: preText + "call.address",
    },
    {
      logo: <FontAwesomeIcon icon={faComment} size="2x" />,
      title: preText + "chat.title",
      availability: preText + "chat.availability",
      address: preText + "chat.address",
    },
    {
      logo: <FontAwesomeIcon icon={faEnvelope} size="2x" />,
      title: preText + "mail.title",
      availability: preText + "mail.availability",
      address: preText + "mail.address",
    },
    {
      logo: <FontAwesomeIcon icon={faLocationDot} size="2x" />,
      title: preText + "address.title",
      availability: preText + "address.availability",
      address: preText + "address.address",
    },
  ];

  return (
    <SectionEightWrapper>
      <SectionEightOne>
        <SectionEightOneText>
          <GradientText
            themeColors={themeColors}
            fontSize={TextSize.TS16}
            fontSizeLg={TextSize.TS16}
            fontWeight={600}
          >
            {t("sectionEight.contact")}
          </GradientText>
          <Text
            themeColors={themeColors}
            fontSize={TextSize.TS24}
            fontSizeLg={TextSize.TS36}
            fontWeight={600}
            color={themeColors.TEXT_DARK}
          >
            <Trans t={t}>{t("sectionEight.contactSubtitle")}</Trans>
          </Text>
        </SectionEightOneText>
        <Text
          fontFamily={FontFamily.LT_RENOVATE}
          themeColors={themeColors}
          fontSize={TextSize.TS14}
          fontSizeLg={TextSize.TS18}
          fontWeight={400}
          color={themeColors.TEXT_SHADE}
        >
          {t("sectionEight.supportTeam")}
        </Text>
      </SectionEightOne>
      <ContactsSection>
        {contacts.map((contact, index) => (
          <ContactCard key={index}>
            <Logo>{contact.logo}</Logo>
            <ContactCardInfo>
              <Text
                themeColors={themeColors}
                fontSize={TextSize.TS16}
                fontSizeLg={TextSize.TS18}
                fontWeight={600}
                color={themeColors.TEXT_DARK}
              >
                {t(contact.title)}
              </Text>
              <AvailableAddress>
                <Text
                  fontFamily={FontFamily.SATOSHI}
                  themeColors={themeColors}
                  fontSize={TextSize.TS12}
                  fontSizeLg={TextSize.TS24}
                  fontWeight={400}
                  color={themeColors.TEXT_GRADIENT_END}
                >
                  {t(contact.availability)}
                </Text>
                <TextWrap
                  fontFamily={FontFamily.SATOSHI}
                  themeColors={themeColors}
                  fontSize={TextSize.TS14}
                  fontSizeLg={TextSize.TS24}
                  fontWeight={600}
                  color={themeColors.TEXT_GRADIENT_END}
                >
                  {t(contact.address)}
                </TextWrap>
              </AvailableAddress>
            </ContactCardInfo>
          </ContactCard>
        ))}
      </ContactsSection>
    </SectionEightWrapper>
  );
}

const SectionEightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 56px 16px;
  gap: 32px;

  @media (min-width: 992px) {
    padding: 56px 112px;
  }
`;

const SectionEightOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SectionEightOneText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ContactsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
  column-gap: 8px;

  & > * {
    flex: 1 1 calc(50% - 24px); /* Two items per row with 24px gap between */
    width: calc(50% - 24px);
  }

  @media (min-width: 992px) {
    flex: nowrap;
    flex-direction: row;
    gap: 24px;

    & > * {
      flex: 1;
      width: calc(25% - 24px); /* Reset width to auto to accommodate flex */
    }
  }
`;

const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  border-radius: 24px;
  padding: 16px;
  justify-content: space-between;
  background-color: #e6f5fe;

  @media (min-width: 992px) {
    padding: 24px;
  }
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background-color: #039ef2;
`;

const ContactCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 992px) {
    gap: 16px;
  }
`;

const AvailableAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const TextWrap = styled(Text)`
  word-break: break-all;
  overflow-wrap: break-word;
  white-space: normal;
`;
