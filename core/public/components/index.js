import uPage from './base/upage';
import uTable from './base/utable';
import uButton from './base/ubutton';
export default {
    install (Vue){
        Vue.component('uPage',uPage);
        Vue.component('uTable',uTable);
        Vue.component('uButton',uButton);
    }
}