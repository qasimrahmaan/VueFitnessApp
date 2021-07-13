<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login to your account
        </h2>
      </div>
      <form @submit="onLoginButtonPressed" class="mt-8 space-y-6">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" v-model="email" name="email" type="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
            <span v-if="msg.email" style="color:red">{{msg.email}}</span>          
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" v-model="password" name="password" type="password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
            <span v-if="msg.password" style="color:red">{{msg.password}}</span>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center">
          </div>
          <div class="text-sm">
            <a href="#" class="font-medium text-green-600 hover:text-green-500">
              Forgot your password?
            </a>
          </div>
        </div>
        <div>
          <button class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-green-900 group-hover:text-green-500" aria-hidden="true" />
            </span>
            Login {{accessToken}}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-useless-escape */
import { LockClosedIcon } from '@heroicons/vue/solid';
import axios from 'axios';
export default {
  data(){
    return ({
      email: '',
      password: '',
      token: '',
      msg: [],
    })
  },
  components: {
    LockClosedIcon,
  },
  watch: {
    email(value){
      // binding this to the data value in the email input
      this.email = value;
      this.validateEmail(value);
    },
    password(value){
      this.password = value;
      this.validatePassword(value);
    }
  },
  methods: {
    validateEmail(value){
      // eslint-no-useless-escape
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let bool = pattern.test(value);
      if(bool){
        this.msg['email'] = '';
      } else{
        this.msg['email'] = 'Invalid Email Address';
      } 
    },
    validatePassword(value){
      let difference = 8 - value.length;
      if(value.length<8){
        this.msg['password'] = 'Must be 8 characters! '+ difference + ' characters left' ;
      } else {
         this.msg['password'] = '';
      }
    },
    // 
    validatePhone(value){
      // eslint-no-useless-escape
      const pattern = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;
      let bool = pattern.test(value);
      if(bool){
        this.msg['email'] = '';
      } else{
        this.msg['email'] = 'Invalid Email Address';
      } 
    },
    async onLoginButtonPressed(event){
      event.preventDefault();
      console.log("login Called",this.email,this.password);
      try{
        const msg = await axios.post('http://fitnessappauth.herokuapp.com/api/users/login',{
        email: this.email,
        Password: this.password,
        })
        this.token = msg.data.token;
        localStorage.token = JSON.stringify(this.token);
        this.$router.push('/');

      }catch(err){
        console.log(err);
      }
    }
  }
}
</script>