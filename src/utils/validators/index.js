export const required = value => {
    return value ? undefined : 'Field is required'
};

export const maxLengthCreator = maxLength => value => {
    if (value.length > maxLength) return `Maximal length is ${maxLength} symbols`;
    return undefined;
};

export const minLengthCreator = minLength => value => {
    if (value.length < minLength) return `Minimal length is ${minLength} symbols`;
    return undefined;
};