const express = require('express');
const path = require('path');
const app = express();

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

// Start listening at port 5000
const HOST = '0.0.0.0';
const PORT = process.env.PORT || 5000;
app.listen(PORT, HOST)

console.log(`Running on http://${HOST}:${PORT}`);

module.exports = app