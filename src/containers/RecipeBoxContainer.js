/**
 * Created by habibun on 2/21/17.
 */

import React, {Component} from 'react';
import RecipeBox from '../components/RecipeBox';
import RecipeList from '../components/RecipeList';

class RecipeBoxContainer extends Component {
    render() {
        return <RecipeBox recipeList={<RecipeList/>} />;
    }
}

export default RecipeBoxContainer;