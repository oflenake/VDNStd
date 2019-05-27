using System;
using System.Collections.Generic;
using System.Text;

namespace VDNStd.ContractsService
{
    public interface ILoggerManager
    {
        void LogInfo(string message);
        void LogWarn(string message);
        void LogDebug(string message);
        void LogError(string message);
    }
}
