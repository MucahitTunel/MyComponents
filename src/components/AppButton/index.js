import {
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors, FontSize} from '../../constants';
import AppText from '../AppText';
import PropTypes from 'prop-types';
import AppImage from '../AppImage';

const AppButton = ({
  type,
  isLoading,
  text,
  textStyle,
  textWeight,
  disabled,
  image,
  imageStyle,
  imageWidth,
  imageHeight,
  onPress,
}) => {
  let btn = {...styles.btn};
  let btnTxt = {...styles.btnText};
  let btnStyle;
  let btnTxtStyle;

  if (type === 'primary') {
    btnStyle = styles.btnPrimary;
    btnTxtStyle = styles.btnTextPrimary;
  } else if (type === 'secondary') {
    btnStyle = styles.btnSecondary;
    btnTxtStyle = styles.btnTextSecondary;
  } else {
    btnStyle = styles.btnTertiary;
  }

  const allButtonStyles = [btn, btnStyle];

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={allButtonStyles}
      activeOpacity={0.7}>
      {isLoading ? <ActivityIndicator /> : null}
      {!isLoading && image ? (
        <AppImage
          width={imageWidth}
          height={imageHeight}
          source={image}
          style={[styles.image, imageStyle]}
        />
      ) : null}

      {!isLoading && text && !image ? (
        <AppText style={[btnTxt, btnTxtStyle, textStyle]} weight={textWeight}>
          {text}
        </AppText>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 56,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnPrimary: {
    backgroundColor: Colors.buttonPrimaryColor,
  },
  btnSecondary: {
    color: Colors.buttonSecondaryColor,
    borderWidth: 1,
    borderColor: Colors.buttonBorderColor,
  },
  btnTertiary: {
    height: 60,
    width: 60,
    borderRadius: 60,
    backgroundColor: Colors.buttonTertiaryColor,
  },
  btnText: {
    fontSize: FontSize.medium,
  },
  btnTextPrimary: {
    color: Colors.textPrimaryColor,
  },
  btnTextSecondary: {
    color: Colors.textSecondaryColor,
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default AppButton;

AppButton.propTypes = {
  type: PropTypes.string,
  isLoading: PropTypes.bool,
  text: PropTypes.string,
  textStyle: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.checkPropTypes(PropTypes.any)),
    PropTypes.arrayOf(PropTypes.checkPropTypes(PropTypes.any)),
  ]),
  textWeight: PropTypes.string,
  disabled: PropTypes.bool,
  image: PropTypes.string,
  imageStyle: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.checkPropTypes(PropTypes.any)),
    PropTypes.arrayOf(PropTypes.checkPropTypes(PropTypes.any)),
  ]),
  onPress: PropTypes.func,
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
};

AppButton.defaultProps = {
  type: 'primary',
  isLoading: false,
  textStyle: {},
  textWeight: 'medium',
  disabled: false,
  image: null,
  imageStyle: {},
  imageWidth: 24,
  imageHeight: 24,
};

/*
  type,
  isLoading,
  text,
  textStyle,
  textWeight,
  disabled,
  image,
  imageStyle,
  onPress,
  */
