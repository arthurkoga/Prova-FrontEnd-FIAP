import { useState } from 'react';
import styles from "./cursos.module.css";

const tecnologia = [
  { name: 'Big Data Ecosystem', type: 'REMOTO • LIVE' },
  { name: 'Creating Dashboards for BI', type: 'REMOTO • LIVE' },
  { name: 'Big Data Science - Machine Learning & Data Mining', type: 'REMOTO • LIVE + MULTIMIDIA' },
  { name: 'Storytelling', type: 'REMOTO • LIVE' }
];

const inovacao = [
  { name: "UX", type: "DIGITAL"},
  { name: "UX Writing", type: "LIVE"},
  { name: "Storytelling para Negócios", type: "LIVE"},
  { name: "Chatbots", type: "LIVE"}
];

const negocios = [
  { name: "Agile Culture", type: "DIGITAL"},
  { name: "DPO Data Protection Officer", type: "LIVE"},
  { name: "IT Business Partner", type: "LIVE"},
  { name: "Perícia Forense Computacional", type: "LIVE"}
];

export function Course() {
  const [activeSection, setActiveSection] = useState('tecnologia'); 

  const handleItemClick = (section) => {
    setActiveSection(section); 
  };

  return (
    <div className={styles.app}>
        <header>
          <div className={styles.title}>
            <h1>Cursos</h1>
            <h2>Cursos de Curta Duração</h2>
          </div>
          <ul className={styles.items}>
            <li className={activeSection === 'tecnologia' ? styles.active : ''} onClick={() => handleItemClick('tecnologia')}>Tecnologia</li>
            <li className={activeSection === 'inovacao' ? styles.active : ''} onClick={() => handleItemClick('inovacao')}>Inovação</li>
            <li className={activeSection === 'negocios' ? styles.active : ''} onClick={() => handleItemClick('negocios')}>Negócio</li>
          </ul>
        </header>
        <section style={{ display: activeSection === 'tecnologia' ? 'block' : 'none' }}>
          <h3>Tecnologia</h3>
          <ul className={styles.courseList}>
            {tecnologia.map((course, index) => (
              <li key={index} className={styles.courseItem}>
                <span className={styles.courseName}>{course.name}</span>
                <span className={styles.courseType}>{course.type}</span>
              </li>
            ))}
          </ul>
        </section>
        <section style={{ display: activeSection === 'inovacao' ? 'block' : 'none' }}>
          <h3>Inovação</h3>
          <ul className={styles.courseList}>
            {inovacao.map((course, index) => (
              <li key={index} className={styles.courseItem}>
                <span className={styles.courseName}>{course.name}</span>
                <span className={styles.courseType}>{course.type}</span>
              </li>
            ))}
          </ul>
        </section>
        <section style={{ display: activeSection === 'negocios' ? 'block' : 'none' }}>
          <h3>Negócios</h3>
          <ul className={styles.courseList}>
            {negocios.map((course, index) => (
              <li key={index} className={styles.courseItem}>
                <span className={styles.courseName}>{course.name}</span>
                <span className={styles.courseType}>{course.type}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
  );
};


