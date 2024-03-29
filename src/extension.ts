import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    const compareWithActiveFileDisposable = vscode.commands.registerCommand('fastcompare.compareWithActiveFile', (commandContext) => {
        if (!vscode.window.activeTextEditor) {
            vscode.window.showErrorMessage("Active tab is not a Text Editor!");
            return;
        }

        if (commandContext.scheme !== "file" && commandContext.scheme !== "untitled") {
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
}

export function deactivate() { }
