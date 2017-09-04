<template>
  <div>
    <md-sidenav class="md-left" ref="leftSidenav">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
        </div>
      </md-toolbar>

      <md-list>
        <md-list-item class="item-click" v-for="item in items" :key="item.name" @click="goTo(item)">
          <md-ink-ripple />
          <md-icon>{{item.icon}}</md-icon> <span>{{item.name}}</span>
        </md-list-item>
      </md-list>
    </md-sidenav>
  </div>
</template>

<script src="./sidenav.js"></script>
