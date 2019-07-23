import Logger from './../Log/Logger';

export default function OnDidUpdate(clientAPI) {
	Logger.init(clientAPI);
	return clientAPI.executeAction('/SalesOrdersOnline/Actions/Service/CreateService.action').then(function (success) {
		return Promise.resolve(success);
	}).catch(function (failure) {
		Logger.error('OnDidUpdateFailure', failure);
		return Promise.reject(clientAPI.localizeText('oDataInitializationFailed'));
	});
}