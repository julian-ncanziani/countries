import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

//thunks
export const fetchCountries = createAsyncThunk('getAllCountries', async()=>{
    const response = await axios.get('https://restcountries.com/v3.1/all');
    return response.data;
});



export type Country = { // defino los type de datos que me llegan en la response
    name: {
        common: string,
        official: string
    },
    population: string,
    region: string,
    subregion: string,
    flags: {
        png: string
    }
};

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
        builder.addCase(fetchCountries.pending, (state)=>{
            state.loading = 'pending';
        });
        builder.addCase(fetchCountries.fulfilled, (state, action)=>{
            state.countriesList.push(...action.payload);
            state.loading = 'done';
        });
        builder.addCase(fetchCountries.rejected, (state)=>{
            state.loading = 'failed';
        });
    },
});




export const { deleteCountry } = countriesSlice.actions;
export default countriesSlice.reducer;