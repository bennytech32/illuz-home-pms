<template>
  <div class="min-h-screen bg-slate-50 font-sans text-slate-900 scroll-smooth relative selection:bg-blue-200">
    
    <nav class="fixed w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div class="text-2xl font-black text-slate-900 tracking-tighter flex items-center gap-2">
          <span>Illuz<span class="text-blue-600">Home</span></span>
        </div>
        
        <div class="space-x-8 font-semibold text-slate-600 hidden md:flex items-center">
          <a href="#home" class="hover:text-blue-600 transition-colors">{{ t('navHome') }}</a>
          <a href="#features" class="hover:text-blue-600 transition-colors">{{ t('navFeatures') }}</a>
          <a href="#how-to-book" class="hover:text-blue-600 transition-colors">{{ t('navHowToBook') }}</a>
          <a href="#rooms" class="hover:text-blue-600 transition-colors">{{ t('navRooms') }}</a>
          <a href="#faq" class="hover:text-blue-600 transition-colors">{{ t('navFAQ') }}</a>
          <a href="#contact" class="hover:text-blue-600 transition-colors">{{ t('navContact') }}</a>
        </div>

        <div class="flex items-center gap-4">
          <button @click="toggleLang" class="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-5 py-2.5 rounded-full font-bold transition-colors shadow-sm">
            🌐 {{ lang === 'en' ? '中文' : 'EN' }}
          </button>
        </div>
      </div>
    </nav>

    <header id="home" class="relative flex items-center justify-center h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px]"></div>
      
      <div class="relative z-10 text-center px-6 max-w-5xl mt-16">
        <h1 class="text-6xl md:text-8xl font-black mb-6 tracking-tight leading-[1.1]">
          {{ t('heroTitle1') }}<br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300">{{ t('heroTitle2') }}</span>
        </h1>
        <p class="text-xl md:text-2xl mb-12 text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
          {{ t('heroSub') }}
        </p>
        <div class="flex justify-center gap-4">
          <a href="#rooms" class="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-slate-900 bg-white rounded-full overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-105">
            <span class="relative z-10">{{ t('viewRooms') }}</span>
            <div class="absolute inset-0 h-full w-full bg-gradient-to-r from-slate-100 to-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </header>

    <section id="features" class="py-32 bg-white relative">
      <div class="max-w-[90%] lg:max-w-7xl mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-black mb-4 text-slate-900 tracking-tight">{{ t('whyChoose') }}</h2>
        <p class="text-slate-500 text-lg mb-16 max-w-2xl mx-auto">{{ t('featuresSubtitle') }}</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="p-8 rounded-[2rem] bg-gradient-to-b from-slate-50 to-white border border-slate-100 hover:border-blue-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(59,130,246,0.1)] transition-all duration-500 transform hover:-translate-y-2 text-left group">
            <div class="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">🔐</div>
            <h3 class="text-xl font-bold mb-3 text-slate-800">{{ t('feat1Title') }}</h3>
            <p class="text-slate-500 leading-relaxed">{{ t('feat1Desc') }}</p>
          </div>
          <div class="p-8 rounded-[2rem] bg-gradient-to-b from-slate-50 to-white border border-slate-100 hover:border-emerald-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(16,185,129,0.1)] transition-all duration-500 transform hover:-translate-y-2 text-left group">
            <div class="flex gap-2 mb-6 h-16 items-center group-hover:scale-110 transition-transform duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Alipay_logo.svg" class="h-8" alt="Alipay">
              <span class="text-slate-300 font-light">|</span>
              <img src="https://upload.wikimedia.org/wikipedia/en/b/ba/WeChat_Pay.png" class="h-8" alt="WeChat Pay">
            </div>
            <h3 class="text-xl font-bold mb-3 text-slate-800">{{ t('feat2Title') }}</h3>
            <p class="text-slate-500 leading-relaxed">{{ t('feat2Desc') }}</p>
          </div>
          <div class="p-8 rounded-[2rem] bg-gradient-to-b from-slate-50 to-white border border-slate-100 hover:border-purple-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(139,92,246,0.1)] transition-all duration-500 transform hover:-translate-y-2 text-left group">
            <div class="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">🚀</div>
            <h3 class="text-xl font-bold mb-3 text-slate-800">{{ t('feat3Title') }}</h3>
            <p class="text-slate-500 leading-relaxed">{{ t('feat3Desc') }}</p>
          </div>
          <div class="p-8 rounded-[2rem] bg-gradient-to-b from-slate-50 to-white border border-slate-100 hover:border-cyan-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(6,182,212,0.1)] transition-all duration-500 transform hover:-translate-y-2 text-left group">
            <div class="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">✨</div>
            <h3 class="text-xl font-bold mb-3 text-slate-800">{{ t('feat4Title') }}</h3>
            <p class="text-slate-500 leading-relaxed">{{ t('feat4Desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="how-to-book" class="py-32 relative text-white bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop')] bg-fixed bg-center bg-cover">
      <div class="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"></div>
      
      <div class="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 class="text-4xl md:text-5xl font-black mb-16 tracking-tight text-white drop-shadow-lg">{{ t('howToBookTitle') }}</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="flex flex-col items-center bg-white/10 p-8 rounded-3xl border border-white/20 backdrop-blur-md hover:-translate-y-2 transition-transform duration-300">
            <div class="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-black mb-6 shadow-xl">1</div>
            <h3 class="text-2xl font-bold mb-3">{{ t('step1Title') }}</h3>
            <p class="text-blue-100/80 leading-relaxed">{{ t('step1Desc') }}</p>
          </div>
          <div class="flex flex-col items-center bg-white/10 p-8 rounded-3xl border border-white/20 backdrop-blur-md hover:-translate-y-2 transition-transform duration-300">
            <div class="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl font-black mb-6 shadow-xl">2</div>
            <h3 class="text-2xl font-bold mb-3">{{ t('step2Title') }}</h3>
            <p class="text-blue-100/80 leading-relaxed">{{ t('step2Desc') }}</p>
          </div>
          <div class="flex flex-col items-center bg-white/10 p-8 rounded-3xl border border-white/20 backdrop-blur-md hover:-translate-y-2 transition-transform duration-300">
            <div class="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center text-2xl font-black mb-6 shadow-xl">3</div>
            <h3 class="text-2xl font-bold mb-3">{{ t('step3Title') }}</h3>
            <p class="text-blue-100/80 leading-relaxed">{{ t('step3Desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="rooms" class="py-32 bg-slate-50/50">
      <div class="max-w-[95%] 2xl:max-w-[1600px] mx-auto px-4 lg:px-8">
        
        <div class="text-center mb-20">
          <h2 class="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">{{ t('availableRooms') }}</h2>
          <p class="text-slate-500 text-lg max-w-3xl mx-auto">{{ t('roomSubtitle') }}</p>
        </div>
        
        <div v-if="loading" class="flex flex-col justify-center items-center py-20">
          <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mb-4"></div>
          <p class="text-slate-500 font-medium">{{ t('loading') }}</p>
        </div>
        
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          
          <div v-for="room in rooms.slice(0, 4)" :key="room.id" class="bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgb(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.1)] transition-all duration-500 group flex flex-col border border-slate-100">
            
            <div @click="openGalleryModal(room)" class="h-72 bg-slate-200 relative overflow-hidden cursor-pointer">
              <img :src="room.type === 'One-Bedroom' ? 'https://images.unsplash.com/photo-1502672260266-1c1de2c1b329?w=800&auto=format&fit=crop' : 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop'" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" alt="Apartment" />
              
              <div class="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm z-20">
                <span class="bg-white/20 text-white font-bold px-6 py-3 rounded-full border border-white/50 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  📸 {{ t('viewPhotosVideo') }}
                </span>
              </div>
              
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 z-10 pointer-events-none"></div>
              
              <div class="absolute top-5 right-5 z-10 pointer-events-none">
                <span :class="room.status === 'Available' ? 'bg-emerald-500/90' : 'bg-rose-500/90'" class="text-white text-xs font-black tracking-wide px-4 py-2 rounded-full shadow-lg backdrop-blur-md">
                  {{ room.status === 'Available' ? t('available') : t('occupied') }}
                </span>
              </div>

              <div class="absolute bottom-5 left-5 text-white pr-4 z-10 pointer-events-none">
                <p class="text-xs font-bold uppercase tracking-widest text-blue-300 mb-1 drop-shadow-md">{{ getRoomTypeLabel(room.type) }}</p>
                <h2 class="text-3xl font-black drop-shadow-lg">{{ t('roomWord') }} {{ room.room_number }}</h2>
              </div>
            </div>

            <div class="p-8 flex-1 flex flex-col bg-white">
              <div class="mb-6 text-xs text-slate-600 font-medium flex flex-wrap gap-2">
                <span class="bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-xl">🍳 {{ t('kitchen') }}</span>
                <span class="bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-xl">📺 {{ t('tv') }}</span>
                <span class="bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-xl">🧺 {{ t('washer') }}</span>
              </div>

              <div class="space-y-3 mb-8 mt-auto">
                <div class="flex justify-between items-center border-b border-slate-50 pb-2">
                  <span class="text-slate-400 font-medium text-sm">{{ t('daily') }}</span>
                  <span class="text-slate-700 font-bold">¥{{ room.daily_rate }}</span>
                </div>
                <div class="flex justify-between items-center border-b border-slate-50 pb-2">
                  <span class="text-slate-400 font-medium text-sm">{{ t('weekly') }}</span>
                  <span class="text-slate-700 font-bold">¥{{ room.weekly_rate }}</span>
                </div>
                <div class="flex justify-between items-center pt-1 bg-blue-50/50 p-3 rounded-2xl">
                  <span class="text-blue-600 font-bold text-sm">{{ t('monthly') }}</span>
                  <span class="text-blue-700 font-black text-2xl tracking-tight">¥{{ room.monthly_rate }}</span>
                </div>
              </div>
              
              <div class="mt-2">
                <button v-if="room.status === 'Available'"
                  @click="openBookingModal(room)"
                  class="w-full font-bold py-4 px-4 rounded-2xl transition-all duration-300 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-blue-600 hover:to-blue-500 text-white shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1">
                  {{ t('bookNow') }}
                </button>
                <div v-else class="text-center bg-slate-50 border border-slate-100 rounded-2xl py-3.5 px-4">
                  <p class="text-slate-400 text-sm font-medium">{{ t('availableFrom') }}:</p>
                  <p class="text-rose-500 font-black mt-0.5">{{ room.available_from || 'TBD' }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="faq" class="py-24 bg-white relative">
        <div class="max-w-4xl mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">{{ t('faqTitle') }}</h2>
                <p class="text-slate-500 text-lg">{{ t('faqSubtitle') }}</p>
            </div>

            <div class="space-y-6">
                <div class="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow">
                    <h3 class="text-xl font-bold text-slate-800 mb-2">{{ t('faq1Q') }}</h3>
                    <p class="text-slate-600">{{ t('faq1A') }}</p>
                </div>
                <div class="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow">
                    <h3 class="text-xl font-bold text-slate-800 mb-2">{{ t('faq2Q') }}</h3>
                    <p class="text-slate-600">{{ t('faq2A') }}</p>
                </div>
                <div class="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow">
                    <h3 class="text-xl font-bold text-slate-800 mb-2">{{ t('faq3Q') }}</h3>
                    <p class="text-slate-600">{{ t('faq3A') }}</p>
                </div>
            </div>
        </div>
    </section>

    <footer id="contact" class="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          <div class="md:col-span-4">
            <h3 class="text-3xl font-black text-white mb-4 tracking-tight">Illuz<span class="text-blue-500">Home</span></h3>
            <p class="text-slate-500 leading-relaxed mb-6">
              {{ t('footerDesc') }}
            </p>
            <div class="flex gap-4">
               <span class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer border border-slate-700">W</span>
               <span class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer border border-slate-700">C</span>
            </div>
          </div>

          <div class="md:col-span-5 bg-slate-900 p-8 rounded-3xl border border-slate-800">
            <h4 class="text-xl font-bold text-white mb-6">{{ t('contactTitle') }}</h4>
            <div class="space-y-4">
              <div class="flex items-start gap-4">
                <div class="text-blue-500 text-xl mt-1">📍</div>
                <div>
                  <p class="font-bold text-slate-300 mb-1">{{ t('addressLbl') }}</p>
                  <p class="text-slate-500">{{ t('addressVal1') }}</p>
                  <p class="text-slate-500">{{ t('addressVal2') }}</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="text-emerald-500 text-xl mt-1">📞</div>
                <div>
                  <p class="font-bold text-slate-300 mb-1">{{ t('phoneLbl') }}</p>
                  <p class="text-slate-500 font-mono text-lg">+86 13450359031</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="md:col-span-3">
              <h4 class="text-xl font-bold text-white mb-6">{{ t('legalTitle') }}</h4>
              <ul class="space-y-3">
                  <li><button @click.prevent="openLegalModal('terms')" class="hover:text-blue-400 transition-colors text-left">{{ t('termsTitle') }}</button></li>
                  <li><button @click.prevent="openLegalModal('privacy')" class="hover:text-blue-400 transition-colors text-left">{{ t('privacyTitle') }}</button></li>
                  <li><button @click.prevent="openLegalModal('cancel')" class="hover:text-blue-400 transition-colors text-left">{{ t('cancelTitle') }}</button></li>
              </ul>
          </div>
        </div>
        
        <div class="text-center pt-8 border-t border-slate-800/50 text-sm">
          <p>&copy; 2026 Illuz Home Guangzhou. {{ t('rights') }}</p>
        </div>
      </div>
    </footer>

    <div v-if="showGalleryModal" class="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-md overflow-y-auto">
      <div class="bg-white rounded-[2rem] w-full max-w-4xl overflow-hidden shadow-2xl animate-[fadeIn_0.3s_ease-out] my-8 flex flex-col">
        
        <div class="bg-slate-900 p-6 flex justify-between items-center text-white">
          <div>
            <h3 class="text-2xl font-black">{{ t('roomWord') }} {{ selectedGalleryRoom.room_number }} Gallery</h3>
            <p class="text-blue-300 text-sm">{{ getRoomTypeLabel(selectedGalleryRoom.type) }}</p>
          </div>
          <button @click="closeGalleryModal" class="text-slate-400 hover:text-rose-500 text-3xl transition-colors">&times;</button>
        </div>

        <div class="p-6 bg-slate-50 overflow-y-auto max-h-[70vh]">
          <div class="mb-6 rounded-2xl overflow-hidden shadow-md bg-black relative aspect-video">
             <video class="w-full h-full object-cover" controls autoplay muted loop>
                <source :src="selectedGalleryRoom.video || 'https://www.w3schools.com/html/mov_bbb.mp4'" type="video/mp4">
                Your browser does not support HTML video.
             </video>
             <div class="absolute top-4 left-4 bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
               <span class="w-2 h-2 rounded-full bg-white animate-pulse"></span> Room Tour
             </div>
          </div>

          <h4 class="text-lg font-bold text-slate-800 mb-4 border-b pb-2">Interior Photos</h4>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
             <img v-for="(img, idx) in (selectedGalleryRoom.images || defaultImages)" :key="idx" :src="img" class="w-full h-32 md:h-40 object-cover rounded-xl shadow-sm hover:scale-[1.02] transition-transform cursor-pointer border border-slate-200" alt="Room Interior">
          </div>
        </div>

        <div class="p-6 bg-white border-t border-slate-100 flex justify-between items-center">
          <div class="text-slate-600 font-medium">
             {{ t('monthly') }}: <span class="text-2xl font-black text-blue-600">¥{{ selectedGalleryRoom.monthly_rate }}</span>
          </div>
          <button v-if="selectedGalleryRoom.status === 'Available'" @click="bookFromGallery" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-lg shadow-blue-500/30">
            {{ t('bookNow') }}
          </button>
          <span v-else class="text-rose-500 font-bold bg-rose-50 px-4 py-2 rounded-lg">{{ t('notAvailable') }}</span>
        </div>
      </div>
    </div>

    <div v-if="showLegalModal" class="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div class="bg-white rounded-[2rem] w-full max-w-2xl overflow-hidden shadow-2xl animate-[fadeIn_0.3s_ease-out] my-8 flex flex-col max-h-[85vh]">
        <div class="bg-slate-100 p-6 border-b border-slate-200 flex justify-between items-center">
          <h3 class="text-2xl font-black text-slate-800">{{ t(currentLegalType + 'Title') }}</h3>
          <button @click="showLegalModal = false" class="text-slate-400 hover:text-rose-500 text-3xl font-light transition-colors">&times;</button>
        </div>
        <div class="p-8 overflow-y-auto text-slate-600 leading-relaxed space-y-4" v-html="t(currentLegalType + 'Content')">
        </div>
        <div class="p-6 bg-slate-50 border-t border-slate-100 text-right">
          <button @click="showLegalModal = false" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-8 rounded-xl transition-colors">Close</button>
        </div>
      </div>
    </div>

    <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div class="bg-white rounded-[2rem] w-full max-w-lg overflow-hidden shadow-2xl animate-[fadeIn_0.3s_ease-out] my-8">
        
        <div class="bg-gradient-to-r from-slate-900 to-slate-800 p-8 text-white flex justify-between items-center relative overflow-hidden">
          <div class="absolute right-0 top-0 opacity-10 text-9xl leading-none font-black translate-x-1/4 -translate-y-1/4">{{ selectedRoom.room_number }}</div>
          <div class="relative z-10">
            <h3 class="text-3xl font-black tracking-tight">{{ t('modalTitle') }}</h3>
            <p class="text-blue-200 text-sm mt-2 font-medium">{{ t('roomWord') }} {{ selectedRoom.room_number }} • {{ getRoomTypeLabel(selectedRoom.type) }}</p>
          </div>
          <button @click="closeModal" class="relative z-10 text-slate-400 hover:text-white text-4xl font-light transition-colors">&times;</button>
        </div>

        <div class="p-8">
          <form @submit.prevent="submitBooking" class="space-y-5">
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-1.5">{{ t('fullName') }} <span class="text-rose-500">*</span></label>
                <input type="text" v-model="formData.name" required class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white outline-none transition-all">
              </div>
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-1.5">{{ t('emailAddress') }} <span class="text-rose-500">*</span></label>
                <input type="email" v-model="formData.email" required placeholder="example@email.com" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white outline-none transition-all">
              </div>
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-1.5">{{ t('passportId') }} <span class="text-rose-500">*</span></label>
                <input type="text" v-model="formData.passport" required class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white outline-none transition-all">
              </div>
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-1.5">{{ t('contactInfo') }} <span class="text-slate-400 font-normal">(WeChat / Phone)</span></label>
                <input type="text" v-model="formData.contact" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white outline-none transition-all">
              </div>
            </div>

            <hr class="my-6 border-slate-100">

            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-1.5">{{ t('checkIn') }} <span class="text-rose-500">*</span></label>
                <input type="date" v-model="formData.checkIn" required class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 focus:ring-2 focus:ring-blue-500 outline-none transition-all">
              </div>
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-1.5">{{ t('planType') }}</label>
                <select v-model="formData.plan" @change="calculateTotal" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 focus:ring-2 focus:ring-blue-500 outline-none transition-all cursor-pointer">
                  <option value="daily">{{ t('daily') }} (¥{{ selectedRoom.daily_rate }})</option>
                  <option value="weekly">{{ t('weekly') }} (¥{{ selectedRoom.weekly_rate }})</option>
                  <option value="monthly">{{ t('monthly') }} (¥{{ selectedRoom.monthly_rate }})</option>
                </select>
              </div>
            </div>

            <div class="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-2xl flex justify-between items-center border border-blue-100 shadow-inner">
              <span class="font-bold text-slate-700">{{ t('totalAmount') }}:</span>
              <span class="text-3xl font-black text-blue-700 tracking-tight">¥{{ calculatedTotal }}</span>
            </div>

            <button type="submit" :disabled="isSubmitting" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl mt-6 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed">
              {{ isSubmitting ? t('sending') : t('confirmBooking') }}
            </button>
            
          </form>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// --- LANGUAGE LOGIC & DICTIONARY ---
const lang = ref('en');
const toggleLang = () => { lang.value = lang.value === 'en' ? 'zh' : 'en'; };

const dict = {
  en: {
    navHome: "Home", navFeatures: "Features", navHowToBook: "How to Book", navRooms: "Rooms", navFAQ: "FAQ", navContact: "Contact",
    heroTitle1: "Elevated Living,", heroTitle2: "Your Comfort in China.",
    heroSub: "Experience premium seamless living in Guangzhou with smart access, high-speed internet, and flawless digital payments.",
    viewRooms: "Explore Apartments", whyChoose: "Why Choose Us?", featuresSubtitle: "We provide everything you need for a stress-free and luxurious stay.",
    feat1Title: "Smart Security", feat1Desc: "Face ID entry, smart locks, and automated PSB (Police) registration support.",
    feat2Title: "Seamless Payments", feat2Desc: "100% cashless. Pay rent and utilities instantly using WeChat Pay and Alipay.",
    feat3Title: "Gigabit Internet", feat3Desc: "Dedicated fiber-optic network in every room, optimized for international business.",
    feat4Title: "Housekeeping", feat4Desc: "Complimentary weekly cleaning and maintenance to keep your space spotless and fresh.",
    
    howToBookTitle: "How to Book Your Stay",
    step1Title: "Select Your Space", step1Desc: "Browse our premium Studio Rooms and One-Bedroom Apartments to find your perfect fit.",
    step2Title: "Submit Details", step2Desc: "Click 'Reserve Now', enter your basic information, passport details, and email address.",
    step3Title: "Confirmation", step3Desc: "Receive an instant email confirmation with your booking details and payment instructions.",
    
    availableRooms: "Our Apartments", roomSubtitle: "Discover our official Studio Rooms and One-Bedroom Apartments designed for your ultimate comfort.",
    loading: "Preparing your experience...", error: "Failed to fetch data.",
    available: "Available", occupied: "Occupied", availableFrom: "Available From",
    roomWord: "Apt", studio: "Studio Room", oneBed: "One-Bedroom Apartment",
    kitchen: "Kitchenette", tv: "Smart TV", washer: "Washer", furnished: "Furnished",
    daily: "Daily", weekly: "Weekly", monthly: "Monthly",
    notAvailable: "Currently Occupied", bookNow: "Reserve Now", viewPhotosVideo: "View Photos & Video", rights: "All rights reserved.",
    
    faqTitle: "Frequently Asked Questions", faqSubtitle: "Find answers to the most common questions regarding your stay.",
    faq1Q: "Do you provide Police Registration (PSB) support?", faq1A: "Yes. Registration with the local PSB is required for foreign nationals within 24 hours of arrival. We provide all necessary documentation to facilitate this process.",
    faq2Q: "What payment methods do you accept?", faq2A: "We operate a 100% cashless environment. We currently accept WeChat Pay and Alipay for all rent, deposit, and utility transactions.",
    faq3Q: "Are utilities included in the monthly rent?", faq3A: "High-speed internet is included. Water and electricity are metered separately and billed monthly based on your individual usage.",

    footerDesc: "Your premium choice for modern, hassle-free living in the heart of Guangzhou. Tailored for international professionals and travelers.",
    contactTitle: "Official Location & Contact",
    addressLbl: "Address:", addressVal1: "Sanyuanli Road 1181, Guangzhou City", addressVal2: "Guangdong Province, China",
    phoneLbl: "Phone / WeChat:",
    legalTitle: "Legal & Policies", 
    termsTitle: "Terms of Service", privacyTitle: "Privacy Policy", cancelTitle: "Cancellation Policy",

    termsContent: "<strong>1. Identification:</strong> Valid passport or ID is strictly required prior to check-in for mandatory Police (PSB) registration.<br><br><strong>2. House Rules:</strong> Smoking indoors, keeping pets without prior approval, and any illegal activities are strictly prohibited. Violation will result in immediate termination of the contract without refund.<br><br><strong>3. Payment & Deposit:</strong> Full payment and a security deposit are required before receiving access codes. Deposits are refunded within 3 days of checkout after room inspection.",
    privacyContent: "<strong>1. Data Collection:</strong> We collect your personal info (Name, Passport, Email, Contact) solely for booking processing, building access, and mandatory Chinese PSB registration.<br><br><strong>2. Data Usage:</strong> Your data is stored securely and is never shared with unauthorized third parties or used for marketing without your consent.<br><br><strong>3. Security:</strong> Our premises are equipped with CCTV in public areas for your safety. Private rooms are completely unmonitored.",
    cancelContent: "<strong>1. Free Cancellation:</strong> Guests may cancel free of charge up to 48 hours before the scheduled check-in date.<br><br><strong>2. Late Cancellation:</strong> Cancellations made within 48 hours of check-in will incur a penalty equivalent to one night's stay.<br><br><strong>3. Early Departure:</strong> For monthly rentals, leaving before the contract ends requires a 15-day notice, otherwise part of the deposit may be withheld.",

    modalTitle: "Secure Your Stay", fullName: "Full Name", emailAddress: "Email Address", passportId: "Passport / ID Number",
    contactInfo: "Contact Info", checkIn: "Check-in Date", planType: "Duration",
    totalAmount: "Total to Pay", confirmBooking: "Confirm Booking & Pay", sending: "Sending Email..."
  },
  zh: {
    navHome: "首页", navFeatures: "设施", navHowToBook: "预订流程", navRooms: "房间", navFAQ: "常见问题", navContact: "联系我们",
    heroTitle1: "卓越生活，", heroTitle2: "您在广州的舒适家园。",
    heroSub: "体验优质的无缝生活，为您量身定制的智能门禁、高速网络和便捷数字支付。",
    viewRooms: "探索公寓", whyChoose: "为什么选择我们？", featuresSubtitle: "我们提供您度过无忧奢华住宿所需的一切。",
    feat1Title: "智能安防", feat1Desc: "人脸识别、智能门锁以及自动公安局（PSB）登记支持，安全无忧。",
    feat2Title: "无缝支付", feat2Desc: "100%无现金化。使用微信支付和支付宝即时支付租金和水电费。",
    feat3Title: "千兆网络", feat3Desc: "每个房间均配备专用光纤网络，全面优化国内外商业办公需求。",
    feat4Title: "定期保洁", feat4Desc: "提供免费的每周清洁和日常维护服务，让您的居住环境保持整洁清新。",
    
    howToBookTitle: "如何预订您的住宿",
    step1Title: "选择您的空间", step1Desc: "浏览我们优质的单间公寓和一室一厅公寓，找到最适合您的房型。",
    step2Title: "提交信息", step2Desc: "点击“立即预订”，输入您的基本信息、护照详情和电子邮箱。",
    step3Title: "确认预订", step3Desc: "立即收到包含预订详情和付款说明的电子邮件确认。",

    availableRooms: "我们的公寓", roomSubtitle: "探索我们为您精心打造的高端单间公寓（Studio）和一室一厅公寓（One-Bedroom）。",
    loading: "正在准备您的体验...", error: "获取数据失败。",
    available: "可用", occupied: "已满", availableFrom: "可入住日期",
    roomWord: "公寓", studio: "单间公寓 (Studio)", oneBed: "一室一厅公寓 (1-Bedroom)",
    kitchen: "小厨房", tv: "智能电视", washer: "洗衣机",
    daily: "日租金", weekly: "周租金", monthly: "月租金",
    notAvailable: "当前已满", bookNow: "立即预订", viewPhotosVideo: "查看照片和视频", rights: "版权所有。",
    
    faqTitle: "常见问题解答", faqSubtitle: "查找有关您住宿的最常见问题的答案。",
    faq1Q: "你们提供公安局（PSB）登记协助吗？", faq1A: "是的。外籍人士需在抵达后24小时内到当地公安局登记。我们将提供所有必要的文件以协助此过程。",
    faq2Q: "你们接受哪些付款方式？", faq2A: "我们实行100%无现金环境。我们目前接受使用微信支付和支付宝进行所有租金、押金和水电费交易。",
    faq3Q: "水电费包含在月租金中吗？", faq3A: "高速网络包含在内。水费和电费单独计量，根据您的个人用量每月结算。",

    footerDesc: "您在广州市中心享受现代、无忧生活的优质选择。专为国际专业人士和旅客量身定制。",
    contactTitle: "官方位置与联系方式",
    addressLbl: "地址：", addressVal1: "中国广东省广州市", addressVal2: "三元里大道1181号",
    phoneLbl: "电话 / 微信：",
    legalTitle: "法律与政策", 
    termsTitle: "服务条款", privacyTitle: "隐私政策", cancelTitle: "取消政策",

    termsContent: "<strong>1. 身份证明：</strong> 入住前必须提供有效的护照或身份证，用于强制性的公安局（PSB）登记。<br><br><strong>2. 房屋守则：</strong> 严禁室内吸烟、未经批准饲养宠物以及任何非法活动。违者将立即终止合同且不予退款。<br><br><strong>3. 付款与押金：</strong> 在获取门禁密码前需全额付款并交纳押金。退房并查房后3天内退还押金。",
    privacyContent: "<strong>1. 数据收集：</strong> 我们收集您的个人信息（姓名、护照、电子邮箱、联系方式）仅用于处理预订、门禁授权及中国公安局强制登记。<br><br><strong>2. 数据使用：</strong> 您的数据将被安全存储，未经您同意，绝不会与未经授权的第三方共享或用于营销。<br><br><strong>3. 安全：</strong> 为了您的安全，我们的公共区域配备了闭路电视监控。私人房间内绝对没有监控。",
    cancelContent: "<strong>1. 免费取消：</strong> 客人可在预定入住日期前48小时免费取消。<br><br><strong>2. 逾期取消：</strong> 在入住前48小时内取消预订，将收取相当于一晚住宿费的违约金。<br><br><strong>3. 提前退房：</strong> 对于月租客，如在合同结束前退房，需提前15天通知，否则可能会扣留部分押金。",

    modalTitle: "确认您的住宿", fullName: "全名", emailAddress: "电子邮箱", passportId: "护照 / 身份证号",
    contactInfo: "联系方式", checkIn: "入住日期", planType: "住宿时长",
    totalAmount: "需付总额", confirmBooking: "确认预订并付款", sending: "正在发送邮件..."
  }
};

const t = (key) => dict[lang.value][key] || key;
const getRoomTypeLabel = (type) => {
  if (type === 'Studio') return t('studio');
  if (type === 'One-Bedroom') return t('oneBed');
  return t('studio'); 
};

// --- LEGAL MODAL LOGIC ---
const showLegalModal = ref(false);
const currentLegalType = ref('terms');

const openLegalModal = (type) => {
  currentLegalType.value = type;
  showLegalModal.value = true;
};

// --- GALLERY & VIDEO MODAL LOGIC ---
const showGalleryModal = ref(false);
const selectedGalleryRoom = ref(null);

// Default images incase backend doesn't send array of images
const defaultImages = [
  'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&auto=format&fit=crop'
];

const openGalleryModal = (room) => {
  selectedGalleryRoom.value = room;
  showGalleryModal.value = true;
};

const closeGalleryModal = () => {
  showGalleryModal.value = false;
  selectedGalleryRoom.value = null;
};

// --- DATA FETCHING & SAMPLE DATA ---
const rooms = ref([]);
const loading = ref(true);

const sampleBachelorRooms = [
  { id: 1, room_number: 'B-101', type: 'Studio', status: 'Available', daily_rate: 180, weekly_rate: 1100, monthly_rate: 4200, available_from: null },
  { id: 2, room_number: 'B-102', type: 'Studio', status: 'Occupied', daily_rate: 190, weekly_rate: 1150, monthly_rate: 4300, available_from: '2026-05-15' },
  { id: 3, room_number: 'A-201', type: 'One-Bedroom', status: 'Available', daily_rate: 250, weekly_rate: 1500, monthly_rate: 5500, available_from: null },
  { id: 4, room_number: 'A-202', type: 'One-Bedroom', status: 'Occupied', daily_rate: 260, weekly_rate: 1550, monthly_rate: 5600, available_from: '2026-06-01' },
];

const fetchRooms = async () => {
  try {
    const response = await axios.get('/api/rooms');
    if (response.data && response.data.length > 0) {
      rooms.value = response.data;
    } else {
      rooms.value = sampleBachelorRooms;
    }
  } catch (err) {
    console.warn("Backend haijapatikana, tunatumia Sample Data.");
    rooms.value = sampleBachelorRooms;
  } finally {
    loading.value = false;
  }
};

onMounted(() => { fetchRooms(); });

// --- BOOKING LOGIC ---
const isModalOpen = ref(false);
const selectedRoom = ref(null);
const calculatedTotal = ref(0);
const isSubmitting = ref(false);

const formData = ref({
  name: '', email: '', passport: '', contact: '',
  checkIn: '', plan: 'daily'
});

const openBookingModal = (room) => {
  selectedRoom.value = room;
  formData.value.plan = 'daily';
  calculatedTotal.value = room.daily_rate;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedRoom.value = null;
  formData.value = { name: '', email: '', passport: '', contact: '', checkIn: '', plan: 'daily' };
};

// Ikiwa mtu yupo kwenye Gallery Modal na akabonyeza Book Now
const bookFromGallery = () => {
  const roomToBook = selectedGalleryRoom.value;
  closeGalleryModal(); // Funga picha/video
  openBookingModal(roomToBook); // Fungua form
};

const calculateTotal = () => {
  if (!selectedRoom.value) return;
  if (formData.value.plan === 'daily') calculatedTotal.value = selectedRoom.value.daily_rate;
  else if (formData.value.plan === 'weekly') calculatedTotal.value = selectedRoom.value.weekly_rate;
  else if (formData.value.plan === 'monthly') calculatedTotal.value = selectedRoom.value.monthly_rate;
};

const submitBooking = async () => {
  isSubmitting.value = true;
  
  try {
    const response = await axios.post('/api/bookings', {
      name: formData.value.name,
      email: formData.value.email,
      passport: formData.value.passport,
      contact: formData.value.contact,
      checkIn: formData.value.checkIn,
      plan: formData.value.plan,
      room_number: selectedRoom.value.room_number,
      totalAmount: calculatedTotal.value
    });

    if (response.data.success) {
      alert(`Booking Confirmed for ${formData.value.name}! \nA confirmation email has been sent to ${formData.value.email}`);
      closeModal();
    }
  } catch (error) {
    alert('Oops! Something went wrong while sending the booking. Please try again.');
    console.error(error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style>
html { scroll-behavior: smooth; }
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
</style>