import CommonLibrary from './../Common/Library/CommonLibrary';

export default function SOItemNavToUpdate(context) {
	CommonLibrary.setOnCreateUpdateFlag(context, 'UPDATE');
	return context.executeAction('/SalesOrdersOnline/Actions/SalesOrder/NavToSOItemCreateUpdate.action');
}