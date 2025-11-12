# Assignment 1: TripAdvisor Node Module

## Description
This Node.js module simulates a simple version of **TripAdvisor** (https://www.tripadvisor.com).  
It allows users to:

- Add attractions (hotels, attractions, or other places)
- View all attractions
- Add reviews to attractions
- Get average ratings of attractions
- Search attractions by location

The module uses arrays to store data and does not require a database.

---

## Setup
1. Make sure you have **Node.js** installed.
2. Place the module file `junyou_tripadvisor.js` in a folder.
3. (Optional) Create a test file, e.g., `app.js`, to call and test the functions.
4. Run your test file using the terminal:


## How to call functions, parameters required

1. addAttraction(name, location)

Purpose: Adds a new attraction to the system.

How to call:

trip.addAttraction("Sentosa Island", "Singapore");


Parameters:

name (string) – the name of the attraction

location (string) – the city or country

Returns: Confirmation message that the attraction was added.

2. viewAllAttractions()
Purpose: Returns a list of all attractions.
How to call:
trip.viewAllAttractions();
Parameters: None
Returns: Array of all attractions, each with id, name, location, and reviews.

3. addReview(attractionId, rating)
Purpose: Adds a review to a specific attraction.
How to call:
trip.addReview(1, 5);
Parameters:
attractionId (number) – the ID of the attraction
rating (number) – a number from 1 to 5

4. getAverageRating(attractionId)
Purpose: Returns the average rating of an attraction.
How to call:
trip.getAverageRating(1);
Parameters:
attractionId (number) – the ID of the attraction

5. searchAttractionsByLocation(location)
Purpose: Searches for attractions in a specific location.
How to call:
trip.searchAttractionsByLocation("Singapore");
Parameters:
location (string) – the city or country to search