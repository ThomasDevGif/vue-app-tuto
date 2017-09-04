<template>
  <div>
    <md-list>
      <md-list-item v-for="todo in todos" :key="todo.id" class="item-click" @click="checkItem(todo)">
        <md-avatar class="md-avatar-icon" v-bind:class="todo.priority">
          <md-icon>check</md-icon>
        </md-avatar>

        <span>{{todo.title}}</span>
        <md-layout md-hide-large>{{todo.date}}</md-layout>
        <md-layout md-hide-small>{{todo.priority}}</md-layout>
        <md-layout md-hide-small>{{todo.date}}</md-layout>

        <md-checkbox v-model="todo.done"></md-checkbox>

        <md-button class="md-icon-button md-list-action">
          <md-icon>delete</md-icon>
        </md-button>
      </md-list-item>
    </md-list>
  </div>
</template>

<script type="text/javascript" src="./todolist.js"></script>
