

const dormData = [
    {
      id: 1,
      name: "Алматы студенттер үйі",
      city: "Алматы",
      price: 25000,
      address: "Абая 120, Алматы",
      phone: "+7 700 123 4567",
      coords: [43.238949, 76.889709],
      image:"https://static.tengrinews.kz/userdata/news_kk/2018/news_291397/thumb_m/photo_49334.jpeg",
      description: "Жайлы және қауіпсіз жатақхана...",
      gallery: [
        "https://dknews.kz/storage/news/2025-04/MaMDjVkMGdWNifDLycATOLvqOrNWZ22vZ0Mwf3az.jpg",
        "https://kaz.orda.kz/uploads/posts/2024-05/sizes/1440x810/3400d7f207cf91f0d830b392acc.webp",
        "https://dalanews.kz/uploads/images/20240127142840673.jpg"
      ],
      reviews: [
        { text: "Таза әрі жайлы.", author: "Айгерім" },
        { text: "Интернет сәл баяу.", author: "Нұржан" }
      ]
    },
    {
        id: 2,
        name: "Астана жатақханасы",
        city: "Астана",
        price: 30000,
        address: "Тәуелсіздік 45, Астана",
        phone: "+7 701 456 7890",
        coords: [51.128207, 71.430411],
        image: "https://aiu.kz/media/photos/2024/02/29/1H7A7865_1-min.jpg",
        description: "Жаңа және заманауи жатақхана, Астананың орталығында орналасқан.",
        gallery: [
          "https://cdn.pixabay.com/photo/2016/11/18/15/11/architecture-1837059_1280.jpg",
          "https://images.unsplash.com/photo-1560448075-092c312f1a3c"
        ],
        reviews: [
          { text: "Жайлы бөлмелер мен жақсы қауіпсіздік.", author: "Ернар" },
          { text: "Тазалыққа көп көңіл бөлінеді.", author: "Диана" }
        ],
      },
      {
        id: 3,
        name: "Шымкент жатақханасы",
        city: "Шымкент",
        price: 20000,
        address: "Рысқұлов 17, Шымкент",
        phone: "+7 702 987 6543",
        coords: [42.341744, 69.590100],
        image: "https://auezov.edu.kz/ap/images/IMG-20191205-WA0020.jpg",
        description: "Қолжетімді бағамен жатақхана Шымкент қаласында. Барлық қажетті жағдайлар бар.",
        gallery: [
          "https://auezov.edu.kz/ap/images/IMG-20191205-WA0020.jpg",
          "https://cdn.pixabay.com/photo/2017/06/06/22/37/architecture-2371665_1280.jpg",
          "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
        ],
        reviews: [
          { text: "Жатақхана тыныш және жайлы.", author: "Асель" },
          { text: "Бағасы қолайлы, ұсыныстарды қарастыруға болады.", author: "Мұрат" }
        ],
      },
      {
        id: 4,
        name: "Караганда жатақханасы",
        city: "Караганда",
        price: 18000,
        address: "Бухар жырау 15, Караганда",
        phone: "+7 701 222 3344",
        coords: [49.8047, 73.1094],
        image: "https://i5.photo.2gis.com/main/branch/84/70000001091342984/common",
        description: "Караганда қаласындағы бағасы қолжетімді жатақхана. Көптеген студенттер үшін ыңғайлы орналасқан.",
        gallery: [
          "https://i5.photo.2gis.com/main/branch/84/70000001091342984/common",
          "https://cdn.pixabay.com/photo/2016/11/18/17/16/building-1837157_1280.jpg",
          "https://images.unsplash.com/photo-1532619675605-0662497b004e"
        ],
        reviews: [
          { text: "Орны жақсы, қызметкерлер көмекші.", author: "Жанар" },
          { text: "Интернет кейде баяу жұмыс істейді.", author: "Аслан" }
        ],
      },
      {
        id: 5,
        name: "Тараз студенттік үйі",
        city: "Тараз",
        price: 17000,
        address: "Жамбыл 50, Тараз",
        phone: "+7 702 555 6677",
        coords: [42.8996, 71.3775],
        image: "https://avatars.mds.yandex.net/get-altay/1003687/2a00000186fe5420403cde99c6086ea926d9/orig",
        description: "Тараздағы жатақхана студенттерге қолайлы және тыныш орта ұсынады.",
        gallery: [
          "https://avatars.mds.yandex.net/get-altay/1003687/2a00000186fe5420403cde99c6086ea926d9/orig",
          "https://cdn.pixabay.com/photo/2017/08/02/00/19/building-2568199_1280.jpg",
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
        ],
        reviews: [
          { text: "Тыныш әрі жайлы орынды жақсы көрдім.", author: "Саят" },
          { text: "Тұрғын үй жайлы ақпаратты ұдайы жаңартып отырады.", author: "Жібек" }
        ],
      },
      {
        id: 6,
        name: "Атырау жатақханасы",
        city: "Атырау",
        price: 22000,
        address: "Сатпаев 33, Атырау",
        phone: "+7 700 888 9990",
        coords: [47.1164, 51.9235],
        image: "https://img.inform.kz/kazinform-photobank/media/2023-09-15/519650d1-446f-4713-a8b9-bea8e999bb9d.webp",
        description: "Атыраудағы заманауи жатақхана, студенттерге барлық жағдай жасалған.",
        gallery: [
          "https://img.inform.kz/kazinform-photobank/media/2023-09-15/519650d1-446f-4713-a8b9-bea8e999bb9d.webp",
          "https://cdn.pixabay.com/photo/2018/02/22/15/57/apartment-3174793_1280.jpg",
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        ],
        reviews: [
          { text: "Жатақхана өте жайлы, бірақ кейде шу болады.", author: "Ержан" },
          { text: "Бағасы сапасына сай келеді.", author: "Айдана" }
        ],
      },
      {
        id: 7,
        name: "Көкшетау студенттер үйі",
        city: "Көкшетау",
        price: 16000,
        address: "Абылай хан 77, Көкшетау",
        phone: "+7 777 111 2233",
        coords: [53.2886, 69.4048],
        image: "https://shokan.edu.kz/media/images/WhatsApp_Image_2024-01-09_at_12.28.original.format-webp_plVfFnV.webp",
        description: "Көкшетауда орналасқан қолжетімді жатақхана, студенттерге ыңғайлы.",
        gallery: [
          "https://shokan.edu.kz/media/images/WhatsApp_Image_2024-01-09_at_12.28.original.format-webp_plVfFnV.webp",
          "https://cdn.pixabay.com/photo/2016/03/27/22/22/buildings-1280251_1280.jpg",
          "https://images.unsplash.com/photo-1494526585095-c41746248156"
        ],
        reviews: [
          { text: "Жатақхана жайлы және тыныш.", author: "Мақсат" },
          { text: "Барлық қажетті жағдайлар бар.", author: "Әлия" }
        ],
      },
      {
        id: 8,
        name: "Қостанай студент үйі",
        city: "Қостанай",
        price: 19000,
        address: "Байтурсынов 12, Қостанай",
        phone: "+7 701 333 4455",
        coords: [49.9469, 82.6271],
        image: "https://kstc.edu.kz/wp-content/uploads/2022/05/fasad.jpg",
        description: "Қостанайда орналасқан заманауи жатақхана, қауіпсіз және жайлы.",
        gallery: [
          "https://cdn.top-news.kz/wp-content/uploads/2021/05/ec-tzt-w4aaux2r.jpg-large-810x540.jpg",
          "https://inbusiness.kz/uploads/2023-9/XWXaZuC1.webp",
          "https://info.homsters.kz/data/uploads/Dizajn-bez-nazvaniya-4-36.png"
        ],
        reviews: [
          { text: "Жатақхана қызметтері жақсы.", author: "Самат" },
          { text: "Орналасуы ыңғайлы, әрі жайлы.", author: "Гүлжан" }
        ],
      },
      {
        id: 9,
        name: "Ақтобе жатақханасы",
        city: "Актобе",
        price: 21000,
        address: "Лермонтов 45",
        phone: "+7 702 444 5566",
        coords: [52.2912, 76.9456],
        image: "https://avatars.mds.yandex.net/get-altay/12595784/2a000001900021762b06f37c75347d5283cd/L_height",
        description: "Павлодардағы студенттерге арналған жатақхана, барлық жағдайлар қарастырылған.",
        gallery: [
          "https://pavlodarnews.kz/uploads/images/202308/image_750x_64e5ea0ef1fde.jpg",
          "https://pavlodarnews.kz/uploads/images/202308/image_750x_64e5ea177b5e0.jpg",
          "https://astanatv.kz/cache/imagine/1200/uploads/article/2023/12/4/1701699264452.jpg"
        ],
        reviews: [
          { text: "Жатақхана жаңа және таза.", author: "Алия" },
          { text: "Қызметкерлер мейірімді.", author: "Санжар" }
        ],
      },
      {
        id: 10,
        name: "Қарағанды жатақханасы 2",
        city: "Қарағанды",
        price: 19000,
        address: "Бейбітшілік 9, Қарағанды",
        phone: "+7 777 888 9900",
        coords: [49.8090, 73.1020],
        image: "https://cdn.pixabay.com/photo/2016/11/29/10/12/building-1868667_1280.jpg",
        description: "Қарағанды қаласындағы тағы бір қолжетімді жатақхана, студенттерге арналады.",
        gallery: [
          "https://cdn.pixabay.com/photo/2016/11/29/10/12/building-1868667_1280.jpg",
          "https://cdn.pixabay.com/photo/2017/06/20/18/43/building-2429603_1280.jpg",
          "https://images.unsplash.com/photo-1486308510493-cb6bba0984a8"
        ],
        reviews: [
          { text: "Бағасы қолайлы, тұрғындар достық.", author: "Марат" },
          { text: "Интернет жылдамдығы орташа.", author: "Назым" }
        ],
      }
  ];
  export default dormData;
  