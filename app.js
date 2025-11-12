// Import your module
const tripAdvisor = require('./junyou_tripadvisor');

console.log("Starting my first Node JS TripAdvisor application");

// Add some attractions
console.log(tripAdvisor.addAttraction("Sentosa Island", "Singapore"));
console.log(tripAdvisor.addAttraction("Singapore Zoo", "Singapore"));
console.log(tripAdvisor.addAttraction("Singapore Flyer", "Singapore"));

// View all attractions
console.log("All Attractions:", tripAdvisor.viewAllAttractions());

// Add some reviews
console.log(tripAdvisor.addReview(1, 5)); // 5-star review for Marina Bay Sands
console.log(tripAdvisor.addReview(3, 4));
console.log(tripAdvisor.addReview(4, 5)); 
console.log(tripAdvisor.addReview(5, 5));

// Show average rating
console.log(tripAdvisor.getAverageRating(1)); // Marina Bay Sands
console.log(tripAdvisor.getAverageRating(2)); // Universal Studios

// Search by location
console.log("Attractions in Singapore:", tripAdvisor.searchAttractionsByLocation("Singapore"));
