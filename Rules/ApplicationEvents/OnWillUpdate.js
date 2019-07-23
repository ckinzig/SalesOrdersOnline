import Logger from './../Log/Logger';

export default function OnWillUpdate(clientAPI) {
	let dialogs = clientAPI.nativescript.uiDialogsModule;
	let updateQuestion = clientAPI.localizeText('updateQuestion');
	return dialogs.confirm(updateQuestion).then((result) => {
		Logger.debug('APPLICATION ON WILLUPDATE', 'Update now? ' + result);
		if (result === true) {
			return Promise.resolve();
		} else {
			return Promise.reject(clientAPI.localizeText('userDeferred'));
		}
	});
}