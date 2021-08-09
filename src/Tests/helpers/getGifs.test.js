import { getGifs } from "../../helpers/getGifs"




describe('Pruebas con getGifs Fetch', () => {
    
    test('debe traer 10 elementos ', async () => {
        
        const gifs = await getGifs('One Punch');
        const gifskeys = Object.keys(gifs).length;

        expect( gifskeys ).toBe( 10 );
        
    })
    
})
