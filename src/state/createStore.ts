import { configureStore } from '@reduxjs/toolkit';
import aboutMePageSlice from './reducers/aboutMePageSlice';
import blogPostSlice from './reducers/blogPostSlice';
import { AboutMeContent } from "../types";

// Set up asyncThunks incase it's a function
// @ts-ignore Parameter 'xxx' implicitly has an 'any' type.
const asyncFunctionMiddleware = (storeAPI) => (next) => (action) => {
    // If the "action" is actually a function instead...
    if (typeof action === 'function') {
        // then call the function and pass `dispatch` and `getState` as arguments
        return action(storeAPI.dispatch, storeAPI.getState);
    }

    // Otherwise, it's a normal action - send it onwards
    return next(action);
};

const createStore = () => {
    const store = configureStore({
        reducer: {
            aboutMe: aboutMePageSlice.reducer,
            blogPosts: blogPostSlice.reducer
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(asyncFunctionMiddleware),
    });
    return store;
};

export type RootState = ReturnType<ReturnType<typeof createStore>['getState']>;
export type AppDispatch = ReturnType<typeof createStore>['dispatch'];
export default createStore;
