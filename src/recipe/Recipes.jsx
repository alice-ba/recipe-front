import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Recipe from './Recipe';

export default class Recipes extends Component {
    constructor (){
        super();
        this.state = {
            recipes: [],
        };
    }


componentDidMount(){
    fetch('http://localhost:8080/recipes')
    .then(results => {
        return results.json();
        
    }).then (data => {
        let recipes = data.map((recipe,index) =>{
            return(
                <Link key = {index} to={"/recipes/"  + recipe.id}>
                    <p>{recipe.name}</p>
                </Link>
            )
        })
        this.setState({recipes});
    })
}

render(){
    return ( 
        <div>
             {this.state.recipes}
            <Route path="/recipes/:id" component={Recipe} /> 
        </div>
        
    );
    
}


}