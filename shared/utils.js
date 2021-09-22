import { FEAT_REGEXP, months } from './constants';

export const capitalize = ([first, ...rest], locale = navigator.language) =>
    first.toLocaleUpperCase(locale) + rest.join('');

export const humanizeDate = (dateISO) => {
    const dateParsed = new Date(dateISO);

    return ` ${months[dateParsed.getUTCMonth()]} ${dateParsed.getFullYear()}`;
};

// clean name from .feat/.ft/with
export const cleanName = (name) => name.split(FEAT_REGEXP).shift().trim();
