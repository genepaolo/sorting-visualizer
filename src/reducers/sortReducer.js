// Reducer
// initial state, new action will return into state,


const sortReducer = (state="BUBBLE", action) =>{
    switch(action.type){
        case 'BUBBLE':
            return 'BUBBLE';
        case 'MERGE':
            return 'MERGE';
        case 'INSERTION':
            return 'INSERTION';
        case 'SELECTION':
            return 'SELECTION';
        case 'QUICK':
            return 'QUICK';
    }
    return state;
}

export default sortReducer;