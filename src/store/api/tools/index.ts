/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useNavigate } from "react-router";
import { api as index } from "../index";
import { Registr } from "./types";
// const navigate = useNavigate();
const api = index.injectEndpoints({
	endpoints: (builder) => ({
		getRegistr: builder.query<
			Registr.GetRegistrResponse,
			Registr.GetRegistrRequest
		>({
			query: () => ({
				url: "users",
				method: "GET",
			}),
			providesTags: ["project"],
		}),
		postRegistr: builder.mutation<
			Registr.PostRegistrResponse,
			Registr.PostRegistrRequest
		>({
			query: (newData) => ({
				url: "users",
				method: "POST",
				body: newData,
			}),
			invalidatesTags: ["project"],
		}),
		postLogin: builder.mutation<
			Registr.PostRegistrResponse,
			Registr.PostRegistrRequest
		>({
			query: (newData) => ({
				url: "login",
				method: "POST",
				body: newData,
				// onSuccess: (newData: { _id: any; }) => {
					
				// 	localStorage.setItem("isAuthLogin", JSON.stringify(newData._id));
				// 	// navigate("/");
				// 	console.log("ppp");
				// },
			}),
			invalidatesTags: ["project"],
		}),
	}),
});

export const {
	useGetRegistrQuery,
	usePostRegistrMutation,
	usePostLoginMutation,
} = api;
