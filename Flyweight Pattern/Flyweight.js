//FLYWEIGHT

var Book = function(title,author,isbn,quantity){
	this.title = title;
	this.author = author;
	this.ISBN = isbn;
	this.quantity = quantity;
}

var BookFactory = (function(){

	var existingBooks = {};

	function createBook(title,author,ISBN,quantity){
		var existingBook = existingBooks[ISBN];
		if(!existingBook)
			return existingBooks[ISBN] = new Book(title,author,ISBN,quantity);
		else
			alert("The book with ISBN " + ISBN + " already exists.");
	}

	function getExistingBook(ISBN){
		return existingBooks[ISBN] ? existingBooks[ISBN] : alert("The book with ISBN " + ISBN + " doesn't exist.");
	}

	return{
		createBook: createBook,
		getExistingBook: getExistingBook
	}
})();

var BookRecordManager = (function(){
	var records = {};

	function newRecord(ISBN,member,date,returndate,id){
		var book = BookFactory.getExistingBook(ISBN);
		if(book){
			if(book.quantity > 0){
				records[id] = { member:member,date:date,returndate:returndate,book:book };
				book.quantity--;
			}
			else
				alert("The book with ISBN " + ISBN + " is not available at the moment.");
		}	
	}

	function getRecords(){
		return records;
	}

	return{
		newRecord: newRecord,
		getRecords:getRecords
	}

})();

//Creating the books
BookFactory.createBook("Design Patterns","Ross Harmes",123456789,2);
BookFactory.createBook("JavaScript Ninja","Dustin Diaz",123446789,1);
BookFactory.createBook("JavaScript Ninja","Dustin Diaz",123446789,1); // alert: This book already exists

//Creating the records
BookRecordManager.newRecord(123456789,"Gerardo Ostos",new Date(),new Date("February 4 2014 11:00:00"),"godprh");
BookRecordManager.newRecord(123446789,"Gerardo Ostos",new Date(),new Date("February 4 2014 11:00:00"),"gojndd");  
BookRecordManager.newRecord(123446789,"Gerardo Ostos",new Date(),new Date("February 4 2014 11:00:00"),"gojndd"); // alert: Not available at the moment 
BookRecordManager.newRecord(123446780,"Gerardo Ostos",new Date(),new Date("February 4 2014 11:00:00"),"gojndd"); // alert: The book doesn't exist

//Printing the records
console.log(BookRecordManager.getRecords());
