﻿using System;
using System.Collections.Generic;

namespace WebApi.Models
{
    public interface IBooksRepository : IDisposable
    {
        IEnumerable<Book> GetBooks();
        Book GetBook(int id);
        Book AddBook(Book newBook);
        Book UpdateBook(Book newBook);
        void DeleteBook(int id);
    }
}