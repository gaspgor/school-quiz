import image from './images/image.jpg'
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg'
import image4 from './images/image4.jpg'
import image5 from './images/image5.jpg'
import image6 from './images/image6.jpg'
import image7 from './images/image7.jpg'
import image8 from './images/image8.jpg'
import image9 from './images/image9.jpg'
import audio1 from './audio/audio1.mp3'
import audio2 from './audio/audio2.mp3'
import audio3 from './audio/audio3.mp3'
import audio4 from './audio/audio4.mp3'
import audio5 from './audio/audio5.mp3'
import audio6 from './audio/audio6.mp3'
import audio7 from './audio/audio7.mp3'
import audio8 from './audio/audio8.mp3'
import audio9 from './audio/audio9.mp3'
import audio10 from './audio/audio10.mp3'



const QUESTIONS = [
  {
    "question": "Ով է պատկերված նկարում։",
    "answered": false,
    "type": "image",
    "image": image1,
    "answer": "Առնո Բաբաջանյան"
  },
  {
    "question": "Ով է պատկերված նկարում։",
    "answered": false,
    "type": "image",
    "image": image2,
    "answer": "Արամ Խաչատրյան"
  },
  {
    "question": "Ով է պատկերված նկարում։",
    "answered": false,
    "type": "image",
    "image": image3,
    "answer": "Կոմիտաս"
  },
  {
    "question": "Ով է պատկերված նկարում։",
    "answered": false,
    "type": "image",
    "image": image4,
    "answer": "Հովհաննես Այվազովսկի"
  },
  {
    "question": "Ով է պատկերված նկարում։",
    "answered": false,
    "type": "image",
    "image": image5,
    "answer": "Հովհաննես Թումանյան"
  },
  {
    "question": "Ով է պատկերված նկարում։",
    "answered": false,
    "type": "image",
    "image": image6,
    "answer": "Մարտիրոս Սարյան"
  },
  {
    "question": "Ով է պատկերված նկարում։",
    "answered": false,
    "type": "image",
    "image": image7,
    "answer": "Սոս Սարգսյան"
  },
  {
    "question": "Ով է պատկերված նկարում։",
    "answered": false,
    "type": "image",
    "image": image8,
    "answer": "Վազգեն Սարգսյան"
  },
  {
    "question": "Ով է պատկերված նկարում։",
    "answered": false,
    "type": "image",
    "image": image,
    "answer": "Վիկտոր Համբարձումյան"
  },
  {
    "question": "Ով է պատկերված նկարում։",
    "answered": false,
    "type": "image",
    "image": image9,
    "answer": "Քըրք_Քըրքորյան"
  },
  {
    "question": "Գուշակիր երաժշտությունը։",
    "answered": false,
    "type": "audio",
    "audio": audio1,
    "answer": "Տիգրան Մանսուրյան Մեր մանկության տանգոն"
  },
  {
    "question": "Գուշակիր երաժշտությունը։",
    "answered": false,
    "type": "audio",
    "audio": audio2,
    "answer": "Տիգրան Մանսուրյան Կտոր մը երկինք"
  },
  {
    "question": "Գուշակիր երաժշտությունը։",
    "answered": false,
    "type": "audio",
    "audio": audio3,
    "answer": "Սերժ Թանկյան , Լարիսա Ռայան Արի իմ սոխակ Барсех Каначеан"
  },
  {
    "question": "Գուշակիր երաժշտությունը։",
    "answered": false,
    "type": "audio",
    "audio": audio4,
    "answer": "Ռոբերտ Ամիրխանյան Երազ իմ երկիր"
  },
  {
    "question": "Գուշակիր երաժշտությունը։",
    "answered": false,
    "type": "audio",
    "audio": audio5,
    "answer": "Հայկո Սպանված աղավնի"
  },
  {
    "question": "Գուշակիր երաժշտությունը։",
    "answered": false,
    "type": "audio",
    "audio": audio6,
    "answer": "Հայկո Խաչագողի հիշատակարան"
  },
  {
    "question": "Գուշակիր երաժշտությունը։",
    "answered": false,
    "type": "audio",
    "audio": audio7,
    "answer": "Արամ Խաչատրյան Սուսերով պար"
  },
  {
    "question": "Գուշակիր երաժշտությունը։",
    "answered": false,
    "type": "audio",
    "audio": audio8,
    "answer": "Կռունկ Կոմիտաս"
  },
  {
    "question": "Գուշակիր երաժշտությունը։",
    "answered": false,
    "type": "audio",
    "audio": audio9,
    "answer": "Առնո Բաբաջանյան Նոկտյուրն"
  },
  {
    "question": "Գուշակիր երաժշտությունը։",
    "answered": false,
    "type": "audio",
    "audio": audio10,
    "answer": "Առնո Բաբաջանյան Էլեգիա"
  },
  {
    "question": "Ի՞նչ կա երկրի կենտրոնում։",
    "answered": false,
    "type": "1answer",
    "answer": `«կ» տառը։`
  },
  {
    "question": "Ավտոմեքենայի ո՞ր անիվը չի պտտվում ընթացքի ժամանակ։",
    "answered": false,
    "type": "1answer",
    "answer": "Պահեստային անիվը"
  },
  {
    "question": "Երկնքում այն մի հատ է, քաղաքում՝ երկու հատ, իսկ երկրագնդում ընդհանրապես չկա։",
    "answered": false,
    "type": "1answer",
    "answer": `«ք» տառը`
  },
  {
    "question": "Ե՞րբ ենք նայում «2»-ին և ասում «10»։",
    "answered": false,
    "type": "1answer",
    "answer": "Ժամատախտակի վրա, երբ ժամացույցի մեծ սլաքը կանգնած է լինում 2-ի վրա։"
  },
  {
    "question": "Տղամարդը գնում է գնացքով և երազում տեսնում, որ նա նստած է հատակի վրա, իսկ հատակի տախտակները պոկվում ու ընկնում են ցած։ Ու միայն մի տախտակ է մնացել։ Ի՞նչ պետք է անի տղամարդը, որպեսզի չընկնի։",
    "answered": false,
    "type": "1answer",
    "answer": "Տղամարդը պետք է արթնանա։"
  },
  {
    "question": "Ո՞ր ծովում ջուր չկա։",
    "answered": false,
    "type": "1answer",
    "answer": "Այն ծովում, որը պատկերված է քարտեզի վրա։"
  },
  {
    "question": "Ի՞նչն է ատամներով հասնում ծոծրակին։",
    "answered": false,
    "type": "1answer",
    "answer": "Սանրը"
  },
  {
    "question": "Քայլում էին երկու մայր և երկու դուստր։ Նրանք գտան 3 խնձոր և բաժանեցին միմյանց միջև։ Յուրաքանչյուրը ստացավ մեկ խնձոր։ Այդ ինչպե՞ս։",
    "answered": false,
    "type": "1answer",
    "answer": "Քայլում էին թոռնուհին, մայրին ու տատիկը։"
  },
  {
    "question": "Ո՞վ է յուրաքանչյուրին ցույց տալիս իր դեմքը, բայց ինքը դեմք չունի։",
    "answered": false,
    "type": "1answer",
    "answer": "Հայելի"
  },
  {
    "question": "Որտե՞ղ է հնարավոր, որ ձին թռչի ձիու վրայով։",
    "answered": false,
    "type": "1answer",
    "answer": "Շախմատում"
  },
  {
    "question": "Ո՞ր լեռնագագաթներն են ձևավորում Սասունը` որպես լեռնաշխարհ:\n" +
      "Ո՞ր գետն է սկիզբ առնում այդտեղից և ի՞նչ կամուրջ է կառուցված նրա վրա:\n",
    "answered": false,
    "type": "1answer",
    "answer": "Սասունը` որպես լեռնաշխարհ, ձևավորում են Գեբինը, Ծովասարը և Անդոկը: Գեբինը ծածկված է խավրծիլի լայն տերևներով, և հեռվից անտառապատ սարի պատրանք է ստեղծվում: Այստեղից է սկիզբ առնում Տալվորիկ գետը,որը, խորխորատների միջից հոսելով դեպի հյուսիս-արևելք, միանում է Անդոկից սկիզբ առնող Սասուն գետին: Տալվորիկ գետի վրա է կառուցված Սատանայի կամուրջը , որի բարձրությունը հասնում է 600 մետրի:"
  },
  {
    "question": "Նորից Սասունի գլխին ամպեր են կուտակվում: Օգնություն ստանալու հույսով Անդրկովկաս է մեկնում Դժոխք Հրայրը, իսկ Մուրադը Սասուն է բարձրանում: Թուրքական 30 հազարանոց զորաբանակը օղակում է Սասունը:  Վերջինս  ուզում էր իսկական ճակատամարտ տալ լեռներին ապավինած մի բուռ գյուղացիների դեմ թնդանոթների օգնությամբ:  Թուրքական հրամանատարությունը այս անգամ իր գործողությունները քողարկում էր Մուրադին բռնելու պատրվակի տակ:\n" +
      "  Ո՞ր թվականին են  կատարվել իրադարձությունները : Ո՞վ էր Մուրադը: Ինչու՞ էր  անհանգստացած թուրքական հրամանատարությունը :",
    "answered": false,
    "type": "1answer",
    "answer": "Այս գործողությունները տեղի են ունեցել 1893 թ.: Մուրադը(Համբարձում Պոյաճյան) հնչակյան կուսակցության անդամ էր, մասնակցել էր Գում –Գափուի ցույցին:   Նրան ամենուրեք փնտրում էին: Նրա մեծադիր նկարը փակցված էր կայսրության ոստիկանության պետ Նազմի ընդունարանում: Մուրադի գլուխը գնահատված էր 2 հազար ոսկի: Նա 1893 թ. մեկնել էր Կովկաս` զինյալ խմբեր ու զենք բերելու: 1908 թ. ընտրվել է օսմանյան պառլամենտի դեպուտատ: 1915 թ. ` ապրիլին, նրան  ձերբակալում  են և օգոստոսի 24-ին կախաղան բարձրացնում:"
  },
  {
    "question": "Ճակատամարտը հայերի ապստամբության ժամանակ վերջին և ամենախոշոր մարտն  է եղել: Տեղի է ունեցել 775 թ.-ի ապրիլի  24-ին: Արաբական զորաբանակը գլխավորել է  Ամր իբն Իսրայելը:\n" +
      "  Ճակատամարտում  հերոսաբար ընկել են  երեք հազար  հայեր ,  այդ\n" +
      "թվում՝ սպարապետ  Սմբատ Բագրաատունին  , Մուշեղ Մամիկոնյանը, Վահան Գնունին և ուրիշներ:\n" +
      "\n" +
      "  Նշել , թե որ ճակատամարտն է  և  ի՞նչ ընթացք ու ավարտ է  ունեցել:",
    "answered": false,
    "type": "1answer",
    "answer": "Արձնիի ճակատամարտն  է:\n" +
      "  Հայկական հինգհազարանոց զորքը Մուշեղ  Մամիկոնյանի հրամանատարությամբ, թողնելով  Կարին քաղաքի պաշարումը,  Բասենի վրայով մտել է Բագրևանդ և, անցնելով Արածանին,  թշնամու հետ  ունեցել  է առաջին փոքրիկ  ընդհարումը: Ճակատամարտն սկսվել է արևածագին: Սկզբում  հայերը  փախուստի են մատնել  արաբներին, սակայն վեջիններս  օգնության հասած զորքով հակահարձակման  են անցել  և պարտության մատնել հայերի՝  գերզանցապես  ռամիկներից  բաղկացած  զորքը:"
  },
  {
    "question": "Երբ ինձ սպանված տեսնես, դիակս թաղի՛ր Խուստուփի ամենաբարձր կատարին, որտեղից երևա ինձ և՛ Կապանը, և՛ Գենվազը, և՛ Գողթանը, և՛ Գեղվաձորը: Իսկ մինչ այդ, հայացքդ մի՛ կտրիր Խուստուփից: Որքան հաճախ, որքան շատ նայես այդ սեգ ու սև ամպերով ծածկված սարին, այնքան շուտ կգա, կհասնի փրկությունդ:\n" +
      "  Ո՞վ է կոչի հեղինակը: Ու՞մ է ուղղված:",
    "answered": false,
    "type": "1answer",
    "answer": "Գարեգին Նժդեհն  է: Կոչն ուղղված է ղափանցիներին: Նա եկել էր  ղափանցիներին օգնելու  վերջիններիս  կանչով: Եվ  չէր   մնացել  մի բարձր սար, մի քար, որի վրա նա դրած չլիներ  իր հոգնած գլուխը: Մի օր հանգիստ չէր ունեցել: Ոչինչ չէր խնայել, ամեն ինչ զոհաբերել էր  ժողովրդի ազատության,  փրկության համար: Կոչը արվել է 1920 սեպտ. 17:"
  },
  {
    "question": "Նկարագրե՛ք Հայաստանի Խորհրդային Սոցիալիստական Հանրապետության պետական գերբը:",
    "answered": false,
    "type": "1answer",
    "answer": "Մեծ ու Փոքր Մասիսներից վեր` ծագող արեգակի ճառագայթների մեջ, մուրճ ու մանգաղ, ստորոտում` խաղողի թուփ` ողկույզներով ու տերևներով, աջից ու ձախից` ցորենի հասկեր և ավելի բարձր` ձիթենու ճյուղեր: Գերբի կրկնակի շրջագծերի արանքում գրված է.<<Պրոլետարներ բոլոր երկրների, միացեք>>:"
  },
  {
    "question": "<<Այսուհետ իմ բարձը Հայաստանի լեռներն են լինելու, իմ ամենաբաղձալի երազանքը` հայրենիքի  համար մեռնելը: Բարով արժանանամ հրեղեն գնդակի համբույրին>>:\n" +
      "Ո՞վ է այս խոսքերի հեղինակը:",
    "answered": false,
    "type": "1answer",
    "answer": "Գևորգ Չաուշը:\n" +
      "  Գևորգ Չաուշը ծնվել է Մկթենք գյուղում, որը գտնվում էր Սասունի Բսնանց գավառում: Նա ամբողջ Սասունում հայտնի իշխան Ղզրոյի եղբոր որդին էր:  Սասունում ընտանիքները բազմանդամ էին: Շատ ընտանիքների անդամների թիվը  40-ի էր հասնում:   Մեծ ընտանիքը նաև մեծ պատիվ էր: Իշխան Ղզրոյի ընտանիքը նույնպես բազմանդամ էր: 1870 թվականին այս ընտանիքում ծնվեց Գևորգը:  Դեռ փոքրուց նրան սովորեցնում էին ծանր աշխատանքի, նրա մեջ պատվաստում կամք, համառություն, քաջություն ու պատվախնդրություն:"
  },
  {
    "question": "<<Թանկագի՛ն երեխաներ, արյունախում թշնամին ոտնատակ է տալիս մեր սրբազան հողը: Արյան սարսափելի հետք է մնում այնտեղ, որտեղով անցել է նա:\n" +
      "  Գերմանացիներն ուզում են մեր մանուկներին զրկել մայրենի լեզվով խոսելու իրավունքից, ուզում են կոտորել սովետական մարդկանց, իսկ մնացածներին դարձնել ստրուկներ, բայց այդ չի լինի:\n" +
      "\n" +
      "  Ու՞մ նամակն է`  ուղղված մանկապարտեզի երեխաներին:",
    "answered": false,
    "type": "1answer",
    "answer": "Նամակը գրել է Նելսոն Ստեփանյանը:  Նա դպրոցական տարիներից հափշտակվել է ավիացիայով և հասել իր երազանքին` դարձել օդաչու` ընտրելով օդային նավատորմը: Նելսոն Ստեփանյանը ոչնչացրել է հակառակորդի 50 տանկ, 138 ավտոմեքենա, 40 երկաթուղային վագոն և հարյուրավոր զինվոր ու սպա:"
  },
  {
    "question": "<<Ես մեռնում եմ մեր նպատակից` հաղթանակից երկու քայլ հեռավորության վրա: Երջանկություն նրանց, ովքեր կապրեն մեզանից հետո և կճաշակեն ազատության և խաղաղության քաղցրությունը: Կյանքին հրաժեշտ եմ տալիս` նայելով արևին, հիասքանչ բնությանը: Երջանկությու՛ն ձեզ>>,- գրել է նա մահապատժից առաջ:\n" +
      "\n" +
      "Ո՞վ էր կյանքին հրաժեշտ տվողը:Ո՞րն էր նրա պայքարի նպատակը:",
    "answered": false,
    "type": "1answer",
    "answer": "Մեծ հայրենասեր Միսաք Մանուշյանն    է: \n" +
      " Երբ ֆաշիստները մտան Ֆրանսիա, և Ֆիլիպ Պետենի կառավարությունը խայտառակ կերպով կապիտուլյացիայի ենթարկվեց օկուպանտների առջև,  կազմակերպվեց դիմադրական շարժում , և Միսաք Մնուշյանը դարձավ շարժման ակտիվ մասնակիցներից մեկը: Նա և իր զինակիցները համակենտրոնացման ճամբարներից և գերությունից փախած խորհրդային սպաներին ու զինվորներին օգնում էին մտնելու պարտիզանական շարժման մեջ` պայքարելու համար ատելի թշնամու դեմ: Դավաճաններից մեկը թշնամուն մատնեց Մանուշյանին և նրա ընկերներին: Նրանց մահապատժի ենթարկեցին 1944 թ. փետրվարի 21-ին Մոն Վալերիեն ամրոցում:"
  },
  {
    "question": "« Բոլոր կամավորներին, իմ հրաշալի ընկերներին: Խնդրում եմ, թշնամուն թողած, իրական թշնամուն թողած՝  ձեր մեջ, ձեր կողքին, ձեր եղբայրների, ազգակիցների մեջ դավաճաններ մի՛ փնտրեք: Եվ եթե համաձայն եք ինձ հետ, վաղը չէ մյուս օրը, ընդամենը վաղը չէ մյուս օրը, Հայաստանի  յուրաքանչյուր քաղաքից, յուրաքանչյուր շրջանից եթե ընդամենը 10-15 տղա գա, մենք կունենանք 500 հոգանոց մահապարտների զորագունդ: Էդ զորագունդը պիտի կռվի ամենավտանգավոր տեղում, որտեղ ապրելու հավանականությունը 50-50 տոկոսի նկատմամբ է: Միասին գնալու ենք կռվելու ամենաբարդ հատվածում, ու մենք  հաղթելու ենք:  Եթե չհաղթեցինք, այն ժամանակ ես կհամարեմ, որ իսկապես իմ հրաժարականը տալու ժամանակը եկել է:\n" +
      "  Ո՞վ է կոչի հեղինակը: Ե՞րբ է արվել կոչը:",
    "answered": false,
    "type": "1answer",
    "answer": "Կոչի հեղինակը Վազգեն Սարգսյանն է: Կոչն արվել է Ղարաբաղա-ադրբեջանական պատերազմի ժամանակ:"
  },
  {
    "question": "Ի՞նչ է սահմանադրությունը:",
    "answered": false,
    "type": "1answer",
    "answer": "Սահմանադրությունը  պետության  հիմնական օրենքն է, որը սահմանում է հասարակական և պետական կառուցվածքը, պետական իշխանության և կառավարման մարմինների կազմակերպման  գործունեության սկզբունքները, ընտրական համակարգը, քաղաքացիների հիմնական իրավունքները, ազատություններն ու պարտականությունները:"
  },
  {
    "question": "Հին Հայաստանը ուներ 15 աշխարհներ,որոնցից մեկը Սյունիքն էր: Որտե՞ղ էր գտնվում այն և ո՞ր աշխարհներով էր սահմանագծված:",
    "answered": false,
    "type": "1answer",
    "answer": "Սյունիքը տարածվում էր Հին Հայաստանի հյուսիսարևելյան մասում: Նա սահմանագծված էր Այրարատ, Վասպուրական Արցախ, Ուտիք և Գուգարք  աշխարհներով:\n" +
      "  Սյունիք աշխարհը հնում հայտնի է եղել Սյունիք և Սիսական անունով: Նա իրենից ներկայացնում էր բնական  ամրոցներով հարուստ  մի երկիր, որը փակում էր Արևելքից եկող զանազան ժողովուրդների մուտքը դեպի Հին Հայաստանի միջնաշխարհը՝  Այրարատ: Սյունյաց նախարարությունը ռազմական տեսակետից հզոր էր: Նրա հեծյալների թիվը հասնում էր 19.400-ի:"
  },
  {
    "question": "Նա իր արամեերեն գրված արձանագրություններից մեկում  իրեն կոչում էր « Զարեհի որդի Երվանդունի » :\n" +
      "Ո՞վ էր այդ արքան: Նրա   մասին  օտարերկրացի  ո՞ր պատմիչներն են տեղեկություններ հայտնել:",
    "answered": false,
    "type": "1answer",
    "answer": "Իրեն Զարեհի որդի Երվանդունի կոչողը Արտաշես Ա Բարեպաշտն է:\n" +
      "  Նրա մասին տեղեկություններ են հայտնել Դիոդորոս Սիցիլիացին, Պոլիբիոսը, Պլուտարքոսը, Ստրաբոնը և ուրիշներ: Այս բոլոր հեղինակները միաբերան վկայում են , որ Արտաշեսը հմուտ և ուժեղ թագավոր է եղել, ու նրա օրոք Հայաստանը Հարավարևմտյան Ասիայի ամենահզոր տերությունն է եղել:"
  },
  {
    "question": "Նա հայոց գահ բարձրացավ , երբ 45 տարեկան էր: Կարողացավ պարթևների արքային զրկել <<արքայից արքա>> տիտղոսից և այն վերապահեց իրեն: Վերացրեց մի հզոր պետություն և նրա մայրաքաղաքում իրեն հռչակեց <<արքայից արքա>>:\n" +
      "Ո՞վ էր Հայաստանի այդ հզոր թագավորը:",
    "answered": false,
    "type": "1answer",
    "answer": "Տիգրան Մեծ Հայոց թագավորն էր: Նա, ով դաշնակցելով հմուտ քաղաքականագետ  զորավար և գիտուն մարդ Միհրդատ Եվպատորի հետ, որը 40 լեզու գիտեր, ամուսնացավ նրա դստեր հետ: Այնուհետև Տիգրան Մեծը  գրավեց 70 հովիտները, Սելևկյանների մայրաքաղաք Անտիոքում էլ մ.թ.ա.84 թ.-ին գահ բարձրացավ որպես արքայից արքա:"
  },
  {
    "question": "Պատմիչ Հովհան Մամիկոնյանը գրում է .\n" +
      "<< Երկու  կողմերը, հավաքելով իրենց սպանվածներին, գերեզման փորեցին ու թաղեցին: Ու նրանց վրա արձան կանգնեցրին՝գրելով այսպես .<<Այս առաջին պատերազմն էր, գլխավոր քրմապետ արձանն այստեղ է թաղված: Նրա հետ միասին  թաղված են 138 հոգի : Այս պատերազմը տեղի ունեցավ հանուն Գիսանե կուռքերի և Քրիստոսի>>:\n" +
      "Ի՞նչ իրադարձություն է ներկայացված: Որո՞նք էին երկու կողմերը , որ իրար դեմ էին դուրս եկել: Ինչու՞ էին ընդհարվել նրանք:",
    "answered": false,
    "type": "1answer",
    "answer": "Երբ քրիստոնեությունը Հայաստանում հաստատվեց իբրև պետական կրոն, Տրդատ Երրորդ Մեծը և Գրիգոր Լուսավորիչը արյունալի պատերազմներով կործանում էին մեհյանները և հիմնադրում քրիստոնեական եկեղեցիներ: Տարոն գավառի քրմական ուժերը  հայ քրմապետ Արձանի և նրա որդի Դեմետրի առաջնորդությամբ երկու անգամ ճակատամարտել են կենտրոնական իշխանության զորքերի դեմ` Աշտիշատի գլխավոր մեհյանը պահպանելու համար, և Արձանը սպանվել է, իսկ  Տրդատ Երրորդ Մեծը և Գրիգոր Լուսավորիչը արյունալի պատերազմով  կործանել են մեհյանը և տեղը հիմնել եկեղեցի: Ըստ Զենոբ Գլակի` գավառի քրմական ուժերի թիվը եղել է 6946 մարդ:"
  },
  {
    "question": "Թշվառականին ձերբակալեց Կոգովիտի եղեգնուտի ափին: Նա շամփուրը տաքացնելով  2 փաթ բոլորեց  պսակի  ձևով  և շիկացնելով ասաց. «Քեզ պսակում  եմ, Մերուժա՛ն, որովհետև և դու ձգտում էիր հայոց վրա թագավորելու և իմ՝ ասպետիս պարտքն է քեզ պսակել իմ հայրերի իշխանության կարգով»: Եվ կրակի նման շիկացած շամփուրը  դրեց Մեհրուժանի գլխին, և այսպես  չարը սատկեց:\n" +
      "  Ո՞ր պատմիչի աշխատությունից է քաղված հատվածը: Ո՞վ էր Մերուժանը: Ինչու՞ էր արժանացել նման վերաբերմունքի , ո՞վ էր նրան <<պսակողը>> հայոց թագավոր: Ո՞ր իրադարձությունից հետո էր տեղի ունեցել Մերուժանի «պսակադրությունը»:",
    "answered": false,
    "type": "1answer",
    "answer": "Հատվածը վերցված է Մ. Խորենացու <<Հայոց պատմությունից>>: 4-րդ դարի իրադարձություններ են պատկերված:  Վտանգ էր սպառնում Հայոց պետականությանը:  Այդ ճակատագրական պահին պարսիկների կողմն էին անցել հայրենադավ նախարարները (այդ թվում` Մերուժանը) և պարսիկների հետ միասին քարուքանդ էին անում Հայաստանը: Ավերածության էին ենթարկվել Այրարատը, Արտաշատը, Վաղարշապատը, Զարեհավանը, Զարիշատը, Վանը և Նախճավանը: Համառ պայքարից հետո Պապ թագավորին հաջողվում է մաքրել երկիրը սասանյան զորքերից:Վաղես կայսրը օգնում է Պապին գահ բարձրանալու Հայաստանում . դա առաջացնում Է Շապուհ Բ-ի զայրույթը : Նա պատերազմ է հայտարարում կայսրությանը և 371թ. շարժվում է Հայաստան: Ճակատամարտը տեղի է ունենում Հայաստանում`  Ձիրավի դաշտում : Հայերը և հռոմեացիները պարտության են մատնում թշնամուն: Մ. Խորենացին հաղորդում է .<<թշնամիների դիակներով ամբողջ դաշտը լցրին և մնացածներին փախցնելով հալածեցին>>: Թշնամու զորաբանակի կազմում յուրայինների դեմ կռվում էր նաև Մերուժանը , որին Սմբատ Բագրատունին պատժում է որպես դավաճանի:"
  },
  {
    "question": "«Դու՛, Արշա՛կ, հրամա՛ն տուր, որ այն տեղը՝ Արշակավանը, քանդեն, քո ժողոված մարդկանց  ցրի՛ր  , որ գնան, տարածվեն, սփռվեն իրենց տեղերը, գնան և ամենքին վերադարձնեն , ինչ որ պարտք են, որպեսզի բարկության ու չարիքների  խորքերը չընկնեն, ու չկորչես: Իսկ քո գործած մեղքերի համար ամբողջ երկրին  հրաման կտանք, որ քո փոխարեն պաս պահեն, աղոթք անեն, և մենք էլ քեզ հետ միասին ապաշխարության մեջ մտնենք, գուցե Տերը ների քո գործած անչափ մեղքերը»:\n" +
      "Որտեղի՞ց է վերցված հատվածը:\n" +
      "  Ինչու՞ էր Ներսես Մեծը անհրաժեշտ համարում Արշակավանը քանդելը:\n" +
      "  Ինչու՞մն էր մեղադրվում Արշակը:",
    "answered": false,
    "type": "1answer",
    "answer": "Հատվածը Փ.Բուզանդի<<Հայոց պատմություն>>-ից է:\n" +
      "  Արշակավան քաղաքը կառուցել է Արշակ Բ-ն 350-ական թթ. Վերջերին, Երբ Հայաստանի քաղաքական դրությունը չափազանց լարված էր : Արշակ Բ-ն կենտրոնացած ուժեղ պետություն ստեղծելու միջոցներից մեկը  համարեց իր անունը կրող քաղաքի կառուցումը, որը նախարարների դեմ մղվող պայքարում\n" +
      "պետք է դառնար նրա հենարանը: Արշակավանը կառուցվեց Թավրիզ –Դարոյնք-Կարին  ճանապարհի վրա` ընդարձակ գետահովտում: Արքայական հատուկ հրովարտակով այնտեղ բնակվելու իրավունք տրվում էր նաև տերերի մոտից փախած <<ծառաներին>> , հարստահարվող պարտապաններին և բոլոր նրանց, ովքեր ենթակա էին հալածանքի: Ըստ հայ պատմագիրների` կարճ ժամանակում Արշակավանը դարձել է խոշոր ու բազմամարդ քաղաք` գրավելով ընդարձակ տարածություն:  Նախարարներին հանգիստ չէր տալիս Արշակավանի գոյությունը: Նրանք առիթ էին փնտրում  իրենց վրեժը լուծելու, իսկ քաղաքական նոր իրադրությունը գործողության ազատություն էր ընձեռում նրանց:Ապահովելով թագավորից դժգոհ նախարարների  և կաթողիկոս Ներսես  Ա-ի լռելյայն օժանդակությունը` նախարարական զորքերը Ներսեհ Կամսարականի գլխավորությամբ հարձակվում են Արշակավանի վրա , հիմնահատակ ավերում, իսկ բնակչությանը սրի քաշում:\n" +
      "  Մ.Խորենացին նշում է, որ Արշակը <<կոտորեց նախարարներից շատերին, մանավանդ բնաջինջ արեց Կամսարականների ցեղը` աչք տնկելով Արտագերս ամրոցին և Երվանդաշատ քաղաքին, որ նրանց ոստանն էր>>:"
  },
  {
    "question": "Հին և միջնադարյան Հայաստանի տասներորդ նահանգը`  Արցախը ,  տարբեր դարաշրջաններում ի՞նչ անուններով է կոչվել:",
    "answered": false,
    "type": "1answer",
    "answer": "Տարբեր դարաշրջաններում Հին և Միջնադարյան Հայաստանի այս նահանգը կոչվել է նաև Փոքր Սյունիք, Խաչեն, Ղարաբաղ;\n" +
      "Արցախ անունը Ֆիզիկաաշխարհագրական առումով ավելի լայն հասկացություն է, քան Լեռնային Ղարաբաղը: Արցախն ավելի ընդարձակ էր և զբաղեցնում էր Փոքր Կովկասի հարավարևելյան ամբողջ տարածքը` իր մեջ ընդգրկելով Մուխանք-Մուղանի դաշտավայրի զգալի մասը:  Նրա սահմաններն արևմուտքից  ձգվում էին Սևանա լճի արևելյան ափով, հարավ-արևմուտքից` Աղվանո (Հագարի) գետով, հարավից` Երասխի (Արաքսի )  հովտով մինչև Մուխանքի տափաստանը, իսկ հյուսիս-արևելքից սահմանակից էր Ուտիք հայկական նահանգին:  Արցախը Հայկական միասնական պետության կազմի մեջ մնաց մինչև 5-րդ դարի սկիզբը, այսինքն` մինչև Արշակունյաց հայկական թագավորության վերացումը:"
  },
  {
    "question": "Ինչպիսի՞ բնութագիր ունի Արցախը ըստ Ստրաբոնի  <<Աշխարհագրություն>>  աշխատության:",
    "answered": false,
    "type": "1answer",
    "answer": "Ստրաբոնը իր աշխատության մեջ տեղեկություններ է հաղորդում Մեծ Հայքի կազմի մեջ մտնող Արցախի(Օրխիստենե)  մասին և միաժամանակ վկայում , որ այն բարեբեր երկիր է և պատերազմների ժամանակ հանում է մեծաքանակ հեծելազոր: Ի  դեպ, հայկական հին աղբյուրները միաձայն փաստում են, որ մ.թ.ա. 4-րդ դարի Արցախը , ինչպես նաև Ուտիքը շարունակում էին մնալ հայ Երվանդունիների թագավորության կազմում: Այս իրողություններն արտացոլվել են Հայոց արքունիքում նախարարների պատվաստիճանն ու զբաղեցրած տեղերը վավերացնող պետական փաստաթղթում` <<Գահանամակում>>  և նախարարների ուժը ցույց տվող <<Զորանամակում>>:"
  },
  {
    "question": "Արցախ երկրամասի Որվան(Ազոխ),  Ծծախաչ(Թաղլար),  Հոնուտ(Քարին տակ),  Շիկաքար(Քարագլուխ),  Խորաձոր(Թարթառի հովիտ), Զորի(Զինգյանակապի հովիտ) քարանձավներից հայտնաբերված իրեղեն նյութերը ինչի՞ մասին  են վկայում:",
    "answered": false,
    "type": "1answer",
    "answer": "Դրանք հաստատում են, որ Անդրկովկասի նման Արցախն էլ է մտնում այն բնակահատվածի մեջ, ուր տեղի է ունեցել մարդու ձևավորման պրոցեսը:  Խոջալու-Նորագյուղի, Ստեփանակերտի, Կրկժանի, Ամարասի , Բերդաշենի, Առաջաձորի , Մատաղիսի , Իշխանագետի , Ճկահարթի  պղնձաքարի, բրոնզի և վաղ երկաթի դարաշրջանների բնակատեղիների և  դամբարանների պեղումները գիտնականներին բերել են այն եզրակացության, որ այդ հնավայրերն աղերս ունեն Հայկական բարձրավանդակի համաժամանակյա հուշարձանների հետ:"
  },
  {
    "question": "Ինչպիսի՞ մշակութային կենտրոններ են եղել Արցախում:",
    "answered": false,
    "type": "1answer",
    "answer": "Ամարասը` Մյուս Հաբանդ գավառում,   Ծիծեռնավանքը  , Վարազագոմավանքը`  Բերդաձորում, Կատարովանքը, Գտիչը` Դիզակում, Հոռեկա կամ Գլխովանքը, Ջրվշտիկը կամ Սբ. Եղիշե առաքյալի վանքը` Մեծկողմանք գավառում, Սբ. Հակոբավանքը և Գանձասարը` Մեծառանից գավառում, Վաչագանի  տաճարը` Պիանքում,  Դադիվանքը և այլք:"
  },
  {
    "question": "Որո՞նք են 12-13-րդ դարում ձևավորված հայկական ճարտարապետության արցախյան դպրոցի գլուխգործոցները:",
    "answered": false,
    "type": "1answer",
    "answer": "Դրանք հիմնականում կենտրոնացված են վանքային համալիրներում: Դրանցից Մակարավանքի Սբ. Աստվածածին եկեղեցին(1198թ.) , Նոր Վարագավանքի Սբ.Նշան տաճարը(1190-1200թթ.),  Գանձասարի Հովհաննես Մկրտիչ եկեղեցին(1216-1238թթ.),  Խորանաշատի կաթողիկեն(1211-1222թթ.), Գոշավանքի եկեղեցին(1191-1241թթ.), Դադիվանք խոշոր համալիրի կաթողիկեն(1214թ.), Գոշավանքի գլխավոր եկեղեցին(1241-1248թթ.), Բռի եղցի համալիրի որմնափակ խաչքարերը(1230-1270թթ.), Խադավանքի կաթողիկեն(1204թ.)  և այլք:"
  },
  {
    "question": "Ե՞րբ և ինչպե՞ս է ստեղծվել Լեռնային Ղարբաղի Ինքնավար մարզը:",
    "answered": false,
    "type": "1answer",
    "answer": "Ստեղծվել է 1923 թ., սակայն այն իր մեջ չէր ներառում հայկական բոլոր գավառները, որոնք դարեր շարունակ կազմում էին մի միասնական ազգային-տարածքային միավոր: Նրանից մեխանիկորեն պոկվել էր գրեթե կեսը` ամբողջ Հյուսիսային Արցախը ` այժմյան Շահումյանի, Խանլարի, Դաշքեսանի և Շամխորի շրջանները` իրենց 107 հայկական գյուղերով հանդերձ:"
  },
  {
    "question": "Ի՞նչ գիտեք արցախյան բնակավայրերի հայաթափման վերաբերյալ:",
    "answered": false,
    "type": "1answer",
    "answer": "Ադրբեջանից վտարված ավելի քան 365 հազար հայ խաղաղ բնակչության բռնագաղթեցումն սկսվել է Սումգայիթի ջարդերով: Ադրբեջանից տեղահանված հայերն Ադրբեջանում թողել են 103.7 հազար բնակարան, 132 բնակավայր:"
  },
  {
    "question": "Խորհրդային Միության մարշալ 1955 թվականից,   Խորհրդային Միության կրկնակի հերոս,  մահացել է 1982թ.- ի  սեպտեմբերի 21-ին:\n" +
      "Պլանավորել և կազմակերպել է Կիևի պաշտպանությունը, 1943թ.-ին՝ որպես Մերձբալթյան զորքերի հրամանատար, մասնակցել է Քյոնիգսբերգի ազատագրմանը:\n" +
      "  Ու՞մ  մասին  է  խոսքը:",
    "answered": false,
    "type": "1answer",
    "answer": "Մարշալ  Հովհաննես  Բաղրամյանի: Նա ծնվել է 1897թ.-ին Ելիզավետպոլում: Նախնական  կրթությունը ստացել է երկաթուղային երկդասյա դպրոցում, ապա Թիֆլիսի երկաթուղային տեխնիկական ուսումնարանում:  Զինվորական ծառայությունն սկսել  է 1915 թ.-ին որպես կամավոր – շարքային զինվոր Կովկասյան  ռազմաճակատում: 1917-ին ավարտել է պրապորշչիկների դպրոցը, 1918-ին կռվել է թուրքերի դեմ Կարաուրգանի, Սարիղամիշի, Կարսի, Սարդարապատի ճակատամարտերում: 1923-1931թթ. եղել է Ալեքսանդրապոլի հեծելազորի հրամանատար: Ավարտել է Ֆրունզեի անվան ռազմական ակադեմիան, 1940-ից եղել է Կիևի ռազմական օկրուգի պետի տեղակալ:Մասնակցել է Հայրենական պատերազմին Հարավարևմտյան ռազմաճակատում,  Կիևի  պաշտպանությանը, Դոնի Ռոստովի ազատագրմանը, Կուրսկի ճակատամարտին, ազատագրել է Օրյոլը, Բոլխովը, Բրյանսկը: 1943թ.-ից ՝ որպես Մերձբալթյան զորքերի հրամանատար, մասնակցել է Քյոնիգսբերգի ազատագրմանը: Խորհրդային Միության մարշալ է, Խորհրդային Միության կրկնակի հերոս: Մահացել է 1982թ.-ի սեպտեմբերի 21-ին:"
  },
  {
    "question": "Նա 1945 թ. մարտի 6-ին Խորհրդային  Սոցիալիստական Հանրապետությունների Միության Գերագույն խորհրդի  հրամանագրով ստացել է Խորհրդային Միության կրկնակի  հերոսի կոչում: 1944թ. ապրիլին նրա գունդը ստացել է «ֆեոդոսյան» անունը և պարգևատրվել <<Կարմիր դրոշի >>   3-րդ աստիճանի  շքանշանով:\n" +
      "  Ու՞մ մասին է խոսքը:",
    "answered": false,
    "type": "1answer",
    "answer": "Նելսոն Ստեփանյանի: Նա 1944թ.-ին մասնակցել է Ղրիմում ծավալված մարտերին, նաև Մերձբալթյան հանրապետությունների ազատագրմանը: Մի խումբ  օդաչուների հետ կատարել  վերջին թռիչքը դեպի Լիբավայի ծովախորշը: Հերոսի մահով զոհվել թշնամու 80 ինքնաթիռների դեմ մղվող անհավասար գոտեմարտում:"
  },
  {
    "question": "1945թ.-ի փետրվարի 4-11-ը Ղրիմում ՝ Յալթայում , հանդիպեցին  ԱՄՆ-Ի նախագահ Ռուզվելտը , ԽՍՀՄ-Ի ժողովրդական կոմիսարների խորհրդի նախագահ  Ստալինը և Անգլիայի վարչապետ Չերչիլը:\n" +
      "  Ինչու՞ կայացավ  այդ  հանդիպումը և ի՞նչ հարցերի շուրջ եղան քննարկումներ:",
    "answered": false,
    "type": "1answer",
    "answer": "1945թ.-ի սկզբներին , երբ Գերմանիայի նկատմամբ  հաղթանակը կասկածներ  չէր հարուցում, դաշնակիցները որոշեցին  նորից  հանդիպել , որպեսզի  վերջնականորեն որոշեն  հետպատերազմյան աշխարհի  ճակատագիրը: Խորհրդաժողովում  ստորագրվեց  գաղտնի համաձայնագիր , որը  նախատեսում  էր, որ  Խորհրդային  Միությունը  Գերմանիայի պարտությունից հետո պատերազմ  կհայտարարի Ճապոնիային: Դրա դիմաց  Ստալինը պահանջեց վերադարձնել Հարավային Սախախլինը, Կուրիլյան Կղզիները: Դաշնակից երեք տերությունների ղեկավարները որոշում ընդունեցին 1945թ. ապրիլի 25-ին Սան-Ֆրանցիսկոյում գումարել ՄԱԿ-ի հիմնադիր կոնֆերանս:"
  },
  {
    "question": "1902թ.-ին  Մեծ Թաղլարում ծնված այդ  հայորդին  որպես ավիացիայի գծով  խորհրդական ՝ 1945թ.-ին  մասնակցել է Յալթայի  կոնֆերանսին:\n" +
      "  Ու՞մ մասին է խոսքը:",
    "answered": false,
    "type": "1answer",
    "answer": "Ավիացիայի մարշալ Արմենակ Խամփերյանցի: Նա Հայրենական  պատերազմի  ժամանակ  եղել է  Արևմտյան  ռազմաճակատի  առաջին օդային  բանակի  շտաբի պետ, 1943 թ.-ից՝ հրամանատար, 1944թ.-ից՝ կարմիր բանակի ռազմաօդային ուժերի հրամանատարի տեղակալ և շտաբի պետ: Որպես ավիացիայի գծով  տեղակալ՝  1945 թ.-ի  փետրվարին  մասւնակցել  է Յալթայի կոնֆերանսին:\n" +
      "  Ճապոնիայի դեմ մղած պատերազմում  Խուդյակովը 12-րդ օդային  բանակի հրամանատարն էր, որի հաղթական ավարտից հետո  նշանակվեց  Հեռավոր-արևելյան զինվորական  օկրուգի ռազմաօդային ուժերի պետ:\n" +
      "  Խուդյակովը մահացել է 1950թ.-ին, ապրիլի 11-ին:"
  },
  {
    "question": "Ո՞վ էրՂափանի  Ծավ  գյուղում  ծնված  երիտասարդը , որն  89-րդ  հայկական  դիվիզիայի կազմում  մեկնել  էր Հյուսիսային Կովկասի  ռազմաճակատ , այնտեղ  ձեռք է  բերել  հետախուզություն  կատարելու  փորձ , մասնակցել  Մալգոբեկ  քաղաքի  և Ազովի  հարավային  ափերի  ազատագրմանը:",
    "answered": false,
    "type": "1answer",
    "answer": "Հունան  Ավետիսյանն է: Նա  աչքի էր  ընկնում  իր համառությամբ և  ռազմական  գործողությունները վարելու տոկունությամբ :\n" +
      "  1943թ.-ի սեպտեմբերին, երբ  մարտեր էին  մղվում Թամանյան  թերակղզու  ազատագրման  համար,  նրան  հանձնարարվում  է գրոհային  խմբով ճեղքել  Նովոռոսիյսկ  քաղաքի  մատույցները  փակող   Դոլգայա  լեռան  ֆաշիստական  հենակետային  մի  քանի  ամրություններ: Թշնամին անընդհատ  կրակում էր:  Պետք  էր լռեցնել  թշնամու  գնդացրային  կրակը: Դեռ  հրակնատին  չհասած՝  նա վիրավորվում  է, բայց  վերքը  նրան  չի  ընկճում: Հավաքելով  վերջին  ուժերը ՝ նա  առաջ  է  նետվում և փակում  թշնամու  գնդացրային  հրակնատը՝    իր վրա  վերցնելով մահաբեր գնդակները:"
  },
  {
    "question": "Ընդհատվեց մի գաղթօջախի կյանքը , որի պատմությունը գալիս է դարերի խորքից, որը աշխարհին տվել Է Հովհաննես Այվազովսկի: Ո՞րն էր  այդ գաղթօջախը, որը գտնվում էր այն թերակղզու վրա, որի  հարավ- արևելյան հատվածը   15-16-րդ դարերի իտալական աղբյուներում  <<Ծովային Հայաստան >> էր կոչվում :",
    "answered": false,
    "type": "1answer",
    "answer": "Այդ գաղթօջախը  Ղրիմի գաղթօջախն էր, որի բնակիչները 1941-1945 թվականներին. տեղահանվեցին և աքսորվեցին Սիբիր: Տեղահանված 300 հազար մարդուց շուրջ 200 հազարը մահացավ ճանապարհներին  և աքսորավայրերում:"
  },
  {
    "question": "Լադոգա լճի վրայով Լենինգրադը Մեծ Երկրի հետ կապող սառցուղին ինչպե՞ս էին կոչում լենինգրադցիները, և այն ի՞նչ դեր խաղաց  պաշարված լենինգրադցիների կյանքում:",
    "answered": false,
    "type": "1answer",
    "answer": "Այն լենինգրադցիները կոչեցին <<Կյանքի ուղի>>:  Սառցուղին գործեց 5 ամիս և հնարավորություն տվեց եռակի ավելացնել լենինգրադցիներին տրվող հացի նորման :\n" +
      "  Օր ու գիշեր հակառակորդի ռմբակոծության տակ նրանով քաղաք էին հասցնում անհրաժեշտ բեռներ: Պաշարված Լենինգրադից դուրս բերվեց մոտ 550 հազար մարդ և ռազմական արդյունաբերական ձեռնարկությունների համար սարքավորումներ:"
  },
  {
    "question": "Շրջափակումը քաղաքի պաշտպաններին դրեց չափազանց ծանր դրության մեջ : Ամենածանր փորձությունը սովն էր: Սեպտեմբեր-նոյեմբեր ամիսներին բնակչությանը տրվող հացի նորման պակասեց 5 անգամ: Խիստ կրճատվեց զորքի սնունդը: 1941 թվականի  նոյեմբեր- դեկտեմբեր ամիսների բանվորների հացի օրվա նորման կազմում էր 250 գրամ:\n" +
      "  Ո՞ր քաղաքի մասին էր խոսքը:\n" +
      "  Որքա՞ն տևեց այդ շրջափակումը:",
    "answered": false,
    "type": "1answer",
    "answer": "1941 թվ սեպտեմբերի 8-ին զավթելով Շլիսսելբուրգը` թշնամին Լենինգրադը շրջափակեց ցամաքից: Սկսվեց քաղաքի իննհարյուրօրյա շրջափակումը:\n" +
      "\tԱմբողջ շրջափակումն ապրած գրող Նիկոլայ Տիխոնովը այսպես է նկարագրում Լենինգրադը.  <<Մեքենաներն ու տրամվայները  սառցակալվել և փողոցում կանգնել էին՝ ինչպես արձաններ ծածկված  սպիտակ կեղևով. քաղաքը հրդեհների բոցերի մեջ էր: Վրա հասան այնպիսի օրեր, որոնք չէր կարող հորինել ամենավառ երևակայությունն ունեցող գրողն անգամ: Դանթեական դժոխքի պատկերները մթագնեցին , որովհետև դրանք միայն պատկերներ էին, իսկ այստեղ կյանքն իր վրա էր վերցրել զարմացած աչքերին արտասովոր իրականությունը ցույց տալու հոսքը>>:"
  },
  {
    "question": "Ինչու՞ Խորհրդային Միությանը հիտլերյան Գերմանիայի պարտադրած պատերազմը պատմության մեջ մտավ որպես Հայրենական Մեծ պատերազմ:",
    "answered": false,
    "type": "1answer",
    "answer": "Այդ պատերազմը կոչվեց Հայրենական Մեծ պատերազմ, քանի որ խորհրդային ժողովուրդը արդարացի պայքար էր մղում՝ պաշտպանելով իր սոցիալիստական հայրենիքը : Դա իսկական համաժողովրդական պատերազմ էր , որին մասնակցում էին խորհրդային բազմազգ պետության բոլոր ժողովուրդները:\n" +
      "\tՖաշիզմի դեմ պայքարում վճռվում էր  ոչ միայն խորհրդային երկրի , այլև ողջ աշխարհի բախտը; Խորհրդային  ժողովուրդը բարբարոսներից պաշտպանեց համաշխարհային քաղաքակրթությունը:"
  },
  {
    "question": "Հայրենական մեծ պատերազմի ժամանակ  հայ ժողովուրդը ինչպիսի՞ մասնակցություն ունեցավ ռազմական գործողություններին: Որո՞նք էին կազմավորված ազգային դիվիզիաները:",
    "answered": false,
    "type": "1answer",
    "answer": "Խորհրդային միության տարած հաղթանակի մեջ որոշակի ներդրում ունեցավ նաև հայ ժողովուրդը : Ճիշտ է, գերմանական զորքերը չհասան Հայաստան, սակայն վտանգն ընդհանուր էր և սպառնում էր նաև Հայաստանին: Հայաստանի ժողովրդական տնտեսությունը վերակառուցվեց պատերազմի պահանջներին համապատասխան: Հայերի միջոցներով կառուցվեցին ավիաէսկադրիլյաներ, տանկային շարասյուներ: Հայոց եկեղեցին ևս իր ներդրումն ունեցավ հաղթանակի գործում: Նրա հանգանակած միջոցով իրականացվեց <<Սասունցի Դավիթ>> տանկային շարասյան կառուցումը: Հայաստանը միայն որպես նվեր ռազմաճակատ առաքեց 45 վագոն պարենամթերք: \n" +
      "1942 թվականի հունվարին Կերչում Սիմոն Զաքյանի հրամանատարությամբ ստեղծվեց հայական  390-րդ դիվիզիան :  Պատերազմին մասնակցեցին 76-րդ, 261-րդ , 390-րդ ,408-րդ  և 409-րդ դիվիզիաները: "
  },
  {
    "question": "Ի՞նչ սահմաններ ուներ 1923 թ. ստեղծված Լեռնային Ղարաբաղի Ինքնավար Մարզը:",
    "answered": false,
    "type": "1answer",
    "answer": "Այն չէր ներառում հայկական բոլոր գավառները, որոնք դարեր շարունակ կազմում էին մի միասնական ազգային-տարածքային միավոր: Նորաստեղծ մարզի վարչատարածքային վերաձևումները կատարելիս նրանից մեխանիկորեն պոկեցին գրեթե կեսը` ամբողջ Հյուսիսային Արցախը` այժմյան Շահումյանի, Խանլարի, Դաշքեսանի և Շամխորի շրջանները ` իրենց 107 հայկական գյուղերով հանդերձ:  Փաստորեն, անտեսվեց հայ բնակչության ինքնորոշման իրավունքը իր իսկ պատմական տարածքի վրա: Մասնատվեց նաև այն մշակույթը, որը ստեղծվել էր հայ ժողովրդի մտքի ու բազկի ուժով: Այս անդամահատումը կատարվեց անհավատալի թեթևությամբ, քաղաքական խարդախ խաղով: Դեռ ավելին, որպեսզի հայկական մարզը Հայկական ԽՍՀ-ի հետ կապ չունենա, հայկական մի շարք բնակավայրեր , որ իրենց դիրքով ու նշանակությամբ կարևոր կապող օղակ էին Սյունիքի ու Արցախի միջև, դարձյալ մոգական ուժով պոկեցին ինքնավար մարզից և բռնակցեցին ադրբեջանական շրջաններին"
  },
  {
    "question": "<<Թուրքիայի կորստաբեր պահանջները և վիրավորական տմարդությունը վերջապես ազդեց հայ ժողովրդի հոգու վրա:  Նա ոտքի է կանգնել և հազարավոր զավակների մղում է դեպի ռազմի դաշտ:  Հայ գյուղացիները  տալիս են իրենց ամբողջ ունեցածը` հրացան, փամփուշտ, հաց: Ի զե'ն , մեր քաջե'ր, դեպի ռազմադաշտ>>:\n" +
      "Որտեղի՞ց է քաղված հատվածը: Ու՞մ էր այն ուղղված:",
    "answered": false,
    "type": "1answer",
    "answer": "Վերցված է Երևանի Հայոց Ազգային խորհրդի 1918թ.-ի  մայիսի 25-ին հայ ժողովրդին ուղղված <<Դեպի ռազմադաշտ>> կոչից: \n" +
      "Հայոց Ազգային խորհրդը  ոգեշնչում էր ժողովրդին և կարծում էր՝ վերջինս  պարտավոր է զորավիգ լինել հայ զինվորներին, որոնք Սարդարապատի շրջանում ետ էին մղում թուրք ասկյարներին, թուրք ու քուրդ խուժանին:  Էջմիածնի գավառից և Դիլիջանի գյուղերից շատ քաջեր օգնության էին գնում նրանց: Խիզախությունը վերածնվում էր:"
  },
  {
    "question": "Հայկական դիցարանում  նա  համարվել է պտղաբերության , արգասավորության, ծննդաբերության, առավել վաղ շրջանում` ռազմի աստվածություն: Արամազդի դուստրն է: Հնում նրան անվանել են <<սնուցող մայր>>, <<ոսկեմայր>>, <<ոսկեհատ>>,  <<ոսկեծղի>>:\n" +
      "Ո՞ր աստվածուհին է: Ու՞մ հետ է նույնացվել հելլենիստական ժամանակաշրջանում:",
    "answered": false,
    "type": "1answer",
    "answer": "Անահիտն է : Հելլենիստական ժամանակաշրջանում նույնացվում է հունական Արտեմիսի և հռոմեական Դիանայի հետ: Անահիտը միաժամանակ համարվում էր լուսնի աստվածություն: Մ.թ.ա. 1-ին դարում Անահիտը դառնում է Հայաստանի գլխավոր աստվածուհին, Արտաշատ մայրաքաղաքի հովանավորը: Նրա գլխավոր տաճարը գտնվել է Եկեղյաց գավառի Երիզա ավանում: Նավասարդի սկզբին հայերը մեծ շուքով նշում էին Անահիտի գլխավոր տոնը` կապված բերքահավաքի հետ: Անահիտին զոհաբերում էին առաջին բերքը, նվիրաբերում էին սպիտակաթույր սրբազան ցուլեր: Անահիտի անունն էր կրում հայկական հեթանոսական տոմարի ամիսների 19-րդ օրը:"
  },
]

export default QUESTIONS;