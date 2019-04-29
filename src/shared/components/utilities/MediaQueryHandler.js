import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { mapValues } from 'lodash';

// Constants.
import { MEDIA_QUERY_MAPPING } from '../../constants/MediaQuery';

// Actions.
import mediaQuerySetValues from '../../actions/mediaQuery/mediaQuerySetValues';

class MediaQueryHandler extends React.PureComponent {
  componentDidMount() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    this.props.actions.mediaQuerySetValues({
      values: this.getQueries(),
    });
  };

  getQueries = () => {
    return mapValues(MEDIA_QUERY_MAPPING, (values) => (
      this.matchMedia(values)
    ));
  };

  matchMedia = ({ minWidth, maxWidth }) => {
    const minQuery = minWidth ? window.matchMedia(`(min-width: ${minWidth}px)`).matches : true;
    const maxQuery = maxWidth ? window.matchMedia(`(max-width: ${maxWidth}px)`).matches : true;

    return minQuery && maxQuery;
  };

  render() {
    return null;
  }
}

MediaQueryHandler.propTypes = {
  actions: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    mediaQuerySetValues,
  }, dispatch),
});

export default compose(
  connect(null, mapDispatchToProps),
)(MediaQueryHandler);
