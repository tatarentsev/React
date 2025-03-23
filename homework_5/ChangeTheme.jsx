import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ChangeTheme() {
  const changeTheme = useSelector(state => state);
  const dispatch = useDispatch();

  const change = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  }

  return (
    <button 
      style={{backgroundColor: changeTheme === true ? 'white' : 'black', 
        color: changeTheme === true ? 'black' : 'white',
        height: '800px', 
        width: '800px',
        fontSize: '2rem',
        transition: '.8s all ease'
      }} 
      onClick={change}>Сменить тему на {changeTheme === true ? 'темную' : 'светлую'}</button>
  );
}