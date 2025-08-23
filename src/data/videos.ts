// Self-contained video data interface
export interface VideoData {
  id: string;
  title: string;
  vimeoId: string;
  description: string;
  category: 'music' | 'corporate';
}

export const musicVideos: VideoData[] = [
  {
    id: "1",
    title: "Don't Be Shy",
    vimeoId: "777059485?h=ca11285fb4",
    description: "Creative music video production showcasing artistic vision and professional cinematography.",
    category: "music"
  },
  {
    id: "2", 
    title: "Where You Were All This Time",
    vimeoId: "785233614?h=fd7308a5ee",
    description: "Professional music video with compelling storytelling and visual effects.",
    category: "music"
  },
  {
    id: "3",
    title: "Benz Friends",
    vimeoId: "731029025?h=ad087e5ea3",
    description: "High-energy music video featuring dynamic cinematography and creative direction.",
    category: "music"
  },
  
  {
    id: "9",
    title: "Krazy B#tch",
    vimeoId: "601874683?h=3a6d61a432",
    description: "High-energy music video with creative visual effects and professional cinematography.",
    category: "music"
  },
  {
    id: "10",
    title: "V.E.G.A ft. HOODBRAT",
    vimeoId: "601467506?h=4f433e8c22",
    description: "Collaborative music video featuring multiple artists with professional production.",
    category: "music"
  },
  {
    id: "11",
    title: "Prada",
    vimeoId: "579880285?h=d52692f127",
    description: "Stylish music video with high-end production value and creative cinematography.",
    category: "music"
  },
  {
    id: "12",
    title: "Nilton",
    vimeoId: "589862020?h=d6f9004df9",
    description: "Professional music video showcasing artistic vision and quality production.",
    category: "music"
  },

  {
    id: "14",
    title: "I Keep Going",
    vimeoId: "571400289",
    description: "Inspirational music video with professional production and compelling visuals.",
    category: "music"
  },
  {
    id: "15",
    title: "Shorty Got",
    vimeoId: "467770486",
    description: "Energetic music video featuring dynamic cinematography and creative storytelling.",
    category: "music"
  },
  {
    id: "16",
    title: "Wait",
    vimeoId: "467776136",
    description: "Artistic music video with professional quality and innovative visual effects.",
    category: "music"
  },
  {
    id: "17",
    title: "Burden",
    vimeoId: "459711248",
    description: "Emotional music video with compelling narrative and professional cinematography.",
    category: "music"
  },
  {
    id: "18",
    title: "EL Capitan",
    vimeoId: "459925743",
    description: "Dynamic music video featuring high-energy performance and creative direction.",
    category: "music"
  },
  {
    id: "19",
    title: "Water",
    vimeoId: "390308094",
    description: "Artistic music video with fluid cinematography and creative visual storytelling.",
    category: "music"
  },
  {
    id: "20",
    title: "Russian Artist",
    vimeoId: "221837626",
    description: "International music video production showcasing cultural diversity and professional quality.",
    category: "music"
  },
  {
    id: "21",
    title: "Mo",
    vimeoId: "387198170",
    description: "Professional music video with creative direction and high-quality production.",
    category: "music"
  },
  {
    id: "22",
    title: "Power",
    vimeoId: "387314493",
    description: "High-energy music video showcasing strength and determination through visual storytelling.",
    category: "music"
  },
  {
    id: "23",
    title: "Madlen",
    vimeoId: "356486628",
    description: "Artistic music video featuring professional cinematography and creative direction.",
    category: "music"
  },
  {
    id: "24",
    title: "Dilation",
    vimeoId: "364143683",
    description: "Creative music video with innovative visual effects and professional production.",
    category: "music"
  },
  {
    id: "25",
    title: "Cry Baby",
    vimeoId: "358670758",
    description: "Emotional music video with compelling storytelling and professional cinematography.",
    category: "music"
  },

  {
    id: "27",
    title: "No One Gonna",
    vimeoId: "353873751",
    description: "Dynamic music video with creative storytelling and professional cinematography.",
    category: "music"
  },
  {
    id: "28",
    title: "Living The Life",
    vimeoId: "353871016",
    description: "Lifestyle music video showcasing success and achievement through visual narrative.",
    category: "music"
  },
  {
    id: "29",
    title: "Je Voulais Te Dire",
    vimeoId: "353868963",
    description: "French music video with romantic themes and professional production quality.",
    category: "music"
  },
  {
    id: "30",
    title: "Treat Her Right",
    vimeoId: "353859711",
    description: "Relationship-themed music video with compelling storytelling and creative direction.",
    category: "music"
  },
  {
    id: "31",
    title: "Summertime",
    vimeoId: "353854624",
    description: "Seasonal music video capturing summer vibes with professional cinematography.",
    category: "music"
  },
  {
    id: "32",
    title: "Waiting on you",
    vimeoId: "358544668",
    description: "Romantic music video with emotional depth and professional production quality.",
    category: "music"
  },
  {
    id: "33",
    title: "Let Me Know",
    vimeoId: "358545854",
    description: "Communication-themed music video with creative storytelling and quality cinematography.",
    category: "music"
  },
  {
    id: "34",
    title: "Lover",
    vimeoId: "335877455",
    description: "Romantic music video featuring intimate storytelling and professional production.",
    category: "music"
  },
  {
    id: "35",
    title: "King",
    vimeoId: "322821285",
    description: "Powerful music video showcasing leadership and strength through visual narrative.",
    category: "music"
  },
  {
    id: "36",
    title: "Enjoy",
    vimeoId: "322817247",
    description: "Feel-good music video with positive energy and professional cinematography.",
    category: "music"
  },
  {
    id: "37",
    title: "Player",
    vimeoId: "319315343",
    description: "Lifestyle music video with creative direction and high-quality production.",
    category: "music"
  },
  {
    id: "38",
    title: "Lansky fet Elephant Man",
    vimeoId: "318801647",
    description: "Collaborative music video featuring international artists with professional production.",
    category: "music"
  },
  {
    id: "39",
    title: "Taste Of Love",
    vimeoId: "330501150",
    description: "Romantic music video with sensual themes and creative cinematography.",
    category: "music"
  },
  {
    id: "40",
    title: "Amends",
    vimeoId: "318072341",
    description: "Emotional music video about forgiveness and redemption with professional quality.",
    category: "music"
  },
  {
    id: "41",
    title: "Starlight",
    vimeoId: "317839932",
    description: "Dreamy music video with celestial themes and artistic cinematography.",
    category: "music"
  },
  {
    id: "42",
    title: "Poor Family",
    vimeoId: "312632072",
    description: "Social commentary music video with compelling narrative and professional production.",
    category: "music"
  },
  {
    id: "43",
    title: "Alone",
    vimeoId: "311012132",
    description: "Introspective music video exploring solitude with artistic visual storytelling.",
    category: "music"
  },
  {
    id: "44",
    title: "Ya Last Time",
    vimeoId: "311011010",
    description: "Emotional music video with themes of finality and professional cinematography.",
    category: "music"
  },
  {
    id: "45",
    title: "Luna",
    vimeoId: "317838376",
    description: "Mystical music video with lunar themes and creative visual effects.",
    category: "music"
  },
  {
    id: "46",
    title: "Bianca Bonnie",
    vimeoId: "298485055",
    description: "Artist showcase music video with professional production and creative direction.",
    category: "music"
  },

  {
    id: "48",
    title: "EL White-Pasale La Lengua",
    vimeoId: "292349300",
    description: "Latin music video with cultural themes and professional production quality.",
    category: "music"
  },

  {
    id: "51",
    title: "Zaena",
    vimeoId: "99148862",
    description: "Artist showcase music video with creative direction and quality production.",
    category: "music"
  },
  {
    id: "52",
    title: "Jamie Younkin-Sunday Starlight",
    vimeoId: "277905045",
    description: "Peaceful music video with Sunday themes and artistic cinematography.",
    category: "music"
  },
  {
    id: "53",
    title: "Emmanuel-It's Not Me",
    vimeoId: "276977703",
    description: "Introspective music video with self-reflection themes and professional production.",
    category: "music"
  },
  {
    id: "54",
    title: "Jamie Younkin-Woman in Gold",
    vimeoId: "277375824",
    description: "Elegant music video celebrating femininity with artistic visual storytelling.",
    category: "music"
  },
  {
    id: "55",
    title: "ManTrap-I don't want to stop",
    vimeoId: "277899983",
    description: "High-energy music video with persistence themes and creative cinematography.",
    category: "music"
  },
  {
    id: "56",
    title: "ManTrap-Sleepless Nights",
    vimeoId: "277906918",
    description: "Nocturnal-themed music video with moody atmosphere and professional production.",
    category: "music"
  },
  {
    id: "57",
    title: "Oshun/ Ju Money",
    vimeoId: "213939736",
    description: "Collaborative music video with spiritual themes and creative direction.",
    category: "music"
  },
  {
    id: "58",
    title: "Beau- I'm So Up",
    vimeoId: "275069500",
    description: "Success-themed music video with uplifting message and quality cinematography.",
    category: "music"
  },
  {
    id: "59",
    title: "Darrell Kelly/ The Storm",
    vimeoId: "275067157",
    description: "Powerful music video with weather metaphors and professional production.",
    category: "music"
  },
  {
    id: "60",
    title: "Citty ft Rick Ross- Nightmare Remix",
    vimeoId: "267113518",
    description: "High-profile collaboration featuring Rick Ross with professional video production.",
    category: "music"
  },
  {
    id: "61",
    title: "BBK/ Biz",
    vimeoId: "94852069",
    description: "Business-themed music video with professional cinematography and creative direction.",
    category: "music"
  },
  {
    id: "62",
    title: "Twenty Five Artist",
    vimeoId: "268820264",
    description: "Milestone celebration music video with artistic vision and quality production.",
    category: "music"
  },
  {
    id: "63",
    title: "Dobel",
    vimeoId: "579870907?h=d8d8b0c0ba",
    description: "Artist showcase music video with creative storytelling and professional cinematography.",
    category: "music"
  },
  {
    id: "64",
    title: "Shakhi-TE QUIERO-Uzbekistan Artist",
    vimeoId: "265839882",
    description: "International music video featuring Uzbekistan artist with cultural themes.",
    category: "music"
  },
  {
    id: "65",
    title: "Ceasar Augusto- Y TU TE VAS",
    vimeoId: "218561883",
    description: "Latin music video with departure themes and emotional storytelling.",
    category: "music"
  },
  {
    id: "66",
    title: "Regulus Films/Black Jack Cabana",
    vimeoId: "228999929",
    description: "Production company showcase featuring Black Jack Cabana collaboration.",
    category: "music"
  },
  {
    id: "67",
    title: "Babylon",
    vimeoId: "249090995",
    description: "Epic music video with ancient themes and professional production quality.",
    category: "music"
  },
  {
    id: "68",
    title: "German Artist- Mandy",
    vimeoId: "218811098",
    description: "International collaboration featuring German artist with creative cinematography.",
    category: "music"
  },
  {
    id: "69",
    title: "Anya Alexandra/Black and White",
    vimeoId: "246196091",
    description: "Artistic music video with monochrome themes and creative visual storytelling.",
    category: "music"
  },
  {
    id: "70",
    title: "Doble /Amor Verdadero",
    vimeoId: "236614624",
    description: "Latin love song with authentic emotion and professional production.",
    category: "music"
  },
  {
    id: "71",
    title: "Robert Wayne / All In",
    vimeoId: "99147777",
    description: "Commitment-themed music video with professional cinematography and creative direction.",
    category: "music"
  },

  {
    id: "73",
    title: "Sleeze/ What You Like",
    vimeoId: "206344168",
    description: "Preference-themed music video with dynamic cinematography and creative direction.",
    category: "music"
  },
  {
    id: "74",
    title: "Shayne /High Life",
    vimeoId: "235258614",
    description: "Luxury lifestyle music video with upscale themes and professional production.",
    category: "music"
  },
  {
    id: "75",
    title: "Doble/ Pensamiento",
    vimeoId: "220217177",
    description: "Thoughtful music video with introspective themes and artistic cinematography.",
    category: "music"
  },
  {
    id: "76",
    title: "Fullness/ Wonder Working God",
    vimeoId: "234085100",
    description: "Spiritual music video with religious themes and inspirational messaging.",
    category: "music"
  },
  {
    id: "77",
    title: "Mark Stel-I Like",
    vimeoId: "125048860",
    description: "Feel-good music video with positive energy and creative cinematography.",
    category: "music"
  },
  {
    id: "78",
    title: "Dave Wayne/ Guy Like Me",
    vimeoId: "99137383",
    description: "Personal identity music video with authentic storytelling and quality production.",
    category: "music"
  },
  {
    id: "79",
    title: "Mercidieu/ Easy 2 Say",
    vimeoId: "224539546",
    description: "Communication-themed music video with emotional depth and professional cinematography.",
    category: "music"
  },
  {
    id: "80",
    title: "Reality Tv Star-Luna/ Run This Town",
    vimeoId: "277527431",
    description: "Power anthem music video featuring reality TV star with dynamic production.",
    category: "music"
  },
  {
    id: "81",
    title: "Afida Turner/ Born An Angel",
    vimeoId: "95622526",
    description: "Celestial-themed music video with artistic vision and professional quality.",
    category: "music"
  },
  {
    id: "82",
    title: "Waed /Bel Arabi",
    vimeoId: "111940482",
    description: "Arabic music video with cultural authenticity and creative cinematography.",
    category: "music"
  },
  {
    id: "83",
    title: "Director:Regulus Films",
    vimeoId: "94791447",
    description: "Production company showcase demonstrating directorial capabilities and vision.",
    category: "music"
  },
  {
    id: "84",
    title: "T Hunt Fet Sammie",
    vimeoId: "159897670",
    description: "Collaborative music video featuring multiple artists with professional production.",
    category: "music"
  },
  {
    id: "85",
    title: "Kal/What I need Is Love",
    vimeoId: "104281237",
    description: "Love-seeking music video with romantic themes and quality cinematography.",
    category: "music"
  },
  {
    id: "86",
    title: "Hannah- Lights Out",
    vimeoId: "116769922",
    description: "Dramatic music video with lighting themes and artistic visual storytelling.",
    category: "music"
  },
  {
    id: "87",
    title: "Benito/ Bonafied",
    vimeoId: "224540355",
    description: "Authenticity-themed music video with genuine storytelling and professional production.",
    category: "music"
  },
  {
    id: "88",
    title: "Laady J/ Bussit",
    vimeoId: "216103631",
    description: "High-energy music video with dance themes and dynamic cinematography.",
    category: "music"
  }
];

export const corporateVideos: VideoData[] = [
  {
    id: "86",
    title: "Hannah- Lights Out",
    vimeoId: "116769922",
    description: "Dramatic music video with lighting themes and artistic visual storytelling.",
    category: "corporate"
  },
  {
    id: "87",
    title: "Benito/ Bonafied",
    vimeoId: "224540355",
    description: "Authenticity-themed music video with genuine storytelling and professional production.",
    category: "corporate"
  },
  {
    id: "100",
    title: "Russian Artist",
    vimeoId: "221837626",
    description: "Professional corporate video showcasing international talent and production capabilities.",
    category: "corporate"
  }
];

// Featured videos for homepage (first 3 videos)
export const featuredVideos = musicVideos.slice(0, 3);