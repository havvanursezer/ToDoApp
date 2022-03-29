import React, {useState} from 'react';
import { Actions } from 'react-native-router-flux';
import toDoList from '../../json/toDoList';
import HomePageComponent from '../component/HomePageComponent';

export default function HomePageContainer() {
  const [data, setData] = useState(toDoList);
  const [text, setText] = useState('');

  const dataAddFunc = () => {
    var obj = {
      id: data[data.length - 1].id + 1,
      title: text,
      done: false,
    };

    var tempArray = [...data, obj];
    setData(tempArray);
    setText('');
  };

  const deleteFunc = item => {
    var tempList = data.filter(x => x.id !== item.id);
    setData(tempList);
  };

  function checkFunc(item) {
    var obj = {
      id: item.id,
      title: item.title,
      done: !item.done,
    };

    var tempList = [];

    data.map(x => {
      if (x.id === item.id) {
        tempList.push(obj);
      } else {
        tempList.push(x);
      }
    });

    setData(tempList);

    console.log(tempList);
  }

  const editFunc = item => {
    Actions.editPage({
        setData:setData,
        item:item,
        data:data
    });
  };

  return (
    <HomePageComponent
      checkFunc={checkFunc}
      dataAddFunc={dataAddFunc}
      text={text}
      setText={setText}
      data={data}
      deleteFunc={deleteFunc}
      editFunc={editFunc}
    />
  );
}
