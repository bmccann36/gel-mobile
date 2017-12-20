import React, { Component } from 'react';
import Canvas from 'react-native-canvas';
import { StyleSheet, Text, View, Image } from 'react-native';


export default class Test extends Component {

  // handleCanvas = (canvas) => {
  //   const ctx = canvas.getContext('2d');
  //   ctx.fillStyle = 'purple';
  //   ctx.fillRect(0, 0, 100, 100);
  // }
  componentDidMount() {
    this.updateCanavas()
  }

  updateCanavas() {
    const ctx = this.refs.canvas.getContext('2d');
    var imageObj1 = new Image();
    imageObj1.src = require('./assets/bear.jpg')
    const loadImg = async function (){

    }
    // imageObj1.onload = function () {
    //   console.log('work')
    //   ctx.drawImage(imageObj1, 0, 0);
    // }

  }

    render() {
      return (
        <View style={styles.container}>
          <Canvas ref="canvas" width={300} height={300}> </Canvas>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
