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
                    <input v-model="email" class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="email" placeholder="Your email address">
                    <span v-if="msg.email" style="color:red">{{msg.email}}</span>  
                </div>
                <div class="mb-4">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="password">Password</label>
                    <input v-model="password" class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="password" type="password" placeholder="Your secure password">
                    <span v-if="msg.password" style="color:red">{{msg.password}}</span>  
                </div>
                <div class="mb-4">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="Phone Number">Phone Number</label>
                    <input v-model="phone" class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="password" type="Phone Number" placeholder="Your secure password">
                    <span v-if="msg.phone" style="color:red">{{msg.phone}}</span>  
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
      msg: []
    }
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
    },
    phone(value){
      this.phone = value;
      this.validatePhone(value);
    },
  },
  methods: {
    onInputName(event){
      this.name = event.target.value;
    },
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
    validatePhone(value){
      // eslint-no-useless-escape
      const pattern = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;
      let bool = pattern.test(value);
      if(bool){
        this.msg['phone'] = '';
      } else{
        this.msg['phone'] = 'Invalid Phone Number';
      } 
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