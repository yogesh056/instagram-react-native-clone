import {observer} from 'mobx-react';
import React from 'react';
import {StyleSheet, SafeAreaView, Image} from 'react-native';
import ChatHeader from '../../../components/ChatLayout/ChatHeader';
import ChatOverview from '../../../components/ChatLayout/ChatOverview';
import ModalLayout from '../../../components/ModalLayout';

import appStore from '../../../store';

const MessageModal = () => {
  return (
    <ModalLayout isVisible={appStore.showMessageModal}>
      <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        <ChatHeader />
        <ChatOverview
          isActive={false}
          activeTime={'1 hr ago'}
          name={'Mike'}
          index={1}
        />
        <ChatOverview
          isActive={true}
          activeTime={'now'}
          name={'James'}
          index={2}
        />
        <ChatOverview
          isActive={false}
          activeTime={'yesterday'}
          name={'Daniel'}
          index={3}
        />
      </SafeAreaView>
    </ModalLayout>
  );
};

const styles = StyleSheet.create({
  active: {
    width: 12,
    height: 12,
    backgroundColor: '#4FC626',
    borderColor: 'white',
    borderWidth: 1,
    position: 'absolute',
    bottom: 0,
    right: 4,
    borderRadius: 50,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: 'red',
  },
  boldText: {
    fontWeight: '600',
    fontSize: 16,
  },
});

export default observer(MessageModal);
