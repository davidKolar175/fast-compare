import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('fastcompare.fastcompare', (commandContext) => {

        if (!vscode.window.activeTextEditor) {
            vscode.window.showErrorMessage("Active tab is not a Text Editor!");
            return;
        }

        if (commandContext.scheme !== "file" && commandContext.scheme !== "untitled" ) {
            vscode.window.showErrorMessage("Tab to compare is not a Text Editor!");
            return;
        }

        vscode.commands.executeCommand(
            "vscode.diff",
            vscode.Uri.from(commandContext),
            vscode.window.activeTextEditor.document.uri
        );
    });

    context.subscriptions.push(disposable);
}

export function deactivate() { }
