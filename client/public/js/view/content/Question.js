/**
 * Created by jiangsong on 2017/10/17.
 */
import React from 'react';
import {Icon,Button,ButtonArea} from 'react-weui';
import CONFIG from '../../const/BackConfig';

const Questions = [
    {
        index:1,
        question:'我认为自己具备处理所有事情所必须的知识、技能和素质。',
        answer:0
    },
    {
        index:2,
        question:'我知道生活中什么对我是重要的。',
        answer:0
    },
    {
        index:3,
        question:'我以开放的心态应对新的情况, 并专注于需要做什么。',
        answer:0
    },
    {
        index:4,
        question:'面对重大变化的时候，我通常能找到方法来建立自己能掌握的，且对自己有利的系统或架构。',
        answer:0
    },
    {
        index:5,
        question:'当我遇到问题或需要决策时，我通常会花一些时间来清晰地定义这个问题或决策。',
        answer:0
    },
    {
        index:6,
        question:'在工作和社交中，我总能适时地调侃自己。',
        answer:0
    },
    {
        index:7,
        question:'我的好友圈中有各式各样的人。',
        answer:0
    },
    {
        index:8,
        question:'我认为即使是困难的、最有挑战性的变革，也是能够让我学习和成长的机会。',
        answer:0
    },
    {
        index:9,
        question:'当面对挑战或压力时，我总是“正面”地对待，并对自己和自身的能力进行积极的自我对话。 ',
        answer:0
    },
    {
        index:10,
        question:'当回首生活往事，我发现所做过的选择和决策有一个清晰的模式。',
        answer:0
    },
    {
        index:11,
        question:'当我的处境和期望发生变化时，我愿意并能够对我的目标和计划进行调整。',
        answer:0
    },
    {
        index:12,
        question:'每天开始工作前，我会思考今天我需要完成什么；每天结束工作时，我会思考明天要完成的事。',
        answer:0
    },
    {
        index:13,
        question:'我将生活和工作中遇到的问题视为我能解决的挑战。',
        answer:0
    },
    {
        index:14,
        question:'我非常容易理解别人的挫折、创伤、不幸、快乐和成功。',
        answer:0
    },
    {
        index:15,
        question:'我总能建立长久的友谊。',
        answer:0
    },
    {
        index:16,
        question:'当发生令人不快的变化时，我总能找到方法来影响变化过程，或使变化为我所用。',
        answer:0
    },
    {
        index:17,
        question:'当面临艰难挑战时，我能够对我的能力保持自信，帮助我去克服挑战。',
        answer:0
    },
    {
        index:18,
        question:'我对自己追求的工作和生活有很好的实施规划。',
        answer:0
    },
    {
        index:19,
        question:'我发现当发生变化或产生冲突时，在大多数情况下，我找到一种方法既满足自己的需求又能满足其他人的需求。',
        answer:0
    },
    {
        index:20,
        question:'我通常会制定一些任务清单来确定我接下来需要做的事。',
        answer:0
    },
    {
        index:21,
        question:'在解决一个问题之前，我通常会先探究问题的原因。',
        answer:0
    },
    {
        index:22,
        question:'在有压力和冲突的情况下，我通常能够与他人保持良好的关系。',
        answer:0
    },
    {
        index:23,
        question:'通常当我感到受挫、迷惑、气愤或不确定时，我会求助于我的朋友圈；当我想分享大新闻的时候也是如此。',
        answer:0
    },
    {
        index:24,
        question:'我不会将精力集中在别人可以为我做些什么上，而是集中于我怎样能让环境最为有利。',
        answer:0
    },
    {
        index:25,
        question:'当面对极大的挑战时，我会从自身寻找关于做什么以及如何应付的答案。',
        answer:0
    },
    {
        index:26,
        question:'我知道要达成个人和职业目标需要做哪些事情。',
        answer:0
    },
    {
        index:27,
        question:'我通常能够满足他人需要（调整我的行为），同时还不影响自我目标的实现。',
        answer:0
    },
    {
        index:28,
        question:'当我对所需做的事情和选择产生困惑时，我通常会尝试写出思路。',
        answer:0
    },
    {
        index:29,
        question:'在解决问题或做决策时，我尝试找出所要解决的问题或要做的决策，与相关问题和挑战之间的关系。',
        answer:0
    },
    {
        index:30,
        question:'我很重视在工作和日常社交中人们带来的各种理念、思路和方法。',
        answer:0
    },
    {
        index:31,
        question:'我定期与朋友参加与工作无关的集体活动（如：做礼拜、体育运动、文化活动等等），通过这些我能学习、成长并获得乐趣。',
        answer:0
    },
    {
        index:32,
        question:'我认为在变革中自己的决策和行动将会使变革对自己产生不同的影响。',
        answer:0
    },
]

