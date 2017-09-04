/*jshint esversion: 6 */
import EventBus from '../../services/event/';

export default {
  name: 'snackbar',
  data() {
    return {
      msg: '',
    };
  },
  methods: {
    openSnackbar(msg) {
      this.msg = msg;
      this.$refs.snackbar.open();
    }
  },
  created: function() {
    var self = this;
    EventBus.$on('snackbar-open', (msg) => {
      self.openSnackbar(msg);
    });
  }
};
