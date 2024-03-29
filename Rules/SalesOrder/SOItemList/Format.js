export default function Test(context) {
	var section = context.getName();
	var property = context.getProperty();
	var binding = context.binding;
	var value = '';
	var params = [];

	switch (section) {
	case 'ItemList':
		switch (property) {
		case 'StatusText':
			// instead of: $(L,'quantityQuantityUnit',{{#Property:Quantity}},{{#Property:QuantityUnit}})
			params.push(binding.Quantity);
			params.push(binding.QuantityUnit);
			value = context.localizeText('quantityQuantityUnit', params);
			break;
		case 'Title':
			// instead of: $(L,'productNameItemNumber',{{#Property:ProductDetails/#Property:Name}},{{#Property:ItemNumber}})
			params.push(binding.ProductDetails.Name);
			params.push(binding.ItemNumber);
			value = context.localizeText('productNameItemNumber', params);
			break;
		default:
			break;
		}
		break;

	default:
		break;
	}
	return value;
}