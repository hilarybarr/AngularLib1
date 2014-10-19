#Hilary's Library Collection App

- Modified package.json to include dependencies for the Express Node framework and Mongoose
- Used Server.js to set up Express and connection to a MongoDB server (currently localhost, specified in config/database.js).
- Instantiated ng-app in libraryApp.js
- Set up model for books in models/book.js
- Defined routes (app/routes.js) and service for working with $HTTP (app/libraryService.js)


##Installation
- $ git clone https://github.com/hilarybarr/AngularLibrary.git
- npm install
- node server.js
- (Run app from localhost: http://http://localhost/8080)

##Questions:
- How to get update to work? Should it be automatic because of ng-model or do I need Put methods (in MaybeUse.md)
-totalQuantity (and totalPrice) methods
- How can you keep Node server running?
- Should app architecture be different?
- When does Remedy use localStorage vs. Mongo?


##To Do
-Enable update
- Add Quantity and Price functions
- Format currency
- Host database on Modulus.io


