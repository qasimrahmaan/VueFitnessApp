<template>
  <div class="font-sans antialiased bg-grey-lightest">
  <!-- Content -->
  <div class="w-full bg-grey-lightest" style="padding-top: 4rem;">
    <div class="container mx-auto py-8">
      <div class="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
            <div class="py-4 px-8 text-black text-xl border-b border-grey-lighter">Register for a free account</div>
            <div class="py-4 px-8">
                <div class="mb-4">
                  <label class="block text-grey-darker text-sm font-bold mb-2" for="name">Name</label>
                  <input  class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="name" type="text" placeholder="Your name" @input="onInputName"> 
                </div>
                <div class="mb-4">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="email">Email Address</label>
                    <input @input="onInputEmail" class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="email" placeholder="Your email address">
                </div>
                <div class="mb-4">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="password">Password</label>
                    <input @input="onInputPassword" class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="password" type="password" placeholder="Your secure password">
                </div>
                <div class="mb-4">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="Phone Number">Phone Number</label>
                    <input @input="onInputPhoneNumber" class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="password" type="Phone Number" placeholder="Your secure password">
                </div>
                <div class="mb-4">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="Address">Address</label>
                    <input @input="onInputAddress" class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="password" type="Address" placeholder="Your secure password">
                </div>
                <div class="flex items-center justify-between mt-8">
                    <button @click="OnClickSignUp" class="bg-green-500 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full" type="submit">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
        <p class="text-center my-4">
            <a href="#/Login" class="text-grey-dark text-sm no-underline hover:text-grey-darker">I already have an account</a>
        </p>
    </div>
  </div>
  <!-- Footer -->
  <footer class="w-full bg-grey-lighter py-8">
    <div class="container mx-auto text-center px-8">
        <p class="text-grey-dark mb-2 text-sm">This is a product of <span class="font-bold">Your Company</span></p>
    </div>
  </footer>
</div>
</template>

<script>

import axios from 'axios';
import router from '../router/index';
export default {

  name: 'SignUp',
  data(){
    return {
      name: '',
      email: '',
      password: '',
      phone: '',
      address: '',
    }
  },
  methods: {
    onInputName(event){
      this.name = event.target.value;
    },
    onInputEmail(event){
      this.email = event.target.value;
    },
    onInputPassword(event){
      this.password = event.target.value;
    },
    onInputPhoneNumber(event){
      this.phone = event.target.value;
    },
    onInputAddress(event){
      this.address = event.target.value;
    },
    async OnClickSignUp(){
      //api
      //router.push('/Login')

      await axios.post('https://fitnessappauth.herokuapp.com/api/users/Register',{
        Name: this.name,
        email: this.email,
        Password: this.password,
        Phone: this.phone,
        Address: this.address
      });
      router.push('/Login');
    }
  }
}
</script>