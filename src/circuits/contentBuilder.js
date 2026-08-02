/**
 * Builds SEO-rich French long descriptions, FAQs, tips and practical info
 * for Sahara Visite circuits. Unique hooks keep each page distinct.
 */
import { buildRouteMapEmbedUrl, getGeoEntities } from '../utils/moroccoGeo';

/** Deterministic small hash so generated variety stays stable across renders/builds. */
function hashString(str = '') {
  let h = 0;
  for (let i = 0; i < str.length; i += 1) {
    h = (h * 31 + str.charCodeAt(i)) >>> 0;
  }
  return h;
}

const CATEGORY_LABELS = {
  desert: 'désert',
  imperial: 'villes impériales',
  nord: 'Nord du Maroc',
  atlas: 'Atlas',
  atlantique: 'côte Atlantique',
  sud: 'Sud marocain',
  excursions: 'excursions',
};

const CATEGORY_SEO = {
  desert:
    'dunes d’or, bivouac sous les étoiles, caravane de dromadaires et silence du Sahara marocain',
  imperial:
    'médinas UNESCO, palais royaux, artisanat ancestral et héritage des dynasties alaouites',
  nord:
    'médinas bleues, montagnes du Rif, ports atlantiques et douceur andalouse',
  atlas:
    'vallées berbères, sommets enneigés, cascades et villages de montagne',
  atlantique:
    'côte sauvage, ports de pêche, fruits de mer et lumière atlantique',
  sud:
    'kasbahs de pisé, gorges spectaculaires, palmeraies et routes de caravanes',
  excursions:
    'journées bien rythmées depuis votre hôtel, avec retour le soir même',
};

const CATEGORY_EXTRA = {
  desert: `Dans le Sahara, le temps semble dilaté. Les dunes d’Erg Chebbi ou d’Erg Chigaga ne sont pas qu’un décor de carte postale : elles structurent la vie locale, l’économie du tourisme responsable et la mémoire des anciennes routes caravanières. Un bon circuit Maroc désert alterne mobilité et silence, explication et contemplation. Sahara Visite veille à ce que le desert Merzouga (ou le Grand Désert plus isolé) reste une expérience humaine, pas une simple course photo.`,
  imperial: `Les villes impériales racontent mille ans d’histoire marocaine. Fès, Meknès, Rabat, Marrakech et Casablanca ne se visitent pas de la même façon : densités différentes, codes différents, lumières différentes. Un Morocco Tour impérial réussi sait quand entrer dans une médina, quand s’en éloigner, et comment relier patrimoine UNESCO et vie contemporaine sans caricature.`,
  nord: `Le Nord du Maroc séduit par sa douceur relative et son métissage andalou. Entre Tanger, Tétouan, Chefchaouen, Asilah et les cascades d’Akchour, le voyageur découvre un Maroc moins « désert postcard », plus méditerranéen, artistique et montagneux. Les Morocco Tours du Rif misent sur l’ambiance, la couleur et la marche contemplative.`,
  atlas: `L’Atlas est le château d’eau et le toit du Maroc. Vallées d’Ourika et d’Imlil, station d’Oukaïmeden, sommet du Toubkal, cascades d’Ouzoud : chaque porte d’entrée raconte une relation différente à la montagne berbère. Un circuit Atlas bien conçu respecte l’altitude, le rythme de marche et l’hospitalité des villages.`,
  atlantique: `La côte Atlantique offre vent, surf, histoire portugaise et tables de fruits de mer. Casablanca, El Jadida, Oualidia, Essaouira et Agadir composent un chapelet d’ambiances : métropole, citadelle, lagune ostréicole, médina venteuse, baie ensoleillée. Le voyage Maroc atlantique est une leçon de lumière et d’iode.`,
  sud: `Le Sud marocain, d’Ouarzazate à M’Hamid en passant par Dadès, Todra et Zagora, est le pays des kasbahs et des palmeraies. Les routes y sont narratives : chaque virage révèle une forteresse de terre, un canyon ou un horizon de hamada. C’est le terrain de jeu idéal pour un Private Morocco Tour photographique et culturel.`,
  excursions: `Une excursion d’une journée bien organisée permet de goûter une région sans changer d’hôtel. Sahara Visite optimise départs matinaux, pauses déjeuner et retours en fin de journée, pour que votre séjour base (Marrakech, Agadir, etc.) reste confortable tout en multipliant les découvertes.`,
};

/**
 * @param {{ h1: string, from: string, to: string, duration: string, category: string, hooks?: object }} opts
 * @returns {string} Long French SEO article (aim 1000+ words)
 */
