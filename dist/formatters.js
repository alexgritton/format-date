/**
 * Formatters are based on moment tokens. They receives a
 * Date and returns it's formatted.
 */
const formatters = {
    'DD': (date) => zero(date.getDate(), 2),
    'D': (date) => date.getDate() + '',
    'MM': (date) => zero(date.getMonth() + 1, 2),
    'M': (date) => (date.getMonth() + 1) + '',
    'YYYY': (date) => zero(date.getFullYear(), 4),
    'YY': (date) => (date.getFullYear() + '').substr(-2, 2),
    'hh': (date) => zero(date.getHours(), 2),
    'h': (date) => date.getHours() + '',
    'mm': (date) => zero(date.getMinutes(), 2),
    'm': (date) => date.getMinutes() + '',
    'ss': (date) => zero(date.getSeconds(), 2),
    's': (date) => date.getSeconds() + '',
};
/**
 * Add '0' pads to number value.
 */
function zero(value, length) {
    let string = value + '';
    while (string.length < length)
        string = '0' + string;
    return string;
}
export default formatters;