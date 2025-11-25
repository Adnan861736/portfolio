# دليل الإعداد | Setup Guide

## 🎯 خطوات الإعداد السريعة | Quick Setup Steps

### 1. إضافة الصور | Add Images

#### صورتك الشخصية | Your Profile Picture
- ضع صورتك في: `public/profile.jpg`
- Place your picture at: `public/profile.jpg`
- الحجم الموصى به | Recommended size: 500x500 بكسل | px

#### صور المشاريع | Project Screenshots

أضف 3 صور لكل مشروع في المجلدات التالية:
Add 3 screenshots for each project in these folders:

**BookStore (مشروع متجر الكتب):**
```
public/projects/bookstore/main.png
public/projects/bookstore/details.png
public/projects/bookstore/mobile.png
```

**Souq (مشروع السوق):**
```
public/projects/souq/main.png
public/projects/souq/dashboard.png
public/projects/souq/products.png
```

**Food Delivery (تطبيق توصيل الطعام):**
```
public/projects/food-delivery/main.png
public/projects/food-delivery/cart.png
public/projects/food-delivery/admin.png
```

**CRUD Template (قالب CRUD):**
```
public/projects/crud/main.png
public/projects/crud/form.png
public/projects/crud/list.png
```

**Portfolio (البورتفوليو):**
```
public/projects/portfolio/main.png
public/projects/portfolio/projects.png
public/projects/portfolio/about.png
```

### 2. تشغيل المشروع | Run the Project

```bash
# تثبيت المكتبات | Install dependencies
npm install

# تشغيل المشروع في وضع التطوير | Run development server
npm run dev

# افتح المتصفح على | Open browser at
# http://localhost:3000
```

### 3. بناء المشروع للإنتاج | Build for Production

```bash
# بناء المشروع | Build the project
npm run build

# تشغيل النسخة الإنتاجية | Run production build
npm start
```

## ✏️ التعديلات | Customization

### تحديث روابط GitHub للمشاريع | Update Project GitHub Links

افتح ملف `src/data/projects.ts` وغيّر روابط GitHub:
Open `src/data/projects.ts` and update GitHub URLs:

```typescript
githubUrl: 'https://github.com/Adnan861736/YourProjectName'
```

حالياً، مشروع BookStore فقط لديه رابط GitHub الحقيقي. أضف روابط مشاريعك الأخرى.
Currently, only BookStore has a real GitHub link. Add your other project links.

### إضافة مشاريع جديدة | Add New Projects

في ملف `src/data/projects.ts`، أضف مشروعاً جديداً:
In `src/data/projects.ts`, add a new project:

```typescript
{
  id: 'project-id',
  title: {
    en: 'Project Name',
    ar: 'اسم المشروع'
  },
  description: {
    en: 'English description...',
    ar: 'الوصف بالعربية...'
  },
  images: [
    '/projects/project-id/main.png',
    '/projects/project-id/details.png',
    '/projects/project-id/mobile.png',
  ],
  githubUrl: 'https://github.com/Adnan861736/ProjectName',
  tags: ['React', 'TypeScript', 'etc'],
  featured: true
}
```

### تحديث معلوماتك الشخصية | Update Personal Info

في ملف `src/app/page.tsx`:
In `src/app/page.tsx`:

- البريد الإلكتروني | Email: `adnanhlwngi@gmail.com`
- رقم الهاتف | Phone: `+963646590668`
- حساب GitHub | GitHub: `https://github.com/Adnan861736`

## 🚀 النشر | Deployment

### النشر على Vercel (موصى به) | Deploy to Vercel (Recommended)

1. ارفع الكود على GitHub | Push code to GitHub
2. اذهب إلى | Go to [vercel.com](https://vercel.com)
3. استورد المشروع | Import your repository
4. سيتم النشر تلقائياً | It will deploy automatically

### النشر على Netlify | Deploy to Netlify

1. ارفع الكود على GitHub | Push code to GitHub
2. اذهب إلى | Go to [netlify.com](https://netlify.com)
3. استورد المشروع | Import your repository
4. أضف هذه الإعدادات | Add these settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

## ⚠️ مهم | Important

### قبل النشر | Before Deployment

1. ✅ أضف جميع الصور | Add all images
2. ✅ حدّث روابط GitHub | Update GitHub links
3. ✅ تأكد من أن المشروع يعمل محلياً | Test locally
4. ✅ اختبر على الهاتف | Test on mobile

```bash
# اختبار البناء | Test build
npm run build

# إذا نجح البناء، المشروع جاهز للنشر
# If build succeeds, project is ready to deploy
```

## 🎨 الألوان | Colors

الألوان الحالية في `tailwind.config.js`:
Current colors in `tailwind.config.js`:

- `dark-bg`: `#0a0a0a` - الخلفية الرئيسية | Main background
- `dark-card`: `#111111` - خلفية الكاردات | Card background
- `dark-border`: `#1f1f1f` - حدود العناصر | Element borders
- `blue-500`: الأزرق الأساسي | Primary blue
- `purple-500`: البنفسجي | Purple

يمكنك تغييرها حسب ذوقك | You can change them as you like.

## 📱 التوافق | Compatibility

البورتفوليو متوافق مع:
Portfolio is compatible with:

- ✅ جميع المتصفحات الحديثة | All modern browsers
- ✅ الموبايل | Mobile devices
- ✅ التابلت | Tablets
- ✅ الشاشات الكبيرة | Large screens

## 🐛 حل المشاكل | Troubleshooting

### المشكلة: Tailwind لا يعمل | Tailwind not working
**الحل | Solution:**
```bash
# امسح المجلد وأعد التثبيت | Delete and reinstall
rm -rf node_modules .next
npm install
```

### المشكلة: الصور لا تظهر | Images not showing
**الحل | Solution:**
- تأكد من وجود الصور في مجلد `public/` | Check images are in `public/`
- تأكد من أسماء الملفات صحيحة | Verify file names are correct
- استخدم `.png` أو `.jpg` فقط | Use only `.png` or `.jpg`

### المشكلة: خطأ في البناء | Build error
**الحل | Solution:**
```bash
# تنظيف وإعادة البناء | Clean and rebuild
npm run build
# إذا ظهرت أخطاء TypeScript، أصلحها | Fix TypeScript errors if any
```

## 📞 المساعدة | Support

إذا واجهت مشاكل:
If you face issues:

1. تحقق من ملف `README.md`
2. تحقق من console في المتصفح | Check browser console
3. تحقق من terminal output

---

**ملاحظة مهمة:**
المشروع جاهز بنسبة 100%، فقط أضف الصور وابدأ!

**Important Note:**
Project is 100% ready, just add images and start!