export function buildLongDescription({ h1, from, to, duration, category, hooks = {} }) {
  const catLabel = CATEGORY_LABELS[category] || 'Maroc';
  const catSeo = CATEGORY_SEO[category] || 'paysages et culture du Maroc';
  const catExtra = CATEGORY_EXTRA[category] || '';
  const {
    opening,
    routeFocus,
    landscape,
    culture,
    highlight,
    cuisine,
    whoFor,
    seasonNote,
    photography,
    whyBook,
    closing,
    keywordPhrase,
    extraParagraphs = [],
  } = hooks;

  const phrase =
    keywordPhrase ||
    `circuit Maroc ${from} ${to}`.replace(/\s+/g, ' ').trim();

  const paragraphs = [
    opening ||
      `Le ${h1} proposé par Sahara Visite est une invitation à découvrir le Maroc autrement : un voyage Maroc authentique, rythmé, confortable et conçu pour les voyageurs exigeants. Entre ${from} et ${to}, ce ${phrase} combine découverte culturelle, paysages marquants et moments de respiration. Sur ${duration}, vous avancez sans stress logistique — transport privé, hébergements sélectionnés, accompagnement francophone — pour vous concentrer sur l’essentiel : ressentir le pays.`,

    `Choisir un circuit Maroc avec Sahara Visite, c’est aussi profiter d’une expertise terrain accumulée au fil des saisons et des retours clients. Nous organisons depuis des années des Morocco Tours sur mesure et des Private Morocco Tour pour couples, familles et petits groupes d’amis. Qu’il s’agisse d’un Luxury Morocco Tour avec riads d’exception ou d’un programme plus aventure orienté randonnée et bivouac, la promesse reste la même : un itinéraire cohérent, des étapes justes, des partenaires fiables, et une immersion réelle dans le ${catLabel}, avec ${catSeo}. Notre équipe affine chaque détail pour que le voyage Maghreb dont vous rêvez corresponde à votre rythme réel, pas à une brochure générique.`,

    routeFocus ||
      `L’itinéraire entre ${from} et ${to} a été pensé pour éviter les journées trop longues inutiles et pour privilégier les arrêts qui ont du sens. Chaque segment routier devient une fenêtre ouverte sur le Maroc contemporain et ancestral : marchés animés, villages de montagne, cols venteux, oasis discrètes ou façades de médina. Vous ne « cochez » pas seulement des noms sur une carte — vous reliez des territoires, des climats, des langues et des histoires. C’est cette continuité narrative qui distingue un vrai circuit Maroc d’une simple succession de transferts.`,

    landscape ||
      `Les paysages traversés sur ce voyage Maroc changent de caractère à chaque étape, parfois en l’espace de quelques kilomètres seulement. La lumière, la texture des sols, la végétation et l’architecture évoluent : c’est précisément cette diversité qui rend le circuit Maroc si puissant émotionnellement. Entre ${from} et ${to}, le regard s’exerce — dunes ou remparts, océan ou cimes, ruelles ou plateaux — et la mémoire visuelle se construit jour après jour, heure après heure. Les photographes amateurs comme les contemplatifs y trouvent leur compte.`,

    catExtra,

    culture ||
      `Au-delà du décor, le Maroc se raconte par les gens. Artisans du cuir et du métal, hôtes de riads, guides locaux passionnés, familles berbères, pêcheurs du littoral ou conducteurs de dromadaires : les rencontres ponctuent le parcours et lui donnent une âme. Sahara Visite favorise les échanges respectueux et les expériences ancrées, loin des circuits purement photographiques et précipités. Vous comprenez mieux les codes de la médina, le rôle social du thé à la menthe, la fierté du savoir-faire transmis, et la chaleur réelle de l’hospitalité marocaine — celle qui ne se joue pas pour la caméra.`,

    highlight ||
      `Le moment fort de ce programme reste unique à chaque voyageur, mais certains instants reviennent souvent dans les retours d’expérience : une aube sur un panorama encore silencieux, une nuit étoilée loin des lumières urbaines, une place animée au crépuscule, le premier thé partagé, ou le silence d’un sentier de montagne. Sur ${duration}, nous ménageons ces respirations pour que le Morocco Tour ne soit pas une course contre la montre, mais une progression sensible et mémorable entre ${from} et ${to}.`,

    `Sur le plan pratique, le rythme du circuit Maroc est calibré pour un confort de déplacement durable. Véhicule climatisé adapté à la taille du groupe, chauffeurs expérimentés connaissant les routes secondaires, horaires adaptés à la saison et aux conditions de circulation : vous gagnez du temps utile et de la sérénité mentale. Les transferts sont intégrés dans le devis ; les formalités d’arrivée et de départ sont anticipées lorsque nous gérons les aéroports. C’est l’avantage concret d’un Private Morocco Tour bien orchestré par une agence de voyage Maroc comme Sahara Visite, plutôt qu’un assemblage improvisé de taxis et de réservations séparées.`,

    cuisine ||
      `La gastronomie accompagne naturellement ce voyage Maroc et en constitue souvent un des meilleurs souvenirs. Tagines mijotés longuement, couscous du vendredi, pastilla croustillante, salades marocaines parfumées au cumin, pains traditionnels sortis du four collectif, thés à la menthe et pâtisseries aux amandes : chaque région a ses accents et ses fiertés. Selon les étapes entre ${from} et ${to}, vous pourrez aussi goûter fruits de mer atlantiques ultra-frais, spécialités berbères de montagne plus rustiques, ou plats sahariens autour des dattes et de la viande grillée. Nous recommandons des adresses de qualité — riads, restaurants locaux, pauses goûter — sans imposer un menu unique à tous les groupes.`,

    photography ||
      `Pour les amateurs d’images et de carnets de voyage, ce circuit Maroc offre une palette visuelle exceptionnelle : textures de terre crue, contrastes d’architecture, silhouettes humaines dans les souks, ciels dramatiques au-dessus des dunes ou de l’océan. Le matin tôt et la fin de journée restent les meilleurs créneaux de lumière. Nous prévoyons des arrêts photo lorsque le site et la sécurité le permettent, sans transformer le voyage en shooting permanent ni ralentir inutilement le groupe. L’objectif reste double : des souvenirs nets à ramener, et surtout des émotions vécues pleinement, appareil parfois rangé.`,

    whoFor ||
      `Ce programme convient aux voyageurs curieux découvrant le Maroc pour la première fois, aux couples en quête de romantisme authentique loin des clichés, aux familles qui souhaitent un cadre sécurisant avec un interlocuteur unique, et aux amis partageant une envie d’ailleurs. Les Morocco Tours de Sahara Visite restent modulables : rythme plus doux pour seniors, nuit supplémentaire sur une étape coup de cœur, activité optionnelle (hammam, cuisine, montgolfière), ou upgrade vers un Luxury Morocco Tour avec hébergements premium. Dites-nous votre profil, vos contraintes et vos rêves — nous ajustons l’itinéraire entre ${from} et ${to}.`,

    seasonNote ||
      `Le Maroc se visite toute l’année, mais chaque saison colore différemment le trajet ${from}–${to} et influence le ressenti du ${catLabel}. Le printemps (mars–mai) et l’automne (septembre–novembre) offrent souvent un équilibre idéal de températures et de lumière. L’été demande vigilance sur la chaleur dans certaines zones intérieures et désertiques ; nous avançons alors les départs et renforçons les pauses hydratation. L’hiver peut apporter de la fraîcheur en altitude, des matins brumeux sur le littoral, ou des nuits très froides en bivouac : une bonne préparation vestimentaire suffit généralement. Sahara Visite adapte horaires, conseils de tenue et options d’activités selon la période exacte de votre voyage Maroc.`,

    `Préparer un circuit Maroc, c’est aussi anticiper les questions du quotidien : change de devises, pourboires, tenues respectueuses dans les lieux religieux, santé de base (hydratation, protection solaire, médicaments personnels), et communication. Avant le départ, nous partageons une fiche pratique claire. Sur place, votre chauffeur-guide ou votre équipe dédiée reste joignable pour les imprévus — un retard de vol, une envie soudaine de prolonger une visite, un besoin médical simple. Après le séjour, vos retours nous aident à affiner encore les Morocco Tours de demain. C’est ainsi que se construit, étape après étape, une relation de confiance entre voyageurs et agence de voyage Maroc.`,

    `Le logement joue un rôle central dans la qualité perçue d’un voyage Maroc. Selon les étapes entre ${from} et ${to}, Sahara Visite sélectionne riads de caractère, maisons d’hôtes chaleureuses, kasbahs restaurées, auberges de désert ou camps bivouac selon la formule. Nous privilégions la propreté, l’emplacement, le petit-déjeuner et la capacité d’accueil francophone. Pour un Luxury Morocco Tour, nous montons en gamme : suites, services premium, expériences privatives. Pour un budget maîtrisé, nous gardons le confort essentiel sans sacrifier l’âme des lieux. Dans tous les cas, les nuits sont confirmées par écrit avant votre départ.`,

    `Se déplacer intelligemment fait partie de l’expérience. Les distances marocaines se mesurent en heures autant qu’en kilomètres : relief, travaux, souks du vendredi, troupeaux… Un bon Morocco Tour intègre ces réalités. C’est pourquoi nos chauffeurs connaissent les variantes d’itinéraire et les pauses utiles (café, panorama, sanitaires, artisanat). Sur ${duration}, l’objectif n’est jamais d’accumuler des bornes pour la gloire, mais d’arriver dispos aux moments forts — qu’il s’agisse d’une médina, d’une dune ou d’une cascade. Cette philosophie différencie Sahara Visite des circuits bas prix trop compressés.`,

    whyBook ||
      `Pourquoi réserver ce ${h1} avec Sahara Visite plutôt qu’avec un intermédiaire anonyme ? Parce qu’un bon circuit Maroc ne se résume pas à une liste d’étapes copiée-collée. Il faut une lecture fine du terrain, un réseau de partenaires contrôlés (hébergements, camps, guides locaux, 4×4), une capacité à réagir vite (météo, circulation, fermetures de sites, envies du moment) et une présence humaine avant, pendant et après. Notre équipe conçoit des Morocco Tours transparents sur ce qui est inclus et ce qui reste en option, attentifs aux détails qui changent tout : un guide qui explique vraiment l’histoire, un bivouac bien situé loin des générateurs bruyants, une médina visitée au bon créneau horaire, un restaurant local plutôt qu’une cantine touristique.`,

    `Les intentions de recherche de nos clients — voyage Maroc, circuit Maroc, desert Merzouga, villes impériales, Atlas, côte Atlantique, Private Morocco Tour, Luxury Morocco Tour, Morocco Tours — correspondent à des réalités concrètes sur le terrain, pas à du remplissage SEO. Ce programme autour de ${to}, au départ de ${from}, sur ${duration}, incarne cette promesse : un itinéraire crédible, une immersion qualitative, une logistique propre, et un interlocuteur unique. Sahara Visite reste votre référence pour transformer une envie d’ailleurs en expérience maîtrisée, chaleureuse et mémorable au cœur du Royaume.`,

    `Enfin, voyager au Maroc aujourd’hui, c’est aussi choisir une posture : curiosité, respect, souplesse. Les meilleurs souvenirs naissent souvent d’un détour improvisé, d’une conversation inattendue, d’un thé accepté sans regarder sa montre. Notre rôle, chez Sahara Visite, est de créer le cadre sûr et confortable qui permet ces moments — tout en tenant le fil du programme ${phrase}. Entre ${from} et ${to}, sur ${duration}, vous restez acteurs de votre voyage Maroc, pas spectateurs pressés d’une visite guidée industrielle.`,

    `Du point de vue SEO comme du point de vue voyageur, la clarté compte. Vous trouverez sur cette page le déroulé, les points forts, les inclusions, les questions fréquentes et des conseils concrets pour réussir ${h1}. Sahara Visite publie des Morocco Tours lisibles, sans jargon inutile, avec des options Private Morocco Tour et Luxury Morocco Tour lorsque vous souhaitez plus d’intimité ou plus de standing. Que votre priorité soit le desert Merzouga, une médina impériale, une vallée de l’Atlas ou une escapade atlantique, l’itinéraire ${from} → ${to} reste pensé comme une histoire complète : départ serein, cœur d’expérience, retour en douceur. Nous croyons qu’un circuit Maroc de qualité se reconnaît à la cohérence des journées, à la justesse des hébergements et à la capacité d’écoute de l’équipe — trois piliers que nous cultivons sur chaque départ, chaque saison, chaque demande sur mesure.`,

    ...extraParagraphs,

    closing ||
      `Prêt à vivre ${h1} ? Contactez Sahara Visite pour une proposition personnalisée, un devis clair et des disponibilités sur ${duration}. Que vous rêviez de dunes, de médinas millénaires, de sommets berbères ou d’embruns atlantiques, nous transformons votre envie en itinéraire fluide entre ${from} et ${to}. Réservez votre circuit Maroc — laissez le pays vous surprendre, et repartez avec bien plus que des photos : une histoire à raconter.`,
  ];

  const joined = paragraphs.filter(Boolean).join('\n\n');

  // Safety net: ensure SEO pages stay substantive (1000+ words)
  const words = joined.split(/\s+/).filter(Boolean).length;
  if (words >= 1000) return joined;

  const padding = `Au fil de ${duration}, le programme ${h1} révèle des strates successives du Maroc : d’abord la découverte visuelle, puis la compréhension culturelle, enfin l’attachement émotionnel aux lieux traversés entre ${from} et ${to}. Sahara Visite construit ses Morocco Tours pour que cette progression soit naturelle. Nous évitons la surcharge d’activités « à cocher » et préférons des moments bien choisis — une médina au bon horaire, une dune au crépuscule, une table locale plutôt qu’une cantine anonyme. Le ${phrase} devient alors plus qu’un produit touristique : c’est un récit de voyage cohérent, utile aussi bien au premier visiteur qu’au voyageur déjà amoureux du Royaume. Les équipes sur place, les partenaires d’hébergement et les guides locaux partagent cette exigence de justesse. C’est pourquoi tant de clients reviennent pour un Private Morocco Tour différent, ou recommandent un Luxury Morocco Tour à leurs proches. Que vous veniez pour le desert Merzouga, les villes impériales, l’Atlas ou la côte Atlantique, la méthode reste la même : écoute, terrain, transparence. Sur la route de ${to}, chaque pause café, chaque panorama, chaque conversation peut devenir le souvenir que vous raconterez le plus longtemps — et c’est exactement ce que nous cherchons à rendre possible, jour après jour, sur ce circuit Maroc conçu avec soin.`;

  return `${joined}\n\n${padding}`;
}

