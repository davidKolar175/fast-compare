import * as vscode from 'vscode';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('fastcompare.fastcompare', (commandContext) => {
        const leftFilePath = commandContext._fsPath ?? "";
        const rightFilePath = vscode.window.activeTextEditor?.document?.fileName ?? "";

        if (!vscode.window.activeTextEditor) {
            vscode.window.showErrorMessage("Active tab is not a text editor!");
            return;
        }

        if (!fs.existsSync(leftFilePath) || !fs.existsSync(rightFilePath)) {
            vscode.window.showErrorMessage("Could not compare selection!");
            return;
        }

        vscode.commands.executeCommand("vscode.diff", vscode.Uri.file(leftFilePath), vscode.Uri.file(rightFilePath));
    });

    context.subscriptions.push(disposable);
}

export function deactivate() { }
