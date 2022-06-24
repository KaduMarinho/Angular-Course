var app = angular.module("myShoppingList", []); 
app.controller("myCtrl", function($scope) {
    //$scope.products = ["Milk", "Bread", "Cheese"];
	//setStorage(["Milk", "Bread", "Cheese"]);
	$scope.nomeLista = getNomeLista();	
    $scope.products = getStorage();
	$scope.formatInput = function () {		
		var input = $scope.addMe.split(" ");	
		for(let i = 0; i < input.length; i++){
			input[i] = input[i][0].toUpperCase() + input[i].substr(1).toLowerCase();
		}		
		
	$scope.addMe = input.join(" ");
	}
    $scope.addItem = function () {	
        $scope.errortext = "";		
        //$scope.addMe = $scope.addMe.charAt(0).toUpperCase() + 					$scope.addMe.slice(1).toLowerCase();
		$scope.formatInput();
        if (!$scope.addMe) {return;}
        if ($scope.products.indexOf($scope.addMe) == -1) {        	
            $scope.products.push($scope.addMe);
			$scope.addMe = "";
            setStorage($scope.products);
        } else {
            $scope.errortext = "O item já está em sua lista de compras.";
        }
    }
    $scope.removeItem = function (x) {
        $scope.errortext = "";    
        $scope.products.splice(x, 1);
		setStorage($scope.products);
    }
	$scope.showModal = function	(id) {		
		if(id === "lnkrn"){
			document.getElementById('renomear').style.display='block';
			$scope.errormaxlength = "Limite de 25 caracteres atingido."
			$scope.newNameList = $scope.nomeLista;			
		}else if(id == "spnfch"){
			document.getElementById('renomear').style.display='none';
		}else if(id == "lnklp"){
			document.getElementById('limpar').style.display='block';
		}else if(id == "spnfch2"){
			document.getElementById('limpar').style.display='none';
		}
	}
	$scope.rnmLista = function	() {
		$scope.nomeLista = $scope.newNameList;
		setNomeLista($scope.nomeLista);
		$scope.showModal("spnfch"); //reutiliza id do span do modal para fechar após renomear lista
	}
	$scope.sortList = function (id) {
		if(id === "lnkaz"){
			$scope.products = $scope.products.sort();
		}else
			$scope.products = $scope.products.sort().reverse();
	
	}
	$scope.lmpLista = function	()	{
		//localStorage.removeItem('db');
		setStorage([]);
		$scope.products = getStorage();
		$scope.showModal("spnfch2");
	}	
});