import React from "react";
import {
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Collapse } from "antd";
import style from "./llistRow.module.scss";
import { TodoListInterface } from "../../type/type";
import { useAppDispatch } from "../../hooks/hook";
import { remove, edit } from "../../redux/todoReducer";
import { useState } from "react";
const { Panel } = Collapse;

const ListRow: React.FC<TodoListInterface> = (props) => {

  const [textEdit, setTextEdit] = useState(props.todos.text);
  const [toggle, setToggle] = useState(true);
  const dispatch = useAppDispatch();

  let str = props.todos.text.split(" ");
  let headerText = str.splice(0, 4).join(" ");
  const EditBtn = () => {
    dispatch(edit({ id: props.todos.id, text: textEdit }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setToggle(!toggle);
    EditBtn();
    e.stopPropagation();
    setTextEdit("");
  };

  const deleteBtn = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    dispatch(remove(props.todos.id));
  };

  return (
    <div className={style.main}>
      <Collapse>
        {toggle ? (
          <Panel
            className={style.plane}
            header={headerText}
            key="1"
            extra={
              <div className={style.icons}>
                <EditOutlined
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                />
                <DeleteOutlined className={style.btn} onClick={deleteBtn} />
              </div>
            }
          >
            <p>{props.todos.text}</p>
          </Panel>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={textEdit}
              onChange={(event) => setTextEdit(event.target.value)}
              required
              placeholder="Change the text..."
            />
          </form>
        )}
      </Collapse>
    </div>
  );
};

export default ListRow;
