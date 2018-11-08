<template>
  <v-app>
      <v-navigation-drawer
       fixed
       :clipped="$vuetify.breakpoint.mdAndUp"
       app
       v-model="drawer"
      >
        <v-list dense class="pt-0">
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            @click=""
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
    
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
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
         <v-container fluid fill-height>
           <v-layout  justify-center align-center>
              hello world
           </v-layout>
        </v-container>
      </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      items: [
        { title: 'Dashboard', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' },
        { title: 'About1', icon: 'question_answer' },
        { title: 'About2', icon: 'question_answer' },
        { title: 'About3', icon: 'question_answer' },
        { title: 'About4', icon: 'question_answer' }
      ],
      icons: [
        {
          icon: 'fullscreen_exit',
          href: '#',
          title: 'Logout',
          click: (e) => {
            window.getApp.$emit('APP_LOGOUT');
          }
        }
      ],
      drawer: null
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
