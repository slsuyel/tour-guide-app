import { baseApi } from "../baseApi";

const placeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Place Categories
    createPlaceCategory: builder.mutation({
      query: (data: any) => ({
        url: "admin/tourist-place-categories",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["place"],
    }),
    getAllPlaceCategories: builder.query({
      query: () => ({
        url: "admin/tourist-place-categories",
        method: "GET",
      }),
      providesTags: ["place"],
    }),
    getAllCategories: builder.query({
      query: () => ({
        url: "tourist-place-categories",
        method: "GET",
      }),
      providesTags: ["place"],
    }),
    updatePlaceCategory: builder.mutation({
      query: ({ id, data }) => ({
        url: `admin/tourist-place-categories/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["place"],
    }),
    deletePlaceCategory: builder.mutation({
      query: (id) => ({
        url: `admin/tourist-place-categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["place"],
    }),

    // Tourist Places
    createTouristPlace: builder.mutation({
      query: (data: any) => ({
        url: "admin/tourist-places",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["place"],
    }),
    getAllTouristPlaces: builder.query({
      query: () => ({
        url: "admin/tourist-places",
        method: "GET",
      }),
      providesTags: ["place"],
    }),
    getAllPlaces: builder.query({
      query: () => ({
        url: "/tourist-places",
        method: "GET",
      }),
      providesTags: ["place"],
    }),
    getAllPlacesByCategory: builder.query({
      query: (id) => ({
        url: `tourist-places?category_id=${id}`,
        method: "GET",
      }),
      providesTags: ["place"],
    }),
    getPlaceByName: builder.query({
      query: (name) => ({
        url: `tourist-places/name/${name}`,
        method: "GET",
      }),
      providesTags: ["place"],
    }),


    updateTouristPlace: builder.mutation({
      query: ({ id, data }) => ({
        url: `admin/tourist-places/${id}`,
        method: "Post",
        body: data,
      }),
      invalidatesTags: ["place"],
    }),
    deleteTouristPlace: builder.mutation({
      query: (id) => ({
        url: `admin/tourist-places/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["place"],
    }),
    getPlaceById: builder.query({
      query: (id) => ({
        url: `/admin/tourist-places/${id}`,
      }),
    }),
    
  }),
});

export const {
  useCreatePlaceCategoryMutation,
  useGetAllPlaceCategoriesQuery,
  useUpdatePlaceCategoryMutation,
  useDeletePlaceCategoryMutation,
  useCreateTouristPlaceMutation,
  useGetAllTouristPlacesQuery,
  useUpdateTouristPlaceMutation,
  useDeleteTouristPlaceMutation,
  useGetAllPlacesQuery,
  useGetAllPlacesByCategoryQuery,
  useGetPlaceByNameQuery,
  useGetPlaceByIdQuery,
  useGetAllCategoriesQuery 
} = placeApi;
