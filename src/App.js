import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import {
  View,
  ScreenSpinner,
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  SplitLayout,
  SplitCol,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Onboarding from './panels/Onboarding';

const App = () => {
  const [activePanel, setActivePanel] = useState('home');
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

  useEffect(() => {
    setPopout(null);
    async function fetchData() {
      const user = await bridge.send('VKWebAppGetUserInfo');
      setUser(user);
      setPopout(null);
    }
    const showOnboarding = async () => {
      const data = await bridge.send('VKWebAppStorageGet', {
        keys: ['onboarding'],
      });
      if (data.keys[0] && data.keys[0].value !== 'true') {
        setActivePanel('onboarding');
      }
    };
    fetchData();
    showOnboarding();
    setActivePanel('onboarding');
  }, []);

  const go = (e) => {
    setActivePanel(e.currentTarget.dataset.to);
  };

  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout popout={popout}>
            <SplitCol>
              <View activePanel={activePanel}>
                <Home id='home' fetchedUser={fetchedUser} go={go} />
                <Persik id='persik' go={go} />
                <Onboarding id='onboarding' go={go} />
              </View>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
