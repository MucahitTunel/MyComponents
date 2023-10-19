import {Text} from 'react-native';
import React from 'react';
import fonts from '../../assets/fonts';
import PropTypes from 'prop-types';
import {FontSize} from '../../constants';

const FONT_WEIGHT = {
  extrabold: fonts.poppinsExtraBold,
  bold: fonts.poppinsBold,
  semibold: fonts.poppinsSemiBold,
  medium: fonts.poppinsMedium,
  regular: fonts.poppinsRegular,
  light: fonts.poppinsLight,
  extralight: fonts.poppinsExtraLight,
  thin: fonts.poppinsThin,
};

const AppText = ({weight, color, fontSize, style, children, ...props}) => {
  return (
    <Text
      style={[{color, fontSize, fontFamily: FONT_WEIGHT[weight]}, style]}
      {...props}>
      {children}
    </Text>
  );
};

export default AppText;

AppText.propTypes = {
  weight: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  styles: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.checkPropTypes(PropTypes.any)),
    PropTypes.arrayOf(PropTypes.checkPropTypes(PropTypes.any)),
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.checkPropTypes(PropTypes.node)),
    PropTypes.node,
  ]),
};

AppText.defaultProps = {
  fontSize: FontSize.medium,
  weight: 'medium',
  style: {},
};
