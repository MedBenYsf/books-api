import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dto/create-book.dto';

@Controller('books')
export class BooksController {

    constructor(private bookService: BooksService) {}

    @Get()
    async getBooks() {
        const books = await this.bookService.getBooks();
        return books
    }

    @Get(':bookId')
    async getBook(@Param('bookId') bookId) {
        const book = await this.bookService.getBook(bookId);
        return book;
    }

    @Post()
    async addBook(@Body() createBookDTO: CreateBookDTO) {
        const book = await this.bookService.addBook(createBookDTO);
        return book;
    }

    @Delete(':bookId')
    async deleteBook(@Param('bookId') bookId) {
        const books = await this.bookService.deleteBook(bookId);
        return books;
    }
    
}
