// AgriShield — interaction layer, no dependencies

/* ============================================================
   1. TRANSLATIONS
   ============================================================ */
const translations = {
  en: {
    "a11y.skip": "Skip to content",
    "a11y.language": "Language",
    "nav.how": "How it works",
    "nav.data": "Data sources",
    "nav.diagnosis": "Diagnosis",
    "nav.train": "Try it",
    "nav.who": "Who it's for",
    "nav.contact": "Contact",
    "header.cta": "Try it now",

    "hero.eyebrow": "Built for Maharashtra's farms",
    "hero.h1": "Know what's wrong with your crop before it costs you the season.",
    "hero.lede": "AgriShield reads photos of cotton, sugarcane, soybean, grapes and other Maharashtra crops alongside local weather, soil and pest data, then turns them into a diagnosis a farmer can act on the same day — with a human expert never more than a message away.",
    "hero.btnPrimary": "Try a diagnosis",
    "hero.btnOutline": "See how it works",
    "hero.trust1": "Made for farmers, extension workers and government teams in Maharashtra",
    "hero.trust2": "Available in English, Hindi and Marathi",
    "hero.floating.title": "Leaf blight detected",
    "hero.floating.sub": "92% confidence · treatment ready",

    "perf.h2": "Model performance you can plan around",
    "perf.sub": "These are the expected ranges for the current AgriShield model, built and tuned on crop imagery and field reports from across Maharashtra.",
    "perf.card1": "Disease Detection Accuracy",
    "perf.card2": "Risk Forecasting Accuracy",
    "perf.card3": "Hotspot Mapping Precision",
    "perf.card4": "Response Time from image upload",

    "how.h2": "From a photo to a plan, in four steps",
    "how.sub": "The same pipeline runs whether the request comes from a phone in a Vidarbha cotton field or a district office dashboard in Pune.",
    "step1.title": "Capture",
    "step1.desc": "A farmer photographs the affected crop, or a sensor logs an unusual reading — no special equipment required.",
    "step2.title": "Combine",
    "step2.desc": "The image is checked against local weather, soil, location and known outbreaks nearby, not looked at alone.",
    "step3.title": "Diagnose",
    "step3.desc": "A model trained on Maharashtra's crop diseases returns a likely cause with a confidence score and a suggested treatment.",
    "step4.title": "Confirm & act",
    "step4.desc": "An extension worker can validate the result in unclear cases before it reaches the farmer as a plain-language alert.",

    "data.h2": "Six sources feed every diagnosis",
    "data.sub": "A single photo rarely tells the whole story. AgriShield brings the surrounding context in automatically.",
    "card1.title": "Crop images",
    "card1.desc": "Photos from a phone, a field camera, or an optional drone pass over the plot.",
    "card2.title": "Pest traps & sensors",
    "card2.desc": "Pheromone traps, soil and humidity sensors, and notes a worker logs by hand.",
    "card3.title": "Weather",
    "card3.desc": "Temperature, humidity, rainfall and a short-range forecast for the exact plot.",
    "card4.title": "Location & land",
    "card4.desc": "GPS position, land use, and district-level disease history recorded over time.",
    "card5.title": "Crop & farm details",
    "card5.desc": "Crop type, growth stage, soil condition and the plot's own pest history.",
    "card6.title": "Expert knowledge base",
    "card6.desc": "A reference library of diseases, agronomy practice and Maharashtra Krishi Vibhag advisories.",

    "diagnosis.eyebrow": "What the farmer sees",
    "diagnosis.h2": "A result written for the field, not for a lab report",
    "diagnosis.p": "Every diagnosis comes back as a short, plain-language card: what the problem likely is, how confident the system is, and what to do about it today.",
    "diagnosis.result.title": "Downy mildew — grapevine",
    "diagnosis.result.conf": "Confidence: 88%",
    "diagnosis.result.note": "Yellow patches on the upper leaf surface, consistent with the humid spell reported around Nashik this week.",
    "diagnosis.pill1": "Remove affected leaves",
    "diagnosis.pill2": "Apply a copper-based spray",
    "diagnosis.pill3": "Re-check in 5 days",
    "diagnosis.footnote": "Unclear cases are automatically routed to an extension worker for a second opinion before any advice reaches the farmer.",

    "train.eyebrow": "Try it yourself",
    "train.h2": "Add your own crop photos, then run a diagnosis",
    "train.sub": "Upload a few labelled photos of a crop problem you already know, and AgriShield will use them the next time you diagnose a similar-looking photo. Without any of your own data, it falls back to a small built-in reference set for common Maharashtra crop issues.",
    "train.form.heading": "Add a training photo",
    "train.form.crop": "Crop",
    "train.form.cropPh": "e.g. Cotton, Sugarcane, Grapes",
    "train.form.disease": "Disease / issue name",
    "train.form.diseasePh": "e.g. Pink bollworm damage",
    "train.form.notes": "Treatment notes (optional)",
    "train.form.notesPh": "What worked for this problem?",
    "train.form.image": "Photo",
    "train.form.submit": "Add to training set",
    "train.list.title": "Your training set",
    "train.list.reset": "Clear all my training data",
    "train.list.empty": "No training images yet — add some above, or just try a diagnosis using the built-in reference set.",
    "train.list.delete": "Remove",
    "train.added": "Added to your training set.",
    "train.cleared": "Training data cleared.",
    "train.list.resetNote": "This clears both single photos added above and any uploaded dataset.",

    "train.dataset.or": "or",
    "train.dataset.heading": "Upload a full training dataset (.zip)",
    "train.dataset.hint": "Two zip formats are supported and detected automatically. YOLOv8 / Roboflow export: a data.yaml file plus train/valid/test folders, each with an images/ and labels/ subfolder of matching .txt annotations — images already auto-oriented (EXIF stripped) and resized to 640×640 are read natively. Simple folder export: zip it as Crop/Disease/photo.jpg — one top-level folder per crop, a subfolder per disease, images inside, with an optional notes.txt per disease folder for treatment notes.",
    "train.dataset.label": "Dataset .zip file",
    "train.dataset.limit": "Max file size 2 GB. Everything is unzipped, parsed and diagnosed right here in your browser — the file is never uploaded to a server. Large datasets are sampled evenly across classes to keep the browser responsive.",
    "train.dataset.submit": "Upload dataset",
    "train.dataset.clear": "Remove uploaded dataset",
    "train.dataset.reading": "Reading zip file…",
    "train.dataset.readingLabels": "Reading labels: {n} / {t}",
    "train.dataset.tooLarge": "That file is too large — the limit for a dataset upload is 2 GB.",
    "train.dataset.notZip": "Please choose a .zip file.",
    "train.dataset.noImages": "No images found in that zip. Use Crop/Disease/photo.jpg, or a YOLOv8 export with data.yaml plus images/ and labels/ folders.",
    "train.dataset.libFail": "Could not load the zip reader — check your connection and try again.",
    "train.dataset.done": "Added {n} images from your dataset.",
    "train.dataset.truncated": "Only the first {n} images from this zip were used, to keep the browser responsive.",
    "train.dataset.doneYolo": "Processed {n} images across {c} classes from your YOLOv8 dataset.",
    "train.dataset.sampledNote": " Your dataset had {t} images — an even sample per class was used to keep the browser responsive.",
    "train.dataset.summary": "{n} images stored in this browser from your uploaded dataset(s).",
    "train.dataset.empty": "No dataset uploaded yet.",
    "train.dataset.removed": "Uploaded dataset removed.",
    "train.dataset.upgraded": "The matching engine was upgraded for accuracy — please re-upload your dataset so it's rebuilt with the new fingerprint.",
    "train.dataset.formatYolo": "YOLOv8 format detected",
    "train.dataset.formatFolder": "Folder-structured dataset",
    "train.dataset.preprocBadge": "Auto-oriented · resized 640×640",
    "train.dataset.statTotal": "Images in dataset",
    "train.dataset.statProcessed": "Images processed here",
    "train.dataset.statClasses": "Classes detected",
    "train.dataset.statSampling": "Sampling",
    "train.dataset.statSampled": "Evenly sampled per class",
    "diagnose.source.dataset": "Matched against an image from your uploaded dataset.",
    "diagnose.source.yolo": "Matched against a YOLOv8-annotated image from your uploaded dataset.",
    "diagnose.detectionsCount": "{n} object(s) were annotated on the closest matching training image.",

    "diagnose.heading": "Diagnose a crop photo",
    "diagnose.form.image": "Photo to diagnose",
    "diagnose.form.submit": "Run diagnosis",
    "diagnose.disclaimer": "This in-browser demo matches photos by visual similarity to show how the train-then-diagnose flow works. A production AgriShield deployment would replace this step with a proper vision model trained on verified field data.",
    "diagnose.source.user": "Matched against a photo you added to the training set.",
    "diagnose.source.builtin": "Matched against the built-in Maharashtra reference set — add your own field photos above to improve this.",
    "diagnose.confidence": "Confidence",
    "diagnose.notesLabel": "Suggested next step",

    "stake.h2": "One platform, three very different days",
    "stake.sub": "The same data moves through interfaces built for the person using it — a field in Vidarbha, a clipboard in Marathwada, or a district map in Mantralaya.",
    "stake1.title": "Farmer",
    "stake1.desc": "Upload a photo, get a diagnosis, and keep a running record of crop health across every season.",
    "stake1.li1": "Upload an image or a short report",
    "stake1.li2": "View diagnosis and treatment advice",
    "stake1.li3": "Get alerts before an outbreak spreads nearby",
    "stake1.li4": "Track crop health over time",
    "stake2.title": "Extension worker",
    "stake2.desc": "Step in exactly where the model is unsure, and keep every field visit on record for your taluka.",
    "stake2.li1": "Review field reports from nearby farms",
    "stake2.li2": "Confirm or correct uncertain diagnoses",
    "stake2.li3": "Send verified advice back to farmers",
    "stake2.li4": "See alerts across the whole taluka",
    "stake3.title": "Government",
    "stake3.desc": "See outbreak patterns forming at district or division level across Maharashtra while there's still time to respond.",
    "stake3.li1": "District and division-level disease maps",
    "stake3.li2": "Reports and trend analytics",
    "stake3.li3": "Resource allocation planning",
    "stake3.li4": "Policy and advisory planning support",

    "avail.h2": "A simple website — nothing to install",
    "avail.p": "AgriShield runs in the browser, works on any screen size, and speaks the languages Maharashtra's farms already speak.",
    "avail.item1": "Works on any phone or computer browser",
    "avail.item2": "English, Hindi and Marathi",
    "avail.item3": "Built around Maharashtra's major crops",

    "cta.h2": "See it work on your own crop photo.",
    "cta.p": "Add a training image or two, then try a real diagnosis — right here in the browser.",
    "cta.btn": "Try the demo",

    "footer.about": "An AI-assisted crop diagnosis and advisory platform connecting farmers, extension workers and government teams across Maharashtra.",
    "footer.platform": "Platform",
    "footer.contact": "Get in touch",
    "footer.location": "Maharashtra, India",
    "footer.copyright": "©",
    "footer.student": "Built as a student project."
  },

  hi: {
    "a11y.skip": "सामग्री पर जाएं",
    "a11y.language": "भाषा",
    "nav.how": "यह कैसे काम करता है",
    "nav.data": "डेटा स्रोत",
    "nav.diagnosis": "निदान",
    "nav.train": "आज़माएं",
    "nav.who": "यह किनके लिए है",
    "nav.contact": "संपर्क करें",
    "header.cta": "अभी आज़माएं",

    "hero.eyebrow": "महाराष्ट्र के खेतों के लिए बनाया गया",
    "hero.h1": "फसल खराब होने से पहले जानें कि समस्या क्या है।",
    "hero.lede": "AgriShield कपास, गन्ना, सोयाबीन, अंगूर जैसी महाराष्ट्र की फसलों की तस्वीरों को स्थानीय मौसम, मिट्टी और कीट डेटा के साथ जोड़कर उसी दिन काम आने वाला निदान देता है — साथ ही एक विशेषज्ञ हमेशा एक संदेश की दूरी पर।",
    "hero.btnPrimary": "निदान आज़माएं",
    "hero.btnOutline": "देखें यह कैसे काम करता है",
    "hero.trust1": "महाराष्ट्र के किसानों, विस्तार कार्यकर्ताओं और सरकारी टीमों के लिए बनाया गया",
    "hero.trust2": "अंग्रेज़ी, हिंदी और मराठी में उपलब्ध",
    "hero.floating.title": "पत्ती झुलसा रोग पाया गया",
    "hero.floating.sub": "92% विश्वास · उपचार तैयार",

    "perf.h2": "मॉडल का प्रदर्शन जिस पर आप भरोसा कर सकते हैं",
    "perf.sub": "यह वर्तमान AgriShield मॉडल की अपेक्षित सीमा है, जो महाराष्ट्र भर की फसल तस्वीरों और फ़ील्ड रिपोर्टों पर तैयार की गई है।",
    "perf.card1": "रोग पहचान सटीकता",
    "perf.card2": "जोखिम पूर्वानुमान सटीकता",
    "perf.card3": "हॉटस्पॉट मैपिंग सटीकता",
    "perf.card4": "फोटो अपलोड से प्रतिक्रिया समय",

    "how.h2": "फोटो से योजना तक, चार चरणों में",
    "how.sub": "यही प्रक्रिया चलती है चाहे अनुरोध विदर्भ के कपास के खेत से किसी फोन से आए या पुणे के जिला कार्यालय के डैशबोर्ड से।",
    "step1.title": "फोटो लें",
    "step1.desc": "किसान प्रभावित फसल की तस्वीर लेता है, या सेंसर किसी असामान्य रीडिंग को दर्ज करता है — किसी विशेष उपकरण की ज़रूरत नहीं।",
    "step2.title": "जोड़ें",
    "step2.desc": "तस्वीर की जांच स्थानीय मौसम, मिट्टी, स्थान और आस-पास के ज्ञात प्रकोप के साथ की जाती है, अकेले नहीं देखी जाती।",
    "step3.title": "निदान करें",
    "step3.desc": "महाराष्ट्र की फसल बीमारियों पर प्रशिक्षित मॉडल एक संभावित कारण, विश्वास स्कोर और सुझाए गए उपचार के साथ परिणाम देता है।",
    "step4.title": "पुष्टि करें और कार्य करें",
    "step4.desc": "अस्पष्ट मामलों में एक विस्तार कार्यकर्ता किसान तक पहुँचने से पहले परिणाम की पुष्टि कर सकता है।",

    "data.h2": "हर निदान में छह स्रोतों का उपयोग होता है",
    "data.sub": "एक अकेली तस्वीर पूरी कहानी नहीं बताती। AgriShield आस-पास की जानकारी अपने आप जोड़ता है।",
    "card1.title": "फसल की तस्वीरें",
    "card1.desc": "फोन, फ़ील्ड कैमरे या ड्रोन से ली गई तस्वीरें।",
    "card2.title": "कीट जाल और सेंसर",
    "card2.desc": "फेरोमोन जाल, मिट्टी व नमी सेंसर, और हाथ से दर्ज किए गए नोट्स।",
    "card3.title": "मौसम",
    "card3.desc": "तापमान, नमी, वर्षा और उस खेत के लिए अल्पकालिक पूर्वानुमान।",
    "card4.title": "स्थान और भूमि",
    "card4.desc": "GPS स्थान, भूमि उपयोग और समय के साथ दर्ज ज़िला-स्तरीय रोग इतिहास।",
    "card5.title": "फसल व खेत विवरण",
    "card5.desc": "फसल का प्रकार, वृद्धि चरण, मिट्टी की स्थिति और खेत का कीट इतिहास।",
    "card6.title": "विशेषज्ञ ज्ञान आधार",
    "card6.desc": "बीमारियों, कृषि विज्ञान और महाराष्ट्र कृषि विभाग की सलाह की एक संदर्भ लाइब्रेरी।",

    "diagnosis.eyebrow": "किसान को क्या दिखता है",
    "diagnosis.h2": "खेत के लिए लिखा गया परिणाम, प्रयोगशाला रिपोर्ट नहीं",
    "diagnosis.p": "हर निदान एक छोटे, सरल भाषा वाले कार्ड के रूप में आता है: समस्या क्या हो सकती है, सिस्टम को कितना भरोसा है, और आज क्या करना है।",
    "diagnosis.result.title": "डाउनी मिल्ड्यू — अंगूर की बेल",
    "diagnosis.result.conf": "विश्वास: 88%",
    "diagnosis.result.note": "पत्ती की ऊपरी सतह पर पीले धब्बे, नासिक क्षेत्र में इस हफ्ते की नमी के अनुरूप।",
    "diagnosis.pill1": "प्रभावित पत्तियाँ हटाएं",
    "diagnosis.pill2": "कॉपर-आधारित स्प्रे लगाएं",
    "diagnosis.pill3": "5 दिन में फिर जांचें",
    "diagnosis.footnote": "अस्पष्ट मामलों को किसान तक पहुँचने से पहले स्वतः एक विस्तार कार्यकर्ता के पास भेजा जाता है।",

    "train.eyebrow": "खुद आज़माएं",
    "train.h2": "अपनी फसल की तस्वीरें जोड़ें, फिर निदान चलाएं",
    "train.sub": "किसी ज्ञात फसल समस्या की कुछ लेबल की गई तस्वीरें अपलोड करें, और अगली बार मिलती-जुलती तस्वीर पर AgriShield उनका उपयोग करेगा। बिना डेटा के, यह महाराष्ट्र की सामान्य फसल समस्याओं के एक छोटे अंतर्निहित संदर्भ सेट का उपयोग करता है।",
    "train.form.heading": "एक प्रशिक्षण तस्वीर जोड़ें",
    "train.form.crop": "फसल",
    "train.form.cropPh": "जैसे कपास, गन्ना, अंगूर",
    "train.form.disease": "रोग / समस्या का नाम",
    "train.form.diseasePh": "जैसे गुलाबी सुंडी क्षति",
    "train.form.notes": "उपचार नोट्स (वैकल्पिक)",
    "train.form.notesPh": "इस समस्या के लिए क्या काम आया?",
    "train.form.image": "तस्वीर",
    "train.form.submit": "प्रशिक्षण सेट में जोड़ें",
    "train.list.title": "आपका प्रशिक्षण सेट",
    "train.list.reset": "मेरा सारा प्रशिक्षण डेटा हटाएं",
    "train.list.empty": "अभी तक कोई प्रशिक्षण तस्वीर नहीं — ऊपर कुछ जोड़ें, या अंतर्निहित संदर्भ सेट से निदान आज़माएं।",
    "train.list.delete": "हटाएं",
    "train.added": "आपके प्रशिक्षण सेट में जोड़ा गया।",
    "train.cleared": "प्रशिक्षण डेटा हटा दिया गया।",

    "diagnose.heading": "फसल की तस्वीर का निदान करें",
    "diagnose.form.image": "निदान के लिए तस्वीर",
    "diagnose.form.submit": "निदान चलाएं",
    "diagnose.disclaimer": "यह ब्राउज़र-आधारित डेमो तस्वीरों को दृश्य समानता के आधार पर मिलाता है ताकि दिखाया जा सके कि प्रशिक्षण-फिर-निदान प्रक्रिया कैसे काम करती है। एक वास्तविक AgriShield में इसकी जगह सत्यापित फ़ील्ड डेटा पर प्रशिक्षित एक उचित विज़न मॉडल होगा।",
    "diagnose.source.user": "आपके द्वारा जोड़ी गई प्रशिक्षण तस्वीर से मिलान किया गया।",
    "diagnose.source.builtin": "अंतर्निहित महाराष्ट्र संदर्भ सेट से मिलान किया गया — इसे बेहतर बनाने के लिए ऊपर अपनी फ़ील्ड तस्वीरें जोड़ें।",
    "diagnose.confidence": "विश्वास",
    "diagnose.notesLabel": "सुझाया गया अगला कदम",

    "stake.h2": "एक मंच, तीन बहुत अलग दिन",
    "stake.sub": "यही डेटा उस व्यक्ति के लिए बने इंटरफ़ेस से होकर गुज़रता है जो इसका उपयोग करता है — विदर्भ का खेत, मराठवाड़ा की क्लिपबोर्ड, या मंत्रालय का ज़िला मानचित्र।",
    "stake1.title": "किसान",
    "stake1.desc": "तस्वीर अपलोड करें, निदान पाएं, और हर मौसम में फसल स्वास्थ्य का रिकॉर्ड रखें।",
    "stake1.li1": "एक तस्वीर या संक्षिप्त रिपोर्ट अपलोड करें",
    "stake1.li2": "निदान और उपचार सलाह देखें",
    "stake1.li3": "प्रकोप फैलने से पहले अलर्ट पाएं",
    "stake1.li4": "समय के साथ फसल स्वास्थ्य को ट्रैक करें",
    "stake2.title": "विस्तार कार्यकर्ता",
    "stake2.desc": "जहां मॉडल अनिश्चित हो वहीं कदम रखें, और अपने तालुका के हर फ़ील्ड विज़िट का रिकॉर्ड रखें।",
    "stake2.li1": "आस-पास के खेतों की रिपोर्टें देखें",
    "stake2.li2": "अनिश्चित निदानों की पुष्टि या सुधार करें",
    "stake2.li3": "सत्यापित सलाह किसानों को भेजें",
    "stake2.li4": "पूरे तालुका में अलर्ट देखें",
    "stake3.title": "सरकार",
    "stake3.desc": "महाराष्ट्र भर में ज़िला या मंडल स्तर पर बनते प्रकोप के पैटर्न को समय रहते देखें।",
    "stake3.li1": "ज़िला और मंडल-स्तरीय रोग मानचित्र",
    "stake3.li2": "रिपोर्ट और रुझान विश्लेषण",
    "stake3.li3": "संसाधन आवंटन योजना",
    "stake3.li4": "नीति व सलाह नियोजन सहायता",

    "avail.h2": "एक सरल वेबसाइट — इंस्टॉल करने की ज़रूरत नहीं",
    "avail.p": "AgriShield ब्राउज़र में चलता है, किसी भी स्क्रीन आकार पर काम करता है, और महाराष्ट्र के खेतों की भाषाएं बोलता है।",
    "avail.item1": "किसी भी फोन या कंप्यूटर ब्राउज़र पर काम करता है",
    "avail.item2": "अंग्रेज़ी, हिंदी और मराठी",
    "avail.item3": "महाराष्ट्र की प्रमुख फसलों के लिए बनाया गया",

    "cta.h2": "अपनी फसल की तस्वीर पर इसे काम करते देखें।",
    "cta.p": "एक-दो प्रशिक्षण तस्वीरें जोड़ें, फिर यहीं ब्राउज़र में असली निदान आज़माएं।",
    "cta.btn": "डेमो आज़माएं",

    "footer.about": "एक AI-सहायित फसल निदान और सलाह मंच जो महाराष्ट्र भर के किसानों, विस्तार कार्यकर्ताओं और सरकारी टीमों को जोड़ता है।",
    "footer.platform": "मंच",
    "footer.contact": "संपर्क करें",
    "footer.location": "महाराष्ट्र, भारत",
    "footer.copyright": "©",
    "footer.student": "एक छात्र परियोजना के रूप में बनाया गया।"
  },

  mr: {
    "a11y.skip": "मजकुराकडे जा",
    "a11y.language": "भाषा",
    "nav.how": "हे कसे काम करते",
    "nav.data": "डेटा स्रोत",
    "nav.diagnosis": "निदान",
    "nav.train": "वापरून पहा",
    "nav.who": "हे कोणासाठी आहे",
    "nav.contact": "संपर्क",
    "header.cta": "आत्ताच वापरून पहा",

    "hero.eyebrow": "महाराष्ट्रातील शेतांसाठी तयार केलेले",
    "hero.h1": "हंगाम वाया जाण्याआधी पिकाची समस्या काय आहे ते जाणून घ्या.",
    "hero.lede": "AgriShield कापूस, ऊस, सोयाबीन, द्राक्षे यांसारख्या महाराष्ट्रातील पिकांच्या फोटोंना स्थानिक हवामान, माती आणि कीड माहितीसोबत जोडून त्याच दिवशी उपयोगी पडेल असे निदान देते — आणि तज्ज्ञ नेहमी एका संदेशाच्या अंतरावर असतो.",
    "hero.btnPrimary": "निदान वापरून पहा",
    "hero.btnOutline": "हे कसे काम करते ते पहा",
    "hero.trust1": "महाराष्ट्रातील शेतकरी, विस्तार कार्यकर्ते आणि सरकारी संघांसाठी बनवले",
    "hero.trust2": "इंग्रजी, हिंदी आणि मराठीत उपलब्ध",
    "hero.floating.title": "पानावरील करपा रोग आढळला",
    "hero.floating.sub": "92% विश्वासार्हता · उपचार तयार",

    "perf.h2": "अपेक्षित मॉडेल कामगिरी",
    "perf.sub": "सध्याच्या AgriShield मॉडेलसाठी या अपेक्षित मर्यादा आहेत, महाराष्ट्रभरातील पीक छायाचित्रे आणि फील्ड अहवालांवर आधारित.",
    "perf.card1": "रोग ओळख अचूकता",
    "perf.card2": "जोखीम अंदाज अचूकता",
    "perf.card3": "हॉटस्पॉट मॅपिंग अचूकता",
    "perf.card4": "फोटो अपलोडपासून प्रतिसाद वेळ",

    "how.h2": "फोटोपासून योजनेपर्यंत, चार टप्प्यांत",
    "how.sub": "विनंती विदर्भातील कापसाच्या शेतातील फोनवरून येवो किंवा पुण्यातील जिल्हा कार्यालयाच्या डॅशबोर्डवरून, प्रक्रिया तीच असते.",
    "step1.title": "फोटो काढा",
    "step1.desc": "शेतकरी प्रभावित पिकाचा फोटो काढतो, किंवा सेन्सर असामान्य नोंद करतो — विशेष उपकरणाची गरज नाही.",
    "step2.title": "एकत्र करा",
    "step2.desc": "फोटोची तपासणी स्थानिक हवामान, माती, स्थान आणि जवळपासच्या ज्ञात प्रादुर्भावासोबत केली जाते, एकट्याने नाही.",
    "step3.title": "निदान करा",
    "step3.desc": "महाराष्ट्रातील पीक रोगांवर प्रशिक्षित मॉडेल संभाव्य कारण, विश्वासार्हता गुण आणि सुचवलेला उपचार देते.",
    "step4.title": "पुष्टी करा व कृती करा",
    "step4.desc": "अस्पष्ट प्रकरणांत विस्तार कार्यकर्ता शेतकऱ्यापर्यंत पोहोचण्याआधी निकालाची पडताळणी करू शकतो.",

    "data.h2": "प्रत्येक निदानासाठी सहा स्रोत वापरले जातात",
    "data.sub": "एकटा फोटो संपूर्ण कहाणी सांगत नाही. AgriShield आजूबाजूची माहिती आपोआप जोडते.",
    "card1.title": "पिकांचे फोटो",
    "card1.desc": "फोन, फील्ड कॅमेरा किंवा ड्रोनने काढलेले फोटो.",
    "card2.title": "कीड सापळे व सेन्सर",
    "card2.desc": "फेरोमोन सापळे, माती व आर्द्रता सेन्सर, आणि हाताने नोंदवलेल्या टिपा.",
    "card3.title": "हवामान",
    "card3.desc": "तापमान, आर्द्रता, पाऊस आणि त्या शेतासाठी अल्पकालीन अंदाज.",
    "card4.title": "स्थान व जमीन",
    "card4.desc": "GPS स्थान, जमीन वापर आणि कालांतराने नोंदवलेला जिल्हा-स्तरीय रोग इतिहास.",
    "card5.title": "पीक व शेत तपशील",
    "card5.desc": "पिकाचा प्रकार, वाढीचा टप्पा, मातीची स्थिती आणि शेताचा कीड इतिहास.",
    "card6.title": "तज्ज्ञ माहिती संच",
    "card6.desc": "रोग, कृषी पद्धती आणि महाराष्ट्र कृषी विभागाच्या सल्ल्यांचा संदर्भ ग्रंथालय.",

    "diagnosis.eyebrow": "शेतकऱ्याला काय दिसते",
    "diagnosis.h2": "शेतासाठी लिहिलेला निकाल, प्रयोगशाळा अहवाल नव्हे",
    "diagnosis.p": "प्रत्येक निदान एका लहान, सोप्या भाषेतील कार्डाच्या रूपात येते: समस्या काय असू शकते, प्रणालीला किती विश्वास आहे, आणि आज काय करायचे.",
    "diagnosis.result.title": "डाउनी मिल्ड्यू — द्राक्षवेल",
    "diagnosis.result.conf": "विश्वासार्हता: 88%",
    "diagnosis.result.note": "पानाच्या वरच्या पृष्ठभागावर पिवळे डाग, नाशिक भागातील या आठवड्यातील दमट हवामानाशी सुसंगत.",
    "diagnosis.pill1": "प्रभावित पाने काढून टाका",
    "diagnosis.pill2": "कॉपर-आधारित फवारणी करा",
    "diagnosis.pill3": "5 दिवसांनी पुन्हा तपासा",
    "diagnosis.footnote": "अस्पष्ट प्रकरणे शेतकऱ्यापर्यंत पोहोचण्याआधी आपोआप विस्तार कार्यकर्त्याकडे पाठवली जातात.",

    "train.eyebrow": "स्वतः वापरून पहा",
    "train.h2": "स्वतःचे पिकांचे फोटो जोडा, मग निदान चालवा",
    "train.sub": "तुम्हाला आधीच माहीत असलेल्या पीक समस्येचे काही लेबल केलेले फोटो अपलोड करा, आणि पुढच्या वेळी अशाच दिसणाऱ्या फोटोचे निदान करताना AgriShield त्यांचा वापर करेल. स्वतःचा डेटा नसल्यास, ते महाराष्ट्रातील सामान्य पीक समस्यांच्या एका लहान अंगभूत संदर्भ संचाचा वापर करते.",
    "train.form.heading": "प्रशिक्षण फोटो जोडा",
    "train.form.crop": "पीक",
    "train.form.cropPh": "उदा. कापूस, ऊस, द्राक्षे",
    "train.form.disease": "रोग / समस्येचे नाव",
    "train.form.diseasePh": "उदा. गुलाबी बोंडअळी नुकसान",
    "train.form.notes": "उपचार टिपा (ऐच्छिक)",
    "train.form.notesPh": "या समस्येसाठी काय उपयोगी पडले?",
    "train.form.image": "फोटो",
    "train.form.submit": "प्रशिक्षण संचात जोडा",
    "train.list.title": "तुमचा प्रशिक्षण संच",
    "train.list.reset": "माझा सर्व प्रशिक्षण डेटा हटवा",
    "train.list.empty": "अजून प्रशिक्षण फोटो नाहीत — वर काही जोडा, किंवा अंगभूत संदर्भ संच वापरून निदान करून पहा.",
    "train.list.delete": "काढा",
    "train.added": "तुमच्या प्रशिक्षण संचात जोडले.",
    "train.cleared": "प्रशिक्षण डेटा हटवला.",

    "diagnose.heading": "पिकाच्या फोटोचे निदान करा",
    "diagnose.form.image": "निदानासाठी फोटो",
    "diagnose.form.submit": "निदान चालवा",
    "diagnose.disclaimer": "हे ब्राउझरमधील डेमो प्रशिक्षण-नंतर-निदान प्रक्रिया कशी काम करते हे दाखवण्यासाठी फोटोंची दृश्य साम्यतेनुसार जुळणी करते. प्रत्यक्ष AgriShield मध्ये याजागी पडताळणी केलेल्या फील्ड डेटावर प्रशिक्षित योग्य व्हिजन मॉडेल असेल.",
    "diagnose.source.user": "तुम्ही जोडलेल्या प्रशिक्षण फोटोशी जुळवले.",
    "diagnose.source.builtin": "अंगभूत महाराष्ट्र संदर्भ संचाशी जुळवले — हे सुधारण्यासाठी वर स्वतःचे फील्ड फोटो जोडा.",
    "diagnose.confidence": "विश्वासार्हता",
    "diagnose.notesLabel": "सुचवलेली पुढील पायरी",

    "stake.h2": "एक व्यासपीठ, तीन खूप वेगळे दिवस",
    "stake.sub": "हाच डेटा वापरणाऱ्या व्यक्तीसाठी बनवलेल्या इंटरफेसमधून जातो — विदर्भातील शेत, मराठवाड्यातील क्लिपबोर्ड, किंवा मंत्रालयातील जिल्हा नकाशा.",
    "stake1.title": "शेतकरी",
    "stake1.desc": "फोटो अपलोड करा, निदान मिळवा, आणि प्रत्येक हंगामात पीक आरोग्याची नोंद ठेवा.",
    "stake1.li1": "फोटो किंवा छोटा अहवाल अपलोड करा",
    "stake1.li2": "निदान आणि उपचार सल्ला पहा",
    "stake1.li3": "प्रादुर्भाव पसरण्याआधी सूचना मिळवा",
    "stake1.li4": "कालांतराने पीक आरोग्याचा मागोवा घ्या",
    "stake2.title": "विस्तार कार्यकर्ता",
    "stake2.desc": "जिथे मॉडेल अनिश्चित असेल तिथेच लक्ष द्या, आणि तुमच्या तालुक्यातील प्रत्येक फील्ड भेटीची नोंद ठेवा.",
    "stake2.li1": "जवळपासच्या शेतांचे अहवाल पहा",
    "stake2.li2": "अनिश्चित निदानांची पुष्टी किंवा दुरुस्ती करा",
    "stake2.li3": "पडताळणी केलेला सल्ला शेतकऱ्यांना पाठवा",
    "stake2.li4": "संपूर्ण तालुक्यातील सूचना पहा",
    "stake3.title": "सरकार",
    "stake3.desc": "महाराष्ट्रभर जिल्हा किंवा विभाग पातळीवर तयार होणारे प्रादुर्भावाचे नमुने वेळेत पहा.",
    "stake3.li1": "जिल्हा आणि विभाग-स्तरीय रोग नकाशे",
    "stake3.li2": "अहवाल आणि कल विश्लेषण",
    "stake3.li3": "संसाधन वाटप नियोजन",
    "stake3.li4": "धोरण व सल्ला नियोजन सहाय्य",

    "avail.h2": "एक साधी वेबसाइट — काहीही इन्स्टॉल करण्याची गरज नाही",
    "avail.p": "AgriShield ब्राउझरमध्ये चालते, कोणत्याही स्क्रीन आकारावर काम करते, आणि महाराष्ट्रातील शेतांची भाषा बोलते.",
    "avail.item1": "कोणत्याही फोन किंवा संगणक ब्राउझरवर काम करते",
    "avail.item2": "इंग्रजी, हिंदी आणि मराठी",
    "avail.item3": "महाराष्ट्रातील प्रमुख पिकांसाठी बनवले",

    "cta.h2": "तुमच्या स्वतःच्या पीक फोटोवर हे काम करताना पहा.",
    "cta.p": "एक-दोन प्रशिक्षण फोटो जोडा, मग इथेच ब्राउझरमध्ये खरे निदान वापरून पहा.",
    "cta.btn": "डेमो वापरून पहा",

    "footer.about": "महाराष्ट्रभरातील शेतकरी, विस्तार कार्यकर्ते आणि सरकारी संघांना जोडणारे AI-सहाय्यित पीक निदान आणि सल्ला व्यासपीठ.",
    "footer.platform": "व्यासपीठ",
    "footer.contact": "संपर्क साधा",
    "footer.location": "महाराष्ट्र, भारत",
    "footer.copyright": "©",
    "footer.student": "विद्यार्थी प्रकल्प म्हणून तयार केले."
  }
};

