import { window, } from 'vscode';
import { paramCase } from "param-case";


export async function showInputBox() {
	const lessonName = await window.showInputBox({
		value: '',
		placeHolder: 'Type a lesson name',
	});

	if (!lessonName) return

	let dashedLessonName = `${paramCase(lessonName)}`


	window.showInformationMessage(`Creating: ${dashedLessonName}`);

	let termName = "egghead.io quick lesson"
	let term = window.createTerminal(termName)
	term.show(true)

	window.onDidCloseTerminal(event => {
		if (term && event.name === termName) {
			term.dispose()
		}
	})

	let command = `+lesson ${dashedLessonName}`
	term.sendText(command)
}

