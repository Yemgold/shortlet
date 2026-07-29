// "use client";


// import { create } from "zustand";

// import { persist } from "zustand/middleware";

// import type {
//   AuthState,
// } from "@/types/auth";



// interface AuthStore extends AuthState {


//   login(
//     data:{
//       user: AuthState["user"];
//     }
//   ):void;


//   logout():void;


//   updateUser(
//     user: AuthState["user"]
//   ):void;


//   clear():void;

// }



// export const useAuthStore =
// create<AuthStore>()(

// persist(

// (set)=>(


// {

// user:null,


// isAuthenticated:false,



// login:({
//  user,
// })=>

// set({

// user,

// isAuthenticated:true,

// }),



// logout:()=>


// set({

// user:null,

// isAuthenticated:false,

// }),



// updateUser:(user)=>

// set({
// user,
// }),



// clear:()=>


// set({

// user:null,

// isAuthenticated:false,

// }),



// }

// ),

// {
// name:"auth-storage"
// }

// )

// );







"use client";

import { create } from "zustand";

import { persist } from "zustand/middleware";

import type {
  AuthState,
  LoginData,
} from "@/types/auth";

interface AuthStore extends AuthState {
  login: (
    data: LoginData
  ) => void;

  logout: () => void;

  updateUser: (
    user: AuthState["user"]
  ) => void;

  setAccessToken: (
    token: string
  ) => void;

  setRefreshToken: (
    token: string
  ) => void;

  clear: () => void;
}

export const useAuthStore =
  create<AuthStore>()(
    persist(
      (set) => ({
        user: null,

        accessToken: null,

        refreshToken: null,

        isAuthenticated: false,

        login: ({
          accessToken,
          refreshToken,
          user,
        }) =>
          set({
            accessToken,
            refreshToken,
            user,
            isAuthenticated: true,
          }),

        logout: () =>
          set({
            user: null,
            accessToken: null,
            refreshToken: null,
            isAuthenticated: false,
          }),

        updateUser: (user) =>
          set({
            user,
          }),

        setAccessToken: (
          accessToken
        ) =>
          set({
            accessToken,
          }),

        setRefreshToken: (
          refreshToken
        ) =>
          set({
            refreshToken,
          }),

        clear: () =>
          set({
            user: null,
            accessToken: null,
            refreshToken: null,
            isAuthenticated: false,
          }),
      }),

      {
        name: "auth-storage",
      }
    )
  );