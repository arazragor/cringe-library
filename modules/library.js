export const Library = {
    ArrayOfBooks: [],
    addBook: function(book) {
        this.ArrayOfBooks.push(book);
    },
    deleteBook: function(indexOfBook) {
        this.ArrayOfBooks.splice(indexOfBook, 1);
    },
};