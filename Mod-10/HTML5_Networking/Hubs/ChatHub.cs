using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace HTML5_Networking.Hubs
{
    public class ChatHub: Hub
    {

        public void SendMessage(string message)
        {
            Clients.All.Broadcast(message);
        }

    }
}