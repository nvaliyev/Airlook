import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ItemsList from '..';
describe(' ItemsList', () => {
    test(' ItemsList snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(< ItemsList/>);
        expect(snapshot).toMatchSnapshot();
    });
});


