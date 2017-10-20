/**
 * Created by jiangsong on 2017/10/17.
 */
import React from 'react';
import {Button,CellsTitle,Form,FormCell,CellHeader,CellBody,
    Input,Label,CellFooter,Radio,Checkbox,Select,Icon
} from 'react-weui';
import Tool from '../../Tool/Tool';

// 1 男  2 女
class Gender extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selected:0
        }
    }
    static propTypes = {
        callback:React.PropTypes.func
    }
    choose(pe){
        if(pe === 'man'){
            this.setState({
                selected:1
            })
            this.props.callback(1);
        }
        if(pe === 'woman'){
            this.setState({
                selected:2
            })
            this.props.callback(2);
        }
    }
    render(){
        return(
            <div>
                <div style={{
                    display:'flex',width:'100%',height:'100%',flexDirection:'row',alignItems:'center'
                }}>
                    <div style={{width:'30%',display:'flex',height:'100%',flexDirection:'row',
                        alignItems:'center'
                    }} onClick={this.choose.bind(this,'man')}>
                        {
                            this.state.selected === 1 ? <Icon value="success" /> : <Icon value="circle" />
                        }
                        <span>男</span>
                    </div>
                    <div style={{width:'30%',display:'flex',height:'100%',flexDirection:'row',
                        alignItems:'center'
                    }} onClick={this.choose.bind(this,'woman')}>
                        {
                            this.state.selected === 2 ? <Icon value="success" /> : <Icon value="circle" />
                        }
                        <span>女</span>
                    </div>
                </div>
            </div>
        )
    }
}

const Ages = [
    {
        value: 1,
        label: '15岁以下'
    },
    {
        value: 2,
        label: '15-20'
    },
    {
        value: 3,
        label: '20-25'
    },
    {
        value: 4,
        label: '25-30'
    },
    {
        value: 5,
        label: '30-35'
    },
    {
        value: 6,
        label: '35-40'
    },
    {
        value: 7,
        label: '40-45'
    },
    {
        value: 8,
        label: '45以上'
    }
];
const Funs = [
    {
        value: 1,
        label: '董事长'
    },
    {
        value: 2,
        label: 'CEO总裁'
    },
    {
        value: 3,
        label: '部门总监'
    },
    {
        value: 4,
        label: '部门经理'
    },
    {
        value: 5,
        label: '团队负责人'
    },
    {
        value: 6,
        label: '基本员工'
    },
    {
        value: 7,
        label: '其他'
    }
];
const Industrys = [
    {
        value: 1,
        label: 'IT|通信|电子|互联网'
    },
    {
        value: 2,
        label: '金融业'
    },
    {
        value: 3,
        label: '房地产|建筑业'
    },
    {
        value: 4,
        label: '商业服务'
    },
    {
        value: 5,
        label: '贸易|批发|零售|租赁业'
    },
    {
        value: 6,
        label: '文体教育|工艺美术'
    },
    {
        value: 7,
        label: '生产|加工|制造'
    },
    {
        value: 8,
        label: '交通|运输|物流|仓储'
    },
    {
        value:9,
        label:'服务业'
    },
    {
        value:10,
        label:'文化|传媒|娱乐|体育'
    },
    {
        value:11,
        label:'能源|矿产|环保'
    },
    {
        value:12,
        label:'政府|非盈利机构'
    },
    {
        value:13,
        label:'农|林|牧|渔|其他'
    }
];
const Places = [
    {
        value: 1,
        label: '北京市'
    },
    {
        value: 2,
        label: '天津市'
    },
    {
        value: 3,
        label: '上海市'
    },
    {
        value: 4,
        label: '重庆市'
    },
    {
        value: 5,
        label: '河北省'
    },
    {
        value: 6,
        label: '山西省'
    },
    {
        value: 7,
        label: '山东省'
    },
    {
        value: 8,
        label: '陕西省'
    },
    {
        value: 9,
        label: '河南省'
    },
    {
        value:10,
        label:'辽宁省'
    },
    {
        value:11,
        label:'吉林省'
    },
    {
        value:12,
        label:'黑龙江省'
    },
    {
        value:13,
        label:'江苏省'
    },
    {
        value:14,
        label:'浙江省'
    },
    {
        value:15,
        label:'安徽省'
    },
    {
        value:16,
        label:'江西省'
    },
    {
        value:17,
        label:'福建省'
    },
    {
        value:18,
        label:'湖北省'
    },
    {
        value:19,
        label:'湖南省'
    },
    {
        value:20,
        label:'四川省'
    },
    {
        value:21,
        label:'贵州省'
    },
    {
        value:22,
        label:'云南省'
    },
    {
        value:23,
        label:'广东省'
    },
    {
        value:24,
        label:'海南省'
    },
    {
        value:25,
        label:'甘肃省'
    },
    {
        value:26,
        label:'青海省'
    },
    {
        value:27,
        label:'台湾省'
    },
    {
        value:28,
        label:'内蒙古'
    },
    {
        value:29,
        label:'新疆'
    },
    {
        value:30,
        label:'西藏'
    },
    {
        value:31,
        label:'广西'
    },
    {
        value:32,
        label:'宁夏'
    },
    {
        value:33,
        label:'香港'
    },
    {
        value:34,
        label:'澳门'
    },
    {
        value:35,
        label:'国外'
    }
]
const Positions = [
    {
        value: 1,
        label: '高级管理者'
    },
    {
        value: 2,
        label: '中层管理者'
    },
    {
        value: 3,
        label: '基层管理者'
    },
    {
        value: 4,
        label: '非管理职务'
    },
    {
        value: 5,
        label: '其他'
    }
];

