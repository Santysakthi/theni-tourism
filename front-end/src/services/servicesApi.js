import { baseApi } from '../features/api/baseApi';

export const servicesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => '/services',
      providesTags: ['Service'],
    }),
    getServicesByPlace: builder.query({
      query: (placeId) => `/services/place/${placeId}`,
      providesTags: (result, error, placeId) => [{ type: 'Service', id: placeId }],
    }),
  }),
});

export const { useGetServicesQuery, useGetServicesByPlaceQuery } = servicesApi;
