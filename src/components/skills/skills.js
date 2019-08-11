import React from "react"
import Item from "../item/item"
import Section from "../section/section"
import SkillCategory from "../skillCategory/skillCategory"
import skillStyles from "./skills.module.css"

export default () => (
  <div>
    <Section sectionText="Skills">
      <SkillCategory title="Languages">
        <ul className={skillStyles.list}>
          <Item skillText="HTML" skillColor="var(--blue)"></Item>
          <Item skillText="CSS" skillColor="var(--blue)"></Item>
          <Item skillText="Sass" skillColor="var(--blue)"></Item>
          <Item skillText="JavaScript" skillColor="var(--blue)"></Item>
          <Item skillText="Typescript" skillColor="var(--blue)"></Item>
        </ul>
      </SkillCategory>
      <SkillCategory title="Tools, Libraries &amp; Framworks">
        <ul className={skillStyles.list}>
          <Item skillText="Git/Github" skillColor="var(--green)"></Item>
          <Item skillText="React" skillColor="var(--green)"></Item>
          <Item skillText="Angular" skillColor="var(--green)"></Item>
          <Item skillText="APIs" skillColor="var(--green)"></Item>
          <Item skillText="REST" skillColor="var(--green)"></Item>
          <Item skillText="Gulp" skillColor="var(--green)"></Item>
          <Item skillText="Gulp" skillColor="var(--green)"></Item>
          <Item skillText="Webpack" skillColor="var(--green)"></Item>
          <Item skillText="NPM" skillColor="var(--green)"></Item>
          <Item skillText="Yarn" skillColor="var(--green)"></Item>
          <Item skillText="jQuery" skillColor="var(--green)"></Item>
          <Item skillText="MySQL" skillColor="var(--green)"></Item>
        </ul>
      </SkillCategory>
      <SkillCategory title="Software">
        <ul className={skillStyles.list}>
          <Item skillText="VScode" skillColor="var(--pink)"></Item>
          <Item skillText="Github" skillColor="var(--pink)"></Item>
          <Item skillText="Photoshop" skillColor="var(--pink)"></Item>
          <Item skillText="Illustrator" skillColor="var(--pink)"></Item>
          <Item skillText="Adobe XD" skillColor="var(--pink)"></Item>
          <Item skillText="Bitbucket" skillColor="var(--pink)"></Item>
          <Item skillText="Jira" skillColor="var(--pink)"></Item>
          <Item skillText="Confluence" skillColor="var(--pink)"></Item>
        </ul>
      </SkillCategory>
    </Section>
    ;
  </div>
)
