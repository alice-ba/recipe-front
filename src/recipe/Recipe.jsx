import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Recipe extends Component {
    constructor (props){
        super(props);
        this.state = {
            recipe: null,
        };
        console.log(props.location.pathname);
    }

    componentDidMount(){
        fetch(`http://localhost:8080${this.props.location.pathname}`)
        .then(result => {
            return result.json();
            
        }).then (data => {
            this.setState({recipe:data});
        })
    }

render(){
    return (
        <div>
            { this.state.recipe === null ? (
                <p>Chargement en cours ...</p>
            ) : ( 
                <div>
                    <p>nom : {this.state.recipe.name}</p>
                    <p>Repas : {this.state.recipe.course.name}</p>
                    <p>temps de préparation : {this.state.recipe.prepTime}</p>
                    <p>temps de cuisson : {this.state.recipe.cookTime}</p>
                    <p>nombre de couverts : {this.state.recipe.serving}</p>
                    <p>lien source : {this.state.recipe.url}</p>
                    <p>note : {this.state.recipe.rating}</p>
                    <p>description : {this.state.recipe.description}</p>
                    <div>
                        <p>ingredients :</p>
                        {this.state.recipe.elements.map(function(element,index) {
                            return <div key = {index} >
                                    <p>{element.ingredient.name} : {element.number} {element.unitOfMeasure.uom}</p>
                                 </div>
                        })}
                    </div>
                    <div>
                        <p>préparation :</p>
                        {this.state.recipe.steps.map(function(element, index) {
                            return <div key = {index}>
                                    <p>{element.number} : {element.description}</p>
                                 </div>
                        })}
                    </div>
                    <div>
                        <p>catégories :</p>
                        {this.state.recipe.categories.map(function(element, index) {
                            return <div key = {index}>
                                    <p>{element.name}</p>
                                </div>
                        })}
                    </div>
                </div>
                )
    
            }
        </div>
    )
}
}