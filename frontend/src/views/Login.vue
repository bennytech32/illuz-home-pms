<!-- frontend/src/views/Login.vue -->
<template>
  <div class="min-h-screen bg-slate-900 flex items-center justify-center p-4">
    <div class="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-10 rounded-[2.5rem] w-full max-w-md shadow-2xl">
      
      <div class="text-center mb-8">
        <h1 class="text-4xl font-black text-white tracking-tight mb-2">Illuz<span class="text-blue-500">Admin</span></h1>
        <p class="text-slate-400 text-sm font-medium">Ingia ili kusimamia mfumo</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label class="block text-sm font-bold text-slate-300 mb-2">Username</label>
          <input type="text" v-model="username" required class="w-full bg-slate-900/50 border border-slate-700 text-white rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 outline-none">
        </div>

        <div>
          <label class="block text-sm font-bold text-slate-300 mb-2">Password</label>
          <input type="password" v-model="password" required class="w-full bg-slate-900/50 border border-slate-700 text-white rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 outline-none">
        </div>

        <div v-if="errorMsg" class="bg-rose-500/10 border border-rose-500/50 text-rose-400 p-3 rounded-xl text-sm font-bold text-center">
          {{ errorMsg }}
        </div>

        <button type="submit" :disabled="isLoading" class="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-2xl transition-all shadow-lg">
          {{ isLoading ? 'Inaingia...' : 'Ingia Kwenye Dashboard' }}
        </button>
      </form>
      
      <div class="mt-6 text-center">
        <a href="/" class="text-slate-400 hover:text-white text-sm transition-colors">← Rudi kwenye Tovuti</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const username = ref('');
const password = ref('');
const errorMsg = ref('');
const isLoading = ref(false);

const handleLogin = async () => {
  errorMsg.value = '';
  isLoading.value = true;
  
  try {
    const response = await axios.post('/api/login', {
      username: username.value,
      password: password.value
    });

    if (response.data.success) {
      localStorage.setItem('isAdminLoggedIn', 'true');
      router.push('/admin'); 
    }
  } catch (err) {
    if (err.response && err.response.data) {
      errorMsg.value = err.response.data.message;
    } else {
      errorMsg.value = 'Imeshindwa kuunganisha na Server.';
    }
  } finally {
    isLoading.value = false;
  }
};
</script>