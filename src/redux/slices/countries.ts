import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

//constantes
const API_URL = 'https://restcountries.com/v3.1/all';
//thunks
export const fetchCountries = createAsyncThunk('getAllCountries', async()=>{
    const response = await axios.get(API_URL);
    
    return response.data;
});

export interface CountryCurrencies{
    [currencie: string]: Currency
}

export interface Currency{
    name: string, 
    symbol: string
}

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
    },
    currencies: CountryCurrencies,
    capital: [string],
    ['latlng']: [number, number],
    gini:{
        [key: number]: number
    },
    languages: {
        
    }
};

interface countriesState{
    countriesList: Array<Country>;
    loading: 'done' | 'failed' | 'pending' | 'idle';
    reason?: string;
    isFetching: false | true
};

const initialState: countriesState = {
    countriesList: [],
    loading: 'idle',
    isFetching: false
};

const countriesSlice = createSlice({
    name: 'countriesState',
    initialState,
    reducers: {
        deleteCountry(state ,action: PayloadAction<string>){
            state.countriesList = state.countriesList.filter((country)=>{
                return country.name.common !== action.payload;
            });
        },
        statFetching: (state, action)=>{
            state.isFetching = true;
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchCountries.pending, (state)=>{
            state.loading = 'pending';
            state.isFetching = true
        });
        builder.addCase(fetchCountries.fulfilled, (state, action)=>{
            //if(state.countriesList.length !==0) return state;
            state.countriesList.push(...action.payload);
            state.loading = 'done';
            state.isFetching = false;
        });
        builder.addCase(fetchCountries.rejected, (state)=>{
            state.loading = 'failed';
            state.isFetching = false;
        });
    },
});




export const { deleteCountry } = countriesSlice.actions;
export default countriesSlice.reducer;