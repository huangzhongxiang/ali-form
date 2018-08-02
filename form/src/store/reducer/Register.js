import * as TYPE from '../action-types'

let INIT_STATE = {
    name:'',
    email:'',
    phone:'',
    password:'',
    use_name:'',
    use_dried:''
};
export default function Yi(state=INIT_STATE,action) {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type){
        case TYPE.FORM_YI:
            state = action.payload;
            break;
    }
    return state;
}