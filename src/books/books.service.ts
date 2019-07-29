import { Injectable, HttpException } from '@nestjs/common';
import { BOOKS } from '../mocks/books.mock';

@Injectable()
export class BooksService {
    private books = BOOKS;

    getBooks(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.books);
        });
    }
    
    getBook(bookId: number): Promise<any> {
        return new Promise(resolve => {
            let book = this.books.find(book => book.id == bookId);

            if (!book) {
                throw new HttpException('Book not exist', 404);
            }

            resolve(book);
        });
    }

    addBook(book): Promise<any> {
        return new Promise(resolve => {
            this.books.push(book);
            resolve(this.books);
        });
    }

    deleteBook(bookId: number): Promise<any> {
        return new Promise(resolve => {
            let index = this.books.findIndex(book => book.id == bookId);
            if (index == -1) {
                throw new HttpException('Book not exist', 404);
            }
            this.books.splice(index, 1);
            resolve(this.books);
        })
    }
}
