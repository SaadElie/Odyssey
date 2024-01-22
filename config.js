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
            id: 'Chapter IA',
            alignment: 'left',
            title: 'HOME',
            image: '',
            description: 'The Trojan War reached its conclusion, and Odysseus\'s\ intricate plan proved successful. They cunningly constructed the deceptive horse even as they sacrificed a portion of the Greek fleet. However, a decade is a span of time profound enough to transform the very world. The lush forest canopy that once adorned Greece has dwindled by XX%. The resources needed for rebuilding the fleet and embarking on the journey home have become scarce. Those who were allies just yesterday now stand as adversaries, as Greek commanders clash, staining the sun-kissed shores of Troy with fresh blood. Employing yet another artful stratagem, Odysseus orchestrates the dissolution of the Greek right wing.',
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
            title: 'HOME',
            image: '',
            description: 'He bides his time, waiting for the cloak of night to fall before dispatching his men to execute a stealthy maneuver: the substitution of olive oil with XXXX. The soldiers of the right wing, once nourished by the richness of olive oil, have long been deprived of its taste. This precious substance has become a rarity in the wake of the gods\'\ tumultuous conflict; its production plummeted, rendering it scarce. Having successfully purloined a ship, Odysseus and his steadfast crew set sail for Ithaca. Their journey unfolds aboard a vessel crafted from timber that never had the chance to reach its full glory, hewn prematurely from trees denied the opportunity to unveil their complete strength. ',
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
            description: 'What about you ? would you be able to survive the World 4.0 ? This word is not that much of a iagination as you think. The war between the gods is actually based on the changes that a +4 degrees of the surface of the Earth will bring upon our wrold.',
            location: {
                center: [15.8125, 35.5812],
                zoom: 11,
                pitch: 0.00,
                bearing: 0.00
            },
        },

    ]
};
