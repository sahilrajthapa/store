import React, {Component} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {loginRequest} from '../actions/login';
import InputField from '../components/InputField';
import GradientBtn from '../components/GradientBtn';
import colors from '../styles/color';

class Login extends Component {
  _isMounted = false;

  state = {
    email_or_username: 'sahilmr@gmail.com',
    email_or_username_err: '',
    password: '123456',
    password_err: '',
  };

  onChangeTextHandler = (key, val) => {
    this.setState({[key]: val, [`${key}_err`]: ''});
  };

  validationHandler = () => {
    const {
      state: {email_or_username, password},
    } = this;
    const errors = {};

    if (!email_or_username) {
      errors.email_or_username_err = 'Email is required.';
    }

    if (!password) {
      errors.password_err = 'Password is required.';
    }

    if (Object.keys(errors).length > 0) {
      this.setState({
        ...errors,
      });
      return true;
    }

    return false;
  };

  loginHandler = () => {
    const {
      state: {email_or_username, password},
      props: {loginRequest, navigation},
    } = this;

    const errors = this.validationHandler();

    if (errors) return;

    loginRequest({email_or_username, password});
  };

  shouldComponentUpdate(nextProps) {
    if (!nextProps.navigation.isFocused()) {
      return false;
    }
    return true;
  }

  componentDidMount() {
    if (this.props.navigation.isFocused()) {
      this._isMounted = true;
    }

    this.willFocusListener = this.props.navigation.addListener(
      'willFocus',
      () => {
        this._isMounted && this.forceUpdate();
      },
    );
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.loginFailure &&
      this.props.loginFailure !== prevProps.loginFailure
    ) {
      return Alert.alert('Error', 'Unable to login with provided credentials.');
    }
  }

  render() {
    const {
      state: {email_or_username, email_or_username_err, password, password_err},
      props: {loginReq},
      loginHandler,
      onChangeTextHandler,
    } = this;

    if (loginReq) {
      return (
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
        <View style={styles.scrollViewWrapper}>
          <View style={styles.scrollView}>
            <Text style={styles.loginHeader}>Login</Text>
            <InputField
              labelText="Email"
              labelTextSize={15}
              labelColor={colors.gray}
              textColor={colors.gray}
              borderBottomColor={colors.gray}
              inputType="email"
              customStyle={{marginBottom: 30}}
              onChangeTextHandler={onChangeTextHandler}
              name="email_or_username"
              value={email_or_username}
              error={email_or_username_err}
            />
            <InputField
              labelText="Password"
              labelTextSize={15}
              labelColor={colors.gray}
              textColor={colors.gray}
              borderBottomColor={colors.gray}
              inputType="password"
              customStyle={{marginBottom: 60}}
              onChangeTextHandler={onChangeTextHandler}
              name="password"
              value={password}
              error={password_err}
            />
            <View style={styles.buttonWrapper}>
              <GradientBtn
                name="Log In"
                raised
                borderRadius={5}
                onPressHandler={loginHandler}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }

  componentWillUnmount() {
    this._isMounted = false;
    this.willFocusListener && this.willFocusListener.remove();
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollViewWrapper: {
    marginTop: 50,
    flex: 1,
  },
  scrollView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
  },
  loginHeader: {
    fontSize: 28,
    color: colors.black,
    fontWeight: '300',
    marginBottom: 60,
  },
  buttonWrapper: {
    paddingLeft: 6,
    paddingRight: 6,
  },
});

const mapStateToProps = state => ({
  loginReq: state.login.loginRequest,
  loginSuccess: state.login.loginSuccess,
  loginFailure: state.login.loginFailure,
});

export default connect(mapStateToProps, {loginRequest})(Login);