/**
 * @param {object} circuitMeta
 * @returns {{ question: string, answer: string }[]}
 */
export function buildFaq(circuitMeta) {
  const {
    h1,
    title,
    from,
    to,
    duration,
    category,
    fromPrice,
    hooks = {},
  } = circuitMeta;

  const faqExtra = hooks.faqExtra || [];
  const cat = CATEGORY_LABELS[category] || 'Maroc';

  const base = [
    {
      question: `Que comprend exactement le circuit « ${title} » ?`,
      answer: `Le programme ${h1} inclut généralement les transferts privés indiqués, l’hébergement selon le nombre de nuits, le petit-déjeuner (et souvent d’autres repas selon la formule), l’accompagnement francophone et les activités listées dans la fiche. Le détail inclus / non inclus est précisé sur la page et confirmé dans votre devis Sahara Visite.`,
    },
    {
      question: `Combien de temps dure ce voyage entre ${from} et ${to} ?`,
      answer: `La durée annoncée est de ${duration}. Ce timing a été choisi pour couvrir les étapes essentielles sans précipitation excessive. Sur demande, Sahara Visite peut allonger ou condenser certaines journées dans le cadre d’un Private Morocco Tour sur mesure.`,
    },
    {
      question: `Quel est le prix de départ et que signifie « à partir de » ?`,
      answer: `Le tarif indicatif démarre autour de ${fromPrice} € par personne (selon saison, taille du groupe et catégorie d’hébergement). Le prix final dépend des dates, du nombre de voyageurs et des options (luxe, activités supplémentaires, chambres individuelles). Demandez un devis personnalisé pour un chiffrage exact.`,
    },
    {
      question: `Ce circuit Maroc est-il adapté aux familles avec enfants ?`,
      answer: `Oui, dans la majorité des cas, sous réserve d’adapter le rythme. Sahara Visite propose des Morocco Tours familiaux avec pauses plus fréquentes, sièges adaptés si besoin, et hébergements confortables. Signalez l’âge des enfants à la réservation pour un programme cohérent entre ${from} et ${to}.`,
    },
    {
      question: `Faut-il être sportif pour profiter de cette expérience ${cat} ?`,
      answer: `Le niveau demandé dépend des activités (balade à dos de dromadaire, trek, marche en médina, etc.). La plupart des étapes restent accessibles à un public en bonne forme générale. Les options plus engageantes (sommets, longues randonnées) sont signalées clairement et peuvent être remplacées.`,
    },
    {
      question: `Comment se déroulent les transferts et le transport ?`,
      answer: `Vous voyagez en véhicule privé climatisé avec chauffeur expérimenté. Les horaires tiennent compte de la distance réelle entre ${from} et ${to}, des arrêts panoramiques et des conditions de circulation. Pour certains segments désertiques ou de piste, un 4×4 peut être prévu.`,
    },
    {
      question: `Quelle est la meilleure période pour réserver ce circuit ?`,
      answer: `Le printemps et l’automne sont souvent idéaux pour un voyage Maroc équilibré. L’hiver convient très bien à certaines régions ; l’été demande plus d’attention à la chaleur selon la zone. Sahara Visite vous conseille selon votre date et le type d’expérience ${cat} souhaitée.`,
    },
    {
      question: `Peut-on personnaliser l’itinéraire (Private Morocco Tour) ?`,
      answer: `Absolument. Nous pouvons modifier nuits, étapes, niveau d’hébergement, ou ajouter des expériences (hammam, cours de cuisine, vol en montgolfière, surf, etc.). Un Luxury Morocco Tour est également possible avec riads premium et services renforcés.`,
    },
    {
      question: `Les guides parlent-ils français ?`,
      answer: `Oui. Sahara Visite privilégie un accompagnement francophone. Selon les sites, un guide local spécialisé (médina UNESCO, montagne, désert) peut compléter le chauffeur-guide pour une lecture plus fine du patrimoine et des usages locaux.`,
    },
    {
      question: `Que faut-il emporter pour ce voyage Maroc ?`,
      answer: `Prévoyez des chaussures confortables, des vêtements adaptés au climat de la saison, une protection solaire, une veste légère pour les soirées, et une tenue respectueuse pour les lieux religieux. Une liste bagages détaillée vous est envoyée après confirmation de réservation.`,
    },
    {
      question: `Les pourboires sont-ils obligatoires ?`,
      answer: `Les pourboires ne sont pas obligatoires, mais restent une pratique courante pour remercier chauffeurs, guides et équipes d’hébergement. Sahara Visite peut vous indiquer des montants raisonnables selon la durée ${duration} et la composition du groupe.`,
    },
    {
      question: `Comment réserver avec Sahara Visite ?`,
      answer: `Contactez-nous via le formulaire, WhatsApp ou e-mail en précisant dates, nombre de voyageurs et envies. Nous vous envoyons une proposition pour « ${title} », puis un devis détaillé. Un acompte confirme la réservation ; le solde se règle selon les conditions communiquées par écrit.`,
    },
  ];

  if (faqExtra.length) {
    const merged = [...base];
    faqExtra.slice(0, 4).forEach((item, i) => {
      merged[merged.length - 1 - i] = item;
    });
    return merged.slice(0, 12);
  }

  return base;
}

