import {useState} from "react";

export const AddCategory = ({onNewCategory}: any) => {

    const [ inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }: any) => {
        console.log(target.value);

        setInputValue(target.value);
    }

    const onSubmit = ( event: any) => {
        // console.log(event);
        event.preventDefault();
        // console.log( inputValue );

        if( inputValue.trim().length <= 1 ) return;

        // setCategories( (categories: any) => [inputValue, ...categories ] );
        setInputValue('');
        onNewCategory( inputValue.trim() );
    }
    
    return (
        <>
            {/*<form onSubmit={ (event) => onSubmit(event) }>*/}
            <form onSubmit={ onSubmit }>
                <input
                    type="text"
                    placeholder="buscar gifs"
                    value={inputValue}
                    // onChange={ (event) => onInputChange(event) }/>
                    onChange={onInputChange}/>
            </form>
        </>
    );
}



