// import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './Container.styles';

const ContainerTable = (prop) => (
  <div className="TbodyWrapper">

  </div>
);

Container.propTypes = {
  bla: PropTypes.string,
};

Container.defaultProps = {
  bla: 'container',
};

export default ContainerTable;
