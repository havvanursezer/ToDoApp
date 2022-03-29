import React from 'react'
import { View, Text, Modal, TouchableOpacity, Image } from 'react-native'
import styles from '../styles/editPage'

export default function ModalNotification({
    text,
    closeFunc,

}) {
    return (
        <Modal
        style={{flex: 1}}
        transparent={true}
        visible={text.length > 0}>
        <View
          style={styles.modalCont}>
          <View
            style={styles.popup}>
            <View
              style={styles.popupTop}>
              <TouchableOpacity
                style={styles.popupCloseButton}
                onPress={() => closeFunc()}>
                <Image
                  style={styles.closeIcon}
                  source={require('../assets/close.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.popupTextCont}>
              <Text style = {styles.popupText}>{text}</Text>
            </View>
          </View>
        </View>
      </Modal>
    )
}
