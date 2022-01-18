import {observer} from 'mobx-react';
import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

import Modal from 'react-native-modal';
interface ModalProps {
  children: React.ReactNode;
  isVisible: boolean;
  viewStyle?: object;
  modalStyle?: object;
}

const ModalLayout: React.FC<ModalProps> = ({
  children,
  isVisible,
  viewStyle,
  modalStyle,
}) => {
  console.log('Change', isVisible);
  return (
    <Modal
      animationIn="slideInRight"
      animationOut="slideOutRight"
      style={[styles.centeredView, modalStyle]}
      coverScreen
      deviceHeight={height}
      deviceWidth={width}
      isVisible={isVisible}>
      <View style={[styles.centeredView, viewStyle]}>{children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default observer(ModalLayout);
