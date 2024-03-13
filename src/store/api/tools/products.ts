import { api as index } from "../index";
import { Registr } from "./types";
export const product = index.injectEndpoints({
	endpoints: (builder) => ({
		getProducts: builder.query<
			Registr.GetProductsResponse,
			Registr.GetProductsRequest
		>({
			query: () => ({
				url: "products",
				// headers: { Authorization: `Bearer ${localStorage.getItem("isAuthLogin")}` },
				method: "GET",
			}),
			providesTags: ["project"],
		}),
		PostProducts: builder.mutation<
			Registr.PostProductsResponse,
			Registr.PostProductsRequest
		>({
			query: ({ productName, quantity, price, photoUrl }) => ({
				url: "products",
				method: "POST",
				body: { productName, quantity, price, photoUrl },
			}),
			invalidatesTags: ["project"],
		}),
		DeleteProducts: builder.mutation({
			query: (id) => ({
				url: `products/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["project"],
		}),
	}),
});

export const {
	useGetProductsQuery,
	usePostProductsMutation,
	useDeleteProductsMutation,
} = product;
