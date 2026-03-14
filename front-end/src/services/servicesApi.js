import { baseApi } from '../features/api/baseApi';

export const servicesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => '/services',
      transformResponse: (response) => response.data,
      providesTags: ['Service'],
    }),
    getServicesByPlace: builder.query({
      query: (placeId) => `/services/place/${placeId}`,
      transformResponse: (response) => response.data,
      providesTags: (result, error, placeId) => [{ type: 'Service', id: placeId }],
    }),
  }),
});

export const { useGetServicesQuery, useGetServicesByPlaceQuery } = servicesApi;
