import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

  const compareWithActiveFileDisposable = vscode.commands.registerCommand('fastcompare.compareWithActiveFile', (commandContext) => {
    if (!vscode.window.activeTextEditor) {
      vscode.window.showErrorMessage("Active tab is not a Text Editor!");
      return;
    }

    if (commandContext.scheme !== "file") {
      vscode.window.showErrorMessage("Tab to compare is not a Text Editor!");
      return;
    }

    vscode.commands.executeCommand(
      "vscode.diff",
      vscode.window.activeTextEditor.document.uri,
      vscode.Uri.from(commandContext)
    );
  });

  context.subscriptions.push(compareWithActiveFileDisposable);

  const compareWithTab = vscode.commands.registerCommand('fastcompare.compareWithTab', () => {
    if (!vscode.window.activeTextEditor) {
      vscode.window.showErrorMessage("Active tab is not a Text Editor!");
      return;
    }

    
    const visibleTabs = vscode.window.tabGroups.activeTabGroup.tabs;
    if (visibleTabs.length < 2) {
      vscode.window.showErrorMessage(`No file to compare.${visibleTabs.length}`);
      return;
    }

    const activeTab = visibleTabs.find(tab => {
      if (tab.input && (tab.input instanceof vscode.TabInputText)) {
        return tab.input.uri.toString() === vscode.window.activeTextEditor?.document.uri.toString();
      }
      return false;
    });

    if (!activeTab) {
      vscode.window.showErrorMessage("Couldn't find active tab.");
      return;
    }

    const activeTabIndex = visibleTabs.indexOf(activeTab);
    let tabToCompare: vscode.Tab;
    let left = false;
    if (activeTabIndex <= 0) {
      tabToCompare = visibleTabs[activeTabIndex + 1];
      left = true;
    } else {
      tabToCompare = visibleTabs[activeTabIndex - 1];
    }

    let tabInput = tabToCompare.input as vscode.TabInputText;
    if (tabInput.uri.scheme !== 'file') {
      vscode.window.showErrorMessage("No valid tab to compare!");
      return;
    }

    if (left) {
      vscode.commands.executeCommand(
        "vscode.diff",
        vscode.window.activeTextEditor.document.uri,
        tabInput.uri
      );
    } else {
      vscode.commands.executeCommand(
        "vscode.diff",
        tabInput.uri,
        vscode.window.activeTextEditor.document.uri
      );      
    }
  });
  
  context.subscriptions.push(compareWithTab);
}

export function deactivate() { }
