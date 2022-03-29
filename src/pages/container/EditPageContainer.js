import React, {useState} from 'react';
import {Actions} from 'react-native-router-flux';
import EditPageComponent from '../component/EditPageComponent';

export default function EditPageContainer(props) {
  const [date, setDate] = useState(new Date(props.item.date));
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(props.item.title);
  const [errorText, setErrorText] = useState('');

  const setDataFunc = () => {
    if (title !== '') {
      var obj = {
        id: props.item.id,
        title: title,
        done: props.item.done,
        date: date,
      };

      var tempList = [];

      props.data.map(x => {
        if (x.id === props.item.id) {
          tempList.push(obj);
        } else {
          tempList.push(x);
        }
      });

      props.setData(tempList);
      console.log(tempList);
      setErrorText('Kayıt başarıyla gerçekleşti.');

    } else {
      setErrorText('Konu alanı boş bırakılamaz.');
    }
  };

  const closeFunc = () =>{
      if(errorText == 'Kayıt başarıyla gerçekleşti.'){
          setErrorText("");
        Actions.pop();
      }else{
          setErrorText("");
      }
  }

  return (
    <EditPageComponent
      item={props.item}
      date={date}
      setDate={setDate}
      title={title}
      setTitle={setTitle}
      open={open}
      setOpen={setOpen}
      setDataFunc={setDataFunc}
      errorText={errorText}
      closeFunc={closeFunc}
    />
  );
}
