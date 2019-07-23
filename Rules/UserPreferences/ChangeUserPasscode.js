export default function ChangeUserPasscode(controlProxy) {
	if (controlProxy.getPasscodeSource() === 2) {
		return controlProxy.executeAction('/SalesOrdersOnline/Actions/Passcode/DisplayPasscodeSource.action');
	} else {
		return controlProxy.executeAction('/SalesOrdersOnline/Actions/Passcode/ChangeUserPasscode.action');
	}
}
