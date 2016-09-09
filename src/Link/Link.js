import React, { Component, PropTypes } from 'react';
import { Link as RouterLink } from 'react-router';

const propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string.isRequired,
  preventToggle: PropTypes.bool,
  preventFocus: PropTypes.bool,
};

const contextTypes = {
  toggle: PropTypes.func,
};

const defaultProps = {
  preventToggle: false,
  preventFocus: false,
};

class Link extends Component {
  onClick = (event) => {
    if (this.props.onClick) {
      this.props.onClick(event);
    }

    if (this.context.toggle !== undefined && !this.props.preventToggle) {
      this.context.toggle();
    }

    if (this.props.preventFocus) {
      this.link.blur();
    }
  }

  render() {
    const { to, ...attributes } = this.props;
    delete attributes.preventToggle;
    delete attributes.preventFocus;

    // external link
    if (to.substring(0, 7) === 'http://' || to.substring(0, 8) === 'https://') {
      return (
        <a {...attributes} href={to} target="_blank" rel="noopener noreferrer" />
      );
    }

    return (
      <RouterLink {...attributes} to={to} onClick={this.onClick} ref={c => { this.link = c; }} />
    );
  }
}

Link.propTypes = propTypes;
Link.contextTypes = contextTypes;
Link.defaultProps = defaultProps;

export default Link;