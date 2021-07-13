<template>
  <div v-if="isLoggedIn">
    <button @click="logout" class="bg-white hover:bg-green-100 text-green-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
      Logout
    </button>
    <button  @click="changePassword" class="bg-white hover:bg-green-100 text-green-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
      Change Password
    </button>
    <div v-if="isChangePassword" class="font-sans antialiased bg-grey-lightest">
  <div class="w-full bg-grey-lightest" style="padding-top: 4rem;">
    <div class="container mx-auto py-8">
      <div class="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
            <div class="py-4 px-8">
                <div class="mb-4">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="password">Password</label>
                    <input @input="onInputNewPassword" class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="password" type="password" placeholder="Your secure password">
                </div>
                
                <div class="flex items-center justify-between mt-8">
                  <button @click="cancel" class="bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full" type="submit">
                        Cancel
                    </button>
                    <button @click="OnClickChangePassword" class="bg-green-500 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full" type="submit">
                        Confirm
                    </button>
                    
                </div>
            </div>
        </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>

import axios from 'axios';
import jwt_decode from "jwt-decode";
export default {
  name: 'Main',
  beforeMount(){
    if(localStorage.getItem('token')==''){
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
    }
  },
  data(){
    return {
      isLoggedIn : false,
      token : localStorage.getItem('token'),
      isChangePassword : false,
      newPassword: ''
    }
  },
  methods: {
    onInputNewPassword(event){
      this.newPassword = event.target.value;
    },
    logout(event){
      console.log(event);
      localStorage.setItem('token','');
      this.token = '';
      this.isLoggedIn = false;
      
    },
    changePassword(){
      this.isChangePassword = true;
      /**/
    },
    async OnClickChangePassword(){
      try{
        console.log(this.token,this.newPassword);
        
        const decodedToken = jwt_decode(this.token);
        const id = decodedToken.id;
        console.log(this.token,this.newPassword);
        const response = await axios.put(`http://fitnessappauth.herokuapp.com/api/users/changeoldpassword/${id}`,{
        Password: this.newPassword,
        },{
          headers:{
            'x-auth-token': `${this.token}`,
          }
        })
        console.log(response);
        this.$router.push('/Login');

      }catch(err){
        console.log(err);
      }
    }
  }
}
</script>

