<template>
  <div>
    <md-whiteframe md-elevation="3">
      <md-toolbar v-show="!checkToolbarLarge()">
        <md-button class="md-icon-button" @click="toggleLeftSidenav">
          <md-icon>menu</md-icon>
        </md-button>

        <h2 class="md-title" style="flex: 1">My first app with vue.js</h2>

        <div v-if="!isConnected">
          <md-button @click="openDialogConnection(true)">Sign in</md-button>
          <md-button class="md-raised md-primary" @click="openDialogConnection(false)">Sign up</md-button>
        </div>
        <div v-if="isConnected">
          <md-button @click="disconnect()">
            <span>{{login}}</span>
          </md-button>
        </div>

      </md-toolbar>
    </md-whiteframe>

    <md-whiteframe md-elevation="3">
      <md-toolbar class="md-large" v-show="checkToolbarLarge()">
        <div class="md-toolbar-container">
          <md-button class="md-icon-button" @click="toggleLeftSidenav">
            <md-icon>menu</md-icon>
          </md-button>

          <span style="flex: 1;"></span>

          <md-button class="md-icon-button">
            <md-icon>search</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>filter_list</md-icon>
          </md-button>
        </div>

        <div class="md-toolbar-container">
          <h2 class="md-title">Todo List</h2>
          <md-button class="md-fab md-mini md-fab-between" @click="buttonAdd()">
            <md-icon>add</md-icon>
          </md-button>
        </div>
      </md-toolbar>
    </md-whiteframe>
  </div>
</template>

<script src="./toolbar.js"></script>
