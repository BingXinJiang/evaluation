/**
 * Created by jiangsong on 2017/10/17.
 */

import React from 'react';
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import CONFIG from '../../const/BackConfig';
import { Link } from 'react-router-dom';

import { Button } from 'react-weui';

export default class Leader extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){

    }

    render(){
        return(
            <div style={{
                padding:CONFIG.containerPadding
            }}>
                <div style={{
                    display:'flex',justifyContent:'center',alignItems:'center'
                }}>
                    <p style={{
                        fontSize:CONFIG.titleSize,marginTop:'20px'
                    }}>你的韧商</p>
                </div>
                <div style={{
                    marginTop:'10px'
                }}>
                    <p style={{
                        fontSize:CONFIG.contentSize
                    }}>说明：下面列出的一些陈述能够帮助你了解自己以及你与周围环境和同事间的相互影响。
                        阅读每一条陈述并对其进行评分，1—6分别代表你对每一条陈述的赞同程度。
                    </p>
                </div>
                <div style={{
                    display:'flex',flexDirection:'row',marginBottom:'20px',marginTop:'20px'
                }}>
                    <div style={{
                        display:'flex',flexDirection:'column',width:'50%'
                    }}>
                        <p>1 = 完全不赞同</p>
                        <p>2 = 不赞同</p>
                        <p>3 = 略微不赞同</p>
                    </div>
                    <div style={{
                        display:'flex',flexDirection:'column',flex:'1'
                    }}>
                        <p>4 = 略微赞同</p>
                        <p>5 = 赞同</p>
                        <p>6 = 非常赞同</p>
                    </div>
                </div>
                <Link to="/question">
                    <Button>开始测试</Button>
                </Link>
            </div>
        )
    }
}