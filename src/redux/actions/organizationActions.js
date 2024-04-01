import * as types from './actionTypes';

export function createOrganization(organization) {
    return { type: types.CREATE_ORGANIZATION, organization};
}