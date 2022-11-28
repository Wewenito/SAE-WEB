//Chaque tableau dans ce script est divisé en 2 sections [0] & [1].
//La première est la version FR, la seconde la version EN

const Page_Text_Data = [//texte page défaut
        {
            BUTTON1: "Expériences professionnelles",
            BUTTON2: "Formations",
            BUTTON3: "Hobbies & Centres d'intérêts",
            BUTTON4: "A propos",
            HOMETEXT: "Bienvenue sur ma page de présentation en ligne.<br><br>Cliquez sur l'une des sections ci dessus pour explorer les différentes sections.",
            ERRORLOAD: "Il semblerait qu'une erreur soit survenue, merci de rafraichir la page [F5].."
        },
        {
            BUTTON1: "Professionnal experiences",
            BUTTON2: "School curriculum",
            BUTTON3: "Hobbies & Interests",
            BUTTON4: "About",
            HOMETEXT: "Welcome on my online presentation page.<br><br>Click on any topic up-top to explore them.",
            ERRORLOAD: "There seem to have been an error while loading the page, please refresh it [F5].."
        }
];

const Pro_Text_Data = [//texte section Exp Pro.
    [
        {
            TITLE: "Vendeur",
            LOCATION: "Halles d'Epernay / ",
            SUBTITLE: "SARL Viellard",
            SMALLDESCRIPTION: "Vendeur au marché couvert d'Epernay.",
            DESCRIPTION: "J\'ai en 2016 commencé à travailler au marché couvert d\'Epernay.<br>Il s'agissait au départ d'un simple job d\'appoint afin de me permettre de sortir le Week-end mais j\'y ai pris goût après seulement quelques semaines.J\'étais alors vendeur au sein d'une fromagerie dont tous les produits étaient fait de manière artisanale.<br>Hormis le fait d'en apprendre chaque jour sur les différentes façons dont les fromages de nos régions sont faits, ce boulot m\'a également beaucoup appris sur le relationnel client et m\'a permis de faire de très belles rencontres qu\'il s'agisse de collègues ou bien de clients.<br>L\'ambiance d'un marché est tout à fait différente de celle d'un magasin car tout le monde sait prendre son temps et on a parfois l\'impression d'être revenu quelques décennies en arrière grâce au contexte des halles qui nous entourent.<br>J\'ai malheureusement dû arrêter ce travail car, afin de préparer mon année à l\'étranger, mon job suivant ne me permettrait pas de continuer de travailler le Week-end.",
            CHRONO: "Novembre 2016 - Octobre 2018",
            IMG1: "../IMG/ARTICLE IMAGES/WORK/marche1.jpg",
            IMG2: "../IMG/ARTICLE IMAGES/WORK/marche2.png"
        },
        {
            TITLE: "Equipier polyvalent",
            LOCATION: "Epernay (51) / ",
            SUBTITLE: "McDonald's",
            SMALLDESCRIPTION: "Equipier polyvalent en restauration rapide.",
            DESCRIPTION: "Je ne m\'attarderais pas si longtemps que ça sur ce job-ci car à l\'opposé de ma première expérience professionnelle, il ne s\'agissait là que d'un pur besoin pragmatique de mettre assez d\'argent de côté afin de pouvoir vivre à l'étranger pendant au moins une année scolaire complète.<br>Ce boulot était extrêmement routinier et les contacts avec les clients ne sont qu\'ennuyant, au mieux, déshumanisant, au pire.<br>Ce travail aura au moins eu le mérite de m'apprendre ce qu\'est la résilience et il m\'aura donné, encore aujourd\'hui, un profond respect pour tout les gens qui entreprennent des carrières complètes dans ce type d\'établissement.",
            CHRONO: "Octobre 2018 - Juillet 2019",
            IMG1: "../IMG/ARTICLE IMAGES/WORK/mcdo.jpg",
            IMG2: "../IMG/ARTICLE IMAGES/WORK/mcdo2.jpg"
        },
        {
            TITLE: "Gestionnaire de dossiers CEE",
            LOCATION: "Mardeuil (51) / ",
            SUBTITLE: "Scop\'it",
            SMALLDESCRIPTION: "Gestion de dossiers pour les primes énergies.",
            DESCRIPTION: "Après être revenu d\Irlande plus tôt que prévu (merci au Covid !) j\ai dû trouver au plus vite un nouveau travail afin de pouvoir vivre.<br>Je suis alors tombé par hasard sur cette annonce de \"Gestionnaire CEE\" qui devint alors l\'un des meilleurs job que j\ai pu pratiquer.<br>Le travail consistait à accompagner des particuliers & des professionnels lors de leur demandes d'aide à la rénovation de biens immobilier auprès de l\'état.<br>Lors de mon temps dans cette compagnie je me sentais réellement utile car je pouvais aider chaque jour des dizaines de personnes dans le besoin à réaliser les travaux dont ils avaient vraiment envie, le tout entouré d'une équipe de collègues fort sympathiques.<br>De plus, l\'entreprise était une SCOP, ce qui veut dire qu'il n'y a pas de PDG mais surtout, pas d'actionnaires.<br>L\'entreprise se rapprochait donc plus d'un association que d'une PME dans son fonctionnement et, chaque employé possédant une part de celle-ci, tout le monde donnait le meilleur d'eux même.",
            CHRONO: "Avril 2021 - Septembre 2022",
            IMG1: "../IMG/ARTICLE IMAGES/WORK/scop.jpg",
            IMG2: "../IMG/ARTICLE IMAGES/WORK/scop2.png"
        }
    ],
    [
        {
            TITLE: "Salesman",
            LOCATION: "Epernay's market /",
            SUBTITLE: "SARL Viellard",
            SMALLDESCRIPTION: "Salesman in a cheese shop in the covered market of Epernay",
            DESCRIPTION: "In 2016 I\'ve started working in the covered market of Epernay (France).<br>At first it was just about earning a little money to go out during the week-ends but after only a few weeks I really started to like it.<br>I was hired as a salesman for the cheese shop section of the market, it was great to learn how and where all those were made.<br> This job taught me a lot about how to deal with customers and even allowed me to make some great friends along the way wether they were customers or colleagues at first.<br> The mood was very different from a regular retail store because everyone there took their time and it sometimes felt like we were back in time a few decades.<br><br>Unfortunately, I had to quit this job because of the next one which wouldn't have allowed me to be absent during the week-ends.",
            CHRONO: "November 2016 - October 2018",
            IMG1: "../IMG/ARTICLE IMAGES/WORK/marche.jpg",
            IMG2: "../IMG/ARTICLE IMAGES/WORK/marche2.png"
        },
        {
            TITLE: "McDonald's employee",
            LOCATION: "Epernay (51) /",
            SUBTITLE: "McDonald's",
            SMALLDESCRIPTION: "Multi-purpose employee at a McDonald's",
            DESCRIPTION: "I won't drool too long about this job because everybody knows how it\'s like to work for a fast-food restaurant. The main reason I took the gig was because i needed money to go to Ireland for a year to learn english and get a degree.<br> This job was extremely boresome and most interactions with people were boring at best and dehumanizing at worst.<br><br>On the bright side tough, this job taught me resilience and gave me, still to this day, a profound respect for the people who work in these places for their entire life.",
            CHRONO: "October 2018 - July 2019",
            IMG1: "../IMG/ARTICLE IMAGES/WORK/mcdo.jpg",
            IMG2: "../IMG/ARTICLE IMAGES/WORK/mcdo2.jpg"
        },
        {
            TITLE: "CEE file handler",
            LOCATION: "Mardeuil (51) /",
            SUBTITLE: "Scop\'it",
            SMALLDESCRIPTION: "Handling various housework files for customers",
            DESCRIPTION: "When I returned from Ireland earlier than expected (Thanks again, Covid ^^ !) I had to find myself a new job to pay the rent.<br><br>I randomly found an add for a gig as a \"file handler\" which wouldn't you know became one of the greatest job I've done in my life.<br><br>The bulk of the work was to help people (including professionals) to get financing from the state to renovate their home. During my time in the company I really felt useful and like i was working for a good cause. I helped dozens of people everyday to get money to improve their life at home and every colleague was quite nice. <br>This was also a special type of company because there was no boss or private shareholders which meant the business was owned directly by its employees. <br>It gave everyone a great sense of responsability and it really made you give the best of yourself.",
            CHRONO: "April 2021 - September 2022",
            IMG1: "../IMG/ARTICLE IMAGES/WORK/scop.jpg",
            IMG2: "../IMG/ARTICLE IMAGES/WORK/scop2.png"
        }
    ]
];

