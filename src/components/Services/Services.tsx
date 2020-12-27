import React from 'react';
import { useTranslation } from 'react-i18next';
import './Services.less';

const locale = 'ru';

const skills = [
  {
    id: '1',
    img: '/img/home/responsive.png',
    en: {
      name: 'Web Design',
      description: 'Structure, interface, functionality',
    },
    ru: {
      name: 'Архитектура',
      description: 'Структура, интерфейс, функционал',
    },
  },
  {
    id: '2',
    img: '/img/home/ux_ui.svg',
    en: {
      name: 'UX',
      description: 'Semantic elements, ARIA, responsiveness',
    },
    ru: {
      name: 'Юзабилити',
      description: 'Семантические элементы, ARIA, адаптивность',
    },
  },
  {
    id: '3',
    img: '/img/home/code.svg',
    en: {
      name: 'Code',
      description: 'HTML, CSS, JS, React, Redux, TypeScript, Jest',
    },
    ru: {
      name: 'Код',
      description: 'HTML, CSS, JS, React, Redux, TypeScript, Jest',
    },
  },
];

const SkillItem: React.FC<{ skill: ISkill }> = ({ skill }) => (
  <div
    className="skill"
    key={skill.id}
  >
    <div
      className="skill-icon"
      style={{ backgroundImage: `url("${skill.img}")` }}
    />
    <h3>{skill[locale].name}</h3>
    <h4>{skill[locale].description}</h4>
  </div>
);

const Services: React.FC<{}> = () => {
  const {t} = useTranslation();

  const renderServices = () => skills
    .map((skill) => <SkillItem key={skill.id} skill={skill} />);

  return (
    <section id="services">
      <div className="container">
        <h2>{t('MainScreen.Services.Title')}</h2>
        <div className="skill-container">
          {renderServices()}
        </div>
      </div>
    </section>
  );
};

export default Services;
