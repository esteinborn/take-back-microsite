import React from 'react';
import styled from 'styled-components';
import { NYAGCopy } from './copy';
import {
  SectionDescription, SectionTitle, SectionContainerGray, darkGray, hover, ctaGreen, Link,
} from './styleGuide';
import nyag from './assets/nyag.jpg';

const NYAG = () => (
  <SectionContainerGray>
    <SectionTitle>{NYAGCopy.title}</SectionTitle>
    <Image src={nyag} />
    <SectionDescription>
      {NYAGCopy.description}
      <Bullets>
        <li>
          An ongoing investigation of the country’s major opioid manufacturers and distributors, to uncover whether these businesses misled doctors and patients about the efficacy and addictive power of these drugs.
        </li>
        <li>
          Creating the
          <Bullet href="https://ag.ny.gov/feature/i-stop" target="__blank" rel="noopener">
            Internet System for Tracking Over-Prescribing Act (“I-STOP),
          </Bullet>
          which for the first time provided doctors with their patients’ up-to-date controlled substance prescription history.
        </li>
        <li>
          Obtaining settlements with major domestic and global health insurers including
          <Bullet href="https://ag.ny.gov/press-release/ag-schneiderman-announces-national-settlement-anthem-discontinue-pre-authorization" target="__blank" rel="noopener">
            Cigna, Anthem, and Empire BlueCross BlueShield (BCBS),
          </Bullet>
           which insures over 4 million New Yorkers, to remove barriers to life-saving treatment for opioid use disorder.
        </li>
        <li>
          <Bullet href="https://ag.ny.gov/press-release/ag-schneiderman-unveils-statewide-cop-program-equip-and-train-every-new-york-law" target="__blank" rel="noopener">
            Launching the Community Overdose Prevention (“COP”) program,
          </Bullet>
          a life-saving initiative that enabled state and local law-enforcement officers in the state of New York to carry naloxone, the extremely effective heroin antidote that can instantly reverse the effects of an opioid overdose.
        </li>
        <li>
          <Bullet href="https://ag.ny.gov/press-release/ag-schneiderman-announces-settlement-excellus-health-plan-end-wrongful-denial-mental" target="__blank" rel="noopener">
            Enforcing mental health parity laws
          </Bullet>
          to end the wrongful denial of mental health and addiction treatment for New Yorkers.
        </li>
        <li>
          Bringing New York’s most effective law enforcement resources together in the ongoing
          <Bullet href="https://ag.ny.gov/press-release/ag-schneiderman-launches-new-law-enforcement-campaign-crack-down-violent-heroin-and" target="__blank" rel="noopener">
            SURGE Initiative
          </Bullet>
          to root out violent drug trafficking in rural communities and upstate New York.
        </li>
      </Bullets>
    </SectionDescription>
    <SectionDescription>
      Have a question for the Attorney General’s office?
      <Bullet href="https://ag.ny.gov/contact-attorney-general" target="__blank" rel="noopener">
        Get in touch.
      </Bullet>
    </SectionDescription>
  </SectionContainerGray>
);

const Image = styled.img`
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
`;

const Bullet = Link.extend`
  margin: 0 5px;
`;

const Bullets = styled.ul`
  text-align: left;
  padding: 0 40px;
`;



export default NYAG;
