
export const getGifs = async (category: any) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=GourTOjn0j2vsDqjmMmVum1UpakurL1v&q=${category}&limit=10`;
    const resp = await fetch(url);
    // console.log(resp);
    const { data } = await resp.json();
    // console.log( data );

    const gifs = data.map( (img: any) => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        })
    );

    // console.log( gifs );
    return gifs;
}
