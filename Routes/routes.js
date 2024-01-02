const express = require('express');
const router = express.Router();
const {searchingByIngredients, searchRecipe, display} = require('../Controllers/productCtrl');




router.post('/searchRecipes', searchRecipe, (req, res, next) => {
    console.log("Redirecting.....");
    res.redirect('/recipeResults');
});

router.post('/searchByIngredients', searchingByIngredients, (req, res, next) => {
    console.log("Redirecting.....");
    res.redirect('/recipeResults');
});

router.get('/recipeResults', display);

router.get("/test", (req, res) => {
    res.json({ message: "Hello from server!" });
})


module.exports = router;