// backend/server.js
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

// 1. ANZA EXPRESS APP
const app = express();

// 2. MIDDLEWARES (Kuruhusu Frontend kuongea na Backend)
app.use(cors());
app.use(express.json());

// 3. MUUNGANISHO WA DATABASE (NEON POSTGRESQL)
const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false // Lazima iwe hivi kwa Neon
  }
});

// Pima kama Database imeunganishwa kikamilifu
db.connect((err, client, release) => {
  if (err) {
    console.error('❌ Kosa kuunganisha Neon DB:', err.stack);
  } else {
    console.log('🚀 Imeunganishwa na Neon PostgreSQL kikamilifu!');
    release(); // Kuachia connection irudi kwenye pool
  }
});

// ==========================================
// 4. API ROUTES (NJIA ZA DATA)
// ==========================================

// API ya kujaribu kama server inafanya kazi Vercel
app.get('/', (req, res) => {
  res.send('✅ API ya Illuz Home PMS Inafanya Kazi Vizuri Kwenye Vercel!');
});

// ------------------------------------------
// [API 1] Kuvuta Vyumba (Kwa Wateja & Admin)
// ------------------------------------------
app.get('/api/rooms', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM rooms ORDER BY id ASC');
    res.json(result.rows); 
  } catch (err) {
    console.error('❌ Kosa la kuvuta vyumba:', err.message);
    res.status(500).json({ error: 'Imeshindwa kuvuta data kutoka Server' });
  }
});

// ------------------------------------------
// [API 2] Admin Login
// ------------------------------------------
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await db.query(
      'SELECT * FROM admins WHERE username = $1 AND password = $2',
      [username, password]
    );

    if (result.rows.length > 0) {
      res.json({ success: true, message: 'Karibu, Umefanikiwa kuingia!' });
    } else {
      res.status(401).json({ success: false, message: 'Username au Password si sahihi!' });
    }
  } catch (err) {
    console.error('❌ Kosa la Login:', err.message);
    res.status(500).json({ error: 'Server Error' });
  }
});

// ------------------------------------------
// [API 3] API YA KUTUMA BOOKING 
// ------------------------------------------
app.post('/api/bookings', async (req, res) => {
  const { name, email, passport, contact, checkIn, plan, room_number, totalAmount } = req.body;

  try {
    // Hapa Booking inapokelewa (Baadaye utaongeza code za Database au Email kama utataka)
    console.log(`✅ Booking mpya imepokelewa kwa ajili ya: ${email}`);

    res.json({ success: true, message: 'Booking confirmed!' });

  } catch (error) {
    console.error('❌ Kosa la kutuma booking:', error);
    res.status(500).json({ success: false, error: 'Failed to process booking' });
  }
});

// ==========================================
// 5. EXPORT KWA AJILI YA VERCEL (SERVERLESS)
// ==========================================

// Kama tupo kwenye kompyuta yetu (testing) itawasha port 5000
// Lakini kama ipo Vercel, itaacha Vercel ijisimamie yenyewe.
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🔥 Backend inawaka kwenye port ${PORT}`);
    console.log(`🔗 Mfumo upo tayari: http://localhost:${PORT}`);
  });
}

// MUHIMU: Hii inaiambia Vercel kuwa hii ndiyo app inayoendesha API zote
module.exports = app;