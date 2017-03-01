/**
 * Created by habibun on 2/22/17.
 */

import React, {Component} from 'react';
import DefaultRecipe from '../data/DefaultRecipe';
import {Accordion} from 'react-bootstrap';
import {Panel} from 'react-bootstrap';
import {ListGroup} from 'react-bootstrap';
import {ListGroupItem} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {ButtonToolbar} from 'react-bootstrap';
import AddRecipe from './AddRecipe';
import EditRecipe from './EditRecipe';

export var recipes = (typeof localStorage["recipeBox"] !== "undefined") ? JSON.parse(localStorage["recipeBox"]) : DefaultRecipe;

class RecipeList extends Component {
    constructor() {
        super();
        this.deleteRecipe = this.deleteRecipe.bind(this);
    }

    deleteRecipe(event) {
        recipes.splice(event.target.id, 1);
        AddRecipe.update();
        event.target.parentElement.parentElement.parentElement.className="panel-collapse collapse";
    }

    render() {
        const listItems = recipes.map((recipe, index) =>
            <Panel header={recipe.title} eventKey={index} key={index}>
                <h4 className="text-center">Ingredients</h4>
                {
                    recipe.ingredients.map((ingredient, index2) =>
                        <ListGroup key={index2}>
                            <ListGroupItem>{ingredient}</ListGroupItem>
                        </ListGroup>
                    )
                }
                <ButtonToolbar>
                    <Button bsStyle="danger" id={index} onClick={this.deleteRecipe}>Delete</Button>
                    <EditRecipe indexId={index}/>
                </ButtonToolbar>
            </Panel>
        );

        return <Accordion> {listItems} </Accordion>;
    }
}

export default RecipeList;