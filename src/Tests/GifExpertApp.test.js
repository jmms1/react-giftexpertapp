import React from 'react';
import {shallow} from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Test en GifExpertApp', () => {
    
    const wrapper = shallow(<GifExpertApp />)

    test('render correcto ', () => {
        
        expect(wrapper).toMatchSnapshot();
    })
    



})
