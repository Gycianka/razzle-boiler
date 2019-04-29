import { connect } from 'react-redux';

const mapStateToProps = ({ mediaQuery: { values } }) => ({
  mediaQuery: values,
});

const mediaQueryProvider = connect(mapStateToProps);

export default mediaQueryProvider;
