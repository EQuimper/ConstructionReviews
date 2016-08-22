// import { Contractors } from '../../imports/api/contractors/contractors';
// import { Favorites } from '../../imports/api/favorites/favorites';
//
// Favorites.helpers({
//   getUserFav() {
//     return Favorites.find({ userId: this.userId });
//   }
// });
//
// Contractors.helpers({
//   getFavContractors() {
//     return Contractors.find({ _id: { $in: this.contractorId } });
//   }
// });
//
// console.log(Favorites.findOne().getUserFav());
//
// // Favorites.helpers({
// //   userFavorites: Favorites.find({ userId: this.userId }).fetch(),
// //   favIds: this.userFavorites.map(item => item.contractorId),
// //   data: Contractors.find({ _id: { $in: this.userFavorites } }),
// //   userContractorsBookmarked() {
// //     return this.data;
// //   }
// // });
