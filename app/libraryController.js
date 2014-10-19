angular.module('libraryController', [])

	// inject the Book service factory into our controller
	.controller('libraryController', ['$scope','$http','Books', function($scope, $http, Books) {
		$scope.formData = {};
		$scope.loading = true;

		// GET =====================================================================
		// when landing on the page, get all books and show them
		// use the service to get all the books
		Books.get()
			.success(function(data) {
				$scope.books = data;
				$scope.loading = false;
			});

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createBook = function() {
			$scope.loading = true;

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.title != undefined) {

				// call the create function from our service (returns a promise object)
				Books.create($scope.formData)

					// if successful creation, call our get function to get all the new books
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.books = data; // assign our new list of books
					});
			}
		};

		// DELETE ==================================================================
		// delete a todo after checking it
		$scope.deleteBook = function(id) {
			$scope.loading = true;

			Books.delete(id)
				// if successful creation, call our get function to get all the new books
				.success(function(data) {
					$scope.loading = false;
					$scope.books = data; // assign our new list of books
				});
		};

        // TOTAL_PRICE ==================================================================
        //$scope.totalQuantity= function(){
        //    Books.get()
        //        .success(function(data) {
        //            return data.aggregate(
        //                {$group: {_id: '$quantity', total: {$sum: '$quantity'}}})
        //        };
        //        };
        //



        // TOTAL_QUANTITY ==================================================================

        $scope.totalQuantity= function(){


        }

	}]);