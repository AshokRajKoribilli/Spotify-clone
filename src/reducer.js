export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	// token: null,
	// Remove after developing set token: null
	// token:
	// 	"BQDD0R4RblhXKN13orE6qhOpeCP3_Bh5FXN5cip9mzpkIJ3aT9WEnpZaB7FqJT4vipObloMO3I95cfL-MIptdDjbyWlrLmQERJKusToNw6duxFYjpFpHEvUy6VE-AhazUdEARIk1rJmDvT7Pv9EImB-b6_OprDYHJaMMNI6zGKqM-YE1",
};

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};
		case "SET_TOKEN":
			return {
				...state,
				token: action.token,
			};
		case "SET_PLAYLISTS":
			return {
				...state,
				playlists: action.playlists,
			};
		case "SET_DISCOVER_WEEKLY":
			return {
				...state,
				discover_weekly: action.discover_weekly,
			};
		default:
			return state;
	}
};

export default reducer;
