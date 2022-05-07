import React from "react";
import styles from './SkillsTabs.module.css'
import './SkillsTabsBootstrap.css'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import SkillProgressBar from "../SkillProgressBar/SkillProgressBar";

export default function SkillsTabs() {
  return (
    <Tabs defaultActiveKey="front-end" className={styles.tabs}>
      <Tab eventKey="front-end" title="Front-end">
        <SkillProgressBar language='HTML' lvl='81' />
        <SkillProgressBar language='CSS' lvl='60' />
        <SkillProgressBar language='Javascript' lvl='60' />
      </Tab>
      <Tab eventKey="back-end" title="Back-end">
        <SkillProgressBar language='NodeJS' lvl='35' />
        <SkillProgressBar language='Express' lvl='47' />
      </Tab>
      <Tab eventKey="data base" title="Data Base">
        <SkillProgressBar language='SQL' lvl='50' />
        <SkillProgressBar language='PostgreSQL' lvl='38' />
      </Tab>
      <Tab eventKey="tools" title="Tools">
        <SkillProgressBar language='Git' lvl='51' />
        <SkillProgressBar language='Bash' lvl='25' />
      </Tab>
    </Tabs>
  )
}