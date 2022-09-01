// @ts-ignore
// @ts-ignore

import React from "react";
import {useAppSelector} from "../../hooks/hook";
import style from './list.module.scss'
import ListRow from "../listRow/listRow";
import {TodoItemInterface, TodoListInterface} from "../../type/type";
import {RootState} from "../../redux/store";
const TodoList:React.FC = (props)=>{

    const listData = useAppSelector((state:RootState) => state.todos.arr)
    return(
        <div className={style.list}>
            {listData.map(( todo: TodoItemInterface)=>{
                return(
                <ListRow todos={todo} key={todo.id}/>

                    )
            })}
        </div>
    );
}

export default TodoList;