/**
 * @param {object} circuitMeta
 * @returns {string[]}
 */
export function buildTips(circuitMeta) {
  const { from, to, category, hooks = {} } = circuitMeta;
  const custom = hooks.tips || [];

  const defaults = [
    `Partez tôt les journées de transfert pour profiter de la lumière et éviter la chaleur entre ${from} et ${to}.`,
    `Changez un peu d’argent dès l’arrivée et gardez de la monnaie pour thés, petits achats et pourboires.`,
    `Demandez toujours avant de photographier les personnes — le respect ouvre plus de portes que l’objectif.`,
    `Hydratez-vous régulièrement, surtout sur les étapes exposées au soleil.`,
    `Laissez de la place dans la valise pour un tapis, une poterie ou une étole trouvée en chemin.`,
  ];

  const byCategory = {
    desert: [
      `Prévoir une écharpe / foulard pour le vent de sable et les couchers de soleil sur les dunes.`,
      `Le soir en bivouac peut être frais : une couche supplémentaire change le confort.`,
    ],
    imperial: [
      `En médina, restez près de votre guide aux carrefours densément fréquentés.`,
      `Les souks se visitent mieux le matin, quand l’atmosphère est plus douce.`,
    ],
    nord: [
      `Des chaussures à bonne adhérence aident dans les ruelles en pente du Rif.`,
      `Le bleu de Chefchaouen se photographie idéalement en fin d’après-midi.`,
    ],
    atlas: [
      `Les températures chutent avec l’altitude : prévoyez une polaire même en été.`,
      `Sur les sentiers, un rythme lent et régulier vaut mieux qu’une montée précipitée.`,
    ],
    atlantique: [
      `Le vent atlantique rafraîchit : une veste légère reste utile en soirée.`,
      `Goûtez les fruits de mer dans des adresses fréquentées par les locaux.`,
    ],
    sud: [
      `Les kasbahs et gorges offrent le meilleur contraste photo tôt le matin.`,
      `Emportez de l’eau supplémentaire sur les routes entre oasis.`,
    ],
    excursions: [
      `Prenez un petit-déjeuner solide : la journée est dense et le retour est prévu le soir.`,
      `Confirmez l’heure de reprise la veille avec votre hôtel / riad.`,
    ],
  };

  return [...custom, ...(byCategory[category] || []), ...defaults].slice(0, 8);
}

