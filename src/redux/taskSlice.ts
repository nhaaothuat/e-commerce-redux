import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState={
     tasks:[],
     loading:false,
     error:null,
     status:"All"
}

export const fetchTodo= createAsyncThunk('tasks/fetchTodo',async()=>{
     const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
     const data= await res.json()
     console.log(data)
     return data.map(task=>(
          {
               id:task.id,
               title:task.title,
               description:"",
               status:task.completed ? "Completed" : "To Do"
          }
     ))
})

const taskSlice = createSlice({
     name:"task",
     initialState,
     reducers:{
addTask:(state,action)=>{
     state.tasks.push(action.payload)
}
     },
     extraReducers:(builder)=>{
          builder.addCase(fetchTodo.pending,(state)=>{
               state.loading=true;
               state.error=null
          }).addCase(fetchTodo.fulfilled,(state,action)=>{
               state.loading=false;
               state.tasks=action.payload;
          }).addCase(fetchTodo.rejected,(state,action)=>{
               state.loading=false;
               state.error=action.error.message;
          })
     }
})


export const {addTask} = taskSlice.actions;
export default taskSlice.reducer;