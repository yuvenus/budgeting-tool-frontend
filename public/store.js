 // just for fun; not going to use redux bc it's too complicated for what i need
 
 export const budgetDataSource = (state, action) => {
     switch (action.type) {
        case 'ADD_ROW':
            return state.concat([action.row]);
        case 'EDIT_ROW':
            return state.map(m => m.index == action.row.index ? action.row : m);
        case 'DELETE_ROW':
            return state.filter(f => action.row.index);
        default:
            return state;
     }
 }