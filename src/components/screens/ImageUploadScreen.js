import React from "react";
import { Text, View, Image } from "react-native";
import { Styles } from "../../globals/Styles";
import { Colors } from "../../globals/Colors";

import ImagePicker from 'react-native-image-picker';
import { ButtonGradient } from '../commons/ButtonGradient';
import ImagePick from "./ImagePick";



export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img: ""
        }
        this.openCamera = this.openCamera.bind(this)
        this.openGallery = this.openGallery.bind(this)
    }
    openGallery() {
        const options = {
            title: "Select Image",
            storageOptions: {
                skipBackup: true,
                path: 'dummy_app'
            },
        };

        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                alert('ImagePicker Error: ', response.error)
            }
            else {
                const source = {
                    uri: response.uri
                };
                console.log(source);
                this.setState({
                    img: source
                });
            }
        });
    }
    openCamera() {
        const options = {
            storageOptions: {
                skipBackup: true,
                path: "dummy_app"
            }
        };
        ImagePicker.launchCamera(options, (response) => {
            console.log("Response = ", response);
            if (response.didCancel) {
                console.log("Cancelled!");
            }
            else if (response.error) {
                console.log(response.error);
            }
            else {
                const source = {
                    uri: response.uri
                };
                console.log('Response', JSON.stringify(response));
                this.setState({
                    img: source
                });
            }
        })
    }
    render() {
        return (
            <View>
                <Image
                    source={this.state.img}
                    style={{
                        width: 200,
                        height: 200,
                        alignSelf: "center",
                        marginVertical: 16,
                        backgroundColor: this.state.img ? Colors.trans : Colors.light_grey
                    }}
                />
                <ButtonGradient
                    colors={[Colors.blue, Colors.pink]}
                    text={"Add Image"}
                    gradientStyle={{
                        height: 64,
                    }}
                    textStyle={{
                        color:Colors.white
                    }}
                    style={{
                        alignSelf: "center"
                    }}
                    onPress={() => (this.openGallery())}
                />
            </View>
        )
    }
}