import { enrichCircuit } from './contentBuilder.js';

/** Flagship catalogue only — curated important circuits. */
const KEEP_SLUGS = new Set([
  'marrakech-merzouga-3-jours',
  'marrakech-merzouga-4-jours',
  'marrakech-erg-chigaga',
  'fes-merzouga',
  'casablanca-merzouga',
  'casablanca-rabat-meknes-fes-marrakech',
  'casablanca-rabat-meknes-fes',
  'marrakech-fes',
  'circuit-chefchaouen',
  'circuit-tanger',
  'trek-toubkal',
  'circuit-essaouira',
  'excursion-essaouira',
  'excursion-ouzoud',
  'excursion-ourika-journee',
  'excursion-ait-ben-haddou',
]);

const allCircuits = [
  {
    "imageWidth": 1400,
    "imageHeight": 900,
    "featured": true,
    "blogLinks": [
      {
        "title": "Guide ultime pour visiter Marrakech",
        "path": "/blog/ultimate-guide-visiting-marrakech-2025"
      },
      {
        "title": "Trekking à dos de chameau dans le Sahara",
        "path": "/blog/camel-trekking-sahara-what-to-expect"
      },
      {
        "title": "Cuisine marocaine : 15 plats à goûter",
        "path": "/blog/moroccan-cuisine-15-dishes-you-must-try"
      }
    ],
    "touristType": [
      "Voyageurs",
      "Couples",
      "Familles"
    ],
    "slug": "marrakech-merzouga-3-jours",
    "category": "desert",
    "h1": "Circuit Marrakech Merzouga 3 jours",
    "title": "Marrakech – Merzouga en 3 jours",
    "metaTitle": "Circuit Marrakech Merzouga 3 jours Sahara – circuit Maroc",
    "metaDescription": "Partez 3 jours de Marrakech à Merzouga : Atlas, kasbahs, dunes d’Erg Chebbi, dromadaires et bivouac berbère. Circuit désert privé toute l’année.",
    "keywords": [
      "Marrakech Merzouga 3 jours",
      "circuit désert Maroc",
      "Erg Chebbi",
      "bivouac Sahara"
    ],
    "shortDescription": "Le grand classique en version express : traversez l'Atlas, dormez sous les étoiles à Merzouga et revenez à Marrakech en trois jours intenses.",
    "duration": "3 jours / 2 nuits",
    "availability": "Départs quotidiens depuis Marrakech",
    "from": "Marrakech",
    "to": "Marrakech",
    "image": "https://images.unsplash.com/photo-1559586616-361e18714958?w=1400&q=80",
    "imageAlt": "Caravane de dromadaires au coucher du soleil à Merzouga",
    "imageTitle": "Marrakech Merzouga 3 jours",
    "highlights": [
      "Col Tizi n'Tichka (2260 m)",
      "Vallée du Draa et Route des 1000 Kasbahs",
      "Balade dromadaire coucher de soleil",
      "Nuit bivouac berbère",
      "Aït Ben Haddou UNESCO"
    ],
    "included": [
      "Transport privé 4×4",
      "2 nuits (riad + bivouac)",
      "PD et dîners",
      "Balade dromadaire",
      "Guide francophone"
    ],
    "excluded": [
      "Déjeuners",
      "Boissons",
      "Pourboires",
      "Assurance"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Marrakech – Atlas – Merzouga",
        "text": "Départ matinal via Tizi n'Tichka et Aït Ben Haddou. Balade dromadaire et bivouac."
      },
      {
        "day": 2,
        "title": "Merzouga – Todra – Dadès",
        "text": "Lever sur les dunes, gorges du Todra, nuit en kasbah."
      },
      {
        "day": 3,
        "title": "Dadès – Marrakech",
        "text": "Retour par Ouarzazate et le col Tizi n'Tichka."
      }
    ],
    "destinations": [
      {
        "name": "Marrakech",
        "path": "/destinations/marrakech"
      },
      {
        "name": "Merzouga Sahara",
        "path": "/destinations/merzouga-sahara"
      },
      {
        "name": "Atlas Mountains",
        "path": "/destinations/atlas-mountains"
      }
    ],
    "similarSlugs": [
      "marrakech-merzouga-4-jours",
      "marrakech-erg-chigaga",
      "fes-merzouga",
      "circuit-ouarzazate"
    ],
    "fromPrice": 189,
    "rating": {
      "value": 4.9,
      "count": 312
    },
    "hooks": {
      "opening": "En trois jours seulement, ce circuit condense l'essentiel du Sahara depuis Marrakech : le col du Tizi n'Tichka, les kasbahs ocre et la mer de sable d'Erg Chebbi.",
      "routeFocus": "La Route des 1000 Kasbahs prépare le regard à l'immensité des dunes sans détours inutiles.",
      "landscape": "Des sommets enneigés de l'Atlas aux dunes dorées : contraste saisissant en un week-end.",
      "culture": "Musique gnaoua au bivouac, thé nomade et rencontres avec les familles du Tafilalet.",
      "highlight": "La nuit étoilée en bivouac où le silence du Sahara devient palpable.",
      "cuisine": "Tajine aux dattes du Tafilalet et pain cuit sous la braise du bivouac.",
      "whoFor": "Premier contact avec le désert, long week-end ou extension après Marrakech.",
      "seasonNote": "Mars-mai et octobre-novembre idéaux ; éviter la canicule estivale dans l'Atlas.",
      "whyBook": "Sahara Visite optimise les horaires pour maximiser le temps aux dunes.",
      "closing": "Réservez votre Marrakech Merzouga 3 jours — le Sahara en un week-end.",
      "keywordPhrase": "circuit Marrakech Merzouga 3 jours",
      "tips": [
        "Dormez tôt la veille : départ 7h30.",
        "Couche chaude pour la nuit au bivouac."
      ],
      "practical": [
        "Retour Marrakech ~19h jour 3.",
        "Bivouac standard ou luxe."
      ],
      "faqExtra": [
        {
          "question": "Adapté aux enfants ?",
          "answer": "Oui, pauses adaptées et durée dromadaire modulable."
        }
      ],
      "extraParagraphs": [
        "Merzouga reste le Sahara le plus accessible : dunes de 150 m, auberges aux portes du sable. Contrairement à Chigaga, l'équilibre immersion-confort est parfait en 3 jours."
      ]
    }
  },
  {
    "imageWidth": 1400,
    "imageHeight": 900,
    "featured": true,
    "blogLinks": [
      {
        "title": "Guide ultime pour visiter Marrakech",
        "path": "/blog/ultimate-guide-visiting-marrakech-2025"
      },
      {
        "title": "Trekking à dos de chameau dans le Sahara",
        "path": "/blog/camel-trekking-sahara-what-to-expect"
      },
      {
        "title": "Cuisine marocaine : 15 plats à goûter",
        "path": "/blog/moroccan-cuisine-15-dishes-you-must-try"
      }
    ],
    "touristType": [
      "Voyageurs",
      "Couples",
      "Familles"
    ],
    "slug": "marrakech-merzouga-4-jours",
    "category": "desert",
    "h1": "Circuit Marrakech Merzouga 4 jours",
    "title": "Marrakech – Merzouga en 4 jours",
    "metaTitle": "Circuit Marrakech Merzouga 4 jours désert – circuit Maroc",
    "metaDescription": "Circuit 4 jours Marrakech–Merzouga : gorges du Todra, vallée du Dadès, bivouac Erg Chebbi et kasbahs. Rythme confortable, guide francophone privé.",
    "keywords": [
      "Marrakech Merzouga 4 jours",
      "Todra Merzouga",
      "bivouac Erg Chebbi"
    ],
    "shortDescription": "Quatre jours pour savourer l'Atlas, les gorges du Todra et deux nuits au contact du Sahara — le rythme idéal.",
    "duration": "4 jours / 3 nuits",
    "availability": "Départs quotidiens",
    "from": "Marrakech",
    "to": "Marrakech",
    "image": "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1400&q=80",
    "imageAlt": "Dunes Erg Chebbi au lever du soleil",
    "imageTitle": "Marrakech Merzouga 4 jours",
    "highlights": [
      "Tizi n'Tichka",
      "Gorges du Todra (300 m)",
      "Vallée du Dadès",
      "Deux nuits Sahara",
      "Aït Ben Haddou"
    ],
    "included": [
      "Véhicule privé",
      "3 nuits",
      "PD et dîners",
      "Dromadaires",
      "Guide francophone"
    ],
    "excluded": [
      "Déjeuners",
      "Boissons",
      "Pourboires",
      "Assurance"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Marrakech – Aït Ben Haddou – Ouarzazate",
        "text": "Atlas et ksar UNESCO, nuit Ouarzazate."
      },
      {
        "day": 2,
        "title": "Ouarzazate – Todra – Merzouga",
        "text": "Gorges du Todra, bivouac aux dunes."
      },
      {
        "day": 3,
        "title": "Merzouga – Khamlia – Dunes",
        "text": "Musique gnawa, 4×4 dunes, seconde nuit désert."
      },
      {
        "day": 4,
        "title": "Merzouga – Marrakech",
        "text": "Retour Atlas, arrivée Marrakech soir."
      }
    ],
    "destinations": [
      {
        "name": "Marrakech",
        "path": "/destinations/marrakech"
      },
      {
        "name": "Merzouga Sahara",
        "path": "/destinations/merzouga-sahara"
      },
      {
        "name": "Atlas Mountains",
        "path": "/destinations/atlas-mountains"
      }
    ],
    "similarSlugs": [
      "marrakech-merzouga-3-jours",
      "marrakech-erg-chigaga",
      "fes-merzouga",
      "circuit-dades"
    ],
    "fromPrice": 249,
    "rating": {
      "value": 4.9,
      "count": 278
    },
    "hooks": {
      "opening": "Quatre jours offrent le tempo parfait : une nuit aux gorges, une matinée complète aux dunes, retour sans précipitation.",
      "routeFocus": "Todra et Dadès — joyaux souvent sacrifiés sur la version 3 jours — renforcent l'émotion à Merzouga.",
      "landscape": "Falaises du Todra, kasbahs ocre, infini des dunes : progression visuelle remarquable.",
      "culture": "Village de Khamlia, berceau de la musique gnawa, et palmeraie du Tafilalet.",
      "highlight": "Deux levers de soleil sur les dunes pour des lumières différentes.",
      "cuisine": "Déjeuner berbère aux gorges, tajine aux dattes au bivouac.",
      "whoFor": "Sahara complet sans course contre la montre.",
      "seasonNote": "Printemps et automne optimaux ; hiver possible avec couche chaude.",
      "whyBook": "Formules bivouac standard/luxe et nuits désert modulables.",
      "closing": "Optez pour 4 jours et ancrez Merzouga en souvenir profond.",
      "keywordPhrase": "circuit Marrakech Merzouga 4 jours",
      "tips": [
        "Bivouac luxe recommandé.",
        "Todra mieux en matinée."
      ],
      "practical": [
        "3 nuits confirmées avant départ."
      ],
      "faqExtra": [
        {
          "question": "Différence avec 3 jours ?",
          "answer": "Nuit Todra/Dadès en plus et matinée complète à Merzouga."
        }
      ],
      "extraParagraphs": [
        "La vallée du Dadès mérite une nuit : formations « doigts de singe » et kasbahs restaurées."
      ]
    }
  },
  {
    "imageWidth": 1400,
    "imageHeight": 900,
    "featured": false,
    "blogLinks": [
      {
        "title": "Trekking à dos de chameau dans le Sahara",
        "path": "/blog/camel-trekking-sahara-what-to-expect"
      },
      {
        "title": "Cuisine marocaine : 15 plats à goûter",
        "path": "/blog/moroccan-cuisine-15-dishes-you-must-try"
      }
    ],
    "touristType": [
      "Aventuriers",
      "Couples",
      "Photographes"
    ],
    "slug": "marrakech-erg-chigaga",
    "category": "desert",
    "h1": "Circuit Marrakech Erg Chigaga – Grand Désert",
    "title": "Marrakech – Erg Chigaga",
    "metaTitle": "Circuit Marrakech Erg Chigaga Grand Désert – circuit Maroc",
    "metaDescription": "Découvrez Erg Chigaga depuis Marrakech : dunes isolées, piste 4×4, bivouac sauvage et silence du Grand Désert. Voyage Maroc authentique et immersif.",
    "keywords": [
      "Erg Chigaga",
      "Grand Désert Maroc",
      "Marrakech Chigaga"
    ],
    "shortDescription": "Rejoignez les dunes intactes d'Erg Chigaga, le plus grand erg du Maroc, loin des foules de Merzouga.",
    "duration": "4 jours / 3 nuits",
    "availability": "Octobre–avril recommandé",
    "from": "Marrakech",
    "to": "Marrakech",
    "image": "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1400&q=80",
    "imageAlt": "Dunes immenses Erg Chigaga",
    "imageTitle": "Erg Chigaga depuis Marrakech",
    "highlights": [
      "40 km de dunes sauvages",
      "Piste 4×4 via M'Hamid",
      "Bivouac isolé",
      "Lac Iriki",
      "Nomades du Drâa"
    ],
    "included": [
      "4×4 privé",
      "3 nuits",
      "Repas selon formule",
      "Chauffeur pistes",
      "Matelas bivouac"
    ],
    "excluded": [
      "Déjeuners partiels",
      "Boissons",
      "Pourboires",
      "Assurance"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Marrakech – Draa – M'Hamid",
        "text": "Atlas, vallée du Draa, nuit M'Hamid."
      },
      {
        "day": 2,
        "title": "M'Hamid – Piste – Chigaga",
        "text": "3h piste via Iriki, bivouac au cœur des dunes."
      },
      {
        "day": 3,
        "title": "Chigaga – Foum Zguid – Ouarzazate",
        "text": "Lever sur dunes, retour piste."
      },
      {
        "day": 4,
        "title": "Ouarzazate – Marrakech",
        "text": "Col Tizi n'Tichka, fin à Marrakech."
      }
    ],
    "destinations": [
      {
        "name": "Marrakech",
        "path": "/destinations/marrakech"
      },
      {
        "name": "Merzouga Sahara",
        "path": "/destinations/merzouga-sahara"
      },
      {
        "name": "Atlas Mountains",
        "path": "/destinations/atlas-mountains"
      }
    ],
    "similarSlugs": [
      "marrakech-merzouga-4-jours",
      "circuit-mhamid",
      "circuit-zagora",
      "marrakech-merzouga-3-jours"
    ],
    "fromPrice": 389,
    "rating": {
      "value": 4.8,
      "count": 89
    },
    "hooks": {
      "opening": "Erg Chigaga n'est pas Merzouga : 60 km de pistes mènent à 40 km de sable intact, sans foule ni auberges aux pieds des dunes.",
      "routeFocus": "Piste via lac Iriki et hamada : géographie désertique complète (reg, hamada, erg).",
      "landscape": "Dunes de 300 m s'étendant à perte de vue, sable fin orangé sans trace humaine.",
      "culture": "Nomades du Drâa, musique au feu loin de tout artifice touristique.",
      "highlight": "Nuit nomade sans générateur ni lumière artificielle.",
      "cuisine": "Tajine nomade, pain sand-baked, thé au bois de tamaris.",
      "whoFor": "Aventuriers ayant déjà vu Merzouga ou cherchant l'isolement.",
      "seasonNote": "Octobre–avril uniquement ; pistes impraticables en cas de pluie hivernale.",
      "whyBook": "Chauffeurs 4×4 certifiés pistes Chigaga.",
      "closing": "Chigaga si vous voulez le Sahara sauvage, pas postcard.",
      "keywordPhrase": "circuit Marrakech Erg Chigaga",
      "tips": [
        "Chargez batteries avant M'Hamid.",
        "Foulard et lunettes anti-sable."
      ],
      "practical": [
        "Piste 3h minimum chaque sens."
      ],
      "faqExtra": [
        {
          "question": "Chigaga ou Merzouga ?",
          "answer": "Merzouga pour première fois ; Chigaga pour dunes intactes et isolement total."
        }
      ],
      "extraParagraphs": [
        "Le lac Iriki asséché témoigne des mutations climatiques avant l'apparition des dunes de Chigaga."
      ]
    }
  },
  {
    "imageWidth": 1400,
    "imageHeight": 900,
    "featured": false,
    "blogLinks": [
      {
        "title": "Guide ultime pour visiter Marrakech",
        "path": "/blog/ultimate-guide-visiting-marrakech-2025"
      },
      {
        "title": "Trekking à dos de chameau dans le Sahara",
        "path": "/blog/camel-trekking-sahara-what-to-expect"
      },
      {
        "title": "Cuisine marocaine : 15 plats à goûter",
        "path": "/blog/moroccan-cuisine-15-dishes-you-must-try"
      }
    ],
    "touristType": [
      "Voyageurs",
      "Couples",
      "Familles"
    ],
    "slug": "fes-merzouga",
    "category": "desert",
    "h1": "Circuit Fès Merzouga",
    "title": "Fès – Merzouga",
    "metaTitle": "Circuit Fès Merzouga désert et Moyen Atlas – circuit Maroc",
    "metaDescription": "De Fès à Merzouga via le Moyen Atlas et la vallée du Ziz : dunes d’Erg Chebbi, dromadaires et bivouac. Circuit Sahara au départ de Fès, privé.",
    "keywords": [
      "Fès Merzouga",
      "circuit Fès désert",
      "Ziz Merzouga"
    ],
    "shortDescription": "Depuis Fès, descendez vers le Sahara via Ifrane, Azrou et la spectaculaire vallée du Ziz.",
    "duration": "4 jours / 3 nuits",
    "availability": "Départs depuis Fès",
    "from": "Fès",
    "to": "Fès",
    "image": "https://images.unsplash.com/photo-1559586616-361e18714958?w=1400&q=80",
    "imageAlt": "Dromadaires Merzouga",
    "imageTitle": "Fès Merzouga",
    "highlights": [
      "Ifrane et Azrou",
      "Gorges du Ziz",
      "Merzouga Erg Chebbi",
      "Todra et Dadès",
      "Retour Moyen Atlas"
    ],
    "included": [
      "Transport privé",
      "3 nuits",
      "PD et dîners",
      "Dromadaires",
      "Guide francophone"
    ],
    "excluded": [
      "Déjeuners",
      "Boissons",
      "Pourboires"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Fès – Ifrane – Midelt",
        "text": "Moyen Atlas, cèdres d'Azrou."
      },
      {
        "day": 2,
        "title": "Midelt – Ziz – Merzouga",
        "text": "Gorges du Ziz, bivouac."
      },
      {
        "day": 3,
        "title": "Merzouga – Todra – Dadès",
        "text": "Dunes matin, gorges et kasbahs."
      },
      {
        "day": 4,
        "title": "Dadès – Fès",
        "text": "Retour par le Moyen Atlas."
      }
    ],
    "destinations": [
      {
        "name": "Fès",
        "path": "/destinations/fes"
      },
      {
        "name": "Merzouga Sahara",
        "path": "/destinations/merzouga-sahara"
      },
      {
        "name": "Atlas Mountains",
        "path": "/destinations/atlas-mountains"
      }
    ],
    "similarSlugs": [
      "marrakech-merzouga-4-jours",
      "casablanca-merzouga",
      "marrakech-fes",
      "circuit-todra"
    ],
    "fromPrice": 279,
    "rating": {
      "value": 4.8,
      "count": 156
    },
    "hooks": {
      "opening": "Depuis Fès, le Sahara s'approche par le nord-est sans passer par Marrakech — idéal si votre voyage commence dans la capitale spirituelle.",
      "routeFocus": "La vallée du Ziz serpente entre falaises ocre : plus belle approche du Sahara par l'est.",
      "landscape": "Cèdres d'Azrou aux dunes de Merzouga : coupe transversale du Maroc oriental.",
      "culture": "De l'érudition des medersas fassies à la sagesse nomade du Tafilalet.",
      "highlight": "Vue depuis le col du Ziz sur la palmeraie en contrebas.",
      "cuisine": "Pastilla fassie, tajine aux dattes d'Erfoud, thé nomade.",
      "whoFor": "Voyageurs arrivant à Fès souhaitant le désert sans retour Marrakech.",
      "seasonNote": "Neige possible à Ifrane en hiver ; floraison amandiers au printemps dans le Ziz.",
      "whyBook": "Arrêts photo aux meilleurs points de vue du Ziz.",
      "closing": "Liez Fès impériale et Merzouga saharien en un voyage cohérent.",
      "keywordPhrase": "circuit Fès Merzouga",
      "tips": [
        "Visitez Fès la veille.",
        "Col du Ziz en fin de matinée."
      ],
      "practical": [
        "Fès–Merzouga ~7h.",
        "Fin possible à Marrakech."
      ],
      "faqExtra": [
        {
          "question": "Combiner avec visite Fès ?",
          "answer": "1-2 jours à Fès avant le départ recommandés."
        }
      ],
      "extraParagraphs": []
    }
  },
  {
    "imageWidth": 1400,
    "imageHeight": 900,
    "featured": false,
    "blogLinks": [
      {
        "title": "Guide ultime pour visiter Marrakech",
        "path": "/blog/ultimate-guide-visiting-marrakech-2025"
      },
      {
        "title": "Trekking à dos de chameau dans le Sahara",
        "path": "/blog/camel-trekking-sahara-what-to-expect"
      },
      {
        "title": "Cuisine marocaine : 15 plats à goûter",
        "path": "/blog/moroccan-cuisine-15-dishes-you-must-try"
      }
    ],
    "touristType": [
      "Couples",
      "Familles",
      "Seniors"
    ],
    "slug": "casablanca-merzouga",
    "category": "desert",
    "h1": "Circuit Casablanca Merzouga",
    "title": "Casablanca – Merzouga",
    "metaTitle": "Circuit Casablanca Merzouga Sahara complet – circuit Maroc",
    "metaDescription": "Traversez le Maroc de Casablanca jusqu’à Merzouga : villes, Atlas et dunes d’Erg Chebbi. Circuit désert complet avec chauffeur-guide francophone.",
    "keywords": [
      "Casablanca Merzouga",
      "Mohammed V Sahara"
    ],
    "shortDescription": "Atterrissez à Casablanca et traversez le royaume jusqu'aux dunes : Rabat, Fès, Merzouga et Marrakech.",
    "duration": "6 jours / 5 nuits",
    "availability": "Sur mesure depuis Casablanca",
    "from": "Casablanca",
    "to": "Casablanca",
    "image": "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1400&q=80",
    "imageAlt": "Panorama vers Merzouga",
    "imageTitle": "Casablanca Merzouga",
    "highlights": [
      "Accueil Mohammed V",
      "Rabat Meknès Fès",
      "Merzouga bivouac",
      "Todra",
      "Marrakech"
    ],
    "included": [
      "Transferts aéroport",
      "5 nuits",
      "Transport privé",
      "PD et dîners",
      "Guide",
      "Dromadaires"
    ],
    "excluded": [
      "Vols",
      "Déjeuners",
      "Boissons",
      "Pourboires",
      "Assurance"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Casablanca – Rabat",
        "text": "Hassan II, route Rabat."
      },
      {
        "day": 2,
        "title": "Rabat – Meknès – Fès",
        "text": "Volubilis, arrivée Fès."
      },
      {
        "day": 3,
        "title": "Fès – Merzouga",
        "text": "Atlas oriental, Ziz, bivouac."
      },
      {
        "day": 4,
        "title": "Merzouga – Todra – Dadès",
        "text": "Dunes, gorges."
      },
      {
        "day": 5,
        "title": "Dadès – Marrakech",
        "text": "Aït Ben Haddou, Tichka."
      },
      {
        "day": 6,
        "title": "Marrakech – Casablanca",
        "text": "Matinée libre, aéroport."
      }
    ],
    "destinations": [
      {
        "name": "Merzouga Sahara",
        "path": "/destinations/merzouga-sahara"
      },
      {
        "name": "Fès",
        "path": "/destinations/fes"
      },
      {
        "name": "Marrakech",
        "path": "/destinations/marrakech"
      }
    ],
    "similarSlugs": [
      "tanger-merzouga",
      "fes-merzouga",
      "casablanca-rabat-meknes-fes-marrakech",
      "marrakech-merzouga-4-jours"
    ],
    "fromPrice": 590,
    "rating": {
      "value": 4.8,
      "count": 124
    },
    "hooks": {
      "opening": "Pour les vols internationaux à Casablanca, ce circuit construit un arc côte → impérial → Sahara → retour sans détour inutile.",
      "routeFocus": "Boucle via Fès et Marrakech couvrant les trois pôles du Maroc central.",
      "landscape": "Océan Atlantique aux dunes, via cèdres de l'Atlas.",
      "culture": "Hassan II aux nomades de Merzouga, artisans de Marrakech.",
      "highlight": "Premières dunes après jours de médinas — contraste saisissant.",
      "cuisine": "Fruits de mer Casablanca, pastilla Fès, tajine saharien.",
      "whoFor": "Premiers voyageurs avec vol international Casablanca.",
      "seasonNote": "Adaptable toute l'année ; été : départs désert avancés.",
      "whyBook": "Accueil Mohammed V et synchro horaires vol.",
      "closing": "De l'atterrissage aux dunes — un seul interlocuteur.",
      "keywordPhrase": "circuit Casablanca Merzouga",
      "tips": [
        "Nuit d'arrivée si vol tardif.",
        "Change à l'aéroport."
      ],
      "practical": [
        "Transferts j1 et j6 inclus."
      ],
      "faqExtra": [
        {
          "question": "Première visite Maroc ?",
          "answer": "Formule complète : impérial, désert et Marrakech en une semaine."
        }
      ],
      "extraParagraphs": []
    }
  },
  {
    "imageWidth": 1400,
    "imageHeight": 900,
    "featured": false,
    "blogLinks": [
      {
        "title": "Guide ultime pour visiter Marrakech",
        "path": "/blog/ultimate-guide-visiting-marrakech-2025"
      },
      {
        "title": "Trekking à dos de chameau dans le Sahara",
        "path": "/blog/camel-trekking-sahara-what-to-expect"
      },
      {
        "title": "Cuisine marocaine : 15 plats à goûter",
        "path": "/blog/moroccan-cuisine-15-dishes-you-must-try"
      }
    ],
    "touristType": [
      "Couples",
      "Voyageurs européens",
      "Aventuriers"
    ],
    "slug": "tanger-merzouga",
    "category": "desert",
    "h1": "Circuit Tanger Merzouga",
    "title": "Tanger – Merzouga",
    "metaTitle": "Circuit Tanger Merzouga du Nord au Sahara – circuit Maroc",
    "metaDescription": "Du détroit de Gibraltar aux dunes de Merzouga : Rif, Fès et Sahara en un grand voyage. Circuit Tanger–Merzouga privé toute l’année. Réservez facilement.",
    "keywords": [
      "Tanger Merzouga",
      "Chefchaouen Merzouga",
      "ferry Tanger Sahara"
    ],
    "shortDescription": "Du port méditerranéen aux dunes : Rif bleu, Fès impériale et Sahara en diagonal à travers le royaume.",
    "duration": "7 jours / 6 nuits",
    "availability": "Depuis Tanger ou Tanger Med",
    "from": "Tanger",
    "to": "Tanger",
    "image": "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1400&q=80",
    "imageAlt": "Route Nord au Sahara",
    "imageTitle": "Tanger Merzouga",
    "highlights": [
      "Cap Spartel",
      "Chefchaouen",
      "Fès UNESCO",
      "Merzouga bivouac",
      "Marrakech"
    ],
    "included": [
      "Transport 7 jours",
      "6 nuits",
      "PD et dîners",
      "Guide",
      "Dromadaires",
      "Visites médinas"
    ],
    "excluded": [
      "Ferry",
      "Déjeuners",
      "Boissons",
      "Pourboires"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Tanger – Chefchaouen",
        "text": "Spartel, médina bleue."
      },
      {
        "day": 2,
        "title": "Chefchaouen – Fès",
        "text": "Matinée bleue, route Fès."
      },
      {
        "day": 3,
        "title": "Fès – Merzouga",
        "text": "Ziz, bivouac."
      },
      {
        "day": 4,
        "title": "Merzouga – Todra – Ouarzazate",
        "text": "Dunes, gorges."
      },
      {
        "day": 5,
        "title": "Ouarzazate – Marrakech",
        "text": "Aït Ben Haddou, Tichka."
      },
      {
        "day": 6,
        "title": "Marrakech",
        "text": "Majorelle, médina."
      },
      {
        "day": 7,
        "title": "Marrakech – Rabat – Tanger",
        "text": "Retour côte."
      }
    ],
    "destinations": [
      {
        "name": "Chefchaouen",
        "path": "/destinations/chefchaouen"
      },
      {
        "name": "Fès",
        "path": "/destinations/fes"
      },
      {
        "name": "Merzouga Sahara",
        "path": "/destinations/merzouga-sahara"
      },
      {
        "name": "Marrakech",
        "path": "/destinations/marrakech"
      }
    ],
    "similarSlugs": [
      "casablanca-merzouga",
      "circuit-tanger",
      "circuit-chefchaouen",
      "fes-merzouga"
    ],
    "fromPrice": 720,
    "rating": {
      "value": 4.8,
      "count": 67
    },
    "hooks": {
      "opening": "Tanger, porte d'Europe en ferry : du détroit de Gibraltar aux dunes, en diagonal à travers tout le Maroc.",
      "routeFocus": "Inclut Chefchaouen — étape ignorée par les circuits sudistes.",
      "landscape": "Méditerranée, Rif, Atlas, Ziz, Sahara : cinq écosystèmes en une semaine.",
      "culture": "Tanger cosmopolite, Chefchaouen andalouse, Fès savante, Merzouga nomade.",
      "highlight": "Première vue sur Chefchaouen depuis la montée.",
      "cuisine": "Poisson détroit, fromage Rif, pastilla, tajine saharien.",
      "whoFor": "Arrivée ferry Algeciras/Tarifa.",
      "seasonNote": "Printemps : floraison Rif et désert doux.",
      "whyBook": "Accueil port Tanger Med ou aéroport Ibn Battouta.",
      "closing": "Du détroit au Sahara — réservez Tanger Merzouga.",
      "keywordPhrase": "circuit Tanger Merzouga",
      "tips": [
        "Marge sur horaire ferry.",
        "Chefchaouen fin d'après-midi."
      ],
      "practical": [
        "Fin possible Casablanca."
      ],
      "faqExtra": [
        {
          "question": "Compatible ferry ?",
          "answer": "Oui, accueil adapté à votre traversée."
        }
      ],
      "extraParagraphs": [
        "Tanger à 14 km de l'Espagne : seul grand port où la Méditerranée précède l'immersion saharienne."
      ]
    }
  },
  {
    "imageWidth": 1400,
    "imageHeight": 900,
    "featured": false,
    "blogLinks": [
      {
        "title": "Guide ultime pour visiter Marrakech",
        "path": "/blog/ultimate-guide-visiting-marrakech-2025"
      },
      {
        "title": "Trekking à dos de chameau dans le Sahara",
        "path": "/blog/camel-trekking-sahara-what-to-expect"
      },
      {
        "title": "Cuisine marocaine : 15 plats à goûter",
        "path": "/blog/moroccan-cuisine-15-dishes-you-must-try"
      }
    ],
    "touristType": [
      "Voyageurs",
      "Couples",
      "Familles"
    ],
    "slug": "casablanca-rabat-meknes-fes",
    "category": "imperial",
    "h1": "Circuit Casablanca Rabat Meknès Fès",
    "title": "Casablanca – Rabat – Meknès – Fès",
    "metaTitle": "Circuit villes impériales Casablanca à Fès – circuit Maroc",
    "metaDescription": "Casablanca, Rabat, Meknès et Fès : médinas UNESCO, palais royaux et artisanat ancestral. Circuit villes impériales au départ de Casablanca. Réservez facilement.",
    "keywords": [
      "villes impériales Maroc",
      "Casablanca Fès",
      "Volubilis Meknès"
    ],
    "shortDescription": "Les joyaux du Maroc central : de la mosquée Hassan II aux medersas de Fès, via Rabat et les ruines romaines de Volubilis.",
    "duration": "5 jours / 4 nuits",
    "availability": "Départs hebdomadaires",
    "from": "Casablanca",
    "to": "Fès",
    "image": "https://images.unsplash.com/photo-1553895501-af177747dff8?w=1400&q=80",
    "imageAlt": "Médina de Fès au crépuscule",
    "imageTitle": "Villes impériales Casablanca Fès",
    "highlights": [
      "Mosquée Hassan II",
      "Rabat kasbah Oudayas",
      "Meknès Bab Mansour",
      "Volubilis romain",
      "Fès El Bali UNESCO"
    ],
    "included": [
      "Transport privé",
      "4 nuits riads",
      "PD",
      "Guide francophone",
      "Visites médinas"
    ],
    "excluded": [
      "Déjeuners dîners",
      "Entrées",
      "Vols",
      "Pourboires"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Casablanca",
        "text": "Hassan II, corniche, nuit Casablanca."
      },
      {
        "day": 2,
        "title": "Casablanca – Rabat",
        "text": "Tour Hassan, Oudayas, Chellah."
      },
      {
        "day": 3,
        "title": "Rabat – Meknès – Volubilis",
        "text": "Bab Mansour, ruines romaines, Moulay Idriss."
      },
      {
        "day": 4,
        "title": "Meknès – Fès",
        "text": "Route vers Fès, médina au coucher du soleil."
      },
      {
        "day": 5,
        "title": "Fès",
        "text": "Médina complète : tanneries, medersas, souks."
      }
    ],
    "destinations": [
      {
        "name": "Fès",
        "path": "/destinations/fes"
      }
    ],
    "similarSlugs": [
      "casablanca-rabat-meknes-fes-marrakech",
      "marrakech-fes",
      "circuit-casablanca",
      "fes-merzouga"
    ],
    "fromPrice": 420,
    "rating": {
      "value": 4.8,
      "count": 198
    },
    "hooks": {
      "opening": "Ce circuit impérial condense l'histoire du Maroc : dynasties alaouites, héritage romain et savoir-faire millénaire de Fès.",
      "routeFocus": "Progression logique côte → capitale → ville sainte, sans retour arrière.",
      "landscape": "Océan Atlantique, plaine du Gharb, collines de Volubilis, méandre de Fès.",
      "culture": "Artisans du cuir, moucharabiehs, calligraphie : Fès comme clôture du voyage.",
      "highlight": "Tanneries Chouara vues depuis les terrasses — spectacle séculaire.",
      "cuisine": "Pastilla, harira, rfissa : gastronomie impériale à chaque étape.",
      "whoFor": "Amateurs d'histoire et d'architecture islamique.",
      "seasonNote": "Toute l'année ; printemps idéal pour Volubilis en plein air.",
      "whyBook": "Guides spécialisés médinas UNESCO.",
      "closing": "De Casablanca à Fès : réservez votre immersion impériale.",
      "keywordPhrase": "circuit villes impériales Casablanca Fès",
      "tips": [
        "Chaussures confort médina Fès.",
        "Volubilis tôt le matin."
      ],
      "practical": [
        "Fin possible retour Casablanca sur demande."
      ],
      "faqExtra": [
        {
          "question": "Volubilis inclus ?",
          "answer": "Oui, visite guidée des ruines romaines et Moulay Idriss."
        }
      ],
      "extraParagraphs": []
    }
  },
  {
    "imageWidth": 1400,
    "imageHeight": 900,
    "featured": false,
    "blogLinks": [
      {
        "title": "Guide ultime pour visiter Marrakech",
        "path": "/blog/ultimate-guide-visiting-marrakech-2025"
      },
      {
        "title": "Trekking à dos de chameau dans le Sahara",
        "path": "/blog/camel-trekking-sahara-what-to-expect"
      },
      {
        "title": "Cuisine marocaine : 15 plats à goûter",
        "path": "/blog/moroccan-cuisine-15-dishes-you-must-try"
      }
    ],
    "touristType": [
      "Voyageurs",
      "Couples",
      "Familles"
    ],
    "slug": "casablanca-rabat-meknes-fes-marrakech",
    "category": "imperial",
    "h1": "Circuit Casablanca à Marrakech via Fès",
    "title": "Casablanca – Fès – Marrakech",
    "metaTitle": "Grand circuit impérial Casablanca Marrakech – circuit Maroc",
    "metaDescription": "Casablanca–Rabat–Meknès–Fès–Marrakech : le grand classique des villes impériales marocaines. Morocco Tour culturel rythmé et confortable. Réservez facilement.",
    "keywords": [
      "Casablanca Marrakech",
      "grand circuit Maroc",
      "Fès Marrakech"
    ],
    "shortDescription": "Le grand diagonal impérial : de Casablanca à Marrakech en passant par toutes les capitales historiques du royaume.",
    "duration": "8 jours / 7 nuits",
    "availability": "Sur mesure",
    "from": "Casablanca",
    "to": "Marrakech",
    "image": "https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?w=1400&q=80",
    "imageAlt": "Place Jemaa el-Fnaa Marrakech",
    "imageTitle": "Casablanca à Marrakech",
    "highlights": [
      "Casablanca Hassan II",
      "Rabat et Meknès",
      "Volubilis",
      "Fès 2 jours",
      "Marrakech médina"
    ],
    "included": [
      "7 nuits",
      "Transport privé",
      "PD",
      "Guides locaux",
      "Transfert aéroport"
    ],
    "excluded": [
      "Vols",
      "Repas midi/soir",
      "Entrées",
      "Pourboires"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Casablanca",
        "text": "Accueil, Hassan II."
      },
      {
        "day": 2,
        "title": "Casablanca – Rabat",
        "text": "Capitale administrative."
      },
      {
        "day": 3,
        "title": "Rabat – Meknès – Volubilis",
        "text": "Ruines et Bab Mansour."
      },
      {
        "day": 4,
        "title": "Meknès – Fès",
        "text": "Arrivée Fès."
      },
      {
        "day": 5,
        "title": "Fès",
        "text": "Médina approfondie."
      },
      {
        "day": 6,
        "title": "Fès – Ifrane – Marrakech",
        "text": "Traversée Atlas via Midelt et Beni Mellal."
      },
      {
        "day": 7,
        "title": "Marrakech",
        "text": "Majorelle, Bahia, souks."
      },
      {
        "day": 8,
        "title": "Marrakech",
        "text": "Jemaa el-Fnaa, fin du circuit."
      }
    ],
    "destinations": [
      {
        "name": "Fès",
        "path": "/destinations/fes"
      },
      {
        "name": "Marrakech",
        "path": "/destinations/marrakech"
      },
      {
        "name": "Atlas Mountains",
        "path": "/destinations/atlas-mountains"
      }
    ],
    "similarSlugs": [
      "casablanca-rabat-meknes-fes",
      "marrakech-fes",
      "casablanca-merzouga",
      "circuit-casablanca"
    ],
    "fromPrice": 690,
    "rating": {
      "value": 4.9,
      "count": 167
    },
    "hooks": {
      "opening": "Huit jours pour relier les quatre pôles du Maroc impérial sans survoler les étapes : chaque ville mérite son tempo.",
      "routeFocus": "Traversée Atlas central entre Fès et Marrakech — variante moins fréquentée que Tichka.",
      "landscape": "De l'Atlantique aux sommets du Moyen Atlas, puis plaines et ocre de Marrakech.",
      "culture": "Quatre médinas, quatre dialectes locaux, une même hospitalité marocaine.",
      "highlight": "Deux journées complètes à Fès — rare sur les circuits compressés.",
      "cuisine": "Bissara à Fès, tanjia marrakchia en arrivée : deux capitales culinaires.",
      "whoFor": "Premier voyage long séjour au Maroc.",
      "seasonNote": "Hiver : neige possible Ifrane ; prévoir veste.",
      "whyBook": "Itinéraire éprouvé sans journées >6h conduite.",
      "closing": "Casablanca à Marrakech : le Maroc impérial intégral.",
      "keywordPhrase": "grand circuit Casablanca Marrakech Fès",
      "tips": [
        "Réservez Majorelle à l'avance.",
        "Fès : guide obligatoire recommandé."
      ],
      "practical": [
        "Transfert aéroport Marrakech jour 8 possible."
      ],
      "faqExtra": [
        {
          "question": "Sens inverse possible ?",
          "answer": "Oui, Marrakech → Casablanca sur demande."
        }
      ],
      "extraParagraphs": []
    }
  },
  {
    "imageWidth": 1400,
    "imageHeight": 900,
    "featured": false,
    "blogLinks": [
      {
        "title": "Guide ultime pour visiter Marrakech",
        "path": "/blog/ultimate-guide-visiting-marrakech-2025"
      },
      {
        "title": "Trekking à dos de chameau dans le Sahara",
        "path": "/blog/camel-trekking-sahara-what-to-expect"
      },
      {
        "title": "Cuisine marocaine : 15 plats à goûter",
        "path": "/blog/moroccan-cuisine-15-dishes-you-must-try"
      }
    ],
    "touristType": [
      "Voyageurs",
      "Couples",
      "Familles"
    ],
    "slug": "marrakech-fes",
    "category": "imperial",
    "h1": "Circuit Marrakech Fès",
    "title": "Marrakech – Fès",
    "metaTitle": "Circuit Marrakech Fès via Atlas et Sud – circuit Maroc",
    "metaDescription": "Reliez Marrakech à Fès par les montagnes et le Sud : kasbahs, gorges et médinas millénaires. Circuit Maroc culturel et paysager inoubliable.",
    "keywords": [
      "Marrakech Fès",
      "circuit impérial",
      "Atlas Ifrane"
    ],
    "shortDescription": "Reliez Marrakech ocre et Fès savante en traversant le Moyen Atlas, Azrou et les plaines du Gharb.",
    "duration": "4 jours / 3 nuits",
    "availability": "Départs depuis Marrakech ou Fès",
    "from": "Marrakech",
    "to": "Fès",
    "image": "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1400&q=80",
    "imageAlt": "Ruelles de Marrakech",
    "imageTitle": "Marrakech Fès",
    "highlights": [
      "Marrakech médina",
      "Col du Zad",
      "Ifrane « petite Suisse »",
      "Azrou cèdres",
      "Fès El Bali"
    ],
    "included": [
      "Transport privé",
      "3 nuits",
      "PD",
      "Guide francophone"
    ],
    "excluded": [
      "Repas complets",
      "Entrées",
      "Pourboires"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Marrakech",
        "text": "Visite médina et monuments."
      },
      {
        "day": 2,
        "title": "Marrakech – Ifrane – Midelt",
        "text": "Atlas, forêt cèdres."
      },
      {
        "day": 3,
        "title": "Midelt – Meknès – Fès",
        "text": "Meknès et arrivée Fès."
      },
      {
        "day": 4,
        "title": "Fès",
        "text": "Médina UNESCO complète."
      }
    ],
    "destinations": [
      {
        "name": "Marrakech",
        "path": "/destinations/marrakech"
      },
      {
        "name": "Fès",
        "path": "/destinations/fes"
      },
      {
        "name": "Atlas Mountains",
        "path": "/destinations/atlas-mountains"
      }
    ],
    "similarSlugs": [
      "casablanca-rabat-meknes-fes",
      "fes-merzouga",
      "marrakech-merzouga-4-jours",
      "circuit-imlil"
    ],
    "fromPrice": 340,
    "rating": {
      "value": 4.7,
      "count": 143
    },
    "hooks": {
      "opening": "Marrakech et Fès s'opposent et se complètent : l'une solaire et théâtrale, l'autre savante et labyrinthique.",
      "routeFocus": "Traversée nord du Haut Atlas via Midelt — route historique caravanière.",
      "landscape": "Ocre marrakchi, vert émeraude d'Ifrane, brun profond de Fès.",
      "culture": "De Jemaa el-Fnaa aux tanneries : deux théâtres urbains UNESCO.",
      "highlight": "Ifrane et ses chalet suisses — surprise alpine au Maroc.",
      "cuisine": "Tanja marrakchia puis bissara fassie : deux religions culinaires.",
      "whoFor": "Voyageurs voulant les deux médinas sans circuit complet côte.",
      "seasonNote": "Ifrane froid en hiver ; Marrakech agréable octobre-avril.",
      "whyBook": "Sens Marrakech→Fès ou inverse selon vols.",
      "closing": "Deux impériales, un seul voyage — Marrakech Fès.",
      "keywordPhrase": "circuit Marrakech Fès Atlas",
      "tips": [
        "Anti-nausée pour cols sinueux.",
        "Fès : couvre-chef en médina."
      ],
      "practical": [
        "One-way possible sans supplément majeur."
      ],
      "faqExtra": [
        {
          "question": "Sens recommandé ?",
          "answer": "Marrakech→Fès si vous finissez par le Nord ou Fès ; inverse pour désert ensuite."
        }
      ],
      "extraParagraphs": []
    }
  },
  {
    "imageWidth": 1400,
    "imageHeight": 900,
    "featured": false,
    "blogLinks": [
      {
        "title": "Guide ultime pour visiter Marrakech",
        "path": "/blog/ultimate-guide-visiting-marrakech-2025"
      },
      {
        "title": "Trekking à dos de chameau dans le Sahara",
        "path": "/blog/camel-trekking-sahara-what-to-expect"
      },
      {
        "title": "Cuisine marocaine : 15 plats à goûter",
        "path": "/blog/moroccan-cuisine-15-dishes-you-must-try"
      }
    ],
    "touristType": [
      "Voyageurs",
      "Couples",
      "Familles"
    ],
    "slug": "circuit-tanger",
    "category": "nord",
    "h1": "Circuit Tanger – Porte du Maroc",
    "title": "Circuit Tanger",
    "metaTitle": "Circuit Tanger médina cap Spartel Atlantique – circuit Maroc",
    "metaDescription": "Explorez Tanger : kasbah, grotte d’Hercule, cap Spartel et cafés mythiques du détroit. Escapade Nord Maroc avec guide francophone privé. Réservez facilement.",
    "keywords": [
      "Tanger Maroc",
      "circuit Tanger",
      "cap Spartel"
    ],
    "shortDescription": "Tanger, carrefour des civilisations : médina vibrante, détroit de Gibraltar et légende beatnik.",
    "duration": "2 jours / 1 nuit",
    "availability": "Toute l'année",
    "from": "Tanger",
    "to": "Tanger",
    "image": "https://images.unsplash.com/photo-1559586616-361e18714958?w=1400&q=80",
    "imageAlt": "Port de Tanger",
    "imageTitle": "Circuit Tanger",
    "highlights": [
      "Médina de Tanger",
      "Cap Spartel",
      "Grotte d'Hercule",
      "Grand Socco",
      "Vue sur l'Espagne"
    ],
    "included": [
      "Transport privé",
      "1 nuit riad",
      "PD",
      "Guide francophone"
    ],
    "excluded": [
      "Repas",
      "Entrées",
      "Pourboires"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Tanger – Médina – Cap Spartel",
        "text": "Grand Socco, médina, cap Spartel et grotte d'Hercule."
      },
      {
        "day": 2,
        "title": "Tanger – Kasbah – Départ",
        "text": "Kasbah, musée, souks et fin du circuit."
      }
    ],
    "destinations": [
      {
        "name": "Chefchaouen",
        "path": "/destinations/chefchaouen"
      }
    ],
    "similarSlugs": [
      "circuit-chefchaouen",
      "circuit-asilah",
      "tanger-merzouga",
      "circuit-tetouan"
    ],
    "fromPrice": 165,
    "rating": {
      "value": 4.7,
      "count": 98
    },
    "hooks": {
      "opening": "Tanger est la porte d'entrée du Maroc depuis l'Europe : ville cosmopolite où se mêlent détroit, médina et histoire beatnik.",
      "routeFocus": "Médina, kasbah et caps : Tanger se visite à pied autant qu'en voiture.",
      "landscape": "Méditerranée d'un côté, Atlantique de l'autre — unique au Maroc.",
      "culture": "Tanger international : écrivains, diplomates, marchands depuis des siècles.",
      "highlight": "Grotte d'Hercule où Atlantique et Méditerranée se regardent.",
      "cuisine": "Poisson grillé port, pastilla au poulet, thé à la menthe Grand Socco.",
      "whoFor": "Arrivée ferry ou première étape nord Maroc.",
      "seasonNote": "Vent fréquent printemps ; été animé.",
      "whyBook": "Accueil port Tanger Med inclus sur demande.",
      "closing": "Commencez le Maroc par Tanger.",
      "keywordPhrase": "circuit Tanger porte Maroc",
      "tips": [
        "Vue Espagne par temps clair au cap Spartel."
      ],
      "practical": [
        "Extension Chefchaouen possible."
      ],
      "faqExtra": [
        {
          "question": "Accueil ferry ?",
          "answer": "Oui, prise en charge Tanger Med ou ville."
        }
      ],
      "extraParagraphs": []
    }
  },
  {
    "imageWidth": 1400,
    "imageHeight": 900,
    "featured": true,
    "blogLinks": [
      {
        "title": "Guide ultime pour visiter Marrakech",
        "path": "/blog/ultimate-guide-visiting-marrakech-2025"
      },
      {
        "title": "Trekking à dos de chameau dans le Sahara",
        "path": "/blog/camel-trekking-sahara-what-to-expect"
      },
      {
        "title": "Cuisine marocaine : 15 plats à goûter",
        "path": "/blog/moroccan-cuisine-15-dishes-you-must-try"
      }
    ],
    "touristType": [
      "Voyageurs",
      "Couples",
      "Familles"
    ],
    "slug": "circuit-chefchaouen",
    "category": "nord",
    "h1": "Circuit Chefchaouen – Perle bleue du Rif",
    "title": "Circuit Chefchaouen",
    "metaTitle": "Circuit Chefchaouen perle bleue du Rif – circuit Maroc",
    "metaDescription": "Séjournez à Chefchaouen : ruelles bleues, kasbah et panoramas du Rif. Circuit Nord Maroc romantique, photographique et authentiquement local.",
    "keywords": [
      "Chefchaouen",
      "ville bleue Maroc",
      "Rif"
    ],
    "shortDescription": "Les ruelles bleues de Chefchaouen, nichées dans le Rif : l'une des images les plus iconiques du Maroc.",
    "duration": "2 jours / 1 nuit",
    "availability": "Départs depuis Tanger ou Fès",
    "from": "Tanger",
    "to": "Chefchaouen",
    "image": "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1400&q=80",
    "imageAlt": "Ruelles bleues Chefchaouen",
    "imageTitle": "Chefchaouen perle bleue",
    "highlights": [
      "Médina bleue",
      "Place Outa el Hammam",
      "Kasbah",
      "Montagnes du Rif",
      "Artisanat local"
    ],
    "included": [
      "Transport",
      "1 nuit riad",
      "PD",
      "Guide"
    ],
    "excluded": [
      "Repas",
      "Pourboires"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Tanger – Chefchaouen",
        "text": "Route Rif, installation médina bleue."
      },
      {
        "day": 2,
        "title": "Chefchaouen – Balades",
        "text": "Kasbah, Spanish Mosque, souks."
      }
    ],
    "destinations": [
      {
        "name": "Chefchaouen",
        "path": "/destinations/chefchaouen"
      }
    ],
    "similarSlugs": [
      "circuit-tanger",
      "circuit-akchour",
      "circuit-tetouan",
      "tanger-merzouga"
    ],
    "fromPrice": 175,
    "rating": {
      "value": 4.9,
      "count": 245
    },
    "hooks": {
      "opening": "Chefchaouen bleuit le regard : chaque ruelle est une nuance différente entre ciel et pierre.",
      "routeFocus": "La montée vers la médina révole la ville en gradins de bleu.",
      "landscape": "Rif vert et façades indigo : contraste saisissant.",
      "culture": "Héritage andalou et artisanat du Rif.",
      "highlight": "Spanish Mosque au coucher — panorama sur la ville bleue.",
      "cuisine": "Fromage de chèvre local, tajine aux olives du Rif.",
      "whoFor": "Photographes, couples, amateurs d'ambiance douce.",
      "seasonNote": "Printemps fleuri ; hiver frais en altitude.",
      "whyBook": "Riads sélectionnés au cœur de la médina.",
      "closing": "La perle bleue vous attend.",
      "keywordPhrase": "circuit Chefchaouen ville bleue",
      "tips": [
        "Meilleure lumière fin d'après-midi."
      ],
      "practical": [
        "One-way Tanger-Chefchaouen-Fès possible."
      ],
      "faqExtra": [
        {
          "question": "Pourquoi la ville est-elle bleue ?",
          "answer": "Tradition andalouse et protection contre moustiques ; aujourd'hui identité visuelle."
        }
      ],
      "extraParagraphs": []
    }
  },
  {
    "imageWidth": 1400,
    "imageHeight": 900,
    "featured": false,
    "blogLinks": [
      {
        "title": "Guide ultime pour visiter Marrakech",
        "path": "/blog/ultimate-guide-visiting-marrakech-2025"
      },
      {
        "title": "Trekking à dos de chameau dans le Sahara",
        "path": "/blog/camel-trekking-sahara-what-to-expect"
      },
      {
        "title": "Cuisine marocaine : 15 plats à goûter",
        "path": "/blog/moroccan-cuisine-15-dishes-you-must-try"
      }
    ],
    "touristType": [
      "Randonneurs",
      "Nature",
      "Couples"
    ],
    "slug": "circuit-akchour",
    "category": "nord",
    "h1": "Circuit Akchour – Cascades du Rif",
    "title": "Circuit Akchour",
    "metaTitle": "Circuit Akchour cascades gorges Pont de Dieu – circuit Maroc",
    "metaDescription": "Randonnée à Akchour près de Chefchaouen : cascades, gorges verdoyantes et célèbre Pont de Dieu. Nature du Rif avec accompagnement francophone.",
    "keywords": [
      "Akchour",
      "Pont de Dieu",
      "cascades Rif"
    ],
    "shortDescription": "Randonnée vers les cascades d'Akchour et le spectaculaire Pont de Dieu dans le parc de Talassemtane.",
    "duration": "2 jours / 1 nuit",
    "availability": "Mars–novembre recommandé",
    "from": "Chefchaouen",
    "to": "Chefchaouen",
    "image": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1400&q=80",
    "imageAlt": "Cascades Akchour",
    "imageTitle": "Akchour cascades Rif",
    "highlights": [
      "Cascades d'Akchour",
      "Pont de Dieu",
      "Parc Talassemtane",
      "Randonnée Rif",
      "Piscines naturelles"
    ],
    "included": [
      "Transport",
      "1 nuit",
      "PD",
      "Guide randonnée"
    ],
    "excluded": [
      "Repas",
      "Pourboires"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Chefchaouen – Akchour",
        "text": "Randonnée cascades, Pont de Dieu."
      },
      {
        "day": 2,
        "title": "Akchour – Retour",
        "text": "Marche matinale, retour Chefchaouen."
      }
    ],
    "destinations": [
      {
        "name": "Chefchaouen",
        "path": "/destinations/chefchaouen"
      },
      {
        "name": "Atlas Mountains",
        "path": "/destinations/atlas-mountains"
      }
    ],
    "similarSlugs": [
      "circuit-chefchaouen",
      "cascades-ouzoud",
      "circuit-imlil",
      "circuit-tanger"
    ],
    "fromPrice": 155,
    "rating": {
      "value": 4.8,
      "count": 76
    },
    "hooks": {
      "opening": "Akchour offre le Rif sauvage : eau cristalline, falaises calcaires et Pont de Dieu naturel.",
      "routeFocus": "Randonnée progressive le long de l'oued — accessible avec bonnes chaussures.",
      "landscape": "Forêts de chênes verts, cascades en gradins, gorges étroites.",
      "culture": "Villages berbères du Rif et agriculture de montagne.",
      "highlight": "Pont de Dieu : arche naturelle au-dessus de l'eau turquoise.",
      "cuisine": "Tajine villageois après la randonnée, thé aux herbes du Rif.",
      "whoFor": "Amateurs nature et marche (3-4h/jour).",
      "seasonNote": "Éviter forte pluie ; été idéal pour baignade naturelle.",
      "whyBook": "Guides connaissant sentiers et niveaux d'eau.",
      "closing": "Le Rif vert au-delà du bleu de Chefchaouen.",
      "keywordPhrase": "circuit Akchour cascades Rif",
      "tips": [
        "Chaussures randonnée obligatoires.",
        "Maillot pour piscines naturelles."
      ],
      "practical": [
        "Base Chefchaouen recommandée."
      ],
      "faqExtra": [
        {
          "question": "Niveau marche ?",
          "answer": "Modéré, 3-4h avec pauses ; sentier parfois glissant."
        }
      ],
      "extraParagraphs": []
    }
  },
  {
    "imageWidth": 1400,
    "imageHeight": 900,
    "featured": false,
    "blogLinks": [
      {
        "title": "Guide ultime pour visiter Marrakech",
        "path": "/blog/ultimate-guide-visiting-marrakech-2025"
      },
      {
        "title": "Trekking à dos de chameau dans le Sahara",
        "path": "/blog/camel-trekking-sahara-what-to-expect"
      },
      {
        "title": "Cuisine marocaine : 15 plats à goûter",
        "path": "/blog/moroccan-cuisine-15-dishes-you-must-try"
      }
    ],
    "touristType": [
      "Voyageurs",
      "Couples",
      "Familles"
    ],
    "slug": "circuit-tetouan",
    "category": "nord",
    "h1": "Circuit Tétouan – Médina andalouse",
    "title": "Circuit Tétouan",
    "metaTitle": "Circuit Tétouan médina UNESCO andalouse Rif – circuit Maroc",
    "metaDescription": "Découvrez Tétouan : médina UNESCO, héritage andalou et artisanat raffiné du Rif. Circuit culturel au Nord du Maroc, idéal en week-end prolongé.",
    "keywords": [
      "Tétouan",
      "médina UNESCO",
      "Andalousie Maroc"
    ],
    "shortDescription": "Tétouan, « la colombe blanche » : médina UNESCO au savoir-faire andalou préservé.",
    "duration": "2 jours / 1 nuit",
    "availability": "Toute l'année",
    "from": "Tanger",
    "to": "Tétouan",
    "image": "https://images.unsplash.com/photo-1559586616-361e18714958?w=1400&q=80",
    "imageAlt": "Médina blanche Tétouan",
    "imageTitle": "Tétouan médina",
    "highlights": [
      "Médina UNESCO",
      "Place Hassan II",
      "Musée d'art marocain",
      "Artisanat andalou",
      "Mont Martil"
    ],
    "included": [
      "Transport",
      "1 nuit",
      "PD",
      "Guide médina"
    ],
    "excluded": [
      "Repas",
      "Entrées",
      "Pourboires"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Tanger – Tétouan",
        "text": "Médina, musée, souks."
      },
      {
        "day": 2,
        "title": "Tétouan – Martil",
        "text": "Plage Martil option, retour Tanger."
      }
    ],
    "destinations": [
      {
        "name": "Chefchaouen",
        "path": "/destinations/chefchaouen"
      }
    ],
    "similarSlugs": [
      "circuit-tanger",
      "circuit-chefchaouen",
      "circuit-asilah",
      "circuit-casablanca"
    ],
    "fromPrice": 160,
    "rating": {
      "value": 4.7,
      "count": 62
    },
    "hooks": {
      "opening": "Tétouan conserve l'âme andalouse chassée d'Espagne au XVe siècle — médina blanche moins touristique que Fès.",
      "routeFocus": "Médina compacte et authentique, artisanat encore vivant.",
      "landscape": "Collines du Rif dominant une médina blanche éclatante.",
      "culture": "Broderie, zellige, bois sculpté : savoir-faire andalous.",
      "highlight": "Musée d'art marocain dans le palais du XIXe siècle.",
      "cuisine": "Poisson Martil, pastilla tétouanaise aux fruits de mer.",
      "whoFor": "Amateurs d'art et médinas moins fréquentées.",
      "seasonNote": "Été : plage Martil à proximité.",
      "whyBook": "Guide spécialisé médina UNESCO.",
      "closing": "L'Andalousie marocaine à Tétouan.",
      "keywordPhrase": "circuit Tétouan médina andalouse",
      "tips": [
        "Médina moins labyrinthique que Fès — idéal initiation."
      ],
      "practical": [
        "Combinable Chefchaouen en 4 jours."
      ],
      "faqExtra": [
        {
          "question": "Tétouan ou Chefchaouen ?",
          "answer": "Chefchaouen pour le bleu iconique ; Tétouan pour l'authenticité andalouse et l'art."
        }
      ],
      "extraParagraphs": []
    }
  },
  {
    "imageWidth": 1400,
    "imageHeight": 900,
    "featured": false,
    "blogLinks": [
      {
        "title": "Guide ultime pour visiter Marrakech",
        "path": "/blog/ultimate-guide-visiting-marrakech-2025"
      },
      {
        "title": "Trekking à dos de chameau dans le Sahara",
        "path": "/blog/camel-trekking-sahara-what-to-expect"
      },
      {
        "title": "Cuisine marocaine : 15 plats à goûter",
        "path": "/blog/moroccan-cuisine-15-dishes-you-must-try"
      }
    ],
    "touristType": [
      "Voyageurs",
      "Couples",
      "Familles"
    ],
    "slug": "circuit-asilah",
    "category": "nord",
    "h1": "Circuit Asilah – Perle atlantique du Nord",
    "title": "Circuit Asilah",
    "metaTitle": "Circuit Asilah art remparts côte Atlantique – circuit Maroc",
    "metaDescription": "Asilah : remparts atlantiques, fresques de street art et médina lumineuse. Escapade côtière artistique au Nord du Maroc, douce et inspirante.",
    "keywords": [
      "Asilah",
      "côte nord Maroc",
      "festival Asilah"
    ],
    "shortDescription": "Asilah mélange remparts portugais, fresques contemporaines et plages atlantiques préservées.",
    "duration": "2 jours / 1 nuit",
    "availability": "Toute l'année",
    "from": "Tanger",
    "to": "Asilah",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&q=80",
    "imageAlt": "Remparts Asilah océan",
    "imageTitle": "Asilah atlantique",
    "highlights": [
      "Remparts portugais",
      "Fresques murales",
      "Médina côtière",
      "Plage Paradise",
      "Festival arts (août)"
    ],
    "included": [
      "Transport",
      "1 nuit maison d'hôtes",
      "PD",
      "Guide"
    ],
    "excluded": [
      "Repas",
      "Pourboires"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Tanger – Asilah",
        "text": "Remparts, médina, fresques."
      },
      {
        "day": 2,
        "title": "Asilah – Plages",
        "text": "Paradise Beach, retour Tanger."
      }
    ],
    "destinations": [],
    "similarSlugs": [
      "circuit-tanger",
      "circuit-el-jadida",
      "circuit-essaouira",
      "circuit-tetouan"
    ],
    "fromPrice": 150,
    "rating": {
      "value": 4.7,
      "count": 54
    },
    "hooks": {
      "opening": "Asilah est la cité des arts du Nord : remparts blancs face à l'Atlantique et murs colorés par le festival international.",
      "routeFocus": "Petite échelle humaine — tout se visite à pied le long des remparts.",
      "landscape": "Blanc des murs, bleu de l'océan, couleurs des fresques.",
      "culture": "Festival d'Asilah attire artistes du monde entier chaque été.",
      "highlight": "Promenade sur les remparts au coucher de soleil atlantique.",
      "cuisine": "Poisson grillé port, calamar frit, thé à la menthe face à l'océan.",
      "whoFor": "Amateurs d'art, couples, escapade côte nord.",
      "seasonNote": "Festival août ; printemps-automne doux et venteux.",
      "whyBook": "Maisons d'hôtes de charme dans la médina.",
      "closing": "Asilah : art et océan en harmonie.",
      "keywordPhrase": "circuit Asilah arts atlantique",
      "tips": [
        "Vérifier dates festival si août."
      ],
      "practical": [
        "45 min de Tanger."
      ],
      "faqExtra": [
        {
          "question": "Baignade possible ?",
          "answer": "Oui à Paradise Beach, attention courants atlantiques."
        }
      ],
      "extraParagraphs": []
    }
  },
  {
    "imageWidth": 1400,
    "imageHeight": 900,
    "featured": false,
    "blogLinks": [
      {
        "title": "Guide ultime pour visiter Marrakech",
        "path": "/blog/ultimate-guide-visiting-marrakech-2025"
      },
      {
        "title": "Trekking à dos de chameau dans le Sahara",
        "path": "/blog/camel-trekking-sahara-what-to-expect"
      },
      {
        "title": "Cuisine marocaine : 15 plats à goûter",
        "path": "/blog/moroccan-cuisine-15-dishes-you-must-try"
      }
    ],
    "touristType": [
      "Voyageurs",
      "Couples",
      "Familles"
    ],
    "slug": "excursion-ourika",
    "category": "atlas",
    "h1": "Excursion Vallée de l'Ourika",
    "title": "Excursion Ourika",
    "metaTitle": "Excursion vallée Ourika Atlas depuis Marrakech au Maroc",
    "metaDescription": "Journée dans la vallée de l’Ourika : villages berbères, rivière de montagne et Setti Fatma. Excursion Atlas idéale depuis Marrakech en privé.",
    "keywords": [
      "Ourika",
      "vallée Ourika",
      "Setti Fatma"
    ],
    "shortDescription": "La vallée de l'Ourika, refuge verdoyant à une heure de Marrakech : villages berbères et cascades de Setti Fatma.",
    "duration": "2 jours / 1 nuit",
    "availability": "Toute l'année",
    "from": "Marrakech",
    "to": "Marrakech",
    "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&q=80",
    "imageAlt": "Vallée Ourika Atlas",
    "imageTitle": "Excursion Ourika",
    "highlights": [
      "Vallée de l'Ourika",
      "Villages berbères",
      "Cascades Setti Fatma",
      "Jardin bio Aourir",
      "Thé chez l'habitant"
    ],
    "included": [
      "Transport",
      "1 nuit dar",
      "PD",
      "Guide"
    ],
    "excluded": [
      "Repas",
      "Pourboires"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Marrakech – Ourika – Setti Fatma",
        "text": "Vallée, cascades, nuit chez l'habitant."
      },
      {
        "day": 2,
        "title": "Ourika – Marrakech",
        "text": "Marché local, retour Marrakech."
      }
    ],
    "destinations": [
      {
        "name": "Marrakech",
        "path": "/destinations/marrakech"
      },
      {
        "name": "Atlas Mountains",
        "path": "/destinations/atlas-mountains"
      }
    ],
    "similarSlugs": [
      "excursion-ourika-journee",
      "circuit-imlil",
      "trek-toubkal",
      "cascades-ouzoud"
    ],
    "fromPrice": 135,
    "rating": {
      "value": 4.8,
      "count": 187
    },
    "hooks": {
      "opening": "L'Ourika est la porte d'entrée berbère la plus proche de Marrakech — verdure, rivière et sommets en fond.",
      "routeFocus": "Route le long de l'oued jusqu'à Setti Fatma et ses cascades en gradins.",
      "landscape": "Terrasses cultivées, villages de pisé, neige sur le Toubkal au loin.",
      "culture": "Hospitalité berbère : thé, pain et conversations chez l'habitant.",
      "highlight": "Cascades Setti Fatma — 7 petites chutes en escalier.",
      "cuisine": "Tajine berbère aux légumes du jardin, amlou et miel.",
      "whoFor": "Familles, premiers pas en montagne.",
      "seasonNote": "Cascades plus pleines printemps ; canicule estivale évitée par l'altitude.",
      "whyBook": "Dars authentiques hors circuits bondés.",
      "closing": "L'Atlas à une heure de Marrakech.",
      "keywordPhrase": "excursion vallée Ourika Marrakech",
      "tips": [
        "Chaussures antidérapantes pour cascades."
      ],
      "practical": [
        "Extension 1 nuit recommandée vs journée."
      ],
      "faqExtra": [
        {
          "question": "Différence avec Ourika journée ?",
          "answer": "Cette formule 2j inclut nuit chez l'habitant et rythme plus lent."
        }
      ],
      "extraParagraphs": []
    }
  },
  {
    "imageWidth": 1400,
    "imageHeight": 900,
    "featured": false,
    "blogLinks": [
      {
        "title": "Guide ultime pour visiter Marrakech",
        "path": "/blog/ultimate-guide-visiting-marrakech-2025"
      },
      {
        "title": "Trekking à dos de chameau dans le Sahara",
        "path": "/blog/camel-trekking-sahara-what-to-expect"
      },
      {
        "title": "Cuisine marocaine : 15 plats à goûter",
        "path": "/blog/moroccan-cuisine-15-dishes-you-must-try"
      }
    ],
    "touristType": [
      "Voyageurs",
      "Couples",
      "Familles"
    ],
    "slug": "circuit-imlil",
    "category": "atlas",
    "h1": "Circuit Imlil – Porte du Toubkal",
    "title": "Circuit Imlil",
    "metaTitle": "Circuit Imlil porte du Toubkal Haut Atlas – circuit Maroc",
    "metaDescription": "Imlil et villages berbères du Haut Atlas : randonnées douces, hospitalité et vues sur le Toubkal. Circuit montagne Maroc authentique et local.",
    "keywords": [
      "Imlil",
      "vallée Toubkal",
      "Atlas berbère"
    ],
    "shortDescription": "Imlil, village berbère à 1740 m : porte d'entrée du Toubkal et terrasses spectaculaires.",
    "duration": "2 jours / 1 nuit",
    "availability": "Toute l'année",
    "from": "Marrakech",
    "to": "Marrakech",
    "image": "https://images.unsplash.com/photo-1486870591958-9b9d0d1c2daf?w=1400&q=80",
    "imageAlt": "Village Imlil Toubkal",
    "imageTitle": "Circuit Imlil",
    "highlights": [
      "Village Imlil",
      "Vallée Azzaden",
      "Panorama Toubkal",
      "Rencontre berbère",
      "Sentiers de montagne"
    ],
    "included": [
      "Transport 4×4",
      "1 nuit gîte",
      "PD",
      "Guide montagne"
    ],
    "excluded": [
      "Repas",
      "Pourboires"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Marrakech – Imlil – Azzaden",
        "text": "Vallée, gîte berbère."
      },
      {
        "day": 2,
        "title": "Imlil – Marrakech",
        "text": "Marche matinale, retour."
      }
    ],
    "destinations": [
      {
        "name": "Marrakech",
        "path": "/destinations/marrakech"
      },
      {
        "name": "Atlas Mountains",
        "path": "/destinations/atlas-mountains"
      }
    ],
    "similarSlugs": [
      "trek-toubkal",
      "excursion-ourika",
      "circuit-oukaimeden",
      "cascades-ouzoud"
    ],
    "fromPrice": 145,
    "rating": {
      "value": 4.8,
      "count": 134
    },
    "hooks": {
      "opening": "Imlil vit au rythme du Toubkal (4167 m) : muletiers, trekkeurs et familles berbères partagent la vallée.",
      "routeFocus": "Vallée Azzaden en alternative moins fréquentée qu'Imlil centre.",
      "landscape": "Terrasses de noyers, sommets enneigés, villages accrochés.",
      "culture": "Coopératives féminines et savoir-faire berbère de montagne.",
      "highlight": "Premier regard sur le massif du Toubkal depuis le gîte.",
      "cuisine": "Couscous berbère du vendredi si timing favorable.",
      "whoFor": "Préparation trek Toubkal ou découverte montagne douce.",
      "seasonNote": "Hiver froid ; été frais — idéal échapper chaleur Marrakech.",
      "whyBook": "Gîtes familiaux sélectionnés.",
      "closing": "Imlil : l'âme berbère de l'Atlas.",
      "keywordPhrase": "circuit Imlil vallée Toubkal",
      "tips": [
        "Couche chaude même en été pour la nuit."
      ],
      "practical": [
        "Prélude possible au trek Toubkal."
      ],
      "faqExtra": [
        {
          "question": "Altitude Imlil ?",
          "answer": "1740 m — hydratez-vous et avancez lentement les premières heures."
        }
      ],
      "extraParagraphs": []
    }
  },
  {
    "imageWidth": 1400,
    "imageHeight": 900,
    "featured": false,
    "blogLinks": [
      {
        "title": "Guide ultime pour visiter Marrakech",
        "path": "/blog/ultimate-guide-visiting-marrakech-2025"
      },
      {
        "title": "Trekking à dos de chameau dans le Sahara",
        "path": "/blog/camel-trekking-sahara-what-to-expect"
      },
      {
        "title": "Cuisine marocaine : 15 plats à goûter",
        "path": "/blog/moroccan-cuisine-15-dishes-you-must-try"
      }
    ],
    "touristType": [
      "Voyageurs",
      "Couples",
      "Familles"
    ],
    "slug": "circuit-oukaimeden",
    "category": "atlas",
    "h1": "Circuit Oukaïmeden – Station de montagne",
    "title": "Circuit Oukaïmeden",
    "metaTitle": "Circuit Oukaïmeden station panoramas Atlas – circuit Maroc",
    "metaDescription": "Oukaïmeden : station de montagne, air pur et panoramas du Haut Atlas. Escapade alpine depuis Marrakech, idéale en journée ou week-end neige.",
    "keywords": [
      "Oukaïmeden",
      "ski Maroc",
      "Atlas hiver"
    ],
    "shortDescription": "Oukaïmeden à 2600 m : ski en hiver, randonnée alpine en été — l'Atlas sportif à 80 km de Marrakech.",
    "duration": "2 jours / 1 nuit",
    "availability": "Hiver ski / été randonnée",
    "from": "Marrakech",
    "to": "Marrakech",
    "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&q=80",
    "imageAlt": "Oukaïmeden neige Atlas",
    "imageTitle": "Oukaïmeden station",
    "highlights": [
      "Station Oukaïmeden 2600 m",
      "Ski alpin (hiver)",
      "Randonnée alpine (été)",
      "Vallée Ourika",
      "Panoramas enneigés"
    ],
    "included": [
      "Transport",
      "1 nuit",
      "PD",
      "Guide"
    ],
    "excluded": [
      "Repas",
      "Matériel ski",
      "Pourboires"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Marrakech – Ourika – Oukaïmeden",
        "text": "Montée station, activités."
      },
      {
        "day": 2,
        "title": "Oukaïmeden – Marrakech",
        "text": "Matinée montagne, retour."
      }
    ],
    "destinations": [
      {
        "name": "Marrakech",
        "path": "/destinations/marrakech"
      },
      {
        "name": "Atlas Mountains",
        "path": "/destinations/atlas-mountains"
      }
    ],
    "similarSlugs": [
      "circuit-imlil",
      "trek-toubkal",
      "excursion-ourika",
      "cascades-ouzoud"
    ],
    "fromPrice": 140,
    "rating": {
      "value": 4.7,
      "count": 88
    },
    "hooks": {
      "opening": "Oukaïmeden surprend : plus haute station d'Afrique, accessible depuis Marrakech en demi-journée.",
      "routeFocus": "Montée progressive via Ourika — adaptation altitude essentielle.",
      "landscape": "Pistes enneigées hiver, prairies alpines été, sommets à 360°.",
      "culture": "Berbères de montagne et tradition pastorale estivale.",
      "highlight": "Ski au soleil avec vue sur Marrakech par temps clair.",
      "cuisine": "Harira chaude après le ski, tajine aux légumes de montagne.",
      "whoFor": "Skieurs débutants, familles, randonneurs estivaux.",
      "seasonNote": "Ski janvier-mars ; randonnée juin-septembre.",
      "whyBook": "Timing adapté à la saison et conditions neige.",
      "closing": "L'Atlas en mode sportif.",
      "keywordPhrase": "circuit Oukaïmeden ski Atlas",
      "tips": [
        "Lunettes soleil + crème solaire en altitude."
      ],
      "practical": [
        "Location ski sur place hiver."
      ],
      "faqExtra": [
        {
          "question": "Ski pour débutants ?",
          "answer": "Oui, petites pistes et moniteurs locaux disponibles."
        }
      ],
      "extraParagraphs": []
    }
  },
  {
    "imageWidth": 1400,
    "imageHeight": 900,
    "featured": true,
    "blogLinks": [
      {
        "title": "Guide ultime pour visiter Marrakech",
        "path": "/blog/ultimate-guide-visiting-marrakech-2025"
      },
      {
        "title": "Trekking à dos de chameau dans le Sahara",
        "path": "/blog/camel-trekking-sahara-what-to-expect"
      },
      {
        "title": "Cuisine marocaine : 15 plats à goûter",
        "path": "/blog/moroccan-cuisine-15-dishes-you-must-try"
      }
    ],
    "touristType": [
      "Randonneurs",
      "Aventuriers",
      "Sportifs"
    ],
    "slug": "trek-toubkal",
    "category": "atlas",
    "h1": "Trek Toubkal – Sommet du Maroc",
    "title": "Trek Toubkal",
    "metaTitle": "Trek Toubkal 4167 m toit du Maroc Atlas – circuit Maroc",
    "metaDescription": "Ascension du Jbel Toubkal (4167 m) : refuge de montagne, guides expérimentés et panoramas exceptionnels. Trek Atlas organisé avec Sahara Visite.",
    "keywords": [
      "Toubkal",
      "trek Toubkal",
      "4167 m Maroc"
    ],
    "shortDescription": "Atteignez le toit du Maroc : 4167 m au sommet du Toubkal, trek 3 jours depuis Imlil avec muletiers berbères.",
    "duration": "3 jours / 2 nuits",
    "availability": "Avril–octobre (sommet)",
    "from": "Marrakech",
    "to": "Marrakech",
    "image": "https://images.unsplash.com/photo-1486870591958-9b9d0d1c2daf?w=1400&q=80",
    "imageAlt": "Sommet Toubkal enneigé",
    "imageTitle": "Trek Toubkal 4167 m",
    "highlights": [
      "Sommet 4167 m",
      "Refuge Toubkal CAF",
      "Vallée Imlil",
      "Muletiers berbères",
      "Lever de soleil sommet"
    ],
    "included": [
      "Transport",
      "2 nuits refuge/gîte",
      "PD et dîners trek",
      "Guide certifié",
      "Mulet bagages"
    ],
    "excluded": [
      "Location équipement",
      "Pourboires muletiers",
      "Assurance"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Marrakech – Imlil – Refuge",
        "text": "Trek Imlil au refuge Toubkal (3207 m)."
      },
      {
        "day": 2,
        "title": "Refuge – Sommet – Refuge",
        "text": "Ascension 4167 m, retour refuge."
      },
      {
        "day": 3,
        "title": "Refuge – Imlil – Marrakech",
        "text": "Descente, retour Marrakech."
      }
    ],
    "destinations": [
      {
        "name": "Marrakech",
        "path": "/destinations/marrakech"
      },
      {
        "name": "Atlas Mountains",
        "path": "/destinations/atlas-mountains"
      }
    ],
    "similarSlugs": [
      "circuit-imlil",
      "excursion-ourika",
      "circuit-oukaimeden",
      "cascades-ouzoud"
    ],
    "fromPrice": 320,
    "rating": {
      "value": 4.9,
      "count": 198
    },
    "hooks": {
      "opening": "Le Toubkal (4167 m) est le toit du Maghreb — accessible sans être alpiniste, mais exigeant physiquement.",
      "routeFocus": "Itinéraire classique Imlil → refuge → sommet → descente en 3 jours.",
      "landscape": "Vallées berbères, rochers, neige éternelle au sommet.",
      "culture": "Muletiers et refuges CAF : écosystème montagne marocain.",
      "highlight": "Lever de soleil au sommet — 360° sur l'Atlas et le Sahara lointain.",
      "cuisine": "Tagines au refuge, thé à la menthe après l'effort.",
      "whoFor": "Bon condition physique, expérience randonnée recommandée.",
      "seasonNote": "Sommet avril-octobre ; crampons possibles printemps automne.",
      "whyBook": "Guides certifiés, acclimatation progressive.",
      "closing": "4167 m : votre sommet marocain.",
      "keywordPhrase": "trek Toubkal sommet Maroc",
      "tips": [
        "Entraînement cardio avant départ.",
        "Couches multiples et frontale."
      ],
      "practical": [
        "Location bâtons/crampons sur place."
      ],
      "faqExtra": [
        {
          "question": "Faut-il être alpiniste ?",
          "answer": "Non, randonneur entraîné suffit ; pas de rocher technique mais altitude réelle."
        }
      ],
      "extraParagraphs": [
        "L'acclimatation à 3207 m au refuge la veille du sommet est cruciale. Sahara Visite programme une montée progressive pour limiter le mal aigu des montagnes."
      ]
    }
  },
  {
    "imageWidth": 1400,
    "imageHeight": 900,
    "featured": false,
    "blogLinks": [
      {
        "title": "Guide ultime pour visiter Marrakech",
        "path": "/blog/ultimate-guide-visiting-marrakech-2025"
      },
      {
        "title": "Trekking à dos de chameau dans le Sahara",
        "path": "/blog/camel-trekking-sahara-what-to-expect"
      },
      {
        "title": "Cuisine marocaine : 15 plats à goûter",
        "path": "/blog/moroccan-cuisine-15-dishes-you-must-try"
      }
    ],
    "touristType": [
      "Voyageurs",
      "Couples",
      "Familles"
    ],
    "slug": "cascades-ouzoud",
    "category": "atlas",
    "h1": "Circuit Cascades d'Ouzoud",
    "title": "Cascades d'Ouzoud",
    "metaTitle": "Cascades d’Ouzoud nature berbère depuis Atlas au Maroc",
    "metaDescription": "Cascades d’Ouzoud : chutes spectaculaires, sentiers ombragés et singes magots. Nature berbère à l’ouest de Marrakech, en journée ou avec nuit.",
    "keywords": [
      "Ouzoud",
      "cascades Maroc",
      "chutes 110 m"
    ],
    "shortDescription": "Les cascades d'Ouzoud plongent de 110 m dans un cirque verdoyant — l'une des merveilles naturelles du Maroc.",
    "duration": "2 jours / 1 nuit",
    "availability": "Toute l'année",
    "from": "Marrakech",
    "to": "Marrakech",
    "image": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1400&q=80",
    "imageAlt": "Cascades Ouzoud 110 m",
    "imageTitle": "Cascades Ouzoud",
    "highlights": [
      "Chutes 110 m",
      "Singes magots",
      "Barques sous les chutes",
      "Moyen Atlas",
      "Oliveraies"
    ],
    "included": [
      "Transport",
      "1 nuit",
      "PD",
      "Guide"
    ],
    "excluded": [
      "Repas",
      "Barques",
      "Pourboires"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Marrakech – Ouzoud",
        "text": "Chutes, randonnée cirque, nuit local."
      },
      {
        "day": 2,
        "title": "Ouzoud – Marrakech",
        "text": "Matinée chutes, retour."
      }
    ],
    "destinations": [
      {
        "name": "Marrakech",
        "path": "/destinations/marrakech"
      },
      {
        "name": "Atlas Mountains",
        "path": "/destinations/atlas-mountains"
      }
    ],
    "similarSlugs": [
      "excursion-ouzoud",
      "circuit-akchour",
      "excursion-ourika",
      "circuit-imlil"
    ],
    "fromPrice": 130,
    "rating": {
      "value": 4.8,
      "count": 223
    },
    "hooks": {
      "opening": "Ouzoud impressionne : 110 m d'eau dans un cirque de roche rouge et d'oliviers — spectacle rare au Maroc.",
      "routeFocus": "Descente au pied des chutes puis remontée par sentier opposé.",
      "landscape": "Arc-en-ciel permanent, falaises rouges, verdure luxuriante.",
      "culture": "Guides locaux et barques traditionnelles sous les chutes.",
      "highlight": "Vue depuis le belvédère supérieur — voir la chute entière.",
      "cuisine": "Truite fraîche locale, salade marocaine en terrasse.",
      "whoFor": "Familles, photographes, amateurs nature.",
      "seasonNote": "Débit maximal printemps ; affluence week-ends — semaine préférable.",
      "whyBook": "Évite files en arrivant tôt avec notre timing.",
      "closing": "110 m d'émerveillement à Ouzoud.",
      "keywordPhrase": "circuit cascades Ouzoud Atlas",
      "tips": [
        "Antidérapant sur sentiers humides.",
        "Ne nourrissez pas singes."
      ],
      "practical": [
        "Excursion journée aussi disponible."
      ],
      "faqExtra": [
        {
          "question": "Baignade possible ?",
          "answer": "Non au pied direct ; barques pour approcher brume."
        }
      ],
      "extraParagraphs": []
    }
  },
  {
    "imageWidth": 1400,
    "imageHeight": 900,
    "featured": false,
    "blogLinks": [
      {
        "title": "Guide ultime pour visiter Marrakech",
        "path": "/blog/ultimate-guide-visiting-marrakech-2025"
      },
      {
        "title": "Trekking à dos de chameau dans le Sahara",
        "path": "/blog/camel-trekking-sahara-what-to-expect"
      },
      {
        "title": "Cuisine marocaine : 15 plats à goûter",
        "path": "/blog/moroccan-cuisine-15-dishes-you-must-try"
      }
    ],
    "touristType": [
      "Voyageurs",
      "Couples",
      "Familles"
    ],
    "slug": "circuit-casablanca",
    "category": "atlantique",
    "h1": "Circuit Casablanca – Métropole atlantique",
    "title": "Circuit Casablanca",
    "metaTitle": "Circuit Casablanca Hassan II corniche Habous – circuit Maroc",
    "metaDescription": "Visitez Casablanca : mosquée Hassan II, Quartier Habous, Art déco et corniche Aïn Diab. Escapade urbaine sur la côte Atlantique marocaine. Réservez facilement.",
    "keywords": [
      "Casablanca",
      "Hassan II",
      "circuit Casablanca"
    ],
    "shortDescription": "Casablanca, poumon économique du Maroc : Hassan II, art déco et vie nocturne atlantique.",
    "duration": "2 jours / 1 nuit",
    "availability": "Toute l'année",
    "from": "Casablanca",
    "to": "Casablanca",
    "image": "https://images.unsplash.com/photo-1559586616-361e18714958?w=1400&q=80",
    "imageAlt": "Mosquée Hassan II Casablanca",
    "imageTitle": "Circuit Casablanca",
    "highlights": [
      "Mosquée Hassan II",
      "Quartier Habous",
      "Art déco centre-ville",
      "Corniche Ain Diab",
      "Marché central"
    ],
    "included": [
      "Transport",
      "1 nuit hôtel",
      "PD",
      "Guide ville"
    ],
    "excluded": [
      "Repas",
      "Entrée Hassan II",
      "Pourboires"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Casablanca – Hassan II – Habous",
        "text": "Mosquée, médina nouvelle, souks."
      },
      {
        "day": 2,
        "title": "Casablanca – Art déco – Corniche",
        "text": "Architecture coloniale, Ain Diab."
      }
    ],
    "destinations": [],
    "similarSlugs": [
      "circuit-el-jadida",
      "casablanca-rabat-meknes-fes",
      "circuit-essaouira",
      "circuit-oualidia"
    ],
    "fromPrice": 155,
    "rating": {
      "value": 4.7,
      "count": 112
    },
    "hooks": {
      "opening": "Casablanca surprend ceux qui ne la voient qu'en transit : métropole vibrante entre Hassan II et art déco.",
      "routeFocus": "Centre art déco, Habous et corniche — trois Casablanca en une.",
      "landscape": "Atlantique déchaîné, minaret géant, façades années 30.",
      "culture": "Métissage urbain, scène artistique et gastronomie cosmopolite.",
      "highlight": "Hassan II : seule mosquée visitable au Maroc — intérieur majestueux.",
      "cuisine": "Fruits de mer port, tajine moderne, pâtisseries Habous.",
      "whoFor": "Business travelers, amateurs architecture, escale aéroport.",
      "seasonNote": "Brume matinale automne-hiver ; été animé corniche.",
      "whyBook": "Transfert Mohammed V inclus sur demande.",
      "closing": "Casablanca au-delà du cliché.",
      "keywordPhrase": "circuit Casablanca Hassan II",
      "tips": [
        "Hassan II : horaires prières modifient visites."
      ],
      "practical": [
        "Extension Rabat 1 jour facile."
      ],
      "faqExtra": [
        {
          "question": "Vaut-il le détour ?",
          "answer": "Oui pour Hassan II et art déco — pas une médina traditionnelle mais fascinante."
        }
      ],
      "extraParagraphs": []
    }
  },
  {
    "imageWidth": 1400,
    "imageHeight": 900,
    "featured": false,
    "blogLinks": [
      {
        "title": "Guide ultime pour visiter Marrakech",
        "path": "/blog/ultimate-guide-visiting-marrakech-2025"
      },
      {
        "title": "Trekking à dos de chameau dans le Sahara",
        "path": "/blog/camel-trekking-sahara-what-to-expect"
      },
      {
        "title": "Cuisine marocaine : 15 plats à goûter",
        "path": "/blog/moroccan-cuisine-15-dishes-you-must-try"
      }
    ],
    "touristType": [
      "Voyageurs",
      "Couples",
      "Familles"
    ],
    "slug": "circuit-el-jadida",
    "category": "atlantique",
    "h1": "Circuit El Jadida – Citadelle portugaise",
    "title": "Circuit El Jadida",
    "metaTitle": "Circuit El Jadida cité portugaise UNESCO – circuit Maroc",
    "metaDescription": "El Jadida : citadelle portugaise UNESCO, citerne souterraine et plages atlantiques. Circuit patrimoine sur la côte marocaine ensoleillée et douce.",
    "keywords": [
      "El Jadida",
      "Mazagan",
      "UNESCO portugais"
    ],
    "shortDescription": "El Jadida (Mazagan) : vestiges portugais UNESCO face à l'Atlantique, entre histoire et plages.",
    "duration": "2 jours / 1 nuit",
    "availability": "Toute l'année",
    "from": "Casablanca",
    "to": "El Jadida",
    "image": "https://images.unsplash.com/photo-1559586616-361e18714958?w=1400&q=80",
    "imageAlt": "Citadelle portugaise El Jadida",
    "imageTitle": "El Jadida Mazagan",
    "highlights": [
      "Citadelle portugaise UNESCO",
      "Citerne Manuelienne",
      "Plages El Jadida",
      "Port de pêche",
      "Architecture coloniale"
    ],
    "included": [
      "Transport",
      "1 nuit",
      "PD",
      "Guide"
    ],
    "excluded": [
      "Repas",
      "Entrées",
      "Pourboires"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Casablanca – El Jadida",
        "text": "Citadelle, citerne, médina."
      },
      {
        "day": 2,
        "title": "El Jadida – Plages",
        "text": "Plage, retour Casablanca."
      }
    ],
    "destinations": [],
    "similarSlugs": [
      "circuit-casablanca",
      "circuit-oualidia",
      "circuit-essaouira",
      "circuit-asilah"
    ],
    "fromPrice": 145,
    "rating": {
      "value": 4.7,
      "count": 73
    },
    "hooks": {
      "opening": "El Jadida conserve la citadelle portugaise Mazagan — classée UNESCO, face à l'océan.",
      "routeFocus": "Citadelle compacte : citerne voûtée, église, remparts en 2h.",
      "landscape": "Pierre dorée portugaise contre bleu atlantique.",
      "culture": "Histoire luso-marocaine du XVIe siècle encore lisible.",
      "highlight": "Citerne Manuelienne — voûtes et reflets (film Othello).",
      "cuisine": "Poisson port, huîtres région, vin local (unique au Maroc).",
      "whoFor": "Historiens, amateurs plages proches Casablanca.",
      "seasonNote": "Été plages ; citadelle toute l'année.",
      "whyBook": "Timing combiné Casablanca-El Jadida.",
      "closing": "Le Portugal au Maroc.",
      "keywordPhrase": "circuit El Jadida Mazagan UNESCO",
      "tips": [
        "Citerne : torche utile."
      ],
      "practical": [
        "1h15 de Casablanca."
      ],
      "faqExtra": [
        {
          "question": "Lien avec Mazagan resort ?",
          "answer": "Site UNESCO séparé du resort golf — les deux visitables."
        }
      ],
      "extraParagraphs": []
    }
  },
  {
    "imageWidth": 1400,
    "imageHeight": 900,
    "featured": false,
    "blogLinks": [
      {
        "title": "Guide ultime pour visiter Marrakech",
        "path": "/blog/ultimate-guide-visiting-marrakech-2025"
      },
      {
        "title": "Trekking à dos de chameau dans le Sahara",
        "path": "/blog/camel-trekking-sahara-what-to-expect"
      },
      {
        "title": "Cuisine marocaine : 15 plats à goûter",
        "path": "/blog/moroccan-cuisine-15-dishes-you-must-try"
      }
    ],
    "touristType": [
      "Voyageurs",
      "Couples",
      "Familles"
    ],
    "slug": "circuit-oualidia",
    "category": "atlantique",
    "h1": "Circuit Oualidia – Lagune aux huîtres",
    "title": "Circuit Oualidia",
    "metaTitle": "Circuit Oualidia lagune huîtres côte sauvage – circuit Maroc",
    "metaDescription": "Oualidia : lagune préservée, huîtres fraîches et plages sauvages. Escapade gastronomique et nature sur la côte Atlantique du Maroc, hors saison.",
    "keywords": [
      "Oualidia",
      "huîtres Maroc",
      "lagune Oualidia"
    ],
    "shortDescription": "Oualidia : lagune calme, huîtres réputées et plages sauvages — la Côte d'Azur marocaine discrète.",
    "duration": "2 jours / 1 nuit",
    "availability": "Toute l'année",
    "from": "Casablanca",
    "to": "Oualidia",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&q=80",
    "imageAlt": "Lagune Oualidia",
    "imageTitle": "Oualidia huîtres",
    "highlights": [
      "Lagune naturelle",
      "Parcs à huîtres",
      "Plages sauvages",
      "Oiseaux migrateurs",
      "Fruits de mer"
    ],
    "included": [
      "Transport",
      "1 nuit",
      "PD",
      "Guide"
    ],
    "excluded": [
      "Repas huîtres",
      "Pourboires"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Casablanca – Oualidia",
        "text": "Lagune, dégustation huîtres, plage."
      },
      {
        "day": 2,
        "title": "Oualidia – Retour",
        "text": "Observation oiseaux, retour."
      }
    ],
    "destinations": [],
    "similarSlugs": [
      "circuit-el-jadida",
      "circuit-essaouira",
      "circuit-casablanca",
      "circuit-agadir"
    ],
    "fromPrice": 168,
    "rating": {
      "value": 4.8,
      "count": 91
    },
    "hooks": {
      "opening": "Oualidia est le secret gastronomique de la côte : lagune protégée et huîtres parmi les meilleures du royaume.",
      "routeFocus": "Lagune côté calme, océan côté vagues — deux mondes en un village.",
      "landscape": "Bande de sable entre lagune et Atlantique, lumière douce.",
      "culture": "Élevage ostréicole familial depuis décennies.",
      "highlight": "Dégustation huîtres au bord de la lagune — fraîcheur absolue.",
      "cuisine": "Huîtres, moules, poisson grillé — menu iodé complet.",
      "whoFor": "Gourmets, couples, amateurs ornithologie.",
      "seasonNote": "Huîtres excellentes toute l'année ; migrateurs printemps-automne.",
      "whyBook": "Adresses ostréicoles partenaires sélectionnées.",
      "closing": "Oualidia : iodé et raffinement.",
      "keywordPhrase": "circuit Oualidia lagune huîtres",
      "tips": [
        "Réserver dégustation huîtres midi."
      ],
      "practical": [
        "2h30 Casablanca."
      ],
      "faqExtra": [
        {
          "question": "Baignade lagune ou océan ?",
          "answer": "Lagune calme pour familles ; océan pour surfeurs expérimentés."
        }
      ],
      "extraParagraphs": []
    }
  },
  {
    "imageWidth": 1400,
    "imageHeight": 900,
    "featured": true,
    "blogLinks": [
      {
        "title": "Guide ultime pour visiter Marrakech",
        "path": "/blog/ultimate-guide-visiting-marrakech-2025"
      },
      {
        "title": "Trekking à dos de chameau dans le Sahara",
        "path": "/blog/camel-trekking-sahara-what-to-expect"
      },
      {
        "title": "Cuisine marocaine : 15 plats à goûter",
        "path": "/blog/moroccan-cuisine-15-dishes-you-must-try"
      }
    ],
    "touristType": [
      "Voyageurs",
      "Couples",
      "Familles"
    ],
    "slug": "circuit-essaouira",
    "category": "atlantique",
    "h1": "Circuit Essaouira – Perle de l'Atlantique",
    "title": "Circuit Essaouira",
    "metaTitle": "Circuit Essaouira médina Skala et alizés – circuit Maroc",
    "metaDescription": "Essaouira : médina venteuse, Skala des remparts, port de pêche et plages. Circuit Atlantique entre culture, musique gnaoua et fruits de mer.",
    "keywords": [
      "Essaouira",
      "Mogador",
      "médina UNESCO atlantique"
    ],
    "shortDescription": "Essaouira, Mogador des alizés : médina UNESCO, remparts face à l'océan et ateliers de marqueterie de thuya.",
    "duration": "3 jours / 2 nuits",
    "availability": "Toute l'année",
    "from": "Marrakech",
    "to": "Essaouira",
    "image": "https://images.unsplash.com/photo-1559586616-361e18714958?w=1400&q=80",
    "imageAlt": "Remparts Essaouira océan",
    "imageTitle": "Essaouira Mogador",
    "highlights": [
      "Médina UNESCO",
      "Skala du Port",
      "Ateliers marqueterie thuya",
      "Plage Essaouira",
      "Port de pêche"
    ],
    "included": [
      "Transport",
      "2 nuits riad",
      "PD",
      "Guide médina"
    ],
    "excluded": [
      "Repas",
      "Entrées",
      "Pourboires"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Marrakech – Essaouira",
        "text": "Arganiers, arrivée, remparts."
      },
      {
        "day": 2,
        "title": "Essaouira – Médina – Port",
        "text": "Souks, Skala, ateliers thuya."
      },
      {
        "day": 3,
        "title": "Essaouira – Plage – Départ",
        "text": "Plage, retour Marrakech ou fin."
      }
    ],
    "destinations": [
      {
        "name": "Marrakech",
        "path": "/destinations/marrakech"
      },
      {
        "name": "Essaouira",
        "path": "/destinations/essaouira"
      }
    ],
    "similarSlugs": [
      "excursion-essaouira",
      "circuit-agadir",
      "circuit-oualidia",
      "circuit-asilah"
    ],
    "fromPrice": 220,
    "rating": {
      "value": 4.9,
      "count": 267
    },
    "hooks": {
      "opening": "Essaouira respire : alizés constants, médina blanc-bleu et port où les goélands disputent le poisson aux pêcheurs.",
      "routeFocus": "Médina à taille humaine — tout accessible à pied en une journée.",
      "landscape": "Remparts atlantiques, île Mogador, lumière argentée permanente.",
      "culture": "Gnaoua, marqueterie thuya, festival musiques du monde.",
      "highlight": "Skala du Port — canons face aux vagues (Game of Thrones).",
      "cuisine": "Poisson port grillé minute, céleri marocain, huile argan.",
      "whoFor": "Artistes, surfeurs, couples anti-canicule Marrakech.",
      "seasonNote": "Alizés rafraîchissants été ; hiver venteux mais magique.",
      "whyBook": "Riads face à la mer ou dans médina selon préférence.",
      "closing": "Essaouira : Mogador vous attend.",
      "keywordPhrase": "circuit Essaouira Mogador atlantique",
      "tips": [
        "Veste coupe-vent indispensable."
      ],
      "practical": [
        "One-way Marrakech-Essaouira possible."
      ],
      "faqExtra": [
        {
          "question": "Surf débutant ?",
          "answer": "Plages adaptées et écoles locales — nous orientons."
        }
      ],
      "extraParagraphs": []
    }
  },
  {
    "imageWidth": 1400,
    "imageHeight": 900,
    "featured": false,
    "blogLinks": [
      {
        "title": "Guide ultime pour visiter Marrakech",
        "path": "/blog/ultimate-guide-visiting-marrakech-2025"
      },
      {
        "title": "Trekking à dos de chameau dans le Sahara",
        "path": "/blog/camel-trekking-sahara-what-to-expect"
      },
      {
        "title": "Cuisine marocaine : 15 plats à goûter",
        "path": "/blog/moroccan-cuisine-15-dishes-you-must-try"
      }
    ],
    "touristType": [
      "Voyageurs",
      "Couples",
      "Familles"
    ],
    "slug": "circuit-agadir",
    "category": "atlantique",
    "h1": "Circuit Agadir – Baie ensoleillée",
    "title": "Circuit Agadir",
    "metaTitle": "Circuit Agadir baie souk et kasbah Oufella – circuit Maroc",
    "metaDescription": "Agadir : baie ensoleillée, grand souk, kasbah Oufella et longues plages. Séjour Atlantique Sud Maroc entre détente et découvertes locales. Réservez facilement.",
    "keywords": [
      "Agadir",
      "Plages Agadir",
      "Paradise Valley"
    ],
    "shortDescription": "Agadir et sa baie ensoleillée : plages, souk El Had et porte d'entrée vers Paradise Valley et Taroudant.",
    "duration": "3 jours / 2 nuits",
    "availability": "Toute l'année",
    "from": "Agadir",
    "to": "Agadir",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&q=80",
    "imageAlt": "Baie Agadir ensoleillée",
    "imageTitle": "Circuit Agadir",
    "highlights": [
      "Baie et plages Agadir",
      "Souk El Had",
      "Kasbah Agadir Oufella",
      "Paradise Valley",
      "Taroudant option"
    ],
    "included": [
      "Transport",
      "2 nuits",
      "PD",
      "Guide"
    ],
    "excluded": [
      "Repas",
      "Pourboires"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Agadir – Kasbah – Souk",
        "text": "Panorama kasbah, souk El Had."
      },
      {
        "day": 2,
        "title": "Agadir – Paradise Valley",
        "text": "Excursion vallée paradis."
      },
      {
        "day": 3,
        "title": "Agadir – Taroudant – Retour",
        "text": "Petite Marrakech option."
      }
    ],
    "destinations": [
      {
        "name": "Essaouira",
        "path": "/destinations/essaouira"
      }
    ],
    "similarSlugs": [
      "excursion-paradise-valley",
      "circuit-essaouira",
      "circuit-oualidia",
      "excursion-ait-ben-haddou"
    ],
    "fromPrice": 195,
    "rating": {
      "value": 4.7,
      "count": 156
    },
    "hooks": {
      "opening": "Agadir reconstruite après 1960 offre 300 jours de soleil — base idéale pour plages et excursions vers l'Anti-Atlas.",
      "routeFocus": "Ville moderne + Paradise Valley + Taroudant en triangle compact.",
      "landscape": "Baie courbe, falaises kasbah, palmeraies Anti-Atlas.",
      "culture": "Souss berbère et marché El Had — plus grand souk du Maroc.",
      "highlight": "Kasbah Oufella — vue 360° sur baie reconstruite.",
      "cuisine": "Fish tagine, amlou argan, jus frais souk.",
      "whoFor": "Familles plage, seniors soleil, base excursions sud.",
      "seasonNote": "Ensoleillement maximal ; été caniculaire mais océan tempère.",
      "whyBook": "Combinable Paradise Valley et Taroudant.",
      "closing": "Agadir : soleil garanti.",
      "keywordPhrase": "circuit Agadir baie ensoleillée",
      "tips": [
        "Souk El Had : matin pour produits frais."
      ],
      "practical": [
        "Aéroport Agadir accueil possible."
      ],
      "faqExtra": [
        {
          "question": "Agadir ou Essaouira ?",
          "answer": "Agadir plages/bain ; Essaouira culture/alizés — complémentaires."
        }
      ],
      "extraParagraphs": []
    }
  },
  {
    "imageWidth": 1400,
    "imageHeight": 900,
    "featured": false,
    "blogLinks": [
      {
        "title": "Guide ultime pour visiter Marrakech",
        "path": "/blog/ultimate-guide-visiting-marrakech-2025"
      },
      {
        "title": "Trekking à dos de chameau dans le Sahara",
        "path": "/blog/camel-trekking-sahara-what-to-expect"
      },
      {
        "title": "Cuisine marocaine : 15 plats à goûter",
        "path": "/blog/moroccan-cuisine-15-dishes-you-must-try"
      }
    ],
    "touristType": [
      "Voyageurs",
      "Couples",
      "Familles"
    ],
    "slug": "circuit-ouarzazate",
    "category": "sud",
    "h1": "Circuit Ouarzazate – Hollywood du désert",
    "title": "Circuit Ouarzazate",
    "metaTitle": "Circuit Ouarzazate porte du désert kasbahs – circuit Maroc",
    "metaDescription": "Ouarzazate : studios de cinéma, kasbah Taourirt et porte mythique du désert. Circuit Sud Maroc entre lumière ocre et architecture de pisé. Réservez facilement.",
    "keywords": [
      "Ouarzazate",
      "Aït Ben Haddou",
      "studios Atlas"
    ],
    "shortDescription": "Ouarzazate, porte du désert : kasbahs, studios de cinéma et Aït Ben Haddou UNESCO à deux pas.",
    "duration": "3 jours / 2 nuits",
    "availability": "Toute l'année",
    "from": "Marrakech",
    "to": "Marrakech",
    "image": "https://images.unsplash.com/photo-1548013146-72479768bada?w=1400&q=80",
    "imageAlt": "Kasbah Ouarzazate",
    "imageTitle": "Ouarzazate Hollywood Maroc",
    "highlights": [
      "Kasbah Taourirt",
      "Studios Atlas Corporation",
      "Aït Ben Haddou UNESCO",
      "Vallée du Draa",
      "Skoura palmeraie"
    ],
    "included": [
      "Transport",
      "2 nuits",
      "PD",
      "Guide"
    ],
    "excluded": [
      "Repas",
      "Entrées studios",
      "Pourboires"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Marrakech – Tichka – Ouarzazate",
        "text": "Col Atlas, kasbah Taourirt."
      },
      {
        "day": 2,
        "title": "Ouarzazate – Aït Ben Haddou – Skoura",
        "text": "Ksar UNESCO, palmeraie."
      },
      {
        "day": 3,
        "title": "Skoura – Marrakech",
        "text": "Retour col Tichka."
      }
    ],
    "destinations": [
      {
        "name": "Marrakech",
        "path": "/destinations/marrakech"
      },
      {
        "name": "Atlas Mountains",
        "path": "/destinations/atlas-mountains"
      }
    ],
    "similarSlugs": [
      "excursion-ait-ben-haddou",
      "circuit-dades",
      "marrakech-merzouga-3-jours",
      "circuit-zagora"
    ],
    "fromPrice": 245,
    "rating": {
      "value": 4.8,
      "count": 178
    },
    "hooks": {
      "opening": "Ouarzazate est le Hollywood marocain : kasbahs de cinéma, studios Atlas et Aït Ben Haddou — décor de Gladiator et Game of Thrones.",
      "routeFocus": "Triangle Ouarzazate-Aït Ben Haddou-Skoura sans pression Merzouga.",
      "landscape": "Hamada, palmeraies, kasbahs de pisé ocre.",
      "culture": "Cinéma marocain et artisanat ksour.",
      "highlight": "Aït Ben Haddou au coucher — ksar doré UNESCO.",
      "cuisine": "Tajine aux dattes Draa, méchoui villageois.",
      "whoFor": "Cinéphiles, photographes kasbahs, familles.",
      "seasonNote": "Chaleur été — départs matinaux ; hiver lumineux.",
      "whyBook": "Timing Aït Ben Haddou hors foule bus.",
      "closing": "Ouarzazate : porte du grand Sud.",
      "keywordPhrase": "circuit Ouarzazate kasbahs cinéma",
      "tips": [
        "Studios Atlas : vérifier tournages en cours."
      ],
      "practical": [
        "Prélude désert Merzouga possible."
      ],
      "faqExtra": [
        {
          "question": "Entrer dans Aït Ben Haddou ?",
          "answer": "Oui, traversée du ksar avec guide local recommandée."
        }
      ],
      "extraParagraphs": []
    }
  },
  {
    "imageWidth": 1400,
    "imageHeight": 900,
    "featured": false,
    "blogLinks": [
      {
        "title": "Guide ultime pour visiter Marrakech",
        "path": "/blog/ultimate-guide-visiting-marrakech-2025"
      },
      {
        "title": "Trekking à dos de chameau dans le Sahara",
        "path": "/blog/camel-trekking-sahara-what-to-expect"
      },
      {
        "title": "Cuisine marocaine : 15 plats à goûter",
        "path": "/blog/moroccan-cuisine-15-dishes-you-must-try"
      }
    ],
    "touristType": [
      "Voyageurs",
      "Couples",
      "Familles"
    ],
    "slug": "circuit-dades",
    "category": "sud",
    "h1": "Circuit Vallée du Dadès",
    "title": "Circuit Dadès",
    "metaTitle": "Circuit vallée du Dadès gorges et kasbahs – circuit Maroc",
    "metaDescription": "Vallée du Dadès : gorges spectaculaires, route des kasbahs et paysages lunaires. Circuit Sud Maroc idéal pour la photo et la contemplation. Réservez facilement.",
    "keywords": [
      "Dadès",
      "vallée Dadès",
      "doigts de singe"
    ],
    "shortDescription": "La vallée du Dadès : gorges spectaculaires, kasbahs de la Route des Roses et formations rocheuses uniques.",
    "duration": "3 jours / 2 nuits",
    "availability": "Mars–novembre",
    "from": "Marrakech",
    "to": "Marrakech",
    "image": "https://images.unsplash.com/photo-1548013146-72479768bada?w=1400&q=80",
    "imageAlt": "Gorges du Dadès",
    "imageTitle": "Vallée Dadès",
    "highlights": [
      "Gorges du Dadès",
      "Doigts de singe",
      "Route des roses",
      "Kasbahs Amridil",
      "Villages berbères"
    ],
    "included": [
      "Transport",
      "2 nuits kasbah",
      "PD",
      "Guide"
    ],
    "excluded": [
      "Repas",
      "Pourboires"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Marrakech – Ouarzazate – Dadès",
        "text": "Atlas, entrée vallée."
      },
      {
        "day": 2,
        "title": "Dadès – Gorges – Skoura",
        "text": "Doigts de singe, kasbahs."
      },
      {
        "day": 3,
        "title": "Skoura – Marrakech",
        "text": "Palmeraie, retour Tichka."
      }
    ],
    "destinations": [
      {
        "name": "Marrakech",
        "path": "/destinations/marrakech"
      },
      {
        "name": "Atlas Mountains",
        "path": "/destinations/atlas-mountains"
      }
    ],
    "similarSlugs": [
      "circuit-todra",
      "circuit-ouarzazate",
      "marrakech-merzouga-4-jours",
      "circuit-zagora"
    ],
    "fromPrice": 235,
    "rating": {
      "value": 4.8,
      "count": 142
    },
    "hooks": {
      "opening": "Le Dadès sculpte des gorges et des « doigts de singe » — paysage géologique unique entre Atlas et Sahara.",
      "routeFocus": "Route des Roses (avril-mei) ou version automne selon saison.",
      "landscape": "Falaises rouges, kasbahs, palmeraies en contrebas.",
      "culture": "Berbères du Dadès et culture de la rose.",
      "highlight": "Courbe iconique des gorges — photo carte postale.",
      "cuisine": "Eau de rose, confiture rose, tajine berbère.",
      "whoFor": "Photographes, amateurs géologie, route kasbahs.",
      "seasonNote": "Festival roses El Kelaa M'Gouna mai.",
      "whyBook": "Kasbahs authentiques hors circuits bondés.",
      "closing": "Le Dadès : géologie et poésie.",
      "keywordPhrase": "circuit vallée Dadès gorges",
      "tips": [
        "Route sinueuse gorges : mal des transports possible."
      ],
      "practical": [
        "Combinable Todra en 4 jours."
      ],
      "faqExtra": [
        {
          "question": "Route des roses quand ?",
          "answer": "Floraison avril-mai ; circuit adapté avec visites coopératives."
        }
      ],
      "extraParagraphs": []
    }
  },
  {
    "imageWidth": 1400,
    "imageHeight": 900,
    "featured": false,
    "blogLinks": [
      {
        "title": "Guide ultime pour visiter Marrakech",
        "path": "/blog/ultimate-guide-visiting-marrakech-2025"
      },
      {
        "title": "Trekking à dos de chameau dans le Sahara",
        "path": "/blog/camel-trekking-sahara-what-to-expect"
      },
      {
        "title": "Cuisine marocaine : 15 plats à goûter",
        "path": "/blog/moroccan-cuisine-15-dishes-you-must-try"
      }
    ],
    "touristType": [
      "Voyageurs",
      "Couples",
      "Familles"
    ],
    "slug": "circuit-todra",
    "category": "sud",
    "h1": "Circuit Gorges du Todra",
    "title": "Circuit Todra",
    "metaTitle": "Circuit gorges du Todra canyon et palmeraie – circuit Maroc",
    "metaDescription": "Gorges du Todra : canyon vertical de 300 m, palmeraie luxuriante et ambiance escalade. Circuit Sud Maroc nature, pierre ocre et oasis verdoyante.",
    "keywords": [
      "Todra",
      "gorges Todra",
      "300 m falaises"
    ],
    "shortDescription": "Les gorges du Todra : 300 m de falaises vertigineuses où l'oued serpente entre parois de roche.",
    "duration": "3 jours / 2 nuits",
    "availability": "Toute l'année",
    "from": "Marrakech",
    "to": "Marrakech",
    "image": "https://images.unsplash.com/photo-1548013146-72479768bada?w=1400&q=80",
    "imageAlt": "Gorges du Todra 300 m",
    "imageTitle": "Gorges Todra",
    "highlights": [
      "Falaises 300 m",
      "Palmeraie Todra",
      "Kasbahs Tinghir",
      "Randonnée gorge",
      "Route des kasbahs"
    ],
    "included": [
      "Transport",
      "2 nuits",
      "PD",
      "Guide"
    ],
    "excluded": [
      "Repas",
      "Pourboires"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Marrakech – Todra",
        "text": "Atlas, arrivée Tinghir."
      },
      {
        "day": 2,
        "title": "Todra – Randonnée – Dadès",
        "text": "Gorges matin, Dadès aprem."
      },
      {
        "day": 3,
        "title": "Dadès – Marrakech",
        "text": "Retour Atlas."
      }
    ],
    "destinations": [
      {
        "name": "Marrakech",
        "path": "/destinations/marrakech"
      },
      {
        "name": "Atlas Mountains",
        "path": "/destinations/atlas-mountains"
      }
    ],
    "similarSlugs": [
      "circuit-dades",
      "fes-merzouga",
      "marrakech-merzouga-4-jours",
      "circuit-ouarzazate"
    ],
    "fromPrice": 228,
    "rating": {
      "value": 4.8,
      "count": 131
    },
    "hooks": {
      "opening": "Todra impressionne : 300 m de falaises où grimpeurs et randonneurs côtoient palmeraie et villages.",
      "routeFocus": "Gorges tôt le matin — lumière rasante sur les parois.",
      "landscape": "Parois verticales rouges, oued vert, palmiers en bas.",
      "culture": "Tinghir berbère et agriculture oasienne.",
      "highlight": "Passer sous les falaises dans l'oued — fraîcheur garantie.",
      "cuisine": "Déjeuner guérite berbère aux gorges.",
      "whoFor": "Randonneurs légers, photographes, étape désert.",
      "seasonNote": "Éviter canicule midi — visite matinale.",
      "whyBook": "Nuit Tinghir pour accès aube gorges.",
      "closing": "Todra : vertige vert.",
      "keywordPhrase": "circuit gorges Todra 300 m",
      "tips": [
        "Sandales eau utiles dans oued."
      ],
      "practical": [
        "Extension Merzouga +1 jour."
      ],
      "faqExtra": [
        {
          "question": "Escalade possible ?",
          "answer": "Voies équipées disponibles ; informez-nous pour guide escalade."
        }
      ],
      "extraParagraphs": []
    }
  },
  {
    "imageWidth": 1400,
    "imageHeight": 900,
    "featured": false,
    "blogLinks": [
      {
        "title": "Guide ultime pour visiter Marrakech",
        "path": "/blog/ultimate-guide-visiting-marrakech-2025"
      },
      {
        "title": "Trekking à dos de chameau dans le Sahara",
        "path": "/blog/camel-trekking-sahara-what-to-expect"
      },
      {
        "title": "Cuisine marocaine : 15 plats à goûter",
        "path": "/blog/moroccan-cuisine-15-dishes-you-must-try"
      }
    ],
    "touristType": [
      "Voyageurs",
      "Couples",
      "Familles"
    ],
    "slug": "circuit-zagora",
    "category": "sud",
    "h1": "Circuit Zagora – Porte du désert",
    "title": "Circuit Zagora",
    "metaTitle": "Circuit Zagora vallée du Draa porte Sahara – circuit Maroc",
    "metaDescription": "Zagora et vallée du Draa : immenses palmeraies, dunes et panneau Tombouctou. Circuit Sud Maroc sur l’ancienne route des caravanes sahariennes.",
    "keywords": [
      "Zagora",
      "vallée Draa",
      "Tombouctou 52 jours"
    ],
    "shortDescription": "Zagora, dernière ville avant le Grand Désert : palmeraies du Draa et panneau légendaire « 52 jours à Tombouctou ».",
    "duration": "3 jours / 2 nuits",
    "availability": "Octobre–avril optimal",
    "from": "Marrakech",
    "to": "Marrakech",
    "image": "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1400&q=80",
    "imageAlt": "Zagora palmeraie Draa",
    "imageTitle": "Zagora porte désert",
    "highlights": [
      "Panneau Tombouctou",
      "Vallée du Draa",
      "Ksour de pisé",
      "Palmeraie Agdz",
      "Premières dunes Tinfo"
    ],
    "included": [
      "Transport",
      "2 nuits",
      "PD",
      "Guide"
    ],
    "excluded": [
      "Repas",
      "Pourboires"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Marrakech – Agdz – Zagora",
        "text": "Draa, ksour, nuit Zagora."
      },
      {
        "day": 2,
        "title": "Zagora – M'Hamid – Tinfo",
        "text": "Dunes Tinfo, retour Zagora."
      },
      {
        "day": 3,
        "title": "Zagora – Marrakech",
        "text": "Retour via Ouarzazate."
      }
    ],
    "destinations": [
      {
        "name": "Marrakech",
        "path": "/destinations/marrakech"
      },
      {
        "name": "Merzouga Sahara",
        "path": "/destinations/merzouga-sahara"
      }
    ],
    "similarSlugs": [
      "circuit-mhamid",
      "marrakech-erg-chigaga",
      "circuit-ouarzazate",
      "marrakech-merzouga-3-jours"
    ],
    "fromPrice": 215,
    "rating": {
      "value": 4.7,
      "count": 98
    },
    "hooks": {
      "opening": "Zagora marque la frontière psychologique du Sahara : panneau « 52 jours à Tombouctou » et palmeraies infinies du Draa.",
      "routeFocus": "Vallée du Draa sur 200 km de ksour — route caravanière historique.",
      "landscape": "Palmiers, hamada, premières dunes Tinfo.",
      "culture": "Caravanes jadis partaient vers Tombouctou — histoire vivante.",
      "highlight": "Photo panneau iconique Tombouctou 52 jours.",
      "cuisine": "Dattes Mejhoul, tajine dattes- amandes Draa.",
      "whoFor": "Première approche désert moins touristique que Merzouga.",
      "seasonNote": "Chaleur extrême été ; automne-hiver idéal.",
      "whyBook": "Alternative Merzouga plus proche et moins fréquentée.",
      "closing": "Zagora : où le Sahara commence.",
      "keywordPhrase": "circuit Zagora vallée Draa",
      "tips": [
        "Draa : prévoir eau pour route longue."
      ],
      "practical": [
        "Extension M'Hamid/Chigaga possible."
      ],
      "faqExtra": [
        {
          "question": "Zagora vs Merzouga ?",
          "answer": "Zagora : Draa, moins de monde, dunes plus modestes ; Merzouga : Erg Chebbi majestueux."
        }
      ],
      "extraParagraphs": []
    }
  },
  {
    "imageWidth": 1400,
    "imageHeight": 900,
    "featured": false,
    "blogLinks": [
      {
        "title": "Guide ultime pour visiter Marrakech",
        "path": "/blog/ultimate-guide-visiting-marrakech-2025"
      },
      {
        "title": "Trekking à dos de chameau dans le Sahara",
        "path": "/blog/camel-trekking-sahara-what-to-expect"
      },
      {
        "title": "Cuisine marocaine : 15 plats à goûter",
        "path": "/blog/moroccan-cuisine-15-dishes-you-must-try"
      }
    ],
    "touristType": [
      "Aventuriers",
      "Couples",
      "Photographes"
    ],
    "slug": "circuit-mhamid",
    "category": "sud",
    "h1": "Circuit M'Hamid – Dernière oasis",
    "title": "Circuit M'Hamid",
    "metaTitle": "Circuit M’Hamid dunes isolées fin de piste – circuit Maroc",
    "metaDescription": "M’Hamid el Ghizlane : fin de la route asphaltée, dunes isolées et bivouacs sauvages. Sahara authentique au fin fond du Sud marocain, hors foule.",
    "keywords": [
      "M'Hamid",
      "Erg Chigaga",
      "dernière oasis"
    ],
    "shortDescription": "M'Hamid El Ghizlane, dernière oasis habitée avant le Grand Désert et porte d'Erg Chigaga.",
    "duration": "4 jours / 3 nuits",
    "availability": "Octobre–avril",
    "from": "Marrakech",
    "to": "Marrakech",
    "image": "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1400&q=80",
    "imageAlt": "M'Hamid oasis désert",
    "imageTitle": "M'Hamid porte Chigaga",
    "highlights": [
      "M'Hamid El Ghizlane",
      "Dunes Erg Chigaga option",
      "Vallée Draa",
      "Villages nomades",
      "Piste Grand Désert"
    ],
    "included": [
      "4×4",
      "3 nuits",
      "Repas selon formule",
      "Guide pistes"
    ],
    "excluded": [
      "Boissons",
      "Pourboires"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Marrakech – Draa – Zagora",
        "text": "Vallée palmeraies."
      },
      {
        "day": 2,
        "title": "Zagora – M'Hamid",
        "text": "Dernière oasis, préparation désert."
      },
      {
        "day": 3,
        "title": "M'Hamid – Chigaga ou dunes locales",
        "text": "Piste dunes, bivouac."
      },
      {
        "day": 4,
        "title": "M'Hamid – Marrakech",
        "text": "Retour longue route Draa-Tichka."
      }
    ],
    "destinations": [
      {
        "name": "Marrakech",
        "path": "/destinations/marrakech"
      },
      {
        "name": "Merzouga Sahara",
        "path": "/destinations/merzouga-sahara"
      }
    ],
    "similarSlugs": [
      "marrakech-erg-chigaga",
      "circuit-zagora",
      "marrakech-merzouga-4-jours",
      "fes-merzouga"
    ],
    "fromPrice": 365,
    "rating": {
      "value": 4.8,
      "count": 72
    },
    "hooks": {
      "opening": "M'Hamid est la dernière adresse avant le vide : après, seules pistes et dunes de Chigaga jusqu'à la frontière algérienne.",
      "routeFocus": "Oasis → piste → bivouac : progression vers l'isolement total.",
      "landscape": "Reg, erg, hamada — géographie désert complète.",
      "culture": "Nomades Aarib et villages oasis du Draa aval.",
      "highlight": "Silence absolu aux dunes de Chigaga depuis M'Hamid.",
      "cuisine": "Cuisine nomade authentique — simplicité et générosité.",
      "whoFor": "Aventuriers post-Merzouga ou première fois Grand Désert.",
      "seasonNote": "Pistes fermées si pluie ; octobre-mars optimal.",
      "whyBook": "4×4 et bivouac nomade authentique.",
      "closing": "M'Hamid : fin du monde habité.",
      "keywordPhrase": "circuit M'Hamid Erg Chigaga",
      "tips": [
        "Prévoir sac de couchage propre si bivouac nomade."
      ],
      "practical": [
        "4 jours minimum pour Chigaga."
      ],
      "faqExtra": [
        {
          "question": "Différence M'Hamid et Merzouga ?",
          "answer": "M'Hamid mène au Grand Désert sauvage (Chigaga) ; Merzouga = Erg Chebbi accessible et équipé."
        }
      ],
      "extraParagraphs": []
    }
  },
  {
    "imageWidth": 1400,
    "imageHeight": 900,
    "featured": false,
    "blogLinks": [
      {
        "title": "Guide ultime pour visiter Marrakech",
        "path": "/blog/ultimate-guide-visiting-marrakech-2025"
      },
      {
        "title": "Trekking à dos de chameau dans le Sahara",
        "path": "/blog/camel-trekking-sahara-what-to-expect"
      },
      {
        "title": "Cuisine marocaine : 15 plats à goûter",
        "path": "/blog/moroccan-cuisine-15-dishes-you-must-try"
      }
    ],
    "touristType": [
      "Voyageurs",
      "Couples",
      "Familles"
    ],
    "slug": "excursion-essaouira",
    "category": "excursions",
    "h1": "Excursion Essaouira – Journée depuis Marrakech",
    "title": "Excursion Essaouira",
    "metaTitle": "Excursion Essaouira journée depuis Marrakech – circuit Maroc",
    "metaDescription": "Day trip Marrakech–Essaouira : médina, port de pêche et vent atlantique. Excursion côtière d’une journée avec chauffeur privé et pauses libres.",
    "keywords": [
      "excursion Essaouira",
      "Essaouira journée Marrakech"
    ],
    "shortDescription": "Journée complète à Essaouira depuis Marrakech : médina, port de pêche et remparts face à l'Atlantique.",
    "duration": "1 jour",
    "availability": "Départs quotidiens",
    "from": "Marrakech",
    "to": "Marrakech",
    "image": "https://images.unsplash.com/photo-1559586616-361e18714958?w=1400&q=80",
    "imageAlt": "Port Essaouira",
    "imageTitle": "Excursion Essaouira journée",
    "highlights": [
      "Médina UNESCO",
      "Port et Skala",
      "Ateliers thuya",
      "Plage",
      "Retour même jour"
    ],
    "included": [
      "Transport privé A/R",
      "Chauffeur francophone",
      "Temps libre médina"
    ],
    "excluded": [
      "Repas",
      "Guide médina option",
      "Pourboires"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Marrakech – Essaouira – Marrakech",
        "text": "Départ 8h, Essaouira 10h30-17h, retour Marrakech ~19h30."
      }
    ],
    "destinations": [
      {
        "name": "Marrakech",
        "path": "/destinations/marrakech"
      },
      {
        "name": "Essaouira",
        "path": "/destinations/essaouira"
      }
    ],
    "similarSlugs": [
      "circuit-essaouira",
      "excursion-ouzoud",
      "excursion-ourika-journee",
      "excursion-ait-ben-haddou"
    ],
    "fromPrice": 55,
    "rating": {
      "value": 4.8,
      "count": 389
    },
    "hooks": {
      "opening": "En une journée, Marrakech la chaude devient Essaouira la venteuse — changement de climat et d'ambiance garanti.",
      "routeFocus": "Route arganiers avec pause coopérative femmes possible.",
      "landscape": "Océan, remparts, médina blanche.",
      "culture": "Port actif — poisson grillé déjeuner recommandé.",
      "highlight": "Skala et vagues — instant atlantique pur.",
      "cuisine": "Grillades port — choix poisson du jour.",
      "whoFor": "Séjour Marrakech sans changer hôtel.",
      "seasonNote": "Alizés été rafraîchissants ; veste toute saison.",
      "whyBook": "Timing optimisé 5h sur place.",
      "closing": "Essaouira en journée depuis Marrakech.",
      "keywordPhrase": "excursion Essaouira journée Marrakech",
      "tips": [
        "Guide médina option +25€ recommandé."
      ],
      "practical": [
        "Retour ~19h30 Marrakech."
      ],
      "faqExtra": [
        {
          "question": "Temps libre suffisant ?",
          "answer": "5h couvrent médina, port et déjeuner — suffisant pour aperçu ; circuit 3j pour approfondir."
        }
      ],
      "extraParagraphs": []
    }
  },
  {
    "imageWidth": 1400,
    "imageHeight": 900,
    "featured": false,
    "blogLinks": [
      {
        "title": "Guide ultime pour visiter Marrakech",
        "path": "/blog/ultimate-guide-visiting-marrakech-2025"
      },
      {
        "title": "Trekking à dos de chameau dans le Sahara",
        "path": "/blog/camel-trekking-sahara-what-to-expect"
      },
      {
        "title": "Cuisine marocaine : 15 plats à goûter",
        "path": "/blog/moroccan-cuisine-15-dishes-you-must-try"
      }
    ],
    "touristType": [
      "Voyageurs",
      "Couples",
      "Familles"
    ],
    "slug": "excursion-ouzoud",
    "category": "excursions",
    "h1": "Excursion Ouzoud – Journée cascades",
    "title": "Excursion Ouzoud",
    "metaTitle": "Excursion cascades d’Ouzoud depuis Marrakech – circuit Maroc",
    "metaDescription": "Journée cascades d’Ouzoud depuis Marrakech : grandes chutes, sentiers et déjeuner panoramique. Excursion nature berbère bien rythmée et privée.",
    "keywords": [
      "excursion Ouzoud",
      "cascades journée Marrakech"
    ],
    "shortDescription": "Journée aux cascades d'Ouzoud depuis Marrakech : 110 m de chutes, singes et déjeuner au pied des cascades.",
    "duration": "1 jour",
    "availability": "Départs quotidiens",
    "from": "Marrakech",
    "to": "Marrakech",
    "image": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1400&q=80",
    "imageAlt": "Excursion Ouzoud journée",
    "imageTitle": "Excursion Ouzoud",
    "highlights": [
      "Chutes 110 m",
      "Singes magots",
      "Déjeuner terrasse",
      "Randonnée courte",
      "Retour Marrakech soir"
    ],
    "included": [
      "Transport A/R",
      "Chauffeur francophone"
    ],
    "excluded": [
      "Repas",
      "Guide local option",
      "Pourboires"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Marrakech – Ouzoud – Marrakech",
        "text": "Départ 8h, cascades 10h-16h, retour ~18h30."
      }
    ],
    "destinations": [
      {
        "name": "Marrakech",
        "path": "/destinations/marrakech"
      },
      {
        "name": "Atlas Mountains",
        "path": "/destinations/atlas-mountains"
      }
    ],
    "similarSlugs": [
      "cascades-ouzoud",
      "excursion-ourika-journee",
      "excursion-essaouira",
      "excursion-paradise-valley"
    ],
    "fromPrice": 48,
    "rating": {
      "value": 4.7,
      "count": 356
    },
    "hooks": {
      "opening": "Les cascades Ouzoud en journée — échappée nature à 2h30 de Marrakech, idéale familles.",
      "routeFocus": "Arrivée tôt pour éviter foule groupes bus.",
      "landscape": "Arc-en-ciel permanent aux chutes.",
      "culture": "Guides locaux et restaurants terrasse.",
      "highlight": "Belvédère supérieur — vue complète chute.",
      "cuisine": "Truite ou tagine terrasse cascades.",
      "whoFor": "Familles, seniors, nature lovers base Marrakech.",
      "seasonNote": "Printemps débit max ; week-ends chargés.",
      "whyBook": "Départ matinal avant masses touristiques.",
      "closing": "Ouzoud sans nuitée — possible en 1 jour.",
      "keywordPhrase": "excursion Ouzoud journée Marrakech",
      "tips": [
        "Antidérapant indispensable."
      ],
      "practical": [
        "Guide local 100 MAD optionnel pied chutes."
      ],
      "faqExtra": [
        {
          "question": "Compatible enfants ?",
          "answer": "Oui, sentier principal facile ; surveiller singes."
        }
      ],
      "extraParagraphs": []
    }
  },
  {
    "imageWidth": 1400,
    "imageHeight": 900,
    "featured": false,
    "blogLinks": [
      {
        "title": "Guide ultime pour visiter Marrakech",
        "path": "/blog/ultimate-guide-visiting-marrakech-2025"
      },
      {
        "title": "Trekking à dos de chameau dans le Sahara",
        "path": "/blog/camel-trekking-sahara-what-to-expect"
      },
      {
        "title": "Cuisine marocaine : 15 plats à goûter",
        "path": "/blog/moroccan-cuisine-15-dishes-you-must-try"
      }
    ],
    "touristType": [
      "Voyageurs",
      "Couples",
      "Familles"
    ],
    "slug": "excursion-ourika-journee",
    "category": "excursions",
    "h1": "Excursion Ourika – Journée vallée",
    "title": "Excursion Ourika journée",
    "metaTitle": "Excursion Ourika en journée depuis Marrakech – circuit Maroc",
    "metaDescription": "Vallée de l’Ourika en une journée : villages berbères, rivière de l’Atlas et air de montagne. Excursion facile au départ de Marrakech, privée.",
    "keywords": [
      "excursion Ourika journée",
      "Ourika Marrakech"
    ],
    "shortDescription": "Demi-journée ou journée dans la vallée de l'Ourika : rivière, villages berbères et vue Toubkal.",
    "duration": "1 jour",
    "availability": "Départs quotidiens",
    "from": "Marrakech",
    "to": "Marrakech",
    "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&q=80",
    "imageAlt": "Ourika journée",
    "imageTitle": "Excursion Ourika journée",
    "highlights": [
      "Vallée Ourika",
      "Villages berbères",
      "Panorama Atlas",
      "Thé chez l'habitant",
      "Retour Marrakech"
    ],
    "included": [
      "Transport A/R",
      "Chauffeur francophone"
    ],
    "excluded": [
      "Repas",
      "Pourboires"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Marrakech – Ourika – Marrakech",
        "text": "Départ 9h, vallée et villages, retour 16h-17h."
      }
    ],
    "destinations": [
      {
        "name": "Marrakech",
        "path": "/destinations/marrakech"
      },
      {
        "name": "Atlas Mountains",
        "path": "/destinations/atlas-mountains"
      }
    ],
    "similarSlugs": [
      "excursion-ourika",
      "excursion-ouzoud",
      "excursion-essaouira",
      "circuit-imlil"
    ],
    "fromPrice": 45,
    "rating": {
      "value": 4.7,
      "count": 278
    },
    "hooks": {
      "opening": "L'Ourika en journée : fraîcheur montagne sans quitter Marrakech le soir — parfait été caniculaire.",
      "routeFocus": "Arrêts villages et points vue sans obligation Setti Fatma.",
      "landscape": "Rivière, terrasses, sommets enneigés.",
      "culture": "Thé berbère chez l'habitant option.",
      "highlight": "Contraste chaleur Marrakech / fraîcheur Ourika.",
      "cuisine": "Tajine berbère déjeuner option village.",
      "whoFor": "Familles, heat escape été, court séjour.",
      "seasonNote": "Canicule : Ourika 10-15° plus frais.",
      "whyBook": "Flexibilité durée demi ou journée complète.",
      "closing": "Atlas express depuis Marrakech.",
      "keywordPhrase": "excursion Ourika journée Marrakech",
      "tips": [
        "Demi-journée possible si peu temps."
      ],
      "practical": [
        "Retour avant dîner garanti."
      ],
      "faqExtra": [
        {
          "question": "Ourika ou Setti Fatma ?",
          "answer": "Journée standard s'arrête villages ; +2h et marche pour cascades Setti Fatma."
        }
      ],
      "extraParagraphs": []
    }
  },
  {
    "imageWidth": 1400,
    "imageHeight": 900,
    "featured": false,
    "blogLinks": [
      {
        "title": "Guide ultime pour visiter Marrakech",
        "path": "/blog/ultimate-guide-visiting-marrakech-2025"
      },
      {
        "title": "Trekking à dos de chameau dans le Sahara",
        "path": "/blog/camel-trekking-sahara-what-to-expect"
      },
      {
        "title": "Cuisine marocaine : 15 plats à goûter",
        "path": "/blog/moroccan-cuisine-15-dishes-you-must-try"
      }
    ],
    "touristType": [
      "Voyageurs",
      "Couples",
      "Familles"
    ],
    "slug": "excursion-paradise-valley",
    "category": "excursions",
    "h1": "Excursion Paradise Valley – Depuis Agadir",
    "title": "Excursion Paradise Valley",
    "metaTitle": "Excursion Paradise Valley journée depuis Agadir au Maroc",
    "metaDescription": "Paradise Valley depuis Agadir : piscines naturelles, gorges et oasis de palmiers. Excursion d’une journée dans l’Anti-Atlas côtier, hors foule.",
    "keywords": [
      "Paradise Valley",
      "excursion Agadir",
      "piscines naturelles"
    ],
    "shortDescription": "Paradise Valley depuis Agadir : piscines turquoise, palmeraies et canyons de l'Anti-Atlas — baignade nature incluse.",
    "duration": "1 jour",
    "availability": "Départs depuis Agadir",
    "from": "Agadir",
    "to": "Agadir",
    "image": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1400&q=80",
    "imageAlt": "Paradise Valley piscines",
    "imageTitle": "Paradise Valley Agadir",
    "highlights": [
      "Piscines naturelles turquoise",
      "Palmeraies Anti-Atlas",
      "Canyons rocheux",
      "Baignade nature",
      "Villages berbères"
    ],
    "included": [
      "Transport A/R Agadir",
      "Guide local"
    ],
    "excluded": [
      "Repas",
      "Pourboires"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Agadir – Paradise Valley – Agadir",
        "text": "Départ 8h30, randonnée canyon et baignade, retour 17h."
      }
    ],
    "destinations": [
      {
        "name": "Atlas Mountains",
        "path": "/destinations/atlas-mountains"
      }
    ],
    "similarSlugs": [
      "circuit-agadir",
      "excursion-ouzoud",
      "circuit-akchour",
      "cascades-ouzoud"
    ],
    "fromPrice": 52,
    "rating": {
      "value": 4.8,
      "count": 167
    },
    "hooks": {
      "opening": "Paradise Valley vit up à son nom : bassins turquoise creusés dans roche rose de l'Anti-Atlas, à 1h d'Agadir.",
      "routeFocus": "Randonnée canyon 45 min jusqu'aux piscines — accessible familles.",
      "landscape": "Roche rose, eau vert émeraude, palmiers.",
      "culture": "Berbères Anti-Atlas et agriculture oasis.",
      "highlight": "Saut dans piscine naturelle fraîche — pure joie été.",
      "cuisine": "Déjeuner tagine village en route.",
      "whoFor": "Base Agadir, familles, amateurs baignade nature.",
      "seasonNote": "Été bondé — départ tôt recommandé ; printemps eau fraîche.",
      "whyBook": "Guide connaissant piscines moins fréquentées.",
      "closing": "Paradise depuis Agadir — paradis confirmé.",
      "keywordPhrase": "excursion Paradise Valley Agadir",
      "tips": [
        "Maillot sous vêtements.",
        "Chaussures eau ou sandales robustes."
      ],
      "practical": [
        "1h30 route depuis Agadir."
      ],
      "faqExtra": [
        {
          "question": "Depuis Marrakech ?",
          "answer": "Trop loin pour journée ; base Agadir ou circuit Agadir 3j recommandé."
        }
      ],
      "extraParagraphs": []
    }
  },
  {
    "imageWidth": 1400,
    "imageHeight": 900,
    "featured": false,
    "blogLinks": [
      {
        "title": "Guide ultime pour visiter Marrakech",
        "path": "/blog/ultimate-guide-visiting-marrakech-2025"
      },
      {
        "title": "Trekking à dos de chameau dans le Sahara",
        "path": "/blog/camel-trekking-sahara-what-to-expect"
      },
      {
        "title": "Cuisine marocaine : 15 plats à goûter",
        "path": "/blog/moroccan-cuisine-15-dishes-you-must-try"
      }
    ],
    "touristType": [
      "Voyageurs",
      "Couples",
      "Familles"
    ],
    "slug": "excursion-ait-ben-haddou",
    "category": "excursions",
    "h1": "Excursion Aït Ben Haddou – Journée UNESCO",
    "title": "Excursion Aït Ben Haddou",
    "metaTitle": "Excursion Aït Ben Haddou UNESCO depuis Marrakech au Maroc",
    "metaDescription": "Day trip Aït Ben Haddou (UNESCO) via le col Tizi n’Tichka. Kasbahs de cinéma et paysages du Sud depuis Marrakech en une journée privée. Réservez facilement.",
    "keywords": [
      "Aït Ben Haddou excursion",
      "ksar UNESCO journée"
    ],
    "shortDescription": "Journée au ksar d'Aït Ben Haddou UNESCO et studios Ouarzazate — décor de Gladiator et Game of Thrones.",
    "duration": "1 jour",
    "availability": "Départs quotidiens",
    "from": "Marrakech",
    "to": "Marrakech",
    "image": "https://images.unsplash.com/photo-1548013146-72479768bada?w=1400&q=80",
    "imageAlt": "Aït Ben Haddou ksar",
    "imageTitle": "Excursion Aït Ben Haddou",
    "highlights": [
      "Ksar Aït Ben Haddou UNESCO",
      "Traversée col Tizi n'Tichka",
      "Studios Ouarzazate option",
      "Kasbah Taourirt",
      "Retour Marrakech soir"
    ],
    "included": [
      "Transport A/R",
      "Chauffeur francophone"
    ],
    "excluded": [
      "Repas",
      "Guide ksar",
      "Entrées studios",
      "Pourboires"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Marrakech – Aït Ben Haddou – Marrakech",
        "text": "Départ 7h, ksar 11h-14h, Ouarzazate option, retour ~20h."
      }
    ],
    "destinations": [
      {
        "name": "Marrakech",
        "path": "/destinations/marrakech"
      },
      {
        "name": "Atlas Mountains",
        "path": "/destinations/atlas-mountains"
      }
    ],
    "similarSlugs": [
      "circuit-ouarzazate",
      "marrakech-merzouga-3-jours",
      "excursion-essaouira",
      "excursion-ouzoud"
    ],
    "fromPrice": 58,
    "rating": {
      "value": 4.8,
      "count": 312
    },
    "hooks": {
      "opening": "Aït Ben Haddou en journée depuis Marrakech : le ksar le plus filmé du monde, accessible via le col mythique du Tichka.",
      "routeFocus": "Priorité ksar midi — meilleure lumière sur pisé ocre.",
      "landscape": "Col Atlas neige, ksar doré, plaines sud.",
      "culture": "Familles habitant encore le ksar — artisanat et guides locaux.",
      "highlight": "Traversée ksar jusqu'au sommet — vue plaine désertique.",
      "cuisine": "Déjeuner café vue ksar ou tajine Ouarzazate.",
      "whoFor": "Cinéphiles, UNESCO collectors, séjour Marrakech.",
      "seasonNote": "Hiver : chaînes possibles Tichka — nous informons.",
      "whyBook": "Départ 7h pour 2h sur site avant bus touristiques.",
      "closing": "Hollywood marocain en une journée.",
      "keywordPhrase": "excursion Aït Ben Haddou Marrakech",
      "tips": [
        "Guide local ksar 200 MAD recommandé."
      ],
      "practical": [
        "Journée longue ~12h total."
      ],
      "faqExtra": [
        {
          "question": "Studios inclus ?",
          "answer": "Visite studios Ouarzazate en option +1h si timing OK."
        }
      ],
      "extraParagraphs": []
    }
  }
];

