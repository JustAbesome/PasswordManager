module.exports = (app) => {
	// List with all routes
	const routes = [
		{
			route: '/api',
			file: 'api'
		}
	];

	// Add all routes to app
	routes.forEach((route) => {
		app.use(route.route, require('./' + route.file));
	});
}