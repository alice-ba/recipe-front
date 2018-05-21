import React, { PureComponent } from 'react';

export default class Recipe extends PureComponent {
    constructor (){
        super();
        this.state = {
            recipes: [],
        }
    };


componentDidMount(){
    fetch('http://localhost:8080/recipes')
    .then(results => {
        return results.json();
    }).then (data => {
        let recipes = data.results.map((recipe,index) =>{
            return(
                <div key = {index}>
                <p>{recipe.name}</p>
                
                </div>
            )
        })
        this.setState({recipes});
        console.log(recipes);
    })
}
render(){
    return (
<div> {this.state.recipes}</div>
    )
    
}



}