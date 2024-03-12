export namespace Registr {
	export type GetRegistrRequest = void;
	export type GetRegistrResponse = {
		id: number;
		email: string;
		password: string;
		userName: string;
		// photo: string;
	}[];

	export type PostRegistrRequest = {
		_id: number;
		email: string;
		password: string;
		userName: string;
	};
	export type PostRegistrResponse = {
		_id: number;
		email: string;
		password: string;
		userName: string;
	}[];

	export type DeleteRegistrRequest = {
		_id: number;
		email: string;
		password: string;
		userName: string;
	};
	export type DeleteRegistrResponse = {
		_id: number;
		email: string;
		password: string;
		userName: string;
	}[];

	export type PostLoginRequest = {
		_id: number;
		email: string;
		password: string;
		userName: string;
	};
	export type PostLoginResponse = {
		_id: number;
		email: string;
		password: string;
		userName: string;
	}[];
}
