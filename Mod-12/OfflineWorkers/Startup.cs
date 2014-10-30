using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(OfflineWorkers.Startup))]
namespace OfflineWorkers
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
