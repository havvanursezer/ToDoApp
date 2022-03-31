import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {Actions} from 'react-native-router-flux';
import styles from '../../styles/editPage';
import DatePicker from 'react-native-date-picker';
import ModalNotification from '../../components/ModalNotification';

export default function EditPageComponent({
  date,
  setDate,
  title,
  setTitle,
  open,
  setOpen,
  setDataFunc,
  alertText,
  closeFunc
}) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => Actions.pop()}>
          <Image
            style={styles.backIcon}
            source={require('../../assets/undo.png')}
          />
        </TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.headerText}>Düzenle</Text>
        </View>
      </View>
      <View style={styles.editContainer}>
        <View>
          <View>
            <Text style={styles.titleText}>Konu</Text>
            <TextInput
              style={styles.inputCont}
              value={title}
              onChangeText={text => setTitle(text)}
            />
          </View>
          <DatePicker
            modal open={open}
            date={date}
            onConfirm={date => {
              setDate(date), setOpen(false);
            }}
            onCancel={() => setOpen(false)}
            androidVariant="nativeAndroid"
          />
          <Text style={styles.titleText}>Tarih</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.inputCont,styles.dateCont]}
            onPress={() => setOpen(!open)}>
            <Text style={styles.dateText}>
              {`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`}
            </Text>
            <Image
              style={styles.datePickerIcon}
              resizeMode="contain"
              source={require('../../assets/calendar.png')}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.titleText}>Saat</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.inputCont,styles.dateCont]}
              onPress={() => setOpen(!open)}>
              <Text style={styles.dateText}>
                {`${date.getHours()}:${date.getMinutes().toString().length < 2 ? '0' + date.getMinutes().toString() : date.getMinutes()}`}
              </Text>
              <Image
                style={styles.datePickerIcon}
                resizeMode="contain"
                source={require('../../assets/clock.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => setDataFunc()}>
          <Text style={styles.buttonText}>Kaydet</Text>
        </TouchableOpacity>
      </View>
      <ModalNotification 
        text={alertText}
        closeFunc={closeFunc}
      />
    </View>
  );
}
