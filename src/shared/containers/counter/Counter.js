import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

// Components.
import MetaPage from '../../components/meta/MetaPage';

// Actions.
import {
  counterIncrement,
  counterDecrement,
} from '../../actions/counter';

class Counter extends React.PureComponent {

  onClickIncrement = () => {
    this.props.actions.counterIncrement();
  };

  onClickDecrement = () => {
    this.props.actions.counterDecrement();
  };

  render() {
    const { count } = this.props;
    return (
      <div>

        <MetaPage title="Counter"/>

        <h1>Counter page</h1>

        <p>
          Clicked: {count} times
          {' '}
          <button onClick={this.onClickIncrement}>+</button>
          {' '}
          <button onClick={this.onClickDecrement}>-</button>
        </p>

      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  actions: PropTypes.shape({
    counterIncrement: PropTypes.func.isRequired,
    counterDecrement: PropTypes.func.isRequired,
  }),
};

const mapStateToProps = ({ counter: { count } }) => ({
  count,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    counterIncrement,
    counterDecrement,
  }, dispatch),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Counter);
