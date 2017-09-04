/*jshint esversion: 6 */
import store from '../../services/store/';
import EventBus from '../../services/event/';

export default {
  name: 'toolbar',
  components: {
  },

  data() {
    return {
      login: '',
      isConnected: false
    };
  },

  methods: {
    toggleLeftSidenav() {
      EventBus.$emit('toggleLeftSidenav');
    },
    checkToolbarLarge() {
      if(this.$route.name == 'todolist') {
        return true;
      } else {
        return false;
      }
    },
    openDialogConnection(isSignIn) {
      this.$parent.openDialogConnection(isSignIn);
    },
    connect() {
      if (this.$session.exists()) {
        this.isConnected = true;
        this.login = this.$session.get('login');
      } else {
        this.isConnected = false;
      }
    },
    disconnect() {
      this.isConnected = false;
      this.$session.destroy();
    },
  },

  created: function() {
    var self = this;

    // Init
    self.connect();

    // Events
    EventBus.$on('connected', () => {
      self.connect();
    });
  }
};
