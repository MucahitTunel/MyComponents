import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types;';

const AppCenteredView = ({children, ...props}) => {
  return (
    <View style={styles.container} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppCenteredView;

AppCenteredView.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.checkPropTypes(PropTypes.node)),
    PropTypes.node,
  ]),
};
