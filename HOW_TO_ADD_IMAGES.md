# كيفية إضافة الصور | How to Add Images

## 📸 خطوات بسيطة | Simple Steps

### الخطوة 1: صورتك الشخصية | Step 1: Your Profile Picture

1. اختر صورة شخصية احترافية | Choose a professional profile picture
2. تأكد من أنها بصيغة JPG أو PNG | Make sure it's JPG or PNG
3. ضعها في: | Place it at:
   ```
   public/profile.jpg
   ```

**نصيحة:** اجعل الصورة مربعة (500x500 بكسل) للحصول على أفضل نتيجة
**Tip:** Make the image square (500x500px) for best results

---

### الخطوة 2: صور مشروع BookStore | Step 2: BookStore Project Images

لمشروع BookStore، التقط 3 صور:
For BookStore project, take 3 screenshots:

#### صورة 1: الصفحة الرئيسية | Screenshot 1: Main Page
- التقط صورة للصفحة الرئيسية لمتجر الكتب
- Take a screenshot of the books store homepage
- احفظها باسم: | Save as:
  ```
  public/projects/bookstore/main.png
  ```

#### صورة 2: صفحة التفاصيل | Screenshot 2: Details Page
- التقط صورة لصفحة تفاصيل كتاب
- Take a screenshot of a book details page
- احفظها باسم: | Save as:
  ```
  public/projects/bookstore/details.png
  ```

#### صورة 3: النسخة الموبايل | Screenshot 3: Mobile View
- افتح الموقع على الموبايل أو استخدم Developer Tools
- Open site on mobile or use Developer Tools
- التقط صورة للنسخة الموبايل
- Take a mobile view screenshot
- احفظها باسم: | Save as:
  ```
  public/projects/bookstore/mobile.png
  ```

---

### الخطوة 3: صور المشاريع الأخرى | Step 3: Other Projects

كرر نفس الخطوات لكل مشروع:
Repeat same steps for each project:

**Souq Project:**
```
public/projects/souq/main.png        (الصفحة الرئيسية | Main page)
public/projects/souq/dashboard.png   (لوحة التحكم | Dashboard)
public/projects/souq/products.png    (صفحة المنتجات | Products page)
```

**Food Delivery:**
```
public/projects/food-delivery/main.png   (الصفحة الرئيسية | Main page)
public/projects/food-delivery/cart.png   (السلة | Cart)
public/projects/food-delivery/admin.png  (لوحة الإدارة | Admin panel)
```

**CRUD Template:**
```
public/projects/crud/main.png   (الصفحة الرئيسية | Main page)
public/projects/crud/form.png   (النموذج | Form)
public/projects/crud/list.png   (القائمة | List)
```

**Portfolio:**
```
public/projects/portfolio/main.png      (الصفحة الرئيسية | Main page)
public/projects/portfolio/projects.png  (قسم المشاريع | Projects section)
public/projects/portfolio/about.png     (قسم عني | About section)
```

---

## 🎯 نصائح لالتقاط صور احترافية | Tips for Professional Screenshots

### 1. الحجم والجودة | Size and Quality
- ✅ الحجم الموصى به: 1200×800 بكسل | Recommended size: 1200×800px
- ✅ احفظ بجودة عالية | Save in high quality
- ✅ حجم الملف: أقل من 500 كيلوبايت | File size: under 500KB

### 2. المظهر | Appearance
- ✅ التقط الصور بشاشة كاملة | Take full-screen screenshots
- ✅ أزل أي معلومات حساسة | Remove any sensitive info
- ✅ تأكد من وضوح النص | Make sure text is clear

### 3. الأدوات المساعدة | Helpful Tools

**لالتقاط الصور على Windows:**
**For taking screenshots on Windows:**
- اضغط `Win + Shift + S` لأداة القص | Press `Win + Shift + S` for Snipping Tool
- استخدم `Win + PrtScn` لحفظ الشاشة كاملة | Use `Win + PrtScn` to save full screen

**لالتقاط نسخة الموبايل:**
**For mobile view screenshots:**
1. افتح المتصفح | Open browser
2. اضغط F12 | Press F12
3. اضغط أيقونة الموبايل | Click mobile icon
4. اختر جهاز موبايل | Choose a mobile device
5. التقط الصورة | Take screenshot

---

## ✅ قائمة التحقق | Checklist

قبل أن تنشر البورتفوليو، تأكد من:
Before deploying your portfolio, make sure:

- [ ] أضفت صورتك الشخصية `public/profile.jpg`
- [ ] أضفت 3 صور لمشروع BookStore
- [ ] أضفت صور للمشاريع الأخرى (اختياري)
- [ ] جميع الصور بحجم مناسب (< 500KB)
- [ ] اختبرت المشروع محلياً بـ `npm run dev`
- [ ] تأكدت من ظهور الصور بشكل صحيح

---

## ❓ ماذا لو لم أكن أملك صور لبعض المشاريع؟ | What if I don't have images for some projects?

**الحل البسيط:**
**Simple solution:**

يمكنك:
You can:

1. **استخدام صور مؤقتة** - ابحث عن صور placeholder أو استخدم لقطات من مشاريع مشابهة
2. **إخفاء المشاريع** - احذف المشاريع من ملف `src/data/projects.ts` مؤقتاً
3. **استخدام صور توضيحية** - أنشئ صوراً بسيطة توضح فكرة المشروع

**مثال لإخفاء مشروع:**
**Example to hide a project:**

في `src/data/projects.ts`، ضع `//` قبل المشروع:
In `src/data/projects.ts`, add `//` before the project:

```typescript
// {
//   id: 'food-delivery',
//   title: { ... },
//   ...
// },
```

---

## 🎨 تعديل أسماء الصور | Changing Image Names

إذا كانت صورك بأسماء مختلفة:
If your images have different names:

**الطريقة 1:** أعد تسمية الصور لتطابق الأسماء المطلوبة
**Method 1:** Rename images to match required names

**الطريقة 2:** غيّر الأسماء في الكود
**Method 2:** Change names in code

في `src/data/projects.ts`:
```typescript
images: [
  '/projects/bookstore/screenshot1.png',  // بدلاً من main.png
  '/projects/bookstore/screenshot2.png',  // بدلاً من details.png
  '/projects/bookstore/screenshot3.png',  // بدلاً من mobile.png
],
```

---

## 🚀 بعد إضافة الصور | After Adding Images

1. شغّل المشروع | Run the project:
   ```bash
   npm run dev
   ```

2. افتح المتصفح | Open browser:
   ```
   http://localhost:3000
   ```

3. تحقق من ظهور الصور | Check if images appear

4. إذا ظهرت الصور، أنت جاهز للنشر! 🎉
   If images appear, you're ready to deploy! 🎉

---

**ملاحظة:** إذا واجهت أي مشكلة، تأكد من أن أسماء الملفات صحيحة تماماً (بما في ذلك الحروف الكبيرة/الصغيرة)

**Note:** If you face any issues, make sure file names are exactly correct (including uppercase/lowercase)
