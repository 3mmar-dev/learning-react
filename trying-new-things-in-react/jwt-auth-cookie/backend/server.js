const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const csrf = require("csrf");
const cors = require("cors");
const bcrypt = require("bcrypt"); // لتشفير كلمات المرور

const app = express();

// إعداد المتغيرات البيئية
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

// إعداد CSRF
const csrfTokens = new csrf();

// ميدل وير
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// قاعدة بيانات وهمية للمستخدمين
const users = [];

// إنشاء CSRF Token وإرساله
app.get("/csrf-token", (req, res) => {
  const csrfToken = csrfTokens.create(JWT_SECRET);
  res.cookie("XSRF-TOKEN", csrfToken, {
    httpOnly: false, // يمكن الوصول إليه من الجافاسكريبت
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });
  res.json({ csrfToken });
});

// تسجيل مستخدم جديد
app.post("/register", async (req, res) => {
  const { email, password, csrfToken } = req.body;

  // التحقق من CSRF Token
  if (!csrfTokens.verify(JWT_SECRET, csrfToken)) {
    return res.status(403).json({ message: "Invalid CSRF token" });
  }

  // التحقق من صحة البيانات
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  // التحقق إذا كان البريد الإلكتروني مسجلًا بالفعل
  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    return res.status(409).json({ message: "Email already in use" });
  }

  // تشفير كلمة المرور
  const hashedPassword = await bcrypt.hash(password, 10);

  // إنشاء مستخدم جديد
  const newUser = {
    id: users.length + 1,
    email,
    password: hashedPassword,
  };
  users.push(newUser);

  res.status(201).json({ message: "User registered successfully" });
});

// تسجيل الدخول
app.post("/login", async (req, res) => {
  const { email, password, csrfToken } = req.body;

  // التحقق من CSRF Token
  if (!csrfTokens.verify(JWT_SECRET, csrfToken)) {
    return res.status(403).json({ message: "Invalid CSRF token" });
  }

  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  // التحقق من كلمة المرور
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  // إنشاء JWT
  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: "1h",
  });

  // إرسال الكوكي
  res.cookie("token", token, {
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });

  res.json({ message: "Login successful" });
});

// التحقق من التوكن
app.get("/protected", (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    res.json({ message: "Access granted", user: decoded });
  } catch (err) {
    res.status(403).json({ message: "Invalid or expired token" });
  }
});

// تسجيل الخروج
app.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.clearCookie("XSRF-TOKEN");
  res.json({ message: "Logged out successfully" });
});

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
