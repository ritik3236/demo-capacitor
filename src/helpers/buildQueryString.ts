const genArrayArg = (key, values) => (values.map(value => `${key}[]=${encodeURIComponent(value)}`).join('&'));

const genPlainArg = (key, value) => (`${key}=${encodeURIComponent(value)}`);

export const buildQueryString = (action: {}) => (Object.entries(action)
    .filter(w => !(w[1] === '' || w[1] === null || w[1] === undefined || (Array.isArray(w[1]) && !w[1][0].length)))
    .map(arg => Array.isArray(arg[1]) ? genArrayArg(arg[0], arg[1]) : genPlainArg(arg[0], arg[1]))
    .join('&'));