const LANG_KEY = "agrishield_lang";

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });

  const select = document.getElementById("langSelect");
  if (select) select.value = lang;

  try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignore */ }
}

function getStoredLanguage() {
  try {
    return localStorage.getItem(LANG_KEY) || "en";
  } catch (e) {
    return "en";
  }
}

/* ============================================================
   2. TRAIN / DIAGNOSE DEMO (in-browser, no backend)
   ============================================================ */
const TRAIN_KEY = "agrishield_training_v1";

// Small built-in reference set so diagnosis works even with no user data.
// Colors are rough average-RGB fingerprints used only for this demo's
// nearest-neighbour matching — not a real trained model.
const BUILTIN_DATA = [
  { crop: "Cotton", label: "Pink bollworm damage", notes: "Remove and destroy affected bolls; install pheromone traps; consult your Krishi Sahayak before spraying.", color: [178, 140, 108] },
  { crop: "Grapes", label: "Downy mildew", notes: "Remove affected leaves; apply a copper-based spray; improve canopy airflow.", color: [150, 168, 92] },
  { crop: "Sugarcane", label: "Red rot", notes: "Avoid using infected sets for planting; destroy affected clumps; rotate with a non-host crop.", color: [138, 64, 46] },
  { crop: "Soybean", label: "Yellow mosaic virus", notes: "Control whitefly vector; remove infected plants early; use tolerant varieties next season.", color: [196, 188, 66] },
  { crop: "Onion", label: "Purple blotch", notes: "Improve field drainage; avoid overhead irrigation; apply a recommended fungicide.", color: [112, 88, 76] },
  { crop: "Tur (Pigeon pea)", label: "Fusarium wilt", notes: "Uproot and destroy wilted plants; rotate crops; use wilt-resistant seed next season.", color: [172, 142, 78] },
  { crop: "Any crop", label: "No obvious disease — leaf looks healthy", notes: "Keep monitoring weekly, especially after rain.", color: [72, 128, 62] }
];

