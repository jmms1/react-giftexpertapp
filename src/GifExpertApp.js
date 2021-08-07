import React, { Fragment, useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Game of Thrones'];

    const [categories, setCategories] = useState(['Game of Thrones']);

    // const handleAdd = (  ) => {
    //     // setCategories( ...categories, 'HunterXHunter' );
    //     setCategories( cats => [ ...cats, ] );

    // }

    return(
    <Fragment>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories }/>
        <hr />



        <ol>
            {
             categories.map( category =>
                 <GifGrid
                 key= {category}
                 category = {category}/>
             )}
        </ol>

    </Fragment>

    )
}


export default GifExpertApp;