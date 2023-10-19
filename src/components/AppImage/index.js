import {Image} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const AppImage = ({source, width, height, resizeMode, style}) => {
  return (
    <Image
      source={source}
      resizeMode={resizeMode}
      style={{...style, width, height}}
    />
  );
};

export default AppImage;

AppImage.propTypes = {
  source: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  resizeMode: PropTypes.string,
  style: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.checkPropTypes(PropTypes.any)),
    PropTypes.arrayOf(PropTypes.checkPropTypes(PropTypes.any)),
  ]),
};

AppImage.defaultProps = {
  width: 24,
  height: 24,
  resizeMode: 'contain',
};
