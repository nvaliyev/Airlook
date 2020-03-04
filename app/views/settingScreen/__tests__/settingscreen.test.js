import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SettingScreen from '..';

describe('SettingScreen', () => {
    test('SettingScreen snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<SettingScreen/>);
        expect(snapshot).toMatchSnapshot();
    });
});


