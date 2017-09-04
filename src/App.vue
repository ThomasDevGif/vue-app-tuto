<template>
  <div>
    <toolbar></toolbar>
    <sidenav></sidenav>
    <dialogConnection></dialogConnection>
    <snackbar></snackbar>
    <div id="app">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import toolbar from './components/toolbar/toolbar.vue';
import sidenav from './components/sidenav/sidenav.vue';
import dialogConnection from './components/dialog-connection/dialog-connection.vue';
import snackbar from './components/snackbar/snackbar.vue';
import EventBus from './services/event';

export default {
  name: 'app',
  components: {
    toolbar,
    sidenav,
    dialogConnection,
    snackbar
  },
  methods: {
    openDialogConnection(isSignIn) {
      EventBus.$emit('dialog-connection-open', isSignIn)
    }
  },
  created: function() {

  }
}
</script>
