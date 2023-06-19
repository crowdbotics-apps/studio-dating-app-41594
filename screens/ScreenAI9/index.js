import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';

const CameraScreen = () => {
  const [image, setImage] = useState(null);
  const [camera, setCamera] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const takePicture = async () => {
    if (camera) {
      const options = {
        quality: 0.5,
        base64: true
      };
      const data = await camera.takePictureAsync(options);
      setImage(data.uri);
    }
  };

  return <View style={styles.container}>
      <ImageBackground source={{
      uri: image || 'https://tinyurl.com/42evm3m3'
    }} style={styles.imageBackground}>
        <Camera ref={ref => setCamera(ref)} style={styles.camera} type={type} ratio={'4:3'} />
      </ImageBackground>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={pickImage} style={styles.button}>
          <Text style={styles.buttonText}>Upload</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={takePicture} style={styles.button}>
          <Text style={styles.buttonText}>Capture</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center'
  },
  camera: {
    flex: 1,
    aspectRatio: 4 / 3
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 18
  }
});
export default CameraScreen;