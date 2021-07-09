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
            <input id="email-address" @input="onInputEmail" name="email" type="email" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" @input="onInputPassword" name="password" type="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
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
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { LockClosedIcon } from '@heroicons/vue/solid';
import axios from 'axios';

import router from '../router/index';

export default {
  data(){
    return ({
      email: '',
      password: '',
    })
  },
  components: {
    LockClosedIcon,
  },
  methods: {
    onInputEmail(event){
      this.email = event.target.value;
    },
    onInputPassword(event){
      this.password = event.target.value;
    },
    async onLoginButtonPressed(){
      event.preventDefault();
      console.log("login Called",this.email,this.password);
      try{
        const msg = await axios.post('http://fitnessappauth.herokuapp.com/api/users/login',{
        email: this.email,
        Password: this.password,
        
      })
      console.log(msg);
      }catch(err){
        console.log(err);
      }
      
      
      router.push('/');
    }
  }
}
</script>