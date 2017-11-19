//import
import React from 'react';
import { Text, View } from 'react-native';

//create Component
const Header = (props) => {
  const { textStyle, viewStyle, subtitleStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
      <Text style={subtitleStyle}>{props.subtitle}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#1e90ff',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 80,
    paddingTop: 15,
    paddingLeft: 20,
    shadowColor: '#000',
    shadowOffset: { widht: 0, height: 2 },
    shadowOpacity: 0.2,
    position: 'relative',
    marginBottom: 10

  },
  textStyle: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
  },
  subtitleStyle: {
    fontSize: 14,
    color: 'white',
  }
};


export { Header };
