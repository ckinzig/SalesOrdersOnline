import CommonLibrary from './../../Common/Library/CommonLibrary';

export default function CreateUpdate(context) {
	if (CommonLibrary.IsOnCreate(context)) {
		return context.executeAction('/SalesOrdersOnline/Actions/SalesOrder/CreateUpdateDelete/SOItemCreate.action');
	} else {
		return context.executeAction('/SalesOrdersOnline/Actions/SalesOrder/CreateUpdateDelete/SOItemUpdate.action');
	}
}