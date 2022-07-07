// var square = function(n) {
//   return n * n;
// };

const square = n => n * n;
console.log(square(5));


// ****************************


// const returnObjLonghand = () => {
//     return { 
//         firstName: 'John',
//         lastName: 'Wick'
//     }
// }

const returnObjFixed = () => ({ firstName: 'John', lastName: 'Wick' });
console.log(returnObjFixed());


// ****************************


// class Deck {
//   constructor() {
//       const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
//       const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
//       const deck = [];
//       suits.forEach(function(suit) {
//         faces.forEach(function(face) {
//           deck.push(this.createCard(suit, face));
//         });
//       });
//       this.deck = deck;
//     }
// } 

class Deck {
	constructor() {
		const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
     	const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
     	const deck = [];
     	suits.forEach(suit => {
     		faces.forEach(face => {
     			deck.push(this.createCard(suite, face));
     		})
     	})
	}
}