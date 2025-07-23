# 🖼️ Pinterest Clone (Node.js + Express + MongoDB)

This is a Pinterest-style web application built using **Node.js**, **Express**, **MongoDB**, and **EJS**. It includes features like user registration and login with **Passport.js**, profile image uploads and post creation using **Multer**, and a dynamic UI powered by **Tailwind CSS**. Users can create and view image posts, manage their profiles, and explore a global feed. The project was built for learning purposes to practice backend development, templating, and file handling in a real-world scenario.

---

## 🚀 Features

- ✅ User Registration & Login (Passport.js)
- ✅ Upload Profile Picture
- ✅ Create & View Posts with Images
- ✅ Personalized Profile Page
- ✅ Global Post Feed
- ✅ Tailwind CSS Styling

---

## 📁 Folder Structure

```
/pintrest
│
├── /routes         → Express route handlers
├── /views          → EJS templates
│   ├── /partials   → Header and Footer
├── /uploads        → Uploaded images (via Multer)
├── /models         → Mongoose schemas (User, Post)
├── app.js          → Entry point
└── multer.js       → Multer config for file upload
```

---

## 📌 Notes

- Uploaded images are stored in the `/uploads` folder.
- Tailwind CSS handles all styling through utility classes in the EJS files.
- This project was created purely for educational and portfolio use.

---
