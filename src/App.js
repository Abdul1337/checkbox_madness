import React from 'react';
import './App.css';
import { 
Switch,
Row, 
Col
} from "antd";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        optionsList: [
          {
            name : "Row 1",
            options : [{value: "Create",checked: false,},{value: "Update",checked: false,},{value: "Delete",checked: false,},{value: "View",checked: false,}],
          },
          {
            name : "Row 2",
            options : [{value: "Create",checked: false,},{value: "Update",checked: false,},{value: "Delete",checked: false,},{value: "View",checked: false,}],
          },
          {
            name : "Row 3",
            options : [{value: "Create",checked: false,},{value: "Update",checked: false,},{value: "Delete",checked: false,},{value: "View",checked: false,}]
          },
        ]
    };
}

handleChange = (checked,optionRow,value) =>{
  let optionsList = this.state.optionsList
  if(value === 'select_all'){
    this.setState({isAllSelected : checked})

    optionsList = this.state.optionsList.map((o,i)=>{
      let opt = o
      opt.options[0].checked = checked
      opt.options[1].checked = checked
      opt.options[2].checked = checked
      opt.options[3].checked = checked
      return opt
    });
  }else{
    optionsList = this.state.optionsList.map((o,i)=>{
      let opt  = o;
  
      if(!checked){
        if(optionRow === opt.name){
          if(value === 'Create'){
            opt.options[0].checked = false
          }else if(value === 'Update'){
            opt.options[1].checked = false
          }else if(value === 'Delete'){
            opt.options[2].checked = false
          }else if(value === 'View'){
            opt.options[3].checked = false
          }
        }
      }else{
      if(optionRow === opt.name){
        if(value === 'Create'){
          opt.options[0].checked = true
          opt.options[3].checked = true
        }else if(value === 'Update'){
          opt.options[0].checked = true
          opt.options[1].checked = true
          opt.options[3].checked = true
        }else if(value === 'Delete'){
          opt.options[0].checked = true
          opt.options[1].checked = true
          opt.options[2].checked = true
          opt.options[3].checked = true
        }else if(value === 'View'){
          opt.options[3].checked = true
        }
      }
    }
      return opt
    })
  }



  this.setState({optionsList : optionsList})
}

  render() {

    return(
      <div className="Container">
       <div className="option select_all">
        <p className="option_name" >Select All</p>
        <Switch type="checkbox" size="small"  onChange={(e)=>this.handleChange(e,null,'select_all')} />
      </div>
      <div className="options" >
        {
          this.state.optionsList.map((option,index)=>{
            return (
              <OptionsRow name={option.name} options={option.options} key={index} handler={this.handleChange} key={index}/>
            )
          })
        }
      </div>

    </div>
    )
  
  };
}


function OptionsRow(props) {

  return(
    <div className="options_row">
      <p className="title">{props.name}</p>
      <Row>
      {
        props.options.map((option,key)=>(
          <Col span={6} order={4}>
            <div className="option" key={key}>
              <p className="option_name" >{option.value}</p>
              <Switch type="checkbox" size="small" checked={option.checked} onChange={(e)=>props.handler(e,props.name,option.value)} />
            </div>
          </Col>
        ))
      }
      </Row>
    </div>
   
  )
}


export default App;
