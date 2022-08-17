// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as fs from 'fs';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('fastcompare.helloWorld', (test) => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		const leftFilePath = test._fsPath ?? "";
		const rightFilePath = vscode.window.activeTextEditor?.document?.fileName ?? "";

		if (!fs.existsSync(leftFilePath) || !fs.existsSync(rightFilePath)) {
			vscode.window.showInformationMessage("Could not compare selection!");
			return;
		}

		vscode.commands.executeCommand("vscode.diff",
			vscode.Uri.file(leftFilePath),
			vscode.Uri.file(rightFilePath));
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
