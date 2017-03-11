obj.controller("userAccount",function($scope){
		$scope.message="Hello India"; <!--scope is ownwer of controller-->
		
		$scope.one=function(){
			$scope.message="You Have clickedas 1 time";
		}
		
		$scope.two=function(){
			$scope.message="You Have clicked as 2 times";
		}
		
		$scope.three=function(){
			$scope.message="your mouse moved on Button";
		}
		
		$scope.four=function(){
			$scope.message="your mouse down";
		}
		
		$scope.five=function(){
			$scope.message="your mouse up";
		}
		
		$scope.six=function(textval){
			$scope.message2="you have entered:-" +textval;
		}
		
		$scope.seven=function(textval){
			$scope.message2="you have entered:-" +textval;
		}
		
		$scope.eight=function(textval){
			$scope.message2="you have entered:-" +textval;
		}
		
		$scope.showcity=function(city){
			$scope.message2="You Have Selected:"+city;
		}
		
		$scope.ten=function(textval){
			$scope.message2="You Have Entered:"+textval;
		}
		
		$scope.eleven=function(textval){
			$scope.message2="You Have entered:"+textval;
		}
});