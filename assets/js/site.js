
/* =========================================
   SHREE YADUNANDAN ENTERPRISE
   WEBSITE JAVASCRIPT + LANGUAGE SYSTEM
   English | Hindi | Gujarati
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* =====================================
     1. COMMON LANGUAGE TRANSLATIONS
  ===================================== */

  const translations = {

    en: {
      pageTitle: "Shree Yadunandan Enterprise | SYE Infra, Jamnagar",
      languageLabel: "Language",
      location: "Jamnagar, Gujarat, India",
      brandTagline: "Infrastructure • Heavy Machinery • Equipment",

      navHome: "Home",
      navAbout: "About Us",
      navServices: "Services",
      navMachinery: "Machinery",
      navExperience: "Experience",
      navContact: "Contact",

      heroEyebrow: "INFRASTRUCTURE • HEAVY MACHINERY • EXPERIENCE",
      heroTitle: "Building Capability for India's Infrastructure Projects.",
      heroDescription: "Shree Yadunandan Enterprise (SYE Infra) brings infrastructure-sector experience since 2004, with work across road, pipeline, drainage, mining and water canal projects.",
      heroButton1: "Discuss a Requirement ↗",
      heroButton2: "Explore Machinery",

      trustSince: "Working since",
      trustStates: "Reported work locations",
      trustCategories: "Infrastructure work types",
      trustLocation: "Gujarat, India",

      aboutKicker: "Who we are",
      aboutTitle: "Infrastructure experience and heavy equipment operations",
      aboutDescription: "SYE Infra is based in Jamnagar, Gujarat. Our experience includes infrastructure project work and the operation of excavators, hydraulic breakers and dumpers.",
      aboutPoint1: "Infrastructure-sector experience since 2004",
      aboutPoint2: "Road, pipeline and drainage work experience",
      aboutPoint3: "Mining and water canal project experience",
      aboutPoint4: "Heavy machinery and equipment capability",
      aboutButton: "Know Our Company",

      servicesKicker: "What we do",
      servicesTitle: "Infrastructure work categories",
      servicesDescription: "Explore the areas represented in our company experience.",

      serviceRoadTitle: "Road Construction",
      serviceRoadDescription: "Experience in road construction-related infrastructure work.",
      servicePipelineTitle: "Pipeline Projects",
      servicePipelineDescription: "Experience in pipeline infrastructure project work.",
      serviceDrainageTitle: "Drainage Works",
      serviceDrainageDescription: "Experience in gutter and drainage line works.",
      serviceMiningTitle: "Mining Projects",
      serviceMiningDescription: "Experience in mining-related project operations.",
      serviceCanalTitle: "Water Canal Projects",
      serviceCanalDescription: "Experience in water canal project work.",
      serviceMachineryTitle: "Heavy Machinery",
      serviceMachineryDescription: "Equipment includes excavators, hydraulic breakers and dumpers.",

      machineryKicker: "Equipment highlights",
      machineryTitle: "Machinery in our fleet gallery",
      machine1Description: "BTC Drilmax 810 hydraulic breaker.",
      machine2Description: "Hyva hydraulic tipping system.",
      machine3Description: "Indus Saga 200 hydraulic breaker.",
      machineryButton: "View Machinery Details",

      ctaTitle: "Have an infrastructure or equipment enquiry?",
      ctaDescription: "Contact our team to discuss your requirement.",
      ctaButton: "Contact SYE Infra ↗",

      footerDescription: "Infrastructure-sector experience and heavy machinery operations since 2004. Based in Jamnagar, Gujarat, India.",
      footerExplore: "Explore",
      footerEnquiries: "Business Enquiries",
      footerLocation: "Jamnagar, Gujarat",
      copyright: "All rights reserved.",
      whatsapp: "WhatsApp ↗"
    },

    hi: {
      pageTitle: "श्री यदुनंदन एंटरप्राइज | SYE Infra, जामनगर",
      languageLabel: "भाषा",
      location: "जामनगर, गुजरात, भारत",
      brandTagline: "इन्फ्रास्ट्रक्चर • भारी मशीनरी • उपकरण",

      navHome: "होम",
      navAbout: "हमारे बारे में",
      navServices: "सेवाएँ",
      navMachinery: "मशीनरी",
      navExperience: "अनुभव",
      navContact: "संपर्क करें",

      heroEyebrow: "इन्फ्रास्ट्रक्चर • भारी मशीनरी • अनुभव",
      heroTitle: "भारत की इन्फ्रास्ट्रक्चर परियोजनाओं के लिए हमारी क्षमता।",
      heroDescription: "श्री यदुनंदन एंटरप्राइज (SYE Infra) को वर्ष 2004 से इन्फ्रास्ट्रक्चर क्षेत्र में अनुभव है। हमारे कार्य अनुभव में सड़क, पाइपलाइन, ड्रेनेज, खनन और जल नहर परियोजनाएँ शामिल हैं।",
      heroButton1: "अपनी आवश्यकता पर चर्चा करें ↗",
      heroButton2: "मशीनरी देखें",

      trustSince: "कार्यरत वर्ष",
      trustStates: "कार्य किए गए राज्य",
      trustCategories: "इन्फ्रास्ट्रक्चर कार्य के प्रकार",
      trustLocation: "गुजरात, भारत",

      aboutKicker: "हम कौन हैं",
      aboutTitle: "इन्फ्रास्ट्रक्चर का अनुभव और भारी उपकरणों का संचालन",
      aboutDescription: "SYE Infra का मुख्यालय जामनगर, गुजरात में है। हमारे अनुभव में इन्फ्रास्ट्रक्चर परियोजनाओं के कार्य और एक्सकेवेटर, हाइड्रोलिक ब्रेकर तथा डंपर का संचालन शामिल है।",
      aboutPoint1: "वर्ष 2004 से इन्फ्रास्ट्रक्चर क्षेत्र में अनुभव",
      aboutPoint2: "सड़क, पाइपलाइन और ड्रेनेज कार्य का अनुभव",
      aboutPoint3: "खनन और जल नहर परियोजनाओं का अनुभव",
      aboutPoint4: "भारी मशीनरी और उपकरणों की क्षमता",
      aboutButton: "हमारी कंपनी के बारे में जानें",

      servicesKicker: "हम क्या करते हैं",
      servicesTitle: "इन्फ्रास्ट्रक्चर कार्य की श्रेणियाँ",
      servicesDescription: "हमारी कंपनी के कार्य अनुभव के विभिन्न क्षेत्रों को देखें।",

      serviceRoadTitle: "सड़क निर्माण",
      serviceRoadDescription: "सड़क निर्माण से संबंधित इन्फ्रास्ट्रक्चर कार्य का अनुभव।",
      servicePipelineTitle: "पाइपलाइन परियोजनाएँ",
      servicePipelineDescription: "पाइपलाइन इन्फ्रास्ट्रक्चर परियोजनाओं में कार्य का अनुभव।",
      serviceDrainageTitle: "ड्रेनेज कार्य",
      serviceDrainageDescription: "नाली और ड्रेनेज लाइन के कार्यों का अनुभव।",
      serviceMiningTitle: "खनन परियोजनाएँ",
      serviceMiningDescription: "खनन से संबंधित परियोजना कार्यों का अनुभव।",
      serviceCanalTitle: "जल नहर परियोजनाएँ",
      serviceCanalDescription: "जल नहर परियोजनाओं के कार्य का अनुभव।",
      serviceMachineryTitle: "भारी मशीनरी",
      serviceMachineryDescription: "उपकरणों में एक्सकेवेटर, हाइड्रोलिक ब्रेकर और डंपर शामिल हैं।",

      machineryKicker: "उपकरणों की जानकारी",
      machineryTitle: "हमारी मशीनरी गैलरी",
      machineryDescription: "कंपनी द्वारा साझा की गई चुनिंदा मशीनरी की जानकारी और तस्वीरें।",
      machine1Description: "BTC Drilmax 810 हाइड्रोलिक ब्रेकर।",
      machine2Description: "Hyva हाइड्रोलिक टिपिंग सिस्टम।",
      machine3Description: "Indus Saga 200 हाइड्रोलिक ब्रेकर।",
      machineryButton: "मशीनरी का विवरण देखें",

      ctaTitle: "क्या आपको इन्फ्रास्ट्रक्चर या उपकरणों की आवश्यकता है?",
      ctaDescription: "अपनी आवश्यकता पर चर्चा करने के लिए हमारी टीम से संपर्क करें।",
      ctaButton: "SYE Infra से संपर्क करें ↗",

      footerDescription: "वर्ष 2004 से इन्फ्रास्ट्रक्चर क्षेत्र का अनुभव और भारी मशीनरी संचालन। जामनगर, गुजरात, भारत।",
      footerExplore: "वेबसाइट देखें",
      footerEnquiries: "व्यावसायिक पूछताछ",
      footerLocation: "जामनगर, गुजरात",
      copyright: "सर्वाधिकार सुरक्षित।",
      whatsapp: "WhatsApp ↗"
    },

    gu: {
      pageTitle: "શ્રી યદુનંદન એન્ટરપ્રાઇઝ | SYE Infra, જામનગર",
      languageLabel: "ભાષા",
      location: "જામનગર, ગુજરાત, ભારત",
      brandTagline: "ઇન્ફ્રાસ્ટ્રક્ચર • હેવી મશીનરી • સાધનો",

      navHome: "હોમ",
      navAbout: "અમારા વિશે",
      navServices: "સેવાઓ",
      navMachinery: "મશીનરી",
      navExperience: "અનુભવ",
      navContact: "સંપર્ક",

      heroEyebrow: "ઇન્ફ્રાસ્ટ્રક્ચર • હેવી મશીનરી • અનુભવ",
      heroTitle: "ભારતના ઇન્ફ્રાસ્ટ્રક્ચર પ્રોજેક્ટ્સ માટે અમારી કાર્યક્ષમતા.",
      heroDescription: "શ્રી યદુનંદન એન્ટરપ્રાઇઝ (SYE Infra) ને વર્ષ 2004થી ઇન્ફ્રાસ્ટ્રક્ચર ક્ષેત્રનો અનુભવ છે. અમારા કાર્ય અનુભવમાં રોડ, પાઇપલાઇન, ડ્રેનેજ, માઇનિંગ અને વોટર કેનાલ પ્રોજેક્ટ્સનો સમાવેશ થાય છે.",
      heroButton1: "તમારી જરૂરિયાત વિશે ચર્ચા કરો ↗",
      heroButton2: "મશીનરી જુઓ",

      trustSince: "કાર્યરત વર્ષ",
      trustStates: "કામ કરેલાં રાજ્યો",
      trustCategories: "ઇન્ફ્રાસ્ટ્રક્ચર કાર્યના પ્રકાર",
      trustLocation: "ગુજરાત, ભારત",

      aboutKicker: "અમે કોણ છીએ",
      aboutTitle: "ઇન્ફ્રાસ્ટ્રક્ચરનો અનુભવ અને હેવી સાધનોનું સંચાલન",
      aboutDescription: "SYE Infra જામનગર, ગુજરાત સ્થિત છે. અમારા અનુભવમાં ઇન્ફ્રાસ્ટ્રક્ચર પ્રોજેક્ટ્સનાં કામ અને એક્સકેવેટર, હાઇડ્રોલિક બ્રેકર તથા ડમ્પરના સંચાલનનો સમાવેશ થાય છે.",
      aboutPoint1: "વર્ષ 2004થી ઇન્ફ્રાસ્ટ્રક્ચર ક્ષેત્રનો અનુભવ",
      aboutPoint2: "રોડ, પાઇપલાઇન અને ડ્રેનેજ કામનો અનુભવ",
      aboutPoint3: "માઇનિંગ અને વોટર કેનાલ પ્રોજેક્ટ્સનો અનુભવ",
      aboutPoint4: "હેવી મશીનરી અને સાધનોની કાર્યક્ષમતા",
      aboutButton: "અમારી કંપની વિશે જાણો",

      servicesKicker: "અમે શું કરીએ છીએ",
      servicesTitle: "ઇન્ફ્રાસ્ટ્રક્ચર કાર્યની શ્રેણીઓ",
      servicesDescription: "અમારી કંપનીના કાર્ય અનુભવના વિવિધ ક્ષેત્રો જાણો.",

      serviceRoadTitle: "રોડ કન્સ્ટ્રક્શન",
      serviceRoadDescription: "રોડ કન્સ્ટ્રક્શન સંબંધિત ઇન્ફ્રાસ્ટ્રક્ચર કામનો અનુભવ.",
      servicePipelineTitle: "પાઇપલાઇન પ્રોજેક્ટ્સ",
      servicePipelineDescription: "પાઇપલાઇન ઇન્ફ્રાસ્ટ્રક્ચર પ્રોજેક્ટ્સમાં કામનો અનુભવ.",
      serviceDrainageTitle: "ડ્રેનેજ કામ",
      serviceDrainageDescription: "ગટર અને ડ્રેનેજ લાઇનનાં કામનો અનુભવ.",
      serviceMiningTitle: "માઇનિંગ પ્રોજેક્ટ્સ",
      serviceMiningDescription: "માઇનિંગ સંબંધિત પ્રોજેક્ટ કામગીરીનો અનુભવ.",
      serviceCanalTitle: "વોટર કેનાલ પ્રોજેક્ટ્સ",
      serviceCanalDescription: "વોટર કેનાલ પ્રોજેક્ટ્સનાં કામનો અનુભવ.",
      serviceMachineryTitle: "હેવી મશીનરી",
      serviceMachineryDescription: "સાધનોમાં એક્સકેવેટર, હાઇડ્રોલિક બ્રેકર અને ડમ્પરનો સમાવેશ થાય છે.",

      machineryKicker: "સાધનોની માહિતી",
      machineryTitle: "અમારી મશીનરી ગેલેરી",
      machineryDescription: "કંપની દ્વારા શેર કરવામાં આવેલી પસંદગીની મશીનરીની માહિતી અને તસવીરો.",
      machine1Description: "BTC Drilmax 810 હાઇડ્રોલિક બ્રેકર.",
      machine2Description: "Hyva હાઇડ્રોલિક ટિપિંગ સિસ્ટમ.",
      machine3Description: "Indus Saga 200 હાઇડ્રોલિક બ્રેકર.",
      machineryButton: "મશીનરીની વિગતો જુઓ",

      ctaTitle: "ઇન્ફ્રાસ્ટ્રક્ચર અથવા સાધનો અંગે પૂછપરછ કરવી છે?",
      ctaDescription: "તમારી જરૂરિયાત વિશે ચર્ચા કરવા અમારી ટીમનો સંપર્ક કરો.",
      ctaButton: "SYE Infra નો સંપર્ક કરો ↗",

      footerDescription: "વર્ષ 2004થી ઇન્ફ્રાસ્ટ્રક્ચર ક્ષેત્રનો અનુભવ અને હેવી મશીનરીનું સંચાલન. જામનગર, ગુજરાત, ભારત.",
      footerExplore: "વધુ જાણો",
      footerEnquiries: "વ્યવસાયિક પૂછપરછ",
      footerLocation: "જામનગર, ગુજરાત",
      copyright: "સર્વાધિકાર સુરક્ષિત.",
      whatsapp: "WhatsApp ↗"
    }

  };


  /* =====================================
     2. PAGE-SPECIFIC TRANSLATIONS
     About | Services | Machinery | Experience | Contact
  ===================================== */

  const pageTranslations = {

    en: {
      footerCompany: "Shree Yadunandan Enterprise",

      aboutPageTitle: "About Us | Shree Yadunandan Enterprise",
      aboutBreadcrumb: "About Us",
      aboutHeroTitle: "About Shree Yadunandan Enterprise",
      aboutHeroDescription: "Learn about our infrastructure-sector experience and heavy machinery operations.",
      aboutCompanyKicker: "Who we are",
      aboutCompanyTitle: "Our Company",
      aboutCompanyLead: "Shree Yadunandan Enterprise is based in Jamnagar, Gujarat, India.",
      aboutCompanyParagraph1: "We have been working in the infrastructure sector since 2004.",
      aboutCompanyParagraph2: "Our work experience includes road construction, pipeline, drainage, mining and water canal projects across different parts of India.",
      aboutTeamKicker: "Business contacts",
      aboutTeamTitle: "Connect with our team",
      businessContact: "Business Contact",

      servicesPageTitle: "Infrastructure Services | SYE Infra",
      servicesBreadcrumb: "Services",
      servicesHeroTitle: "Infrastructure Work Categories",
      servicesHeroDescription: "Explore the infrastructure sectors in which Shree Yadunandan Enterprise has experience.",

      roadLabel: "INFRASTRUCTURE",
      roadTitle: "Road Construction",
      roadDescription: "Supporting road infrastructure projects with reliable heavy machinery and equipment for efficient site work.",
      roadPoint1: "Land clearing and site preparation",
      roadPoint2: "Earthwork and excavation",
      roadPoint3: "Soil cutting and levelling",
      roadPoint4: "Heavy equipment support",

      pipelineLabel: "PIPELINE INFRASTRUCTURE",
      pipelineTitle: "Pipeline Projects",
      pipelineDescription: "Providing machinery support for pipeline infrastructure projects, including excavation and trench preparation.",
      pipelinePoint1: "Pipeline trench excavation",
      pipelinePoint2: "Route and site preparation",
      pipelinePoint3: "Earthwork and soil removal",
      pipelinePoint4: "Excavator deployment",

      drainageLabel: "DRAINAGE INFRASTRUCTURE",
      drainageTitle: "Drainage Line Works",
      drainageDescription: "Supporting drainage infrastructure works through excavation equipment and project-based machinery services.",
      drainagePoint1: "Drainage trench excavation",
      drainagePoint2: "Underground utility excavation",
      drainagePoint3: "Soil removal and site preparation",
      drainagePoint4: "Heavy machinery support",

      miningLabel: "MINING & EARTHWORK",
      miningTitle: "Mining Projects",
      miningDescription: "Providing heavy machinery and equipment support for mining, excavation and earthmoving operations.",
      miningPoint1: "Excavation and earthmoving",
      miningPoint2: "Rock breaking operations",
      miningPoint3: "Material loading and handling",
      miningPoint4: "Dumper and machinery support",

      canalLabel: "WATER INFRASTRUCTURE",
      canalTitle: "Water Canal Projects",
      canalDescription: "Supporting water canal development projects with machinery for excavation and earthwork activities.",
      canalPoint1: "Canal excavation and earthwork",
      canalPoint2: "Land development and levelling",
      canalPoint3: "Soil cutting and removal",
      canalPoint4: "Heavy equipment deployment",

      servicesNotice: "For project requirements, machinery availability, deployment locations and commercial enquiries, please contact Shree Yadunandan Enterprise directly.",

      machineryPageTitle: "Machinery & Equipment Gallery | SYE Infra",
      machineryBreadcrumb: "Machinery",
      machineryHeroTitle: "Machinery & Equipment",
      machineryHeroDescription: "Explore our heavy machinery and equipment through individual photo slideshows.",
      machineryYear2025: "MODEL YEAR 2025",
      machineryYear2026: "MODEL YEAR 2026",
      machineryYear2024: "MODEL YEAR 2024",
      machineryYear2023: "MODEL YEAR 2023",
      machineryYear2018: "MODEL YEAR 2018",
      sanyDescription: "BTC Drilmax 810 Hydraulic Breaker.",
      tataDescription: "Hyva Hydraulic Tipping System and reinforced mining body.",
      hyundai2024Description: "Indus Saga 200 Hydraulic Breaker.",
      hyundai2023Description: "Rockstar Hydraulic Breaker.",
      hyundai2018Description: "Rockstar Hydraulic Breaker.",
      machineryNotice: "Equipment specifications and availability may change. Contact SYE Infra to confirm current details before making a procurement or deployment decision.",

      experiencePageTitle: "Our Experience | Infrastructure Projects | SYE Infra",
      experienceBreadcrumb: "Experience",
      experienceHeroTitle: "Our Infrastructure Experience",
      experienceHeroDescription: "Working since 2004, with project experience across six states in India.",
      experienceSince: "Since 2004",
      experienceStates: "6 States",
      experienceCategories: "5 Categories",
      experienceStat1: "Infrastructure-sector experience",
      experienceStat2: "Reported work locations",
      experienceStat3: "Infrastructure project types",

      experienceStatesTitle: "States We Have Worked In",
      stateGujarat: "Gujarat",
      stateRajasthan: "Rajasthan",
      stateUP: "Uttar Pradesh",
      stateMP: "Madhya Pradesh",
      stateMaharashtra: "Maharashtra",
      stateKerala: "Kerala",

      experienceProjectTitle: "Project Categories",
      experiencePipeline: "Pipeline Projects",
      experienceRoad: "Road Construction",
      experienceDrainage: "Gutter / Drainage Line Works",
      experienceMining: "Mining Projects",
      experienceCanal: "Water Canal Projects",

      businessRelationships: "Business relationships",
      experienceCompaniesTitle: "Companies Named in Our Work History",
      companyReference: "Company reference",

      contactPageTitle: "Contact | Shree Yadunandan Enterprise, Jamnagar",
      contactBreadcrumb: "Contact",
      contactHeroTitle: "Contact Shree Yadunandan Enterprise",
      contactHeroDescription: "For infrastructure project enquiries, equipment information and business discussions, contact our team.",
      contactKicker: "Get in touch",
      contactSectionTitle: "Let's discuss your requirement",
      contactLead: "Reach us by phone, WhatsApp or email. Include your project location, requirement and preferred timeline when enquiring.",
      contactPhoneNilesh: "Phone – Nileshbhai Chavda",
      contactPhoneAnil: "Phone / WhatsApp – Anilbhai Suva",
      contactEmailLabel: "Email",
      contactLocationLabel: "Location",
      contactAddress: "Jamnagar, Gujarat, India ↗",
      contactWhatsApp: "Message on WhatsApp ↗",
      contactSendEmail: "Send an Email",
      contactBusinessEnquiry: "Business enquiries",
      contactDetailsTitle: "Details that help us respond",
      contactPleaseShare: "Please share:",
      contactDetail1: "Company or project name",
      contactDetail2: "Project location",
      contactDetail3: "Type of work or equipment required",
      contactDetail4: "Expected start date and duration",
      contactDetail5: "Price",
      contactFormNotice: "This version uses direct phone, WhatsApp and email contact. An online enquiry form should be added only after choosing a secure form-processing service and spam protection."
    },


    hi: {
      footerCompany: "श्री यदुनंदन एंटरप्राइज",

      aboutPageTitle: "हमारे बारे में | श्री यदुनंदन एंटरप्राइज",
      aboutBreadcrumb: "हमारे बारे में",
      aboutHeroTitle: "श्री यदुनंदन एंटरप्राइज के बारे में",
      aboutHeroDescription: "हमारे इन्फ्रास्ट्रक्चर क्षेत्र के अनुभव और भारी मशीनरी संचालन के बारे में जानें।",
      aboutCompanyKicker: "हम कौन हैं",
      aboutCompanyTitle: "हमारी कंपनी",
      aboutCompanyLead: "श्री यदुनंदन एंटरप्राइज जामनगर, गुजरात, भारत में स्थित है।",
      aboutCompanyParagraph1: "हम वर्ष 2004 से इन्फ्रास्ट्रक्चर क्षेत्र में कार्यरत हैं।",
      aboutCompanyParagraph2: "हमारे कार्य अनुभव में भारत के विभिन्न क्षेत्रों में सड़क निर्माण, पाइपलाइन, ड्रेनेज, खनन और जल नहर परियोजनाएँ शामिल हैं।",
      aboutTeamKicker: "व्यावसायिक संपर्क",
      aboutTeamTitle: "हमारी टीम से संपर्क करें",
      businessContact: "व्यावसायिक संपर्क",

      servicesPageTitle: "इन्फ्रास्ट्रक्चर सेवाएँ | SYE Infra",
      servicesBreadcrumb: "सेवाएँ",
      servicesHeroTitle: "इन्फ्रास्ट्रक्चर कार्य की श्रेणियाँ",
      servicesHeroDescription: "उन इन्फ्रास्ट्रक्चर क्षेत्रों को जानें जिनमें श्री यदुनंदन एंटरप्राइज को अनुभव है।",

      roadLabel: "इन्फ्रास्ट्रक्चर",
      roadTitle: "सड़क निर्माण",
      roadDescription: "कुशल साइट कार्य के लिए विश्वसनीय भारी मशीनरी और उपकरणों के साथ सड़क इन्फ्रास्ट्रक्चर परियोजनाओं में सहायता।",
      roadPoint1: "भूमि की सफाई और साइट की तैयारी",
      roadPoint2: "मिट्टी का कार्य और खुदाई",
      roadPoint3: "मिट्टी की कटाई और समतलीकरण",
      roadPoint4: "भारी उपकरणों की सहायता",

      pipelineLabel: "पाइपलाइन इन्फ्रास्ट्रक्चर",
      pipelineTitle: "पाइपलाइन परियोजनाएँ",
      pipelineDescription: "खुदाई और खाई की तैयारी सहित पाइपलाइन इन्फ्रास्ट्रक्चर परियोजनाओं के लिए मशीनरी सहायता।",
      pipelinePoint1: "पाइपलाइन खाई की खुदाई",
      pipelinePoint2: "मार्ग और साइट की तैयारी",
      pipelinePoint3: "मिट्टी का कार्य और मिट्टी हटाना",
      pipelinePoint4: "एक्सकेवेटर की तैनाती",

      drainageLabel: "ड्रेनेज इन्फ्रास्ट्रक्चर",
      drainageTitle: "ड्रेनेज लाइन कार्य",
      drainageDescription: "खुदाई उपकरण और परियोजना-आधारित मशीनरी सेवाओं के माध्यम से ड्रेनेज कार्यों में सहायता।",
      drainagePoint1: "ड्रेनेज खाई की खुदाई",
      drainagePoint2: "भूमिगत उपयोगिता की खुदाई",
      drainagePoint3: "मिट्टी हटाना और साइट की तैयारी",
      drainagePoint4: "भारी मशीनरी सहायता",

      miningLabel: "खनन और मिट्टी का कार्य",
      miningTitle: "खनन परियोजनाएँ",
      miningDescription: "खनन, खुदाई और मिट्टी हटाने के कार्यों के लिए भारी मशीनरी और उपकरणों की सहायता।",
      miningPoint1: "खुदाई और मिट्टी हटाने का कार्य",
      miningPoint2: "चट्टान तोड़ने का कार्य",
      miningPoint3: "सामग्री की लोडिंग और हैंडलिंग",
      miningPoint4: "डंपर और मशीनरी सहायता",

      canalLabel: "जल इन्फ्रास्ट्रक्चर",
      canalTitle: "जल नहर परियोजनाएँ",
      canalDescription: "खुदाई और मिट्टी के कार्यों के लिए मशीनरी के साथ जल नहर विकास परियोजनाओं में सहायता।",
      canalPoint1: "नहर की खुदाई और मिट्टी का कार्य",
      canalPoint2: "भूमि विकास और समतलीकरण",
      canalPoint3: "मिट्टी की कटाई और हटाना",
      canalPoint4: "भारी उपकरणों की तैनाती",

      servicesNotice: "परियोजना की आवश्यकताओं, मशीनरी की उपलब्धता, तैनाती के स्थान और व्यावसायिक पूछताछ के लिए सीधे श्री यदुनंदन एंटरप्राइज से संपर्क करें।",

      machineryPageTitle: "मशीनरी और उपकरण गैलरी | SYE Infra",
      machineryBreadcrumb: "मशीनरी",
      machineryHeroTitle: "मशीनरी और उपकरण",
      machineryHeroDescription: "हमारी भारी मशीनरी और उपकरणों की तस्वीरें स्लाइडशो में देखें।",
      machineryYear2025: "मॉडल वर्ष 2025",
      machineryYear2026: "मॉडल वर्ष 2026",
      machineryYear2024: "मॉडल वर्ष 2024",
      machineryYear2023: "मॉडल वर्ष 2023",
      machineryYear2018: "मॉडल वर्ष 2018",
      sanyDescription: "BTC Drilmax 810 हाइड्रोलिक ब्रेकर।",
      tataDescription: "Hyva हाइड्रोलिक टिपिंग सिस्टम और मजबूत माइनिंग बॉडी।",
      hyundai2024Description: "Indus Saga 200 हाइड्रोलिक ब्रेकर।",
      hyundai2023Description: "Rockstar हाइड्रोलिक ब्रेकर।",
      hyundai2018Description: "Rockstar हाइड्रोलिक ब्रेकर।",
      machineryNotice: "उपकरणों की विशेषताएँ और उपलब्धता बदल सकती हैं। खरीद या तैनाती से पहले वर्तमान जानकारी की पुष्टि के लिए SYE Infra से संपर्क करें।",

      experiencePageTitle: "हमारा अनुभव | इन्फ्रास्ट्रक्चर परियोजनाएँ | SYE Infra",
      experienceBreadcrumb: "अनुभव",
      experienceHeroTitle: "हमारा इन्फ्रास्ट्रक्चर अनुभव",
      experienceHeroDescription: "वर्ष 2004 से कार्यरत, भारत के छह राज्यों में परियोजना कार्य का अनुभव।",
      experienceSince: "वर्ष 2004 से",
      experienceStates: "6 राज्य",
      experienceCategories: "5 श्रेणियाँ",
      experienceStat1: "इन्फ्रास्ट्रक्चर क्षेत्र का अनुभव",
      experienceStat2: "कार्य किए गए स्थान",
      experienceStat3: "इन्फ्रास्ट्रक्चर परियोजना के प्रकार",

      experienceStatesTitle: "जिन राज्यों में हमने काम किया",
      stateGujarat: "गुजरात",
      stateRajasthan: "राजस्थान",
      stateUP: "उत्तर प्रदेश",
      stateMP: "मध्य प्रदेश",
      stateMaharashtra: "महाराष्ट्र",
      stateKerala: "केरल",

      experienceProjectTitle: "परियोजना श्रेणियाँ",
      experiencePipeline: "पाइपलाइन परियोजनाएँ",
      experienceRoad: "सड़क निर्माण",
      experienceDrainage: "गटर / ड्रेनेज लाइन कार्य",
      experienceMining: "खनन परियोजनाएँ",
      experienceCanal: "जल नहर परियोजनाएँ",

      businessRelationships: "व्यावसायिक संबंध",
      experienceCompaniesTitle: "हमारे कार्य इतिहास में उल्लिखित कंपनियाँ",
      experienceCompaniesDescription: "इस वेबसाइट के लिए दी गई जानकारी के आधार पर नाम सूचीबद्ध हैं। इससे किसी समर्थन या वर्तमान संबद्धता का संकेत नहीं मिलता।",
      companyReference: "कंपनी का संदर्भ",

      experienceNotice: "बेहतर परियोजना पोर्टफोलियो के लिए सत्यापित परियोजना नाम, तिथियाँ, स्थान, कार्य का विवरण और ग्राहक द्वारा स्वीकृत तस्वीरें जोड़ें। अनुमति के बिना गोपनीय जानकारी या ग्राहक के लोगो प्रकाशित न करें।",

      contactPageTitle: "संपर्क | श्री यदुनंदन एंटरप्राइज, जामनगर",
      contactBreadcrumb: "संपर्क",
      contactHeroTitle: "श्री यदुनंदन एंटरप्राइज से संपर्क करें",
      contactHeroDescription: "इन्फ्रास्ट्रक्चर परियोजनाओं, उपकरणों की जानकारी और व्यावसायिक चर्चा के लिए हमारी टीम से संपर्क करें।",
      contactKicker: "संपर्क करें",
      contactSectionTitle: "आइए आपकी आवश्यकता पर चर्चा करें",
      contactLead: "फोन, WhatsApp या ईमेल से संपर्क करें। पूछताछ में परियोजना का स्थान, आवश्यकता और अपेक्षित समयसीमा बताएँ।",
      contactPhoneNilesh: "फोन – निलेशभाई चावड़ा",
      contactPhoneAnil: "फोन / WhatsApp – अनिलभाई सुवा",
      contactEmailLabel: "ईमेल",
      contactLocationLabel: "स्थान",
      contactAddress: "जामनगर, गुजरात, भारत ↗",
      contactWhatsApp: "WhatsApp पर संदेश भेजें ↗",
      contactSendEmail: "ईमेल भेजें",
      contactBusinessEnquiry: "व्यावसायिक पूछताछ",
      contactDetailsTitle: "उत्तर देने में सहायक जानकारी",
      contactPleaseShare: "कृपया यह जानकारी दें:",
      contactDetail1: "कंपनी या परियोजना का नाम",
      contactDetail2: "परियोजना का स्थान",
      contactDetail3: "आवश्यक कार्य या उपकरण का प्रकार",
      contactDetail4: "अपेक्षित प्रारंभ तिथि और अवधि",
      contactDetail5: "कीमत",
      contactFormNotice: "इस संस्करण में सीधे फोन, WhatsApp और ईमेल से संपर्क किया जा सकता है। ऑनलाइन पूछताछ फॉर्म सुरक्षित फॉर्म सेवा और स्पैम सुरक्षा चुनने के बाद ही जोड़ा जाना चाहिए।"
    },


    gu: {
      footerCompany: "શ્રી યદુનંદન એન્ટરપ્રાઇઝ",

      aboutPageTitle: "અમારા વિશે | શ્રી યદુનંદન એન્ટરપ્રાઇઝ",
      aboutBreadcrumb: "અમારા વિશે",
      aboutHeroTitle: "શ્રી યદુનંદન એન્ટરપ્રાઇઝ વિશે",
      aboutHeroDescription: "અમારા ઇન્ફ્રાસ્ટ્રક્ચર ક્ષેત્રના અનુભવ અને હેવી મશીનરીના સંચાલન વિશે જાણો.",
      aboutCompanyKicker: "અમે કોણ છીએ",
      aboutCompanyTitle: "અમારી કંપની",
      aboutCompanyLead: "શ્રી યદુનંદન એન્ટરપ્રાઇઝ જામનગર, ગુજરાત, ભારતમાં સ્થિત છે.",
      aboutCompanyParagraph1: "અમે વર્ષ 2004થી ઇન્ફ્રાસ્ટ્રક્ચર ક્ષેત્રમાં કાર્યરત છીએ.",
      aboutCompanyParagraph2: "અમારા કાર્ય અનુભવમાં ભારતના વિવિધ વિસ્તારોમાં રોડ કન્સ્ટ્રક્શન, પાઇપલાઇન, ડ્રેનેજ, માઇનિંગ અને વોટર કેનાલ પ્રોજેક્ટ્સનો સમાવેશ થાય છે.",
      aboutTeamKicker: "વ્યવસાયિક સંપર્ક",
      aboutTeamTitle: "અમારી ટીમનો સંપર્ક કરો",
      businessContact: "વ્યવસાયિક સંપર્ક",

      servicesPageTitle: "ઇન્ફ્રાસ્ટ્રક્ચર સેવાઓ | SYE Infra",
      servicesBreadcrumb: "સેવાઓ",
      servicesHeroTitle: "ઇન્ફ્રાસ્ટ્રક્ચર કાર્યની શ્રેણીઓ",
      servicesHeroDescription: "શ્રી યદુનંદન એન્ટરપ્રાઇઝને અનુભવ હોય તેવા ઇન્ફ્રાસ્ટ્રક્ચર ક્ષેત્રો જાણો.",

      roadLabel: "ઇન્ફ્રાસ્ટ્રક્ચર",
      roadTitle: "રોડ કન્સ્ટ્રક્શન",
      roadDescription: "કાર્યક્ષમ સાઇટ કામગીરી માટે વિશ્વસનીય હેવી મશીનરી અને સાધનો દ્વારા રોડ ઇન્ફ્રાસ્ટ્રક્ચર પ્રોજેક્ટ્સમાં સહાય.",
      roadPoint1: "જમીનની સફાઈ અને સાઇટની તૈયારી",
      roadPoint2: "અર્થવર્ક અને ખોદકામ",
      roadPoint3: "માટી કાપવી અને સમતલ કરવી",
      roadPoint4: "હેવી સાધનોની સહાય",

      pipelineLabel: "પાઇપલાઇન ઇન્ફ્રાસ્ટ્રક્ચર",
      pipelineTitle: "પાઇપલાઇન પ્રોજેક્ટ્સ",
      pipelineDescription: "ખોદકામ અને ટ્રેન્ચની તૈયારી સહિત પાઇપલાઇન ઇન્ફ્રાસ્ટ્રક્ચર પ્રોજેક્ટ્સ માટે મશીનરી સહાય.",
      pipelinePoint1: "પાઇપલાઇન ટ્રેન્ચનું ખોદકામ",
      pipelinePoint2: "માર્ગ અને સાઇટની તૈયારી",
      pipelinePoint3: "અર્થવર્ક અને માટી દૂર કરવી",
      pipelinePoint4: "એક્સકેવેટરની તૈનાતી",

      drainageLabel: "ડ્રેનેજ ઇન્ફ્રાસ્ટ્રક્ચર",
      drainageTitle: "ડ્રેનેજ લાઇનનાં કામ",
      drainageDescription: "ખોદકામનાં સાધનો અને પ્રોજેક્ટ આધારિત મશીનરી સેવાઓ દ્વારા ડ્રેનેજ કામમાં સહાય.",
      drainagePoint1: "ડ્રેનેજ ટ્રેન્ચનું ખોદકામ",
      drainagePoint2: "ભૂગર્ભ યુટિલિટીનું ખોદકામ",
      drainagePoint3: "માટી દૂર કરવી અને સાઇટની તૈયારી",
      drainagePoint4: "હેવી મશીનરીની સહાય",

      miningLabel: "માઇનિંગ અને અર્થવર્ક",
      miningTitle: "માઇનિંગ પ્રોજેક્ટ્સ",
      miningDescription: "માઇનિંગ, ખોદકામ અને અર્થમૂવિંગ કામગીરી માટે હેવી મશીનરી અને સાધનોની સહાય.",
      miningPoint1: "ખોદકામ અને અર્થમૂવિંગ",
      miningPoint2: "ખડકો તોડવાની કામગીરી",
      miningPoint3: "માલનું લોડિંગ અને હેન્ડલિંગ",
      miningPoint4: "ડમ્પર અને મશીનરીની સહાય",

      canalLabel: "વોટર ઇન્ફ્રાસ્ટ્રક્ચર",
      canalTitle: "વોટર કેનાલ પ્રોજેક્ટ્સ",
      canalDescription: "ખોદકામ અને અર્થવર્ક પ્રવૃત્તિઓ માટે મશીનરી દ્વારા વોટર કેનાલ વિકાસ પ્રોજેક્ટ્સમાં સહાય.",
      canalPoint1: "કેનાલનું ખોદકામ અને અર્થવર્ક",
      canalPoint2: "જમીનનો વિકાસ અને સમતલીકરણ",
      canalPoint3: "માટી કાપવી અને દૂર કરવી",
      canalPoint4: "હેવી સાધનોની તૈનાતી",

      servicesNotice: "પ્રોજેક્ટની જરૂરિયાતો, મશીનરીની ઉપલબ્ધતા, તૈનાતીના સ્થળો અને વ્યવસાયિક પૂછપરછ માટે સીધો શ્રી યદુનંદન એન્ટરપ્રાઇઝનો સંપર્ક કરો.",

      machineryPageTitle: "મશીનરી અને સાધનોની ગેલેરી | SYE Infra",
      machineryBreadcrumb: "મશીનરી",
      machineryHeroTitle: "મશીનરી અને સાધનો",
      machineryHeroDescription: "અમારી હેવી મશીનરી અને સાધનોના ફોટા અલગ-અલગ સ્લાઇડશો દ્વારા જુઓ.",
      machineryYear2025: "મોડેલ વર્ષ 2025",
      machineryYear2026: "મોડેલ વર્ષ 2026",
      machineryYear2024: "મોડેલ વર્ષ 2024",
      machineryYear2023: "મોડેલ વર્ષ 2023",
      machineryYear2018: "મોડેલ વર્ષ 2018",
      sanyDescription: "BTC Drilmax 810 હાઇડ્રોલિક બ્રેકર.",
      tataDescription: "Hyva હાઇડ્રોલિક ટિપિંગ સિસ્ટમ અને મજબૂત માઇનિંગ બોડી.",
      hyundai2024Description: "Indus Saga 200 હાઇડ્રોલિક બ્રેકર.",
      hyundai2023Description: "Rockstar હાઇડ્રોલિક બ્રેકર.",
      hyundai2018Description: "Rockstar હાઇડ્રોલિક બ્રેકર.",
      machineryNotice: "સાધનોની વિશેષતાઓ અને ઉપલબ્ધતા બદલાઈ શકે છે. ખરીદી અથવા તૈનાતી પહેલાં વર્તમાન વિગતોની પુષ્ટિ કરવા SYE Infra નો સંપર્ક કરો.",

      experiencePageTitle: "અમારો અનુભવ | ઇન્ફ્રાસ્ટ્રક્ચર પ્રોજેક્ટ્સ | SYE Infra",
      experienceBreadcrumb: "અનુભવ",
      experienceHeroTitle: "અમારો ઇન્ફ્રાસ્ટ્રક્ચર અનુભવ",
      experienceHeroDescription: "વર્ષ 2004થી કાર્યરત, ભારતનાં છ રાજ્યોમાં પ્રોજેક્ટ કામનો અનુભવ.",
      experienceSince: "વર્ષ 2004થી",
      experienceStates: "6 રાજ્યો",
      experienceCategories: "5 શ્રેણીઓ",
      experienceStat1: "ઇન્ફ્રાસ્ટ્રક્ચર ક્ષેત્રનો અનુભવ",
      experienceStat2: "કામ કરેલાં સ્થળો",
      experienceStat3: "ઇન્ફ્રાસ્ટ્રક્ચર પ્રોજેક્ટના પ્રકારો",

      experienceStatesTitle: "જ્યાં અમે કામ કર્યું છે તે રાજ્યો",
      stateGujarat: "ગુજરાત",
      stateRajasthan: "રાજસ્થાન",
      stateUP: "ઉત્તર પ્રદેશ",
      stateMP: "મધ્ય પ્રદેશ",
      stateMaharashtra: "મહારાષ્ટ્ર",
      stateKerala: "કેરળ",

      experienceProjectTitle: "પ્રોજેક્ટની શ્રેણીઓ",
      experiencePipeline: "પાઇપલાઇન પ્રોજેક્ટ્સ",
      experienceRoad: "રોડ કન્સ્ટ્રક્શન",
      experienceDrainage: "ગટર / ડ્રેનેજ લાઇનનાં કામ",
      experienceMining: "માઇનિંગ પ્રોજેક્ટ્સ",
      experienceCanal: "વોટર કેનાલ પ્રોજેક્ટ્સ",

      businessRelationships: "વ્યવસાયિક સંબંધો",
      experienceCompaniesTitle: "અમારા કાર્ય ઇતિહાસમાં ઉલ્લેખિત કંપનીઓ",
      experienceCompaniesDescription: "આ વેબસાઇટ માટે આપવામાં આવેલી માહિતીના આધારે નામો દર્શાવ્યાં છે. તે કોઈ સમર્થન અથવા વર્તમાન જોડાણ સૂચવતા નથી.",
      companyReference: "કંપનીનો ઉલ્લેખ",

      experienceNotice: "વધુ સારો પ્રોજેક્ટ પોર્ટફોલિયો બનાવવા માટે ચકાસેલા પ્રોજેક્ટનાં નામ, તારીખો, સ્થળો, કામની વિગતો અને ક્લાયન્ટ દ્વારા મંજૂર કરેલા ફોટા ઉમેરો. પરવાનગી વિના ગુપ્ત માહિતી અથવા ક્લાયન્ટના લોગો પ્રકાશિત કરશો નહીં.",

      contactPageTitle: "સંપર્ક | શ્રી યદુનંદન એન્ટરપ્રાઇઝ, જામનગર",
      contactBreadcrumb: "સંપર્ક",
      contactHeroTitle: "શ્રી યદુનંદન એન્ટરપ્રાઇઝનો સંપર્ક કરો",
      contactHeroDescription: "ઇન્ફ્રાસ્ટ્રક્ચર પ્રોજેક્ટ્સ, સાધનોની માહિતી અને વ્યવસાયિક ચર્ચા માટે અમારી ટીમનો સંપર્ક કરો.",
      contactKicker: "સંપર્ક કરો",
      contactSectionTitle: "ચાલો તમારી જરૂરિયાત વિશે ચર્ચા કરીએ",
      contactLead: "ફોન, WhatsApp અથવા ઈમેઇલ દ્વારા સંપર્ક કરો. પૂછપરછ કરતી વખતે પ્રોજેક્ટનું સ્થળ, જરૂરિયાત અને ઇચ્છિત સમયમર્યાદા જણાવો.",
      contactPhoneNilesh: "ફોન – નિલેશભાઈ ચાવડા",
      contactPhoneAnil: "ફોન / WhatsApp – અનિલભાઈ સુવા",
      contactEmailLabel: "ઈમેઇલ",
      contactLocationLabel: "સ્થળ",
      contactAddress: "જામનગર, ગુજરાત, ભારત ↗",
      contactWhatsApp: "WhatsApp પર સંદેશ મોકલો ↗",
      contactSendEmail: "ઈમેઇલ મોકલો",
      contactBusinessEnquiry: "વ્યવસાયિક પૂછપરછ",
      contactDetailsTitle: "જવાબ આપવા માટે ઉપયોગી વિગતો",
      contactPleaseShare: "કૃપા કરીને આ વિગતો આપો:",
      contactDetail1: "કંપની અથવા પ્રોજેક્ટનું નામ",
      contactDetail2: "પ્રોજેક્ટનું સ્થળ",
      contactDetail3: "જરૂરી કામ અથવા સાધનનો પ્રકાર",
      contactDetail4: "અપેક્ષિત શરૂઆતની તારીખ અને સમયગાળો",
      contactDetail5: "કિંમત",
      contactFormNotice: "આ સંસ્કરણમાં સીધો ફોન, WhatsApp અને ઈમેઇલ દ્વારા સંપર્ક કરી શકાય છે. સુરક્ષિત ફોર્મ સેવા અને સ્પામ સુરક્ષા પસંદ કર્યા પછી જ ઓનલાઇન પૂછપરછ ફોર્મ ઉમેરવું જોઈએ."
    }

  };


  /* =====================================
     3. LANGUAGE SELECTOR
  ===================================== */

  const languageSelect = document.getElementById("languageSelect");
  const supportedLanguages = ["en", "hi", "gu"];

  function getSavedLanguage() {
    try {
      const savedLanguage = localStorage.getItem("syeLanguage");

      if (supportedLanguages.includes(savedLanguage)) {
        return savedLanguage;
      }
    } catch (error) {
      // Use English if browser storage is unavailable
    }

    return "en";
  }


  function applyLanguage(language) {

    if (!supportedLanguages.includes(language)) {
      language = "en";
    }

    const dictionary = Object.assign(
      {},
      translations[language],
      pageTranslations[language]
    );

    document.documentElement.lang = language;

    // Translate page title using page-specific title key.
    document.querySelectorAll("title[data-i18n]").forEach(function (element) {
      const key = element.getAttribute("data-i18n");

      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.textContent = dictionary[key];
      }
    });

    // Translate all visible text.
    document.querySelectorAll("[data-i18n]").forEach(function (element) {

      if (element.tagName === "TITLE") {
        return;
      }

      const key = element.getAttribute("data-i18n");

      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.textContent = dictionary[key];
      }

    });

    // Translate HTML attributes if data-i18n-attr is provided.
    document.querySelectorAll("[data-i18n-attr]").forEach(function (element) {

      const mappings = element.getAttribute("data-i18n-attr").split(",");

      mappings.forEach(function (mapping) {

        const parts = mapping.trim().split(":");
        const attribute = parts[0];
        const key = parts[1];

        if (
          attribute &&
          key &&
          Object.prototype.hasOwnProperty.call(dictionary, key)
        ) {
          element.setAttribute(attribute, dictionary[key]);
        }

      });

    });

    if (languageSelect) {
      languageSelect.value = language;
    }

    try {
      localStorage.setItem("syeLanguage", language);
    } catch (error) {
      // Page translation still works without storage.
    }

  }


  // Apply saved language when page loads.
  applyLanguage(getSavedLanguage());


  // Change language when user selects an option.
  if (languageSelect) {
    languageSelect.addEventListener("change", function () {
      applyLanguage(this.value);
    });
  }


  /* =====================================
     4. MOBILE NAVIGATION
  ===================================== */

  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  if (navToggle && nav) {

    function closeNavigation() {
      nav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.textContent = "☰";
    }

    navToggle.addEventListener("click", function () {

      const isOpen = nav.classList.toggle("open");

      navToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

      navToggle.textContent = isOpen ? "✕" : "☰";

    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNavigation);
    });

    document.addEventListener("click", function (event) {

      if (
        !nav.contains(event.target) &&
        !navToggle.contains(event.target)
      ) {
        closeNavigation();
      }

    });

    document.addEventListener("keydown", function (event) {

      if (event.key === "Escape" && nav.classList.contains("open")) {
        closeNavigation();
        navToggle.focus();
      }

    });

  }


  /* =====================================
     5. COPYRIGHT YEAR
  ===================================== */

  document.querySelectorAll("[data-year]").forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });


  /* =====================================
     6. IMAGE LOADING OPTIMIZATION
  ===================================== */

  document.querySelectorAll("img").forEach(function (image) {

    if (
      !image.closest("[data-hero-slider]") &&
      !image.hasAttribute("loading")
    ) {
      image.loading = "lazy";
    }

    if (!image.hasAttribute("decoding")) {
      image.decoding = "async";
    }

  });


  /* =====================================
     7. REDUCED MOTION ACCESSIBILITY
  ===================================== */

  const prefersReducedMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;


  /* =====================================
     8. COMMON SLIDER CONTROLLER
  ===================================== */

  function initializeSlider(options) {

    const slider = options.slider;
    const slides = Array.from(options.slides);
    const dots = Array.from(options.dots);
    const prevButton = options.prevButton;
    const nextButton = options.nextButton;

    if (!slider || slides.length < 2) {
      return;
    }

    let currentIndex = 0;
    let timer = null;
    let isPaused = false;

    const autoplayDelay = options.delay || 4000;


    function preloadImage(index) {

      const src = slides[index].getAttribute("src");

      if (!src) {
        return;
      }

      const preload = new Image();
      preload.src = src;

    }


    function updateSlider(index) {

      currentIndex = (index + slides.length) % slides.length;

      slides.forEach(function (slide, i) {

        const active = i === currentIndex;

        slide.classList.toggle("is-active", active);
        slide.setAttribute("aria-hidden", active ? "false" : "true");

        if (active) {
          slide.loading = "eager";
        }

      });

      dots.forEach(function (dot, i) {

        const active = i === currentIndex;

        dot.classList.toggle("is-active", active);

        if (active) {
          dot.setAttribute("aria-current", "true");
        } else {
          dot.removeAttribute("aria-current");
        }

      });

      preloadImage((currentIndex + 1) % slides.length);

    }


    function showSlide(index) {
      updateSlider(index);
    }


    function stopAutoplay() {

      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }

    }


    function startAutoplay() {

      stopAutoplay();

      if (
        prefersReducedMotion ||
        isPaused ||
        document.hidden ||
        slides.length < 2
      ) {
        return;
      }

      timer = window.setInterval(function () {
        showSlide(currentIndex + 1);
      }, autoplayDelay);

    }


    function manualNavigation(index) {
      showSlide(index);
      startAutoplay();
    }


    if (prevButton) {
      prevButton.addEventListener("click", function () {
        manualNavigation(currentIndex - 1);
      });
    }


    if (nextButton) {
      nextButton.addEventListener("click", function () {
        manualNavigation(currentIndex + 1);
      });
    }


    dots.forEach(function (dot, index) {

      dot.addEventListener("click", function () {
        manualNavigation(index);
      });

    });


    slider.addEventListener("mouseenter", function () {
      isPaused = true;
      stopAutoplay();
    });


    slider.addEventListener("mouseleave", function () {
      isPaused = false;
      startAutoplay();
    });


    slider.addEventListener("focusin", function () {
      isPaused = true;
      stopAutoplay();
    });


    slider.addEventListener("focusout", function () {

      window.setTimeout(function () {

        if (!slider.contains(document.activeElement)) {
          isPaused = false;
          startAutoplay();
        }

      }, 100);

    });


    document.addEventListener("visibilitychange", function () {

      if (document.hidden) {
        stopAutoplay();
      } else {
        startAutoplay();
      }

    });


    // Mobile swipe support.
    let touchStartX = 0;
    let touchStartY = 0;

    slider.addEventListener("touchstart", function (event) {

      touchStartX = event.changedTouches[0].screenX;
      touchStartY = event.changedTouches[0].screenY;

    }, { passive: true });


    slider.addEventListener("touchend", function (event) {

      const touchEndX = event.changedTouches[0].screenX;
      const touchEndY = event.changedTouches[0].screenY;

      const differenceX = touchEndX - touchStartX;
      const differenceY = touchEndY - touchStartY;

      if (
        Math.abs(differenceX) > 50 &&
        Math.abs(differenceX) > Math.abs(differenceY)
      ) {

        if (differenceX < 0) {
          manualNavigation(currentIndex + 1);
        } else {
          manualNavigation(currentIndex - 1);
        }

      }

    }, { passive: true });


    // Initialize slider.
    slides.forEach(function (slide, index) {

      slide.setAttribute(
        "aria-hidden",
        index === 0 ? "false" : "true"
      );

    });

    updateSlider(0);
    startAutoplay();

  }


  /* =====================================
     9. HOME PAGE HERO SLIDER
  ===================================== */

  const heroSlider = document.querySelector("[data-hero-slider]");

  if (heroSlider) {

    initializeSlider({

      slider: heroSlider,

      slides: heroSlider.querySelectorAll(".hero-slide"),

      dots: heroSlider.querySelectorAll(".hero-dot"),

      prevButton: heroSlider.querySelector(".hero-prev"),

      nextButton: heroSlider.querySelector(".hero-next"),

      delay: 4000

    });

  }


  /* =====================================
     10. MACHINERY INDIVIDUAL SLIDERS
  ===================================== */

  document.querySelectorAll("[data-machinery-slider]").forEach(
    function (slider) {

      initializeSlider({

        slider: slider,

        slides: slider.querySelectorAll(".machinery-gallery-slide"),

        dots: slider.querySelectorAll("[data-machinery-dot]"),

        prevButton: slider.querySelector("[data-machinery-prev]"),

        nextButton: slider.querySelector("[data-machinery-next]"),

        delay: 4000

      });

    }
  );


  /* =====================================
     11. EXTERNAL LINK SECURITY
  ===================================== */

  document.querySelectorAll('a[target="_blank"]').forEach(
    function (link) {
      link.setAttribute("rel", "noopener noreferrer");
    }
  );


  /* =====================================
     12. CURRENT PAGE NAVIGATION
  ===================================== */

  function normalizePath(path) {

    if (path === "/") {
      return "/";
    }

    path = path.replace(/\/+$/, "");

    if (path.endsWith("/index.html")) {
      return path.slice(0, -10) || "/";
    }

    return path;

  }

  const currentPath = normalizePath(window.location.pathname);

  document.querySelectorAll(".nav a").forEach(function (link) {

    try {

      const linkPath = normalizePath(
        new URL(link.href, document.baseURI).pathname
      );

      if (linkPath === currentPath) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }

    } catch (error) {
      // Ignore invalid navigation URLs.
    }

  });


  /* =====================================
     13. WEBSITE INITIALIZATION COMPLETE
  ===================================== */

  console.log("SYE Infra Website initialized successfully.");

});
