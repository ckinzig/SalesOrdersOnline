export default function QuantityQuantityUnit(context) {
    var binding = context.getPageProxy().binding;
    var params = [];
    params.push(binding.Quantity);
    params.push(binding.QuantityUnit);
    return context.localizeText('quantityQuantityUnit', params);
}