const CUSTOMIZABLE_SLUGS = new Set([
  'casablanca-rabat-meknes-fes-marrakech',
  'marrakech-merzouga-4-jours',
]);

const rawCircuits = allCircuits
  .filter((c) => KEEP_SLUGS.has(c.slug))
  .map((c) =>
    CUSTOMIZABLE_SLUGS.has(c.slug)
      ? { ...c, customizable: true, type: c.type || 'Sur mesure' }
      : c
  );

const circuits = rawCircuits.map(enrichCircuit);

export function getCircuitBySlug(slug) {
  return circuits.find((c) => c.slug === slug) || null;
}

export function getCircuitsByCategory(categoryId) {
  return circuits.filter((c) => c.category === categoryId);
}

export function getSimilarCircuits(circuit, limit = 4) {
  if (!circuit) return [];
  const bySlug = (circuit.similarSlugs || [])
    .map((s) => getCircuitBySlug(s))
    .filter(Boolean);
  if (bySlug.length >= limit) return bySlug.slice(0, limit);
  const sameCat = circuits.filter(
    (c) => c.category === circuit.category && c.slug !== circuit.slug && !bySlug.some((b) => b.slug === c.slug)
  );
  return [...bySlug, ...sameCat].slice(0, limit);
}

export function getAllCircuitSlugs() {
  return circuits.map((c) => c.slug);
}

export default circuits;
