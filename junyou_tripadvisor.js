
// This module is a simple version of TripAdvisor where users can
// view attractions, add reviews, and get average ratings.

// Fake "database" for attractions
const attractions = [
    { id: 1, name: "Marina Bay Sands", location: "Singapore", reviews: [5, 4, 5] },
    { id: 2, name: "Gardens by the Bay", location: "Singapore", reviews: [5, 5, 4, 5,3] }
];

module.exports = {
    // View all attractions
    viewAllAttractions() {
        return attractions;
    },

    // Add a new attraction
    addAttraction(name, location) {
        const newAttraction = {
            id: attractions.length + 1,
            name: name,
            location: location,
            reviews: []
        };
        attractions.push(newAttraction);
        return `${name} has been added successfully!`;
    },

    // Add a review (1–5) to an attraction
    addReview(attractionId, rating) {
        const attraction = attractions.find(a => a.id === attractionId);
        if (!attraction) return "Attraction not found.";
        attraction.reviews.push(rating);
        return `Review of ${rating} added to ${attraction.name}.`;
    },

    // get average rating for an attraction
    getAverageRating(attractionId) {
        const attraction = attractions.find(a => a.id === attractionId);
        if (!attraction || attraction.reviews.length === 0)
            return "No reviews available.";
        const avg = (attraction.reviews.reduce((a, b) => a + b, 0) / attraction.reviews.length).toFixed(1);
        return `${attraction.name} has an average rating of ${avg}/5`;
    },

    // Search attractions by location
    searchAttractionsByLocation(location) {
        const results = attractions.filter(a => a.location.toLowerCase() === location.toLowerCase());
        return results.length ? results : "No attractions found for that location.";
    }
};

