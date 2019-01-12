import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
    const { count, data } = this.props;
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

        {data &&
        <article>
          <h4>Api data:</h4>

          <p>{data.title}</p>
          <p>{data.body}</p>

        </article>
        }

      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  data: PropTypes.object,
  actions: PropTypes.shape({
    counterIncrement: PropTypes.func.isRequired,
    counterDecrement: PropTypes.func.isRequired,
  }),
};

const mapStateToProps = ({ counter: { count, apiData } }) => ({
  count,
  data: apiData,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    counterIncrement,
    counterDecrement,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
