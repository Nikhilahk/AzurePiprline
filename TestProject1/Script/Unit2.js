function LogMessages()
{
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  var LastResult;
  LastResult = Log.AppendFolder("All Log messages", "");
  Project.Variables.strloopvar = LastResult;
  //Checks whether the 'contentText' property of the Aliases.browser.pageOracleApplicationsSwuatClone.formDefaultformname.buttonPersbtn object equals ProjectSuite.Variables.strCheckpoint.
  aqObject.CheckProperty(Aliases.browser.pageOracleApplicationsSwuatClone.formDefaultformname.buttonPersbtn, "contentText", cmpEqual, ProjectSuite.Variables.strCheckpoint);
  Project.Variables.strLogMessage = "The propertycheckpoint is verified with" + ProjectSuite.Variables.strCheckpoint;
  //Posts an information message to the test log.
  Log.Message(Project.Variables.strLogMessage, "");
  //Checks whether the 'contentText' property of the Aliases.browser.pageOracleApplicationsSwuatClone.formDefaultformname.textnodeNavigator object equals ProjectSuite.Variables.strCheckpointNavi.
  aqObject.CheckProperty(Aliases.browser.pageOracleApplicationsSwuatClone.formDefaultformname.textnodeNavigator, "contentText", cmpEqual, ProjectSuite.Variables.strCheckpointNavi);
  Project.Variables.strLogNavi = "The propertycheckpoint is verified with" + ProjectSuite.Variables.strCheckpointNavi;
  //Posts an information message to the test log.
  Log.Message(Project.Variables.strLogNavi, "");
  //Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
  
  
  
  var wordApp = getActiveXObject("Word.Application");
        wordApp.Visible = true;
        var doc = wordApp.Documents.Add()
        var sel = wordApp.Selection
          sel.TypeText();
          
         
}