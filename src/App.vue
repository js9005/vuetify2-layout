<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>xxx</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon color="primary">
            <v-icon large>mdi-account-circle</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-avatar color="primary" size="50">
              <span class="white--text">{{ "name" }}</span>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="title">
                {{ "name" }} 님
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ "email@email.com" }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider class="my-2"></v-divider>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>로그아웃</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <router-view :key="$route.fullPath"></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({ drawer: null }),
};
</script>
