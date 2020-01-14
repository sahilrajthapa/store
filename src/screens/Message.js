import React, {Component} from 'react';
import ContainerView from '../components/ContainerView';
import Section from '../components/Section';
import Heading from '../components/Heading';
import MessageForm from '../components/MessageForm';

export default class Message extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <ContainerView navigation={navigation}>
        <Section marginTop={20}>
          <Heading heading="Message" fontSize={30} screen />
          <MessageForm title="Message" />
        </Section>
      </ContainerView>
    );
  }
}
