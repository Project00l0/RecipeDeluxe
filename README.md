# RecipeDeluxe
This platform enables users to freely explore recipes by leveraging the Edamam Recipe Search API. Users can enter any desired dish, and the platform will provide corresponding recipes. Additionally, there is a search-by-ingredients mode, allowing users to input the ingredients they have, and the platform will then search the Edamam Recipe database based on those ingredients.

# Documentation for the Code

## Purpose:
The provided code is a Node.js module that interacts with an external recipe API to perform recipe searches based on user input. It fetches recipes either by a general search query or by a list of ingredients. The results are then displayed in a specified HTML template.

## Dependencies:
- **axios**: A promise-based HTTP client for making requests to the recipe API.
- **fs**: The Node.js file system module for reading files.
- **path**: The Node.js path module for working with file and directory paths.

## Configuration:
- The code expects configuration parameters for the recipe API, including `appId`, `appKey`, and `apiUrl`, which are imported from an external module (`../API/API`).

## Functions:

### 1. `searchRecipe(req, res, next)`
- **Input**: Takes a search query (`req.body.nsearch`) from the request body.
- **Output**: Fetches recipes from the API based on the search query and stores the relevant information in the `Recipes` variable.
- **Error Handling**: Logs errors and sends a 500 Internal Server Error response if there's an issue with fetching recipes.

### 2. `searchingByIngredients(req, res, next)`
- **Input**: Takes an array of ingredients (`req.body.arrayData`) from the request body.
- **Output**: Fetches recipes from the API based on the ingredients and stores the relevant information in the `Recipes` variable.
- **Error Handling**: Logs errors and sends a 500 Internal Server Error response if there's an issue with fetching recipes.

### 3. `display(req, res)`
- **Input**: None (Uses the globally stored `Recipes` variable).
- **Output**: Reads an HTML template file, replaces a placeholder with the dynamically generated recipe content, and sends the updated HTML as the response.
- **Error Handling**: Logs errors and sends a 500 Internal Server Error response if there's an issue with reading the HTML file or generating the dynamic content.

## HTML Template:
- The HTML template file is specified by the `filePath` variable.
- It contains a placeholder `<div id="nothing">`, which is replaced with the dynamically generated recipe content in the `display` function.

## Note:
- The code utilizes asynchronous functions and handles errors by logging them and sending appropriate HTTP responses.
- It appears to be designed for use in a web application where users can search for recipes and view the results dynamically on a webpage.