const School_Text_Data = [//texte section scolarité.
    [
        {
            TITLE: "Baccalauréat Professionnel de Vente",
            LOCATION: "Epernay (51) / ",
            SUBTITLE: "Lycée Stéphane Hessel",
            MENTION: "BIEN",
            SMALLDESCRIPTION: "Bac de Vente avec multiples stages.",
            DESCRIPTION: "J\'ai passé mes années de lycée dans l\établissement \"Stéphane-Hessel\" d\'Epernay dans la marne.<br>Rien de spécial à dire concernant cette période. En effet suite à une sélection de filière plus par dépit que réelle envie, je me suis retrouvé en Bac Professionnel de Vente.<br>Ce type de diplôme ne formant absolument pas ses élèves dans les matières scientifiques, je passais le plus clair de mon temps à m'ennuyer et tuer le temps.<br> Un avantage à pouvoir avoir de bonnes notes sans travailler aura été que je pouvais continuer de me cultiver dans les milieu qui m\'intéressait, notamment l'astronomie et les sciences informatique.Malheureusement ces années auront aussi été celles où j\'aurais fait le plus de décisions insensées et parfois dangereuse mais je pense que ce n\'est pas nécessairement une mauvaise chose car cela m\'a donné un certain recul sur le monde et je sais désormais m'adapter dans les milieu où j'évolue.",
            CHRONO: "2018",
            IMG1: "../IMG/ARTICLE IMAGES/SCHOOL/HESSEL.jpg",
            IMG2: "../IMG/ARTICLE IMAGES/SCHOOL/HESSEL2.jpg"
        },
        {
            TITLE: "IELTS de Cambridge",
            LOCATION: "Dublin - Irlande / ",
            SUBTITLE: "Delfin School",
            MENTION: "NA",
            SMALLDESCRIPTION: "Validation du niveau d'anglais niveau académique.",
            DESCRIPTION: "Après avoir travaillé une petite année dans la restauration rapide, je suis parti en Irlande afin d'y prendre quelques cours d'Anglais pour approfondir ma connaissance de la langue et, à terme passer un diplôme de langue me fournissant un justificatif de mon niveau d'Anglais.<br>Cette année fût exceptionnelle de part les rencontres faites sur place ainsi que le climat général du pays.<br>Malheureusement, le fun aura été coupé plus tôt que prévu à cause du Covid et de la fermeture des frontières. Il fut alors plus judicieux de quitter le pays avant la fermeture mais j\'ai tout de même pu passer l'examen avant de repartir. Sans la possibilité de reprendre mes études en France, je serais très probablement resté en Irlande car ce pays m\'a réellement beaucoup plu.",
            CHRONO: "2020",
            IMG1: "../IMG/ARTICLE IMAGES/SCHOOL/dublin1.jpg",
            IMG2: "../IMG/ARTICLE IMAGES/SCHOOL/dublin2.webp"
        },
        {
            TITLE: "BUT Réseaux & Télécommunications",
            LOCATION: "Colmar (68) / ",
            SUBTITLE: "IUTC Université de Haute-Alsace",
            MENTION: "NA",
            SMALLDESCRIPTION: "Formation sur 3 ans à temps plein.",
            DESCRIPTION: "Après un peu plus d\'un an à travailler, l'envi de reprendre mes études afin de me diriger vers une carrière plus axée sur mes passions devint de plus en plus prenante.<br> J\'ai alors tenté ma chance via ParcourSup malgré mon cursus scolaire assez déplorable mais j\'ai pourtant eu une place offerte dans ce BUT R&T que j\'ai alors immédiatement prise.<br><br>Je ne sais toujours pas si je suis réellement capable de compléter ce diplôme dans son entièreté mais cela restera quoi qu\'il arrive une très bonne expérience.<br>La plupart des professeurs ont l\'air réellement passionné par leur milieux et on en apprend chaque jour un peu plus sur de multiples sujets qu\'il s\'agisse de Web-Design, de Réseau ou bien de maths bête et mechant. <br>Rarement ai-je été aussi motivé par un projet dans ma vie et j'espère de tout coeur pouvoir le mener à bien.",
            CHRONO: "Actuellement",
            IMG1: "../IMG/ARTICLE IMAGES/SCHOOL/iut1.jpg",
            IMG2: "../IMG/ARTICLE IMAGES/SCHOOL/iut2.webp"  
        }
    ],
    [
        {
            TITLE: "Highschool Sales Degree",
            LOCATION: "Epernay (51) / ",
            SUBTITLE: "Lycée Stéphane Hessel",
            MENTION: "GOOD",
            SMALLDESCRIPTION: "Sales degree with multiple internships",
            DESCRIPTION: "I\'ve been to \"Stephane-hessel\"\'s highschool in Epernay (France).<br>Nothing special to say about the courses in and out of itself, I did a professionnal curriculum not really by choice but more by default.<br> Safe to say it wasn\'t really interesting because most of the courses were based on sales technics and all but I was always more interested in sciences and technology.<br>Back then i used to spend most of my time being bored and trying to find ways to kill time with friends wich often led to bad decisions.<br> Even tough these years weren\'t the most productive of my life it still allowed me to take a step back on everything and nowadays i know the value of work because it\'s not that fun to just stroll along waiting for the next thing.",
            CHRONO: "2018",
            IMG1: "../IMG/ARTICLE IMAGES/SCHOOL/HESSEL.jpg",
            IMG2: "../IMG/ARTICLE IMAGES/SCHOOL/HESSEL2.jpg"
        },
        {
            TITLE: "IELTS of Cambridge",
            LOCATION: "Dublin Ireland / ",
            SUBTITLE: "Delfin School",
            MENTION: "NA",
            SMALLDESCRIPTION: "International test designed to gage one's english level",
            DESCRIPTION: "After working for a few months in the fast-food industry I finally made enough money to go study English in Ireland, visit the country and get a degree.<br>This year was simply amazing, I\'ve met lots of great people and to live in another country was a great experience. Everyday you get to discover new stuff and every place in the country-side is just mind-blowingly beautiful.<br>Unfortunately i had to cut my stay early because of covid and countries closing down borders. I still managed to pass my exams early to get my english degree before leaving.<br>Hadn\'t I had the chance to continue school in France I most likely would\'ve stayed there because i really enjoyed the country.",
            CHRONO: "2020",
            IMG1: "../IMG/ARTICLE IMAGES/SCHOOL/dublin1.jpg",
            IMG2: "../IMG/ARTICLE IMAGES/SCHOOL/dublin2.webp" 
        },
        {
            TITLE: "Bachelor in Networks & Telecommunications",
            LOCATION: "Colmar (68) / ",
            SUBTITLE: "IUTC Haute-Alsace's University",
            MENTION: "NA",
            SMALLDESCRIPTION: "Full-time school during 3 years.",
            DESCRIPTION: "After another year and a half working, I really started to look into getting back to school to get a higher degree that would allow me to work in something I love. Something related to computer sciences for example.<br> I applied for a bachelor in Networks and Telecommunications in Colmar (France) and I got a spot offered even tough i was sure this would be impossible given my flawed scholar curriculum.<br>I still don\'t know if I\'ll be able to get my degree but one thing is for sure, i truly love learning new things everyday. Everything from Web-design to networks to electronics really gives us a wide range of skills to learn and even tough it is hard, I don\'t regret one second trying it out !",
            CHRONO: "Pending",
            IMG1: "../IMG/ARTICLE IMAGES/SCHOOL/iut1.jpg",
            IMG2: "../IMG/ARTICLE IMAGES/SCHOOL/iut2.webp"
        }
    ]
];

const Hobbies_Text_Data = [//texte section Hobbies.
    {
        PARAGRAPH1: "",
        PARAGRAPH2: "",
        PARAGRAPH3: "",
        IMAGE1: "",
        IMAGE2: "",
        IMAGE3: ""
    },
    {
        PARAGRAPH1: "",
        PARAGRAPH2: "",
        PARAGRAPH3: "",
        IMAGE1: "",
        IMAGE2: "",
        IMAGE3: "",
    }
];

const About_Text_Data = [//texte section Hobbies.
    {
        PHONE: "Numéro de téléphone : ",
        PHONEDATA: "0601020304",
        MAIL: "Adresse de courriel : ",
        MAILDATA: "owen.Fake@gmail.com",
        LINKEDIN: ""//ADD LINKEDIN IMAGE HERE !! Then associate it to main Ld page
    },
    {
        PHONE: "Phone number : ",
        PHONEDATA: "0601020304",
        MAIL: "Email address : ",
        MAILDATA: "owen.Fake@gmail.com",
        LINKEDIN: ""//ADD LINKEDIN IMAGE HERE !! Then associate it to main Ld page
    }
];





