﻿function Report(strMessage)
{
        var wordApp = getActiveXObject("Word.Application");
        wordApp.Visible = true;
        var doc = wordApp.Documents.Add()
        var sel = wordApp.Selection;
        var len = strMessage.length;
        //Log.Message(len);
        sel.TypeText("This document contains all the log messages for Login Utility Project"+"\n")
        for (let i = 0; i < len; i++ )
        {
          sel.TypeText(i+1+". "+strMessage[i]);
          sel.TypeText("\n");
          //.SaveAs("Report.doc");
        }
        //doc.SaveAs("Report.doc");        
        //wordApp.Application.Quit();	
       
}

function PushIntoArr(strPushMessage)
{
  var arr=[];
  arr.push(strPushMessage);
  return arr;
}

function PushIntoArray(logs,strPushMessage)
{
//vec<int>logarr;
//logarr.push_back(strPushMeaage)
var arr=logs;
arr.push(strPushMessage);
return arr;

}
