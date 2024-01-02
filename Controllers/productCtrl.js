const {appId, appKey, apiUrl} = require('../API/API');
const axios = require('axios');
const fs = require('fs');
const path = require('path')

const filePath = path.join(__dirname,'..', 'public', 'html', 'home.html');


let Recipes;

exports.searchRecipe = async (req, res, next) => {
  try {
    const query = req.body.nsearch;
    const queryParams = {
      q: query,
      app_id: appId,
      app_key: appKey,
    };

    const response = await axios.get(apiUrl, { params: queryParams });

    // Store the response data in a variable
    const rec = response.data.hits;
    Recipes = rec.map(recipe => ({
      label: recipe.recipe.label,
      url: recipe.recipe.url,
      image: recipe.recipe.image
    }));

    // Now 'Recipes' contains the extracted recipe information
    console.log('Stored recipe data:', Recipes);
    next();
  } catch (error) {
    // Handle errors
    console.log('Error fetching recipes:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.searchingByIngredients = async (req, res, next) => {
  try {
    const ingr = req.body.arrayData;
    const queryParams = {
      q: ingr.join(','),
      app_id: appId,
      app_key: appKey,
    };

    const response = await axios.get(apiUrl, { params: queryParams });

    // Store the response data in a variable
    const rec = response.data.hits;
    Recipes2 = rec.map(recipe => ({
      label: recipe.recipe.label,
      url: recipe.recipe.url,
      image: recipe.recipe.image,
    }));

    // Now 'Recipes' contains the extracted recipe information
    console.log('Stored recipe data:', Recipes2);
    next();
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.display = async (req, res) => {
    try {
      console.log('PATTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTH:\n',Recipes);
      const divs = Recipes.map((data) => `
      <div id="Recipe">
        <div id="left">
            <img src="${data.image}"/>
        </div>
        <div id="right">
            <h1>${data.label}</h1>
            <a href="${data.url}" target="_blank">
                <h2>How to cook?</h2>
            </a>
        </div>
      </div>
      `);
  
      const data = await fs.promises.readFile(filePath, 'utf8');

      console.log("reading");
      const updatedHTML = data.replace('<div id="nothing">', `<div id="resCon">\n${divs.join('\n')}`);
      res.send(updatedHTML);
    } catch (error) {
      console.error('Error in display1:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

