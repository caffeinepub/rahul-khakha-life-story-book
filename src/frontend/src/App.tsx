import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// ── Types ──────────────────────────────────────────────────────────────────
interface ChapterData {
  id: number;
  title: string;
  subtitle: string;
  ageRange: string;
  hindi: string;
  english: string;
}

// ── Inline chapter data (all 25 chapters) ─────────────────────────────────
const CHAPTERS: ChapterData[] = [
  {
    id: 1,
    title: "जन्म की कहानी",
    subtitle: "Janam Ki Kahani",
    ageRange: "1 वर्ष",
    hindi:
      "राहुल राजा खाखा का जन्म एक साधारण परिवार में हुआ था, लेकिन उनके जन्म के साथ ही एक असाधारण कहानी की शुरुआत हो गई थी। उनकी माँ ने उन्हें देखते ही महसूस किया कि यह बच्चा कुछ अलग है। उनकी आँखों में एक अजीब सी चमक थी, जो हर किसी को आकर्षित करती थी।\n\nपरिवार वालों ने उन्हें 'राजा' नाम दिया क्योंकि वे सच में एक राजा की तरह पैदा हुए थे। उनके जन्म का दिन पूरे परिवार के लिए उत्सव का दिन था। गाँव के लोग आए, आशीर्वाद दिए और कहा कि यह बच्चा एक दिन बड़ा नाम करेगा।\n\nजन्म के पहले साल में ही राहुल ने अपनी अलग पहचान बनानी शुरू कर दी थी। उनकी मुस्कान इतनी प्यारी थी कि जो भी देखता, उनका मन प्रसन्न हो जाता। माँ की गोद में बैठकर वे दुनिया को उन आँखों से देखते जिनमें एक असीम जिज्ञासा थी।",
    english:
      "Rahul Raja Khakha was born into a humble family, but with his birth began an extraordinary story. His mother felt the moment she saw him that this child was different. There was a special sparkle in his eyes that attracted everyone.\n\nThe family named him 'Raja' because he was truly born like a king. The day of his birth was a day of celebration for the entire family. People from the village came, gave blessings and said that this child would make a great name one day.\n\nIn the very first year of life, Rahul had already started making his unique identity. His smile was so beautiful that anyone who saw it felt their heart brighten. Sitting in his mother's lap, he watched the world with eyes filled with boundless curiosity.",
  },
  {
    id: 2,
    title: "पहले कदम",
    subtitle: "Pehle Kadam",
    ageRange: "2-3 वर्ष",
    hindi:
      "दो साल की उम्र में राहुल ने अपने पहले कदम रखे। जब उन्होंने पहली बार चलना शुरू किया, तो पूरा घर खुशी से भर गया। वे जहाँ भी जाते, मुस्कुराते रहते। उनकी हँसी घर में रोशनी भर देती थी।\n\nतीन साल की उम्र तक वे न केवल चलने लगे थे बल्कि दौड़ने भी लगे थे। उनकी ऊर्जा अनंत थी और उनकी जिज्ञासा असीमित। घर में जो भी नई चीज़ होती, राहुल सबसे पहले उसकी तरफ दौड़ते।\n\nइन दो सालों में राहुल ने अपनी माँ की ममता और पिता के संरक्षण में बहुत कुछ सीखा। हर गिरने के बाद उठना, हर रुकावट को पार करना - यह उनकी पहली सीख थी जो ताउम्र काम आई।",
    english:
      "At the age of two, Rahul took his first steps. When he first started walking, the whole house filled with joy. Wherever he went, he kept smiling. His laughter filled the home with light.\n\nBy the age of three, he had not only learned to walk but also to run. His energy was boundless and his curiosity limitless. Whenever there was something new in the house, Rahul was the first to run towards it.\n\nIn these two years, Rahul learned a lot under his mother's love and father's protection. Getting up after every fall, crossing every obstacle - this was his first lesson that served him throughout his life.",
  },
  {
    id: 3,
    title: "खेल और सपने",
    subtitle: "Khel Aur Sapne",
    ageRange: "4-5 वर्ष",
    hindi:
      "चार-पाँच साल की उम्र में राहुल के लिए पूरी दुनिया एक खेल का मैदान थी। वे हर चीज़ में सीखने की कोशिश करते। मिट्टी से घर बनाना, पत्थरों से खेलना, पेड़ पर चढ़ना - सब कुछ उनके लिए एक नया अनुभव था।\n\nउनके दोस्त उनसे बहुत प्रभावित थे क्योंकि राहुल हमेशा नई-नई चीज़ें सोचते थे। खेल में भी उनकी नेतृत्व क्षमता दिखती थी। वे हमेशा ऐसे खेल चुनते जिनमें सभी मिलकर खेल सकें।\n\nइसी उम्र में उन्होंने पहली बार सपना देखा कि वे बड़े होकर कुछ बड़ा करेंगे। रात को तारों को देखकर वे अपनी माँ से पूछते - 'माँ, क्या मैं भी एक दिन उन तारों जैसा चमक सकता हूँ?' माँ मुस्कुरातीं और कहतीं - 'बेटा, तुम तो सूरज बनोगे।'",
    english:
      "At the age of four to five, the whole world was a playground for Rahul. He tried to learn from everything. Building houses from mud, playing with stones, climbing trees - everything was a new experience for him.\n\nHis friends were very impressed because Rahul always thought of new things. His leadership ability was visible even in games. He always chose games where everyone could play together.\n\nAt this age, he first dreamed that he would do something big when he grew up. Looking at the stars at night, he would ask his mother - 'Mom, can I also shine like those stars one day?' Mother would smile and say - 'Son, you will become the sun.'",
  },
  {
    id: 4,
    title: "स्कूल का पहला दिन",
    subtitle: "School Ka Pehla Din",
    ageRange: "6 वर्ष",
    hindi:
      "छह साल की उम्र में राहुल स्कूल गए। पहले दिन वे थोड़े डरे हुए थे, लेकिन जब उन्होंने अपने क्लासमेट्स को देखा तो सारा डर दूर हो गया। उनके टीचर ने उनमें एक असाधारण प्रतिभा देखी।\n\nपहले ही दिन राहुल ने सभी बच्चों के नाम याद कर लिए। उनकी याद्दाश्त और सीखने की क्षमता सबको हैरान कर देती थी। टीचर ने उनकी माँ से कहा - 'आपका बेटा बहुत होनहार है, इस पर ध्यान दीजिए।'\n\nस्कूल उनके लिए सिर्फ पढ़ाई की जगह नहीं थी, यह उनके सपनों की दुनिया थी। हर किताब एक नई दुनिया खोलती थी, हर सबक एक नई सीख देता था। स्कूल की घंटी बजते ही राहुल के चेहरे पर मुस्कान आ जाती थी।",
    english:
      "At the age of six, Rahul went to school. On the first day he was a little scared, but when he saw his classmates, all the fear disappeared. His teacher saw an extraordinary talent in him.\n\nOn the very first day, Rahul memorized the names of all the children. His memory and ability to learn amazed everyone. The teacher told his mother - 'Your son is very talented, pay attention to him.'\n\nSchool was not just a place of study for him, it was the world of his dreams. Every book opened a new world, every lesson gave a new learning. As soon as the school bell rang, a smile would come on Rahul's face.",
  },
  {
    id: 5,
    title: "दोस्ती और सीखना",
    subtitle: "Dosti Aur Sikhna",
    ageRange: "7-8 वर्ष",
    hindi:
      "सात-आठ साल की उम्र तक राहुल के बहुत दोस्त हो गए थे। वे हमेशा दूसरों की मदद करते थे। अगर कोई दोस्त पढ़ाई में पिछड़ रहा होता तो राहुल उसे समझाते।\n\nइसी गुण ने उन्हें सबका प्रिय बना दिया। उनके टीचर कहते थे कि राहुल में नेतृत्व करने का गुण है। वे सिर्फ पढ़ाई में नहीं बल्कि खेल में भी आगे रहते थे। क्रिकेट खेलते समय वे अपनी टीम को जीत दिलाने के लिए हमेशा अतिरिक्त प्रयास करते।\n\nदोस्ती के इस दौर में राहुल ने सीखा कि जीवन में सबसे बड़ी ताकत रिश्ते होते हैं। 'एक अकेला थक जाता है, मिलकर बोझ उठाओ' - यह सीख उन्होंने इसी उम्र में पाई और जीवनभर अपनाई।",
    english:
      "By the age of seven to eight, Rahul had made many friends. He always helped others. If any friend was falling behind in studies, Rahul would explain to them.\n\nThis quality made him everyone's favorite. His teachers said that Rahul had the quality of leadership. He was not only ahead in studies but also in sports. While playing cricket, he always made extra efforts to lead his team to victory.\n\nIn this era of friendship, Rahul learned that the greatest strength in life is relationships. 'A lone person gets tired, lift the burden together' - this lesson he received at this age and adopted throughout his life.",
  },
  {
    id: 6,
    title: "एक दशक पूरा",
    subtitle: "Ek Dashak Poora",
    ageRange: "10 वर्ष",
    hindi:
      "दस साल की उम्र एक मील का पत्थर होती है। राहुल के लिए यह उम्र बहुत खास थी। उन्होंने इस उम्र में पहली बार महसूस किया कि वे बड़े हो रहे हैं और जीवन में बहुत कुछ करना है।\n\nउन्होंने अपने आप से वादा किया कि वे अपने परिवार का नाम रोशन करेंगे। इस उम्र में उनकी सोच बड़ों जैसी हो गई थी। हर समस्या को वे शांत मन से सुलझाते थे।\n\nदस साल की उम्र में राहुल ने अपनी पहली कविता लिखी - 'मैं हूँ राजा, मेरा रास्ता साफ है, माँ की दुआओं से भरा मेरा बटुआ है।' यह कविता उनके स्कूल के वार्षिक समारोह में सुनाई गई और सभी ने तालियाँ बजाईं।",
    english:
      "The age of ten is a milestone. For Rahul, this age was very special. At this age, he first felt that he was growing up and there was much to do in life.\n\nHe promised himself that he would bring glory to his family's name. At this age, his thinking had become like an adult. He solved every problem with a calm mind.\n\nAt the age of ten, Rahul wrote his first poem - 'I am Raja, my path is clear, my wallet is filled with my mother's prayers.' This poem was recited at his school's annual function and everyone applauded.",
  },
  {
    id: 7,
    title: "नई चुनौतियाँ",
    subtitle: "Nayi Chunautiyaan",
    ageRange: "11-12 वर्ष",
    hindi:
      "ग्यारह-बारह साल की उम्र में जीवन में नई चुनौतियाँ आईं। पढ़ाई का बोझ बढ़ा, प्रतियोगिताएं बढ़ीं। लेकिन राहुल ने हर चुनौती को एक अवसर की तरह देखा।\n\nजब भी उन्हें मुश्किल आती, वे और ज़्यादा मेहनत करते। उनकी यह आदत उन्हें बाकी बच्चों से अलग बनाती थी। उनके माता-पिता उन पर गर्व करते थे।\n\nइस उम्र में राहुल ने एक ज़िला स्तरीय निबंध प्रतियोगिता जीती। उनका निबंध 'मेरा भारत महान' था जिसमें उन्होंने देश के प्रति अपनी भावनाएं व्यक्त की थीं। पुरस्कार लेते समय उनकी आँखों में खुशी के आँसू थे।",
    english:
      "At the age of eleven to twelve, new challenges came in life. The burden of studies increased, competitions increased. But Rahul saw every challenge as an opportunity.\n\nWhenever he faced difficulty, he worked harder. This habit made him different from other children. His parents were proud of him.\n\nAt this age, Rahul won a district-level essay competition. His essay was 'My India is Great' in which he had expressed his feelings towards the country. While receiving the award, there were tears of joy in his eyes.",
  },
  {
    id: 8,
    title: "किशोरावस्था की शुरुआत",
    subtitle: "Kishoravastha Ki Shuruaat",
    ageRange: "13 वर्ष",
    hindi:
      "तेरह साल की उम्र में राहुल किशोरावस्था में प्रवेश किया। यह उम्र बदलाव की उम्र थी। उनके अंदर एक नई ऊर्जा आई।\n\nउन्होंने संगीत में रुचि लेनी शुरू की, कविताएं लिखने लगे। उनकी रचनात्मकता उनके दोस्तों को हैरान करती थी। इसी उम्र में उन्होंने समाज के बारे में सोचना शुरू किया।\n\nवे समझने लगे कि जिंदगी सिर्फ अपने लिए नहीं बल्कि दूसरों के लिए भी जीनी चाहिए। उन्होंने अपने मोहल्ले में छोटे बच्चों को पढ़ाना शुरू किया। यह उनकी समाज सेवा की पहली शुरुआत थी।",
    english:
      "At the age of thirteen, Rahul entered adolescence. This was the age of change. A new energy came within him.\n\nHe started taking interest in music and began writing poems. His creativity amazed his friends. At this age, he started thinking about society.\n\nHe began to understand that life should be lived not just for oneself but for others too. He started teaching younger children in his neighborhood. This was the beginning of his social service.",
  },
  {
    id: 9,
    title: "सपनों का निर्माण",
    subtitle: "Sapno Ka Nirman",
    ageRange: "14 वर्ष",
    hindi:
      "चौदह साल की उम्र में राहुल ने अपने भविष्य के बारे में गहराई से सोचना शुरू किया। उन्होंने तय किया कि वे अपने गाँव, अपने समाज के लिए कुछ करेंगे।\n\nउनके सपने बड़े थे लेकिन उनके पाँव ज़मीन पर थे। इस उम्र में उन्होंने पहली बार सार्वजनिक रूप से बोला और सभी को प्रभावित किया। उनकी आवाज़ में एक जादू था जो सुनने वालों को बाँध लेता था।\n\nस्कूल के सालाना जलसे में जब राहुल ने मंच संभाला और भाषण दिया, तो पूरा हॉल तालियों से गूँज उठा। उनके शिक्षक ने कहा - 'इस बच्चे में एक महान वक्ता बनने की क्षमता है।'",
    english:
      "At the age of fourteen, Rahul started thinking deeply about his future. He decided that he would do something for his village, his society.\n\nHis dreams were big but his feet were on the ground. At this age, he spoke publicly for the first time and impressed everyone. There was a magic in his voice that captivated listeners.\n\nWhen Rahul took the stage and gave a speech at the school's annual function, the entire hall echoed with applause. His teacher said - 'This child has the ability to become a great orator.'",
  },
  {
    id: 10,
    title: "संघर्ष और हौसला",
    subtitle: "Sangharsh Aur Hosla",
    ageRange: "15 वर्ष",
    hindi:
      "पंद्रह साल की उम्र में जीवन ने राहुल को पहली बड़ी परीक्षा दी। परिवार में कुछ कठिनाइयाँ आईं। लेकिन राहुल ने हिम्मत नहीं हारी।\n\nउन्होंने अपने परिवार की मदद की और अपनी पढ़ाई भी जारी रखी। इस कठिन समय ने उन्हें और मज़बूत बनाया। वे समझ गए कि जीवन में तूफान आते हैं लेकिन जो झुकता नहीं वही जीतता है।\n\nइस संघर्ष के दौर में राहुल ने एक डायरी लिखना शुरू किया। उस डायरी के पहले पन्ने पर लिखा था - 'मुझे तोड़ने की कोशिश करने वाले, तुमने मुझे और मज़बूत बना दिया।' यह वाक्य उनके जीवन का मंत्र बन गया।",
    english:
      "At the age of fifteen, life gave Rahul his first big test. Some difficulties came in the family. But Rahul did not lose courage.\n\nHe helped his family and also continued his studies. This difficult time made him stronger. He understood that storms come in life but the one who does not bow down is the one who wins.\n\nDuring this period of struggle, Rahul started writing a diary. On the first page of that diary was written - 'Those who tried to break me, you made me even stronger.' This sentence became the mantra of his life.",
  },
  {
    id: 11,
    title: "नई राह",
    subtitle: "Nayi Raah",
    ageRange: "16 वर्ष",
    hindi:
      "सोलह साल की उम्र में राहुल ने एक नई राह चुनी। उन्होंने समाज सेवा में कदम रखा। वे अपने मोहल्ले के बच्चों को मुफ्त में पढ़ाने लगे।\n\nउनकी यह पहल लोगों के दिलों को छू गई। धीरे-धीरे उनकी पहचान बनने लगी। लोग उनसे सलाह लेने आते। इस उम्र में वे सिर्फ एक छात्र नहीं बल्कि एक नेता बन रहे थे।\n\nएक बार गाँव में बाढ़ आई। राहुल ने बिना किसी की मदद का इंतज़ार किए लोगों को सुरक्षित स्थान पर पहुँचाया। इस साहस के काम की खूब तारीफ हुई और राहुल का नाम और चमका।",
    english:
      "At the age of sixteen, Rahul chose a new path. He stepped into social service. He started teaching children of his neighborhood for free.\n\nThis initiative of his touched people's hearts. Gradually his identity began to form. People came to him for advice. At this age, he was not just a student but was becoming a leader.\n\nOnce there was a flood in the village. Without waiting for anyone's help, Rahul took people to a safe place. This courageous act was greatly praised and Rahul's name shone even brighter.",
  },
  {
    id: 12,
    title: "जुनून की आग",
    subtitle: "Junoon Ki Aag",
    ageRange: "17 वर्ष",
    hindi:
      "सत्रह साल की उम्र में राहुल के अंदर एक आग जल उठी। वे अपने सपनों के लिए जीने लगे। उन्होंने हर बाधा को पार किया, हर मुश्किल से लड़ा।\n\nउनका जुनून उनकी सबसे बड़ी ताकत था। जब लोग थक जाते, राहुल और जोश से काम करते। उनकी यह लगन देख कर बड़े-बड़े लोग हैरान हो जाते थे।\n\nइस साल राहुल ने राज्य स्तर पर एक युवा नेतृत्व प्रतियोगिता में भाग लिया और दूसरा स्थान प्राप्त किया। पहली बार वे प्रदेश के हज़ारों युवाओं के सामने खड़े हुए और अपनी बात कही। वह दिन उनके जीवन का एक यादगार मोड़ था।",
    english:
      "At the age of seventeen, a fire lit up inside Rahul. He started living for his dreams. He crossed every obstacle, fought every difficulty.\n\nHis passion was his greatest strength. When others got tired, Rahul worked with more enthusiasm. Seeing his dedication, even elders were amazed.\n\nThis year Rahul participated in a state-level youth leadership competition and secured second place. For the first time he stood before thousands of youth of the state and spoke his mind. That day was a memorable turning point in his life.",
  },
  {
    id: 13,
    title: "जवानी का सफर",
    subtitle: "Jawani Ka Safar",
    ageRange: "18 वर्ष",
    hindi:
      "अठारह साल की उम्र में राहुल युवा हो गए। यह उनके जीवन का नया अध्याय था। वे अब अपने फैसले खुद लेने में सक्षम थे।\n\nउन्होंने देश और समाज के प्रति अपनी जिम्मेदारी महसूस की। 'मैं भारतीय हूँ और मुझे अपने देश के लिए कुछ करना है' - यही उनका संकल्प था।\n\nइस उम्र में उनकी आवाज़ और उनका काम दोनों ही प्रभावशाली हो गए थे। उन्होंने पहली बार मतदाता के रूप में अपने मताधिकार का प्रयोग किया और कहा - 'यह वोट सिर्फ एक वोट नहीं, यह एक सपने का वोट है, एक बेहतर भारत का वोट है।'",
    english:
      "At the age of eighteen, Rahul became a young man. This was a new chapter of his life. He was now capable of making his own decisions.\n\nHe felt his responsibility towards the country and society. 'I am Indian and I have to do something for my country' - this was his resolve.\n\nAt this age, both his voice and his work had become impactful. He used his voting right as a voter for the first time and said - 'This vote is not just a vote, it is a vote for a dream, a vote for a better India.'",
  },
  {
    id: 14,
    title: "पहली बड़ी जीत",
    subtitle: "Pehli Badi Jeet",
    ageRange: "19 वर्ष",
    hindi:
      "उन्नीस साल की उम्र में राहुल को पहली बड़ी सफलता मिली। उन्होंने एक बड़ी प्रतियोगिता जीती जिसने उनकी पहचान को राज्य स्तर पर पहुँचाया।\n\nलोग उनका नाम लेने लगे। मीडिया ने उनकी तारीफ की। लेकिन राहुल ने यश से घमंड नहीं किया। वे और अधिक विनम्र और मेहनती हो गए।\n\nउनकी यह सादगी उनकी सबसे बड़ी खूबी थी। जीत के बाद जब पत्रकारों ने पूछा - 'राहुल जी, इस सफलता का राज़ क्या है?' तो उन्होंने कहा - 'माँ की दुआएं और अपने देश से प्यार।' यह जवाब सबके दिल को छू गया।",
    english:
      "At the age of nineteen, Rahul got his first big success. He won a big competition that brought his identity to the state level.\n\nPeople started taking his name. Media praised him. But Rahul did not become arrogant with fame. He became even more humble and hardworking.\n\nThis simplicity of his was his greatest virtue. After the victory when journalists asked - 'Rahul ji, what is the secret of this success?' He said - 'Mother's prayers and love for my country.' This answer touched everyone's heart.",
  },
  {
    id: 15,
    title: "बीस साल का बादशाह",
    subtitle: "Bees Saal Ka Baadshah",
    ageRange: "20 वर्ष",
    hindi:
      "बीस साल की उम्र में राहुल एक सितारे की तरह चमक रहे थे। उनके आसपास अब बहुत लोग थे जो उनसे प्रेरणा लेते थे। वे युवाओं के लिए एक रोल मॉडल बन गए थे।\n\n'राहुल राजा खाखा' का नाम एक ब्रांड बन रहा था। उन्होंने अपनी कमाई का एक हिस्सा ज़रूरतमंद बच्चों की पढ़ाई में लगाया। यही उनकी असली पहचान थी।\n\nबीस साल पूरे होने पर उनके दोस्तों ने एक छोटा सा जश्न मनाया। उस जश्न में राहुल ने कहा - 'बीस साल की यह यात्रा सिर्फ शुरुआत है। जो आगे होना है वह और भी शानदार होगा।' और वाकई, आगे की कहानी और भी शानदार थी।",
    english:
      "At the age of twenty, Rahul was shining like a star. Around him now were many people who took inspiration from him. He had become a role model for youth.\n\nThe name 'Rahul Raja Khakha' was becoming a brand. He invested part of his earnings in the education of needy children. This was his real identity.\n\nOn completing twenty years, his friends celebrated a small party. At that celebration Rahul said - 'This twenty-year journey is just the beginning. What is to come will be even more magnificent.' And indeed, the story ahead was even more magnificent.",
  },
  {
    id: 16,
    title: "नई जिम्मेदारी",
    subtitle: "Nayi Zimmedaari",
    ageRange: "21 वर्ष",
    hindi:
      "इक्कीस साल की उम्र में राहुल ने नई जिम्मेदारियाँ उठाईं। वे अब परिवार के लिए एक मज़बूत स्तंभ बन गए थे। उन्होंने अपने छोटे भाई-बहनों की पढ़ाई का ध्यान रखा।\n\nसमाज में उनकी भूमिका और बड़ी हो गई। लोग उन्हें 'राजा भाई' कहकर बुलाते थे। इस उम्र में उन्होंने अपनी पहली संस्था शुरू की जो युवाओं को आगे बढ़ने में मदद करती थी।\n\nसंस्था का नाम था 'खाखा युवा मंच'। इस मंच के ज़रिए सैकड़ों युवाओं को दिशा मिली। राहुल ने बिना किसी सरकारी मदद के, सिर्फ अपनी मेहनत और दोस्तों के सहयोग से यह काम किया।",
    english:
      "At the age of twenty-one, Rahul took on new responsibilities. He had now become a strong pillar for the family. He took care of his younger siblings' education.\n\nHis role in society became even bigger. People called him 'Raja Bhai'. At this age, he started his first organization that helped young people move forward.\n\nThe organization was named 'Khakha Yuva Manch'. Through this platform, hundreds of youth got direction. Rahul did this work without any government help, only through his hard work and friends' cooperation.",
  },
  {
    id: 17,
    title: "सफलता की सीढ़ी",
    subtitle: "Safalta Ki Seedhi",
    ageRange: "22 वर्ष",
    hindi:
      "बाईस साल की उम्र तक राहुल सफलता की एक-एक सीढ़ी चढ़ चुके थे। उनकी कहानी प्रेरणादायक बन गई थी। कई स्कूलों और कॉलेजों में उन्हें भाषण देने के लिए बुलाया जाने लगा।\n\nजब वे मंच पर खड़े होकर बोलते तो पूरा हॉल सन्नाटे में डूब जाता। उनके शब्दों में जादू था। युवा उनकी बातें सुनकर प्रेरित हो जाते थे।\n\nइस साल उन्हें एक राष्ट्रीय युवा पुरस्कार मिला। पुरस्कार समारोह में उन्होंने कहा - 'यह पुरस्कार मेरा नहीं, उन लाखों युवाओं का है जो रोज़ सुबह उठकर एक बेहतर कल की उम्मीद में जीते हैं।'",
    english:
      "By the age of twenty-two, Rahul had climbed every step of success. His story had become inspiring. He started being invited to give speeches in many schools and colleges.\n\nWhen he stood on the stage and spoke, the entire hall fell silent. There was magic in his words. Young people got inspired listening to him.\n\nThis year he received a National Youth Award. At the award ceremony he said - 'This award is not mine, it belongs to those millions of youth who wake up every morning and live with the hope of a better tomorrow.'",
  },
  {
    id: 18,
    title: "लोग और समाज",
    subtitle: "Log Aur Samaj",
    ageRange: "23 वर्ष",
    hindi:
      "तेईस साल की उम्र में राहुल ने समाज की गहराइयों को समझा। उन्होंने देखा कि बहुत से लोग अभी भी मूलभूत सुविधाओं से वंचित हैं।\n\nउन्होंने प्रण लिया कि वे अपनी पूरी ज़िंदगी ऐसे लोगों की मदद में लगाएंगे। उन्होंने स्वास्थ्य शिविर लगाए, शिक्षा अभियान चलाए।\n\nलोग उनसे प्यार करते थे क्योंकि राहुल सच में उनके दुख-दर्द को समझते थे। एक बार एक बुज़ुर्ग महिला ने राहुल को देखकर कहा - 'बेटा, भगवान ने तुम्हें हम गरीबों की आवाज़ बनाकर भेजा है।' इन शब्दों ने राहुल को और जोश से काम करने की ताकत दी।",
    english:
      "At the age of twenty-three, Rahul understood the depths of society. He saw that many people were still deprived of basic facilities.\n\nHe vowed that he would dedicate his entire life to helping such people. He organized health camps and ran education campaigns.\n\nPeople loved him because Rahul truly understood their sorrows and pain. Once an elderly woman said upon seeing Rahul - 'Son, God has sent you as the voice of us poor people.' These words gave Rahul the strength to work with even more enthusiasm.",
  },
  {
    id: 19,
    title: "पहचान बनाना",
    subtitle: "Pehchaan Banana",
    ageRange: "24 वर्ष",
    hindi:
      "चौबीस साल की उम्र तक राहुल राजा खाखा एक जानी-पहचानी शख्सियत बन गए थे। उनका नाम सुनते ही लोगों के चेहरे पर मुस्कान आ जाती थी।\n\nवे अब सिर्फ एक व्यक्ति नहीं बल्कि एक आंदोलन बन गए थे। उन्होंने साबित किया कि आम घर से आने वाला इंसान भी असाधारण काम कर सकता है।\n\nउनकी पहचान उनकी मेहनत, ईमानदारी और सेवाभावना थी। देश के कोने-कोने से लोग उनसे मिलने आते। एक पत्रकार ने लिखा - 'राहुल राजा खाखा - यह नाम सिर्फ एक व्यक्ति का नाम नहीं, यह एक युग का नाम है।'",
    english:
      "By the age of twenty-four, Rahul Raja Khakha had become a well-known personality. The mere mention of his name brought a smile to people's faces.\n\nHe was now not just an individual but had become a movement. He proved that a person from a common household can also do extraordinary work.\n\nHis identity was his hard work, honesty and spirit of service. People came from every corner of the country to meet him. A journalist wrote - 'Rahul Raja Khakha - this name is not just a person's name, it is the name of an era.'",
  },
  {
    id: 20,
    title: "पच्चीस साल की विरासत",
    subtitle: "Pachchis Saal Ki Virasat",
    ageRange: "25 वर्ष",
    hindi:
      "पच्चीस साल की उम्र में राहुल राजा खाखा एक पूर्ण इंसान के रूप में खड़े हैं। उनके जीवन की यह यात्रा एक सामान्य बच्चे से एक असाधारण नेता तक की यात्रा है।\n\nउन्होंने अपनी माँ का सपना पूरा किया, परिवार का नाम रोशन किया, समाज की सेवा की और खुद को साबित किया।\n\n'राहुल राजा खाखा' सिर्फ एक नाम नहीं है - यह एक प्रेरणा है, एक विश्वास है, एक उम्मीद है। पच्चीस साल की यह विरासत आने वाली पीढ़ियों को रास्ता दिखाती रहेगी। ♠️",
    english:
      "At the age of twenty-five, Rahul Raja Khakha stands as a complete human being. This journey of his life is a journey from an ordinary child to an extraordinary leader.\n\nHe fulfilled his mother's dream, brought glory to his family's name, served society and proved himself.\n\n'Rahul Raja Khakha' is not just a name - it is an inspiration, a belief, a hope. This legacy of twenty-five years will continue to show the way to coming generations. ♠️",
  },
  {
    id: 21,
    title: "मेरे मूल्य",
    subtitle: "Mere Mulya - My Values",
    ageRange: "जीवन दर्शन",
    hindi:
      "राहुल राजा खाखा के जीवन के मूल्य: सत्य, सेवा और संघर्ष। वे मानते हैं कि हर इंसान में कुछ न कुछ खास होता है, बस उसे पहचानने की ज़रूरत है।\n\nउन्होंने कभी किसी से बेईमानी नहीं की। उनका मानना है कि सफलता उसी की होती है जो दूसरों के साथ अच्छा करता है।\n\n'भारत माता की जय' उनका नारा है और 'जन सेवा ही प्रभु सेवा' उनका मंत्र। इन तीन मूल्यों ने उनके जीवन को एक दिशा दी और उन्हें वह बनाया जो वे आज हैं।",
    english:
      "The values of Rahul Raja Khakha's life: Truth, Service and Struggle. He believes that every person has something special, just needs to be recognized.\n\nHe never cheated anyone. He believes that success belongs to those who do good to others.\n\n'Bharat Mata Ki Jai' is his slogan and 'Service to people is service to God' is his mantra. These three values gave direction to his life and made him what he is today.",
  },
  {
    id: 22,
    title: "मेरे सपने",
    subtitle: "Mere Sapne - My Dreams",
    ageRange: "भविष्य की राह",
    hindi:
      "राहुल राजा खाखा का सबसे बड़ा सपना है कि भारत का हर बच्चा पढ़े, हर युवा को रोजगार मिले, हर बुजुर्ग को सम्मान मिले।\n\nवे एक ऐसे भारत का सपना देखते हैं जहाँ कोई भूखा न सोए, कोई बेघर न हो। उनका सपना है कि एक दिन उनका नाम उन महान लोगों में लिया जाए जिन्होंने देश के लिए अपना सब कुछ लगा दिया।\n\nये सपने महज़ ख्याल नहीं हैं - ये उनके जीवन का लक्ष्य है। और राहुल राजा खाखा जैसे इंसान जब कोई लक्ष्य ठान लेते हैं, तो उसे पूरा करके ही दम लेते हैं।",
    english:
      "Rahul Raja Khakha's biggest dream is that every child of India studies, every youth gets employment, every elder gets respect.\n\nHe dreams of an India where no one sleeps hungry, no one is homeless. His dream is that one day his name is counted among the great people who dedicated everything for the country.\n\nThese dreams are not mere thoughts - they are the goal of his life. And when a person like Rahul Raja Khakha sets a goal, they rest only after fulfilling it.",
  },
  {
    id: 23,
    title: "युवाओं को संदेश",
    subtitle: "Yuvaon Ko Sandesh - Message",
    ageRange: "युवाओं के लिए",
    hindi:
      "राहुल राजा खाखा का युवाओं को संदेश: 'डरो मत, सपने देखो और उन्हें पाने के लिए जी-जान लगा दो। रास्ता मुश्किल होगा, लोग हतोत्साहित करेंगे, लेकिन अपने दिल की आवाज़ सुनो।'\n\n'याद रखो - सूरज भी अंधेरे के बाद ही उगता है। तुम्हारी मेहनत कभी बेकार नहीं जाएगी। हर गिरावट के बाद उठना होता है, यही ज़िंदगी है।'\n\n'और हाँ, कभी अपने आप से प्यार करना मत भूलना। तुम खास हो, तुम्हारा जीवन मायने रखता है। भारत को तुम जैसे युवाओं की ज़रूरत है।' - राहुल राजा खाखा ♠️",
    english:
      "Rahul Raja Khakha's message to youth: 'Do not be afraid, dream big and give everything to achieve them. The path will be difficult, people will discourage you, but listen to the voice of your heart.'\n\n'Remember - even the sun rises only after darkness. Your hard work will never go to waste. After every fall you have to rise, that is life.'\n\n'And yes, never forget to love yourself. You are special, your life matters. India needs youth like you.' - Rahul Raja Khakha ♠️",
  },
  {
    id: 24,
    title: "माँ को समर्पण",
    subtitle: "Maa Ko Samarpan - Dedication",
    ageRange: "माँ के लिए",
    hindi:
      "यह पुस्तक मेरी माँ को समर्पित है। माँ, तुम्हारे बिना यह सब संभव नहीं था। तुमने रातों को जागकर मेरे लिए दुआएं कीं, कभी खुद नहीं खाया लेकिन मुझे भूखा नहीं रहने दिया।\n\nतुम्हारी आँखों की चमक ही मेरी ताकत है, तुम्हारी दुआएं ही मेरा कवच हैं। जब भी जीवन में अंधेरा आया, मैंने तुम्हारा चेहरा याद किया और रोशनी मिल गई।\n\nमाँ, तुमसे प्यार है, हमेशा और हर जन्म में। मेरी हर सफलता तुम्हारी है, मेरी हर खुशी तुम्हारी है। तुम मेरी दुनिया हो, मेरी जान हो। ♠️ इति।",
    english:
      "This book is dedicated to my mother. Mom, without you none of this was possible. You stayed awake at night and prayed for me, never ate yourself but did not let me go hungry.\n\nThe sparkle in your eyes is my strength, your prayers are my armor. Whenever darkness came in life, I remembered your face and found light.\n\nMom, I love you, always and in every lifetime. Every success of mine is yours, every happiness of mine is yours. You are my world, you are my life. ♠️ Thus.",
  },
  {
    id: 25,
    title: "अंतिम शब्द",
    subtitle: "Antim Shabd - Final Words",
    ageRange: "समापन",
    hindi:
      "राहुल राजा खाखा की यह जीवन कहानी यहाँ समाप्त नहीं होती, यहाँ से एक नई शुरुआत होती है। पच्चीस साल की यह यात्रा तो बस एक प्रस्तावना थी, असली कहानी अभी बाकी है।\n\nराहुल ने साबित किया कि इरादा पक्का हो तो मंजिल खुद-ब-खुद मिल जाती है। एक साधारण परिवार में जन्मा यह 'राजा' आज लाखों दिलों पर राज करता है।\n\nयह पुस्तक पढ़ने वाले हर इंसान से एक विनम्र निवेदन है - अपने जीवन की कहानी खुद लिखो, किसी और के लिखे रास्ते पर मत चलो। ♠️ राहुल राजा खाखा - एक नाम, एक पहचान, एक इतिहास। जय हिन्द!",
    english:
      "The life story of Rahul Raja Khakha does not end here, a new beginning starts from here. This twenty-five year journey was just a preface, the real story is yet to come.\n\nRahul proved that if the intention is firm, the destination finds itself. This 'Raja' born in a simple family today reigns in millions of hearts.\n\nA humble request to every person reading this book - write your own life story yourself, do not walk on a path written by someone else. ♠️ Rahul Raja Khakha - One name, one identity, one history. Jai Hind!",
  },
];

