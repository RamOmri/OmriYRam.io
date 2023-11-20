import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ContentfulBlogPost, ContentfulBlogPostResponse } from "../../types";
import { createClient } from "contentful";
import { normalizeContentfulResponse } from "../../utils";

type BlogPostState = {
  isLoading: boolean;
  error: string | null;
  blogPosts: ContentfulBlogPost[] | null;
};

const initialState: BlogPostState = {
  isLoading: false,
  error: null,
  blogPosts: null,
};

export const fetchBlogPosts = createAsyncThunk(
  "aboutMe/fetchBlogPosts",
  async () => {
    try {
      const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID!,
        accessToken: process.env.CONTENTFUL_TOKEN!,
      });

      const response = (await client.getEntries({
        content_type: "blogPost",
      })) satisfies ContentfulBlogPostResponse;

      const blogPosts = response.items.map((item) => {
        const fields = item.fields as ContentfulBlogPost; // Assuming ContentfulBlogPost is your type
        fields.content = normalizeContentfulResponse(fields.content.content);
        return fields;
      }) as ContentfulBlogPost[];

      return blogPosts;
    } catch (e) {
      console.error(e);
    }
  }
);

const blogPostSlice = createSlice({
  name: "blogPosts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogPosts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBlogPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogPosts =
          (action.payload as unknown as ContentfulBlogPost[]) ?? null;
        state.error = null;
      })
      .addCase(fetchBlogPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

export default blogPostSlice;
