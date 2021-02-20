function words(str) {
    return str.split(' ')
}

function sentence(arr) {
    return arr.join(' ')
}

function yell(str) {
    return str.toUpperCase()
}

function whisper(str) {
    return '*' + str.toLowerCase() + '*'
}

function capitalize(str) {
    return str.toUpperCase()[0] + str.slice(1).toLowerCase()
}
