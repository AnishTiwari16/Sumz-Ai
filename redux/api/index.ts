import { BASE_URL, conf } from '@/config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const fetchApi = createApi({
    reducerPath: 'aiApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: async (headers) => {
            headers.set('X-RapidAPI-Key', conf.secretAPIKey);
            headers.set(
                'X-RapidAPI-Host',
                'article-extractor-and-summarizer.p.rapidapi.com'
            );
        },
    }),
    endpoints: (builder) => ({
        fetchSummaries: builder.query({
            query: (params) =>
                `summarize?url=${encodeURIComponent(
                    params.articleUrl
                )}&length=3`,
        }),
    }),
});
export const { useLazyFetchSummariesQuery } = fetchApi;
