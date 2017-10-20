/**
 * Created by jiangsong on 2017/10/17.
 */
var React = require('react');
import {Route} from 'react-router-dom';

import Leader from '../content/Leader';
import Commit from '../content/Commit';
import Question from '../content/Question';
import Resolve from '../content/Resolve';

export default class MainPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount() {

    }
    render(){
        return (
            <div style={{width:'100%'}}>
                <Route path='/leader' component={Leader}/>
                <Route path='/commit' component={Commit}/>
                <Route path='/question' component={Question}/>
                <Route path='/resolve' component={Resolve}/>
            </div>
        )
    }
}