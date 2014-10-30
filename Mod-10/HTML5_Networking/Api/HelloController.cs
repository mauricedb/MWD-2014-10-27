using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Runtime.InteropServices.ComTypes;
using System.Web.Http;

namespace HTML5_Networking.Api
{
    public class HelloController: ApiController
    {
        public HttpResponseMessage Get()
        {
            var response = Request.CreateResponse(HttpStatusCode.OK,
                "Hello London, the time is: " + DateTime.Now.ToLongTimeString());

            IEnumerable<string> origin;
           if ( Request.Headers.TryGetValues("Orgin", out origin))
            {
                
            }
            response.Headers.Add("Access-Control-Allow-Origin", "http://localhost:60346");
            return response;
        }
    }
}