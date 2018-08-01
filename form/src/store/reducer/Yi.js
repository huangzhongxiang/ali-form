import * as TYPE from '../action-types'

let INIT_STATE = {
    name:'用户名',
    email:'邮箱,',
    phone:'手机',
    password:'密码',
    use_name:'应用名称',
    use_dried:'应用简介'
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