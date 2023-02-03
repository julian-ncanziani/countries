import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface contadorSlice{
    value: number
};

const initialState: contadorSlice = {
    value: 0
};

const contadorSlice = createSlice({
    name: 'contador',
    initialState,
    reducers: {
        //sumar
        suma(state){
            state.value ++;
        },
        //resta
        resta(state){
            state.value --;
        },
        //resetear
        reset(state){
            state.value = 0;
        },
        ingresar(state, action: PayloadAction<number>){
            state.value += action.payload;
        }
    }
});

export const {suma, resta, reset,ingresar} = contadorSlice.actions;
export default contadorSlice.reducer;