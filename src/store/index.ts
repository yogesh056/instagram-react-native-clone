import {makeAutoObservable} from 'mobx';
class AppStore {
  showMessageModal: boolean = false;
  constructor() {
    makeAutoObservable(this);
  }
  toggleMessageModal(value: boolean) {
    console.log('show');
    this.showMessageModal = value;
  }
}
const appStore = new AppStore();
export default appStore;
