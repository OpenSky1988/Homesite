import React from 'react';

import Banner from '../../components/Banner/Banner';
import Greetings from '../../components/Greetings/Greetings';
import Services from '../../components/Services/Services';
import ProjectList from '../../components/Projects/ProjectList';
import Contacts from '../../components/Contacts/Contacts';

import StaticData from '../../components/StaticData';
import './Main.less';

const LinkItem: React.FC<{ link: ILink }> = ({ link }) => (
  <li
    id={link.id}
    key={link.id}>
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={link.img}
        // border="0"
        alt={link.alt}
      />
    </a>
  </li>
);

const MainScreen: React.FC<{}> = () => {
  const renderLinks = () => StaticData.links
    .map((link) => <LinkItem key={link.id} link={link} />);

  return (
    <main>
      <Banner />
      <Greetings />
      <Services />
      <ProjectList />
      <Contacts addLinks={renderLinks} />
    </main>
  );
};

export default MainScreen;
