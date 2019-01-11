using System;
using VDNStd.General;

class Program
{
    static void Main(string[] args)
    {
        int row = 0;

        do
        {
            if (row == 0 || row >= 15)
                ResetConsole();

            string input = Console.ReadLine();
            if (string.IsNullOrEmpty(input)) break;

            Console.WriteLine($"Input: {input} {"Begins with uppercase? ", 30}: " +
                              $"{(StringCharCheck.IsFirstUpper(input) ? "Yes" : "No")}\n");
            Console.WriteLine($"Input: {input} {"Formatted returned data is ", 30}: " +
                              $"{VDEventLog.ReturnLog(input)}\n");
            row += 3;
        } while (true);
        return;

        // Declare a ResetConsole local method
        void ResetConsole()
        {
            if (row > 0)
            {
                Console.WriteLine("Press any key to continue...");
                Console.ReadKey();
            }
            Console.Clear();
            Console.WriteLine("\nPress <Enter> only to exit; otherwise, enter a string and press <Enter>:\n");
            row = 3;
        }
    }
}
