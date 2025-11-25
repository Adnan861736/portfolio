# البداية السريعة | Quick Start

## ✨ تم إنشاء البورتفوليو بنجاح! | Portfolio Created Successfully!

البورتفوليو جاهز بنسبة **100%** - فقط أضف صورك وانطلق!
Your portfolio is **100%** ready - just add your images and go!

---

## 🚀 الخطوات الثلاثة للبدء | 3 Steps to Start

### 1️⃣ أضف الصور | Add Images

```
📁 public/
  ├── profile.jpg                    👤 صورتك الشخصية
  └── 📁 projects/
      └── 📁 bookstore/
          ├── main.png               🖼️ الصفحة الرئيسية
          ├── details.png            🖼️ التفاصيل
          └── mobile.png             📱 نسخة الموبايل
```

**اقرأ المزيد:** [HOW_TO_ADD_IMAGES.md](./HOW_TO_ADD_IMAGES.md)

---

### 2️⃣ شغّل المشروع | Run Project

```bash
npm install    # مرة واحدة فقط | Only once
npm run dev    # شغّل المشروع | Start project
```

**افتح المتصفح:** http://localhost:3000

---

### 3️⃣ انشر على الإنترنت | Deploy Online

1. ارفع الكود على GitHub
2. اذهب إلى [vercel.com](https://vercel.com)
3. استورد المشروع
4. ✅ تم! موقعك الآن على الإنترنت

---

## 📋 ما تم إنجازه | What's Done

✅ **تصميم احترافي** - Dark mode جميل مع تأثيرات سلسة
✅ **دعم لغتين** - عربي وإنجليزي مع RTL
✅ **معرض مشاريع** - Grid cards مع Modal تفصيلي
✅ **Carousel للصور** - تمرير سلس مع Touch support
✅ **تحسين الأداء** - Image optimization + Lazy loading
✅ **متجاوب 100%** - يعمل على جميع الأجهزة
✅ **SEO جاهز** - Meta tags محسّنة

---

## 📂 الملفات المهمة | Important Files

| الملف | الوصف |
|------|-------|
| `src/app/page.tsx` | الصفحة الرئيسية |
| `src/data/projects.ts` | بيانات المشاريع - **عدّل هنا** |
| `src/components/ProjectCard.tsx` | كارد المشروع |
| `src/components/ProjectModal.tsx` | نافذة تفاصيل المشروع |
| `tailwind.config.js` | إعدادات التصميم |
| `public/` | مجلد الصور |

---

## 🎨 التخصيص السريع | Quick Customization

### غيّر روابط GitHub | Change GitHub Links

افتح `src/data/projects.ts` وعدّل:
Open `src/data/projects.ts` and edit:

```typescript
githubUrl: 'https://github.com/Adnan861736/BookStore'
```

### أضف مشروع جديد | Add New Project

في `src/data/projects.ts`:
```typescript
{
  id: 'new-project',
  title: { en: 'Project Name', ar: 'اسم المشروع' },
  description: { en: '...', ar: '...' },
  images: ['/projects/new-project/main.png', ...],
  githubUrl: 'https://github.com/...',
  tags: ['React', 'TypeScript'],
  featured: true
}
```

---

## 🛠️ الأوامر | Commands

```bash
npm run dev      # تشغيل | Development
npm run build    # بناء | Build
npm start        # تشغيل الإنتاج | Production
```

---

## 📚 الملفات التوثيقية | Documentation Files

1. **[README.md](./README.md)** - الدليل الشامل | Complete guide
2. **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - دليل الإعداد التفصيلي | Detailed setup
3. **[HOW_TO_ADD_IMAGES.md](./HOW_TO_ADD_IMAGES.md)** - كيفية إضافة الصور | Image guide
4. **[/public/projects/README.md](./public/projects/README.md)** - دليل الصور السريع | Quick image guide

---

## ✅ قائمة التحقق قبل النشر | Pre-Deploy Checklist

- [ ] أضفت صورتك الشخصية
- [ ] أضفت صور مشروع BookStore (على الأقل)
- [ ] حدّثت روابط GitHub
- [ ] اختبرت المشروع بـ `npm run dev`
- [ ] اختبرت على الموبايل
- [ ] بنيت المشروع بـ `npm run build` بدون أخطاء

---

## 🎯 الخطوة التالية | Next Step

**الآن:** أضف صورك في مجلد `public/`

**انظر:** [HOW_TO_ADD_IMAGES.md](./HOW_TO_ADD_IMAGES.md) للتعليمات المفصلة

---

## 💡 نصائح سريعة | Quick Tips

1. **الصور مهمة!** - خذ وقتك في التقاط صور احترافية
2. **ابدأ بمشروع واحد** - أضف صور BookStore أولاً
3. **اختبر محلياً** - تأكد من أن كل شيء يعمل قبل النشر
4. **استخدم Vercel** - أسهل طريقة للنشر

---

## 📞 المساعدة | Help

**مشكلة في Tailwind؟** → اقرأ [SETUP_GUIDE.md](./SETUP_GUIDE.md) قسم "حل المشاكل"

**مشكلة في الصور؟** → اقرأ [HOW_TO_ADD_IMAGES.md](./HOW_TO_ADD_IMAGES.md)

**مشكلة في النشر؟** → اقرأ [README.md](./README.md) قسم "Deployment"

---

## 🎉 مبروك! | Congratulations!

بورتفوليوك الاحترافي جاهز الآن!
Your professional portfolio is ready!

فقط أضف الصور وابدأ بعرض أعمالك للعالم 🚀
Just add images and start showcasing your work to the world 🚀

---

**Made with ❤️ using Next.js, TypeScript & Tailwind CSS**
