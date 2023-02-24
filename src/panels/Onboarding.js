import React from 'react';
import {
  Button,
  Div,
  Group,
  Header,
  Panel,
  PanelHeader,
  Spacing,
  Text,
} from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';

const Onboarding = ({ id, go }) => {
  const onClickHandler = async (e) => {
    await bridge.send('VKWebAppStorageSet', {
      key: 'onboarding',
      value: true,
    });
    go(e);
  };
  return (
    <Panel id={id}>
      <PanelHeader>Список аниме</PanelHeader>
      <Group header={<Header>Онбординг</Header>}>
        <Div>
          <Text>Добро пожаловать в приложение Список аниме!</Text>
          <Text>
            В нём вы сможете найти: <Spacing />
            1) Список аниме; <Spacing />
            2) Дату релиза; <Spacing />
            3) Общее и уже выпущенное количество серий; <Spacing />
            4) Оценку.
          </Text>
          <Spacing size={24} />
          <Text>Приятного использования!</Text>
        </Div>
      </Group>
      <Group>
        <Div>
          <Button
            stretched
            size='l'
            mode='secondary'
            onClick={onClickHandler}
            data-to='home'
          >
            Перейти к приложению
          </Button>
        </Div>
      </Group>
    </Panel>
  );
};

export default Onboarding;
