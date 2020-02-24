import 'react-native';
import React from 'react';
import { act, create } from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
describe('Login', () => {
    test('Login snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<SettingScreen/>);
        expect(snapshot).toMatchSnapshot();
    });
});


