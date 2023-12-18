import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({
  title,
  onPress,
  buttonColor,
  textColor,
  bgColor,
}) => {

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor: bgColor || '#3498db' },
        { borderColor: buttonColor || '#2980b9' },
      ]}
    >
      <Text style={[styles.text, { color: textColor || '#ffffff' }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 24,
    padding: 11,
    width: 340,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    marginBottom:15
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    fontWeight: 600,
   
  },
});

export default CustomButton;