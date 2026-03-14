import { baseApi } from '../features/api/baseApi';

export const placesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPlaces: builder.query({
      query: () => '/places',
      providesTags: ['Place'],
    }),
    getPlaceBySlug: builder.query({
      query: (slug) => `/places/${slug}`,
      providesTags: (result, error, slug) => [{ type: 'Place', id: slug }],
    }),
  }),
});

export const { useGetPlacesQuery, useGetPlaceBySlugQuery } = placesApi;
