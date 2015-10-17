import React, {
  Component,
  View,
} from 'react-native';

import CardIO, { CardIOConstants } from 'react-native-card.io';

export default class App extends Component {

  render() {
    return (
      <View
        style={
          {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }
        }
      >
        <CardIO
          style={
            {
              flex: 1,
              backgroundColor: 'black',
            }
          }
          hideCardIOLogo={ true }
          detectionMode={ CardIOConstants.DETECTION_MODE.AUTOMATIC }
          onSuccess={
            ( cardInfo ) => console.log(cardInfo)
          }
          onFailure={
            ( err ) => console.error(err)
          }
        />
      </View>
    );
  }

}
