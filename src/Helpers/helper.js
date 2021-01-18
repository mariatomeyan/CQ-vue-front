import _ from 'lodash';
import queryString from 'query-string';

export function transformStringToPaginationAttr(dirtyPaginateAttr) {
    var cleanPaginationAttrs = [];

    if (Array.isArray(dirtyPaginateAttr)) {
        cleanPaginationAttrs.push(
            {
                page_url: getStringBetween(dirtyPaginateAttr[0], '<', '>'),
                rel: _.trim(getStringBetween(dirtyPaginateAttr[1], '=', ''), '"')
            }
        );
    }

    return cleanPaginationAttrs;
}

export function getStringBetween(str, starts, ends) {
    return str.substring(
        str.lastIndexOf(starts) + 1,
        str.lastIndexOf(ends)
    );
}

export function getParsedQuery(query) {
    return queryString.parseUrl(query);
}
