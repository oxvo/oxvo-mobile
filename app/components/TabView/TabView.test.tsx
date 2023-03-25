import React from 'react';
import { View } from 'react-native';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import TabView from './TabView';

describe('TabView', () => {
  const routes = [
    {
      key: 'tab1',
      title: 'Tab 1',
    },
    {
      key: 'tab2',
      title: 'Tab 2',
    },
  ];

  const views = [<View key="view1" />, <View key="view2" />];

  it('renders the component correctly', async () => {
    const { getByTestId } = render(<TabView routes={routes} views={views} />);
    const tabViewContainer = getByTestId('tabView');
    expect(tabViewContainer).toBeDefined();
  });

  it('switches to another tab when pressed', async () => {
    const { getByText, getByTestId } = render(<TabView routes={routes} views={views} />);
    const tabViewContainer = getByTestId('tabView');
    const tab1Button = getByText('Tab 1');
    const tab2Button = getByText('Tab 2');

    expect(tabViewContainer).toBeDefined();
    expect(tab1Button).toBeDefined();
    expect(tab2Button).toBeDefined();

    fireEvent.press(tab2Button);
    await waitFor(() => {
      const view2 = getByTestId('view2');
      expect(view2).toBeDefined();
    });

    fireEvent.press(tab1Button);
    await waitFor(() => {
      const view1 = getByTestId('view1');
      expect(view1).toBeDefined();
    });
  });
});
