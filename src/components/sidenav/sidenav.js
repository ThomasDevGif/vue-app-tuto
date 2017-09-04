/*jshint esversion: 6 */

import EventBus from '../../services/event/';

export default {
  name: 'sidenav',
  data () {
    return {
      items: [{
        name: 'Home',
        link: 'home',
        icon: 'home',
        connectionNeeded: false
      }, {
        name: 'TodoList',
        link: 'todolist',
        icon: 'list',
        connectionNeeded: true
      }],
    };
  },
  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    },
    goTo(item) {
      if(item.connectionNeeded && !this.$session.exists()) {
        EventBus.$emit('dialog-connection-open', true);
      } else {
        this.$router.push({ name: item.link});
        this.$refs.leftSidenav.toggle();
      }
    }
  },
  created: function() {
    var self = this;
    EventBus.$on('toggleLeftSidenav', () => {
      self.toggleLeftSidenav();
    });
  }
};
