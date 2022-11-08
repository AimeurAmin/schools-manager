// Need to use the React-specific entry point to import createApi
import { apiSlice } from '../authentication/auth.service'

export const studentsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStudents: builder.query<any, void>({
      query: () => '/students'
    })
  }),
})

export const { useGetStudentsQuery } = studentsApi