function loadTrainingData() {
  try {
    const raw = localStorage.getItem(TRAIN_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveTrainingData(list) {
  try { localStorage.setItem(TRAIN_KEY, JSON.stringify(list)); } catch (e) { /* storage full or unavailable */ }
}

function readFileAsDataUrl(file) {
  return new Promise(function (resolve, reject) {
    const reader = new FileReader();
    reader.onload = function () { resolve(reader.result); };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function averageColorFromDataUrl(dataUrl) { return computeFingerprintFromDataUrl(dataUrl); }

// Spatial color fingerprint used for nearest-neighbour matching in this demo.
//
// IMPORTANT: earlier versions of this file reduced an entire photo to a
// single flat average RGB triplet (3 numbers). That is why diagnosis kept
// returning the same crop/disease regardless of the uploaded photo: nearly
// every leaf photo's *overall* average color is some shade of green/brown,
// so almost all 21,000+ dataset images ended up clustered on top of each
// other in that 3-number space, and one entry near the centre of that
// cluster won the "nearest neighbour" search for almost every query photo.
// Disease symptoms (spots, lesions, discoloration) are usually a small part
// of the frame and get washed out by a single whole-image average.
//
// Splitting the photo into an FP_GRID x FP_GRID grid and averaging each
// cell separately keeps this a cheap, dependency-free, in-browser
// computation, but gives a much higher-dimensional, far less degenerate
// fingerprint (FP_LEN numbers instead of 3) that actually reflects *where*
// in the photo the color differs — which is what nearest-neighbour matching
// needs to tell similar-looking diseases apart.
const FP_GRID = 4;                 // 4x4 = 16 regions sampled per photo
const FP_LEN = 3 * FP_GRID * FP_GRID; // 48 numbers per fingerprint
const FINGERPRINT_VERSION = 2;     // bump this if the fingerprint shape ever changes again

function computeFingerprintFromDataUrl(dataUrl) {
  return new Promise(function (resolve, reject) {
    const img = new Image();
    img.onload = function () {
      const size = 40; // sample canvas — same cost as the old single-average version
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, size, size);
      let data;
      try {
        data = ctx.getImageData(0, 0, size, size).data;
      } catch (e) {
        reject(e);
        return;
      }

      const cell = size / FP_GRID;
      const cellCount = FP_GRID * FP_GRID;
      const sums = new Array(cellCount * 3).fill(0);
      const counts = new Array(cellCount).fill(0);

      for (let y = 0; y < size; y++) {
        const cy = Math.min(FP_GRID - 1, Math.floor(y / cell));
        for (let x = 0; x < size; x++) {
          const cx = Math.min(FP_GRID - 1, Math.floor(x / cell));
          const cellIdx = cy * FP_GRID + cx;
          const pixelIdx = (y * size + x) * 4;
          sums[cellIdx * 3] += data[pixelIdx];
          sums[cellIdx * 3 + 1] += data[pixelIdx + 1];
          sums[cellIdx * 3 + 2] += data[pixelIdx + 2];
          counts[cellIdx]++;
        }
      }

      const fingerprint = new Array(cellCount * 3);
      for (let c = 0; c < cellCount; c++) {
        const n = counts[c] || 1;
        fingerprint[c * 3] = Math.round(sums[c * 3] / n);
        fingerprint[c * 3 + 1] = Math.round(sums[c * 3 + 1] / n);
        fingerprint[c * 3 + 2] = Math.round(sums[c * 3 + 2] / n);
      }
      resolve(fingerprint);
    };
    img.onerror = reject;
    img.src = dataUrl;
  });
}

// Older data (the built-in reference set, or training photos added before
// this fix) only has a flat 3-number [r,g,b] fingerprint. Expand it to the
// current FP_LEN shape by treating it as a uniform-color image, so it can
// still be compared on equal terms instead of silently corrupting distances.
function expandFlatColor(rgb) {
  const out = [];
  for (let i = 0; i < FP_GRID * FP_GRID; i++) { out.push(rgb[0], rgb[1], rgb[2]); }
  return out;
}

function normalizeFingerprint(fp) {
  if (!fp || !fp.length) return null;
  if (fp.length === FP_LEN) return fp;
  if (fp.length === 3) return expandFlatColor(fp);
  return null; // unrecognized shape — exclude rather than risk a bogus match
}

function colorDistance(a, b) {
  const va = normalizeFingerprint(a);
  const vb = normalizeFingerprint(b);
  if (!va || !vb) return Infinity;
  let sum = 0;
  for (let i = 0; i < va.length; i++) { sum += Math.pow(va[i] - vb[i], 2); }
  return Math.sqrt(sum);
}

/* ============================================================
   2b. DATASET (.zip) UPLOAD — stored in IndexedDB, in-browser only
   ============================================================ */
const DB_NAME = "agrishield_db";
const DB_VERSION = 2;
const DATASET_STORE = "datasetEntries";
const META_STORE = "datasetMeta";
const MAX_ZIP_BYTES = 4 * 1024 * 1024 * 1024;   // 4 GB hard limit on the zip itself
const MAX_ZIP_IMAGES = 30000;                   // cap for the simple Crop/Disease folder format — raised so a full ~22k-image dataset is used, not sampled
const PER_CLASS_CAP = Infinity;                 // YOLOv8 format: no per-class cap — every labelled image is used for matching
const MAX_YOLO_IMAGES = 30000;                  // YOLOv8 format: overall safety ceiling, above any dataset size we expect here
const THUMB_SIZE = 96;                          // stored preview size, not the original file — trimmed a bit since it's now stored 20k+ times
const IMAGE_BATCH_SIZE = 12;                    // how many images are decoded/thumbnailed concurrently while building the dataset

let dbPromise = null;
function openDB() {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise(function (resolve, reject) {
    if (!("indexedDB" in window)) { reject(new Error("IndexedDB unsupported")); return; }
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = function (e) {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(DATASET_STORE)) {
        db.createObjectStore(DATASET_STORE, { keyPath: "id" });
      }
      if (!db.objectStoreNames.contains(META_STORE)) {
        db.createObjectStore(META_STORE, { keyPath: "key" });
      }
    };
    req.onsuccess = function () { resolve(req.result); };
    req.onerror = function () { reject(req.error); };
  });
  return dbPromise;
}

function dbSetMeta(value) {
  return openDB().then(function (db) {
    return new Promise(function (resolve, reject) {
      const tx = db.transaction(META_STORE, "readwrite");
      tx.objectStore(META_STORE).put({ key: "dataset", value: value });
      tx.oncomplete = function () { resolve(); };
      tx.onerror = function () { reject(tx.error); };
    });
  });
}

function dbGetMeta() {
  return openDB().then(function (db) {
    return new Promise(function (resolve, reject) {
      const tx = db.transaction(META_STORE, "readonly");
      const req = tx.objectStore(META_STORE).get("dataset");
      req.onsuccess = function () { resolve(req.result ? req.result.value : null); };
      req.onerror = function () { reject(req.error); };
    });
  });
}

function dbAddEntries(entries) {
  return openDB().then(function (db) {
    return new Promise(function (resolve, reject) {
      const tx = db.transaction(DATASET_STORE, "readwrite");
      const store = tx.objectStore(DATASET_STORE);
      entries.forEach(function (entry) { store.put(entry); });
      tx.oncomplete = function () { resolve(); };
      tx.onerror = function () { reject(tx.error); };
    });
  });
}

function dbGetAllEntries() {
  return openDB().then(function (db) {
    return new Promise(function (resolve, reject) {
      const tx = db.transaction(DATASET_STORE, "readonly");
      const store = tx.objectStore(DATASET_STORE);
      const req = store.getAll ? store.getAll() : null;
      if (req) {
        req.onsuccess = function () { resolve(req.result || []); };
        req.onerror = function () { reject(req.error); };
      } else {
        // Fallback for browsers without getAll()
        const out = [];
        const cursorReq = store.openCursor();
        cursorReq.onsuccess = function (e) {
          const cursor = e.target.result;
          if (cursor) { out.push(cursor.value); cursor.continue(); } else { resolve(out); }
        };
        cursorReq.onerror = function () { reject(cursorReq.error); };
      }
    });
  });
}

function dbClearEntries() {
  return openDB().then(function (db) {
    return new Promise(function (resolve, reject) {
      const tx = db.transaction([DATASET_STORE, META_STORE], "readwrite");
      tx.objectStore(DATASET_STORE).clear();
      tx.objectStore(META_STORE).clear();
      tx.oncomplete = function () { resolve(); };
      tx.onerror = function () { reject(tx.error); };
    });
  });
}

function blobToDataUrl(blob) {
  return new Promise(function (resolve, reject) {
    const reader = new FileReader();
    reader.onload = function () { resolve(reader.result); };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

// Downscaled thumbnail so hundreds of dataset images stay cheap to store —
// the fingerprint (averageColorFromDataUrl) is computed separately, at 40x40.
function makeThumbnail(dataUrl, size) {
  return new Promise(function (resolve, reject) {
    const img = new Image();
    img.onload = function () {
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      const scale = Math.max(size / img.width, size / img.height);
      const w = img.width * scale, h = img.height * scale;
      ctx.drawImage(img, (size - w) / 2, (size - h) / 2, w, h);
      resolve(canvas.toDataURL("image/jpeg", 0.72));
    };
    img.onerror = reject;
    img.src = dataUrl;
  });
}

function formatBytes(bytes) {
  if (bytes >= 1024 * 1024 * 1024) return (bytes / (1024 * 1024 * 1024)).toFixed(2) + " GB";
  if (bytes >= 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  return Math.round(bytes / 1024) + " KB";
}

// Yields to the browser so the progress bar can repaint and the tab stays responsive.
function nextFrame() {
  return new Promise(function (resolve) { requestAnimationFrame(function () { resolve(); }); });
}

// Runs `worker` over `items` in small concurrent batches (not all at once,
// not fully sequential) so datasets with tens of thousands of entries don't
// fire thousands of simultaneous zip reads and freeze the tab.
function runBatched(items, worker, batchSize, onProgress) {
  const total = items.length;
  const results = new Array(total);
  let i = 0;
  function nextBatch() {
    if (i >= total) return Promise.resolve(results);
    const end = Math.min(i + batchSize, total);
    const slice = items.slice(i, end);
    return Promise.all(slice.map(function (item, idx) {
      return worker(item, i + idx).then(function (r) { results[i + idx] = r; }).catch(function () { results[i + idx] = null; });
    })).then(function () {
      i = end;
      if (onProgress) onProgress(i, total);
      return nextFrame().then(nextBatch);
    });
  }
  return nextBatch();
}

function renderDatasetSummary() {
  const summaryEl = document.getElementById("datasetSummary");
  const clearBtn = document.getElementById("clearDataset");
  const reportEl = document.getElementById("datasetReport");
  const formatBadge = document.getElementById("datasetFormatBadge");
  const preprocBadge = document.getElementById("datasetPreprocBadge");
  const statList = document.getElementById("datasetStatList");
  const classTagsEl = document.getElementById("datasetClassTags");
  if (!summaryEl) return;

  const lang = getStoredLanguage();
  const dict = translations[lang] || translations.en;

  Promise.all([
    dbGetAllEntries().catch(function () { return []; }),
    dbGetMeta().catch(function () { return null; })
  ]).then(function (results) {
    const entries = results[0];
    const meta = results[1];

    // The matching fingerprint format changed (see computeFingerprintFromDataUrl) —
    // a dataset processed under the old format can't be compared correctly
    // against new-format entries, so clear it and ask for a re-upload rather
    // than silently mixing incompatible fingerprints into every diagnosis.
    if (entries.length && (!meta || meta.fingerprintVersion !== FINGERPRINT_VERSION)) {
      console.warn("AgriShield: dataset was built with an older fingerprint format — clearing it so it can be re-uploaded and re-processed with the current matching engine.");
      dbClearEntries().catch(function () { /* ignore */ }).then(function () {
        summaryEl.textContent = dict["train.dataset.upgraded"] || "The matching engine was upgraded for accuracy — please re-upload your dataset so it's rebuilt with the new fingerprint.";
        if (clearBtn) clearBtn.hidden = true;
        if (reportEl) reportEl.hidden = true;
      });
      return;
    }

    if (!entries.length) {
      summaryEl.textContent = dict["train.dataset.empty"] || "No dataset uploaded yet.";
      if (clearBtn) clearBtn.hidden = true;
      if (reportEl) reportEl.hidden = true;
      return;
    }
    const template = dict["train.dataset.summary"] || "{n} images stored in this browser from your uploaded dataset(s).";
    summaryEl.textContent = template.replace("{n}", entries.length);
    if (clearBtn) clearBtn.hidden = false;

    if (!reportEl || !meta) { if (reportEl) reportEl.hidden = true; return; }

    reportEl.hidden = false;

    if (formatBadge) {
      formatBadge.textContent = meta.format === "yolo"
        ? (dict["train.dataset.formatYolo"] || "YOLOv8 format detected")
        : (dict["train.dataset.formatFolder"] || "Folder-structured dataset");
    }

    if (preprocBadge) {
      if (meta.format === "yolo") {
        preprocBadge.hidden = false;
        preprocBadge.textContent = dict["train.dataset.preprocBadge"] || "Auto-oriented · resized 640×640";
      } else {
        preprocBadge.hidden = true;
      }
    }

    if (statList) {
      statList.innerHTML = "";
      const stats = [];
      if (typeof meta.totalImages === "number") {
        stats.push([dict["train.dataset.statTotal"] || "Images in dataset", meta.totalImages.toLocaleString()]);
      }
      stats.push([dict["train.dataset.statProcessed"] || "Images processed here", meta.added.toLocaleString()]);
      if (typeof meta.classCount === "number") {
        stats.push([dict["train.dataset.statClasses"] || "Classes detected", String(meta.classCount)]);
      }
      if (meta.sampled) {
        stats.push([dict["train.dataset.statSampling"] || "Sampling", dict["train.dataset.statSampled"] || "Evenly sampled per class"]);
      }
      stats.forEach(function (pair) {
        const li = document.createElement("li");
        li.innerHTML = "<strong>" + pair[1] + "</strong> " + pair[0];
        statList.appendChild(li);
      });
    }

    if (classTagsEl) {
      classTagsEl.innerHTML = "";
      (meta.classNames || []).slice(0, 24).forEach(function (name) {
        const span = document.createElement("span");
        span.className = "dataset-class-tag";
        span.textContent = name;
        classTagsEl.appendChild(span);
      });
      if ((meta.classNames || []).length > 24) {
        const span = document.createElement("span");
        span.className = "dataset-class-tag";
        span.textContent = "+" + (meta.classNames.length - 24) + " more";
        classTagsEl.appendChild(span);
      }
    }
  });
}

/* ------------------------------------------------------------
   YOLOv8 dataset support (e.g. Roboflow exports): data.yaml +
   train/valid/test folders, each with images/ and labels/.
   ------------------------------------------------------------ */

// Very small YAML reader covering the handful of ways `names:` shows up
// in a YOLOv8 data.yaml — inline list, dashed list, or an index:name map.
function parseDataYamlNames(text) {
  const names = [];

  const inlineMatch = text.match(/names\s*:\s*\[([^\]]*)\]/);
  if (inlineMatch) {
    inlineMatch[1].split(",").forEach(function (tok) {
      const cleaned = tok.trim().replace(/^['"]|['"]$/g, "");
      if (cleaned) names.push(cleaned);
    });
    return names;
  }

  const dictMatch = text.match(/names\s*:\s*\r?\n((?:[ \t]*\d+[ \t]*:.*\r?\n?)+)/);
  if (dictMatch) {
    const map = {};
    dictMatch[1].split(/\r?\n/).forEach(function (line) {
      const m = line.match(/^[ \t]*(\d+)[ \t]*:[ \t]*(.+?)[ \t]*$/);
      if (m) map[parseInt(m[1], 10)] = m[2].trim().replace(/^['"]|['"]$/g, "");
    });
    const keys = Object.keys(map).map(Number);
    if (keys.length) {
      const maxIdx = Math.max.apply(null, keys);
      for (let i = 0; i <= maxIdx; i++) names[i] = map[i] || ("class_" + i);
    }
    return names;
  }

  const listMatch = text.match(/names\s*:\s*\r?\n((?:[ \t]*-\s*.+\r?\n?)+)/);
  if (listMatch) {
    listMatch[1].split(/\r?\n/).forEach(function (line) {
      const m = line.match(/^[ \t]*-\s*(.+?)[ \t]*$/);
      if (m) names.push(m[1].trim().replace(/^['"]|['"]$/g, ""));
    });
    return names;
  }

  return names;
}

function parseDataYamlNc(text) {
  const m = text.match(/(^|\r?\n)\s*nc\s*:\s*(\d+)/);
  return m ? parseInt(m[2], 10) : null;
}

function titleCaseWord(s) {
  return s.replace(/\b\w/g, function (c) { return c.toUpperCase(); });
}

// Splits a YOLO class name like "Tomato___Late_blight" or "corn-common-rust"
// into a crop and a disease/issue label for the existing diagnosis UI.
// Falls back gracefully for single-word / pest-style class names.
function splitClassName(raw) {
  const tripleSplit = raw.split(/___+/);
  if (tripleSplit.length >= 2) {
    return {
      crop: titleCaseWord(tripleSplit[0].replace(/[_\-]+/g, " ").trim()) || "Detected class",
      label: titleCaseWord(tripleSplit.slice(1).join(" ").replace(/[_\-]+/g, " ").trim())
    };
  }
  const cleaned = raw.replace(/[_\-]+/g, " ").trim();
  const words = cleaned.split(/\s+/).filter(Boolean);
  if (words.length > 1) {
    return { crop: titleCaseWord(words[0]), label: titleCaseWord(words.slice(1).join(" ")) };
  }
  return { crop: "Detected class", label: titleCaseWord(cleaned || raw) };
}

// Parses a YOLOv8 label .txt: each line is
// "class_id x_center y_center width height [...]" in normalized 0–1 coords.
// Returns every box plus the majority class for the image.
function parseYoloLabelText(text) {
  const boxes = [];
  const counts = {};
  text.split(/\r?\n/).forEach(function (line) {
    const tok = line.trim().split(/\s+/);
    if (tok.length < 5) return;
    const classId = parseInt(tok[0], 10);
    if (isNaN(classId)) return;
    counts[classId] = (counts[classId] || 0) + 1;
    const x = parseFloat(tok[1]), y = parseFloat(tok[2]), w = parseFloat(tok[3]), h = parseFloat(tok[4]);
    if ([x, y, w, h].every(function (n) { return !isNaN(n); })) {
      boxes.push({ classId: classId, x: x, y: y, w: w, h: h });
    }
  });
  let majorityClass = null, best = -1;
  Object.keys(counts).forEach(function (k) {
    if (counts[k] > best) { best = counts[k]; majorityClass = parseInt(k, 10); }
  });
  return { boxes: boxes, majorityClass: majorityClass, count: boxes.length };
}

// Draws the first box for the majority class onto a thumbnail so the
// diagnosis preview shows roughly where the detection was made.
function drawBoxOnDataUrl(dataUrl, box, size) {
  return new Promise(function (resolve) {
    if (!box) { resolve(dataUrl); return; }
    const img = new Image();
    img.onload = function () {
      const canvas = document.createElement("canvas");
      canvas.width = size; canvas.height = size;
      const ctx = canvas.getContext("2d");
      const scale = Math.max(size / img.width, size / img.height);
      const w = img.width * scale, h = img.height * scale;
      const ox = (size - w) / 2, oy = (size - h) / 2;
      ctx.drawImage(img, ox, oy, w, h);
      const bx = ox + (box.x - box.w / 2) * w;
      const by = oy + (box.y - box.h / 2) * h;
      const bw = box.w * w, bh = box.h * h;
      ctx.strokeStyle = "#ff5a36";
      ctx.lineWidth = 3;
      ctx.strokeRect(bx, by, bw, bh);
      resolve(canvas.toDataURL("image/jpeg", 0.75));
    };
    img.onerror = function () { resolve(dataUrl); };
    img.src = dataUrl;
  });
}

// Scans a JSZip for a YOLOv8 export: a data.yaml plus images/+labels/ pairs
// under train/valid/test (or any top-level split folder).
function detectYoloDataset(zip) {
  let yamlEntry = null;
  let readmeEntry = null;
  const imageEntries = [];
  const labelPaths = {};

  zip.forEach(function (relPath, zipEntry) {
    if (zipEntry.dir) return;
    const lower = relPath.toLowerCase();
    if (/(^|\/)data\.ya?ml$/i.test(relPath) && !yamlEntry) { yamlEntry = zipEntry; return; }
    if (/(^|\/)readme.*\.txt$/i.test(relPath) && !readmeEntry) { readmeEntry = zipEntry; return; }
    if (lower.indexOf("__macosx") !== -1) return;

    if (/\/images\/.*\.(jpe?g|png|bmp)$/i.test(relPath)) {
      imageEntries.push({ path: relPath, zipEntry: zipEntry });
    } else if (/\/labels\/.*\.txt$/i.test(relPath)) {
      labelPaths[relPath] = zipEntry;
    }
  });

  if (!yamlEntry && imageEntries.length === 0) return null;
  return { yamlEntry: yamlEntry, readmeEntry: readmeEntry, imageEntries: imageEntries, labelPaths: labelPaths };
}

// Groups a flat list of {label, ...} items into a balanced sample so a
// dataset of tens of thousands of images stays responsive in the browser
// while every class still gets representation.
function balancedSample(items, perClassCap, totalCap) {
  const byClass = {};
  const order = [];
  items.forEach(function (item) {
    if (!byClass[item.classKey]) { byClass[item.classKey] = []; order.push(item.classKey); }
    byClass[item.classKey].push(item);
  });
  order.forEach(function (key) {
    byClass[key] = byClass[key].sort(function () { return Math.random() - 0.5; }).slice(0, perClassCap);
  });
  let sampled = [];
  order.forEach(function (key) { sampled = sampled.concat(byClass[key]); });
  if (sampled.length > totalCap) {
    sampled = sampled.sort(function () { return Math.random() - 0.5; }).slice(0, totalCap);
  }
  return { sampled: sampled, classCount: order.length };
}

function processYoloDatasetZip(zip, detection, onProgress) {
  const yamlEntry = detection.yamlEntry;
  const readmeEntry = detection.readmeEntry;

  const yamlPromise = yamlEntry ? yamlEntry.async("string") : Promise.resolve("");
  const readmePromise = readmeEntry ? readmeEntry.async("string") : Promise.resolve("");

  return Promise.all([yamlPromise, readmePromise]).then(function (results) {
    const yamlText = results[0];
    const readmeText = results[1];
    const classNames = parseDataYamlNames(yamlText);
    const nc = parseDataYamlNc(yamlText);

    // Match each image to its label file: .../images/x.jpg -> .../labels/x.txt
    const pairs = [];
    detection.imageEntries.forEach(function (img) {
      const labelPath = img.path.replace(/\/images\//i, "/labels/").replace(/\.(jpe?g|png|bmp)$/i, ".txt");
      const labelEntry = detection.labelPaths[labelPath];
      if (labelEntry) pairs.push({ img: img, labelEntry: labelEntry });
    });

    if (pairs.length === 0) return Promise.reject(new Error("NO_IMAGES"));

    // Read labels in small concurrent batches (not all ~20k+ at once) so the
    // tab stays responsive while we figure out each image's class for sampling.
    if (onProgress) onProgress(0, pairs.length, "labels");
    return runBatched(pairs, function (p) {
      return p.labelEntry.async("string").then(function (text) {
        const parsed = parseYoloLabelText(text);
        return { pair: p, parsed: parsed };
      });
    }, 32, function (done, total) {
      if (onProgress) onProgress(done, total, "labels");
    }).then(function (labelled) {
      const usable = labelled.filter(function (l) { return l && l.parsed.majorityClass !== null; });
      if (usable.length === 0) return Promise.reject(new Error("NO_IMAGES"));

      const items = usable.map(function (l) {
        const classId = l.parsed.majorityClass;
        const rawName = classNames[classId] !== undefined ? classNames[classId] : ("class_" + classId);
        const split = splitClassName(rawName);
        return {
          classKey: rawName,
          crop: split.crop,
          label: split.label,
          pair: l.pair,
          box: l.parsed.boxes.filter(function (b) { return b.classId === classId; })[0] || null,
          detections: l.parsed.count
        };
      });

      const totalUsable = items.length;
      const balanced = balancedSample(items, PER_CLASS_CAP, MAX_YOLO_IMAGES);
      const toProcess = balanced.sampled;
      const total = toProcess.length;
      const datasetTag = "yolo-" + Date.now().toString(36);

      // Decode/thumbnail images concurrently in small batches rather than
      // one-by-one — needed to get through tens of thousands of images in
      // reasonable time without freezing the tab.
      return runBatched(toProcess, function (item, idx) {
        return item.pair.img.zipEntry.async("blob").then(function (blob) {
          return blobToDataUrl(blob);
        }).then(function (dataUrl) {
          return Promise.all([
            averageColorFromDataUrl(dataUrl),
            makeThumbnail(dataUrl, THUMB_SIZE).then(function (thumb) {
              return drawBoxOnDataUrl(thumb, item.box, THUMB_SIZE);
            })
          ]);
        }).then(function (results2) {
          const color = results2[0], thumb = results2[1];
          return {
            id: datasetTag + "-" + idx,
            crop: item.crop,
            label: item.label,
            notes: item.detections > 1
              ? ("YOLOv8 annotation — " + item.detections + " object(s) detected in this image.")
              : "YOLOv8 annotation from your uploaded dataset.",
            img: thumb,
            color: color,
            format: "yolo",
            detections: item.detections
          };
        });
      }, IMAGE_BATCH_SIZE, function (done, totalCount) {
        if (onProgress) onProgress(done, totalCount, "images");
      }).then(function (results) {
        const newEntries = results.filter(Boolean);
        return dbAddEntries(newEntries).then(function () {
          return {
            added: newEntries.length,
            format: "yolo",
            classCount: balanced.classCount,
            classNames: Object.keys(byClassNames(items)),
            totalImages: totalUsable,
            sampled: total < totalUsable,
            readmeText: readmeText,
            nc: nc,
            fingerprintVersion: FINGERPRINT_VERSION
          };
        });
      });
    });
  });
}

function byClassNames(items) {
  const map = {};
  items.forEach(function (it) { map[it.classKey] = true; });
  return map;
}

function parseZipEntries(zip) {
  const imageEntries = [];
  const notesByFolder = {};
  const noteFilePromises = [];

  zip.forEach(function (relPath, zipEntry) {
    if (zipEntry.dir) return;
    const parts = relPath.split("/").filter(Boolean);
    if (parts.length < 2) return; // need at least Crop/photo.jpg
    const fname = parts[parts.length - 1];

    if (/^notes\.txt$/i.test(fname)) {
      const folderKey = parts.slice(0, parts.length - 1).join("/");
      noteFilePromises.push(zipEntry.async("string").then(function (text) {
        notesByFolder[folderKey] = text.trim();
      }));
      return;
    }
    if (/\.(jpe?g|png|webp|gif|bmp)$/i.test(fname) && parts.indexOf("__MACOSX") === -1) {
      imageEntries.push({ parts: parts, zipEntry: zipEntry });
    }
  });

  return Promise.all(noteFilePromises).then(function () {
    return { imageEntries: imageEntries, notesByFolder: notesByFolder };
  });
}

function processDatasetZip(file, onProgress) {
  if (typeof JSZip === "undefined") {
    return Promise.reject(new Error("JSZip not loaded"));
  }

  return JSZip.loadAsync(file).then(function (zip) {
    const yoloDetection = detectYoloDataset(zip);
    if (yoloDetection && yoloDetection.imageEntries.length > 0 && Object.keys(yoloDetection.labelPaths).length > 0) {
      return processYoloDatasetZip(zip, yoloDetection, onProgress).then(function (result) {
        return dbSetMeta(result).then(function () { return result; });
      });
    }
    return processFolderDatasetZip(zip, onProgress);
  });
}

function processFolderDatasetZip(zip, onProgress) {
  return parseZipEntries(zip).then(function (result) {
    let imageEntries = result.imageEntries;
    const notesByFolder = result.notesByFolder;

    if (imageEntries.length === 0) {
      return Promise.reject(new Error("NO_IMAGES"));
    }

    let truncated = false;
    if (imageEntries.length > MAX_ZIP_IMAGES) {
      imageEntries = imageEntries.slice(0, MAX_ZIP_IMAGES);
      truncated = true;
    }

    const total = imageEntries.length;
    const datasetTag = "dataset-" + Date.now().toString(36);

    // Decode/thumbnail images concurrently in small batches (IMAGE_BATCH_SIZE
    // at a time) rather than one-by-one — with datasets in the tens of
    // thousands, a purely sequential loop would take far too long.
    return runBatched(imageEntries, function (item, idx) {
      const parts = item.parts;
      const crop = parts[0];
      const label = parts.length >= 3 ? parts[1] : "Uploaded dataset";
      const folderKey = parts.slice(0, parts.length - 1).join("/");
      const notes = notesByFolder[folderKey] || "";

      return item.zipEntry.async("blob").then(function (blob) {
        return blobToDataUrl(blob);
      }).then(function (dataUrl) {
        return Promise.all([averageColorFromDataUrl(dataUrl), makeThumbnail(dataUrl, THUMB_SIZE)]);
      }).then(function (results) {
        const color = results[0], thumb = results[1];
        return {
          id: datasetTag + "-" + idx,
          crop: crop,
          label: label,
          notes: notes,
          img: thumb,
          color: color,
          format: "folder"
        };
      });
    }, IMAGE_BATCH_SIZE, function (done, totalCount) {
      if (onProgress) onProgress(done, totalCount);
    }).then(function (results) {
      const newEntries = results.filter(Boolean);
      return dbAddEntries(newEntries).then(function () {
        const classNames = {};
        newEntries.forEach(function (e) { classNames[e.crop + " — " + e.label] = true; });
        const res = { added: newEntries.length, truncated: truncated };
        return dbSetMeta({
          added: res.added,
          format: "folder",
          classCount: Object.keys(classNames).length,
          classNames: Object.keys(classNames),
          totalImages: imageEntries.length,
          sampled: res.truncated,
          readmeText: "",
          nc: null,
          fingerprintVersion: FINGERPRINT_VERSION
        }).then(function () { return res; });
      });
    });
  });
}

function initDatasetForm() {
  const form = document.getElementById("datasetForm");
  if (!form) return;

  const fileInput = document.getElementById("datasetZip");
  const msg = document.getElementById("datasetMsg");
  const progressWrap = document.getElementById("datasetProgressWrap");
  const progressBar = document.getElementById("datasetProgressBar");
  const progressLabel = document.getElementById("datasetProgressLabel");
  const submitBtn = form.querySelector("button[type=submit]");

  function dict() {
    const lang = getStoredLanguage();
    return translations[lang] || translations.en;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const file = fileInput.files && fileInput.files[0];
    if (!file) return;
    const d = dict();

    if (!/\.zip$/i.test(file.name)) {
      msg.textContent = d["train.dataset.notZip"] || "Please choose a .zip file.";
      return;
    }
    if (file.size > MAX_ZIP_BYTES) {
      msg.textContent = d["train.dataset.tooLarge"] || "That file is too large — the limit for a dataset upload is 2 GB.";
      return;
    }

    msg.textContent = "";
    submitBtn.disabled = true;
    progressWrap.hidden = false;
    progressBar.style.width = "0%";
    progressLabel.textContent = d["train.dataset.reading"] || "Reading zip file…";

    processDatasetZip(file, function (done, total, phase) {
      const pct = total ? Math.round((done / total) * 100) : 0;
      progressBar.style.width = pct + "%";
      if (phase === "labels") {
        const template = d["train.dataset.readingLabels"] || "Reading labels: {n} / {t}";
        progressLabel.textContent = template.replace("{n}", done).replace("{t}", total);
      } else {
        progressLabel.textContent = done + " / " + total;
      }
    }).then(function (result) {
      let text;
      if (result.format === "yolo") {
        const yoloTemplate = d["train.dataset.doneYolo"] || "Processed {n} images across {c} classes from your YOLOv8 dataset.";
        text = yoloTemplate.replace("{n}", result.added).replace("{c}", result.classCount);
        if (result.sampled) {
          const sampleTemplate = d["train.dataset.sampledNote"] || " Your dataset had {t} images — an even sample per class was used to keep the browser responsive.";
          text += sampleTemplate.replace("{t}", result.totalImages);
        }
      } else {
        const doneTemplate = d["train.dataset.done"] || "Added {n} images from your dataset.";
        text = doneTemplate.replace("{n}", result.added);
        if (result.truncated) {
          const truncTemplate = d["train.dataset.truncated"] || "Only the first {n} images from this zip were used, to keep the browser responsive.";
          text += " " + truncTemplate.replace("{n}", MAX_ZIP_IMAGES);
        }
      }
      msg.textContent = text;
      form.reset();
      renderDatasetSummary();
    }).catch(function (err) {
      if (err && err.message === "NO_IMAGES") {
        msg.textContent = d["train.dataset.noImages"] || "No images found in that zip. Use Crop/Disease/photo.jpg, or a YOLOv8 export with data.yaml plus images/ and labels/ folders.";
      } else if (err && err.message === "JSZip not loaded") {
        msg.textContent = d["train.dataset.libFail"] || "Could not load the zip reader — check your connection and try again.";
      } else {
        msg.textContent = d["train.dataset.libFail"] || "Could not read that zip file — please try again.";
      }
    }).then(function () {
      submitBtn.disabled = false;
      progressWrap.hidden = true;
    });
  });

  const clearBtn = document.getElementById("clearDataset");
  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      dbClearEntries().then(function () {
        renderDatasetSummary();
        const d = dict();
        msg.textContent = d["train.dataset.removed"] || "Uploaded dataset removed.";
      });
    });
  }
}

function renderTrainingList() {
  const list = loadTrainingData();
  const ul = document.getElementById("trainList");
  const empty = document.getElementById("trainEmpty");
  if (!ul) return;

  ul.innerHTML = "";
  empty.style.display = list.length ? "none" : "block";

  const lang = getStoredLanguage();
  const dict = translations[lang] || translations.en;

  list.forEach(function (entry) {
    const li = document.createElement("li");

    const img = document.createElement("img");
    img.src = entry.img;
    img.alt = entry.crop + " — " + entry.label;

    const textWrap = document.createElement("div");
    textWrap.className = "train-item-text";
    const strong = document.createElement("strong");
    strong.textContent = entry.crop + " — " + entry.label;
    const span = document.createElement("span");
    span.textContent = entry.notes || "";
    textWrap.appendChild(strong);
    textWrap.appendChild(span);

    const delBtn = document.createElement("button");
    delBtn.type = "button";
    delBtn.textContent = dict["train.list.delete"] || "Remove";
    delBtn.addEventListener("click", function () {
      const updated = loadTrainingData().filter(function (e) { return e.id !== entry.id; });
      saveTrainingData(updated);
      renderTrainingList();
    });

    li.appendChild(img);
    li.appendChild(textWrap);
    li.appendChild(delBtn);
    ul.appendChild(li);
  });
}

function initTrainForm() {
  const form = document.getElementById("trainForm");
  const msg = document.getElementById("trainMsg");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const crop = document.getElementById("trainCrop").value.trim();
    const label = document.getElementById("trainLabel").value.trim();
    const notes = document.getElementById("trainNotes").value.trim();
    const fileInput = document.getElementById("trainImage");
    const file = fileInput.files && fileInput.files[0];
    if (!crop || !label || !file) return;

    readFileAsDataUrl(file).then(function (dataUrl) {
      return averageColorFromDataUrl(dataUrl).then(function (color) {
        const list = loadTrainingData();
        list.push({
          id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
          crop: crop,
          label: label,
          notes: notes,
          img: dataUrl,
          color: color
        });
        saveTrainingData(list);
        renderTrainingList();
        form.reset();
        const lang = getStoredLanguage();
        const dict = translations[lang] || translations.en;
        if (msg) msg.textContent = dict["train.added"] || "Added to your training set.";
      });
    }).catch(function () {
      if (msg) msg.textContent = "Could not read that image — please try a different file.";
    });
  });

  const resetBtn = document.getElementById("resetTraining");
  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      saveTrainingData([]);
      renderTrainingList();
      dbClearEntries().catch(function () { /* ignore */ }).then(function () {
        renderDatasetSummary();
      });
      const lang = getStoredLanguage();
      const dict = translations[lang] || translations.en;
      if (msg) msg.textContent = dict["train.cleared"] || "Training data cleared.";
    });
  }
}

function initDiagnoseForm() {
  const form = document.getElementById("diagnoseForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const fileInput = document.getElementById("diagnoseImage");
    const file = fileInput.files && fileInput.files[0];
    if (!file) return;

    readFileAsDataUrl(file).then(function (dataUrl) {
      return averageColorFromDataUrl(dataUrl).then(function (color) {
        return dbGetAllEntries().catch(function (err) {
          // Surface this instead of swallowing it — a silent failure here
          // used to mean diagnosis quietly fell back to just the 7 built-in
          // reference entries, no matter how large the uploaded dataset was.
          console.error("AgriShield: could not read the uploaded dataset from IndexedDB — diagnosis will fall back to the built-in reference set only.", err);
          return [];
        }).then(function (datasetData) {
        const userData = loadTrainingData();
        const candidates = userData.map(function (e) {
          return { crop: e.crop, label: e.label, notes: e.notes, color: e.color, source: "user" };
        }).concat(datasetData.map(function (e) {
          return { crop: e.crop, label: e.label, notes: e.notes, color: e.color, source: "dataset", format: e.format, detections: e.detections };
        })).concat(BUILTIN_DATA.map(function (e) {
          return { crop: e.crop, label: e.label, notes: e.notes, color: e.color, source: "builtin" };
        }));

        let best = null;
        let bestDist = Infinity;
        candidates.forEach(function (c) {
          const d = colorDistance(color, c.color);
          if (d < bestDist) { bestDist = d; best = c; }
        });

        // Visible in the browser console (F12 → Console) so this can be
        // checked directly: how many candidates this diagnosis actually
        // compared against, and which one it picked.
        console.log(
          "AgriShield diagnosis: compared against " + candidates.length + " images " +
          "(" + userData.length + " single training photos, " + datasetData.length + " from uploaded dataset, " +
          BUILTIN_DATA.length + " built-in). Closest match: " +
          (best ? best.crop + " — " + best.label + " (source: " + best.source + ", distance: " + Math.round(bestDist) + ")" : "none")
        );

        if (!best) return;

        // Rough, deliberately conservative confidence score for this demo.
        const maxDist = 255 * Math.sqrt(FP_LEN); // theoretical max distance for an FP_LEN-dim fingerprint
        let confidence = Math.round(100 - (bestDist / maxDist) * 100);
        confidence = Math.max(38, Math.min(confidence, 96));

        const lang = getStoredLanguage();
        const dict = translations[lang] || translations.en;

        const resultBox = document.getElementById("diagnoseResult");
        const title = document.getElementById("diagnoseTitle");
        const conf = document.getElementById("diagnoseConfidence");
        const note = document.getElementById("diagnoseNote");
        const source = document.getElementById("diagnoseSource");
        const preview = document.getElementById("diagnosePreview");
        const dot = document.getElementById("diagnoseDot");
        const detectionsEl = document.getElementById("diagnoseDetections");

        title.textContent = best.crop + " — " + best.label;
        conf.textContent = (dict["diagnose.confidence"] || "Confidence") + ": " + confidence + "%";
        note.textContent = (dict["diagnose.notesLabel"] || "Suggested next step") + ": " + (best.notes || "—");
        source.textContent = best.source === "user"
          ? (dict["diagnose.source.user"] || "Matched against a photo you added to the training set.")
          : best.source === "dataset"
          ? (best.format === "yolo"
              ? (dict["diagnose.source.yolo"] || "Matched against a YOLOv8-annotated image from your uploaded dataset.")
              : (dict["diagnose.source.dataset"] || "Matched against an image from your uploaded dataset."))
          : (dict["diagnose.source.builtin"] || "Matched against the built-in reference set.");
        preview.src = dataUrl;
        preview.alt = best.crop + " photo submitted for diagnosis";
        dot.className = "dot " + (confidence >= 70 ? "dot-good" : "dot-warn");

        if (detectionsEl) {
          if (best.format === "yolo" && best.detections) {
            const template = dict["diagnose.detectionsCount"] || "{n} object(s) were annotated on the closest matching training image.";
            detectionsEl.textContent = template.replace("{n}", best.detections);
            detectionsEl.hidden = false;
          } else {
            detectionsEl.hidden = true;
          }
        }

        resultBox.hidden = false;
        resultBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }); // dbGetAllEntries
      });
    }).catch(function () {
      /* silently ignore unreadable files */
    });
  });
}

/* ============================================================
   3. PAGE SETUP
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Language
  applyLanguage(getStoredLanguage());
  var langSelect = document.getElementById('langSelect');
  if (langSelect) {
    langSelect.addEventListener('change', function () {
      applyLanguage(langSelect.value);
      renderTrainingList(); // refresh "Remove" button label etc.
      renderDatasetSummary();
    });
  }

  // Mobile nav toggle
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('mainNav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Train / diagnose demo
  renderTrainingList();
  initTrainForm();
  initDiagnoseForm();
  initDatasetForm();
  renderDatasetSummary();

  // Single, restrained reveal-on-scroll for major section blocks
  var revealTargets = document.querySelectorAll(
    '.section-head, .step, .data-card, .stakeholder-card, .diagnosis-copy, .diagnosis-media, .hero-copy, .hero-media, .perf-card, .train-panel'
  );

  revealTargets.forEach(function (el) { el.classList.add('reveal'); });

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealTargets.forEach(function (el) { observer.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add('is-visible'); });
  }

});