// ── Spade Divider ─────────────────────────────────────────────────────────
function SpadeDivider() {
  return (
    <div className="flex items-center gap-3 my-6">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <span className="text-gold text-xl select-none">♠️</span>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
    </div>
  );
}

// ── Cover Page ────────────────────────────────────────────────────────────
function CoverPage({ onRead }: { onRead: () => void }) {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ background: "#F6F1E6" }}
    >
      {/* Indian flag strip at top */}
      <div className="h-2 saffron-strip w-full" />

      {/* Header */}
      <header className="sticky top-0 z-20 bg-[#F6F1E6]/95 backdrop-blur-sm border-b border-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div>
            <div
              className="font-playfair font-bold text-base sm:text-lg tracking-widest uppercase"
              style={{ color: "#1B1B1B" }}
            >
              RAHUL RAJA KHAKHA
            </div>
            <div
              className="text-xs tracking-wider"
              style={{ color: "#C9A24A" }}
            >
              — Ek Amar Kahani
            </div>
          </div>
          <nav
            className="hidden md:flex items-center gap-6 text-sm"
            style={{ color: "#4A4036" }}
          >
            <a
              href="/#"
              className="hover:text-gold transition-colors"
              data-ocid="nav.home.link"
            >
              Home
            </a>
            <a
              href="/#"
              className="hover:text-gold transition-colors"
              data-ocid="nav.biography.link"
            >
              Biography
            </a>
            <a
              href="/#"
              className="hover:text-gold transition-colors"
              data-ocid="nav.legacy.link"
            >
              Legacy
            </a>
          </nav>
          <Button
            onClick={onRead}
            className="font-semibold text-sm px-5 py-2"
            style={{
              background: "#D48A2A",
              color: "#fff",
              border: "none",
            }}
            data-ocid="header.read_now.button"
          >
            Read Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Book Cover Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow behind book */}
              <div
                className="absolute inset-0 rounded-2xl blur-3xl"
                style={{
                  background:
                    "radial-gradient(ellipse, rgba(233,162,75,0.45) 0%, transparent 70%)",
                  transform: "scale(1.2)",
                }}
              />
              {/* Book cover */}
              <div
                className="relative rounded-xl overflow-hidden ornament-border"
                style={{
                  width: 300,
                  boxShadow:
                    "8px 10px 0 rgba(201,162,74,0.5), 18px 20px 40px rgba(27,27,27,0.4)",
                }}
              >
                {/* Top color bar — saffron */}
                <div className="h-3 w-full" style={{ background: "#FF9933" }} />
                {/* Photo */}
                <div className="relative">
                  <img
                    src="/assets/uploads/file_000000008dd4720890e285a65c53067f-1.png"
                    alt="Rahul Raja Khakha"
                    className="w-full object-cover"
                    style={{ height: 360 }}
                  />
                  {/* Gradient overlay at bottom of photo */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-20"
                    style={{
                      background:
                        "linear-gradient(to top, #1B1B1B 0%, transparent 100%)",
                    }}
                  />
                </div>
                {/* Book title area */}
                <div
                  className="px-4 py-4 text-center"
                  style={{ background: "#1B1B1B" }}
                >
                  <div
                    className="font-devanagari font-bold text-base leading-tight mb-1"
                    style={{ color: "#C9A24A" }}
                  >
                    राहुल राजा खाखा
                  </div>
                  <div
                    className="font-playfair text-xs tracking-widest uppercase"
                    style={{ color: "#E8C96A" }}
                  >
                    एक अमर कहानी
                  </div>
                  <div
                    className="mt-2"
                    style={{ color: "#C9A24A", fontSize: 18 }}
                  >
                    ♠️
                  </div>
                  {/* Signature */}
                  <img
                    src="/assets/generated/signature-transparent.dim_600x150.png"
                    alt="Signature of Rahul Raja Khakha"
                    className="mx-auto mt-1"
                    style={{ width: 180, opacity: 0.9 }}
                  />
                </div>
                {/* Bottom color bar — green */}
                <div className="h-3 w-full" style={{ background: "#138808" }} />
              </div>
            </div>
          </motion.div>

          {/* Right — Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div>
              <div
                className="text-xs font-semibold tracking-[0.3em] uppercase mb-3"
                style={{ color: "#C9A24A" }}
              >
                ♠️ &nbsp; Official Biography &nbsp; ♠️
              </div>
              <h1
                className="font-devanagari font-bold leading-tight mb-2"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.25rem)",
                  color: "#1B1B1B",
                }}
              >
                राहुल राजा खाखा
              </h1>
              <h2
                className="font-playfair italic text-xl sm:text-2xl mb-4"
                style={{ color: "#C9A24A" }}
              >
                Ek Amar Kahani
              </h2>
              <p
                className="text-base leading-relaxed mb-2 font-devanagari"
                style={{ color: "#4A4036" }}
              >
                एक अमर कहानी — Ek Amar Kahani
              </p>
              <p
                className="text-base leading-relaxed font-devanagari"
                style={{ color: "#4A4036", lineHeight: 1.8 }}
              >
                1 वर्ष से 25 वर्ष तक की शक्तिशाली जीवन यात्रा
              </p>
            </div>

            {/* Indian flag accent bar */}
            <div className="flex items-center gap-0 w-48 h-2 rounded-full overflow-hidden">
              <div
                className="flex-1 h-full"
                style={{ background: "#FF9933" }}
              />
              <div
                className="flex-1 h-full"
                style={{ background: "#ffffff" }}
              />
              <div
                className="flex-1 h-full"
                style={{ background: "#138808" }}
              />
            </div>

            <p
              className="text-sm leading-loose"
              style={{ color: "#4A4036", maxWidth: 460 }}
            >
              एक साधारण घर में जन्मे एक असाधारण इंसान की कहानी। संघर्ष, साहस और सपनों की
              यह यात्रा आपके जीवन को बदल देगी।
              <br />
              <span style={{ color: "#888", fontSize: "0.8rem" }}>
                The extraordinary story of a man born in an ordinary home.
              </span>
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={onRead}
                className="px-8 py-3 text-base font-bold shadow-gold"
                style={{
                  background:
                    "linear-gradient(135deg, #D48A2A 0%, #C9A24A 100%)",
                  color: "#fff",
                  border: "none",
                  letterSpacing: "0.03em",
                }}
                data-ocid="cover.read_book.primary_button"
              >
                पुस्तक पढ़ें — Read Book
              </Button>
            </div>

            {/* Stats row */}
            <div className="flex gap-6 pt-2">
              {[
                { num: "25", label: "Chapters" },
                { num: "25", label: "Years" },
                { num: "1", label: "Legend" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div
                    className="font-playfair font-bold text-2xl"
                    style={{ color: "#C9A24A" }}
                  >
                    {s.num}
                  </div>
                  <div
                    className="text-xs uppercase tracking-widest"
                    style={{ color: "#888" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t border-gold/30 py-6 text-center text-xs"
        style={{ background: "#EFE7D6", color: "#4A4036" }}
      >
        <div className="mb-1">♠️ राहुल राजा खाखा — Rahul Raja Khakha ♠️</div>
        <div>
          © {new Date().getFullYear()}. Built with{" "}
          <span style={{ color: "#e25555" }}>♥</span> using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gold transition-colors"
          >
            caffeine.ai
          </a>
        </div>
      </footer>

      {/* Bottom Indian flag strip */}
      <div className="h-2 saffron-strip w-full" />
    </div>
  );
}

// ── Book Reading View ─────────────────────────────────────────────────────
function BookView({ onBack }: { onBack: () => void }) {
  const [activeChapter, setActiveChapter] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const chapter = CHAPTERS[activeChapter];

  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, []); // eslint-disable-line

  function goTo(idx: number) {
    setActiveChapter(Math.max(0, Math.min(CHAPTERS.length - 1, idx)));
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "#F6F1E6" }}
    >
      {/* Top strip */}
      <div className="h-1.5 saffron-strip w-full" />

      {/* Top bar */}
      <header className="sticky top-0 z-20 border-b border-gold/30 bg-[#F6F1E6]/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="text-sm gap-2 hover:bg-gold/10"
            style={{ color: "#4A4036" }}
            data-ocid="book.back_to_cover.button"
          >
            ← Back to Cover
          </Button>
          <div className="text-center flex-1">
            <div
              className="font-playfair font-bold tracking-wider text-sm sm:text-base"
              style={{ color: "#1B1B1B" }}
            >
              RAHUL RAJA KHAKHA
            </div>
            <div className="text-xs" style={{ color: "#C9A24A" }}>
              एक अमर कहानी ♠️
            </div>
          </div>
          <div
            className="text-xs text-right hidden sm:block"
            style={{ color: "#888", minWidth: 80 }}
          >
            Chapter {activeChapter + 1} / {CHAPTERS.length}
          </div>
        </div>
      </header>

      {/* Main layout */}
      <div className="flex-1 flex max-w-7xl mx-auto w-full">
        {/* Sidebar */}
        <aside
          className="hidden lg:flex flex-col w-72 xl:w-80 border-r border-gold/30 shrink-0"
          style={{ background: "#EFE7D6" }}
        >
          <div
            className="px-4 py-4 border-b border-gold/30 font-playfair font-bold tracking-wider text-sm"
            style={{ color: "#1B1B1B" }}
          >
            Chapter Navigation
          </div>
          <ScrollArea className="flex-1">
            <nav className="p-2" data-ocid="book.chapter_nav.list">
              {CHAPTERS.map((ch, idx) => (
                <button
                  type="button"
                  key={ch.id}
                  onClick={() => goTo(idx)}
                  data-ocid={`book.chapter.item.${idx + 1}`}
                  className={[
                    "w-full text-left px-3 py-3 rounded flex items-start gap-3 transition-all mb-1",
                    idx === activeChapter
                      ? "chapter-active"
                      : "hover:bg-gold/10",
                  ].join(" ")}
                >
                  {/* Number badge */}
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                    style={{
                      background:
                        idx === activeChapter
                          ? "#C9A24A"
                          : "rgba(201,162,74,0.15)",
                      color: idx === activeChapter ? "#fff" : "#C9A24A",
                    }}
                  >
                    {ch.id}
                  </span>
                  <div className="min-w-0">
                    <div
                      className="text-xs font-semibold leading-tight font-devanagari truncate"
                      style={{
                        color: idx === activeChapter ? "#1B1B1B" : "#4A4036",
                      }}
                    >
                      {ch.title}
                    </div>
                    <div
                      className="text-xs truncate mt-0.5"
                      style={{ color: "#888", fontSize: "0.7rem" }}
                    >
                      {ch.ageRange}
                    </div>
                  </div>
                </button>
              ))}
            </nav>
          </ScrollArea>
        </aside>

        {/* Content area */}
        <main className="flex-1 overflow-hidden flex flex-col">
          <ScrollArea className="flex-1" ref={contentRef as never}>
            <AnimatePresence mode="wait">
              <motion.article
                key={activeChapter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="max-w-3xl mx-auto px-6 py-10 lg:px-12"
                data-ocid="book.chapter_content.panel"
              >
                {/* Chapter header */}
                <div className="text-center mb-8">
                  <div
                    className="inline-block text-xs font-semibold tracking-[0.25em] uppercase px-4 py-1 rounded-full mb-4"
                    style={{
                      background: "rgba(201,162,74,0.12)",
                      color: "#C9A24A",
                      border: "1px solid rgba(201,162,74,0.3)",
                    }}
                  >
                    {chapter.ageRange}
                  </div>
                  <h2
                    className="font-devanagari font-bold leading-tight mb-2"
                    style={{
                      fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                      color: "#1B1B1B",
                    }}
                  >
                    {chapter.title}
                  </h2>
                  <p
                    className="font-playfair italic text-lg"
                    style={{ color: "#C9A24A" }}
                  >
                    {chapter.subtitle}
                  </p>
                  <div className="text-xs mt-2" style={{ color: "#888" }}>
                    Chapter {activeChapter + 1} of {CHAPTERS.length}
                  </div>
                </div>

                <SpadeDivider />

                {/* Hindi content */}
                <div
                  className="mb-8 p-6 rounded-xl"
                  style={{
                    background: "rgba(201,162,74,0.06)",
                    border: "1px solid rgba(201,162,74,0.2)",
                  }}
                >
                  <div
                    className="text-xs font-semibold tracking-widest uppercase mb-4"
                    style={{ color: "#C9A24A" }}
                  >
                    🇮🇳 हिंदी
                  </div>
                  {chapter.hindi.split("\n\n").map((para, i) => (
                    <p
                      key={`para-${i}-${para.slice(0, 10)}`}
                      className="font-devanagari mb-4 last:mb-0"
                      style={{
                        fontSize: "1.05rem",
                        lineHeight: 1.9,
                        color: "#1B1B1B",
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>

                <SpadeDivider />

                {/* English content */}
                <div
                  className="mb-8 p-6 rounded-xl"
                  style={{
                    background: "rgba(19,136,8,0.04)",
                    border: "1px solid rgba(19,136,8,0.15)",
                  }}
                >
                  <div
                    className="text-xs font-semibold tracking-widest uppercase mb-4"
                    style={{ color: "#138808" }}
                  >
                    🇬🇧 English
                  </div>
                  {chapter.english.split("\n\n").map((para, i) => (
                    <p
                      key={`para-${i}-${para.slice(0, 10)}`}
                      className="mb-4 last:mb-0"
                      style={{
                        fontSize: "1rem",
                        lineHeight: 1.8,
                        color: "#2B2B2B",
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {/* Portrait on last few chapters */}
                {activeChapter >= 18 && (
                  <div className="flex justify-center my-8">
                    <div
                      className="ornament-border rounded-xl overflow-hidden"
                      style={{ width: 200 }}
                    >
                      <img
                        src="/assets/uploads/file_000000008dd4720890e285a65c53067f-1.png"
                        alt="Rahul Raja Khakha"
                        className="w-full object-cover"
                        style={{ height: 220 }}
                      />
                    </div>
                  </div>
                )}

                {/* Prev / Next navigation */}
                <div className="flex items-center justify-between pt-6 mt-8 border-t border-gold/20">
                  <Button
                    variant="outline"
                    onClick={() => goTo(activeChapter - 1)}
                    disabled={activeChapter === 0}
                    className="gap-2"
                    style={{
                      borderColor: "rgba(201,162,74,0.4)",
                      color: "#4A4036",
                      background: "transparent",
                    }}
                    data-ocid="book.prev_chapter.button"
                  >
                    ← Previous
                  </Button>

                  <div
                    className="text-xs text-center"
                    style={{ color: "#888" }}
                  >
                    <div>♠️</div>
                    <div>Page {activeChapter + 1}</div>
                  </div>

                  <Button
                    variant="outline"
                    onClick={() => goTo(activeChapter + 1)}
                    disabled={activeChapter === CHAPTERS.length - 1}
                    className="gap-2"
                    style={{
                      borderColor: "rgba(201,162,74,0.4)",
                      color: "#4A4036",
                      background: "transparent",
                    }}
                    data-ocid="book.next_chapter.button"
                  >
                    Next →
                  </Button>
                </div>
              </motion.article>
            </AnimatePresence>
          </ScrollArea>
        </main>
      </div>

      {/* Mobile chapter selector */}
      <div
        className="lg:hidden border-t border-gold/30 px-4 py-3"
        style={{ background: "#EFE7D6" }}
      >
        <select
          className="w-full rounded-lg border border-gold/30 bg-transparent px-3 py-2 text-sm"
          style={{ color: "#1B1B1B" }}
          value={activeChapter}
          onChange={(e) => goTo(Number(e.target.value))}
          data-ocid="book.chapter_select.select"
        >
          {CHAPTERS.map((ch, idx) => (
            <option key={ch.id} value={idx}>
              Ch {ch.id}: {ch.title} ({ch.ageRange})
            </option>
          ))}
        </select>
      </div>

      {/* Footer */}
      <footer
        className="border-t border-gold/30 py-4 text-center text-xs"
        style={{ background: "#EFE7D6", color: "#4A4036" }}
      >
        © {new Date().getFullYear()}. Built with{" "}
        <span style={{ color: "#e25555" }}>♥</span> using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gold transition-colors"
        >
          caffeine.ai
        </a>
      </footer>
      <div className="h-1.5 saffron-strip w-full" />
    </div>
  );
}

// ── Root App ───────────────────────────────────────────────────────────────
export default function App() {
  const [reading, setReading] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {reading ? (
        <motion.div
          key="book"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <BookView onBack={() => setReading(false)} />
        </motion.div>
      ) : (
        <motion.div
          key="cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <CoverPage onRead={() => setReading(true)} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
