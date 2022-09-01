import React, { useState } from "react";
import {useAppDispatch} from "../../hooks/hook";
import {addText} from '../../redux/todoReducer'
import style from './form.module.scss'
const TodoForm: React.FC = () => {

  const [text, setText] = useState('');
  const dispatch = useAppDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
   dispatch(addText(text))
   e.preventDefault()
   setText('')
  };


  return (
    <div className={style.main}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          placeholder="Enter text"
          onChange={(event) => setText(event.target.value)}
        required />
      </form>
    </div>
  );
};

export default TodoForm;