class UserInfo extends React.Component{
    constructor(props){
        super(props);
        this.gender = 0;
        this.name = '';
        this.age = 1;
        this.phone = '';
        this.fun = 1;
        this.industry = 1;
        this.workPlace = 1;
        this.birthPlace = 1;
        this.position = 1;
    }
    static propTypes = {
        callback:React.PropTypes.func,
        btnState:React.PropTypes.bool
    }

    chooseGeder(ge){
        this.gender = ge;
    }
    input(flag,e){
        if(flag === 'name'){
            this.name = e.target.value;
        }
        if(flag === 'phone'){
            this.phone = e.target.value;
        }
        if(flag === 'age'){
            this.age = e.target.value;
        }
        if(flag === 'function'){
            this.fun = e.target.value;
        }
        if(flag === 'industry'){
            this.industry = e.target.value;
        }
        if(flag === 'workPlace'){
            this.workPlace = e.target.value;
        }
        if(flag === 'birthPlace'){
            this.birthPlace = e.target.value;
        }
        if(flag === 'position'){
            this.position = e.target.value;
        }
    }
    commit(){
        if(!this.gender){
            alert('请选择您的性别！');
            return;
        }
        if(!Tool.isPhone(this.phone)){
            alert('请输入正确的手机号！');
            return;
        }
        let info = {};
        info.name = this.name;
        info.gender = this.gender === 1 ? '男' : '女';
        info.age = Ages[this.age-1].label;
        info.phone = this.phone;
        info.fun = Funs[this.fun-1].label;
        info.industry = Industrys[this.industry-1].label;
        info.workPlace = Places[this.workPlace-1].label;
        info.birthPlace = Places[this.birthPlace-1].label;
        info.position = Places[this.position-1].label;

        this.props.callback(info);
    }
    render(){
        return(
            <div>
                <Form>
                    {/**姓名*/}
                    <FormCell>
                        <CellHeader>
                            <Label>姓名：</Label>
                        </CellHeader>
                        <CellBody>
                            <Input onChange={this.input.bind(this,'name')} type="text"
                                   placeholder="请输入您的姓名"/>
                        </CellBody>
                    </FormCell>

                    {/**姓别*/}
                    <FormCell>
                        <CellHeader>
                            <Label>姓别：</Label>
                        </CellHeader>
                        <CellBody>
                            <Gender callback={this.chooseGeder.bind(this)}/>
                        </CellBody>
                    </FormCell>

                    {/**年龄*/}
                    <FormCell select selectPos="after">
                        <CellHeader>
                            <Label>年龄</Label>
                        </CellHeader>
                        <CellBody>
                            <Select onChange={this.input.bind(this,'age')} data={Ages} />
                        </CellBody>
                    </FormCell>

                    {/**手机号*/}
                    <FormCell>
                        <CellHeader>
                            <Label>手机号：</Label>
                        </CellHeader>
                        <CellBody>
                            <Input onChange={this.input.bind(this,'phone')} type="tel"
                                   placeholder="请输入您的手机号"/>
                        </CellBody>
                    </FormCell>
                    {/**职能*/}
                    <FormCell select selectPos="after">
                        <CellHeader>
                            <Label>职能</Label>
                        </CellHeader>
                        <CellBody>
                            <Select onChange={this.input.bind(this,'function')} data={Funs} />
                        </CellBody>
                    </FormCell>
                    {/**所属行业*/}
                    <FormCell select selectPos="after">
                        <CellHeader>
                            <Label>所属行业</Label>
                        </CellHeader>
                        <CellBody>
                            <Select onChange={this.input.bind(this,'industry')} data={Industrys} />
                        </CellBody>
                    </FormCell>
                    {/**工作所在地*/}
                    <FormCell select selectPos="after">
                        <CellHeader>
                            <Label>工作所在地</Label>
                        </CellHeader>
                        <CellBody>
                            <Select onChange={this.input.bind(this,'workPlace')} data={Places} />
                        </CellBody>
                    </FormCell>
                    {/**户籍地址*/}
                    <FormCell select selectPos="after">
                        <CellHeader>
                            <Label>户籍地址</Label>
                        </CellHeader>
                        <CellBody>
                            <Select onChange={this.input.bind(this,'birthPlace')} data={Places} />
                        </CellBody>
                    </FormCell>
                    {/**管理层次*/}
                    <FormCell select selectPos="after">
                        <CellHeader>
                            <Label>所属行业</Label>
                        </CellHeader>
                        <CellBody>
                            <Select onChange={this.input.bind(this,'position')} data={Positions} />
                        </CellBody>
                    </FormCell>

                </Form>
                <div style={{marginTop:'30px'}}>
                    {
                        !this.props.btnState ?
                            <Button onClick={this.commit.bind(this)}>提交</Button>
                            :
                            <Button disabled>正在提交...</Button>
                    }
                </div>
            </div>
        )
    }
}