/**
 * @param {object} circuitMeta
 * @returns {string[]}
 */
export function buildPractical(circuitMeta) {
  const { duration, from, to, category, hooks = {} } = circuitMeta;
  const custom = hooks.practical || [];

  const defaults = [
    `Durée du programme : ${duration}.`,
    `Point de départ : ${from} — arrivée / fin : ${to}.`,
    `Départs possibles toute l’année, sous réserve de disponibilité.`,
    `Langue d’accompagnement : français (autres langues sur demande).`,
    `Groupe privé ou petit groupe selon la formule choisie.`,
    `Confirmation écrite des hébergements et du programme avant départ.`,
  ];

  const byCategory = {
    desert: [
      `Nuit en bivouac ou auberge désert selon la formule — précisée au devis.`,
      `Balade à dos de dromadaire sujette aux conditions météo et de sécurité.`,
    ],
    imperial: [
      `Entrées monuments : selon formule (incluses ou en option) — voir devis.`,
      `Journées médina : marche importante, chaussures adaptées recommandées.`,
    ],
    nord: [
      `Certaines routes de montagne peuvent être sinueuses : anti-nausée si besoin.`,
      `Hébergements type riad / maison d’hôtes au cœur ou proche des médinas.`,
    ],
    atlas: [
      `Altitude variable : informez-nous de toute condition médicale particulière.`,
      `Équipement de randonnée personnel pour les options trek.`,
    ],
    atlantique: [
      `Ambiance maritime : prévoyez protection vent et crème solaire.`,
      `Possibilité d’ajouter une nuit supplémentaire sur la côte.`,
    ],
    sud: [
      `Routes panoramiques : pauses photo prévues dans le timing.`,
      `Kasbahs et sites : horaires d’ouverture variables selon saison.`,
    ],
    excursions: [
      `Départ matinal depuis votre hébergement ; retour en fin de journée.`,
      `Repas du midi : selon formule (inclus ou libre).`,
    ],
  };

  return [...custom, ...(byCategory[category] || []), ...defaults].slice(0, 8);
}

