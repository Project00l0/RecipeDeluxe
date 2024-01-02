
try {
    const appId = 'ca746e21';
    const appKey = '2fac4a2f90cbf5e681a1a1aa58f213a2';
    const apiUrl = 'https://api.edamam.com/search';


    module.exports = {appId, appKey, apiUrl};
} catch(error) {
    console.error("Error reading API key: ", error.message);
}