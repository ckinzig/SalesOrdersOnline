import CommonLibrary from './../Common/Library/CommonLibrary';

export default function SendLoggerUpdate(context) {
	var control = context.getPageProxy().getControl('FormCellContainer');
	var dict = CommonLibrary.getControlDictionaryFromPage(context);
	dict.LogLevelLstPkr.clearValidation();
	if (control.getControls()[0].getValue()) {
		context.executeAction('/SalesOrdersOnline/Actions/Logger/CheckRequiredFieldOnLogger.action');
	}
}
