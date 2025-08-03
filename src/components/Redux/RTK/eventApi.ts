import { baseApi } from "../baseApi";

const eventsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Create event
    createEvent: builder.mutation({
      query: (data: any) => ({
        url: "admin/special-events",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Event"],
    }),

    // Get all events
    getEvents: builder.query({
      query: () => "admin/special-events",
      providesTags: ["Event"],
    }),
    getAllEvents: builder.query({
      query: () => "/special-events",
      providesTags: ["Event"],
    }),

    // Get single event by ID
    getEvent: builder.query({
      query: (id: string | number) => `admin/special-events/${id}`,
      providesTags: ["Event"],
    }),

    // Update event
    updateEvent: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `admin/special-events/${id}`,
        method: "Put",
        body: data,
      }),
      invalidatesTags: ["Event"],
    }),

    // Delete event
    deleteEvent: builder.mutation({
      query: (id: string | number) => ({
        url: `admin/special-events/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Event"],
    }),
  }),
});

export const {
  useCreateEventMutation,
  useGetEventsQuery,
  useGetEventQuery,
  useUpdateEventMutation,
  useDeleteEventMutation,
  useGetAllEventsQuery
} = eventsApi;
