export default function FullName(context) {
    var params = [];
    params.push(context.binding.LastName);
    params.push(context.binding.FirstName);
    return context.localizeText('fullName', params);
}