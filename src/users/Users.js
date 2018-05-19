import React, {Component} from 'react';
import User from './User';

class Users extends Component{
    
    state = {
        users:[
        {name:"Mazedur Mir", age:80},
        {name:"Jamila Mir", age:75},
        {name:"Salim Mir", age:55},
        {name:"Sazeda Mir", age:45},
        {name:"Enitha Mir", age:25},
        {name:"Aayan Mir", age:15},
        {name:"Areebah Mir", age:10},
        
        ],
        title:"Mir Family Members"
        };

        makeThemOlder = () =>{
        const newState = this.state.users.map((user)=>{
        const tempUser = user;
            tempUser.age +=5;
            return tempUser;
            
        });
        this.setState({
            newState
        });
    }
   render(){
       return( <div>
              <button onClick={this.makeThemOlder}>Make All Mirs 5-Year Older </button>
              <br />
           <h1>{this.state.title}</h1>
        <User age={this.state.users[0].age}>{this.state.users[0].name}</User>
        <User age={this.state.users[1].age}>{this.state.users[1].name}</User>
        <User age={this.state.users[2].age}>{this.state.users[2].name}</User>
        <User age={this.state.users[3].age}>{this.state.users[3].name}</User>
        <User age={this.state.users[4].age}>{this.state.users[4].name}</User>
        <User age={this.state.users[5].age}>{this.state.users[5].name}</User>
        <User age={this.state.users[6].age}>{this.state.users[6].name}</User>

        </div>  
           
       )
   } 
  
}

export default Users;