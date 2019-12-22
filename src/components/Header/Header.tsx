import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Header.less';

import BackArrow from '../BackArrow/BackArrow';
import NavLogo from '../NavLogo/NavLogo';
import NavBar from '../NavBar/NavBar';
import NavTrigger from '../NavTrigger/NavTrigger';
import NavMobileMenu from '../NavMobileMenu/NavMobileMenu';

import toggleMobileMenu from '../../actions/menuActions';
import setProjectState from '../../actions/projectActions';
import { setArticleState } from '../../actions/articleActions';
import { IState } from '../../reducers/initialState';

interface IArticleState {
  open: boolean;
}

interface IProjectState {
  open: boolean;
}

interface IProps {
  article: IArticleState;
  project: IProjectState;

  setArticleState: (event?: MouseEvent) => void;
  setProjectState: (event?: MouseEvent) => void;
  toggleMobileMenu: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

class Header extends Component<IProps, {}> {
  displayBackArrow = (): boolean => {
    const isSmallWindowSize: boolean = window.matchMedia('screen and (max-width: 1024px)').matches;

    if (isSmallWindowSize && (this.props.article.open || this.props.project.open)) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <header>
        <div className="moving-header">
          <div className="container">
            {
              this.displayBackArrow() && <BackArrow
                setArticleState={this.props.setArticleState}
                setProjectState={this.props.setProjectState}
              />
            }
            <NavLogo
              toggleMobileMenu={this.props.toggleMobileMenu}
              setArticleState={this.props.setArticleState}
              setProjectState={this.props.setProjectState} />
            <NavBar />
            <NavTrigger toggleMobileMenu={this.props.toggleMobileMenu} />
          </div>
          <NavMobileMenu toggleMobileMenu={this.props.toggleMobileMenu} />
        </div>
        <div className="body-shadow" onClick={this.props.toggleMobileMenu} role="none" />
      </header>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  article: state.article,
  project: state.project,
});

export default connect(mapStateToProps, {
  setArticleState,
  setProjectState,
  toggleMobileMenu,
})(Header);
