import {FC, memo} from 'react';

import {education, experience, information, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';
import TimelineSkill from './TimelineSkill';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Education}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="Education">
          {education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
    <Section className="bg-neutral-100" sectionId={SectionId.Experience}>
        <ResumeSection title="Work">
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        </Section>
    <Section className="bg-neutral-100" sectionId={SectionId.Skills}>
        <ResumeSection title="Skills">
          <p className="pb-8">Mirage's Skill Set: </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
        </Section>
      <Section className="bg-neutral-100" sectionId={SectionId.InformationM}>
        <ResumeSection title="Information">
          {information.map((item) => (
            <TimelineSkill item={item} key={`${item.title}`} />
          ))}
        </ResumeSection>
        </Section>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
