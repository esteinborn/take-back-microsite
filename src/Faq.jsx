import React from 'react';
import ExpansionPanel, { ExpansionPanelSummary, ExpansionPanelDetails } from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import styled from 'styled-components';
import { faqCopy } from './copy';
import { SectionDescription, SectionTitle, SectionContainer } from './styleGuide';

const Faq = () => (
  <SectionContainer>
    <SectionTitle>{faqCopy.title}</SectionTitle>
    <SectionDescription>{faqCopy.description}</SectionDescription>
    <AccordionContainer>{faqCopy.faqs.map(faq => <Accordion {...faq} />)}</AccordionContainer>
  </SectionContainer>

);

const Accordion = props => (
  <ExpansionPanel>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      <div>{props.question}</div>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <SectionDescription>{props.answer}</SectionDescription>
    </ExpansionPanelDetails>
  </ExpansionPanel>
);


const AccordionContainer = styled.div`
  padding: 50px 30px;
`;
export default Faq;
