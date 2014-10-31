using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Less.Startup))]
namespace Less
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
