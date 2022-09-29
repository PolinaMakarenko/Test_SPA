import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    allTable: [],
    filterTable: [],
    currentPage: 1,
    perPage: 5,
    totalCount: 0,
    error: null,
  }

export const loadTable = createAsyncThunk('list/loadTable',  () => 
fetch('/table/').then((result) => result.json() ))



const ListSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        filterMore: (state, action) => {
            // console.log(action.payload);
            const {name, meaning} = action.payload
            const newFilter = [...state.allTable].filter((el)=> el[name] > +meaning)
            state.filterTable = newFilter
            state.totalCount = newFilter.length
        },
        filterLess: (state, action) => {
            const {name, meaning} = action.payload
            const newFilter = [...state.allTable].filter((el)=> el[name] < +meaning)
            state.filterTable = newFilter
            state.totalCount = newFilter.length
        },
        filterEquals: (state, action) => {
            const {name, meaning} = action.payload
            const newFilter = [...state.allTable].filter((el)=> el[name] === +meaning)
            state.filterTable = newFilter
            state.totalCount = newFilter.length
        },
        filterContains: (state, action) => {
            // console.log(action.payload);
            const {name, meaning} = action.payload
            const newFilter = [...state.allTable].filter((el)=> 
            String(el[name]).toLowerCase().includes(meaning.toLowerCase()))
            state.filterTable = newFilter
            state.totalCount = newFilter.length
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },

    },
    extraReducers: (builder)=>{
        builder
        .addCase(loadTable.fulfilled, (state, action) => {
            state.allTable =action.payload
            state.filterTable =action.payload
            state.totalCount = action.payload.length

        })
        .addCase(loadTable.rejected, (state, action) => {
          state.error = action.error.message;
        })
    }
})

export const {filterMore, filterLess, filterEquals, filterContains, setCurrentPage} = ListSlice.actions

export const selectTable = (state) => state.list.allTable;
export const selectFilterTable = (state) => state.list.filterTable;
export const selectCurrentPage = (state) => state.list.currentPage;
export const selectPerPage = (state) => state.list.perPage;
export const selectTotalCounte = (state) => state.list.totalCount;


export default ListSlice.reducer