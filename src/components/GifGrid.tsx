// import {getGifs} from "../helpers/getGifs";
// import {useEffect, useState} from "react";
// import {useEffect, useState} from "react";
import {GifItem} from "./GifItem.tsx";
import {useFetchGifs} from "../hooks/useFetchGifs";
import {amd} from "globals";

export const GifGrid = ({ category }: any) => {

    // const gifs = [1,2,3,4,5];
    // const [counter, setCounter] = useState(10);

    // setCounter( counter + 1 ); // CICLO INFINITO

    const { images, isLoading } = useFetchGifs( category );
    // console.log( { images, isLoading } );
    // console.log( { isLoading } );

    return (
        <>
            <h3>{ category }</h3>

            {
                // isLoading ? (<h2>Cargando...</h2>) : null
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className="card-grid">
                {
                    images.map(( image: any ) => (
                        // <li key={ id}>{ title }</li>
                        <GifItem
                            key={ image.id }
                            { ...image }
                            // title={ image.title }
                            // url={ image.url }
                        />
                    ))
                }
            </div>

            {/*<h5>{ counter }</h5>*/}
            {/*<button onClick={ () => setCounter( counter + 1) }>+1</button>*/}

            {/*{*/}
            {/*    gifs.map((gif) => (*/}
            {/*        <p>{ gif }</p>*/}
            {/*    ))*/}
            {/*}*/}
        </>
    );
};
