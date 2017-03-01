/**
 * Created by habibun on 2/24/17.
 */

import React from 'react';

class IngredientList extends React.Component {
    render(){
        return(
            <div>
                <p className="ingredientHeading">Ingredients</p>
                <ul className="ingredientList">
                    { this.props.ingredients.map( item => <li>{item}</li> ) }
                </ul>
            </div>
        )
    }
}

export default IngredientList;