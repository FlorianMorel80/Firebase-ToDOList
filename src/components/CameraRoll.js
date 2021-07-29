import { PermissionsAndroid, Platform, Button, View, Text, Image } from "react-native";
import CameraRoll from "@react-native-community/cameraroll";


const CameraRolling = () => {
_handleButtonPress = () => {
    CameraRoll.getPhotos({
        first: 10,
        assetType: 'Photos',
    })
    .then(r => {
        this.setState({ photos: r.edges });
    })
    .catch((err) => {
        //Error Loading Images
    });
    };

    return (
        <View>
        <Button title="Load Images" onPress={_handleButtonPress} />
        <ScrollView>
            {this.state.photos.map((p, i) => {
            return (
            <Image
                key={i}
                style={{
                width: 300,
                height: 100,
                }}
                source={{ uri: p.node.image.uri }}
            />
            );
        })}
        </ScrollView>
        </View>
    );
}

export default CameraRolling;