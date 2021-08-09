import React from 'react';
import { shallow } from 'enzyme';
import {GifGridItem} from '../../components/GifGridItem';


describe('Pruebas en GifItem', () => {

    const title = 'Un titulo'; 
    const url = 'http://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem
        title= {title}
        url = {url}
        />)
    
    test('should display component', () => {
        
        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe contener un parrafo con el titulo', () => {

        const p = wrapper.find('p');
        expect (p.text().trim() ).toBe( title );
        
    })

    test('Debe contener una imagen con url y alt', () => {

        const img = wrapper.find('img');
        expect (img.prop('src')). toBe( url );
        expect (img.prop('alt')). toBe( title );
        
    })

    test(' debe tener clase css animate__bounce', () => {
        
        const div = wrapper.find('div');
        expect( div.hasClass('animate__bounce')).toBe(true);
    })
    
    
    
})
