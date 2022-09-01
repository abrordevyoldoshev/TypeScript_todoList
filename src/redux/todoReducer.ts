import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoInterface {
  id: number;
  text: string;
  isComplete?: boolean;
}
let newId = 1;
const initialState: { arr: TodoInterface[] } = {
  arr: [],
};

const todoSlice = createSlice({
  name: "TODOS",
  initialState,
  reducers: {
    addText: (state, action: PayloadAction<string>) => {
      const newTodo: TodoInterface = {
        id: newId++,
        text: action.payload,
        isComplete: false,
      };
      state.arr.push(newTodo);
    },
    remove: (state, action) => {
      const newArray = state.arr.filter((e) => e.id !== action.payload);
      state.arr = [...newArray];
    },
    edit: (state, action) => {
      console.log(action.payload)
      state.arr = state.arr.map((element) => {
        if (element.id === action.payload.id) {
          element.text = action.payload.text;
        }
        return element;
      });
    },
  },
});
export const { addText, remove, edit } = todoSlice.actions;
export default todoSlice.reducer;
