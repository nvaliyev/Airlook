import 'react-native';
import React from './node_modules/react';
import ShallowRenderer from './node_modules/react-test-renderer/shallow';
import ItemsList from '..';
describe(' ItemsList', () => {
    test(' ItemsList snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(< ItemsList/>);
        expect(snapshot).toMatchSnapshot();
    });
});


