/**
 * Created by habibun on 2/27/17.
 */

import React, {Component} from 'react';
import {Modal} from  'react-bootstrap';
import {Button} from  'react-bootstrap';
import {FormGroup} from  'react-bootstrap';
import {ControlLabel} from  'react-bootstrap';
import {FormControl} from  'react-bootstrap';
import {ButtonToolbar} from 'react-bootstrap';
import {recipes} from './RecipeList';
import AddRecipe from './AddRecipe';

class EditRecipe extends Component {
    constructor() {
        super();

        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.save = this.save.bind(this);

        this.state = {
            showModal: false,
            editClick: 0
        };
    }

    close() {
        this.setState({
            showModal: false,
            editClick: 0
        });
    }

    open() {
        this.setState({showModal: true, editClick: 1});
    }

    save() {
        let recipe = recipes[this.props.indexId];
        let formRecipe = document.getElementById('recipe').value;
        let formIngredient = document.getElementById('ingredients').value;
        let formIngredients = formIngredient.split(",");

        recipe.title = formRecipe;
        recipe.ingredients = formIngredients ;
        AddRecipe.update();
        this.close();
    }

    componentDidUpdate() {
        if (this.state.editClick === 1) {
            let recipe = recipes[this.props.indexId];
            document.getElementById('recipe').value = recipe.title;
            document.getElementById('ingredients').value = recipe.ingredients;
        }
    }

    render() {
        return (
            <div>
                <ButtonToolbar>
                    <Button bsStyle="info" onClick={this.open}>
                        Edit
                    </Button>
                </ButtonToolbar>

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit a Recipe</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <FormGroup>
                                <ControlLabel>Recipe</ControlLabel>
                                <FormControl id="recipe" type="text" placeholder="Recipe Name"/>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Ingredients</ControlLabel>
                                <FormControl id="ingredients" type="textarea"
                                             placeholder="Enter Ingredients,Separated,By Commas"/>
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

export default EditRecipe;