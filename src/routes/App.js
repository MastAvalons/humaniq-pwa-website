import React, {Component} from 'react';
import * as T from "prop-types";
import MainLayoutContainer from 'containers/MainLayoutContainer'
import initialLoad from 'utils/initialLoad'
import {setRoute} from 'AC/navigation'
import {fetchWiki} from "AC/wiki";
import {fetchPartners, fetchAmbassadors} from 'AC/otherAPI'
import {fetchHmqStatistics} from 'AC/hmqExp'


class AppRoute extends Component {

  static prepareData({dispatch, getState}, query, params, location) {
    if(__CLIENT__) {
      const state = getState()
      state.wikiArticles.loaded || dispatch(fetchWiki())
      state.transactions.loaded || dispatch(fetchHmqStatistics())
      state.partners.loaded || dispatch(fetchPartners())
      state.partners.loaded || dispatch(fetchAmbassadors())

    }

    if(initialLoad()) return;
    dispatch(setRoute(location.pathname))
  }

  render() {
    return (
      <MainLayoutContainer>
        {this.props.children}
      </MainLayoutContainer>
    )
  }
}

AppRoute.propTypes = {
  children: T.any.isRequired
};

export default AppRoute;

