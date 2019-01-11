#region Proprietary Information
/* 
    * Created by:   Vision-Dream ICT Solutions
    * Author:       Onkgopotse Lenake
    * Email:        visiondreamict@gmail.com
    * Website:      www.visiondreamict.wordpress.com
    * 
    * Copyright (c) 2019 Vision-Dream ICT Solutions. All rights reserved.
    * ___________________________________________________________________
    * Project:      Vision-Dream .Net Standard 2.0 (VDNStd) 
    *               Project Targeting .Net Standard 2.0.
    * Version:      v1.0.0
    * File:         VDEventLogTest.cs
    * Date:         2019-01-10
    * Description:  This file contains the VDEventLogTest class. 
    *               Class execution code.
*/
#endregion

using Microsoft.VisualStudio.TestTools.UnitTesting;
using VDNStd.General;

namespace VDNStd.Tests.General
{
    [TestClass]
    public class VDEventLogTest
    {
        //[TestMethod]
        //public void DefaultConstructorNull()
        //{
        //    VDEventLog vdeventlog = new VDEventLog();
        //    var result = vdeventlog;
        //    Assert.IsNull(result, string.Format("Expected for '{0}': IsNull; Actual: {1}",
        //                                             vdeventlog == null ? "<null>" : vdeventlog.ToString(), result));
        //}

        [TestMethod]
        public void ReturnLogTestTrue()
        {
            string processmsg = "Process Message Is Not Null.";
            string returnlog = VDEventLog.ReturnLog(processmsg);
            string result = returnlog;
            Assert.IsNotNull(result, string.Format("Expected for '{0}': IsNotNull; Actual: {1}", returnlog, result));
        }
    }
}
