// const initialState = {
//     loading: false,
//     users: [],
//     error: "",
//   };

// const reducer = (state = initialState, action) => {
//     console.log(action.type);
//     switch (action.type) {
//       case FETCH_USERS_REQUEST:
//         return {
//           ...state,
//           loading: true,
//         };
//       case FETCH_USERS_SUCCESS:
//         return {
//           loading: false,
//           users: action.payload,
//           error: "",
//         };
//       case FETCH_USERS_FAILURE:
//         return {
//           loading: false,
//           users: [],
//           error: action.payload,
//         };
//     }
//   };