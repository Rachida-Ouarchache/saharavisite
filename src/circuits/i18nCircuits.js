/**
 * EN / AR SEO overlays for circuit pages.
 * Long body content stays in French (circuitsData); AR can fall back to FR for long text.
 */

const i18nCircuits = {
  'marrakech-merzouga-3-jours': {
    en: {
      title: 'Marrakech to Merzouga 3-Day Tour',
      metaTitle: 'Marrakech Merzouga 3-Day Sahara Desert Tour',
      metaDescription:
        '3-day tour from Marrakech to Merzouga: Atlas passes, kasbahs, Erg Chebbi dunes, camel ride and desert camp. Private Morocco tour.',
      shortDescription:
        'The classic short Sahara escape: Marrakech to Merzouga in 3 days with an overnight desert camp under the stars.',
    },
    ar: {
      title: 'جولة مراكش مرزوكة 3 أيام',
      metaDescription:
        'رحلة 3 أيام من مراكش إلى مرزوكة: ممرات الأطلس والقصبات وكثبان إرغ شبي وركوب الجمال والمبيت في المخيم الصحراوي.',
    },
  },
  'marrakech-merzouga-4-jours': {
    en: {
      title: 'Marrakech to Merzouga 4-Day Tour',
      metaTitle: 'Marrakech Merzouga 4-Day Desert Circuit',
      metaDescription:
        '4 days from Marrakech to Merzouga with Todra Gorge, Dadès Valley, Erg Chebbi camp and kasbahs. Comfortable Sahara itinerary.',
      shortDescription:
        'A more comfortable Sahara classic: extra time for gorges, dunes and a relaxed return to Marrakech.',
    },
    ar: {
      title: 'جولة مراكش مرزوكة 4 أيام',
      metaDescription:
        'رحلة 4 أيام من مراكش إلى مرزوكة مع مضيق تودغا ووادي دادس ومخيم إرغ شبي والقصبات. إيقاع مريح في الصحراء.',
    },
  },
  'marrakech-erg-chigaga': {
    en: {
      title: 'Marrakech to Erg Chigaga',
      metaTitle: 'Marrakech Erg Chigaga Great Desert Tour',
      metaDescription:
        'Reach Erg Chigaga from Marrakech: remote dunes, 4x4 tracks and wild bivouac far from Merzouga crowds. Authentic Great Desert.',
      shortDescription:
        'Discover Morocco’s largest erg — isolated dunes, 4x4 adventure and a silent desert camp at Erg Chigaga.',
    },
    ar: {
      title: 'جولة مراكش عرق الشقاقات',
      metaDescription:
        'اكتشف عرق الشقاقات من مراكش: كثبان نائية ومسارات رباعية الدفع ومخيم بري بعيد عن ازدحام مرزوكة.',
    },
  },
  'fes-merzouga': {
    en: {
      title: 'Fes to Merzouga Desert Tour',
      metaTitle: 'Fes Merzouga Sahara Tour via Middle Atlas',
      metaDescription:
        'Travel from Fes to Merzouga via the Middle Atlas and Ziz Valley: Erg Chebbi dunes, camels and desert night. Private departures.',
      shortDescription:
        'From imperial Fes to the Sahara: cedar forests, Ziz palm groves and a night among the Erg Chebbi dunes.',
    },
    ar: {
      title: 'جولة فاس مرزوكة',
      metaDescription:
        'من فاس إلى مرزوكة عبر الأطلس المتوسط ووادي زيز: كثبان إرغ شبي والجمال وليلة في الصحراء.',
    },
  },
  'casablanca-merzouga': {
    en: {
      title: 'Casablanca to Merzouga Tour',
      metaTitle: 'Casablanca Merzouga Cross-Country Sahara Tour',
      metaDescription:
        'Cross Morocco from Casablanca to Merzouga: imperial stops, Atlas scenery and Erg Chebbi dunes. Full Sahara circuit.',
      shortDescription:
        'A grand traverse from the Atlantic metropolis to the Sahara dunes, with culture and desert in one journey.',
    },
    ar: {
      title: 'جولة الدار البيضاء مرزوكة',
      metaDescription:
        'اعبر المغرب من الدار البيضاء إلى مرزوكة: محطات إمبراطورية والأطلس وكثبان إرغ شبي في رحلة صحراوية كاملة.',
    },
  },
  'tanger-merzouga': {
    en: {
      title: 'Tangier to Merzouga Tour',
      metaTitle: 'Tangier Merzouga North to Sahara Journey',
      metaDescription:
        'From the Strait of Gibraltar to Merzouga dunes: Rif, Fes and Sahara in one epic Morocco tour with Sahara Visite.',
      shortDescription:
        'Start at Europe’s doorstep in Tangier and end under Saharan stars — a north-to-desert Morocco adventure.',
    },
    ar: {
      title: 'جولة طنجة مرزوكة',
      metaDescription:
        'من مضيق جبل طارق إلى كثبان مرزوكة: الريف وفاس والصحراء في رحلة مغربية كبرى.',
    },
  },
  'casablanca-rabat-meknes-fes': {
    en: {
      title: 'Imperial Cities: Casablanca to Fes',
      metaTitle: 'Imperial Cities Tour Casablanca Rabat Fes',
      metaDescription:
        'Casablanca, Rabat, Meknes and Fes: UNESCO medinas, royal palaces and artisan souks. Classic imperial Morocco tour.',
      shortDescription:
        'Four imperial cities in one cultural circuit — from Casablanca’s oceanfront to the labyrinth of Fes.',
    },
    ar: {
      title: 'المدن الإمبراطورية: الدار البيضاء إلى فاس',
      metaDescription:
        'الدار البيضاء والرباط ومكناس وفاس: مدن عتيقة ومواقع يونسكو وقصور ملكية وحرف تقليدية.',
    },
  },
  'casablanca-rabat-meknes-fes-marrakech': {
    en: {
      title: 'Grand Imperial Circuit to Marrakech',
      metaTitle: 'Imperial Cities Tour Ending in Marrakech',
      metaDescription:
        'Casablanca–Rabat–Meknes–Fes–Marrakech: Morocco’s grand imperial classic. Culture-rich Morocco Tours itinerary.',
      shortDescription:
        'The full imperial arc across Morocco, finishing in the ochre alleys and squares of Marrakech.',
    },
    ar: {
      title: 'الدورة الإمبراطورية الكبرى إلى مراكش',
      metaDescription:
        'الدار البيضاء والرباط ومكناس وفاس ومراكش: الكلاسيكية الكبرى للمدن الإمبراطورية المغربية.',
    },
  },
  'marrakech-fes': {
    en: {
      title: 'Marrakech to Fes Tour',
      metaTitle: 'Marrakech Fes Tour via Atlas and South',
      metaDescription:
        'Link Marrakech to Fes through mountains and southern kasbahs: gorges, medinas and landscapes. Scenic Morocco circuit.',
      shortDescription:
        'Connect Morocco’s two great cultural capitals via Atlas passes, valleys and historic earthen kasbahs.',
    },
    ar: {
      title: 'جولة مراكش فاس',
      metaDescription:
        'اربط مراكش بفاس عبر الجبال وقصبات الجنوب: مضائق ومدن عتيقة ومناظر خلابة.',
    },
  },
  'circuit-tanger': {
    en: {
      title: 'Tangier City Tour',
      metaTitle: 'Tangier Tour Medina Cap Spartel Atlantic',
      metaDescription:
        'Explore Tangier: kasbah, Hercules Cave, Cap Spartel and legendary cafés on the Strait. Northern Morocco escape.',
      shortDescription:
        'Discover Tangier’s medina, Atlantic viewpoints and cosmopolitan soul at the gateway between Africa and Europe.',
    },
    ar: {
      title: 'جولة طنجة',
      metaDescription:
        'استكشف طنجة: القصبة وكهف هرقل ورأس سبارطيل والمقاهي الأسطورية على المضيق.',
    },
  },
  'circuit-chefchaouen': {
    en: {
      title: 'Chefchaouen Blue City Tour',
      metaTitle: 'Chefchaouen Tour Blue Pearl of the Rif',
      metaDescription:
        'Stay in Chefchaouen: blue alleys, kasbah and Rif mountain views. Romantic and photogenic northern Morocco tour.',
      shortDescription:
        'Lose yourself in the blue-washed lanes of Chefchaouen, Morocco’s most photogenic mountain medina.',
    },
    ar: {
      title: 'جولة شفشاون المدينة الزرقاء',
      metaDescription:
        'أقم في شفشاون: أزقة زرقاء وقصبة وإطلالات جبال الريف. جولة رومانسية وتصويرية في شمال المغرب.',
    },
  },
  'circuit-akchour': {
    en: {
      title: 'Akchour Waterfalls Tour',
      metaTitle: 'Akchour Tour Cascades and God’s Bridge',
      metaDescription:
        'Hike Akchour near Chefchaouen: waterfalls, green gorges and God’s Bridge. Rif nature day with local guide.',
      shortDescription:
        'A refreshing Rif hike to Akchour’s cascades and the dramatic natural arch known as God’s Bridge.',
    },
    ar: {
      title: 'جولة عكشور والشلالات',
      metaDescription:
        'تنزه في عكشور قرب شفشاون: شلالات ومضايق خضراء وجسر الله الشهير في طبيعة الريف.',
    },
  },
  'circuit-tetouan': {
    en: {
      title: 'Tetouan UNESCO Medina Tour',
      metaTitle: 'Tetouan Tour Andalusian UNESCO Medina',
      metaDescription:
        'Discover Tetouan: UNESCO medina, Andalusian heritage and refined Rif crafts. Cultural northern Morocco circuit.',
      shortDescription:
        'Walk Tetouan’s white-and-green medina — an Andalusian jewel often overlooked by rushed itineraries.',
    },
    ar: {
      title: 'جولة تطوان المدينة العتيقة',
      metaDescription:
        'اكتشف تطوان: مدينة عتيقة مدرجة في اليونسكو وتراث أندلسي وحرف الريف الراقية.',
    },
  },
  'circuit-asilah': {
    en: {
      title: 'Asilah Art and Ramparts Tour',
      metaTitle: 'Asilah Tour Street Art and Atlantic Walls',
      metaDescription:
        'Asilah: Atlantic ramparts, mural art and a luminous medina. Artistic coastal escape in northern Morocco.',
      shortDescription:
        'A breezy Atlantic town of whitewashed walls, summer murals and seafood terraces facing the ocean.',
    },
    ar: {
      title: 'جولة أصيلة الفن والأسوار',
      metaDescription:
        'أصيلة: أسوار أطلسية وفن جداري ومدينة مضيئة. ملاذ ساحلي فني في شمال المغرب.',
    },
  },
  'excursion-ourika': {
    en: {
      title: 'Ourika Valley Excursion',
      metaTitle: 'Ourika Valley Day Trip from Marrakech',
      metaDescription:
        'Day in the Ourika Valley: Berber villages, mountain river and Setti Fatma. Easy Atlas escape from Marrakech.',
      shortDescription:
        'Leave the red city for Berber foothills, riverside walks and mint tea with mountain views.',
    },
    ar: {
      title: 'رحلة وادي أوريكا',
      metaDescription:
        'يوم في وادي أوريكا: قرى أمازيغية ونهر جبلي وستي فاطمة. نزهة أطلسية سهلة من مراكش.',
    },
  },
  'circuit-imlil': {
    en: {
      title: 'Imlil Atlas Village Tour',
      metaTitle: 'Imlil Tour Gateway to Mount Toubkal',
      metaDescription:
        'Imlil and High Atlas Berber villages: gentle hikes, hospitality and Toubkal views. Mountain Morocco circuit.',
      shortDescription:
        'Base yourself in Imlil, the welcoming gateway village beneath North Africa’s highest peak.',
    },
    ar: {
      title: 'جولة إمليل بوابة توبقال',
      metaDescription:
        'إمليل وقرى الأطلس الكبير: نزهات لطيفة وضيافة وإطلالات على توبقال.',
    },
  },
  'circuit-oukaimeden': {
    en: {
      title: 'Oukaimeden Mountain Tour',
      metaTitle: 'Oukaimeden Tour Atlas Ski Station Views',
      metaDescription:
        'Oukaimeden: mountain station, pure air and High Atlas panoramas. Alpine-style escape from Marrakech.',
      shortDescription:
        'Ascend to Morocco’s best-known mountain station for wide horizons and cool Atlas air.',
    },
    ar: {
      title: 'جولة أوكايمدن',
      metaDescription:
        'أوكايمدن: محطة جبلية وهواء نقي وإطلالات الأطلس الكبير. ملاذ جبلي من مراكش.',
    },
  },
  'trek-toubkal': {
    en: {
      title: 'Mount Toubkal Trek',
      metaTitle: 'Toubkal Trek 4167 m Roof of Morocco',
      metaDescription:
        'Climb Jebel Toubkal (4167 m): mountain refuge, experienced guides and epic views. Atlas trek with Sahara Visite.',
      shortDescription:
        'Summit North Africa’s highest peak on a guided trek from Imlil with mules, refuge nights and sunrise views.',
    },
    ar: {
      title: 'تريك جبل توبقال',
      metaDescription:
        'اصعد جبل توبقال (4167 م): مأوى جبلي ومرشدون متمرسون ومناظر خلابة في الأطلس.',
    },
  },
  'cascades-ouzoud': {
    en: {
      title: 'Ouzoud Waterfalls Tour',
      metaTitle: 'Ouzoud Waterfalls Nature Tour Morocco',
      metaDescription:
        'Ouzoud Falls: dramatic cascades, shaded trails and Barbary macaques. Berber nature west of Marrakech.',
      shortDescription:
        'Stand before Morocco’s most famous waterfalls, where mist, cliffs and monkeys share the canyon.',
    },
    ar: {
      title: 'جولة شلالات وزاز',
      metaDescription:
        'شلالات وزاز: مساقط مهيبة ومسارات مظللة وقرود الأطلس. طبيعة أمازيغية غرب مراكش.',
    },
  },
  'circuit-casablanca': {
    en: {
      title: 'Casablanca City Tour',
      metaTitle: 'Casablanca Tour Hassan II and Corniche',
      metaDescription:
        'Visit Casablanca: Hassan II Mosque, Habous quarter, Art Deco and Ain Diab corniche. Atlantic urban escape.',
      shortDescription:
        'Morocco’s economic capital — ocean mosque, colonial architecture and a long Atlantic waterfront.',
    },
    ar: {
      title: 'جولة الدار البيضاء',
      metaDescription:
        'زر الدار البيضاء: مسجد الحسن الثاني وحي الأحباس وآرت ديكو وكورنيش عين الدياب.',
    },
  },
  'circuit-el-jadida': {
    en: {
      title: 'El Jadida Portuguese City Tour',
      metaTitle: 'El Jadida UNESCO Portuguese Cistern Tour',
      metaDescription:
        'El Jadida: UNESCO Portuguese citadel, underground cistern and Atlantic beaches. Heritage coast circuit.',
      shortDescription:
        'Walk ramparts and the famous cistern of Mazagan, a Portuguese legacy on Morocco’s Atlantic shore.',
    },
    ar: {
      title: 'جولة الجديدة',
      metaDescription:
        'الجديدة: قلعة برتغالية لليونسكو وصهريج تحت الأرض وشواطئ أطلسية.',
    },
  },
  'circuit-oualidia': {
    en: {
      title: 'Oualidia Lagoon and Oysters Tour',
      metaTitle: 'Oualidia Tour Lagoon Oysters Wild Coast',
      metaDescription:
        'Oualidia: protected lagoon, fresh oysters and wild beaches. Gourmet nature escape on Morocco’s Atlantic coast.',
      shortDescription:
        'A quiet lagoon town famous for oysters, birdlife and slow Atlantic days away from big resorts.',
    },
    ar: {
      title: 'جولة الوليدية',
      metaDescription:
        'الوليدية: بحيرة محمية ومحار طازج وشواطئ برية. ملاذ ذواقة وطبيعة على الساحل الأطلسي.',
    },
  },
  'circuit-essaouira': {
    en: {
      title: 'Essaouira Medina and Trade Winds Tour',
      metaTitle: 'Essaouira Tour Medina Skala and Beaches',
      metaDescription:
        'Essaouira: windy medina, Skala ramparts, fishing port and beaches. Atlantic culture, music and seafood.',
      shortDescription:
        'Feel the alizés in Mogador — blue boats, rampart walks, Gnawa rhythms and grilled sardines.',
    },
    ar: {
      title: 'جولة الصويرة',
      metaDescription:
        'الصويرة: مدينة عتيقة هوائية وسكالة الميناء وشواطئ. ثقافة أطلسية وموسيقى ومأكولات بحرية.',
    },
  },
  'circuit-agadir': {
    en: {
      title: 'Agadir Bay and Kasbah Tour',
      metaTitle: 'Agadir Tour Bay Souk Kasbah Oufella',
      metaDescription:
        'Agadir: sunny bay, large souk, Oufella kasbah and long beaches. Southern Atlantic Morocco stay and tours.',
      shortDescription:
        'Soft sand, winter sun and easy day trips — Agadir as a relaxed base on Morocco’s southern coast.',
    },
    ar: {
      title: 'جولة أكادير',
      metaDescription:
        'أكادير: خليج مشمس وسوق كبير وقصبة أوفلا وشواطئ طويلة. إقامة أطلسية في جنوب المغرب.',
    },
  },
  'circuit-ouarzazate': {
    en: {
      title: 'Ouarzazate Gateway to the Desert',
      metaTitle: 'Ouarzazate Tour Cinema Kasbahs Desert Gate',
      metaDescription:
        'Ouarzazate: film studios, Taourirt kasbah and the legendary desert gateway. Southern Morocco light and clay.',
      shortDescription:
        'Explore the “Hollywood of Morocco” and earthen fortresses at the edge of the Sahara routes.',
    },
    ar: {
      title: 'جولة ورزازات',
      metaDescription:
        'ورزازات: استوديوهات سينما وقصبة تاوريرت وبوابة الصحراء الأسطورية. ضوء الجنوب المغربي.',
    },
  },
  'circuit-dades': {
    en: {
      title: 'Dadès Valley and Kasbah Road Tour',
      metaTitle: 'Dadès Valley Tour Gorges and Kasbah Road',
      metaDescription:
        'Dadès Valley: dramatic gorges, Road of a Thousand Kasbahs and lunar landscapes. Photogenic southern Morocco.',
      shortDescription:
        'Follow serpentines through rock amphitheatres and clay kasbahs in one of Morocco’s great valleys.',
    },
    ar: {
      title: 'جولة وادي دادس',
      metaDescription:
        'وادي دادس: مضايق مهيبة وطريق القصبات ومناظر قمرية. جنوب المغرب لعشاق التصوير.',
    },
  },
  'circuit-todra': {
    en: {
      title: 'Todra Gorge Canyon Tour',
      metaTitle: 'Todra Gorge Tour 300 m Canyon Palm Grove',
      metaDescription:
        'Todra Gorge: 300 m vertical canyon, lush palm grove and climbing vibe. Southern Morocco nature and stone.',
      shortDescription:
        'Stand between soaring canyon walls where a river and palm oasis cut through ochre rock.',
    },
    ar: {
      title: 'جولة مضيق تودغا',
      metaDescription:
        'مضيق تودغا: واد عمودي بارتفاع 300 م وواحة نخيل وأجواء تسلق. طبيعة الجنوب المغربي.',
    },
  },
  'circuit-zagora': {
    en: {
      title: 'Zagora Draa Valley Tour',
      metaTitle: 'Zagora Tour Draa Palms Sahara Gateway',
      metaDescription:
        'Zagora and the Draa Valley: endless palm groves, dunes and the Timbuktu sign. Southern caravan-route Morocco.',
      shortDescription:
        'Enter the great Draa palm sea and feel the old caravan pulse at the door of the desert.',
    },
    ar: {
      title: 'جولة زاكورة',
      metaDescription:
        'زاكورة ووادي درعة: بساتين نخيل شاسعة وكثبان ولافتة تمبكتو. طريق القوافل في الجنوب.',
    },
  },
  'circuit-mhamid': {
    en: {
      title: "M'Hamid End-of-Road Desert Tour",
      metaTitle: "M'Hamid Tour Isolated Dunes End of Road",
      metaDescription:
        "M'Hamid El Ghizlane: end of the asphalt, remote dunes and wild camps. Authentic Sahara in Morocco’s deep south.",
      shortDescription:
        'Reach the last oasis before the open desert — quiet dunes, nomadic trails and true isolation.',
    },
    ar: {
      title: 'جولة محاميد الغزلان',
      metaDescription:
        'محاميد الغزلان: نهاية الطريق المعبد وكثبان نائية ومخيمات برية. صحراء أصيلة في أقصى الجنوب.',
    },
  },
  'excursion-essaouira': {
    en: {
      title: 'Essaouira Day Trip from Marrakech',
      metaTitle: 'Essaouira Day Trip from Marrakech Coast',
      metaDescription:
        'Marrakech–Essaouira day trip: medina, fishing port and Atlantic breeze. Coastal excursion with private driver.',
      shortDescription:
        'A full day by the ocean — ramparts, blue boats and seafood — returning to Marrakech by evening.',
    },
    ar: {
      title: 'رحلة يومية إلى الصويرة من مراكش',
      metaDescription:
        'رحلة يومية مراكش–الصويرة: المدينة العتيقة وميناء الصيد ونسيم الأطلسي مع سائق خاص.',
    },
  },
  'excursion-ouzoud': {
    en: {
      title: 'Ouzoud Falls Day Trip',
      metaTitle: 'Ouzoud Waterfalls Day Trip from Marrakech',
      metaDescription:
        'Ouzoud Falls day trip from Marrakech: big cascades, trails and panoramic lunch. Well-paced nature excursion.',
      shortDescription:
        'Leave early for Morocco’s iconic waterfalls and return with mist on your camera lens.',
    },
    ar: {
      title: 'رحلة يومية لشلالات وزاز',
      metaDescription:
        'رحلة يومية لشلالات وزاز من مراكش: مساقط كبيرة ومسارات وغداء بإطلالة بانورامية.',
    },
  },
  'excursion-ourika-journee': {
    en: {
      title: 'Ourika Day Trip from Marrakech',
      metaTitle: 'Ourika Valley Day Excursion from Marrakech',
      metaDescription:
        'Ourika Valley in one day: Berber villages, Atlas river and mountain air. Easy private excursion from Marrakech.',
      shortDescription:
        'A simple, scenic Atlas day — villages, river stops and tea — without changing hotels in Marrakech.',
    },
    ar: {
      title: 'رحلة يومية لوادي أوريكا',
      metaDescription:
        'وادي أوريكا في يوم واحد: قرى أمازيغية ونهر الأطلس وهواء الجبل. رحلة سهلة من مراكش.',
    },
  },
  'excursion-paradise-valley': {
    en: {
      title: 'Paradise Valley Day Trip from Agadir',
      metaTitle: 'Paradise Valley Excursion Day from Agadir',
      metaDescription:
        'Paradise Valley from Agadir: natural pools, gorges and palm oasis. Day excursion into the coastal Anti-Atlas.',
      shortDescription:
        'Swap the beach for emerald rock pools and palm shade in Paradise Valley above Agadir.',
    },
    ar: {
      title: 'رحلة وادي الجنة من أكادير',
      metaDescription:
        'وادي الجنة من أكادير: برك طبيعية ومضايق وواحة نخيل. رحلة يومية في الأطلس الصغير الساحلي.',
    },
  },
  'excursion-ait-ben-haddou': {
    en: {
      title: 'Ait Ben Haddou Day Trip',
      metaTitle: 'Ait Ben Haddou UNESCO Day Trip Marrakech',
      metaDescription:
        'Ait Ben Haddou UNESCO day trip via Tizi n’Tichka. Film kasbahs and southern landscapes from Marrakech.',
      shortDescription:
        'Cross the High Atlas to the famous clay ksar — a UNESCO icon of Morocco’s cinematic south.',
    },
    ar: {
      title: 'رحلة يومية لآيت بن حدو',
      metaDescription:
        'رحلة يومية لآيت بن حدو (يونسكو) عبر تيزي نتيكا. قصبات سينمائية ومناظر الجنوب من مراكش.',
    },
  },
};

export function getCircuitI18n(slug, lang = 'en') {
  const entry = i18nCircuits[slug];
  if (!entry) return null;
  if (lang === 'ar') return entry.ar;
  return entry.en;
}

export default i18nCircuits;
