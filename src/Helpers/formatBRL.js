function formatValues(value) {
    value = value.toFixed(2) + '';
    let x = value.split('.');
    let x1 = x[0];
    let x2 = x.length > 1 ? ',' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }
    return x1 + x2;
}

export default formatValues;