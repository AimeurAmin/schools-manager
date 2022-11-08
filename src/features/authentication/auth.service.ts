import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { logOut, setCredentials } from "./auth.slice";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://applicationapischool.herokuapp.com/api/",
  credentials: "include",
  prepareHeaders: (headers, { getState }: any) => {
    //const token = getState().auth.token;
    const token = localStorage.getItem('token');
    
    if(token) {
      console.log('token');
      console.log(token);
      
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers
  }
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let result: any = await baseQuery(args, api, extraOptions);

  // in case there is no need for token (login or signup)
  if(!result?.error) { return result}

  // in case token is expired and have refresh token
  if(result?.error?.originalStatus === 403) {
    console.log("sending refresh token!");
    const refreshResult = await baseQuery('/refresh', api, extraOptions);
    console.log(refreshResult);

    if(refreshResult?.data) {
      const user = api.getState().auth.user;
      api.dispatch(setCredentials({...refreshResult.data, user}))
      result = await baseQuery(args, api, extraOptions);
    }
    
  } else {
    api.dispatch(logOut());
  }

  return result
}


export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({}),
})