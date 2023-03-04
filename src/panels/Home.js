import React from 'react';
import PropTypes from 'prop-types';
import { Div, IconButton, Panel, PanelHeader, Subhead } from '@vkontakte/vkui';
import { Icon24Filter } from '@vkontakte/icons';
import FavoriteButton from '../components/FavoriteButton/FavoriteButton';

const Home = ({ id, go, fetchedUser }) => (
  <Panel id={id}>
    <PanelHeader
      before={
        <IconButton>
          <Icon24Filter />
        </IconButton>
      }
      separator={false}
    >
      Tap Anime
    </PanelHeader>
    <Div>
      <Subhead>Все аниме</Subhead>
    </Div>
    <FavoriteButton />
  </Panel>
);

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

export default Home;
