import axios from 'axios';

// GET REQUEST
export function get(url, callback, errorcallback) {
    axios.get(url)
        .then(res => {
            if (callback != null) {
                callback(res);
            }
        })
        .catch(err => {
            // catch error
            if (errorcallback != null) {
                errorcallback(err);
            }
        })
}

//POST REQUEST
export function post(url,data, callback, errorcallback) {
    axios.post(url,data)
        .then(res => {
            if (callback != null) {
                callback(res);
            }
        })
        .catch(err => {
            // catch error
            if (errorcallback != null) {
                errorcallback(err);
            }
        })
}

//extract product id from url
export function get_product_id_from_url(url) {
    const params = new URLSearchParams(url)
    let id = params.get('id')
    return id
}