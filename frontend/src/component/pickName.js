import React,{Component} from 'react'
import axios from  'axios'


class PickNames extends Component {
 constructor(props) {
  super(props);
  this.state = {
   csActiveUsers: []
  }
 }


onSelection(e){
 this.props.getSingleUserInfo(e.currentTarget.value)
}

 mapActiveCSList (a) {

  if (a) {
   let elMap = a.map((el, i) =>
   <li key =  {i}>
    <button value = {el.id} onClick = {(e)=>{this.onSelection(e)}} key = {i} > {el.first_name}, {el.middle_name} {el.last_name} </button>
    </li>
   )

   return (
    <ul>
     {elMap}
    </ul>
   )
  }
 }

 getActiveCS () {
  axios.get('/users/all').then((res)=>{
   this.setState({
    csActiveUsers : res.data.users
   })
  }).then(()=>{

    })
 }

 componentDidMount (){
   this.getActiveCS()
 }


 render (){
  return(
   <>
   <h1> Pick Community Services  </h1>
   {this.mapActiveCSList(this.state.csActiveUsers)}
   <button onClick = {() => {this.props.setNewPerson()}}> NEW PERSON </button>
   </>

  )
 }
}


export default PickNames