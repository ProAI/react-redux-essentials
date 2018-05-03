import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import DropdownMenu from './DropdownMenu';
import DropdownHeader from './DropdownHeader';
import DropdownDivider from './DropdownDivider';
import DropdownItem from './DropdownItem';
import DropdownLinkItem from './DropdownLinkItem';
import { BaseView } from '../../utils/components';
import { generateKey } from '../../utils';

const propTypes = {
  children: PropTypes.node.isRequired,
  onToggle: PropTypes.func,
  visible: PropTypes.bool,
};

const childContextTypes = {
  onToggle: PropTypes.func.isRequired,
};

const defaultProps = {
  onToggle: null,
  visible: null,
};

class Dropdown extends React.Component {
  state = {
    visible: false,
  };

  getChildContext() {
    return {
      onToggle: this.handleToggle,
    };
  }

  componentWillUnmount() {
    if (this.visible()) {
      document.removeEventListener('mousedown', this.handleDocumentClick);
    }
  }

  handleDocumentClick = (event) => {
    const dropdownElement = this.element;

    if (this.visible()) {
      if (event.target !== dropdownElement && !dropdownElement.contains(event.target)) {
        this.handleToggle();
      }
    }
  };

  handleToggle = () => {
    if (this.visible()) {
      document.removeEventListener('mousedown', this.handleDocumentClick);
    } else {
      document.addEventListener('mousedown', this.handleDocumentClick);
    }

    // execute custom onToggle function
    if (this.props.onToggle !== null) {
      this.props.onToggle();
    }

    // automatically controlled
    if (this.props.visible === null) {
      this.setState({
        visible: !this.state.visible,
      });
    }
  };

  identifier = generateKey('re-dropdown-');

  visible = () => {
    if (this.props.visible !== null) {
      return this.props.visible;
    }

    return this.state.visible;
  };

  render() {
    const {
      children, visible, onToggle, ...otherProps
    } = this.props;

    // create component classes
    const classes = cx(
      // constant classes
      'dropdown',
      // variable classes
      this.visible() && 'show',
    );

    // check if dropdown has a dropdown trigger and menu
    if (React.Children.count(children) !== 2) {
      // eslint-disable-next-line
      console.warn(
        'A dropdown should have exactly two children. The first child should be a <Button> or <Link> component and the second a <Dropdown.Menu>.');
    }

    const identifier = children[0].props.id ? children[0].props.id : this.identifier;

    const onClick = (e) => {
      e.preventDefault();

      if (children[0].props.onClick) {
        children[0].props.onClick(e);
      }

      this.handleToggle();
    };

    const toggle = React.cloneElement(children[0], {
      id: identifier,
      onClick,
      'aria-haspopup': true,
      'aria-expanded': this.visible(),
    });

    const menu = React.cloneElement(children[1], {
      triggerId: identifier,
    });

    return (
      <BaseView
        {...otherProps}
        ref={(element) => {
          this.element = element;
        }}
        className={classes}
      >
        {toggle}
        {menu}
      </BaseView>
    );
  }
}

Dropdown.propTypes = propTypes;
Dropdown.childContextTypes = childContextTypes;
Dropdown.defaultProps = defaultProps;

Dropdown.Menu = DropdownMenu;
Dropdown.Divider = DropdownDivider;
Dropdown.Header = DropdownHeader;
Dropdown.Item = DropdownItem;
Dropdown.LinkItem = DropdownLinkItem;

export default Dropdown;
