app.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			templateUrl: '/partials/home.html',
			controller: 'WeatherCtrl'
		})
		.when('/forecast', {
			templateUrl: '/partials/forecast.html',
			controller: 'ForecastCtrl'
		})

		$locationProvider.html5Mode(true)
})