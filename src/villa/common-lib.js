const arrayKeys = ['type', 'region', 'category', 'property'];

export const objectToQueryParam = (obj) => {
    var queryString = Object.keys(obj).reduce((prev, key) => {
        let item = '';
        if (Array.isArray(obj[key])) {
            const arrstr = reduceFilterArray(obj[key])
            if (arrstr != null) {
                item = key + '=' + arrstr;
            }
        } else {
            if (obj[key] != null && obj[key].trim() != '') {
                item = key + '=' + encodeURIComponent(obj[key]);
            }
        }
        return prev + (prev != '' && item != '' ? '&' : '') + item;
    }, '');

    return queryString;
}

export const queryParamToObject = (qs) => {
    qs = qs.replaceAll('?', '');

    let obj = {};
    qs.split('&').forEach(i => {
        if (i == null || i == '') {
            return;
        }
        const tmp = i.split('=');
        const key = tmp[0];
        let value = decodeURIComponent(tmp[1]);
        if (arrayKeys.includes(key)) {
            value = value.split(',').reduce((prev, curr) => {
                if (prev == null) {
                    prev = [];
                }
                prev.push(decodeURIComponent(curr));
                return prev;
            }, [])
        }
        obj[key] = value;
    })
    return obj;
}

const reduceFilterArray = (arr) => {
    if (arr.length > 0) {
        return arr.reduce(
            (prev, curr) => prev + (prev != '' ? ',' : '') + curr, ''
        )
    }
    return null;
}