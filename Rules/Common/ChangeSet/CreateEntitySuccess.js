import CommonLibrary from './../Library/CommonLibrary';

export default function CreateEntitySuccess(context) {
	if (!CommonLibrary.isOnChangeset(context)) {
		return context.executeAction('/SalesOrdersOnline/Actions/CreateUpdateDelete/CreateEntitySuccess.action');
	} else {
		return context.executeAction('/SalesOrdersOnline/Actions/ClosePage.action');
	}
}