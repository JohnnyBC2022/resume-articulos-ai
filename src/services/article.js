import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

const options = {
    method: 'GET',
    url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
    params: {
      url: 'https://time.com/6266679/musk-ai-open-letter/',
      lang: 'en',
      engine: '2'
    },
    headers: {
      'x-rapidapi-key': rapidApiKey,
      'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
    }
  };

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) =>{
            headers.set('x-rapidapi-key', 'KEY');
            headers.set('x-rapidapi-host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
        })
    })
});

export const { useLazyGetSummaryQuery } = articleApi;