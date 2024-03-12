import {
	BaseQueryFn,
	createApi,
	fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
	baseUrl: "https://brand-store.up.railway.app",
	// baseUrl: "https://api.elchocrud.pro/api/v1/70aca48aeedb89b448726d58be0ddac7/token_project",
});

// import.meta.env.VITE_TOKEN_URL,

const baseQueryExtented: BaseQueryFn = async (args, api, extraOptions) => {
	const answer = await baseQuery(args, api, extraOptions);
	return answer;
};

export const api = createApi({
	reducerPath: "api",
	baseQuery: baseQueryExtented,
	refetchOnReconnect: true,
	refetchOnFocus: false,
	tagTypes: ["project"],
	endpoints: () => ({}),
});
