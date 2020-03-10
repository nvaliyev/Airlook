import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import GoBack from '..';
describe('GoBack Button', () => {
    test(' Goback Button  snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<GoBack/>);
        expect(snapshot).toMatchSnapshot();
    });
});


