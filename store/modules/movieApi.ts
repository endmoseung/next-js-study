import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getMovies } from "apis/Movies";

type stateType = {
  title: { name: string; content: number };
  content: string;
  loading: boolean;
  lists: any;
};

const initialState: stateType = {
  title: { name: "ttttt", content: 0 },
  content: "",
  loading: false,
  lists: [],
};

const name = "movies";

export const getMovieList = createAsyncThunk(
  `${name}/getMovieList`, // 액션 이름을 정의해 주도록 합니다.
  async () => {
    try {
      const { data } = await getMovies();
      return data.results;
    } catch (e) {
      throw e;
    }
  }
);

export const movieSlice = createSlice({
  name,
  initialState,
  reducers: {
    //     moives:(state,action:any)=>{
    // state.lists=[...action.payload]
    //     },
    //     setTitle: (
    //       state,
    //       action: PayloadAction<{ name: string; content: number }>
    //     ) => {
    //       state.title.name = action.payload.name;
    //     },
  },
  extraReducers: {
    [getMovieList.pending.type]: (state, action) => {
      // 호출 전
      state.loading = true;
    },
    [getMovieList.fulfilled.type]: (state, action) => {
      // 성공
      state.loading = true;
      state.lists = action.payload;
    },
    [getMovieList.rejected.type]: (
      state,
      action: PayloadAction<{ message: string; status: number }>
    ) => {
      // 실패
      state.loading = true;
      state.title.name = action.payload.message;
      state.lists = [];
    },
  },
});

export default movieSlice.reducer;
