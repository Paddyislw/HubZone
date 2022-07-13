import { createSlice } from "@reduxjs/toolkit";
import products from "../FakeData";

export const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cart:[],
        data:products
    },
    reducers:{
        addProduct:(state,action)=>{
           state.data.map((e)=>{
                let inc = false
                state.cart.map((e)=>{
                    if(e.id===action.payload){
                        inc=true
                    }
                })
                if(e.id==action.payload  && !inc){
                    state.cart.push(e)
                    e.quantity=1
                    state.cart.map((e)=>{
                        if(e.id==action.payload){
                            e.quantity=1
                        }
                    })
                }
                if(e.id==action.payload && inc){
                    state.cart.map((e)=>{
                        if(e.id==action.payload){
                            e.quantity=e.quantity+1
                        }
                    })
                    console.log('quamtity')
                }
            })
        },
        removeProduct:(state,action)=>{
            state.cart=state.cart.filter((e)=>{
                if(e.id!=action.payload){
                    return true
                }
            })
        }
    }
})

export const {addProduct,removeProduct} = cartSlice.actions
export const selectCart = (state)=>state.cart