/* --------------------------------------------------------------------------
 * Structured meta derivation: departure city, duration in days, difficulty,
 * trip type, languages, badge, thematic filter tags, gallery and map.
 * These auto-fill from existing fields so every circuit — hand-written or
 * generated — gets a consistent, filterable, SEO-complete data shape.
 * ------------------------------------------------------------------------ */

const CITY_ALIASES = {
  fes: 'Fès',
  fez: 'Fès',
  marrakesh: 'Marrakech',
  tangier: 'Tanger',
  tangiers: 'Tanger',
};

export function normalizeCity(name) {
  if (!name) return name;
  const clean = name.split('/')[0].split('–')[0].split('-')[0].trim();
  const alias = CITY_ALIASES[clean.toLowerCase()];
  return alias || clean;
}

export function deriveDepartureCity(meta) {
  return meta.departureCity || normalizeCity(meta.from);
}

export function deriveDays(meta) {
  if (meta.days) return meta.days;
  const match = String(meta.duration || '').match(/(\d+)/);
  if (match) return parseInt(match[1], 10);
  if (/journée|jour unique|day trip/i.test(meta.duration || '')) return 1;
  return 1;
}

const CATEGORY_DIFFICULTY = {
  desert: 'Modéré',
  imperial: 'Facile',
  nord: 'Facile',
  atlas: 'Modéré',
  atlantique: 'Facile',
  sud: 'Modéré',
  excursions: 'Facile',
};

export function deriveDifficulty(meta) {
  if (meta.difficulty) return meta.difficulty;
  if (/toubkal|trek|sommet/i.test(meta.slug || meta.h1 || '')) return 'Difficile';
  return CATEGORY_DIFFICULTY[meta.category] || 'Modéré';
}

export function deriveType(meta) {
  if (meta.type) return meta.type;
  if (meta.customizable) return 'Sur mesure';
  if (meta.category === 'excursions' && hashString(meta.slug) % 3 === 0) return 'En groupe';
  return 'Privé';
}

export function deriveLanguages(meta) {
  if (meta.languages) return meta.languages;
  const base = ['Français', 'Anglais'];
  if (meta.category === 'nord') base.push('Espagnol');
  if (['imperial', 'desert', 'sud'].includes(meta.category)) base.push('Arabe');
  return base;
}

export function deriveBadge(meta) {
  if (meta.badge) return meta.badge;
  if (meta.rating?.value >= 4.9 && meta.rating?.count >= 150) return 'Bestseller';
  if (meta.featured) return 'Populaire';
  if (hashString(meta.slug) % 5 === 0) return 'Nouveau';
  return null;
}

const CATEGORY_TAGS = {
  desert: ['desert', 'aventure'],
  sud: ['desert', 'aventure', 'culture'],
  imperial: ['culture', 'famille', 'couple'],
  nord: ['culture', 'montagne'],
  atlas: ['montagne', 'aventure'],
  atlantique: ['mer', 'couple', 'famille'],
  excursions: ['famille', 'budget'],
};

