import React from 'react';
import {connect} from 'react-redux'
import { Select, Button} from 'antd';

const Option = Select.Option;

class Template extends React.Component {
    constructor(props,context){
        super(props,context)
    }

    handleChangeS=(value)=> {
        this.setState({
            defultPath:value
        })
    };

    goback=()=>{
        this.props.history.push('/register');
    };

    go=()=>{
        this.props.history.push('/succeed')
    };
    render(){


        return <section className={'selectBox'}>
            <Select defaultValue="lucy"  onChange={this.handleChangeS}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select>
            <Button type='danger' icon="rollback" onClick={this.goback}>Prev</Button>
            <Button type='primary' icon="check-circle" onClick={this.go}>GO</Button>
        </section>;
    }
}
export default connect()(Template);