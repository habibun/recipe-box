/**
 * Created by habibun on 2/27/17.
 */

import React, {Component} from 'react';
import  ReactDOM from 'react-dom';
import {Modal} from  'react-bootstrap';
import {Button} from  'react-bootstrap';
import {FormGroup} from  'react-bootstrap';
import {ControlLabel} from  'react-bootstrap';
import {FormControl} from  'react-bootstrap';
import RecipeBoxContainer from '../containers/RecipeBoxContainer';
import {recipes} from './RecipeList';

// localStorage.removeItem("recipeBox");

class AddRecipe extends Component{
    constructor(){
        super();
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.save = this.save.bind(this);
        this.state = {
            showModal: false,
        };
    }

    close() {
        this.setState({showModal: false});
    }

    open() {
        this.setState({showModal: true});
    }

    save(){
        let title = document.getElementById('title').value;
        let ingredient = document.getElementById('ingredients').value;
        let ingredients = ingredient.split(",");

        recipes.splice(0, 0, {title: title, ingredients: ingredients });
        this.close();
        this.constructor.update();
    }

    static update(){
        localStorage.setItem("recipeBox", JSON.stringify(recipes));
        ReactDOM.render(<RecipeBoxContainer/>, document.getElementById('root'));
    }

    render(){
        return(
            <div>
                <Button bsStyle="primary" bsSize="large" onClick={this.open}>
                    Add Recipe
                </Button>

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add a Recipe</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <FormGroup>
                                <ControlLabel>Recipe</ControlLabel>
                                <FormControl id="title" type="text" placeholder="Recipe Name" />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Ingredients</ControlLabel>
                                <FormControl id="ingredients" type="text" placeholder="Enter Ingredients,Separated,By Commas" />
                            </FormGroup>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.save}>Save</Button>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default AddRecipe;