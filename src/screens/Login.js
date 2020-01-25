import React, {Component} from 'react';
import {View, Text, KeyboardAvoidingView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import {loginRequest} from '../actions/login';
import InputField from '../components/InputField';
import GradientBtn from '../components/GradientBtn';
import colors from '../styles/color';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  onChangeTextHandler = (key, val) => {
    this.setState({[key]: val});
  };

  loginHandler = () => {
    const {
      state: {email, password},
      props: {loginRequest, navigation},
    } = this;
    loginRequest({email, password});
    navigation.navigate('Home');
  };

  render() {
    const {
      state: {email, password},
      loginHandler,
      onChangeTextHandler,
    } = this;

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
              name="email"
              value={email}
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
  login: state.login,
});

export default connect(mapStateToProps, {loginRequest})(Login);
