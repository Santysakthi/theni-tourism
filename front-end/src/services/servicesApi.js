import { baseApi } from '../features/api/baseApi';

export const servicesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => '/services',
      transformResponse: (response) => response.data,
      providesTags: ['Service'],
    }),
    getServicesByPlace: builder.query({
      query: (placeId) => `/services/place/id/${placeId}`,
      transformResponse: (response) => response.data,
      providesTags: (result, error, placeId) => [{ type: 'Service', id: placeId }],
    }),
    getServicesByPlaceSlug: builder.query({
      query: (slug) => `/services/place/${slug}`,
      transformResponse: (response) => response.data,
      providesTags: (result, error, slug) => [{ type: 'Service', id: slug }],
    }),
  }),
});

export const { 
  useGetServicesQuery, 
  useGetServicesByPlaceQuery, 
  useGetServicesByPlaceSlugQuery 
} = servicesApi;
