<template>
  <div class="text-xs-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          color="primary"
          dark
          v-on="on"
        >
          Dropdown
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="()=>{}"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    
  </div>
</template>

<script>
  export default {
    data() {
      return {
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' }
      ]
    }
    },
    methods: {
      test() {

      }
    }
  }
</script>