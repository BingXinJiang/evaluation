/**
 * Created by jiangsong on 2017/10/17.
 */
import React from 'react';
import echarts from 'echarts'
import {Article} from 'react-weui';

class Content extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Article>
                    <section>
                        <section>
                            <h1 className="title">解释你的韧商TM打分</h1>
                            <p>&nbsp;&nbsp;韧商总分最高为192，最低为32。每一个单独的韧商维度得分最高为24，最低为4。</p>
                            <p>&nbsp;&nbsp;说明：在以下韧商得分范围中定位你的恢复力维度总分。根据各恢复力等级给出的建议开始发展和提升——或保持——
                                你的个人恢复力。</p>
                            <section>
                                <h2 className="title">175—192&nbsp;&nbsp;恢复力极强</h2>
                                <p>&nbsp;&nbsp;你总时能有效地处理变革，甚至在变革中能担当重任。你已具备一套有效的机制，能为你提供方向、结构、支持和自信。</p>
                            </section>
                            <section>
                                <h2 className="title">128—174&nbsp;&nbsp;有恢复力</h2>
                                <p>&nbsp;&nbsp;大多数时候你能以积极的态度处理变革。你有许多途径能帮助你解决变革导致的不确定性。你能通过继续发展得分较低的韧商维度来提高韧商。</p>
                            </section>
                            <section>
                                <h2 className="title">96—127&nbsp;&nbsp;稍有恢复力</h2>
                                <p>&nbsp;&nbsp;变革可能影响你的最佳表现。对于重回原来的位置你有些困难。然而你已经有一些稳定的途径，你可以对其多加发展和练习。从你得分较低的维度开始做起。</p>
                            </section>
                            <section>
                                <h2 className="title">32－95&nbsp;&nbsp;恢复力较差</h2>
                                <p>&nbsp;&nbsp;变革对你而言是极大的挑战。你时常对于变革产生的不确定性以及不稳定性毫无准备。虽然有时候你能够找到稳定性和集中点，但是你仍需发展你的恢复能力，并拓展其范围。从你得分较低的维度开始做起，然后制定你的韧商发展计划。</p>
                            </section>
                        </section>
                        <section>
                            <h1>解释你的韧商TM雷达</h1>
                            <p>&nbsp;&nbsp;要解释你的韧商雷达图就要检查整个“轮子”的大小（轮子越大，恢复力越强），以及轮子的“平衡性”或比例。
                                举例来说，失衡的轮子意味着与其它维度相比，在一个或几个维度上（如：个人愿景或人际交往能力）你的得分较低。
                                灰色地带代表较低至中等的恢复力等级。</p>
                            <p>&nbsp;&nbsp;为了保持或加强你的恢复力，你应该集中于扩大轮子的大小，同时，重点关注得分较低的韧商维度——从而获得平衡。
                                如果有一项韧商维度相较于其他维度得分特别高，那么你可以考虑在此基础上努力发展加强其它维度。</p>
                        </section>
                    </section>
                </Article>
            </div>
        )
    }
}

export default class Leader extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        let questions = this.props.location.query;

        let scores = [0,0,0,0,0,0,0,0];
        questions.map((qu,idx)=>{
            let index = qu.index;
            let yu = index % 8 - 1;
            scores[yu] += qu.answer;

            if(yu<0){
                scores[7] += qu.answer;
            }

        })


        let radar = echarts.init(document.getElementById('evaluation_resolve_radar_map'));

        let option = {
            title: {
                text: '我的韧商图谱'
            },
            radar: [
                {

                },
                {
                    indicator: [
                        { text: '个人自信', max: 24 },
                        { text: '个人愿景', max: 24 },
                        { text: '灵活与适应', max: 24 },
                        { text: '系统性', max: 24 },
                        { text: '问题解决', max: 24 },
                        { text: '人际交往', max: 24 },
                        { text: '社交圈子', max: 24 },
                        { text: '主动与承责', max: 24 }
                    ],
                    name: {
                        formatter:'{value}',
                        textStyle: {
                            color:'#72ACD1'
                        }
                    },
                    center: ['50%', '50%'],
                    radius: 100
                }
            ],
            series: [
                {
                    name: '韧商',
                    type: 'radar',
                    radarIndex: 1,
                    data: [
                        {
                            value: scores,
                            name: '张三',
                            label: {
                                normal: {
                                    show: true,
                                    formatter:function(params) {
                                        return params.value;
                                    }
                                }
                            }
                        }
                    ]
                }
            ]
        }

        radar.setOption(option);
        
    }

    render(){
        return(
            <div>
                <div style={{
                    width:'100%',display:'flex',justifyContent:'center',alignItems:'center'
                }}>
                    <div style={{
                        width:'94%',height:'350px',backgroundColor:'orange'
                    }} id="evaluation_resolve_radar_map"/>
                </div>
                <Content/>
            </div>
        )
    }
}