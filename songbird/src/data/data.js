const songsData = [
  ['Rock', 'Pop', 'Hip-hop', 'Blues', 'Electro', 'Country'],
  [
    [
      {
        id: 0,
        song: 'Numb',
        artist: 'Linkin Park',
        description:
          'Песня американской рок-группы Linkin Park, сингл с их второго студийного альбома Meteora 2003 года. Песня лидировала в чарте Billboard Alternative Songs в течение 6 недель в 2003 году и 6 недель в 2004 году, став, таким образом, единственной в истории песней, которая становилась самой лучшей сразу в течение двух лет.',
        image: 'https://avatars.yandex.net/get-music-content/149669/d71e31d9.a.488052-7/200x200',
        audio: './audio/LinkinPark-Numb.mp3',
      },
      {
        id: 1,
        song: 'Smells Like Teen Spirit',
        artist: 'Nirvana',
        description:
          'Песня американской группы Nirvana из альбома Nevermind. Она достигла шестого места в чарте Billboard, возглавила ряд хит-парадов по всему миру в 1991 и 1992 годах. Композиция была поставлена на 9-е место в списке «500 величайших песен всех времён» журнала Rolling Stone, оказалась на 1-й строчке аналогичного опроса NME[3], а также фигурирует в рейтингах «лучших песен» множества других музыкальных изданий.',
        image: 'https://avatars.yandex.net/get-music-content/143117/71becd03.a.5576245-1/200x200',
        audio: './audio/Nirvana-SmellsLikeTeenSpirit.mp3',
      },
      {
        id: 2,
        song: 'Bohemian Rhapsody',
        artist: 'Queen',
        description:
          'Песня британской рок-группы Queen из альбома A Night At The Opera; написана Фредди Меркьюри в 1975 году. Песня имеет необычную музыкальную форму. Её можно разбить на шесть разных по стилю частей, которые не делятся на куплеты и припевы и представляют отдельные музыкальные направления: оперу и балладу, пение а капелла и рок.',
        image: 'https://avatars.yandex.net/get-music-content/41288/ef460cde.a.215688-1/200x200',
        audio: './audio/Queen-BohemianRhapsody.mp3',
      },
      {
        id: 3,
        song: 'Highway to Hell',
        artist: 'AC/DC',
        description:
          'Песня, выпущенная в качестве ведущего сингла австралийской рок-группы AC/DC с одноименного альбома, выпущенного в 1979 году. Поводом для названия песни (а за ней и всего альбома) послужило интервью, в котором журналист спросил группу об их гастрольной жизни. Гитарист Ангус Янг описал её как «дорога в ад» (англ. highway to hell).',
        image: 'https://avatars.yandex.net/get-music-content/33216/09fffed0.a.2832563-1/200x200',
        audio: './audio/AC_DC-HighwaytoHell.mp3',
      },
      {
        id: 4,
        song: 'Hey Jude',
        artist: 'The Beatles',
        description:
          'Песня британской рок-группы The Beatles, написанная Полом Маккартни (авторство песни приписано дуэту Леннон/Маккартни). Записана 31 июля, 1 августа 1968 года. По результатам голосования, песня названа самой любимой среди британцев из песен The Beatles. Песню сочинил Пол Маккартни, чтобы утешить Джулиана, сына Джона Леннона, во время развода его родителей.',
        image:
          'https://upload.wikimedia.org/wikipedia/ru/thumb/c/c6/Hey_jude.jpg/274px-Hey_jude.jpg',
        audio: './audio/TheBeatles-HeyJude.mp3',
      },
      {
        id: 5,
        song: 'Boulevard of Broken Dreams',
        artist: 'Green Day',
        description:
          'Второй сингл американской рок-группы Green Day из альбома American Idiot. Песня была написана Green Day на слова вокалиста Билли Джо Армстронга. Сама песня является одной из «визитных карточек» группы. Лирическим героем песни является главный персонаж альбома American Idiot - Иисус из пригорода (Jesus of Suburbia). Лирика песни угрюмая, мрачная, темп умеренный, средний.',
        image: 'https://avatars.yandex.net/get-music-content/63210/5d973577.a.41332-1/200x200',
        audio: './audio/GreenDay-BoulevardofBrokenDreams.mp3',
      },
    ],
    [
      {
        id: 0,
        song: 'Umbrella',
        artist: 'Rihanna',
        description:
          'Первый сингл барбадосской певицы Рианны из её третьего студийного альбома Good Girl Gone Bad (2007), записанный при участии Jay-Z, выпущенный 29 марта 2007 года. Песня стала одним из главных хитов 2007 года, 7 недель возглавляла хит-парад Billboard Hot 100 в США (заняв там второе место по итогам года) и 10 недель лидировала в Великобритании.',
        image: 'https://avatars.yandex.net/get-music-content/163479/f6f6c751.a.7355337-1/200x200',
        audio: './audio/Rihanna-Umbrella.mp3',
      },
      {
        id: 1,
        song: 'Halo',
        artist: 'Beyonce',
        description:
          'Сингл американской певицы Бейонсе из альбома I Am... Sasha Fierce (2008). Замысел песни заключался в том, чтобы взглянуть на обычную жизнь Бейонсе, без макияжа и атрибутов знаменитости. «Halo» был номинирован на премию «Грэмми» в категории «запись года» и выиграл премию за Лучшее женское вокальное поп-исполнение. Также сингл является обладателем премии MTV Europe Music Awards за лучшую песню года.',
        image: 'https://avatars.yandex.net/get-music-content/38044/aff174d9.a.1812837-1/200x200',
        audio: './audio/Beyoncé-Halo.mp3',
      },
      {
        id: 2,
        song: 'Cry me a river',
        artist: 'Justin Timberlake',
        description:
          'Песня американского певца Джастина Тимберлейка с его дебютного альбома 2002 года Justified. Она была написана Тимберлейком, Скотт Сторчем и продюсером Тимбалэндом. В основу легли настоящие события о закончившихся отношениях с поп-певицей Бритни Спирс.',
        image: 'https://avatars.yandex.net/get-music-content/49876/d0830903.a.67231-1/200x200',
        audio: './audio/JustinTimberlake-CryMeaRiver.mp3',
      },
      {
        id: 3,
        song: 'Billie Jean',
        artist: 'Michael Jackson',
        description:
          'Песня американского музыканта Майкла Джексона. Второй сингл из шестого студийного альбома певца Thriller. Выпущен на лейбле Epic Records в январе 1983 года. Композиция была написана Джексоном и спродюсирована им самим и Куинси Джонсом. Песня хорошо известна своей характерной басовой партией и вокальными приёмами Джексона. Текст основан на реальном жизненном опыте певца и посвящён групи — девушкам, сопровождавшим его и группу The Jacksons на гастролях.',
        image:
          'https://upload.wikimedia.org/wikipedia/ru/thumb/0/0e/Billie_Jean.jpg/274px-Billie_Jean.jpg',
        audio: './audio/MichaelJackson-BillieJean.mp3',
      },
      {
        id: 4,
        song: 'Frozen',
        artist: 'Madonna',
        description:
          'Песня американской певицы Мадонны с её седьмого студийного альбома 1998 года Ray of Light, авторами которой являются Мадонна, Патрик Леонард и Уильям Орбит. Песня была выпущена как первый сингл альбома в феврале 1998 года.',
        image: 'https://avatars.yandex.net/get-music-content/34131/e76391e9.a.22016-1/200x200',
        audio: './audio/Madonna-Frozen.mp3',
      },
      {
        id: 5,
        song: 'Do You Know? (The Ping Pong Song)',
        artist: 'Enrique Iglesias',
        description:
          'Первый сингл испанского певца Энрике Иглесиаса из альбома Insomniac, выпущенный 15 мая 2007 года на лейбле Interscope Records. В Латинской Америке была выпущена испанская версия песни — «Dímelo». Сингл стал первым после 4-летнего перерыва певца.',
        image: 'https://avatars.yandex.net/get-music-content/49876/4eedd65c.a.85625-1/200x200',
        audio: './audio/EnriqueIglesias-DoYouKnow(ThePingPongSong).mp3',
      },
    ],
    [
      {
        id: 0,
        song: 'Lose Yourself',
        artist: 'Eminem',
        description:
          'Песня рэпера Эминема, записанная им в 2002 году. Песня была выпущена на сборнике 8 Mile (OST) в 2002 году как саундтрек к фильму 8 Mile, в котором рэпер сыграл главную роль. Позднее Lose Yourself издана в качестве сингла в 2002 году и переиздана на альбоме лучших хитов Эминема Curtain Call: The Hits. За эту песню он получил множество наград, в том числе и Оскар в 2003 году в номинации «Лучший саундтрек». Она продержалась на 1-м месте в чартах 2,5 месяца, что было тогда рекордом. Песня возглавила Billboard Hot 100, также заняла 166 позицию в списке 500 величайших песен всех времён по версии журнала Rolling Stone.',
        image: 'https://avatars.yandex.net/get-music-content/42108/769b02ff.a.2481058-1/200x200',
        audio: './audio/Eminem-LoseYourself.mp3',
      },
      {
        id: 1,
        song: 'Humble',
        artist: 'Kendrick Lamar',
        description:
          'Песня американского хип-хоп-певца и автора-исполнителя Кендрика Ламара, вышедшая 30 марта 2017 года в качестве первого сингла с его 4-го студийного альбома DAMN. (2017). Песня достигла позиции № 1 в американских хит-парадах Billboard Hot 100 и Hot R&B/Hip-Hop Songs и выиграла 3 премии Грэмми и 6 наград 2017 MTV Video Music Awards, включая Video of the Year.',
        image: 'https://avatars.yandex.net/get-music-content/193823/7ea02dc6.a.4883171-2/200x200',
        audio: './audio/KendrickLamar-HUMBLE.mp3',
      },
      {
        id: 2,
        song: 'Stronger',
        artist: 'Kanye West',
        description:
          'Второй сингл с третьего студийного альбома американского хип-хоп артиста Канье Уэста. Песня содержит вокал песни «Harder, Better, Faster, Stronger» французского дуэта Daft Punk. На 50-й церемонии вручения премии «Грэмми» песня выиграла Грэмми за «Лучшее сольное рэп-исполнение».',
        image: 'https://avatars.yandex.net/get-music-content/142001/b6bf3e4e.a.6796491-1/200x200',
        audio: './audio/KanyeWest-Stronger.mp3',
      },
      {
        id: 3,
        song: '99 Problems',
        artist: 'Jay-Z',
        description:
          'Песня американского рэпера Джей-Зи с его альбома 2004 года The Black Album. Песня также была издана отдельным синглом (это был третий сингл с вышеназванного альбома). В 2011 году журнал Rolling Stone поместил песню «99 Problems» в исполнении Джей-Зи на 172 место своего списка «500 величайших песен всех времён». Припев своей песни Джей-Зи позаимствовал из песни «99 Problems» Айса Ти (которая была включена в его альбом 1993 года Home Invasion и также вышла в своё время отдельным синглом).',
        image: 'https://avatars.yandex.net/get-music-content/2442093/92e4a976.a.89484-4/200x200',
        audio: './audio/Jay-Z-99Problems.mp3',
      },
      {
        id: 4,
        song: 'In da Club',
        artist: '50 Cent',
        description:
          "Песня американского рэпера 50 Cent (настоящее имя Кёртис Джексон) из его дебютного студийного альбома Get Rich or Die Tryin' (2003). Трек написали 50 Cent, Dr. Dre и Mike Elizondo, а продюсировали Dr. Dre и Elizondo. Песня вышла в январе 2003 в качестве лид-сингла и достигла первого места в американском хит-параде Billboard Hot 100, став первым чарттоппером для 50 Cent. На 46-й церемонии «Грэмми» она была номинирована в категориях Best Male Rap Solo Performance и Best Rap Song. В 2010 году песня была включена в список 500 Greatest Songs of All Time журнала Rolling Stone (на 448-м месте).",
        image: 'https://avatars.yandex.net/get-music-content/149669/758caefb.a.4418761-1/200x200',
        audio: './audio/50Cent-InDaClub.mp3',
      },
      {
        id: 5,
        song: 'Lollipop',
        artist: 'Lil Wayne',
        description:
          'Первый сингл с шестого студийного альбома американского рэпера Lil Wayne Tha Carter III. Эта песня записана со Static Major и спродюсировано Deezle и Jim Jonsin. Lollipop продержался 5 недель на первом месте в Billboard Hot 100 и стал самым успешным синглом в сольной карьере Lil Wayne. За 2 недели до релиза умер Static Major, таким образом, впоследствии сингл стал седьмым по счёту посмертным дебютом лидерства в Billboard Hot 100. Было записано несколько вариантов песни. Сингл стал 5х платиновым по версии RIAA[источник не указан 3102 дня], занял седьмое место на MTV в песнях 2008 года и первое место по версии BET и стал самым скачиваемым рингтоном 2000-х.',
        image: 'https://avatars.yandex.net/get-music-content/3226792/48b11f87.a.91026-2/200x200',
        audio: './audio/LilWayne-Lollipop.mp3',
      },
    ],
    [
      {
        id: 0,
        song: 'The Thrill Is Gone',
        artist: 'B. B. King',
        description:
          'Медленная песня в минорном ключе, написанная в 1951 году блюзовым музыкантом Роем Хокинсом и Риком Дарнеллом. Тогда же в 1951 году в исполнении Хокинса она достигла 6 места в ритм-н-блюзовом чарте американского журнала «Билборд». Позже песня стала большим хитом в исполнении Би Би Кинга. Сначала она вышла на его альбоме 1969 года Completely Well, а в декабре как сингл. Песня достигла 15 места в горячей сотне «Билборда» и 3 места в его специализированном ритм-н-блюзовом чарте и принесла Би Би Кингу премию «Грэмми» за 1970 год в категории «Лучшая работа в жанре ритм-н-блюз». В 2004 году журнал Rolling Stone поместил песню «The Thrill Is Gone» в исполнении Би Би Кинга на 183 место своего списка «500 величайших песен всех времён». В списке 2011 года песня находится на 185 месте. Кроме того, песня «The Thrill Is Gone» в исполнении Би Би Кинга входит в составленный Залом славы рок-н-ролла список 500 Songs That Shaped Rock and Roll. В 1998 году сингл Би Би Кинга с песней «The Thrill Is Gone» (вышедший в 1969 году на лейбле BluesWay Records) был принят в Зал славы премии «Грэмми».',
        image: 'https://avatars.yandex.net/get-music-content/32236/c9d87f9b.a.600189-1/200x200',
        audio: './audio/B.B.King-TheThrillIsGone.mp3',
      },
      {
        id: 1,
        song: 'Bright Lights',
        artist: 'Gary Clark Jr.',
        description: 'Песня американского исполнителя Gary Clark Jr. из альбома Blak and Blu.',
        image: 'https://avatars.yandex.net/get-music-content/28589/c0475460.a.288760-1/200x200',
        audio: './audio/GaryClark,Jr.-BrightLights.mp3',
      },
      {
        id: 2,
        song: 'Bird on the Wire',
        artist: 'Joe Bonamassa',
        description:
          'Кавер-версия песни канадского исполнителя Leonard Cohen, американского блюз рок исполнителя Joe Bonamassa из альбома Black Rock.',
        image: 'https://avatars.yandex.net/get-music-content/49876/850e6b48.a.968534-2/200x200',
        audio: './audio/JoeBonamassa-BirdOnAWire.mp3',
      },
      {
        id: 3,
        song: 'Who Says',
        artist: 'John Mayer',
        description:
          '"Who Says" - тринадцатый сингл, выпущенный американским певцом и автором песен Джоном Майером, и первый сингл с его четвертого студийного альбома Battle Studies. Это первый студийный сингл Майера после "Say" в 2007 году. 25 сентября 2009 года "Who Says" был выпущен на официальном сайте Джона Майера.',
        image: 'https://avatars.yandex.net/get-music-content/117546/ba2c39e5.a.67606-2/200x200',
        audio: './audio/JohnMayer-WhoSays.mp3',
      },
      {
        id: 4,
        song: 'My Father’s Son',
        artist: 'Joe Cocker',
        description:
          'Песня из семнадцатого студийного альбома No Ordinary World, британского певца Джо Кокера, выпущенного 9 сентября 1999 года в Европе и 22 августа 2000 года в США.',
        image: 'https://avatars.yandex.net/get-music-content/42108/53f35cab.a.30857-1/200x200',
        audio: "./audio/JoeCocker-MyFather'sSon.mp3",
      },
      {
        id: 5,
        song: 'Daughters',
        artist: 'John Mayer',
        description:
          'Песня американского рок-музыканта и автора песен Джона Мэйера с его второго студийного альбома Heavier Things (2003). Песня была написана самим певцом, а продюсером стал Jack Joseph Puig. Песня посвящена дочерям и их воспитанию отцами, о влиянии их отношений на будущее взаимоотношения с мужчинами. Сингл возглавил американский поп-чарт US Billboard Adult Pop Songs, а 11 июня 2004 года он дебютировал на № 68 в Billboard Hot 100, достигнув в итоге 19 места и оставаясь в чарте 23 недели. В 2005 году песня получила 2 музыкальных премии Грэмми в категориях Лучшая песня года и Лучшее мужское вокальное поп-исполнение. Премия ASCAP Awards от Американского общества композиторов, авторов и издателей (ASCAP) в категории Most Performed Songs.',
        image: 'https://avatars.yandex.net/get-music-content/33216/325622d8.a.3584678-1/200x200',
        audio: './audio/JohnMayer-Daughters.mp3',
      },
    ],
    [
      {
        id: 0,
        song: 'Escape Me',
        artist: 'Tiësto',
        description:
          'Сингл, записанный Tiësto, с вокалом C.C. Sheffield. Вышедшая 23 ноября 2009 года песня является вторым синглом с альбома Тиесто Kaleidoscope.',
        image: 'https://avatars.yandex.net/get-music-content/32236/568efac3.a.217370-1/200x200',
        audio: './audio/Tiësto-EscapeMe.mp3',
      },
      {
        id: 1,
        song: 'White Lies',
        artist: 'Paul van Dyk',
        description:
          'Выпущенный в июле 2007 года первый сингл с пятого студийного альбома Пола ван Дайка In Between. В песне приняла участие Джессика Сатта, бывшая участница Pussycat Dolls.',
        image: 'https://avatars.yandex.net/get-music-content/41288/be083e09.a.485397-1/200x200',
        audio: './audio/PaulVanDyk-WhiteLies.mp3',
      },
      {
        id: 2,
        song: 'In and Out of Love',
        artist: 'Armin van Buuren',
        description:
          'Песня, результат сотрудничества голландского ди-джея и продюсера Армина ван Бюурена и голландской певицы Шэрон ден Адель из группы Within Temptation. Трек был выпущен 6 августа 2008 года как третий сингл с третьего студийного альбома ван Бюрена Imagine.',
        image: 'https://avatars.yandex.net/get-music-content/28589/5dc2330c.a.304624-1/200x200',
        audio: './audio/ArminvanBuuren-InAndOutOfLove.mp3',
      },
      {
        id: 3,
        song: 'Ready Steady Go',
        artist: 'Paul Oakenfold',
        description:
          'Сингл Пола Окенфолда, выпущенный им в 2002 году в рамках альбома Bunkka, который вышел на лейбле Окенфолда Perfecto Records. Вокалистом в данном сингле выступил Asher D.',
        image: 'https://avatars.yandex.net/get-music-content/176019/bc2b7d83.a.4935147-1/200x200',
        audio: './audio/PaulOakenfold-ReadySteadyGoVocals.mp3',
      },
      {
        id: 4,
        song: 'Why Does My Heart Feel So Bad?',
        artist: 'Moby',
        description:
          'Сингл выпущенный Моби в 1999 году. Он является четвёртым синглом с альбома Play. На песню «Why Does My Heart Feel So Bad?» было снято анимированное музыкальное видео. Трек основан на семпле из песни 1963 года «He’ll Roll Your Burdens Away» группы Banks Brothers.',
        image: 'https://avatars.yandex.net/get-music-content/149669/4b6e1a18.a.4029744-1/200x200',
        audio: './audio/Moby-WhyDoesMyHeartFeelsoBad.mp3',
      },
      {
        id: 5,
        song: 'One and One',
        artist: 'Robert Miles',
        description:
          'Хитовая песня 1996 года итальянского электрон-данс музыканта Роберта Майлза. Эта композиция стала третьей с его дебютного альбома Dreamland и вторым его хитом, исполненным английской вокалисткой Марией Нэйлер. «One and One» стала вторым «номером 1» в танцевальных чартах Великобритании.',
        image: 'https://avatars.yandex.net/get-music-content/33216/9fb96bd4.a.4394652-1/200x200',
        audio: './audio/RobertMilesfeat.MariaNayler-OneAndOne.mp3',
      },
    ],
    [
      {
        id: 0,
        song: 'Inside Your Heaven',
        artist: 'Carrie Underwood',
        description:
          'Песня, написанная Andreas Carlsson, Pelle Nylén, Savan Kotecha и спродюсированная Desmond Child. Carrie Underwood, победительница American Idol, выпустила свою версию как сингл 14 июня 2005 года. Он дебютировал под номером один в Billboard Hot 100 США и в канадском чарте синглов, где в течение одной и семи недель подряд оставался на вершине рейтинга.',
        image: 'https://avatars.yandex.net/get-music-content/63210/903fa53a.a.67981-1/200x200',
        audio: './audio/CarrieUnderwood-InsideYourHeaven.mp3',
      },
      {
        id: 1,
        song: 'The Climb',
        artist: 'Miley Cyrus',
        description:
          'Сингл The Climb стал ведущим синглом с альбома-саундтрека Hannah Montana: The Movie и был издан 12 марта 2009 года лейблом Hollywood Records. Песня представляет собой поп-балладу с лирикой, описывающей жизнь, как сложное, но стоящее приключение. Композиция стилизована под кантри-балладу и была первым синглом Сайрус, которую выпустили на кантри-радиостанции.',
        image: 'https://avatars.yandex.net/get-music-content/63210/18761ea6.a.9794-1/200x200',
        audio: './audio/MileyCyrus-TheClimb.mp3',
      },
      {
        id: 2,
        song: 'Back to Tennessee',
        artist: 'Billy Ray Cyrus',
        description:
          'Песня в стиле кантри американского певца и актера Билли Рэя Сайруса. Трек был выпущен как второй сингл с одиннадцатого одноименного студийного альбома Сайруса 2 февраля 2009 года на Lyric Street Records. Сайрус написал песню после того, как узнал, что действие фильма «Ханна Монтана: фильм», в котором он будет сниматься, будет происходить в Теннесси. Песня, разработанная с помощью соавторов Тамары Данн и Мэтью Уайлдера, включает элементы кантри-рока и описывает стремление Сайруса вернуться на юг, где он вырос, после нескольких лет пребывания в Лос-Анджелесе. "Назад в Теннесси" был показан как в фильме "Ханна Монтана: фильм", так и в его саундтреке.',
        image: 'https://avatars.yandex.net/get-music-content/49876/5c54ff37.a.33710-1/200x200',
        audio: './audio/BillyRayCyrus-BackToTennessee.mp3',
      },
      {
        id: 3,
        song: 'Love Story',
        artist: 'Taylor Swift',
        description:
          'Песня американской кантри и поп-певицы и автора песен Тейлор Свифт, вышедшая 12 сентября 2008 года в качестве лид-сингла с её второго студийного альбома Fearless (2008). Песня была написана самой певицей, а сопродюсером стал Нэтан Чапман. Песня и видеоклип имели значительную популярность (№ 1 в Billboard Pop Songs, Adult Contemporary, Hot Country Songs, № 2 в Великобритании, № 1 в Австралии, № 4 в Billboard Hot 100) и положительные отзывы, получили несколько музыкальных наград Country Music Association Awards, Country Music Television awards, BMI Country Awards[en] и 8-кр. платиновый статус RIAA.',
        image: 'https://avatars.yandex.net/get-music-content/49707/7993810c.a.10656-1/200x200',
        audio: './audio/TaylorSwift-LoveStory.mp3',
      },
      {
        id: 4,
        song: 'Speechless',
        artist: 'Dan + Shay',
        description:
          'Песня, записанная американским дуэтом кантри-музыки Dan + Shay для их третьего одноименного студийного альбома 2018 года. Песня была написана Дэном Смайерсом и Шей Муни вместе с Джорданом Рейнольдсом и Лорой Вельц. "Speechless" занял первое место в чартах Billboard Hot Country Songs и Country Airplay. Песня также достигла 24-го места в Billboard Hot 100. В Канаде песня достигла 2-го места в чарте канадских трансляций и 41-го места в Canadian Hot 100. "Speechless" был удостоен золотого сертификата Ассоциации звукозаписывающей индустрии Америки. (RIAA) и платиновый от Music Canada.',
        image: 'https://avatars.yandex.net/get-music-content/193823/d5d9b5fb.a.5451753-1/200x200',
        audio: './audio/Dan+Shay-Speechless.mp3',
      },
      {
        id: 5,
        song: 'Heaven',
        artist: 'Kane Brown',
        description:
          'Песня, записанная американским певцом кантри Кейном Брауном для переиздания его одноименного дебютного альбома 6 октября 2017 года. Он был выпущен как третий сингл с альбома 13 ноября 2017 года. Песня достигла 1-го места в чарте Country Airplay от 19 мая 2018 года, став вторым номером 1 для Брауна в этом чарте. Он также достиг № 2 в чарте Hot Country Songs. По состоянию на апрель 2019 года в США было продано 722 000 копий. Он был сертифицирован 5 × Platinum 27 января 2020 года RIAA для 5 миллионов единиц в продажах и потоках в Соединенных Штатах.',
        image: 'https://avatars.yandex.net/get-music-content/192707/632357d4.a.3948598-1/200x200',
        audio: './audio/KaneBrown-Heaven.mp3',
      },
    ],
  ],
];

export default songsData;
