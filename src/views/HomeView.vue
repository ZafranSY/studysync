<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-4 mx-auto">
          <div class="card my-4">
            <div class="card-header">
              <h4 class="h card-title bg-info p-3 text-center">Admin Login</h4>
            </div>
            <div class="card-body">
              <form action="" method="POST">
                <!-- Username Field -->
                <div class="form-group">
                  <label for="username">User Name</label>
                  <input
                    type="text"
                    placeholder="username"
                    class="form-control"
                    name="username"
                    v-model="Admin.username"
                  />
                </div>

                <!-- Password Field -->
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    placeholder="*****"
                    class="form-control"
                    name="password"
                    v-model="Admin.password"
                  />
                </div>

                <!-- Submit Button -->
                <div class="form-group">
                  <button
                    class="btn btn-success btn-sm float-right"
                    @click.prevent="onlogin()"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data() {
    return {
      Admin: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    onlogin() {
      var data = new FormData();
      data.append('username' : this.admin.username);
      data.append('password' : this.admin.password);
      axios.post("");
      alert("im working");
    },
  },
};
</script>
