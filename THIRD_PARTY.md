# Third-party content

## mushaf.json
Page layout data derived from **quran-qcf4** v1.1.0 (pages/, index.json), MIT License,
Copyright (c) 2026 Mohamad Hajj Rabee. https://github.com/MohamadHajjRabee/quran-qcf4

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of
the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.

## Mushaf fonts
The QCF4 page fonts (Madinah Mushaf 1441 AH, calligraphy by Uthman Taha, King Fahd Glorious Quran Printing Complex;
WOFF2 version by Ahmad ElGharib) are NOT included in this repository. The app loads them from the quran-qcf4
package on jsDelivr, for Quranic rendering only.

## Quran text (memorization)
Uthmani text from The Noble Qur'an Encyclopedia (quranenc.com), via the quran-json package.

## Quarter, page and juz boundaries
From **quran-meta** v7.0.0 (Hafs lists), MIT License, Copyright (c) 2020 Quran-Center. https://www.npmjs.com/package/quran-meta

## Tajweed colour mushaf
- tajweed.json: built from QUL's open exports (qpc-v4 words, qpc-v4-tajweed-15-lines layout), https://qul.tarteel.ai
- The colour page fonts (KFGQPC V4, 1441H) are © King Fahd Glorious Qur'an Printing Complex, published by QUL. They are NOT included in this repository; the app loads them from the @tlawat/mushaf-fonts-qpc-v4-tajweed package on jsDelivr, unmodified. Their notice reads: "NOT FOR SALE, ONLY CHARITABLE (SADAQA) PURPOSE ONLY. PRINTING AND PUBLISHING NOT PERMITTED WITHOUT PRIOR PERMISSION FROM KING FAHAD GLORIOUS QURAN PRINTING COMPLEX." This app is free.

## Quran speech model (test link only)
- Model: tarteel-ai/whisper-base-ar-quran by Tarteel AI, fine-tuned from OpenAI Whisper base. Licence: Apache License 2.0.
  Source: https://huggingface.co/tarteel-ai/whisper-base-ar-quran
- Converted to ONNX and quantized to 8-bit for on-device use (files in /models/tarteel-base). Weights are otherwise unchanged.
- Runs in the browser with Transformers.js (@huggingface/transformers, Apache License 2.0), loaded from jsDelivr.

## معاني الكلمات (meanings.json)
- المصدر: «السراج في بيان غريب القرآن»، معاني الكلمات باللغة العربية، من موسوعة القرآن الكريم QuranEnc.com (المفتاح: arabic_seraj).
- أُخذت النسخة بتاريخ 2026-11-19 عبر واجهة QuranEnc.com البرمجية، ويُعرض النص كما هو دون تعديل أو إضافة أو حذف، في تطبيق مجاني بلا إعلانات، وفق شروط إعادة النشر في الموقع.

## التفسير (tafsir/1.json … tafsir/114.json)
- المصدر: «التفسير الميسّر»، إعداد نخبة من العلماء، مجمع الملك فهد لطباعة المصحف الشريف، منشور في موسوعة القرآن الكريم QuranEnc.com (المفتاح: arabic_moyassar).
- أُخذت النسخة بتاريخ 2026-11-19 عبر واجهة QuranEnc.com البرمجية، ويُعرض النص كما هو دون تعديل أو إضافة أو حذف، في تطبيق مجاني بلا إعلانات، وفق شروط إعادة النشر في الموقع.

## التلاوات الصوتية (تُشغَّل من الإنترنت، لا تُحفظ في المستودع)
- المصدر: خدمة Islamic Network الصوتية (alquran.cloud)، ملف لكل آية من cdn.islamic.network. الخدمة مجانية وتسمح بالاستماع والتضمين للاستخدام الشخصي والتعليمي.
- حقوق التسجيلات محفوظة لأصحابها من القرّاء. التطبيق مجاني بلا إعلانات.
