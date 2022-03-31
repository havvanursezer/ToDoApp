import React, {useState} from 'react';
import {Actions} from 'react-native-router-flux';
import EditPageComponent from '../component/EditPageComponent';

export default function EditPageContainer(props) {
  const [date, setDate] = useState(new Date(props.item.date));
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(props.item.title);
  const [alertText, setAlertText] = useState('');
  const {item, data} = props;
  const setDataFunc = () => {
    if (title !== '') {
     
     let tempList = [];

      data.map(x => {
        if (x.id === item.id) {
          tempList.push({
            id: item.id,
            title: title,
            done: item.done,
            date: date,
          });
        } else {
          tempList.push(x);
        }
      });

      props.setData(tempList);
      setAlertText('Kayıt başarıyla gerçekleşti.');

    } else {
      setAlertText('Konu alanı boş bırakılamaz.');
    }
  };

  const closeFunc = () =>{
      if(alertText == 'Kayıt başarıyla gerçekleşti.'){
          setAlertText("");
        Actions.pop();
      }else{
          setAlertText("");
      }
  }

  return (
    <EditPageComponent
      item={item}
      date={date}
      setDate={setDate}
      title={title}
      setTitle={setTitle}
      open={open}
      setOpen={setOpen}
      setDataFunc={setDataFunc}
      alertText={alertText}
      closeFunc={closeFunc}
    />
  );
}
