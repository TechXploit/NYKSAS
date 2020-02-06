const Validator = {
    isBlank: (val) => { return String(val).length === 0 },
    isPhone: (val) => {
        var regex = /[0-9]{10}/g;
        return regex.test(String(val))
    },
    isEmail: (val) => {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(val).toLowerCase())
    },
    isChar: (val) => {
        var regex = /[a-zA-Z ]/g;
        return regex.test(String(val))
    },
    isNum: (val) => {
        var regex = /[0-9]/g;
        return regex.test(String(val))
    },
    isCharNum: (val) => {
        var regex = /[a-zA-Z0-9 ]/g;
        return regex.test(String(val))
    },
    isSymbol: (val) => {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(val))
    },
    isSpecificLength: (val, len) => { return String(val).length === len; },
    isMinLength: (val, len) => { return String(val).length >= len; },
    isMaxLength: (val, len) => { return String(val).length <= len; },
}
export default Validator;