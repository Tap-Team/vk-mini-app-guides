import React from 'react';
import { Card, Cell, Div } from '@vkontakte/vkui';
import { Icon24ChevronRight, Icon24LikeOutline } from '@vkontakte/icons';
import './FavoriteButton.css';

const FavoriteButton = () => {
  return (
    <Div className={'TapFavoriteButton'}>
      <Card mode={'shadow'}>
        <Cell before={<Icon24LikeOutline />} after={<Icon24ChevronRight />}>
          Добавить приложение в избранное
        </Cell>
      </Card>
    </Div>
  );
};

export default FavoriteButton;
