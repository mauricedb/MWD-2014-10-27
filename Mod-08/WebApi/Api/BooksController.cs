using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi.Models;

namespace WebApi.Api
{
    public class BooksController : ApiController
    {
        private IBooksRepository _repo = new BooksRepository();

        // GET: api/Books
        public IEnumerable<Book> Get()
        {
            return _repo.GetBooks();
        }

        // GET: api/Books/5
        public HttpResponseMessage Get(int id)
        {
            var book = _repo.GetBook(id);
            if (book != null)
            {
                return Request.CreateResponse(HttpStatusCode.OK, book);
            }

            return Request.CreateResponse(HttpStatusCode.NotFound);
        }

        // POST: api/Books
        public void Post(Book book)
        {
            _repo.AddBook(book);
        }

        // PUT: api/Books/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Books/5
        public void Delete(int id)
        {
        }
    }
}
