/**
 * 请求
 */

'use strict';

export  function httpGet(url, success, fail) {
    let method = 'GET';
    let isTimeout = false;
    let promise = fetch(url, {
        method
    })
        .then(response => {
            if (isTimeout == false) {
                clearTimeout(timeout);
                return response.json();
            }
        })
        .then(resObj => success(resObj))
        .catch(err => {
            clearTimeout(timeout);
            fail(err);
        });
    var timeout = setTimeout(function () {
        isTimeout = true;
        promise.done();
    }, 15000);
}
export function httpPost(url, object, success , fail) {
    let method = 'POST';
    let isTimeout = false;
    let promise = fetch(url,{
        method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(object),
    })
        .then(response => {
                if (isTimeout == false) {
                    clearTimeout(timeout);
                    return response.json();
                }
            })
            .then(resObj => success(resObj))
            .catch(err => {
                clearTimeout(timeout);
                fail(err);
            });
        var timeout = setTimeout(function () {
            isTimeout = true;
            promise.done();
        }, 15000);
}