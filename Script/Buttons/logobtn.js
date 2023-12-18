import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LogoButton = ({
  title,
  onPress,
  buttonColor,
  textColor,
  bgColor,
  iconName,
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
      <View style={styles.buttonContent}>
        {iconName && (
          <Icon name={iconName} size={20} color="black" style={styles.icon} />
        )}
        <View style={styles.textContainer}>
          <Text style={[styles.text, { color: textColor || '#ffffff' }]}>

            
            {title}
          </Text>
        </View>
      </View>
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
    marginBottom: 15,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
   // marginLeft: 15, // Margin from the left
  },
  icon: {
   paddingLeft:4
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    fontWeight: '600',
  },
});

export default LogoButton;
