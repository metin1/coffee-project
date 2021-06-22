const express = require('express');
const path = require('path');
const app = express();
const { getAllCoffees, getCoffeeById, getCoffeesByCategory, getCoffeeCategories } = require('./utils/coffee-util');

// require('dotenv').config();

app.use(express.json());

// Endpoints listed at routes file
require('./routes/index.js')(app);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
    res.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}
// console.log(getAllCoffees().length === 26)
// console.log(getCoffeesByCategory("hot").length === 20)
// console.log(getCoffeesByCategory("iced").length === 6)
// console.log(getCoffeeById(3).length === 1)
// console.log(getCoffeeCategories().length === 2)

// Start listening at port 5000
const PORT = process.env.PORT || 5000;
	app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});

module.exports = app