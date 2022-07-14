// const fetchUsersRequest = () => {
//     return {
//       type: FETCH_USERS_REQUEST,
//     };
//   };
  
//   const fetchUsersSuccess = (users) => {
//     return {
//       type: FETCH_USERS_SUCCESS,
//       payload: users,
//     };
//   };
  
//   const fetchUsersFailure = (error) => {
//     return {
//       type: FETCH_USERS_FAILURE,
//       payload: error,
//     };
//   };

// const fetchUsers = () => {
//     return function (dispatch) {
//       dispatch(fetchUsersRequest());
//       axios
//         .get("https://jsonplaceholder.typicode.com/users")
//         .then((response) => {
//           // response.data is the users
//           const users = response.data.map((user) => user.id);
//           dispatch(fetchUsersSuccess(users));
//         })
//         .catch((error) => {
//           // error.message is the error message
//           dispatch(fetchUsersFailure(error.message));
//         });
//     };
//   };