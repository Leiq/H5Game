﻿function getPI(n) {
    var a = 0;
    for (var i = 0; i < n; i++) {
        a = a + 4 * Math.pow(-1, i) / (2 * i + 1);
    }
    return a;
}

onmessage = function (e) {
    postMessage(getPI(e.data));
}