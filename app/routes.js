var Book = require('./models/book');

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all books
	app.get('/api/books', function(req, res) {

		// use mongoose to get all books in the database
		Book.find(function(err, books) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(books); // return all books in JSON format
		});
	});

	// create book and send back all books after creation
	app.post('/api/books', function(req, res) {

		// create a book, information comes from AJAX request from Angular
		Book.create({
			title : req.body.title,
            author : req.body.author,
            price : req.body.price,
            quantity : req.body.quantity,
			done : false
		}, function(err, book) {
			if (err)
				res.send(err);

			// get and return all the books after you create another
			Book.find(function(err, books) {
				if (err)
					res.send(err)
				res.json(books);
			});
		});

	});

	// delete a book
	app.delete('/api/books/:book_id', function(req, res) {
		Book.remove({
			_id : req.params.book_id
		}, function(err, book) {
			if (err)
				res.send(err);

			// get and return all the books after you create another
			Book.find(function(err, books) {
				if (err)
					res.send(err)
				res.json(books);
			});
		});
	});

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./app/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};