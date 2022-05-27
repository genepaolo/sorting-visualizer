// Reducer
// initial state, new action will return into state,
  
const themeReducer = (state="LIGHT", action) =>{
    switch(action.type){
        case 'LIGHT':
            return 'LIGHT';
        case 'DARK':
            return 'DARK';
        case 'CYBERPUNK':
            return 'CYBERPUNK'
    }
    return state;
}

export default themeReducer;