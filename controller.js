/**
 * Created by 47767573t on 04/02/16.
 */
app.controller('ctrl', function($scope) {

    $scope.primerNum = 0;
    $scope.segundoNum = 0;
    $scope.operador= "";

    $scope.operar = function(){
        $scope.primerNum = 0;
        $scope.segundoNum = 0;
        $scope.operador = "";
        $scope.resultado = 0;

        switch (operador){
            case "+":
                break;

            case "-":
                break;

            case "*":
                break;

            case "/":
                break;

            default:
                    resultado = 0;
        }
            return resultado
    };

    $scope.sumar = function() {
        operadorClicked = true;
        operador = "+";
    };

    $scope.restar = function() {
        operadorClicked = true;
        operador = "-";
    };

    $scope.multiplicar = function() {
        operadorClicked = true;
        operador = "*";
    };

    $scope.dividir = function() {
        operadorClicked = true;
        operador = "/";
    };

});