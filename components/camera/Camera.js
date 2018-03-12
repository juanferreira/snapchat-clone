import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { default as CameraView, RNCamera } from 'react-native-camera';

import Header from './Header';
import Footer from './Footer';

class Camera extends Component {

    constructor(props) {
        super(props);

        this.camera = null;

        this.state = {
            camera: {
                aspect: CameraView.constants.Aspect.fill,
                captureTarget: CameraView.constants.CaptureTarget.cameraRoll,
                type: CameraView.constants.Type.back,
                orientation: CameraView.constants.Orientation.auto,
                flashMode: CameraView.constants.FlashMode.auto,
            },

            isRecording: false
        };
    }

    render() {
        return (
            <RNCamera 
                ref={cam => {
                    this.camera = cam;
                }}
                style={styles.container}
                aspect={this.state.camera.aspect}
                captureTarget={this.state.camera.captureTarget}
                type={this.state.camera.type}
                flashMode={this.state.camera.flashMode}
                permissionDialogTitle="Sample title"
                permissionDialogMessage="Sample dialog message"
            >
                <Header headerContainerStyle={styles.header} />

                <Footer footerContainerStyle={styles.footer} />
            </RNCamera>
        );
    }
};

export default Camera;

const styles = StyleSheet.create({
    container: {
      flex: 1
    },

    header: {
        flex: 1,
        flexDirection: 'row'
    },

    footer: {
        flex: 1,
        flexDirection: 'row'
    }
  });