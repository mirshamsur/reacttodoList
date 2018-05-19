import React, {Component} from 'react';

const User = (props)=>{
  return (<div> {props.children} | Age:{props.age}</div>)
      }
    export default User;