class TableCell extends React.Component{
    constructor(props){
        super(props);
    }
    static propTypes = {
        data:React.PropTypes.object,
        callback:React.PropTypes.func
    }
    chooseScore(score){
        const {data,callback} = this.props;
        let qidx = data.index;
        Questions[qidx-1].answer = score;
        callback();
    }
    render(){
        const {data} = this.props;
        return(
            <div style={{
                paddingTop:'10px',paddingBottom:'10px',borderRadius:'3px',borderColor:CONFIG.bgColorGrayMiddle,
                borderWidth:'1px',borderStyle:'solid',marginTop:'10px',marginBottom:'10px',paddingLeft:'5px',
                paddingRight:'5px'
            }}>
                <div>
                    <p style={{
                        fontSize:'18px'
                    }}>{`${data.index}:${data.question}`}</p>
                </div>
                <div style={{
                    display:'flex',flexDirection:'row',marginTop:'5px'
                }}>
                    {
                        [1,2,3,4,5,6].map((num,idx)=>{
                            return (
                                <div key={idx} style={{
                                    display:'flex',flexDirection:'row',width:'15%',alignItems:'center'
                                }} onClick={this.chooseScore.bind(this,num)}>
                                    <span>
                                        {
                                            data.answer === num ?
                                                <Icon value="success"/>
                                                :
                                                <Icon value="circle"/>
                                        }
                                    </span>
                                    <span style={{
                                        fontSize:'18px'
                                    }}>{num}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

class Table extends React.Component{
    constructor(props){
        super(props);
    }
    static propTypes = {
        dataSource:React.PropTypes.array,
        callback:React.PropTypes.func
    }
    render(){
        return(
            <div>
                {
                    this.props.dataSource.map((data,index)=>{
                        return(
                            <TableCell key={index} data={data} callback={this.props.callback}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default class Question extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            nowIdx:0,   // 0   8   16   24
            questions:Questions
        }
    }

    nextOrPre(pn){
        const {nowIdx} = this.state;
        let nowQuestions = Questions.slice(nowIdx,nowIdx+8);
        let flag = true;
        for(let i=0; i<nowQuestions.length; i++){
            if(nowQuestions[i].answer === 0){
                flag = false;
                break;
            }
        }
        if(!flag){
            alert('请做完所有的题目再翻页或提交！谢谢');
            return;
        }

        if(pn === 'end'){
            this.props.history.push({pathname:'/commit',query:Questions});
            return;
        }

        if(pn === 'pre'){
            this.setState({
                nowIdx:this.state.nowIdx-8
            })
        }
        if(pn === 'next'){
            this.setState({
                nowIdx:this.state.nowIdx+8
            })
        }
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    callback(){
        this.setState({
            questions:Questions
        })
    }

    componentDidUpdate(){

    }

    render(){
        // console.log('Questions:',Questions);
        const {nowIdx,questions} = this.state;
        let nowQu = questions.slice(nowIdx,nowIdx+8);
        return(
            <div style={{
                padding:CONFIG.containerPadding
            }}>
                <Table style={{marginBottom:'20px'}}
                       callback={this.callback.bind(this)}
                       dataSource={nowQu}/>
                <ButtonArea direction="horizontal">
                    {
                        nowIdx === 0 ?
                            <Button disabled>上一页</Button>
                            :
                            <Button onClick={this.nextOrPre.bind(this,'pre')}>上一页</Button>
                    }
                    {
                        nowIdx === 24 ?
                            <Button onClick={this.nextOrPre.bind(this,'end')}>提交</Button>
                            :
                            <Button onClick={this.nextOrPre.bind(this,'next')}>下一页</Button>
                    }
                </ButtonArea>
            </div>
        )
    }
}