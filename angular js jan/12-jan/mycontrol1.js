obj.controller("mycontroller",function($scope){
   	 $scope.message1="hello india";

   	 $scope.click1=function(){
      $scope.message="one click";
   	 }

   	 $scope.click2=function(){
   	 	 $scope.message="double click";
   	 }
   	 $scope.click3=function(){
   	 	 $scope.message="three click";
   	 }
   	 $scope.click4=function(){
   	 	 $scope.message="four click";
   	 }
   	 $scope.click5=function(){
   	 	 $scope.message="five click";

   	 }
     $scope.message3="hello";


   	 $scope.six=function(tvar){
      $scope.message3="you hav entered-:" +tvar;
   	 }
   	 $scope.seven=function(tvar){
      $scope.message3="you hav entered-:" +tvar;
   	 }
   	 $scope.eight=function(tvar){
      $scope.message3="you hav entered-:" +tvar;
   	 }
   	 $scope.nine=function(tvar){
   	 	$scope.message3="u have entered-:" +tvar;
   	 }
     //$scope.showcity=function(city){
     // $scope.message4="u have entered-:" +city;
     //}
     $scope.showcity=function(c){
			$scope.message4="You Have Selected:"+c;
		}




   });//fuction endsss