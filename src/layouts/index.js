import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link, { navigateTo, withPrefix } from 'gatsby-link';
import Helmet from 'react-helmet';

import './index.css';
import favicon from '../assets/favicon.ico';

const Header = ({ name, org, title, date }) => (
  <header>
    <Link to={withPrefix('/1')}>
      <span>{`${name} | ${org}`}</span> — {title}
    </Link>
    <time>{date}</time>
  </header>
);

class TemplateWrapper extends Component {
  componentDidMount() {
    document.addEventListener('keydown', ({ keyCode }) => {
      const now = parseInt(location.pathname.substr(1));
      const NEXT = 39;
      const PREV = 37;

      const slides = this.props.data.allSitePage.edges.filter(page => {
        const id = parseInt(page.node.path.substr(1));
        if (id && id !== 404) {
          return true;
        }
      });

      if (now) {
        if (keyCode === PREV && now === 1) {
          return false;
        } else if (keyCode === NEXT && now === slides.length) {
          return false;
        } else if (keyCode === NEXT) {
          navigateTo(withPrefix(`/${now + 1}`));
        } else if (keyCode === PREV) {
          navigateTo(withPrefix(`/${now - 1}`));
        }
      }
    });
  }
  render() {
    const { children, data } = this.props;
    return (
      <div>
        <Helmet>
          <title>{`${data.site.siteMetadata.title} | ${
            data.site.siteMetadata.name
          }`}</title>
          <link rel="shortcut icon" href={favicon} />
        </Helmet>
        <Header
          name={data.site.siteMetadata.name}
          org={data.site.siteMetadata.org}
          title={data.site.siteMetadata.title}
          date={data.site.siteMetadata.date}
        />
        <div id="slide">{children()}</div>
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
};

export default TemplateWrapper;

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        name
        title
        date
        org
      }
    }
    allSitePage {
      edges {
        node {
          path
          component
          pluginCreator {
            name
            pluginFilepath
          }
        }
      }
    }
  }
`;
