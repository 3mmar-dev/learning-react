import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
const getCsrfToken = async () => {
  try {
    // إرسال طلب للحصول على CSRF Token
    const response = await fetch("http://localhost:5000/csrf-token", {
      method: "GET",
      credentials: "include", // تأكد من إرسال الكوكيز مع الطلب
    });

    if (!response.ok) {
      throw new Error("Failed to get CSRF token");
    }

    const data = await response.json();

    // تخزين CSRF Token في الكوكيز (سيتم استخدامه في المستقبل)
    Cookies.set("XSRF-TOKEN", data.csrfToken, { expires: 1, path: "/" });
    return data.csrfToken;
  } catch (error) {
    console.error("Error fetching CSRF Token:", error);
    return null;
  }
};

const login = async (email: string, password: string) => {
  const csrfToken = Cookies.get("XSRF-TOKEN"); // قراءة CSRF Token من الكوكي
  const response = await fetch("http://localhost:5000/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, csrfToken }), // إرسال التوكن مع البيانات
  });

  if (response.ok) {
    console.log("Login successful");
  } else {
    console.error("Login failed");
  }
  window.location.reload();
};

const register = async (email: string, password: string) => {
  try {
    // احصل على CSRF Token من الكوكي
    const csrfToken = Cookies.get("XSRF-TOKEN");
    if (!csrfToken) {
      throw new Error("CSRF token is missing. Please refresh the page.");
    }

    // إرسال طلب التسجيل إلى السيرفر
    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // لضمان إرسال الكوكيز مع الطلب
      body: JSON.stringify({ email, password, csrfToken }),
    });

    // تحقق من الاستجابة
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to register.");
    }

    // إذا نجح التسجيل
    const data = await response.json();
    console.log("Registration successful:", data.message);
    return data; // يمكنك استخدام البيانات لإظهار رسالة نجاح
  } catch (error) {
    console.error("Registration failed:", error.message);
    throw error; // أعادة الخطأ إذا كنت بحاجة لمعالجته في واجهة المستخدم
  }
  window.location.reload();
};

function logout() {
  Cookies.remove("token");
  window.location.reload();
}

function checkAuth() {
  return Cookies.get("token") && Cookies.get("XSRF-TOKEN");
}

const getDecodedToken = () => {
  // try {
  //   // فك التوكن
  //   const decoded = jwtDecode(token);

  //   // قراءة البريد الإلكتروني من البيانات المفكوكة
  //   return decoded; // أو أي مفتاح آخر يحتوي على البريد الإلكتروني
  // } catch (error) {
  //   console.error("Invalid token", error);
  //   return null;
  // }
  console.log(Cookies.get());
  return jwtDecode(Cookies.get("token")) as string;
};

export { login, register, getCsrfToken, checkAuth, logout, getDecodedToken };
