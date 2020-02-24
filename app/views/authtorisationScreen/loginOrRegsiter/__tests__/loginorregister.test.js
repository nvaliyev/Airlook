import 'react-native';
import React from 'react';
import { act, create } from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import LoginOrRegister from '..';
describe('Login or Register', () => {
    test('Login or Register snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<LoginOrRegister/>);
        expect(snapshot).toMatchSnapshot();
    });
});


