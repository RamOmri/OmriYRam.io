import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AboutMeContent, ContentFulAboutMe, ContentFulResponse } from '../../types';
import { createClient } from 'contentful';


type AboutMeState = {
    isLoading: boolean;
    error: string | null;
    aboutMe: AboutMeContent | null;
  }

  const initialState: AboutMeState = {
    isLoading: false,
    error: null,
    aboutMe: null,
  };

  export const fetchAboutMe = createAsyncThunk(
    'aboutMe/fetchAboutMe',
    async () => {
        try{
        const client = createClient({
            space: process.env.CONTENTFUL_SPACE_ID!,
            accessToken: process.env.CONTENTFUL_TOKEN!,
          })
      const response = await client.getEntries({
        content_type: 'aboutMe',
      }) satisfies ContentFulResponse;
      const contentfulAboutMe = response.items[0].fields as ContentFulAboutMe;
      const profileImage = JSON.stringify(contentfulAboutMe.profileImage?.fields.file);
      const image1 = JSON.stringify(contentfulAboutMe.stockImage1?.fields.file);
      const image2 = JSON.stringify(contentfulAboutMe.stockImage2?.fields.file);
      const image3 = JSON.stringify(contentfulAboutMe.stockImage3?.fields.file);
      return {
        ...contentfulAboutMe,
        profileImage: profileImage ? `https${profileImage}` : profileImage,
        stockImage1: image1 ? `https${image1}` : image1,
        stockImage2: image2 ? `https${image2}` : image2,
        stockImage3: image3 ? `https${image3}` : image3,
      };
        }
        catch(e) { console.error(e) }
    }
  );

   const aboutMeSlice = createSlice({
    name: 'aboutMe',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchAboutMe.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(fetchAboutMe.fulfilled, (state, action) => {
          state.isLoading = false;
          state.aboutMe = action.payload as unknown as AboutMeContent ?? null;
          state.error = null;
        })
        .addCase(fetchAboutMe.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message ?? 'An error occurred';
        });
    },
  });  

  export default aboutMeSlice;
  
