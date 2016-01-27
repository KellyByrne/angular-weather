app.controller("WeatherCtrl", ['$scope', '$http', '$location', 'City', function($scope, $http, $location, City) {
	$scope.enterLocation = function(){
		var location = $scope.location;
		var city = location.split(',')[0].trim();
		var state = location.split(',')[1].trim();
		console.log('Location:' + city + "," + state)

		$http.get('http://api.wunderground.com/api/62db039518025c86/forecast10day/q/' + state + '/' + city + '.json')
			.then(function(data){
				var forecastData = data.data.forecast.simpleforecast;
				var locationData = city + ', ' + state;
				City.weatherData.push({location: locationData, forecast: forecastData})
				// console.log(City.weatherData)
				$location.path('/forecast')
		})
	}
}])

app.controller("ForecastCtrl", ['$scope', '$location', 'City', function($scope, $location, City){
	$scope.place = City.weatherData[0].location;
	$scope.forecasts = City.weatherData[0].forecast.forecastday.slice(1,4);
	console.log($scope.forecasts)
}])


