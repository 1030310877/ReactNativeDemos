import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={this.props._onClick}>
                <Text style={styles.contentStyle}>{this.props.content}</Text>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: 200,
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: 8,
        marginBottom: 8,
        borderWidth: 2,
        borderColor: "#0005a988",
        backgroundColor: '#0005a988',
        borderRadius: 5,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    contentStyle: {
        fontSize: 25,
        textAlign: 'center',
    }
});