var app = angular.module('myModule', ['losproductos']);

app.controller('losproductos', function ($scope, Data) {

        Data.query()
            .then(function (result) {
                console.log(result);
            $scope.bla = result.users;
        }, function (result) {
            alert("Error: No data returned");
        });


});

app.$inject = ['$scope', 'Data'];

app.factory('Data', ['$resource', '$q', function ($resource, $q) {
    var data = {
        
            "categorias": [{
                    "cat_id": "1",
                    "cat_nombre": "Aventura"
                },
                {
                    "cat_id": "2",
                    "cat_nombre": "Romance"
                },
                {
                    "cat_id": "3",
                    "cat_nombre": "Terror"
                },
                {
                    "cat_id": "4",
                    "cat_nombre": "Ciencia Ficción"
                }
            ],
            "productos": [
                {
                    "prod_id": "1",
                    "cat_id": "1",
                    "nombre": "La vuelta al mundo en 80 dias",
                    "precio": 34.99,
                    "descripcion": "El señor Phileas Fogg, un misterioso y solitario caballero inglés, abandonará su vida disciplinada para cumplir una apuesta con los miembros del Reform Club, en la que arriesgará una parte de su fortuna comprometiéndose a dar la vuelta al mundo en ochenta días utilizando los medios disponibles en la época.",
                    "in_stock": true,
                    "cantidad": 10,
                    "rating": 4,
                    "imagen": "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
                    "instock": true
                },{
                    "prod_id": "2",
                    "cat_id": "2",
                    "nombre": "Amor en tiempos de colera",
                    "precio": 34.99,
                    "descripcion": "De jóvenes, Florentino Ariza y Fermina Daza se enamoran apasionadamente, pero Fermina eventualmente decide casarse con un médico rico y de muy buena familia. Florentino está anonadado, pero es un romántico. ... A los cincuenta años, nueve meses y cuatro días de haberle profesado amor a Fermina, lo hará una vez más.",
                    "in_stock": true,
                    "cantidad": 11,
                    "rating": 5,
                    "imagen": "https://dummyimage.com/450x300/dee2e6/6c757d.jpgg",
                    "instock": true
                },
                {
                    "prod_id": "3",
                    "cat_id": "3",
                    "nombre": "Cementerio de animales",
                    "precio": 50.25,
                    "descripcion": "Cementerio de animales» narra la historia del doctor Louis Creed, que al poco de mudarse con su esposa Rachel y sus dos hijos pequeños desde Boston a un recóndito paraje de Maine, descubre un misterioso cementerio escondido en lo más impenetrable del bosque, a escasa distancia del nuevo hogar familiar.",
                    "in_stock": true,
                    "cantidad": 8,
                    "rating": 3,
                    "imagen": "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
                    "instock": true
                },
        
                {
                    "prod_id": "4",
                    "cat_id": "4",
                    "nombre": "Yo, Robot",
                    "precio": 54.99,
                    "descripcion": "YoRobot es una colección de nueve relatos donde robots inteligentes asisten a la humanidad. Sin importar el modelo, todos tienen programados y almacenadas en su cerebro positrónico, la forma en que se deben conducirse, sin violar las tres leyes de la robótica. La narración es brillante, sencilla y clara.",
                    "in_stock": true,
                    "cantidad": 5,
                    "rating": 2,
                    "imagen": "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
                    "instock": true
                },
        
                {
                    "prod_id": "5",
                    "cat_id": "4",
                    "nombre": "Los juegos de Ender",
                    "precio": 54.99,
                    "descripcion": "En el año 2070 la humanidad está en guerra con una raza extraterrestre conocida como los insectores (su nombre proviene del parecido que tienen a los insectos). ... Pero han pasado décadas, y la humanidad se enfrenta a un futuro incierto esperando el exterminio por una posible tercera invasión por los extraterrestres.",
                    "in_stock": true,
                    "cantidad": 15,
                    "rating": 1,
                    "imagen": "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
                    "instock": true
                }
            ]
        
    };


    //var TestResource = $resource('localhost/shfofx/PHP/Rest/alertLossDetails.php', 
    //       {},
    //      { query: {method:'GET', params:{}}}
    //               );


    var factory = {

        query: function (selectedSubject) {
            var deferred = $q.defer();          
            deferred.resolve(data);           
            return deferred.promise;
        }

    }
    return factory;
}]);