export type Store = {
  name: string;
  address: string;
  phone: string;
  hours: string;
  type: "supermarket" | "convenience" | "petrol" | "online";
};

export type LocationData = {
  [region: string]: {
    [country: string]: {
      [city: string]: Store[];
    };
  };
};

export const storeData: LocationData = {
  Europe: {
    "United Kingdom": {
      London: [
        {
          name: "Tesco Metro — Oxford Street",
          address: "214 Oxford St, London W1C 1AP",
          phone: "+44 20 7009 3500",
          hours: "Mon–Sat 7am–11pm, Sun 10am–8pm",
          type: "supermarket",
        },
        {
          name: "Sainsbury's Local — Soho",
          address: "33 Carnaby St, London W1F 7DS",
          phone: "+44 20 7734 1222",
          hours: "Daily 7am–11pm",
          type: "supermarket",
        },
        {
          name: "BP Connect — Marble Arch",
          address: "1 Park Lane, London W1K 1PG",
          phone: "+44 20 7629 5511",
          hours: "24 Hours",
          type: "petrol",
        },
        {
          name: "Nisa Local — Shoreditch",
          address: "78 Brick Lane, London E1 6RL",
          phone: "+44 20 7247 8990",
          hours: "Daily 6am–midnight",
          type: "convenience",
        },
        {
          name: "Drinko Online Store",
          address: "ships nationwide",
          phone: "0800 DRINKO1",
          hours: "Order anytime",
          type: "online",
        },
      ],
      Manchester: [
        {
          name: "Asda — Hulme",
          address: "150 Princess Rd, Hulme, Manchester M15 5AS",
          phone: "+44 161 226 7700",
          hours: "Mon–Sat 6am–midnight, Sun 10am–4pm",
          type: "supermarket",
        },
        {
          name: "Co-op — Northern Quarter",
          address: "22 Church St, Manchester M4 1PE",
          phone: "+44 161 832 0561",
          hours: "Daily 7am–11pm",
          type: "convenience",
        },
        {
          name: "Shell — Piccadilly",
          address: "4 London Rd, Piccadilly, Manchester M1 2PF",
          phone: "+44 161 237 3411",
          hours: "24 Hours",
          type: "petrol",
        },
        {
          name: "Drinko Online Store",
          address: "ships nationwide",
          phone: "0800 DRINKO1",
          hours: "Order anytime",
          type: "online",
        },
      ],
      Birmingham: [
        {
          name: "Morrisons — City Centre",
          address: "Station St, Birmingham B5 4DY",
          phone: "+44 121 643 7900",
          hours: "Mon–Sat 7am–midnight, Sun 11am–5pm",
          type: "supermarket",
        },
        {
          name: "One Stop — Digbeth",
          address: "98 High St, Digbeth, Birmingham B12 0JL",
          phone: "+44 121 773 0100",
          hours: "Daily 6am–11pm",
          type: "convenience",
        },
        {
          name: "Drinko Online Store",
          address: "ships nationwide",
          phone: "0800 DRINKO1",
          hours: "Order anytime",
          type: "online",
        },
      ],
    },
    Germany: {
      Berlin: [
        {
          name: "REWE — Mitte",
          address: "Alexanderplatz 5, 10178 Berlin",
          phone: "+49 30 2474 9810",
          hours: "Mon–Sat 7am–midnight",
          type: "supermarket",
        },
        {
          name: "Edeka — Prenzlauer Berg",
          address: "Kastanienallee 12, 10435 Berlin",
          phone: "+49 30 4403 2900",
          hours: "Mon–Sat 7am–10pm, Sun 10am–8pm",
          type: "supermarket",
        },
        {
          name: "Aral Tankstelle — Mitte",
          address: "Friedrichstr. 100, 10117 Berlin",
          phone: "+49 30 2094 5500",
          hours: "24 Hours",
          type: "petrol",
        },
        {
          name: "Drinko Online Store",
          address: "ships Europe-wide",
          phone: "+49 800 374656",
          hours: "Order anytime",
          type: "online",
        },
      ],
      Munich: [
        {
          name: "Kaufland — Schwabing",
          address: "Leopoldstr. 80, 80802 München",
          phone: "+49 89 3800 4400",
          hours: "Mon–Sat 7am–11pm",
          type: "supermarket",
        },
        {
          name: "Netto — Maxvorstadt",
          address: "Gabelsbergerstr. 51, 80333 München",
          phone: "+49 89 5234 8800",
          hours: "Mon–Sat 7am–10pm",
          type: "convenience",
        },
        {
          name: "Drinko Online Store",
          address: "ships Europe-wide",
          phone: "+49 800 374656",
          hours: "Order anytime",
          type: "online",
        },
      ],
    },
    France: {
      Paris: [
        {
          name: "Monoprix — Champs-Élysées",
          address: "52 Av. des Champs-Élysées, 75008 Paris",
          phone: "+33 1 5393 7800",
          hours: "Mon–Sat 9am–midnight, Sun 9am–11pm",
          type: "supermarket",
        },
        {
          name: "Franprix — Le Marais",
          address: "38 Rue de Bretagne, 75003 Paris",
          phone: "+33 1 4272 0210",
          hours: "Daily 8am–10pm",
          type: "convenience",
        },
        {
          name: "Total Energie — Nation",
          address: "Pl. de la Nation, 75012 Paris",
          phone: "+33 1 4307 9900",
          hours: "24 Hours",
          type: "petrol",
        },
        {
          name: "Drinko Online Store",
          address: "ships Europe-wide",
          phone: "+33 800 374656",
          hours: "Order anytime",
          type: "online",
        },
      ],
      Lyon: [
        {
          name: "Carrefour — Part-Dieu",
          address: "17 Rue du Dr Bouchut, 69003 Lyon",
          phone: "+33 4 7262 7700",
          hours: "Mon–Sat 9am–9pm",
          type: "supermarket",
        },
        {
          name: "Drinko Online Store",
          address: "ships Europe-wide",
          phone: "+33 800 374656",
          hours: "Order anytime",
          type: "online",
        },
      ],
    },
  },
  "North America": {
    "United States": {
      "New York": [
        {
          name: "Whole Foods Market — Columbus Circle",
          address: "10 Columbus Circle, New York, NY 10019",
          phone: "+1 212 823 9600",
          hours: "Daily 7am–11pm",
          type: "supermarket",
        },
        {
          name: "Duane Reade — Times Square",
          address: "1627 Broadway, New York, NY 10019",
          phone: "+1 212 977 2410",
          hours: "Daily 7am–midnight",
          type: "convenience",
        },
        {
          name: "BP Station — Midtown",
          address: "575 8th Ave, New York, NY 10018",
          phone: "+1 212 239 0500",
          hours: "24 Hours",
          type: "petrol",
        },
        {
          name: "Target — East Harlem",
          address: "517 E 117th St, New York, NY 10035",
          phone: "+1 212 835 0860",
          hours: "Mon–Sat 8am–11pm, Sun 8am–10pm",
          type: "supermarket",
        },
        {
          name: "Drinko Online Store",
          address: "ships USA-wide",
          phone: "1-800-DRINKO1",
          hours: "Order anytime",
          type: "online",
        },
      ],
      "Los Angeles": [
        {
          name: "Ralph's — Hollywood",
          address: "5600 Hollywood Blvd, Los Angeles, CA 90028",
          phone: "+1 323 856 0717",
          hours: "Daily 6am–midnight",
          type: "supermarket",
        },
        {
          name: "7-Eleven — Santa Monica",
          address: "1633 Lincoln Blvd, Santa Monica, CA 90404",
          phone: "+1 310 393 7511",
          hours: "24 Hours",
          type: "convenience",
        },
        {
          name: "Chevron — Beverly Hills",
          address: "9500 Wilshire Blvd, Beverly Hills, CA 90212",
          phone: "+1 310 274 9501",
          hours: "24 Hours",
          type: "petrol",
        },
        {
          name: "Drinko Online Store",
          address: "ships USA-wide",
          phone: "1-800-DRINKO1",
          hours: "Order anytime",
          type: "online",
        },
      ],
      Chicago: [
        {
          name: "Jewel-Osco — Lincoln Park",
          address: "1224 S Wabash Ave, Chicago, IL 60605",
          phone: "+1 312 588 9070",
          hours: "Daily 6am–midnight",
          type: "supermarket",
        },
        {
          name: "Walgreens — The Loop",
          address: "151 N State St, Chicago, IL 60601",
          phone: "+1 312 269 2021",
          hours: "Daily 7am–11pm",
          type: "convenience",
        },
        {
          name: "Drinko Online Store",
          address: "ships USA-wide",
          phone: "1-800-DRINKO1",
          hours: "Order anytime",
          type: "online",
        },
      ],
    },
    Canada: {
      Toronto: [
        {
          name: "Loblaws — Maple Leaf Gardens",
          address: "60 Carlton St, Toronto, ON M5B 1J2",
          phone: "+1 416 204 0747",
          hours: "Daily 7am–11pm",
          type: "supermarket",
        },
        {
          name: "Mac's Convenience — Downtown",
          address: "372 Yonge St, Toronto, ON M5B 1S6",
          phone: "+1 416 597 8910",
          hours: "24 Hours",
          type: "convenience",
        },
        {
          name: "Drinko Online Store",
          address: "ships Canada-wide",
          phone: "1-800-DRINKO1",
          hours: "Order anytime",
          type: "online",
        },
      ],
      Vancouver: [
        {
          name: "Save-On-Foods — Robson",
          address: "1688 Robson St, Vancouver, BC V6G 1C7",
          phone: "+1 604 605 2612",
          hours: "Daily 7am–11pm",
          type: "supermarket",
        },
        {
          name: "Drinko Online Store",
          address: "ships Canada-wide",
          phone: "1-800-DRINKO1",
          hours: "Order anytime",
          type: "online",
        },
      ],
    },
  },
  Asia: {
    Japan: {
      Tokyo: [
        {
          name: "FamilyMart — Shibuya",
          address: "2-21-1 Shibuya, Shibuya City, Tokyo 150-0002",
          phone: "+81 3 3499 2100",
          hours: "24 Hours",
          type: "convenience",
        },
        {
          name: "Lawson — Shinjuku",
          address: "3-14-20 Shinjuku, Shinjuku City, Tokyo 160-0022",
          phone: "+81 3 3354 0900",
          hours: "24 Hours",
          type: "convenience",
        },
        {
          name: "Drinko Online Store",
          address: "ships Japan-wide",
          phone: "+81 120 374656",
          hours: "Order anytime",
          type: "online",
        },
      ],
      Osaka: [
        {
          name: "FamilyMart — Dotonbori",
          address: "1-7-21 Dotonbori, Chuo Ward, Osaka 542-0071",
          phone: "+81 6 6211 3300",
          hours: "24 Hours",
          type: "convenience",
        },
        {
          name: "Drinko Online Store",
          address: "ships Japan-wide",
          phone: "+81 120 374656",
          hours: "Order anytime",
          type: "online",
        },
      ],
    },
    UAE: {
      Dubai: [
        {
          name: "Carrefour — Dubai Mall",
          address: "Financial Centre Rd, Downtown Dubai",
          phone: "+971 4 448 5200",
          hours: "Sun–Wed 10am–midnight, Thu–Sat 10am–1am",
          type: "supermarket",
        },
        {
          name: "Spinneys — JBR",
          address: "Jumeirah Beach Residence, Dubai Marina",
          phone: "+971 4 437 7100",
          hours: "Daily 7am–midnight",
          type: "supermarket",
        },
        {
          name: "ADNOC — Sheikh Zayed Rd",
          address: "Sheikh Zayed Rd, Al Quoz, Dubai",
          phone: "+971 4 321 4400",
          hours: "24 Hours",
          type: "petrol",
        },
        {
          name: "Drinko Online Store",
          address: "ships UAE-wide",
          phone: "+971 800 374656",
          hours: "Order anytime",
          type: "online",
        },
      ],
      "Abu Dhabi": [
        {
          name: "Lulu Hypermarket — Khalidiyah",
          address: "Khalidiyah Mall, Abu Dhabi",
          phone: "+971 2 635 9800",
          hours: "Daily 9am–midnight",
          type: "supermarket",
        },
        {
          name: "Drinko Online Store",
          address: "ships UAE-wide",
          phone: "+971 800 374656",
          hours: "Order anytime",
          type: "online",
        },
      ],
    },
  },
  "Middle East": {
    "Saudi Arabia": {
      Riyadh: [
        {
          name: "Panda Hypermarket — Olaya",
          address: "Olaya St, Al Olaya, Riyadh 12211",
          phone: "+966 11 462 2000",
          hours: "Sat–Thu 8am–midnight, Fri 4pm–midnight",
          type: "supermarket",
        },
        {
          name: "Tamimi Markets — Al Nakheel",
          address: "Prince Mohammed bin Salman Rd, Riyadh",
          phone: "+966 11 476 8800",
          hours: "Daily 8am–midnight",
          type: "supermarket",
        },
        {
          name: "Saudi Aramco Station — King Fahad",
          address: "King Fahad Rd, Al Mohammadiyah, Riyadh",
          phone: "+966 11 498 3300",
          hours: "24 Hours",
          type: "petrol",
        },
        {
          name: "Drinko Online Store",
          address: "ships KSA-wide",
          phone: "+966 800 374656",
          hours: "Order anytime",
          type: "online",
        },
      ],
      Jeddah: [
        {
          name: "Carrefour — Red Sea Mall",
          address: "Al Madinah Al Munawwarah Rd, Jeddah",
          phone: "+966 12 283 4400",
          hours: "Daily 9am–midnight",
          type: "supermarket",
        },
        {
          name: "Drinko Online Store",
          address: "ships KSA-wide",
          phone: "+966 800 374656",
          hours: "Order anytime",
          type: "online",
        },
      ],
    },
    Qatar: {
      Doha: [
        {
          name: "Carrefour — Villaggio Mall",
          address: "Al Waab St, Umm Al Seneem, Doha",
          phone: "+974 4413 3200",
          hours: "Daily 10am–midnight",
          type: "supermarket",
        },
        {
          name: "Monoprix — Mall of Qatar",
          address: "Al Rayyan, Doha",
          phone: "+974 4407 8800",
          hours: "Daily 10am–midnight",
          type: "supermarket",
        },
        {
          name: "Woqod Petrol Station — West Bay",
          address: "West Bay, Doha",
          phone: "+974 4013 5650",
          hours: "24 Hours",
          type: "petrol",
        },
        {
          name: "Drinko Online Store",
          address: "ships Qatar-wide",
          phone: "+974 800 374656",
          hours: "Order anytime",
          type: "online",
        },
      ],
    },
  },
};
