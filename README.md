# Auto-Rent 🏎️

A car rental application built with **Next.js**, **React**, **MUI**, **Supabase**, and **Swiper**.  
Users can browse cars, filter them by price category, view details, log in, and make real reservations stored in Supabase.  
The project fully supports **Jalali (Persian) dates** and provides a modern, responsive UI based on a Figma template.

---

## 🎯 Live Demo  
🔗 https://auto-rent-liart.vercel.app/

## 🚀 Tech Stack

- **Next.js**
- **React**
- **MUI**
- **Swiper**
- **Supabase Auth + Database**
- **Jalali/Persian date utilities**
- Responsive design (mobile → desktop)

---

## ✨ Features

- 🔄 Car availability based on reserved dates 
- 🏷️ Filter based on price category (economic / non-economic)  
- 📄 Full car details page  
- 🔐 **Real login with Supabase Auth**  
- 📝 **Submit and store reservations in Supabase Database**  
- 📅 **Jalali (Persian) date selection**  
- 📱 Responsive UI  
- 🎨 UI inspired by a Figma design template  

---

## 🔒 Authentication (Supabase)

- Email/password login  
- Persistent session handling  
- Access-controlled reservation routes  

---

## 🗄️ Database (Supabase)

Reservations stored with fields:

- `User reference`
- `Car reference`
- `Jalali start & end dates`
- `Total price`
- `Timestamp`  

---

## 💻 Getting Started

```bash
git clone https://github.com/fateme25/auto-rent.git
cd auto-rent
npm install
npm run dev
