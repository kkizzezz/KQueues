# KIZZEZ'S QUEUE LIST

ระบบเช็คคิวงานวาด (Commission Queue List) สำหรับ KIZZEZ ดึงข้อมูลจาก Google Sheets และแสดงผลแบบ Real-time พร้อมระบบสองภาษา (TH/EN)

## 🌟 ฟีเจอร์หลัก (Features)
- 📊 **Dashboard Stats**: สรุปจำนวนคิวที่กำลังทำ, รอคิว, และเสร็จแล้ว
- 🗂️ **Tabs System**: แยกคิวปัจจุบัน และ ประวัติคิวที่เสร็จสมบูรณ์
- 🌐 **Bilingual (TH/EN)**: รองรับการแสดงผล 2 ภาษา (ไทย/อังกฤษ) เปลี่ยนได้ทันที
- 🔍 **Search & Sort**: ค้นหาชื่อลูกค้า และเรียงลำดับตามวันที่, เดดไลน์, หรือสถานะ
- 📱 **Responsive Design**: รองรับการใช้งานทั้งบนมือถือและคอมพิวเตอร์
- 🔄 **Auto-Sync**: ดึงข้อมูลอัปเดตล่าสุดจาก Google Sheets โดยตรง

## 🚀 วิธีการติดตั้งและรันในเครื่อง (Local Development)

1. ติดตั้ง Node.js (เวอร์ชัน 18 ขึ้นไป)
2. เปิด Terminal ในโฟลเดอร์โปรเจกต์
3. รันคำสั่งติดตั้ง Dependencies:
   ```bash
   npm install
   ```
4. รันเซิร์ฟเวอร์จำลอง:
   ```bash
   npm run dev
   ```

## 🌐 วิธีนำขึ้น GitHub และเปิดใช้งาน GitHub Pages (ฟรี)

โปรเจกต์นี้ตั้งค่า **GitHub Actions** ไว้ให้แล้ว แค่นำโค้ดขึ้น GitHub ก็สามารถออนไลน์เว็บได้เลย!

### ขั้นตอนที่ 1: นำโค้ดขึ้น GitHub
1. สร้าง Repository ใหม่ใน GitHub (ไม่ต้องติ๊ก Add README)
2. เปิด Terminal ในโฟลเดอร์โปรเจกต์นี้และพิมพ์คำสั่ง:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/ชื่อผู้ใช้ของคุณ/ชื่อrepoของคุณ.git
   git push -u origin main
   ```

### ขั้นตอนที่ 2: เปิดใช้งาน GitHub Pages
1. ไปที่ Repository ของคุณใน GitHub
2. ไปที่เมนู **Settings** (รูปฟันเฟืองด้านบน)
3. เลื่อนลงมาที่แถบเมนูด้านซ้าย เลือก **Pages**
4. ในส่วนของ **Build and deployment** > **Source** ให้เลือกเป็น **GitHub Actions**
5. รอประมาณ 1-2 นาที GitHub จะทำการ Build และ Deploy เว็บให้คุณอัตโนมัติ
6. เมื่อเสร็จแล้ว จะมีลิงก์เว็บของคุณปรากฏขึ้นมาที่ด้านบนของหน้า Pages!

---
*พัฒนาด้วย React, Vite, และ Tailwind CSS*
