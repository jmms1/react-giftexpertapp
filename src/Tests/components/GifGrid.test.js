import React from 'react';
import {shallow} from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')
import '@testing-library/jest-dom'


describe('Prueba del componente <GifGrid />', () => {
    
    const value = 'Hola Mundo';
    
    
    test('Compomente se debe renderizar correctamente', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true 
        })
        const wrapper = shallow( <GifGrid category={value} />)
        expect(wrapper).toMatchSnapshot();
        
    });
    
    test('Debe mostrar items cuando carga imagenes useFetchGifs', () => {
        
        const gifs = [
            {
            id: 'abv',
            title: 'abc',
            url: 'http://localhost/cualquier/cosa.jpg' 
            },
            {
                id: 'xyz',
                title: 'xyz',
                url: 'http://localhost/cualquier/cosa.jpg' 
                },
        ]
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false 
        })
        const wrapper = shallow( <GifGrid category={value} />);

        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').lenght).toBe( gifs.lenght);

        
    })
    



})
