import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppState,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Clipboard
} from 'react-native';
import { connect } from 'react-redux';
import Swipeout from 'react-native-swipeout';

import { Icon, CircleProgress } from '../../components';
import navigationService from '../../navigation/navigationService';
import navigationConstants from '../../constants/navigationConstants';
import styles from "./ScanBarCodePage.style";

const second = () => (new Date()).getUTCSeconds() % 30;
class ScanBarCodePage extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <TouchableOpacity style={styles.headerBtn} onPress={() => navigation.push('Scan')}>
        <Icon name="scan" size={30} color="#fff" />
      </TouchableOpacity>
    )
  });
  static propTypes = {
    navigation: PropTypes.any.isRequired,
    dispatch: PropTypes.func.isRequired,
    list: PropTypes.array
  };
  static defaultProps = {
    list: []
  };
  appStateChange = (status) => {
    if (status === 'active') {
      this.updateOTP();
    }
  };
  gotoScan = () => {
  navigationService.navigate(navigationConstants.SCAN_PAGE)
  };
  constructor(props) {
    super(props);
    this.state = {
      time: second()
    };
  }
  updateOTP() {
    this.props.dispatch({
      type: 'totp/update'
    });
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      const time = second();
      this.setState((prev) => {
        if (prev.time > time) {
          this.updateOTP();
        }
        return { time };
      });
    }, 500);
    // init update otp list
    this.updateOTP();
    AppState.addEventListener('change', this.appStateChange);
  }
  componentWillUnmount() {
    AppState.removeEventListener('change', this.appStateChange);
    clearInterval(this.timer);
  }
  deleteItem(item) {
    this.props.dispatch({
      type: 'totp/delete',
      payload: item
    });
  }
  render() {
    const { time } = this.state;
    const { list } = this.props;
    const copy = (text) => {
      Clipboard.setString(text);
      Alert.alert('Tips', `Have copied to clipboard: ${text}`);
    };
    const TrashIcon = () => (
      <View style={styles.icon}>
        <Icon name="trash" size={30} color="#fff" />
      </View>
    );
    const renderItem = ({ item }) => {
      const btns = [{
        component: <TrashIcon />,
        backgroundColor: 'red',
        onPress: () => this.deleteItem(item)
      }];
      return (
        <Swipeout right={btns} autoClose backgroundColor="transparent">
          <TouchableOpacity onPress={() => copy(item.otp)}>
            {/*             <View style={styles.containerItem}>
              <Text style={styles.title}>{`${item.otp.substring(0,3)} ${item.otp.substring(3)}`}</Text>
              <View style={styles.itemContent}>
                <Text style={styles.user}>{decodeURIComponent(item.name)}</Text>
                <CircleProgress radius={8} percent={time / 30 * 100} />
              </View>
            </View> */}
            <View style={styles.containerItem}>
              <View style={styles.itemContent}>
                <Text style={styles.title}>{`${item.otp.substring(0, 3)} ${item.otp.substring(3)}`}</Text>
                <CircleProgress radius={20} percent={time / 30 * 100} />
              </View>
              <Text style={styles.user}>{decodeURIComponent(item.name)}</Text>
            </View>
          </TouchableOpacity>
        </Swipeout>
      );
    };
    const content = () => {
      if (!list.length) {
        return (
          <View style={styles.noData}>
            <Icon name="nodata" size={100} color="#999" />
            <Text style={{ fontSize: 18, color: '#999' }}>
              No authentication codes
            </Text>
            <TouchableOpacity
              onPress={this.gotoScan}
              style={styles.scanBtn}
            >
              <Icon name="scan" size={20} color="#fff" />
              <Text style={styles.scanText}>
                Scan Barcode
              </Text>
            </TouchableOpacity>
          </View>
        );
      }
      return (
        <FlatList
          data={list}
          extraData={time}
          renderItem={renderItem}
          style={styles.listView}
          keyExtractor={item => item.secret}
        />
      );
    };
    return (
      <View style={styles.container}>
        {content()}
      </View>
    );
  }
}

const mapState = ({ totp }) => ({
  list: totp.list
});

export default connect(mapState)(ScanBarCodePage);
