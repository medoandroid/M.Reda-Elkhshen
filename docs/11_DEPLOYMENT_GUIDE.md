<!-- DevMeDoAnDrOiD -->
# دليل النشر والاستضافة السحابية (Deployment Guide)
**المشروع:** M : Reda Elkhshen 🇫🇷  
**المسؤول التقني:** MeDoAnDrOiD

---

المشروع مصمم كبنية نقية فائقة الأداء وسريعة التحميل (Static Web App: HTML5, CSS3, ES6 JavaScript)، ولا يحتاج إلى بيئة تشغيل سيرفر معقدة (Node.js أو Python backend)، مما يجعله مثالياً للاستضافة الفورية المجانية أو على نطاق خاص.

## 1. خيارات النشر الفوري الموصى بها:

### أ) النشر عبر GitHub Pages (الأسهل والمجاني)
1. إنشاء مستودع جديد على GitHub باسم `reda-elkhshen-portfolio`.
2. رفع محتويات المجلد (`index.html`, مجلد `assets`, ومجلد `docs`).
3. الدخول إلى `Settings` -> `Pages`.
4. اختيار فرع `main` وتفعيل المسار `/ (root)`.
5. الموقع سيعمل خلال ثوانٍ برابط `https://<username>.github.io/reda-elkhshen-portfolio`.

### ب) النشر عبر Vercel أو Netlify
1. سحب المستودع من GitHub أو سحب المجلد وإفلاته مباشرة (Drag & Drop) في لوحة تحكم Netlify/Vercel.
2. لا توجد أوامر بناء (`Build Command: None`, `Publish Directory: .`).
3. تفعيل شهادة SSL المجانية التلقائية وتوصيل الدومين المخصص (مثل `redaelkhshen.com`).

### ج) النشر على استضافة cPanel عادية
1. ضغط محتويات المجلد في ملف `.zip`.
2. رفعه إلى مجلد `public_html` وفك الضغط.

<!-- Copyright (c) 2026 MeDoAnDrOiD. All Rights Reserved. -->