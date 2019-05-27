using System;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Logging;
using NLog.Web;
using Newtonsoft.Json;

namespace HomeAffairs
{
    public class Program
    {
        private static readonly string _appName = "HomeAffairs";

        public static void Main(string[] args)
        {            
            // NLog: Setup the loggerWeb first to catch all errors
            var loggerWeb = NLogBuilder.ConfigureNLog("nlog.config").GetCurrentClassLogger();

            try
            {
                loggerWeb.Info($"{_appName} application is starting.");
                loggerWeb.Debug("Initializing main...");

                BuildWebHost(args).Build().Run();
            }
            catch (Exception ex)
            {
                //NLog: Catch setup errors
                loggerWeb.Error($"{ex}", $"{_appName} application system has stopped because of an exception.");
                throw ex;
            }
            finally
            {
                // Ensure to flush and stop internal timers/threads before application-exit (Avoid segmentation fault on Linux)
                NLog.LogManager.Shutdown();
            }

        }

        public static IWebHostBuilder BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .ConfigureLogging(logging =>
                {
                    logging.ClearProviders();
                    logging.SetMinimumLevel(LogLevel.Trace);
                })
                .UseNLog();  // NLog: setup NLog for Dependency injection
    }
}