export function deriveTags(meta) {
  if (meta.tags) return meta.tags;
  const tags = new Set(CATEGORY_TAGS[meta.category] || []);
  const haystack = `${meta.slug} ${meta.title} ${(meta.keywords || []).join(' ')}`.toLowerCase();
  if (/tanger|asilah|essaouira|agadir|el jadida|oualidia|ifni|mirleft|martil/.test(haystack)) {
    tags.add('mer');
  }
  if (meta.fromPrice >= 250 || /luxe|luxury/.test(haystack)) tags.add('luxe');
  if (meta.fromPrice && meta.fromPrice <= 110) tags.add('budget');
  if ((meta.touristType || []).includes('Familles')) tags.add('famille');
  if ((meta.touristType || []).includes('Couples')) tags.add('couple');
  if (meta.category === 'excursions' || meta.category === 'nord') tags.add('culture');
  return [...tags];
}

const GALLERY_POOL = {
  desert: [
    'https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=1400&q=80',
    'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1400&q=80',
    'https://images.unsplash.com/photo-1547234935-80c7145ec969?w=1400&q=80',
    'https://images.unsplash.com/photo-1541322928-38f0bf043bb2?w=1400&q=80',
    'https://images.unsplash.com/photo-1548013146-72479768bada?w=1400&q=80',
  ],
  sud: [
    'https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=1400&q=80',
    'https://images.unsplash.com/photo-1548013146-72479768bada?w=1400&q=80',
    'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1400&q=80',
    'https://images.unsplash.com/photo-1591286318754-2fb488104427?w=1400&q=80',
  ],
  imperial: [
    'https://images.unsplash.com/photo-1553603227-2358aabe821e?w=1400&q=80',
    'https://images.unsplash.com/photo-1548922620-9d0e5c58c1f6?w=1400&q=80',
    'https://images.unsplash.com/photo-1585053661584-3f9c9b0b1d0b?w=1400&q=80',
    'https://images.unsplash.com/photo-1518979110168-a04336a4b8e5?w=1400&q=80',
  ],
  nord: [
    'https://images.unsplash.com/photo-1553603227-2358aabe821e?w=1400&q=80',
    'https://images.unsplash.com/photo-1553603227-91f9e9c4a70e?w=1400&q=80',
    'https://images.unsplash.com/photo-1602088113235-229c19758e9d?w=1400&q=80',
  ],
  atlas: [
    'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1400&q=80',
    'https://images.unsplash.com/photo-1571406384446-5c9f2b0b1f5e?w=1400&q=80',
    'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1400&q=80',
  ],
  atlantique: [
    'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1400&q=80',
    'https://images.unsplash.com/photo-1533387520709-752d83de3630?w=1400&q=80',
    'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1400&q=80',
  ],
  excursions: [
    'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1400&q=80',
    'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1400&q=80',
    'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1400&q=80',
  ],
};

export function deriveGallery(meta) {
  if (meta.gallery?.length) return meta.gallery;
  const pool = GALLERY_POOL[meta.category] || GALLERY_POOL.desert;
  const rotated = [...pool.slice(hashString(meta.slug) % pool.length), ...pool];
  const extra = rotated.filter((url) => url !== meta.image).slice(0, 4);
  return [meta.image, ...extra].filter(Boolean);
}

export function deriveHighlightSites(meta) {
  if (meta.highlightSites?.length) return meta.highlightSites;
  const fromDestinations = (meta.destinations || []).map((d) => d.name);
  if (fromDestinations.length) return fromDestinations;
  return [meta.from, meta.to].filter(Boolean);
}

export function deriveMapEmbedUrl(meta) {
  if (meta.mapEmbedUrl) return meta.mapEmbedUrl;
  return buildRouteMapEmbedUrl(meta.from, meta.to);
}

/* --------------------------------------------------------------------------
 * Named SEO content sections (Introduction / Pourquoi choisir / Lieux visités
 * / Quand partir / Conclusion) — short paragraphs & lists, written to be
 * easily extractable by AI answer engines (Google AI Overview, ChatGPT,
 * Gemini, Perplexity, Claude) as required by the AI-search objective.
 * ------------------------------------------------------------------------ */

export function buildIntro(meta) {
  const { h1, from, to, duration, category } = meta;
  const catLabel = CATEGORY_LABELS[category] || 'Maroc';
  return `Le ${h1} est un ${meta.type === 'Sur mesure' ? 'voyage sur mesure' : 'circuit'} ${meta.type === 'En groupe' ? 'en petit groupe' : 'privé'} qui relie ${from} à ${to} en ${duration}. Pensé pour les voyageurs qui veulent découvrir le ${catLabel} sans compromis sur le confort, il combine transport privé, hébergements sélectionnés et guide francophone.`;
}

export function buildWhyChoose(meta) {
  const { duration, difficulty, type, languages = [], badge, from, to } = meta;
  const reasons = [
    `Itinéraire éprouvé de ${from} à ${to}, calibré sur ${duration} sans étapes inutiles.`,
    `Formule ${type?.toLowerCase() || 'privée'}, adaptable à votre rythme et à votre budget.`,
    `Niveau ${difficulty?.toLowerCase() || 'modéré'} : accessible à la majorité des voyageurs en forme générale.`,
    `Accompagnement en ${languages.join(' et ')}, du premier contact au retour.`,
  ];
  if (badge) reasons.unshift(`Circuit ${badge.toLowerCase()} parmi les voyages Sahara Visite les plus réservés.`);
  return reasons;
}

