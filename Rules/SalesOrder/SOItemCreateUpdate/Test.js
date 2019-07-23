import SalesOrder from './../SalesOrder';

export default function Test(context) {
	var product = SalesOrder.getItemProduct(context);
	return product['@odata.readLink'];
}