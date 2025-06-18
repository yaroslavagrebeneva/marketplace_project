<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" lg="6">
          <h1 class="text--secondary mb-3 mt-3">Orders</h1>
          <v-list subheader two-line flat>
            <v-item-group v-model="selectedOrders">
              <v-list-item
                v-for="order in orders"
                :key="order.id"
                :value="order.id"
              >
                <template v-slot:prepend>
                  <v-list-item-action>
                    <v-checkbox
                      v-model="order.done"
                      color="primary"
                      hide-details
                      @change="markDone(order)"
                    />
                  </v-list-item-action>
                </template>
                <v-list-item-title>{{ order.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
                <template v-slot:append>
                  <v-list-item-action>
                    <!-- Обновлена кнопка с явным классом для primary цвета -->
                    <v-btn class="primary" :to="'/ad/' + order.adId" color="primary">
                      Open
                    </v-btn>
                  </v-list-item-action>
                </template>
              </v-list-item>
            </v-item-group>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedOrders: [],
        orders: [
          {
            id: "123",
            name: "Kostya",
            phone: "+7(978)000-00-05",
            adId: "1",
            done: true,
          },
          {
            id: "124",
            name: "Ivan",
            phone: "+7(978)000-00-06",
            adId: "2",
            done: false,
          },
          {
            id: "125",
            name: "Anna",
            phone: "+7(978)000-00-07",
            adId: "3",
            done: true,
          },
          {
            id: "126",
            name: "Elena",
            phone: "+7(978)000-00-08",
            adId: "4",
            done: false,
          },
        ],
      };
    },
    methods: {
      markDone(order) {
        console.log(`Заказ ${order.id} помечен как ${order.done ? "обработан" : "необработан"}`);
      },
    },
  };
  </script>
  