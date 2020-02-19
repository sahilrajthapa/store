import React, {Component} from 'react';
import {ImageBackground, Text, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import colors from '../styles/color';

import ContainerView from '../components/ContainerView';
import Section from '../components/Section';
import Accordion from '../components/Accordion';
import InputGroup from '../components/InputGroup';
import GradientBtn from '../components/GradientBtn';
import {getProductById} from '../actions/products';

const data =
  'Enrofloxacin works by inhibiting the process of DNA synthesis within the bacterial cells, which results in cell death. This drug is commonly used to treat a range of bacterial infections, including those of the skin, urinary tract, and respiratory system, as well as infections that result from wounds.';

function getInfoText(arr) {
  if (arr && arr.length > 0) {
    return arr.map(item => item.name).join(', ');
  } else {
    return 'No data available';
  }
}

function InfoText({label, text}) {
  return (
    <View style={styles.infoWrapper}>
      <Text style={styles.infoLabel}>{label}:</Text>
      <Text style={styles.infoText}>{text}</Text>
    </View>
  );
}
class Detail extends Component {
  // componentDidMount() {
  //   const {navigation, getProductById} = this.props;
  //   getProductById({productId: navigation.getParam('productId')});
  // }
  render() {
    const {navigation} = this.props;
    const product = navigation.getParam('product');

    return (
      <ContainerView
        navigation={navigation}
        customStyle={{paddingLeft: 0, paddingRight: 0}}>
        <Section propStyle={{marginBottom: 20}}>
          <View style={styles.imgWrapper}>
            <ImageBackground
              source={{uri: product.photo_url}}
              style={{
                width: '100%',
                height: '100%',
              }}></ImageBackground>
          </View>
          <Text style={styles.title}>{product.name}</Text>
          <View style={styles.descrpWrapper}>
            <InfoText label="Category" text={getInfoText(product.categories)} />
            <InfoText label="Product ID" text={product.id} />
            <InfoText label="Disease Type" text={getInfoText(product.types)} />
          </View>
          <Accordion title="Description" data={product.description} />
          <Accordion title="Usage" data={product.usage} />
          <View style={styles.quantityWrapper}>
            <Text style={{fontSize: 16, fontWeight: '700'}}>Quantity</Text>
            <InputGroup />
          </View>

          <GradientBtn name="BUY NOW" onPressHandler={() => {}} />
        </Section>
      </ContainerView>
    );
  }
}

const styles = StyleSheet.create({
  imgWrapper: {
    paddingLeft: 30,
    paddingRight: 30,
    height: 200,
  },
  title: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    fontSize: 24,
    fontWeight: '600',
  },
  descrpWrapper: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: colors.lightGray,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  infoWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '700',
    paddingRight: 5,
  },
  infoText: {
    fontSize: 14,
    width: '75%',
    paddingTop: 3,
  },
  quantityWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginTop: 50,
    marginBottom: 70,
    borderColor: colors.lightGray,
    borderBottomWidth: 2,
    borderTopWidth: 2,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

const mapStateToProps = state => {
  return {
    product: state.products.selectedProduct,
  };
};

export default connect(mapStateToProps, {getProductById})(Detail);
