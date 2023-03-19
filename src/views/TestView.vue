<template>
  <div>
    <h2>Тестирование</h2>
    <div class="mt-3">
    <b-button-group>
      <b-button variant="info">Тест</b-button>
      <b-button variant="warning">Сброс</b-button>

    </b-button-group>
  </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      connection: null
    }
  },
  methods: {
    sendMessage: function (message) {
      console.log("Hello")
      console.log(this.connection);
      this.connection.send(message);
    }
  },
  // created: function () {
  //   console.log("Starting connection to WebSocket Server")
  //   this.connection = new WebSocket("ws://192.168.200.225:1880/palki")

  //   this.connection.onmessage = function (event) {
  //     console.log(event);
  //   }

  //   this.connection.onopen = function (event) {
  //     console.log(event)
  //     console.log("Successfully connected to the echo websocket server...")
  //   }

  // }
}
</script>