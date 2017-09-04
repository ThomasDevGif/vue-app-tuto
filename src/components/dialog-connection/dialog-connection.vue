<template>
  <div>
    <md-dialog md-open-from="#custom" md-close-to="#custom" ref="dialogConnection">
      <md-dialog-title v-if="isSignIn">Sign in</md-dialog-title>
      <md-dialog-title v-if="!isSignIn">Sign up</md-dialog-title>

      <md-dialog-content>
        <form>
          <md-input-container>
            <label>Login</label>
            <md-input v-model="login"></md-input>
          </md-input-container>

          <md-input-container md-has-password>
            <label>Password</label>
            <md-input type="password" v-model="password"></md-input>
          </md-input-container>

          <md-input-container md-has-password v-if="!isSignIn">
            <label>Confirm password</label>
            <md-input type="password"></md-input>
          </md-input-container>

          <md-button class="md-raised" @click="isSignIn = false;" v-if="isSignIn">Subscribe now</md-button>
        </form>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click="closeDialog()">Cancel</md-button>
        <md-button class="md-primary" @click="signIn()" v-if="isSignIn">Sign in</md-button>
        <md-button class="md-primary" @click="signUp()" v-if="!isSignIn">Sign up</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script src="./dialog-connection.js"></script>
