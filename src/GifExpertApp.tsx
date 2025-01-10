import {useState} from 'react';
import {AddCategory, GifGrid} from './components';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch' ]);

    console.log(categories);

    const onAddCategory = ( newCategory: any ) => {
        //Valorant
        // categories.push('Valorant');
        if( categories.includes(newCategory) ) return;

        setCategories( [ newCategory, ...categories ] );
        // setCategories( cat => [...cat, 'Valorant'] );
    }

    return (
        <>
            {/*titulo*/}

            <h1>GifExpertApp</h1>

            {/*input*/}

            {/*<AddCategory setCategories={ setCategories } />*/}
            <AddCategory
                onNewCategory={ (value: any) => onAddCategory(value) }
            />

            {/*listado de Gif*/}

            {/*<button onClick={ onAddCategory }>Agregar</button>*/}

            {/*<ol>*/}

            { categories.map( (category) => (
                    // return (<li key={ category }>{category}</li>)
                    // <div key={category}>
                    //     <h3>{category}</h3>
                    //     <li>{category}</li>
                    // </div>
                    <GifGrid
                        key={category}
                        category={category}/>
                ))
            }

            {/*<li>123</li>*/}
            {/*</ol>*/}

            {/*Gif item*/}
        </>
    );
};
