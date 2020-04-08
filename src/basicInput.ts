import { window, } from 'vscode';


export async function showInputBox() {
	const lessonName = await window.showInputBox({
		value: '',
		placeHolder: 'Type a lesson name',
	});

	if (!lessonName) return

	let termName = "egghead.io quick lesson"
	let term = window.createTerminal(termName)
	term.show(true)

	window.onDidCloseTerminal(event => {
		if (term && event.name === termName) {
			term.dispose()
		}
	})

	let message = `Creating: ${lessonName}`
	let command = `echo "${message}" && +lesson "${lessonName}"`
	term.sendText(command)
}

