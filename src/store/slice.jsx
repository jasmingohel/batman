import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  value: 0,
  UserData:[],
  isLoading:true,
  IsUpdate:true,
  changeMesage:false,
  Glitch:false,
  Gone:false,
  BatCounter:0,
}
// GET USER DATA //
 const AxiosUser = () => {
  return axios.get(`http://localhost:3001/getUsers`);
};
export const AsyncThunkGetUser = createAsyncThunk("User/getUser", async () => {
  const { data } = await AxiosUser();
  console.log(' GET Axios data:', data);
  return data;
});
// ADD USER DATA //
 const AxiosAddUser = (name,age,username) => {
  return axios.post("http://localhost:3001/createUser", {name,age,username,try: "demo"})
};
export const AsyncThunkAddUser = createAsyncThunk("User/AddUser", async({name,age,username}) => {
  console.log('data from ADD aysnc thunk:', name,age,username);
  const { data } = await AxiosAddUser(name,age,username);
  console.log('ADD axios data',data);
  return data;
});
// DELETE USER DATA //
const AxiosDeleteUser = (id) => {
  return axios.post(`http://localhost:3001/deleteUser/${id}`)
};

export const AsyncThunkDeleteUser = createAsyncThunk("User/DeleteUser", async({id}) => {
  const { data } = await AxiosDeleteUser(id);
  console.log('Delete axios data',data);
  return data;
});
// UPDATE USER DATA //
const AxiosUpdateUser = (data) => {
  console.log('update final data',data)
  return axios.put(`http://localhost:3001/updateUser`, { data })
};

export const AsyncThunkUpdateUser = createAsyncThunk("User/UpdateUser", async({data}) => {
  const response = await AxiosUpdateUser(data);
  console.log('Update axios data',response.data);
  return response.data;
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////

export const CounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setChangeMessage: (state) => {
      state.changeMesage=true;
    },
    setisLoading: (state) => {
      state.isLoading=false;
    },
    setBatCounter:(state)=>{
      state.BatCounter=state.BatCounter+1;
    },
    setGlitch:(state)=>{
      state.Glitch=true;
    },
    DisableGlitch:(state)=>{
      state.Glitch=false;
    },
    EnableGone:(state)=>{
      state.Gone=true;
    },
    DisableGone:(state)=>{
      state.Gone=false;
    }
    /** 
      GET USER DATA
     **/

  },
  extraReducers: (builder) => {
    builder
      /** 
      GET USER DATA
     **/
      .addCase(AsyncThunkGetUser.fulfilled, (state, action) => {
        state.UserData = action.payload;
        console.log('payload:',action.payload);
      })
      /** 
      ADD USER DATA
     **/
      .addCase(AsyncThunkAddUser.fulfilled, (state, action) => {
        console.log('ADD payload:',action.payload);
        
      })
      /** 
      DELETE USER DATA
     **/
      .addCase(AsyncThunkDeleteUser.fulfilled, (state, action) => {
        console.log('DELTE payload:',action.payload);
       })
    }
})

// Action creators are generated for each case reducer function
export const { setChangeMessage, setisLoading, setBatCounter,setGlitch,DisableGlitch,EnableGone,DisableGone } = CounterSlice.actions

export default CounterSlice.reducer


// reducers: {
//   sort:(state,action)=>{
//     state.products=action.payload
//     state.loading=false;
//   },
//   Logout:(state)=>{
//     state.isLogin=false;
//   }
// }
// ,
// extraReducers: (builder) => {
//   builder
//     /**
//      * Get All Products
//      */
//     .addCase(getProducts.pending, (state, action) => {
//       state.loading = true;
//     })
//     .addCase(getProducts.fulfilled, (state, action) => {
//       state.loading = false;
//       state.products = action.payload;
//     })