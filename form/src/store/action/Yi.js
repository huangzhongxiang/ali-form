import * as TYPES from '../action-types';


let Yi = {
    Yi_Yi(payload = {}) {
        return dispatch => {
            let {
                name = '用户名',
                email = '邮箱,',
                phone = '手机',
                password = '密码',
                use_name = '应用名称',
                use_dried = '应用简介'
            } = payload;
            dispatch({
                type: TYPES.FORM_YI,
                payload
            });
        }
    },
};

export default Yi;