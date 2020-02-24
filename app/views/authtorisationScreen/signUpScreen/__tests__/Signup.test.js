import 'react-native';
import React from 'react';
import { act, create } from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import SignUpScreen from '..';
describe('Sign up', () => {
    test('Sign Up snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<SignUpScreen/>);
        expect(snapshot).toMatchSnapshot();
    });
});


