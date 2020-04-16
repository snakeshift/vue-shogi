<template>
  <div class="home">
    <v-row>
      <v-col>
        <v-card class="mx-auto mt-6" max-width="400">
          <v-img class="white--text align-end" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
            <v-card-title>Vue Shogi</v-card-title>
          </v-img>
          <v-card-subtitle class="pb-0 text-tight">made by リンゴさん</v-card-subtitle>
          <v-card-text class="text--primary">
            <div>This App is constructed by Vue.js and firebase.</div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="orange" text to="/shogi">
              Play
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>
