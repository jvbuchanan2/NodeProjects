export default function organizationReducer(state = [], action) {
    switch(action.type) {
        case "CREATE_ORGANIZATION":
            return [...state, { ...action.organization}];
        default:
            return state;
    }
}