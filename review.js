const arer = document.getElementById('arer')
let stack = 0

function leftbtn() {
    if (stack === 0) {
        return
    }
    if (stack === 100) {
        arer.style.marginLeft = `0`
        stack = stack - 100
        return
    }
    if (stack === 200) {
        arer.style.marginLeft = `-100%`
        stack = stack - 100
        return
    }
}
function rightbtn() {
    if (stack === 0) {
        arer.style.marginLeft = `-100%`
        stack = stack + 100
        return
    }
    if (stack === 100) {
        arer.style.marginLeft = `-200%`
        stack = stack + 100
        return
    }
    return
}