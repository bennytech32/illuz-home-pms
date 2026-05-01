<template>
  <div class="flex h-screen bg-slate-100 font-sans text-slate-900">
    
    <aside class="w-64 bg-slate-900 text-slate-300 flex flex-col shadow-2xl z-20 hidden md:flex">
      <div class="h-20 flex items-center px-8 border-b border-slate-800">
        <h1 class="text-2xl font-black text-white tracking-tight">Illuz<span class="text-blue-500">Admin</span></h1>
      </div>
      
      <nav class="flex-1 px-4 py-8 space-y-2 overflow-y-auto custom-scrollbar">
        <button @click="activeTab = 'dashboard'" :class="activeTab === 'dashboard' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'hover:bg-slate-800 hover:text-white'" class="flex items-center gap-3 px-4 py-3.5 w-full rounded-xl font-bold transition-all text-left">
          <span class="text-xl">📊</span> {{ t('navDashboard') }}
        </button>
        <button @click="activeTab = 'rooms'" :class="activeTab === 'rooms' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'hover:bg-slate-800 hover:text-white'" class="flex items-center gap-3 px-4 py-3.5 w-full rounded-xl font-medium transition-all text-left">
          <span class="text-xl">🚪</span> {{ t('navRooms') }}
        </button>
        <button @click="activeTab = 'bookings'" :class="activeTab === 'bookings' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'hover:bg-slate-800 hover:text-white'" class="flex items-center gap-3 px-4 py-3.5 w-full rounded-xl font-medium transition-all text-left">
          <span class="text-xl">📅</span> {{ t('navBookings') }}
        </button>
        <button @click="activeTab = 'guests'" :class="activeTab === 'guests' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'hover:bg-slate-800 hover:text-white'" class="flex items-center gap-3 px-4 py-3.5 w-full rounded-xl font-medium transition-all text-left">
          <span class="text-xl">👥</span> {{ t('navGuests') }}
        </button>
        
        <div class="pt-4 pb-2">
          <p class="text-xs font-bold text-slate-500 uppercase tracking-wider px-4">{{ t('navManagement') }}</p>
        </div>
        
        <button @click="activeTab = 'finance'" :class="activeTab === 'finance' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30' : 'hover:bg-slate-800 hover:text-white'" class="flex items-center gap-3 px-4 py-3.5 w-full rounded-xl font-medium transition-all text-left">
          <span class="text-xl">💰</span> {{ t('navFinance') }}
        </button>
        <button @click="activeTab = 'settings'" :class="activeTab === 'settings' ? 'bg-slate-700 text-white shadow-lg shadow-slate-900/30' : 'hover:bg-slate-800 hover:text-white'" class="flex items-center gap-3 px-4 py-3.5 w-full rounded-xl font-medium transition-all text-left">
          <span class="text-xl">⚙️</span> {{ t('navSettings') }}
        </button>
      </nav>

      <div class="p-4 border-t border-slate-800">
        <button @click="handleLogout" class="flex items-center justify-center gap-2 px-4 py-3.5 w-full bg-slate-800 hover:bg-rose-500 hover:text-white text-rose-400 rounded-xl font-bold transition-colors">
          <span>🔓</span> {{ t('navLogout') }}
        </button>
      </div>
    </aside>

    <main class="flex-1 flex flex-col h-screen overflow-hidden">
      
      <header class="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 z-10 shadow-sm">
        <h2 class="text-2xl font-bold text-slate-800 capitalize">{{ t(activeTab + 'Title') || t('overview') }}</h2>
        
        <div class="flex items-center gap-6">
          <button @click="toggleLang" class="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg font-bold transition-colors border border-slate-200">
            🌐 {{ lang === 'en' ? '中文' : 'EN' }}
          </button>
          <div class="flex items-center gap-3 border-l border-slate-200 pl-6">
            <div class="text-right hidden sm:block">
              <p class="text-sm font-bold text-slate-900">Admin</p>
              <p class="text-xs text-slate-500">{{ t('sysManager') }}</p>
            </div>
            <div class="w-10 h-10 bg-blue-100 text-blue-600 font-black rounded-full flex items-center justify-center border-2 border-blue-500 shadow-sm">A</div>
          </div>
        </div>
      </header>

      <div class="flex-1 overflow-y-auto p-4 md:p-8 bg-slate-50/50">
        
        <div v-if="activeTab === 'dashboard'" class="animate-[fadeIn_0.3s_ease-out]">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
              <div class="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl">🚪</div>
              <div>
                <p class="text-slate-500 text-sm font-medium">{{ t('totalRooms') }}</p>
                <h3 class="text-2xl font-black text-slate-800">{{ rooms.length }}</h3>
              </div>
            </div>
            <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
              <div class="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl">✅</div>
              <div>
                <p class="text-slate-500 text-sm font-medium">{{ t('availableRooms') }}</p>
                <h3 class="text-2xl font-black text-slate-800">{{ rooms.filter(r => r.status === 'Available').length }}</h3>
              </div>
            </div>
            <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
              <div class="w-14 h-14 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center text-2xl">🛌</div>
              <div>
                <p class="text-slate-500 text-sm font-medium">{{ t('occupiedRooms') }}</p>
                <h3 class="text-2xl font-black text-slate-800">{{ rooms.filter(r => r.status === 'Occupied').length }}</h3>
              </div>
            </div>
            <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
              <div class="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center text-2xl">💰</div>
              <div>
                <p class="text-slate-500 text-sm font-medium">{{ t('monthlyRevenue') }}</p>
                <h3 class="text-2xl font-black text-slate-800">¥12,400</h3>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
            <div class="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h3 class="text-lg font-bold text-slate-800">{{ t('recentBookings') }}</h3>
              <button @click="activeTab = 'bookings'" class="text-blue-600 text-sm font-bold hover:underline bg-blue-50 px-3 py-1.5 rounded-lg">{{ t('viewAll') }}</button>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse">
                <thead>
                  <tr class="bg-white border-b border-slate-100 text-slate-500 text-sm">
                    <th class="p-4 pl-6 font-semibold">{{ t('guestName') }}</th>
                    <th class="p-4 font-semibold">{{ t('thRoom') }}</th>
                    <th class="p-4 font-semibold">{{ t('checkIn') }}</th>
                    <th class="p-4 font-semibold">{{ t('thStatus') }}</th>
                  </tr>
                </thead>
                <tbody class="text-slate-700 text-sm">
                  <tr v-for="b in mockBookings.slice(0,3)" :key="b.id" class="border-b border-slate-50 hover:bg-slate-50/80">
                    <td class="p-4 pl-6 font-bold">{{ b.guest }}</td>
                    <td class="p-4">{{ b.room }}</td>
                    <td class="p-4 text-slate-500">{{ b.date }}</td>
                    <td class="p-4">
                      <span :class="b.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'" class="px-3 py-1 rounded-full text-xs font-bold border">
                        {{ b.status }}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div v-if="activeTab === 'rooms'" class="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden animate-[fadeIn_0.3s_ease-out]">
          <div class="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h3 class="text-xl font-bold text-slate-800">{{ t('manageRooms') }}</h3>
            <button @click="showRoomModal = true" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-bold shadow-md transition-colors text-sm">
              + {{ t('addRoom') }}
            </button>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-white border-b border-slate-100 text-slate-500 text-sm">
                  <th class="p-4 pl-6 font-semibold">{{ t('thRoom') }}</th>
                  <th class="p-4 font-semibold">{{ t('thType') }}</th>
                  <th class="p-4 font-semibold">{{ t('thStatus') }}</th>
                  <th class="p-4 font-semibold">{{ t('thPrice') }}</th>
                  <th class="p-4 pr-6 font-semibold text-right">{{ t('action') }}</th>
                </tr>
              </thead>
              <tbody class="text-slate-700 text-sm">
                <tr v-if="loading" class="text-center"><td colspan="5" class="p-8 text-slate-500">{{ t('loading') }}</td></tr>
                <tr v-for="room in rooms" :key="room.id" class="border-b border-slate-50 hover:bg-slate-50/80">
                  <td class="p-4 pl-6 font-bold text-slate-900">{{ room.room_number }}</td>
                  <td class="p-4 text-slate-600">{{ room.type }}</td>
                  <td class="p-4">
                    <span :class="room.status === 'Available' ? 'bg-emerald-100 text-emerald-700 border-emerald-200' : 'bg-rose-100 text-rose-700 border-rose-200'" class="px-3 py-1 rounded-full text-xs font-bold border">
                      {{ room.status === 'Available' ? t('available') : t('occupied') }}
                    </span>
                  </td>
                  <td class="p-4 font-bold text-slate-800">¥{{ room.daily_rate }} / ¥{{ room.monthly_rate }}</td>
                  <td class="p-4 pr-6 text-right space-x-2">
                    <button class="text-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded-lg font-bold transition-colors">{{ t('edit') }}</button>
                    <button class="text-rose-600 hover:bg-rose-50 px-3 py-1.5 rounded-lg font-bold transition-colors">{{ t('delete') }}</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div v-if="activeTab === 'bookings'" class="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden animate-[fadeIn_0.3s_ease-out]">
          <div class="p-6 border-b border-slate-100 bg-slate-50/50">
            <h3 class="text-xl font-bold text-slate-800">{{ t('allBookings') }}</h3>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-white border-b border-slate-100 text-slate-500 text-sm">
                  <th class="p-4 pl-6 font-semibold">{{ t('guestName') }}</th>
                  <th class="p-4 font-semibold">{{ t('thRoom') }}</th>
                  <th class="p-4 font-semibold">{{ t('checkIn') }}</th>
                  <th class="p-4 font-semibold">{{ t('thStatus') }}</th>
                  <th class="p-4 pr-6 font-semibold text-right">{{ t('action') }}</th>
                </tr>
              </thead>
              <tbody class="text-slate-700 text-sm">
                <tr v-for="b in mockBookings" :key="b.id" class="border-b border-slate-50 hover:bg-slate-50/80">
                  <td class="p-4 pl-6 font-bold">{{ b.guest }}</td>
                  <td class="p-4 text-slate-600">{{ b.room }}</td>
                  <td class="p-4 text-slate-500">{{ b.date }}</td>
                  <td class="p-4">
                    <span :class="b.status === 'Pending' ? 'bg-amber-100 text-amber-700 border-amber-200' : 'bg-emerald-100 text-emerald-700 border-emerald-200'" class="px-3 py-1 rounded-full text-xs font-bold border">
                      {{ b.status }}
                    </span>
                  </td>
                  <td class="p-4 pr-6 text-right space-x-2">
                    <button v-if="b.status === 'Pending'" class="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 px-3 py-1.5 rounded-lg font-bold transition-colors">{{ t('approve') }}</button>
                    <button v-if="b.status === 'Pending'" class="bg-rose-100 text-rose-700 hover:bg-rose-200 px-3 py-1.5 rounded-lg font-bold transition-colors">{{ t('reject') }}</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div v-if="activeTab === 'guests'" class="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden animate-[fadeIn_0.3s_ease-out]">
          <div class="p-6 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
            <h3 class="text-xl font-bold text-slate-800">{{ t('guestRegistry') }}</h3>
            <input type="text" :placeholder="t('searchGuest')" class="bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm outline-none focus:border-blue-500 w-64">
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-white border-b border-slate-100 text-slate-500 text-sm">
                  <th class="p-4 pl-6 font-semibold">{{ t('guestName') }}</th>
                  <th class="p-4 font-semibold">Passport / ID</th>
                  <th class="p-4 font-semibold">Contact</th>
                  <th class="p-4 font-semibold">{{ t('thRoom') }}</th>
                </tr>
              </thead>
              <tbody class="text-slate-700 text-sm">
                <tr v-for="g in mockGuests" :key="g.id" class="border-b border-slate-50 hover:bg-slate-50/80">
                  <td class="p-4 pl-6 font-bold">{{ g.name }}</td>
                  <td class="p-4 text-slate-500">{{ g.passport }}</td>
                  <td class="p-4 text-slate-500">{{ g.contact }}</td>
                  <td class="p-4 font-bold text-blue-600">{{ g.room }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div v-if="activeTab === 'finance'" class="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden animate-[fadeIn_0.3s_ease-out]">
          <div class="p-6 border-b border-slate-100 bg-slate-50/50">
            <h3 class="text-xl font-bold text-slate-800">{{ t('recentTransactions') }}</h3>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-white border-b border-slate-100 text-slate-500 text-sm">
                  <th class="p-4 pl-6 font-semibold">Date</th>
                  <th class="p-4 font-semibold">{{ t('guestName') }}</th>
                  <th class="p-4 font-semibold">Method</th>
                  <th class="p-4 font-semibold">Amount</th>
                  <th class="p-4 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody class="text-slate-700 text-sm">
                <tr v-for="f in mockFinance" :key="f.id" class="border-b border-slate-50 hover:bg-slate-50/80">
                  <td class="p-4 pl-6 text-slate-500">{{ f.date }}</td>
                  <td class="p-4 font-bold">{{ f.guest }}</td>
                  <td class="p-4">
                    <span class="bg-slate-100 text-slate-600 px-3 py-1 rounded-md text-xs font-bold">{{ f.method }}</span>
                  </td>
                  <td class="p-4 font-black text-emerald-600">¥{{ f.amount }}</td>
                  <td class="p-4"><span class="text-emerald-500 font-bold text-xs">✓ Paid</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div v-if="activeTab === 'settings'" class="animate-[fadeIn_0.3s_ease-out]">
          <div class="flex gap-4 mb-6 border-b border-slate-200 pb-2">
             <button @click="settingTab = 'general'" :class="settingTab === 'general' ? 'text-blue-600 border-b-2 border-blue-600 font-bold' : 'text-slate-500 hover:text-slate-800'" class="pb-2 px-2 transition-colors">General Settings</button>
             <button @click="settingTab = 'content'" :class="settingTab === 'content' ? 'text-blue-600 border-b-2 border-blue-600 font-bold' : 'text-slate-500 hover:text-slate-800'" class="pb-2 px-2 transition-colors">Website Content (CMS)</button>
             <button @click="settingTab = 'legal'" :class="settingTab === 'legal' ? 'text-blue-600 border-b-2 border-blue-600 font-bold' : 'text-slate-500 hover:text-slate-800'" class="pb-2 px-2 transition-colors">Legal & Policies</button>
          </div>

          <div v-if="settingTab === 'general'" class="max-w-2xl bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
            <h3 class="text-xl font-bold text-slate-800 mb-6">Account Settings</h3>
            <div class="space-y-6">
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-2">Admin Username</label>
                <input type="text" value="admin" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 outline-none" disabled>
              </div>
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-2">New Password</label>
                <input type="password" placeholder="••••••••" class="w-full bg-white border border-slate-200 rounded-xl p-3 focus:border-blue-500 outline-none">
              </div>
              <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-md">Save Changes</button>
            </div>
          </div>

          <div v-if="settingTab === 'content'" class="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
            <h3 class="text-xl font-bold text-slate-800 mb-6">Edit FAQs</h3>
            <p class="text-sm text-slate-500 mb-6">You can update the Frequently Asked Questions that appear on the landing page here.</p>
            
            <div class="space-y-6 border border-slate-200 p-6 rounded-2xl">
               <h4 class="font-bold text-slate-700">FAQ 1</h4>
               <input type="text" v-model="cmsData.faq1Q" class="w-full bg-white border border-slate-200 rounded-xl p-3 outline-none" placeholder="Question (e.g., Do you provide PSB support?)">
               <textarea v-model="cmsData.faq1A" rows="3" class="w-full bg-white border border-slate-200 rounded-xl p-3 outline-none" placeholder="Answer..."></textarea>
            </div>

            <div class="space-y-6 border border-slate-200 p-6 rounded-2xl mt-4">
               <h4 class="font-bold text-slate-700">FAQ 2</h4>
               <input type="text" v-model="cmsData.faq2Q" class="w-full bg-white border border-slate-200 rounded-xl p-3 outline-none" placeholder="Question...">
               <textarea v-model="cmsData.faq2A" rows="3" class="w-full bg-white border border-slate-200 rounded-xl p-3 outline-none" placeholder="Answer..."></textarea>
            </div>

            <button @click="saveCMSData" class="mt-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-md">Save Content</button>
          </div>

          <div v-if="settingTab === 'legal'" class="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
            <div class="flex justify-between items-center mb-6">
              <h3 class="text-xl font-bold text-slate-800">Edit Legal Documents</h3>
              <select v-model="legalEditLang" class="bg-slate-50 border border-slate-200 rounded-lg p-2 text-sm outline-none font-bold">
                <option value="en">English (EN)</option>
                <option value="zh">Chinese (ZH)</option>
              </select>
            </div>

            <div class="space-y-6">
               <div>
                  <label class="block text-sm font-bold text-slate-700 mb-2">Terms of Service (HTML Allowed)</label>
                  <textarea v-model="legalData[legalEditLang].terms" rows="5" class="w-full bg-white border border-slate-200 rounded-xl p-3 outline-none focus:border-blue-500"></textarea>
               </div>
               <div>
                  <label class="block text-sm font-bold text-slate-700 mb-2">Privacy Policy (HTML Allowed)</label>
                  <textarea v-model="legalData[legalEditLang].privacy" rows="5" class="w-full bg-white border border-slate-200 rounded-xl p-3 outline-none focus:border-blue-500"></textarea>
               </div>
               <div>
                  <label class="block text-sm font-bold text-slate-700 mb-2">Cancellation Policy (HTML Allowed)</label>
                  <textarea v-model="legalData[legalEditLang].cancel" rows="5" class="w-full bg-white border border-slate-200 rounded-xl p-3 outline-none focus:border-blue-500"></textarea>
               </div>

               <button @click="saveLegalData" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-md">Save Policies</button>
            </div>
          </div>

        </div>

      </div>
    </main>

    <div v-if="showRoomModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div class="bg-white rounded-[2rem] w-full max-w-lg overflow-hidden shadow-2xl animate-[fadeIn_0.2s_ease-out] my-8">
        <div class="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <h3 class="text-xl font-bold text-slate-800">{{ t('addRoom') }}</h3>
          <button @click="showRoomModal = false" class="text-slate-400 hover:text-slate-700 text-2xl">&times;</button>
        </div>
        
        <div class="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
          <div class="grid grid-cols-2 gap-4">
             <div>
               <label class="block text-sm font-bold text-slate-700 mb-1">{{ t('thRoom') }} No.</label>
               <input type="text" placeholder="e.g. A-101" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 outline-none">
             </div>
             <div>
               <label class="block text-sm font-bold text-slate-700 mb-1">Room Type</label>
               <select class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 outline-none">
                 <option>Studio</option>
                 <option>One-Bedroom</option>
               </select>
             </div>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-bold text-slate-700 mb-1">Daily Rate (¥)</label>
              <input type="number" placeholder="180" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 outline-none">
            </div>
            <div>
              <label class="block text-sm font-bold text-slate-700 mb-1">Monthly Rate (¥)</label>
              <input type="number" placeholder="4200" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 outline-none">
            </div>
          </div>

          <hr class="border-slate-100 my-4">
          <h4 class="font-bold text-slate-800 text-sm">Media Links</h4>
          <p class="text-xs text-slate-500 mb-2">Paste URL links for main photo and room tour video.</p>

          <div>
            <label class="block text-sm font-bold text-slate-700 mb-1">Main Cover Image URL</label>
            <input type="text" placeholder="https://example.com/image.jpg" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 outline-none">
          </div>
          
          <div>
            <label class="block text-sm font-bold text-slate-700 mb-1">Video Tour URL (MP4)</label>
            <input type="text" placeholder="https://example.com/video.mp4" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 outline-none">
          </div>

          <button @click="showRoomModal = false" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl mt-4 shadow-lg transition-colors">Save Room to Database</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

// --- LANGUAGE LOGIC ---
const lang = ref('en');
const toggleLang = () => { lang.value = lang.value === 'en' ? 'zh' : 'en'; };

const dict = {
  en: {
    navDashboard: "Dashboard", navRooms: "Rooms", navBookings: "Bookings",
    navGuests: "Guests", navManagement: "Management", navFinance: "Finance",
    navSettings: "Settings", navLogout: "Log Out",
    dashboardTitle: "Dashboard Overview", roomsTitle: "Room Management", bookingsTitle: "Bookings Management",
    guestsTitle: "Guest Registry", financeTitle: "Finance & Payments", settingsTitle: "System Settings",
    overview: "Overview", sysManager: "System Manager",
    totalRooms: "Total Rooms", availableRooms: "Available", occupiedRooms: "Occupied", monthlyRevenue: "Revenue",
    recentBookings: "Recent Bookings", liveStatus: "Live Room Status", viewAll: "View All", manageRooms: "Manage Rooms",
    addRoom: "Add Room", edit: "Edit", delete: "Delete", action: "Action",
    allBookings: "All Bookings", approve: "Approve", reject: "Reject", searchGuest: "Search guest name/passport...",
    guestRegistry: "Registered Guests", recentTransactions: "Recent Transactions",
    thRoom: "Room No.", thType: "Type", thStatus: "Status", thPrice: "Price", guestName: "Guest Name", checkIn: "Check-in",
    loading: "Loading data...", available: "Available", occupied: "Occupied",
    logoutConfirm: "Are you sure you want to log out?"
  },
  zh: {
    navDashboard: "仪表板", navRooms: "房间", navBookings: "预订",
    navGuests: "住客", navManagement: "系统管理", navFinance: "财务",
    navSettings: "设置", navLogout: "退出登录",
    dashboardTitle: "仪表板概览", roomsTitle: "房间管理", bookingsTitle: "预订管理",
    guestsTitle: "住客登记", financeTitle: "财务与支付", settingsTitle: "系统设置",
    overview: "概览", sysManager: "系统管理员",
    totalRooms: "总房间数", availableRooms: "可用", occupiedRooms: "已满", monthlyRevenue: "收入",
    recentBookings: "最近预订", liveStatus: "实时状态", viewAll: "查看全部", manageRooms: "管理房间",
    addRoom: "添加房间", edit: "编辑", delete: "删除", action: "操作",
    allBookings: "所有预订", approve: "批准", reject: "拒绝", searchGuest: "搜索姓名/护照...",
    guestRegistry: "已登记住客", recentTransactions: "最近交易",
    thRoom: "房间号", thType: "类型", thStatus: "状态", thPrice: "价格", guestName: "客人姓名", checkIn: "入住日期",
    loading: "正在加载数据...", available: "可用", occupied: "已满",
    logoutConfirm: "您确定要退出登录吗？"
  }
};
const t = (key) => dict[lang.value][key] || key;

// --- STATE ---
const router = useRouter();
const activeTab = ref('dashboard');
const settingTab = ref('general'); // Tab ndogo ndani ya settings
const showRoomModal = ref(false);
const rooms = ref([]);
const loading = ref(true);

// --- CMS & LEGAL STATE (KWA AJILI YA ADMIN KU-EDIT) ---
const cmsData = ref({
   faq1Q: "Do you provide Police Registration (PSB) support?",
   faq1A: "Yes. Registration with the local PSB is required for foreign nationals within 24 hours of arrival. We provide all necessary documentation to facilitate this process.",
   faq2Q: "What payment methods do you accept?",
   faq2A: "We operate a 100% cashless environment. We currently accept WeChat Pay and Alipay for all rent, deposit, and utility transactions."
});

const legalEditLang = ref('en');
const legalData = ref({
   en: {
      terms: "<strong>1. Identification:</strong> Valid passport or ID is strictly required prior to check-in for mandatory Police (PSB) registration.",
      privacy: "<strong>1. Data Collection:</strong> We collect your personal info solely for booking processing and mandatory Chinese PSB registration.",
      cancel: "<strong>1. Free Cancellation:</strong> Guests may cancel free of charge up to 48 hours before the scheduled check-in date."
   },
   zh: {
      terms: "<strong>1. 身份证明：</strong> 入住前必须提供有效的护照或身份证，用于强制性的公安局（PSB）登记。",
      privacy: "<strong>1. 数据收集：</strong> 我们收集您的个人信息仅用于处理预订及中国公安局强制登记。",
      cancel: "<strong>1. 免费取消：</strong> 客人可在预定入住日期前48小时免费取消。"
   }
});

// Functions za kusave data (Kwa sasa zinahifadhi kwenye LocalStorage, baadaye zitapelekwa Database)
const saveCMSData = () => {
   localStorage.setItem('illuz_cms_data', JSON.stringify(cmsData.value));
   alert("Website content saved successfully!");
};

const saveLegalData = () => {
   localStorage.setItem('illuz_legal_data', JSON.stringify(legalData.value));
   alert(`Legal policies for ${legalEditLang.value.toUpperCase()} saved successfully!`);
};


// --- MOCK DATA ---
const mockBookings = ref([
  { id: 1, guest: 'John Doe', room: 'B-101', date: '2026-05-02', status: 'Pending' },
  { id: 2, guest: 'Li Wei', room: 'B-201', date: '2026-05-03', status: 'Approved' },
  { id: 3, guest: 'Sarah Connor', room: 'B-301', date: '2026-05-05', status: 'Pending' }
]);

const mockGuests = ref([
  { id: 1, name: 'Wang Lei', passport: 'E12345678', contact: '+86 138 0013 8000', room: 'B-102' },
  { id: 2, name: 'Alice Smith', passport: 'P98765432', contact: 'alice_wechat', room: 'B-202' }
]);

const mockFinance = ref([
  { id: 1, date: '2026-05-01', guest: 'Wang Lei', method: 'WeChat Pay', amount: 4300 },
  { id: 2, date: '2026-05-01', guest: 'Alice Smith', method: 'Alipay', amount: 4800 },
  { id: 3, date: '2026-04-28', guest: 'Li Wei', method: 'Alipay', amount: 4200 }
]);

// --- API FETCH ---
const fetchRooms = async () => {
  try {
    const res = await axios.get('/api/rooms');
    rooms.value = res.data;
  } catch (error) {
    console.error("Error fetching rooms for admin:", error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
   fetchRooms();
   // Load saved CMS data kama ipo
   const savedCMS = localStorage.getItem('illuz_cms_data');
   if (savedCMS) cmsData.value = JSON.parse(savedCMS);
   
   const savedLegal = localStorage.getItem('illuz_legal_data');
   if (savedLegal) legalData.value = JSON.parse(savedLegal);
});

const handleLogout = () => {
  if (confirm(t('logoutConfirm'))) {
    localStorage.removeItem('isAdminLoggedIn');
    router.push('/login');
  }
};
</script>

<style>
.custom-scrollbar::-webkit-scrollbar { width: 4px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; border-radius: 10px; }
.custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #475569; }

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>