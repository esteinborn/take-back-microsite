import React from "react";
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "material-ui/ExpansionPanel";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import styled from "styled-components";
import { faqCopy } from "./copy";
import {
  SectionDescription,
  SectionTitle,
  SectionContainer,
  SectionContainerConstrain,
} from "./styleGuide";

const Faq = () => (
  <SectionContainer>
    <SectionContainerConstrain>
      <SectionTitle>{faqCopy.title}</SectionTitle>
      <AccordionContainer>
        {faqCopy.faqs.map(faq => <Accordion {...faq} />)}
      </AccordionContainer>
    </SectionContainerConstrain>
  </SectionContainer>
);

const Accordion = props => (
  <ExpansionPanel>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      <SectionDescription>{props.question}</SectionDescription>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <SectionDescription>{props.answer}</SectionDescription>
    </ExpansionPanelDetails>
  </ExpansionPanel>
);

const AccordionContainer = styled.div`
  padding: 50px 10px;
  text-align: left;
`;
export default Faq;
