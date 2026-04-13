import type { LanguageTreeData } from "../model/languages-tree.models.ts";

export const LANGUAGES_TREE_DATA: LanguageTreeData = [
  {
    "kind": "language",
    "code": "af",
    "name": "Afrikaans",
    "layouts": [
      {
        "id": "us",
        "klid": "00000409",
        "href": "/00000409",
        "name": "US",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ]
  },
  {
    "kind": "language",
    "code": "sq",
    "name": "Albanian",
    "layouts": [
      {
        "id": "albanian",
        "klid": "0000041c",
        "href": "/0000041c",
        "name": "Albanian",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "group",
    "code": "gsw",
    "name": "Alsatian",
    "layouts": [
      {
        "id": "swiss-german",
        "klid": "00000807",
        "href": "/00000807",
        "name": "Swiss German",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ],
    "children": [
      {
        "kind": "language",
        "code": "gsw-FR",
        "name": "Alsatian (France)",
        "layouts": [
          {
            "id": "french-legacy-azerty",
            "klid": "0000040c",
            "href": "/0000040c",
            "name": "French (Legacy, AZERTY)",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      }
    ]
  },
  {
    "kind": "group",
    "code": "ar",
    "name": "Arabic",
    "layouts": [
      {
        "id": "arabic-101",
        "klid": "00000401",
        "href": "/00000401",
        "name": "Arabic (101)",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ],
    "children": [
      {
        "kind": "language",
        "code": "ar-DZ",
        "name": "Arabic (Algeria)",
        "layouts": [
          {
            "id": "arabic-102-azerty",
            "klid": "00020401",
            "href": "/00020401",
            "name": "Arabic (102) AZERTY",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      },
      {
        "kind": "language",
        "code": "ar-MA",
        "name": "Arabic (Morocco)",
        "layouts": [
          {
            "id": "arabic-102-azerty",
            "klid": "00020401",
            "href": "/00020401",
            "name": "Arabic (102) AZERTY",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      },
      {
        "kind": "language",
        "code": "ar-SA",
        "name": "Arabic (Saudi Arabia)",
        "layouts": [
          {
            "id": "arabic-101",
            "klid": "00000401",
            "href": "/00000401",
            "name": "Arabic (101)",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          },
          {
            "id": "arabic-102",
            "klid": "00010401",
            "href": "/00010401",
            "name": "Arabic (102)",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          },
          {
            "id": "arabic-102-azerty",
            "klid": "00020401",
            "href": "/00020401",
            "name": "Arabic (102) AZERTY",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          }
        ]
      },
      {
        "kind": "language",
        "code": "ar-TN",
        "name": "Arabic (Tunisia)",
        "layouts": [
          {
            "id": "arabic-102-azerty",
            "klid": "00020401",
            "href": "/00020401",
            "name": "Arabic (102) AZERTY",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "hy",
    "name": "Armenian",
    "layouts": [
      {
        "id": "armenian-eastern-legacy",
        "klid": "0000042b",
        "href": "/0000042b",
        "name": "Armenian Eastern (Legacy)",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "armenian-phonetic",
        "klid": "0002042b",
        "href": "/0002042b",
        "name": "Armenian Phonetic",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "armenian-typewriter",
        "klid": "0003042b",
        "href": "/0003042b",
        "name": "Armenian Typewriter",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "armenian-western-legacy",
        "klid": "0001042b",
        "href": "/0001042b",
        "name": "Armenian Western (Legacy)",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "language",
    "code": "as",
    "name": "Assamese",
    "layouts": [
      {
        "id": "assamese-inscript",
        "klid": "0000044d",
        "href": "/0000044d",
        "name": "Assamese - INSCRIPT",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "group",
    "code": "az",
    "name": "Azerbaijani",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "az-Cyrl",
        "name": "Azerbaijani (Cyrillic)",
        "layouts": [
          {
            "id": "azerbaijani-cyrillic",
            "klid": "0000082c",
            "href": "/0000082c",
            "name": "Azerbaijani Cyrillic",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          }
        ]
      },
      {
        "kind": "language",
        "code": "az-Latn",
        "name": "Azerbaijani (Latin)",
        "layouts": [
          {
            "id": "azerbaijani-standard",
            "klid": "0001042c",
            "href": "/0001042c",
            "name": "Azerbaijani (Standard)",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          },
          {
            "id": "azerbaijani-latin",
            "klid": "0000042c",
            "href": "/0000042c",
            "name": "Azerbaijani Latin",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          }
        ]
      }
    ]
  },
  {
    "kind": "group",
    "code": "bn",
    "name": "Bangla",
    "layouts": [
      {
        "id": "bangla",
        "klid": "00000445",
        "href": "/00000445",
        "name": "Bangla",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ],
    "children": [
      {
        "kind": "language",
        "code": "bn-IN",
        "name": "Bengali (India)",
        "layouts": [
          {
            "id": "bangla",
            "klid": "00000445",
            "href": "/00000445",
            "name": "Bangla",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          },
          {
            "id": "bangla-inscript",
            "klid": "00020445",
            "href": "/00020445",
            "name": "Bangla - INSCRIPT",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          },
          {
            "id": "bangla-inscript-legacy",
            "klid": "00010445",
            "href": "/00010445",
            "name": "Bangla - INSCRIPT (Legacy)",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          }
        ]
      }
    ]
  },
  {
    "kind": "group",
    "code": "ba",
    "name": "Bashkir",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "ba-Cyrl",
        "name": "Bashkir",
        "layouts": [
          {
            "id": "bashkir",
            "klid": "0000046d",
            "href": "/0000046d",
            "name": "Bashkir",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "eu",
    "name": "Basque",
    "layouts": [
      {
        "id": "spanish",
        "klid": "0000040a",
        "href": "/0000040a",
        "name": "Spanish",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ]
  },
  {
    "kind": "language",
    "code": "be",
    "name": "Belarusian",
    "layouts": [
      {
        "id": "belarusian",
        "klid": "00000423",
        "href": "/00000423",
        "name": "Belarusian",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "group",
    "code": "bs",
    "name": "Bosnian (Latin)",
    "layouts": [
      {
        "id": "standard",
        "klid": "0000041a",
        "href": "/0000041a",
        "name": "Standard",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ],
    "children": [
      {
        "kind": "language",
        "code": "bs-Cyrl",
        "name": "Bosnian (Cyrillic)",
        "layouts": [
          {
            "id": "bosnian-cyrillic",
            "klid": "0000201a",
            "href": "/0000201a",
            "name": "Bosnian (Cyrillic)",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          }
        ]
      }
    ]
  },
  {
    "kind": "group",
    "code": "br",
    "name": "Breton",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "br-Latn",
        "name": "Breton",
        "layouts": [
          {
            "id": "french-legacy-azerty",
            "klid": "0000040c",
            "href": "/0000040c",
            "name": "French (Legacy, AZERTY)",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      }
    ]
  },
  {
    "kind": "group",
    "code": "bug",
    "name": "Bugis",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "bug-Bugi",
        "name": "Buginese",
        "layouts": [
          {
            "id": "buginese",
            "klid": "000b0c00",
            "href": "/000b0c00",
            "name": "Buginese",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "bg",
    "name": "Bulgarian",
    "layouts": [
      {
        "id": "bulgarian",
        "klid": "00030402",
        "href": "/00030402",
        "name": "Bulgarian",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "bulgarian-latin",
        "klid": "00010402",
        "href": "/00010402",
        "name": "Bulgarian (Latin)",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "bulgarian-phonetic-traditional",
        "klid": "00040402",
        "href": "/00040402",
        "name": "Bulgarian (Phonetic Traditional)",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "bulgarian-phonetic",
        "klid": "00020402",
        "href": "/00020402",
        "name": "Bulgarian (Phonetic)",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "bulgarian-typewriter",
        "klid": "00000402",
        "href": "/00000402",
        "name": "Bulgarian (Typewriter)",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "language",
    "code": "my",
    "name": "Burmese",
    "layouts": [
      {
        "id": "myanmar-phonetic-order",
        "klid": "00010c00",
        "href": "/00010c00",
        "name": "Myanmar (Phonetic order)",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "myanmar-visual-order",
        "klid": "00130c00",
        "href": "/00130c00",
        "name": "Myanmar (Visual order)",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "language",
    "code": "ca",
    "name": "Catalan",
    "layouts": [
      {
        "id": "spanish",
        "klid": "0000040a",
        "href": "/0000040a",
        "name": "Spanish",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ]
  },
  {
    "kind": "group",
    "code": "tzm",
    "name": "Central Atlas Tamazight (Tifinagh)",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "tzm-Latn",
        "name": "Central Atlas Tamazight (Latin)",
        "layouts": [
          {
            "id": "central-atlas-tamazight",
            "klid": "0000085f",
            "href": "/0000085f",
            "name": "Central Atlas Tamazight",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          }
        ]
      },
      {
        "kind": "language",
        "code": "tzm-Tfng",
        "name": "Central Atlas Tamazight (Tifinagh)",
        "layouts": [
          {
            "id": "tifinagh-basic",
            "klid": "0000105f",
            "href": "/0000105f",
            "name": "Tifinagh (Basic)",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          },
          {
            "id": "tifinagh-extended",
            "klid": "0001105f",
            "href": "/0001105f",
            "name": "Tifinagh (Extended)",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          }
        ]
      },
      {
        "kind": "language",
        "code": "tzm-Arab",
        "name": "Central Atlas Tamazight (Tifinagh)",
        "layouts": [
          {
            "id": "arabic-102-azerty",
            "klid": "00020401",
            "href": "/00020401",
            "name": "Arabic (102) AZERTY",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      }
    ]
  },
  {
    "kind": "group",
    "code": "co",
    "name": "Corsican",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "co-Latn",
        "name": "Corsican",
        "layouts": [
          {
            "id": "french-legacy-azerty",
            "klid": "0000040c",
            "href": "/0000040c",
            "name": "French (Legacy, AZERTY)",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "hr",
    "name": "Croatian",
    "layouts": [
      {
        "id": "standard",
        "klid": "0000041a",
        "href": "/0000041a",
        "name": "Standard",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ]
  },
  {
    "kind": "language",
    "code": "cs",
    "name": "Czech",
    "layouts": [
      {
        "id": "czech",
        "klid": "00000405",
        "href": "/00000405",
        "name": "Czech",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "czech-qwerty",
        "klid": "00010405",
        "href": "/00010405",
        "name": "Czech (QWERTY)",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "czech-programmers",
        "klid": "00020405",
        "href": "/00020405",
        "name": "Czech Programmers",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "language",
    "code": "da",
    "name": "Danish",
    "layouts": [
      {
        "id": "danish",
        "klid": "00000406",
        "href": "/00000406",
        "name": "Danish",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "group",
    "code": "tdd",
    "name": "Dehong Dai",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "tdd-Tale",
        "name": "Dehong Dai",
        "layouts": [
          {
            "id": "tai-le",
            "klid": "00030c00",
            "href": "/00030c00",
            "name": "Tai Le",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "dv",
    "name": "Divehi",
    "layouts": [
      {
        "id": "divehi-phonetic",
        "klid": "00000465",
        "href": "/00000465",
        "name": "Divehi Phonetic",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "divehi-typewriter",
        "klid": "00010465",
        "href": "/00010465",
        "name": "Divehi Typewriter",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "group",
    "code": "nl",
    "name": "Dutch",
    "layouts": [
      {
        "id": "united-states-international",
        "klid": "00020409",
        "href": "/00020409",
        "name": "United States-International",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ],
    "children": [
      {
        "kind": "language",
        "code": "nl-BE",
        "name": "Dutch (Belgium)",
        "layouts": [
          {
            "id": "belgian-period",
            "klid": "00000813",
            "href": "/00000813",
            "name": "Belgian (Period)",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          }
        ]
      },
      {
        "kind": "language",
        "code": "nl-NL",
        "name": "Dutch (Netherlands)",
        "layouts": [
          {
            "id": "dutch",
            "klid": "00000413",
            "href": "/00000413",
            "name": "Dutch",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          },
          {
            "id": "united-states-international",
            "klid": "00020409",
            "href": "/00020409",
            "name": "United States-International",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "dz",
    "name": "Dzongkha",
    "layouts": [
      {
        "id": "dzongkha",
        "klid": "00000c51",
        "href": "/00000c51",
        "name": "Dzongkha",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "group",
    "code": "en",
    "name": "English",
    "layouts": [
      {
        "id": "us",
        "klid": "00000409",
        "href": "/00000409",
        "name": "US",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ],
    "children": [
      {
        "kind": "language",
        "code": "en-CA",
        "name": "English (Canada)",
        "layouts": [
          {
            "id": "canadian-french",
            "klid": "00001009",
            "href": "/00001009",
            "name": "Canadian French",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          },
          {
            "id": "canadian-multilingual-standard",
            "klid": "00011009",
            "href": "/00011009",
            "name": "Canadian Multilingual Standard",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          },
          {
            "id": "us",
            "klid": "00000409",
            "href": "/00000409",
            "name": "US",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      },
      {
        "kind": "language",
        "code": "en-IN",
        "name": "English (India)",
        "layouts": [
          {
            "id": "english-india",
            "klid": "00004009",
            "href": "/00004009",
            "name": "English (India)",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          }
        ]
      },
      {
        "kind": "language",
        "code": "en-IE",
        "name": "English (Ireland)",
        "layouts": [
          {
            "id": "irish",
            "klid": "00001809",
            "href": "/00001809",
            "name": "Irish",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          },
          {
            "id": "scottish-gaelic",
            "klid": "00011809",
            "href": "/00011809",
            "name": "Scottish Gaelic",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          }
        ]
      },
      {
        "kind": "language",
        "code": "en-NZ",
        "name": "English (New Zealand)",
        "layouts": [
          {
            "id": "nz-aotearoa",
            "klid": "00001409",
            "href": "/00001409",
            "name": "NZ Aotearoa",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          }
        ]
      },
      {
        "kind": "language",
        "code": "en-GB",
        "name": "English (United Kingdom)",
        "layouts": [
          {
            "id": "united-kingdom",
            "klid": "00000809",
            "href": "/00000809",
            "name": "United Kingdom",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          }
        ]
      },
      {
        "kind": "language",
        "code": "en-US",
        "name": "English (United States)",
        "layouts": [
          {
            "id": "colemak",
            "klid": "00060409",
            "href": "/00060409",
            "name": "Colemak",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          },
          {
            "id": "united-states-dvorak",
            "klid": "00010409",
            "href": "/00010409",
            "name": "United States-Dvorak",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          },
          {
            "id": "united-states-dvorak-for-left-hand",
            "klid": "00030409",
            "href": "/00030409",
            "name": "United States-Dvorak for left hand",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          },
          {
            "id": "united-states-dvorak-for-right-hand",
            "klid": "00040409",
            "href": "/00040409",
            "name": "United States-Dvorak for right hand",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          },
          {
            "id": "united-states-international",
            "klid": "00020409",
            "href": "/00020409",
            "name": "United States-International",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          },
          {
            "id": "us",
            "klid": "00000409",
            "href": "/00000409",
            "name": "US",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          },
          {
            "id": "us-english-table-for-ibm-arabic-238-l",
            "klid": "00050409",
            "href": "/00050409",
            "name": "US English Table for IBM Arabic 238_L",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "et",
    "name": "Estonian",
    "layouts": [
      {
        "id": "estonian",
        "klid": "00000425",
        "href": "/00000425",
        "name": "Estonian",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "group",
    "code": "ett",
    "name": "Etruscan",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "ett-Ital",
        "name": "Etruscan",
        "layouts": [
          {
            "id": "old-italic",
            "klid": "000f0c00",
            "href": "/000f0c00",
            "name": "Old Italic",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "fo",
    "name": "Faroese",
    "layouts": [
      {
        "id": "faeroese",
        "klid": "00000438",
        "href": "/00000438",
        "name": "Faeroese",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "danish",
        "klid": "00000406",
        "href": "/00000406",
        "name": "Danish",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ]
  },
  {
    "kind": "language",
    "code": "fil",
    "name": "Filipino",
    "layouts": [
      {
        "id": "us",
        "klid": "00000409",
        "href": "/00000409",
        "name": "US",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ]
  },
  {
    "kind": "language",
    "code": "fi",
    "name": "Finnish",
    "layouts": [
      {
        "id": "finnish",
        "klid": "0000040b",
        "href": "/0000040b",
        "name": "Finnish",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "group",
    "code": "fr",
    "name": "French",
    "layouts": [
      {
        "id": "french-legacy-azerty",
        "klid": "0000040c",
        "href": "/0000040c",
        "name": "French (Legacy, AZERTY)",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ],
    "children": [
      {
        "kind": "language",
        "code": "fr-BE",
        "name": "French (Belgium)",
        "layouts": [
          {
            "id": "belgian-comma",
            "klid": "0001080c",
            "href": "/0001080c",
            "name": "Belgian (Comma)",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          },
          {
            "id": "belgian-french",
            "klid": "0000080c",
            "href": "/0000080c",
            "name": "Belgian French",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          }
        ]
      },
      {
        "kind": "language",
        "code": "fr-CA",
        "name": "French (Canada)",
        "layouts": [
          {
            "id": "canadian-french-legacy",
            "klid": "00000c0c",
            "href": "/00000c0c",
            "name": "Canadian French (Legacy)",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          },
          {
            "id": "canadian-french",
            "klid": "00001009",
            "href": "/00001009",
            "name": "Canadian French",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      },
      {
        "kind": "language",
        "code": "fr-FR",
        "name": "French (France)",
        "layouts": [
          {
            "id": "french-legacy-azerty",
            "klid": "0000040c",
            "href": "/0000040c",
            "name": "French (Legacy, AZERTY)",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          },
          {
            "id": "french-standard-azerty",
            "klid": "0001040c",
            "href": "/0001040c",
            "name": "French (Standard, AZERTY)",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          },
          {
            "id": "french-standard-bpo",
            "klid": "0002040c",
            "href": "/0002040c",
            "name": "French (Standard, BÉPO)",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          }
        ]
      },
      {
        "kind": "language",
        "code": "fr-LU",
        "name": "French (Luxembourg)",
        "layouts": [
          {
            "id": "swiss-french",
            "klid": "0000100c",
            "href": "/0000100c",
            "name": "Swiss French",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      },
      {
        "kind": "language",
        "code": "fr-CH",
        "name": "French (Switzerland)",
        "layouts": [
          {
            "id": "swiss-french",
            "klid": "0000100c",
            "href": "/0000100c",
            "name": "Swiss French",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "fy",
    "name": "Frisian",
    "layouts": [
      {
        "id": "united-states-international",
        "klid": "00020409",
        "href": "/00020409",
        "name": "United States-International",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ]
  },
  {
    "kind": "group",
    "code": "ff",
    "name": "Fulah",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "ff-Adlm",
        "name": "Fulah (ADLaM)",
        "layouts": [
          {
            "id": "adlam",
            "klid": "00140c00",
            "href": "/00140c00",
            "name": "ADLaM",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          }
        ]
      },
      {
        "kind": "language",
        "code": "ff-Latn",
        "name": "Fulah (Latin)",
        "layouts": [
          {
            "id": "wolof",
            "klid": "00000488",
            "href": "/00000488",
            "name": "Wolof",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "gl",
    "name": "Galician",
    "layouts": [
      {
        "id": "spanish",
        "klid": "0000040a",
        "href": "/0000040a",
        "name": "Spanish",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ]
  },
  {
    "kind": "language",
    "code": "ka",
    "name": "Georgian",
    "layouts": [
      {
        "id": "georgian-ergonomic",
        "klid": "00020437",
        "href": "/00020437",
        "name": "Georgian (Ergonomic)",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "georgian-legacy",
        "klid": "00000437",
        "href": "/00000437",
        "name": "Georgian (Legacy)",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "georgian-mes",
        "klid": "00030437",
        "href": "/00030437",
        "name": "Georgian (MES)",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "georgian-old-alphabets",
        "klid": "00040437",
        "href": "/00040437",
        "name": "Georgian (Old Alphabets)",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "georgian-qwerty",
        "klid": "00010437",
        "href": "/00010437",
        "name": "Georgian (QWERTY)",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "group",
    "code": "de",
    "name": "German",
    "layouts": [
      {
        "id": "german",
        "klid": "00000407",
        "href": "/00000407",
        "name": "German",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ],
    "children": [
      {
        "kind": "language",
        "code": "de-DE",
        "name": "German (Germany)",
        "layouts": [
          {
            "id": "german",
            "klid": "00000407",
            "href": "/00000407",
            "name": "German",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          },
          {
            "id": "german-ibm",
            "klid": "00010407",
            "href": "/00010407",
            "name": "German (IBM)",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          },
          {
            "id": "german-extended-e1",
            "klid": "00020407",
            "href": "/00020407",
            "name": "German Extended (E1)",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          },
          {
            "id": "german-extended-e2",
            "klid": "00030407",
            "href": "/00030407",
            "name": "German Extended (E2)",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          }
        ]
      },
      {
        "kind": "language",
        "code": "de-LI",
        "name": "German (Liechtenstein)",
        "layouts": [
          {
            "id": "swiss-german",
            "klid": "00000807",
            "href": "/00000807",
            "name": "Swiss German",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      },
      {
        "kind": "language",
        "code": "de-CH",
        "name": "German (Switzerland)",
        "layouts": [
          {
            "id": "swiss-german",
            "klid": "00000807",
            "href": "/00000807",
            "name": "Swiss German",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          }
        ]
      }
    ]
  },
  {
    "kind": "group",
    "code": "gem",
    "name": "Germanic languages",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "gem-Runr",
        "name": "Futhark",
        "layouts": [
          {
            "id": "futhark",
            "klid": "00120c00",
            "href": "/00120c00",
            "name": "Futhark",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          }
        ]
      }
    ]
  },
  {
    "kind": "group",
    "code": "got",
    "name": "Gothic",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "got-Goth",
        "name": "Gothic",
        "layouts": [
          {
            "id": "gothic",
            "klid": "000c0c00",
            "href": "/000c0c00",
            "name": "Gothic",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "el",
    "name": "Greek",
    "layouts": [
      {
        "id": "greek",
        "klid": "00000408",
        "href": "/00000408",
        "name": "Greek",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "greek-220",
        "klid": "00010408",
        "href": "/00010408",
        "name": "Greek (220)",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "greek-220-latin",
        "klid": "00030408",
        "href": "/00030408",
        "name": "Greek (220) Latin",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "greek-319",
        "klid": "00020408",
        "href": "/00020408",
        "name": "Greek (319)",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "greek-319-latin",
        "klid": "00040408",
        "href": "/00040408",
        "name": "Greek (319) Latin",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "greek-latin",
        "klid": "00050408",
        "href": "/00050408",
        "name": "Greek Latin",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "greek-polytonic",
        "klid": "00060408",
        "href": "/00060408",
        "name": "Greek Polytonic",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "language",
    "code": "gn",
    "name": "Guarani",
    "layouts": [
      {
        "id": "guarani",
        "klid": "00000474",
        "href": "/00000474",
        "name": "Guarani",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "language",
    "code": "gu",
    "name": "Gujarati",
    "layouts": [
      {
        "id": "gujarati",
        "klid": "00000447",
        "href": "/00000447",
        "name": "Gujarati",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "group",
    "code": "ha",
    "name": "Hausa",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "ha-Latn",
        "name": "Hausa (Latin)",
        "layouts": [
          {
            "id": "hausa",
            "klid": "00000468",
            "href": "/00000468",
            "name": "Hausa",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "haw",
    "name": "Hawaiian",
    "layouts": [
      {
        "id": "hawaiian",
        "klid": "00000475",
        "href": "/00000475",
        "name": "Hawaiian",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ]
  },
  {
    "kind": "group",
    "code": "he",
    "name": "Hebrew",
    "layouts": [
      {
        "id": "hebrew",
        "klid": "0000040d",
        "href": "/0000040d",
        "name": "Hebrew",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "hebrew-standard",
        "klid": "0002040d",
        "href": "/0002040d",
        "name": "Hebrew (Standard)",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      }
    ],
    "children": [
      {
        "kind": "language",
        "code": "he-IL",
        "name": "Hebrew (Israel)",
        "layouts": [
          {
            "id": "hebrew-standard-2018",
            "klid": "0003040d",
            "href": "/0003040d",
            "name": "Hebrew (Standard, 2018)",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "hi",
    "name": "Hindi",
    "layouts": [
      {
        "id": "devanagari-inscript",
        "klid": "00000439",
        "href": "/00000439",
        "name": "Devanagari - INSCRIPT",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "hindi-traditional",
        "klid": "00010439",
        "href": "/00010439",
        "name": "Hindi Traditional",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "language",
    "code": "hu",
    "name": "Hungarian",
    "layouts": [
      {
        "id": "hungarian",
        "klid": "0000040e",
        "href": "/0000040e",
        "name": "Hungarian",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "hungarian-101-key",
        "klid": "0001040e",
        "href": "/0001040e",
        "name": "Hungarian 101-key",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "group",
    "code": "ccp",
    "name": "Chakma",
    "layouts": [],
    "children": [
      {
        "kind": "group",
        "code": "ccp-Cakm",
        "name": "Chakma (Chakma)",
        "layouts": [],
        "children": [
          {
            "kind": "language",
            "code": "ccp-Cakm-BD",
            "name": "Chakma (Chakma, Bangladesh)",
            "layouts": [
              {
                "id": "us",
                "klid": "00000409",
                "href": "/00000409",
                "name": "US",
                "isDefault": true,
                "isDefaultFromOtherLanguage": true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "kind": "group",
    "code": "chr",
    "name": "Cherokee",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "chr-Cher",
        "name": "Cherokee (Cherokee)",
        "layouts": [
          {
            "id": "cherokee-nation",
            "klid": "0000045c",
            "href": "/0000045c",
            "name": "Cherokee Nation",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          },
          {
            "id": "cherokee-phonetic",
            "klid": "0001045c",
            "href": "/0001045c",
            "name": "Cherokee Phonetic",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          }
        ]
      }
    ]
  },
  {
    "kind": "group",
    "code": "zh",
    "name": "Chinese",
    "layouts": [],
    "children": [
      {
        "kind": "group",
        "code": "zh-Hans",
        "name": "Chinese (Simplified)",
        "layouts": [],
        "children": [
          {
            "kind": "language",
            "code": "zh-Hans-CN",
            "name": "Chinese (Simplified, China)",
            "layouts": [
              {
                "id": "chinese-simplified-us",
                "klid": "00000804",
                "href": "/00000804",
                "name": "Chinese (Simplified) - US",
                "isDefault": false,
                "isDefaultFromOtherLanguage": false
              }
            ]
          },
          {
            "kind": "language",
            "code": "zh-Hans-SG",
            "name": "Chinese (Simplified, Singapore)",
            "layouts": [
              {
                "id": "chinese-simplified-singapore-us",
                "klid": "00001004",
                "href": "/00001004",
                "name": "Chinese (Simplified, Singapore) - US",
                "isDefault": false,
                "isDefaultFromOtherLanguage": false
              }
            ]
          }
        ]
      },
      {
        "kind": "group",
        "code": "zh-Hant",
        "name": "Chinese (Traditional)",
        "layouts": [],
        "children": [
          {
            "kind": "language",
            "code": "zh-Hant-HK",
            "name": "Chinese (Traditional, Hong Kong SAR)",
            "layouts": [
              {
                "id": "chinese-traditional-hong-kong-sar-us",
                "klid": "00000c04",
                "href": "/00000c04",
                "name": "Chinese (Traditional, Hong Kong S.A.R.) - US",
                "isDefault": false,
                "isDefaultFromOtherLanguage": false
              }
            ]
          },
          {
            "kind": "language",
            "code": "zh-Hant-MO",
            "name": "Chinese (Traditional, Macao SAR)",
            "layouts": [
              {
                "id": "chinese-traditional-macao-sar-us",
                "klid": "00001404",
                "href": "/00001404",
                "name": "Chinese (Traditional, Macao S.A.R.) - US",
                "isDefault": false,
                "isDefaultFromOtherLanguage": false
              }
            ]
          },
          {
            "kind": "language",
            "code": "zh-Hant-TW",
            "name": "Chinese (Traditional, Taiwan)",
            "layouts": [
              {
                "id": "chinese-traditional-us",
                "klid": "00000404",
                "href": "/00000404",
                "name": "Chinese (Traditional) - US",
                "isDefault": false,
                "isDefaultFromOtherLanguage": false
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "is",
    "name": "Icelandic",
    "layouts": [
      {
        "id": "icelandic",
        "klid": "0000040f",
        "href": "/0000040f",
        "name": "Icelandic",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "group",
    "code": "ig",
    "name": "Igbo",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "ig-Latn",
        "name": "Igbo",
        "layouts": [
          {
            "id": "igbo",
            "klid": "00000470",
            "href": "/00000470",
            "name": "Igbo",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "id",
    "name": "Indonesian",
    "layouts": [
      {
        "id": "us",
        "klid": "00000409",
        "href": "/00000409",
        "name": "US",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ]
  },
  {
    "kind": "group",
    "code": "iu",
    "name": "Inuktitut",
    "layouts": [],
    "children": [
      {
        "kind": "group",
        "code": "iu-Cans",
        "name": "Inuktitut (Canadian Aboriginal Syllabics)",
        "layouts": [
          {
            "id": "inuktitut-naqittaut",
            "klid": "0001045d",
            "href": "/0001045d",
            "name": "Inuktitut - Naqittaut",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          }
        ],
        "children": [
          {
            "kind": "language",
            "code": "iu-Cans-CA",
            "name": "Inuktitut (Syllabics, Canada)",
            "layouts": [
              {
                "id": "inuktitut-nattilik",
                "klid": "0002045d",
                "href": "/0002045d",
                "name": "Inuktitut - Nattilik",
                "isDefault": false,
                "isDefaultFromOtherLanguage": false
              }
            ]
          }
        ]
      },
      {
        "kind": "language",
        "code": "iu-Latn",
        "name": "Inuktitut (Latin)",
        "layouts": [
          {
            "id": "inuktitut-latin",
            "klid": "0000085d",
            "href": "/0000085d",
            "name": "Inuktitut - Latin",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "ga",
    "name": "Irish",
    "layouts": [
      {
        "id": "irish",
        "klid": "00001809",
        "href": "/00001809",
        "name": "Irish",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ]
  },
  {
    "kind": "language",
    "code": "xh",
    "name": "isiXhosa",
    "layouts": [
      {
        "id": "us",
        "klid": "00000409",
        "href": "/00000409",
        "name": "US",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ]
  },
  {
    "kind": "language",
    "code": "zu",
    "name": "isiZulu",
    "layouts": [
      {
        "id": "us",
        "klid": "00000409",
        "href": "/00000409",
        "name": "US",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ]
  },
  {
    "kind": "group",
    "code": "it",
    "name": "Italian",
    "layouts": [
      {
        "id": "italian",
        "klid": "00000410",
        "href": "/00000410",
        "name": "Italian",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ],
    "children": [
      {
        "kind": "language",
        "code": "it-IT",
        "name": "Italian (Italy)",
        "layouts": [
          {
            "id": "italian",
            "klid": "00000410",
            "href": "/00000410",
            "name": "Italian",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          },
          {
            "id": "italian-142",
            "klid": "00010410",
            "href": "/00010410",
            "name": "Italian (142)",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          }
        ]
      },
      {
        "kind": "language",
        "code": "it-CH",
        "name": "Italian (Switzerland)",
        "layouts": [
          {
            "id": "swiss-french",
            "klid": "0000100c",
            "href": "/0000100c",
            "name": "Swiss French",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "ja",
    "name": "Japanese",
    "layouts": [
      {
        "id": "japanese",
        "klid": "00000411",
        "href": "/00000411",
        "name": "Japanese",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "group",
    "code": "jv",
    "name": "Javanese",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "jv-Java",
        "name": "Javanese (Javanese)",
        "layouts": [
          {
            "id": "javanese",
            "klid": "00110c00",
            "href": "/00110c00",
            "name": "Javanese",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          }
        ]
      }
    ]
  },
  {
    "kind": "group",
    "code": "quc",
    "name": "K’iche’",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "quc-Latn",
        "name": "K’iche’",
        "layouts": [
          {
            "id": "latin-american",
            "klid": "0000080a",
            "href": "/0000080a",
            "name": "Latin American",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "kl",
    "name": "Kalaallisut",
    "layouts": [
      {
        "id": "greenlandic",
        "klid": "0000046f",
        "href": "/0000046f",
        "name": "Greenlandic",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "danish",
        "klid": "00000406",
        "href": "/00000406",
        "name": "Danish",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ]
  },
  {
    "kind": "language",
    "code": "kn",
    "name": "Kannada",
    "layouts": [
      {
        "id": "kannada",
        "klid": "0000044b",
        "href": "/0000044b",
        "name": "Kannada",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "group",
    "code": "kr",
    "name": "Kanuri",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "kr-Latn",
        "name": "Kanuri (Latin)",
        "layouts": [
          {
            "id": "us",
            "klid": "00000409",
            "href": "/00000409",
            "name": "US",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      }
    ]
  },
  {
    "kind": "group",
    "code": "ks",
    "name": "Kashmiri",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "ks-Deva",
        "name": "Kashmiri (Devanagari)",
        "layouts": [
          {
            "id": "hindi-traditional",
            "klid": "00010439",
            "href": "/00010439",
            "name": "Hindi Traditional",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "kk",
    "name": "Kazakh",
    "layouts": [
      {
        "id": "kazakh",
        "klid": "0000043f",
        "href": "/0000043f",
        "name": "Kazakh",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "language",
    "code": "km",
    "name": "Khmer",
    "layouts": [
      {
        "id": "khmer",
        "klid": "00000453",
        "href": "/00000453",
        "name": "Khmer",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "khmer-nida",
        "klid": "00010453",
        "href": "/00010453",
        "name": "Khmer (NIDA)",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "language",
    "code": "rw",
    "name": "Kinyarwanda",
    "layouts": [
      {
        "id": "us",
        "klid": "00000409",
        "href": "/00000409",
        "name": "US",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ]
  },
  {
    "kind": "language",
    "code": "sw",
    "name": "Kiswahili",
    "layouts": [
      {
        "id": "us",
        "klid": "00000409",
        "href": "/00000409",
        "name": "US",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ]
  },
  {
    "kind": "language",
    "code": "kok",
    "name": "Konkani",
    "layouts": [
      {
        "id": "devanagari-inscript",
        "klid": "00000439",
        "href": "/00000439",
        "name": "Devanagari - INSCRIPT",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ]
  },
  {
    "kind": "language",
    "code": "ko",
    "name": "Korean",
    "layouts": [
      {
        "id": "korean",
        "klid": "00000412",
        "href": "/00000412",
        "name": "Korean",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "group",
    "code": "ku",
    "name": "Kurdish",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "ku-Arab",
        "name": "Central Kurdish",
        "layouts": [
          {
            "id": "central-kurdish",
            "klid": "00000492",
            "href": "/00000492",
            "name": "Central Kurdish",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          }
        ]
      }
    ]
  },
  {
    "kind": "group",
    "code": "ky",
    "name": "Kyrgyz",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "ky-Cyrl",
        "name": "Kyrgyz",
        "layouts": [
          {
            "id": "kyrgyz-cyrillic",
            "klid": "00000440",
            "href": "/00000440",
            "name": "Kyrgyz Cyrillic",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "lo",
    "name": "Lao",
    "layouts": [
      {
        "id": "lao",
        "klid": "00000454",
        "href": "/00000454",
        "name": "Lao",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "language",
    "code": "la",
    "name": "Latin",
    "layouts": [
      {
        "id": "us",
        "klid": "00000409",
        "href": "/00000409",
        "name": "US",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ]
  },
  {
    "kind": "language",
    "code": "lv",
    "name": "Latvian",
    "layouts": [
      {
        "id": "latvian",
        "klid": "00000426",
        "href": "/00000426",
        "name": "Latvian",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "latvian-qwerty",
        "klid": "00010426",
        "href": "/00010426",
        "name": "Latvian (QWERTY)",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "latvian-standard",
        "klid": "00020426",
        "href": "/00020426",
        "name": "Latvian (Standard)",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "group",
    "code": "lis",
    "name": "Lisu",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "lis-Lisu",
        "name": "Lisu (Lisu)",
        "layouts": [
          {
            "id": "lisu-basic",
            "klid": "00070c00",
            "href": "/00070c00",
            "name": "Lisu (Basic)",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          },
          {
            "id": "lisu-standard",
            "klid": "00080c00",
            "href": "/00080c00",
            "name": "Lisu (Standard)",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "lt",
    "name": "Lithuanian",
    "layouts": [
      {
        "id": "lithuanian",
        "klid": "00010427",
        "href": "/00010427",
        "name": "Lithuanian",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "lithuanian-ibm",
        "klid": "00000427",
        "href": "/00000427",
        "name": "Lithuanian IBM",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "lithuanian-standard",
        "klid": "00020427",
        "href": "/00020427",
        "name": "Lithuanian Standard",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "language",
    "code": "dsb",
    "name": "Lower Sorbian",
    "layouts": [
      {
        "id": "sorbian-standard",
        "klid": "0002042e",
        "href": "/0002042e",
        "name": "Sorbian Standard",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ]
  },
  {
    "kind": "group",
    "code": "khb",
    "name": "Lü",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "khb-Talu",
        "name": "Xishuangbanna Dai",
        "layouts": [
          {
            "id": "new-tai-lue",
            "klid": "00020c00",
            "href": "/00020c00",
            "name": "New Tai Lue",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "lb",
    "name": "Luxembourgish",
    "layouts": [
      {
        "id": "luxembourgish",
        "klid": "0000046e",
        "href": "/0000046e",
        "name": "Luxembourgish",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "language",
    "code": "mk",
    "name": "Macedonian",
    "layouts": [
      {
        "id": "macedonian",
        "klid": "0000042f",
        "href": "/0000042f",
        "name": "Macedonian",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "macedonian-standard",
        "klid": "0001042f",
        "href": "/0001042f",
        "name": "Macedonian - Standard",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "language",
    "code": "ms",
    "name": "Malay",
    "layouts": [
      {
        "id": "us",
        "klid": "00000409",
        "href": "/00000409",
        "name": "US",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ]
  },
  {
    "kind": "language",
    "code": "ml",
    "name": "Malayalam",
    "layouts": [
      {
        "id": "malayalam",
        "klid": "0000044c",
        "href": "/0000044c",
        "name": "Malayalam",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "language",
    "code": "mt",
    "name": "Maltese",
    "layouts": [
      {
        "id": "maltese-47-key",
        "klid": "0000043a",
        "href": "/0000043a",
        "name": "Maltese 47-Key",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "maltese-48-key",
        "klid": "0001043a",
        "href": "/0001043a",
        "name": "Maltese 48-Key",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "group",
    "code": "mni",
    "name": "Manipuri",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "mni-Beng",
        "name": "Manipuri",
        "layouts": [
          {
            "id": "bangla",
            "klid": "00000445",
            "href": "/00000445",
            "name": "Bangla",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "mi",
    "name": "Maori",
    "layouts": [
      {
        "id": "maori",
        "klid": "00000481",
        "href": "/00000481",
        "name": "Maori",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ]
  },
  {
    "kind": "group",
    "code": "arn",
    "name": "Mapuche",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "arn-Latn",
        "name": "Mapuche",
        "layouts": [
          {
            "id": "latin-american",
            "klid": "0000080a",
            "href": "/0000080a",
            "name": "Latin American",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "mr",
    "name": "Marathi",
    "layouts": [
      {
        "id": "marathi",
        "klid": "0000044e",
        "href": "/0000044e",
        "name": "Marathi",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "group",
    "code": "moh",
    "name": "Mohawk",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "moh-Latn",
        "name": "Mohawk",
        "layouts": [
          {
            "id": "us",
            "klid": "00000409",
            "href": "/00000409",
            "name": "US",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      }
    ]
  },
  {
    "kind": "group",
    "code": "mn",
    "name": "Mongolian",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "mn-Cyrl",
        "name": "Mongolian (Cyrillic)",
        "layouts": [
          {
            "id": "mongolian-cyrillic",
            "klid": "00000450",
            "href": "/00000450",
            "name": "Mongolian Cyrillic",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          }
        ]
      },
      {
        "kind": "language",
        "code": "mn-Phag",
        "name": "Mongolian (Phags-pa)",
        "layouts": [
          {
            "id": "phags-pa",
            "klid": "000a0c00",
            "href": "/000a0c00",
            "name": "Phags-pa",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          }
        ]
      },
      {
        "kind": "group",
        "code": "mn-Mong",
        "name": "Mongolian (Traditional Mongolian)",
        "layouts": [
          {
            "id": "mongolian-mongolian-script",
            "klid": "00000850",
            "href": "/00000850",
            "name": "Mongolian (Mongolian Script)",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          },
          {
            "id": "traditional-mongolian-standard",
            "klid": "00010850",
            "href": "/00010850",
            "name": "Traditional Mongolian (Standard)",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          }
        ],
        "children": [
          {
            "kind": "language",
            "code": "mn-Mong-CN",
            "name": "Mongolian (Traditional Mongolian, PRC)",
            "layouts": [
              {
                "id": "traditional-mongolian-mns",
                "klid": "00020850",
                "href": "/00020850",
                "name": "Traditional Mongolian (MNS)",
                "isDefault": false,
                "isDefaultFromOtherLanguage": false
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "nqo",
    "name": "N’ko",
    "layouts": [
      {
        "id": "nko",
        "klid": "00090c00",
        "href": "/00090c00",
        "name": "N’Ko",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "language",
    "code": "ne",
    "name": "Nepali",
    "layouts": [
      {
        "id": "nepali",
        "klid": "00000461",
        "href": "/00000461",
        "name": "Nepali",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ]
  },
  {
    "kind": "group",
    "code": "se",
    "name": "Northern Sami",
    "layouts": [],
    "children": [
      {
        "kind": "group",
        "code": "se-Latn",
        "name": "Northern Sami",
        "layouts": [
          {
            "id": "norwegian-with-sami",
            "klid": "0000043b",
            "href": "/0000043b",
            "name": "Norwegian with Sami",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ],
        "children": [
          {
            "kind": "language",
            "code": "se-Latn-FI",
            "name": "Northern Sami (Finland)",
            "layouts": [
              {
                "id": "finnish-with-sami",
                "klid": "0001083b",
                "href": "/0001083b",
                "name": "Finnish with Sami",
                "isDefault": true,
                "isDefaultFromOtherLanguage": true
              }
            ]
          },
          {
            "kind": "language",
            "code": "se-Latn-NO",
            "name": "Northern Sami (Norway)",
            "layouts": [
              {
                "id": "norwegian-with-sami",
                "klid": "0000043b",
                "href": "/0000043b",
                "name": "Norwegian with Sami",
                "isDefault": true,
                "isDefaultFromOtherLanguage": false
              },
              {
                "id": "sami-extended-norway",
                "klid": "0001043b",
                "href": "/0001043b",
                "name": "Sami Extended Norway",
                "isDefault": false,
                "isDefaultFromOtherLanguage": false
              }
            ]
          },
          {
            "kind": "language",
            "code": "se-Latn-SE",
            "name": "Northern Sami (Sweden)",
            "layouts": [
              {
                "id": "finnish-with-sami",
                "klid": "0001083b",
                "href": "/0001083b",
                "name": "Finnish with Sami",
                "isDefault": false,
                "isDefaultFromOtherLanguage": false
              },
              {
                "id": "sami-extended-finland-sweden",
                "klid": "0002083b",
                "href": "/0002083b",
                "name": "Sami Extended Finland-Sweden",
                "isDefault": false,
                "isDefaultFromOtherLanguage": false
              },
              {
                "id": "swedish-with-sami",
                "klid": "0000083b",
                "href": "/0000083b",
                "name": "Swedish with Sami",
                "isDefault": true,
                "isDefaultFromOtherLanguage": false
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "nb",
    "name": "Norwegian (Bokmål)",
    "layouts": [
      {
        "id": "norwegian",
        "klid": "00000414",
        "href": "/00000414",
        "name": "Norwegian",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "language",
    "code": "nn",
    "name": "Norwegian (Nynorsk)",
    "layouts": [
      {
        "id": "norwegian",
        "klid": "00000414",
        "href": "/00000414",
        "name": "Norwegian",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ]
  },
  {
    "kind": "group",
    "code": "oc",
    "name": "Occitan",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "oc-Latn",
        "name": "Occitan",
        "layouts": [
          {
            "id": "french-legacy-azerty",
            "klid": "0000040c",
            "href": "/0000040c",
            "name": "French (Legacy, AZERTY)",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "or",
    "name": "Odia",
    "layouts": [
      {
        "id": "odia",
        "klid": "00000448",
        "href": "/00000448",
        "name": "Odia",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "group",
    "code": "sga",
    "name": "Old Irish",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "sga-Ogam",
        "name": "Old Irish",
        "layouts": [
          {
            "id": "ogham",
            "klid": "00040c00",
            "href": "/00040c00",
            "name": "Ogham",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "om",
    "name": "Oromo",
    "layouts": [
      {
        "id": "us",
        "klid": "00000409",
        "href": "/00000409",
        "name": "US",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ]
  },
  {
    "kind": "group",
    "code": "osa",
    "name": "Osage",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "osa-Osge",
        "name": "Osage",
        "layouts": [
          {
            "id": "osage",
            "klid": "00150c00",
            "href": "/00150c00",
            "name": "Osage",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "ps",
    "name": "Pashto",
    "layouts": [
      {
        "id": "pashto-afghanistan",
        "klid": "00000463",
        "href": "/00000463",
        "name": "Pashto (Afghanistan)",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "group",
    "code": "fa",
    "name": "Persian",
    "layouts": [
      {
        "id": "persian",
        "klid": "00000429",
        "href": "/00000429",
        "name": "Persian",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "persian-standard",
        "klid": "00050429",
        "href": "/00050429",
        "name": "Persian (Standard)",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      }
    ],
    "children": [
      {
        "kind": "language",
        "code": "fa-AF",
        "name": "Persian (Afghanistan)",
        "layouts": [
          {
            "id": "persian-standard",
            "klid": "00050429",
            "href": "/00050429",
            "name": "Persian (Standard)",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "pl",
    "name": "Polish",
    "layouts": [
      {
        "id": "polish-214",
        "klid": "00010415",
        "href": "/00010415",
        "name": "Polish (214)",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "polish-programmers",
        "klid": "00000415",
        "href": "/00000415",
        "name": "Polish (Programmers)",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "group",
    "code": "pt",
    "name": "Portuguese",
    "layouts": [
      {
        "id": "portuguese-brazil-abnt",
        "klid": "00000416",
        "href": "/00000416",
        "name": "Portuguese (Brazil ABNT)",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ],
    "children": [
      {
        "kind": "language",
        "code": "pt-BR",
        "name": "Portuguese (Brazil)",
        "layouts": [
          {
            "id": "portuguese-brazil-abnt",
            "klid": "00000416",
            "href": "/00000416",
            "name": "Portuguese (Brazil ABNT)",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          },
          {
            "id": "portuguese-brazil-abnt2",
            "klid": "00010416",
            "href": "/00010416",
            "name": "Portuguese (Brazil ABNT2)",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          }
        ]
      },
      {
        "kind": "language",
        "code": "pt-PT",
        "name": "Portuguese (Portugal)",
        "layouts": [
          {
            "id": "portuguese",
            "klid": "00000816",
            "href": "/00000816",
            "name": "Portuguese",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          }
        ]
      }
    ]
  },
  {
    "kind": "group",
    "code": "pa",
    "name": "Punjabi (Gurmukhi)",
    "layouts": [
      {
        "id": "punjabi",
        "klid": "00000446",
        "href": "/00000446",
        "name": "Punjabi",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      }
    ],
    "children": [
      {
        "kind": "language",
        "code": "pa-Arab",
        "name": "Punjabi (Arabic)",
        "layouts": [
          {
            "id": "urdu",
            "klid": "00000420",
            "href": "/00000420",
            "name": "Urdu",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "quz",
    "name": "Quechua",
    "layouts": [
      {
        "id": "latin-american",
        "klid": "0000080a",
        "href": "/0000080a",
        "name": "Latin American",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ]
  },
  {
    "kind": "group",
    "code": "ro",
    "name": "Romanian",
    "layouts": [
      {
        "id": "romanian-standard",
        "klid": "00010418",
        "href": "/00010418",
        "name": "Romanian (Standard)",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ],
    "children": [
      {
        "kind": "language",
        "code": "ro-RO",
        "name": "Romanian (Romania)",
        "layouts": [
          {
            "id": "romanian-legacy",
            "klid": "00000418",
            "href": "/00000418",
            "name": "Romanian (Legacy)",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          },
          {
            "id": "romanian-programmers",
            "klid": "00020418",
            "href": "/00020418",
            "name": "Romanian (Programmers)",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          },
          {
            "id": "romanian-standard",
            "klid": "00010418",
            "href": "/00010418",
            "name": "Romanian (Standard)",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "rm",
    "name": "Romansh",
    "layouts": [
      {
        "id": "swiss-german",
        "klid": "00000807",
        "href": "/00000807",
        "name": "Swiss German",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ]
  },
  {
    "kind": "language",
    "code": "ru",
    "name": "Russian",
    "layouts": [
      {
        "id": "russian",
        "klid": "00000419",
        "href": "/00000419",
        "name": "Russian",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "russian-mnemonic",
        "klid": "00020419",
        "href": "/00020419",
        "name": "Russian - Mnemonic",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "russian-typewriter",
        "klid": "00010419",
        "href": "/00010419",
        "name": "Russian (Typewriter)",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "group",
    "code": "sah",
    "name": "Sakha",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "sah-Cyrl",
        "name": "Sakha",
        "layouts": [
          {
            "id": "sakha",
            "klid": "00000485",
            "href": "/00000485",
            "name": "Sakha",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          }
        ]
      }
    ]
  },
  {
    "kind": "group",
    "code": "smn",
    "name": "Sami (Inari)",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "smn-Latn",
        "name": "Inari Sami",
        "layouts": [
          {
            "id": "finnish-with-sami",
            "klid": "0001083b",
            "href": "/0001083b",
            "name": "Finnish with Sami",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      }
    ]
  },
  {
    "kind": "group",
    "code": "sms",
    "name": "Sami (Skolt)",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "sms-Latn",
        "name": "Skolt Sami",
        "layouts": [
          {
            "id": "finnish-with-sami",
            "klid": "0001083b",
            "href": "/0001083b",
            "name": "Finnish with Sami",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      }
    ]
  },
  {
    "kind": "group",
    "code": "sma",
    "name": "Sami (Southern, Sweden)",
    "layouts": [],
    "children": [
      {
        "kind": "group",
        "code": "sma-Latn",
        "name": "Southern Sami",
        "layouts": [
          {
            "id": "swedish-with-sami",
            "klid": "0000083b",
            "href": "/0000083b",
            "name": "Swedish with Sami",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ],
        "children": [
          {
            "kind": "language",
            "code": "sma-Latn-NO",
            "name": "Southern Sami (Norway)",
            "layouts": [
              {
                "id": "norwegian-with-sami",
                "klid": "0000043b",
                "href": "/0000043b",
                "name": "Norwegian with Sami",
                "isDefault": true,
                "isDefaultFromOtherLanguage": true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "kind": "group",
    "code": "smj",
    "name": "Sami, (Lule, Sweden)",
    "layouts": [],
    "children": [
      {
        "kind": "group",
        "code": "smj-Latn",
        "name": "Lule Sami",
        "layouts": [
          {
            "id": "swedish-with-sami",
            "klid": "0000083b",
            "href": "/0000083b",
            "name": "Swedish with Sami",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ],
        "children": [
          {
            "kind": "language",
            "code": "smj-Latn-NO",
            "name": "Lule Sami (Norway)",
            "layouts": [
              {
                "id": "norwegian-with-sami",
                "klid": "0000043b",
                "href": "/0000043b",
                "name": "Norwegian with Sami",
                "isDefault": true,
                "isDefaultFromOtherLanguage": true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "kind": "group",
    "code": "sa",
    "name": "Sanskrit",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "sa-Deva",
        "name": "Sanskrit",
        "layouts": [
          {
            "id": "devanagari-inscript",
            "klid": "00000439",
            "href": "/00000439",
            "name": "Devanagari - INSCRIPT",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      }
    ]
  },
  {
    "kind": "group",
    "code": "sat",
    "name": "Santali",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "sat-Olck",
        "name": "Santali (Ol Chiki)",
        "layouts": [
          {
            "id": "ol-chiki",
            "klid": "000d0c00",
            "href": "/000d0c00",
            "name": "Ol Chiki",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          }
        ]
      }
    ]
  },
  {
    "kind": "group",
    "code": "gd",
    "name": "Scottish Gaelic",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "gd-Latn",
        "name": "Scottish Gaelic",
        "layouts": [
          {
            "id": "scottish-gaelic",
            "klid": "00011809",
            "href": "/00011809",
            "name": "Scottish Gaelic",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      }
    ]
  },
  {
    "kind": "group",
    "code": "sr",
    "name": "Serbian",
    "layouts": [],
    "children": [
      {
        "kind": "group",
        "code": "sr-Cyrl",
        "name": "Serbian (Cyrillic)",
        "layouts": [
          {
            "id": "serbian-cyrillic",
            "klid": "00000c1a",
            "href": "/00000c1a",
            "name": "Serbian (Cyrillic)",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ],
        "children": [
          {
            "kind": "language",
            "code": "sr-Cyrl-CS",
            "name": "Serbian (Cyrillic, Serbia and Montenegro (Former))",
            "layouts": [
              {
                "id": "serbian-cyrillic",
                "klid": "00000c1a",
                "href": "/00000c1a",
                "name": "Serbian (Cyrillic)",
                "isDefault": false,
                "isDefaultFromOtherLanguage": false
              }
            ]
          }
        ]
      },
      {
        "kind": "group",
        "code": "sr-Latn",
        "name": "Serbian (Latin)",
        "layouts": [
          {
            "id": "serbian-latin",
            "klid": "0000081a",
            "href": "/0000081a",
            "name": "Serbian (Latin)",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ],
        "children": [
          {
            "kind": "language",
            "code": "sr-Latn-CS",
            "name": "Serbian (Latin, Serbia and Montenegro (Former))",
            "layouts": [
              {
                "id": "serbian-latin",
                "klid": "0000081a",
                "href": "/0000081a",
                "name": "Serbian (Latin)",
                "isDefault": false,
                "isDefaultFromOtherLanguage": false
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "nso",
    "name": "Sesotho sa Leboa",
    "layouts": [
      {
        "id": "sesotho-sa-leboa",
        "klid": "0000046c",
        "href": "/0000046c",
        "name": "Sesotho sa Leboa",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "language",
    "code": "tn",
    "name": "Setswana",
    "layouts": [
      {
        "id": "setswana",
        "klid": "00000432",
        "href": "/00000432",
        "name": "Setswana",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ]
  },
  {
    "kind": "group",
    "code": "sd",
    "name": "Sindhi",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "sd-Arab",
        "name": "Sindhi (Arabic)",
        "layouts": [
          {
            "id": "urdu",
            "klid": "00000420",
            "href": "/00000420",
            "name": "Urdu",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      },
      {
        "kind": "language",
        "code": "sd-Deva",
        "name": "Sindhi (Devanagari)",
        "layouts": [
          {
            "id": "hindi-traditional",
            "klid": "00010439",
            "href": "/00010439",
            "name": "Hindi Traditional",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "si",
    "name": "Sinhala",
    "layouts": [
      {
        "id": "sinhala",
        "klid": "0000045b",
        "href": "/0000045b",
        "name": "Sinhala",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "sinhala-wij-9",
        "klid": "0001045b",
        "href": "/0001045b",
        "name": "Sinhala - Wij 9",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "language",
    "code": "sk",
    "name": "Slovak",
    "layouts": [
      {
        "id": "slovak",
        "klid": "0000041b",
        "href": "/0000041b",
        "name": "Slovak",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "slovak-qwerty",
        "klid": "0001041b",
        "href": "/0001041b",
        "name": "Slovak (QWERTY)",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "language",
    "code": "sl",
    "name": "Slovenian",
    "layouts": [
      {
        "id": "slovenian",
        "klid": "00000424",
        "href": "/00000424",
        "name": "Slovenian",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "group",
    "code": "so",
    "name": "Somali (Latin)",
    "layouts": [
      {
        "id": "us",
        "klid": "00000409",
        "href": "/00000409",
        "name": "US",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ],
    "children": [
      {
        "kind": "language",
        "code": "so-Osma",
        "name": "Somali (Osmanya)",
        "layouts": [
          {
            "id": "osmanya",
            "klid": "000e0c00",
            "href": "/000e0c00",
            "name": "Osmanya",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          }
        ]
      }
    ]
  },
  {
    "kind": "group",
    "code": "srb",
    "name": "Sora",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "srb-Sora",
        "name": "Sora",
        "layouts": [
          {
            "id": "sora",
            "klid": "00100c00",
            "href": "/00100c00",
            "name": "Sora",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "st",
    "name": "Sotho",
    "layouts": [
      {
        "id": "us",
        "klid": "00000409",
        "href": "/00000409",
        "name": "US",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ]
  },
  {
    "kind": "group",
    "code": "es",
    "name": "Spanish",
    "layouts": [
      {
        "id": "spanish",
        "klid": "0000040a",
        "href": "/0000040a",
        "name": "Spanish",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ],
    "children": [
      {
        "kind": "language",
        "code": "es-AR",
        "name": "Spanish (Argentina)",
        "layouts": [
          {
            "id": "latin-american",
            "klid": "0000080a",
            "href": "/0000080a",
            "name": "Latin American",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      },
      {
        "kind": "language",
        "code": "es-419",
        "name": "Spanish (Latin America)",
        "layouts": [
          {
            "id": "latin-american",
            "klid": "0000080a",
            "href": "/0000080a",
            "name": "Latin American",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      },
      {
        "kind": "language",
        "code": "es-CL",
        "name": "Spanish (Chile)",
        "layouts": [
          {
            "id": "latin-american",
            "klid": "0000080a",
            "href": "/0000080a",
            "name": "Latin American",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      },
      {
        "kind": "language",
        "code": "es-HN",
        "name": "Spanish (Honduras)",
        "layouts": [
          {
            "id": "latin-american",
            "klid": "0000080a",
            "href": "/0000080a",
            "name": "Latin American",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      },
      {
        "kind": "language",
        "code": "es-GT",
        "name": "Spanish (Guatemala)",
        "layouts": [
          {
            "id": "latin-american",
            "klid": "0000080a",
            "href": "/0000080a",
            "name": "Latin American",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      },
      {
        "kind": "language",
        "code": "es-SV",
        "name": "Spanish (El Salvador)",
        "layouts": [
          {
            "id": "latin-american",
            "klid": "0000080a",
            "href": "/0000080a",
            "name": "Latin American",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      },
      {
        "kind": "language",
        "code": "es-EC",
        "name": "Spanish (Ecuador)",
        "layouts": [
          {
            "id": "latin-american",
            "klid": "0000080a",
            "href": "/0000080a",
            "name": "Latin American",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      },
      {
        "kind": "language",
        "code": "es-DO",
        "name": "Spanish (Dominican Republic)",
        "layouts": [
          {
            "id": "latin-american",
            "klid": "0000080a",
            "href": "/0000080a",
            "name": "Latin American",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      },
      {
        "kind": "language",
        "code": "es-CR",
        "name": "Spanish (Costa Rica)",
        "layouts": [
          {
            "id": "latin-american",
            "klid": "0000080a",
            "href": "/0000080a",
            "name": "Latin American",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      },
      {
        "kind": "language",
        "code": "es-CO",
        "name": "Spanish (Colombia)",
        "layouts": [
          {
            "id": "latin-american",
            "klid": "0000080a",
            "href": "/0000080a",
            "name": "Latin American",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      },
      {
        "kind": "language",
        "code": "es-BO",
        "name": "Spanish (Bolivia)",
        "layouts": [
          {
            "id": "latin-american",
            "klid": "0000080a",
            "href": "/0000080a",
            "name": "Latin American",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      },
      {
        "kind": "language",
        "code": "es-MX",
        "name": "Spanish (Mexico)",
        "layouts": [
          {
            "id": "latin-american",
            "klid": "0000080a",
            "href": "/0000080a",
            "name": "Latin American",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          }
        ]
      },
      {
        "kind": "language",
        "code": "es-NI",
        "name": "Spanish (Nicaragua)",
        "layouts": [
          {
            "id": "latin-american",
            "klid": "0000080a",
            "href": "/0000080a",
            "name": "Latin American",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      },
      {
        "kind": "language",
        "code": "es-PR",
        "name": "Spanish (Puerto Rico)",
        "layouts": [
          {
            "id": "latin-american",
            "klid": "0000080a",
            "href": "/0000080a",
            "name": "Latin American",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      },
      {
        "kind": "language",
        "code": "es-PE",
        "name": "Spanish (Peru)",
        "layouts": [
          {
            "id": "latin-american",
            "klid": "0000080a",
            "href": "/0000080a",
            "name": "Latin American",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      },
      {
        "kind": "language",
        "code": "es-PY",
        "name": "Spanish (Paraguay)",
        "layouts": [
          {
            "id": "latin-american",
            "klid": "0000080a",
            "href": "/0000080a",
            "name": "Latin American",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      },
      {
        "kind": "language",
        "code": "es-PA",
        "name": "Spanish (Panama)",
        "layouts": [
          {
            "id": "latin-american",
            "klid": "0000080a",
            "href": "/0000080a",
            "name": "Latin American",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      },
      {
        "kind": "language",
        "code": "es-ES",
        "name": "Spanish (Spain)",
        "layouts": [
          {
            "id": "spanish",
            "klid": "0000040a",
            "href": "/0000040a",
            "name": "Spanish",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          },
          {
            "id": "spanish-variation",
            "klid": "0001040a",
            "href": "/0001040a",
            "name": "Spanish Variation",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          }
        ]
      },
      {
        "kind": "language",
        "code": "es-US",
        "name": "Spanish (United States)",
        "layouts": [
          {
            "id": "latin-american",
            "klid": "0000080a",
            "href": "/0000080a",
            "name": "Latin American",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      },
      {
        "kind": "language",
        "code": "es-VE",
        "name": "Spanish (Venezuela)",
        "layouts": [
          {
            "id": "latin-american",
            "klid": "0000080a",
            "href": "/0000080a",
            "name": "Latin American",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      },
      {
        "kind": "language",
        "code": "es-UY",
        "name": "Spanish (Uruguay)",
        "layouts": [
          {
            "id": "latin-american",
            "klid": "0000080a",
            "href": "/0000080a",
            "name": "Latin American",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "sv",
    "name": "Swedish",
    "layouts": [
      {
        "id": "swedish",
        "klid": "0000041d",
        "href": "/0000041d",
        "name": "Swedish",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ]
  },
  {
    "kind": "group",
    "code": "syr",
    "name": "Syriac‎",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "syr-Syrc",
        "name": "Syriac‎",
        "layouts": [
          {
            "id": "syriac",
            "klid": "0000045a",
            "href": "/0000045a",
            "name": "Syriac",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          },
          {
            "id": "syriac-phonetic",
            "klid": "0001045a",
            "href": "/0001045a",
            "name": "Syriac Phonetic",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          }
        ]
      }
    ]
  },
  {
    "kind": "group",
    "code": "tg",
    "name": "Tajik",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "tg-Cyrl",
        "name": "Tajik (Cyrillic)",
        "layouts": [
          {
            "id": "tajik",
            "klid": "00000428",
            "href": "/00000428",
            "name": "Tajik",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          }
        ]
      }
    ]
  },
  {
    "kind": "group",
    "code": "ta",
    "name": "Tamil",
    "layouts": [
      {
        "id": "tamil-99",
        "klid": "00020449",
        "href": "/00020449",
        "name": "Tamil 99",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ],
    "children": [
      {
        "kind": "language",
        "code": "ta-IN",
        "name": "Tamil (India)",
        "layouts": [
          {
            "id": "tamil",
            "klid": "00000449",
            "href": "/00000449",
            "name": "Tamil",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          },
          {
            "id": "tamil-99",
            "klid": "00020449",
            "href": "/00020449",
            "name": "Tamil 99",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          },
          {
            "id": "tamil-anjal",
            "klid": "00030449",
            "href": "/00030449",
            "name": "Tamil Anjal",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          }
        ]
      }
    ]
  },
  {
    "kind": "group",
    "code": "tt",
    "name": "Tatar",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "tt-Cyrl",
        "name": "Tatar (Cyrillic)",
        "layouts": [
          {
            "id": "tatar",
            "klid": "00010444",
            "href": "/00010444",
            "name": "Tatar",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          },
          {
            "id": "tatar-legacy",
            "klid": "00000444",
            "href": "/00000444",
            "name": "Tatar (Legacy)",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "te",
    "name": "Telugu",
    "layouts": [
      {
        "id": "telugu",
        "klid": "0000044a",
        "href": "/0000044a",
        "name": "Telugu",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "language",
    "code": "th",
    "name": "Thai",
    "layouts": [
      {
        "id": "thai-kedmanee",
        "klid": "0000041e",
        "href": "/0000041e",
        "name": "Thai Kedmanee",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "thai-kedmanee-non-shiftlock",
        "klid": "0002041e",
        "href": "/0002041e",
        "name": "Thai Kedmanee (non-ShiftLock)",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "thai-pattachote",
        "klid": "0001041e",
        "href": "/0001041e",
        "name": "Thai Pattachote",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "thai-pattachote-non-shiftlock",
        "klid": "0003041e",
        "href": "/0003041e",
        "name": "Thai Pattachote (non-ShiftLock)",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "group",
    "code": "bo",
    "name": "Tibetan",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "bo-Tibt",
        "name": "Tibetan",
        "layouts": [
          {
            "id": "tibetan-prc",
            "klid": "00000451",
            "href": "/00000451",
            "name": "Tibetan (PRC)",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          },
          {
            "id": "tibetan-prc-updated",
            "klid": "00010451",
            "href": "/00010451",
            "name": "Tibetan (PRC) - Updated",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "ts",
    "name": "Tsonga",
    "layouts": [
      {
        "id": "us",
        "klid": "00000409",
        "href": "/00000409",
        "name": "US",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ]
  },
  {
    "kind": "language",
    "code": "tr",
    "name": "Turkish",
    "layouts": [
      {
        "id": "turkish-f",
        "klid": "0001041f",
        "href": "/0001041f",
        "name": "Turkish F",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "turkish-q",
        "klid": "0000041f",
        "href": "/0000041f",
        "name": "Turkish Q",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "group",
    "code": "tk",
    "name": "Turkmen",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "tk-Latn",
        "name": "Turkmen (Latin)",
        "layouts": [
          {
            "id": "turkmen",
            "klid": "00000442",
            "href": "/00000442",
            "name": "Turkmen",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "uk",
    "name": "Ukrainian",
    "layouts": [
      {
        "id": "ukrainian",
        "klid": "00000422",
        "href": "/00000422",
        "name": "Ukrainian",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "ukrainian-enhanced",
        "klid": "00020422",
        "href": "/00020422",
        "name": "Ukrainian (Enhanced)",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "language",
    "code": "hsb",
    "name": "Upper Sorbian",
    "layouts": [
      {
        "id": "sorbian-extended",
        "klid": "0001042e",
        "href": "/0001042e",
        "name": "Sorbian Extended",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "sorbian-standard",
        "klid": "0002042e",
        "href": "/0002042e",
        "name": "Sorbian Standard",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      },
      {
        "id": "sorbian-standard-legacy",
        "klid": "0000042e",
        "href": "/0000042e",
        "name": "Sorbian Standard (Legacy)",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "language",
    "code": "ur",
    "name": "Urdu",
    "layouts": [
      {
        "id": "urdu",
        "klid": "00000420",
        "href": "/00000420",
        "name": "Urdu",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ]
  },
  {
    "kind": "group",
    "code": "ug",
    "name": "Uyghur",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "ug-Arab",
        "name": "Uyghur",
        "layouts": [
          {
            "id": "uyghur",
            "klid": "00010480",
            "href": "/00010480",
            "name": "Uyghur",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          },
          {
            "id": "uyghur-legacy",
            "klid": "00000480",
            "href": "/00000480",
            "name": "Uyghur (Legacy)",
            "isDefault": false,
            "isDefaultFromOtherLanguage": false
          }
        ]
      }
    ]
  },
  {
    "kind": "group",
    "code": "uz",
    "name": "Uzbek",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "uz-Cyrl",
        "name": "Uzbek (Cyrillic)",
        "layouts": [
          {
            "id": "uzbek-cyrillic",
            "klid": "00000843",
            "href": "/00000843",
            "name": "Uzbek Cyrillic",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          }
        ]
      },
      {
        "kind": "language",
        "code": "uz-Latn",
        "name": "Uzbek (Latin)",
        "layouts": [
          {
            "id": "us",
            "klid": "00000409",
            "href": "/00000409",
            "name": "US",
            "isDefault": true,
            "isDefaultFromOtherLanguage": true
          }
        ]
      }
    ]
  },
  {
    "kind": "language",
    "code": "ve",
    "name": "Venda",
    "layouts": [
      {
        "id": "us",
        "klid": "00000409",
        "href": "/00000409",
        "name": "US",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ]
  },
  {
    "kind": "language",
    "code": "vi",
    "name": "Vietnamese",
    "layouts": [
      {
        "id": "vietnamese",
        "klid": "0000042a",
        "href": "/0000042a",
        "name": "Vietnamese",
        "isDefault": false,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "language",
    "code": "cy",
    "name": "Welsh",
    "layouts": [
      {
        "id": "united-kingdom-extended",
        "klid": "00000452",
        "href": "/00000452",
        "name": "United Kingdom Extended",
        "isDefault": true,
        "isDefaultFromOtherLanguage": false
      }
    ]
  },
  {
    "kind": "language",
    "code": "wo",
    "name": "Wolof",
    "layouts": [
      {
        "id": "wolof",
        "klid": "00000488",
        "href": "/00000488",
        "name": "Wolof",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ]
  },
  {
    "kind": "language",
    "code": "yi",
    "name": "Yiddish",
    "layouts": [
      {
        "id": "hebrew-standard",
        "klid": "0002040d",
        "href": "/0002040d",
        "name": "Hebrew (Standard)",
        "isDefault": true,
        "isDefaultFromOtherLanguage": true
      }
    ]
  },
  {
    "kind": "group",
    "code": "yo",
    "name": "Yoruba",
    "layouts": [],
    "children": [
      {
        "kind": "language",
        "code": "yo-Latn",
        "name": "Yoruba",
        "layouts": [
          {
            "id": "yoruba",
            "klid": "0000046a",
            "href": "/0000046a",
            "name": "Yoruba",
            "isDefault": true,
            "isDefaultFromOtherLanguage": false
          }
        ]
      }
    ]
  }
];

export default LANGUAGES_TREE_DATA;
