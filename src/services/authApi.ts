import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:api.odschool.ru",
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body: { email: string; password: string }) => {
        return {
          url: "/user/auth",
          method: "post",
          body,
        };
      },
    }),
    registerUser: builder.mutation({
      query: (body: {
        name: string;
        email: string;
        password: string;
        phone: string;
        link: string;
      }) => {
        return {
          url: "/user/signup",
          method: "post",
          body,
        };
      },
    }),
  }),
});
export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
