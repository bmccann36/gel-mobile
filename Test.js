import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Canvas, { Image as CanvasImage, Path2D } from 'react-native-canvas';

export default class Test extends Component {

  handleCanvas(canvas) {
    const CanvasXSize = 100;
    const CanvasYSize = 100;
    canvas.width = CanvasXSize;
    canvas.height = CanvasYSize;
    const ctx = canvas.getContext('2d');
    const img = new CanvasImage(canvas);

    img.src = 'http://www.ikea.com/gb/en/images/products/vardagen-coffee-cup-and-saucer-off-white__0417311_pe579389_s5.jpg'
    img.addEventListener('load', () => {
      console.log('image is loaded');
      ctx.drawImage(img, 0, 0, 100, 100);
      let imageData = ctx.getImageData(0, 0, 100, 100)
      .then( data => {
        console.log(data)
      })

    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Canvas ref={this.handleCanvas} />
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


      // let myFirstPromise = new Promise((resolve, reject) => {
    //   setTimeout(function(){
    //     resolve("Success!"); // Yay! Everything went well!
    //   }, 2500);
    // });

    // myFirstPromise.then((successMessage) => {
    //   console.log("Yay! " + successMessage);
    // });
