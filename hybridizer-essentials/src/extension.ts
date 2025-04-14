import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('"hybridizer-essentials" is now active!');

	const newProjectCommandDisp = vscode.commands.registerCommand('hybridizer-essentials.new-project', () => {
		vscode.window.showInformationMessage('Here goes the implementation of the new project command');
	});

	const hybridizeProjectCommandDisp = vscode.commands.registerCommand('hybridizer-essentials.hybridize-project', () => {
		vscode.window.showInformationMessage('Here goes the implementation of the hybridize project command');
	});

	context.subscriptions.push(newProjectCommandDisp);
	context.subscriptions.push(hybridizeProjectCommandDisp);
}

// This method is called when your extension is deactivated
export function deactivate() {}
