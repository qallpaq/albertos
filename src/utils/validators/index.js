export const required = value => {
    return value ? undefined : 'Field is required'
};

const isExtensionIn = value => {
    const extensions = ['.net', '.com', '.ru', '.org'];
    const reverseString = item => item.split('').reverse().join('');
    const reversedValue = reverseString(value);

    if (value.length > 8) {
        return extensions.some(extension => {
            return reversedValue.indexOf(reverseString(extension)) === 0 && value.match(/@/);
        })
    }

    return false;
};

export const requiredEmail = value => {
    if (isExtensionIn(value)) return undefined
    return 'invalid email address'
};

export const maxLengthCreator = maxLength => value => {
    if (value.length > maxLength) return `Maximal length is ${maxLength} symbols`;
    return undefined;
};

export const minLengthCreator = minLength => value => {
    if (value.length < minLength) return `Minimal length is ${minLength} symbols`;
    return undefined;
};
