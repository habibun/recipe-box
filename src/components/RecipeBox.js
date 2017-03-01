/**
 * Created by habibun on 2/21/17.
 */

import React, {Component} from 'react';

import AddRecipe from './AddRecipe';

class RecipeBox extends Component {
    render() {
        return (
            <div className="panel panel-default top-margin">
                <div className="panel-heading">
                    <h3 className="panel-title">Recipe Box</h3>
                </div>
                <div className="panel-body">
                    {this.props.recipeList}
                </div>
                <div className="panel-footer">
                    <AddRecipe/>
                </div>
            </div>
        );
    }
}

export default RecipeBox;
