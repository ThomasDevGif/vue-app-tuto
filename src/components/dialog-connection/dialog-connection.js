/*jshint esversion: 6 */
import store from '../../services/store';
import EventBus from '../../services/event/';

export default {
  components: {
  },
  data() {
    return {
      isSignIn: true,
      login: '',
      password: '',
    };
  },
  methods: {
    openDialogConnection(isSignIn) {
      this.isSignIn = isSignIn;
      this.$refs.dialogConnection.open();
    },

    closeDialog() {
      this.$refs.dialogConnection.close();
    },

    signIn() {
      var self = this;
      store.dispatch('restApi/getUserByLoginPassword', {login:this.login, password:this.password})
      .then(function(res){
        if(res.data.length > 0) {
          self.connect();
        }
      })
      .catch(function(err){
        console.log(err);
      });
    },

    signUp() {
      this.connect();
    },

    connect() {
      this.$session.start();
      this.$session.set('login', this.login);
      EventBus.$emit('connected');
      EventBus.$emit('snackbar-open', 'You are connected');
      this.closeDialog();
    },
  },
  created: function() {
    var self = this;
    EventBus.$on('dialog-connection-open', (isSignIn) => {
      self.openDialogConnection(isSignIn);
    });
  }
};
