import {View, Text, FlatList, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {Actions} from 'react-native-router-flux';
import styles from '../../styles/homePage';

export default function HomePageComponent({
  dataAddFunc,
  checkFunc,
  setText,
  data,
  deleteFunc,
  text,
  editFunc
}) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.header}>Yapılacaklar</Text>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={() => Actions.reset("loginPage")}>
          <Image
            style={styles.logoutIcon}
            source={require('../../assets/logout.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.toDo}>
        <FlatList
          data={data}
          style={{
              flex:1
          }}
          renderItem={({item}) => (
            <View style={styles.listItemTopCont}>
              <View style={styles.listItemsCont}>
                <View style={styles.checkCont}>
                  <TouchableOpacity onPress={() => checkFunc(item)}>
                    <Image
                      style={styles.checkIcon}
                      source={item.done === true ? require( '../../assets/checked.png') : require('../../assets/unchecked.png')}
                    />
                  </TouchableOpacity>
                  <View>
                    <Text style={styles.listTitle}>{item.title}</Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity onPress={() => editFunc(item)}>
                    <Image
                      style={styles.editIcon}
                      source={require('../../assets/edit.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>deleteFunc(item)} >
                    <Image
                      style={styles.editIcon}
                      source={require('../../assets/delete.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          value={text}
          style={styles.textInput}
          onChangeText={text => setText(text)}
        />
        <TouchableOpacity onPress={() => dataAddFunc()}>
          <Image
            style={styles.editIcon}
            source={require('../../assets/plus.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
