import { commands, ExtensionContext } from 'vscode';
import { showInputBox } from './basicInput';


export function activate(context: ExtensionContext) {
	context.subscriptions.push(commands.registerCommand('eggheadio.lesson', async () => {
		showInputBox()
	}));
}
