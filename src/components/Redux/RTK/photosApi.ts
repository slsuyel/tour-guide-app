import { baseApi } from "../baseApi";

const photosApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Create a new gallery photo
    createPhoto: builder.mutation({
      query: (data: FormData) => ({
        url: "admin/galleries",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["photo"],
    }),
    

    // Update an existing gallery photo
    updatePhoto: builder.mutation({
      query: ({ id, data }: { id: string; data: any }) => ({
        url: `admin/galleries/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["photo"],
    }),

    // Delete a gallery photo
    deletePhoto: builder.mutation({
      query: (id: string) => ({
        url: `admin/galleries/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["photo"],
    }),

    // List all gallery photos
    getPhotos: builder.query({
      query: () => ({
        url: "admin/galleries",
        method: "GET",
      }),
      providesTags: ["photo"],
    }),
    getGalleries: builder.query({
      query: (params) => ({
        url: "/galleries",
        method: "GET",
        params
      }),
      providesTags: ["photo"],
    }),


  }),
});

export const {
  useCreatePhotoMutation,
  useUpdatePhotoMutation,
  useDeletePhotoMutation,
  useGetPhotosQuery,
  useGetGalleriesQuery
} = photosApi;
