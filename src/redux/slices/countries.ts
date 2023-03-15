import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCountry = createAsyncThunk('getArg', async(countryName: string)=>{
    const response = await axios.get('https://restcountries.com/v3.1/name/' + countryName);
    return response.data[0];
});



export type Country = { // defino los type de datos que me llegan en la response
    name: {
        common: string,
        official: string
    }
    population: string,
    region: string,
    subregion: string,
    flags: {
        png: string
    }
}

interface countriesState{
    countriesList: Array<Country>;
    loading: 'done' | 'failed' | 'pending' | 'idle';
    reason?: string
};

const initialState: countriesState = {
    countriesList: [],
    loading: 'idle',
};

const countriesSlice = createSlice({
    name: 'countriesState',
    initialState,
    reducers: {
        deleteCountry(state ,action: PayloadAction<string>){
            state.countriesList = state.countriesList.filter((country)=>{
                return country.name.common !== action.payload;
            });
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchCountry.pending, (state)=>{
            state.loading = 'pending';
        });
        builder.addCase(fetchCountry.fulfilled, (state, action)=>{
            if(!state.countriesList.find(country => country.name.common === action.payload.name.common)){
                state.countriesList.push(action.payload);
                state.loading = 'done';
            }else{
                state.reason = 'el pais ya se encuentra en la lista';
                state.loading = 'failed';
                throw new Error('el pais se encuentra en la lista');
            }
        });
        builder.addCase(fetchCountry.rejected, (state)=>{
            state.loading = 'failed';
        });
    },
});




export const { deleteCountry } = countriesSlice.actions;
export default countriesSlice.reducer;