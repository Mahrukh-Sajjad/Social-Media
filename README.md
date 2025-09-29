# 🌐 Social Media Application  

This is a **Social Media Web Application** built with **React (frontend)**, **Node.js + Express (backend)**, and **MongoDB (database)**.  
It allows users to register, log in, create posts, and interact with other users. Passwords are securely stored using **bcrypt.js**.  

---

## 🚀 Features  
- 🔐 **User Authentication** (Register & Login)  
- 🔑 **Secure Password Hashing** with `bcrypt.js`
- **upload image and generate caption using AI**
- **display user generated posts**


---

## 🛠️ Tech Stack  

### Frontend  
- React  
- Axios  
- React Router DOM  
- CSS  

### Backend  
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- bcrypt.js  
- Multer (for file uploads like profile pictures / post images)  

---

## 🔒 Password Security with bcrypt.js  

Passwords are **never stored in plain text**. Instead, they are hashed using `bcrypt.js` before saving in the database.  

```js
import bcrypt from "bcrypt";

// Hashing password before saving user
const hashedPassword = await bcrypt.hash(password, 10);

// Comparing password at login
const isMatch = await bcrypt.compare(password, user.password);






