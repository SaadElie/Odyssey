var config = {
    style: 'mapbox://styles/eliesaad/cllcbompg00uc01p87s8f7po9',
    accessToken: 'pk.eyJ1IjoiZWxpZXNhYWQiLCJhIjoiY2xsMTk4NnhzMG9jbDNkcXJxMnVza2ZlMCJ9.1S_za7Io6GuiWjkv8yEjpw',
    showMarkers: false,
    theme: 'dark',
    title: '',
    subtitle: '',
    byline: '',
    footer: 'BETA VERSION, Imagined by Laura Kautzberg and Elie Saad',
    chapters: [
        {
            id: 'Introduction',
            alignment: 'right',
            title: 'Welcome to the Odyssey 4.0',
            description: 'The gods are outraged, locked in conflict amongst themselves, and their celestial battles spill onto the Earth. The Trojan War not only cleaved mortals apart but also fractured the unity of the divine pantheon. Wielding their mighty powers, they reshape the very fabric of the world we know. Poseidon, with aspirations of extending his dominion, commands the waters to rise, asserting his influence over the seas. Zeus, in response, conjures more potent storms, countering the efforts of Demeter, who nurtures the land. Hera, too, employs her divine authority to disrupt birthrates and marriages among the supporters of rival deities. Athena seizes upon the chaos to foment conflict and spread the flames of war. Meanwhile, Hades sits upon his infernal throne, the gates of the underworld yawning wide to receive the flood of refugees fleeing the turmoil of the surface world. In this unprecedented exodus, the lower realms offer an escape, a refuge from the trials of the upper world. The balance of power has shifted, and the realm below emerges as a sanctuary, casting its somber allure over those seeking solace.',
            location: {
                center: [15.898, 36.647],
                zoom: 4.5,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'A',
                    opacity: 0
                },
                {
                    layer: 'B',
                    opacity: 0
                },
                {
                    layer: 'C',
                    opacity: 0
                },
                {
                    layer: 'D',
                    opacity: 0
                },
                {
                    layer: 'E',
                    opacity: 0
                },
                {
                    layer: 'F',
                    opacity: 0
                },
                {
                    layer: 'J',
                    opacity: 0
                }
            ],
            onChapterExit: [],
        },
        {
            id: 'Chapter I',
            alignment: 'left',
            title: '',
            image: '',
            description: '',
            class: 'pause-here',
            location: {
                center: [26.293, 39.963],
                zoom: 6.62,
                pitch: 55.50,
                bearing: -7.20
            },
            onChapterEnter: [
                {
                    layer: 'A',
                    opacity: 0.9
                }
            ],
            onChapterExit: [],
        },
        {
            id: 'Chapter IA',
            alignment: 'left',
            title: 'Everything to get home',
            image: '',
            description: "Meanwhile, on the mortal lands, one of the longest and deadliest wars comes to an end. After ten years, the Trojan War reaches its conclusion, and Odysseus's intricate plan proves successful. Cunningly constructing the deceptive horse while sacrificing a portion of the Greek fleet, they achieve victory. However, a decade is a period profound enough to transform the world. The lush forest canopy that once adorned Greece has dwindled, and the resources needed to <a href='https://joint-research-centre.ec.europa.eu/jrc-news-and-updates/scientists-estimate-2095-forest-services-will-decrease-average-52-europes-mediterranean-area-2023-04-20_en'>rebuild the fleet and embark on the journey home have become scarce</a>. Former allies now stand as adversaries as Greek commanders clash, staining the sun-kissed shores of Troy with fresh blood. Everyone seeks new resources to build a fleet for the journey home.",
            location: {
                center: [26.293, 39.963],
                zoom: 6.62,
                pitch: 55.50,
                bearing: -7.20
            },
            onChapterEnter: [
                {
                    layer: 'A',
                    opacity: 0.9
                }
            ],
            onChapterExit: [],
        },
        {
            id: 'Chapter IAB',
            alignment: 'left',
            title: '',
            image: '',
            description: '',
            class: 'pause-here',
            location: {
                center: [24.9037, 40.99],
                zoom: 11,
                pitch: 70.00,
                bearing: 0.80
            },
            onChapterEnter: [
                {
                    layer: 'A',
                    opacity: 0.9
                }
            ],
            onChapterExit: [],
        },
        {
            id: 'Chapter IAB',
            alignment: 'left',
            title: 'Book IX - Land of the Cicones',
            image: '',
            description: "<p>So they set sail, departing for Ithaca, their hometown, a marvelous and prosperous city embraced by lavish greenery. Surprisingly, a storm strikes them, diverting their course and taking them to Thrace, the Land of the Cicones.</p> <em>When I had set sail thence the wind took me first to Ismarus, which is the city of the Cicons. There I sacked the town and put the people to the sword. We took their wives and also much booty, which we divided equitably amongst us so that none might have reason to complain. I then said that we had better make off at once, but my men very foolishly would not obey me, so they stayed there <span class='previous'>drinking much wine</span><span class='newtext'> drinking wine, not knowing that it is much stronger with a more acidic taste</span> and killing great numbers of sheep and oxen on the seashore.</em>",
            location: {
                center: [24.9037, 40.99],
                zoom: 6,
                pitch: 40.00,
                bearing: 159.80
            },
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'Chapter IIA',
            alignment: 'right',
            title: '',
            image: '',
            description: '',
            class: 'pause-here',
            location: {
                center: [25.0, 38.2],
                zoom: 6,
                pitch: 40.00,
                bearing: 159.80
            },
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'Chapter II',
            alignment: 'right',
            title: 'Book IX - Lotus eaters',
            image: '',
            description: 'Battered yet determined, Odysseus rallied his men and set sail once more. Likely navigating south along the Thracian coast, they sought refuge in calmer waters to regroup. Trusting the tranquil Mediterranean climate, they surrendered to the guidance of the wind. However, the capricious breeze led them astray to the land of the lotus-eaters.',
            location: {
                center: [13.879, 35.751],
                zoom: 6,
                pitch: 35.00,
                bearing: 146.80
            },
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'Chapter IIIA',
            alignment: 'left',
            title: '',
            image: '',
            description: '',
            class: 'pause-here',
            location: {
                center: [10.879, 33.751],
                zoom: 8,
                pitch: 62.00,
                bearing: -70.00
            },
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'Chapter III',
            alignment: 'left',
            title: 'Book IX - Cyclope Island',
            image: '',
            description: "<em><span class='previous'>I was driven thence by foul winds for a space of nine days upon the sea, but on the tenth day</span> we reached the land of the Lotus-eaters, who live on a food that comes from a kind of flower. <span class='previous'>Here we landed to take in fresh water</span>, and our crews got their mid-day meal on the shore near the ships. <span class='newtext'>Gone are the days when this journey would have taken a few days. Anemoi, the Greek god of wind, is exhausted by the wars of Olympus, and <a href='https://e360.yale.edu/features/global-stilling-is-climate-change-slowing-the-worlds-wind'>barely throws enough wind power</a> to move the ship. The crew is exhausted, and we even lost some men on this long trip. Here we landed, hoping to get some fresh water, however, <a href='https://www.unep.org/unepmap/resources/factsheets/climate-change'>only a few streams were left on the island</a>, heavily guarded. The men had to give up all their golden coins and some of their weapons to refill their water pouches, and had to taste the forbidden lotus.</span></em>",
            location: {
                 center: [10.879, 33.751],
                zoom: 10,
                pitch: 45.00,
                bearing: 246.80
            },
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'CHAPTER IVA',
            alignment: 'right',
            title: '',
            image: '',
            description: '',
            class: 'pause-here',
            location: {
                center: [14.352, 36.029],
                zoom: 9,
                pitch: 60,
                bearing: 25.80
            },
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'CHAPTER IV',
            alignment: 'right',
            title: 'Book X - Aeolian island',
            image: '',
            description: 'Aeolus entertained me for a whole month asking me questions all the time about Troy, the Argive fleet, and the return of the Achaeans. I told him exactly how everything had happened, and when I said I must go, and asked him to further me on my way, he made no sort of difficulty, but set about doing so at once. Moreover, he flayed me a prime ox-hide to hold the ways of the roaring winds, which he shut up in the hide as in a sack—for Jove had made him captain over the winds, and he could stir or still each one of them according to his own pleasure. He put the sack in the ship and bound the mouth so tightly with a silver thread that not even a breath of a side-wind could blow from any quarter. The West wind which was fair for us did he alone let blow as it chose; but it all came to nothing, for we were lost through our own folly.',
            location: {
                center: [12.020, 36.765],
                zoom: 12,
                pitch: 65,
                bearing: 0.80
            },
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'CHAPTER VA',
            alignment: 'left',
            title: '',
            image: '',
            description: '',
            class: 'pause-here',
            location: {
                center: [12.020, 36.765],
                zoom: 6.5,
                pitch: 40,
                bearing: 47.80
            },
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'CHAPTER V',
            alignment: 'left',
            title: 'Book XI - Circe\'s Island',
            image: '',
            description: 'Thence we sailed sadly on, glad to have escaped death, though we had lost our comrades, and came to the Aeaean island, where Circe lives—a great and cunning goddess who is own sister to the magician Aeetes—for they are both children of the sun by Perse, who is daughter to Oceanus. We brought our ship into a safe harbour without a word, for some god guided us thither, and having landed we lay there for two days and two nights, worn out in body and mind. When the morning of the third day came I took my spear and my sword, and went away from the ship to reconnoitre, and see if I could discover signs of human handiwork, or hear the sound of voices. Climbing to the top of a high look-out I espied the smoke of Circe’s house rising upwards amid a dense forest of trees, and when I saw this I doubted whether, having seen the smoke, I would not go on at once and find out more, but in the end I deemed it best to go back to the ship, give the men their dinners, and send some of them instead of going myself.',
            location: {
                center: [2.9633, 39.6045],
                zoom: 6.5,
                pitch: 40,
                bearing: 47.80
            },
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'Chapter VIA',
            alignment: 'right',
            title: '',
            image: '',
            description: '',
            class: 'pause-here',
            location: {
                center: [2.9633, 39.6045],
                zoom: 8.5,
                pitch: 54.00,
                bearing: -25.00
            },
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'Chapter VI',
            alignment: 'right',
            title: 'Book XI - Circe\'s Island',
            image: '',
            description: 'When I had nearly got back to the ship some god took pity upon my solitude, and sent a fine antlered stag right into the middle of my path. He was coming down his pasture in the forest to drink of the river, for the heat of the sun drove him, and as he passed I struck him in the middle of the back; the bronze point of the spear went clean through him, and he lay groaning in the dust until the life went out of him. Then I set my foot upon him, drew my spear from the wound, and laid it down; I also gathered rough grass and rushes and twisted them into a fathom or so of good stout rope, with which I bound the four feet of the noble creature together; having so done I hung him round my neck and walked back to the ship leaning upon my spear, for the stag was much too big for me to be able to carry him on my shoulder, steadying him with one hand. As I threw him down in front of the ship, I called the men and spoke cheeringly man by man to each of them. ‘Look here my friends,’ said I, ‘we are not going to die so much before our time after all, and at any rate we will not starve so long as we have got something to eat and drink on board.’ On this they uncovered their heads upon the sea shore and admired the stag, for he was indeed a splendid fellow. Then, when they had feasted their eyes upon him sufficiently, they washed their hands and began to cook him for dinner.',
            location: {
                center: [9.232, 40],
                zoom: 6.5,
                pitch: 54.00,
                bearing: -25.00
            },
            onChapterEnter: [],
            onChapterExit: [],
        },

        {
            id: 'Chapter VI',
            alignment: 'right',
            title: '',
            image: '',
            description: '',
            class: 'pause-here',
            location: {
                center: [9.232, 40],
                zoom: 11,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'Chapter VIB',
            alignment: 'right',
            title: 'Ithaca - Back home ?',
            image: '',
            description: 'To be defined',
            location: {
                center: [19.78472, 39.7331],
                zoom: 8.5,
                pitch: 54.00,
                bearing: 70.00
            },
            onChapterEnter: [],
            onChapterExit: [],
        },

        {
            id: 'Chapter VII',
            alignment: 'right',
            title: 'World 4.0',
            description: 'What about you ? would you be able to survive the World 4.0 ? This word is not that much of a iagination as you think. The war between the gods is actually based on the changes that a +4 degrees of the surface of the Earth will bring upon our wrold.',
            location: {
                center: [15.8125, 35.5812],
                zoom: 11,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: [],
        },
    ]
};
