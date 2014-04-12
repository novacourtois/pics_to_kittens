var default_options = {
    enabled: true
};

function get_option(option_name) {
    for (var option in default_options) {
        if (!(option in localStorage)) {
            localStorage[option] = JSON.stringify(default_options[option]);
        }
    }
    return JSON.parse(localStorage[option_name]);
}

function set_option(option_name, value) {
    localStorage[option_name] = JSON.stringify(value);
}