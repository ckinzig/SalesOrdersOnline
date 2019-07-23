import CommonLibrary from './../Common/Library/CommonLibrary';

export default function SOItemNavToCreate(context) {
	CommonLibrary.setOnCreateUpdateFlag(context, 'CREATE');
	return context.executeAction('/SalesOrdersOnline/Actions/SalesOrder/NavToSOItemCreateUpdate.action');
}