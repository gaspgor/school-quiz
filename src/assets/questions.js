import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg'
import image4 from './images/image4.jpg'
import image5 from './images/image5.jpg'
import image6 from './images/image6.jpg'
import image7 from './images/image7.jpg'
import image8 from './images/image8.jpg'
import image9 from './images/image9.jpg'
import image10 from './images/image10.jpg'
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
    "question": "Кто изображён на этом портрете?",
    "answered": false,
    "type": "image",
    "image": image1,
    "answer": "А.С.Пушкин"
  },
  {
    "question": "Угадайте автора и название картины!",
    "answered": false,
    "type": "image",
    "image": image2,
    "answer": "Айвазовский И.К. Девятый вал"
  },
  {
    "question": "Угадайте автора и название картины!",
    "answered": false,
    "type": "image",
    "image": image3,
    "answer": "В.А.Серов Девушка, освещённая солнцем"
  },
  {
    "question": "Угадайте автора и название картины!",
    "answered": false,
    "type": "image",
    "image": image4,
    "answer": "Винсент ван Гог Подсолнухи"
  },
  {
    "question": "Кто изображён на этом портрете?",
    "answered": false,
    "type": "image",
    "image": image5,
    "answer": "Винсент ван Гог"
  },
  {
    "question": "Кто изображён на этом портрете?",
    "answered": false,
    "type": "image",
    "image": image6,
    "answer": "И.К.Айвазовский"
  },
  {
    "question": "Угадайте автора и название картины!",
    "answered": false,
    "type": "image",
    "image": image7,
    "answer": "Леонардо да Винчи Тайная вечеря"
  },
  {
    "question": "Угадайте автора и название картины!",
    "answered": false,
    "type": "image",
    "image": image8,
    "answer": "М.Сарьян Армения"
  },
  {
    "question": "Кто изображён на этом портрете?",
    "answered": false,
    "type": "image",
    "image": image9,
    "answer": "М.Сарьян"
  },
  {
    "question": "Кто изображён на этом портрете?",
    "answered": false,
    "type": "image",
    "image": image10,
    "answer": "Х.А.Абовян"
  },
  {
    "question": "Угадай мелодию!",
    "answered": false,
    "type": "audio",
    "audio": audio1,
    "answer": "А. Тигранян Ануш"
  },
  {
    "question": "Угадай мелодию!",
    "answered": false,
    "type": "audio",
    "audio": audio2,
    "answer": "Арам Хачатурян Танец с саблями"
  },
  {
    "question": "Угадай мелодию!",
    "answered": false,
    "type": "audio",
    "audio": audio3,
    "answer": "Арно Бабаджанян Ноктюрн"
  },
  {
    "question": "Угадай мелодию!",
    "answered": false,
    "type": "audio",
    "audio": audio4,
    "answer": "Арно Бабаджанян Элегия"
  },
  {
    "question": "Угадай мелодию!",
    "answered": false,
    "type": "audio",
    "audio": audio5,
    "answer": "Комитас Журавль"
  },
  {
    "question": "Угадай мелодию!",
    "answered": false,
    "type": "audio",
    "audio": audio6,
    "answer": "Л.В.Бетховен Лунная соната"
  },
  {
    "question": "Угадай мелодию!",
    "answered": false,
    "type": "audio",
    "audio": audio7,
    "answer": "Моцарт Реквием"
  },
  {
    "question": "Угадай мелодию!",
    "answered": false,
    "type": "audio",
    "audio": audio8,
    "answer": "П.И.Чайковский Лебединое озеро"
  },
  {
    "question": "Угадай мелодию!",
    "answered": false,
    "type": "audio",
    "audio": audio9,
    "answer": "П.И.Чайковский Щелкунчик"
  },
  {
    "question": "Угадай мелодию!",
    "answered": false,
    "type": "audio",
    "audio": audio10,
    "answer": "Шарль Азнавур She"
  },
  {
    "question": "Как называется профессия, где изучают погоду?",
    "className": "nature",
    "filledClassName": "filledNature",
    "answered": false,
    "type": "1answer",
    "answer": `Метеоролог`
  },
  {
    "question": "Какая птица не летает?",
    "className": "nature",
    "filledClassName": "filledNature",
    "answered": false,
    "type": "1answer",
    "answer": `Страус`
  },
  {
    "question": "В какой стране водится панда?",
    "className": "nature",
    "filledClassName": "filledNature",
    "answered": false,
    "type": "1answer",
    "answer": `Китай`
  },
  {
    "question": "У какой птицы мешок под клювом?",
    "className": "nature",
    "filledClassName": "filledNature",
    "answered": false,
    "type": "1answer",
    "answer": `Пеликан`
  },
  {
    "question": "В какое море впадает Волга?",
    "className": "nature",
    "filledClassName": "filledNature",
    "answered": false,
    "type": "1answer",
    "answer": ` Каспийское море`
  },
  {
    "question": "Какой океан омывает сразу 4 материка?",
    "className": "nature",
    "filledClassName": "filledNature",
    "answered": false,
    "type": "1answer",
    "answer": `Индийский океан`
  },
  {
    "question": "Назовите зимние месяцы в Австралии.",
    "className": "nature",
    "filledClassName": "filledNature",
    "answered": false,
    "type": "1answer",
    "answer": `Июнь, июль, август`
  },
  {
    "question": "Какое природное явление может ударить в дерево и свалить его?",
    "className": "nature",
    "filledClassName": "filledNature",
    "answered": false,
    "type": "1answer",
    "answer": `Молния`
  },
  {
    "question": "Чем покрыты и Земля, и Венера?",
    "className": "nature",
    "filledClassName": "filledNature",
    "answered": false,
    "type": "1answer",
    "answer": `Облаками`
  },
  {
    "question": "Какой учёный занимался вопросами эволюции и жизни человека?",
    "className": "nature",
    "filledClassName": "filledNature",
    "answered": false,
    "type": "1answer",
    "answer": `Дарвин`
  },
  {
    "question": "Что может одновременно стоять и ходить, висеть и стоять, ходить и лежать? ",
    "className": "logic",
    "filledClassName": "filledLogic",
    "answered": false,
    "type": "1answer",
    "answer": `Часы`
  },
  {
    "question": "Вы заходите в тёмную комнату. В ней есть свеча, керосиновая лампа и газовая плита. Что вы зажжёте в первую очередь? ",
    "className": "logic",
    "filledClassName": "filledLogic",
    "answered": false,
    "type": "1answer",
    "answer": `Свет`
  },
  {
    "question": "На ферме было два коня, 1 кролик, 1 щенок, 1 кошка, 1 свинья , 1 поросёнок, 1 корова, 1 телёнок, 1 индюк и 1 гусь. Пришёл хозяин с собакой. Сколько на ферме стало ног? ",
    "className": "logic",
    "filledClassName": "filledLogic",
    "answered": false,
    "type": "1answer",
    "answer": `Почему? Потому что ноги только у человека, лошадей, свиней и коров. У остальных животных – лапы`
  },
  {
    "question": "Сидит ребёнок. А вы не можете сесть на его место, даже если он встанет и уйдёт. Где сидит ребёнок? ",
    "className": "logic",
    "filledClassName": "filledLogic",
    "answered": false,
    "type": "1answer",
    "answer": `На коленях`
  },
  {
    "question": "Стоит богатый дом и бедный. Оба горят. Какой дом будет тушить полиция? ",
    "className": "logic",
    "filledClassName": "filledLogic",
    "answered": false,
    "type": "1answer",
    "answer": `Полиция не тушит пожары`
  },
  {
    "question": "Вы сидите в самолёте, впереди вас лошадь, сзади автомобиль. Где вы находитесь? ",
    "className": "logic",
    "filledClassName": "filledLogic",
    "answered": false,
    "type": "1answer",
    "answer": `Вы катаетесь на карусели`
  },
  {
    "question": "Чем больше из неё берёшь, тем больше она становится. Что это? ",
    "className": "logic",
    "filledClassName": "filledLogic",
    "answered": false,
    "type": "1answer",
    "answer": `Яма`
  },
  {
    "question": "Один оборот вокруг земли первый спутник делает за 1 час 40 минут, а второй за 100 минут. Как это может быть? ",
    "className": "logic",
    "filledClassName": "filledLogic",
    "answered": false,
    "type": "1answer",
    "answer": `1 час 40 минут = 100 минут`
  },
  {
    "question": "На дереве сидело 10 птиц. Пришёл охотник и подстрелил одну. Сколько птиц осталось на дереве? ",
    "className": "logic",
    "filledClassName": "filledLogic",
    "answered": false,
    "type": "1answer",
    "answer": `Ни одна, все улетели`
  },
  {
    "question": "Что принадлежит вам, однако другие пользуются этим чаще, чем вы сами? ",
    "className": "logic",
    "filledClassName": "filledLogic",
    "answered": false,
    "type": "1answer",
    "answer": `Имя`
  },
  {
    "question": "Чем является Млечный Путь?",
    "answered": false,
    "type": "1answer",
    "answer": `Галактика`
  },
  {
    "question": "Столица какой страны Куала-Лумпур?",
    "answered": false,
    "type": "1answer",
    "answer": `Малайзия`
  },
  {
    "question": "Именно они впервые надели каблуки.",
    "answered": false,
    "type": "1answer",
    "answer": `Персидские наездники`
  },
  {
    "question": "Кто изобрёл компьютер?",
    "answered": false,
    "type": "1answer",
    "answer": `Черльз Бэббидж`
  },
  {
    "question": "Какое это число LXXVII ?",
    "answered": false,
    "type": "1answer",
    "answer": `77`
  },
  {
    "question": "Бои каких домашних птиц были любимым развлечением английского дворянства в 18 веке?",
    "answered": false,
    "type": "1answer",
    "answer": `Петух`
  },
  {
    "question": "В честь какого российского города назван 115-ый элемент таблицы Менделеева?",
    "answered": false,
    "type": "1answer",
    "answer": `Москва`
  },
  {
    "question": "Какую страну считают родиной слова «селфи»?",
    "answered": false,
    "type": "1answer",
    "answer": `Австралия`
  },
  {
    "question": "Какого цвета будет Солнце, если посмотреть на него из космоса?",
    "answered": false,
    "type": "1answer",
    "answer": `Белый`
  },
  {
    "question": "На кого бежит зверь в известной пословице?",
    "answered": false,
    "type": "1answer",
    "answer": `На ловца`
  },
  {
    "question": "Кто из сказочников страдал многочисленными фобиями: боялся отравлений, ограблений, пожара, зубной боли, собак, потери документов?",
    "answered": false,
    "type": "1answer",
    "answer": `Ганс Христиан Андерсен`
  },
  {
    "question": "Команда корабля, самолёта.",
    "answered": false,
    "type": "1answer",
    "answer": `Экипаж`
  },
  {
    "question": "Тормоз для корабля.",
    "answered": false,
    "type": "1answer",
    "answer": `Якорь`
  },
  {
    "question": "Описание чьей-нибудь жизни.",
    "answered": false,
    "type": "1answer",
    "answer": `Биография`
  },
  {
    "question": "Разговор между двумя лицами.",
    "answered": false,
    "type": "1answer",
    "answer": `Диалог`
  },
  {
    "question": "Праздник, на котором все в масках и костюмах.",
    "answered": false,
    "type": "1answer",
    "answer": `Карнавал, маскарад`
  },
  {
    "question": " Русские зимние сапоги из шерсти.",
    "answered": false,
    "type": "1answer",
    "answer": `Валенки`
  },
  {
    "question": "Что лечит врач - окулист?",
    "answered": false,
    "type": "1answer",
    "answer": `Глаза`
  },
  {
    "question": "У какого врача лечат животных?",
    "answered": false,
    "type": "1answer",
    "answer": `Ветеринар`
  },
  {
    "question": "Из чего папа Карло сделал Буратино?",
    "answered": false,
    "type": "1answer",
    "answer": ` Из дерева`
  },
]

export default QUESTIONS;
