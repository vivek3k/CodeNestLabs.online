# 🚀 CodeNest Labs

**CodeNest Labs** is a project-based software development startup that delivers **custom-built projects** tailored to client requirements.  
We specialize in **React applications, Machine Learning, Deep Learning, Full-Stack development, and automation tools**.

This repository contains the **frontend codebase** for the CodeNest Labs website.

---

## 🌐 Live Website
👉 https://codenestlabs.online

---

## 🧩 What We Do
We build projects based on client needs, including:

- React & Frontend Applications  
- Machine Learning Projects  
- Deep Learning Models  
- Full-Stack Web Applications  
- API Development  
- Dashboards & Admin Panels  
- Automation Tools  
- Academic & Custom Project Solutions  

Clients can submit project requests directly through the website.

---

## ✨ Key Features
- Modern, responsive UI
- Project Request & Contact forms
- Zod-based form validation
- Instant Telegram notifications on submission
- Anti-spam protection (honeypot + cooldown)
- Frontend-only architecture (no backend)
- Secure environment variable usage
- Optimized for Vercel deployment

---

## 🛠 Tech Stack
- **Frontend:** React + TypeScript  
- **Build Tool:** Vite  
- **Styling:** Tailwind CSS  
- **UI Components:** shadcn/ui  
- **Validation:** Zod  
- **Notifications:** Telegram Bot API  
- **Deployment:** Vercel  
- **Domain Provider:** Namecheap  

---

## 📬 Form Submission Flow
1. User submits a form (Project Request or Contact)
2. Inputs are validated using Zod
3. Telegram Bot API is triggered from the frontend
4. Admin receives instant notification on Telegram

> ⚠️ This version does not use a backend or database.

---

## 🔐 Environment Variables
Create a `.env` file in the project root (**do not commit this file**):

```env
VITE_TELEGRAM_BOT_TOKEN=your_telegram_bot_token
VITE_TELEGRAM_CHAT_ID=your_telegram_chat_id
