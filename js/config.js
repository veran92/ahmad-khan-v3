'use strict';

// ============================================================
// Ahmad Khan V3 – Central Configuration
// ALL editable data for the entire multi‑page website.
// ============================================================

const CONFIG = {

  // -------- OWNER INFO --------
  owner: {
    name: 'Ahmad Khan',
    title: 'WhatsApp Services Expert',
    location: 'Swabi, Pakistan',
    email: 'ahmad@example.com',
    aboutTextEn: 'I am Ahmad Khan, from Swabi. Over the past 4 years I have created and sold 200+ WhatsApp channels. My mission: empower every business with the power of WhatsApp.',
    aboutTextUr: 'میں احمد خان، صوابی سے ہوں۔ پچھلے 4 سالوں میں 200+ واٹس ایپ چینلز بنا اور بیچ چکا ہوں۔ میرا مشن: ہر کاروبار کو واٹس ایپ کی طاقت سے نوازنا۔',
    profileImage: 'assets/images/ahmad-profile.jpg'
  },

  // -------- TWO WHATSAPP NUMBERS --------
  numbers: [
    { country: 'Pakistan', number: '923454927814', labelEn: 'Pakistan', labelUr: 'پاکستان' },
    { country: 'International', number: '79370723280', labelEn: 'International', labelUr: 'بین الاقوامی' }
  ],

  // -------- PRIVATE GROUP --------
  privateGroupLink: 'https://chat.whatsapp.com/BcObym0kt30EnVLa9wfzoQ?mode=gi_t',

  // -------- PRICING PLANS --------
  pricingPlans: [
    {
      id: '1hour',
      nameEn: '1 Hour Boost',
      nameUr: '1 گھنٹہ بوسٹ',
      price: 1000,
      durationEn: '1 Hour',
      durationUr: '1 گھنٹہ',
      reachEn: '5K – 10K views',
      reachUr: '5 ہزار – 10 ہزار ویوز',
      descriptionEn: 'Quick targeted promotion for immediate visibility.',
      descriptionUr: 'فوری مرئیت کے لیے تیز ٹارگٹڈ پروموشن۔',
      featuresEn: ['Instant start', 'Targeted channels', 'Basic report'],
      featuresUr: ['فوری آغاز', 'ٹارگٹڈ چینلز', 'بنیادی رپورٹ']
    },
    {
      id: '12hour',
      nameEn: '12 Hour Blast',
      nameUr: '12 گھنٹہ دھماکہ',
      price: 17500,
      durationEn: '12 Hours',
      durationUr: '12 گھنٹے',
      reachEn: '50K – 100K views',
      reachUr: '50 ہزار – 100 ہزار ویوز',
      descriptionEn: 'Sustained high‑reach promotion across multiple channels.',
      descriptionUr: 'متعدد چینلز پر مسلسل اعلیٰ رسائی والی پروموشن۔',
      featuresEn: ['Multi‑channel', 'Performance tracking', 'Dedicated support'],
      featuresUr: ['متعدد چینلز', 'کارکردگی ٹریکنگ', 'مخصوص سپورٹ'],
      popular: true
    },
    {
      id: '24hour',
      nameEn: '24 Hour Viral',
      nameUr: '24 گھنٹہ وائرل',
      price: 35000,
      durationEn: '24 Hours',
      durationUr: '24 گھنٹے',
      reachEn: '200K+ views',
      reachUr: '200 ہزار+ ویوز',
      descriptionEn: 'Maximum exposure with full campaign management.',
      descriptionUr: 'مکمل مہم مینجمنٹ کے ساتھ زیادہ سے زیادہ نمائش۔',
      featuresEn: ['Full campaign', 'Priority support', 'Detailed analytics'],
      featuresUr: ['مکمل مہم', 'ترجیحی سپورٹ', 'تفصیلی تجزیہ']
    }
  ],

  // -------- 55 CHANNELS --------
  channels: [
    { id: 1,  name: 'Education Hub Pakistan', category: 'education', followers: 52000, price: 15000, image: 'assets/images/channel-edu-1.jpg', descEn: 'Top MCQs, exam tips, study resources.', descUr: 'بہترین ایم سی کیوز، امتحانی ٹپس، مطالعاتی وسائل۔' },
    { id: 2,  name: 'Daily News Pakistan', category: 'news', followers: 120000, price: 35000, image: 'assets/images/channel-news-1.jpg', descEn: 'Breaking news and current affairs.', descUr: 'تازہ ترین خبریں اور حالات حاضرہ۔' },
    { id: 3,  name: 'Tech World PK', category: 'tech', followers: 38000, price: 12000, image: 'assets/images/channel-tech-1.jpg', descEn: 'Latest tech news, reviews, tutorials.', descUr: 'تازہ ترین ٹیک خبریں، جائزے، ٹیوٹوریلز۔' },
    { id: 4,  name: 'Lollywood Movies', category: 'entertainment', followers: 95000, price: 28000, image: 'assets/images/channel-ent-1.jpg', descEn: 'Pakistani movies, dramas, trailers.', descUr: 'پاکستانی فلمیں، ڈرامے، ٹریلرز۔' },
    { id: 5,  name: 'Cricket Fever Pakistan', category: 'sports', followers: 210000, price: 50000, image: 'assets/images/channel-sports-1.jpg', descEn: 'Live scores, PSL, match highlights.', descUr: 'لائیو اسکور، پی ایس ایل، میچ ہائی لائٹس۔' },
    { id: 6,  name: 'Business Ideas PK', category: 'business', followers: 15000, price: 5000, image: 'assets/images/channel-biz-1.jpg', descEn: 'Small business tips, startup stories.', descUr: 'چھوٹے کاروبار کی تجاویز، اسٹارٹ اپ کہانیاں۔' },
    { id: 7,  name: 'Islamic Knowledge', category: 'religious', followers: 75000, price: 20000, image: 'assets/images/channel-reli-1.jpg', descEn: 'Quran, Hadith, Islamic teachings.', descUr: 'قرآن، حدیث، اسلامی تعلیمات۔' },
    { id: 8,  name: 'Cooking with Ammi', category: 'entertainment', followers: 42000, price: 12000, image: 'assets/images/channel-ent-2.jpg', descEn: 'Traditional Pakistani recipes.', descUr: 'روایتی پاکستانی کھانے کی ترکیبیں۔' },
    { id: 9,  name: 'Startup Pakistan', category: 'business', followers: 28000, price: 8000, image: 'assets/images/channel-biz-2.jpg', descEn: 'Funding news, networking events.', descUr: 'فنڈنگ خبریں، نیٹ ورکنگ ایونٹس۔' },
    { id: 10, name: 'Health Tips Daily', category: 'education', followers: 63000, price: 18000, image: 'assets/images/channel-edu-2.jpg', descEn: 'Fitness, nutrition, medical awareness.', descUr: 'فٹنس، غذائیت، طبی آگاہی۔' },
    { id: 11, name: 'Funny Videos Central', category: 'entertainment', followers: 180000, price: 45000, image: 'assets/images/channel-ent-3.jpg', descEn: 'Hilarious memes and comedy clips.', descUr: 'مزاحیہ میمز اور کامیڈی کلپس۔' },
    { id: 12, name: 'Job Alerts Pakistan', category: 'business', followers: 85000, price: 22000, image: 'assets/images/channel-biz-3.jpg', descEn: 'Govt/private job notifications.', descUr: 'سرکاری/پرائیویٹ نوکریوں کے نوٹیفیکیشنز۔' },
    { id: 13, name: 'English Learning Hub', category: 'education', followers: 34000, price: 10000, image: 'assets/images/channel-edu-3.jpg', descEn: 'Spoken English, grammar lessons.', descUr: 'اسپوکن انگلش، گرامر اسباق۔' },
    { id: 14, name: 'Motivational Quotes', category: 'lifestyle', followers: 110000, price: 25000, image: 'assets/images/channel-life-1.jpg', descEn: 'Daily inspiration and success stories.', descUr: 'روزانہ کی حوصلہ افزائی اور کامیابی کی کہانیاں۔' },
    { id: 15, name: 'Urdu Poetry Lovers', category: 'entertainment', followers: 67000, price: 16000, image: 'assets/images/channel-ent-4.jpg', descEn: 'Best Urdu poetry and shayari.', descUr: 'بہترین اردو شاعری اور شاعری۔' },
    { id: 16, name: 'World Facts Daily', category: 'education', followers: 45000, price: 13000, image: 'assets/images/channel-edu-4.jpg', descEn: 'Amazing facts from around the world.', descUr: 'دنیا بھر کے حیرت انگیز حقائق۔' },
    { id: 17, name: 'Gaming Zone PK', category: 'gaming', followers: 55000, price: 14000, image: 'assets/images/channel-game-1.jpg', descEn: 'Esports news, game reviews.', descUr: 'ایسپورٹس خبریں، گیم جائزے۔' },
    { id: 18, name: 'Fashion Trends Pakistan', category: 'lifestyle', followers: 72000, price: 19000, image: 'assets/images/channel-life-2.jpg', descEn: 'Latest fashion, styling tips.', descUr: 'تازہ ترین فیشن، اسٹائلنگ ٹپس۔' },
    { id: 19, name: 'Auto Lovers Pakistan', category: 'automotive', followers: 48000, price: 12000, image: 'assets/images/channel-auto-1.jpg', descEn: 'Cars, bikes, reviews.', descUr: 'کاریں، بائیکس، جائزے۔' },
    { id: 20, name: 'Travel Diaries', category: 'lifestyle', followers: 36000, price: 9000, image: 'assets/images/channel-life-3.jpg', descEn: 'Beautiful destinations and guides.', descUr: 'خوبصورت مقامات اور گائیڈز۔' },
    { id: 21, name: 'Stock Market Tips', category: 'business', followers: 41000, price: 11000, image: 'assets/images/channel-biz-4.jpg', descEn: 'PSX updates, trading signals.', descUr: 'پی ایس ایکس اپ ڈیٹس، ٹریڈنگ سگنلز۔' },
    { id: 22, name: 'Online Earning PK', category: 'education', followers: 88000, price: 23000, image: 'assets/images/channel-edu-5.jpg', descEn: 'Freelancing, earning methods.', descUr: 'فری لانسنگ، کمانے کے طریقے۔' },
    { id: 23, name: 'Funny Jokes Daily', category: 'entertainment', followers: 130000, price: 32000, image: 'assets/images/channel-ent-5.jpg', descEn: 'Clean jokes, comedy content.', descUr: 'صاف ستھرے لطیفے، کامیڈی مواد۔' },
    { id: 24, name: 'Science & Technology', category: 'tech', followers: 29000, price: 8000, image: 'assets/images/channel-tech-2.jpg', descEn: 'Discoveries, innovations.', descUr: 'دریافتیں، ایجادات۔' },
    { id: 25, name: 'Pakistan Politics', category: 'news', followers: 200000, price: 48000, image: 'assets/images/channel-news-2.jpg', descEn: 'Political analysis and updates.', descUr: 'سیاسی تجزیہ اور اپ ڈیٹس۔' },
    { id: 26, name: 'Home Decoration Ideas', category: 'lifestyle', followers: 22000, price: 6000, image: 'assets/images/channel-life-4.jpg', descEn: 'DIY decor, renovation tips.', descUr: 'ڈی آئی وائی ڈیکور، تزئین و آرائش کی تجاویز۔' },
    { id: 27, name: 'Free Courses Online', category: 'education', followers: 96000, price: 26000, image: 'assets/images/channel-edu-6.jpg', descEn: 'Free certifications, tutorials.', descUr: 'مفت سرٹیفیکیشنز، ٹیوٹوریلز۔' },
    { id: 28, name: 'WhatsApp Status Videos', category: 'entertainment', followers: 155000, price: 38000, image: 'assets/images/channel-ent-6.jpg', descEn: 'Trending status videos.', descUr: 'ٹرینڈنگ اسٹیٹس ویڈیوز۔' },
    { id: 29, name: 'Real Estate Pakistan', category: 'business', followers: 33000, price: 9500, image: 'assets/images/channel-biz-5.jpg', descEn: 'Property listings, investment tips.', descUr: 'جائیداد کی فہرستیں، سرمایہ کاری کی تجاویز۔' },
    { id: 30, name: 'Photography Masterclass', category: 'education', followers: 27000, price: 7000, image: 'assets/images/channel-edu-7.jpg', descEn: 'Camera tips, editing tutorials.', descUr: 'کیمرہ ٹپس، ایڈیٹنگ ٹیوٹوریلز۔' },
    { id: 31, name: 'Cartoons & Animations', category: 'entertainment', followers: 68000, price: 17000, image: 'assets/images/channel-ent-7.jpg', descEn: 'Funny cartoons, short animations.', descUr: 'مزاحیہ کارٹون، مختصر اینیمیشنز۔' },
    { id: 32, name: 'Sports News Pakistan', category: 'sports', followers: 91000, price: 24000, image: 'assets/images/channel-sports-2.jpg', descEn: 'All sports, one place.', descUr: 'تمام کھیل، ایک جگہ۔' },
    { id: 33, name: 'Study Abroad Guide', category: 'education', followers: 19000, price: 5500, image: 'assets/images/channel-edu-8.jpg', descEn: 'Scholarships, visa tips.', descUr: 'اسکالرشپس، ویزا ٹپس۔' },
    { id: 34, name: 'Movies Review PK', category: 'entertainment', followers: 47000, price: 12000, image: 'assets/images/channel-ent-8.jpg', descEn: 'Honest movie ratings.', descUr: 'ایماندار فلم ریٹنگز۔' },
    { id: 35, name: 'Islamic Naats', category: 'religious', followers: 140000, price: 34000, image: 'assets/images/channel-reli-2.jpg', descEn: 'Beautiful naats, hamds.', descUr: 'خوبصورت نعتیں، حمد۔' },
    { id: 36, name: 'Makeup & Beauty', category: 'lifestyle', followers: 56000, price: 15000, image: 'assets/images/channel-life-5.jpg', descEn: 'Tutorials, product reviews.', descUr: 'ٹیوٹوریلز، پروڈکٹ جائزے۔' },
    { id: 37, name: 'AI & Future Tech', category: 'tech', followers: 31000, price: 8500, image: 'assets/images/channel-tech-3.jpg', descEn: 'Artificial intelligence news.', descUr: 'مصنوعی ذہانت کی خبریں۔' },
    { id: 38, name: 'Village Food Recipes', category: 'entertainment', followers: 62000, price: 16000, image: 'assets/images/channel-ent-9.jpg', descEn: 'Traditional village cooking.', descUr: 'روایتی گاؤں کا کھانا پکانا۔' },
    { id: 39, name: 'CSS Exam Prep', category: 'education', followers: 24000, price: 6500, image: 'assets/images/channel-edu-9.jpg', descEn: 'CSS materials, past papers.', descUr: 'سی ایس ایس مواد، پاسٹ پیپرز۔' },
    { id: 40, name: 'Funny Animals', category: 'entertainment', followers: 105000, price: 27000, image: 'assets/images/channel-ent-10.jpg', descEn: 'Cute animal videos.', descUr: 'پیاری جانوروں کی ویڈیوز۔' },
    { id: 41, name: 'Ecommerce Tips', category: 'business', followers: 37000, price: 10000, image: 'assets/images/channel-biz-6.jpg', descEn: 'Daraz, Amazon, Shopify guides.', descUr: 'دراز، ایمیزون، شاپیفائی گائیڈز۔' },
    { id: 42, name: 'WhatsApp Tricks', category: 'tech', followers: 76000, price: 20000, image: 'assets/images/channel-tech-4.jpg', descEn: 'Hidden features, tips.', descUr: 'پوشیدہ فیچرز، ٹپس۔' },
    { id: 43, name: 'Quran Recitation', category: 'religious', followers: 160000, price: 40000, image: 'assets/images/channel-reli-3.jpg', descEn: 'Famous Qaris, tilawat.', descUr: 'مشہور قاری، تلاوت۔' },
    { id: 44, name: 'Pet Lovers Pakistan', category: 'lifestyle', followers: 43000, price: 11000, image: 'assets/images/channel-life-6.jpg', descEn: 'Pet care, adorable videos.', descUr: 'پالتو جانوروں کی دیکھ بھال، پیاری ویڈیوز۔' },
    { id: 45, name: 'DIY Crafts', category: 'lifestyle', followers: 26000, price: 7000, image: 'assets/images/channel-life-7.jpg', descEn: 'Creative craft ideas.', descUr: 'تخلیقی کرافٹ آئیڈیاز۔' },
    { id: 46, name: 'Mobile Prices PK', category: 'tech', followers: 58000, price: 15000, image: 'assets/images/channel-tech-5.jpg', descEn: 'Latest prices, comparisons.', descUr: 'تازہ ترین قیمتیں، موازنے۔' },
    { id: 47, name: 'History of Pakistan', category: 'education', followers: 39000, price: 10500, image: 'assets/images/channel-edu-10.jpg', descEn: 'Fascinating historical stories.', descUr: 'دلچسپ تاریخی کہانیاں۔' },
    { id: 48, name: 'Crypto Pakistan', category: 'business', followers: 50000, price: 13500, image: 'assets/images/channel-biz-7.jpg', descEn: 'Cryptocurrency trading news.', descUr: 'کرپٹو کرنسی ٹریڈنگ خبریں۔' },
    { id: 49, name: 'Comedy Sketches', category: 'entertainment', followers: 92000, price: 24000, image: 'assets/images/channel-ent-11.jpg', descEn: 'Hilarious drama sketches.', descUr: 'مزاحیہ ڈرامہ خاکے۔' },
    { id: 50, name: 'Study Tips & Tricks', category: 'education', followers: 71000, price: 18500, image: 'assets/images/channel-edu-11.jpg', descEn: 'Effective study techniques.', descUr: 'مؤثر مطالعہ کی تکنیکیں۔' },
    { id: 51, name: 'Women Empowerment', category: 'lifestyle', followers: 44000, price: 11500, image: 'assets/images/channel-life-8.jpg', descEn: 'Inspiring stories, career advice.', descUr: 'متاثر کن کہانیاں، کیریئر مشورے۔' },
    { id: 52, name: 'Gardening Pakistan', category: 'lifestyle', followers: 21000, price: 5800, image: 'assets/images/channel-life-9.jpg', descEn: 'Gardening tips for local climate.', descUr: 'مقامی آب و ہوا کے لیے باغبانی کی تجاویز۔' },
    { id: 53, name: 'Electric Vehicles PK', category: 'automotive', followers: 18000, price: 5200, image: 'assets/images/channel-auto-2.jpg', descEn: 'EV news and reviews.', descUr: 'ای وی خبریں اور جائزے۔' },
    { id: 54, name: 'Software Development', category: 'tech', followers: 40000, price: 10800, image: 'assets/images/channel-tech-6.jpg', descEn: 'Programming tutorials, dev tips.', descUr: 'پروگرامنگ ٹیوٹوریلز، ڈیو ٹپس۔' },
    { id: 55, name: 'Mental Health Matters', category: 'lifestyle', followers: 35000, price: 9500, image: 'assets/images/channel-life-10.jpg', descEn: 'Awareness, self‑care advice.', descUr: 'آگاہی، خود کی دیکھ بھال کے مشورے۔' }
  ],

  // -------- REVIEWS --------
  reviews: [
    { id: 1, name: 'Usman', city: 'Peshawar', stars: 5, quoteEn: 'Mashallah, channel sold in 2 days!', quoteUr: 'ماشاءاللہ، چینل 2 دن میں بک گیا!', likes: 24 },
    { id: 2, name: 'Ayesha', city: 'Lahore', stars: 5, quoteEn: 'Promotion result started showing in 1 hour.', quoteUr: 'پروموشن کا نتیجہ 1 گھنٹے میں نظر آنے لگا۔', likes: 18 },
    { id: 3, name: 'Bilal', city: 'Islamabad', stars: 4, quoteEn: 'Ahmad bhai completely transformed my WhatsApp strategy.', quoteUr: 'احمد بھائی نے میری پوری واٹس ایپ حکمت عملی بدل دی۔', likes: 12 },
    { id: 4, name: 'Sara', city: 'Karachi', stars: 5, quoteEn: 'Best channel seller in Pakistan. Highly recommended!', quoteUr: 'پاکستان کا بہترین چینل بیچنے والا۔ انتہائی سفارش!', likes: 31 },
    { id: 5, name: 'Faisal', city: 'Multan', stars: 4, quoteEn: 'Professional, quick delivery, fair pricing.', quoteUr: 'پیشہ ورانہ، فوری ترسیل، مناسب قیمت۔', likes: 9 },
    { id: 6, name: 'Zainab', city: 'Quetta', stars: 5, quoteEn: 'Finally found a trustworthy WhatsApp expert.', quoteUr: 'آخرکار ایک قابل اعتماد واٹس ایپ ماہر مل گیا۔', likes: 15 },
    { id: 7, name: 'Hamza', city: 'Sialkot', stars: 5, quoteEn: 'Promotion brought 500+ new clients in one day!', quoteUr: 'پروموشن نے ایک دن میں 500+ نئے کلائنٹس دیے!', likes: 42 },
    { id: 8, name: 'Nadia', city: 'Faisalabad', stars: 5, quoteEn: 'Very patient, answered all my questions.', quoteUr: 'بہت صابر، میرے تمام سوالات کے جوابات دیے۔', likes: 7 }
  ],

  // -------- FAQS --------
  faqs: [
    {
      questionEn: 'How to buy a channel?',
      questionUr: 'چینل کیسے خریدیں؟',
      answerEn: 'Contact us on WhatsApp, choose your channel, make payment via JazzCash/Easypaisa/Bank, and we transfer admin rights within 1 hour.',
      answerUr: 'واٹس ایپ پر رابطہ کریں، چینل منتخب کریں، جازکیش/ایزی پیسہ/بینک کے ذریعے ادائیگی کریں، اور ہم 1 گھنٹے کے اندر ایڈمن حقوق منتقل کر دیتے ہیں۔'
    },
    {
      questionEn: 'What payment methods are available?',
      questionUr: 'ادائیگی کے کون سے طریقے دستیاب ہیں؟',
      answerEn: 'JazzCash, Easypaisa, and direct Bank Transfer.',
      answerUr: 'جازکیش، ایزی پیسہ، اور براہ راست بینک ٹرانسفر۔'
    },
    {
      questionEn: 'How fast is the delivery?',
      questionUr: 'ترسیل کتنی تیز ہے؟',
      answerEn: 'Within 1 hour after payment confirmation.',
      answerUr: 'ادائیگی کی تصدیق کے 1 گھنٹے کے اندر۔'
    },
    {
      questionEn: 'Is the promotion organic?',
      questionUr: 'کیا پروموشن آرگینک ہے؟',
      answerEn: 'Yes, we use real channels with real active members.',
      answerUr: 'جی ہاں، ہم حقیقی فعال ممبران والے اصلی چینلز استعمال کرتے ہیں۔'
    },
    {
      questionEn: 'What if I am not satisfied?',
      questionUr: 'اگر میں مطمئن نہ ہوں تو؟',
      answerEn: 'We offer a replacement or refund within 24 hours if the channel doesn\'t match described stats.',
      answerUr: 'اگر چینل بیان کردہ اعدادوشمار سے میل نہ کھائے تو ہم 24 گھنٹوں کے اندر تبدیلی یا رقم واپسی فراہم کرتے ہیں۔'
    }
  ],

  // -------- DISCOUNT OPTIONS --------
  discountOptions: [0, 5, 10, 25],  // 0 = no discount

  // -------- CREDIT (HARDCODED IN HTML, BUT STORED HERE FOR JS) --------
  credit: {
    name: 'Lilarose',
    textEn: 'an obedient member of PeshoX Intelligence',
    textUr: 'پیشو ایکس انٹیلیجنس کی ایک فرمانبردار ممبر',
    channelName: 'PeshoX Intelligence',
    channelLink: 'https://whatsapp.com/channel/0029VbCC0Yd89inr4hIduq2y'
  },

  // -------- SOCIAL LINKS --------
  socialLinks: {
    tiktok: '',
    instagram: '',
    facebook: ''
  }
};

// Make globally accessible
window.CONFIG = CONFIG;