export default class Commit extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isLoading:false
        }
        this.questions = null;
    }

    componentDidMount(){
        this.questions = this.props.location.query;
    }

    getUserInfo(user){
        if(this.state.isLoading){
            return;
        }
        this.setState({
            isLoading:true
        })
        let body = {
            userid:user.name+user.phone, name:user.name, gender:user.gender, age:user.age, phone:user.phone,
            fun:user.fun, industry:user.industry, workplace:user.workPlace, birthplace:user.birthPlace,
            position:user.position, ques1:this.questions[0].answer, ques2:this.questions[1].answer,
            ques3:this.questions[2].answer, ques4:this.questions[3].answer, ques5:this.questions[4].answer,
            ques6:this.questions[5].answer, ques7:this.questions[6].answer, ques8:this.questions[7].answer,
            ques9:this.questions[8].answer, ques10:this.questions[9].answer, ques11:this.questions[10].answer,
            ques12:this.questions[11].answer, ques13:this.questions[12].answer, ques14:this.questions[13].answer,
            ques15:this.questions[14].answer, ques16:this.questions[15].answer, ques17:this.questions[16].answer,
            ques18:this.questions[17].answer, ques19:this.questions[18].answer, ques20:this.questions[19].answer,
            ques21:this.questions[20].answer, ques22:this.questions[21].answer, ques23:this.questions[22].answer,
            ques24:this.questions[23].answer, ques25:this.questions[24].answer, ques26:this.questions[25].answer,
            ques27:this.questions[26].answer, ques28:this.questions[27].answer, ques29:this.questions[28].answer,
            ques30:this.questions[29].answer, ques31:this.questions[30].answer, ques32:this.questions[31].answer
        }
        Tool.post('/commit',body,()=>{
            this.setState({
                isLoading:false
            })
            this.goNext();
        },()=>{
            this.setState({
                isLoading:false
            })
            alert('数据错误！');
        })
    }

    goNext(){
        this.props.history.push({pathname:'/resolve',query:this.questions});
    }

    render(){
        return(
            <div style={{padding:'10px'}}>
                <div style={{
                    marginBottom:'30px'
                }}>
                    <div style={{
                        display:'flex',flexDirection:'column'
                    }}>
                        <p>提示：</p>
                        <p>请填写您的基本信息，该信息将作为测评分析的依据，请认真填写</p>
                    </div>
                    <UserInfo callback={this.getUserInfo.bind(this)} btnState={this.state.isLoading}/>
                </div>
            </div>
        )
    }
}