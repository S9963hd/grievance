export function LoginStateController(state,action){
    switch(action.type){
        case 'login':
            return {...state,[action.field]:action.value};
        case 'logout':
            return {name:"",email:"",jesssion:""}
    }
}
export const loginDetails={
    name:"sanjay",
    email:"",
    jsession:"",
}