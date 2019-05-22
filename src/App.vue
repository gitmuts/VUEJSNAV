<template>
  <v-app>
      <v-navigation-drawer
       fixed
       :clipped="$vuetify.breakpoint.smAndUp"
       app
       v-model="drawer"
      >
      <v-list dense>
        <template v-for="item in menus">
          <v-list-group
            v-if="item.children"
            v-model="item.model"
            :key="item.title"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.title }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.title }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :key="item.title" :to="item.component">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.title }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
      </v-navigation-drawer>
      <v-toolbar
        color="blue darken-3"
        dark
        app
        :clipped-left="$vuetify.breakpoint.mdAndUp"
        fixed
      >
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
          <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
          <span class="hidden-sm-and-down">Sample Application</span>
        </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>apps</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>notifications</v-icon>
          </v-btn>
          <v-menu offset-y origin="center center" :nudge-bottom="10" transition="scale-transition">
            <v-btn icon large flat slot="activator">
              <v-icon> account_circle </v-icon>
            </v-btn>
            <v-list class="pa-0">
              <v-list-tile v-for="(item,index) in icons" :to="!item.href ? { name: item.name } : null" :href="item.href" @click="item.click" ripple="ripple" :disabled="item.disabled" :target="item.target" rel="noopener" :key="index">
                <v-list-tile-action v-if="item.icon">
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-menu>
      </v-toolbar>
      <v-divider></v-divider>
      <v-content>
        <router-view></router-view>
      </v-content>
  </v-app>
</template>

<script>
import menus from '@/api/menu'

export default {
  name: 'App',
  mounted () {
    console.log(this.$vuetify.breakpoint.mdAndUp)
  },
  data () {
    return {
      icons: [
        {
          icon: 'fullscreen_exit',
          href: '#',
          title: 'Logout',
          click: (e) => {
            window.getApp.$emit('APP_LOGOUT')
          }
        }
      ],
      drawer: null,
      menus: menus
    }
  }
}
</script>

<style lang="stylus" scoped>
  .setting-fab
    top:50%!important;
    right:0;
    border-radius:0
  .page-wrapper
    min-height:calc(100vh - 64px - 50px - 81px );
</style>
