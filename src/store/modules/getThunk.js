// getThunk.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'f32ee508f6b204c8a5175aaadefb59c7';
const BASE_URL = 'https://api.themoviedb.org/3';

// 콘텐츠 목록 가져오기 (영화 & TV)
export const getMovies = createAsyncThunk('content/getMovies', async () => {
    const res = await axios.get(`${BASE_URL}/discover/movie`, {
        params: { api_key: API_KEY, language: 'ko-KR' },
    });
    return res.data.results;
});

export const getTvShows = createAsyncThunk('content/getTvShows', async () => {
    const res = await axios.get(`${BASE_URL}/discover/tv`, {
        params: { api_key: API_KEY, language: 'ko-KR' },
    });
    return res.data.results;
});

export const getTrending = createAsyncThunk('content/getTrending', async () => {
    const res = await axios.get(`${BASE_URL}/trending/all/week`, {
        params: { api_key: API_KEY, language: 'ko-KR' },
    });
    return res.data.results;
});

// 콘텐츠 상세 정보 가져오기
export const getContentDetail = createAsyncThunk('detail/getContentDetail', async ({ type, id }) => {
    const res = await axios.get(`${BASE_URL}/${type}/${id}`, {
        params: {
            api_key: API_KEY,
            language: 'ko-KR',
            append_to_response: 'credits,videos,genres,seasons',
        },
    });
    if (type === 'tv' && res.data.seasons) {
        const seasonDetails = await Promise.all(
            res.data.seasons.map(async (season) => {
                const seasonRes = await axios.get(`${BASE_URL}/tv/${id}/season/${season.season_number}`, {
                    params: {
                        api_key: API_KEY,
                        language: 'ko-KR',
                    },
                });
                return seasonRes.data;
            })
        );
        res.data.seasonDetails = seasonDetails;
    }
    return res.data;
});

export const getContentByGenre = createAsyncThunk('content/getContentByGenre', async ({ type, genreId }) => {
    const res = await axios.get(`${BASE_URL}/discover/${type}`, {
        params: {
            api_key: API_KEY,
            language: 'ko-KR',
            with_genres: genreId,
        },
    });
    return res.data.results;
});

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // API
// const options = {
//     api_key: 'f32ee508f6b204c8a5175aaadefb59c7',
//     language: 'ko-KR',
//     with_origin_country: 'KR',
//     // genres: 28,
// };

// export const getMovie = createAsyncThunk('movie/getMovie', async () => {
//     const url = `https://api.themoviedb.org/3/discover/movie`;
//     try {
//         // const res = await axios.get(url);
//         const res = await axios.get(url, {
//             params: options,
//         });
//         return res.data.results;
//     } catch (error) {
//         console.log(error);
//     }
// });

// export const getTv = createAsyncThunk('movie/getMovie', async () => {
//     const url = `https://api.themoviedb.org/3/discover/tv`;
//     try {
//         // const res = await axios.get(url);
//         const res = await axios.get(url, {
//             params: options,
//         });
//         return res.data.results;
//     } catch (error) {
//         console.log(error);
//     }
// });
