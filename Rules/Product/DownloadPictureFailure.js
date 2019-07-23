import CommonLibrary from './../Common/Library/CommonLibrary';

export default function DownloadPictureFailure(context) {
	var error = '';
	try {
		error += '\n' + CommonLibrary.getActionResultError(context, 'MediaResult');
	} catch (actionResultError) {
		// do nothing
	}
	return context.localizeText('productDownloadPicutreFailure') + error;
}