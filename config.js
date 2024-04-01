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
            description: 'The gods, outraged and locked in conflict amongst themselves, spill their celestial battles onto Earth. The Trojan War, a devastating event for mortals, also fractures the unity of the divine pantheon. With their mighty powers, they reshape the world we know. Poseidon, aspiring to extend his dominion, commands the waters to rise, asserting influence over the seas. Zeus, in response, conjures more potent storms, countering the efforts of Demeter, who nurtures the land. Hera, too, employs her divine authority to disrupt birthrates and marriages amongst the supporters of rival deities. Athena seizes upon the chaos to foment conflict and spread the flames of war. Meanwhile, Hades sits upon his infernal throne, the gates of the underworld yawning wide to receive the flood of refugees fleeing the turmoil of the surface world. In this unprecedented exodus, the lower realms offer escape and refuge from the trials of the upper world. The balance of power shifts, and the realm below emerges as a sanctuary, casting its somber allure over those seeking solace.',
            location: {
                center: [39.8, 22.2],
                zoom: 4.5,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'flaura-ci8bmy',
                    opacity: 0
                },
                {
                    layer: 'fauna-4guvtp',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'flaura-ci8bmy',
                    opacity: .95
                },
                {
                    layer: 'fauna-4guvtp',
                    opacity: .95
                }
            ]
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

        },
        {
            id: 'Introduction A',
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
        },
        {
            id: 'Chapter IA',
            alignment: 'left',
            title: 'Thrace (Land of the Cicones)',
            image: '',
            description: "<p>So they set sail, departing for Ithaca, their hometown, a marvelous and prosperous city embraced by lavish greenery. Surprisingly, a storm strikes them, diverting their course and taking them to Thrace, the Land of the Cicones.</p> <em>When I had set sail thence the wind took me first to Ismarus, which is the city of the Cicons. There I sacked the town and put the people to the sword. We took their wives and also much booty, which we divided equitably amongst us so that none might have reason to complain. I then said that we had better make off at once, but my men very foolishly would not obey me, so they stayed there <span class='previous'>drinking much wine</span><span class='newtext'> drinking wine, not knowing that it is much stronger with a more acidic taste</span> and killing great numbers of sheep and oxen on the seashore.</em>",
            location: {
                center: [26.293, 39.963],
                zoom: 6.62,
                pitch: 55.50,
                bearing: -7.20
            },

        },
        {
            id: 'Chapter IAA',
            alignment: 'left',
            title: '',
            image: '',
            description: 'Battered yet determined, Odysseus rallied his men and set sail once more. Likely navigating south along the Thracian coast, they sought refuge in calmer waters to regroup. Trusting the tranquil Mediterranean climate, they surrendered to the guidance of the wind. However, the capricious breeze led them astray to the land of the lotus-eaters.',
            location: {
                center: [26.293, 39.963],
                zoom: 6.62,
                pitch: 55.50,
                bearing: -7.20
            },

        },
        {
            id: 'Chapter IAB',
            alignment: 'left',
            title: '',
            image: '',
            description: '',
            class: 'pause-here',
            location: {
                center: [24.8420, 38.8403],
                zoom: 8.62,
                pitch: 65.50,
                bearing: -24.20
            },

        },
        {
            id: 'Chapter IAB',
            alignment: 'left',
            title: 'Lotus Eaters',
            image: '',
            description: "<em><span class='previous'>I was driven thence by foul winds for a space of nine days upon the sea, but on the tenth day</span> we reached the land of the Lotus-eaters, who live on a food that comes from a kind of flower. <span class='previous'>Here we landed to take in fresh water</span>, and our crews got their mid-day meal on the shore near the ships. <span class='newtext'>Gone are the days when this journey would have taken a few days. Anemoi, the Greek god of wind, is exhausted by the wars of Olympus, and <a href='https://e360.yale.edu/features/global-stilling-is-climate-change-slowing-the-worlds-wind'>barely throws enough wind power</a> to move the ship. The crew is exhausted, and we even lost some men on this long trip. Here we landed, hoping to get some fresh water, however, <a href='https://www.unep.org/unepmap/resources/factsheets/climate-change'>only a few streams were left on the island</a>, heavily guarded. The men had to give up all their golden coins and some of their weapons to refill their water pouches, and had to taste the forbidden lotus.</span></em>",
            location: {
                center: [24.8420, 38.8403],
                zoom: 8.62,
                pitch: 65.50,
                bearing: -24.20
            },

        },
        {
            id: 'Chapter IIA',
            alignment: 'right',
            title: '',
            image: '',
            description: '',
            class: 'pause-here',
            location: {
                center: [21.69608, 36.91334],
                zoom: 11,
                pitch: 65.00,
                bearing: 146.80
            },

        },
        {
            id: 'Chapter II',
            alignment: 'right',
            title: 'TELEMACHUS AND NESTOR',
            image: '',
            description: 'As Telemachus approaches the island\'s\ shore, a wave of uncertainty washes over him, casting doubt upon his navigational skills. Before him stands an island starkly different from the lush paradise his father Odysseus had once vividly described. Gone are the enchanting visions of heavenly greens; instead, the landscape is marred by the relentless grip of Poseidon\'s\ wrath. The very waters that once cradled golden beaches now churn ominously, and a fiery inferno consumes the once-verdant tree canopy. The tumultuous storms of the ongoing Olympian conflict have left an indelible mark, as flames, stoked by divine turmoil, have consumed vast swathes of the land with their merciless ferocity, their intensity having surged by XX%. The island, once a bustling haven of diverse fauna and flourishing flora, a hub of thriving trade, now stands as a desolate threshold, a harbinger of the netherworld\'s\ grip upon the realm.',
            location: {
                center: [21.69608, 36.91334],
                zoom: 11,
                pitch: 65.00,
                bearing: 146.80
            },

        },
        {
            id: 'Chapter IIIA',
            alignment: 'left',
            title: '',
            image: '',
            description: '',
            class: 'pause-here',
            location: {
                center: [24.8159, 35.2075],
                zoom: 7,
                pitch: 54.00,
                bearing: -50.00
            },

        },
        {
            id: 'Chapter III',
            alignment: 'left',
            title: 'THE ISLAND OF XXX',
            image: '',
            description: 'A short ride along the Schuylkill River Trail from the Art Museum, Belmont is a twisty, log-ridden rollercoaster of a trail network. It is easy to get turned around, the underbrush is at times impenetrable, and short steep sections come out of nowhere. In other words, it\'s really fun',
            location: {
                center: [24.8159, 35.2075],
                zoom: 7,
                pitch: 54.00,
                bearing: -50.00
            },

        },
        {
            id: 'CHAPTER IVA',
            alignment: 'right',
            title: '',
            image: '',
            description: '',
            class: 'pause-here',
            location: {
                center: [10.84827, 33.83589],
                zoom: 9.5,
                pitch: 65,
                bearing: 12.80
            },

        },
        {
            id: 'CHAPTER IV',
            alignment: 'right',
            title: 'THE LOCUS EATER LAND',
            image: '',
            description: 'This steep, rocky gorge can be surprisingly technical. Follow the orange and yellow trails to repeatedly climb and descend through the schist hillsides (careful of the cliffs), or stick to the gravel Forbidden Drive for a relaxing ride along the creek. You\'ll forget you\'re in a city.',
            location: {
                center: [10.84827, 33.83589],
                zoom: 9.5,
                pitch: 65,
                bearing: 12.80
            },

        },
        {
            id: 'CHAPTER VA',
            alignment: 'left',
            title: '',
            image: '',
            description: '',
            class: 'pause-here',
            location: {
                center: [2.9633, 39.6045],
                zoom: 6.5,
                pitch: 40,
                bearing: 47.80
            },

        },
        {
            id: 'CHAPTER V',
            alignment: 'left',
            title: 'THE BATI5',
            image: '',
            description: 'Pennypack is a great introduction trail system. Not too steep and not too technical, the beautiful wooded park also provides a great escape from urban life. The south side trails are originally bridle trails, so be nice to equestrians and dismount when you approach them.',
            location: {
                center: [2.9633, 39.6045],
                zoom: 6.5,
                pitch: 40,
                bearing: 47.80
            },

        },
        {
            id: 'Chapter VIA',
            alignment: 'right',
            title: '',
            image: '',
            description: '',
            class: 'pause-here',
            location: {
                center: [12.414, 40.073],
                zoom: 6.5,
                pitch: 54.00,
                bearing: -25.00
            },

        },
        {
            id: 'Chapter VI',
            alignment: 'right',
            title: 'THE ISLAND OF XXX',
            image: '',
            description: 'A short ride along the Schuylkill River Trail from the Art Museum, Belmont is a twisty, log-ridden rollercoaster of a trail network. It is easy to get turned around, the underbrush is at times impenetrable, and short steep sections come out of nowhere. In other words, it\'s really fun',
            location: {
                center: [12.414, 40.073],
                zoom: 6.5,
                pitch: 54.00,
                bearing: -25.00
            },

        },

        {
            id: 'Chapter VII',
            alignment: 'right',
            title: 'World 4.0',
            description: 'What about you ? would you be able to survive the World 4.0 ? This word is not that much of a imagination as you think. The war between the gods is actually based on the changes that a +4 degrees of the surface of the Earth will bring upon our wrold.',
            location: {
                center: [15.8125, 35.5812],
                zoom: 11,
                pitch: 0.00,
                bearing: 0.00
            },
        },

    ]
};