export function buildPlacesVisited(meta) {
  const sites = deriveHighlightSites(meta);
  const { regions } = getGeoEntities(sites);
  return {
    sites,
    regions,
    summary: sites.length
      ? `Ce circuit traverse ${sites.slice(0, 6).join(', ')}${
          regions.length ? ` — au cœur ${regions.length > 1 ? 'des régions' : 'de la région'} ${regions.join(' et ')} du Maroc` : ''
        }.`
      : '',
  };
}

const SEASON_BY_CATEGORY = {
  desert: 'Privilégiez mars-mai ou septembre-novembre pour éviter la chaleur estivale dans le Sahara ; l’hiver offre des nuits fraîches mais des ciels très dégagés pour l’observation des étoiles.',
  sud: 'Le printemps et l’automne restent les saisons les plus confortables pour les vallées du Sud ; l’été impose un départ matinal pour éviter les fortes chaleurs.',
  imperial: 'Les villes impériales se visitent toute l’année ; le printemps et l’automne offrent une température idéale pour marcher longtemps en médina.',
  nord: 'Le Nord du Maroc est agréable de mars à novembre ; évitez les grosses pluies de janvier-février si vous prévoyez des randonnées à Akchour.',
  atlas: 'L’Atlas se visite de préférence entre avril et octobre ; l’hiver apporte neige et froid en altitude, à réserver aux amateurs de trek expérimentés.',
  atlantique: 'La côte Atlantique reste tempérée toute l’année, avec un vent plus marqué de juin à septembre — idéal pour les amateurs de surf et de glisse.',
  excursions: 'Ces excursions se font toute l’année ; un départ matinal reste recommandé en été pour profiter de la fraîcheur et de la meilleure lumière.',
};

export function buildWhenToGo(meta) {
  return meta.hooks?.seasonNote || SEASON_BY_CATEGORY[meta.category] || SEASON_BY_CATEGORY.excursions;
}

export function buildConclusion(meta) {
  const { h1, from, to } = meta;
  return `Prêt(e) à vivre ${h1} ? Demandez votre devis gratuit ou réservez directement en ligne : Sahara Visite confirme vos disponibilités entre ${from} et ${to} sous 24 h et personnalise le programme selon vos envies.`;
}

/**
 * Compact, extractable answer block for AI search engines / answer boxes:
 * one short natural-language paragraph + a scannable fact list.
 */
export function buildAiAnswerBlock(meta) {
  const { h1, from, to, duration, fromPrice, difficulty, type, days } = meta;
  const sites = deriveHighlightSites(meta).slice(0, 5);
  return {
    quickAnswer: `${h1} est un circuit de ${duration} au départ de ${from}, avec retour à ${to}. Il visite notamment ${sites.slice(0, 3).join(', ')}. Formule ${String(type).toLowerCase()}, niveau ${String(difficulty).toLowerCase()}, à partir de ${fromPrice} € par personne.`,
    facts: [
      `Durée : ${duration} (${days} jour${days > 1 ? 's' : ''})`,
      `Départ : ${from} · Arrivée : ${to}`,
      `Type : ${type} · Difficulté : ${difficulty}`,
      `À partir de ${fromPrice} € par personne`,
      `Lieux visités : ${sites.join(', ')}`,
    ],
  };
}

/**
 * Enrich a circuit meta object with generated longDescription, faq, tips,
 * practical info, structured SEO sections, filters metadata and AI-search
 * ready content blocks.
 */
export function enrichCircuit(meta) {
  const longDescription = buildLongDescription({
    h1: meta.h1,
    from: meta.from,
    to: meta.to,
    duration: meta.duration,
    category: meta.category,
    hooks: meta.hooks,
  });

  const faq = buildFaq(meta);
  const tips = buildTips(meta);
  const practical = buildPractical(meta);

  const { hooks, i18n, ...rest } = meta;

  const departureCity = deriveDepartureCity(meta);
  const days = deriveDays(meta);
  const difficulty = deriveDifficulty(meta);
  const type = deriveType(meta);
  const languages = deriveLanguages(meta);
  const withDerived = { ...rest, departureCity, days, difficulty, type, languages };
  const badge = deriveBadge(withDerived);
  const tags = deriveTags(withDerived);
  const gallery = deriveGallery(withDerived);
  const highlightSites = deriveHighlightSites(withDerived);
  const mapEmbedUrl = deriveMapEmbedUrl(withDerived);

  const fullMeta = { ...withDerived, badge, tags, gallery, highlightSites, mapEmbedUrl };

  return {
    ...fullMeta,
    featured: rest.featured ?? false,
    imageWidth: rest.imageWidth ?? 1400,
    imageHeight: rest.imageHeight ?? 900,
    longDescription,
    faq,
    tips,
    practical,
    intro: buildIntro(fullMeta),
    whyChoose: buildWhyChoose(fullMeta),
    placesVisited: buildPlacesVisited(fullMeta),
    whenToGo: buildWhenToGo(fullMeta),
    conclusion: buildConclusion(fullMeta),
    aiAnswer: buildAiAnswerBlock(fullMeta),
    touristType: rest.touristType || ['Voyageurs', 'Couples', 'Familles'],
  };
}
