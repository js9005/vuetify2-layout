<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item style="height: 64px"> xxx </v-list-item>
      <v-list>
        <v-subheader> 페이지 </v-subheader>
        <div v-for="item in menu" :key="item.title" class="mb-2">
          <!-- 서브메뉴 있는 경우 -->
          <template v-if="item.sub">
            <v-list-group :prepend-icon="item.icon" no-action>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item
                v-for="child in item.sub"
                :key="child.title"
                :to="child.path"
              >
                <v-list-item-content>
                  <v-list-item-title>{{ child.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </template>
          <!-- 서브메뉴 없는 경우 -->
          <template v-else>
            <v-list-item :to="item.path" color="primary">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </div>
        <v-subheader> 컴포넌트 </v-subheader>
        <div v-for="item in menu" :key="item.title" class="mb-2">
          <!-- 서브메뉴 있는 경우 -->
          <template v-if="item.sub">
            <v-list-group :prepend-icon="item.icon" no-action>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item
                v-for="child in item.sub"
                :key="child.title"
                :to="child.path"
              >
                <v-list-item-content>
                  <v-list-item-title>{{ child.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </template>
          <!-- 서브메뉴 없는 경우 -->
          <template v-else>
            <v-list-item :to="item.path" color="primary">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </div>
      </v-list>
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
  data: () => ({
    drawer: null,
    menu: [
      {
        icon: "mdi-home",
        title: "홈",
        path: "/",
      },
      {
        icon: "mdi-login",
        title: "로그인",
        path: "/login",
      },
      {
        icon: "mdi-alert-circle-outline",
        title: "에러",
        path: "/error",
      },
      {
        icon: "mdi-table",
        title: "테이블",
        sub: [
          { title: "기본", path: "/tables/basic" },
          { title: "연장", path: "/tables/expand" },
          { title: "선택", path: "/tables/select" },
        ],
      },
    ],
  }),
};
</script>
