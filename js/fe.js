function go()
{
let mons = {
    inkip: {
        num: 75011,
        species: "Inkip",
        types: ["Dark", "Water"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 61,
            atk: 77,
            def: 67,
            spa: 48,
            spd: 58,
            spe: 47
        },
        abilities: {
            0: "Turnabout Torrent"
        },
        heightm: 0.4,
        weightkg: 5.55,
        color: "Blue",
		  evos: ["swampamar"],
        eggGroups: ["Water 1"],
    },
    swampamar: {
        num: 75001,
        species: "Swampamar",
        types: ["Dark", "Water"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 103,
            atk: 111,
            def: 99,
            spa: 86,
            spd: 92,
            spe: 76
        },
        abilities: {
            0: "Turnabout Torrent"
        },
        heightm: 1.5,
        weightkg: 64.45,
        color: "Blue",
		  prevo: "inkip",
		  evoLevel: 28,
		  fusion: ["Swampert", "Malamar"],
        eggGroups: ["Water 1"],
    },
    swampamarmega: {
        num: 75001,
        species: "Swampamar-Mega",
        baseSpecies: "Swampamar",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dark", "Water"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 103,
            atk: 151,
            def: 119,
            spa: 96,
            spd: 112,
            spe: 86
        },
        abilities: {
            0: "Swift Swim"
        },
        heightm: 1.9,
        weightkg: 84.55,
        color: "Blue",
        eggGroups: ["Water 1"],
    },
    feekarp: {
        num: 75012,
        species: "Feekarp",
        types: ["Water"],
        baseStats: {
            hp: 30,
            atk: 22,
            def: 52,
            spa: 22,
            spd: 52,
            spe: 100
        },
        abilities: {
            0: "Swift Swim"
        },
        heightm: 0.75,
        weightkg: 8.4,
        color: "Red",
		  evos: ["gyarotic"],
        eggGroups: ["Dragon"],
    },
    gyarotic: {
        num: 75002,
        species: "Gyarotic",
        types: ["Water"],
        baseStats: {
            hp: 105,
            atk: 102,
            def: 89,
            spa: 90,
            spd: 122,
            spe: 91
        },
        abilities: {
            0: "Intimidating Scales"
        },
        heightm: 6.35,
        weightkg: 198.5,
		  prevo: "feekarp",
		  evoLevel: 20,
        color: "Blue",
        eggGroups: ["Dragon"],
    },
    gyaroticmega: {
        num: 75002,
        species: "Gyarotic-Mega",
        baseSpecies: "Gyarotic",
        forme: "Mega",
        formeLetter: "M",
        types: ["Water", "Dark"],
        baseStats: {
            hp: 105,
            atk: 132,
            def: 119,
            spa: 100,
            spd: 152,
            spe: 91
        },
        abilities: {
            0: "Mold Breaker"
        },
        heightm: 6.35,
        weightkg: 278.5,
        color: "Blue",
        eggGroups: ["Dragon"],
    },
    krillazulie: {
        num: 75013,
        species: "Krillazulie",
        types: ["Normal", "Water"],
        genderRatio: {
            M: 0.625,
            F: 0.375
        },
        baseStats: {
            hp: 51,
            atk: 50,
            def: 50,
            spa: 50,
            spd: 50,
            spe: 50
        },
        abilities: {
            0: "Moss Cleaner"
        },
        heightm: 0.25,
        weightkg: 4.5,
		  evos: ["frogrill"],
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    frogrill: {
        num: 75014,
        species: "Frogrill",
        types: ["Water"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 77,
            atk: 56,
            def: 66,
            spa: 66,
            spd: 68,
            spe: 83
        },
        abilities: {
            0: "Huge Torrent"
        },
        heightm: 0.5,
        weightkg: 9.7,
		  prevo: "krillazulie",
		  evos: ["azuninja"],
		  evoLevel: 16,
        color: "Blue",
        eggGroups: ["Water 1"],
    },
    azuninja: {
        num: 75003,
        species: "Azuninja",
        types: ["Water"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 96,
            atk: 82,
            def: 83,
            spa: 91,
            spd: 85,
            spe: 96
        },
        abilities: {
            0: "Huge Torrent"
        },
        heightm: 1.145,
        weightkg: 34.25,
		  prevo: "frogrill",
		  evoLevel: 27,
        color: "Blue",
        eggGroups: ["Water 1"],
    },
    chandeform: {
        num: 75004,
        species: "Chandeform",
        types: ["Ghost", "Normal"],
        baseStats: {
            hp: 75,
            atk: 72,
            def: 90,
            spa: 117,
            spd: 90,
            spe: 85
        },
        abilities: {
            0: "Flash Weather"
        },
        heightm: 0.645,
        weightkg: 17.55,
        color: "Black",
        eggGroups: ["Amorphous"],
    },
    dynamiss: {
        num: 75015,
        species: "Dynamiss",
        types: ["Electric", "Ghost"],
        baseStats: {
            hp: 77,
            atk: 56,
            def: 66,
            spa: 66,
            spd: 68,
            spe: 83
        },
        abilities: {
            0: "Levitate"
        },
        heightm: 0.45,
        weightkg: 0.65,
		  evos: ["mismatross"],
        color: "White",
        eggGroups: ["Amorphous"],
    },
    mismatross: {
        num: 75005,
        species: "Mismatross",
        types: ["Electric", "Ghost"],
        baseStats: {
            hp: 82,
            atk: 97,
            def: 80,
            spa: 115,
            spd: 102,
            spe: 87
        },
        abilities: {
            0: "Levitate"
        },
		  prevo: "dynamiss",
		  evoLevel: 41,
        heightm: 1.5,
        weightkg: 42.45,
        color: "Purple",
        eggGroups: ["Amorphous"],
    },
    axidos: {
        num: 75016,
        species: "Axidos",
        types: ["Dragon", "Rock"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 66,
            atk: 126,
            def: 60,
            spa: 40,
            spd: 45,
            spe: 77
        },
        abilities: {
            0: "Mold Breaker"
        },
        heightm: 0.75,
        weightkg: 24.75,
		  evos: ["haxardos"],
        color: "Green",
        eggGroups: ["Monster"],
    },
    haxardos: {
        num: 75006,
        species: "Haxardos",
        types: ["Dragon", "Rock"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 96,
            atk: 166,
            def: 85,
            spa: 72,
            spd: 70,
            spe: 87
        },
        abilities: {
            0: "Intense Rivalry"
        },
        heightm: 1.7,
        weightkg: 104,
		  prevo: "axidos",
		  evoLevel: 36,
        color: "Yellow",
        eggGroups: ["Monster"],
    },
    pangleye: {
        num: 75007,
        species: "Pangleye",
        types: ["Fighting", "Dark"],
        baseStats: {
            hp: 82,
            atk: 109,
            def: 86,
            spa: 77,
            spd: 78,
            spe: 64
        },
        abilities: {
            0: "Molded Stall"
        },
        heightm: 1.31,
        weightkg: 73.5,
        color: "Black",
        eggGroups: ["Human-Like"],
    },
    pangleyemega: {
        num: 75007,
        species: "Pangleye-Mega",
        baseSpecies: "Pangleye-",
        forme: "Mega",
        formeLetter: "M",
        types: ["Fighting", "Dark"],
        baseStats: {
            hp: 82,
            atk: 119,
            def: 136,
            spa: 97,
            spd: 128,
            spe: 34
        },
        abilities: {
            0: "Magic Bounce"
        },
        heightm: 1.31,
        weightkg: 223.5,
        color: "Black",
        eggGroups: ["Human-Like"],
    },
    gibikarp: {
        num: 75017,
        species: "Gibikarp",
        types: ["Ground", "Water"],
        baseStats: {
            hp: 50,
            atk: 55,
            def: 55,
            spa: 32,
            spd: 37,
            spe: 70
        },
        abilities: {
            0: "Denticles"
        },
        heightm: 0.8,
        weightkg: 15.25,
		  evos: ["garchados"],
        color: "Red",
        eggGroups: ["Dragon"],
    },
    garchados: {
        num: 75008,
        species: "Garchados",
        types: ["Ground", "Water"],
        baseStats: {
            hp: 111,
            atk: 137,
            def: 97,
            spa: 80,
            spd: 102,
            spe: 101
        },
        abilities: {
            0: "Land Shark"
        },
        heightm: 4.205,
        weightkg: 165,
		  prevo: "gibikarp",
		  evoLevel: 29,
        color: "Blue",
        eggGroups: ["Dragon"],
    },
    garchadosmegac: {
        num: 75008,
        species: "Garchados-Mega-C",
        baseSpecies: "Garchados",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ground", "Water"],
        baseStats: {
            hp: 111,
            atk: 177,
            def: 117,
            spa: 120,
            spd: 112,
            spe: 91
        },
        abilities: {
            0: "Sand Force"
        },
        heightm: 4.205,
        weightkg: 165,
        color: "Brown",
        eggGroups: ["Dragon"],
    },
    garchadosmegay: {
        num: 75008,
        species: "Garchados-Mega-Y",
        baseSpecies: "Garchados",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ground", "Dark"],
        baseStats: {
            hp: 111,
            atk: 167,
            def: 127,
            spa: 90,
            spd: 132,
            spe: 101
        },
        abilities: {
            0: "Mold Breaker"
        },
        heightm: 4.205,
        weightkg: 245,
        color: "Brown",
        eggGroups: ["Dragon"],
    },
    merkitty: {
        num: 75018,
        species: "Merkitty",
        types: ["Water", "Normal"],
        genderRatio: {M: 0.375, F: 0.625},
        baseStats: {
            hp: 100,
            atk: 63,
            def: 50,
            spa: 57,
            spd: 50,
            spe: 60
        },
        abilities: {
            0: "Normal Veil"
        },
        heightm: 1.4,
        weightkg: 70.5,
		  evos: ["wailcatty"],
        color: "Pink",
        eggGroups: ["Field"],
    },
    wailcatty: {
        num: 75009,
        species: "Wailcatty",
        types: ["Normal", "Water"],
        genderRatio: {M: 0.375, F: 0.625},
        baseStats: {
            hp: 130,
            atk: 87,
            def: 65,
            spa: 82,
            spd: 60,
            spe: 75
        },
        abilities: {
            0: "Normal Veil"
        },
        heightm: 7.795,
        weightkg: 215.3,
		  prevo: "wailkitty",
		  evoLevel: 40,
        color: "Purple",
        eggGroups: ["Field"],
    },
    gibodile: {
        num: 75019,
        species: "Gibodile",
        types: ["Dragon", "Water"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 59,
            atk: 82,
            def: 59,
            spa: 47,
            spd: 51,
            spe: 57
        },
        abilities: {
            0: "Torrent Veil"
        },
        heightm: 0.65,
        weightkg: 15,
		  evos: ["gabinaw"],
        color: "Blue",
        eggGroups: ["Monster"],
    },
    gabinaw: {
        num: 750110,
        species: "Gabinaw",
        types: ["Dragon", "Water"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 76,
            atk: 95,
            def: 82,
            spa: 64,
            spd: 69,
            spe: 80
        },
        abilities: {
            0: "Torrent Veil"
        },
        heightm: 1.25,
        weightkg: 40.5,
		  prevo: "gibodile",
		  evos: ["gargatr"],
		  evoLevel: 21,
        color: "Blue",
        eggGroups: ["Monster"],
    },
    gargatr: {
        num: 750010,
        species: "Gargatr",
        types: ["Dragon", "Water"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 106,
            atk: 127,
            def: 107,
            spa: 89,
            spd: 94,
            spe: 100
        },
        abilities: {
            0: "Torrent Veil"
        },
        heightm: 2.11,
        weightkg: 91.9,
		  prevo: "gabinaw",
		  evoLevel: 39,
        color: "Blue",
        eggGroups: ["Monster"],
    },
    gargatrmega: {
        num: 750010,
        species: "Gargatr-Mega",
        baseSpecies: "Gargatr",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dragon", "Water"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 106,
            atk: 167,
            def: 127,
            spa: 129,
            spd: 104,
            spe: 90
        },
        abilities: {
            0: "Sand Force"
        },
        heightm: 2.11,
        weightkg: 91.9,
        color: "Blue",
        eggGroups: ["Monster"],
    },
    krelpo: {
        num: 750111,
        species: "Krelpo",
        types: ["Poison", "Dark"],
        baseStats: {
            hp: 76,
            atk: 95,
            def: 82,
            spa: 64,
            spd: 69,
            spe: 80
        },
        abilities: {
            0: "Toxic Barrage"
        },
        heightm: 0.65,
        weightkg: 12.3,
		  evos: ["dragon"],
        color: "Blue",
        eggGroups: ["Dragon"],
    },
    dragon: {
        num: 750011,
        species: "Dragon",
        types: ["Dark", "Poison"],
        baseStats: {
            hp: 88,
            atk: 100,
            def: 100,
            spa: 121,
            spd: 116,
            spe: 81
        },
        abilities: {
            0: "Levipoison"
        },
		  prevo: "krelpo",
		  evoLevel: 52,
        heightm: 1.8,
        weightkg: 120.75,
        color: "Blue",
        eggGroups: ["Dragon"],
    },
    hawlusharp: {
        num: 750012,
        species: "Hawlusharp",
        types: ["Fighting", "Dark"],
        baseStats: {
            hp: 81,
            atk: 118,
            def: 97,
            spa: 77,
            spd: 76,
            spe: 104
        },
        abilities: {
            0: "Armor Cast"
        },
        heightm: 1.195,
        weightkg: 45.75,
        color: "Red",
        eggGroups: ["Human-Like"],
    },
    yamonix: {
        num: 750112,
        species: "Yamonix",
        types: ["Rock", "Ghost"],
        baseStats: {
            hp: 45,
            atk: 42,
            def: 130,
            spa: 60,
            spd: 60,
            spe: 55
        },
        abilities: {
            0: "Mummy Fortitude"
        },
        heightm: 4.65,
        weightkg: 105.75,
		  evos: ["cofagreelix"],
        color: "Black",
        eggGroups: ["Mineral"],
    },
    cofagreelix: {
        num: 750013,
        species: "Cofagreelix",
        types: ["Steel", "Ghost"],
        baseStats: {
            hp: 76,
            atk: 77,
            def: 182,
            spa: 85,
            spd: 95,
            spe: 40
        },
        abilities: {
            0: "Mummy Fortitude"
        },
        heightm: 5.445,
        weightkg: 238.25,
		  prevo: "yamonix",
		  evoLevel: 34,
        color: "Yellow",
        eggGroups: ["Mineral"],
    },
    cofagreelixmega: {
        num: 750013,
        species: "Cofagreelix-Mega",
        baseSpecies: "Cofagreelix",
        forme: "Mega",
        formeLetter: "M",
        types: ["Steel", "Ghost"],
        baseStats: {
            hp: 76,
            atk: 117,
            def: 212,
            spa: 85,
            spd: 125,
            spe: 40
        },
        abilities: {
            0: "Sand Force"
        },
        heightm: 6.745,
        weightkg: 578.25,
        color: "Yellow",
        eggGroups: ["Mineral"],
    },
    wailee: {
        num: 750113,
        species: "Wailee",
        types: ["Normal", "Water"],
        baseStats: {
            hp: 100,
            atk: 67,
            def: 54,
            spa: 72,
            spd: 55,
            spe: 62
        },
        abilities: {
            0: "Adaptive Bias"
        },
        heightm: 1.15,
        weightkg: 68.25,
		  evos: ["joltlord", "umbord", "espord", "glacord"],
        color: "Brown",
        eggGroups: ["Field"],
    },
    joltlord: {
        num: 750014,
        species: "Joltlord",
        types: ["Electric", "Water"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 127,
            atk: 87,
            def: 62,
            spa: 110,
            spd: 80,
            spe: 105
        },
        abilities: {
            0: "Oblivious Absorb"
        },
        heightm: 7.645,
        weightkg: 211.25,
		  prevo: "wailee",
		  evoLevel: 40,
        color: "Yellow",
        eggGroups: ["Field"],
    },
    gligbee: {
        num: 750114,
        species: "Gligbee",
        types: ["Bug", "Ground"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 62,
            atk: 57,
            def: 78,
            spa: 37,
            spd: 68,
            spe: 82
        },
        abilities: {
            0: "Honey Sterilize"
        },
        heightm: 0.7,
        weightkg: 35.15,
		  evos: ["vespicor"],
        color: "Purple",
        eggGroups: ["Bug"],
    },
    vepsicor: {
        num: 750015,
        species: "Vepsicor",
        types: ["Bug", "Ground"],
        gender: "F",
        baseStats: {
            hp: 82,
            atk: 97,
            def: 123,
            spa: 72,
            spd: 98,
            spe: 77
        },
        abilities: {
            0: "Sand Pressure"
        },
        heightm: 1.6,
        weightkg: 40.5,
		  prevo: "gligbee",
		  evoLevel: 21,
        color: "Purple",
        eggGroups: ["Bug"],
    },
    zorgrowl: {
        num: 750115,
        species: "Zorgrowl",
        types: ["Fire", "Dark"],
        genderRatio: {
            M: 0.8125,
            F: 0.1875
        },
        baseStats: {
            hp: 55,
            atk: 74,
            def: 48,
            spa: 83,
            spd: 55,
            spe: 73
        },
        abilities: {
            0: "Mirage Guard"
        },
        heightm: 0.7,
        weightkg: 15.75,
        color: "Brown",
		  evos: ["zorcanine"],
        eggGroups: ["Field"],
    },
    zorcanine: {
        num: 750016,
        species: "Zorcanine",
        types: ["Fire", "Dark"],
        genderRatio: {
            M: 0.8125,
            F: 0.1875
        },
        baseStats: {
            hp: 85,
            atk: 117,
            def: 80,
            spa: 120,
            spd: 80,
            spe: 110
        },
        abilities: {
            0: "Mirage Guard"
        },
        heightm: 1.755,
        weightkg: 118.05,
		  prevo: "zorgrowl",
		  evoLevel: 30,
        color: "Brown",
        eggGroups: ["Field"],
    },
    archedactyl: {
        num: 750017,
        species: "Archedactyl",
        types: ["Rock", "Flying"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 87,
            atk: 132,
            def: 75,
            spa: 96,
            spd: 80,
            spe: 130
        },
        abilities: {
            0: "Aura of Failure"
        },
        heightm: 1.6,
        weightkg: 45.5,
        color: "Yellow",
        eggGroups: ["Flying"],
    },
    archedactylmega: {
        num: 750017,
        species: "Archedactyl-Mega",
        baseSpecies: "Archedactyl",
        forme: "Mega",
        formeLetter: "M",
        types: ["Rock", "Flying"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 87,
            atk: 162,
            def: 95,
            spa: 106,
            spd: 100,
            spe: 150
        },
        abilities: {
            0: "Tough Claws"
        },
        heightm: 1.9,
        weightkg: 65.5,
        color: "Yellow",
        eggGroups: ["Flying"],
    },
    hippopopin: {
        num: 750116,
        species: "Hippopopin",
        types: ["Grass", "Ground"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 70,
            atk: 78,
            def: 80,
            spa: 48,
            spd: 54,
            spe: 40
        },
        abilities: {
            0: "Cactus Power"
        },
        heightm: 0.6,
        weightkg: 29.25,
        color: "Green",
		  evos: ["chesdon"],
        eggGroups: ["Field"],
    },
    chesdon: {
        num: 750018,
        species: "Chesdon",
        types: ["Grass", "Ground"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 108,
            atk: 119,
            def: 130,
            spa: 81,
            spd: 83,
            spe: 65
        },
        abilities: {
            0: "Cactus Power"
        },
        heightm: 1.805,
        weightkg: 195,
		  prevo: "hippopopin",
		  evoLevel: 30,
        color: "Green",
        eggGroups: ["Field"],
    },
    drilnub: {
        num: 750117,
        species: "Drilnub",
        types: ["Ground", "Ice"],
        baseStats: {
            hp: 60,
            atk: 82,
            def: 45,
            spa: 35,
            spd: 42,
            spe: 74
        },
        abilities: {
            0: "Snow Force"
        },
        heightm: 0.35,
        weightkg: 7.5,
        color: "Brown",
		  evos: ["mamodrill"],
        eggGroups: ["Field"],
    },
    mamodrill: {
        num: 750019,
        species: "Mamodrill",
        types: ["Ground", "Ice"],
        baseStats: {
            hp: 120,
            atk: 142,
            def: 80,
            spa: 70,
            spd: 72,
            spe: 94
        },
        abilities: {
            0: "Snow Force"
        },
		  prevo: "drilnub",
		  evoLevel: 30,
        heightm: 1.6,
        weightkg: 165.7,
        color: "Brown",
        eggGroups: ["Field"],
    },
    gooptile: {
        num: 750118,
        species: "Gooptile",
        types: ["Dragon", "Electric"],
        baseStats: {
            hp: 54,
            atk: 49,
            def: 43,
            spa: 71,
            spd: 64,
            spe: 63
        },
        abilities: {
            0: "Goop Skin"
        },
        heightm: 0.4,
        weightkg: 4.4,
        color: "Purple",
		  evos: ["heliodra"],
        eggGroups: ["Dragon"],
    },
    heliodra: {
        num: 750020,
        species: "Heliodra",
        types: ["Dragon", "Electric"],
        baseStats: {
            hp: 86,
            atk: 87,
            def: 71,
            spa: 119,
            spd: 132,
            spe: 104
        },
        abilities: {
            0: "Sandy Skin"
        },
		  prevo: "gooptile",
		  evoLevel: 45,
        heightm: 1.5,
        weightkg: 85.75,
        color: "Purple",
        eggGroups: ["Dragon"],
    },
    scyscor: {
        num: 750021,
        species: "Scyscor",
        types: ["Bug", "Ground"],
        baseStats: {
            hp: 82,
            atk: 112,
            def: 112,
            spa: 60,
            spd: 87,
            spe: 110
        },
        abilities: {
            0: "Technicutter"
        },
        heightm: 1.755,
        weightkg: 49.25,
        color: "Purple",
        eggGroups: ["Bug"],
    },
    seedee: {
        num: 750119,
        species: "Seedee",
        types: ["Grass", "Normal"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 55,
            atk: 55,
            def: 55,
            spa: 50,
            spd: 55,
            spe: 50
        },
        abilities: {
            0: "Sleepy Switch"
        },
        heightm: 0.4,
        weightkg: 5.25,
        color: "Brown",
		  evos: ["joltry"],
        eggGroups: ["Field"],
    },
    joltry: {
        num: 750022,
        species: "Joltry",
        types: ["Grass", "Electric"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 87,
            atk: 92,
            def: 70,
            spa: 110,
            spd: 87,
            spe: 115
        },
        abilities: {
            0: "ChloroVolt"
        },
        heightm: 1.045,
        weightkg: 42.05,
		  prevo: "seedee",
		  evoLevel: 14,
        color: "Brown",
        eggGroups: ["Field"],
    },
    shoorazu: {
        num: 750120,
        species: "Shoorazu",
        types: ["Normal", "Grass"],
        genderRatio: {M: 0.375, F: 0.625},
        baseStats: {
            hp: 60,
            atk: 35,
            def: 65,
            spa: 35,
            spd: 65,
            spe: 32
        },
        abilities: {
            0: "Healing Fat"
        },
        heightm: 0.3,
        weightkg: 3.25,
        color: "Blue",
		  evos: ["azumaloom"],
        eggGroups: ["Undiscovered"],
    },
    azumaloom: {
        num: 750023,
        species: "Azumaloom",
        types: ["Water", "Grass"],
        baseStats: {
            hp: 90,
            atk: 100,
            def: 90,
            spa: 70,
            spd: 80,
            spe: 70
        },
        abilities: {
            0: "Healing Fat"
        },
        heightm: 0.99,
        weightkg: 33.85,
		  prevo: "shoorazu",
		  evoLevel: 20,
        color: "Blue",
        eggGroups: ["Fairy"],
    },
    sawkape: {
        num: 750024,
        species: "Sawkape",
        types: ["Fire", "Fighting"],
        gender: "M",
        baseStats: {
            hp: 85,
            atk: 124,
            def: 83,
            spa: 77,
            spd: 83,
            spe: 106
        },
        abilities: {
            0: "Blazing Body"
        },
        heightm: 1.295,
        weightkg: 53,
        color: "Brown",
        eggGroups: ["Human-Like"],
    },
    weasol: {
        num: 750025,
        species: "Weasol",
        types: ["Dark", "Ice"],
        baseStats: {
            hp: 77,
            atk: 135,
            def: 72,
            spa: 70,
            spd: 82,
            spe: 110
        },
        abilities: {
            0: "No Skill"
        },
        heightm: 1.14,
        weightkg: 40.5,
        color: "White",
        eggGroups: ["Field"],
    },
    weasolmega: {
        num: 750025,
        species: "Weasol-Mega",
        baseSpecies: "Weasol",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dark", "Ice"],
        baseStats: {
            hp: 82,
            atk: 160,
            def: 77,
            spa: 115,
            spd: 87,
            spe: 155
        },
        abilities: {
            0: "Magic Bounce"
        },
        heightm: 1.15,
        weightkg: 42.5,
        color: "White",
        eggGroups: ["Field"],
    },
    tariblava: {
        num: 750121,
        species: "Tariblava",
        types: ["Ground", "Dragon"],
        baseStats: {
            hp: 65,
            atk: 80,
            def: 60,
            spa: 53,
            spd: 60,
            spe: 60
        },
        abilities: {
            0: "Sand Veil"
        },
        heightm: 0.65,
        weightkg: 46.25,
        color: "Blue",
		  evos: ["pupibite"],
        eggGroups: ["Monster"],
    },
    pupibite: {
        num: 750122,
        species: "Pupibite",
        types: ["Rock", "Dragon"],
        baseStats: {
            hp: 79,
            atk: 97,
            def: 77,
            spa: 67,
            spd: 72,
            spe: 76
        },
        abilities: {
            0: "Sand Shed"
        },
        heightm: 1.3,
        weightkg: 104,
        color: "Blue",
		  prevo: "tariblava",
		  evoLevel: 27,
		  evos: ["tyranichomp"],
        eggGroups: ["Monster"],
    },
    tyranichomp: {
        num: 750026,
        species: "Tyranichomp",
        types: ["Rock", "Dragon"],
        baseStats: {
            hp: 114,
            atk: 142,
            def: 112,
            spa: 97,
            spd: 102,
            spe: 91
        },
        abilities: {
            0: "Sand Aura"
        },
        heightm: 1.96,
        weightkg: 148.5,
		  prevo: "pupibite",
		  evoLevel: 51,
        color: "Blue",
        eggGroups: ["Monster"],
    },
    tyranichompmegat: {
        num: 750026,
        species: "Tyranichomp-Mega-T",
        baseSpecies: "Tyranichomp",
        forme: "Mega",
        formeLetter: "M",
        types: ["Rock", "Dragon"],
        baseStats: {
            hp: 114,
            atk: 172,
            def: 152,
            spa: 97,
            spd: 122,
            spe: 101
        },
        abilities: {
            0: "Sand Stream"
        },
        heightm: 2.46,
        weightkg: 201.5,
        color: "Blue",
        eggGroups: ["Monster"],
    },

    tyranichompmegag: {
        num: 750026,
        species: "Tyranichomp-Mega-G",
        baseSpecies: "Tyranichomp",
        forme: "Mega",
        formeLetter: "M",
        types: ["Rock", "Dragon"],
        baseStats: {
            hp: 114,
            atk: 182,
            def: 132,
            spa: 137,
            spd: 112,
            spe: 81
        },
        abilities: {
            0: "Sand Force"
        },
        heightm: 1.96,
        weightkg: 148.5,
        color: "Blue",
        eggGroups: ["Monster"],
    },
    snochu: {
        num: 750123,
        species: "Snochu",
        types: ["Ice", "Electric"],
        baseStats: {
            hp: 44,
            atk: 57,
            def: 37,
            spa: 55,
            spd: 47,
            spe: 61
        },
        abilities: {
            0: "Static Storm"
        },
        heightm: 0.5,
        weightkg: 9.4,
        color: "Yellow",
		  evos: ["railie"],
        eggGroups: ["Undiscovered"],
    },
    railie: {
        num: 750027,
        species: "Railie",
        types: ["Ice", "Electric"],
        baseStats: {
            hp: 80,
            atk: 95,
            def: 77,
            spa: 95,
            spd: 90,
            spe: 105
        },
        abilities: {
            0: "Static Storm"
        },
        heightm: 1.145,
        weightkg: 143.25,
		  prevo: "snochu",
		  evoLevel: 42,
        color: "White",
        eggGroups: ["Fairy"],
    },
    railiemega: {
        num: 750027,
        species: "Railie-Mega",
        baseSpecies: "Railie",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ice", "Electric"],
        baseStats: {
            hp: 80,
            atk: 135,
            def: 77,
            spa: 135,
            spd: 90,
            spe: 125
        },
        abilities: {
            0: "Refrigerate"
        },
        heightm: 1.745,
        weightkg: 236.95,
        color: "White",
        eggGroups: ["Fairy"],
    },
    charmingkarp: {
        num: 750124,
        species: "Charmingkarp",
        types: ["Fire", "Water"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 34,
            atk: 43,
            def: 55,
            spa: 43,
            spd: 45,
            spe: 83
        },
        abilities: {
            0: "Nightlight"
        },
        heightm: 0.75,
        weightkg: 9.25,
        color: "Red",
		  evos: ["charatos"],
        eggGroups: ["Dragon"],
    },
    charatos: {
        num: 750028,
        species: "Charatos",
        types: ["Fire", "Water"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 97,
            atk: 115,
            def: 89,
            spa: 95,
            spd: 103,
            spe: 101
        },
        abilities: {
            0: "Dreaded Flames"
        },
        heightm: 4.1,
        weightkg: 162.75,
		  prevo: "charmingkarp",
		  evoLevel: 23,
        color: "Blue",
        eggGroups: ["Dragon"],
    },
    charatosmegay: {
        num: 750028,
        species: "Charatos-Mega-Y",
        baseSpecies: "Charatos",
        forme: "Mega",
        formeLetter: "M",
        types: ["Fire", "Water"],
        baseStats: {
            hp: 97,
            atk: 135,
            def: 89,
            spa: 145,
            spd: 133,
            spe: 101
        },
        abilities: {
            0: "Drought"
        },
        heightm: 4.1,
        weightkg: 172.75,
        color: "Blue",
        eggGroups: ["Dragon"],
    },

    charatosmegax: {
        num: 750028,
        species: "Charatos-Mega-X",
        baseSpecies: "Charatos",
        forme: "Mega",
        formeLetter: "M",
        types: ["Fire", "Dragon"],
        baseStats: {
            hp: 97,
            atk: 161,
            def: 122,
            spa: 116,
            spd: 103,
            spe: 101
        },
        abilities: {
            0: "Tough Claws"
        },
        heightm: 4.1,
        weightkg: 182.75,
        color: "Black",
        eggGroups: ["Dragon"],
    },

    charatosmegag: {
        num: 750028,
        species: "Charatos-Mega-G",
        baseSpecies: "Charatos",
        forme: "Mega",
        formeLetter: "M",
        types: ["Fire", "Dark"],
        baseStats: {
            hp: 97,
            atk: 145,
            def: 119,
            spa: 105,
            spd: 133,
            spe: 101
        },
        abilities: {
            0: "Mold Breaker"
        },
        heightm: 4.1,
        weightkg: 252.75,
        color: "Blue",
        eggGroups: ["Dragon"],
    },
    arosaur: {
        num: 750125,
        species: "Arosaur",
        types: ["Grass", "Steel"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 52,
            atk: 64,
            def: 89,
            spa: 57,
            spd: 67,
            spe: 42
        },
        abilities: {
            0: "Rocky Growth"
        },
        heightm: 0.55,
        weightkg: 33.45,
        color: "Gray",
		  evos: ["lairosaur"],
        eggGroups: ["Monster"],
    },
    lairosaur: {
        num: 750126,
        species: "Lairosaur",
        types: ["Grass", "Steel"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 70,
            atk: 86,
            def: 111,
            spa: 75,
            spd: 75,
            spe: 60
        },
        abilities: {
            0: "Rocky Growth"
        },
        heightm: 0.95,
        weightkg: 66.5,
        color: "Gray",
		  prevo: "arosaur",
		  evoLevel: 24,
		  evos: ["aggrosaur"],
        eggGroups: ["Monster"],
    },
    aggrosaur: {
        num: 750029,
        species: "Aggrosaur",
        types: ["Grass", "Steel"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 85,
            atk: 106,
            def: 141,
            spa: 90,
            spd: 90,
            spe: 75
        },
        abilities: {
            0: "Rocky Growth"
        },
        heightm: 2.05,
        weightkg: 230,
		  prevo: "lairosaur",
		  evoLevel: 37,
        color: "Gray",
        eggGroups: ["Monster"],
    },
    aggrosaurmegav: {
        num: 750029,
        species: "Aggrosaur-Mega-V",
        baseSpecies: "Aggrosaur",
        forme: "Mega",
        formeLetter: "M",
        types: ["Grass", "Steel"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 85,
            atk: 124,
            def: 181,
            spa: 112,
            spd: 110,
            spe: 75
        },
        abilities: {
            0: "Thick Fat"
        },
        heightm: 2.45,
        weightkg: 285.5,
        color: "Gray",
        eggGroups: ["Monster"],
    },

    aggrosaurmegaa: {
        num: 750029,
        species: "Aggrosaur-Mega-A",
        baseSpecies: "Aggrosaur",
        forme: "Mega",
        formeLetter: "M",
        types: ["Grass", "Steel"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 85,
            atk: 136,
            def: 191,
            spa: 90,
            spd: 110,
            spe: 75
        },
        abilities: {
            0: "Filter"
        },
        heightm: 2.15,
        weightkg: 265,
        color: "Gray",
        eggGroups: ["Monster"],
    },
    squirtroak: {
        num: 750127,
        species: "Squirtroak",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 54,
            atk: 63,
            def: 65,
            spa: 73,
            spd: 65,
            spe: 73
        },
        abilities: {
            0: "Torrent"
        },
        heightm: 0.4,
        weightkg: 8,
        color: "Blue",
		  evos: ["wartoadier"],
        eggGroups: ["Water 1"],
    },
    wartoadier: {
        num: 750128,
        species: "Wartoadier",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 71,
            atk: 78,
            def: 81,
            spa: 89,
            spd: 83,
            spe: 92
        },
        abilities: {
            0: "Torrent"
        },
        heightm: 0.8,
        weightkg: 16.7,
        color: "Blue",
		  prevo: "squirtroak",
		  evoLevel: 16,
		  evos: ["blastinja"],
        eggGroups: ["Water 1"],
    },
    blastinja: {
        num: 750030,
        species: "Blastinja",
        types: ["Water", "Dark"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 90,
            atk: 104,
            def: 98,
            spa: 109,
            spd: 103,
            spe: 115
        },
        abilities: {
            0: "Torrent"
        },
        heightm: 1.55,
        weightkg: 62.75,
		  prevo: "wartoadier",
		  evoLevel: 36,
        color: "Blue",
        eggGroups: ["Water 1"],
    },
    blastinjamega: {
        num: 750030,
        species: "Blastinja-Mega",
        baseSpecies: "Blastinja",
        forme: "Mega",
        formeLetter: "M",
        types: ["Water", "Dark"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 90,
            atk: 124,
            def: 118,
            spa: 159,
            spd: 113,
            spe: 115
        },
        abilities: {
            0: "Mega Launcher"
        },
        heightm: 1.55,
        weightkg: 78.35,
        color: "Blue",
        eggGroups: ["Water 1"],
    },

    skaria: {
        num: 750031,
        species: "Skaria",
        types: ["Steel", "Dragon"],
        baseStats: {
            hp: 80,
            atk: 85,
            def: 125,
            spa: 65,
            spd: 97,
            spe: 85
        },
        abilities: {
            0: "Pristine"
        },
        heightm: 1.395,
        weightkg: 35.55,
        color: "White",
        eggGroups: ["Flying"],
    },
    skariamega: {
        num: 750031,
        species: "Skaria-Mega",
        baseSpecies: "Skaria",
        forme: "Mega",
        formeLetter: "M",
        types: ["Steel", "Fairy"],
        baseStats: {
            hp: 80,
            atk: 125,
            def: 145,
            spa: 105,
            spd: 97,
            spe: 85
        },
        abilities: {
            0: "Pixilate"
        },
        heightm: 1.795,
        weightkg: 35.55,
        color: "White",
        eggGroups: ["Flying"],
    },
    mygara: {
        num: 750129,
        species: "Mygara",
        types: ["Fire", "Psychic"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 40,
            atk: 52,
            def: 31,
            spa: 102,
            spd: 60,
            spe: 101
        },
        abilities: {
            0: "Magical Flame"
        },
        heightm: 0.8,
        weightkg: 20.45,
        color: "Red",
		  evos: ["kadagma"],
        eggGroups: ["Undiscovered"],
    },
    kadagma: {
        num: 750130,
        species: "Kadagma",
        types: ["Fire", "Psychic"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 62,
            atk: 75,
            def: 53,
            spa: 120,
            spd: 87,
            spe: 109
        },
        abilities: {
            0: "Inner Body"
        },
        heightm: 1.3,
        weightkg: 50.5,
        color: "Red",
		  prevo: "mygara",
		  evoLevel: 23,
		  evos: ["magmozam"],
        eggGroups: ["Human-Like"],
    },
    magmozam: {
        num: 750032,
        species: "Magmozam",
        types: ["Fire", "Psychic"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 75,
            atk: 82,
            def: 66,
            spa: 140,
            spd: 105,
            spe: 111
        },
        abilities: {
            0: "Inner Body"
        },
        heightm: 1.55,
        weightkg: 58,
		  prevo: "kadagma",
		  evoLevel: 23,
        color: "Red",
        eggGroups: ["Human-Like"],
    },
    magmozammega: {
        num: 750032,
        species: "Magmozam-Mega",
        baseSpecies: "Magmozam",
        forme: "Mega",
        formeLetter: "M",
        types: ["Fire", "Psychic"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 75,
            atk: 82,
            def: 86,
            spa: 180,
            spd: 115,
            spe: 141
        },
        abilities: {
            0: "Trace"
        },
        heightm: 1.25,
        weightkg: 58,
        color: "Red",
        eggGroups: ["Human-Like"],
    },
    snogepi: {
        num: 750131,
        species: "Snogepi",
        types: ["Fairy", "Ice"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 52,
            atk: 35,
            def: 65,
            spa: 53,
            spd: 65,
            spe: 35
        },
        abilities: {
            0: "Serene Focus"
        },
        heightm: 0.5,
        weightkg: 9.15,
        color: "Gray",
		  evos: ["glakiss"],
        eggGroups: ["Undiscovered"],
    },
    glakiss: {
        num: 750033,
        species: "Glakiss",
        types: ["Fairy", "Ice"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 92,
            atk: 75,
            def: 97,
            spa: 110,
            spd: 107,
            spe: 90
        },
        abilities: {
            0: "Serene Focus"
        },
        heightm: 1.5,
        weightkg: 147.25,
        color: "Gray",
		  prevo: "snogepi",
		  evoLevel: 42,
        eggGroups: ["Undiscovered"],
    },
    glakissmega: {
        num: 750033,
        species: "Glakiss-Mega",
        baseSpecies: "Glakiss",
        forme: "Mega",
        formeLetter: "M",
        types: ["Fairy", "Ice"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 92,
            atk: 115,
            def: 97,
            spa: 150,
            spd: 107,
            spe: 110
        },
        abilities: {
            0: "Refigerate"
        },
        heightm: 1.9,
        weightkg: 240.95,
        color: "Gray",
        eggGroups: ["Fairy"],
    },
    magiranha: {
        num: 750132,
        species: "Magiranha",
        types: ["Water"],
        baseStats: {
            hp: 40,
            atk: 63,
            def: 45,
            spa: 45,
            spd: 25,
            spe: 83
        },
        abilities: {
            0: "Rattling Skin"
        },
        heightm: 0.85,
        weightkg: 15.4,
        color: "Red",
		  evos: ["sharpedos"],
        eggGroups: ["Water 2"],
    },
    sharpedos: {
        num: 750034,
        species: "Sharpedos",
        types: ["Water"],
        baseStats: {
            hp: 92,
            atk: 132,
            def: 69,
            spa: 87,
            spd: 80,
            spe: 98
        },
        abilities: {
            0: "Intimidating Fangs"
        },
        heightm: 4.15,
        weightkg: 161.9,
		  prevo: "magiranha",
		  evoLevel: 25,
        color: "Blue",
        eggGroups: ["Water 2"],
    },
    sharpedosmegas: {
        num: 750034,
        species: "Sharpedos-Mega-S",
        baseSpecies: "Sharpedos",
        forme: "Mega",
        formeLetter: "M",
        types: ["Water"],
        baseStats: {
            hp: 92,
            atk: 152,
            def: 99,
            spa: 102,
            spd: 105,
            spe: 108
        },
        abilities: {
            0: "Strong Jaw"
        },
        heightm: 4.85,
        weightkg: 203.4,
        color: "Blue",
        eggGroups: ["Water 2"],
    },

    sharpedosmegag: {
        num: 750034,
        species: "Sharpedos-Mega-G",
        baseSpecies: "Sharpedos",
        forme: "Mega",
        formeLetter: "M",
        types: ["Water", "Dark"],
        baseStats: {
            hp: 92,
            atk: 162,
            def: 99,
            spa: 97,
            spd: 110,
            spe: 98
        },
        abilities: {
            0: "Mold Breaker"
        },
        heightm: 4.15,
        weightkg: 241.9,
        color: "Blue",
        eggGroups: ["Water 2"],
    },
    growlee: {
        num: 750133,
        species: "Growlee",
        types: ["Normal", "Fire"],
        genderRatio: {
            M: 0.8125,
            F: 0.1875
        },
        baseStats: {
            hp: 62,
            atk: 73,
            def: 62,
            spa: 62,
            spd: 62,
            spe: 62
        },
        abilities: {
            0: "Flash and Adapt"
        },
        heightm: 0.5,
        weightkg: 12.75,
        color: "Brown",
		  evos: ["vapornine", "arceon"],
        eggGroups: ["Field"],
    },
    vapornine: {
        num: 750035,
        species: "Vapornine",
        types: ["Water", "Fire"],
        genderRatio: {
            M: 0.8125,
            F: 0.1875
        },
        baseStats: {
            hp: 120,
            atk: 97,
            def: 80,
            spa: 115,
            spd: 97,
            spe: 90
        },
        abilities: {
            0: "Intimidating Absorption"
        },
        heightm: 1.45,
        weightkg: 92,
		  prevo: "growlee",
		  evoLevel: 1,
        color: "Blue",
        eggGroups: ["Field"],
    },
    pidgetot: {
        num: 750036,
        species: "Pidgetot",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 89,
            atk: 82,
            def: 70,
            spa: 91,
            spd: 66,
            spe: 106
        },
        abilities: {
            0: "Keen Feet"
        },
        heightm: 1.005,
        weightkg: 20.7,
        color: "Brown",
        eggGroups: ["Flying"],
    },
    pidgetotmega: {
        num: 750036,
        species: "Pidgetot-Mega",
        baseSpecies: "Pidgetot",
        forme: "Mega",
        formeLetter: "M",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 89,
            atk: 82,
            def: 75,
            spa: 156,
            spd: 76,
            spe: 126
        },
        abilities: {
            0: "No Guard"
        },
        heightm: 1.705,
        weightkg: 31.7,
        color: "Brown",
        eggGroups: ["Flying"],
    },
    goracanion: {
        num: 750037,
        species: "Goracanion",
        types: ["Fire", "Water"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 67,
            atk: 97,
            def: 112,
            spa: 140,
            spd: 90,
            spe: 75
        },
        abilities: {
            0: "Swift Absorb"
        },
        heightm: 1.75,
        weightkg: 108.8,
        color: "Red",
        eggGroups: ["Undiscovered"],
    },
    klazor: {
        num: 750038,
        species: "Klazor",
        types: ["Bug", "Steel"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 75,
            atk: 105,
            def: 100,
            spa: 82,
            spd: 85,
            spe: 61
        },
        abilities: {
            0: "Math Surge"
        },
        heightm: 1.205,
        weightkg: 84.5,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },
    klazormega: {
        num: 750038,
        species: "Klazor-Mega",
        baseSpecies: "Klazor",
        forme: "Mega",
        formeLetter: "M",
        types: ["Bug", "Steel"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 75,
            atk: 125,
            def: 140,
            spa: 92,
            spd: 105,
            spe: 71
        },
        abilities: {
            0: "Technician"
        },
        heightm: 1.8,
        weightkg: 117.5,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },
    pidgeyu: {
        num: 750135,
        species: "Pidgeyu",
        types: ["Water", "Normal"],
        baseStats: {
            hp: 40,
            atk: 45,
            def: 50,
            spa: 60,
            spd: 49,
            spe: 80
        },
        abilities: {
            0: "Natural Eye"
        },
        heightm: 0.55,
        weightkg: 18.15,
        color: "Brown",
		  evos: ["pidgemie"],
        eggGroups: ["Undiscovered"],
    },
    pidgemie: {
        num: 750039,
        species: "Pidgemie",
        types: ["Water", "Normal"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 84,
            atk: 77,
            def: 80,
            spa: 95,
            spd: 80,
            spe: 122
        },
        abilities: {
            0: "Natural Eye"
        },
        heightm: 1.295,
        weightkg: 59.75,
        color: "Purple",
        eggGroups: ["Undiscovered"],
    },
    pidgemiemega: {
        num: 750039,
        species: "Pidgemie-Mega",
        baseSpecies: "Pidgemie",
        forme: "Mega",
        formeLetter: "M",
        types: ["Water", "Normal"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 84,
            atk: 77,
            def: 85,
            spa: 160,
            spd: 90,
            spe: 142
        },
        abilities: {
            0: "No Guard"
        },
        heightm: 1.995,
        weightkg: 70.75,
        color: "Purple",
        eggGroups: ["Undiscovered"],
    },
    porywick: {
        num: 750136,
        species: "Porywick",
        types: ["Normal", "Ghost"],
        gender: "N",
        baseStats: {
            hp: 57,
            atk: 45,
            def: 67,
            spa: 85,
            spd: 70,
            spe: 40
        },
        abilities: {
            0: "Hot Copy"
        },
        heightm: 0.55,
        weightkg: 19.8,
        color: "White",
		  evos: ["lampory"],
        eggGroups: ["Undiscovered"],
    },
    lampory: {
        num: 750137,
        species: "Lampory",
        types: ["Normal", "Ghost"],
        gender: "N",
        baseStats: {
            hp: 82,
            atk: 60,
            def: 77,
            spa: 108,
            spd: 77,
            spe: 77
        },
        abilities: {
            0: "Flame Essence"
        },
        heightm: 0.6,
        weightkg: 22.75,
        color: "Black",
		  prevo: "porywick",
		  evoLevel: 41,
		  evos: ["porylure"],
        eggGroups: ["Undiscovered"],
    },
    porylure: {
        num: 750040,
        species: "Porylure",
        types: ["Normal", "Ghost"],
        gender: "N",
        baseStats: {
            hp: 82,
            atk: 67,
            def: 82,
            spa: 148,
            spd: 82,
            spe: 105
        },
        abilities: {
            0: "Flame Essence"
        },
        heightm: 0.95,
        weightkg: 34.15,
		  prevo: "lampory",
		  evoLevel: 41,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    starchop: {
        num: 750138,
        species: "Starchop",
        types: ["Water", "Fighting"],
        gender: "N",
        baseStats: {
            hp: 55,
            atk: 72,
            def: 52,
            spa: 60,
            spd: 47,
            spe: 65
        },
        abilities: {
            0: "Natural Guard"
        },
        heightm: 0.8,
        weightkg: 27,
        color: "Brown",
		  evos: ["starchamp"],
        eggGroups: ["Undiscovered"],
    },
    starchamp: { //Starchamp	Starmie	Machamp	Water	Fighting	75	122	82	82	85	105	551	Natural Guard
        num: 750041,
        species: "Starchamp",
        types: ["Water", "Fighting"],
        gender: "N",
        baseStats: {
            hp: 75,
            atk: 122,
            def: 82,
            spa: 82,
            spd: 85,
            spe: 105
        },
        abilities: {
            0: "Natural Guard"
        },
        heightm: 1.35,
        weightkg: 105,
		  prevo: "starchop",
		  evoLevel: 25,
        color: "Purple",
        eggGroups: ["Undiscovered"],
    },
    grimo: {
        num: 750139,
        species: "Grimo",
        types: ["Electric", "Poison"],
        baseStats: {
            hp: 70,
            atk: 80,
            def: 52,
            spa: 47,
            spd: 52,
            spe: 47
        },
        abilities: {
            0: "Sticky Float"
        },
        heightm: 0.55,
        weightkg: 15.15,
        color: "Purple",
		  evos: ["eek"],
        eggGroups: ["Amorphous"],
    },
      eek: {
        num: 750042,
        species: "Eek",
        types: ["Electric", "Poison"],
        baseStats: {
            hp: 105,
            atk: 120,
            def: 87,
            spa: 95,
            spd: 100,
            spe: 60
        },
        abilities: {
            0: "Sticky Float"
        },
        heightm: 1.65,
        weightkg: 55.25,
		  prevo: "grimo",
		  evoLevel: 38,
        color: "Purple",
        eggGroups: ["Amorphous"],
    },
    hitachi: {
        num: 750043,
        species: "Hitachi",
        types: ["Fire", "Steel"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 113,
            spa: 130,
            spd: 113,
            spe: 81
        },
        abilities: {
            0: "Serene Fire"
        },
        heightm: 1,
        weightkg: 215.55,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
    },
    shaymizard: {
        num: 750044,
        species: "Shaymizard",
        types: ["Fire", "Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 89,
            atk: 102,
            def: 89,
            spa: 114,
            spd: 92,
            spe: 120
        },
        abilities: {
            0: "Healing Blaze"
        },
        heightm: 0.95,
        weightkg: 46.3,
        color: "Green",
        eggGroups: ["Undiscovered"],
    },
    shaymizardmegax: {
        num: 750044,
        species: "Shaymizard-Mega-X",
        baseSpecies: "Shaymizard",
        forme: "Mega-X",
        formeLetter: "M",
        types: ["Fire", "Dragon"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 89,
            atk: 148,
            def: 122,
            spa: 135,
            spd: 92,
            spe: 120
        },
        abilities: {
            0: "Tough Claws"
        },
        heightm: 1.8,
        weightkg: 105.5,
        color: "Green",
        eggGroups: ["Undiscovered"],
    },
    shaymizardmegay: {
        num: 750044,
        species: "Shaymizard-Mega-Y",
        baseSpecies: "Shaymizard",
        forme: "Mega-Y",
        formeLetter: "M",
        types: ["Fire", "Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 89,
            atk: 122,
            def: 89,
            spa: 164,
            spd: 122,
            spe: 120
        },
        abilities: {
            0: "Drought"
        },
        heightm: 1.8,
        weightkg: 105.5,
        color: "Green",
        eggGroups: ["Undiscovered"],
    },
    ferroedge: {
        num: 750140,
        species: "Ferroedge",
        types: ["Steel", "Grass"],
        baseStats: {
            hp: 55,
            atk: 80,
            def: 100,
            spa: 34,
            spd: 70,
            spe: 24
        },
        abilities: {
            0: "Barb Guard"
        },
        heightm: 0.7,
        weightkg: 10.4,
        color: "Brown",
		  evos: ["ferroslash"],
        eggGroups: ["Mineral"],
    },
    ferroslash: {
        num: 750045,
        species: "Ferroslash",
		  baseForme: "Shield",
        types: ["Steel", "Grass"],
        baseStats: {
            hp: 77,
            atk: 82,
            def: 150,
            spa: 62,
            spd: 133,
            spe: 50
        },
        abilities: {
            0: "Barb Stance"
        },
        heightm: 1.345,
        weightkg: 81.5,
		  prevo: "ferroedge",
		  evoLevel: 37,
        color: "Brown",
        eggGroups: ["Mineral"],
    },
    ferroslashblade: {
        num: 750045,
        species: "Ferroslash-Blade",
        baseSpecies: "Ferroslash",
        forme: "Blade",
        formeLetter: "M",
        types: ["Steel", "Grass"],
        baseStats: {
            hp: 77,
            atk: 150,
            def: 82,
            spa: 133,
            spd: 62,
            spe: 50
        },
        abilities: {
            0: "Barb Stance"
        },
        heightm: 1.345,
        weightkg: 81.5,
        color: "Brown",
        eggGroups: ["Mineral"],
    },
    chaxe: {
        num: 750141,
        species: "Chaxe",
        types: ["Fire", "Dragon"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 47,
            atk: 83,
            def: 56,
            spa: 55,
            spd: 50,
            spe: 72
        },
        abilities: {
            0: "Power-Up Pinch"
        },
        heightm: 0.6,
        weightkg: 13.25,
        color: "Red",
		  evos: ["fraxuleon"],
        eggGroups: ["Monster", "Dragon"],
    },
    fraxuleon: {
        num: 750142,
        species: "Fraxuleon",
        types: ["Fire", "Dragon"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 72,
            atk: 100,
            def: 74,
            spa: 70,
            spd: 67,
            spe: 83
        },
        abilities: {
            0: "Power-Up Pinch"
        },
        heightm: 1.05,
        weightkg: 27.5,
		  prevo: "chaxe",
		  evoLevel: 27,
        color: "Red",
		  evos: ["hazard"],
        eggGroups: ["Monster", "Dragon"],
    },
    hazard: {
        num: 750046,
        species: "Hazard",
        types: ["Fire", "Dragon"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 87,
            atk: 125,
            def: 94,
            spa: 94,
            spd: 82,
            spe: 108
        },
        abilities: {
            0: "Power-up Pinch"
        },
        heightm: 1.75,
        weightkg: 98,
		  prevo: "fraxuleon",
		  evoLevel: 42,
        color: "Red",
        eggGroups: ["Monster", "Dragon"],
    },
    hazardmegax: {
        num: 750046,
        species: "Hazard-Mega-X",
        baseSpecies: "Hazard",
        forme: "Mega-X",
        formeLetter: "M",
        types: ["Fire", "Dragon"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 87,
            atk: 171,
            def: 127,
            spa: 115,
            spd: 82,
            spe: 108
        },
        abilities: {
            0: "Tough Claws"
        },
        heightm: 1.75,
        weightkg: 118,
        color: "Black",
        eggGroups: ["Monster", "Dragon"],
    },
    hazardmegay: {
        num: 750046,
        species: "Hazard-Mega-Y",
        baseSpecies: "Hazard",
        forme: "Mega-Y",
        formeLetter: "M",
        types: ["Fire", "Dragon"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 87,
            atk: 145,
            def: 94,
            spa: 144,
            spd: 112,
            spe: 108
        },
        abilities: {
            0: "Drought"
        },
        heightm: 1.75,
        weightkg: 108,
        color: "Red",
        eggGroups: ["Monster", "Dragon"],
    },
    tyklink: {
        num: 750143,
        species: "Tyklink",
        types: ["Steel", "Fighting"],
        gender: "N",
        baseStats: {
            hp: 47,
            atk: 83,
            def: 56,
            spa: 55,
            spd: 50,
            spe: 72
        },
        abilities: {
            0: "Super Guts"
        },
        heightm: 0.5,
        weightkg: 21,
        color: "Purple",
		  evos: ["hitmonklang"],
        eggGroups: ["Undiscovered"],
    },
    hitmonklang: {
        num: 750047,
        species: "Hitmonklang",
        types: ["Steel", "Fighting"],
        gender: "N",
        baseStats: {
            hp: 55,
            atk: 115,
            def: 110,
            spa: 52,
            spd: 105,
            spe: 90
        },
        abilities: {
            0: "Electrotechnic"
        },
        heightm: 1.005,
        weightkg: 64.5,
		  prevo: "tyklink",
		  evoLevel: 32,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },
    inkduck: {
        num: 750144,
        species: "Inkduck",
        types: ["Water", "Dark"],
        baseStats: {
            hp: 60,
            atk: 65,
            def: 55,
            spa: 65,
            spd: 53,
            spe: 55
        },
        abilities: {
            0: "Atmospheric Perversion"
        },
        heightm: 0.6,
        weightkg: 11.55,
        color: "Blue",
		  evos: ["maladuck"],
        eggGroups: ["Water 1"],
    },
    maladuck: {
        num: 750048,
        species: "Maladuck",
        types: ["Water", "Dark"],
        baseStats: {
            hp: 93,
            atk: 97,
            def: 93,
            spa: 91,
            spd: 87,
            spe: 89
        },
        abilities: {
            0: "Atmospheric Perversion"
        },
        heightm: 1.6,
        weightkg: 61.8,
		  prevo: "inkduck",
		  evoLevel: 32,
        color: "Blue",
        eggGroups: ["Water 1"],
    },
    yangarde: {
        num: 750049,
        species: "Yangarde",
        types: ["Dragon", "Bug"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 97,
            atk: 111,
            def: 118,
            spa: 98,
            spd: 85,
            spe: 95
        },
        abilities: {
            0: "Speed Break"
        },
        heightm: 3.455,
        weightkg: 178.25,
        color: "Green",
        eggGroups: ["Undiscovered"],
    },
    suirizion: {
        num: 750050,
        species: "Suirizion",
        types: ["Grass", "Water"],
        gender: "N",
        baseStats: {
            hp: 104,
            atk: 82,
            def: 100,
            spa: 110,
            spd: 122,
            spe: 100
        },
        abilities: {
            0: "Justice Power"
        },
        heightm: 2.01,
        weightkg: 193.5,
        color: "Green",
        eggGroups: ["Undiscovered"],
    },
    raillish: {
        num: 750145,
        species: "Raillish",
        types: ["Ghost", "Fairy"],
        baseStats: {
            hp: 55,
            atk: 45,
            def: 50,
            spa: 75,
            spd: 70,
            spe: 50
        },
        abilities: {
            0: "Cursed Trace"
        },
        heightm: 0.8,
        weightkg: 19.8,
		  evos: ["jellivoir"],
        color: "White",
        eggGroups: ["Amorphous"],
    },
    jellivoir: {
        num: 750051,
        species: "Jellivoir",
        types: ["Ghost", "Fairy"],
        baseStats: {
            hp: 94,
            atk: 72,
            def: 77,
            spa: 115,
            spd: 120,
            spe: 80
        },
        abilities: {
            0: "Cursed Trace"
        },
        heightm: 1.905,
        weightkg: 91.7,
		  prevo: "raillish",
		  evoLevel: 32,
        color: "White",
        eggGroups: ["Undiscovered"],
    },
    jellivoirmega: {
        num: 750051,
        species: "Jellivoir-Mega",
        baseSpecies: "Jellivoir",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ghost", "Fairy"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 94,
            atk: 92,
            def: 77,
            spa: 155,
            spd: 140,
            spe: 100
        },
        abilities: {
            0: "Pixilate"
        },
        heightm: 1.905,
        weightkg: 91.7,
        color: "White",
        eggGroups: ["Amorphous"],
    },
    babelum: {
        num: 750146,
        species: "Babelum",
        types: ["Steel", "Flying"],
        baseStats: {
            hp: 50,
            atk: 52,
            def: 57,
            spa: 32,
            spd: 60,
            spe: 50
        },
        abilities: {
            0: "Clear Focus"
        },
        heightm: 0.7,
        weightkg: 51.35,
		  evos: ["angol"],
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    angol: {
        num: 750147,
        species: "Angol",
        types: ["Steel", "Flying"],
        baseStats: {
            hp: 67,
            atk: 97,
            def: 95,
            spa: 60,
            spd: 77,
            spe: 80
        },
        abilities: {
            0: "Clear Focus"
        },
        heightm: 0.7,
        weightkg: 128.75,
		  prevo: "babelum",
		  evoLevel: 21,
		  evos: ["metabat"],
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    metabat: {
        num: 750052,
        species: "Metabat",
        types: ["Steel", "Flying"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 82,
            atk: 132,
            def: 115,
            spa: 82,
            spd: 85,
            spe: 110
        },
        abilities: {
            0: "Clear Focus"
        },
        heightm: 1.7,
        weightkg: 312.5,
		  prevo: "babelum",
		  evoLevel: 45,
        color: "Purple",
        eggGroups: ["Undiscovered"],
    },
    metabatmega: {
        num: 750052,
        species: "Metabat-Mega",
        baseSpecies: "Metabat",
        forme: "Mega",
        formeLetter: "M",
        types: ["Steel", "Flying"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 82,
            atk: 142,
            def: 135,
            spa: 92,
            spd: 105,
            spe: 150
        },
        abilities: {
            0: "Tough Claws"
        },
        heightm: 2.6,
        weightkg: 705.4,
        color: "Purple",
        eggGroups: ["Undiscovered"],
    },
    dartios: {
        num: 750053,
        species: "Dartios",
        types: ["Fire", "Dragon"],
        gender: "M",
        baseStats: {
            hp: 100,
            atk: 130,
            def: 70,
            spa: 80,
            spd: 85,
            spe: 113
        },
        abilities: {
            0: "Sheer Flight"
        },
        heightm: 1.655,
        weightkg: 76.45,
        color: "Red",
        eggGroups: ["Undiscovered"],
    },
    dartiosmega: {
        num: 750053,
        species: "Dartios-Mega",
        baseSpecies: "Dartios",
        forme: "Mega",
        formeLetter: "M",
        types: ["Fire", "Dragon"],
        gender: "M",
        baseStats: {
            hp: 100,
            atk: 170,
            def: 90,
            spa: 110,
            spd: 95,
            spe: 133
        },
        abilities: {
            0: "Levitate"
        },
        heightm: 1.955,
        weightkg: 86.45,
        color: "Red",
        eggGroups: ["Undiscovered"],
    },
    grenheatja: {
        num: 750054,
        species: "Grenheatja",
        types: ["Water", "Fire"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 81,
            atk: 92,
            def: 92,
            spa: 126,
            spd: 92,
            spe: 119
        },
        abilities: {
            0: "Evaporation"
        },
        heightm: 1.6,
        weightkg: 235,
        color: "Brown",
        eggGroups: ["Undiscovered"],
    },
    moltie: {
        num: 750055,
        species: "Moltie",
        types: ["Fairy", "Fire"],
        gender: "N",
        baseStats: {
            hp: 90,
            atk: 100,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 79
        },
        abilities: {
            0: "Calamity"
        },
        heightm: 1.36,
        weightkg: 34.4,
        color: "Pink",
        eggGroups: ["Undiscovered"],
    },
    moltiemega: {
        num: 750055,
        species: "Moltie-Mega",
        baseSpecies: "Moltie",
        forme: "Mega",
        formeLetter: "M",
        types: ["Fairy", "Fire"],
        gender: "N",
        baseStats: {
            hp: 90,
            atk: 160,
            def: 80,
            spa: 180,
            spd: 100,
            spe: 139
        },
        abilities: {
            0: "Magic Bounce"
        },
        heightm: 1.76,
        weightkg: 53.4,
        color: "Pink",
        eggGroups: ["Undiscovered"],
    },
    belpet: {
        num: 750148,
        species: "Belpet",
        types: ["Ghost", "Steel"],
        baseStats: {
            hp: 42,
            atk: 75,
            def: 59,
            spa: 49,
            spd: 49,
            spe: 52
        },
        abilities: {
            0: "Hard Body"
        },
        heightm: 0.6,
        weightkg: 48.75,
		  evos: ["banegross"],
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    banegross: {
        num: 750056,
        species: "Banegross",
        types: ["Ghost", "Steel"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 72,
            atk: 135,
            def: 97,
            spa: 89,
            spd: 86,
            spe: 87
        },
        abilities: {
            0: "Hard Body"
        },
        heightm: 1.345,
        weightkg: 281.25,
		  prevo: "belpet",
		  evoLevel: 35,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    banegrossmegax: {
        num: 750056,
        species: "Banegross-Mega-X",
        baseSpecies: "Banegross",
        forme: "Mega-X",
        formeLetter: "M",
        types: ["Ghost", "Steel"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 72,
            atk: 145,
            def: 117,
            spa: 99,
            spd: 106,
            spe: 127
        },
        abilities: {
            0: "Tough Claws"
        },
        heightm: 2.245,
        weightkg: 674.15,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    banegrossmegay: {
        num: 750056,
        species: "Banegross-Mega-Y",
        baseSpecies: "Banegross",
        forme: "Mega-Y",
        formeLetter: "M",
        types: ["Ghost", "Steel"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 72,
            atk: 185,
            def: 107,
            spa: 99,
            spd: 106,
            spe: 97
        },
        abilities: {
            0: "Prankster"
        },
        heightm: 1.445,
        weightkg: 281.75,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    herasir: {
        num: 750057,
        species: "Herasir",
        types: ["Fighting", "Bug"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 82,
            atk: 135,
            def: 97,
            spa: 57,
            spd: 92,
            spe: 95
        },
        abilities: {
            0: "Gut Breaker"
        },
        heightm: 1.5,
        weightkg: 54.5,
        color: "Blue",
        eggGroups: ["Bug"],
    },
    herasirmegah: {
        num: 750057,
        species: "Herasir-Mega-H",
        baseSpecies: "Herasir",
        forme: "Mega-H",
        formeLetter: "M",
        types: ["Fighting", "Bug"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 82,
            atk: 195,
            def: 137,
            spa: 57,
            spd: 102,
            spe: 85
        },
        abilities: {
            0: "Skill Link"
        },
        heightm: 1.7,
        weightkg: 63,
        color: "Blue",
        eggGroups: ["Bug"],
    },
    herasirmegap: {
        num: 750057,
        species: "Herasir-Mega-P",
        baseSpecies: "Herasir",
        forme: "Mega-P",
        formeLetter: "M",
        types: ["Fighting", "Bug"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 82,
            atk: 155,
            def: 117,
            spa: 67,
            spd: 102,
            spe: 115
        },
        abilities: {
            0: "Aerilate"
        },
        heightm: 1.7,
        weightkg: 58.5,
        color: "Blue",
        eggGroups: ["Bug"],
    },
    misdreavalts: {
        num: 750149,
        species: "Misdreavalts",
        types: ["Fairy", "Ghost"],
        baseStats: {
            hp: 49,
            atk: 47,
            def: 47,
            spa: 80,
            spd: 65,
            spe: 77
        },
        abilities: {
            0: "Synchofloat"
        },
        heightm: 0.55,
        weightkg: 3.8,
		  evos: ["mismagivoir"],
        color: "White",
        eggGroups: ["Amorphous"],
    },
    mismagivoir: {
        num: 750058,
        species: "Mismagivoir",
        types: ["Fairy", "Ghost"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 74,
            atk: 72,
            def: 72,
            spa: 125,
            spd: 120,
            spe: 102
        },
        abilities: {
            0: "Synchofloat"
        },
        heightm: 1.245,
        weightkg: 26.4,
		  prevo: "misdreavalts",
		  evoLevel: 25,
        color: "Purple",
        eggGroups: ["Undiscovered"],
    },
    mismagivoirmega: {
        num: 750058,
        species: "Mismagivoir-Mega",
        baseSpecies: "Mismagivoir",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ghost", "Fairy"],
        baseStats: {
            hp: 74,
            atk: 92,
            def: 92,
            spa: 165,
            spd: 140,
            spe: 122
        },
        abilities: {
            0: "Pixilate"
        },
        heightm: 1.245,
        weightkg: 26.4,
        color: "Purple",
        eggGroups: ["Amorphous"],
    },
    harem: {
        num: 750059,
        species: "Harem",
        types: ["Dragon", "Ice"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 100,
            atk: 158,
            def: 90,
            spa: 110,
            spd: 80,
            spe: 101
        },
        abilities: {
            0: "Overwhelming Presence"
        },
        heightm: 2.4,
        weightkg: 215.25,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },
    mana: {
        num: 750060,
        species: "Mana",
        types: ["Ghost", "Electric"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 75,
            atk: 92,
            def: 80,
            spa: 127,
            spd: 95,
            spe: 107
        },
        abilities: {
            0: "Magician's Wand"
        },
        heightm: 1.005,
        weightkg: 24.6,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
    },
    manamega: {
        num: 750060,
        species: "Mana-Mega",
        baseSpecies: "Mana",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ghost", "Electric"],
        baseStats: {
            hp: 75,
            atk: 92,
            def: 100,
            spa: 157,
            spd: 115,
            spe: 137
        },
        abilities: {
            0: "Intimidate"
        },
        heightm: 1.5,
        weightkg: 90.0,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
    },
    lucharama: {
        num: 750061,
        species: "Lucharama",
        types: ["Fighting", "Flying"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 121,
            atk: 116,
            def: 77,
            spa: 67,
            spd: 71,
            spe: 94
        },
        abilities: {
            0: "Clean Match"
        },
        heightm: 1.55,
        weightkg: 137.65,
        color: "Red",
        eggGroups: ["Undiscovered"],
    },
    klip: {
        num: 750150,
        species: "Klip",
        types: ["Water", "Steel"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 45,
            atk: 77,
            def: 60,
            spa: 42,
            spd: 55,
            spe: 50
        },
        abilities: {
            0: "Currential Disruption"
        },
        heightm: 0.35,
        weightkg: 14.3,
		  evos: ["klomp"],
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },
    klomp: {
        num: 750151,
        species: "Klomp",
        types: ["Water", "Steel"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 70,
            atk: 102,
            def: 85,
            spa: 68,
            spd: 80,
            spe: 56
        },
        abilities: {
            0: "Positive Growth"
        },
        heightm: 0.65,
        weightkg: 39.5,
		  evos: ["swank"],
		  prevo: "klip",
		  evoLevel: 27,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },
    swank: {
        num: 750062,
        species: "Swank",
        types: ["Water", "Steel"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 85,
            atk: 125,
            def: 105,
            spa: 80,
            spd: 90,
            spe: 81
        },
        abilities: {
            0: "Positive Growth"
        },
        heightm: 1.055,
        weightkg: 81.45,
		  prevo: "klomp",
		  evoLevel: 42,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },
    swankmega: {
        num: 750062,
        species: "Swank-Mega",
        baseSpecies: "Swank",
        forme: "Mega",
        formeLetter: "M",
        types: ["Water", "Steel"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 85,
            atk: 165,
            def: 125,
            spa: 90,
            spd: 110,
            spe: 91
        },
        abilities: {
            0: "Swift Swim"
        },
        heightm: 1.455,
        weightkg: 101.55,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },
    casting: {
        num: 750063,
        species: "Casting",
        types: ["Poison", "Normal"],
        baseStats: {
            hp: 78,
            atk: 90,
            def: 105,
            spa: 88,
            spd: 80,
            spe: 75
        },
        abilities: {
            0: "Monsoon"
        },
        heightm: 0.745,
        weightkg: 5.15,
        color: "Gray",
        eggGroups: ["Amorphous"],
        otherFormes: ["castingsunny", "castingrainy", "castingsnowy"],
    },
    castingsunny: {
        num: 750063,
        species: "Casting-Sunny",
        baseSpecies: "Casting",
        forme: "Sunny",
        formeLetter: "S",
        types: ["Poison", "Fire"],
        baseStats: {
            hp: 78,
            atk: 90,
            def: 105,
            spa: 88,
            spd: 80,
            spe: 75
        },
        abilities: {
            0: "Monsoon"
        },
        heightm: 0.745,
        weightkg: 5.15,
        color: "Red",
        eggGroups: ["Amorphous"],
    },
    castingrainy: {
        num: 750063,
        species: "Casting-Rainy",
        baseSpecies: "Casting",
        forme: "Rainy",
        formeLetter: "R",
        types: ["Poison", "Water"],
        baseStats: {
            hp: 78,
            atk: 90,
            def: 105,
            spa: 88,
            spd: 80,
            spe: 75
        },
        abilities: {
            0: "Monsoon"
        },
        heightm: 0.745,
        weightkg: 5.15,
        color: "Blue",
        eggGroups: ["Amorphous"],
    },
    castingsnowy: {
        num: 750063,
        species: "Casting-Snowy",
        baseSpecies: "Casting",
        forme: "Snowy",
        formeLetter: "S",
        types: ["Poison", "Ice"],
        baseStats: {
            hp: 78,
            atk: 90,
            def: 105,
            spa: 88,
            spd: 80,
            spe: 75
        },
        abilities: {
            0: "Monsoon"
        },
        heightm: 0.745,
        weightkg: 5.15,
        color: "White",
        eggGroups: ["Amorphous"],
    },
    sablemimez: {
        num: 750064,
        species: "Sablemimez",
        types: ["Ghost", "Fairy"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 55,
            atk: 70,
            def: 80,
            spa: 92,
            spd: 102,
            spe: 80
        },
        abilities: {
            0: "Slow 'n' Steady"
        },
        heightm: 0.905,
        weightkg: 32.75,
        color: "Purple",
        eggGroups: ["Human-Like"],
    },
    sablemimezmega: {
        num: 750064,
        species: "Sablemimez-Mega",
        baseSpecies: "Sablemimez",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ghost", "Fairy"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 55,
            atk: 80,
            def: 130,
            spa: 112,
            spd: 152,
            spe: 50
        },
        abilities: {
            0: "Magic Bounce"
        },
        heightm: 0.905,
        weightkg: 182.75,
        color: "Purple",
        eggGroups: ["Human-Like"],
    },
    aegilene: {
        num: 750065,
        species: "Aegilene",
		  baseForme: "Shield",
        types: ["Steel", "Bug"],
        gender: "N",
        baseStats: {
            hp: 65,
            atk: 85,
            def: 132,
            spa: 85,
            spd: 132,
            spe: 99
        },
        abilities: {
            0: "Error Macro"
        },
        heightm: 1.6,
        weightkg: 67.75,
        color: "Brown",
		  otherFormes: ["aegilineblade"],
        eggGroups: ["Undiscovered"],
    },
	    aegileneblade: {
        num: 750066,
        species: "Aegilene-Blade",
        baseSpecies: "Aegilene",
        forme: "Blade",
        formeLetter: "B",
        types: ["Steel", "Bug"],
        gender: "N",
        baseStats: {
            hp: 65,
            atk: 132,
            def: 85,
            spa: 132,
            spd: 85,
            spe: 99
        },
        abilities: {
            0: "Error Macro"
        },
        heightm: 1.6,
        weightkg: 67.75,
        color: "Brown",
        eggGroups: ["Undiscovered"],
    },
    houndlion: {
        num: 750066,
        species: "Houndlion",
        types: ["Dark", "Steel"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 83,
            atk: 90,
            def: 98,
            spa: 120,
            spd: 76,
            spe: 112
        },
        abilities: {
            0: "Justified Fire"
        },
        heightm: 1.755,
        weightkg: 142.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    houndlionmega: {
        num: 750066,
        species: "Houndlion-Mega",
        baseSpecies: "Houndlion",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dark", "Steel"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 83,
            atk: 90,
            def: 138,
            spa: 150,
            spd: 86,
            spe: 132
        },
        abilities: {
            0: "Solar Power"
        },
        heightm: 2.255,
        weightkg: 158,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    loppeye: {
        num: 750067,
        species: "Loppeye",
        types: ["Ghost", "Normal"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 67,
            atk: 85,
            def: 89,
            spa: 69,
            spd: 91,
            spe: 87
        },
        abilities: {
            0: "Late Bloomer"
        },
        heightm: 0.85,
        weightkg: 22.15,
        color: "Purple",
        eggGroups: ["Human-Like"],
    },


    loppeyemegax: {
        num: 750067,
        species: "Loppeye-Mega-X",
        baseSpecies: "Loppeye",
        forme: "Mega-X",
        formeLetter: "M",
        types: ["Ghost", "Normal"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 67,
            atk: 95,
            def: 139,
            spa: 89,
            spd: 141,
            spe: 57
        },
        abilities: {
            0: "Magic Bounce"
        },
        heightm: 0.85,
        weightkg: 172.15,
        color: "Purple",
        eggGroups: ["Human-Like"],
    },
    loppeyemegay: {
        num: 750067,
        species: "Loppeye-Mega-Y",
        baseSpecies: "Loppeye",
        forme: "Mega-Y",
        formeLetter: "M",
        types: ["Ghost", "Fighting"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 67,
            atk: 145,
            def: 99,
            spa: 69,
            spd: 91,
            spe: 117
        },
        abilities: {
            0: "Scrappy"
        },
        heightm: 0.95,
        weightkg: 17.15,
        color: "Purple",
        eggGroups: ["Human-Like"],
    },
    slowdon: {
        num: 750152,
        species: "Slowdon",
        types: ["Water", "Steel"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 70,
            atk: 102,
            def: 85,
            spa: 68,
            spd: 80,
            spe: 56
        },
        abilities: {
            0: "Resuscitate"
        },
        heightm: 0.85,
        weightkg: 46.5,
        color: "Gray",
		  evos: ["bastioking"],
        eggGroups: ["Monster"],
    },
    bastioking: {
        num: 750068,
        species: "Bastioking",
        types: ["Water", "Steel"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 88,
            atk: 74,
            def: 134,
            spa: 84,
            spd: 134,
            spe: 40
        },
        abilities: {
            0: "Sturdy Tempo"
        },
        heightm: 1.655,
        weightkg: 114.5,
		  prevo: "slowdon",
		  evoLevel: 30,
        color: "Gray",
        eggGroups: ["Monster"],
    },
    peatran: {
        num: 750069,
        species: "Peatran",
        types: ["Fire", "Flying"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 87,
            atk: 85,
            def: 90,
            spa: 120,
            spd: 88,
            spe: 109
        },
        abilities: {
            0: "Tangled Flames"
        },
        heightm: 1.6,
        weightkg: 234.75,
        color: "Red",
        eggGroups: ["Undiscovered"],
        otherFormes: ["peatranmega"],
    },
    peatranmega: {
        num: 750069,
        species: "Peatran-Mega",
        baseSpecies: "Peatran",
        forme: "Mega",
        formeLetter: "M",
        types: ["Fire", "Flying"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 87,
            atk: 85,
            def: 95,
            spa: 185,
            spd: 98,
            spe: 129
        },
        abilities: {
            0: "No Guard"
        },
        heightm: 1.6,
        weightkg: 245.75,
        color: "Red",
        eggGroups: ["Undiscovered"],
    },
    manatar: {
        num: 750070,
        species: "Manatar",
        types: ["Water", "Dark"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 100,
            atk: 117,
            def: 105,
            spa: 117,
            spd: 100,
            spe: 100
        },
        abilities: {
            0: "Hydro Stream"
        },
        heightm: 1.155,
        weightkg: 101.7,
        color: "Green",
        eggGroups: ["Undiscovered"],
    },
    manatarmega: {
        num: 750070,
        species: "Manatar-Mega",
        baseSpecies: "Manatar",
        forme: "Mega",
        formeLetter: "M",
        types: ["Water", "Dark"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 100,
            atk: 147,
            def: 145,
            spa: 117,
            spd: 120,
            spe: 110
        },
        abilities: {
            0: "Sand Stream"
        },
        heightm: 1.655,
        weightkg: 154.7,
        color: "Green",
        eggGroups: ["Undiscovered"],
    },
    quiaura: {
        num: 750153,
        species: "Quiaura",
        types: ["Water", "Ice"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 65,
            atk: 60,
            def: 70,
            spa: 70,
            spd: 70,
            spe: 50
        },
        abilities: {
            0: "Hydrate"
        },
        heightm: 0.9,
        weightkg: 17.1,
        color: "Blue",
		  evos: ["aurortoise"],
        eggGroups: ["Monster"],
    },
    aurortoise: {
        num: 750071,
        species: "Aurortoise",
        types: ["Water", "Ice"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 111,
            atk: 90,
            def: 96,
            spa: 102,
            spd: 108,
            spe: 78
        },
        abilities: {
            0: "Hydrate"
        },
        heightm: 2.145,
        weightkg: 155.25,
		  prevo: "quiaura",
		  evoLevel: 32,
        color: "Blue",
        eggGroups: ["Monster"],
    },
    aurortoisemega: {
        num: 750071,
        species: "Aurortoise-Mega",
        baseSpecies: "Aurortoise",
        forme: "Mega",
        formeLetter: "M",
        types: ["Water", "Ice"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 111,
            atk: 110,
            def: 116,
            spa: 152,
            spd: 118,
            spe: 78
        },
        abilities: {
            0: "Mega Launcher"
        },
        heightm: 2.145,
        weightkg: 170.85,
        color: "Blue",
        eggGroups: ["Monster"],
    },
    metsir: {
        num: 750072,
        species: "Metsir",
        types: ["Steel", "Bug"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 72,
            atk: 150,
            def: 115,
            spa: 75,
            spd: 80,
            spe: 97
        },
        abilities: {
            0: "Breaker"
        },
        heightm: 1.55,
        weightkg: 302.5,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    metsirmegam: {
        num: 750072,
        species: "Metsir-Mega-M",
        baseSpecies: "Metsir",
        forme: "Mega-M",
        formeLetter: "M",
        types: ["Steel", "Bug"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 72,
            atk: 180,
            def: 135,
            spa: 85,
            spd: 90,
            spe: 117
        },
        abilities: {
            0: "Tough Claws"
        },
        heightm: 2.45,
        weightkg: 695.4,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    metsirmegap: {
        num: 750072,
        species: "Metsir-Mega-P",
        baseSpecies: "Metsir",
        forme: "Mega-P",
        formeLetter: "M",
        types: ["Steel", "Flying"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 72,
            atk: 180,
            def: 135,
            spa: 85,
            spd: 90,
            spe: 117
        },
        abilities: {
            0: "Aerilate"
        },
        heightm: 1.75,
        weightkg: 306.5,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    fablesteel: {
        num: 750073,
        species: "Fablesteel",
        types: ["Fairy", "Steel"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 100,
            atk: 72,
            def: 120,
            spa: 103,
            spd: 120,
            spe: 55
        },
        abilities: {
            0: "Bodyguard"
        },
        heightm: 1.605,
        weightkg: 122.5,
        color: "Pink",
        eggGroups: ["Undiscovered"],
    },
    houdini: {
        num: 750074,
        species: "Houdini",
        types: ["Ghost", "Normal"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 106,
            atk: 85,
            def: 93,
            spa: 110,
            spd: 108,
            spe: 60
        },
        abilities: {
            0: "Hammer Space"
        },
        heightm: 0.8,
        weightkg: 20,
        color: "Purple",
        eggGroups: ["Undiscovered"],
    },
    houdinimega: {
        num: 750074,
        species: "Houdini-Mega",
        baseSpecies: "Houdini",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ghost", "Fairy"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 106,
            atk: 85,
            def: 133,
            spa: 130,
            spd: 148,
            spe: 60
        },
        abilities: {
            0: "Healer"
        },
        heightm: 1.2,
        weightkg: 21,
        color: "White",
        eggGroups: ["Undiscovered"],
    },
    shot: {
        num: 750075,
        species: "Shot",
        types: ["Grass", "Flying"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 103,
            atk: 100,
            def: 75,
            spa: 105,
            spd: 75,
            spe: 120
        },
        abilities: {
            0: "Serene Eyes"
        },
        heightm: 0.955,
        weightkg: 22.35,
        color: "White",
        eggGroups: ["Undiscovered"],
    },
    shotmega: {
        num: 750075,
        species: "Shot-Mega",
        baseSpecies: "Shot",
        forme: "Mega",
        formeLetter: "M",
        types: ["Grass", "Flying"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 103,
            atk: 100,
            def: 80,
            spa: 170,
            spd: 85,
            spe: 140
        },
        abilities: {
            0: "No Guard"
        },
        heightm: 1.655,
        weightkg: 33.35,
        color: "White",
        eggGroups: ["Undiscovered"],
    },
    hippee: {
        num: 750154,
        species: "Hippee",
        types: ["Normal", "Ground"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 70,
            atk: 70,
            def: 70,
            spa: 50,
            spd: 65,
            spe: 50
        },
        abilities: {
            0: "Sand Skill"
        },
        heightm: 0.55,
        weightkg: 28,
		  evos: ["leafadon"],
        color: "Brown",
        eggGroups: ["Field"],
    },
    leafadon: {
        num: 750076,
        species: "Leafadon",
        types: ["Grass", "Ground"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 96,
            atk: 121,
            def: 134,
            spa: 74,
            spd: 78,
            spe: 66
        },
        abilities: {
            0: "Leaf Stream"
        },
        heightm: 1.5,
        weightkg: 162.75,
        color: "Yellow",
        eggGroups: ["Field"],
    },
    matrike: {
        num: 750155,
        species: "Matrike",
        types: ["Electric"],
        baseStats: {
            hp: 57,
            atk: 52,
            def: 50,
            spa: 80,
            spd: 57,
            spe: 70
        },
        abilities: {
            0: "Static"
        },
        heightm: 0.6,
        weightkg: 11.5,
		  evos: ["manpharos"],
        color: "White",
        eggGroups: ["Field"],
    },
    manpharos: {
        num: 750077,
        species: "Manpharos",
        types: ["Electric"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 95,
            atk: 90,
            def: 87,
            spa: 125,
            spd: 90,
            spe: 95
        },
        abilities: {
            0: "Static"
        },
        heightm: 1.45,
        weightkg: 50.85,
		  prevo: "matrike",
		  evoLevel: 24,
        color: "Yellow",
        eggGroups: ["Field"],
    },
    manpharosmegam: {
        num: 750077,
        species: "Manpharos-Mega-M",
        baseSpecies: "Manpharos",
        forme: "Mega-M",
        formeLetter: "M",
        types: ["Electric"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 95,
            atk: 90,
            def: 107,
            spa: 155,
            spd: 110,
            spe: 125
        },
        abilities: {
            0: "Intimidate"
        },
        heightm: 1.75,
        weightkg: 54.65,
        color: "Yellow",
        eggGroups: ["Field"],
    },
    manpharosmegaa: {
        num: 750077,
        species: "Manpharos-Mega-A",
        baseSpecies: "Manpharos",
        forme: "Mega-A",
        formeLetter: "M",
        types: ["Electric", "Dragon"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 95,
            atk: 110,
            def: 107,
            spa: 175,
            spd: 110,
            spe: 85
        },
        abilities: {
            0: "Mold Breaker"
        },
        heightm: 1.45,
        weightkg: 50.85,
        color: "Yellow",
        eggGroups: ["Field"],
    },
    porydile: {
        num: 750156,
        species: "Porydile",
        types: ["Ground", "Normal"],
        baseStats: {
            hp: 60,
            atk: 66,
            def: 60,
            spa: 60,
            spd: 57,
            spe: 60
        },
        abilities: {
            0: "Antivirus"
        },
        heightm: 0.75,
        weightkg: 25.85,
		  evos: ["krok2"],
        color: "Red",
        eggGroups: ["Undiscovered"],
    },
    krok2: {
        num: 750157,
        species: "Krok2",
        types: ["Ground", "Normal"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 72,
            atk: 81,
            def: 67,
            spa: 95,
            spd: 70,
            spe: 87
        },
        abilities: {
            0: "Cyber Criminal"
        },
        heightm: 0.8,
        weightkg: 32.95,
		  prevo: "porydile",
		  evos: ["krookz"],
		  evoLevel: 29,
        color: "Red",
        eggGroups: ["Undiscovered"],
    },
    krookz: {
        num: 750078,
        species: "Krook-Z",
        types: ["Ground", "Normal"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 90,
            atk: 98,
            def: 70,
            spa: 120,
            spd: 72,
            spe: 111
        },
        abilities: {
            0: "Cyber Criminal"
        },
        heightm: 1.195,
        weightkg: 65.15,
		  prevo: "krok2",
		  evoLevel: 40,
        color: "Red",
        eggGroups: ["Undiscovered"],
    },
    entaria: {
        num: 750079,
        species: "Entaria",
        types: ["Fire", "Dragon"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 95,
            atk: 110,
            def: 100,
            spa: 80,
            spd: 90,
            spe: 100
        },
        abilities: {
            0: "Under Pressure"
        },
        heightm: 1.6,
        weightkg: 109.3,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    entariamega: {
        num: 750079,
        species: "Entaria-Mega",
        baseSpecies: "Entaria",
        forme: "Mega",
        formeLetter: "M",
        types: ["Fire", "Fairy"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 95,
            atk: 150,
            def: 120,
            spa: 120,
            spd: 90,
            spe: 100
        },
        abilities: {
            0: "Pixilate"
        },
        heightm: 2,
        weightkg: 109.3,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    sursquirt: {
        num: 750158,
        species: "Sursquirt",
        types: ["Water", "Bug"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 62,
            atk: 49,
            def: 60,
            spa: 64,
            spd: 70,
            spe: 65
        },
        abilities: {
            0: "Rain Dish"
        },
        heightm: 0.5,
        weightkg: 5.35,
		  evos: ["blasterain"],
        color: "Blue",
        eggGroups: ["Water 1"],
    },
    blasterain: {
        num: 750080,
        species: "Blasterain",
        types: ["Water", "Bug"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 84,
            atk: 81,
            def: 91,
            spa: 92,
            spd: 103,
            spe: 79
        },
        abilities: {
            0: "Sea Monster"
        },
        heightm: 1.195,
        weightkg: 44.55,
		  prevo: "sursquirt",
		  evoLevel: 29,
        color: "Blue",
        eggGroups: ["Water 1"],
    },
    blasterainmega: {
        num: 750080,
        species: "Blasterain-Mega",
        baseSpecies: "Blasterain",
        forme: "Mega",
        formeLetter: "M",
        types: ["Water", "Bug"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 84,
            atk: 101,
            def: 111,
            spa: 142,
            spd: 113,
            spe: 79
        },
        abilities: {
            0: "Mega Launcher"
        },
        heightm: 1.195,
        weightkg: 60.15,
        color: "Blue",
        eggGroups: ["Water 1"],
    },
    dianbro: {
        num: 750081,
        species: "Dianbro",
        types: ["Water", "Fairy"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 90,
            atk: 90,
            def: 130,
            spa: 100,
            spd: 130,
            spe: 40
        },
        abilities: {
            0: "Clear Tempo"
        },
        heightm: 1.155,
        weightkg: 43.65,
        color: "Pink",
        eggGroups: ["Undiscovered"],
    },
    dianbromegas: {
        num: 750081,
        species: "Dianbro-Mega-S",
        baseSpecies: "Dianbro",
        forme: "Mega",
        formeLetter: "M",
        types: ["Water", "Fairy"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 90,
            atk: 90,
            def: 200,
            spa: 130,
            spd: 130,
            spe: 40
        },
        abilities: {
            0: "Shell Armor"
        },
        heightm: 1.555,
        weightkg: 85.15,
        color: "Pink",
        eggGroups: ["Undiscovered"],
    },
    dianbromegad: {
        num: 750081,
        species: "Dianbro-Mega-D",
        baseSpecies: "Dianbro",
        forme: "Mega",
        formeLetter: "M",
        types: ["Water", "Fairy"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 90,
            atk: 150,
            def: 90,
            spa: 160,
            spd: 90,
            spe: 100
        },
        abilities: {
            0: "Magic Bounce"
        },
        heightm: 1.555,
        weightkg: 62.65,
        color: "Pink",
        eggGroups: ["Undiscovered"],
    },
    chatotorus: {
        num: 750082,
        species: "Chatotorus",
        types: ["Normal", "Flying"],
        gender: "M",
        baseStats: {
            hp: 93,
            atk: 105,
            def: 78,
            spa: 134,
            spd: 81,
            spe: 116
        },
        abilities: {
            0: "Sandy Eyes"
        },
        heightm: 1.005,
        weightkg: 34.95,
        color: "Brown",
        eggGroups: ["Undiscovered"],
    },
    happipi: {
        num: 750159,
        species: "Happipi",
        types: ["Normal", "Fairy"],
        gender: "F",
        baseStats: {
            hp: 77,
            atk: 22,
            def: 55,
            spa: 37,
            spd: 85,
            spe: 35
        },
        abilities: {
            0: "Serene Grace"
        },
        heightm: 0.45,
        weightkg: 12.95,
		  evos: ["chantic"],
        color: "White",
        eggGroups: ["Undiscovered"],
    },
    chantic: {
        num: 750160,
        species: "Chantic",
        types: ["Normal", "Fairy"],
        gender: "F",
        baseStats: {
            hp: 167,
            atk: 37,
            def: 60,
            spa: 72,
            spd: 120,
            spe: 60
        },
        abilities: {
            0: "Serene Grace"
        },
        heightm: 0.85,
        weightkg: 18.9,
		  prevo: "happipi",
		  evos: ["blisskiss"],
		  evoLevel: 2,
        color: "White",
        eggGroups: ["Fairy"],
    },
    blisskiss: {
        num: 750083,
        species: "Blisskiss",
        types: ["Normal", "Fairy"],
        gender: "F",
        baseStats: {
            hp: 185,
            atk: 45,
            def: 67,
            spa: 112,
            spd: 140,
            spe: 82
        },
        abilities: {
            0: "Serene Grace"
        },
        heightm: 1.5,
        weightkg: 42.4,
		  prevo: "chantic",
		  evoLevel: 2,
        color: "White",
        eggGroups: ["Fairy"],
    },
    gunkpawn: {
        num: 750161,
        species: "Gunk Pawn",
        types: ["Steel", "Poison"],
        baseStats: {
            hp: 51,
            atk: 88,
            def: 55,
            spa: 60,
            spd: 45,
            spe: 65
        },
        abilities: {
            0: "Sharp Armor"
        },
        heightm: 0.6,
        weightkg: 16.6,
		  evos: ["toxisharp"],
        color: "Red",
        eggGroups: ["Human-Like"],
    },
    toxisharp: {
        num: 750084,
        species: "Toxisharp",
        types: ["Dark", "Poison"],
        baseStats: {
            hp: 84,
            atk: 125,
            def: 92,
            spa: 83,
            spd: 77,
            spe: 87
        },
        abilities: {
            0: "Sharp Armor"
        },
        heightm: 1.45,
        weightkg: 57.2,
		  prevo: "gunkpawn",
		  evoLevel: 44,
        color: "Red",
        eggGroups: ["Human-Like"],
    },
    darmega: {
        num: 750085,
        species: "Darmega",
        types: ["Dark", "Bug"],
        baseStats: {
            hp: 90,
            atk: 83,
            def: 88,
            spa: 140,
            spd: 76,
            spe: 120
        },
        abilities: {
            0: "Dream Crusher"
        },
        heightm: 1.705,
        weightkg: 51,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    lagi: {
        num: 750086,
        species: "Lag-I",
        types: ["Ground", "Ice"],
        gender: "M",
        baseStats: {
            hp: 84,
            atk: 112,
            def: 85,
            spa: 107,
            spd: 80,
            spe: 110
        },
        abilities: {
            0: "Desert Snow"
        },
        heightm: 1.5,
        weightkg: 162.25,
        color: "Brown",
        eggGroups: ["Undiscovered"],
    },
    lagimega: {
        num: 750086,
        species: "Lag-I-Mega",
        baseSpecies: "Lag-I",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ground", "Ice"],
        gender: "M",
        baseStats: {
            hp: 84,
            atk: 152,
            def: 85,
            spa: 147,
            spd: 80,
            spe: 130
        },
        abilities: {
            0: "Refrigerate"
        },
        heightm: 2.1,
        weightkg: 255.95,
        color: "Brown",
        eggGroups: ["Undiscovered"],
    },
    heatloom: {
        num: 750087,
        species: "Heatloom",
        types: ["Steel", "Grass"],
        baseStats: {
            hp: 95,
            atk: 130,
            def: 93,
            spa: 95,
            spd: 83,
            spe: 73
        },
        abilities: {
            0: "From Ashes"
        },
        heightm: 1.445,
        weightkg: 234.6,
        color: "Green",
        eggGroups: ["Undiscovered"],
    },
    golone: {
        num: 750162,
        species: "Golone",
        types: ["Ghost", "Steel"],
        gender: "N",
        baseStats: {
            hp: 51,
            atk: 88,
            def: 55,
            spa: 60,
            spd: 45,
            spe: 65
        },
        abilities: {
            0: "En Garde"
        },
        heightm: 0.9,
        weightkg: 47,
		  evos: ["golislash"],
        color: "Blue",
        eggGroups: ["Mineral"],
    },
    golislash: {
        num: 750088,
        species: "Golislash",
		  baseForme: "Defense",
        types: ["Ghost", "Steel"],
        gender: "N",
        baseStats: {
            hp: 74,
            atk: 87,
            def: 115,
            spa: 52,
            spd: 115,
            spe: 52
        },
        abilities: {
            0: "Combination Drive"
        },
        heightm: 2.245,
        weightkg: 191.5,
		  prevo: "golone",
		  evoLevel: 39,
        color: "Brown",
        eggGroups: ["Mineral"],
    },
    golislashpower: {
        num: 750088,
        species: "Golislash-Power",
        baseSpecies: "Golislash",
        forme: "Power",
        formeLetter: "P",
        types: ["Ghost", "Steel"],
        gender: "N",
        baseStats: {
            hp: 74,
            atk: 115,
            def: 87,
            spa: 115,
            spd: 52,
            spe: 52
        },
        abilities: {
            0: "Combination Drive"
        },
		  prevo: "golone",
		  evoLevel: 39,
        color: "Brown",
        heightm: 2.245,
        weightkg: 191.5,
        eggGroups: ["Mineral"],
    },
    hooporus: {
        num: 750089,
        species: "Hooporus",
        types: ["Ghost", "Dragon"],
        baseStats: {
            hp: 78,
            atk: 148,
            def: 75,
            spa: 105,
            spd: 100,
            spe: 103
        },
        abilities: {
            0: "Magic Break"
        },
        heightm: 1.155,
        weightkg: 57.25,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
    },
    lopunnini: {
        num: 750090,
        species: "Lopunnini",
        types: ["Fire", "Normal"],
        baseStats: {
            hp: 83,
            atk: 88,
            def: 92,
            spa: 77,
            spd: 98,
            spe: 103
        },
        abilities: {
            0: "Charm Star"
        },
        heightm: 0.8,
        weightkg: 18.65,
        color: "Yelow",
        eggGroups: ["Undiscovered"],
    },
    loppuninimega: {
        num: 750090,
        species: "Lopunnini-Mega",
        baseSpecies: "Lopunnini",
        forme: "Mega",
        formeLetter: "M",
        types: ["Fire", "Fighting"],
        baseStats: {
            hp: 83,
            atk: 148,
            def: 102,
            spa: 77,
            spd: 98,
            spe: 133
        },
        abilities: {
            0: "Scrappy"
        },
        heightm: 0.9,
        weightkg: 13.65,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
    },
    larvatrap: {
        num: 750163,
        species: "Larvatrap",
        types: ["Fire", "Ground"],
        baseStats: {
            hp: 59,
            atk: 105,
            def: 59,
            spa: 52,
            spd: 59,
            spe: 40
        },
        abilities: {
            0: "Pit of Flame"
        },
        heightm: 0.9,
        weightkg: 21.9,
		  evos: ["volcagon"],
        color: "Brown",
        eggGroups: ["Bug"],
    },
    volcagon: {
        num: 750091,
        species: "Volcagon",
        types: ["Fire", "Ground"],
        baseStats: {
            hp: 92,
            atk: 90,
            def: 82,
            spa: 117,
            spd: 102,
            spe: 110
        },
        abilities: {
            0: "Glassing"
        },
        heightm: 1.805,
        weightkg: 64,
		  prevo: "larvatrap",
		  evoLevel: 49,
        color: "Green",
        eggGroups: ["Bug"],
    },
    enterrak: {
        num: 750092,
        species: "Enterrak",
        types: ["Fire", "Fighting"],
        gender: "N",
        baseStats: {
            hp: 112,
            atk: 132,
            def: 90,
            spa: 81,
            spd: 90,
            spe: 114
        },
        abilities: {
            0: "Justice Power"
        },
        heightm: 2.01,
        weightkg: 229,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },
    aeroraptor: {
        num: 750093,
        species: "Aeroraptor",
        types: ["Normal", "Flying"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 92,
            atk: 122,
            def: 77,
            spa: 65,
            spd: 77,
            spe: 125
        },
        abilities: {
            0: "Raptor Head"
        },
        heightm: 1.495,
        weightkg: 41.95,
        color: "Purple",
        eggGroups: ["Flying"],
    },
    aeroraptormega: {
        num: 750093,
        species: "Aeroraptor-Mega",
        baseSpecies: "Aeroraptor",
        forme: "Mega",
        formeLetter: "M",
        types: ["Normal", "Flying"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 92,
            atk: 152,
            def: 97,
            spa: 75,
            spd: 97,
            spe: 145
        },
        abilities: {
            0: "Tough Claws"
        },
        heightm: 1.795,
        weightkg: 61.95,
        color: "Purple",
        eggGroups: ["Flying"],
    },
    sansjr: {
        num: 750164,
        species: "Sans Jr.",
        types: ["Normal", "Ground"],
        baseStats: {
            hp: 70,
            atk: 77,
            def: 87,
            spa: 37,
            spd: 47,
            spe: 50
        },
        abilities: {
            0: "Lazy Bones"
        },
        heightm: 0.7,
        weightkg: 18,
		  evos: ["sans"],
        color: "Brown",
        eggGroups: ["Field"],
    },
    sans: {
        num: 750094,
        species: "Sans",
        types: ["Normal", "Ground"],
        baseStats: {
            hp: 122,
            atk: 140,
            def: 115,
            spa: 80,
            spd: 70,
            spe: 92
        },
        abilities: {
            0: "Lazy Bones"
        },
        heightm: 1.5,
        weightkg: 80,
		  prevo: "sansjr",
		  evoLevel: 24,
        color: "Brown",
        eggGroups: ["Field"],
    },
    lucasol: {
        num: 750095,
        species: "Lucasol",
        types: ["Fighting", "Dark"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 78,
            atk: 130,
            def: 75,
            spa: 105,
            spd: 75,
            spe: 93
        },
        abilities: {
            0: "Steadfast Luck"
        },
        heightm: 1.19,
        weightkg: 50.5,
        color: "Blue",
        eggGroups: ["Field"],
    },
    lucasolmegal: {
        num: 750095,
        species: "Lucasol-Mega-L",
        baseSpecies: "Lucasol",
        forme: "Mega L",
        formeLetter: "M",
        types: ["Fighting", "Dark"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 78,
            atk: 170,
            def: 93,
            spa: 135,
            spd: 75,
            spe: 115
        },
        abilities: {
            0: "Adaptability"
        },
        heightm: 1.29,
        weightkg: 54,
        color: "Blue",
        eggGroups: ["Field"],
    },
    lucasolmegaa: {
        num: 750095,
        species: "Lucasol-Mega-A",
        baseSpecies: "Lucasol",
        forme: "Mega A",
        formeLetter: "M",
        types: ["Fighting", "Dark"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 78,
            atk: 150,
            def: 75,
            spa: 145,
            spd: 75,
            spe: 133
        },
        abilities: {
            0: "Magic Bounce"
        },
        heightm: 1.19,
        weightkg: 52.5,
        color: "Blue",
        eggGroups: ["Field"],
    },
    treesaur: {
        num: 750165,
        species: "Treesaur",
        types: ["Poison", "Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 62,
            atk: 67,
            def: 52,
            spa: 75,
            spd: 70,
            spe: 67
        },
        abilities: {
            0: "Overgrow"
        },
        heightm: 0.6,
        weightkg: 5.95,
		  evos: ["vylesaur"],
        color: "Green",
        eggGroups: ["Monster"],
    },
    vylesaur: {
        num: 750166,
        species: "Vylesaur",
        types: ["Poison", "Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 70,
            atk: 78,
            def: 69,
            spa: 97,
            spd: 87,
            spe: 92
        },
        abilities: {
            0: "Overgrow"
        },
        heightm: 0.95,
        weightkg: 17.3,
		  prevo: "treesaur",
		  evos: ["sceptilusaur"],
		  evoLevel: 16,
        color: "Green",
        eggGroups: ["Monster"],
    },
    sceptilusaur: {
        num: 750096,
        species: "Sceptilusaur",
        types: ["Poison", "Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 90,
            atk: 98,
            def: 88,
            spa: 117,
            spd: 107,
            spe: 115
        },
        abilities: {
            0: "Overgrow"
        },
        heightm: 1.855,
        weightkg: 76.1,
		  prevo: "vylesaur",
		  evoLevel: 34,
        color: "Green",
        eggGroups: ["Monster"],
    },
    sceptilusaurmegax: {
        num: 750096,
        species: "Sceptilusaur-Mega-X",
        baseSpecies: "Sceptilusaur",
        forme: "Mega X",
        formeLetter: "M",
        types: ["Poison", "Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
         baseStats: {
            hp: 90,
            atk: 116,
            def: 128,
            spa: 139,
            spd: 127,
            spe: 115
        },
        abilities: {
            0: "Thick Fat"
        },
        heightm: 2.255,
        weightkg: 131.6,
        color: "Green",
        eggGroups: ["Monster"],
    },
    sceptilusaurmegay: {
        num: 750096,
        species: "Sceptilusaur-Mega-Y",
        baseSpecies: "Sceptilusaur",
        forme: "Mega Y",
        formeLetter: "M",
        types: ["Poison", "Dragon"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
         baseStats: {
            hp: 90,
            atk: 123,
            def: 98,
            spa: 157,
            spd: 107,
            spe: 140
        },
        abilities: {
            0: "Lightning Rod"
        },
        heightm: 2.055,
        weightkg: 79.1,
        color: "Green",
        eggGroups: ["Monster"],
    },
    dourike: {
        num: 750167,
        species: "Dourike",
        types: ["Electric", "Dark"],
        baseStats: {
            hp: 50,
            atk: 60,
            def: 40,
            spa: 81,
            spd: 50,
            spe: 80
        },
        abilities: {
            0: "Thunderous Embers"
        },
        heightm: 0.6,
        weightkg: 13,
		  evos: ["houndectric"],
        color: "Black",
        eggGroups: ["Field"],
    },
    houndectric: {
        num: 750097,
        species: "Houndectric",
        types: ["Electric", "Dark"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 83,
            atk: 93,
            def: 65,
            spa: 118,
            spd: 80,
            spe: 110
        },
        abilities: {
            0: "Thunderous Embers"
        },
        heightm: 1.45,
        weightkg: 37.6,
		  prevo: "dourike",
		  evoLevel: 25,
        color: "Black",
        eggGroups: ["Field"],
    },
    houndectricmegam: {
        num: 750097,
        species: "Houndectric-Mega-M",
        baseSpecies: "Houndectric",
        forme: "Mega M",
        formeLetter: "M",
        types: ["Electric", "Dark"],
        baseStats: {
            hp: 83,
            atk: 93,
            def: 85,
            spa: 148,
            spd: 100,
            spe: 140
        },
        abilities: {
            0: "Intimidate"
        },
        heightm: 1.75,
        weightkg: 41.4,
        color: "Black",
        eggGroups: ["Field"],
    },
    houndectricmegah: {
        num: 750097,
        species: "Houndectric-Mega-H",
        baseSpecies: "Houndectric",
        forme: "Mega H",
        formeLetter: "M",
        types: ["Electric", "Dark"],
        baseStats: {
            hp: 83,
            atk: 93,
            def: 105,
            spa: 148,
            spd: 90,
            spe: 130
        },
        abilities: {
            0: "Solar Power"
        },
        heightm: 1.95,
        weightkg: 52.1,
        color: "Black",
        eggGroups: ["Field"],
    },
    whisdour: {
        num: 750168,
        species: "Whisdour",
        types: ["Normal", "Fire"],
        baseStats: { 
            hp: 59,
            atk: 60,
            def: 36,
            spa: 70,
            spd: 46,
            spe: 61
        },
        abilities: {
            0: "Mix Tape"
        },
        heightm: 0.6,
        weightkg: 13.55,
		  evos: ["exdoom"],
        color: "Black",
        eggGroups: ["Field"],
    },
    exdoom: {
        num: 750098,
        species: "Exdoom",
        types: ["Normal", "Fire"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 100,
            atk: 100,
            def: 66,
            spa: 111,
            spd: 86,
            spe: 92
        },
        abilities: {
            0: "Mix Tape"
        },
        heightm: 1.45,
        weightkg: 59.5,
		  prevo: "whisdour",
		  evoLevel: 27,
        color: "Black",
        eggGroups: ["Field"],
    },
    exdoommega: {
        num: 750098,
        species: "Exdoom-Mega",
        baseSpecies: "Exdoom",
        forme: "Mega",
        formeLetter: "M",
        types: ["Normal", "Fire"],
        baseStats: {
            hp: 100,
            atk: 100,
            def: 106,
            spa: 131,
            spd: 96,
            spe: 112
        },
        abilities: {
            0: "Solar Power"
        },
        heightm: 1.95,
        weightkg: 74,
        color: "Black",
        eggGroups: ["Field"],
    },
    karpon: {
        num: 750169,
        species: "Karpon",
        types: ["Water", "Dragon"],
        baseStats: { 
            hp: 37,
            atk: 57,
            def: 62,
            spa: 32,
            spd: 40,
            spe: 70
        },
        abilities: {
            0: "Coward"
        },
        heightm: 0.75,
        weightkg: 26.05,
		  evos: ["gyaramence"],
        color: "Red",
        eggGroups: ["Dragon"],
    },
    gyaramence: {
        num: 750099,
        species: "Gyaramence",
        types: ["Water", "Dragon"],
        baseStats: {
            hp: 110,
            atk: 145,
            def: 94,
            spa: 100,
            spd: 105,
            spe: 105
        },
        abilities: {
            0: "Intimidate"
        },
        heightm: 4,
        weightkg: 168.8,
		  prevo: "karpon",
		  evoLevel: 30,
        color: "Blue",
        eggGroups: ["Dragon"],
    },
    gyaramencemegag: {
        num: 750099,
        species: "Gyaramence-Mega-G",
        baseSpecies: "Gyaramence",
        forme: "Mega G",
        formeLetter: "M",
        types: ["Water", "Dark"],
        baseStats: {
            hp: 110,
            atk: 175,
            def: 124,
            spa: 110,
            spd: 135,
            spe: 105
        },
        abilities: {
            0: "Mold Breaker"
        },
        heightm: 4,
        weightkg: 248.8,
        color: "Blue",
        eggGroups: ["Dragon"],
    },
    gyaramencemegas: {
        num: 750099,
        species: "Gyaramence-Mega-S",
        baseSpecies: "Gyaramence",
        forme: "Mega S",
        formeLetter: "M",
        types: ["Water", "Dragon"],
        baseStats: {
            hp: 110,
            atk: 155,
            def: 144,
            spa: 110,
            spd: 115,
            spe: 125
        },
        abilities: {
            0: "Aerilate"
        },
        heightm: 4.3,
        weightkg: 178.8,
        color: "Blue",
        eggGroups: ["Dragon"],
    },
    thunderblast: {
        num: 7500100,
        species: "Thunderblast",
        types: ["Water", "Electric"],
        gender: "M",
        baseStats: {
            hp: 80,
            atk: 94,
            def: 90,
            spa: 130,
            spd: 100,
            spe: 100
        },
        abilities: {
            0: "Torrential Voltage"
        },
        heightm: 2.3,
        weightkg: 73.25,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    thunderblastmega: {
        num: 7500100,
        species: "Thunderblast-Mega",
        baseSpecies: "Thunderblast",
        forme: "Mega",
        formeLetter: "M",
        types: ["Water", "Electric"],
        gender: "M",
        baseStats: {
            hp: 80,
            atk: 114,
            def: 110,
            spa: 180,
            spd: 110,
            spe: 100
        },
        abilities: {
            0: "Mega Launcher"
        },
        heightm: 2.3,
        weightkg: 88.85,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    snoopa: {
        num: 7500101,
        species: "Snoopa",
        types: ["Ghost", "Normal"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 130,
            atk: 129,
            def: 70,
            spa: 110,
            spd: 120,
            spe: 50
        },
        abilities: {
            0: "Magic Fat"
        },
        heightm: 1.31,
        weightkg: 234.5,
        color: "Purple",
        eggGroups: ["Undiscovered"],
    },
    plupoke: {
        num: 750170,
        species: "Plupoke",
        types: ["Water", "Psychic"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: { 
            hp: 86,
            atk: 63,
            def: 64,
            spa: 55,
            spd: 63,
            spe: 32
        },
        abilities: {
            0: "Healing Provocation"
        },
        heightm: 0.8,
        weightkg: 20.6,
		  evos: ["empoleking"],
        color: "Blue",
        eggGroups: ["Water 1"],
    },
    empoleking: {
        num: 7500102,
        species: "Empoleking",
        types: ["Water", "Steel"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 99,
            atk: 90,
            def: 94,
            spa: 115,
            spd: 115,
            spe: 65
        },
        abilities: {
            0: "Torrent Tempo"
        },
        heightm: 1.855,
        weightkg: 82,
		  prevo: "plupoke",
		  evoLevel: 26,
        color: "Blue",
        eggGroups: ["Water 1"],
    },
    heathorn: {
        num: 7500103,
        species: "Heathorn",
        types: ["Grass", "Steel"],
        baseStats: {
            hp: 93,
            atk: 92,
            def: 129,
            spa: 102,
            spd: 121,
            spe: 49
        },
        abilities: {
            0: "Forest Fire"
        },
        heightm: 1.345,
        weightkg: 270,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },
    galvantulys: {
        num: 7500104,
        species: "Galvantulys",
        types: ["Electric", "Psychic"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 60,
            atk: 86,
            def: 85,
            spa: 110,
            spd: 85,
            spe: 150
        },
        abilities: {
            0: "Compound Pressure"
        },
        heightm: 1.245,
        weightkg: 37.55,
        color: "Red",
        eggGroups: ["Undiscovered"],
    },
    hazygon: {
        num: 7500105,
        species: "Hazygon",
        types: ["Psychic", "Dragon"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 83,
            atk: 115,
            def: 80,
            spa: 145,
            spd: 80,
            spe: 126
        },
        abilities: {
            0: "Levitate"
        },
        heightm: 1.05,
        weightkg: 80.15,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    jellie: {
        num: 7500106,
        species: "Jellie",
        types: ["Ghost", "Fairy"],
        baseStats: {
            hp: 90,
            atk: 80,
            def: 130,
            spa: 94,
            spd: 130,
            spe: 55
        },
        abilities: {
            0: "Clear Absorb"
        },
        heightm: 1.46,
        weightkg: 71.9,
        color: "White",
        eggGroups: ["Undiscovered"],
    },
    jelliemega: {
        num: 7500106,
        species: "Jellie-Mega",
        baseSpecies: "Jellie",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ghost", "Fairy"],
        baseStats: {
            hp: 90,
            atk: 140,
            def: 90,
            spa: 154,
            spd: 90,
            spe: 115
        },
        abilities: {
            0: "Magic Bounce"
        },
        heightm: 1.86,
        weightkg: 92.9,
        color: "White",
        eggGroups: ["Undiscovered"],
    },
    zaggron: {
        num: 7500107,
        species: "Zaggron",
        types: ["Flying", "Steel"],
        baseStats: {
            hp: 80,
            atk: 100,
            def: 150,
            spa: 92,
            spd: 95,
            spe: 77
        },
        abilities: {
            0: "Crushing"
        },
        heightm: 1.855,
        weightkg: 206.3,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
    },
    zaggronmega: {
        num: 7500107,
        species: "Zaggron-Mega",
        baseSpecies: "Zaggron",
        forme: "Mega",
        formeLetter: "M",
        types: ["Flying", "Steel"],
        baseStats: {
            hp: 80,
            atk: 130,
            def: 200,
            spa: 92,
            spd: 115,
            spe: 77
        },
        abilities: {
            0: "Filter"
        },
        heightm: 1.955,
        weightkg: 241.3,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
    },
    malaras: {
        num: 7500108,
        species: "Malaras",
        types: ["Dark", "Ice"],
        baseStats: {
            hp: 119,
            atk: 98,
            def: 94,
            spa: 86,
            spd: 95,
            spe: 77
        },
        abilities: {
            0: "Advocate Scale"
        },
        heightm: 1.995,
        weightkg: 133.5,
        color: "Blue",
        eggGroups: ["Water 1"],
    },
    umbord: {
        num: 7500109,
        species: "Umbord",
        types: ["Water", "Dark"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 143,
            atk: 87,
            def: 88,
            spa: 85,
            spd: 98,
            spe: 72
        },
        abilities: {
            0: "Apathy"
        },
        heightm: 7.745,
        weightkg: 212.5,
		  prevo: "wailee",
		  evoLevel: 40,
        color: "White",
        eggGroups: ["Field"],
    },
    eruption: {
        num: 7500110,
        species: "Eruption",
        types: ["Fire", "Water"],
        baseStats: {
            hp: 79,
            atk: 105,
            def: 100,
            spa: 130,
            spd: 100,
            spe: 55
        },
        abilities: {
            0: "Evaporate"
        },
        heightm: 1.805,
        weightkg: 207.5,
        color: "Red",
        eggGroups: ["Undiscovered"],
    },
    eruptionmega: {
        num: 7500110,
        species: "Eruption-Mega",
        baseSpecies: "Eruption",
        forme: "Mega",
        formeLetter: "M",
        types: ["Fire", "Water"],
        baseStats: {
            hp: 79,
            atk: 125,
            def: 130,
            spa: 170,
            spd: 130,
            spe: 35
        },
        abilities: {
            0: "Sheer Force"
        },
        heightm: 2.405,
        weightkg: 308,
        color: "Red",
        eggGroups: ["Undiscovered"],
    },
    porygardezy: {
        num: 7500111,
        species: "Porygarde-Zy",
        types: ["Normal", "Dragon"],
        gender: "N",
        baseStats: {
            hp: 97,
            atk: 110,
            def: 95,
            spa: 115,
            spd: 95,
            spe: 95
        },
        abilities: {
            0: "Dis/connect"
        },
        heightm: 2.945,
        weightkg: 169.5,
        color: "Red",
        eggGroups: ["Undiscovered"],
    },
    raptorus: {
        num: 7500112,
        species: "Raptorus",
        types: ["Ground", "Flying"],
        gender: "M",
        baseStats: {
            hp: 89,
            atk: 150,
            def: 80,
            spa: 77,
            spd: 65,
            spe: 115
        },
        abilities: {
            0: "Intimidate"
        },
        heightm: 1.245,
        weightkg: 46.45,
        color: "Brown",
        eggGroups: ["Undiscovered"],
    },
    sickle: {
        num: 7500113,
        species: "Sickle",
        types: ["Bug", "Steel"],
        baseStats: {
            hp: 55,
            atk: 80,
            def: 175,
            spa: 42,
            spd: 165,
            spe: 45
        },
        abilities: {
            0: "Sturdy Tech"
        },
        heightm: 1.205,
        weightkg: 69.25,
        color: "Red",
        eggGroups: ["Bug"],
    },
    sicklemega: {
        num: 7500113,
        species: "Sickle-Mega",
        baseSpecies: "Sickle",
        forme: "Mega",
        formeLetter: "M",
        types: ["Bug", "Steel"],
        baseStats: {
            hp: 55,
            atk: 100,
            def: 215,
            spa: 52,
            spd: 185,
            spe: 55
        },
        abilities: {
            0: "Technician"
        },
        heightm: 1.405,
        weightkg: 76.25,
        color: "Red",
        eggGroups: ["Bug"],
    },
    koulion: {
        num: 7500114,
        species: "Koulion",
        types: ["Electric", "Steel"],
        gender: "N",
        baseStats: {
            hp: 99,
            atk: 102,
            def: 102,
            spa: 102,
            spd: 102,
            spe: 111
        },
        abilities: {
            0: "Justice Power"
        },
        heightm: 2.01,
        weightkg: 214,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    panphan: {
        num: 750171,
        species: "Panphan",
        types: ["Ground", "Fighting"],
        baseStats: { 
            hp: 84,
            atk: 86,
            def: 70,
            spa: 48,
            spd: 50,
            spe: 50
        },
        abilities: {
            0: "Scrap Heap"
        },
        heightm: 0.55,
        weightkg: 20.75,
		  evos: ["dongoro"],
        color: "Blue",
        eggGroups: ["Field"],
    },
    dongoro: {
        num: 7500115,
        species: "Dongoro",
        types: ["Ground", "Dark"],
        baseStats: {
            hp: 102,
            atk: 132,
            def: 109,
            spa: 74,
            spd: 75,
            spe: 64
        },
        abilities: {
            0: "Sturdy Mold"
        },
        heightm: 1.6,
        weightkg: 128,
		  prevo: "panphan",
		  evoLevel: 28,
        color: "Gray",
        eggGroups: ["Field"],
    },
darkchomp: {
        num: 7500116,
        species: "Darkchomp",
        types: ["Dark", "Dragon"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 109,
            atk: 130,
            def: 92,
            spa: 107,
            spd: 87,
            spe: 113
        },
        abilities: {
            0: "Sand Dreams"
        },
        dexentry: "It is a nocturnal creature.  While it looks terrifying, it is harmless to humans. Intead, it hunts down good dreams, and has the ability to invade them. Once inside a good dream, Darkchomp won't stop until it tears everything appart, and proceeds to torment the dreamer's sleep until it is waken up by force. Darkchomp then flies away at high speeds in order to not be caught, and continues to hunt other dreams.",
        heightm: 1.705,
        weightkg: 72.75,
        color: "Black",
		  fusion: ["darkrai", "garchomp"],
    },
    darkchompmega: {
        num: 7500116,
        species: "Darkchomp-Mega",
        baseSpecies: "Darkchomp",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dark", "Dragon"],
        baseStats: {
            hp: 109,
            atk: 170,
            def: 112,
            spa: 147,
            spd: 97,
            spe: 103
        },
        abilities: {
            0: "Sand Force"
        },
        heightm: 1.705,
        weightkg: 72.75,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    friller: {
        num: 750172,
        species: "Friller",
        types: ["Poison", "Water"],
        baseStats: { 
            hp: 82,
            atk: 70,
            def: 60,
            spa: 57,
            spd: 72,
            spe: 37
        },
        abilities: {
            0: "Cursing Contact"
        },
        heightm: 0.55,
        weightkg: 20.75,
		  evos: ["jelluk"],
        color: "Purple",
        eggGroups: ["Amorphous"],
    },
    jelluk: {
        num: 7500117,
        species: "Jelluk",
        types: ["Poison", "Water"],
        baseStats: {
            hp: 112,
            atk: 92,
            def: 82,
            spa: 85,
            spd: 112,
            spe: 65
        },
        abilities: {
            0: "Pond Scum"
        },
        heightm: 1.7,
        weightkg: 82.5,
		  prevo: "friller",
		  evoLevel: 39,
        color: "Purple",
        eggGroups: ["Amorphous"],
    },
    crustlecross: {
        num: 7500118,
        species: "Crustlecross",
        types: ["Rock", "Fighting"],
        baseStats: {
            hp: 85,
            atk: 120,
            def: 110,
            spa: 62,
            spd: 95,
            spe: 75
        },
        abilities: {
            0: "Armored Guts"
        },
        heightm: 1.45,
        weightkg: 127,
        color: "Red",
        eggGroups: ["Bug"],
    },
    crustlecrossmega: {
        num: 7500118,
        species: "Crustlecross-Mega",
        baseSpecies: "Crustlecross",
        forme: "Mega",
        formeLetter: "M",
        types: ["Rock", "Fighting"],
        baseStats: {
            hp: 85,
            atk: 180,
            def: 150,
            spa: 62,
            spd: 105,
            spe: 65
        },
        abilities: {
            0: "Skill Link"
        },
        heightm: 1.65,
        weightkg: 135.5,
        color: "Red",
        eggGroups: ["Bug"],
    },
    wigglyman: {
        num: 7500119,
        species: "Wigglyman",
        types: ["Water", "Fairy"],
        genderRatio: {M: 0.25, F: 0.75},
        baseStats: {
            hp: 120,
            atk: 85,
            def: 80,
            spa: 110,
            spd: 80,
            spe: 81
        },
        abilities: {
            0: "Shake it Off"
        },
        heightm: 0.645,
        weightkg: 6.7,
        color: "Pink",
        eggGroups: ["Fairy"],
    },
    magnebas: {
        num: 750173,
        species: "Magnebas",
        types: ["Water", "Electric"],
		  gender: "N",
        baseStats: { 
            hp: 30,
            atk: 25,
            def: 50,
            spa: 67,
            spd: 55,
            spe: 64
        },
        abilities: {
            0: "Adaptive Clutch"
        },
        heightm: 0.45,
        weightkg: 6.7,
		  evos: ["magnetic"],
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },
    magnetic: {
        num: 7500120,
        species: "Magnetic",
        types: ["Water", "Electric"],
		  gender: "N",
        baseStats: {
            hp: 102,
            atk: 65,
            def: 107,
            spa: 135,
            spd: 107,
            spe: 70
        },
        abilities: {
            0: "Compelling"
        },
        heightm: 3.695,
        weightkg: 171,
		  prevo: "magnebas",
		  evoLevel: 30,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },
    zorugon: {
        num: 750174,
        species: "Zorugon",
        types: ["Normal", "Dark"],
		  gender: "N",
        baseStats: { 
            hp: 52,
            atk: 62,
            def: 60,
            spa: 97,
            spd: 62,
            spe: 57
        },
        abilities: {
            0: "Trace Mirage"
        },
        heightm: 0.45,
        weightkg: 6.7,
		  evos: ["zorogonz"],
        color: "Red",
        eggGroups: ["Undiscovered"],
    },
    zorogonz: {
        num: 7500121,
        species: "Zorogon-Z",
        types: ["Normal", "Dark"],
        gender: "N",
        baseStats: {
            hp: 72,
            atk: 92,
            def: 65,
            spa: 147,
            spd: 67,
            spe: 117
        },
        abilities: {
            0: "Adaptable Illusion"
        },
        heightm: 1.245,
        weightkg: 57.55,
		  prevo: "zorugon",
		  evoLevel: 30,
        color: "Red",
        eggGroups: ["Undiscovered"],
    },
    thundini: {
        num: 7500122,
        species: "Thundini",
        types: ["Electric", "Fire"],
        gender: "M",
        baseStats: {
            hp: 90,
            atk: 118,
            def: 85,
            spa: 123,
            spd: 90,
            spe: 126
        },
        abilities: {
            0: "Prankstar"
        },
        heightm: 0.955,
        weightkg: 32.5,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    cleahorch: {
        num: 750175,
        species: "Cleahorch",
        types: ["Water"],
        baseStats: { 
            hp: 45,
            atk: 51,
            def: 71,
            spa: 79,
            spd: 49,
            spe: 67
        },
        abilities: {
            0: "Storm Launcher"
        },
        heightm: 0.45,
        weightkg: 8.15,
		  evos: ["clawdra"],
        color: "Blue",
        eggGroups: ["Water 1"],
    },
    clawdra: {
        num: 7500123,
        species: "Clawdra",
        types: ["Water", "Dragon"],
        baseStats: {
            hp: 83,
            atk: 94,
            def: 102,
            spa: 118,
            spd: 102,
            spe: 82
        },
        abilities: {
            0: "Storm Launcher"
        },
        heightm: 0.955,
        weightkg: 32.5,
		  prevo: "cleahorch",
		  evoLevel: 34,
        color: "Blue",
        eggGroups: ["Water 1"],
    },
    shaymode: {
        num: 7500124,
        species: "Shaymode",
        types: ["Grass", "Electric"],
        gender: "N",
        baseStats: {
            hp: 80,
            atk: 75,
            def: 90,
            spa: 105,
            spd: 100,
            spe: 130
        },
        abilities: {
            0: "Static Switch"
        },
        heightm: 0.695,
        weightkg: 34.35,
        color: "Red",
        eggGroups: ["Undiscovered"],
    },
    armortran: {
        num: 7500125,
        species: "Armortran",
        types: ["Steel", "Flying"],
        baseStats: {
            hp: 90,
            atk: 85,
            def: 134,
            spa: 85,
            spd: 105,
            spe: 73
        },
        abilities: {
            0: "Sturdy Fire"
        },
        heightm: 1.7,
        weightkg: 240.25,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },
    gonzap: {
        num: 7500126,
        species: "Gonzap",
        types: ["Dragon", "Electric"],
        baseStats: {
            hp: 95,
            atk: 99,
            def: 100,
            spa: 125,
            spd: 100,
            spe: 110
        },
        abilities: {
            0: "G-Tolerance"
        },
        heightm: 1.7,
        weightkg: 106.3,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
    },
    bouffanine: {
        num: 7500127,
        species: "Bouffanine",
        types: ["Normal", "Fire"],
        genderRatio: {
            M: 0.625,
            F: 0.375
        },
        baseStats: {
            hp: 102,
            atk: 120,
            def: 97,
            spa: 80,
            spd: 97,
            spe: 85
        },
        abilities: {
            0: "Reflex"
        },
        heightm: 1.755,
        weightkg: 124.8,
        color: "Brown",
        eggGroups: ["Field"],
    },
    dedsteel: {
        num: 7500128,
        species: "Dedsteel",
        types: ["Steel", "Fairy"],
        gender: "N",
        baseStats: {
            hp: 80,
            atk: 66,
            def: 110,
            spa: 78,
            spd: 124,
            spe: 75
        },
        abilities: {
            0: "Clear Pouch"
        },
        heightm: 1.055,
        weightkg: 103.6,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
    },
    charmite: {
        num: 750176,
        species: "Charmite",
        types: ["Ice", "Fire"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: { 
            hp: 52,
            atk: 75,
            def: 69,
            spa: 51,
            spd: 47,
            spe: 61
        },
        abilities: {
            0: "Bunsen Burner"
        },
        heightm: 0.8,
        weightkg: 54,
		  evos: ["avaizard"],
        color: "Blue",
        eggGroups: ["Monster"],
    },
    avaizard: {
        num: 7500129,
        species: "Avaizard",
        types: ["Ice", "Fire"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 96,
            atk: 110,
            def: 141,
            spa: 86,
            spd: 75,
            spe: 74
        },
        abilities: {
            0: "Kindle"
        },
        heightm: 1.855,
        weightkg: 297.75,
		  prevo: "charmite",
		  evoLevel: 32,
        color: "Blue",
        eggGroups: ["Monster"],
    },
    avaizardmegax: {
        num: 7500129,
        species: "Avaizard-Mega-X",
        baseSpecies: "Avaizard",
        forme: "Mega X",
        formeLetter: "M",
        types: ["Ice", "Dragon"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 96,
            atk: 156,
            def: 174,
            spa: 107,
            spd: 75,
            spe: 74
        },
        abilities: {
            0: "Tough Claws"
        },
        heightm: 1.855,
        weightkg: 317.75,
        color: "Blue",
        eggGroups: ["Monster"],
    },
    avaizardmegay: {
        num: 7500129,
        species: "Avaizard-Mega-Y",
        baseSpecies: "Avaizard",
        forme: "Mega Y",
        formeLetter: "M",
        types: ["Ice", "Fire"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 96,
            atk: 130,
            def: 141,
            spa: 136,
            spd: 105,
            spe: 74
        },
        abilities: {
            0: "Drought"
        },
        heightm: 1.855,
        weightkg: 307.75,
        color: "Blue",
        eggGroups: ["Monster"],
    },
    slugwick: {
        num: 750177,
        species: "Slugwick",
        types: ["Ghost", "Fire"],
        baseStats: { 
            hp: 55,
            atk: 45,
            def: 62,
            spa: 87,
            spd: 62,
            spe: 30
        },
        abilities: {
            0: "Flame Body"
        },
        heightm: 0.5,
        weightkg: 19.05,
		  evos: ["cargolure"],
        color: "White",
        eggGroups: ["Amorphous"],
    },
    cargolure: {
        num: 7500130,
        species: "Cargolure",
        types: ["Ghost", "Fire"],
        baseStats: {
            hp: 70,
            atk: 67,
            def: 120,
            spa: 125,
            spd: 100,
            spe: 70
        },
        abilities: {
            0: "Flame Body"
        },
        heightm: 0.89,
        weightkg: 44.65,
		  prevo: "slugwick",
		  evoLevel: 40,
        color: "Black",
        eggGroups: ["Amorphous"],
    },
    riobra: {
        num: 750178,
        species: "Riobra",
        types: ["Psychic", "Fighting"],
        genderRatio: {
            M: 0.8125,
            F: 0.1875
        },
        baseStats: { 
            hp: 42,
            atk: 55,
            def: 37,
            spa: 90,
            spd: 57,
            spe: 95
        },
        abilities: {
            0: "Inner Focus"
        },
        heightm: 0.8,
        weightkg: 19.85,
		  evos: ["alakario"],
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    alakario: {
        num: 7500131,
        species: "Alakario",
        types: ["Psychic", "Fighting"],
        genderRatio: {
            M: 0.8125,
            F: 0.1875
        },
        baseStats: {
            hp: 77,
            atk: 95,
            def: 72,
            spa: 140,
            spd: 97,
            spe: 120
        },
        abilities: {
            0: "Inner Focus"
        },
        heightm: 1.345,
        weightkg: 51,
		  prevo: "riobra",
		  evoLevel: 16,
        color: "Blue",
        eggGroups: ["Human-Like"],
    },
    alakariomegal: {
        num: 7500131,
        species: "Alakario-Mega-L",
        baseSpecies: "Alakario",
        forme: "Mega-L",
        formeLetter: "M",
        types: ["Psychic", "Fighting"],
        baseStats: {
            hp: 77,
            atk: 130,
            def: 90,
            spa: 165,
            spd: 97,
            spe: 142
        },
        abilities: {
            0: "Adaptability"
        },
        heightm: 1.445,
        weightkg: 54.5,
        color: "Blue",
        eggGroups: ["Human-Like"],
    },
    alakariomegaa: {
        num: 7500131,
        species: "Alakario-Mega-A",
        baseSpecies: "Alakario",
        forme: "Mega-A",
        formeLetter: "M",
        types: ["Psychic", "Fighting"],
        baseStats: {
            hp: 77,
            atk: 95,
            def: 92,
            spa: 180,
            spd: 107,
            spe: 150
        },
        abilities: {
            0: "Trace"
        },
        heightm: 1.045,
        weightkg: 51,
        color: "Blue",
        eggGroups: ["Human-Like"],
    },
    cazantor: {
        num: 7500132,
        species: "Cazantor",
        types: ["Bug", "Steel"],
        baseStats: {
            hp: 74,
            atk: 130,
            def: 116,
            spa: 62,
            spd: 74,
            spe: 97
        },
        abilities: {
            0: "Precision"
        },
        heightm: 1.05,
        weightkg: 75.5,
        color: "Gray",
        eggGroups: ["Bug"],
    },
    cazantormega: {
        num: 7500132,
        species: "Cazantor-Mega",
        baseSpecies: "Cazantor",
        forme: "Mega",
        formeLetter: "M",
        types: ["Bug", "Steel"],
        baseStats: {
            hp: 74,
            atk: 150,
            def: 156,
            spa: 72,
            spd: 94,
            spe: 107
        },
        abilities: {
            0: "Technician"
        },
        heightm: 1.25,
        weightkg: 82.5,
        color: "Gray",
        eggGroups: ["Bug"],
    },
    rappel: {
        num: 750179,
        species: "Rappel",
        types: ["Fairy", "Ghost"],
        baseStats: { 
            hp: 41,
            atk: 55,
            def: 43,
            spa: 65,
            spd: 45,
            spe: 47
        },
        abilities: {
            0: "Grim Reminder"
        },
        heightm: 0.5,
        weightkg: 4.45,
		  evos: ["gallette"],
        color: "White",
        eggGroups: ["Amorphous"],
    },
    gallette: {
        num: 7500133,
        species: "Gallette",
        types: ["Fighting", "Ghost"],
        gender: "M",
        baseStats: {
            hp: 76,
            atk: 130,
            def: 75,
            spa: 84,
            spd: 99,
            spe: 82
        },
        abilities: {
            0: "Sleepwalker"
        },
        heightm: 1.345,
        weightkg: 32.25,
		  prevo: "rappel",
		  evoLevel: 28,
        color: "Black",
        eggGroups: ["Amorphous"],
    },
    gallettemegag: {
        num: 7500133,
        species: "Gallette-Mega-G",
        baseSpecies: "Gallette",
        forme: "Mega",
        formeLetter: "M",
        types: ["Fighting", "Ghost"],
        gender: "M",
        baseStats: {
            hp: 76,
            atk: 170,
            def: 105,
            spa: 84,
            spd: 99,
            spe: 112
        },
        abilities: {
            0: "Steadfast"
        },
        heightm: 1.345,
        weightkg: 36.65,
        color: "Black",
        eggGroups: ["Amorphous"],
    },
    gallettemegab: {
        num: 7500133,
        species: "Gallette-Mega-B",
        baseSpecies: "Gallette",
        forme: "Mega",
        formeLetter: "M",
        types: ["Fighting", "Ghost"],
        gender: "M",
        baseStats: {
            hp: 76,
            atk: 180,
            def: 85,
            spa: 94,
            spd: 119,
            spe: 92
        },
        abilities: {
            0: "Prankster"
        },
        heightm: 1.445,
        weightkg: 32.75,
        color: "Black",
        eggGroups: ["Amorphous"],
    },
    amarunt: {
        num: 750180,
        species: "Amarunt",
        types: ["Ice", "Dragon"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: { 
            hp: 72,
            atk: 89,
            def: 68,
            spa: 61,
            spd: 59,
            spe: 62
        },
        abilities: {
            0: "Absolute Zero"
        },
        heightm: 1.05,
        weightkg: 25.6,
		  evos: ["aurantrum"],
        color: "Brown",
        eggGroups: ["Monster"],
    },
    aurantrum: {
        num: 7500134,
        species: "Aurantrum",
        types: ["Ice", "Dragon"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 112,
            atk: 109,
            def: 105,
            spa: 94,
            spd: 85,
            spe: 74
        },
        abilities: {
            0: "Absolute Zero"
        },
        heightm: 2.59,
        weightkg: 247.5,
		  prevo: "amarunt",
		  evoLevel: 39,
        color: "Red",
        eggGroups: ["Monster"],
    },
    ferrolix: {
        num: 750181,
        species: "Ferrolix",
        types: ["Grass", "Rock"],
        baseStats: { 
            hp: 48,
            atk: 60,
            def: 130,
            spa: 60,
            spd: 77,
            spe: 45
        },
        abilities: {
            0: "Durable Barbs"
        },
        heightm: 4.7,
        weightkg: 114.4,
		  evos: ["steelthorn"],
        color: "Gray",
        eggGroups: ["Mineral"],
    },
    steelthorn: {
        num: 7500135,
        species: "Steelthorn",
        types: ["Grass", "Steel"],
        baseStats: {
            hp: 85,
            atk: 100,
            def: 176,
            spa: 65,
            spd: 101,
            spe: 35
        },
        abilities: {
            0: "Durable Barbs"
        },
        heightm: 5.09,
        weightkg: 255,
		  prevo: "ferrolix",
		  evoLevel: 40,
        color: "Gray",
        eggGroups: ["Mineral"],
    },
    steelthornmega: {
        num: 7500135,
        species: "Steelthorn-Mega",
        baseSpecies: "Steelthorn",
        forme: "Mega",
        formeLetter: "M",
        types: ["Grass", "Steel"],
        baseStats: {
            hp: 85,
            atk: 140,
            def: 206,
            spa: 65,
            spd: 131,
            spe: 35
        },
        abilities: {
            0: "Sand Force"
        },
        heightm: 6.39,
        weightkg: 595,
        color: "Gray",
        eggGroups: ["Mineral"],
    },
    venoran: {
        num: 750182,
        species: "Venoran",
        types: ["Poison", "Bug"],
        gender: "F",
        baseStats: { 
            hp: 60,
            atk: 58,
            def: 57,
            spa: 48,
            spd: 50,
            spe: 46
        },
        abilities: {
            0: "Tainted Lens"
        },
        heightm: 0.7,
        weightkg: 18.5,
		  evos: ["venoqueen"],
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    venoqueen: {
        num: 7500136,
        species: "Venoqueen",
        types: ["Ground", "Bug"],
        gender: "F",
        baseStats: {
            hp: 90,
            atk: 97,
            def: 73,
            spa: 92,
            spd: 80,
            spe: 83
        },
        abilities: {
            0: "Tainted Lens"
        },
        heightm: 1.4,
        weightkg: 36.25,
		  prevo: "venoran",
		  evoLevel: 24,
        color: "Purple",
        eggGroups: ["Undiscovered"],
    },
       polyform2: {
        num: 7500137,
        species: "Polyform2",
        types: ["Normal"],
        gender: "N",
        baseStats: {
            hp: 98,
            atk: 75,
            def: 90,
            spa: 91,
            spd: 90,
            spe: 65
        },
        abilities: {
            0: "Aeroform"
        },
        heightm: 0.455,
        weightkg: 16.65,
        color: "Gray",
        eggGroups: ["Undiscovered"],
        otherFormes: ["polyform2sunny", "polyform2sunsnow", "polyform2rainy", "polyform2snowy", "polyform2sandy", "polyform2spooky"],
    },
    polyform2sunny: {
        num: 7500137,
        species: "Polyform2-Sunny",
        baseSpecies: "Polyform2",
        forme: "Sunny",
        formeLetter: "S",
        types: ["Fire"],
        gender: "N",
        baseStats: {
            hp: 98,
            atk: 75,
            def: 90,
            spa: 91,
            spd: 90,
            spe: 65
        },
        abilities: {
            0: "Drought"
        },
        heightm: 0.455,
        weightkg: 16.65,
        color: "Red",
        eggGroups: ["Undiscovered"],
    },
    polyform2sunsnow: {
        num: 7500137,
        species: "Polyform2",
        species: "Polyform2-Sunsnow",
        baseSpecies: "Polyform2",
        forme: "Sunsnow",
        formeLetter: "S",
        types: ["Fire", "Ice"],
        gender: "N",
        baseStats: {
            hp: 98,
            atk: 75,
            def: 90,
            spa: 91,
            spd: 90,
            spe: 65
        },
        abilities: {
            0: "Solar Snow"
        },
        heightm: 0.455,
        weightkg: 16.65,
        color: "White",
        eggGroups: ["Undiscovered"],
    },
    polyform2rainy: {
        num: 7500137,
        species: "Polyform2",
        species: "Polyform2-Rainy",
        baseSpecies: "Polyform2",
        forme: "Rainy",
        formeLetter: "R",
        types: ["Water"],
        gender: "N",
        baseStats: {
            hp: 98,
            atk: 75,
            def: 90,
            spa: 91,
            spd: 90,
            spe: 65
        },
        abilities: {
            0: "Drizzle"
        },
        heightm: 0.455,
        weightkg: 16.65,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    polyform2snowy: {
        num: 7500137,
        species: "Polyform2",
        species: "Polyform2-Snowy",
        baseSpecies: "Polyform2",
        forme: "Snowy",
        formeLetter: "S",
        types: ["Ice"],
        gender: "N",
        baseStats: {
            hp: 98,
            atk: 75,
            def: 90,
            spa: 91,
            spd: 90,
            spe: 65
        },
        abilities: {
            0: "Snow Warning"
        },
        heightm: 0.455,
        weightkg: 16.65,
        color: "White",
        eggGroups: ["Undiscovered"],
    },
    polyform2sandy: {
        num: 7500137,
        species: "Polyform2",
        species: "Polyform2-Sandy",
        baseSpecies: "Polyform2",
        forme: "Sandy",
        formeLetter: "S",
        types: ["Rock"],
        gender: "N",
        baseStats: {
            hp: 98,
            atk: 75,
            def: 90,
            spa: 91,
            spd: 90,
            spe: 65
        },
        abilities: {
            0: "Sand Stream"
        },
        heightm: 0.455,
        weightkg: 16.65,
        color: "Brown",
        eggGroups: ["Undiscovered"],
    },
    polyform2spooky: {
        num: 7500137,
        species: "Polyform2",
        species: "Polyform2-Spooky",
        baseSpecies: "Polyform2",
        forme: "Spooky",
        formeLetter: "S",
        types: ["Ghost"],
        gender: "N",
        baseStats: {
            hp: 98,
            atk: 75,
            def: 90,
            spa: 91,
            spd: 90,
            spe: 65
        },
        abilities: {
            0: "Summon Spirits"
        },
        heightm: 0.455,
        weightkg: 16.65,
        color: "Purple",
        eggGroups: ["Undiscovered"],
    },
    swaggy: {
        num: 750183,
        species: "Swaggy",
        types: ["Fighting", "Normal"],
        baseStats: { 
            hp: 55,
            atk: 72,
            def: 70,
            spa: 42,
            spd: 80,
            spe: 58
        },
        abilities: {
            0: "Weather Man"
        },
        heightm: 0.5,
        weightkg: 6.5,
		  evos: ["scraftia"],
        color: "Blue",
        eggGroups: ["Dragon"],
    },
    scraftia: {
        num: 7500138,
        species: "Scraftia",
        types: ["Fighting", "Dragon"],
        baseStats: {
            hp: 80,
            atk: 90,
            def: 112,
            spa: 67,
            spd: 120,
            spe: 79
        },
        abilities: {
            0: "Pure Thug"
        },
        heightm: 1.09,
        weightkg: 25.3,
		  prevo: "swaggy",
		  evoLevel: 37,
        color: "Blue",
        eggGroups: ["Dragon"],
    },
    scraftiamega: {
        num: 7500138,
        species: "Scraftia-Mega",
        baseSpecies: "Scraftia",
        forme: "Mega",
        formeLetter: "M",
        types: ["Fighting", "Fairy"],
        baseStats: {
            hp: 80,
            atk: 130,
            def: 132,
            spa: 107,
            spd: 120,
            spe: 79
        },
        abilities: {
            0: "Pixilate"
        },
        heightm: 1.49,
        weightkg: 25.3,
        color: "Blue",
        eggGroups: ["Dragon"],
    },
    swooshi: {
        num: 750184,
        species: "Swooshi",
        types: ["Fairy", "Grass"],
        baseStats: { 
            hp: 70,
            atk: 52,
            def: 70,
            spa: 55,
            spd: 70,
            spe: 50
        },
        abilities: {
            0: "Therapeutic"
        },
        heightm: 0.4,
        weightkg: 4,
		  evos: ["slurpum"],
        color: "Pink",
        eggGroups: ["Fairy"],
    },
    slurpum: {
        num: 7500139,
        species: "Slurpum",
        types: ["Fairy", "Fighting"],
        baseStats: {
            hp: 81,
            atk: 115,
            def: 93,
            spa: 82,
            spd: 77,
            spe: 81
        },
        abilities: {
            0: "Therapeutic"
        },
        heightm: 0.99,
        weightkg: 22.1,
		  prevo: "swooshi",
		  evoLevel: 23,
        color: "Pink",
        eggGroups: ["Fairy"],
    },
    thundersaurus: {
        num: 7500140,
        species: "Thundersaurus",
        types: ["Grass", "Electric"],
        gender: "M",
        baseStats: {
            hp: 90,
            atk: 100,
            def: 90,
            spa: 120,
            spd: 90,
            spe: 100
        },
        abilities: {
            0: "Rapid Growth"
        },
        heightm: 1.755,
        weightkg: 80.5,
        color: "Green",
        eggGroups: ["Undiscovered"],
    },
    thundersaurusmega: {
        num: 7500140,
        species: "Thundersaurus-Mega",
        baseSpecies: "Thundersaurus",
        forme: "Mega",
        formeLetter: "M",
        types: ["Grass", "Electric"],
        baseStats: {
            hp: 90,
            atk: 118,
            def: 130,
            spa: 142,
            spd: 110,
            spe: 100
        },
        abilities: {
            0: "Thick Fat"
        },
        heightm: 2.155,
        weightkg: 136,
        color: "Green",
        eggGroups: ["Undiscovered"],
    },
    rhyhoax: {
        num: 750185,
        species: "Rhyhoax",
        types: ["Normal", "Rock"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: { 
            hp: 112,
            atk: 100,
            def: 72,
            spa: 40,
            spd: 72,
            spe: 20
        },
        abilities: {
            0: "Amazing Bulk"
        },
        heightm: 0.8,
        weightkg: 110,
		  evos: ["rhyperlax"],
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    rhyperlax: {
        num: 7500141,
        species: "Rhyperlax",
        types: ["Normal", "Rock"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 147,
            atk: 135,
            def: 107,
            spa: 70,
            spd: 92,
            spe: 45
        },
        abilities: {
            0: "Amazing Bulk"
        },
        heightm: 2.25,
        weightkg: 371.4,
		  prevo: "rhyhoax",
		  evoLevel: 42,
        color: "Black",
        eggGroups: ["Monster"],
    },
    
    hootoise: {
        num: 7500143,
        species: "Hootoise",
        types: ["Water", "Ghost"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 83,
            atk: 96,
            def: 100,
            spa: 130,
            spd: 120,
            spe: 74
        },
        abilities: {
            0: "Mystic Wave"
        },
        heightm: 1.055,
        weightkg: 47.25,
        color: "Purple",
        eggGroups: ["Undiscovered"],
    },
	 hootoisemega: {
        num: 7500141,
        species: "Hootoise-Mega",
        baseSpecies: "Hootoise",
        forme: "Mega",
        formeLetter: "M",
        types: ["Water", "Ghost"],
        baseStats: {
            hp: 83,
            atk: 116,
            def: 120,
            spa: 180,
            spd: 130,
            spe: 74
        },
        abilities: {
            0: "Mega Launcher"
        },
        heightm: 1.055,
        weightkg: 62.85,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    lietaur: {
        num: 7500144,
        species: "Lietaur",
        types: ["Normal", "Dark"],
        gender: "M",
        baseStats: {
            hp: 79,
            atk: 104,
            def: 82,
            spa: 74,
            spd: 70,
            spe: 118
        },
        abilities: {
            0: "Titanic Strength"
        },
        heightm: 1.245,
        weightkg: 62.95,
        color: "Purple",
        eggGroups: ["Field"],
    },
    laprazone: {
        num: 7500145,
        species: "Laprazone",
        types: ["Ice", "Steel"],
        gender: "N",
        baseStats: {
            hp: 106,
            atk: 77,
            def: 110,
            spa: 110,
            spd: 110,
            spe: 60
        },
        abilities: {
            0: "Hygroscopy"
        },
        heightm: 1.84,
        weightkg: 200,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },
    fasd: {
        num: 750187,
        species: "Fasd",
        types: ["Water", "Dragon"],
        baseStats: { 
            hp: 41,
            atk: 45,
            def: 40,
            spa: 42,
            spd: 57,
            spe: 74
        },
        abilities: {
            0: "Over the Limit"
        },
        heightm: 0.7,
        weightkg: 12.35,
		  evos: ["hydraulic"],
        color: "Black",
        eggGroups: ["Dragon"],
    },
    hydraulic: {
        num: 7500146,
        species: "Hydraulic",
        types: ["Water", "Dragon"],
        baseStats: {
            hp: 103,
            atk: 92,
            def: 94,
            spa: 122,
            spd: 117,
            spe: 99
        },
        abilities: {
            0: "Wonderlust"
        },
        heightm: 4,
        weightkg: 161,
		  prevo: "fasd",
		  evoLevel: 57,
        color: "Black",
        eggGroups: ["Dragon"],
    },
    klinkle: {
        num: 7500147,
        species: "Klinkle",
        types: ["Electric", "Steel"],
        gender: "N",
        baseStats: {
            hp: 70,
            atk: 75,
            def: 77,
            spa: 77,
            spd: 90,
            spe: 112
        },
        abilities: {
            0: "Magnetic Surge"
        },
        heightm: 0.51,
        weightkg: 42.6,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },
    beldurogue: {
        num: 750188,
        species: "Beldurogue",
        types: ["Steel", "Fighting"],
        gender: "M",
        baseStats: { 
            hp: 37,
            atk: 60,
            def: 57,
            spa: 35,
            spd: 47,
            spe: 47
        },
        abilities: {
            0: "Reckless Body"
        },
        heightm: 0.65,
        weightkg: 58.1,
		  evos: ["metanlee"],
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    metanlee: {
        num: 7500148,
        species: "Metanlee",
        types: ["Steel", "Fighting"],
        gender: "M",
        baseStats: {
            hp: 75,
            atk: 138,
            def: 102,
            spa: 65,
            spd: 100,
            spe: 89
        },
        abilities: {
            0: "Reckless Body"
        },
        heightm: 1.55,
        weightkg: 299.9,
		  prevo: "beldurogue",
		  evoLevel: 27,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
	 metanleemega: {
        num: 7500148,
        species: "Metanlee-Mega",
        baseSpecies: "Metanlee",
        forme: "Mega",
        formeLetter: "M",
        gender: "M",
        types: ["Steel", "Fighting"],
        baseStats: {
            hp: 75,
            atk: 138,
            def: 102,
            spa: 65,
            spd: 100,
            spe: 89
        },
        abilities: {
            0: "Tough Claws"
        },
        heightm: 2.45,
        weightkg: 692.8,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    kangoruskhan: {
        num: 7500149,
        species: "Kangorus-Khan",
        types: ["Normal", "Dragon"],
        gender: "F",
        baseStats: {
            hp: 100,
            atk: 131,
            def: 95,
            spa: 60,
            spd: 85,
            spe: 103
        },
        abilities: {
            0: "Khanqueror"
        },
        heightm: 2.005,
        weightkg: 92.75,
        color: "Yellow",
        eggGroups: ["Monster"],
    },
    kangoruskhanmega: {
        num: 7500149,
        species: "Kangorus-Khan-Mega",
        baseSpecies: "Kangorus-Khan",
        forme: "Mega",
        formeLetter: "M",
        types: ["Normal", "Dragon"],
        gender: "F",
        baseStats: {
            hp: 100,
            atk: 161,
            def: 115,
            spa: 80,
				spd: 105,
            spe: 113
        },
        abilities: {
            0: "Parental Bond"
        },
        heightm: 2.005,
        weightkg: 112.75,
        color: "Yellow",
        eggGroups: ["Monster"],
    },
    heebleye: {
        num: 7500150,
        species: "Heebleye",
        types: ["Psychic", "Dark"],
        baseStats: {
            hp: 72,
            atk: 85,
            def: 85,
            spa: 105,
            spd: 90,
            spe: 55
        },
        abilities: {
            0: "Synchrostall"
        },
        heightm: 0.75,
        weightkg: 22.75,
        color: "Purple",
        eggGroups: ["Human-Like"],
    },
	 heebleyemega: {
        num: 7500150,
        species: "Heebleye-Mega",
        baseSpecies: "Heebleye",
        forme: "Mega",
        formeLetter: "M",
        types: ["Psychic", "Dark"],
        baseStats: {
            hp: 72,
            atk: 95,
            def: 135,
            spa: 125,
            spd: 140,
            spe: 25
        },
        abilities: {
            0: "Magic Bounce"
        },
        heightm: 0.75,
        weightkg: 172.75,
        color: "Purple",
        eggGroups: ["Human-Like"],
    },
    crygotran: {
        num: 7500151,
        species: "Crygotran",
        types: ["Ice", "Steel"],
        gender: "N",
        baseStats: {
            hp: 80,
            atk: 70,
            def: 88,
            spa: 120,
            spd: 130,
            spe: 93
        },
        abilities: {
            0: "Permafrost"
        },
        heightm: 1.395,
        weightkg: 289,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    dugterra: {
        num: 7500152,
        species: "Dugterra",
        types: ["Fighting", "Ground"],
        baseStats: {
            hp: 73,
            atk: 124,
            def: 70,
            spa: 61,
            spd: 80,
            spe: 134
        },
        abilities: {
            0: "Prison Cell"
        },
        heightm: 1.31,
        weightkg: 146.65,
        color: "Brown",
        eggGroups: ["Undiscovered"],
    },
    garbagorde: {
        num: 7500153,
        species: "Garbagorde",
        types: ["Poison", "Ground"],
        gender: "N",
        baseStats: {
            hp: 105,
            atk: 105,
            def: 105,
            spa: 70,
            spd: 105,
            spe: 85
        },
        abilities: {
            0: "Heavy Armor"
        },
        heightm: 3.455,
        weightkg: 206.15,
        color: "Green",
        eggGroups: ["Undiscovered"],
    },
    cherform: {
        num: 7500154,
        species: "Cherform",
        types: ["Grass", "Normal"],
        baseStats: {
            hp: 80,
            atk: 75,
            def: 80,
            spa: 88,
            spd: 84,
            spe: 87
        },
        abilities: {
            0: "Weather Front"
        },
        heightm: 0.405,
        weightkg: 5.05,
        color: "Gray",
        eggGroups: ["Fairy"],
     	  otherFormes: ["cherformsunny", "cherformrainy", "cherformsnowy", "cherformsandy", "cherformspooky"],
    },
    cherformsunny: {
        num: 7500154,
        species: "Cherform-Sunny",
        baseSpecies: "Cherform",
        forme: "Sunny",
        formeLetter: "S",
        types: ["Grass", "Fire"],
        baseStats: {
            hp: 80,
            atk: 75,
            def: 80,
            spa: 88,
            spd: 84,
            spe: 87
        },
        abilities: {
            0: "Weather Front"
        },
        heightm: 0.405,
        weightkg: 5.05,
        color: "Red",
        eggGroups: ["Fairy"],
    },
    cherformrainy: {
        num: 7500154,
        species: "Cherform-Rainy",
        baseSpecies: "Cherform",
        forme: "Rainy",
        formeLetter: "R",
        types: ["Grass", "Water"],
        baseStats: {
            hp: 80,
            atk: 75,
            def: 80,
            spa: 88,
            spd: 84,
            spe: 87
        },
        abilities: {
            0: "Weather Front"
        },
        heightm: 0.405,
        weightkg: 5.05,
        color: "Blue",
        eggGroups: ["Fairy"],
    },
    cherformsnowy: {
        num: 7500154,
        species: "Cherform-Snowy",
        baseSpecies: "Cherform",
        forme: "Snowy",
        formeLetter: "S",
        types: ["Grass", "Ice"],
        baseStats: {
            hp: 80,
            atk: 75,
            def: 80,
            spa: 88,
            spd: 84,
            spe: 87
        },
        abilities: {
            0: "Weather Front"
        },
        heightm: 0.405,
        weightkg: 5.05,
        color: "White",
        eggGroups: ["Fairy"],
    },
    cherformsandy: {
        num: 7500154,
        species: "Cherform-Sandy",
        baseSpecies: "Cherform",
        forme: "Sandy",
        formeLetter: "S",
        types: ["Grass", "Rock"],
        baseStats: {
            hp: 80,
            atk: 75,
            def: 80,
            spa: 88,
            spd: 84,
            spe: 87
        },
        abilities: {
            0: "Weather Front"
        },
        heightm: 0.405,
        weightkg: 5.05,
        color: "Brown",
        eggGroups: ["Fairy"],
    },
    cherformspooky: {
        num: 7500154,
        species: "Cherform-Spooky",
        baseSpecies: "Cherform",
        forme: "Spooky",
        formeLetter: "S",
        types: ["Grass", "Ghost"],
        baseStats: {
            hp: 80,
            atk: 75,
            def: 80,
            spa: 88,
            spd: 84,
            spe: 87
        },
        abilities: {
            0: "Weather Front"
        },
        heightm: 0.405,
        weightkg: 5.05,
        color: "Purple",
        eggGroups: ["Fairy"],
    },
    porymask: {
        num: 750189,
        species: "Porymask",
        types: ["Normal", "Ghost"],
        gender: "N",
        baseStats: { 
            hp: 55,
            atk: 45,
            def: 85,
            spa: 73,
            spd: 85,
            spe: 35
        },
        abilities: {
            0: "Negative Body"
        },
        heightm: 0.65,
        weightkg: 19,
		  evos: ["porygrigus"],
        color: "Black",
        eggGroups: ["Mineral"],
    },
    porygrigus: {
        num: 7500155,
        species: "Porygrigus",
        types: ["Normal", "Ghost"],
        gender: "N",
        baseStats: {
            hp: 90,
            atk: 65,
            def: 130,
            spa: 108,
            spd: 100,
            spe: 45
        },
        abilities: {
            0: "Negative Body"
        },
        heightm: 1.155,
        weightkg: 54.5,
		  prevo: "porymask",
		  evoLevel: 34,
        color: "Yellow",
        eggGroups: ["Mineral"],
    },
    zoroldeo: {
        num: 7500156,
        species: "Zoroldeo",
        types: ["Dark", "Fighting"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 75,
            atk: 106,
            def: 81,
            spa: 125,
            spd: 81,
            spe: 115
        },
        abilities: {
            0: "Justice Illusion"
        },
		  heightm: 1.5,
        weightkg: 64.8,
        color: "Yellow",
		  eggGroups: ["Undiscovered"],
    },
    stundos: {
        num: 7500157,
        species: "Stundos",
        types: ["Ground", "Electric"],
        baseStats: {
            hp: 110,
            atk: 88,
            def: 115,
            spa: 123,
            spd: 115,
            spe: 76
        },
        abilities: {
            0: "Power Drain"
        },
        heightm: 1.155,
        weightkg: 31.8,
        color: "Brown",
        eggGroups: ["Undiscovered"],
    },
    mallo: {
        num: 750190,
        species: "Mallo",
        types: ["Fire", "Water"],
        baseStats: { 
            hp: 55,
            atk: 45,
            def: 85,
            spa: 73,
            spd: 85,
            spe: 35
        },
        abilities: {
            0: "Negative Body"
        },
        heightm: 0.5,
        weightkg: 20.65,
		  evos: ["macaroon"],
        color: "Red",
        eggGroups: ["Amorphous"],
    },
	macaroon: {
        num: 7500158,
        species: "Macaroon",
        types: ["Fire", "Ground"],
        baseStats: {
            hp: 90,
            atk: 86,
            def: 104,
            spa: 96,
            spd: 91,
            spe: 44
        },
        abilities: {
            0: "Steam Sauna"
        },
        heightm: 0.84,
        weightkg: 42.45,
		  prevo: "mallo",
		  evoLevel: 34,
        color: "Red",
        eggGroups: ["Amorphous"],
    },
    dank: {
        num: 7500159,
        species: "Dank",
        types: ["Dark", "Fairy"],
        gender: "N",
        baseStats: {
            hp: 70,
            atk: 70,
            def: 120,
            spa: 107,
            spd: 120,
            spe: 102
        },
        abilities: {
            0: "Smoke Body"
        },
        heightm: 0.9,
        weightkg: 28.1,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    ponypom: {
        num: 750191,
        species: "Ponypom",
        types: ["Normal", "Fire"],
        baseStats: { 
            hp: 62,
            atk: 97,
            def: 65,
            spa: 72,
            spd: 70,
            spe: 97
        },
        abilities: {
            0: "Run Away"
        },
        heightm: 0.9,
        weightkg: 20.75,
		  evos: ["rapipom"],
        color: "Purple",
        eggGroups: ["Field"],
    },
    rapipom: {
        num: 7500160,
        species: "Rapipom",
        types: ["Normal", "Fire"],
        baseStats: {
            hp: 80,
            atk: 110,
            def: 78,
            spa: 80,
            spd: 83,
            spe: 120
        },
        abilities: {
            0: "Strike and Pass"
        },
        heightm: 1.445,
        weightkg: 57.65,
		  prevo: "ponypom",
		  evoLevel: 40,
        color: "Purple",
        eggGroups: ["Field"],
    },
    tiniwag: {
        num: 750192,
        species: "Tiniwag",
        types: ["Dragon", "Water"],
        baseStats: { 
            hp: 54,
            atk: 70,
            def: 50,
            spa: 50,
            spd: 50,
            spe: 75
        },
        abilities: {
            0: "Marvelous Diver"
        },
        heightm: 1.2,
        weightkg: 7.85,
		  evos: ["whirlagon"],
        color: "Blue",
        eggGroups: ["Water 1"],
    },
    whirlagon: {
        num: 750193,
        species: "Whirlagon",
        types: ["Dragon", "Water"],
        baseStats: { 
            hp: 73,
            atk: 84,
            def: 75,
            spa: 70,
            spd: 70,
            spe: 90
        },
        abilities: {
            0: "Marvelous Diver"
        },
        heightm: 2.5,
        weightkg: 18.25,
		  prevo: "tiniwag",
		  evos: ["tadpole"],
		  evoLevel: 27,
        color: "Blue",
        eggGroups: ["Water 1"],
    },
    tadpole: {
        num: 7500161,
        species: "Tadpole",
        types: ["Dragon", "Water"],
        baseStats: {
            hp: 100,
            atk: 124,
            def: 105,
            spa: 95,
            spd: 105,
            spe: 85
        },
        abilities: {
            0: "Power Forward"
        },
        heightm: 1.755,
        weightkg: 132,
		  prevo: "whirlagon",
		  evoLevel: 55,
        color: "Brown",
        eggGroups: ["Water 1"],
    },
    draegarados: {
        num: 7500162,
        species: "Draegarados",
        types: ["Poison", "Water"],
        baseStats: {
            hp: 90,
            atk: 110,
            def: 95,
            spa: 89,
            spd: 122,
            spe: 73
        },
        abilities: {
            0: "Venom Glare"
        },
        heightm: 4.15,
        weightkg: 158.25,
        color: "Brown",
        eggGroups: ["Dragon"],
    },
    draegaradosmega: {
        num: 7500162,
        species: "Draegarados-Mega",
        baseSpecies: "Draegarados",
        forme: "Mega",
        formeLetter: "M",
        types: ["Poison", "Dark"],
        baseStats: {
            hp: 90,
            atk: 140,
            def: 125,
            spa: 99,
            spd: 152,
            spe: 73
        },
        abilities: {
            0: "Mold Breaker"
        },
        heightm: 4.15,
        weightkg: 228.25,
        color: "Brown",
        eggGroups: ["Dragon"],
    },
    grangoro: {
        num: 7500163,
        species: "Grangoro",
        types: ["Dark", "Fairy"],
        genderRatio: {
            M: 0.375,
            F: 0.625
        },
        baseStats: {
            hp: 102,
            atk: 132,
            def: 86,
            spa: 74,
            spd: 75,
            spe: 61
        },
        abilities: {
            0: "Terrorize"
        },
        heightm: 1.755,
        weightkg: 92.35,
        color: "Purple",
        eggGroups: ["Field"],
    },
    babuffe: {
        num: 7500164,
        species: "Babuffe",
        types: ["Ghost", "Psychic"],
        baseStats: {
            hp: 137,
            atk: 84,
            def: 71,
            spa: 68,
            spd: 70,
            spe: 59
        },
        abilities: {
            0: "Toll Booth"
        },
        heightm: 1.195,
        weightkg: 20.5,
        color: "Black",
        eggGroups: ["Amorphous"],
    },
    babuffemega: {
        num: 7500164,
        species: "Babuffe-Mega",
        baseSpecies: "Babuffe",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ghost", "Psychic"],
        baseStats: {
            hp: 137,
            atk: 134,
            def: 81,
            spa: 78,
            spd: 90,
            spe: 69
        },
        abilities: {
            0: "Toll Booth"
        },
        heightm: 1.195,
        weightkg: 20.5,
        color: "Black",
        eggGroups: ["Amorphous"],
    },
    galionz: {
        num: 7500165,
        species: "Galion-Z",
        types: ["Normal", "Ice"],
        gender: "N",
        baseStats: {
            hp: 82,
            atk: 80,
            def: 75,
            spa: 137,
            spd: 92,
            spe: 115
        },
        abilities: {
            0: "Adapting Body"
        },
        heightm: 1.195,
        weightkg: 145.25,
        color: "Red",
        eggGroups: ["Mineral"],
    },
    galionzmega: {
        num: 7500164,
        species: "Galion-Z-Mega",
        baseSpecies: "Galion-Z",
        forme: "Mega",
        formeLetter: "M",
        types: ["Normal", "Ice"],
        gender: "N",
        baseStats: {
            hp: 82,
            atk: 120,
            def: 75,
            spa: 177,
            spd: 92,
            spe: 135
        },
        abilities: {
            0: "Refrigerate"
        },
        heightm: 1.195,
        weightkg: 145.25,
        color: "Red",
        eggGroups: ["Mineral"],
    },
    steelweez: {
        num: 7500166,
        species: "Steelweez",
        types: ["Poison", "Steel"],
        gender: "N",
        baseStats: {
            hp: 82,
            atk: 82,
            def: 145,
            spa: 80,
            spd: 130,
            spe: 55
        },
        abilities: {
            0: "Clear Levitation"
        },
        heightm: 1.55,
        weightkg: 107.25,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },
    thunderbee: {
        num: 7500167,
        species: "Thundurbee",
        types: ["Bug", "Electric"],
        gender: "M",
        baseStats: {
            hp: 72,
            atk: 120,
            def: 55,
            spa: 85,
            spd: 90,
            spe: 105
        },
        abilities: {
            0: "Stunning Bug"
        },
        heightm: 1.245,
        weightkg: 45.25,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
    },
    thundurbeemega: {
        num: 7500167,
        species: "Thundurbee-Mega",
        baseSpecies: "Thundurbee",
        forme: "Mega",
        formeLetter: "M",
        types: ["Bug", "Electric"],
        gender: "M",
        baseStats: {
            hp: 72,
            atk: 180,
            def: 55,
            spa: 55,
            spd: 90,
            spe: 175
        },
        abilities: {
            0: "Adaptability"
        },
        heightm: 1.645,
        weightkg: 45.25,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
    },
    gallatross: {
        num: 7500168,
        species: "Gallatross",
        types: ["Electric", "Fighting"],
        gender: "M",
        baseStats: {
            hp: 86,
            atk: 130,
            def: 82,
            spa: 95,
            spd: 107,
            spe: 75
        },
        abilities: {
            0: "Ground Drive"
        },
        heightm: 1.855,
        weightkg: 66.25,
        color: "Blue",
        eggGroups: ["Amorphous"],
    },
    gallatrossmega: {
        num: 7500168,
        species: "Gallatross-Mega",
        baseSpecies: "Gallatross",
        forme: "Mega",
        formeLetter: "M",
        types: ["Electric", "Fighting"],
        gender: "M",
        baseStats: {
            hp: 86,
            atk: 170,
            def: 112,
            spa: 95,
            spd: 107,
            spe: 105
        },
        abilities: {
            0: "Ground Drive"
        },
        heightm: 1.855,
        weightkg: 66.25,
        color: "Blue",
        eggGroups: ["Amorphous"],
    },
    victant: {
        num: 7500169,
        species: "Victant",
        types: ["Bug", "Fire"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 85,
            atk: 111,
            def: 110,
            spa: 74,
            spd: 85,
            spe: 116
        },
        abilities: {
            0: "Champion"
        },
        heightm: 0.355,
        weightkg: 18.5,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },
    rosetteeternal: {
        num: 7500170,
        species: "Rosette-Eternal",
        types: ["Fairy", "Poison"],
        gender: "F",
        baseStats: {
            hp: 77,
            atk: 67,
            def: 65,
            spa: 135,
            spd: 126,
            spe: 101
        },
        abilities: {
            0: "Poison Veil"
        },
        heightm: 0.545,
        weightkg: 7.7,
        color: "Green",
        eggGroups: ["Undiscovered"],
    },
    conkelvire: {
        num: 7500171,
        species: "Conkelvire",
        types: ["Fighting", "Electric"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 100,
            atk: 141,
            def: 91,
            spa: 85,
            spd: 85,
            spe: 80
        },
        abilities: {
            0: "Top Gear"
        },
        heightm: 1.6,
        weightkg: 112.8,
        color: "Brown",
        eggGroups: ["Human-Like"],
    },
    landia: {
        num: 7500172,
        species: "Landia",
        types: ["Dragon", "Flying"],
        baseStats: {
            hp: 86,
            atk: 105,
            def: 100,
            spa: 75,
            spd: 107,
            spe: 74
        },
        abilities: {
            0: "Dragon Hide"
        },
        heightm: 1.345,
        weightkg: 79.8,
        color: "Blue",
        eggGroups: ["Dragon"],
    },
    landiamega: {
        num: 7500172,
        species: "Landia-Mega",
        baseSpecies: "Landia",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dragon", "Fairy"],
        baseStats: {
            hp: 86,
            atk: 145,
            def: 120,
            spa: 115,
            spd: 107,
            spe: 74
        },
        abilities: {
            0: "Dragon Hide"
        },
        heightm: 1.745,
        weightkg: 79.8,
        color: "Blue",
        eggGroups: ["Dragon"],
    },
    odelay: {
        num: 7500173,
        species: "Odelay",
        types: ["Water", "Rock"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 78,
            atk: 91,
            def: 148,
            spa: 93,
            spd: 86,
            spe: 66
        },
        abilities: {
            0: "Horsetail Armor"
        },
        heightm: 1.5,
        weightkg: 96.45,
        color: "Purple",
        eggGroups: ["Water 3"],
    },
    thundercast: {
        num: 7500174,
        species: "Thundercast",
        types: ["Electric", "Normal"],
        gender: "M",
        baseStats: {
            hp: 74,
            atk: 102,
            def: 70,
            spa: 107,
            spd: 75,
            spe: 110
        },
        abilities: {
            0: "Weather Caster"
        },
        heightm: 0.9,
        weightkg: 30.9,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },
    sceptetteeternal: {
        num: 7500175,
        species: "Sceptette-Eternal",
        types: ["Fairy", "Grass"],
        gender: "F",
        baseStats: {
            hp: 72,
            atk: 75,
            def: 66,
            spa: 125,
            spd: 116,
            spe: 126
        },
        abilities: {
            0: "Surge Bloom"
        },
        heightm: 0.95,
        weightkg: 26.55,
        color: "White",
        eggGroups: ["Undiscovered"],
    },
    sceptetteeternalmega: {
        num: 7500175,
        species: "Sceptette-Eternal-Mega",
        baseSpecies: "Sceptette-Eternal",
        forme: "Mega",
        formeLetter: "M",
        types: ["Fairy", "Dragon"],
        gender: "F",
        baseStats: {
            hp: 72,
            atk: 100,
            def: 76,
            spa: 165,
            spd: 126,
            spe: 151
        },
        abilities: {
            0: "Lightning Rod"
        },
        heightm: 0.95,
        weightkg: 26.55,
        color: "White",
        eggGroups: ["Undiscovered"],
    },
    raillink: {
        num: 7500176,
        species: "Rail Link",
        types: ["Normal", "Water"],
        baseStats: {
            hp: 170,
            atk: 135,
            def: 82,
            spa: 102,
            spd: 65,
            spe: 90
        },
        abilities: {
            0: "Choo Choo"
        },
        heightm: 8.255,
        weightkg: 264.25,
        color: "Blue",
        eggGroups: ["Field"],
    },
    agrippa: {
        num: 7500177,
        species: "Agrippa",
        types: ["Fighting", "Steel"],
        baseStats: {
            hp: 90,
            atk: 134,
            def: 99,
            spa: 74,
            spd: 80,
            spe: 74
        },
        abilities: {
            0: "Caestus"
        },
        heightm: 1.855,
        weightkg: 103,
        color: "Red",
        eggGroups: ["Human-Like"],
    },
    basculinbasculin: {
        num: 550,
        species: "Basculin-Basculin",
        baseSpecies: "Basculin",
        forme: "Basculin",
        formeLetter: "B",
        types: ["Water"],
        baseStats: {
            hp: 80,
            atk: 102,
            def: 75,
            spa: 90,
            spd: 65,
            spe: 108
        },
        abilities: {
            0: "Fusion Powered"
        },
        heightm: 1,
        weightkg: 18,
        color: "Green",
        eggGroups: ["Water 2"],
    },
    mewelli: {
        num: 7500179,
        species: "Mewelli",
        types: ["Water", "Psychic"],
        baseStats: {
            hp: 100,
            atk: 97,
            def: 102,
            spa: 97,
            spd: 102,
            spe: 81
        },
        abilities: {
            0: "Unparalleled Technique"
        },
        heightm: 1.31,
        weightkg: 69.5,
        color: "White",
        eggGroups: ["Undiscovered"],
    },
    bael: {
        num: 7500180,
        species: "Bael",
        types: ["Ghost", "Dragon"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 86,
            atk: 110,
            def: 100,
            spa: 82,
            spd: 88,
            spe: 100
        },
        abilities: {
            0: "Obliterate"
        },
        heightm: 3.045,
        weightkg: 158.75,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    baelmega: {
        num: 7500180,
        species: "Bael-Mega",
        baseSpecies: "Bael",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ghost", "Dragon"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 86,
            atk: 160,
            def: 110,
            spa: 92,
            spd: 108,
            spe: 110
        },
        abilities: {
            0: "Prankster"
        },
        heightm: 3.145,
        weightkg: 159.25,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    simigoat: {
        num: 7500181,
        species: "Simigoat",
        types: ["Fire", "Grass"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 109,
            atk: 109,
            def: 72,
            spa: 107,
            spd: 82,
            spe: 94
        },
        abilities: {
            0: "Vegetarian"
        },
        heightm: 1.345,
        weightkg: 59.5,
        color: "Red",
        eggGroups: ["Field"],
    },
    miltrank: {
        num: 7500182,
        species: "Miltrank",
        types: ["Normal", "Steel"],
        gender: "F",
        baseStats: {
            hp: 101,
            atk: 105,
            def: 105,
            spa: 85,
            spd: 100,
            spe: 88
        },
        abilities: {
            0: "Thermogenesis"
        },
        heightm: 1.445,
        weightkg: 252.75,
        color: "Brown",
        eggGroups: ["Undiscovered"],
    },
    furfraught: {
        num: 7500183,
        species: "Furfraught",
        types: ["Normal", "Fighting"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 91,
            atk: 103,
            def: 101,
            spa: 79,
            spd: 92,
            spe: 93
        },
        abilities: {
            0: "Shaggy Coat"
        },
        heightm: 1.395,
        weightkg: 59,
        color: "White",
        eggGroups: ["Field"],
    },
    tyranking: {
        num: 7500184,
        species: "Tyranking",
        types: ["Rock", "Poison"],
        gender: "M",
        baseStats: {
            hp: 100,
            atk: 128,
            def: 103,
            spa: 100,
            spd: 97,
            spe: 83
        },
        abilities: {
            0: "Venom Stream"
        },
        heightm: 1.705,
        weightkg: 132,
        color: "Green",
        eggGroups: ["Monster"],
    },
    tyrankingmega: {
        num: 7500184,
        species: "Tyranking-Mega",
        baseSpecies: "Tyranking",
        forme: "Mega",
        formeLetter: "M",
        types: ["Rock", "Poison"],
        gender: "M",
        baseStats: {
            hp: 100,
            atk: 158,
            def: 143,
            spa: 100,
            spd: 117,
            spe: 93
        },
        abilities: {
            0: "Sand Stream"
        },
        heightm: 2.205,
        weightkg: 185,
        color: "Green",
        eggGroups: ["Monster"],
    },
    supermuk: {
        num: 7500185,
        species: "Supermuk",
        types: ["Ghost", "Poison"],
        baseStats: {
            hp: 105,
            atk: 112,
            def: 108,
            spa: 71,
            spd: 97,
            spe: 62
        },
        abilities: {
            0: "Golden Touch"
        },
        heightm: 1.445,
        weightkg: 34.5,
        color: "Purple",
        eggGroups: ["Amorphous"],
    },
    mentor: {
        num: 7500186,
        species: "Mentor",
        types: ["Ghost", "Steel"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 82,
            atk: 117,
            def: 132,
            spa: 80,
            spd: 132,
            spe: 57
        },
        abilities: {
            0: "Black Hole"
        },
        heightm: 1.905,
        weightkg: 328.3,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    mentormega: {
        num: 7500186,
        species: "Mentor-Mega",
        baseSpecies: "Mentor",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ghost", "Steel"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 82,
            atk: 127,
            def: 152,
            spa: 90,
            spd: 152,
            spe: 97
        },
        abilities: {
            0: "Tough Claws"
        },
        heightm: 2.805,
        weightkg: 721.2,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    elektra: {
        num: 7500187,
        species: "Elektra",
        types: ["Psychic", "Electric"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 57,
            atk: 50,
            def: 57,
            spa: 127,
            spd: 87,
            spe: 150
        },
        abilities: {
            0: "Echo"
        },
        heightm: 1.345,
        weightkg: 57.3,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
    },
    elektramega: {
        num: 7500187,
        species: "Elektra-Mega",
        baseSpecies: "Elektra",
        forme: "Mega",
        formeLetter: "M",
        types: ["Psychic", "Electric"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 57,
            atk: 50,
            def: 77,
            spa: 167,
            spd: 97,
            spe: 180
        },
        abilities: {
            0: "Trace"
        },
        heightm: 1.045,
        weightkg: 57.3,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
    },
    escagon: {
        num: 7500188,
        species: "Escagon",
        types: ["Dragon", "Steel"],
        baseStats: {
            hp: 85,
            atk: 128,
            def: 103,
            spa: 80,
            spd: 103,
            spe: 70
        },
        abilities: {
            0: "Hyper Protection"
        },
        heightm: 1.5,
        weightkg: 57.5,
        color: "Gray",
        eggGroups: ["Bug"],
    },
    golmanitan: {
        num: 7500189,
        species: "Golmanitan",
        types: ["Ground", "Fire"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 100,
            atk: 142,
            def: 70,
            spa: 43,
            spd: 70,
            spe: 95
        },
        abilities: {
            0: "Careless Force"
        },
        heightm: 2.045,
        weightkg: 211.45,
        color: "Red",
        eggGroups: ["Undiscovered"],
    },
    sunflorrim: {
        num: 7500190,
        species: "Sunflorrim",
        types: ["Grass"],
        baseStats: {
            hp: 82,
            atk: 77,
            def: 72,
            spa: 106,
            spd: 91,
            spe: 67
        },
        abilities: {
            0: "Photosynthetic Grace"
        },
        heightm: 0.65,
        weightkg: 8.9,
        color: "Yellow",
        eggGroups: ["Grass"],
    },
    unconventional: {
        num: 7500191,
        species: "Unconventional",
        types: ["Fire", "Rock"],
        gender: "N",
        baseStats: {
            hp: 87,
            atk: 82,
            def: 100,
            spa: 132,
            spd: 87,
            spe: 70
        },
        abilities: {
            0: "Sand Slurp"
        },
        heightm: 1.345,
        weightkg: 181.5,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
    },
    ambiccino: {
        num: 7500192,
        species: "Ambiccino",
        genderRatio: {M: 0.375, F: 0.625},
        baseStats: {
            hp: 90,
            atk: 113,
            def: 78,
            spa: 78,
            spd: 78,
            spe: 130
        },
        abilities: {
            0: "Technician"
        },
        heightm: 0.85,
        weightkg: 13.9,
        color: "Gray",
        eggGroups: ["Field"],
    },
    parp: {
        num: 7500193,
        species: "Parp",
        types: ["Normal", "Dark"],
        baseStats: {
            hp: 74,
            atk: 89,
            def: 65,
            spa: 86,
            spd: 67,
            spe: 120
        },
        abilities: {
            0: "Completely Serious"
        },
        heightm: 1.04,
        weightkg: 34.75,
        color: "Purple",
        eggGroups: ["Field"],
    },
    zyflare: {
        num: 7500194,
        species: "Zyflare",
        types: ["Fire", "Dragon"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 106,
            atk: 120,
            def: 90,
            spa: 100,
            spd: 115,
            spe: 80
        },
        abilities: {
            0: "Sun Aura"
        },
        heightm: 2.945,
        weightkg: 165,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    probs: {
        num: 7500195,
        species: "Probs",
        types: ["Dragon", "Steel"],
        gender: "F",
        baseStats: {
            hp: 90,
            atk: 67,
            def: 122,
            spa: 92,
            spd: 140,
            spe: 90
        },
        abilities: {
            0: "Mine Field"
        },
        heightm: 1.4,
        weightkg: 190,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },
    probsmega: {
        num: 7500195,
        species: "Probs-Mega",
        baseSpecies: "Probs",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dragon", "Steel"],
        gender: "F",
        baseStats: {
            hp: 90,
            atk: 87,
            def: 152,
            spa: 122,
            spd: 160,
            spe: 90
        },
        abilities: {
            0: "Levitate"
        },
        heightm: 1.4,
        weightkg: 190,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },
    hentai: {
        num: 7500196,
        species: "Hentai",
        types: ["Poison", "Fire"],
        baseStats: {
            hp: 90,
            atk: 80,
            def: 88,
            spa: 120,
            spd: 120,
            spe: 98
        },
        abilities: {
            0: "Greek Fire"
        },
        heightm: 1.65,
        weightkg: 242.5,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },
    tornastar: {
        num: 7500197,
        species: "Tornastar",
        types: ["Flying", "Water"],
        gender: "M",
        baseStats: {
            hp: 80,
            atk: 90,
            def: 100,
            spa: 131,
            spd: 90,
            spe: 85
        },
        abilities: {
            0: "Tropical Storm"
        },
        heightm: 1.245,
        weightkg: 49,
        color: "Green",
        eggGroups: ["Undiscovered"],
    },
    magmovire: {
        num: 7500198,
        species: "Magmovire",
        types: ["Fire", "Electric"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 85,
            atk: 119,
            def: 77,
            spa: 120,
            spd: 100,
            spe: 99
        },
        abilities: {
            0: "Flame Drive"
        },
        heightm: 1.7,
        weightkg: 103.3,
        color: "Red",
        eggGroups: ["Human-Like"],
    },
    volgon: {
        num: 7500199,
        species: "Volgon",
        types: ["Ground", "Electric"],
        baseStats: {
            hp: 93,
            atk: 100,
            def: 100,
            spa: 127,
            spd: 92,
            spe: 86
        },
        abilities: {
            0: "Levitate"
        },
        heightm: 1.755,
        weightkg: 63.5,
        color: "Blue",
        eggGroups: ["Bug"],
    },
    tapuloom: {
        num: 7500200,
        species: "Tapu Loom",
        types: ["Grass", "Fighting"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 85,
            atk: 140,
            def: 100,
            spa: 75,
            spd: 80,
            spe: 75
        },
        abilities: {
            0: "Grassy Heal"
        },
        heightm: 1.55,
        weightkg: 42.35,
        color: "Green",
        eggGroups: ["Undiscovered"],
    },
    lucashadow: {
        num: 7500201,
        species: "Lucashadow",
        types: ["Fighting", "Ghost"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 80,
            atk: 131,
            def: 80,
            spa: 110,
            spd: 80,
            spe: 120
        },
        abilities: {
            0: "Eye of Horus"
        },
        heightm: 0.95,
        weightkg: 38.1,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },
    lucashadowmega: {
        num: 7500201,
        species: "Lucashadow-Mega",
        baseSpecies: "Lucashadow",
        forme: "Mega",
        formeLetter: "M",
        types: ["Fighting", "Ghost"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 80,
            atk: 166,
            def: 98,
            spa: 135,
            spd: 80,
            spe: 142
        },
        abilities: {
            0: "Adaptability"
        },
        heightm: 1.05,
        weightkg: 41.6,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },
    cradilego: {
        num: 7500202,
        species: "Cradilego",
        types: ["Poison", "Grass"],
        gender: "N",
        baseStats: {
            hp: 102,
            atk: 67,
            def: 86,
            spa: 121,
            spd: 123,
            spe: 74
        },
        abilities: {
            0: "Insidious Tentacles"
        },
        heightm: 1.345,
        weightkg: 57.95,
        color: "White",
        eggGroups: ["Undiscovered"],
    },
    astrolith: {
        num: 7500203,
        species: "Astrolith",
		  baseForme: "Clear",
        types: ["Rock", "Normal"],
        gender: "N",
        baseStats: {
            hp: 85,
            atk: 75,
            def: 85,
            spa: 75,
            spd: 85,
            spe: 65
        },
        abilities: {
            0: "Cosmology"
        },
        heightm: 0.3,
        weightkg: 20.4,
        color: "Brown",
        eggGroups: ["Undiscovered"],
     	  otherFormes: ["astrolithstar", "astrolithcomet", "astrolithneutron", "astrolithmeteor", "astrolithnova"],
    },
    astrolithstar: {
        num: 7500203,
        species: "Astrolith-Star",
        baseSpecies: "Astrolith",
        forme: "Star",
        formeLetter: "S",
        types: ["Rock", "Fire"],
        gender: "N",
        baseStats: {
            hp: 85,
            atk: 115,
            def: 45,
            spa: 115,
            spd: 45,
            spe: 125
        },
        abilities: {
            0: "Cosmology"
        },
        heightm: 0.3,
        weightkg: 0.55,
        color: "Red",
        eggGroups: ["Undiscovered"],
    },
    astrolithcomet: {
        num: 7500203,
        species: "Astrolith-Comet",
        baseSpecies: "Astrolith",
        forme: "Comet",
        formeLetter: "C",
        types: ["Rock", "Water"],
        gender: "N",
        baseStats: {
            hp: 85,
            atk: 115,
            def: 45,
            spa: 115,
            spd: 45,
            spe: 125
        },
        abilities: {
            0: "Cosmology"
        },
        heightm: 0.3,
        weightkg: 0.55,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    astrolithneutron: {
        num: 7500203,
        species: "Astrolith-Neutron",
        baseSpecies: "Astrolith",
        forme: "Neutron",
        formeLetter: "N",
        types: ["Rock", "Ice"],
        gender: "N",
        baseStats: {
            hp: 85,
            atk: 115,
            def: 45,
            spa: 115,
            spd: 45,
            spe: 125
        },
        abilities: {
            0: "Cosmology"
        },
        heightm: 0.3,
        weightkg: 0.55,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    astrolithmeteor: {
        num: 7500203,
        species: "Astrolith-Meteor",
        baseSpecies: "Astrolith",
        forme: "Meteor",
        formeLetter: "M",
        types: ["Rock", "Flying"],
        gender: "N",
        baseStats: {
            hp: 85,
            atk: 115,
            def: 45,
            spa: 115,
            spd: 45,
            spe: 125
        },
        abilities: {
            0: "Cosmology"
        },
        heightm: 0.3,
        weightkg: 0.55,
        color: "Red",
        eggGroups: ["Undiscovered"],
    },
    astrolithnova: {
        num: 7500203,
        species: "Astrolith-Nova",
        baseSpecies: "Astrolith",
        forme: "Nova",
        formeLetter: "N",
        types: ["Rock", "Ghost"],
        gender: "N",
        baseStats: {
            hp: 85,
            atk: 115,
            def: 45,
            spa: 115,
            spd: 45,
            spe: 125
        },
        abilities: {
            0: "Cosmology"
        },
        heightm: 0.3,
        weightkg: 0.55,
        color: "Purple",
        eggGroups: ["Undiscovered"],
    },
    kyraurem: {
        num: 7500204,
        species: "Kyraurem",
        types: ["Rock", "Ice"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 120,
            atk: 140,
            def: 108,
            spa: 120,
            spd: 103,
            spe: 78
        },
        abilities: {
            0: "Sandy Storm"
        },
        heightm: 2.505,
        weightkg: 263.5,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },
    kyauremmega: {
        num: 7500204,
        species: "Kyaurem-Mega",
        baseSpecies: "Kyaurem",
        forme: "Mega",
        formeLetter: "M",
        types: ["Rock", "Ice"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 120,
            atk: 170,
            def: 148,
            spa: 120,
            spd: 123,
            spe: 88
        },
        abilities: {
            0: "Sand Stream"
        },
        heightm: 2.505,
        weightkg: 263.5,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },
    hetrarna: {
        num: 7500205,
        species: "Hetrarna",
        types: ["Fire", "Fairy"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 93,
            atk: 93,
            def: 114,
            spa: 137,
            spd: 114,
            spe: 91
        },
        abilities: {
            0: "Burning Heart"
        },
        heightm: 1.345,
        weightkg: 255.25,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },
    xurkivoir: {
        num: 7500206,
        species: "Xurkivoir",
        types: ["Electric", "Fairy"],
        gender: "N",
        baseStats: {
            hp: 80,
            atk: 80,
            def: 68,
            spa: 165,
            spd: 100,
            spe: 90
        },
        abilities: {
            0: "Boost Trace"
        },
        heightm: 2.705,
        weightkg: 74.2,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    xurkivoirmega: {
        num: 7500206,
        species: "Xurkivoir-Mega",
        baseSpecies: "Xurkivoir",
        forme: "Mega",
        formeLetter: "M",
        types: ["Electric", "Fairy"],
        gender: "N",
        baseStats: {
            hp: 80,
            atk: 100,
            def: 68,
            spa: 205,
            spd: 120,
            spe: 110
        },
        abilities: {
            0: "Pixilate"
        },
        heightm: 2.705,
        weightkg: 74.2,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    vikarona: {
        num: 7500207,
        species: "Vikarona",
        types: ["Electric", "Fire"],
        baseStats: {
            hp: 91,
            atk: 75,
            def: 88,
            spa: 150,
            spd: 100,
            spe: 82
        },
        abilities: {
            0: "Hot Air Balloon"
        },
        heightm: 1.55,
        weightkg: 45.5,
        color: "Blue",
        eggGroups: ["Bug"],
    },
    mudgoat: {
        num: 7500208,
        species: "Mudgoat",
        types: ["Grass", "Ground"],
        baseStats: {
            hp: 121,
            atk: 122,
            def: 91,
            spa: 86,
            spd: 93,
            spe: 61
        },
        abilities: {
            0: "Masochist"
        },
        heightm: 2.095,
        weightkg: 505.5,
        color: "Brown",
        eggGroups: ["Field"],
    },
    theridel: {
        num: 7500209,
        species: "Theridel",
        types: ["Ghost", "Ground"],
        gender: "M",
        baseStats: {
            hp: 74,
            atk: 100,
            def: 90,
            spa: 145,
            spd: 85,
            spe: 105
        },
        abilities: {
            0: "Flaming Presence"
        },
        heightm: 1.145,
        weightkg: 51.15,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    shrek: {
        num: 7500210,
        species: "Shrek",
        types: ["Grass", "Fairy"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 82,
            atk: 55,
            def: 87,
            spa: 90,
            spd: 97,
            spe: 67
        },
        abilities: {
            0: "Fatal Grace"
        },
        heightm: 0.955,
        weightkg: 21.25,
        color: "Brown",
        eggGroups: ["Fairy"],
    },
    vitality: {
        num: 7500211,
        species: "Vitality",
        types: ["Normal", "Fire"],
        gender: "N",
        baseStats: {
            hp: 117,
            atk: 107,
            def: 97,
            spa: 97,
            spd: 97,
            spe: 107
        },
        abilities: {
            0: "Victory System"
        },
        heightm: 1.36,
        weightkg: 52.25,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },
	
    vitalityfire: {
        num: 7500211,
        species: "Vitality-Fire",
        baseSpecies: "Vitality",
        forme: "Fire",
        formeLetter: "F",
        gender: "N",
        types: ["Fire"],
        baseStats: {
            hp: 117,
            atk: 107,
            def: 97,
            spa: 97,
            spd: 97,
            spe: 107
        },
        abilities: {
            0: "Victory System"
        },
        heightm: 1.36,
        weightkg: 52.25,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },


    vitalitywater: {
        num: 7500211,
        species: "Vitality-Water",
        baseSpecies: "Vitality",
        forme: "Water",
        formeLetter: "W",
        gender: "N",
        types: ["Water", "Fire"],
        baseStats: {
            hp: 117,
            atk: 107,
            def: 97,
            spa: 97,
            spd: 97,
            spe: 107
        },
        abilities: {
            0: "Victory System"
        },
        heightm: 1.36,
        weightkg: 52.25,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },


    vitalityelectric: {
        num: 7500211,
        species: "Vitality-Electric",
        baseSpecies: "Vitality",
        forme: "Electric",
        formeLetter: "E",
        gender: "N",
        types: ["Electric", "Fire"],
        baseStats: {
            hp: 117,
            atk: 107,
            def: 97,
            spa: 97,
            spd: 97,
            spe: 107
        },
        abilities: {
            0: "Victory System"
        },
        heightm: 1.36,
        weightkg: 52.25,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },


    vitalitygrass: {
        num: 7500211,
        species: "Vitality-Grass",
        baseSpecies: "Vitality",
        forme: "Grass",
        formeLetter: "G",
        gender: "N",
        types: ["Grass", "Fire"],
        baseStats: {
            hp: 117,
            atk: 107,
            def: 97,
            spa: 97,
            spd: 97,
            spe: 107
        },
        abilities: {
            0: "Victory System"
        },
        heightm: 1.36,
        weightkg: 52.25,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },


    vitalityice: {
        num: 7500211,
        species: "Vitality-Ice",
        baseSpecies: "Vitality",
        forme: "Ice",
        formeLetter: "I",
        gender: "N",
        types: ["Ice", "Fire"],
        baseStats: {
            hp: 117,
            atk: 107,
            def: 97,
            spa: 97,
            spd: 97,
            spe: 107
        },
        abilities: {
            0: "Victory System"
        },
        heightm: 1.36,
        weightkg: 52.25,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },
    vitalityfighting: {
        num: 7500211,
        species: "Vitality-Fighting",
        baseSpecies: "Vitality",
        forme: "Fighting",
        formeLetter: "F",
        gender: "N",
        types: ["Fighting", "Fire"],
        baseStats: {
            hp: 117,
            atk: 107,
            def: 97,
            spa: 97,
            spd: 97,
            spe: 107
        },
        abilities: {
            0: "Victory System"
        },
        heightm: 1.36,
        weightkg: 52.25,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },


    vitalitypoison: {
        num: 7500211,
        species: "Vitality-Poison",
        baseSpecies: "Vitality",
        forme: "Poison",
        formeLetter: "P",
        gender: "N",
        types: ["Poison", "Fire"],
        baseStats: {
            hp: 117,
            atk: 107,
            def: 97,
            spa: 97,
            spd: 97,
            spe: 107
        },
        abilities: {
            0: "Victory System"
        },
        heightm: 1.36,
        weightkg: 52.25,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },
    vitalityground: {
        num: 7500211,
        species: "Vitality-Ground",
        baseSpecies: "Vitality",
        forme: "Ground",
        formeLetter: "G",
        gender: "N",
        types: ["Ground", "Fire"],
        baseStats: {
            hp: 117,
            atk: 107,
            def: 97,
            spa: 97,
            spd: 97,
            spe: 107
        },
        abilities: {
            0: "Victory System"
        },
        heightm: 1.36,
        weightkg: 52.25,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },
    vitalityflying: {
        num: 7500211,
        species: "Vitality-Flying",
        baseSpecies: "Vitality",
        forme: "Flying",
        formeLetter: "F",
        gender: "N",
        types: ["Flying", "Fire"],
        baseStats: {
            hp: 117,
            atk: 107,
            def: 97,
            spa: 97,
            spd: 97,
            spe: 107
        },
        abilities: {
            0: "Victory System"
        },
        heightm: 1.36,
        weightkg: 52.25,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },
    vitalitypsychic: {
        num: 7500211,
        species: "Vitality-Psychic",
        baseSpecies: "Vitality",
        forme: "Psychic",
        formeLetter: "P",
        gender: "N",
        types: ["Psychic", "Fire"],
        baseStats: {
            hp: 117,
            atk: 107,
            def: 97,
            spa: 97,
            spd: 97,
            spe: 107
        },
        abilities: {
            0: "Victory System"
        },
        heightm: 1.36,
        weightkg: 52.25,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },


    vitalitybug: {
        num: 7500211,
        species: "Vitality-Bug",
        baseSpecies: "Vitality",
        forme: "Bug",
        formeLetter: "B",
        gender: "N",
        types: ["Bug", "Fire"],
        baseStats: {
            hp: 117,
            atk: 107,
            def: 97,
            spa: 97,
            spd: 97,
            spe: 107
        },
        abilities: {
            0: "Victory System"
        },
        heightm: 1.36,
        weightkg: 52.25,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },


    vitalitydragon: {
        num: 7500211,
        species: "Vitality-Dragon",
        baseSpecies: "Vitality",
        forme: "Dragon",
        formeLetter: "D",
        gender: "N",
        types: ["Dragon", "Fire"],
        baseStats: {
            hp: 117,
            atk: 107,
            def: 97,
            spa: 97,
            spd: 97,
            spe: 107
        },
        abilities: {
            0: "Victory System"
        },
        heightm: 1.36,
        weightkg: 52.25,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },


    vitalitydark: {
        num: 7500211,
        species: "Vitality-Dark",
        baseSpecies: "Vitality",
        forme: "Dark",
        formeLetter: "D",
        gender: "N",
        types: ["Dark", "Fire"],
        baseStats: {
            hp: 117,
            atk: 107,
            def: 97,
            spa: 97,
            spd: 97,
            spe: 107
        },
        abilities: {
            0: "Victory System"
        },
        heightm: 1.36,
        weightkg: 52.25,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },


    vitalitysteel: {
        num: 7500211,
        species: "Vitality-Steel",
        baseSpecies: "Vitality",
        forme: "Steel",
        formeLetter: "S",
        gender: "N",
        types: ["Steel", "Fire"],
        baseStats: {
            hp: 117,
            atk: 107,
            def: 97,
            spa: 97,
            spd: 97,
            spe: 107
        },
        abilities: {
            0: "Victory System"
        },
        heightm: 1.36,
        weightkg: 52.25,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },


    vitalityfairy: {
        num: 7500255,
        species: "Vitality-Fairy",
        baseSpecies: "Vitality",
        forme: "Fairy",
        formeLetter: "F",
        gender: "N",
        types: ["Steel", "Fairy"],
        baseStats: {
            hp: 117,
            atk: 107,
            def: 97,
            spa: 97,
            spd: 97,
            spe: 107
        },
        abilities: {
            0: "Victory System"
        },
        heightm: 1.36,
        weightkg: 52.25,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },
    necromega: {
        num: 7500212,
        species: "Necromega",
        types: ["Flying", "Psychic"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 91,
            atk: 91,
            def: 100,
            spa: 131,
            spd: 92,
            spe: 90
        },
        abilities: {
            0: "Kaleidocope"
        },
        heightm: 2.15,
        weightkg: 140.75,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    malaquanid: {
        num: 7500213,
        species: "Malaquanid",
        types: ["Dark", "Bug"],
        baseStats: {
            hp: 87,
            atk: 91,
            def: 100,
            spa: 69,
            spd: 113,
            spe: 67
        },
        abilities: {
            0: "Contra-Bubble"
        },
        heightm: 1.65,
        weightkg: 64.5,
        color: "Purple",
        eggGroups: ["Water 1"],
    },
    scrapunny: {
        num: 7500214,
        species: "Scrapunny",
        types: ["Normal", "Dark"],
        baseStats: {
            hp: 75,
            atk: 93,
            def: 109,
            spa: 59,
            spd: 115,
            spe: 91
        },
        abilities: {
            0: "Mean Girl"
        },
        heightm: 1.15,
        weightkg: 31.65,
        color: "Brown",
        eggGroups: ["Field"],
    },
    scrapunnymega: {
        num: 7500214,
        species: "Scrapunny-Mega",
        baseSpecies: "Scrapunny",
        forme: "Mega",
        formeLetter: "M",
        types: ["Normal", "Fighting"],
        baseStats: {
            hp: 75,
            atk: 153,
            def: 119,
            spa: 59,
            spd: 115,
            spe: 121
        },
        abilities: {
            0: "Scrappy"
        },
        heightm: 1.25,
        weightkg: 26.65,
        color: "Brown",
        eggGroups: ["Field"],
    },
    bezong: {
        num: 7500215,
        species: "Bezong",
        types: ["Normal", "Psychic"],
        gender: "N",
        baseStats: {
            hp: 113,
            atk: 114,
            def: 100,
            spa: 67,
            spd: 100,
            spe: 46
        },
        abilities: {
            0: "Hazmat Fur"
        },
        heightm: 1.705,
        weightkg: 161,
        color: "Green",
        eggGroups: ["Undiscovered"],
    },
    valcro: {
        num: 7500216,
        species: "Valcro",
        types: ["Normal", "Flying"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 92,
            def: 97,
            spa: 82,
            spd: 97,
            spe: 122
        },
        abilities: {
            0: "Tech Equip"
        },
        heightm: 2.055,
        weightkg: 87.75,
        color: "Purple",
        eggGroups: ["Undiscovered"],
    },
    smelly: {
        num: 7500217,
        species: "Smelly",
        types: ["Normal"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 75,
            atk: 57,
            def: 85,
            spa: 57,
            spd: 90,
            spe: 85
        },
        abilities: {
            0: "Technical System"
        },
        heightm: 1.75,
        weightkg: 79.25,
        color: "White",
        eggGroups: ["Undiscovered"],
    },
    tapumeme: {
        num: 7500218,
        species: "Tapu Meme",
        types: ["Psychic", "Fairy"],
        gender: "N",
        baseStats: {
            hp: 85,
            atk: 81,
            def: 81,
            spa: 133,
            spd: 141,
            spe: 103
        },
        abilities: {
            0: "Serene Surge"
        },
        heightm: 0.9,
        weightkg: 12.55,
        color: "White",
        eggGroups: ["Undiscovered"],
    },
    tapumemedank: {
        num: 7500218,
        species: "Tapu Meme-Dank",
        baseSpecies: "Tapu Meme",
        forme: "Dank",
        formeLetter: "D",
        types: ["Psychic", "Fighting"],
        gender: "N",
        baseStats: {
            hp: 85,
            atk: 133,
            def: 103,
            spa: 81,
            spd: 81,
            spe: 141
        },
        abilities: {
            0: "Serene Surge"
        },
        heightm: 0.9,
        weightkg: 12.55,
        color: "White",
        eggGroups: ["Undiscovered"],
    },
    comcott: {
        num: 7500219,
        species: "Comcott",
        types: ["Fairy", "Grass"],
        genderRatio: {M: 0.375, F: 0.625},
        baseStats: {
            hp: 65,
            atk: 69,
            def: 97,
            spa: 89,
            spd: 102,
            spe: 118
        },
        abilities: {
            0: "Indulgence"
        },
        heightm: 0.405,
        weightkg: 3.45,
        color: "Green",
        eggGroups: ["Undiscovered"],
    },
	minislash: {
	        num: 7500220,
	        species: "Minislash",
	        baseForme: "Meteor",
	        types: ["Rock", "Ghost"],
	        gender: "N",
	        baseStats: {
	            hp: 70,
	            atk: 65,
	            def: 135,
	            spa: 65,
	            spd: 135,
	            spe: 70
	        },
	        abilities: {
	            0: "Stance Shield"
	        },
	        heightm: 1,
	        weightkg: 46.5,
	        color: "Brown",
	        eggGroups: ["Mineral"],
	        otherFormes: ["minislashblade"],
	    },
 	minislashblade: {
	        num: 7500220,
	        species: "Minislash-Blade",
	        baseSpecies: "Minislash",
	        forme: "Blade",
	        formeLetter: "B",
	        types: ["Rock", "Ghost"],
	        gender: "N",
	        baseStats: {
	            hp: 70,
	            atk: 135,
	            def: 65,
	            spa: 135,
	            spd: 65,
	            spe: 130
	        },
	        abilities: {
	            0: "Stance Shield"
	        },
	        heightm: 1,
	        weightkg: 6.8,
	        color: "White",
	        eggGroups: ["Mineral"],
	    },
    crematoria: {
        num: 7500221,
        species: "Crematoria",
        types: ["Flying", "Psychic"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 104,
            atk: 81,
            def: 78,
            spa: 139,
            spd: 107,
            spe: 100
        },
        abilities: {
            0: "Ashes to Ashes"
        },
        heightm: 1.155,
        weightkg: 48.5,
        color: "White",
        eggGroups: ["Undiscovered"],
    },
    crematoriamegax: {
        num: 7500221,
        species: "Crematoria-Mega-X",
        baseSpecies: "Crematoria",
        forme: "Mega",
        formeLetter: "X",
        types: ["Flying", "Dragon"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 104,
            atk: 127,
            def: 111,
            spa: 160,
            spd: 107,
            spe: 100
        },
        abilities: {
            0: "Tough Claws"
        },
        heightm: 1.7,
        weightkg: 117,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },


    crematoriamegay: {
        num: 7500221,
        species: "Crematoria-Mega-Y",
        baseSpecies: "Crematoria",
        forme: "Mega",
        formeLetter: "Y",
        types: ["Flying", "Psychic"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 104,
            atk: 101,
            def: 78,
            spa: 189,
            spd: 137,
            spe: 100
        },
        abilities: {
            0: "Drought"
        },
        heightm: 1.7,
        weightkg: 107,
        color: "White",
        eggGroups: ["Undiscovered"],
    },
    pherothorn: {
        num: 7500222,
        species: "Pherothorn",
        types: ["Bug", "Steel"],
        baseStats: {
            hp: 72,
            atk: 115,
            def: 94,
            spa: 95,
            spd: 96,
            spe: 95
        },
        abilities: {
            0: "Beast Barbs"
        },
        heightm: 1.395,
        weightkg: 67.5,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },
    archking: {
        num: 7500223,
        species: "Archking",
        types: ["Water", "Flying"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 75,
            atk: 145,
            def: 100,
            spa: 91,
            spd: 67,
            spe: 102
        },
        abilities: {
            0: "Determination"
        },
        heightm: 1.35,
        weightkg: 46,
        color: "Yellow",
        eggGroups: ["Water 3"],
    },
    slampa: {
        num: 7500224,
        species: "Slampa",
        types: ["Water", "Dragon"],
        baseStats: {
            hp: 96,
            atk: 77,
            def: 107,
            spa: 127,
            spd: 95,
            spe: 43
        },
        abilities: {
            0: "Outrageous"
        },
        heightm: 2.3,
        weightkg: 131.75,
        color: "White",
        eggGroups: ["Monster"],
    },
    slampamega: {
        num: 7500224,
        species: "Slampa-Mega",
        baseSpecies: "Slampa",
        forme: "Mega",
        formeLetter: "M",
        types: ["Water", "Dragon"],
        genderRatio: {
            M: 0.50,
            F: 0.50
        },
        baseStats: {
            hp: 96,
            atk: 77,
            def: 177,
            spa: 157,
            spd: 95,
            spe: 43
        },
        abilities: {
            0: "Shell Armor"
        },
        heightm: 2.3,
        weightkg: 163.25,
        color: "White",
        eggGroups: ["Monster"],
    },
    decidactyl: {
        num: 7500225,
        species: "Decidactyl",
        types: ["Ghost", "Flying"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 89,
            atk: 116,
            def: 80,
            spa: 90,
            spd: 97,
            spe: 110
        },
        abilities: {
            0: "Wood Head"
        },
        heightm: 1.7,
        weightkg: 47.8,
        color: "Brown",
        eggGroups: ["Flying"],
    },
    decidactylmega: {
        num: 7500225,
        species: "Decidactyl-Mega",
        baseSpecies: "Decidactyl",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ghost", "Flying"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 89,
            atk: 146,
            def: 100,
            spa: 100,
            spd: 117,
            spe: 130
        },
        abilities: {
            0: "Tough Claws"
        },
        heightm: 2,
        weightkg: 67.8,
        color: "Brown",
        eggGroups: ["Flying"],
    },
    lycanape: {
        num: 7500226,
        species: "Lycanape",
        types: ["Rock", "Fighting"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 85,
            atk: 119,
            def: 78,
            spa: 89,
            spd: 78,
            spe: 120
        },
        abilities: {
            0: "Blaze Rush"
        },
        heightm: 0.99,
        weightkg: 40,
        color: "Brown",
        eggGroups: ["Field"],
    },
    golisotops: {
        num: 7500227,
        species: "Golisotops",
        types: ["Bug", "Water"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 77,
            atk: 130,
            def: 132,
            spa: 72,
            spd: 90,
            spe: 70
        },
        abilities: {
            0: "Swift Retreat"
        },
        heightm: 1.655,
        weightkg: 74.25,
        color: "Gray",
        eggGroups: ["Water 3"],
      dexentry: "It is theorized that Kabutops is a distant ancestor of Golisopod. With this theory known, a hypothetical specimen of an intermediate generation was created. It would seem that this generation was closer to our times than long back, as it has much of Golisopod's features. However, it remains having the two blades on its uppermost pair of arms.",
    },
    perwearalola: {
        num: 7500228,
        species: "Perwear-Alola",
        types: ["Fighting", "Dark"],
        baseStats: {
            hp: 102,
            atk: 102,
            def: 80,
            spa: 75,
            spd: 72,
            spe: 97
        },
        abilities: {
            0: "Fluffy Fur"
        },
        color: "Black",
        eggGroups: ["Field"],
        heightm: 1.6,
        weightkg: 84,
    },
    mudape: {
        num: 7500229,
        species: "Mudape",
        types: ["Fighting", "Ground"],
        baseStats: {
            hp: 92,
            atk: 125,
            def: 90,
            spa: 67,
            spd: 87,
            spe: 75
        },
        abilities: {
            0: "Champion's Spirit"
        },
        color: "Brown",
        eggGroups: ["Field"],
        heightm: 1.75,
        weightkg: 476,
    },
    kira: {
        num: 7500230,
        species: "Kira",
        types: ["Dragon", "Steel"],
		  gender: "N",
        baseStats: {
            hp: 75,
            atk: 173,
            def: 132,
            spa: 79,
            spd: 65,
            spe: 101
        },
        abilities: {
            0: "Beast's Focus"
        },
        color: "White",
		  eggGroups: ["Undiscovered"],
        heightm: 1.25,
        weightkg: 105.05,
    },
	exelegoalola: {
        num: 7500231,
        species: "Exelego-Alola",
        types: ["Rock", "Dragon"],
		  gender: "N",
        baseStats: {
            hp: 105,
            atk: 83,
            def: 71,
            spa: 131,
            spd: 113,
            spe: 95
        },
        abilities: {
            0: "Frisky Beast"
        },
        color: "White",
		  eggGroups: ["Undiscovered"],
        heightm: 6.05,
        weightkg: 235.55,
    },
    joltarina: {
        num: 7500232,
        species: "Joltarina",
        types: ["Water", "Electric"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 82,
            atk: 79,
            def: 77,
            spa: 128,
            spd: 115,
            spe: 105
        },
        abilities: {
            0: "Volt Torrent"
        },
        color: "Blue",
		  eggGroups: ["Field"],
        heightm: 1.3,
        weightkg: 34.25,
    },
	dhelchamp: {
        num: 7500233,
        species: "Dhelchamp",
        types: ["Grass", "Fighting"],
		  gender: "N",
        baseStats: {
            hp: 100,
            atk: 147,
            def: 90,
            spa: 75,
            spd: 100,
            spe: 47
        },
        abilities: {
            0: "Ancient Mariner"
        },
        color: "Green",
        dexentry: "A rogue team of former Team Rocket members created this fusion. It is said to be able to remove the anchor attached to its head and swing it around crazily for an extremely powerful Power Whip or Anchor Shot. At the same time, it is able to fight with its four arms against any enemies trying to dodge the attack",
		  eggGroups: ["Undiscovered"],
        heightm: 2.75,
        weightkg: 170,
    },
    mimian: {
        num: 7500234,
        species: "Mimian",
        types: ["Psychic", "Fighting"],
        baseStats: {
            hp: 100,
            atk: 115,
            def: 95,
            spa: 70,
            spd: 95,
            spe: 110
        },
        abilities: {
            0: "Monkey See Monkey Do"
        },
        color: "Pink",
		  eggGroups: ["Undiscovered"],
        heightm: 1.2,
        weightkg: 43.4,
    },
    aerodako: {
        num: 7500235,
        species: "Aero Dako",
        types: ["Rock", "Electric"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 75,
            atk: 130,
            def: 75,
            spa: 77,
            spd: 75,
            spe: 150
        },
        abilities: {
            0: "Rocky Surge"
        },
        color: "Black",
		  eggGroups: ["Undiscovered"],
        heightm: 1.8,
        weightkg: 39.75,
    },
    aerodakomega: {
        num: 7500235,
        species: "Aero Dako-Mega",
        baseSpecies: "Aero Dako",
        forme: "Mega",
        formeLetter: "M",
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        types: ["Rock", "Electric"],
        baseStats: {
            hp: 75,
            atk: 160,
            def: 95,
            spa: 87,
            spd: 95,
            spe: 170
        },
        abilities: {
            0: "Tough Claws"
        },
        color: "Black",
		  eggGroups: ["Undiscovered"],
        heightm: 2.1,
        weightkg: 59.75,
    },
    
    magicarticgear: {
        num: 7500237,
        species: "Magic Artic Gear",
        types: ["Steel", "Flying"],
        gender: "N",
        baseStats: {
            hp: 105,
            atk: 90,
            def: 127,
            spa: 112,
            spd: 120,
            spe: 75
        },
        abilities: {
            0: "Broken Heart"
        },
        color: "Blue",
		  eggGroups: ["Undiscovered"],
        heightm: 1.35,
        weightkg: 67.95,
    },
    necroltres: {
        num: 7500238,
        species: "Necroltres",
        types: ["Psychic", "Fire"],
        gender: "N",
        baseStats: {
            hp: 113,
            atk: 103,
            def: 100,
            spa: 126,
            spd: 95,
            spe: 91
        },
        abilities: {
            0: "Diamond Armor"
        },
        color: "Black",
		  eggGroups: ["Undiscovered"],
        heightm: 2.2,
        weightkg: 145,
    },
    kartanbull: {
        num: 7500239,
        species: "Kartanbull",
        types: ["Steel", "Fairy"],
        gender: "N",
        baseStats: {
            hp: 85,
            atk: 151,
            def: 113,
            spa: 60,
            spd: 46,
            spe: 97
        },
        abilities: {
            0: "Subdue"
        },
        color: "White",
		  eggGroups: ["Undiscovered"],
        heightm: 0.85,
        weightkg: 24.4,
    },
    venustoise: {
        num: 7500240,
        species: "Venustoise",
        types: ["Water", "Poison"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 89,
            atk: 92,
            def: 101,
            spa: 102,
            spd: 112,
            spe: 89
        },
        abilities: {
            0: "Sun Bath"
        },
        color: "Blue",
    	  dexentry: "Two of our grunts, who were on the trail of the Pewter and Cerulean Gym Leaders at the time, have encountered a Gastly proficient in the art of illusions. This Gastly used a Venusaur and a Blastoise illusion to scare a Bulbasaur and Squirtle, then combined them to form Venustoise. While the plans to create a Venustoise were postponed for some time, a breakthrough in combining the rarely-seen abilities of Pokémon was discovered, and one of the first fusions to be created from this breakthrough was a live Bulbasquirt. When brought to Level 16, it evolved into an Ivytortle, and at Level 34, Ivytortle evolved into the same fusion depicted back in the Maiden's Peak illusion: Venustoise.",
		  eggGroups: ["Monster"],
        heightm: 1.8,
        weightkg: 92.75,
    },


    venustoisemegagreen: {
        num: 7500240,
        species: "Venustoise-Mega-Green",
        baseSpecies: "Venustoise",
        forme: "Mega-Green",
        formeLetter: "M",
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        types: ["Water", "Poison"],
        baseStats: {
            hp: 89,
            atk: 110,
            def: 141,
            spa: 124,
            spd: 132,
            spe: 89
        },
        abilities: {
            0: "Thick Fat"
        },
        color: "Blue",
		  eggGroups: ["Monster"],
        heightm: 2.2,
        weightkg: 148.25,
    },
    venustoisemegablue: {
        num: 7500240,
        species: "Venustoise-Mega-Blue",
        baseSpecies: "Venustoise",
        forme: "Mega-Blue",
        formeLetter: "M",
        types: ["Water", "Poison"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 89,
            atk: 112,
            def: 121,
            spa: 152,
            spd: 122,
            spe: 89
        },
        abilities: {
            0: "Mega Launcher"
        },
        color: "Blue",
		  eggGroups: ["Monster"],
        heightm: 1.8,
        weightkg: 108.35,
    },
    kingkek: {
        num: 7500241,
        species: "King Kek",
        types: ["Normal"],
        baseStats: {
            hp: 115,
            atk: 135,
            def: 95,
            spa: 72,
            spd: 102,
            spe: 80
        },
        abilities: {
            0: "Lazy Camo"
        },
        color: "Green",
		  eggGroups: ["Field"],
        heightm: 1.5,
        weightkg: 76.25,
    },
    sigillow: {
        num: 7500242,
        species: "Sigillow",
        types: ["Normal", "Psychic"],
        baseStats: {
            hp: 76,
            atk: 81,
            def: 80,
            spa: 99,
            spd: 75,
            spe: 121
        },
        abilities: {
            0: "Overwhelming"
        },
        color: "Black",
		  eggGroups: ["Flying"],
        heightm: 1.05,
        weightkg: 16.9,
    },
    covally: {
        num: 7500243,
        species: "Covally",
        types: ["Normal", "Fairy"],
        gender: "N",
        baseStats: {
            hp: 93,
            atk: 73,
            def: 102,
            spa: 95,
            spd: 102,
            spe: 100
        },
        abilities: {
            0: "Triage System"
        },
        color: "Gray",
		  eggGroups: ["Undiscovered"],
        heightm: 1.2,
        weightkg: 50.4,
    },
	 covallyfire: {
        num: 7500243,
        species: "Covally-Fire",
        baseSpecies: "Covally",
        gender: "N",
        forme: "Fire",
        formeLetter: "F",
        types: ["Fire", "Fairy"],
        baseStats: {
            hp: 93,
            atk: 73,
            def: 102,
            spa: 95,
            spd: 102,
            spe: 100
        },
        abilities: {
            0: "Triage System"
        },
        color: "Gray",
		  eggGroups: ["Undiscovered"],
        heightm: 1.2,
        weightkg: 50.4,
    },
	 covallywater: {
        num: 7500243,
        species: "Covally-Water",
        baseSpecies: "Covally",
        gender: "N",
        forme: "Water",
        formeLetter: "W",
        types: ["Water", "Fairy"],
        baseStats: {
            hp: 93,
            atk: 73,
            def: 102,
            spa: 95,
            spd: 102,
            spe: 100
        },
        abilities: {
            0: "Triage System"
        },
        color: "Gray",
		  eggGroups: ["Undiscovered"],
        heightm: 1.2,
        weightkg: 50.4,
    },
	 covallyelectric: {
        num: 7500243,
        species: "Covally-Electric",
        baseSpecies: "Covally",
        gender: "N",
        forme: "Electric",
        formeLetter: "E",
        types: ["Electric", "Fairy"],
        baseStats: {
            hp: 93,
            atk: 73,
            def: 102,
            spa: 95,
            spd: 102,
            spe: 100
        },
        abilities: {
            0: "Triage System"
        },
        color: "Gray",
		  eggGroups: ["Undiscovered"],
        heightm: 1.2,
        weightkg: 50.4,
    },
    covallygrass: {
        num: 7500243,
        species: "Covally-Grass",
        baseSpecies: "Covally",
        gender: "N",
        forme: "Grass",
        formeLetter: "G",
        types: ["Grass", "Fairy"],
        baseStats: {
            hp: 93,
            atk: 73,
            def: 102,
            spa: 95,
            spd: 102,
            spe: 100
        },
        abilities: {
            0: "Triage System"
        },
        color: "Gray",
		  eggGroups: ["Undiscovered"],
        heightm: 1.2,
        weightkg: 50.4,
    },
    covallyice: {
        num: 7500243,
        species: "Covally-Ice",
        baseSpecies: "Covally",
        gender: "N",
        forme: "Ice",
        formeLetter: "I",
        types: ["Ice", "Fairy"],
        baseStats: {
            hp: 93,
            atk: 73,
            def: 102,
            spa: 95,
            spd: 102,
            spe: 100
        },
        abilities: {
            0: "Triage System"
        },
        color: "Gray",
		  eggGroups: ["Undiscovered"],
        heightm: 1.2,
        weightkg: 50.4,
    },
    covallyfighting: {
        num: 7500243,
        species: "Covally-Fighting",
        baseSpecies: "Covally",
        gender: "N",
        forme: "Fighting",
        formeLetter: "F",
        types: ["Fighting", "Fairy"],
        baseStats: {
            hp: 93,
            atk: 73,
            def: 102,
            spa: 95,
            spd: 102,
            spe: 100
        },
        abilities: {
            0: "Triage System"
        },
        color: "Gray",
		  eggGroups: ["Undiscovered"],
        heightm: 1.2,
        weightkg: 50.4,
    },
    covallypoison: {
        num: 7500243,
        species: "Covally-Poison",
        baseSpecies: "Covally",
        gender: "N",
        forme: "Poison",
        formeLetter: "P",
        types: ["Poison", "Fairy"],
        baseStats: {
            hp: 93,
            atk: 73,
            def: 102,
            spa: 95,
            spd: 102,
            spe: 100
        },
        abilities: {
            0: "Triage System"
        },
        color: "Gray",
		  eggGroups: ["Undiscovered"],
        heightm: 1.2,
        weightkg: 50.4,
    },
    covallyground: {
        num: 7500243,
        species: "Covally-Ground",
        baseSpecies: "Covally",
        gender: "N",
        forme: "Ground",
        formeLetter: "G",
        types: ["Ground", "Fairy"],
        baseStats: {
            hp: 93,
            atk: 73,
            def: 102,
            spa: 95,
            spd: 102,
            spe: 100
        },
        abilities: {
            0: "Triage System"
        },
        color: "Gray",
		  eggGroups: ["Undiscovered"],
        heightm: 1.2,
        weightkg: 50.4,
    },
    covallyflying: {
        num: 7500243,
        species: "Covally-Fire",
        baseSpecies: "Covally",
        gender: "N",
        forme: "Flying",
        formeLetter: "F",
        types: ["Flying", "Fairy"],
        baseStats: {
            hp: 93,
            atk: 73,
            def: 102,
            spa: 95,
            spd: 102,
            spe: 100
        },
        abilities: {
            0: "Triage System"
        },
        color: "Gray",
		  eggGroups: ["Undiscovered"],
        heightm: 1.2,
        weightkg: 50.4,
    },
    covallypsychic: {
        num: 7500243,
        species: "Covally-Psychic",
        baseSpecies: "Covally",
        gender: "N",
        forme: "Psychic",
        formeLetter: "P",
        types: ["Fire", "Fairy"],
        baseStats: {
            hp: 93,
            atk: 73,
            def: 102,
            spa: 95,
            spd: 102,
            spe: 100
        },
        abilities: {
            0: "Triage System"
        },
        color: "Gray",
		  eggGroups: ["Undiscovered"],
        heightm: 1.2,
        weightkg: 50.4,
    },
    covallybug: {
        num: 7500243,
        species: "Covally-Bug",
        baseSpecies: "Covally",
        gender: "N",
        forme: "Bug",
        formeLetter: "B",
        types: ["Bug", "Fairy"],
        baseStats: {
            hp: 93,
            atk: 73,
            def: 102,
            spa: 95,
            spd: 102,
            spe: 100
        },
        abilities: {
            0: "Triage System"
        },
        color: "Gray",
		  eggGroups: ["Undiscovered"],
        heightm: 1.2,
        weightkg: 50.4,
    },
    covallyrock: {
        num: 7500243,
        species: "Covally-Rock",
        baseSpecies: "Covally",
        gender: "N",
        forme: "Rock",
        formeLetter: "R",
        types: ["Rock", "Fairy"],
        baseStats: {
            hp: 93,
            atk: 73,
            def: 102,
            spa: 95,
            spd: 102,
            spe: 100
        },
        abilities: {
            0: "Triage System"
        },
        color: "Gray",
		  eggGroups: ["Undiscovered"],
        heightm: 1.2,
        weightkg: 50.4,
    },
    covallyghost: {
        num: 7500243,
        species: "Covally-Ghost",
        baseSpecies: "Covally",
        gender: "N",
        forme: "Ghost",
        formeLetter: "G",
        types: ["Ghost", "Fairy"],
        baseStats: {
            hp: 93,
            atk: 73,
            def: 102,
            spa: 95,
            spd: 102,
            spe: 100
        },
        abilities: {
            0: "Triage System"
        },
        color: "Gray",
		  eggGroups: ["Undiscovered"],
        heightm: 1.2,
        weightkg: 50.4,
    },
    covallydragon: {
        num: 7500243,
        species: "Covally-Dragon",
        baseSpecies: "Covally",
        gender: "N",
        forme: "Dragon",
        formeLetter: "D",
        types: ["Dragon", "Fairy"],
        baseStats: {
            hp: 93,
            atk: 73,
            def: 102,
            spa: 95,
            spd: 102,
            spe: 100
        },
        abilities: {
            0: "Triage System"
        },
        color: "Gray",
		  eggGroups: ["Undiscovered"],
        heightm: 1.2,
        weightkg: 50.4,
    },
    covallydark: {
        num: 7500243,
        species: "Covally-Dark",
        baseSpecies: "Covally",
        gender: "N",
        forme: "Dark",
        formeLetter: "D",
        types: ["Dark", "Fairy"],
        baseStats: {
            hp: 93,
            atk: 73,
            def: 102,
            spa: 95,
            spd: 102,
            spe: 100
        },
        abilities: {
            0: "Triage System"
        },
        color: "Gray",
		  eggGroups: ["Undiscovered"],
        heightm: 1.2,
        weightkg: 50.4,
    },
    covallysteel: {
        num: 7500243,
        species: "Covally-Steel",
        baseSpecies: "Covally",
        gender: "N",
        forme: "Steel",
        formeLetter: "S",
        types: ["Steel", "Fairy"],
        baseStats: {
            hp: 93,
            atk: 73,
            def: 102,
            spa: 95,
            spd: 102,
            spe: 100
        },
        abilities: {
            0: "Triage System"
        },
        color: "Gray",
		  eggGroups: ["Undiscovered"],
        heightm: 1.2,
        weightkg: 50.4,
    },
    covallyfairy: {
        num: 7500243,
        species: "Covally-Fairy",
        baseSpecies: "Covally",
        gender: "N",
        forme: "Fairy",
        formeLetter: "F",
        types: ["Fairy"],
        baseStats: {
            hp: 93,
            atk: 73,
            def: 102,
            spa: 95,
            spd: 102,
            spe: 100
        },
        abilities: {
            0: "Triage System"
        },
        color: "Gray",
		  eggGroups: ["Undiscovered"],
        heightm: 1.2,
        weightkg: 50.4,
    },
    toxamola: {
        num: 7500244,
        species: "Toxamola",
        types: ["Water", "Poison"],
        baseStats: {
            hp: 123,
            atk: 84,
            def: 131,
            spa: 61,
            spd: 109,
            spe: 65
        },
        abilities: {
            0: "Regenerator"
        },
        color: "Blue",
		  eggGroups: ["Water 1"],
        heightm: 0.95,
        weightkg: 23.05,
    },
    melon: {
        num: 7500245,
        species: "Melon",
        types: ["Fairy", "Psychic"],
        gender: "N",
        baseStats: {
            hp: 97,
            atk: 71,
            def: 71,
            spa: 139,
            spd: 149,
            spe: 75
        },
        abilities: {
            0: "Pixie Grace"
        },
        color: "White",
		  eggGroups: ["Undiscovered"],
        heightm: 0.8,
        weightkg: 15,
    },
    melonpirouette: {
        num: 7500245,
        species: "Melon-Pirouette",
        baseSpecies: "Melon",
        gender: "N",
        forme: "Pirouette",
        formeLetter: "P",
        types: ["Fairy", "Fighting"],
        baseStats: {
            hp: 97,
            atk: 139,
            def: 75,
            spa: 71,
            spd: 71,
            spe: 149
        },
        abilities: {
            0: "Pixie Grace"
        },
        color: "White",
		  eggGroups: ["Undiscovered"],
        heightm: 0.8,
        weightkg: 15,
    },
    kyutomwhite: {
        num: 7500246,
        species: "Kyutom-White",
        types: ["Ice", "Electric"],
        gender: "N",
        baseStats: {
            hp: 87,
            atk: 95,
            def: 93,
            spa: 132,
            spd: 93,
            spe: 108
        },
        abilities: {
            0: "Turborise"
        },
        color: "Red",
		  eggGroups: ["Undiscovered"],
        heightm: 1.95,
        weightkg: 162.65,
    },
    xernemite: {
        num: 7500247,
        species: "Xernemite",
        types: ["Steel", "Fairy"],
        gender: "N",
        baseStats: {
            hp: 90,
            atk: 83,
            def: 92,
            spa: 113,
            spd: 86,
            spe: 82
        },
        abilities: {
            0: "Pixie Lure"
        },
        color: "Gray",
		  eggGroups: ["Undiscovered"],
        heightm: 1.65,
        weightkg: 110.5,
    },
    cherron: {
        num: 7500248,
        species: "Cherron",
        types: ["Grass", "Ground"],
        baseStats: {
            hp: 105,
            atk: 125,
            def: 105,
            spa: 93,
            spd: 84,
            spe: 87
        },
        abilities: {
            0: "Flower Power"
        },
        color: "Purple",
		  eggGroups: ["Undiscovered"],
        heightm: 2,
        weightkg: 479.65,
    },
    cherronprimal: {
        num: 7500248,
        species: "Cherron-Primal",
        baseSpecies: "Cherron",
        forme: "Primal",
        formeLetter: "P",
        types: ["Grass", "Fire"],
        baseStats: {
            hp: 105,
            atk: 155,
            def: 125,
            spa: 143,
            spd: 84,
            spe: 87
        },
        abilities: {
            0: "Desolate Land"
        },
        color: "Pink",
		  eggGroups: ["Undiscovered"],
        heightm: 2,
        weightkg: 529.35,
    },
    dialcatty: {
        num: 7500249,
        species: "Dialcatty",
        types: ["Steel", "Normal"],
        gender: "N",
        baseStats: {
            hp: 85,
            atk: 107,
            def: 92,
            spa: 107,
            spd: 77,
            spe: 110
        },
        abilities: {
            0: "Normalized Enemy"
        },
        color: "Purple",
		  eggGroups: ["Undiscovered"],
        heightm: 3.25,
        weightkg: 357.8,
    },
    lunatic: {
        num: 7500250,
        species: "Lunatic",
        types: ["Fairy", "Ghost"],
        baseStats: {
            hp: 118,
            atk: 79,
            def: 90,
            spa: 120,
            spd: 110,
            spe: 63
        },
        abilities: {
            0: "Fungal Shield"
        },
        color: "Purple",
		  eggGroups: ["Undiscovered"],
        heightm: 2.5,
        weightkg: 65.75,
    },
    granho: {
        num: 7500251,
        species: "Gran-Ho",
        types: ["Fairy", "Fire"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 140,
            def: 100,
            spa: 85,
            spd: 110,
            spe: 69
        },
        abilities: {
            0: "Pressurate"
        },
        color: "Purple",
		  eggGroups: ["Undiscovered"],
        heightm: 2.6,
        weightkg: 123.85,
    },
    lies: {
        num: 7500252,
        species: "Lies",
        types: ["Fairy", "Dark"],
        baseStats: {
            hp: 115,
            atk: 109,
            def: 72,
            spa: 109,
            spd: 74,
            spe: 122
        },
        abilities: {
            0: "Mana Potion"
        },
        color: "Purple",
		  eggGroups: ["Undiscovered"],
        heightm: 2.05,
        weightkg: 126.25,
    },
    viva: {
        num: 7500253,
        species: "Viva",
        types: ["Steel", "Flying"],
        baseStats: {
            hp: 110,
            atk: 86,
            def: 88,
            spa: 120,
            spd: 90,
            spe: 91
        },
        abilities: {
            0: "Piercing Gaze"
        },
        color: "White",
		  eggGroups: ["Undiscovered"],
        heightm: 3.3,
        weightkg: 350,
    },
    girutukumuka: {
        num: 7500254,
        species: "Girutukumuka",
        types: ["Water", "Ghost"],
        baseStats: {
            hp: 122,
            atk: 90,
            def: 130,
            spa: 65,
            spd: 130,
            spe: 47
        },
        abilities: {
            0: "Pressured Innards"
        },
        color: "Black",
		  eggGroups: ["Undiscovered"],
        heightm: 2.4,
        weightkg: 375.6,
    },
    omneus: {
        num: 7500255,
        species: "Omneus",
        types: ["Water", "Normal"],
        gender: "N",
        baseStats: {
            hp: 77,
            atk: 80,
            def: 110,
            spa: 125,
            spd: 87,
            spe: 97
        },
        abilities: {
            0: "Spiral Power"
        },
        color: "Blue",
		  eggGroups: ["Undiscovered"],
        heightm: 1.8,
        weightkg: 163.75,
    },
    omneusfire: {
        num: 7500255,
        species: "Omneus-Fire",
        baseSpecies: "Omneus",
        forme: "Fire",
        formeLetter: "F",
        gender: "N",
        types: ["Water", "Fire"],
        baseStats: {
            hp: 77,
            atk: 80,
            def: 110,
            spa: 125,
            spd: 87,
            spe: 97
        },
        abilities: {
            0: "Spiral Power"
        },
        color: "Blue",
		  eggGroups: ["Undiscovered"],
        heightm: 1.8,
        weightkg: 163.75,
    },
    omneuswater: {
        num: 7500255,
        species: "Omneus-Water",
        baseSpecies: "Omneus",
        forme: "Water",
        formeLetter: "W",
        gender: "N",
        types: ["Water"],
        baseStats: {
            hp: 77,
            atk: 80,
            def: 110,
            spa: 125,
            spd: 87,
            spe: 97
        },
        abilities: {
            0: "Spiral Power"
        },
        color: "Blue",
		  eggGroups: ["Undiscovered"],
        heightm: 1.8,
        weightkg: 163.75,
    },
    omneuselectric: {
        num: 7500255,
        species: "Omneus-Electric",
        baseSpecies: "Omneus",
        forme: "Electric",
        formeLetter: "E",
        gender: "N",
        types: ["Water", "Electric"],
        baseStats: {
            hp: 77,
            atk: 80,
            def: 110,
            spa: 125,
            spd: 87,
            spe: 97
        },
        abilities: {
            0: "Spiral Power"
        },
        color: "Blue",
		  eggGroups: ["Undiscovered"],
        heightm: 1.8,
        weightkg: 163.75,
    },
    omneusgrass: {
        num: 7500255,
        species: "Omneus-Grass",
        baseSpecies: "Omneus",
        forme: "Grass",
        formeLetter: "G",
        gender: "N",
        types: ["Water", "Grass"],
        baseStats: {
            hp: 77,
            atk: 80,
            def: 110,
            spa: 125,
            spd: 87,
            spe: 97
        },
        abilities: {
            0: "Spiral Power"
        },
        color: "Blue",
		  eggGroups: ["Undiscovered"],
        heightm: 1.8,
        weightkg: 163.75,
    },
    omneusice: {
        num: 7500255,
        species: "Omneus-Ice",
        baseSpecies: "Omneus",
        forme: "Ice",
        formeLetter: "I",
        gender: "N",
        types: ["Water", "Ice"],
        baseStats: {
            hp: 77,
            atk: 80,
            def: 110,
            spa: 125,
            spd: 87,
            spe: 97
        },
        abilities: {
            0: "Spiral Power"
        },
        color: "Blue",
		  eggGroups: ["Undiscovered"],
        heightm: 1.8,
        weightkg: 163.75,
    },
    omneusfighting: {
        num: 7500255,
        species: "Omneus-Fighting",
        baseSpecies: "Omneus",
        forme: "Fighting",
        formeLetter: "F",
        gender: "N",
        types: ["Water", "Fighting"],
        baseStats: {
            hp: 77,
            atk: 80,
            def: 110,
            spa: 125,
            spd: 87,
            spe: 97
        },
        abilities: {
            0: "Spiral Power"
        },
        color: "Blue",
		  eggGroups: ["Undiscovered"],
        heightm: 1.8,
        weightkg: 163.75,
    },
    omneuspoison: {
        num: 7500255,
        species: "Omneus-Poison",
        baseSpecies: "Omneus",
        forme: "Poison",
        formeLetter: "P",
        gender: "N",
        types: ["Water", "Poison"],
        baseStats: {
            hp: 77,
            atk: 80,
            def: 110,
            spa: 125,
            spd: 87,
            spe: 97
        },
        abilities: {
            0: "Spiral Power"
        },
        color: "Blue",
		  eggGroups: ["Undiscovered"],
        heightm: 1.8,
        weightkg: 163.75,
    },
    omneusground: {
        num: 7500255,
        species: "Omneus-Ground",
        baseSpecies: "Omneus",
        forme: "Ground",
        formeLetter: "G",
        gender: "N",
        types: ["Water", "Ground"],
        baseStats: {
            hp: 77,
            atk: 80,
            def: 110,
            spa: 125,
            spd: 87,
            spe: 97
        },
        abilities: {
            0: "Spiral Power"
        },
        color: "Blue",
		  eggGroups: ["Undiscovered"],
        heightm: 1.8,
        weightkg: 163.75,
    },
    omneusflying: {
        num: 7500255,
        species: "Omneus-Flying",
        baseSpecies: "Omneus",
        forme: "Flying",
        formeLetter: "F",
        gender: "N",
        types: ["Water", "Flying"],
        baseStats: {
            hp: 77,
            atk: 80,
            def: 110,
            spa: 125,
            spd: 87,
            spe: 97
        },
        abilities: {
            0: "Spiral Power"
        },
        color: "Blue",
		  eggGroups: ["Undiscovered"],
        heightm: 1.8,
        weightkg: 163.75,
    },
    omneuspsychic: {
        num: 7500255,
        species: "Omneus-Psychic",
        baseSpecies: "Omneus",
        forme: "Psychic",
        formeLetter: "P",
        gender: "N",
        types: ["Water", "Psychic"],
        baseStats: {
            hp: 77,
            atk: 80,
            def: 110,
            spa: 125,
            spd: 87,
            spe: 97
        },
        abilities: {
            0: "Spiral Power"
        },
        color: "Blue",
		  eggGroups: ["Undiscovered"],
        heightm: 1.8,
        weightkg: 163.75,
    },
    omneusbug: {
        num: 7500255,
        species: "Omneus-Bug",
        baseSpecies: "Omneus",
        forme: "Bug",
        formeLetter: "B",
        gender: "N",
        types: ["Water", "Bug"],
        baseStats: {
            hp: 77,
            atk: 80,
            def: 110,
            spa: 125,
            spd: 87,
            spe: 97
        },
        abilities: {
            0: "Spiral Power"
        },
        color: "Blue",
		  eggGroups: ["Undiscovered"],
        heightm: 1.8,
        weightkg: 163.75,
    },
    omneusdragon: {
        num: 7500255,
        species: "Omneus-Dragon",
        baseSpecies: "Omneus",
        forme: "Dragon",
        formeLetter: "D",
        gender: "N",
        types: ["Water", "Dragon"],
        baseStats: {
            hp: 77,
            atk: 80,
            def: 110,
            spa: 125,
            spd: 87,
            spe: 97
        },
        abilities: {
            0: "Spiral Power"
        },
        color: "Blue",
		  eggGroups: ["Undiscovered"],
        heightm: 1.8,
        weightkg: 163.75,
    },
    omneusdark: {
        num: 7500255,
        species: "Omneus-Dark",
        baseSpecies: "Omneus",
        forme: "Dark",
        formeLetter: "D",
        gender: "N",
        types: ["Water", "Dark"],
        baseStats: {
            hp: 77,
            atk: 80,
            def: 110,
            spa: 125,
            spd: 87,
            spe: 97
        },
        abilities: {
            0: "Spiral Power"
        },
        color: "Blue",
		  eggGroups: ["Undiscovered"],
        heightm: 1.8,
        weightkg: 163.75,
    },
    omneussteel: {
        num: 7500255,
        species: "Omneus-Steel",
        baseSpecies: "Omneus",
        forme: "Steel",
        formeLetter: "S",
        gender: "N",
        types: ["Water", "Steel"],
        baseStats: {
            hp: 77,
            atk: 80,
            def: 110,
            spa: 125,
            spd: 87,
            spe: 97
        },
        abilities: {
            0: "Spiral Power"
        },
        color: "Blue",
		  eggGroups: ["Undiscovered"],
        heightm: 1.8,
        weightkg: 163.75,
    },
    omneusfairy: {
        num: 7500255,
        species: "Omneus-Fairy",
        baseSpecies: "Omneus",
        forme: "Fairy",
        formeLetter: "F",
        gender: "N",
        types: ["Water", "Fairy"],
        baseStats: {
            hp: 77,
            atk: 80,
            def: 110,
            spa: 125,
            spd: 87,
            spe: 97
        },
        abilities: {
            0: "Spiral Power"
        },
        color: "Blue",
		  eggGroups: ["Undiscovered"],
        heightm: 1.8,
        weightkg: 163.75,
    },
    pheralie: {
        num: 7500256,
        species: "Pheralie",
        types: ["Ice", "Fighting"],
        baseStats: {
            hp: 75,
            atk: 123,
            def: 58,
            spa: 123,
            spd: 58,
            spe: 125
        },
        abilities: {
            0: "Extremist"
        },
        color: "Gray",
		  eggGroups: ["Undiscovered"],
        heightm: 1.65,
        weightkg: 140.75,
    },
    pheraliemega: {
        num: 7500256,
        species: "Pheralie-Mega",
        baseSpecies: "Pheralie",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ice", "Fighting"],
        baseStats: {
            hp: 75,
            atk: 163,
            def: 58,
            spa: 163,
            spd: 58,
            spe: 145
        },
        abilities: {
            0: "Refrigerate"
        },
        color: "Gray",
		  eggGroups: ["Undiscovered"],
        heightm: 2.25,
        weightkg: 234.45,
    },
    tsarakion: {
        num: 7500257,
        species: "Tsarakion",
        types: ["Grass", "Fighting"],
        gender: "F",
        baseStats: {
            hp: 82,
            atk: 140,
            def: 94,
            spa: 61,
            spd: 99,
            spe: 110
        },
        abilities: {
            0: "Queen's Command"
        },
        color: "Green",
		  eggGroups: ["Undiscovered"],
        heightm: 1.55,
        weightkg: 140.7,
    },
    scipod: {
        num: 7500258,
        species: "Scipod",
        types: ["Steel", "Bug"],
        baseStats: {
            hp: 82,
            atk: 137,
            def: 130,
            spa: 67,
            spd: 95,
            spe: 62
        },
        abilities: {
            0: "Guerilla Warfare"
        },
        color: "Red",
		  eggGroups: ["Bug"],
        heightm: 1.9,
        weightkg: 113,
    },
    scipodmega: {
        num: 7500258,
        species: "Scipod-Mega",
        baseSpecies: "Scipod",
        forme: "Mega",
        formeLetter: "M",
        types: ["Steel", "Bug"],
        baseStats: {
            hp: 82,
            atk: 157,
            def: 170,
            spa: 77,
            spd: 115,
            spe: 72
        },
        abilities: {
            0: "Technician"
        },
        color: "Red",
		  eggGroups: ["Bug"],
        heightm: 2.1,
        weightkg: 120,
    },
    necrozmerupt: {
        num: 7500259,
        species: "Necrozmerupt",
        types: ["Fire", "Psychic"],
        gender: "N",
        baseStats: {
            hp: 103,
            atk: 103,
            def: 85,
            spa: 136,
            spd: 82,
            spe: 59
        },
        abilities: {
            0: "Soulforged Diamond"
        },
        color: "Black",
		  eggGroups: ["Undiscovered"],
        heightm: 2.15,
        weightkg: 225,
    },
    necrozmeruptmega: {
        num: 7500259,
        species: "Necrozmerupt-Mega",
        baseSpecies: "Necrozmerupt",
        gender: "N",
        forme: "Mega",
        formeLetter: "M",
        types: ["Fire", "Psychic"],
        baseStats: {
            hp: 103,
            atk: 123,
            def: 115,
            spa: 176,
            spd: 112,
            spe: 39
        },
        abilities: {
            0: "Sheer Force"
        },
        color: "Black",
		  eggGroups: ["Undiscovered"],
        heightm: 2.75,
        weightkg: 325.5,
    },
    banekyu: {
        num: 7500260,
        species: "Banekyu",
        types: ["Ghost", "Fairy"],
        baseStats: {
            hp: 69,
            atk: 112,
            def: 82,
            spa: 76,
            spd: 94,
            spe: 90
        },
        abilities: {
            0: "Cursed Cloak"
        },
        color: "Yellow",
		  eggGroups: ["Amorphous"],
        heightm: 0.65,
        weightkg: 6.6,
    },
	banekyubusted: {
        num: 7500260,
        species: "Banekyu-Busted",
        baseSpecies: "Banekyu",
        forme: "Busted",
        formeLetter: "B",
        types: ["Ghost", "Fairy"],
        baseStats: {
            hp: 69,
            atk: 112,
            def: 82,
            spa: 76,
            spd: 94,
            spe: 90
        },
        abilities: {
            0: "Cursed Cloak"
        },
        color: "Yellow",
		  eggGroups: ["Amorphous"],
        heightm: 0.65,
        weightkg: 6.6,
    },
    banekyumega: {
        num: 7500260,
        species: "Banekyu-Mega",
        baseSpecies: "Banekyu",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ghost", "Fairy"],
        baseStats: {
            hp: 69,
            atk: 162,
            def: 92,
            spa: 86,
            spd: 114,
            spe: 100
        },
        abilities: {
            0: "Prankster"
        },
        color: "Yellow",
		  eggGroups: ["Amorphous"],
        heightm: 0.75,
        weightkg: 7.1,
    },
    ninxys: {
        num: 7500261,
        species: "Ninxys",
        types: ["Psychic", "Bug"],
        gender: "N",
        baseStats: {
            hp: 56,
            atk: 93,
            def: 68,
            spa: 93,
            spd: 70,
            spe: 190
        },
        abilities: {
            0: "Light Speed"
        },
        color: "Yellow",
		  eggGroups: ["Undiscovered"],
        heightm: 1.25,
        weightkg: 36.4,
    },
    heratana: {
        num: 7500262,
        species: "Heratana",
        types: ["Bug", "Steel"],
        gender: "N",
        baseStats: {
            hp: 70,
            atk: 173,
            def: 103,
            spa: 49,
            spd: 83,
            spe: 97
        },
        abilities: {
            0: "Gutsy Beast"
        },
        heightm: 0.9,
        weightkg: 27.05,
        color: "White",
        eggGroups: ["Undiscovered"]
    },
    heratanamega: {
        num: 7500262,
        species: "Heratana-Mega",
        baseSpecies: "Heratana",
        forme: "Mega",
        formeLetter: "M",
        gender: "N",
        types: ["Bug", "Steel"],
        baseStats: {
            hp: 70,
            atk: 233,
            def: 143,
            spa: 49,
            spd: 93,
            spe: 87
        },
        abilities: {
            0: "Skill Link"
        },
        heightm: 1.1,
        weightkg: 35.55,
        color: "White",
        eggGroups: ["Undiscovered"]
    },
    plumin: {
        num: 7500263,
        species: "Plumin",
        types: ["Electric"],
        baseStats: {
            hp: 70,
            atk: 55,
            def: 55,
            spa: 90,
            spd: 90,
            spe: 105
        },
        abilities: {
            0: "Charged Up"
        },
        heightm: 0.4,
        weightkg: 4.2,
        color: "Yellow",
        eggGroups: ["Fairy"]
    },
    oxyblissdefense: {
        num: 7500264,
        species: "Oxybliss-Defense",
        types: ["Psychic", "Normal"],
        gender: "N",
        baseStats: {
            hp: 162,
            atk: 40,
            def: 105,
            spa: 72,
            spd: 157,
            spe: 72
        },
        abilities: {
            0: "Quarantine"
        },
        color: "Pink",
		  eggGroups: ["Undiscovered"],
        heightm: 1.6,
        weightkg: 53.8,
    },
    diggercatealola: {
        num: 7500265,
        species: "Diggercate-Alola",
        types: ["Normal", "Ground"],
        baseStats: {
            hp: 90,
            atk: 73,
            def: 83,
            spa: 55,
            spd: 88,
            spe: 87
        },
        abilities: {
            0: "High Stakes"
        },
        color: "Black",
		  eggGroups: ["Field"],
        heightm: 0.85,
        weightkg: 33.95,
    },
    inferperior: {
        num: 7500266,
        species: "Inferperior",
        types: ["Grass", "Fire"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 75,
            atk: 89,
            def: 83,
            spa: 89,
            spd: 83,
            spe: 110
        },
        abilities: {
            0: "Blazing Contrary"
        },
        color: "Brown",
		  eggGroups: ["Field"],
        heightm: 2.25,
        weightkg: 59,
    },
    mimukyu: {
        num: 7500267,
        species: "Mimukyu",
        types: ["Dark", "Fairy"],
        baseStats: {
            hp: 90,
            atk: 107,
            def: 87,
            spa: 67,
            spd: 112,
            spe: 83
        },
        abilities: {
            0: "Appropriation"
        },
		 otherFormes: ["mimukyubusted"],
        color: "Green",
		  eggGroups: ["Amorphous"],
        heightm: 0.6,
        weightkg: 26.35,
    },
	mimukyubusted: {
        num: 7500267,
        species: "Mimukyu-Busted",
		  baseSpecies: "Mimukyu",
		  forme: "Busted",
		  formeLetter: "B",
        types: ["Dark", "Fairy"],
        baseStats: {
            hp: 90,
            atk: 107,
            def: 87,
            spa: 67,
            spd: 112,
            spe: 83
        },
        abilities: {
            0: "Appropriation"
        },
        color: "Green",
		  eggGroups: ["Amorphous"],
        heightm: 0.6,
        weightkg: 26.35,
    },
    axatree: {
        num: 7500268,
        species: "Axatree",
        types: ["Psychic", "Electric"],
        gender: "N",
        baseStats: {
            hp: 69,
            atk: 69,
            def: 58,
            spa: 174,
            spd: 83,
            spe: 121
        },
        abilities: {
            0: "Beast Guard"
        },
        color: "Yellow",
		  eggGroups: ["Undiscovered"],
        heightm: 2.65,
        weightkg: 74,
    },
    axatreemega: {
        num: 7500268,
        species: "Axatree-Mega",
        baseSpecies: "Axatree",
        forme: "Mega",
        formeLetter: "M",
        gender: "N",
        types: ["Psychic", "Electric"],
        baseStats: {
            hp: 69,
            atk: 69,
            def: 78,
            spa: 214,
            spd: 93,
            spe: 151
        },
        abilities: {
            0: "Trace"
        },
        color: "Yellow",
		  eggGroups: ["Undiscovered"],
        heightm: 2.35,
        weightkg: 74,
    },
    cressapal: {
        num: 7500269,
        species: "Cressapal",
        types: ["Normal", "Psychic"],
        gender: "F",
        baseStats: {
            hp: 112,
            atk: 80,
            def: 110,
            spa: 70,
            spd: 110,
            spe: 65
        },
        abilities: {
            0: "Fear Shield"
        },
        color: "Yellow",
		  eggGroups: ["Undiscovered"],
        heightm: 1.5,
        weightkg: 49.8,
    },
    necrior: {
        num: 7500270,
        species: "Necrior",
        types: ["Grass", "Psychic"],
        gender: "N",
        baseStats: {
            hp: 86,
            atk: 91,
            def: 100,
            spa: 120,
            spd: 92,
            spe: 115
        },
        abilities: {
            0: "Inverse Armor"
        },
        color: "Black",
		  eggGroups: ["Undiscovered"],
        heightm: 2.85,
        weightkg: 146.5,
    },
    cinshado: {
        num: 7500271,
        species: "Cinshado",
        types: ["Normal", "Fighting"],
        genderRatio: {M: 0.25, F: 0.75},
        baseStats: {
            hp: 82,
            atk: 130,
            def: 70,
            spa: 77,
            spd: 75,
            spe: 140
        },
        abilities: {
            0: "Frenzy"
        },
        color: "Gray",
		  eggGroups: ["Undiscovered"],
        heightm: 0.6,
        weightkg: 14.85,
    },
    altellow: {
        num: 7500272,
        species: "Altellow",
        types: ["Dragon", "Normal"],
        baseStats: {
            hp: 77,
            atk: 87,
            def: 85,
            spa: 82,
            spd: 87,
            spe: 112
        },
        abilities: {
            0: "Puffy Cloud"
        },
        color: "Blue",
		  eggGroups: ["Flying"],
        heightm: 0.9,
        weightkg: 20.2,
    },
    altellowmega: {
        num: 7500272,
        species: "Altellow-Mega",
        baseSpecies: "Altellow",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dragon", "Fairy"],
        baseStats: {
            hp: 77,
            atk: 127,
            def: 105,
            spa: 122,
            spd: 87,
            spe: 112
        },
        abilities: {
            0: "Pixilate"
        },
        color: "Blue",
		  eggGroups: ["Flying"],
        heightm: 1.3,
        weightkg: 20.2,
    },
celebi: {
		num: 251,
		species: "Celebi",
		types: ["Psychic", "Grass"],
		gender: "N",
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Natural Cure"},
		heightm: 0.6,
		weightkg: 5,
		color: "Green",
		eggGroups: ["Undiscovered"],
	},
	riolu: {
		num: 447,
		species: "Riolu",
		types: ["Fighting"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 40, atk: 70, def: 40, spa: 35, spd: 40, spe: 60},
		abilities: {0: "Steadfast", 1: "Inner Focus", H: "Prankster"},
		heightm: 0.7,
		weightkg: 20.2,
		color: "Blue",
		evos: ["lucario"],
		eggGroups: ["Undiscovered"],
	},
    rebell: {
        num: 7500273,
        species: "Rebell",
        types: ["Fighting", "Psychic"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 70,
            atk: 85,
            def: 80,
            spa: 67,
            spd: 90,
            spe: 100
        },
        abilities: {
            0: "Tinkering"
        },
        color: "Blue",
        heightm: 0.65,
        weightkg: 12.6,
		 fusion: ["Riolu", "Celebi"],
		  eggGroups: ["Undiscovered"],
    },
    combarde: {
        num: 7500274,
        species: "Combarde",
        types: ["Fighting", "Ground"],
        baseStats: {
            hp: 94,
            atk: 112,
            def: 100,
            spa: 83,
            spd: 77,
            spe: 75
        },
        abilities: {
            0: "Sluggish Aura"
        },
        color: "Red",
        heightm: 2.95,
        weightkg: 162.25,
		  eggGroups: ["Undiscovered"],
    },
    
    aravealola: {
        num: 7500276,
        species: "A Rave-Alola",
        types: ["Electric", "Normal"],
        baseStats: {
            hp: 87,
            atk: 127,
            def: 117,
            spa: 82,
            spd: 102,
            spe: 77
        },
        abilities: {
            0: "Optimize"
        },
        color: "Gray",
        heightm: 2.1,
        weightkg: 215,
		  eggGroups: ["Undiscovered"],
    },
    aravealolafire: {
        num: 7500276,
        species: "A Rave-Alola-Fire",
        baseSpecies: "A Rave-Alola",
        forme: "Fire",
        formeLetter: "F",
        types: ["Electric", "Fire"],
        baseStats: {
            hp: 87,
            atk: 127,
            def: 117,
            spa: 82,
            spd: 102,
            spe: 77
        },
        abilities: {
            0: "Optimize"
        },
        color: "Gray",
        heightm: 2.1,
        weightkg: 215,
		  eggGroups: ["Undiscovered"],
    },
    aravealolawater: {
        num: 7500276,
        species: "A Rave-Alola-Water",
        baseSpecies: "A Rave-Alola",
        forme: "Water",
        formeLetter: "W",
        types: ["Electric", "Water"],
        baseStats: {
            hp: 87,
            atk: 127,
            def: 117,
            spa: 82,
            spd: 102,
            spe: 77
        },
        abilities: {
            0: "Optimize"
        },
        color: "Gray",
        heightm: 2.1,
        weightkg: 215,
		  eggGroups: ["Undiscovered"],
    },
    aravealolaelectric: {
        num: 7500276,
        species: "A Rave-Alola-Electric",
        baseSpecies: "A Rave-Alola",
        forme: "Electric",
        formeLetter: "E",
        types: ["Electric"],
        baseStats: {
            hp: 87,
            atk: 127,
            def: 117,
            spa: 82,
            spd: 102,
            spe: 77
        },
        abilities: {
            0: "Optimize"
        },
        color: "Gray",
        heightm: 2.1,
        weightkg: 215,
		  eggGroups: ["Undiscovered"],
    },
    aravealolagrass: {
        num: 7500276,
        species: "A Rave-Alola-Grass",
        baseSpecies: "A Rave-Alola",
        forme: "Grass",
        formeLetter: "G",
        types: ["Electric", "Grass"],
        baseStats: {
            hp: 87,
            atk: 127,
            def: 117,
            spa: 82,
            spd: 102,
            spe: 77
        },
        abilities: {
            0: "Optimize"
        },
        color: "Gray",
        heightm: 2.1,
        weightkg: 215,
		  eggGroups: ["Undiscovered"],
    },
    aravealolaice: {
        num: 7500276,
        species: "A Rave-Alola-Ice",
        baseSpecies: "A Rave-Alola",
        forme: "Ice",
        formeLetter: "I",
        types: ["Electric", "Ice"],
        baseStats: {
            hp: 87,
            atk: 127,
            def: 117,
            spa: 82,
            spd: 102,
            spe: 77
        },
        abilities: {
            0: "Optimize"
        },
        color: "Gray",
        heightm: 2.1,
        weightkg: 215,
		  eggGroups: ["Undiscovered"],
    },
    aravealolafighting: {
        num: 7500276,
        species: "A Rave-Alola-Fighting",
        baseSpecies: "A Rave-Alola",
        forme: "Fighting",
        formeLetter: "F",
        types: ["Electric", "Fighting"],
        baseStats: {
            hp: 87,
            atk: 127,
            def: 117,
            spa: 82,
            spd: 102,
            spe: 77
        },
        abilities: {
            0: "Optimize"
        },
        color: "Gray",
        heightm: 2.1,
        weightkg: 215,
		  eggGroups: ["Undiscovered"],
    },
    aravealolapoison: {
        num: 7500276,
        species: "A Rave-Alola-Poison",
        baseSpecies: "A Rave-Alola",
        forme: "Poison",
        formeLetter: "P",
        types: ["Electric", "Poison"],
        baseStats: {
            hp: 87,
            atk: 127,
            def: 117,
            spa: 82,
            spd: 102,
            spe: 77
        },
        abilities: {
            0: "Optimize"
        },
        color: "Gray",
        heightm: 2.1,
        weightkg: 215,
		  eggGroups: ["Undiscovered"],
    },
    aravealolaground: {
        num: 7500276,
        species: "A Rave-Alola-Ground",
        baseSpecies: "A Rave-Alola",
        forme: "Ground",
        formeLetter: "G",
        types: ["Electric", "Ground"],
        baseStats: {
            hp: 87,
            atk: 127,
            def: 117,
            spa: 82,
            spd: 102,
            spe: 77
        },
        abilities: {
            0: "Optimize"
        },
        color: "Gray",
        heightm: 2.1,
        weightkg: 215,
		  eggGroups: ["Undiscovered"],
    },
    aravealolaflying: {
        num: 7500276,
        species: "A Rave-Alola-Flying",
        baseSpecies: "A Rave-Alola",
        forme: "Flying",
        formeLetter: "F",
        types: ["Electric", "Flying"],
        baseStats: {
            hp: 87,
            atk: 127,
            def: 117,
            spa: 82,
            spd: 102,
            spe: 77
        },
        abilities: {
            0: "Optimize"
        },
        color: "Gray",
        heightm: 2.1,
        weightkg: 215,
		  eggGroups: ["Undiscovered"],
    },
    aravealolapsychic: {
        num: 7500276,
        species: "A Rave-Alola-Psychic",
        baseSpecies: "A Rave-Alola",
        forme: "Psychic",
        formeLetter: "P",
        types: ["Electric", "Psychic"],
        baseStats: {
            hp: 87,
            atk: 127,
            def: 117,
            spa: 82,
            spd: 102,
            spe: 77
        },
        abilities: {
            0: "Optimize"
        },
        color: "Gray",
        heightm: 2.1,
        weightkg: 215,
		  eggGroups: ["Undiscovered"],
    },
    aravealolabug: {
        num: 7500276,
        species: "A Rave-Alola-Bug",
        baseSpecies: "A Rave-Alola",
        forme: "Bug",
        formeLetter: "B",
        types: ["Electric", "Bug"],
        baseStats: {
            hp: 87,
            atk: 127,
            def: 117,
            spa: 82,
            spd: 102,
            spe: 77
        },
        abilities: {
            0: "Optimize"
        },
        color: "Gray",
        heightm: 2.1,
        weightkg: 215,
		  eggGroups: ["Undiscovered"],
    },
    aravealolarock: {
        num: 7500276,
        species: "A Rave-Alola-Rock",
        baseSpecies: "A Rave-Alola",
        forme: "Rock",
        formeLetter: "R",
        types: ["Electric", "Rock"],
        baseStats: {
            hp: 87,
            atk: 127,
            def: 117,
            spa: 82,
            spd: 102,
            spe: 77
        },
        abilities: {
            0: "Optimize"
        },
        color: "Gray",
        heightm: 2.1,
        weightkg: 215,
		  eggGroups: ["Undiscovered"],
    },
    aravealolaghost: {
        num: 7500276,
        species: "A Rave-Alola-Ghost",
        baseSpecies: "A Rave-Alola",
        forme: "Ghost",
        formeLetter: "G",
        types: ["Electric", "Ghost"],
        baseStats: {
            hp: 87,
            atk: 127,
            def: 117,
            spa: 82,
            spd: 102,
            spe: 77
        },
        abilities: {
            0: "Optimize"
        },
        color: "Gray",
        heightm: 2.1,
        weightkg: 215,
		  eggGroups: ["Undiscovered"],
    },
    aravealoladragon: {
        num: 7500276,
        species: "A Rave-Alola-Dragon",
        baseSpecies: "A Rave-Alola",
        forme: "Dragon",
        formeLetter: "D",
        types: ["Electric", "Fire"],
        baseStats: {
            hp: 87,
            atk: 127,
            def: 117,
            spa: 82,
            spd: 102,
            spe: 77
        },
        abilities: {
            0: "Optimize"
        },
        color: "Gray",
        heightm: 2.1,
        weightkg: 215,
		  eggGroups: ["Undiscovered"],
    },
    aravealoladark: {
        num: 7500276,
        species: "A Rave-Alola-Dark",
        baseSpecies: "A Rave-Alola",
        forme: "Dark",
        formeLetter: "D",
        types: ["Electric", "Dark"],
        baseStats: {
            hp: 87,
            atk: 127,
            def: 117,
            spa: 82,
            spd: 102,
            spe: 77
        },
        abilities: {
            0: "Optimize"
        },
        color: "Gray",
        heightm: 2.1,
        weightkg: 215,
		  eggGroups: ["Undiscovered"],
    },
    aravealolasteel: {
        num: 7500276,
        species: "A Rave-Alola-Steel",
        baseSpecies: "A Rave-Alola",
        forme: "Steel",
        formeLetter: "S",
        types: ["Electric", "Steel"],
        baseStats: {
            hp: 87,
            atk: 127,
            def: 117,
            spa: 82,
            spd: 102,
            spe: 77
        },
        abilities: {
            0: "Optimize"
        },
        color: "Gray",
        heightm: 2.1,
        weightkg: 215,
		  eggGroups: ["Undiscovered"],
    },
    aravealolafairy: {
        num: 7500276,
        species: "A Rave-Alola-Fairy",
        baseSpecies: "A Rave-Alola",
        forme: "Fairy",
        formeLetter: "F",
        types: ["Electric", "Fairy"],
        baseStats: {
            hp: 87,
            atk: 127,
            def: 117,
            spa: 82,
            spd: 102,
            spe: 77
        },
        abilities: {
            0: "Optimize"
        },
        color: "Gray",
        heightm: 2.1,
        weightkg: 215,
		  eggGroups: ["Undiscovered"],
    },
    miminja: {
        num: 7500277,
        species: "Miminja",
        types: ["Dark", "Ghost"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 63,
            atk: 112,
            def: 78,
            spa: 76,
            spd: 88,
            spe: 124
        },
        abilities: {
            0: "Resurrection"
        },
        color: "Yellow",
        heightm: 0.85,
        weightkg: 20.35,
		  eggGroups: ["Undiscovered"],
    },
    miminjareborn: {
        num: 7500277,
        species: "Miminja-Reborn",
        baseSpecies: "Miminja",
        forme: "Reborn",
        formeLetter: "R",
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        types: ["Dark", "Ghost"],
        baseStats: {
            hp: 63,
            atk: 162,
            def: 78,
            spa: 126,
            spd: 88,
            spe: 134
        },
        abilities: {
            0: "Resurrection Done"
        },
        color: "Yellow",
        heightm: 0.85,
        weightkg: 20.35,
		  eggGroups: ["Undiscovered"],
    },
    murkaleo: {
        num: 7500278,
        species: "Murkaleo",
        types: ["Flying", "Steel"],
        baseStats: {
            hp: 98,
            atk: 115,
            def: 79,
            spa: 99,
            spd: 81,
            spe: 114
        },
        abilities: {
            0: "Bamboozled"
        },
        color: "Black",
        heightm: 1.95,
        weightkg: 116.05,
		  eggGroups: ["Undiscovered"],
    },
    zekronaw: {
        num: 7500279,
        species: "Zekronaw",
        types: ["Electric", "Water"],
        genderRatio: {M: 0.875, F: 0.125},
        baseStats: {
            hp: 82,
            atk: 130,
            def: 100,
            spa: 99,
            spd: 81,
            spe: 99
        },
        abilities: {
            0: "Tetra Force"
        },
        color: "Black",
        heightm: 2,
        weightkg: 185,
		  eggGroups: ["Undiscovered"],
    },
    quinda: {
        num: 7500280,
        species: "Quinda",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 102,
            atk: 105,
            def: 80,
            spa: 105,
            spd: 80,
            spe: 87
        },
        abilities: {
            0: "Weather Contradiction"
        },
        color: "Green",
        heightm: 4.05,
        weightkg: 105.75,
        eggGroups: ["Undiscovered"]
    },
    quindamega: {
        num: 7500280,
        species: "Quinda-Mega",
        baseSpecies: "Quinda",
        forme: "Mega",
        formeLetter: "M",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 102,
            atk: 135,
            def: 90,
            spa: 135,
            spd: 90,
            spe: 107
        },
        abilities: {
            0: "Delta Stream"
        },
        color: "Green",
        heightm: 7.35,
        weightkg: 291.25,
        eggGroups: ["Undiscovered"]
    },
    sablegigas: {
        num: 7500281,
        species: "Sablegigas",
        types: ["Normal", "Ghost"],
        baseStats: {
            hp: 90,
            atk: 122,
            def: 102,
            spa: 72,
            spd: 102,
            spe: 75
        },
        abilities: {
            0: "Slow Surge"
        },
        color: "Purple",
        heightm: 2.1,
        weightkg: 215.5,
		  eggGroups: ["Undiscovered"],
    },
    sablegigasmega: {
        num: 7500281,
        species: "Sablegigas-Mega",
        baseSpecies: "Sablegigas",
        forme: "Mega",
        formeLetter: "M",
        types: ["Normal", "Ghost"],
        baseStats: {
            hp: 90,
            atk: 132,
            def: 152,
            spa: 92,
            spd: 152,
            spe: 45
        },
        abilities: {
            0: "Magic Bounce"
        },
        color: "Purple",
        heightm: 2.1,
        weightkg: 365.5,
		  eggGroups: ["Undiscovered"],
    },
    galvillon: {
        num: 7500282,
        species: "Galvillon",
        types: ["Electric", "Flying"],
        baseStats: {
            hp: 90,
            atk: 79,
            def: 70,
            spa: 108,
            spd: 70,
            spe: 113
        },
        abilities: {
            0: "Compound Eyes"
        },
        color: "Yellow",
        heightm: 1,
        weightkg: 15.65,
		  eggGroups: ["Bug"],
    },
    kyonun: {
        num: 7500283,
        species: "Kyonun",
        types: ["Electric", "Water"],
        baseStats: {
            hp: 80,
            atk: 70,
            def: 90,
            spa: 122,
            spd: 122,
            spe: 92
        },
        abilities: {
            0: "Electron Rain"
        },
        color: "Blue",
		  eggGroups: ["Undiscovered"],
        heightm: 2.45,
        weightkg: 178.1,
    dexentry: "Of the rare cases of a DNA Fusion not being done by Team Rocket. This powerful mermaid-like rodent was created by Team Aqua, after succesful capture of the Blue Orb. Their attempts at testing the Blue Orb on different species reacted with a Minun, which had then recieved Kyogre's powers contained in the Orb, becoming Kyonun. It swims through the oceans at high speeds, and has tremendous power when it is raining, capable of delievering shocks of over 10.000 Volts."
    },
    kyonunprimal: {
        num: 7500283,
        species: "Kyonun-Primal",
        baseSpecies: "Kyonun",
        forme: "Primal",
        formeLetter: "P",
        types: ["Electric", "Water"],
        baseStats: {
            hp: 80,
            atk: 120,
            def: 90,
            spa: 152,
            spd: 142,
            spe: 92
        },
        abilities: {
            0: "Primordial Sea"
        },
        color: "Blue",
        heightm: 7.75,
        weightkg: 256.1,
		  eggGroups: ["Undiscovered"],
    },
    abomasorus: {
        num: 7500284,
        species: "Abomasorus",
        types: ["Ice", "Ground"],
        gender: "M",
        baseStats: {
            hp: 95,
            atk: 125,
            def: 90,
            spa: 105,
            spd: 90,
            spe: 80
        },
        abilities: {
            0: "Petrify"
        },
        color: "White",
        heightm: 1.75,
        weightkg: 101.75,
		  eggGroups: ["Undiscovered"],
    },
    abomasorusmega: {
        num: 7500284,
        species: "Abomasorus-Mega",
        baseSpecies: "Abomasorus",
        forme: "Mega",
        formeLetter: "M",
        gender: "M",
        types: ["Ice", "Ground"],
        baseStats: {
            hp: 95,
            atk: 165,
            def: 120,
            spa: 145,
            spd: 110,
            spe: 50
        },
        abilities: {
            0: "Snow Warning"
        },
        color: "White",
        heightm: 2.25,
        weightkg: 151.25,
		  eggGroups: ["Undiscovered"],
    },
    toxicario: {
        num: 7500285,
        species: "Toxicario",
        types: ["Poison", "Fighting"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 86,
            atk: 118,
            def: 77,
            spa: 110,
            spd: 77,
            spe: 97
        },
        abilities: {
            0: "Triggered"
        },
        color: "Blue",
        heightm: 1.25,
        weightkg: 49.2,
		  eggGroups: ["Human-Like"],
    },
    toxicariomega: {
        num: 7500285,
        species: "Toxicario-Mega",
        baseSpecies: "Toxicario",
        forme: "Mega",
        formeLetter: "M",
        genderRatio: {M: 0.75, F: 0.25},
        types: ["Poison", "Fighting"],
        baseStats: {
            hp: 86,
            atk: 153,
            def: 95,
            spa: 135,
            spd: 77,
            spe: 119
        },
        abilities: {
            0: "Adaptability"
        },
        color: "Blue",
        heightm: 1.35,
        weightkg: 52.7,
		  eggGroups: ["Human-Like"],
    },
    washoxchromosome: {
        num: 7500286,
        species: "Washox",
        gender: "N",
		  baseForme: "Chromosome",
        types: ["Water", "Psychic"],
        baseStats: {
            hp: 47,
            atk: 145,
            def: 100,
            spa: 145,
            spd: 102,
            spe: 110
        },
        abilities: {
            0: "Mitosis"
        },
        color: "Red",
        heightm: 4.95,
        weightkg: 69.7,
		  eggGroups: ["Undiscovered"],
    },
    washoxstrand: {
        num: 7500286,
        species: "Washox-Strand",
        baseSpecies: "Washox",
        gender: "N",
        forme: "Strand",
        formeLetter: "S",
        types: ["Water", "Psychic"],
        baseStats: {
            hp: 47,
            atk: 20,
            def: 14,
            spa: 20,
            spd: 14,
            spe: 120
        },
        abilities: {
            0: "Mitosis"
        },
        color: "Red",
        heightm: 0.1,
        weightkg: 0.25,
		  eggGroups: ["Undiscovered"],
    },
    hoorbok: {
        num: 7500287,
        species: "Hoorbok",
        types: ["Poison", "Dark"],
        baseStats: {
            hp: 90,
            atk: 135,
            def: 65,
            spa: 120,
            spd: 105,
            spe: 90
        },
        abilities: {
            0: "Prestidigitation"
        },
        color: "Purple",
        heightm: 5,
        weightkg: 277.5,
		  eggGroups: ["Undiscovered"],
    },
    ninetalesprime: {
		  num: 38,
		  species: "Ninetales-Prime",
		  baseSpecies: "Ninetales",
        genderRatio: {M: 0.25, F: 0.75},
		  forme: "Prime",
		  formeLetter: "P",
        types: ["Ice", "Fire"],
        baseStats: {
            hp: 83,
            atk: 81,
            def: 85,
            spa: 91,
            spd: 110,
            spe: 114
        },
        abilities: {
            0: "Solar Snow"
        },
        color: "White",
        heightm: 1.1,
        weightkg: 19.9,
		  eggGroups: ["Field"],
    },
    blampa: {
        num: 7500289,
        species: "Blampa",
        types: ["Water", "Dragon"],
        genderRatio: {M: 0.75, F: 0.25},
        baseStats: {
            hp: 88,
            atk: 81,
            def: 102,
            spa: 120,
            spd: 108,
            spe: 67
        },
        abilities: {
            0: "Torrential Rage"
        },
        color: "Blue",
        heightm: 2.3,
        weightkg: 135.25,
		  eggGroups: ["Monster"],
    },
    blampamega: {
        num: 7500289,
        species: "Blampa-Mega",
        baseSpecies: "Blampa",
        forme: "Mega",
        formeLetter: "M",
        types: ["Water", "Dragon"],
        genderRatio: {M: 0.75, F: 0.25},
        baseStats: {
            hp: 88,
            atk: 101,
            def: 122,
            spa: 170,
            spd: 118,
            spe: 67
        },
        abilities: {
            0: "Mega Launcher"
        },
        color: "Blue",
        heightm: 2.3,
        weightkg: 150.85,
		  eggGroups: ["Monster"],
    },
    origamiswan: {
        num: 7500290,
        species: "Origami-Swan",
        types: ["Psychic", "Steel"],
        gender: "N",
        baseStats: {
            hp: 87,
            atk: 82,
            def: 92,
            spa: 124,
            spd: 112,
            spe: 79
        },
        abilities: {
            0: "Fluttering Heart"
        },
        color: "Pink",
        heightm: 0.8,
        weightkg: 41.95,
		  eggGroups: ["Undiscovered"],
    },
    kecleus: {
        num: 7500291,
        species: "Kecleus",
        types: ["Normal"],
        baseStats: {
            hp: 90,
            atk: 105,
            def: 100,
            spa: 105,
            spd: 120,
            spe: 100
        },
        abilities: {
            0: "Prototype"
        },
        color: "Green",
        heightm: 2.1,
        weightkg: 171,
		  eggGroups: ["Undiscovered"],
    },	
    fearroh: {
        num: 7500292,
        species: "Fear-Roh",
        types: ["Flying"],
        baseStats: {
            hp: 85,
            atk: 125,
            def: 97,
            spa: 85,
            spd: 107,
            spe: 100
        },
        abilities: {
            0: "Sharpshooter"
        },
        heightm: 2.5,
        weightkg: 118.5,
		  eggGroups: ["Undiscovered"],
    },
    neoprene: {
        num: 7500293,
        species: "Neoprene",
        types: ["Steel"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 90,
            def: 108,
            spa: 135,
            spd: 108,
            spe: 62
        },
        abilities: {
            0: "Rubber Up"
        },
        color: "Blue",
        heightm: 1.35,
        weightkg: 82.5,
		  eggGroups: ["Undiscovered"],
    },
    maroramalola: {
        num: 7500294,
        species: "Maroram-Alola",
        types: ["Fire"],
        baseStats: {
            hp: 80,
            atk: 108,
            def: 108,
            spa: 108,
            spd: 108,
            spe: 80
        },
        abilities: {
            0: "Turbo Curse"
        },
        color: "Purple",
        heightm: 2.1,
        weightkg: 182,
		  eggGroups: ["Undiscovered"],
    },
    genny: {
        num: 7500295,
        species: "Genny",
        types: ["Bug"],
        gender: "N",
        baseStats: {
            hp: 73,
            atk: 131,
            def: 87,
            spa: 115,
            spd: 87,
            spe: 95
        },
        abilities: {
            0: "Revved Up"
        },
        color: "Purple",
        heightm: 1.35,
        weightkg: 51.5,
		  eggGroups: ["Undiscovered"],
    },
    sylvoko: {
        num: 7500296,
        species: "Sylvoko",
        types: ["Fairy"],
        genderRatio: {M: 0.875, F: 0.125},
        baseStats: {
            hp: 82,
            atk: 100,
            def: 75,
            spa: 112,
            spd: 102,
            spe: 115
        },
        abilities: {
            0: "Misty Supercharge"
        },
        color: "Yellow",
        heightm: 1.4,
        weightkg: 22,
		  eggGroups: ["Undiscovered"],
    },
    miniancie: {
        num: 7500297,
        species: "Miniancie",
		  baseForme: "Ore",
        types: ["Rock"],
        gender: "N",
        baseStats: {
            hp: 55,
            atk: 80,
            def: 145,
            spa: 80,
            spd: 145,
            spe: 55
        },
        abilities: {
            0: "Crystallized Shield"
        },
        color: "Pink",
        heightm: 0.5,
        weightkg: 44.25,
		  eggGroups: ["Undiscovered"],
    },
    minianciejewel: {
        num: 7500297,
        species: "Miniancie-Jewel",
        baseSpecies: "Miniancie",
        gender: "N",
        forme: "Jewel",
        formeLetter: "J",
        types: ["Rock"],
        baseStats: {
            hp: 55,
            atk: 145,
            def: 80,
            spa: 145,
            spd: 80,
            spe: 115
        },
        abilities: {
            0: "Crystallized Shield"
        },
        color: "Pink",
        heightm: 0.5,
        weightkg: 4.55,
		  eggGroups: ["Undiscovered"],
    },
    minianciemegaore: {
        num: 7500297,
        species: "Miniancie-Mega-Ore",
        baseSpecies: "Miniancie",
        gender: "N",
        forme: "Mega-Ore",
        formeLetter: "M",
        baseStats: {
            hp: 55,
            atk: 140,
            def: 105,
            spa: 140,
            spd: 105,
            spe: 115
        },
        abilities: {
            0: "Crystallized Shield"
        },
        color: "Pink",
        heightm: 0.9,
        weightkg: 63.25,
		  eggGroups: ["Undiscovered"],
    },
    minianciemegajewel: {
        num: 7500297,
        species: "Miniancie-Mega-Jewel",
        baseSpecies: "Miniancie",
        gender: "N",
        forme: "Mega-Jewel",
        formeLetter: "M",
        baseStats: {
            hp: 55,
            atk: 205,
            def: 40,
            spa: 205,
            spd: 40,
            spe: 175
        },
        abilities: {
            0: "Crystallized Shield"
        },
        color: "Pink",
        heightm: 0.9,
        weightkg: 23.55,
		  eggGroups: ["Undiscovered"],
    },
    tapudede: {
        num: 7500298,
        species: "Tapu Dede",
        types: ["Grass"],
        gender: "N",
        baseStats: {
            hp: 79,
            atk: 150,
            def: 110,
            spa: 85,
            spd: 100,
            spe: 57
        },
        abilities: {
            0: "Grassworker"
        },
        color: "Green",
        heightm: 2.9,
        weightkg: 127.75,
		  eggGroups: ["Undiscovered"],
    },
    shenala: {
        num: 7500299,
        species: "Shenala",
        types: ["Ghost"],
        gender: "N",
        baseStats: {
            hp: 69,
            atk: 111,
            def: 67,
            spa: 103,
            spd: 68,
            spe: 78
        },
        abilities: {
            0: "Shadow Guard"
        },
        color: "Purple",
        heightm: 2.4,
        weightkg: 60.6,
		  eggGroups: ["Undiscovered"],
    },
    entir: {
        num: 7500300,
        species: "Entir",
        types: ["Fire", "Bug"],
        baseStats: {
            hp: 90,
            atk: 140,
            def: 92,
            spa: 72,
            spd: 72,
            spe: 112
        },
        abilities: {
            0: "Vexing Valor"
        },
        color: "Brown",
        heightm: 1.8,
        weightkg: 126.5,
		  eggGroups: ["Undiscovered"],
    },
    entirmega: {
        num: 7500300,
        species: "Entir-Mega",
        baseSpecies: "Entir",
        forme: "Mega",
        formeLetter: "M",
        types: ["Fire", "Flying"],
        baseStats: {
            hp: 90,
            atk: 170,
            def: 112,
            spa: 82,
            spd: 92,
            spe: 132
        },
        abilities: {
            0: "Aerilate"
        },
        color: "Brown",
        heightm: 2,
        weightkg: 130.5,
		  eggGroups: ["Undiscovered"],
    },
    giramini: {
        num: 7500301,
        species: "Giramini",
        types: ["Ghost", "Rock"],
        gender: "N",
        baseStats: {
            hp: 110,
            atk: 80,
            def: 125,
            spa: 80,
            spd: 125,
            spe: 80
        },
        abilities: {
            0: "Compression"
        },
        color: "Black",
        heightm: 2.4,
        weightkg: 395,
		  eggGroups: ["Undiscovered"],
		  otherFormes: ["giraminiunleashed"],
    },
    giraminiunleashed: {
        num: 7500301,
        species: "Giramini-Unleashed",
        baseSpecies: "Giramini",
        forme: "Unleashed",
        formeLetter: "U",
        gender: "N",
        types: ["Ghost", "Rock"],
        baseStats: {
            hp: 110,
            atk: 125,
            def: 80,
            spa: 125,
            spd: 80,
            spe: 140
        },
        abilities: {
            0: "Compression"
        },
        color: "Black",
        heightm: 4.8,
        weightkg: 255.3,
		  eggGroups: ["Undiscovered"],
    },
    aquapod: {
        num: 7500302,
        species: "Aquapod",
        types: ["Water", "Bug"],
        baseStats: {
            hp: 81,
            atk: 107,
            def: 126,
            spa: 65,
            spd: 121,
            spe: 51
        },
        abilities: {
            0: "Bubble Slip"
		  },
        color: "Gray",
		  eggGroups: ["Bug"],
        heightm: 1.9,
        weightkg: 95,
       dexentry: "Upon first being encountered in the wild, it was thought to be an UB, due to it's oddity. However, upon more reserach being done, it was discovered that it is one of the many recently discovered hybrids. It is able to walk on water surfaces with it's thin four legs, and has a huge bubble around it's head. It uses bubbles to make the floor slippery to increase it's speed. It's still unknown wether this fusion has two eyes or four, as it was not indentified if it has an eye inside another, compound eyes, or just two huge eyes."
    },
    reshivine: {
        num: 7500303,
        species: "Reshivine",
        types: ["Dragon", "Grass"],
        genderRatio: {M: 0.875, F: 0.125},
        baseStats: {
            hp: 80,
            atk: 90,
            def: 90,
            spa: 120,
            spd: 100,
            spe: 105
        },
        abilities: {
            0: "Spiral Flames"
        },
        color: "White",
        heightm: 2,
        weightkg: 173,
		  eggGroups: ["Undiscovered"],
    },
    rosium: {
        num: 7500304,
        species: "Rosium",
        types: ["Poison", "Grass"],
        genderRatio: {M: 0.75, F: 0.25},
        baseStats: {
            hp: 80,
            atk: 86,
            def: 92,
            spa: 114,
            spd: 112,
            spe: 95
        },
        abilities: {
            0: "Operation Overgrow"
        },
        color: "Green",
        heightm: 1.35,
        weightkg: 57.5,
		  eggGroups: ["Grass"],
       dexentry: "After evolving from Roseleef, Subject #304 broke out of confinement. Subject #74, even when Mega Evolved, was taken out effortlessly, as was Subject #83. Subject #59, which is only meant to be used in dire situations, was required to restrain it. Subject #304 has been successfully inhibited. Though it still has very strong Grass-type moves, it is no longer likely to effortlessly break through our most defensive fusions.",
    },
		eevee: {
			num: 133,
			species: "Eevee",
			types: ["Normal"],
			genderRatio: {M: 0.875, F: 0.125},
			baseStats: {hp: 55, atk: 55, def: 50, spa: 45, spd: 65, spe: 55},
			abilities: {0: "Run Away", 1: "Adaptability", H: "Anticipation"},
			heightm: 0.3,
			weightkg: 6.5,
			color: "Brown",
			evos: ["vaporeon", "jolteon", "flareon", "espeon", "umbreon", "leafeon", "glaceon", "sylveon", "valveon"],
			eggGroups: ["Field"],
		},
    valveon: {
        num: 7500305,
        species: "Valveon",
        types: ["Water", "Fairy"],
			genderRatio: {M: 0.875, F: 0.125},
        baseStats: {
            hp: 122,
            atk: 75,
            def: 72,
            spa: 120,
            spd: 122,
            spe: 72
        },
        abilities: {
            0: "Pixie Absorb"
        },
        color: "Blue",
		 prevo: "eevee",
		 evoLevel: 2,
        heightm: 1,
        weightkg: 26.25,
		 eggGroups: ["Field"],
    },
    raptalon: {
        num: 7500306,
        species: "Raptalon",
        types: ["Flying", "Fire"],
        baseStats: {
            hp: 91,
            atk: 110,
            def: 80,
            spa: 72,
            spd: 74,
            spe: 123
        },
        abilities: {
            0: "Fearless"
        },
        color: "Brown",
        heightm: 1.2,
        weightkg: 24.7,
		  eggGroups: ["Flying"],
    },
    deoxurkoutlet: {
        num: 7500307,
        species: "Deoxurk-Outlet",
        types: ["Psychic", "Electric"],
        gender: "N",
        baseStats: {
            hp: 86,
            atk: 79,
            def: 120,
            spa: 131,
            spd: 120,
            spe: 86
        },
        abilities: {
            0: "Peer Pressure"
        },
        color: "Black",
        heightm: 2.75,
        weightkg: 80.4,
		  eggGroups: ["Undiscovered"],
    },
    
    generott: {
        num: 7500309,
        species: "Generott",
        types: ["Water", "Bug"],
        gender: "N",
        baseStats: {
            hp: 85,
            atk: 120,
            def: 90,
            spa: 120,
            spd: 90,
            spe: 100
        },
        abilities: {
            0: "Upgrade"
        },
        color: "Blue",
        heightm: 1.5,
        weightkg: 88.55,
		  eggGroups: ["Undiscovered"],
    },
    darmin: {
        num: 7500310,
        species: "Darmin",
		  baseForme: "Up",
        types: ["Fire", "Normal"],
        baseStats: {
            hp: 137,
            atk: 160,
            def: 87,
            spa: 72,
            spd: 70,
            spe: 107
        },
        abilities: {
            0: "Rhythm"
        },
        color: "Brown",
        heightm: 1.65,
        weightkg: 111.7,
		  eggGroups: ["Field"],
    },
    darmindown: {
        num: 7500310,
        species: "Darmin-Down",
        baseSpecies: "Darmin",
        forme: "Down",
        formeLetter: "D",
        types: ["Fire", "Psychic"],
        baseStats: {
            hp: 137,
            atk: 72,
            def: 137,
            spa: 160,
            spd: 120,
            spe: 67
        },
        abilities: {
            0: "Rhythm"
        },
        color: "Blue",
        heightm: 1.65,
        weightkg: 111.7,
		  eggGroups: ["Field"],
    },
    conkeldurus: {
        num: 7500311,
        species: "Conkeldurus",
        types: ["Electric", "Fighting"],
        gender: "M",
        baseStats: {
            hp: 92,
            atk: 135,
            def: 92,
            spa: 90,
            spd: 92,
            spe: 81
        },
        abilities: {
            0: "Lightning Fist"
        },
        color: "Blue",
        heightm: 1.5,
        weightkg: 74,
		  eggGroups: ["Undiscovered"],
    },
    fisktres: {
        num: 7500312,
        species: "Fisktres",
        types: ["Ground", "Flying"],
        baseStats: {
            hp: 111,
            atk: 83,
            def: 90,
            spa: 120,
            spd: 100,
            spe: 61
        },
        abilities: {
            0: "Flare Wings"
        },
        color: "Brown",
        heightm: 1.35,
        weightkg: 35.5,
		  eggGroups: ["Undiscovered"],
    },
    landana: {
        num: 7500313,
        species: "Landana",
        types: ["Ground", "Flying"],
		  gender: "M",
        baseStats: {
            hp: 82,
            atk: 137,
            def: 77,
            spa: 96,
            spd: 75,
            spe: 112
        },
        abilities: {
            0: "Pecking Order"
        },
        color: "Brown",
        heightm: 1.3,
        weightkg: 46.1,
		  eggGroups: ["Undiscovered"],
    },
    star: {
        num: 7500315,
        species: "Star",
        types: ["Fairy", "Dark"],
			genderRatio: {M: 0.875, F: 0.125},
        baseStats: {
            hp: 78,
            atk: 72,
            def: 81,
            spa: 131,
            spd: 93,
            spe: 121
        },
        abilities: {
            0: "Magical Wand"
        },
        color: "Blue",
        heightm: 1.5,
        weightkg: 39,
		  eggGroups: ["Undiscovered"],
    },
    starbutterfly: {
        num: 7500315,
        species: "Star-Butterfly",
        baseSpecies: "Star",
        forme: "Butterfly",
        formeLetter: "B",
			genderRatio: {M: 0.875, F: 0.125},
        types: ["Fairy", "Dark"],
        baseStats: {
            hp: 78,
            atk: 122,
            def: 81,
            spa: 181,
            spd: 103,
            spe: 131
        },
        abilities: {
            0: "Magical Wand"
        },
        color: "Blue",
        heightm: 1.5,
        weightkg: 39,
		  eggGroups: ["Undiscovered"],
    },
    gardelego: {
        num: 7500316,
        species: "Gardelego",
        types: ["Fairy", "Poison"],
        baseStats: {
            hp: 108,
            atk: 59,
            def: 76,
            spa: 126,
            spd: 123,
            spe: 101
        },
        abilities: {
            0: "Beast's Copycat"
        },
        color: "White",
        heightm: 1.4,
        weightkg: 51.95,
		  eggGroups: ["Undiscovered"],
    },
    gardelegomega: {
        num: 7500316,
        species: "Gardelego-Mega",
        baseSpecies: "Gardelego",
        forme: "Mega",
        formeLetter: "M",
        types: ["Fairy", "Poison"],
        baseStats: {
            hp: 108,
            atk: 79,
            def: 76,
            spa: 166,
            spd: 143,
            spe: 121
        },
        abilities: {
            0: "Pixilate"
        },
        color: "White",
        heightm: 1.4,
        weightkg: 51.95,
		  eggGroups: ["Undiscovered"],
    },
    maltarione: {
        num: 7500317,
        species: "Maltarione",
        types: ["Steel", "Dragon"],
        gender: "N",
        baseStats: {
            hp: 82,
            atk: 70,
            def: 102,
            spa: 120,
            spd: 107,
            spe: 70
        },
        abilities: {
            0: "Medical Expert"
        },
        color: "Gray",
        heightm: 1.15,
        weightkg: 100.3,
		  eggGroups: ["Undiscovered"],
    },
    maltarionemega: {
        num: 7500317,
        species: "Maltarione-Mega",
        baseSpecies: "Maltarione",
        gender: "N",
        forme: "Mega",
        formeLetter: "M",
        types: ["Steel", "Fairy"],
        baseStats: {
            hp: 82,
            atk: 110,
            def: 122,
            spa: 160,
            spd: 107,
            spe: 70
        },
        abilities: {
            0: "Pixilate"
        },
        color: "Gray",
        heightm: 1.55,
        weightkg: 100.3,
		  eggGroups: ["Undiscovered"],
    },
    maskle: {
        num: 7500318,
        species: "Maskle",
        types: ["Bug", "Rock"],
        baseStats: {
            hp: 55,
            atk: 45,
            def: 156,
            spa: 65,
            spd: 166,
            spe: 52
        },
        abilities: {
            0: "Bad Influence"
        },
        color: "Blue",
        heightm: 0.7,
        weightkg: 12.05,
		  eggGroups: ["Bug"],
    },
    cowardice: {
        num: 7500319,
        species: "Cowardice",
        types: ["Bug", "Ground"],
        gender: "F",
        baseStats: {
            hp: 78,
            atk: 112,
            def: 133,
            spa: 70,
            spd: 98,
            spe: 48
        },
        abilities: {
            0: "Scout"
        },
        color: "Brown",
        heightm: 1.25,
        weightkg: 57.25,
		  eggGroups: ["Bug"],
    },
    guzzbro: {
        num: 7500320,
        species: "Guzzbro",
        types: ["Dragon", "Water"],
        baseStats: {
            hp: 168,
            atk: 88,
            def: 92,
            spa: 110,
            spd: 77,
            spe: 37
        },
        abilities: {
            0: "Rejuvenation"
        },
        color: "Black",
        heightm: 3.55,
        weightkg: 483.25,
		  eggGroups: ["Undiscovered"],
    },
    guzzbromega: {
        num: 7500320,
        species: "Guzzbro-Mega",
        baseSpecies: "Guzzbro",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dragon", "Water"],
        baseStats: {
            hp: 168,
            atk: 88,
            def: 162,
            spa: 140,
            spd: 77,
            spe: 37
        },
        abilities: {
            0: "Shell Armor"
        },
        color: "Black",
        heightm: 3.95,
        weightkg: 524.75,
		  eggGroups: ["Undiscovered"],
    },
    zycannon: {
        num: 7500321,
        species: "Zycannon",
        types: ["Ground", "Normal"],
        baseStats: {
            hp: 67,
            atk: 130,
            def: 73,
            spa: 68,
            spd: 80,
            spe: 107
        },
        abilities: {
            0: "Force Drain"
        },
        color: "Black",
        heightm: 1.15,
        weightkg: 29.75,
		  eggGroups: ["Undiscovered"],
    },
    zeeeee: {
        num: 7500322,
        species: "Zeeeee",
        types: ["Ground", "Normal"],
        gender: "N",
        baseStats: {
            hp: 82,
            atk: 91,
            def: 100,
            spa: 63,
            spd: 90,
            spe: 75
        },
        abilities: {
            0: "Foundation"
        },
        color: "Brown",
        heightm: 2.65,
        weightkg: 155.75,
		  eggGroups: ["Undiscovered"],
    },
    zeeeeecomplete: {
        num: 7500322,
        species: "Zeeeee-Complete",
        baseSpecies: "Zeeeee",
        forme: "Complete",
        formeLetter: "C",
        gender: "N",
        types: ["Ground", "Normal"],
        baseStats: {
            hp: 190,
            atk: 91,
            def: 100,
            spa: 63,
            spd: 90,
            spe: 75
        },
        abilities: {
            0: "Foundation"
        },
        color: "Black",
        heightm: 2.15,
        weightkg: 311.5,
		  eggGroups: ["Undiscovered"],
    },
    peridot: {
        num: 7500323,
        species: "Peridot",
        types: ["Flying", "Electric"],
        gender: "N",
        baseStats: {
            hp: 83,
            atk: 84,
            def: 93,
            spa: 121,
            spd: 70,
            spe: 112
        },
        abilities: {
            0: "Limb Enhancers"
        },
        color: "Black",
        heightm: 2.65,
        weightkg: 69.75,
		  eggGroups: ["Undiscovered"],
    },
    peridotmega: {
        num: 7500323,
        species: "Peridot-Mega",
        baseSpecies: "Peridot",
        forme: "Mega",
        formeLetter: "M",
		  gender: "N",
        types: ["Flying", "Electric"],
        baseStats: {
            hp: 83,
            atk: 84,
            def: 98,
            spa: 186,
            spd: 80,
            spe: 132
        },
        abilities: {
            0: "No Guard"
        },
        color: "Black",
        heightm: 3.35,
        weightkg: 80.75,
		  eggGroups: ["Undiscovered"],
    },
    stundicuno: {
        num: 7500324,
        species: "Stundicuno",
        types: ["Ground", "Ice"],
        baseStats: {
            hp: 115,
            atk: 75,
            def: 94,
            spa: 100,
            spd: 120,
            spe: 60
        },
        abilities: {
            0: "Dirt Nap"
        },
        color: "Brown",
        heightm: 1.2,
        weightkg: 33.2,
		  eggGroups: ["Undiscovered"],
    },
    aloha: {
        num: 7500325,
        species: "Aloha",
        types: ["Psychic", "Dark"],
        baseStats: {
            hp: 103,
            atk: 137,
            def: 79,
            spa: 112,
            spd: 74,
            spe: 103
        },
        abilities: {
            0: "Hydrodynamic"
        },
        color: "White",
        heightm: 2.6,
        weightkg: 159.4,
		  eggGroups: ["Undiscovered"],
    },
    alohamega: {
        num: 7500325,
        species: "Aloha-Mega",
        baseSpecies: "Aloha",
        forme: "Mega",
        formeLetter: "M",
        types: ["Psychic", "Dark"],
        baseStats: {
            hp: 103,
            atk: 157,
            def: 109,
            spa: 127,
            spd: 99,
            spe: 113
        },
        abilities: {
            0: "Strong Jaw"
        },
        color: "White",
        heightm: 3.3,
        weightkg: 200.9,
		  eggGroups: ["Undiscovered"],
    },
    zekloom: {
        num: 7500326,
        species: "Zekloom",
        types: ["Electric", "Fighting"],
        baseStats: {
            hp: 80,
            atk: 140,
            def: 100,
            spa: 90,
            spd: 100,
            spe: 100
        },
        abilities: {
            0: "Engineer"
        },
        color: "Black",
        heightm: 2.05,
        weightkg: 192.1,
		  eggGroups: ["Undiscovered"],
    },
    gengalure: {
        num: 7500327,
        species: "Gengalure",
        types: ["Ghost", "Fire"],
        baseStats: {
            hp: 70,
            atk: 70,
            def: 85,
            spa: 147,
            spd: 92,
            spe: 105
        },
        abilities: {
            0: "Blessed Protection"
        },
        color: "Purple",
        heightm: 1.25,
        weightkg: 37.4,
		  eggGroups: ["Amorphous"],
    },
    gengaluremega: {
        num: 7500327,
        species: "Gengalure-Mega",
        baseSpecies: "Gengalure",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ghost", "Fire"],
        baseStats: {
            hp: 70,
            atk: 70,
            def: 105,
            spa: 187,
            spd: 112,
            spe: 125
        },
        abilities: {
            0: "Shadow Tag"
        },
        color: "Purple",
        heightm: 1.15,
        weightkg: 37.4,
		  eggGroups: ["Amorphous"],
    },
    ferrolord: {
        num: 7500328,
        species: "Ferrolord",
        types: ["Steel", "Dragon"],
        gender: "N",
        baseStats: {
            hp: 148,
            atk: 107,
            def: 102,
            spa: 75,
            spd: 104,
            spe: 31
        },
        abilities: {
            0: "Barbs Boost"
        },
        color: "Black",
        heightm: 3.25,
        weightkg: 499,
		  eggGroups: ["Undiscovered"],
    },
    dad: {
        num: 7500329,
        species: "Dad",
        types: ["Normal", "Dark"],
        gender: "N",
        baseStats: {
            hp: 69,
            atk: 60,
            def: 51,
            spa: 41,
            spd: 51,
            spe: 56
        },
        abilities: {
            0: "Mirror Mirror"
        },
        color: "Purple",
        heightm: 0.5,
        weightkg: 9.6,
		  eggGroups: ["Field"],
    },
    glaive: {
        num: 7500330,
        species: "Glaive",
        types: ["Ghost", "Ground"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 130,
            def: 145,
            spa: 73,
            spd: 90,
            spe: 63
        },
        abilities: {
            0: "Atmospheric Pull"
        },
        color: "Brown",
        heightm: 2.15,
        weightkg: 477.25,
		  eggGroups: ["Undiscovered"],
    },
    glaiveprimal: {
        num: 7500330,
        species: "Glaive-Primal",
        baseSpecies: "Glaive",
        forme: "Primal",
        formeLetter: "P",
        gender: "N",
        types: ["Ghost", "Fire"],
        baseStats: {
            hp: 100,
            atk: 160,
            def: 165,
            spa: 123,
            spd: 90,
            spe: 63
        },
        abilities: {
            0: "Desolate Land"
        },
        color: "Brown",
        heightm: 3.65,
        weightkg: 526.95,
		  eggGroups: ["Undiscovered"],
    },
    kyurpedo: {
        num: 7500331,
        species: "Kyurpedo",
        types: ["Ice", "Dark"],
        baseStats: {
            hp: 105,
            atk: 145,
            def: 70,
            spa: 125,
            spd: 75,
            spe: 95
        },
        abilities: {
            0: "Volt Boost"
        },
        color: "Black",
        heightm: 2.55,
        weightkg: 206.9,
		  eggGroups: ["Undiscovered"],
    },
    kyurpedomega: {
        num: 7500331,
        species: "Kyurpedo-Mega",
        baseSpecies: "Kyurpedo",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ice", "Dark"],
        baseStats: {
            hp: 105,
            atk: 165,
            def: 100,
            spa: 140,
            spd: 100,
            spe: 105
        },
        abilities: {
            0: "Strong Jaw"
        },
        color: "Black",
        heightm: 3.25,
        weightkg: 248.4,
		  eggGroups: ["Undiscovered"],
    },
    gearchamp: {
        num: 7500332,
        species: "Gearchamp",
        types: ["Fighting", "Fairy"],
        gender: "N",
        baseStats: {
            hp: 80,
            atk: 84,
            def: 95,
            spa: 105,
            spd: 95,
            spe: 85
        },
        abilities: {
            0: "Soul Power"
        },
        color: "Gray",
        heightm: 1.15,
        weightkg: 56.5,
		  eggGroups: ["Undiscovered"],
    },
    gearchampmega: {
        num: 7500332,
        species: "Gearchamp-Mega",
        baseSpecies: "Gearchamp",
        forme: "Mega",
        formeLetter: "M",
        types: ["Fighting", "Fairy"],
        gender: "N",
        baseStats: {
            hp: 80,
            atk: 124,
            def: 105,
            spa: 125,
            spd: 105,
            spe: 105
        },
        abilities: {
            0: "Pure Power"
        },
        color: "Gray",
        heightm: 1.15,
        weightkg: 56.5,
		  eggGroups: ["Undiscovered"],
    },
    luau: {
        num: 7500333,
        species: "Luau",
        types: ["Ghost", "Ground"],
        baseStats: {
            hp: 113,
            atk: 107,
            def: 79,
            spa: 139,
            spd: 97,
            spe: 73
        },
        abilities: {
            0: "Land's Shield"
        },
        color: "Purple",
        heightm: 2.95,
        weightkg: 170,
		  eggGroups: ["Undiscovered"],
    },
    luaumega: {
        num: 7500333,
        species: "Luau-Mega",
        baseSpecies: "Luau",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ghost", "Ground"],
        baseStats: {
            hp: 113,
            atk: 127,
            def: 109,
            spa: 179,
            spd: 127,
            spe: 53
        },
        abilities: {
            0: "Sheer Force"
        },
        color: "Purple",
        heightm: 3.55,
        weightkg: 270.5,
		  eggGroups: ["Undiscovered"],
    },
    dotsensu: {
        num: 7500334,
        species: "Dot-Sensu",
        types: ["Normal", "Ghost"],
        gender: "N",
        baseStats: {
            hp: 61,
            atk: 59,
            def: 59,
            spa: 93,
            spd: 59,
            spe: 90
        },
        abilities: {
            0: "Danceposter"
        },
        color: "Purple",
        heightm: 0.45,
        weightkg: 3.7,
		  eggGroups: ["Flying"],
    },
    darkhunter: {
        num: 7500335,
        species: "Dark Hunter",
        types: ["Rock", "Dark"],
        baseStats: {
            hp: 78,
            atk: 123,
            def: 83,
            spa: 105,
            spd: 83,
            spe: 114
        },
        abilities: {
            0: "Night Terror"
        },
        color: "Red",
        heightm: 1.3,
        weightkg: 37.75,
		  eggGroups: ["Undiscovered"],
    },
    guzzpex: {
        num: 7500336,
        species: "Guzzpex",
        types: ["Poison", "Dark"],
        baseStats: {
            hp: 136,
            atk: 82,
            def: 122,
            spa: 75,
            spd: 117,
            spe: 39
        },
        abilities: {
            0: "Merciless Beast"
        },
        color: "Blue",
        heightm: 3.1,
        weightkg: 451.25,
		  eggGroups: ["Undiscovered"],
    },

    cosmill: {
        num: 7500338,
        species: "Cosmill",
        types: ["Psychic", "Fairy"],
        baseStats: {
            hp: 56,
            atk: 44,
            def: 40,
            spa: 44,
            spd: 40,
            spe: 38
        },
        abilities: {
            0: "Godlike Powers"
        },
        color: "Blue",
        heightm: 0.3,
        weightkg: 4.3,
		  eggGroups: ["Undiscovered"],
    },
    maginera: {
        num: 7500339,
        species: "Maginera",
        types: ["Fairy", "Fire"],
        gender: "N",
        baseStats: {
            hp: 87,
            atk: 110,
            def: 117,
            spa: 110,
            spd: 117,
            spe: 62
        },
        abilities: {
            0: "Soften Up"
        },
        color: "Gray",
        heightm: 1.4,
        weightkg: 81.75,
		  eggGroups: ["Undiscovered"],
    },
    catdeer: {
        num: 7500340,
        species: "Catdeer",
        types: ["Normal", "Dark"],
        baseStats: {
            hp: 79,
            atk: 102,
            def: 66,
            spa: 97,
            spd: 68,
            spe: 106
        },
        abilities: {
            0: "Tricky Glare"
        },
        color: "Purple",
        heightm: 1.25,
        weightkg: 54.35,
		  eggGroups: ["Field"],
    },
    hooptrio: {
        num: 7500341,
        species: "Hooptrio",
        types: ["Ground", "Dark"],
        baseStats: {
            hp: 75,
            atk: 140,
            def: 55,
            spa: 120,
            spd: 100,
            spe: 100
        },
        abilities: {
            0: "Confiscation"
        },
        color: "Blue",
        heightm: 3.6,
        weightkg: 261.65,
		  eggGroups: ["Undiscovered"],
    },
    fablefin: {
        num: 7500342,
        species: "Fablefin",
        types: ["Fairy"],
        genderRatio: {M: 0.25, F: 0.75},
        baseStats: {
            hp: 85,
            atk: 72,
            def: 106,
            spa: 100,
            spd: 125,
            spe: 80
        },
        abilities: {
            0: "Misty Mind"
        },
        color: "Purple",
        heightm: 1.3,
        weightkg: 30.6,
		  eggGroups: ["Undiscovered"],
    },
    klefz: {
        num: 7500343,
        species: "Klef-Z",
        types: ["Normal", "Fairy"],
        gender: "N",
        baseStats: {
            hp: 81,
            atk: 80,
            def: 80,
            spa: 117,
            spd: 81,
            spe: 102
        },
        abilities: {
            0: "Familiar Maneuvering"
        },
        color: "Gray",
        heightm: 0.55,
        weightkg: 18.5,
		  eggGroups: ["Mineral"],
    },
    tropisteela: {
        num: 7500344,
        species: "Tropisteela",
        types: ["Flying", "Steel"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 90,
            def: 104,
            spa: 90,
            spd: 104,
            spe: 56
        },
        abilities: {
            0: "Stat Harvesting"
        },
        color: "Green",
        heightm: 5.6,
        weightkg: 549.95,
		  eggGroups: ["Undiscovered"],
    },
    pokemon: {
        num: 7500345,
        species: "Pokemon",
        types: ["Water", "Fighting"],
        gender: "N",
        baseStats: {
            hp: 77,
            atk: 129,
            def: 76,
            spa: 114,
            spd: 86,
            spe: 110
        },
        abilities: {
            0: "Ability"
        },
        color: "Brown",
        heightm: 2.55,
        weightkg: 179,
		  eggGroups: ["Undiscovered"],
    },
    nosegod: {
        num: 7500346,
        species: "Nose God",
        types: ["Normal", "Rock"],
        gender: "N",
        baseStats: {
            hp: 75,
            atk: 103,
            def: 133,
            spa: 88,
            spd: 110,
            spe: 80
        },
        abilities: {
            0: "Type Trap"
        },
        color: "White",
        heightm: 2.1,
        weightkg: 208.5,
		  eggGroups: ["Undiscovered"],
    },
    swampterra: {
        num: 7500347,
        species: "Swampterra",
        types: ["Ground", "Water"],
        genderRatio: {M: 0.875, F: 0.125},
        baseStats: {
            hp: 107,
            atk: 119,
            def: 107,
            spa: 90,
            spd: 97,
            spe: 68
        },
        abilities: {
            0: "Uninhabitable"
        },
        color: "Blue",
        heightm: 1.85,
        weightkg: 195.95,
		  eggGroups: ["Monster"],
    },
    swampterramega: {
        num: 7500347,
        species: "Swampterra-Mega",
        baseSpecies: "Swampterra",
        forme: "Mega",
        formeLetter: "M",
        genderRatio: {M: 0.875, F: 0.125},
        types: ["Ground", "Water"],
        baseStats: {
            hp: 107,
            atk: 159,
            def: 127,
            spa: 100,
            spd: 117,
            spe: 78
        },
        abilities: {
            0: "Swift Swim"
        },
        color: "Blue",
        heightm: 2.25,
        weightkg: 216.05,
		  eggGroups: ["Monster"],
    },
    zeklade: {
        num: 7500348,
        species: "Zeklade",
        types: ["Dragon", "Steel"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 130,
            def: 135,
            spa: 82,
            spd: 95,
            spe: 62
        },
        abilities: {
            0: "Unstable Voltage"
        },
        color: "Brown",
        heightm: 1.85,
        weightkg: 174.75,
        dexentry: "As Experiments #242 and #304, among others, need to be restrained in some way, shape, or form, some DNA was taken from the Dark Stone from Unova and combined with Doublade DNA. The resulting construct appears to have swords for arms, two tassels as wings, and a body made of the same substance as Doublade's sheath. While this fusion always hits its mark, it unfortunately is guaranteed to be hit by any attacks aimed for it.",
		  eggGroups: ["Undiscovered"],
    },
    grequa: {
        num: 7500349,
        species: "Grequa",
        types: ["Water", "Bug"],
        genderRatio: {M: 0.75, F: 0.25},
        baseStats: {
            hp: 82,
            atk: 92,
            def: 89,
            spa: 86,
            spd: 111,
            spe: 92
        },
        abilities: {
            0: "Huge Bubble"
        },
        color: "Green",
        heightm: 1.65,
        weightkg: 61,
		  eggGroups: ["Water 2"],
    },
    alteyer: {
        num: 7500350,
        species: "Alteyer",
        types: ["Ghost", "Flying"],
        genderRatio: {M: 0.75, F: 0.25},
        baseStats: {
            hp: 86,
            atk: 98,
            def: 92,
            spa: 95,
            spd: 112,
            spe: 85
        },
        abilities: {
            0: "Constellation"
        },
        color: "Brown",
        heightm: 1.35,
        weightkg: 28.6,
		  eggGroups: ["Flying"],
    },
    alteyermega: {
        num: 7500350,
        species: "Alteyer-Mega",
        baseSpecies: "Alteyer",
        forme: "Mega",
        formeLetter: "M",
        genderRatio: {M: 0.75, F: 0.25},
        types: ["Ghost", "Fairy"],
        baseStats: {
            hp: 86,
            atk: 138,
            def: 112,
            spa: 135,
            spd: 112,
            spe: 85
        },
        abilities: {
            0: "Pixilate"
        },
        color: "Brown",
        heightm: 1.75,
        weightkg: 28.6,
		  eggGroups: ["Flying"],
    },
    scrafting: {
        num: 7500351,
        species: "Scrafting",
        types: ["Fighting", "Normal"],
        baseStats: {
            hp: 117,
            atk: 135,
            def: 115,
            spa: 80,
            spd: 97,
            spe: 89
        },
        abilities: {
            0: "Stare Down"
        },
        color: "Brown",
        heightm: 1.55,
        weightkg: 80.25,
		  eggGroups: ["Field"],
    },
    not: {
        num: 7500352,
        species: "Not",
        types: ["Flying", "Normal"],
        baseStats: {
            hp: 94,
            atk: 85,
            def: 87,
            spa: 93,
            spd: 85,
            spe: 122
        },
        abilities: {
            0: "Ambition"
        },
        color: "Purple",
        heightm: 1.5,
        weightkg: 62.25,
		  eggGroups: ["Flying"],
    },
    notmega: {
        num: 7500352,
        species: "Not-Mega",
        baseSpecies: "Not",
        forme: "Mega",
        formeLetter: "M",
        types: ["Flying", "Normal"],
        baseStats: {
            hp: 94,
            atk: 85,
            def: 92,
            spa: 158,
            spd: 95,
            spe: 142
        },
        abilities: {
            0: "No Guard"
        },
        color: "Purple",
        heightm: 2.2,
        weightkg: 39.6,
		  eggGroups: ["Flying"],
    },
    joltsol: {
        num: 7500353,
        species: "Joltsol",
        types: ["Electric", "Dark"],
        genderRatio: {M: 0.75, F: 0.25},
        baseStats: {
            hp: 75,
            atk: 107,
            def: 70,
            spa: 102,
            spd: 87,
            spe: 112
        },
        abilities: {
            0: "Power Surge"
        },
        color: "White",
        heightm: 1,
        weightkg: 35.75,
		  eggGroups: ["Field"],
    },
    joltsolmega: {
        num: 7500353,
        species: "Joltsol-Mega",
        baseSpecies: "Joltsol",
        forme: "Mega",
        formeLetter: "M",
        genderRatio: {M: 0.75, F: 0.25},
        types: ["Electric", "Dark"],
        baseStats: {
            hp: 75,
            atk: 127,
            def: 70,
            spa: 142,
            spd: 87,
            spe: 152
        },
        abilities: {
            0: "Magic Bounce"
        },
        color: "White",
        heightm: 1,
        weightkg: 37.75,
		  eggGroups: ["Field"],
    },
    topaz: {
        num: 7500354,
        species: "Topaz",
        types: ["Rock", "Fairy"],
        genderRatio: {M: 0.75, F: 0.25},
        baseStats: {
            hp: 90,
            atk: 92,
            def: 102,
            spa: 72,
            spd: 85,
            spe: 95
        },
        abilities: {
            0: "Power Of Two"
        },
        color: "Brown",
        heightm: 1.05,
        weightkg: 34.5,
		  eggGroups: ["Water 1"],
    },
    dolphin: {
        num: 7500355,
        species: "Dolphin",
        types: ["Fire", "Normal"],
        genderRatio: {M: 0.75, F: 0.25},
        baseStats: {
            hp: 122,
            atk: 124,
            def: 96,
            spa: 114,
            spd: 92,
            spe: 112
        },
        abilities: {
            0: "Lava Dive"
        },
        color: "Red",
        heightm: 1.75,
        weightkg: 84.75,
		  eggGroups: ["Field"],
    },
    snorligatr: {
        num: 7500356,
        species: "Snorligatr",
        types: ["Normal", "Water"],
        genderRatio: {M: 0.875, F: 10.25},
        baseStats: {
            hp: 132,
            atk: 117,
            def: 92,
            spa: 82,
            spd: 106,
            spe: 64
        },
        abilities: {
            0: "Sheer Fat"
        },
        color: "Blue",
        heightm: 2.2,
        weightkg: 274.4,
		  eggGroups: ["Monster"],
    },
    emponite: {
        num: 7500357,
        species: "Emponite",
        types: ["Steel", "Dragon"],
        genderRatio: {M: 0.75, F: 0.25},
        baseStats: {
            hp: 97,
            atk: 120,
            def: 101,
            spa: 115,
            spd: 110,
            spe: 80
        },
        abilities: {
            0: "Ocean Shield"
        },
        color: "Blue",
        heightm: 1.95,
        weightkg: 147.25,
		  eggGroups: ["Water 1"],
    },
    leafrou: {
        num: 7500358,
        species: "Leafrou",
        types: ["Normal", "Grass"],
        genderRatio: {M: 0.75, F: 0.25},
        baseStats: {
            hp: 80,
            atk: 105,
            def: 105,
            spa: 72,
            spd: 87,
            spe: 108
        },
        abilities: {
            0: "Chlorocoat"
        },
        color: "White",
        heightm: 1.1,
        weightkg: 26.75,
		  eggGroups: ["Field"],
    },
    mimiblim: {
        num: 7500359,
        species: "Mimiblim",
        types: ["Ghost"],
        baseStats: {
            hp: 112,
            atk: 95,
            def: 72,
            spa: 80,
            spd: 89,
            spe: 98
        },
        abilities: {
            0: "Disguise Burden"
        },
        color: "Purple",
        heightm: 0.7,
        weightkg: 7.85,
		  otherFormes: ["mimiblimbusted"],
		  eggGroups: ["Amorphous"],
    },
mimiblimbusted: {
        num: 7500359,
        species: "Mimiblim-Busted",
			baseSpecies: "Mimiblim",
			forme: "Busted",
			formeLetter: "B",
        types: ["Ghost"],
        baseStats: {
            hp: 112,
            atk: 95,
            def: 72,
            spa: 80,
            spd: 89,
            spe: 98
        },
        abilities: {
            0: "Disguise Burden"
        },
        color: "Purple",
        heightm: 0.3,
        weightkg: 7.85,
		  eggGroups: ["Amorphous"],
    },
    warcanein: {
        num: 7500360,
        species: "Warcanein",
        types: ["Water", "Fire"],
        genderRatio: {M: 0.625, F: 0.375},
        baseStats: {
            hp: 110,
            atk: 105,
            def: 95,
            spa: 107,
            spd: 95,
            spe: 90
        },
        abilities: {
            0: "Persistent Morale"
        },
        color: "Blue",
        heightm: 1.65,
        weightkg: 152.8,
		  eggGroups: ["Field"],
    },
    zorarce: {
        num: 7500361,
        species: "Zorarce",
        types: ["Normal", "Dark"],
        genderRatio: {M: 0.875, F: 0.125},
        baseStats: {
            hp: 80,
            atk: 102,
            def: 90,
            spa: 100,
            spd: 90,
            spe: 102
        },
        abilities: {
            0: "Type Illusionist"
        },
        color: "Black",
        heightm: 1.95,
        weightkg: 166.25,
		  eggGroups: ["Undiscovered"],
    },
    happislash: {
        num: 7500362,
        species: "Happislash",
		  baseForme: "Friendly",
        gender: "F",
        types: ["Ghost", "Normal"],
        baseStats: {
            hp: 80,
            atk: 27,
            def: 97,
            spa: 32,
            spd: 127,
            spe: 45
        },
        abilities: {
            0: "Unfriend"
        },
        color: "Pink",
        heightm: 1.15,
        weightkg: 38.7,
		  eggGroups: ["Undiscovered"],
    },
    happislashunfriendly: {
        num: 7500362,
        species: "Happislash-Unfriendly",
        baseSpecies: "Happislash",
        forme: "Unfriendly",
        formeLetter: "U",
        gender: "F",
        types: ["Ghost", "Normal"],
        baseStats: {
            hp: 80,
            atk: 97,
            def: 27,
            spa: 127,
            spd: 32,
            spe: 45
        },
        abilities: {
            0: "Unfriend"
        },
        color: "Pink",
        heightm: 1.15,
        weightkg: 38.7,
		  eggGroups: ["Undiscovered"],
    },
    torkobulu: {
        num: 7500363,
        species: "Torko Bulu",
        types: ["Grass", "Fire"],
        gender: "N",
        baseStats: {
            hp: 70,
            atk: 107,
            def: 127,
            spa: 105,
            spd: 102,
            spe: 47
        },
        abilities: {
            0: "Photosynthesis Surge"
        },
        color: "Red",
        heightm: 1.2,
        weightkg: 62.95,
		  eggGroups: ["Undiscovered"],
    },
    pheroxish: {
        num: 7500364,
        species: "Pheroxish",
        types: ["Water", "Fighting"],
        baseStats: {
            hp: 69,
            atk: 122,
            def: 53,
            spa: 122,
            spd: 53,
            spe: 141
        },
        abilities: {
            0: "Dazzle Beast"
        },
        color: "Pink",
        heightm: 1.35,
        weightkg: 22,
		  eggGroups: ["Undiscovered"],
    },

    magnelure: {
        num: 7500366,
        species: "Magnelure",
        types: ["Electric", "Fire"],
        gender: "N",
        baseStats: {
            hp: 65,
            atk: 62,
            def: 102,
            spa: 147,
            spd: 100,
            spe: 90
        },
        abilities: {
            0: "Blacksmith"
        },
        color: "Black",
        heightm: 1.1,
        weightkg: 107.15,
		  eggGroups: ["Mineral"],
    },
    shucklord: {
        num: 7500367,
        species: "Shucklord",
        types: ["Bug", "Dragon"],
        baseStats: {
            hp: 141,
            atk: 55,
            def: 141,
            spa: 73,
            spd: 141,
            spe: 24
        },
        abilities: {
            0: "Two-Faced"
        },
        color: "Yellow",
        heightm: 3.05,
        weightkg: 454.25,
		  eggGroups: ["Undiscovered"],
    },
    mtndew: {
        num: 7500368,
        species: "Mtn Dew",
        types: ["Steel", "Psychic"],
        gender: "N",
        baseStats: {
            hp: 79,
            atk: 114,
            def: 106,
            spa: 94,
            spd: 74,
            spe: 114
        },
        abilities: {
            0: "Contagious Yawn"
        },
        color: "Gray",
        heightm: 0.35,
        weightkg: 18.5,
		  eggGroups: ["Field"],
    },
    altearnia: {
        num: 7500369,
        species: "Altearnia",
        types: ["Dragon", "Steel"],
        gender: "N",
        baseStats: {
            hp: 90,
            atk: 100,
            def: 102,
            spa: 109,
            spd: 110,
            spe: 72
        },
        abilities: {
            0: "Compassionate Soul"
        },
        color: "Blue",
        heightm: 1.05,
        weightkg: 50.55,
		  eggGroups: ["Undiscovered"],
    },
    altearniamega: {
        num: 7500369,
        species: "Altearnia-Mega",
        baseSpecies: "Altearnia",
        forme: "Mega",
        formeLetter: "M",
        gender: "N",
        types: ["Dragon", "Fairy"],
        baseStats: {
            hp: 90,
            atk: 140,
            def: 122,
            spa: 149,
            spd: 110,
            spe: 72
        },
        abilities: {
            0: "Pixilate"
        },
        color: "Gray",
        heightm: 1.45,
        weightkg: 50.55,
		  eggGroups: ["Undiscovered"],
    },
    regigiot: {
        num: 7500370,
        species: "Regigiot",
        types: ["Flying", "Ice"],
        gender: "N",
        baseStats: {
            hp: 81,
            atk: 65,
            def: 87,
            spa: 105,
            spd: 135,
            spe: 95
        },
        abilities: {
            0: "Magical Ice"
        },
        color: "Blue",
        heightm: 1.65,
        weightkg: 107.25,
		  eggGroups: ["Undiscovered"],
    },
    regigiotmega: {
        num: 7500370,
        species: "Regigiot-Mega",
        baseSpecies: "Regigiot",
        forme: "Mega",
        formeLetter: "M",
        gender: "N",
        types: ["Flying", "Ice"],
        baseStats: {
            hp: 81,
            atk: 65,
            def: 92,
            spa: 170,
            spd: 145,
            spe: 115
        },
        abilities: {
            0: "No Guard"
        },
        color: "Blue",
        heightm: 2.35,
        weightkg: 118.25,
		  eggGroups: ["Undiscovered"],
    },
    kasukabe: {
        num: 7500371,
        species: "Kasukabe",
        types: ["Normal", "Fighting"],
        gender: "F",
        baseStats: {
            hp: 109,
            atk: 117,
            def: 109,
            spa: 47,
            spd: 83,
            spe: 103
        },
        abilities: {
            0: "Genome Tree"
        },
        color: "Brown",
        heightm: 2.3,
        weightkg: 206.8,
		  eggGroups: ["Undiscovered"],
    },
    kasukabemega: {
        num: 7500371,
        species: "Kasukabe-Mega",
        baseSpecies: "Kasukabe",
        forme: "Mega",
        formeLetter: "M",
        types: ["Normal", "Fighting"],
        gender: "F",
        baseStats: {
            hp: 109,
            atk: 147,
            def: 129,
            spa: 67,
            spd: 103,
            spe: 113
        },
        abilities: {
            0: "Parental Bond"
        },
        color: "Brown",
        heightm: 2.3,
        weightkg: 226.8,
		  eggGroups: ["Undiscovered"],
    },
    sakamaki: {
        num: 7500372,
        species: "Sakamaki",
        types: ["Dragon", "Steel"],
		  gender: "N",
        baseStats: {
            hp: 80,
            atk: 128,
            def: 100,
            spa: 90,
            spd: 85,
            spe: 115
        },
        abilities: {
            0: "Code Unknown"
        },
        color: "Gray",
        heightm: 1.05,
        weightkg: 91.8,
		  eggGroups: ["Mineral"],
    },
    sakamakimega: {
        num: 7500372,
        species: "Sakamaki-Mega",
        baseSpecies: "Sakamaki",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dragon", "Steel"],
        baseStats: {
            hp: 80,
            atk: 138,
            def: 150,
            spa: 100,
            spd: 95,
            spe: 135
        },
        abilities: {
            0: "Aerilate"
        },
        color: "Gray",
        heightm: 1.15,
        weightkg: 101.8,
		  eggGroups: ["Mineral"],
    },
    mapuiasu: {
        num: 7500373,
        species: "Mapu Iasu",
        types: ["Ghost", "Fairy"],
        genderRatio: {M: 0.25, F: 0.75},
        baseStats: {
            hp: 75,
            atk: 85,
            def: 93,
            spa: 98,
            spd: 120,
            spe: 90
        },
        abilities: {
            0: "Sensu Dancer"
        },
        color: "Purple",
        heightm: 0.95,
        weightkg: 12.3,
		  eggGroups: ["Undiscovered"],
    },
    mapuauhe: {
        num: 7500374,
        species: "Mapu Auhe",
        types: ["Fire", "Grass"],
        genderRatio: {M: 0.25, F: 0.75},
        baseStats: {
            hp: 75,
            atk: 120,
            def: 98,
            spa: 93,
            spd: 85,
            spe: 90
        },
        abilities: {
            0: "Baile Dancer"
        },
        color: "Red",
        heightm: 1.25,
        weightkg: 24.45,
		  eggGroups: ["Undiscovered"],
    },
    mapumoli: {
        num: 7500375,
        species: "Mapu Moli",
        types: ["Electric"],
        genderRatio: {M: 0.25, F: 0.75},
        baseStats: {
            hp: 75,
            atk: 93,
            def: 89,
            spa: 98,
            spd: 85,
            spe: 120
        },
        abilities: {
            0: "Pom-Pom Dancer"
        },
        color: "Yellow",
        heightm: 1.2,
        weightkg: 11.95,
		  eggGroups: ["Undiscovered"],
    },
    mapubupa: {
        num: 7500376,
        species: "Mapu Bupa",
        types: ["Psychic"],
        genderRatio: {M: 0.25, F: 0.75},
        baseStats: {
            hp: 75,
            atk: 90,
            def: 85,
            spa: 120,
            spd: 93,
            spe: 98
        },
        abilities: {
            0: "Pa'u Dancer"
        },
        color: "Psychic",
        heightm: 0.9,
        weightkg: 11,
		  eggGroups: ["Undiscovered"],
    },
    meazle: {
        num: 7500377,
        species: "Meazle",
        types: ["Psychic", "Poison"],
        gender: "F",
        baseStats: {
            hp: 84,
            atk: 82,
            def: 100,
            spa: 105,
            spd: 100,
            spe: 108
        },
        abilities: {
            0: "Ailment Master"
        },
        color: "Pink",
        heightm: 0.8,
        weightkg: 13.1,
		  eggGroups: ["Undiscovered"],
    },
    parantis: {
        num: 7500378,
        species: "Parantis",
        types: ["Bug", "Grass"],
        baseStats: {
            hp: 75,
            atk: 110,
            def: 95,
            spa: 80,
            spd: 95,
            spe: 47
        },
        abilities: {
            0: "Thermophilic"
        },
        color: "Pink",
        heightm: 0.95,
        weightkg: 24,
		  eggGroups: ["Bug"],
    },
    dinna: {
        num: 7500379,
        species: "Dinna",
        types: ["Normal", "Psychic"],
        gender: "N",
        baseStats: {
            hp: 82,
            atk: 36,
            def: 46,
            spa: 57,
            spd: 51,
            spe: 56
        },
        abilities: {
            0: "Move~Stat"
        },
        color: "Purple",
        heightm: 0.45,
        weightkg: 13.65,
		  eggGroups: ["Field"],
    },
    sylvias: {
        num: 7500380,
        species: "Sylvias",
        types: ["Dragon", "Fairy"],
        gender: "F",
        baseStats: {
            hp: 107,
            atk: 72,
            def: 97,
            spa: 110,
            spd: 130,
            spe: 85
        },
        abilities: {
            0: "Enchanted"
        },
        color: "Pink",
        heightm: 1.2,
        weightkg: 31.75,
		  eggGroups: ["Undiscovered"],
    },
    sylviasmega: {
        num: 7500380,
        species: "Sylvias-Mega",
        baseSpecies: "Sylvias",
        forme: "Mega",
        formeLetter: "M",
        gender: "F",
        types: ["Dragon", "Fairy"],
        baseStats: {
            hp: 107,
            atk: 92,
            def: 127,
            spa: 140,
            spd: 150,
            spe: 85
        },
        abilities: {
            0: "Levitate"
        },
        color: "Pink",
        heightm: 1.6,
        weightkg: 43.75,
		  eggGroups: ["Undiscovered"],
    },
    mightyyvel: {
        num: 7500381,
        species: "Mighty Yvel",
        types: ["Dark"],
        baseStats: {
            hp: 101,
            atk: 110,
            def: 90,
            spa: 95,
            spd: 90,
            spe: 102
        },
        abilities: {
            0: "Plan In Action"
        },
        color: "Red",
        heightm: 3.4,
        weightkg: 120,
		  eggGroups: ["Undiscovered"],
    },
    tyranwak: {
        num: 7500382,
        species: "Tyranwak",
        types: ["Rock", "Ghost"],
        genderRatio: {M: 0.75, F: 0.25},
        baseStats: {
            hp: 81,
            atk: 110,
            def: 124,
            spa: 69,
            spd: 79,
            spe: 68
        },
        abilities: {
            0: "Enchanted Skull"
        },
        color: "Purple",
        heightm: 1.25,
        weightkg: 152,
		  eggGroups: ["Undiscovered"],
    },
    volcanoemblem: {
        num: 7500383,
        species: "Volcano Emblem",
        types: ["Flying", "Fire"],
        gender: "N",
        baseStats: {
            hp: 78,
            atk: 84,
            def: 100,
            spa: 130,
            spd: 90,
            spe: 100
        },
        abilities: {
            0: "Magic Sponge"
        },
        color: "Black",
        heightm: 1.55,
        weightkg: 104.5,
		  eggGroups: ["Undiscovered"],
    },
    pelikoko: {
        num: 7500384,
        species: "Peli Koko",
        types: ["Water", "Electric"],
        gender: "N",
        baseStats: {
            hp: 65,
            atk: 82,
            def: 92,
            spa: 115,
            spd: 72,
            spe: 117
        },
        abilities: {
            0: "Thunderstorm Surge"
        },
        color: "Yellow",
        heightm: 1.5,
        weightkg: 24.25,
		  eggGroups: ["Undiscovered"],
    },
    eellee: {
        num: 7500386,
        species: "Eel-Lee",
        types: ["Electric", "Fire"],
        baseStats: {
            hp: 90,
            atk: 110,
            def: 90,
            spa: 100,
            spd: 120,
            spe: 71
        },
        abilities: {
            0: "Ground Leecher"
        },
        color: "Blue",
        heightm: 2.5,
        weightkg: 110.5,
		  eggGroups: ["Undiscovered"],
    },
    celesir: {
        num: 7500387,
        species: "Celesir",
        types: ["Steel", "Bug"],
        gender: "N",
        baseStats: {
            hp: 81,
            atk: 133,
            def: 101,
            spa: 81,
            spd: 105,
            spe: 73
        },
        abilities: {
            0: "Bloodthirst"
        },
        color: "Green",
        heightm: 5.35,
        weightkg: 527.45,
		  eggGroups: ["Undiscovered"],
    },
    celesirmega: {
        num: 7500387,
        species: "Celesir-Mega",
        baseSpecies: "Celesir",
        forme: "Mega",
        formeLetter: "M",
        gender: "N",
        types: ["Steel", "Flying"],
        baseStats: {
            hp: 81,
            atk: 163,
            def: 121,
            spa: 91,
            spd: 125,
            spe: 93
        },
        abilities: {
            0: "Aerilate"
        },
        color: "Green",
        heightm: 5.55,
        weightkg: 531.45,
		  eggGroups: ["Undiscovered"],
    },
    nymph: {
        num: 7500388,
        species: "Nymph",
        types: ["Fairy", "Grass"],
        gender: "N",
        baseStats: {
            hp: 88,
            atk: 85,
            def: 105,
            spa: 115,
            spd: 105,
            spe: 105
        },
        abilities: {
            0: "Deceiver"
        },
        color: "Gray",
        heightm: 2.15,
        weightkg: 71.75,
		  eggGroups: ["Undiscovered"],
    },
    kyokid: {
        num: 7500389,
        species: "Kyokid",
        types: ["Water", "Electric"],
        genderRatio: {M: 0.75, F: 0.25},
        baseStats: {
            hp: 72,
            atk: 81,
            def: 70,
            spa: 120,
            spd: 97,
            spe: 112
        },
        abilities: {
            0: "Electrotorrent"
        },
        color: "Yellow",
        heightm: 2.55,
        weightkg: 187.75,
		  eggGroups: ["Undiscovered"],
    },
    kyokidprimal: {
        num: 7500389,
        species: "Kyokid-Primal",
        baseSpecies: "Kyokid",
        forme: "Primal",
        formeLetter: "P",
        genderRatio: {M: 0.75, F: 0.25},
        types: ["Water", "Electric"],
        baseStats: {
            hp: 72,
            atk: 131,
            def: 70,
            spa: 150,
            spd: 117,
            spe: 112
        },
        abilities: {
            0: "Primordial Sea"
        },
        color: "Yellow",
        heightm: 7.85,
        weightkg: 265.75,
		  eggGroups: ["Undiscovered"],
    },
    lemorusincarnate: {
        num: 7500390,
        species: "Lemorus-Incarnate",
        types: ["Ground", "Electric"],
        gender: "M",
        baseStats: {
            hp: 104,
            atk: 142,
            def: 110,
            spa: 85,
            spd: 72,
            spe: 73
        },
        abilities: {
            0: "Move Madness"
        },
        color: "Gray",
        heightm: 1.6,
        weightkg: 192,
		  eggGroups: ["Undiscovered"],
    },
    absoko: {
        num: 7500391,
        species: "Absoko",
        types: ["Dark", "Fairy"],
        baseStats: {
            hp: 67,
            atk: 142,
            def: 72,
            spa: 85,
            spd: 67,
            spe: 122
        },
        abilities: {
            0: "Dark Surge"
        },
        color: "White",
        heightm: 1.5,
        weightkg: 33.75,
		  eggGroups: ["Undiscovered"],
     dexentry: "A rare, legendary entity created in a laboratory by Team Rocket. It was made using the powerful forces of Tapu Koko, the guardian of Melemele, combined with an Absol. Results did not go as intended, as it kept the pure heart of Koko, and does not obey Team Rocket at all. This species is said to warn the coming of a terrible thunderstorm, and only ever appearing before one is near."
    },
    absokomega: {
        num: 7500391,
        species: "Absoko-Mega",
        baseSpecies: "Absoko",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dark", "Fairy"],
        baseStats: {
            hp: 67,
            atk: 162,
            def: 72,
            spa: 125,
            spd: 67,
            spe: 162
        },
        abilities: {
            0: "Magic Bounce"
        },
        color: "White",
        heightm: 1.5,
        weightkg: 35.75,
		  eggGroups: ["Undiscovered"],
    },
    sugarplum: {
        num: 7500392,
        species: "Sugarplum",
        types: ["Steel", "Fairy"],
        baseStats: {
            hp: 83,
            atk: 99,
            def: 84,
            spa: 72,
            spd: 84,
            spe: 94
        },
        abilities: {
            0: "Nutcracker"
        },
        color: "Gray",
        heightm: 0.55,
        weightkg: 4.15,
		  eggGroups: ["Fairy"],
    },
    giradino: {
        num: 7500393,
        species: "Giradino",
        types: ["Ghost", "Normal"],
        baseStats: {
            hp: 146,
            atk: 80,
            def: 113,
            spa: 80,
            spd: 113,
            spe: 70
        },
        abilities: {
            0: "Revitalize"
        },
        color: "Pink",
        heightm: 2.8,
        weightkg: 390.5,
		  eggGroups: ["Undiscovered"],
    },
    giradinomega: {
        num: 7500393,
        species: "Giradino-Mega",
        baseSpecies: "Giradino",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ghost", "Fairy"],
        baseStats: {
            hp: 146,
            atk: 80,
            def: 153,
            spa: 100,
            spd: 153,
            spe: 70
        },
        abilities: {
            0: "Healer"
        },
        color: "White",
        heightm: 3.2,
        weightkg: 391.5,
		  eggGroups: ["Undiscovered"],
    },
    xurkizard: {
        num: 7500394,
        species: "Xurkizard",
        types: ["Electric", "Fire"],
        gender: "N",
        baseStats: {
            hp: 80,
            atk: 86,
            def: 74,
            spa: 161,
            spd: 78,
            spe: 111
        },
        abilities: {
            0: "Blazing Beast"
        },
        color: "Black",
        heightm: 2.75,
        weightkg: 95.25,
		  eggGroups: ["Undiscovered"],
    },
    xurkizardmegax: {
        num: 7500394,
        species: "Xurkizard-Mega-X",
        baseSpecies: "Xurkizard",
        forme: "Mega",
        formeLetter: "M",
        gender: "N",
        types: ["Electric", "Dragon"],
        baseStats: {
            hp: 80,
            atk: 132,
            def: 107,
            spa: 182,
            spd: 78,
            spe: 111
        },
        abilities: {
            0: "Tough Claws"
        },
        color: "Black",
        heightm: 2.75,
        weightkg: 115.25,
		  eggGroups: ["Undiscovered"],
    },
    xurkizardmegay: {
        num: 7500394,
        species: "Xurkizard-Mega-Y",
        baseSpecies: "Xurkizard",
        forme: "Mega",
        formeLetter: "M",
        gender: "N",
        types: ["Electric", "Fire"],
        baseStats: {
            hp: 80,
            atk: 106,
            def: 74,
            spa: 211,
            spd: 108,
            spe: 111
        },
        abilities: {
            0: "Drought"
        },
        color: "Black",
        heightm: 2.75,
        weightkg: 105.25,
		  eggGroups: ["Undiscovered"],
    },
    skarmeye: {
        num: 7500395,
        species: "Skarmeye",
        types: ["Steel", "Ghost"],
        baseStats: {
            hp: 81,
            atk: 103,
            def: 117,
            spa: 80,
            spd: 95,
            spe: 80
        },
        abilities: {
            0: "Light Armor"
        },
        heightm: 1.65,
        weightkg: 43.55,
		  eggGroups: ["Flying"],
    },
    marshern: {
        num: 7500396,
        species: "Marshern",
        types: ["Ground", "Fairy"],
        genderRatio: {M: 0.875, F: 0.125},
        baseStats: {
            hp: 98,
            atk: 108,
            def: 100,
            spa: 106,
            spd: 95,
            spe: 80
        },
        abilities: {
            0: "Soaking Aura"
        },
        color: "Blue",
        heightm: 1.85,
        weightkg: 121.5,
		  eggGroups: ["Undiscovered"],
    },
    grovyltal: {
        num: 7500397,
        species: "Grovyltal",
        types: ["Grass", "Dark"],
        genderRatio: {M: 0.875, F: 0.125},
        baseStats: {
            hp: 88,
            atk: 113,
            def: 70,
            spa: 113,
            spd: 81,
            spe: 117
        },
        abilities: {
            0: "Jailbreak"
        },
        color: "Green",
        heightm: 3.35,
        weightkg: 112.3,
		  eggGroups: ["Undiscovered"],
    },
    rairai: {
        num: 7500398,
        species: "Rairai",
        types: ["Dark", "Electric"],
        baseStats: {
            hp: 65,
            atk: 110,
            def: 73,
            spa: 133,
            spd: 85,
            spe: 118
        },
        abilities: {
            0: "Paralyzed With Fear"
        },
        color: "Black",
        heightm: 1.15,
        weightkg: 40.25,
		  eggGroups: ["Undiscovered"],
    },
    dramasnow: {
        num: 7500399,
        species: "Dramasnow",
        types: ["Dragon", "Ice"],
        baseStats: {
            hp: 94,
            atk: 86,
            def: 90,
            spa: 123,
            spd: 98,
            spe: 58
        },
        abilities: {
            0: "Ageless Blizzard"
        },
        color: "White",
        heightm: 2.6,
        weightkg: 160.25,
		  eggGroups: ["Monster"],
    },
    dramasnowmega: {
        num: 7500399,
        species: "Dramasnow-Mega",
        baseSpecies: "Dramasnow",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dragon", "Ice"],
        baseStats: {
            hp: 94,
            atk: 126,
            def: 120,
            spa: 163,
            spd: 118,
            spe: 28
        },
        abilities: {
            0: "Snow Warning"
        },
        color: "White",
        heightm: 3.1,
        weightkg: 209.75,
		  eggGroups: ["Monster"],
    },
    chaosii: {
        num: 7500400,
        species: "Chaos II",
        types: ["Normal", "Fighting"],
        genderRatio: {M: 0.375, F: 0.625},
        baseStats: {
            hp: 80,
            atk: 120,
            def: 70,
            spa: 90,
            spd: 70,
            spe: 120
        },
        abilities: {
            0: "Flip Out"
        },
        color: "Gray",
        heightm: 0.95,
        weightkg: 21.5,
		  eggGroups: ["Field"],
    },
    slowmarina: {
        num: 7500401,
        species: "Slowmarina",
        types: ["Water", "Fairy"],
        genderRatio: {M: 0.75, F: 0.25},
        baseStats: {
            hp: 97,
            atk: 84,
            def: 102,
            spa: 123,
            spd: 108,
            spe: 55
        },
        abilities: {
            0: "Magical Voice"
        },
        heightm: 1.7,
        weightkg: 61.25,
        color: "Pink",
        eggGroups: ["Water 1"]
    },
    slowmarinamega: {
        num: 7500401,
        species: "Slowmarina-Mega",
        baseSpecies: "Slowmarina",
        forme: "Mega",
        formeLetter: "M",
        types: ["Water", "Fairy"],
        genderRatio: {M: 0.75, F: 0.25},
        baseStats: {
            hp: 97,
            atk: 84,
            def: 172,
            spa: 153,
            spd: 108,
            spe: 55
        },
        abilities: {
            0: "Shell Armor"
        },
        heightm: 1.9,
        weightkg: 99.25,
        color: "Pink",
        eggGroups: ["Water 1"]
    },
    kartaria: {
        num: 7500402,
        species: "Kartaria",
        types: ["Steel", "Dragon"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 70,
            atk: 140,
            def: 110,
            spa: 70,
            spd: 70,
            spe: 108
        },
        abilities: {
            0: "Cloud Boost"
        },
        heightm: 22.8,
        weightkg: 10.35,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    kartariamega: {
        num: 7500402,
        species: "Kartaria-Mega",
        baseSpecies: "Kartaria",
        forme: "Mega",
        formeLetter: "M",
        types: ["Steel", "Fairy"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 70,
            atk: 180,
            def: 130,
            spa: 110,
            spd: 70,
            spe: 108
        },
        abilities: {
            0: "Pixilate"
        },
        heightm: 22.8,
        weightkg: 10.35,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    altarbat: {
        num: 7500403,
        species: "Altarbat",
        types: ["Poison", "Dragon"],
        genderRatio: {
            M: 0.5,
            F: 0.5
        },
        baseStats: {
            hp: 90,
            atk: 90,
            def: 95,
            spa: 80,
            spd: 102,
            spe: 115
        },
        abilities: {
            0: "Clean Aura"
        },
        heightm: 1.1,
        weightkg: 20.6,
        color: "Purple",
        eggGroups: ["Flying"],
    },
    altarbatmega: {
        num: 7500403,
        species: "Altarbat-Mega",
        baseSpecies: "Altarbat",
        forme: "Mega",
        formeLetter: "M",
        types: ["Poison", "Fairy"],
        baseStats: {
            hp: 90,
            atk: 130,
            def: 115,
            spa: 120,
            spd: 102,
            spe: 115
        },
        abilities: {
            0: "Pixilate"
        },
        heightm: 1.5,
        weightkg: 20.6,
        color: "Blue",
        eggGroups: ["Flying"],
    },
    darkelectrode: {
        num: 7500404,
        species: "Dark Electrode",
        types: ["Electric", "Dark"],
        gender: "N",
        baseStats: {
            hp: 65,
            atk: 70,
            def: 80,
            spa: 127,
            spd: 85,
            spe: 157
        },
        abilities: {
            0: "Last Nightmare"
        },
        color: "Black",
        heightm: 1.35,
        weightkg: 58.55,
     	  eggGroups: ["Undiscovered"],
    },
    vanilele: {
        num: 7500405,
        species: "Vani Lele",
        types: ["Ice", "Psychic"],
        gender: "N",
        baseStats: {
            hp: 70,
            atk: 90,
            def: 80,
            spa: 140,
            spd: 105,
            spe: 107
        },
        abilities: {
            0: "Brainfreeze Surge"
        },
        heightm: 1.25,
        weightkg: 38.05,
        color: "Pink",
        eggGroups: ["Undiscovered"],
    },
    shiinofey: {
        num: 7500406,
        species: "Shiinofey",
        types: ["Grass", "Fairy"],
        genderRatio: {M: 0.375, F: 0.625},
        baseStats: {
            hp: 65,
            atk: 58,
            def: 95,
            spa: 96,
            spd: 115,
            spe: 75
        },
        abilities: {
            0: "Spore Spreading"
        },
        heightm: 55,
        weightkg: 5.9,
        color: "Green",
        eggGroups: ["Grass"],
    },
    algantine: {
        num: 7500407,
        species: "Algantine",
        types: ["Poison", "Water"],
        baseStats: {
            hp: 85,
            atk: 67,
            def: 80,
            spa: 98,
            spd: 141,
            spe: 67
        },
        abilities: {
            0: "Adapting Absorption"
        },
        heightm: 2,
        weightkg: 150.8,
        color: "Brown",
        eggGroups: ["Water 1"],
    },
  
    heataria: {
        num: 7500409,
        species: "Heataria",
        types: ["Dragon", "Steel"],
        baseStats: {
            hp: 103,
            atk: 100,
            def: 98,
            spa: 100,
            spd: 105,
            spe: 78
        },
        abilities: {
            0: "Firefighter"
        },
        color: "Brown",
        heightm: 1.4,
        weightkg: 225.3,
     	  eggGroups: ["Undiscovered"],
    },
    heatariamega: {
        num: 7500409, // 103	140	118	140	105	78
        species: "Heataria-Mega",
        baseSpecies: "Heataria",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dragon", "Fairy"],
        baseStats: {
            hp: 103,
            atk: 140,
            def: 118,
            spa: 140,
            spd: 105,
            spe: 78
        },
        abilities: {
            0: "Firefighter"
        },
        color: "Brown",
        heightm: 1.8,
        weightkg: 225.3,
     	  eggGroups: ["Undiscovered"],
    },
    gardecuno: {
        num: 7500410,
        species: "Gardecuno",
        types: ["Ice", "Fairy"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 85,
            atk: 75,
            def: 90,
            spa: 120,
            spd: 128,
            spe: 90
        },
        abilities: {
            0: "Goddess Trace"
        },
        heightm: 1.65,
        weightkg: 51.9,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    gardecunomega: {
        num: 7500410,
        species: "Gardecuno-Mega",
        baseSpecies: "Gardecuno",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ice", "Fairy"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 85,
            atk: 95,
            def: 90,
            spa: 160,
            spd: 148,
            spe: 110
        },
        abilities: {
            0: "Pixilate"
        },
        heightm: 1.65,
        weightkg: 51.9,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    sparklingart: {
        num: 7500411,
        species: "Sparkling Art",
        types: ["Steel", "Flying"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 72,
            atk: 110,
            def: 92,
            spa: 60,
            spd: 92,
            spe: 115
        },
        abilities: {
            0: "Brilliant Brightness"
        },
        heightm: 0.9,
        weightkg: 53.0,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },
    
    mamozone: {
        num: 7500413,
        species: "Mamozone",
        types: ["Ground", "Steel"],
        gender: "N",
        baseStats: {
            hp: 90,
            atk: 120,
            def: 97,
            spa: 100,
            spd: 95,
            spe: 70
        },
        abilities: {
            0: "Fat Trap"
        },
        color: "Gray",
        heightm: 1.05,
        weightkg: 565.2,
		  eggGroups: ["Undiscovered"],
    },
    slakoem: {
        num: 7500414,
        species: "Slakoem",
        types: ["Normal", "Psychic"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        }, // 106	114	115	62	108	68
        baseStats: {
            hp: 106,
            atk: 114,
            def: 115,
            spa: 62,
            spd: 108,
            spe: 68
        },
        abilities: {
            0: "Singularity"
        },
        color: "Blue",
        heightm: 1.05,
        weightkg: 565.2,
		  eggGroups: ["Undiscovered"],
    },
    audala: {
        num: 7500415,
        species: "Audala",
        types: ["Ghost", "Normal"],
        baseStats: {
            hp: 140,
            atk: 86,
            def: 101,
            spa: 99,
            spd: 101,
            spe: 73
        },
        abilities: {
            0: "Recovery Shield"
        },
        heightm: 2.6,
        weightkg: 75.5,
        color: "Purple",
        eggGroups: ["Undiscovered"],
    },
    audalamega: {
        num: 7500415,
        species: "Audala-Mega",
        baseSpecies: "Audala",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ghost", "Fairy"],
        baseStats: {
            hp: 140,
            atk: 86,
            def: 141,
            spa: 119,
            spd: 141,
            spe: 73
        },
        abilities: {
            0: "Healer"
        },
        heightm: 3.0,
        weightkg: 76.5,
        color: "Purple",
        eggGroups: ["Undiscovered"],
    },
    sandgarde: {
        num: 7500416,
        species: "Sandgarde",
        types: ["Ground", "Dragon"],
        gender: "N",
        baseStats: {
            hp: 96,
            atk: 87,
            def: 115,
            spa: 110,
            spd: 105,
            spe: 65
        },
        abilities: {
            0: "Sandy Construct"
        },
        heightm: 3.1,
        weightkg: 277.5,
        color: "Brown",
        eggGroups: ["Undiscovered"],
        otherFormes: ["sandgardecastle"],
    },
    sandgardecastle: {
        num: 7500416,
        species: "Sandgarde-Castle",
        baseSpecies: "Sandgarde",
        forme: "Castle",
        formeLetter: "C",
        types: ["Ground", "Dragon"],
        gender: "N",
        baseStats: {
            hp: 204,
            atk: 87,
            def: 115,
            spa: 120,
            spd: 105,
            spe: 55
        },
        abilities: {
            0: "Sandy Construct"
        },
        heightm: 2.6,
        weightkg: 582.5,
        color: "Brown",
        eggGroups: ["Undiscovered"],
    },
    triagonal: {
        num: 7500417,
        species: "Triagonal",
        types: ["Electric", "Ice"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 75,
            atk: 62,
            def: 55,
            spa: 120,
            spd: 97,
            spe: 125
        },
        abilities: {
            0: "Airbone Lighting"
        },
        heightm: 1.3,
        weightkg: 94.1,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    triagonalmega: {
        num: 7500417,
        species: "Triagonal-Mega",
        baseSpecies: "Triagonal",
        forme: "Mega",
        formeLetter: "M",
        types: ["Electric", "Ice"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 75,
            atk: 62,
            def: 75,
            spa: 150,
            spd: 117,
            spe: 155
        },
        abilities: {
            0: "Intimidate"
        },
        heightm: 1.6,
        weightkg: 97.9,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    
    komodreigon: {
        num: 7500419,
        species: "Komodreigon",
        types: ["Dragon", "Fighting"],
        baseStats: {
            hp: 93,
            atk: 117,
            def: 117,
            spa: 125,
            spd: 107,
            spe: 101
        },
        abilities: {
            0: "S.O.N.A.R"
        },
        color: "Gray",
        heightm: 1.7,
        weightkg: 119.1,
        eggGroups: ["Dragon"],
    },
    dunking: {
        num: 7500420,
        species: "Dunking",
        types: ["Normal"],
        baseStats: {
            hp: 135,
            atk: 125,
            def: 95,
            spa: 90,
            spd: 75,
            spe: 82
        },
        abilities: {
            0: "Shut Up and Jam",
        },
        heightm: 1.8,
        weightkg: 72.3,
        color: "Yellow",
        eggGroups: ["Field"],
    },
    kudou: {
        num: 7500421,
        species: "Kudou",
        types: ["Water", "Electric"],
        gender: "N",
        baseStats: {
            hp: 85,
            atk: 100,
            def: 80,
            spa: 140,
            spd: 85,
            spe: 129
        },
        abilities: {
            0: "Authority"
        },
        heightm: 1.4,
        weightkg: 54.7,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
    },
    golisorem: {
        num: 7500422,
        species: "Golisorem",
        types: ["Ice", "Water"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 147,
            def: 115,
            spa: 95,
            spd: 110,
            spe: 67
        },
        abilities: {
            0: "Threatening Glare"
        },
        heightm: 2.5,
        weightkg: 216.5,
        color: "Gray",
        eggGroups: ["Undiscovered"]
    },
    tyrazma: {
        num: 7500423,
        species: "Tyrazma",
        types: ["Rock", "Psychic"],
        gender: "N",
        baseStats: {
            hp: 118,
            atk: 120,
            def: 105,
            spa: 121,
            spd: 104,
            spe: 70
        },
        abilities: {
            0: "Diamond Shield"
        },
        heightm: 2.4,
        weightkg: 230,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    tyrazmamega: {
        num: 7500423,
        species: "Tyrazma-Mega",
        baseSpecies: "Tyrazma",
        forme: "Mega",
        formeLetter: "M",
        types: ["Rock", "Psychic"],
        gender: "N",
        baseStats: {
            hp: 118,
            atk: 150,
            def: 145,
            spa: 121,
            spd: 124,
            spe: 80
        },
        abilities: {
            0: "Sand Stream"
        },
        heightm: 2.9,
        weightkg: 283,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    parasol: {
        num: 7500424,
        species: "Parasol",
        types: ["Bug", "Steel"],
        baseStats: {
            hp: 118,
            atk: 136,
            def: 93,
            spa: 86,
            spd: 84,
            spe: 63
        },
        abilities: {
            0: "Sunsteel Skin"
        },
        heightm: 2.2,
        weightkg: 129.8,
        color: "White",
        eggGroups: ["Undiscovered"],
    },
    
    nintwo: {
        num: 7500426,
        species: "Nintwo",
        types: ["Bug", "Psychic"],
        baseStats: {
            hp: 83,
            atk: 100,
            def: 77,
            spa: 122,
            spd: 80,
            spe: 145
        },
        abilities: {
            0: "Speed Stopper"
        },
        color: "Purple",
        heightm: 1.4,
        weightkg: 67,
		  eggGroups: ["Undiscovered"],
    },
    nintwomegax: {
        num: 7500426,
        species: "Nintwo-Mega-X",
        baseSpecies: "Nintwo",
        forme: "Mega",
        formeLetter: "M",
        types: ["Bug", "Fighting"],
        baseStats: {
            hp: 83,
            atk: 180,
            def: 87,
            spa: 122,
            spd: 90,
            spe: 145
        },
        abilities: {
            0: "Steadfast"
        },
        color: "Purple",
        heightm: 1.9,
        weightkg: 72,
		  eggGroups: ["Undiscovered"],
    },
    nintwomegay: {
        num: 7500426,
        species: "Nintwo-Mega-Y",
        baseSpecies: "Nintwo",
        forme: "Mega",
        formeLetter: "M",
        types: ["Bug", "Psychic"],
        baseStats: {
            hp: 83,
            atk: 140,
            def: 57,
            spa: 162,
            spd: 110,
            spe: 155
        },
        abilities: {
            0: "Insomnia"
        },
        color: "Purple",
        heightm: 0.9,
        weightkg: 18.125,
		  eggGroups: ["Undiscovered"],
    },
   
    pelippex: {
        num: 7500429,
        species: "Pelippex",
        types: ["Water", "Poison"],
        baseStats: {
            hp: 65,
            atk: 66,
            def: 136,
            spa: 84,
            spd: 116,
            spe: 60
        },
        abilities: {
            0: "Rain Regen"
        },
        heightm: 1,
        weightkg: 21.3,
        color: "Blue",
        eggGroups: ["Water 1"],
    },
     kyzor: {
        num: 7500430,
        species: "Kyzor",
        types: ["Dragon", "Steel"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 97,
            atk: 130,
            def: 105,
            spa: 92,
            spd: 105,
            spe: 90
        },
        abilities: {
            0: "Pressurizer"
        },
        heightm: 2.4,
        weightkg: 221.5,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },
    kyzormega: {
        num: 7500430,
        species: "Kyzor-Mega",
        baseSpecies: "Kyzor",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dragon", "Steel"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 97,
            atk: 150,
            def: 145,
            spa: 102,
            spd: 125,
            spe: 100
        },
        abilities: {
            0: "Technician"
        },
        heightm: 2.6,
        weightkg: 228.5,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },

    xurkinomega: {
        num: 7500432,
        species: "Xurkino-Mega",
        baseSpecies: "Xurkino",
        forme: "Mega",
        formeLetter: "M",
        types: ["Electric", "Fairy"],
        gender: "N",
        baseStats: {
            hp: 93,
            atk: 74,
            def: 138,
            spa: 136,
            spd: 138,
            spe: 66
        },
        abilities: {
            0: "Healer"
        },
        heightm: 2.9,
        weightkg: 66.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    yvelchan: {
        num: 7500433,
        species: "Yvel-Chan",
        types: ["Flying", "Normal"],
        baseStats: {
            hp: 208,
            atk: 68,
            def: 70,
            spa: 83,
            spd: 101,
            spe: 74
        },
        abilities: {
            0: "Dark Aura"
        },
        heightm: 3.5,
        weightkg: 118.8,
        color: "Red",
        eggGroups: ["Undiscovered"],
    },
    heatreon: {
        num: 7500434,
        species: "Heatreon",
        types: ["Steel", "Fairy"],
		  genderRatio: {M: 0.75, F: 0.25},
        baseStats: {
            hp: 100,
            atk: 77,
            def: 100,
            spa: 125,
            spd: 130,
            spe: 69
        },
        abilities: {
            0: "Fire-B-Gone"
        },
        heightm: 1.35,
        weightkg: 226.75,
        color: "Pink",
        eggGroups: ["Undiscovered"],
    },
    altarigarde: {
        num: 7500435,
        species: "Altarigarde",
        types: ["Ground", "Flying"],
        gender: "N",
        baseStats: {
            hp: 91,
            atk: 105,
            def: 105,
            spa: 75,
            spd: 110,
            spe: 97
        },
        abilities: {
            0: "Weather Break"
        },
        heightm: 3.05,
        weightkg: 162.8,
        color: "Green",
        eggGroups: ["Undiscovered"],
    },
    altarigardemega: {
        num: 7500435,
        species: "Altarigarde-Mega",
        baseSpecies: "Altarigarde",
        forme: "Mega",
        formeLetter: "M",
        types: ["Ground", "Fairy"],
        gender: "N",
        baseStats: {
            hp: 91,
            atk: 145,
            def: 125,
            spa: 115,
            spd: 110,
            spe: 97
        },
        abilities: {
            0: "Pixilate"
        },
        heightm: 3.45,
        weightkg: 162.8,
        color: "Green",
        eggGroups: ["Undiscovered"],
    },
    flycanion: {
        num: 7500436,
        species: "Flycanion",
        types: ["Ground", "Fire"],
        baseStats: {
            hp: 100,
            atk: 105,
            def: 110,
            spa: 105,
            spd: 95,
            spe: 85
        },
        abilities: {
            0: "Mud Absorb"
        },
        heightm: 1.9,
        weightkg: 138.5,
        color: "Red",
        eggGroups: ["Undiscovered"],
    },

    maui: {
        num: 7500438,
        species: "Maui",
        types: ["Electric", "Poison"],
        genderRatio: {
            M: 0.0,
            F: 0.0
        },
        baseStats: {
            hp: 75,
            atk: 110,
            def: 81,
            spa: 110,
            spd: 80,
            spe: 120
        },
        abilities: {
            0: "Radioactive Surge"
        },
        heightm: 1.55,
        weightkg: 41.25,
        color: "Purple",
        eggGroups: ["Undiscovered"],
    },
    garzone: {
        num: 7500439,
        species: "Garzone",
        types: ["Dragon", "Electric"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 110,
            def: 105,
            spa: 115,
            spd: 90,
            spe: 85
        },
        abilities: {
            0: "Laser Beam"
        },
        heightm: 1.55,
        weightkg: 137.5,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },
	garzonemega: {
        num: 7500439,
        species: "Garzone-Mega",
        baseSpecies: "Garzone",
        gender: "N",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dragon", "Electric"], // 100	150	125	155	100	75
        baseStats: {
            hp: 100,
            atk: 150,
            def: 125,
            spa: 155,
            spd: 100,
            spe: 75
        },
        abilities: {
            0: "Sand Force"
        },
        heightm: 1.55,
        weightkg: 137.5,
        color: "Gray",
        eggGroups: ["Undiscovered"],
    },
    shitpost: {
        num: 7500440,
        species: "Shitpost",
        types: ["Dark", "Steel"],
        baseStats: {
            hp: 113,
            atk: 120,
            def: 81,
            spa: 98,
            spd: 80,
            spe: 70
        },
        abilities: {
            0: "Meme Stealer"
        },
        heightm: 5.3,
        weightkg: 529.8,
        color: "Green",
        eggGroups: ["Undiscovered"],
    },
// Cat Bed: 7500438
	lupuchandel: {
        num: 7500441,
        species: "Lupu Chandel",
        types: ["Fire", "Fairy"],
        baseStats: { // 85	65	120	120	112	82
            hp: 85,
            atk: 65,
            def: 120,
            spa: 120,
            spd: 112,
            spe: 82
        },
        abilities: {
            0: "Beautiful Obliteration Weapon"
        },
        color: "Purple",
        heightm: 1.15,
        weightkg: 27.75,
        eggGroups: ["Undiscovered"],
    },
	 roaramp: {
        num: 7500442,
        species: "Roaramp",
        types: ["Electric", "Dark"],
		  genderRatio: {M: 0.75, F: 0.25},
        baseStats: {
            hp: 102,
            atk: 105,
            def: 97,
            spa: 107,
            spd: 100,
            spe: 67
        },
         abilities: {
				0: "Scarily Adorable"
			},
        color: "Yellow",
        heightm: 1.6,
        weightkg: 72.25,
        eggGroups: ["Field"],
    },
   roarampmega: {
        num: 7500442,
        species: "Roaramp-Mega",
        baseSpecies: "Roaramp",
        forme: "Mega",
        formeLetter: "M",
        genderRatio: {M: 0.75, F: 0.25},
        types: ["Electric", "Dark"], 
        baseStats: {
            hp: 102,
            atk: 125,
            def: 117,
            spa: 157,
            spd: 120,
            spe: 57
        },
         abilities: {
				0: "Mold Breaker"
			},
        color: "Yellow",
        heightm: 1.6,
        weightkg: 72.25,
        eggGroups: ["Field"],
    }, 
arcalie: {
        num: 7500443,
        species: "Arcalie",
        types: ["Fire", "Dark"],
        genderRatio: {M: 0.625, F: 0.375},
        baseStats: {
            hp: 87,
            atk: 109,
            def: 75,
            spa: 104,
            spd: 75,
            spe: 110
        },
         abilities: {0: "Creepy"},
        color: "Purple",
        heightm: 1.5,
        weightkg: 96.25,
        eggGroups: ["Field"],
    },
stakeye: {
        num: 7500444,
        species: "Stakeye",
        types: ["Steel", "Ghost"],
        gender: "N",
        baseStats: {
            hp: 75,
            atk: 123,
            def: 143,
            spa: 59,
            spd: 83,
            spe: 31
        },
         abilities: {0: "Beast Eye"},
        heightm: 3.0,
        weightkg: 415.5,
        color: "Purple",
        eggGroups: ["Undiscovered"],
    },
    
stakeyemega: {
        num: 7500444,
        species: "Stakeye-Mega",
        baseSpecies: "Stakeye",
        forme: "Mega",
        formeLetter: "M",
        gender: "N",
        types: ["Steel", "Ghost"],
        baseStats: {
            hp: 75,
            atk: 133,
            def: 193,
            spa: 79,
            spd: 133,
            spe: 1
        },
         abilities: {0: "Magic Bounce"},
        heightm: 3.0,
        weightkg: 565.5,
        color: "Purple",
        eggGroups: ["Undiscovered"],
    },
lycanperiordusk: {
        num: 7500445,
        species: "Lycanperior-Dusk",
        types: ["Rock", "Grass"],
        genderRatio: {M: 0.75, F: 0.25},
        baseStats: {
            hp: 85,
            atk: 106,
            def: 90,
            spa: 75,
            spd: 90,
            spe: 121
        },
         abilities: {0: "Lethal Leafage"},
        color: "Green",
        heightm: 2.0,
        weightkg: 44.0,
        eggGroups: ["Field"],
    },
gigafini: {
        num: 7500446,
        species: "Giga Fini",
        types: ["Rock", "Water"],
        gender: "N",
        baseStats: {
            hp: 97,
            atk: 105,
            def: 142,
            spa: 77,
            spd: 105,
            spe: 55
        },
        color: "Purple",
         abilities: {0: "Sandmist Surge"},
        heightm: 1.5,
        weightkg: 140.6,
        eggGroups: ["Undiscovered"],
    },
stalossaka: {
        num: 7500447,
        species: "Stalossaka",
        types: ["Steel", "Ghost"],
        gender: "N",
        baseStats: {
            hp: 83,
            atk: 113,
            def: 160,
            spa: 76,
            spd: 108,
            spe: 24
        },
        heightm: 3.4,
        weightkg: 535,
        color: "Brown",
        abilities: {0: "Compact Boost"},
		eggGroups: ["Undiscovered"],
    },
stakamise: {
        num: 7500448,
        species: "Stakamise",
        types: ["Steel", "Grass"],
        baseStats: {
            hp: 85,
            atk: 136,
            def: 155,
            spa: 69,
            spd: 110,
            spe: 26
        },
        heightm: 4.7,
        weightkg: 515,
        color: "Green",
        abilities: {0: "Metal Monster"},
		eggGroups: ["Undiscovered"],
    },
	deoxysconfused: {
		num: 386,
		species: "Deoxys-Confused",
		baseSpecies: "Deoxys",
		forme: "Really Confused",
		formeLetter: "C",
		types: ["Psychic"],
		gender: "N",
		baseStats: {hp: 75, atk: 130, def: 105, spa: 130, spd: 105, spe: 125},
		abilities: {0: "Pressure"},
		heightm: 1.7,
		weightkg: 60.8,
		color: "Red",
		eggGroups: ["Undiscovered"],
	},
auroritar: {
        num: 7500450,
        species: "Auroritar",
        types: ["Rock"],
        genderRatio: {M: 0.75, F: 0.25},
        baseStats: {
            hp: 121,
            atk: 115,
            def: 101,
            spa: 107,
            spd: 106,
            spe: 69
        },
		  heightm: 2.35,
		  weightkg: 213.5,
        color: "Blue",
        abilities: {0: "Meteor Shower"},
		  eggGroups: ["Monster"],
    },
auroritarmega: {
        num: 7500450,
        species: "Auroritar-Mega",
        baseSpecies: "Auroritar",
        forme: "Mega",
        formeLetter: "M",
        types: ["Rock"],
        genderRatio: {M: 0.75, F: 0.25},
        baseStats: {
            hp: 121,
            atk: 145,
            def: 141,
            spa: 107,
            spd: 106,
            spe: 69
        },
        color: "Blue",
		  heightm: 2.85,
		  weightkg: 266.5,
        abilities: {0: "Sand Stream"},
		  eggGroups: ["Monster"],
    }, 
 necrynx: {
		num: 7500451,
		species: "Necrynx",
	   baseForme: "Cute Wig",
		types: ["Ice", "Psychic"],
		gender: "F",
		baseStats: {
			hp: 90,
			atk: 81,
			def: 72,
			spa: 155,
			spd: 111,
			spe: 98
		},
		abilities: {
			0: "Prism Skin"
		},
        color: "Blue",
		  heightm: 2.8,
		  weightkg: 195.3,
		  eggGroups: ["Undiscovered"],
	},
	necrynxultra: {
		num: 7500451,
		species: "Necrynx-Ultra",
		baseSpecies: "Necrynx",
		forme: "Ultra",
		formeLetter: "U",
		types: ["Ice", "Dragon"],
		gender: "F",
		baseStats: { // 90  165 81  165 81  150
			hp: 90,
			atk: 165,
			def: 81,
			spa: 165,
			spd: 81,
			spe: 150,
		},
		abilities: {
			0: "Neuroforce"
		},
        color: "Yellow",
		  heightm: 6.1,
		  weightkg: 75.3,
		  eggGroups: ["Undiscovered"],
	},
	
	necroqua: {
		num: 7500453,
		species: "Necroqua",
	   baseForme: "Dusk Bubble",
		types: ["Steel", "Water"],
		gender: "N",
		baseStats: {
			hp: 102,
			atk: 120,
			def: 109,
			spa: 81,
			spd: 125,
			spe: 69
		},
		abilities: {
			0: "Dark Matter"
		},
        color: "Green",
		  heightm: 2.6,
		  weightkg: 271,
		  eggGroups: ["Undiscovered"],
	},
	necroquaultra: {
		num: 7500453,
		species: "Necroqua-Ultra",
		baseSpecies: "Necroqua",
		forme: "Ultra",
		formeLetter: "U",
		types: ["Steel", "Dragon"],
		gender: "N",
		baseStats: {
			hp: 102,
			atk: 130,
			def: 95,
			spa: 130,
			spd: 95,
			spe: 121,
		},
		abilities: {
			0: "Neuroforce"
		},
        color: "Yellow",
		  heightm: 6.7,
		  weightkg: 41,
		  eggGroups: ["Undiscovered"],
	},
	poize: {
		num: 7500454,
		species: "Poize",
		types: ["Electric", "Poison"],
		gender: "N",
		baseStats: {
			hp: 83,
			atk: 111,
			def: 93,
			spa: 116,
			spd: 83,
			spe: 101
		},
		abilities: {
			0: "Terabeast"
		},
        color: "Purple",
		  heightm: 1.75,
		  weightkg: 173.4,
		  eggGroups: ["Undiscovered"],
	},
	magnettanorth: {
		num: 7500455,
		species: "Magnetta",
	   baseForme: "North",
		types: ["Steel", "Psychic"],
		gender: "N",
		baseStats: {
			hp: 85,
			atk: 75,
			def: 96,
			spa: 145,
			spd: 118,
			spe: 90,
		},
		abilities: {
			0: "Graceful Analyst"
		},
        color: "Gray",
		  heightm: 0.9,
		  weightkg: 93.25,
		  eggGroups: ["Undiscovered"],
	},
	magnettasouth: {
		num: 7500455,
		species: "Magnetta-South",
		baseSpecies: "Magnetta",
		forme: "South",
		formeLetter: "S",
		types: ["Steel", "Fighting"],
		gender: "N",
		baseStats: {
			hp: 85,
			atk: 145,
			def: 90,
			spa: 73,
			spd: 96,
			spe: 118,
		},
		abilities: {
			0: "Graceful Analyst"
		},
        color: "Gray",
		  heightm: 0.9,
		  weightkg: 93.25,
		  eggGroups: ["Undiscovered"],
	},
	kromork: {
		num: 7500456,
		species: "Kromork",
		types: ["Electric", "Ground"],
		baseStats: {
			hp: 80,
			atk: 115,
			def: 115,
			spa: 101,
			spd: 101,
			spe: 80,
		},
		abilities: {
			0: "Tera Armor"
		},
        color: "Brown",
		  heightm: 1.95,
		  weightkg: 195,
		  eggGroups: ["Undiscovered"],
	},
	
	
	necrozrainultra: {
		num: 7500458,
		species: "Necrozerain-Ultra",
		baseSpecies: "Necrozerain",
		forme: "Ultra",
		formeLetter: "U",
		types: ["Bug", "Dragon"],
		baseStats: { //83  158 74  158 74  150 697
			hp: 83,
			atk: 158,
			def: 74,
			spa: 158,
			spd: 74,
			spe: 150,
		},
		abilities: {
			0: "Neuroforce"
		},
        color: "Yellow",
		  heightm: 5.8,
		  weightkg: 56.8,
		  eggGroups: ["Undiscovered"],
	},
	quagsirom: {
		num: 7500459,
		species: "Quagsirom",
		types: ["Water", "Electric"],
		baseStats: { // 117 117 102 92  102 62  592
			hp: 117,
			atk: 117,
			def: 102,
			spa: 92,
			spd: 102,
			spe: 62,
		},
		abilities: {
			0: "Unamazed"
		},
        color: "Black",
		  heightm: 2.15,
		  weightkg: 210,
		  eggGroups: ["Undiscovered"],
	},
	
	kingrat: {
		num: 7500461,
		species: "King Rat",
		types: ["Normal"],
		baseStats: {
			hp: 113,
			atk: 131,
			def: 90,
			spa: 83,
			spd: 78,
			spe: 109,
		},
		abilities: {
			0: "Power Saver"
		},
        color: "Brown",
		  heightm: 1.35,
		  weightkg: 74.5,
		  eggGroups: ["Field"],
	},
	gamera: {
		num: 7500462,
		species: "Gamera",
		types: ["Water", "Dark"],
      genderRatio: {M: 0.75, F: 0.25},
		baseStats: {
			hp: 99,
			atk: 118,
			def: 115,
			spa: 100,
			spd: 112,
			spe: 79,
		},
		abilities: {
			0: "Underwater Screen"
		},
        color: "Blue",
		  heightm: 1.8,
		  weightkg: 143.75,
		  eggGroups: ["Monster"],
	},
	gameramegax: {
		num: 7500462,
		species: "Gamera-Mega-X",
		baseSpecies: "Gamera",
		forme: "Mega",
		formeLetter: "M",
		types: ["Water", "Dark"],
      genderRatio: {M: 0.75, F: 0.25},
		baseStats: {
			hp: 99,
			atk: 148,
			def: 155,
			spa: 100,
			spd: 132,
			spe: 89,
		},
		abilities: {
			0: "Sand Stream"
		},
        color: "Blue",
		  heightm: 2.3,
		  weightkg: 196.75,
		  eggGroups: ["Monster"],
	},
	gameramegay: {
		num: 7500462,
		species: "Gamera-Mega-Y",
		baseSpecies: "Gamera",
		forme: "Mega",
		formeLetter: "M",
		types: ["Water", "Dark"],
      genderRatio: {M: 0.75, F: 0.25},
		baseStats: {
			hp: 99,
			atk: 138,
			def: 135,
			spa: 150,
			spd: 122,
			spe: 79,
		},
		abilities: {
			0: "Mega Launcher"
		},
        color: "Blue",
		  heightm: 1.8,
		  weightkg: 159.35,
		  eggGroups: ["Monster"],
	},
	sandslashprime: {
		num: 28,
		species: "Sandslash-Prime",
		baseSpecies: "Sandslash",
		forme: "Prime",
		formeLetter: "P",
		types: ["Ground", "Ice"],
		baseStats: {
			hp: 85,
			atk: 110,
			def: 125,
			spa: 45,
			spd: 70,
			spe: 75,
		},
		abilities: {
			0: "Mountain Climber"
		},
        color: "Brown",
		  heightm: 1.1,
		  weightkg: 42.25,
		  eggGroups: ["Field"],
	},
	suiceon: {
		num: 7500464,
		species: "Suiceon",
		types: ["Water"],
		gender: "N",
		baseStats: {
			hp: 125,
			atk: 75,
			def: 94,
			spa: 100,
			spd: 112,
			spe: 86,
		},
		abilities: {
			0: "Monarch of the Rain"
		},
        color: "Blue",
		  heightm: 1.5,
		  weightkg: 108,
		  eggGroups: ["Undiscovered"],
	},
	raikeon: {
		num: 7500465,
		species: "Raikeon",
		types: ["Electric"],
		gender: "N",
		baseStats: {
			hp: 93,
			atk: 85,
			def: 75,
			spa: 112,
			spd: 100,
			spe: 125,
		},
		abilities: {
			0: "Duke of the Lightning"
		},
        color: "Yellow",
		  heightm: 1.35,
		  weightkg: 101.25,
		  eggGroups: ["Undiscovered"],
	},
	enteon: {
		num: 7500466,
		species: "Enteon",
		types: ["Fire"],
		gender: "N",
		baseStats: {
			hp: 93,
			atk: 125,
			def: 75,
			spa: 100,
			spd: 112,
			spe: 85,
		},
		abilities: {
			0: "Emperor of the Fire"
		},
        color: "Red",
		  heightm: 1.5,
		  weightkg: 111.5,
		  eggGroups: ["Undiscovered"],
	},
	gloom: {
		num: 44,
		species: "Gloom",
		types: ["Grass", "Poison"],
		baseStats: {hp: 60, atk: 65, def: 70, spa: 85, spd: 75, spe: 40},
		abilities: {0: "Chlorophyll", H: "Stench"},
		heightm: 0.8,
		weightkg: 8.6,
		color: "Blue",
		prevo: "oddish",
		evos: ["vileplume", "bellossom", "vilossom"],
		evoLevel: 21,
		eggGroups: ["Grass"],
	},
	vilossom: {
		num: 7500467,
		species: "Vilossom",
		types: ["Poison", "Grass"],
		baseStats: {
			hp: 90,
			atk: 95,
			def: 105,
			spa: 115,
			spd: 110,
			spe: 65,
		},
		abilities: {
			0: "Chlorophyll"
		},
        color: "Green",
		prevo: "gloom",
		evoLevel: 21,
		  heightm: 0.8,
		  weightkg: 12.2,
		  eggGroups: ["Grass"],
	},
	gholemisealola: {
		num: 7500468,
		species: "Gholemise-Alola",
		types: ["Electric", "Grass"],
		baseStats: {
			hp: 85,
			atk: 135,
			def: 125,
			spa: 70,
			spd: 87,
			spe: 42,
		},
		abilities: {
			0: "Overloaded Helm"
		},
        color: "Gray",
		  heightm: 2.8,
		  weightkg: 263,
		  eggGroups: ["Mineral"],
	},
	tallsteelegg: {
		num: 7500469,
		species: "Tall Steel Egg",
		types: ["Dragon", "Steel"],
		gender: "N",
		baseStats: {
			hp: 106,
			atk: 103,
			def: 104,
			spa: 116,
			spd: 108,
			spe: 53,
		},
		abilities: {
			0: "Farmer's Delight"
		},
        color: "Green",
		  heightm: 10.05,
		  weightkg: 707.75,
		  eggGroups: ["Undiscovered"],
	},
	zerpuff: {
		num: 7500470,
		species: "Zerpuff",
		types: ["Electric", "Fairy"],
		baseStats: {
			hp: 85,
			atk: 116,
			def: 80,
			spa: 93,
			spd: 77,
			spe: 127,
		},
		abilities: {
			0: "Lightening Lightning"
		},
        color: "Pink",
		  heightm: 1.15,
		  weightkg: 24.75,
		  eggGroups: ["Undiscovered"],
	},
	lycakingdusk: {
		num: 7500471,
		species: "Lycaking-Dusk",
		types: ["Rock", "Ground"],
		gender: "M",
		baseStats: {
			hp: 88,
			atk: 119,
			def: 81,
			spa: 80,
			spd: 80,
			spe: 107,
		},
		abilities: {
			0: "Unrivaled Claws"
		},
        color: "Purple",
		  heightm: 1.15,
		  weightkg: 24.75,
		  eggGroups: ["Field"],
	},
	tornadelnaga: {
		num: 7500472,
		species: "Tornadel-Naga",
		types: ["Flying", "Poison"],
		gender: "N",
		baseStats: {
			hp: 83,
			atk: 89,
			def: 79,
			spa: 127,
			spd: 83,
			spe: 127,
		},
		abilities: {
			0: "Ouroboros"
		},
        color: "Green",
		  heightm: 2.5,
		  weightkg: 106.5,
		  eggGroups: ["Undiscovered"],
	},
	necropurugly: {
		num: 7500473,
		species: "Necropur",
	   baseForme: "Ugly",
		types: ["Steel", "Normal"],
		baseStats: {
			hp: 84,
			atk: 139,
			def: 109,
			spa: 88,
			spd: 84,
			spe: 100,
		},
		abilities: {
			0: "Braveheart"
		},
        color: "Yellow",
		  heightm: 2.6,
		  weightkg: 196.9,
		  eggGroups: ["Undiscovered"],
	},
	necropurbeautiful: {
		num: 7500473,
		species: "Necropur-Beautiful",
		baseSpecies: "Necropur",
		forme: "Beautiful",
		formeLetter: "B",
		types: ["Steel", "Dragon"],
		baseStats: {
			hp: 84,
			atk: 149,
			def: 79,
			spa: 149,
			spd: 79,
			spe: 152,
		},
		abilities: {
			0: "Neuroforce"
		},
        color: "Yellow",
		  heightm: 5.9,
		  weightkg: 26.9,
		  eggGroups: ["Undiscovered"],
	},
	flyorusguard: {
		num: 7500474,
		species: "Flyorus Guard",
		types: ["Ground", "Dragon"],
		gender: "M",
		baseStats: {
			hp: 84,
			atk: 122,
			def: 105,
			spa: 92,
			spd: 80,
			spe: 115,
		},
		abilities: {
			0: "Guard's Shield"
		},
        color: "Brown",
		  heightm: 1.65,
		  weightkg: 75,
		  eggGroups: ["Undiscovered"],
	},
	lampara: {
		num: 7500475,
		species: "Lampara",
		baseForme: "De-Noche",
		types: ["Water", "Psychic"],
		baseStats: {
			hp: 113,
			atk: 89,
			def: 103,
			spa: 119,
			spd: 113,
			spe: 73,
		},
		abilities: {
			0: "Dark Light"
		},
        color: "Blue",
		  heightm: 2.7,
		  weightkg: 186.25,
		  eggGroups: ["Undiscovered"],
	},
	lamparadelava: {
		num: 7500475,
		species: "Lampara-De-Lava",
		baseSpecies: "Lampara",
		forme: "De-Lava",
		formeLetter: "L",
		types: ["Water", "Dragon"],
		baseStats: {
			hp: 113,
			atk: 129,
			def: 83,
			spa: 129,
			spd: 83,
			spe: 125
		},
		abilities: {
			0: "Neuroforce"
		},
        color: "Yellow",
		  heightm: 6,
		  weightkg: 66.25,
		  eggGroups: ["Undiscovered"],
	},
	balloon: {
		num: 7500476,
		species: "Balloon",
		types: ["Ghost", "Fire"],
		gender: "N",
		baseStats: {
			hp: 101,
			atk: 103,
			def: 68,
			spa: 120,
			spd: 66,
			spe: 113,
		},
		abilities: {
			0: "Inflate"
		},
        color: "Purple",
		  heightm: 1.5,
		  weightkg: 14,
		  eggGroups: ["Undiscovered"],
	},
	tyrannosaurus: {
		num: 7500477,
		species: "Tyrannosaurus",
		types: ["Grass", "Rock"],
      genderRatio: {M: 0.75, F: 0.25},
		baseStats: {
			hp: 100,
			atk: 118,
			def: 106,
			spa: 107,
			spd: 110,
			spe: 80,
		},
		abilities: {
			0: "Ancient Foliage"
		},
        color: "Green",
		  heightm: 2,
		  weightkg: 151,
		  eggGroups: ["Monster"],
	},
	tyrannosaurusmegax: {
		num: 7500477,
		species: "Tyrannosaurus-Mega-X",
		baseSpecies: "Tyrannosaurus",
		forme: "Mega",
		formeLetter: "M",
		types: ["Grass", "Rock"],
      genderRatio: {M: 0.75, F: 0.25},
		baseStats: {
			hp: 100,
			atk: 138,
			def: 146,
			spa: 127,
			spd: 130,
			spe: 80
		},
		abilities: {
			0: "Thick Fat"
		},
        color: "Green",
		  heightm: 2.4,
		  weightkg: 206.5,
		  eggGroups: ["Monster"],
	},
	tyrannosaurusmegay: {
		num: 7500477,
		species: "Tyrannosaurus-Mega-Y",
		baseSpecies: "Tyrannosaurus",
		forme: "Mega",
		formeLetter: "M",
		types: ["Grass", "Rock"],
      genderRatio: {M: 0.75, F: 0.25},
		baseStats: {
			hp: 100,
			atk: 148,
			def: 146,
			spa: 107,
			spd: 130,
			spe: 90,
		},
		abilities: {
			0: "Sand Stream"
		},
        color: "Green",
		  heightm: 2.5,
		  weightkg: 204,
		  eggGroups: ["Monster"],
	},
	espord: {
		num: 7500478,
		species: "Espord",
		types: ["Psychic", "Water"],
      genderRatio: {M: 0.75, F: 0.25},
		baseStats: {
			hp: 127,
			atk: 87,
			def: 62,
			spa: 120,
			spd: 80,
			spe: 95,
		},
		abilities: {
			0: "Synchro Veil"
		},
        color: "Blue",
		  heightm: 7.7,
		  weightkg: 212.25,
		  prevo: "wailee",
		  evoLevel: 40,
		  eggGroups: ["Field"],
	},
	glacord: {
		num: 7500479,
		species: "Glacord",
		types: ["Ice", "Water"],
      genderRatio: {M: 0.75, F: 0.25},
		baseStats: {
			hp: 127,
			atk: 85,
			def: 87,
			spa: 120,
			spd: 80,
			spe: 72,
		},
		abilities: {
			0: "Hail Veil"
		},
        color: "Blue",
		  heightm: 7.65,
		  weightkg: 209.25,
		  prevo: "wailee",
		  evoLevel: 40,
		  eggGroups: ["Field"],
	},
	hypango: {
		num: 7500480,
		species: "Hypango",
		types: ["Psychic", "Fighting"],
		baseStats: {
			hp: 100,
			atk: 108,
			def: 84,
			spa: 81,
			spd: 103,
			spe: 72,
		},
		abilities: {
			0: "Sensei"
		},
        color: "Yellow",
		  heightm: 1.85,
		  weightkg: 105.8,
		  eggGroups: ["Human-Like"],
	},
	scizion: {
		num: 7500481,
		species: "Scizion",
		types: ["Bug", "Poison"],
		baseStats: {
			hp: 80,
			atk: 120,
			def: 115,
			spa: 67,
			spd: 87,
			spe: 90
		},
		abilities: {
			0: "Prodigy"
		},
        color: "Red",
		  heightm: 1.55,
		  weightkg: 89.75,
		  eggGroups: ["Bug"],
	},
	scizionmega: {
		num: 7500481,
		species: "Scizion-Mega",
		baseSpecies: "Scizion",
		forme: "Mega",
		formeLetter: "M",
		types: ["Bug", "Poison"],
		baseStats: {
			hp: 80,
			atk: 140,
			def: 155,
			spa: 77,
			spd: 107,
			spe: 100,
		},
		abilities: {
			0: "Technician"
		},
        color: "Red",
		  heightm: 1.75,
		  weightkg: 96.75,
		  eggGroups: ["Bug"],
	},
	fluorine: {
		num: 7500482,
		species: "Fluorine",
		types: ["Fairy", "Normal"],
		gender: "F",
		baseStats: {
			hp: 100,
			atk: 72,
			def: 87,
			spa: 96,
			spd: 130,
			spe: 72,
		},
		abilities: {
			0: "Titanium Toothpaste"
		},
        color: "Pink",
		  heightm: 1.1,
		  weightkg: 20.5,
		  eggGroups: ["Fairy"],
	},
	fluorinemega: {
		num: 7500482,
		species: "Fluorine-Mega",
		baseSpecies: "Fluorine",
		forme: "Mega",
		formeLetter: "M",
		types: ["Fairy"],
		gender: "F",
		baseStats: {
			hp: 100,
			atk: 72,
			def: 127,
			spa: 116,
			spd: 170,
			spe: 72,
		},
		abilities: {
			0: "Healer"
		},
        color: "White",
		  heightm: 1.5,
		  weightkg: 21.5,
		  eggGroups: ["Fairy"],
	},
	wallray: {
		num: 7500483,
		species: "Wallray",
		types: ["Ice", "Electric"],
		baseStats: {
			hp: 105,
			atk: 110,
			def: 94,
			spa: 105,
			spd: 94,
			spe: 77,
		},
		abilities: {
			0: "Too Thick"
		},
        color: "Blue",
		  heightm: 1.4,
		  weightkg: 96.3,
		  eggGroups: ["Field"],
	},
	persianprime: {
		num: 53,
		species: "Persian-Prime",
		baseSpecies: "Persian",
		forme: "Prime",
		formeLetter: "P",
		types: ["Normal", "Dark"],
		baseStats: {
			hp: 75,
			atk: 75,
			def: 70,
			spa: 80,
			spd: 75,
			spe: 125,
		},
		abilities: {
			0: "Tech Fur"
		},
        color: "Gray",
		  heightm: 1.05,
		  weightkg: 33.5,
		  eggGroups: ["Field"],
	},
	octapex: {
		num: 7500485,
		species: "Octapex",
		types: ["Water", "Poison"],
		baseStats: {
			hp: 72,
			atk: 94,
			def: 123,
			spa: 89,
			spd: 118,
			spe: 50,
		},
		abilities: {
			0: "Veteran"
		},
        color: "Blue",
		  heightm: 0.8,
		  weightkg: 21.5,
		  eggGroups: ["Water 1"],
	},
	gooo: {
		num: 7500486,
		species: "Goo-o",
		types: ["Dragon"],
		baseStats: {
			hp: 92,
			atk: 115,
			def: 107,
			spa: 115,
			spd: 137,
			spe: 92
		},
		abilities: {
			0: "Sound Soul"
		},
        color: "Gray",
		  heightm: 1.8,
		  weightkg: 114.35,
		  eggGroups: ["Dragon"],
	},
	noivian: {
		num: 7500487,
		species: "Noivian",
		types: ["Flying", "Dragon"],
		baseStats: {
			hp: 90,
			atk: 80,
			def: 95,
			spa: 90,
			spd: 102,
			spe: 120,
		},
		abilities: {
			0: "Phase Through"
		},
        color: "Blue",
		  heightm: 1.3,
		  weightkg: 52.8,
		  eggGroups: ["Flying"],
	},
	noivianmega: {
		num: 7500487,
		species: "Noivian-Mega",
		baseSpecies: "Noivian",
		forme: "Mega",
		formeLetter: "M",
		types: ["Flying", "Fairy"],
		baseStats: {
			hp: 90,
			atk: 120,
			def: 115,
			spa: 130,
			spd: 102,
			spe: 120,
		},
		abilities: {
			0: "Pixilate"
		},
        color: "Blue",
		  heightm: 1.7,
		  weightkg: 52.8,
		  eggGroups: ["Flying"],
	},
	cruski: {
		num: 7500488,
		species: "Cruski",
		types: ["Steel", "Bug"],
		baseStats: {
			hp: 73,
			atk: 102,
			def: 118,
			spa: 82,
			spd: 91,
			spe: 70,
		},
		abilities: {
			0: "Locked Shell"
		},
        color: "Gray",
		  heightm: 0.8,
		  weightkg: 101.5,
		  eggGroups: ["Mineral"],
	},
	periurora: {
		num: 7500489,
		species: "Periurora",
		types: ["Ice", "Rock"],
      genderRatio: {M: 0.75, F: 0.25},
		baseStats: {
			hp: 129,
			atk: 118,
			def: 111,
			spa: 87,
			spd: 83,
			spe: 59,
		},
		abilities: {
			0: "Christmas Parade"
		},
        color: "Brown",
		  heightm: 2.55,
		  weightkg: 253.9,
		  eggGroups: ["Monster"],
	},
	
	shedigigas: {
		num: 7500491,
		species: "Shedigigas",
		types: ["Bug", "Normal"],
		gender: "N",
		baseStats: {
			hp: 75,
			atk: 140,
			def: 77,
			spa: 55,
			spd: 75,
			spe: 70,
		},
		abilities: {
			0: "Temporary Guard"
		},
        color: "Brown",
		  heightm: 2.25,
		  weightkg: 210.6,
		  eggGroups: ["Undiscovered"],
	},
	chazma: {
		num: 7500492,
		species: "Chazma",
	   baseForme: "Egg",
		types: ["Normal", "Ghost"],
		gender: "N",
		baseStats: {
			hp: 193,
			atk: 59,
			def: 57,
			spa: 96,
			spd: 136,
			spe: 63,
		},
		abilities: {
			0: "Healthy Meal"
		},
        color: "Pink",
		  heightm: 2.65,
		  weightkg: 192.3,
		  eggGroups: ["Undiscovered"],
	},
	chazmahatched: {
		num: 7500492,
		species: "Chazma-Hatched",
		baseSpecies: "Chazma",
		forme: "Hatched",
		formeLetter: "H",
		types: ["Normal", "Dragon"],
		gender: "N",
		baseStats: {
			hp: 193,
			atk: 106,
			def: 106,
			spa: 106,
			spd: 106,
			spe: 115,
		},
		abilities: {
			0: "Neuroforce"
		},
        color: "Pink",
		  heightm: 5.95,
		  weightkg: 72.3,
		  eggGroups: ["Undiscovered"],
	},
	smolitizer: {
		num: 7500493,
		species: "Smolitizer",
		types: ["Ice", "Steel"],
		gender: "N",
		baseStats: {
			hp: 118,
			atk: 148,
			def: 103,
			spa: 86,
			spd: 84,
			spe: 63,
		},
		abilities: {
			0: "Christmas Spirit"
		},
        color: "Brown",
		  heightm: 2.45,
		  weightkg: 257.9,
		  eggGroups: ["Undiscovered"],
	},
	smolitizerultra: {
		num: 7500493,
		species: "Smolitizer-Ultra",
		baseSpecies: "Smolitizer",
		forme: "Ultra",
		formeLetter: "U",
		types: ["Ice", "Dragon"],
		gender: "N",
		baseStats: {
			hp: 118,
			atk: 158,
			def: 73,
			spa: 158,
			spd: 73,
			spe: 115,
		},
		abilities: {
			0: "Neuroforce"
		},
        color: "Yellow",
		  heightm: 6.15,
		  weightkg: 27.9,
		  eggGroups: ["Undiscovered"],
	},
	noirtic: {
		num: 7500494,
		species: "Noirtic",
		types: ["Ghost", "Flying"],
		gender: "N",
		baseStats: {
			hp: 93,
			atk: 95,
			def: 125,
			spa: 85,
			spd: 145,
			spe: 76,
		},
		abilities: {
			0: "Pressure"
		},
        color: "Black",
		  heightm: 1.95,
		  weightkg: 27.9,
		  eggGroups: ["Undiscovered"],
	},
	casserole: {
		num: 7500495,
		species: "Casserole",
		types: ["Flying", "Normal"],
		baseStats: {
			hp: 87,
			atk: 122,
			def: 72,
			spa: 103,
			spd: 67,
			spe: 127,
		},
		abilities: {
			0: "Scrumptious"
		},
        color: "Yellow",
		  heightm: 1.05,
		  weightkg: 25.9,
		  eggGroups: ["Flying"],
	},
	blazel: {
		num: 7500496,
		species: "Blazel",
		types: ["Fire", "Water"],
      genderRatio: {M: 0.75, F: 0.25},
		baseStats: {
			hp: 92,
			atk: 122,
			def: 72,
			spa: 107,
			spd: 70,
			spe: 107,
		},
		abilities: {
			0: "Heat Seeker"
		},
        color: "Brown",
		  heightm: 1.5,
		  weightkg: 42.75,
		  eggGroups: ["Field"],
	},
	blazelmega: {
		num: 7500496,
		species: "Blazel-Mega",
		baseSpecies: "Blazel",
		forme: "Mega",
		formeLetter: "M",
		types: ["Fire", "Water"],
      genderRatio: {M: 0.75, F: 0.25},
		baseStats: {
			hp: 92,
			atk: 162,
			def: 82,
			spa: 127,
			spd: 80,
			spe: 127,
		},
		abilities: {
			0: "Speed Boost"
		},
        color: "Brown",
		  heightm: 1.5,
		  weightkg: 42.75,
		  eggGroups: ["Field"],
	},
	
	claytar: {
		num: 7500498,
		species: "Claytar",
		types: ["Ground", "Dark"],
		gender: "N",
		baseStats: {
			hp: 100,
			atk: 102,
			def: 127,
			spa: 82,
			spd: 110,
			spe: 68,
		},
		abilities: {
			0: "Floating Grounds"
		},
        color: "Black",
		  heightm: 1.75,
		  weightkg: 154.95,
		  eggGroups: ["Undiscovered"],
	},
	claytarmega: {
		num: 7500498,
		species: "Claytar-Mega",
		baseSpecies: "Claytar",
		forme: "Mega",
		formeLetter: "M",
		types: ["Ground", "Dark"],
		gender: "N",
		baseStats: {
			hp: 100,
			atk: 132,
			def: 167,
			spa: 82,
			spd: 130,
			spe: 78,
		},
		abilities: {
			0: "Sand Stream"
		},
        color: "Black",
		  heightm: 2.25,
		  weightkg: 207.95,
		  eggGroups: ["Undiscovered"],
	},
	komally: {
		num: 7500499,
		species: "Komally",
		types: ["Normal"],
		gender: "N",
		baseStats: {
			hp: 85,
			atk: 105,
			def: 95,
			spa: 105,
			spd: 95,
			spe: 80,
		},
		abilities: {
			0: "Sleeping System"
		},
        color: "Gray",
		  heightm: 1.35,
		  weightkg: 60.2,
		  eggGroups: ["Undiscovered"],
	},
	joltalesalola: {
		num: 7500500,
		species: "Joltales-Alola",
		types: ["Electric", "Ice"],
		baseStats: {
			hp: 79,
			atk: 76,
			def: 77,
			spa: 105,
			spd: 107,
			spe: 129,
		},
		abilities: {
			0: "Snow Sucker"
		},
        color: "Blue",
		  heightm: 0.95,
		  weightkg: 22.2,
		  eggGroups: ["Field"],
	},
	pluffatisse: {
		num: 7500501,
		species: "Pluffatisse",
		types: ["Fairy"],
		baseStats: {
			hp: 101,
			atk: 86,
			def: 89,
			spa: 102,
			spd: 92,
			spe: 60,
		},
		abilities: {
			0: "Ambulance"
		},
        color: "Pink",
		  heightm: 0.8,
		  weightkg: 10.25,
		  eggGroups: ["Fairy"],
	},
	lars: {
		num: 7500502,
		species: "Lars",
		types: ["Normal", "Ghost"],
		baseStats: {
			hp: 92,
			atk: 112,
			def: 92,
			spa: 65,
			spd: 100,
			spe: 122,
		},
		abilities: {
			0: "Bingo Bongo"
		},
        color: "Gray",
		  heightm: 0.95,
		  weightkg: 48.85,
		  eggGroups: ["Undiscovered"],
	},
	theye: {
		num: 7500503,
		species: "Theye",
		types: ["Fighting", "Ghost"],
		gender: "M",
		baseStats: {
			hp: 95,
			atk: 97,
			def: 90,
			spa: 57,
			spd: 85,
			spe: 57,
		},
		abilities: {
			0: "Panic Mode"
		},
        color: "Purple",
		  heightm: 0.9,
		  weightkg: 33.25,
		  eggGroups: ["Human-Like"],
	},
	theyemega: {
		num: 7500503,
		species: "Theye-Mega",
		baseSpecies: "Theye",
		forme: "Mega",
		formeLetter: "M",
		types: ["Fighting", "Ghost"],
		gender: "M",
		baseStats: {
			hp: 95,
			atk: 107,
			def: 140,
			spa: 77,
			spd: 135,
			spe: 27,
		},
		abilities: {
			0: "Magic Bounce"
		},
        color: "Purple",
		  heightm: 0.9,
		  weightkg: 183.25,
		  eggGroups: ["Human-Like"],
	},
	chillax: { num: 7500504, species: "Chillax",
		types: ["Normal", "Dragon"],
		baseStats: {hp: 103, atk: 126, def: 102, spa: 80, spd: 92, spe: 83},
		abilities: {0: "Mellow Vibe"},
		heightm: 1.75,
		weightkg: 245.5,
		color: "Yellow",
		eggGroups: ["Monster"],
	},
	masterpiece: {
	        num: 7500505,
	        species: "Masterpiece",
	        types: ["Fire", "Grass"],
			  genderRatio: {M: 0.75, F: 0.25},
	        baseStats: {
	            hp: 82,
	            atk: 97,
	            def: 92,
	            spa: 100,
	            spd: 95,
	            spe: 86
	        },
	        abilities: {
	            0: "Magnum Opus"
	        },
	        heightm: 2.6,
	        weightkg: 283,
	        color: "Green",
	        eggGroups: ["Field"],
	    },
	    masterpiecemega: {
	        num: 7500505,
	        species: "Masterpiece-Mega",
	        baseSpecies: "Masterpiece",
	        forme: "Mega",
	        formeLetter: "M",
	        types: ["Fire", "Grass"],
			  genderRatio: {M: 0.75, F: 0.25},
	        baseStats: {
	            hp: 82,
	            atk: 117,
	            def: 122,
	            spa: 140,
	            spd: 125,
	            spe: 66
	        },
	        abilities: {
	            0: "Sheer Force"
	        },
			heightm: 3.2,
		    	weightkg: 383.5,
		    	color: "Green",
		    	eggGroups: ["Field"],
		},
		celemence: {
        num: 7500506,
        species: "Celemence",
        types: ["Steel", "Flying"],
        gender: "N",
        baseStats: {
            hp: 97,
            atk: 118,
            def: 120,
            spa: 108,
            spd: 120,
            spe: 80
        },
        abilities: {
            0: "Beast Roar"
        },
        heightm: 9.2,
        weightkg: 999.9,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
    celemencemega: {
        num: 7500506,
        species: "Celemence-Mega",
        baseSpecies: "Celemence",
        forme: "Mega",
        formeLetter: "M",
        types: ["Steel", "Flying"],
        gender: "N",
        baseStats: {
            hp: 97,
            atk: 128,
            def: 170,
            spa: 118,
            spd: 130,
            spe: 100
        },
        abilities: {
            0: "Aerilate"
        },
        heightm: 9.5,
        weightkg: 1009.9,
        color: "Blue",
        eggGroups: ["Undiscovered"],
    },
		saldreigonce: {
        num: 7500507,
        species: "Saldreigonce",
        types: ["Dark", "Flying"],
        baseStats: {
            hp: 103,
            atk: 130,
            def: 95,
            spa: 127,
            spd: 95,
            spe: 109
        },
        abilities: {
            0: "Levitimidate"
        },
        heightm: 1.65,
        weightkg: 131.3,
        color: "Blue",
        eggGroups: ["Dragon"],
    },
    saldreigoncemega: {
        num: 7500507,
        species: "Saldreigonce-Mega",
        baseSpecies: "Saldreigonce",
        forme: "Mega",
        formeLetter: "M",
        types: ["Dark", "Flying"],
        baseStats: {
            hp: 103,
            atk: 140,
            def: 145,
            spa: 137,
            spd: 105,
            spe: 119
        },
        abilities: {
            0: "Aerilate"
        },
        heightm: 1.95,
        weightkg: 141.3,
        color: "Blue",
        eggGroups: ["Dragon"],
    },
		salasaur: {
        num: 7500508,
        species: "Salasaur",
        types: ["Poison"],
	     gender: "F",
        baseStats: {
            hp: 84,
            atk: 83,
            def: 81,
            spa: 115,
            spd: 90,
            spe: 108
        },
        abilities: {
            0: "Poison Pores"
        },
        color: "Green",
        heightm: 1.6,
        weightkg: 61.1,
        eggGroups: ["Monster"],
    },
    salasaurmega: {
            num: 7500508,
            species: "Salasaur-Mega",
            baseSpecies: "Salasaur",
            forme: "Mega",
            formeLetter: "M",
            types: ["Poison"],
            gender: "F",
            baseStats: {
                hp: 84,
                atk: 83,
                def: 81,
                spa: 115,
                spd: 90,
                spe: 108
            },
            abilities: {
                0: "Poison Pores"
            },
	        color: "Green",
            heightm: 2.0,
            weightkg: 116.6,
            eggGroups: ["Monster"],
        },
        emulia: {
            num: 7500509,
            species: "Emulia",
            types: ["Electric", "Flying"],
            baseStats: {
                hp: 100,
                atk: 82,
                def: 115,
                spa: 82,
                spd: 107,
                spe: 106
            },
            abilities: {
                0: "Shock Trap"
            },
            heightm: 5.2,
            weightkg: 110.5,
            color: "White",
            eggGroups: ["Undiscovered"],
        },
        klinkarel: {
            num: 7500510,
            species: "Klinkarel",
            types: ["Steel", "Water"],
            baseStats: {
                hp: 69,
                atk: 102,
                def: 87,
                spa: 72,
                spd: 72,
                spe: 100
            },
            abilities: {
                0: "Positivity"
            },
            heightm: 0.8,
            weightkg: 56.25,
            color: "Brown",
            eggGroups: ["Undiscovered"],
        },
        gumshoe: {
            num: 7500511,
            species: "Gumshoe",
            types: ["Dark", "Normal"],
            baseStats: { //89	125	72	60	82	95
                hp: 89,
                atk: 125,
                def: 72,
                spa: 60,
                spd: 82,
                spe: 95
            },
            abilities: {
                0: "Jealous Aggressor"
            },
            heightm: 0.9,
            weightkg: 24.1,
            color: "Brown",
            eggGroups: ["Field"],
        },
        barbominable: {
            num: 7500512,
            species: "Barbominable",
            types: ["Fighting", "Water"],
            baseStats: {
                hp: 94,
                atk: 128,
                def: 106,
                spa: 68,
                spd: 86,
                spe: 65
            },
            abilities: {
                0: "Fisticuffs"
            },
            heightm: 1.7,
            weightkg: 138,
            color: "Brown",
            eggGroups: ["Water 3"],
        },
        asterisk: {
            num: 7500513,
            species: "Asterisk",
            types: ["Poison", "Flying"],
				genderRatio: {M: 0.75, F: 0.25},
            baseStats: {
                hp: 82,
                atk: 70,
                def: 90,
                spa: 132,
                spd: 120,
                spe: 95
            },
            abilities: {
                0: "Starburst"
            },
        		color: "White",
            heightm: 1.2,
            weightkg: 26.25,
            eggGroups: ["Fairy"],
        },
        togetrio: {
            num: 7500514,
            species: "Togetrio",
            types: ["Ground", "Electric"],
            baseStats: {
                hp: 60,
                atk: 109,
                def: 66,
                spa: 55,
                spd: 81,
                spe: 118
            },
            abilities: {
                0: "Quick Trap"
            },
        		color: "Gray",
            heightm: 0.5,
            weightkg: 18.3,
            eggGroups: ["Field"],
        },
        centenarian: {
            num: 7500515,
            species: "Centenarian",
            types: ["Electric", "Fighting"],
			   genderRatio: {M: 0.75, F: 0.25},
            baseStats: {
                hp: 83,
                atk: 99,
                def: 75,
                spa: 114,
                spd: 75,
                spe: 116
            },
            abilities: {
                0: "Aeon Flux"
            },
	        color: "Brown",
            heightm: 1.35,
            weightkg: 47.6,
            eggGroups: ["Field"],
        },
        centenarianmega: {
            num: 7500515,
            species: "Centenarian-Mega",
            baseSpecies: "Centenarian",
            forme: "Mega",
            formeLetter: "M",
            types: ["Electric", "Fighting"],
			   genderRatio: {M: 0.75, F: 0.25},
            baseStats: {
                hp: 83,
                atk: 99,
                def: 95,
                spa: 144,
                spd: 95,
                spe: 146
            },
            abilities: {
                0: "Intimidate"
            },
	        color: "Brown",
            heightm: 1.65,
            weightkg: 51.4,
            eggGroups: ["Field"],
        },
        kyutana: {
            num: 7500516,
            species: "Kyutana",
            types: ["Ghost", "Grass"],
            baseStats: {
                hp: 70,
                atk: 145,
                def: 105,
                spa: 55,
                spd: 80,
                spe: 105
            },
            abilities: {
                0: "Beast Costume"
            },
	        color: "White",
            heightm: 0.25,
            weightkg: 0.4,
            eggGroups: ["Undiscovered"],
        },
	kyutanabusted: {
        num: 7500516,
        species: "Kyutana-Busted",
        baseSpecies: "Kyutana",
        forme: "Busted",
        formeLetter: "B",
        types: ["Ghost", "Grass"],
         baseStats: {
                hp: 70,
                atk: 145,
                def: 105,
                spa: 55,
                spd: 80,
                spe: 105
            },
        		abilities: {
            	0: "Beast Costume"
       		},
	        color: "White",
    			heightm: 0.25,
            weightkg: 0.4,
            eggGroups: ["Undiscovered"],
        },
	kyutanabustedtest: {
        num: 7500516,
        species: "Kyutana-Busted-Test",
        baseSpecies: "Kyutana",
        forme: "Busted-Test",
        formeLetter: "B",
        types: ["Ghost", "Grass"],
         baseStats: {
                hp: 70,
                atk: 145,
                def: 105,
                spa: 55,
                spd: 80,
                spe: 105
            },
        abilities: {
            0: "Beast Costumed"
        },
    			heightm: 0.25,
            weightkg: 0.4,
            eggGroups: ["Undiscovered"],
        },
        amdremarye: {
            num: 7500517,
            species: "Amdre-Marye",
            types: ["Electric", "Psychic"],
            gender: "N",
            baseStats: {
                hp: 70,
                atk: 127,
                def: 52,
                spa: 167,
                spd: 55,
                spe: 122
            },
            abilities: {
                0: "Short Circuit"
            },
            heightm: 1.55,
            weightkg: 61.15,
			   color: "Red",
            eggGroups: ["Undiscovered"],
        },
        amdremaryemega: {
            num: 7500517,
            species: "Amdre-Marye-Mega",
            baseSpecies: "Amdre-Marye",
            forme: "Mega",
            formeLetter: "M",
            types: ["Electric", "Dragon"],
            gender: "N",
            baseStats: {
                hp: 70,
                atk: 147,
                def: 72,
                spa: 217,
                spd: 75,
                spe: 112
            },
            abilities: {
                0: "Mold Breaker"
            },
            heightm: 1.55,
            weightkg: 61.15,
			   color: "Red",
            eggGroups: ["Undiscovered"],
        },
	dondon: {
	    num: 7500518,
	    species: "Dondon",
	    types: ["Ground"],
	    baseStats: {
	        hp: 104,
	        atk: 121,
	        def: 124,
	        spa: 69,
	        spd: 71,
	        spe: 53
	    },
	    abilities: {
	        0: "Solid Sand"
	    },
	    heightm: 1.5,
	    weightkg: 210,
	    color: "Gray",
	    eggGroups: ["Field"],
	},
	xerdian: {
	    num: 7500519,
	    species: "Xerdian",
	    types: ["Fairy", "Bug"],
	    baseStats: {
	        hp: 90,
	        atk: 103,
	        def: 85,
	        spa: 100,
	        spd: 104,
	        spe: 92
	    },
	    abilities: {
	        0: "Fae Fist"
	    },
	    heightm: 2.2,
	    weightkg: 125.3,
	    color: "Blue",
	    eggGroups: ["Undiscovered"],
	},
	genin: {
	    num: 7500520,
	    species: "Genin",
	    types: ["Steel", "Flying"],
	    baseStats: {
	        hp: 66,
	        atk: 105,
	        def: 70,
	        spa: 105,
	        spd: 72,
	        spe: 149
	    },
	    abilities: {
	        0: "Malware"
	    },
	    heightm: 1.15,
	    weightkg: 47.25,
	    color: "Purple",
	    eggGroups: ["Undiscovered"],
	},
	aryvel: {
	    num: 7500521,
	    species: "Aryvel",
	    types: ["Poison", "Dark"],
	    baseStats: {
	        hp: 98,
	        atk: 110,
	        def: 102,
	        spa: 105,
	        spd: 94,
	        spe: 69
	    },
	    abilities: {
	        0: "Nightmare Fuel"
	    },
        color: "Red",
	    heightm: 3.45,
	    weightkg: 118.25,
	    eggGroups: ["Undiscovered"],
	},swolax: {
        num: 7500522,
        species: "Swolax",
        types: ["Normal", "Fighting"],
        genderRatio: {M: 0.875, F: 0.125},
        baseStats: {
            hp: 139,
            atk: 131,
            def: 109,
            spa: 59,
            spd: 101,
            spe: 54
        },
        abilities: {
            0: "Blood-made Crops"
        },
        heightm: 2.25,
        weightkg: 396.8,
        color: "Black",
        eggGroups: ["Undiscovered"],
    },
    mendoza: {
        num: 7500523,
        species: "Mendoza",
        types: ["Dark", "Ghost"],
        gender: "F",
        baseStats: {
            hp: 104,
            atk: 96,
            def: 100,
            spa: 87,
            spd: 107,
            spe: 85
        },
        abilities: {
            0: "Mirage"
        },
        heightm: 1.4,
        weightkg: 38.05,
        color: "Brown",
        eggGroups: ["Flying"],
    },
    goohoo: {
        num: 7500524,
        species: "Goohoo",
        types: ["Dragon", "Ghost"],
        baseStats: {
            hp: 85,
            atk: 125,
            def: 85,
            spa: 130,
            spd: 140,
            spe: 75
        },
        abilities: {
            0: "Sippity Hoo"
        },
        heightm: 1.3,
        weightkg: 79.8,
        color: "Purple",
        eggGroups: ["Undiscovered"],
    },
	kyervine: {
	    num: 7500525,
	    species: "Kyervine",
	    types: ["Grass", "Water"],
        genderRatio: {M: 0.875, F: 0.125},
	    baseStats: {
	        hp: 98,
	        atk: 110,
	        def: 102,
	        spa: 105,
	        spd: 94,
	        spe: 69
	    },
	    abilities: {
	        0: "Atmospheric Perversion"
	    },
        color: "Blue",
	    heightm: 2.65,
	    weightkg: 184,
	    eggGroups: ["Undiscovered"],
	},
        kyervineprimal: {
            num: 7500525,
            species: "Kyervine-Primal",
            baseSpecies: "Kyervine",
            forme: "Primal",
            formeLetter: "P",
            types: ["Grass", "Water"],
        genderRatio: {M: 0.875, F: 0.125},
	    baseStats: {
	        hp: 98,
	        atk: 110,
	        def: 102,
	        spa: 105,
	        spd: 94,
	        spe: 69
	    },
	    abilities: {
	        0: "Primordial Sea"
	    },
        color: "Blue",
	    heightm: 7.95,
	    weightkg: 262,
	    eggGroups: ["Undiscovered"],
       },
	pototonz: {
	    num: 7500526,
	    species: "Pototon-Z",
	    types: ["Normal", "Flying"],
            gender: "N",
	    baseStats: {
	        hp: 80,
	        atk: 72,
	        def: 57,
	        spa: 133,
	        spd: 58,
	        spe: 110
	    },
	    abilities: {
	        0: "Adaptive Eye"
	    },
        color: "Red",
	    heightm: 2.65,
	    weightkg: 184,
	    eggGroups: ["Undiscovered"],
	},
	
	metabell: {
	        num: 7500528,
	        species: "Metabell",
	        types: ["Grass", "Steel"],
	        gender: "N",
	        baseStats: {
	            hp: 80,
	            atk: 127,
	            def: 100,
	            spa: 97,
	            spd: 90,
	            spe: 90
	        },
	        abilities: {
	            0: "Indigestion"
	        },
        	  color: "Blue",
	        heightm: 1.65,
	        weightkg: 282.75,
	        eggGroups: ["Undiscovered"],
	    },
	    metabellmega: {
	        num: 7500528,
	        species: "Metabell-Mega",
	        baseSpecies: "Metabell",
	        forme: "Mega",
	        formeLetter: "M",
	        types: ["Grass", "Steel"],
	        gender: "N",
	        baseStats: {
	            hp: 80,
	            atk: 137,
	            def: 120,
	            spa: 107,
	            spd: 110,
	            spe: 130
	        },
	        abilities: {
	            0: "Tough Claws"
	        },
	        color: "Blue",
	        heightm: 1.65,
	        weightkg: 675.65,
	        eggGroups: ["Undiscovered"],
	    },
	taiwan: {
	    num: 7500529,
	    species: "Taiwan",
	    types: ["Grass", "Ice"],
       gender: "N",
	    baseStats: {
	        hp: 64,
	        atk: 170,
	        def: 98,
	        spa: 52,
	        spd: 58,
	        spe: 137
	    },
	    abilities: {
	        0: "Beast Bootleg"
	    },
	    heightm: 0.7,
	    weightkg: 17.05,
		 color: "White",
	    eggGroups: ["Undiscovered"],
	},
	
	    
	    ractusdel: {
	        num: 7500532,
	        species: "Ractusdel",
	        types: ["Grass", "Dragon"],
	        baseStats: {
	            hp: 74,
	            atk: 79,
	            def: 70,
	            spa: 136,
	            spd: 70,
	            spe: 110
	        },
	        abilities: {
	            0: "Aqua Booster"
	        },
	        color: "Purple",
	        heightm: 2.3,
	        weightkg: 89,
	        eggGroups: ["Undiscovered"],
	    },
	    cornite: {
	        num: 7500533,
	        species: "Cornite",
	        types: ["Rock", "Flying"],
	        baseStats: {
	            hp: 88,
	            atk: 104,
	            def: 105,
	            spa: 92,
	            spd: 107,
	            spe: 67
	        },
	        abilities: {
	            0: "Graceful Exit"
	        },
	        heightm: 0.6,
	        weightkg: 5.0,
	        color: "Brown",
	        eggGroups: ["Water 1"],
	    },
	    passadust: {
	        num: 7500534,
	        species: "Passadust",
	        types: ["Fighting", "Flying"],
	        gender: "M",
	        baseStats: {
	            hp: 89,
	            atk: 130,
	            def: 85,
	            spa: 75,
	            spd: 75,
	            spe: 120
	        },
	        abilities: {
	            0: "Chain Heal"
	        },
	        heightm: 1.7,
	        weightkg: 72.9,
	        color: "White",
	        eggGroups: ["Undiscovered"],
	    },
	    bangma: {
	        num: 7500535,
	        species: "Bangma",
	        types: ["Ghost", "Rock"],
	        baseStats: {
	            hp: 72,
	            atk: 92,
	            def: 102,
	            spa: 96,
	            spd: 81,
	            spe: 57
	        },
	        abilities: {
	            0: "Cold Body"
	        },
	        heightm: 0.8,
	        weightkg: 55.0,
	        color: "Black",
	        eggGroups: ["Amorphous"],
	    },
	    bangmamega: {
	        num: 7500535,
	        species: "Bangma-Mega",
	        baseSpecies: "Bangma",
	        forme: "Mega",
	        formeLetter: "M",
	        types: ["Ghost", "Rock"],
	        baseStats: {
	            hp: 72,
	            atk: 142,
	            def: 112,
	            spa: 106,
	            spd: 101,
	            spe: 67
	        },
	        abilities: {
	            0: "Prankster"
	        },
	        heightm: 0.9,
	        weightkg: 55.5,
	        color: "Black",
	        eggGroups: ["Amorphous"],
	    },
	    weeeeds: {
	        num: 7500536,
	        species: "Weeeeds",
	        types: ["Steel", "Psychic"],
	        gender: "N",
	        baseStats: {
	            hp: 92,
	            atk: 75,
	            def: 105,
	            spa: 65,
	            spd: 100,
	            spe: 55
	        },
	        abilities: {
	            0: "Dangerous Addiction"
	        },
	        heightm: 0.5,
	        weightkg: 11.4,
	        color: "Grey",
	        eggGroups: ["Undiscovered"],
	    },
	    
	    rotillwashaz: {
	        num: 7500538,
	        species: "Rotill-Washaz",
	        types: ["Electric", "Water"],
	        gender: "N",
	        baseStats: {
	            hp: 95,
	            atk: 57,
	            def: 98,
	            spa: 92,
	            spd: 98,
	            spe: 68
	        },
	        abilities: {
	            0: "Root Rum"
	        },
	        heightm: 0.55,
	        weightkg: 14.4,
	        color: "Blue",
	        eggGroups: ["Undiscovered"],
	    },
	    mienzy: {
	        num: 7500539,
	        species: "Mienzy",
	        types: ["Fighting", "Dragon"],
	        baseStats: {
	            hp: 59,
	            atk: 132,
	            def: 65,
	            spa: 78,
	            spd: 72,
	            spe: 130
	        },
	        abilities: {
	            0: "Aura of Pain"
	        },
	        heightm: 1.4,
	        weightkg: 35.5,
	        color: "Black",
	        eggGroups: ["Undiscovered"],
	    },
	    whiscor: {
	        num: 7500540,
	        species: "Whiscor",
	        types: ["Bug", "Ground"],
	        baseStats: {
	            hp: 67,
	            atk: 85,
	            def: 122,
	            spa: 52,
	            spd: 87,
	            spe: 81
	        },
	        abilities: {
	            0: "Healing Hell"
	        },
	        heightm: 1.6,
	        weightkg: 50.5,
	        color: "Grey",
	        eggGroups: ["Bug"],
	    },
	    yvenne: {
	        num: 7500541,
	        species: "Yvenne",
	        types: ["Electric", "Flying"],
	        baseStats: {
	            hp: 96,
	            atk: 94,
	            def: 76,
	            spa: 126,
	            spd: 82,
	            spe: 120
	        },
	        abilities: {
	            0: "Pouch Aura"
	        },
	        heightm: 3.0,
	        weightkg: 102.6,
	        color: "Red",
	        eggGroups: ["Undiscovered"],
	    },
		unozam: {
	        num: 7500542,
	        species: "Unozam",
	        types: ["Psychic"],
	        gender: "N",
	        baseStats: {
	            hp: 51,
	            atk: 61,
	            def: 46,
	            spa: 123,
	            spd: 71,
	            spe: 104
	        },
	        abilities: {
	            0: "Hidden Advantage"
	        },
	        heightm: 1,
	        weightkg: 26.5,
	        color: "Black",
	        eggGroups: ["Undiscovered"],
	    },
	    unozammega: {
	        num: 7500542,
	        species: "Unozam-Mega",
	        baseSpecies: "Unozam",
	        forme: "Mega",
	        formeLetter: "M",
	        types: ["Psychic"],
	        gender: "N",
	        baseStats: {
	            hp: 51,
	            atk: 61,
	            def: 66,
	            spa: 163,
	            spd: 81,
	            spe: 134
	        },
	        abilities: {
	            0: "Trace"
	        },
	        heightm: 0.7,
	        weightkg: 26.5,
	        color: "Black",
	        eggGroups: ["Undiscovered"],
	    },
		kyubeatblack: {
	        num: 7500543,
	        species: "Kyubeat-Black",
	        types: ["Ice", "Bug"],
	        gender: "N",
	        baseStats: {
	            hp: 95,
	            atk: 135,
	            def: 100,
	            spa: 83,
	            spd: 100,
	            spe: 90
	        },
	        abilities: {
	            0: "Volt Field"
	        },
	        heightm: 2,
	        weightkg: 171.35,
	        color: "Gray",
	        eggGroups: ["Undiscovered"],
	    },
		kahoot: {
	        num: 7500544,
	        species: "Kahoot",
	        types: ["Dark", "Electric"],
	        gender: "N",
	        baseStats: {
	            hp: 90,
	            atk: 95,
	            def: 94,
	            spa: 110,
	            spd: 84,
	            spe: 78
	        },
	        abilities: {
	            0: "Test Cram"
	        },
	        heightm: 0.6,
	        weightkg: 13.8,
	        color: "Black",
	        eggGroups: ["Undiscovered"],
	    },
		laprasnow: {
	        num: 7500545,
	        species: "Laprasnow",
	        types: ["Grass", "Water"],
	        baseStats: {
	            hp: 120,
	            atk: 98,
	            def: 87,
	            spa: 98,
	            spd: 100,
	            spe: 70
	        },
	        abilities: {
	            0: "Snow Absorb"
	        },
	        heightm: 2.35,
	        weightkg: 177.75,
	        color: "Blue",
	        eggGroups: ["Monster"],
	    },
	    laprasnowmega: {
	        num: 7500545,
	        species: "Laprasnow-Mega",
	        baseSpecies: "Laprasnow",
	        forme: "Mega",
	        formeLetter: "M",
	        types: ["Grass", "Water"],
	        baseStats: {
	            hp: 120,
	            atk: 138,
	            def: 117,
	            spa: 138,
	            spd: 120,
	            spe: 40
	        },
	        abilities: {
	            0: "Snow Warning"
	        },
	        heightm: 2.85,
	        weightkg: 227.25,
	        color: "Blue",
	        eggGroups: ["Monster"],
	    },
		
		fletchitina: {
	        num: 7500547,
	        species: "Fletchitina",
	        types: ["Fire", "Ghost"],
	        baseStats: {
	            hp: 106,
	            atk: 96,
	            def: 86,
	            spa: 108,
	            spd: 87,
	            spe: 87
	        },
	        abilities: {
	            0: "Gale Levitation"
	        },
	        heightm: 3.8,
	        weightkg: 333,
	        color: "Red",
	        eggGroups: ["Undiscovered"],
	    },
		bibokrook: {
	        num: 7500548,
	        species: "Bibokrook",
	        types: ["Dark", "Water"],
	        baseStats: {
	            hp: 97,
	            atk: 111,
	            def: 80,
	            spa: 70,
	            spd: 75,
	            spe: 91
	        },
	        abilities: {
	            0: "Confidence Boost"
	        },
	        heightm: 1.25,
	        weightkg: 63.9,
	        color: "Red",
	        eggGroups: ["Field"],
	    },
	lycanitan: {
	        num: 7500549,
	        species: "Lycanitan",
	        baseForme: "Nightmare",
	        types: ["Fire", "Rock"],
	        baseStats: {
	            hp: 100,
	            atk: 138,
	            def: 70,
	            spa: 52,
	            spd: 70,
	            spe: 112
	        },
	        abilities: {
	            0: "Paw Prayer"
	        },
	        color: "Red",
	        heightm: 1.05,
	        weightkg: 58.95,
	        eggGroups: ["Field"],
	        otherFormes: ["lycanitandaydream"],
	    },
	lycanitandaydream: {
	        num: 7500549,
	        species: "Lycanitan-Daydream",
	        baseSpecies: "Lycanitan",
	        forme: "Daydream",
	        formeLetter: "D",
	        types: ["Fire", "Psychic"],
	        baseStats: {
	            hp: 100,
	            atk: 52,
	            def: 120,
	            spa: 138,
	            spd: 120,
	            spe: 82
	        },
	        abilities: {
	            0: "Paw Prayer"
	        },
	        color: "Brown",
	        heightm: 1.05,
	        weightkg: 58.95,
	        eggGroups: ["Field"],
	    },
	
		tomb2: {
	        num: 7500551,
	        species: "Tomb2",
	        types: ["Ghost", "Normal"],
	        baseStats: {
	            hp: 87,
	            atk: 86,
	            def: 109,
	            spa: 98,
	            spd: 111,
	            spe: 47
	        },
	        abilities: {
	            0: "Firewall"
	        },
	        heightm: 0.8,
	        weightkg: 70.25,
	        color: "Purple",
	        eggGroups: ["Undiscovered"],
	    },
	pikachuash: {
	        num: 25,
	        species: "Pikachu-Ash",
	        baseSpecies: "Pikachu",
	        forme: "Ash",
	        formeLetter: "A",
	        types: ["Electric"],
			  gender: "M",
	        baseStats: {
	            hp: 35,
	            atk: 75,
	            def: 40,
	            spa: 50,
	            spd: 50,
	            spe: 110
	        },
	        abilities: {
	            0: "Friction Charge"
	        },
	        heightm: 0.4,
	        weightkg: 6,
	        color: "Yellow",
	        eggGroups: ["Undiscovered"],
			  otherForms: ["pikachuashhoenn", "pikachuashsinnoh", "pikachuashunova", "pikachuashkalos", "pikachuashalola"],
	    },
		talestoutaloland: {
	        num: 7500553,
	        species: "Talestout-Aloland",
	        types: ["Fairy", "Normal"],
	        baseStats: {
	            hp: 89,
	            atk: 98,
	            def: 92,
	            spa: 73,
	            spd: 105,
	            spe: 104
	        },
	        abilities: {
	            0: "Blizzard Blur"
	        },
	        color: "Blue",
	        heightm: 1.15,
	        weightkg: 40.45,
	        eggGroups: ["Field"],
	    },
	grousle: {
	    num: 7500554,
	    species: "Grousle",
	    types: ["Ground", "Electric"],
       gender: "N",
	    baseStats: {
	        hp: 90,
	        atk: 100,
	        def: 90,
	        spa: 110,
	        spd: 94,
	        spe: 92
	    },
	    abilities: {
	        0: "Solar Panel"
	    },
        color: "Red",
	    heightm: 1.95,
	    weightkg: 477.1,
	    eggGroups: ["Undiscovered"],
	    otherFormes: ["grousleprimal"],
	},
        grousleprimal: {
            num: 7500554,
            species: "Grousle-Primal",
            baseSpecies: "Grousle",
            forme: "Primal",
            formeLetter: "P",
	    		types: ["Ground", "Fire"],
      		gender: "N",
	   		baseStats: {
			        hp: 90,
	        		  atk: 130,
			        def: 110,
	  		     	  spa: 160,
	        		  spd: 94,
	       		  spe: 92
	   		 },
	    		abilities: {
	        		0: "Desolate Land"
	    		},
	        color: "Red",
	    		heightm: 3.45,
	    		weightkg: 526.8,
	    		eggGroups: ["Undiscovered"],
       },
		region: {
	        num: 7500555,
	        species: "Region",
	        types: ["Ice"],
	        baseStats: {
	            hp: 92,
	            atk: 55,
	            def: 125,
	            spa: 115,
	            spd: 147,
	            spe: 57
	        },
	        abilities: {
	            0: "Tour To Russia"
	        },
	        color: "Blue",
	        heightm: 1.3,
	        weightkg: 100.45,
	        eggGroups: ["Undiscovered"],
	    },
		wagonite: {
		        num: 7500556,
		        species: "Wagonite",
		        types: ["Water", "Flying"], //110	117	102	107	105	82
		        baseStats: {
		            hp: 110,
		            atk: 117,
		            def: 102,
		            spa: 107,
		            spd: 105,
		            spe: 82
		        },
		        abilities: {
		            0: "Ice Scale"
		        },
	        color: "Blue",
		        heightm: 1.8,
		        weightkg: 180.3,
		        eggGroups: ["Water 1"],
		    },
		    drewni: {
		        num: 7500557,
		        species: "Drewni",
		        types: ["Dragon", "Psychic"],
		        gender: "N",
		        baseStats: {
		            hp: 105,
		            atk: 120,
		            def: 99,
		            spa: 115,
		            spd: 100,
		            spe: 100
		        },
		        abilities: {
		            0: "Synch Scale"
		        },
		        heightm: 1.3,
		        weightkg: 107,
		        color: "Brown",
		        eggGroups: ["Undiscovered"],
		    },
		    topper: {
		        num: 7500558,
		        species: "Topper",
		        types: ["Fairy", "Flying"],
			     genderRatio: {M: 0.75, F: 0.25},
		        baseStats: {
		            hp: 82,
		            atk: 60,
		            def: 107,
		            spa: 117,
		            spd: 102,
		            spe: 82
		        },
		        abilities: {
		            0: "Afterstorm"
		        },
	        		color: "White",
		        heightm: 1.35,
		        weightkg: 33,
		        eggGroups: ["Flying"],
		    },
		    qwilala: {
		        num: 7500559,
		        species: "Qwilala",
		        types: ["Poison", "Ghost"],
		        baseStats: {
		            hp: 101,
		            atk: 104,
		            def: 102,
		            spa: 101,
		            spd: 101,
		            spe: 91
		        },
		        abilities: {
		            0: "Poison Shield"
		        },
		        heightm: 2.25,
		        weightkg: 61.95,
				  color: "Purple",
		        eggGroups: ["Undiscovered"],
		    },
		    
		    quendorus: {
		        num: 7500561,
		        species: "Quendorus",
		        types: ["Bug", "Flying"],
				  gender: "N",
		        baseStats: {
		            hp: 99,
		            atk: 107,
		            def: 96,
		            spa: 107,
		            spd: 96,
		            spe: 70
		        },
		        abilities: {
		            0: "Scary Sandwich"
		        },
		        heightm: 1.35,
		        weightkg: 53.25,
				  color: "Yellow",
		        eggGroups: ["Undiscovered"],
		    },
		        farfect: {
		            num: 7500562, 
					  	species: "Farfect",
		            types: ["Normal", "Bug"],
		            gender: "N",
		            baseStats: {
		                hp: 61,
		                atk: 125,
		                def: 80,
		                spa: 90,
		                spd: 80,
		                spe: 91
		            },
		            abilities: {
		                0: "Rebel"
		            },
		            heightm: 1.5,
		            weightkg: 82.5,
		            color: "Purple",
		            eggGroups: ["Undiscovered"],
		        },
					
					poliwhirl: {
						num: 61,
						species: "Poliwhirl",
						types: ["Water"],
						baseStats: {hp: 65, atk: 65, def: 65, spa: 50, spd: 50, spe: 90},
						abilities: {0: "Water Absorb", 1: "Damp", H: "Swift Swim"},
						heightm: 1,
						weightkg: 20,
						color: "Blue",
						prevo: "poliwag",
						evos: ["poliwrath", "politoed", "polipolihotter"],
						evoLevel: 25,
						eggGroups: ["Water 1"],
					},
					polipolihotter: {
						num: 7500564,
						species: "Polipoli-Hotter",
						types: ["Water", "Fighting"],
						baseStats: {hp: 100, atk: 95, def: 95, spa: 90, spd: 105, spe: 90},
						abilities: {0: "Full Steam Ahead"},
						heightm: 1.2,
						weightkg: 43.95,
						color: "Green",
						prevo: "poliwhirl",
						evoLevel: 25,
						eggGroups: ["Water 1"],
					},
		   	 zebstoar: {
		   	     num: 7500565,
		   	     species: "Zebstoar",
		   	     types: ["Electric", "Fire"],
			   	  genderRatio: {M: 0.75, F: 0.25},
		   	     baseStats: {
		   	         hp: 102,
		   	         atk: 121,
		   	         def: 74,
		   	         spa: 100,
		   	         spd: 74,
		   	         spe: 100
		   	     },
		   	     abilities: {
		   	         0: "Juggernaut"
		   	     },
			        color: "Black",
		   	     heightm: 1.6,
		   	     weightkg: 114.75,
		   	     eggGroups: ["Field"],
		   	 },
		   	 frostapex: {
		   	     num: 7500566,
		   	     species: "Frostapex",
		   	     types: ["Ice", "Poison"],
        			  gender: "N",
		   	     baseStats: { //70	64	129	99	124	60
		   	         hp: 70,
		   	         atk: 64,
		   	         def: 129,
		   	         spa: 99,
		   	         spd: 124,
		   	         spe: 60
		   	     },
		   	     abilities: {
		   	         0: "Air Raider"
		   	     },
			        color: "Red",
		   	     heightm: 0.5,
		   	     weightkg: 7.4,
		   	     eggGroups: ["Undiscovered"],
		   	 },
		   	 passcraft: {
		   	     num: 7500567,
		   	     species: "Passcraft",
		   	     types: ["Fighting"],
		   	     baseStats: { //92	115	112	52	97	79
		   	         hp: 92,
		   	         atk: 115,
		   	         def: 112,
		   	         spa: 52,
		   	         spd: 97,
		   	         spe: 79
		   	     },
		   	     abilities: {
		   	         0: "Interception"
		   	     },
			        color: "White",
		   	     heightm: 1.55,
		   	     weightkg: 56.4,
		   	     eggGroups: ["Field"],
		   	 },
		   	 shoo: {
		   	     num: 7500568,
		   	     species: "Shoo",
		   	     types: ["Fairy", "Ghost"],
        			  gender: "N",
		   	     baseStats: {
		   	         hp: 107,
		   	         atk: 87,
		   	         def: 82,
		   	         spa: 130,
		   	         spd: 130,
		   	         spe: 65
					  },
		   	     abilities: {
		   	         0: "Itemize"
		   	     },
   				  heightm: 0.8,
   				  weightkg: 16.3,
				     color: "Purple",
		   	     eggGroups: ["Undiscovered"],
		   	 },
		   	 amunra: {
		   	     num: 7500569,
		   	     species: "Amun-Ra",
		   	     types: ["Electric", "Ghost"],
        			  gender: "N",
		   	     baseStats: {
		   	         hp: 80,
		   	         atk: 60,
		   	         def: 130,
		   	         spa: 130,
		   	         spd: 103,
		   	         spe: 45
					  },
		   	     abilities: {
		   	         0: "The Hidden One"
		   	     },
     				  color: "Yellow",
   				  heightm: 1.45,
   				  weightkg: 128.25,
		   	     eggGroups: ["Mineral"],
		   	 },
	cubone: {
		num: 104,
		species: "Cubone",
		types: ["Ground"],
		baseStats: {hp: 50, atk: 50, def: 95, spa: 40, spd: 50, spe: 35},
		abilities: {0: "Rock Head", 1: "Lightning Rod", H: "Battle Armor"},
		heightm: 0.4,
		weightkg: 6.5,
		color: "Brown",
		evos: ["marowak", "marowakalola", "marowakprime"],
		eggGroups: ["Monster"],
	},
				 marowakprime: {
					num: 105,
					species: "Marowak-Prime",
					baseSpecies: "Marowak",
					forme: "Prime",
					formeLetter: "P",
					types: ["Ground", "Fire"],
					baseStats: {
						hp: 75,
						atk: 95,
						def: 125,
						spa: 65,
						spd: 95,
						spe: 60,
					},
					abilities: {
						0: "Rock Head"
					},
					heightm: 1.0,
					weightkg: 39.5,
					prevo: "cubone",
					evoLevel: 28,
					color: "Brown",
					eggGroups: ["Monster"],
				},
		   	 arceon: {
		   	     num: 7500571,
		   	     species: "Arceon",
		   	     types: ["Fire", "Psychic"],
        			  genderRatio: {
          				M: 0.8125,
        				   F: 0.1875
        			  },
		   	     baseStats: {
		   	         hp: 80,
		   	         atk: 60,
		   	         def: 130,
		   	         spa: 130,
		   	         spd: 103,
		   	         spe: 45
					  },
		   	     abilities: {
		   	         0: "Magic Mirror"
		   	     },
     				  heightm: 1.3,
        			  weightkg: 40,
        			  color: "Pink",
					  prevo: "growlee",
					  evoLevel: 1,
		   	     eggGroups: ["Field"],
		   	 },
				 pigment: {
		   	 	num: 7500572,
	       	 	species: "Pigment",
	       	 	types: ["Psychic", "Electric"],
	       	 	baseStats: {
	       	     hp: 85,
	       	     atk: 70,
	       	     def: 72,
	       	     spa: 107,
	       	     spd: 95,
	       	 	  spe: 102
	        	 	},
	        	 	abilities: {
	        	 	    0: "Food Coloring"
	        	 	},
		         color: "Purple",
	          	heightm: 1.2,
	        	 	weightkg: 55.85,
	       	 	eggGroups: ["Field"],
	    		 },
	    		 pigmentmega: {
					num: 7500572,
					species: "Pigment-Mega",
	        		baseSpecies: "Pigment",
	        		forme: "Mega",
	        		formeLetter: "M",
	        		types: ["Psychic", "Electric"],
	       	 	baseStats: {
	       	   	  hp: 85,
	       	   	  atk: 70,
	       	   	  def: 92,
	       	   	  spa: 137,
	       	   	  spd: 115,
	       	 		  spe: 132
	        	 	},
	        		abilities: {
	        		    0: "Intimidate"
	        		},
		         color: "Purple",
	          	heightm: 1.5,
	        	 	weightkg: 59.65,
	       	 	eggGroups: ["Field"],
	    		},
				 bascure: {
		   	 	num: 7500573,
	       	 	species: "Bascure",
	       	 	types: ["Water", "Dragon"],
	       	 	baseStats: {
	       	     hp: 102,
	       	     atk: 111,
	       	     def: 85,
	       	     spa: 144,
	       	     spd: 85,
	       	 	  spe: 121
	        	 	},
	        	 	abilities: {
	        	 	    0: "Turboblaze"
	        	 	},
		         color: "Green",
	          	heightm: 2,
	        	 	weightkg: 171.5,
	       	 	eggGroups: ["Undiscovered"],
	    		 },
				 cleforusfable: {
		   	 	num: 7500574,
	       	 	species: "Cleforus-Fable",
	       	 	types: ["Fairy", "Ground"],
        			gender: "M",
	       	 	baseStats: {
	       	     hp: 102,
	       	     atk: 97,
	       	     def: 91,
	       	     spa: 125,
	       	     spd: 85,
	       	 	  spe: 80
	        	 	},
	        	 	abilities: {
	        	 	    0: "Zero Awareness"
	        	 	},
		         color: "Brown",
	          	heightm: 1.4,
	        	 	weightkg: 54,
	       	 	eggGroups: ["Undiscovered"],
	    		 },
				 frozerade: {
     				 num: 7500575,
    				 species: "Frozerade",
    				 types: ["Ghost", "Poison"],
        			 gender: "F",
    				 baseStats: {hp: 75, atk: 85, def: 77, spa: 102, spd: 97, spe: 110},
    				 abilities: {0: "Natural Curse"},
    				 heightm: 1.4,
    				 weightkg: 27.6,
    				 color: "White",
    				 eggGroups: ["Fairy"],
				 },
				 ornament: {
					   num: 7500576,
						species: "Ornament",
						types: ["Fighting", "Flying"],
        			   gender: "M",
						baseStats: {hp: 80, atk: 130, def: 80, spa: 114, spd: 80, spe: 130},
						abilities: {0: "Regenerator"},
						heightm: 1.4,
						weightkg: 49.25,
						color: "Green",
						eggGroups: ["Undiscovered"],
					},
					cryomagius: {
				    num: 7500577,
				    species: "Cryomagius",
   				 types: ["Ice", "Ghost"],
   				 gender: "N",
   				 baseStats: {hp: 75, atk: 60, def: 60, spa: 125, spd: 125, spe: 130},
   				 abilities: {0: "Levitate"},
   				 heightm: 1.0,
   				 weightkg: 76.2,
   				 color: "Purple",
   				 eggGroups: ["Undiscovered"],
				   },
					chantran: {
					     num: 7500578,
					     species: "Chantran",
					     types: ["Ghost", "Steel"],
					     baseStats: {hp: 100, atk: 77, def: 103, spa: 142, spd: 103, spe: 98},
					     abilities: {0: "Flash Fire"},
					     heightm: 1.4,
					     weightkg: 232.2,
					     color: "Purple",
					     eggGroups: ["Undiscovered"],
					},
					necrotune: { 
						num: 7500579,
						species: "Necrotune",
						types: ["Bug","Steel"],
						genderRatio: "{M: 50, F: 50}",
						baseStats: {hp: 92, atk: 131, def: 94, spa: 94, spd: 90, spe: 71},
						abilities: {0: "Technological Armor"},
						heightm: 1,
						weightkg: 242.75,
						color: "Yellow",
						eggGroups: ["Undiscovered"],
					},
	    		 	necrotuneultra: {
						num: 7500579,
						species: "Necrotune-Ultra",
	        			baseSpecies: "Necrotune",
	        			forme: "Ultra",
	        			formeLetter: "U",
						types: ["Bug","Dragon"],
						baseStats: {hp: 92, atk: 141, def: 64, spa: 141, spd: 64, spe: 123},
	        			abilities: {
	        			    0: "Neuroforce"
	        			},
		        	   color: "Yellow",
						heightm: 4.7,
						weightkg: 12.75,
	       		 	eggGroups: ["Undiscovered"],
	    			},
					dramaqueen: {
				     num: 7500580,
				     species: "Dramaqueen",
				     types: ["Normal", "Poison"],
   				  gender: "F",
				     baseStats: {hp: 102, atk: 76, def: 86, spa: 125, spd: 88, spe: 56},
				     abilities: {0: "Dramatic Rage"},
				     heightm: 3.0,
				     weightkg: 189.0,
				     color: "Blue",
				     eggGroups: ["Monster"],
					},
					landoroarroyal: { 
				     num: 7500581,
				     species: "Landoroar-Royal",
				     types: ["Ground", "Dark"],
   				  gender: "M",
				     baseStats: {hp: 97, atk: 150, def: 95, spa: 97, spd: 95, spe: 100},
				     abilities: {0: "Intimidate"},
				     heightm: 1.6,
				     weightkg: 75.5,
				     color: "Red",
				     eggGroups: ["Undiscovered"],
					},
					wiseau: {
						num: 7500582,
						species: "Wiseau",
						types: ["Water", "Ground"],
						baseStats: {hp: 112, atk: 117, def: 92, spa: 77, spd: 72, spe: 67},
						abilities: {0: "Tommy's Room"},
						heightm: 1.95,
						weightkg: 183,
						color: "Blue",
						eggGroups: ["Field"],
					},
					nut: {
   						num: 7500583,
  						   species: "Nut",
 						   types: ["Water", "Steel"],
   				  		gender: "N",
						   baseStats: {hp: 66, atk: 131, def: 81, spa: 89, spd: 72, spe: 91},
 						   abilities: {0: "Hardened Body"},
 						   heightm: 2.2,
						   weightkg: 236,
						   color: "White",
						   eggGroups: ["Undiscovered"],
					},
					ultraburstnut: {
   						num: 7500583,
							species: "Ultra Burst Nut",
							baseSpecies: "Nut",
							forme: "Ultra Burst",
							formeLetter: "U",
							types: ["Water", "Dragon"],
   				  		gender: "N",
							baseStats: {hp: 66, atk: 141, def: 51, spa: 141, spd: 51, spe: 143},
							abilities: {0: "Neuroforce"},
							heightm: 4.1,
							weightkg: 6,
							color: "White",
							eggGroups: ["Undiscovered"],
					},
					aegipass: {
					    num: 7500584,
					    species: "Aegipass",
 					    baseForme: "Magnetic",
					    types: ["Steel", "Rock"],
 					    baseStats: {hp: 70, atk: 62, def: 157, spa: 72, spd: 160, spe: 60},
					    abilities: {0: "Desert Mirage"},
					    heightm: 1.5,
					    weightkg: 196.5,
					    color: "Brown",
					    eggGroups: ["Mineral"],
					    otherFormes: ["aegipassdirectional"],
					},
					aegipassdirectional: {
					    num: 7500584,
					    species: "Aegipass-Directional",
					    baseSpecies: "Aegipass",
 					    forme: "Directional",
					    formeLetter: "D",
					    types: ["Steel", "Rock"],
					    baseStats: {hp: 70, atk: 157, def: 62, spa: 160, spd: 72, spe: 60},
					    abilities: {0: "Desert Mirage"},
					    heightm: 1.5,
					    weightkg: 196.5,
					    color: "Brown",
					    eggGroups: ["Mineral"],
					},
					wall: {
					  num: 7500585,
				     species: "Wall",
				     types: ["Normal", "Steel"],
   				  gender: "N",
				     baseStats: {hp: 80, atk: 140, def: 135, spa: 54, spd: 94, spe: 29},
				     abilities: {0: "No Immigrants Allowed"},
				     heightm: 3.1,
				     weightkg: 417.1,
				     color: "Gray",
				     eggGroups: ["Undiscovered"],
				},
				honoka: {
					  num: 7500586,
				     species: "Honoka",
				     types: ["Fire", "Steel"],
   				  gender: "N",
				     baseStats: {hp: 110, atk: 135, def: 105, spa: 67, spd: 109, spe: 77},
				     abilities: {0: "Melody of the Heart"},
				     heightm: 2.5,
				     weightkg: 114.25,
				     color: "Red",
				     eggGroups: ["Undiscovered"],
				},
				unfeasable: {
				  num: 7500587,
   			  species: "Unfeasable",
   			  types: ["Normal", "Flying"],
   			  baseStats: {hp: 82, atk: 112, def: 82, spa: 73, spd: 68, spe: 106},
   			  abilities: {0: "360 No-Scope"},
   			  heightm: 1.4,
   			  weightkg: 39.4,
   			  color: "Brown",
   			  eggGroups: ["Flying"],
				},
				aegivally: {
			    num: 7500588,
			    species: "Aegivally",
			    baseForme: "Bulwark",
			    types: ["Normal", "Steel"],
   			 gender: "N",
			    baseStats: {hp: 91, atk: 72, def: 135, spa: 72, spd: 135, spe: 77},
			    abilities: {0: "Tactical Computer"},
			    heightm: 2,
			    weightkg: 76.75,
			    color: "Brown",
				 prevo: "typeblade",
			    eggGroups: ["Undiscovered"],
			    otherFormes: ["aegivallyguerilla"],
				},
				aegivallyguerilla: {
				    num: 7500588,
				    species: "Aegivally-Guerilla",
				    baseSpecies: "Aegivally",
				    forme: "Guerilla",
				    formeLetter: "G",
   				 types: ["Normal", "Steel"],
   				 gender: "N",
  				    baseStats: {hp: 91, atk: 135, def: 72, spa: 135, spd: 72, spe: 72},
				    abilities: {0: "Tactical Computer"},
				    heightm: 2,
				    weightkg: 76.75,
				    color: "Brown",
				    eggGroups: ["Undiscovered"],
				},
	
			/* Aegivally formes go here*/ 
	
				necrogarde: {
				     num: 7500589,
				     species: "Necrogarde",
				     types: ["Psychic", "Ground"],
   				  gender: "N",
 				     baseStats: {hp: 102, atk: 103, def: 111, spa: 104, spd: 112, spe: 107},
   				  abilities: {0: "Shattered Prism"},
  				     heightm: 3.7,
				     weightkg: 267.5,
				     color: "Green",
				     eggGroups: ["Undiscovered"],
				},
				celmuse: {
				     num: 7500590,
				     species: "Celmuse",
				     types: ["Ghost", "Psychic"],
				     gender: "N",
				     baseStats: {hp: 110, atk: 98, def: 87, spa: 125, spd: 87, spe: 35},
				     abilities: {0: "Magicworker"},
				     heightm: 3.9,
				     weightkg: 115,
				     color: "Green",
				     eggGroups: ["Undiscovered"],
				},
				typeblade: {
     			     num: 7500591,
     			     species: "Type: Blade",
     			     types: ["Normal", "Steel"],
     			     baseStats: {hp: 91, atk: 104, def: 135, spa: 70, spd: 83, spe: 47},
    			     abilities: {0: "Ravage"},
     			     heightm: 1.9,
    			     weightkg: 120.5,
					  evos: ["aegivally"],
     			     color: "Brown",
     			     eggGroups: ["Undiscovered"],
				},
	    mewdeuca: {
        num: 7500592,
        species: "Mewdeuca",
        types: ["Poison", "Psychic"],
        baseStats: {
            hp: 89,
            atk: 120,
            def: 89,
            spa: 115,
            spd: 89,
            spe: 130
        },
        abilities: {
            0: "Unnerve"
        },
		  color: "Purple",
        heightm: 2.75,
        weightkg: 93.5,
     	 eggGroups: ["Undiscovered"],
    },
    mewdeucamegax: {
        num: 7500592,
        species: "Mewdeuca-Mega-X",
        baseSpecies: "Mewdeuca",
        forme: "Mega",
        formeLetter: "M",
        types: ["Poison", "Fighting"],
        baseStats: {
            hp: 89,
            atk: 200,
            def: 99,
            spa: 115,
            spd: 99,
            spe: 130
        },
        abilities: {
            0: "Steadfast"
        },
		  color: "Purple",
        heightm: 3.05,
        weightkg: 98.5,
     	  eggGroups: ["Undiscovered"],
    },
    mewdeucamegay: {
        num: 7500592,
        species: "Mewdeuca-Mega-Y",
        baseSpecies: "Mewdeuca",
        forme: "Mega",
        formeLetter: "M",
        types: ["Poison", "Psychic"],
        baseStats: {
            hp: 89,
            atk: 160,
            def: 69,
            spa: 155,
            spd: 119,
            spe: 140
        },
        abilities: {
            0: "Insomnia"
        },
		  color: "Purple",
        heightm: 2.25,
        weightkg: 25.3,
     	  eggGroups: ["Undiscovered"],
    },
	    swalokumlol: {
        num: 7500593,
        species: "Swalokum-Lol",
        types: ["Dark", "Poison"],
        baseStats: {
            hp: 112,
            atk: 99,
            def: 89,
            spa: 79,
            spd: 101,
            spe: 62
        },
        abilities: {
            0: "Slime Drench"
        },
		  color: "Purple",
        heightm: 1.35,
        weightkg: 66,
     	  eggGroups: ["Amorphous"],
    },
};
let abilities = {
		
			
		"noability":{shortDesc: "Does nothing.",name: "No Ability",id: "noability",},
"adaptability":{shortDesc: "This Pokemon's same-type attack bonus (STAB) is 2 instead of 1.5.",name: "Adaptability",id: "adaptability",},
"aftermath":{shortDesc: "If this Pokemon is KOed with a contact move, that move's user loses 1/4 its max HP.",name: "Aftermath",id: "aftermath",},
"aerilate":{shortDesc: "This Pokemon's Normal-type moves become Flying type and have 1.2x power.",name: "Aerilate",id: "aerilate",},
"airlock":{shortDesc: "While this Pokemon is active, the effects of weather conditions are disabled.",name: "Air Lock",id: "airlock",},
"analytic":{shortDesc: "This Pokemon's attacks have 1.3x power if it is the last to move in a turn.",name: "Analytic",id: "analytic",},
"angerpoint":{shortDesc: "If this Pokemon (not its substitute) takes a critical hit, its Attack is raised 12 stages.",name: "Anger Point",id: "angerpoint",},
"anticipation":{shortDesc: "On switch-in, this Pokemon shudders if any foe has a supereffective or OHKO move.",name: "Anticipation",id: "anticipation",},
"arenatrap":{shortDesc: "Prevents adjacent foes from choosing to switch unless they are airborne.",name: "Arena Trap",id: "arenatrap",},
"aromaveil":{shortDesc: "Protects user/allies from Attract, Disable, Encore, Heal Block, Taunt, and Torment.",name: "Aroma Veil",id: "aromaveil",},
"aurabreak":{shortDesc: "While this Pokemon is active, the Dark Aura and Fairy Aura power modifier is 0.75x.",name: "Aura Break",id: "aurabreak",},
"baddreams":{shortDesc: "Causes sleeping adjacent foes to lose 1/8 of their max HP at the end of each turn.",name: "Bad Dreams",id: "baddreams",},
"battery":{shortDesc: "This Pokemon's allies have the power of their special attacks multiplied by 1.3.",name: "Battery",id: "battery",},
"battlearmor":{shortDesc: "This Pokemon cannot be struck by a critical hit.",name: "Battle Armor",id: "battlearmor",},
"battlebond":{shortDesc: "After KOing a Pokemon: becomes Ash-Greninja, Water Shuriken: 20 power, hits 3x.",name: "Battle Bond",id: "battlebond",},
"beastboost":{shortDesc: "This Pokemon's highest stat is raised by 1 if it attacks and KOes another Pokemon.",name: "Beast Boost",id: "beastboost",},
"berserk":{shortDesc: "This Pokemon's Sp. Atk is raised by 1 when it reaches 1/2 or less of its max HP.",name: "Berserk",id: "berserk",},
"bigpecks":{shortDesc: "Prevents other Pokemon from lowering this Pokemon's Defense stat stage.",name: "Big Pecks",id: "bigpecks",},
"blaze":{shortDesc: "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Fire attacks.",name: "Blaze",id: "blaze",},
"bulletproof":{shortDesc: "Makes user immune to ballistic moves (Shadow Ball, Sludge Bomb, Focus Blast, etc).",name: "Bulletproof",id: "bulletproof",},
"cheekpouch":{shortDesc: "If this Pokemon eats a Berry, it restores 1/3 of its max HP after the Berry's effect.",name: "Cheek Pouch",id: "cheekpouch",},
"chlorophyll":{shortDesc: "If Sunny Day is active, this Pokemon's Speed is doubled.",name: "Chlorophyll",id: "chlorophyll",},
"clearbody":{shortDesc: "Prevents other Pokemon from lowering this Pokemon's stat stages.",name: "Clear Body",id: "clearbody",},
"cloudnine":{shortDesc: "While this Pokemon is active, the effects of weather conditions are disabled.",name: "Cloud Nine",id: "cloudnine",},
"colorchange":{shortDesc: "This Pokemon's type changes to the type of a move it's hit by, unless it has the type.",name: "Color Change",id: "colorchange",},
"comatose":{shortDesc: "This Pokemon cannot be statused, and is considered to be asleep.",name: "Comatose",id: "comatose",},
"competitive":{shortDesc: "This Pokemon's Sp. Atk is raised by 2 for each of its stats that is lowered by a foe.",name: "Competitive",id: "competitive",},
"compoundeyes":{shortDesc: "This Pokemon's moves have their accuracy multiplied by 1.3.",name: "Compound Eyes",id: "compoundeyes",},
"contrary":{shortDesc: "If this Pokemon has a stat stage raised it is lowered instead, and vice versa.",name: "Contrary",id: "contrary",},
"corrosion":{shortDesc: "This Pokemon can poison or badly poison other Pokemon regardless of their typing.",name: "Corrosion",id: "corrosion",},
"cursedbody":{shortDesc: "If this Pokemon is hit by an attack, there is a 30% chance that move gets disabled.",name: "Cursed Body",id: "cursedbody",},
"cutecharm":{shortDesc: "30% chance of infatuating Pokemon of the opposite gender if they make contact.",name: "Cute Charm",id: "cutecharm",},
"damp":{shortDesc: "Prevents Explosion/Mind Blown/Self-Destruct/Aftermath while this Pokemon is active.",name: "Damp",id: "damp",},
"dancer":{shortDesc: "After another Pokemon uses a dance move, this Pokemon uses the same move.",name: "Dancer",id: "dancer",},
"darkaura":{shortDesc: "While this Pokemon is active, a Dark move used by any Pokemon has 1.33x power.",name: "Dark Aura",id: "darkaura",},
"dazzling":{shortDesc: "While this Pokemon is active, allies are protected from opposing priority moves.",name: "Dazzling",id: "dazzling",},
"defeatist":{shortDesc: "While this Pokemon has 1/2 or less of its max HP, its Attack and Sp. Atk are halved.",name: "Defeatist",id: "defeatist",},
"defiant":{shortDesc: "This Pokemon's Attack is raised by 2 for each of its stats that is lowered by a foe.",name: "Defiant",id: "defiant",},
"deltastream":{shortDesc: "On switch-in, strong winds begin until this Ability is not active in battle.",name: "Delta Stream",id: "deltastream",},
"desolateland":{shortDesc: "On switch-in, extremely harsh sunlight begins until this Ability is not active in battle.",name: "Desolate Land",id: "desolateland",},
"disguise":{shortDesc: "If this Pokemon is a Mimikyu, the first hit it takes in battle deals 0 neutral damage.",name: "Disguise",id: "disguise",},
"download":{shortDesc: "On switch-in, Attack or Sp. Atk is raised 1 stage based on the foes' weaker Defense.",name: "Download",id: "download",},
"drizzle":{shortDesc: "On switch-in, this Pokemon summons Rain Dance.",name: "Drizzle",id: "drizzle",},
"drought":{shortDesc: "On switch-in, this Pokemon summons Sunny Day.",name: "Drought",id: "drought",},
"dryskin":{shortDesc: "This Pokemon is healed 1/4 by Water, 1/8 by Rain; is hurt 1.25x by Fire, 1/8 by Sun.",name: "Dry Skin",id: "dryskin",},
"earlybird":{shortDesc: "This Pokemon's sleep counter drops by 2 instead of 1.",name: "Early Bird",id: "earlybird",},
"effectspore":{shortDesc: "30% chance of poison/paralysis/sleep on others making contact with this Pokemon.",name: "Effect Spore",id: "effectspore",},
"electricsurge":{shortDesc: "On switch-in, this Pokemon summons Electric Terrain.",name: "Electric Surge",id: "electricsurge",},
"emergencyexit":{shortDesc: "This Pokemon switches out when it reaches 1/2 or less of its maximum HP.",name: "Emergency Exit",id: "emergencyexit",},
"fairyaura":{shortDesc: "While this Pokemon is active, a Fairy move used by any Pokemon has 1.33x power.",name: "Fairy Aura",id: "fairyaura",},
"filter":{shortDesc: "This Pokemon receives 3/4 damage from supereffective attacks.",name: "Filter",id: "filter",},
"flamebody":{shortDesc: "30% chance a Pokemon making contact with this Pokemon will be burned.",name: "Flame Body",id: "flamebody",},
"flareboost":{shortDesc: "While this Pokemon is burned, its special attacks have 1.5x power.",name: "Flare Boost",id: "flareboost",},
"flashfire":{shortDesc: "This Pokemon's Fire attacks do 1.5x damage if hit by one Fire move; Fire immunity.",name: "Flash Fire",id: "flashfire",},
"flowergift":{shortDesc: "If user is Cherrim and Sunny Day is active, it and allies' Attack and Sp. Def are 1.5x.",name: "Flower Gift",id: "flowergift",},
"flowerveil":{shortDesc: "This side's Grass types can't have stats lowered or status inflicted by other Pokemon.",name: "Flower Veil",id: "flowerveil",},
"fluffy":{shortDesc: "This Pokemon takes 1/2 damage from contact moves, 2x damage from Fire moves.",name: "Fluffy",id: "fluffy",},
"forecast":{shortDesc: "Castform's type changes to the current weather condition's type, except Sandstorm.",name: "Forecast",id: "forecast",},
"forewarn":{shortDesc: "On switch-in, this Pokemon is alerted to the foes' move with the highest power.",name: "Forewarn",id: "forewarn",},
"friendguard":{shortDesc: "This Pokemon's allies receive 3/4 damage from other Pokemon's attacks.",name: "Friend Guard",id: "friendguard",},
"frisk":{shortDesc: "On switch-in, this Pokemon identifies the held items of all opposing Pokemon.",name: "Frisk",id: "frisk",},
"fullmetalbody":{shortDesc: "Prevents other Pokemon from lowering this Pokemon's stat stages.",name: "Full Metal Body",id: "fullmetalbody",},
"furcoat":{shortDesc: "This Pokemon's Defense is doubled.",name: "Fur Coat",id: "furcoat",},
"galewings":{shortDesc: "If this Pokemon is at full HP, its Flying-type moves have their priority increased by 1.",name: "Gale Wings",id: "galewings",},
"galvanize":{shortDesc: "This Pokemon's Normal-type moves become Electric type and have 1.2x power.",name: "Galvanize",id: "galvanize",},
"gluttony":{shortDesc: "When this Pokemon has 1/2 or less of its maximum HP, it uses certain Berries early.",name: "Gluttony",id: "gluttony",},
"gooey":{shortDesc: "Pokemon making contact with this Pokemon have their Speed lowered by 1 stage.",name: "Gooey",id: "gooey",},
"grasspelt":{shortDesc: "If Grassy Terrain is active, this Pokemon's Defense is multiplied by 1.5.",name: "Grass Pelt",id: "grasspelt",},
"grassysurge":{shortDesc: "On switch-in, this Pokemon summons Grassy Terrain.",name: "Grassy Surge",id: "grassysurge",},
"guts":{shortDesc: "If this Pokemon is statused, its Attack is 1.5x; ignores burn halving physical damage.",name: "Guts",id: "guts",},
"harvest":{shortDesc: "If last item used is a Berry, 50% chance to restore it each end of turn. 100% in Sun.",name: "Harvest",id: "harvest",},
"healer":{shortDesc: "30% chance of curing an adjacent ally's status at the end of each turn.",name: "Healer",id: "healer",},
"heatproof":{shortDesc: "The power of Fire-type attacks against this Pokemon is halved; burn damage halved.",name: "Heatproof",id: "heatproof",},
"heavymetal":{shortDesc: "This Pokemon's weight is doubled.",name: "Heavy Metal",id: "heavymetal",},
"honeygather":{shortDesc: "No competitive use.",name: "Honey Gather",id: "honeygather",},
"hugepower":{shortDesc: "This Pokemon's Attack is doubled.",name: "Huge Power",id: "hugepower",},
"hustle":{shortDesc: "This Pokemon's Attack is 1.5x and accuracy of its physical attacks is 0.8x.",name: "Hustle",id: "hustle",},
"hydration":{shortDesc: "This Pokemon has its status cured at the end of each turn if Rain Dance is active.",name: "Hydration",id: "hydration",},
"hypercutter":{shortDesc: "Prevents other Pokemon from lowering this Pokemon's Attack stat stage.",name: "Hyper Cutter",id: "hypercutter",},
"icebody":{shortDesc: "If Hail is active, this Pokemon heals 1/16 of its max HP each turn; immunity to Hail.",name: "Ice Body",id: "icebody",},
"illuminate":{shortDesc: "No competitive use.",name: "Illuminate",id: "illuminate",},
"illusion":{shortDesc: "This Pokemon appears as the last Pokemon in the party until it takes direct damage.",name: "Illusion",id: "illusion",},
"immunity":{shortDesc: "This Pokemon cannot be poisoned. Gaining this Ability while poisoned cures it.",name: "Immunity",id: "immunity",},
"imposter":{shortDesc: "On switch-in, this Pokemon Transforms into the opposing Pokemon that is facing it.",name: "Imposter",id: "imposter",},
"infiltrator":{shortDesc: "Moves ignore substitutes and foe's Reflect/Light Screen/Safeguard/Mist/Aurora Veil.",name: "Infiltrator",id: "infiltrator",},
"innardsout":{shortDesc: "If this Pokemon is KOed with a move, that move's user loses an equal amount of HP.",name: "Innards Out",id: "innardsout",},
"innerfocus":{shortDesc: "This Pokemon cannot be made to flinch.",name: "Inner Focus",id: "innerfocus",},
"insomnia":{shortDesc: "This Pokemon cannot fall asleep. Gaining this Ability while asleep cures it.",name: "Insomnia",id: "insomnia",},
"intimidate":{shortDesc: "On switch-in, this Pokemon lowers the Attack of adjacent opponents by 1 stage.",name: "Intimidate",id: "intimidate",},
"ironbarbs":{shortDesc: "Pokemon making contact with this Pokemon lose 1/8 of their max HP.",name: "Iron Barbs",id: "ironbarbs",},
"ironfist":{shortDesc: "This Pokemon's punch-based attacks have 1.2x power. Sucker Punch is not boosted.",name: "Iron Fist",id: "ironfist",},
"justified":{shortDesc: "This Pokemon's Attack is raised by 1 stage after it is damaged by a Dark-type move.",name: "Justified",id: "justified",},
"keeneye":{shortDesc: "This Pokemon's accuracy can't be lowered by others; ignores their evasiveness stat.",name: "Keen Eye",id: "keeneye",},
"klutz":{shortDesc: "This Pokemon's held item has no effect, except Macho Brace. Fling cannot be used.",name: "Klutz",id: "klutz",},
"leafguard":{shortDesc: "If Sunny Day is active, this Pokemon cannot be statused and Rest will fail for it.",name: "Leaf Guard",id: "leafguard",},
"levitate":{shortDesc: "This Pokemon is immune to Ground; Gravity/Ingrain/Smack Down/Iron Ball nullify it.",name: "Levitate",id: "levitate",},
"lightmetal":{shortDesc: "This Pokemon's weight is halved.",name: "Light Metal",id: "lightmetal",},
"lightningrod":{shortDesc: "This Pokemon draws Electric moves to itself to raise Sp. Atk by 1; Electric immunity.",name: "Lightning Rod",id: "lightningrod",},
"limber":{shortDesc: "This Pokemon cannot be paralyzed. Gaining this Ability while paralyzed cures it.",name: "Limber",id: "limber",},
"liquidooze":{shortDesc: "This Pokemon damages those draining HP from it for as much as they would heal.",name: "Liquid Ooze",id: "liquidooze",},
"liquidvoice":{shortDesc: "This Pokemon's sound-based moves become Water type.",name: "Liquid Voice",id: "liquidvoice",},
"longreach":{shortDesc: "This Pokemon's attacks do not make contact with the target.",name: "Long Reach",id: "longreach",},
"magicbounce":{shortDesc: "This Pokemon blocks certain status moves and bounces them back to the user.",name: "Magic Bounce",id: "magicbounce",},
"magicguard":{shortDesc: "This Pokemon can only be damaged by direct attacks.",name: "Magic Guard",id: "magicguard",},
"magician":{shortDesc: "If this Pokemon has no item, it steals the item off a Pokemon it hits with an attack.",name: "Magician",id: "magician",},
"magmaarmor":{shortDesc: "This Pokemon cannot be frozen. Gaining this Ability while frozen cures it.",name: "Magma Armor",id: "magmaarmor",},
"magnetpull":{shortDesc: "Prevents adjacent Steel-type foes from choosing to switch.",name: "Magnet Pull",id: "magnetpull",},
"marvelscale":{shortDesc: "If this Pokemon is statused, its Defense is 1.5x.",name: "Marvel Scale",id: "marvelscale",},
"megalauncher":{shortDesc: "This Pokemon's pulse moves have 1.5x power. Heal Pulse heals 3/4 target's max HP.",name: "Mega Launcher",id: "megalauncher",},
"merciless":{shortDesc: "This Pokemon's attacks are critical hits if the target is poisoned.",name: "Merciless",id: "merciless",},
"minus":{shortDesc: "If an active ally has this Ability or the Plus Ability, this Pokemon's Sp. Atk is 1.5x.",name: "Minus",id: "minus",},
"mistysurge":{shortDesc: "On switch-in, this Pokemon summons Misty Terrain.",name: "Misty Surge",id: "mistysurge",},
"moldbreaker":{shortDesc: "This Pokemon's moves and their effects ignore the Abilities of other Pokemon.",name: "Mold Breaker",id: "moldbreaker",},
"moody":{shortDesc: "Raises a random stat by 2 and lowers another stat by 1 at the end of each turn.",name: "Moody",id: "moody",},
"motordrive":{shortDesc: "This Pokemon's Speed is raised 1 stage if hit by an Electric move; Electric immunity.",name: "Motor Drive",id: "motordrive",},
"moxie":{shortDesc: "This Pokemon's Attack is raised by 1 stage if it attacks and KOes another Pokemon.",name: "Moxie",id: "moxie",},
"multiscale":{shortDesc: "If this Pokemon is at full HP, damage taken from attacks is halved.",name: "Multiscale",id: "multiscale",},
"multitype":{shortDesc: "If this Pokemon is an Arceus, its type changes to match its held Plate or Z-Crystal.",name: "Multitype",id: "multitype",},
"mummy":{shortDesc: "Pokemon making contact with this Pokemon have their Ability changed to Mummy.",name: "Mummy",id: "mummy",},
"naturalcure":{shortDesc: "This Pokemon has its major status condition cured when it switches out.",name: "Natural Cure",id: "naturalcure",},
"neuroforce":{shortDesc: "This Pokemon's attacks that are super effective against the target do 1.25x damage.",name: "Neuroforce",id: "neuroforce",},
"noguard":{shortDesc: "Every move used by or against this Pokemon will always hit.",name: "No Guard",id: "noguard",},
"normalize":{shortDesc: "This Pokemon's moves are changed to be Normal type and have 1.2x power.",name: "Normalize",id: "normalize",},
"oblivious":{shortDesc: "This Pokemon cannot be infatuated or taunted. Gaining this Ability cures it.",name: "Oblivious",id: "oblivious",},
"overcoat":{shortDesc: "This Pokemon is immune to powder moves and damage from Sandstorm or Hail.",name: "Overcoat",id: "overcoat",},
"overgrow":{shortDesc: "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Grass attacks.",name: "Overgrow",id: "overgrow",},
"owntempo":{shortDesc: "This Pokemon cannot be confused. Gaining this Ability while confused cures it.",name: "Own Tempo",id: "owntempo",},
"parentalbond":{shortDesc: "This Pokemon's damaging moves hit twice. The second hit has its damage quartered.",name: "Parental Bond",id: "parentalbond",},
"pickup":{shortDesc: "If this Pokemon has no item, it finds one used by an adjacent Pokemon this turn.",name: "Pickup",id: "pickup",},
"pickpocket":{shortDesc: "If this Pokemon has no item, it steals the item off a Pokemon making contact with it.",name: "Pickpocket",id: "pickpocket",},
"pixilate":{shortDesc: "This Pokemon's Normal-type moves become Fairy type and have 1.2x power.",name: "Pixilate",id: "pixilate",},
"plus":{shortDesc: "If an active ally has this Ability or the Minus Ability, this Pokemon's Sp. Atk is 1.5x.",name: "Plus",id: "plus",},
"poisonheal":{shortDesc: "This Pokemon is healed by 1/8 of its max HP each turn when poisoned; no HP loss.",name: "Poison Heal",id: "poisonheal",},
"poisonpoint":{shortDesc: "30% chance a Pokemon making contact with this Pokemon will be poisoned.",name: "Poison Point",id: "poisonpoint",},
"poisontouch":{shortDesc: "This Pokemon's contact moves have a 30% chance of poisoning.",name: "Poison Touch",id: "poisontouch",},
"powerconstruct":{shortDesc: "If Zygarde 10%/50%, changes to Complete if at 1/2 max HP or less at end of turn.",name: "Power Construct",id: "powerconstruct",},
"powerofalchemy":{shortDesc: "This Pokemon copies the Ability of an ally that faints.",name: "Power of Alchemy",id: "powerofalchemy",},
"prankster":{shortDesc: "This Pokemon's Status moves have priority raised by 1, but Dark types are immune.",name: "Prankster",id: "prankster",},
"pressure":{shortDesc: "If this Pokemon is the target of a foe's move, that move loses one additional PP.",name: "Pressure",id: "pressure",},
"primordialsea":{shortDesc: "On switch-in, heavy rain begins until this Ability is not active in battle.",name: "Primordial Sea",id: "primordialsea",},
"prismarmor":{shortDesc: "This Pokemon receives 3/4 damage from supereffective attacks.",name: "Prism Armor",id: "prismarmor",},
"protean":{shortDesc: "This Pokemon's type changes to match the type of the move it is about to use.",name: "Protean",id: "protean",},
"psychicsurge":{shortDesc: "On switch-in, this Pokemon summons Psychic Terrain.",name: "Psychic Surge",id: "psychicsurge",},
"purepower":{shortDesc: "This Pokemon's Attack is doubled.",name: "Pure Power",id: "purepower",},
"queenlymajesty":{shortDesc: "While this Pokemon is active, allies are protected from opposing priority moves.",name: "Queenly Majesty",id: "queenlymajesty",},
"quickfeet":{shortDesc: "If this Pokemon is statused, its Speed is 1.5x; ignores Speed drop from paralysis.",name: "Quick Feet",id: "quickfeet",},
"raindish":{shortDesc: "If Rain Dance is active, this Pokemon heals 1/16 of its max HP each turn.",name: "Rain Dish",id: "raindish",},
"rattled":{shortDesc: "This Pokemon's Speed is raised 1 stage if hit by a Bug-, Dark-, or Ghost-type attack.",name: "Rattled",id: "rattled",},
"receiver":{shortDesc: "This Pokemon copies the Ability of an ally that faints.",name: "Receiver",id: "receiver",},
"reckless":{shortDesc: "This Pokemon's attacks with recoil or crash damage have 1.2x power; not Struggle.",name: "Reckless",id: "reckless",},
"refrigerate":{shortDesc: "This Pokemon's Normal-type moves become Ice type and have 1.2x power.",name: "Refrigerate",id: "refrigerate",},
"regenerator":{shortDesc: "This Pokemon restores 1/3 of its maximum HP, rounded down, when it switches out.",name: "Regenerator",id: "regenerator",},
"rivalry":{shortDesc: "This Pokemon's attacks do 1.25x on same gender targets; 0.75x on opposite gender.",name: "Rivalry",id: "rivalry",},
"rkssystem":{shortDesc: "If this Pokemon is a Silvally, its type changes to match its held Memory.",name: "RKS System",id: "rkssystem",},
"rockhead":{shortDesc: "This Pokemon does not take recoil damage besides Struggle/Life Orb/crash damage.",name: "Rock Head",id: "rockhead",},
"roughskin":{shortDesc: "Pokemon making contact with this Pokemon lose 1/8 of their max HP.",name: "Rough Skin",id: "roughskin",},
"runaway":{shortDesc: "No competitive use.",name: "Run Away",id: "runaway",},
"sandforce":{shortDesc: "This Pokemon's Ground/Rock/Steel attacks do 1.3x in Sandstorm; immunity to it.",name: "Sand Force",id: "sandforce",},
"sandrush":{shortDesc: "If Sandstorm is active, this Pokemon's Speed is doubled; immunity to Sandstorm.",name: "Sand Rush",id: "sandrush",},
"sandstream":{shortDesc: "On switch-in, this Pokemon summons Sandstorm.",name: "Sand Stream",id: "sandstream",},
"sandveil":{shortDesc: "If Sandstorm is active, this Pokemon's evasiveness is 1.25x; immunity to Sandstorm.",name: "Sand Veil",id: "sandveil",},
"sapsipper":{shortDesc: "This Pokemon's Attack is raised 1 stage if hit by a Grass move; Grass immunity.",name: "Sap Sipper",id: "sapsipper",},
"schooling":{shortDesc: "If user is Wishiwashi, changes to School Form if it has > 1/4 max HP, else Solo Form.",name: "Schooling",id: "schooling",},
"scrappy":{shortDesc: "This Pokemon can hit Ghost types with Normal- and Fighting-type moves.",name: "Scrappy",id: "scrappy",},
"serenegrace":{shortDesc: "This Pokemon's moves have their secondary effect chance doubled.",name: "Serene Grace",id: "serenegrace",},
"shadowshield":{shortDesc: "If this Pokemon is at full HP, damage taken from attacks is halved.",name: "Shadow Shield",id: "shadowshield",},
"shadowtag":{shortDesc: "Prevents adjacent foes from choosing to switch unless they also have this Ability.",name: "Shadow Tag",id: "shadowtag",},
"shedskin":{shortDesc: "This Pokemon has a 33% chance to have its status cured at the end of each turn.",name: "Shed Skin",id: "shedskin",},
"sheerforce":{shortDesc: "This Pokemon's attacks with secondary effects have 1.3x power; nullifies the effects.",name: "Sheer Force",id: "sheerforce",},
"shellarmor":{shortDesc: "This Pokemon cannot be struck by a critical hit.",name: "Shell Armor",id: "shellarmor",},
"shielddust":{shortDesc: "This Pokemon is not affected by the secondary effect of another Pokemon's attack.",name: "Shield Dust",id: "shielddust",},
"shieldsdown":{shortDesc: "If Minior, switch-in/end of turn it changes to Core at 1/2 max HP or less, else Meteor.",name: "Shields Down",id: "shieldsdown",},
"simple":{shortDesc: "When this Pokemon's stat stages are raised or lowered, the effect is doubled instead.",name: "Simple",id: "simple",},
"skilllink":{shortDesc: "This Pokemon's multi-hit attacks always hit the maximum number of times.",name: "Skill Link",id: "skilllink",},
"slowstart":{shortDesc: "On switch-in, this Pokemon's Attack and Speed are halved for 5 turns.",name: "Slow Start",id: "slowstart",},
"slushrush":{shortDesc: "If Hail is active, this Pokemon's Speed is doubled.",name: "Slush Rush",id: "slushrush",},
"sniper":{shortDesc: "If this Pokemon strikes with a critical hit, the damage is multiplied by 1.5.",name: "Sniper",id: "sniper",},
"snowcloak":{shortDesc: "If Hail is active, this Pokemon's evasiveness is 1.25x; immunity to Hail.",name: "Snow Cloak",id: "snowcloak",},
"snowwarning":{shortDesc: "On switch-in, this Pokemon summons Hail.",name: "Snow Warning",id: "snowwarning",},
"solarpower":{shortDesc: "If Sunny Day is active, this Pokemon's Sp. Atk is 1.5x; loses 1/8 max HP per turn.",name: "Solar Power",id: "solarpower",},
"solidrock":{shortDesc: "This Pokemon receives 3/4 damage from supereffective attacks.",name: "Solid Rock",id: "solidrock",},
"soulheart":{shortDesc: "This Pokemon's Sp. Atk is raised by 1 stage when another Pokemon faints.",name: "Soul-Heart",id: "soulheart",},
"soundproof":{shortDesc: "This Pokemon is immune to sound-based moves, including Heal Bell.",name: "Soundproof",id: "soundproof",},
"speedboost":{shortDesc: "This Pokemon's Speed is raised 1 stage at the end of each full turn on the field.",name: "Speed Boost",id: "speedboost",},
"stakeout":{shortDesc: "This Pokemon's attacking stat is doubled against a target that switched in this turn.",name: "Stakeout",id: "stakeout",},
"stall":{shortDesc: "This Pokemon moves last among Pokemon using the same or greater priority moves.",name: "Stall",id: "stall",},
"stamina":{shortDesc: "This Pokemon's Defense is raised by 1 stage after it is damaged by a move.",name: "Stamina",id: "stamina",},
"stancechange":{shortDesc: "If Aegislash, changes Forme to Blade before attacks and Shield before King's Shield.",name: "Stance Change",id: "stancechange",},
"static":{shortDesc: "30% chance a Pokemon making contact with this Pokemon will be paralyzed.",name: "Static",id: "static",},
"steadfast":{shortDesc: "If this Pokemon flinches, its Speed is raised by 1 stage.",name: "Steadfast",id: "steadfast",},
"steelworker":{shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using a Steel-type attack.",name: "Steelworker",id: "steelworker",},
"stench":{shortDesc: "This Pokemon's attacks without a chance to flinch have a 10% chance to flinch.",name: "Stench",id: "stench",},
"stickyhold":{shortDesc: "This Pokemon cannot lose its held item due to another Pokemon's attack.",name: "Sticky Hold",id: "stickyhold",},
"stormdrain":{shortDesc: "This Pokemon draws Water moves to itself to raise Sp. Atk by 1; Water immunity.",name: "Storm Drain",id: "stormdrain",},
"strongjaw":{shortDesc: "This Pokemon's bite-based attacks have 1.5x power. Bug Bite is not boosted.",name: "Strong Jaw",id: "strongjaw",},
"sturdy":{shortDesc: "If this Pokemon is at full HP, it survives one hit with at least 1 HP. Immune to OHKO.",name: "Sturdy",id: "sturdy",},
"suctioncups":{shortDesc: "This Pokemon cannot be forced to switch out by another Pokemon's attack or item.",name: "Suction Cups",id: "suctioncups",},
"superluck":{shortDesc: "This Pokemon's critical hit ratio is raised by 1 stage.",name: "Super Luck",id: "superluck",},
"surgesurfer":{shortDesc: "If Electric Terrain is active, this Pokemon's Speed is doubled.",name: "Surge Surfer",id: "surgesurfer",},
"swarm":{shortDesc: "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Bug attacks.",name: "Swarm",id: "swarm",},
"sweetveil":{shortDesc: "This Pokemon and its allies cannot fall asleep.",name: "Sweet Veil",id: "sweetveil",},
"swiftswim":{shortDesc: "If Rain Dance is active, this Pokemon's Speed is doubled.",name: "Swift Swim",id: "swiftswim",},
"symbiosis":{shortDesc: "If an ally uses its item, this Pokemon gives its item to that ally immediately.",name: "Symbiosis",id: "symbiosis",},
"synchronize":{shortDesc: "If another Pokemon burns/poisons/paralyzes this Pokemon, it also gets that status.",name: "Synchronize",id: "synchronize",},
"tangledfeet":{shortDesc: "This Pokemon's evasiveness is doubled as long as it is confused.",name: "Tangled Feet",id: "tangledfeet",},
"tanglinghair":{shortDesc: "Pokemon making contact with this Pokemon have their Speed lowered by 1 stage.",name: "Tangling Hair",id: "tanglinghair",},
"technician":{shortDesc: "This Pokemon's moves of 60 power or less have 1.5x power. Includes Struggle.",name: "Technician",id: "technician",},
"telepathy":{shortDesc: "This Pokemon does not take damage from attacks made by its allies.",name: "Telepathy",id: "telepathy",},
"teravolt":{shortDesc: "This Pokemon's moves and their effects ignore the Abilities of other Pokemon.",name: "Teravolt",id: "teravolt",},
"thickfat":{shortDesc: "Fire/Ice-type moves against this Pokemon deal damage with a halved attacking stat.",name: "Thick Fat",id: "thickfat",},
"tintedlens":{shortDesc: "This Pokemon's attacks that are not very effective on a target deal double damage.",name: "Tinted Lens",id: "tintedlens",},
"torrent":{shortDesc: "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Water attacks.",name: "Torrent",id: "torrent",},
"toxicboost":{shortDesc: "While this Pokemon is poisoned, its physical attacks have 1.5x power.",name: "Toxic Boost",id: "toxicboost",},
"toughclaws":{shortDesc: "This Pokemon's contact moves have their power multiplied by 1.3.",name: "Tough Claws",id: "toughclaws",},
"trace":{shortDesc: "On switch-in, or when it can, this Pokemon copies a random adjacent foe's Ability.",name: "Trace",id: "trace",},
"triage":{shortDesc: "This Pokemon's healing moves have their priority increased by 3.",name: "Triage",id: "triage",},
"truant":{shortDesc: "This Pokemon skips every other turn instead of using a move.",name: "Truant",id: "truant",},
"turboblaze":{shortDesc: "This Pokemon's moves and their effects ignore the Abilities of other Pokemon.",name: "Turboblaze",id: "turboblaze",},
"unaware":{shortDesc: "This Pokemon ignores other Pokemon's stat stages when taking or doing damage.",name: "Unaware",id: "unaware",},
"unburden":{shortDesc: "Speed is doubled on held item loss; boost is lost if it switches, gets new item/Ability.",name: "Unburden",id: "unburden",},
"unnerve":{shortDesc: "While this Pokemon is active, it prevents opposing Pokemon from using their Berries.",name: "Unnerve",id: "unnerve",},
"victorystar":{shortDesc: "This Pokemon and its allies' moves have their accuracy multiplied by 1.1.",name: "Victory Star",id: "victorystar",},
"vitalspirit":{shortDesc: "This Pokemon cannot fall asleep. Gaining this Ability while asleep cures it.",name: "Vital Spirit",id: "vitalspirit",},
"voltabsorb":{shortDesc: "This Pokemon heals 1/4 of its max HP when hit by Electric moves; Electric immunity.",name: "Volt Absorb",id: "voltabsorb",},
"waterabsorb":{shortDesc: "This Pokemon heals 1/4 of its max HP when hit by Water moves; Water immunity.",name: "Water Absorb",id: "waterabsorb",},
"waterbubble":{shortDesc: "This Pokemon's Water power is 2x; it can't be burned; Fire power against it is halved.",name: "Water Bubble",id: "waterbubble",},
"watercompaction":{shortDesc: "This Pokemon's Defense is raised 2 stages after it is damaged by a Water-type move.",name: "Water Compaction",id: "watercompaction",},
"waterveil":{shortDesc: "This Pokemon cannot be burned. Gaining this Ability while burned cures it.",name: "Water Veil",id: "waterveil",},
"weakarmor":{shortDesc: "If a physical attack hits this Pokemon, Defense is lowered by 1, Speed is raised by 2.",name: "Weak Armor",id: "weakarmor",},
"whitesmoke":{shortDesc: "Prevents other Pokemon from lowering this Pokemon's stat stages.",name: "White Smoke",id: "whitesmoke",},
"wimpout":{shortDesc: "This Pokemon switches out when it reaches 1/2 or less of its maximum HP.",name: "Wimp Out",id: "wimpout",},
"wonderguard":{shortDesc: "This Pokemon can only be damaged by supereffective moves and indirect damage.",name: "Wonder Guard",id: "wonderguard",},
"wonderskin":{shortDesc: "Status moves with accuracy checks are 50% accurate when used on this Pokemon.",name: "Wonder Skin",id: "wonderskin",},
"zenmode":{shortDesc: "If Darmanitan, at end of turn changes Mode to Standard if > 1/2 max HP, else Zen.",name: "Zen Mode",id: "zenmode",},
"mountaineer":{shortDesc: "On switch-in, this Pokemon avoids all Rock-type attacks and Stealth Rock.",name: "Mountaineer",id: "mountaineer",},
"rebound":{shortDesc: "On switch-in, blocks certain status moves and bounces them back to the user.",name: "Rebound",id: "rebound",},
"persistent":{shortDesc: "When used, Gravity/Heal Block/Safeguard/Tailwind/Room effects last 2 more turns.",name: "Persistent",id: "persistent",},
			//First, override some abilities.
"forecast":{shortDesc: "Castform's type changes to the current weather condition's type, except Sandstorm.",name: "Forecast",id: "forecast",},
"dryskin":{shortDesc: "This Pokemon is healed 1/4 by Water, 1/8 by Rain; is hurt 1.25x by Fire, 1/8 by Sun.",name: "Dry Skin",id: "dryskin",},
"chlorophyll":{shortDesc: "If Sunny Day is active, this Pokemon's Speed is doubled.",name: "Chlorophyll",id: "chlorophyll",},
"slushrush":{shortDesc: "If Hail is active, this Pokemon's Speed is doubled.",name: "Slush Rush",id: "slushrush",},
"flowergift":{shortDesc: "If user is Cherrim and Sunny Day is active, it and allies' Attack and Sp. Def are 1.5x.",name: "Flower Gift",id: "flowergift",},
"icebody":{shortDesc: "If Hail is active, this Pokemon heals 1/16 of its max HP each turn; immunity to Hail.",name: "Ice Body",id: "icebody",},
"leafguard":{shortDesc: "If Sunny Day is active, this Pokemon cannot be statused and Rest will fail for it.",name: "Leaf Guard",id: "leafguard",},
"solarpower":{shortDesc: "If Sunny Day is active, this Pokemon's Sp. Atk is 1.5x; loses 1/8 max HP per turn.",name: "Solar Power",id: "solarpower",},
"snowcloak":{shortDesc: "If Hail is active, this Pokemon's evasiveness is 1.25x; immunity to Hail.",name: "Snow Cloak",id: "snowcloak",},
"overcoat":{shortDesc: "This Pokemon is immune to powder moves and damage from Sandstorm or Hail.",name: "Overcoat",id: "overcoat",},
"harvest":{shortDesc: "If last item used is a Berry, 50% chance to restore it each end of turn. 100% in Sun.",name: "Harvest",id: "harvest",},
"raindish":{shortDesc: "If Rain Dance is active, this Pokemon heals 1/16 of its max HP each turn.",name: "Rain Dish",id: "raindish",},
"swiftswim":{shortDesc: "If Rain Dance is active, this Pokemon's Speed is doubled.",name: "Swift Swim",id: "swiftswim",},
"sandveil":{shortDesc: "If Sandstorm is active, this Pokemon's evasiveness is 1.25x; immunity to Sandstorm.",name: "Sand Veil",id: "sandveil",},
"sandrush":{shortDesc: "If Sandstorm is active, this Pokemon's Speed is doubled; immunity to Sandstorm.",name: "Sand Rush",id: "sandrush",},
"sandforce":{shortDesc: "This Pokemon's Ground/Rock/Steel attacks do 1.3x in Sandstorm; immunity to it.",name: "Sand Force",id: "sandforce",},
"battery":{shortDesc: "This Pokemon's allies have the power of their special attacks multiplied by 1.3.",name: "Battery",id: "battery",},
"illusion":{shortDesc: "This Pokemon appears as the last Pokemon in the party until it takes direct damage.",name: "Illusion",id: "illusion",},
"turnabouttorrent":{shortDesc: "Water-type moves of the user is boosted by 50% as long as user is above 1/3 HP; the user's stat changes are reversed.",name: "Turnabout Torrent",id: "turnabouttorrent",},
"intimidatingscales":{shortDesc: "Gains 1.5 defense when afflicted with status, and lowers the opponent's attack on switch in.",name: "Intimidating Scales",id: "intimidatingscales",},
"hugetorrent":{shortDesc: "Doubles Attack at 30% of HP or less.",name: "Huge Torrent",id: "hugetorrent",},
"flashweather":{shortDesc: "In Sun, absorbs Fire moves, in Rain Water, in Hail Ice, and in Sand, Rock.",name: "Flash Weather",id: "flashweather",},
"intenserivalry":{shortDesc: "Bypasses targets' abilities if they could hinder or prevent a move and if the target is the same gender.",name: "Intense Rivalry",id: "intenserivalry",},
"moldedstall":{shortDesc: "No abilities have an effect, other than this one, until after this Pokemon acts.",name: "Molded Stall",id: "moldedstall",},
"levipoison":{shortDesc: "If the opponent targets this Pokemon a Ground-type move, it becomes Poisoned; Ground immunity.",name: "Levipoison",id: "levipoison",},
"glassing":{shortDesc: "If the opponent targets this Pokemon a Ground-type move, it becomes Burned; Ground immunity.",name: "Glassing",id: "glassing",},
"armorcast":{shortDesc: "When an item is used or lost, Attack and Speed are raised by two stages, while Defense and Special Defense are lowered by one.",name: "Armor Cast",id: "armorcast",},
"obliviousabsorb":{shortDesc: "Immune to infatuation, taunting, and electric moves, and if hit by one restores HP by 1/8 of its maximum.",name: "Oblivious Absorb",id: "obliviousabsorb",},
"cactuspower":{shortDesc: "Summons Sandstorm upon switching in. Grass-type moves have their power increased 20%.",name: "Cactus Power",id: "cactuspower",},
"snowforce":{shortDesc: "Strengthens Ice-type moves to 1.33× their power during hail.",name: "Snow Force",id: "snowforce",},
"sandyskin":{shortDesc: "This Pokemon has its status cured at the end of each turn if Sandstorm is active.",name: "Sandy Skin",id: "sandyskin",},
"sandshed":{shortDesc: "This Pokemon has its status cured at the end of each turn if Sandstorm is active.",name: "Sand Shed",id: "sandshed",},
"technicutter":{shortDesc: "Technician + Hyper Cutter.",name: "Technicutter",id: "technicutter",},
"chlorvolt":{shortDesc: "If Electric Terrain is active, this Pokemon's Speed is doubled.",name: "ChloroVolt",id: "chlorvolt",},
"healingfat":{shortDesc: "HP is restored by 1/8th every turn when burned or frozen. Prevents the attack drop from Burn status and the immobilization by Frozen status.",name: "Healing Fat",id: "healingfat",},
"normalveil":{shortDesc: "This Pokemon is immune to Normal-type moves.",name: "Normal Veil",id: "normalveil",},
"landshark":{shortDesc: "Lowers Opponent's defense on switch in and gets evasion boosted in sand.",name: "Land Shark",id: "landshark",},
"serenefocus":{shortDesc: "This Pokemon is not affected by the secondary effect of another Pokemon's attack.",name: "Serene Focus",id: "serenefocus",},
"torrentveil":{shortDesc: "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Water attacks and the Pokemon has 1.25x evasion.",name: "Torrent Veil",id: "torrentveil",},
"mummmyfortitude":{shortDesc: "Cofagreelix changes the ability of any attacker that makes contact to Mummy. If attacked by an enemy with the Mummy ability, Cofagreelix can endure a hit at one hit point if that hit would faint it.",name: "Mummy Fortitude",id: "mummmyfortitude",},
"blazingbody":{shortDesc: "Sturdy + Blaze.",name: "Blazing Body",id: "blazingbody",},
"noskill":{shortDesc: "Pressure + Super Luck.",name: "No Skill",id: "noskill",},
"sandaura":{shortDesc: "Sand Stream + Sand Veil.",name: "Sand Aura",id: "sandaura",},
"staticstorm":{shortDesc: "30% chance to paralyze the opponent each turn if Hail is active.",name: "Static Storm",id: "staticstorm",},
"dreadedflames":{shortDesc: "Gains a 1.5x boost to fire moves on the turn of entry, and lowers opponent's Attack on entry.",name: "Dreaded Flames",id: "dreadedflames",},
"rockygrowth":{shortDesc: "This Pokemon takes no recoil from moves and the power of moves that would cause recoil increases by 50% when HP is below 33%.",name: "Rocky Growth",id: "rockygrowth",},
"pristine":{shortDesc: "Cannot be OHKOed. Immune to major status conditions if its HP is full.",name: "Pristine",id: "pristine",},
"innerbody":{shortDesc: "Inner Focus + Flame Body.",name: "Inner Body",id: "innerbody",},
"intimidatingfangs":{shortDesc: "Pokemon making contact with this Pokemon have their Attack lowered by 1 stage.",name: "Intimidating Fangs",id: "intimidatingfangs",},
"intimidatingabsorption":{shortDesc: "Intimidate + Water Absorb.",name: "Intimidating Absorption",id: "intimidatingabsorption",},
"keen feet":{shortDesc: "Doubles Evasion whenever a stat is lowered (doesn't activate with self-inflicted drops).",name: "Keen Feet",id: "keen feet",},
"swiftabsorb":{shortDesc: "When hit by a Water moves, Speed is doubled. Water immunity.",name: "Swift Absorb",id: "swiftabsorb",},
"mathsurge":{shortDesc: "1.5x power of moves with 60 BP or less. When an ally has Technician, Plus or derivatives of those two abilities, multiplier is boosted to 2x.",name: "Math Surge",id: "mathsurge",},
"flameessence":{shortDesc: "This Pokemon's Fire-type moves are treated as STAB.",name: "Flame Essence",id: "flameessence",},
"naturalguard":{shortDesc: "Starchamp's moves cannot miss unless it's suffering from a major status. Cures itself of status when it switches.",name: "Natural Guard",id: "naturalguard",},
"stickyfloat":{shortDesc: "Sticky Hold + Levitate.",name: "Sticky Float",id: "stickyfloat",},
"serenefire":{shortDesc: "When hit by a Fire-Type Move, all Fire-Type moves used by Hitachi will burn. Fire-Type moves have no effect on Haitchi.",name: "Serene Fire",id: "serenefire",},
"healingblaze":{shortDesc: "Cures status when it uses a Fire-type move. Fire type moves are boosted by 50% whenever Healing Blaze is activated.",name: "Healing Blaze",id: "healingblaze",},
"barbstance":{shortDesc: "Switches to blade form when attacking, switches to shield form upon using king's shield. Deals 1/8 HP to contactors when in shield form.",name: "Barb Stance",id: "barbstance",},
"poweruppinch":{shortDesc: "All attacks x1.25 stronger if health is 50% or below",name: "Power Up Pinch",id: "poweruppinch",},
"electrotechnic":{shortDesc: "This Pokemon's moves with 60 BP or less have their power increased by 50%; if on the field there is another Pokemon with Plus, Minus or derivates, their power is doubled.",name: "ElectroTechnic",id: "electrotechnic",},
"speedbreak":{shortDesc: "If this Pokemon has a stat stage raised it is lowered instead, and vice versa.",name: "Speed Break",id: "speedbreak",},
"justicepower":{shortDesc: "This Pokemon's Attack is raised by 1 stage after it is damaged by a Dark-type move. That move's PP is then halved.",name: "Justice Power",id: "justicepower",},
"cursedtrace":{shortDesc: "On switch-in, or when it can, this Pokemon copies a random adjacent foe's Ability and suppresses it.",name: "Cursed Trace",id: "cursedtrace",},
"evaporation":{shortDesc: "If this Pokemon is hit by a Water-type move, its Fire-type moves have their power increased by 50%; immune to Water-type moves.",name: "Evaporation",id: "evaporation",},
"hardbody":{shortDesc: "Stat drops inflicted either by moves, abilities or status are ignored.",name: "Hard Body",id: "hardbody",},
"gutbreaker":{shortDesc: "Abilities that hinder attacks are nullified and gets attack boosted by 1.5x when burned.",name: "Gut Breaker",id: "gutbreaker",},
"synchofloat":{shortDesc: "Immune to Ground-type moves. Opposing Pokemon's ability is changed to Levitate.",name: "Synchofloat",id: "synchofloat",},
"magicianswand":{shortDesc: "Swaps item with target when hit with an Electric-type attack.",name: "Magician's Wand",id: "magicianswand",},
"cleanmatch":{shortDesc: "Pokemon not holding an item have their attack and speed increased by 50%. This ability's bonus does not stack with other abilities derived from or named Guts or Unburden.",name: "Clean Match",id: "cleanmatch",},
"positive growth":{shortDesc: "When this Pokemon's health is low, it gains a 50% boost to its Sp. Atk stat.",name: "Positive Growth",id: "positive growth",},
"errormacro":{shortDesc: "Physical moves hit off of special attack, and vice versa for special attacks. Stance change forms remain.",name: "Error Macro",id: "errormacro",},
"latebloomer":{shortDesc: "Has a 30% chance of infatuating the opponent at the end of its turn if it moves last.",name: "Late Bloomer",id: "latebloomer",},
"tangledflames":{shortDesc: "This pokemon's fire attacks are boosted 2x when confused. Fire Immunity.",name: "Tangled Flames",id: "tangledflames",},
"breaker":{shortDesc: "This pokemon's attacks aren't hindered by stat boosts, drops or abilities.",name: "Breaker",id: "breaker",},
"hammer space":{shortDesc: "If its item is used or lost during battle, the item will regenerate after it switches out.",name: "Hammer Space",id: "hammer space",},
"underpressure":{shortDesc: "This Pokemon's status is cured at the end of each turn, but it uses 2 PP every time it attacks.",name: "Under Pressure",id: "underpressure",},
"naturaleye":{shortDesc: "This Pokemon avoids all status moves if they're not 100% accurate.",name: "Natural Eye",id: "naturaleye",},
"overwhelmingpresence":{shortDesc: "Whenever this poke is on the field, all abilities and items the opponent has is negated.",name: "Overwhelming Presence",id: "overwhelmingpresence",},
"monsoon":{shortDesc: "Casting's secondary type changes to the current weather condition's type, except Sandstorm, and it gets protected from Ground-type moves.",name: "Monsoon",id: "monsoon",},
"monsoonaltered":{shortDesc: "Casting's secondary type changes to the current weather condition's type, except Sandstorm.",name: "Monsoon-Altered",id: "monsoonaltered",},
"justifiedfire":{shortDesc: "Raises user's Special Attack when hit with a Fire-type attack. Grants immunity to Fire.",name: "Justified Fire",id: "justifiedfire",},
"sturdytempo":{shortDesc: "Sturdy + Own Tempo",name: "Sturdy Tempo",id: "sturdytempo",},
"hydrostream":{shortDesc: "On switch-in, this Pokemon summons Rain Dance.",name: "Hydro Stream",id: "hydrostream",},
"hydrate":{shortDesc: "This Pokemon's Normal-type moves become Water type and have 1.2x power.",name: "Hydrate",id: "hydrate",},
"leafstream":{shortDesc: "On switch-in, this Pokemon summons Sunny Day.",name: "Leaf Stream",id: "leafstream",},
"cybercriminal":{shortDesc: "This Pokemon's Special Attack is raised by 1 stage if it attacks and KOes another Pokemon.",name: "Cyber Criminal",id: "cybercriminal",},
"cleartempo":{shortDesc: "Immune to stat drops and confusion.",name: "Clear Tempo",id: "cleartempo",},
"sandyeyes":{shortDesc: "x1.33 Accuracy in Sand.",name: "Sandy Eyes",id: "sandyeyes",},
"sharparmor":{shortDesc: "Atk is raised by 2 when hit by a Water-type move and lowered by 2 when hit by a Fire-type; gives immunity to Water-type moves.",name: "Sharp Armor",id: "sharparmor",},
"dreamcrusher":{shortDesc: "The user deals 2x damage to sleeping targets.",name: "Dream Crusher",id: "dreamcrusher",},
"desertsnow":{shortDesc: "This pokemon's Ground/Rock/Steel/Ice attacks do 1.3x in Sandstorm and Hail, opposing attacks of those types heal by 1/16 under the same weather conditions.",name: "Desert Snow",id: "desertsnow",},
"magicbreak":{shortDesc: "This Pokemon's attacks ignore the effects of the opponent's items.",name: "Magic Break",id: "magicbreak",},
"raptorhead":{shortDesc: "Prevents recoil damage and Attack reduction.",name: "Raptor Head",id: "raptorhead",},
"steadfastluck":{shortDesc: "When this Fusion Evolution flinches, its speed and critical hit ratio are raised by 1 stage.",name: "Steadfast Luck",id: "steadfastluck",},
"thunderousembers":{shortDesc: "Raises Special Attack by 1.5x when hit by a fire attack move; immunity to fire attacks.",name: "Thunderous Embers",id: "thunderousembers",},
"torrentialvoltage":{shortDesc: "Electric immunity, and when hit by an Electric-type move, this Pokemon's Electric moves gain a 50% power boost.",name: "Torrential Voltage",id: "torrentialvoltage",},
"seamonster":{shortDesc: "Lowers opponent's attack one stage upon switching in. Water-type attacks are boosted 10%.",name: "Sea Monster",id: "seamonster",},
"sereneeyes":{shortDesc: "Moves with secondary effect chances have their accuracy doubled.",name: "Serene Eyes",id: "sereneeyes",},
"fromashes":{shortDesc: "If the Pokémon is burned, it will gain 1/8 of its maximum HP at the end of each turn instead of taking damage. The Pokémon with this Ability does not lose Attack due to burn.",name: "From Ashes",id: "fromashes",},
"sturdytech":{shortDesc: "Sturdy + Technician",name: "Sturdy Tech",id: "sturdytech",},
"armoredguts":{shortDesc: "When statused, this Pokemon gains a 1.5x Attack Boost and it cannot be struck by Critical hits.",name: "Armored Guts",id: "armoredguts",},
"shakeitoff":{shortDesc: "Boosts the Special Attack stat by two stages when statused.",name: "Shake it Off",id: "shakeitoff",},
"prankstar":{shortDesc: "This pokemon's moves of 70% accuracy or less have +1 Priority, but cannot hit Dark-types.",name: "Prankstar",id: "prankstar",},
"sturdyfire":{shortDesc: "Sturdy + Flash Fire",name: "Sturdy Fire",id: "sturdyfire",},
"kindle":{shortDesc: "During hail or sun, this Pokemon's Special Attack is 1.5x and recovers 1/16 HP every turn. Stacks when both are active.",name: "Kindle",id: "kindle",},
"durablebarbs":{shortDesc: "Sturdy + Iron Barbs",name: "Durable Barbs",id: "durablebarbs",},
"rapidgrowth":{shortDesc: "Grass-type moves have their priority increased by 1, but cannot hit Dark-types.",name: "Rapid Growth",id: "rapidgrowth",},
"amazingbulk":{shortDesc: "This Pokemon receives 1/2 damage from supereffective attacks.",name: "Amazing Bulk",id: "amazingbulk",},
"chargedup":{shortDesc: "Users Special Attack is doubled.",name: "Charged Up",id: "chargedup",},
"khanqueror":{shortDesc: "Ignores type immunities while attacking",name: "Khanqueror",id: "khanqueror",},
"Synchrostall":{shortDesc: "On switch-in, this Pokemon summons Trick Room.",name: "Synchrostall",id: "Synchrostall",},
"permafrost":{shortDesc: "Immune to Fire and Ground.",name: "Permafrost",id: "permafrost",},
"heavyarmor":{shortDesc: "If a physical attack hits this Pokemon, defense is raised by 1, speed is lowered by 1.",name: "Heavy Armor",id: "heavyarmor",},
"negativebody":{shortDesc: "On switch-in, this Pokemon resets the stats of adjacent opponents by 1 stage.",name: "Negative Body",id: "negativebody",},
"stunningbug":{shortDesc: "Bug-type moves have their priority increased by 1, but cannot hit Dark-types.",name: "Stunning Bug",id: "stunningbug",},
"champion":{shortDesc: "User's Attack is 1.5x.",name: "Champion",id: "champion",},
"venomstream":{shortDesc: "Uses Toxic Spikes on switch in",name: "Venom Stream",id: "venomstream",},
"sunaura":{shortDesc: "Powers up each Pokemon's Fire-type moves by 33%.",name: "Sun Aura",id: "sunaura",},
"tropicalstorm":{shortDesc: "Tailwind on switch in",name: "Tropical Storm",id: "tropicalstorm",},
"flamedrive":{shortDesc: "If this Pokemon is struck by a Fire type move, its speed is raised by one stage. Fire type immunity.",name: "Flame Drive",id: "flamedrive",},
"boosttrace":{shortDesc: "Copies opponent's stat boosts (not drops) on switch in.",name: "Boost Trace",id: "boosttrace",},
"masochist":{shortDesc: "This Pokemon's Atk & Defense are raised by 1 stage after it is damaged by a move.",name: "Masochist",id: "masochist",},
"flamingpresence":{shortDesc: "Upon switching in, this pokemon burns all opposing pokemon that can be burned.",name: "Flaming Presence",id: "flamingpresence",},
"kaleidocope":{shortDesc: "This Pokemon receives 3/4 damage from supereffective attacks.",name: "Kaleidocope",id: "kaleidocope",},
"hazmatfur":{shortDesc: "This Pokemon takes 1/2 damage from contact and Fire moves.",name: "Hazmat Fur",id: "hazmatfur",},
"indulgence":{shortDesc: "This Pokemon's status and/or healing moves have their priority increased by 3, but do not affect Dark-types.",name: "Indulgence",id: "indulgence",},
"determination":{shortDesc: "Prevents other Pokemon from lowering this Pokemon's Attack or Special Attack stat stages.",name: "Determination",id: "determination",},
"outrageous":{shortDesc: "This Pokemon's SpA is 1.5x as long as it is confused.",name: "Outrageous",id: "outrageous",},
"woodhead":{shortDesc: "This Pokémon does not take recoil damage; when this Pokémon's HP are under 33%, the power of recoil moves is raised by 50%.",name: "Wood Head",id: "woodhead",},
"blazerush":{shortDesc: "The Pokémon's Speed is doubled when its HP falls below 1/3 of the maximum.",name: "Blaze Rush",id: "blazerush",},
"swiftretreat":{shortDesc: "This Pokemon's speed is doubled until its HP falls below 50%, then it switches out.",name: "Swift Retreat",id: "swiftretreat",},
"championsspirit":{shortDesc: "This Pokemon's Atk & Defense are raised by 1 stage after it is damaged by a move. If it is a critical hit, they raise by 3 stages instead.",name: "Champion's Spirit",id: "championsspirit",},
"beastsfocus":{shortDesc: "If PokÃ©mon would be flinched, buffs highest non-HP stat by 1 instead.",name: "Beasts Focus",id: "beastsfocus",},
"volttorrent":{shortDesc: "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Electric attacks.",name: "Volt Torrent",id: "volttorrent",},
"ancientmariner":{shortDesc: "Steelworker + No Guard.",name: "Ancient Mariner",id: "ancientmariner",},
"monkeyseemonkeydo":{shortDesc: "On switch-in, or when it can, this Pokemon copies a random adjacent foe's Ability.",name: "Monkey See Monkey Do",id: "monkeyseemonkeydo",},
"overwhelming":{shortDesc: "This Pokemon's moves ignore the immunities of the target. To any pokemon which resist the typing of this Pokemon's attack this Pokemon deals doubled damage.",name: "Overwhelming",id: "overwhelming",},
"pixielure":{shortDesc: "Prevents Fairy-types from switching out.",name: "Pixie Lure",id: "pixielure",},
"flowerpower":{shortDesc: "This Pokemon's Attack and Special Defense are 1.5x at all times.",name: "Flower Power",id: "flowerpower",},
"guerillawarfare":{shortDesc: "Attacks with 60 BP or less get a 50% power boost and have the added effect of causing the user to switch out.",name: "Guerilla Warfare",id: "guerillawarfare",},
"lightspeed":{shortDesc: "This Pokemon's Speed is doubled.",name: "Light Speed",id: "lightspeed",},
"highstakes":{shortDesc: "This Pokemon has x2.5 Attack, but x0.75 Accuracy.",name: "High Stakes",id: "highstakes",},
"fearshield":{shortDesc: "Immune to Ghost, Dark, and Bug-type moves.",name: "Fear Shield",id: "fearshield",},
"puffycloud":{shortDesc: "Negates weather effects. Powers up physical attacks by a factor of 1.5 while any weather is in play.",name: "Puffy Cloud",id: "puffycloud",},
"tinkering":{shortDesc: "This Pokemon's status moves and moves that switch the user out have +1 priority, but do not affect Dark-types. This Pokemon heals status conditions upon switching out.",name: "Tinkering",id: "tinkering",},
"bamboozled":{shortDesc: "Immune to status moves. Status moves used by this fusion have +1 priority, but cannot affect Dark-types.",name: "Bamboozled",id: "bamboozled",},
"electronrain":{shortDesc: "Sp. Atk under Rain is 1.5x. Summons Rain upon switching in.",name: "Electron Rain",id: "electronrain",},
"prestidigitation":{shortDesc: "Switches item on switch in",name: "Prestidigitation",id: "prestidigitation",},
"revvedup":{shortDesc: "Users Speed is double upon switch-in.",name: "Revved Up",id: "revvedup",},
"mistysupercharge":{shortDesc: "Summons Misty Terrain. In it, Fairy- and Electric-type moves have 1.5x power.",name: "Misty Supercharge",id: "mistysupercharge",},
"grassworker":{shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using a Grass-type attack.",name: "Grassworker",id: "grassworker",},
"bubbleslip":{shortDesc: "This Pokemon's Water power is 2x; it can't be burned; Fire power against it is halved. Using a Water-type move will switch this Pokemon out for a chosen teammate.",name: "Bubble Slip",id: "bubbleslip",},
"operationovergrow":{shortDesc: "This Pokemon's attacking stat is multiplied by 1.75 while using a Grass-type attack.",name: "Operation: Overgrow",id: "operationovergrow",},
"lightningfist":{shortDesc: "This Pokemon's punch-based attacks have their priorities increased by 1, but do not affect Dark-types.",name: "Lightning Fist",id: "lightningfist",},
"flarewings":{shortDesc: "If Burned or Paralyzed, holder tries to inflict Paralysis on any active enemies at the end of the turn.",name: "Flare Wings",id: "flarewings",},
"peckingorder":{shortDesc: "On switch-in, this Pokemon lowers the Attack of adjacent opponents by 1 stage.",name: "Pecking Order",id: "peckingorder",},
"hydrodynamic":{shortDesc: "This Pokemon's Speed increases by one stage at the end of every turn. Other Pokemon cannot decrease this Pokémon's Speed stat.",name: "Hydrodynamic",id: "hydrodynamic",},
"engineer":{shortDesc: "Teravolt + Technician.",name: "Engineer",id: "engineer",},
"soulpower":{shortDesc: "Doubles the user's Special Attack stat.",name: "Soul Power",id: "soulpower",},
"landsshield":{shortDesc: "Halves damage taken if either at full health or hit Super Effectively, both stack.",name: "Land's Shield",id: "landsshield",},
"godlikepowers":{shortDesc: "This Pokemon's Attack, Defense, Special Attack, Special Defense, and Speed are all doubled.",name: "Godlike Powers",id: "godlikepowers",},
"softenup":{shortDesc: "On switch-in, the foe's Attack and Special Attack are lowered by one stage. When this Pokémon knocks out an opponent, its Attack and Special Attack are raised by one stage.",name: "Soften Up",id: "softenup",},
"mistymind":{shortDesc: "This Pokemon ignores other Pokemon's stat stages when taking or doing damage.",name: "Misty Mind",id: "mistymind",},
"unstablevoltage":{shortDesc: "Attacks that either target this Pokémon or are used by it have perfect accuracy. Ignores abilities when attacking and attacked.",name: "Unstable Voltage",id: "unstablevoltage",},
"hugebubble":{shortDesc: "This Pokemon's Water power is 2x; it can't be burned; Fire power against it is halved. When it has 1/3 or less of its max HP, its Water power is 3x instead of 2x.",name: "Huge Bubble",id: "hugebubble",},
"ambition":{shortDesc: "This Pokemon's moves ignore screens, Aurora Veil, Substitutes, Mist, Safeguard, accuracy drops, and evasion boosts.",name: "Ambition",id: "ambition",},
"poweroftwo":{shortDesc: "This Pokemon's Attack and Speed are doubled under rain.",name: "Power of Two",id: "poweroftwo",},
"chlorocoat":{shortDesc: "This Pokemon's Speed and Defense are doubled.",name: "Chlorocoat",id: "chlorocoat",},
"photosynthesissurge":{shortDesc: "On switch-in, this Pokemon summons Sun + Grassy Terrain.",name: "Photosynthesis Surge",id: "photosynthesissurge",},
"blacksmith":{shortDesc: "Traps in Fire and Steel types, and absorbs moves of these typed to get a boost on it's Fire-Type attacks.",name: "Blacksmith",id: "blacksmith",},
"magicalice":{shortDesc: "This Pokemon cannot have stats lowered, nor can it be confused.",name: "Magical Ice",id: "magicalice",},
"codeunknown":{shortDesc: "On switch-in, this Pokemon lowers the Attack of adjacent opponents by 1 stage.",name: "Code Unknown",id: "codeunknown",},
"thermophilic":{shortDesc: "This Pokemon heals 1/4 of its max HP when hit by Fire moves; Fire immunity. It also heals 1/8 of its max HP every turn in Sun.",name: "Thermophilic",id: "thermophilic",},
"planinaction":{shortDesc: "Upon switch-in, this Pokemon's Attack is raised by one stage. When this Pokemon is active, all Dark-type moves have 1.33x power.",name: "Plan In Action",id: "planinaction",},
"enchantedskull":{shortDesc: "This Pokemon's attacks with recoil damage have 1.5x power and the recoil damage is nullified.",name: "Enchanted Skull",id: "enchantedskull",},
"thunderstormsurge":{shortDesc: "On switch-in, this Pokemon summons Rain Dance and Electric Terrain.",name: "Thunderstorm Surge",id: "thunderstormsurge",},
"movemadness":{shortDesc: "This Pokemon's moves of the following types change types and get a 1.5x power boost: Normal type moves become Ground type, Ground type moves become Electric type, Electric type moves become Steel type, -Steel type moves become Rock type and Rock type moves become Normal type.",name: "Move Madness",id: "movemadness",},
"lightarmor":{shortDesc: "Boosts defense by 1.5x when over 1/3 HP. Doubles speed when under 1/3 HP.",name: "Light Armor",id: "lightarmor",},
"cleanaura":{shortDesc: "This Pokemon is immune to major status conditions.",name: "Clean Aura",id: "cleanaura",},
"brainfreezesurge":{shortDesc: "On switch-in, this Pokemon summons Hail + Psychic Terrain.",name: "Brainfreeze Surge",id: "brainfreezesurge",},
"fattrap":{shortDesc: "Traps Pokémon of the Fire, Ice or Steel types and takes half damage from moves of those types.",name: "Fat Trap",id: "fattrap",},
"authority":{shortDesc: "This Pokemon's physical moves have increased priority, but cannot hit Dark-types.",name: "Authority",id: "authority",},
"firebgone":{shortDesc: "This Pokemon's Normal-type moves become Fairy type and have 1.5x power; Fire Immunity.",name: "Fire-B-Gone",id: "firebgone",},
"lethalleafage":{shortDesc: "This Pokemon's contact and Grass-type moves are boost 1.3x. These boosts stack.",name: "Lethal Leafage",id: "lethalleafage",},
"sandmistsurge":{shortDesc: "On switch-in, this Pokemon summons Sandstorm + Misty Terrain.",name: "Sandmist Surge",id: "sandmistsurge",},
"compactboost":{shortDesc: "If it lands a KO, +2 to Defense and +1 to other most proficient stat.",name: "Compact Boost",id: "compactboost",},
"meteorshower":{shortDesc: "This Pokemon's Normal-type moves become Rock-type and have 1.5x power. All Rock-type Pokemon on the field have +50% Special Defense.",name: "Meteor Shower",id: "meteorshower",},
"darkmatter":{shortDesc: "This Pokemon receives 1/2 damage from supereffective attacks. Immune to burn.",name: "Dark Matter",id: "darkmatter",},
"gracefulanalyst":{shortDesc: "Serene Grace + 60% power boosting Analytic",name: "Graceful Analyst",id: "gracefulanalyst",},
"underwaterscreen":{shortDesc: "While this Pokemon is active, Water and Rock-Type Pokemon Special Defense is boosted by 50%. Raises the power of Water and Rock-type moves by 50% when at 1/2 HP or less.",name: "Underwater Screen",id: "underwaterscreen",},
"mountainclimber":{shortDesc: "Speed under Hail or Sand is 4x, immunity to both.",name: "Mountain Climber",id: "mountainclimber",},
"dukeofthelightning":{shortDesc: "This Pokemon's Speed is doubled.",name: "Duke of the Lightning",id: "dukeofthelightning",},
"emperorofthefire":{shortDesc: "This Pokemon's Attack is doubled.",name: "Emperor of the Fire",id: "emperorofthefire",},
"overloadedhelm":{shortDesc: "This Pokemon's Steel and Normal-type attacks have their power multiplied 1.5x and turns them into Electric moves.",name: "Overloaded Helm",id: "overloadedhelm",},
"unrivaledclaws":{shortDesc: "This Pokemon's contact moves have their power multiplied by 1.67.",name: "Unrivaled Claws",id: "unrivaledclaws",},
"ouroboros":{shortDesc: "Upon scoring a KO or switching out, the user regains 1/3 max HP.",name: "Ouroboros",id: "ouroboros",},
"braveheart":{shortDesc: "This Pokemon receives 3/4 damage from supereffective attacks and sharply raises its Attack when hit by one.",name: "Braveheart",id: "braveheart",},
"darklight":{shortDesc: "Provides immunity to super effective attacks and heals 25% of its health instead. This Ability cannot be ignored.",name: "Dark Light",id: "darklight",},
"ancientfoliage":{shortDesc: "While this Pokemon is active, Grass and Rock-Type Pokemon Special Defense is boosted by 50%. Raises the power of Grass and Rock-type moves by 50% when at 1/2 HP or less.",name: "Ancient Foliage",id: "ancientfoliage",},
"prodigy":{shortDesc: "This Pokemon's moves of 60 power or less have 2.25x power. Includes Struggle.",name: "Prodigy",id: "prodigy",},
"toothick":{shortDesc: "This Pokemon takes half the damage from physical attacks.",name: "Too Thick",id: "toothick",},
"techfur":{shortDesc: "This Pokemon's moves of 60 power or less, including Struggle, have 2x power. Defense is doubled.",name: "Tech Fur",id: "techfur",},
"soundsoul":{shortDesc: "Attack is raised by 1 stage when hit by sound-based moves. Receives no damage from sound-based moves.",name: "Sound Soul",id: "soundsoul",},
"phasethrough":{shortDesc: "Frisk + Natural Care",name: "Phase Through",id: "phasethrough",},
"lockedshell":{shortDesc: "Immune to priority & status moves.",name: "Locked Shell",id: "lockedshell",},
"healthymeal":{shortDesc: "This Pokemon receives 3/4 damage from supereffective attacks and cannot be inflicted with any major status condition.",name: "Healthy Meal",id: "healthymeal",},
"christmasspirit":{shortDesc: "3/4 super-effective damage. Halves damage from Fire and Ice-typed moves. These stack. Cannot be bypassed by Mold Breaker or similar effects.",name: "Christmas Spirit",id: "christmasspirit",},
"scrumptious":{shortDesc: "If this Pokemon is statused, its Attack & SpA is 1.5x; ignores burn halving physical damage.",name: "Scrumptious",id: "scrumptious",},
"heatseeker":{shortDesc: "When this Pokemon is at 33.3% of its health or less, its Speed and the power of its Fire-type moves go up by 1.5x. When in rain, its speed and power of Fire moves is doubled (which essentially means that its Fire-type moves ignore the rain debuff.)",name: "Heat Seeker",id: "heatseeker",},
"bingobongo":{shortDesc: "Normal and Fighting-type moves have 1.5x power and can hit Ghost-types.",name: "Bingo Bongo",id: "bingobongo",},
"panicmode":{shortDesc: "This Pokemon's moves have +1 priority when this Pokemon is burned, paralyzed, or poisoned, but are unable to hit Dark-types. Ignores the burn Attack drop.",name: "Panic Mode",id: "panicmode",},
"positivity":{shortDesc: "This Pokemon's stat changes are amplified to 3x their normal amount.",name: "Positivity",id: "positivity",},
"fisticuffs":{shortDesc: "Punching moves get a 50% boost in power. All other contact moves get a 33% boost.",name: "Fisticuffst",id: "fisticuffs",},
"starburst":{shortDesc: "This Pokémon's moves with 60 Base Power or less or that have a secondary effect deal x1.5 damage. Secondary effects are doubled.",name: "Starburst",id: "starburst",},
"faefist":{shortDesc: "This Pokemon's punch-based attacks have 1.7x power. This Pokemon's Fairy-type moves have 1.2x power. These effects stack. Sucker Punch is not boosted.",name: "Fae Fist",id: "faefist",},
"malware":{shortDesc: "This Pokemon's Attack or Sp. Atk is raised 1 stage based on the foes' weaker Defense at the end of each full turn on the field.",name: "Malware",id: "malware",},
"nightmarefuel":{shortDesc: "Dark-type moves have 1.5x power and have a 33% chance to put the foe to sleep.",name: "Nightmare Fuel",id: "nightmarefuel",},
"snowabsorb":{shortDesc: "On switch-in, this Pokemon summons Hail.",name: "Snow Absorb",id: "snowabsorb",},
"confidenceboost":{shortDesc: "All of this {okemon's stats are raised by 1 stage if it attacks and KOes another Pokemon.",name: "Confidence Boost",id: "confidenceboost",},
"blizzardblur":{shortDesc: "Summons Hail upon switch-in. This Pokemon's Speed is doubled in and cannot be damaged by hail.",name: "Blizzard Blur",id: "blizzardblur",},
"frenzy":{shortDesc: "This Pokemon's multi-hit attacks always hit the maximum number of times and have 1.5x power.",name: "Frenzy",id: "frenzy",},
"solarpanel":{shortDesc: "This Pokemon is immune to Electric, Fire and Grass-type moves. If targetted by one, this Pokemon's Special Attack is raised by one stage, and harsh sunlight appears.",name: "Solar Panel",id: "solarpanel",},
"icescale":{shortDesc: "Halves damage taken in hail. Takes no damage from Hail.",name: "Ice Scale",id: "icescale",},
"synchscales":{shortDesc: "This Pokemon recieves 1/2 damage from attacks if it has a status condition.",name: "Synch Scales",id: "synchscales",},
"poisonshield":{shortDesc: "Takes 50% damage from attacks when HP is full. If attacked directly when HP is full, the attacker is poisoned.",name: "Poison Shield",id: "poisonshield",},
"rebel":{shortDesc: "Boosts Attack by one stage upon switch-in and by two stages for every stat drop.",name: "Rebel",id: "rebel",},
"fullsteamahead":{shortDesc: "Upon entering the field, this Pokémon sets up Rain. This Pokémon heals for 25% of its max HP per turn while Rain is active.",name: "Full Steam Ahead",id: "fullsteamahead",},
"juggernaut":{shortDesc: "Recoil-inducing moves have the added effect of boosting its Speed one stage when used. Does not take recoil damage.",name: "Juggernaut",id: "juggernaut",},
"clearfocus":{shortDesc: "Resets stat drops at the end of each turn (including self-inflicted).",name: "Clear Focus",id: "clearfocus",},
"charmstar":{shortDesc: "Moves without a secondary effect have a 20% chance to attract the opponent.",name: "Charm Star",id: "charmstar",},
"magicfat":{shortDesc: "Immune to Fire and Ice type moves as long as it holds an item. Halves damage from those moves if it's not holding an item.",name: "Magic Fat",id: "magicfat",},
"forestfire":{shortDesc: "Immunity to fire attacks; when hit by a fire move, the opponent takes 1/16th of their health.",name: "Forest Fire",id: "forestfire",},
"disconnect":{shortDesc: "The foe's same-type attack bonus (STAB) is 0.75 instead of 1.5.",name: "Dis/connect",id: "disconnect",},
"pondscum":{shortDesc: "Water-type moves have a 25% chance to flinch the foe.",name: "Pond Scum",id: "pondscum",},
"compelling":{shortDesc: "If this Pokémon's stats are lowered, its Special Attack is raised by 2 stages, and the opponent cannot switch. This ability cannot be triggered by self-inflicted stat drops.",name: "Compelling",id: "compelling",},
"stormlauncher":{shortDesc: "Boosts launching attacks by 50% in no weather. Doubles their power and doubles the user's speed in rain. Quarters their power and halves the users speed in the sun.",name: "Storm Launcher",id: "stormlauncher",},
"staticswitch":{shortDesc: "30% chance to paralyze the opponent whenever the user switches out.",name: "Static Switch",id: "staticswitch",},
"reflex":{shortDesc: "Protects the Pokémon from opposing recoil and crash moves.",name: "Reflex",id: "reflex",},
"clearpouch":{shortDesc: "If this Pokemon eats a Berry, it restores 1/3 of its max HP and clears stat drops.",name: "Clear Pouch",id: "clearpouch",},
"precision":{shortDesc: "Technician + Hustle.",name: "Precision",id: "precision",},
"sleepwalker":{shortDesc: "When hit by a sleeping move, Speed will increase by 1 stage. Immune to Sleep.",name: "Sleepwalker",id: "sleepwalker",},
"absolutezero":{shortDesc: "Biting and normal-type moves used by this Pokemon receive a 50% power boost. This Pokemon's Normal-type moves become Ice-type.",name: "Absolute Zero",id: "absolutezero",},
"taintedlens":{shortDesc: "Not very effective moves will also badly poison the target.",name: "Tainted Lens",id: "taintedlens",},
"purethug":{shortDesc: "This Pokemon cannot be statused. Should this happen, its Attack is boosted.",name: "Pure Thug",id: "purethug",},
"mysticwave":{shortDesc: "Boosts the power of Water-type moves by 50% as long as the user holds an item.",name: "Mystic Wave",id: "mysticwave",},
"titanicstrength":{shortDesc: "If this Pokemon (not its substitute) takes a critical hit, its Attack is raised 12 stages.",name: "Titanic Strength",id: "titanicstrength",},
"hygroscopy":{shortDesc: "Upon being hit by a water- or steel-type move, restores 1/4 of this Pokemon's maximum HP. Water- and steel-type opponents cannot switch out while this Pokemon is active.",name: "Hygroscopy",id: "hygroscopy",},
"wonderlust":{shortDesc: "This Pokemon is immune to status.",name: "Wonderlust",id: "wonderlust",},
"prisoncell":{shortDesc: "Prevents adjacent Dark-type foes from choosing to switch.",name: "Prison Cell",id: "prisoncell",},
"venomglare":{shortDesc: "On switch-in, the bearer poisons adjacent opponents.",name: "Venom Glare",id: "venomglare",},
"terrorize":{shortDesc: "On switch-in, the bearer poisons adjacent opponents.",name: "Terrorize",id: "terrorize",},
"clearlevitation":{shortDesc: "Immune to Ground-type attacks and non-self inflicted stat drops",name: "Clear Levitation",id: "clearlevitation",},
"grounddrive":{shortDesc: "Speed is raised by 1 when hit by a Ground-type move; Ground immunity.",name: "Ground Drive",id: "grounddrive",},
"topgear":{shortDesc: "This Pokemon is immune to electric-type attacks and has its attack raised by one stage if it would be hit by one. This Pokemon's attacks' secondary effects are converted into a 33% power boost.",name: "Top Gear",id: "topgear",},
"surgebloom":{shortDesc: "Allied Grass type Pokemon have their Grass STAB increased by x1.5 and their stats can't be lowered..",name: "Surge Bloom",id: "surgebloom",},
"unparalleledtechnique":{shortDesc: "This Pokemon imprisons adjacent targets on switch-in.",name: "Unparalleled Technique",id: "unparalleledtechnique",},
"obliterate":{shortDesc: "Deletes the opponent's item upon switch-in if it isn't a Mega Stone. The deleted item is treated as if it were knocked off, so Recycle cannot recover it.",name: "Obliterate",id: "obliterate",},
"shaggycoat":{shortDesc: "This Pokemon's defense stat is doubled. When at 1/3 HP or lower, this Pokemon's defense stat is tripled.",name: "Shaggy Coat",id: "shaggycoat",},
"clearabsorb":{shortDesc: "Whenever this Pokemon's stats would be lowered, its health is restored by up to 25% instead. This does not include self-induced stat drops.",name: "Clear Absorb",id: "clearabsorb",},
"evaporate":{shortDesc: "30% chance of healing 1/4 of its max HP instead of taking damage whenever hit by a super-effective attack.",name: "Evaporate",id: "evaporate",},
"caestus":{shortDesc: "Arm, hand, and punching moves do 20% more damage. Raise this Pokémon's Attack by two stages when this Pokemon’s stats are lowered.",name: "Caestus",id: "caestus",},
"fusionpowered":{shortDesc: "This Pokémon's STAB moves do 2x damage rather than 1.5x. Recoil and STAB moves deal 1.2x damage.",name: "Fusion Powered",id: "fusionpowered",},
"hyperprotection":{shortDesc: "This Pokemon is immune to Ground-Type moves. If a move against this Pokémon ended up on a Critical Hit, it won't affect the Pokémon.",name: "Hyper Protection",id: "hyperprotection",},
"sandslurp":{shortDesc: "Nullifies Ground- and Water-type damage to heal this Pokémon for 1/4th of its maximum health.",name: "Sand Slurp",id: "sandslurp",},
"sandystorm":{shortDesc: "The user summons a sandstorm, and while the user is in a sandstorm, all moves used by all pokemon cost double PP.",name: "Sandy Storm",id: "sandystorm",},
"hotairballoon":{shortDesc: "Immune to Ground type attacks. If the opponent attempts to use a Ground-type attack on this pokemon, the attacker is burned.",name: "Hot Air Balloon",id: "hotairballoon",},
"fatalgrace":{shortDesc: "If those with this ability are poisoned, they recover HP every turn and have secondary effect chances multiplied by 2.5.",name: "Fatal Grace",id: "fatalgrace",},
"meangirl":{shortDesc: "Raises Attack by 1 stage whenever a Pokemon of the same gender enters battle. This also triggers when switching in on such a Pokemon.",name: "Mean Girl",id: "meangirl",},
"serenesurge":{shortDesc: "Upon switching in, set Psychic Terrain. During this Psychic Terrain, all affected Pokemon's moves have their secondary effect chances doubled.",name: "Serene Surge",id: "serenesurge",},
"ashestoashes":{shortDesc: "When this Pokémon is below 33.3% health, the Base Power and secondary effect chance of moves with secondary effects are doubled.",name: "Ashes to Ashes",id: "ashestoashes",},
"beastbarbs":{shortDesc: "When hit by direct contact,the Pokémon's highest non-HP stat is boosted by one stage.",name: "Beast Barbs",id: "beastbarbs",},
"subdue":{shortDesc: "Lowers the opponent's highest stat by one, and boosts that same stat by one on yourself upon switch-in.",name: "Subdue",id: "subdue",},
"sunbath":{shortDesc: "Under Sun or Rain, Speed is doubled and regains 1/8 of max health at the end of the turn. Ignores Sun's Water Debuff.",name: "Sun Bath",id: "sunbath",},
"pixiegrace":{shortDesc: "Normal-Type moves become Fairy, Moves with secondary effects have the chance of the effects happening doubled, and both Normal-Type and Moves with secondary effect gain a 1.2x boost.",name: "Pixie Grace",id: "pixiegrace",},
"turborise":{shortDesc: "This Pokemon is immune to Ground; Gravity/Ingrain/Smack Down/Iron Ball nullify it.",name: "Turborise",id: "turborise",},
"queenscommand":{shortDesc: "Priority moves won't work against this Pokémon. Attempts to do so result in +1 to its Attack.",name: "Queen's Command",id: "queenscommand",},
"soulforgeddiamond":{shortDesc: "This Pokemon receives 0.667x damage from supereffective attacks.",name: "Soulforged Diamond",id: "soulforgeddiamond",},
"slowsurge":{shortDesc: "Summons Trick Room for 5 turns upon entering the field; if Trick Room is already active when the holder is switched in, it will disappear from the field.",name: "Slow Surge",id: "slowsurge",},
"petrify":{shortDesc: "Soundproof + Intimidate.",name: "Petrify",id: "petrify",},
"triggered":{shortDesc: "Heals 1/4 of its max HP from Psychic-type moves and 1/8 of its max HP in Psychic Terrain; Psychic immunity. Takes 1.25x damage from Dark-type moves.",name: "Triggered",id: "triggered",},
"sharpshooter":{shortDesc: "This Pokemon's attacks always result in a critical hit, but use 2 PP instead of 1.",name: "Sharpshooter",id: "sharpshooter",},
"rubberup":{shortDesc: "When this Pokemon has a stat lowered by the foe, +2 Special Attack. If an opponent faints, the holder gets +1 Special Attack, +2 if the foe had a lowered stat upon death. Multiple stats lowered do not stack.",name: "Rubber Up",id: "rubberup",},
"shadowguard":{shortDesc: "Immune to attacking moves while at full HP.",name: "Shadow Guard",id: "shadowguard",},
"spiralflames":{shortDesc: "Stat boosts and drops are inverted on this Pokémon and ignored on the opponent.",name: "Spiral Flames",id: "spiralflames",},
"pixieabsorb":{shortDesc: "This Pokemon heals 1/4 of its max HP when hit by Fairy moves; Fairy immunity.",name: "Pixie Absorb",id: "pixieabsorb",},
"peerpressure":{shortDesc: "The opponent's highest non-HP stat is halved.",name: "Peer Pressure",id: "peerpressure",},
"rhythm":{shortDesc: "At the end of every turn, Darmin switches from Darmin-Up to Darmin-Down, or vice versa.",name: "Rhythm",id: "rhythm",},
"magicalwand":{shortDesc: "Critical hit ratio is raised by one stage. Transforms into Star-Butterfly after it gets a critical hit. In butterfly form, critical hit ratio is raised by two stages.",name: "Magical Wand",id: "magicalwand",},
"medicalexpert":{shortDesc: "This Pokemon's moves have 1.3x the power when inflicted with a status condition or when it moves last. These bonuses do not stack.",name: "Medical Expert",id: "medicalexpert",},
"badinfluence":{shortDesc: "When the user switches in, all opponents on the field have their stat changes inverted.",name: "Bad Influence",id: "badinfluence",},
"scout":{shortDesc: "Exits the battle if it senses that the opposing Pokemon has super effective or OHKO moves.",name: "Scout",id: "scout",},
"rejuvenation":{shortDesc: "Every time this Pokemon KOs another Pokemon, it heals 33% of it's HP. If this Pokemon is at full health, it's highest non-HP stat will be increased by 1 stage instead.",name: "Rejuvenation",id: "rejuvenation",},
"forcedrain":{shortDesc: "While this Pokemon is active, attacks with secondary effects used by adjacent foes have 0.75x power and the secondary effects are nullified.",name: "Force Drain",id: "forcedrain",},
"foundation":{shortDesc: "This Pokemon's STAB bonus is 2x rather than 1.5x. When this Pokemon is at or below half of its maximum HP, this Pokemon transforms into Zeeeee-Complete. Zeeeee-Complete's STAB bonus becomes 2.33x rather than 2x.",name: "Foundation",id: "foundation",},
"barbsboost":{shortDesc: "When defeating an opponent or when touched by a contact move, boost the user's highest non-HP stat by one stage. An attacker loses 1/8 HP when using a contact move on this Pokémon.",name: "Barbs Boost",id: "barbsboost",},
"atmosphericpull":{shortDesc: "Summons Gravity upon switch-in.",name: "Atmospheric Pull",id: "atmosphericpull",},
"trickyglare":{shortDesc: "Status moves have +1 priority, but do not affect Dark-types. If the opposing Pokemon attempts to use status moves, the move will fail and their attack will drop by 1 stage.",name: "Tricky Glare",id: "trickyglare",},
"confiscation":{shortDesc: "Any Pokemon that tries to switch out on it will lose its item as a result.",name: "Confiscation",id: "confiscation",},
"statharvesting":{shortDesc: "When this Pokemon uses it's berry, it has a 50% chance to immediately re-gain it's berry. Every time this happens, this Pokemon's highest non-HP stat goes up by 1. The chance goes up to 100% in the sun. Berries cannot be harvested twice in one turn.",name: "Stat Harvesting",id: "statharvesting",},
"familiarmaneuvering":{shortDesc: "This Pokemon's STAB moves have +1 priority (including status moves that would be STAB), but do not affect Dark-types.",name: "Familiar Maneuvering",id: "familiarmaneuvering",},
"powersurge":{shortDesc: "Higher crit ratio. Immune to Electric-type moves. When hit by one, next attack is a guaranteed crit.",name: "Power Surge",id: "powersurge",},
"sheerfat":{shortDesc: "This Pokemon's attacks with secondary effects have their power multiplied 1.3x and have their effects nullified. This Pokemon takes half the damage it would normally have taken from moves with secondary effects.",name: "Sheer Fat",id: "sheerfat",},
"oceanshield":{shortDesc: "When at full HP, the holder takes half damage from moves; when the holder is hit by a non-status move while at full HP, the power of its Water-type moves is boosted by 50%.",name: "Ocean Shield",id: "oceanshield",},
"persistentmorale":{shortDesc: "Takes 50% less damage from Fire, Ice, and Dark-type moves. If hit by a move of said types, Attack is raised by one stage.",name: "Persistent Morale",id: "persistentmorale",},
"dazzlebeast":{shortDesc: "Priority moves won't work against this Pokémon. Attempts to do so result in +1 to its highest non-HP stat.",name: "Dazzle Beast",id: "dazzlebeast",},
"contagiousyawn":{shortDesc: "On switch-in, the opposing Pokemon's ability is changed to Truant.",name: "Contagious Yawn",id: "contagiousyawn",},
"enchanted":{shortDesc: "Immune to Fairy and Ground moves. This Pokemon's Normal type moves become Fairy type and have 1.2x power.",name: "Enchanted",id: "enchanted",},
"magicsponge":{shortDesc: "The Pokémon only takes damage from attacks. If indirect damage or a water-type attack is used on it, it will health 25% of its life instead.",name: "Magic Sponge",id: "magicsponge",},
"groundleecher":{shortDesc: "Wielder is inmune to Ground-type attacks and it heals 1/3 of its maximum HP when hit by a ground attack and on switching out.",name: "Ground Leecher",id: "groundleecher",},
"bloodthirst":{shortDesc: "This Pokemon's Attack and the highest stat is raised by 1 if it attacks and KOes another Pokemon.",name: "Bloodthirst",id: "bloodthirst",},
"electrotorrent":{shortDesc: "When this Pokemon enters the field, the opposing Pokemon is paralyzed and rain is set up for 5 turns.",name: "Electrotorrent",id: "electrotorrent",},
"darksurge":{shortDesc: "On switch-in, this Pokemon summons Dark Terrain.",name: "Dark Surge",id: "darksurge",},
"blazingbeast":{shortDesc: "Gets a Flash Fire boost when this Pokémon takes out another.",name: "Blazing Beast",id: "blazingbeast",},
"jailbreak":{shortDesc: "If this Pokemon is holding an item, its speed and the power of its Dark-type moves are 1.33x. If it is not holding an item, its speed and the power of its Dark-type moves are doubled.",name: "Jailbreak",id: "jailbreak",},
"paralyzedwithfear":{shortDesc: "If the opponent is paralyzed, they lose 1/8 of their HP each turn.",name: "Paralyzed With Fear",id: "paralyzedwithfear",},
"flipout":{shortDesc: "This Pokémon's multi-strike moves hit the maximum amount of times and deal 33% extra damage. Such moves also heal this Pokémon for 33% of the damage dealt.",name: "Flip Out",id: "flipout",},
"lastnightmare":{shortDesc: "When this Pokemon faints, the opponent is damaged for 25% of their max HP and falls asleep.",name: "Last Nightmare",id: "lastnightmare",},
"adaptingabsorption":{shortDesc: "This Pokemon is immune to an attacker's STAB moves. When hit by one, it restores 50% of its HP.",name: "Adapting Absorption",id: "adaptingabsorption",},
"brilliantbrightness":{shortDesc: "Resets foe's stat changes upon switch in. This pokémon cannot have it's status lowered by external means, and doing so will reduce the foe's attack by one stage.",name: "Brilliant Brightness",id: "brilliantbrightness",},
"recoveryshield":{shortDesc: "Shadow Shield + Regenerator.",name: "Recovery Shield",id: "recoveryshield",},
"airbornelighting":{shortDesc: "This Pokemon draws Electric & Ground moves to itself to raise Sp. Atk by 1; Electric & Ground immunity.",name: "Airborne Lighting",id: "airbornelighting",},
"sonar":{shortDesc: "Immune to sound based and Ground-type moves.",name: "S.O.N.A.R",id: "sonar",},
"threateningglare":{shortDesc: "If another Pokémon's attack brings it down past 50% of its HP, that Pokémon is forced out.",name: "Threatening Glare",id: "threateningglare",},
"diamondshield":{shortDesc: "While this Pokemon is active, Rock type Pokemon receive 3/4 damage from all attacks.",name: "Diamond Shield",id: "diamondshield",},
"sunsteelskin":{shortDesc: "Immune to Water and Fire. Unaffected by stat drops (that aren't self-inflicted). If hit by a Water or Fire move, or when it would have a stat lowered, recovers 25% of its max HP. Heals 12.5% of its max HP every turn that it's in Sun. This ability cannot be bypassed.",name: "Sunsteel Skin",id: "sunsteelskin",},
"mudabsorb":{shortDesc: "This Pokemon heals 1/4 of its max HP when hit by Water & Ground moves; Water & Ground immunity.",name: "Mud Absorb",id: "mudabsorb",},
"fluffyfur":{shortDesc: "This Pokemon takes 1/2 damage from contact moves, 2x damage from Fire moves. Doubled Defense.",name: "Fluffy Fur",id: "fluffyfur",},
"laserbeam":{shortDesc: "Steel-types lose 25% of their HP when switching out.",name: "Laser Beam",id: "laserbeam",},
"magnumopus":{shortDesc: "This Pokémon's stat boosts are inverted. This Pokémon's super-effective attacks deal 25% more damage.",name: "Magnum Opus",id: "magnumopus",},
"adaptiveeye":{shortDesc: "This Pokemon's STAB moves have perfect accuracy.",name: "Adaptive Eye",id: "adaptiveeye",},
"aquabooster":{shortDesc: "Whenever this pokemon get hit with a water type move or scores a KO, the highest non-hp stat get boosted by a stage and recover ¼ of its max hp. Also has a water immunity.",name: "Aqua Booster",id: "aquabooster",},
"gracefulexit":{shortDesc: "When this Pokemon switches out, the opponent flinches.",name: "Graceful Exit",id: "gracefulexit",},
"coldbody":{shortDesc: "30% chance a Pokemon making contact with this Pokemon will be frozen.",name: "Cold Body",id: "coldbody",},
"dangerousaddiction":{shortDesc: "When this pokemon is hit by a move, the move's user lose an equal amount of HP.",name: "Dangerous Addiction",id: "dangerousaddiction",},
"rootrum":{shortDesc: "This Pokemon is immune to Ground and Grass-type moves.",name: "Root Rum",id: "rootrum",},
"healinghell":{shortDesc: "Heals 1/8th of this pokemon health at the end of each turn. If poisoned, ignore poison damage and heals another 1/8th at the end of each turn (for a total of 1/4).",name: "Healing Hell",id: "healinghell",},
"Shattered Prism":{shortDesc: "This Pokemon receives 3/4 damage from supereffective attacks and deals 1.75x damage with resisted hits. Ignores abilities when attacking.",name: "Shattered Prism",id: "Shattered Prism",},
"firewall":{shortDesc: "Upon switch-in, this Pokemon sets up Reflect or Light Screen depending on the opponent's higher Attacking stat. If they are tied, this Pokemon sets up Aurora Veil.",name: "Firewall",id: "firewall",},
"solarsnow":{shortDesc: "On switch-in, this Pokemon summons a combination of Sun and Hail.",name: "Solar Snow",id: "solarsnow",},
"beastguard":{shortDesc: "Boosts this Pokemon's highest stat instead of taking indirect damage.",name: "Beast Guard",id: "beastguard",},
"hardenedbody":{shortDesc: "This Pokemon receives 3/4 damage from supereffective attacks and gets boosted all it's stats when hit by one.",name: "Hardened Body",id: "hardenedbody",},
"friskybeast":{shortDesc: "Upon switchin, identifies the highest invested stat of the opponent and boosts its corresponding stat by one stage.",name: "Frisky Beast",id: "friskybeast",},
"uninhabitable":{shortDesc: "Prevents Grass-type moves while this Pokemon is active.",name: "Uninhabitable",id: "uninhabitable",},
"crushing":{shortDesc: "Recoil from moves used against this Pokemon is doubled.",name: "Crushing",id: "crushing",},
"gtolerance":{shortDesc: "This Pokemon is immune to moves with 1/2 or less of their PP remaining.",name: "G-Tolerance",id: "gtolerance",},
"aeroform":{shortDesc: "Changes type and ability for the rest of the battle to account for the weather, which will be summoned by the new ability.",name: "Aeroform",id: "aeroform",},
"therapeutic":{shortDesc: "This Pokemon is healed by 1/8 of its max HP each turn when statused; Statuses are ignored.",name: "Therapeutic",id: "therapeutic",},
"recklessbody":{shortDesc: "The bearer's attacks with recoil or crash damage have 1.1x power and have no recoil/crash damage.",name: "Reckless Body",id: "recklessbody",},
"weatherfront":{shortDesc: "Changes holder's secondary type in weather and buffs allies' Special stats.",name: "Weather Front",id: "weatherfront",},
"justiceillusion":{shortDesc: "This Pokemon appears as the last Pokemon in the party until it takes direct damage from a non-Dark-type attack.",name: "Justice Illusion",id: "justiceillusion",},
"steamsauna":{shortDesc: "If the opponent uses a Water-type move, this Pokemon restores 25% of its HP and 30% chance to burn each opponent; Water immunity.",name: "Steam Sauna",id: "steamsauna",},
"smokebody":{shortDesc: "Damages the opposing Pokemon for 1/8 of its HP at the end of each turn while it is asleep or if it tries to lower Dank's stats, stats cannot be lowered.",name: "Smoke Body",id: "smokebody",},
"strikeandpass":{shortDesc: "All moves at 60 base power or below get boosted by x1.5 and gain a U-Turn switching effect.",name: "Strike and Pass",id: "strikeandpass",},
"poisonveil":{shortDesc: "Can't have stats lowered nor can be statused; Poison is inflicted on whoever tries to inflict either on the holder.",name: "Poison Veil",id: "poisonveil",},
"thermogenesis":{shortDesc: "This Pokemon has the resistances of fire types.",name: "Thermogenesis",id: "thermogenesis",},
"echo":{shortDesc: "This Pokemon is immune to sound moves. Whenever a Pokemon uses a sound move, it repeats that move right after.",name: "Echo",id: "echo",},
"carelessforce":{shortDesc: "If this pokemon is holding an item, the item does nothing and this pokemon gets a 1.5x boost to physical moves.",name: "Careless Force",id: "carelessforce",},
"photosyntheticgrace":{shortDesc: "If Sunny Day is active, this Pokemon's stats are doubled. In any other weather, this Pokemon's stats are quartered.",name: "Photosynthetic Grace",id: "photosyntheticgrace",},
"completelyserious":{shortDesc: "Moves of 60BP or less deal x1.5 damage. With an item, Speed is doubled and the damage multiplier for the aforementioned moves hits x3 instead.",name: "Completely Serious",id: "completelyserious",},
"minefield":{shortDesc: "If the opponent uses a Ground-type move against this Pokemon, it becomes trapped; Ground immunity.",name: "Mine Field",id: "minefield",},
"greekfire":{shortDesc: "Immune to fire type moves. If hit by one, its own fire attacks are boosted by 1.5 and the opponent loses 1/8 max HP.",name: "Greek Fire",id: "greekfire",},
"grassyheal":{shortDesc: "Activates Grassy Terrain for 5 turns when the Pokemon enters a battle. HP is restored by 1/8th of the maximum HP every turn while Grassy Terrain is active. Immune to Poison under Grassy Terrain.",name: "Grassy Heal",id: "grassyheal",},
"dragonhide":{shortDesc: "Deals 1/8 recoil to the opponent whenever this Pokemon is statused. Status effects are removed upon switching out.",name: "dragonhide",id: "dragonhide",},
"choochoo":{shortDesc: "Removes Burn status every other turn. Immune to Burns on the turn Burn is removed.",name: "Choo Choo",id: "choochoo",},
"tollbooth":{shortDesc: "Pokemon that switch out while this Pokemon is active have their held item removed. If this Pokemon is not holding an item, it gains the removed item.",name: "Toll Booth",id: "tollbooth",},
"eyeofhorus":{shortDesc: "Technician + Inner Focus",name: "Eye of Horus",id: "eyeofhorus",},
"insidioustentacles":{shortDesc: "If this Pokemon lands or is hit by a contact move, the other Pokemon's highest stat is decreased by 1 stage and it gets trapped.",name: "Insidious Tentacles",id: "insidioustentacles",},
"burningheart":{shortDesc: "Special Attack is raised by 1 stage if this Pokemon is hit with a Fire-type attack or scores a KO. Immunity to Fire-type attacks and burns.",name: "Burning Heart",id: "burningheart",},
"ogresswamp":{shortDesc: "Poison heals user by 1/4 HP each turn. Secondary effects of moves are replaced with a 100% chance to badly poison the foe.",name: "Ogre's Swamp",id: "ogresswamp",},
"contrabubble":{shortDesc: "Reverses the effectiveness of Fire and Water attacks on all active Pokemon, and the effects of burn on this Pokemon.",name: "Contra-Bubble",id: "contrabubble",},
"brokenheart":{shortDesc: "Soul-Heart + Pressure",name: "Broken Heart",id: "brokenheart",},
"lazycamo":{shortDesc: "This Pokemon is under the effects of Protean every other turn.",name: "Lazy Camo",id: "lazycamo",},
"fungalshield":{shortDesc: "If this Pokemon is at full HP, damage taken from attacks is halved. Inflicts a status if a contact move breaks the shield.",name: "Fungal Shield",id: "fungalshield",},
"normalizedenemy":{shortDesc: "If this Pokemon is active, then enemies' moves will turn Normal-type.",name: "Normalized Enemy",id: "normalizedenemy",},
"manapotion":{shortDesc: "Powers up Fairy-type moves by 33%. When an item is consumed, the power of Fairy-type moves is doubled instead.",name: "Mana Potion",id: "manapotion",},
"piercinggaze":{shortDesc: "Immune to secondary effects. Any move that would otherwise have one uses up 2PP instead of 1.",name: "Piercing Gaze",id: "piercinggaze",},
"pressuredinnards":{shortDesc: "If this Pokémon is KOed with a move, that move loses all its PP.",name: "Pressured Innards",id: "pressuredinnards",},
"extremist":{shortDesc: "If it KOs another Pokemon, this Pokemon gets +2 to its highest stat and -1 to its lowest.",name: "Extremist",id: "extremist",},
"quarantine":{shortDesc: "Attacks against this Pokémon use one extra PP. This Pokémon cannot be inflicted with status conditions.",name: "Quarantine",id: "quarantine",},
"blazingcontrary":{shortDesc: "Inverts stat changes that happen to the user, but only if the Pokémon's HP is above 1/3 of it's HP.",name: "Blazing Contrary",id: "blazingcontrary",},
"optimize":{shortDesc: "Secondary typing and Normal-type moves change to match its plate or Z-Crystal. Moves that would otherwise be Normal-type have 1.2x power.",name: "Optimize",id: "optimize",},
"tetraforce":{shortDesc: "This Pokemon's attacks with secondary effects have 1.3x power and ignores abilities; nullifies the effects.",name: "Tetra Force",id: "tetraforce",},
"torrenttempo":{shortDesc: "Instead of being confused, this Pokémon gets a 50% boost to its Water-type moves.",name: "Torrent Tempo",id: "torrenttempo",},
"torrentialrage":{shortDesc: "At half HP gets a 50% boost to Water moves that lasts even once outside of that range or through Mega Evolution.",name: "Torrent Rage",id: "torrentialrage",},
"flutteringheart":{shortDesc: "After another Pokemon uses a special attack, this pokemon uses the same move. Special Attack is raised by one stage after knocking out an opponent.",name: "Fluttering Heart",id: "flutteringheart",},
"vexingvalor":{shortDesc: "Halves all of this Pokemon's moves' PP upon switch-in, but raises Attack by two stages.",name: "Vexing Valor",id: "vexingvalor",},
"fearless":{shortDesc: "The priority of all the user's Flying type attacks are at +1, as long as its attack is not lowered.",name: "Fearless",id: "fearless",},
"limbenhancers":{shortDesc: "This Pokemon's Defense and other highest stat cannot be lowered, instead being raised by 1. The latter is also raised by 1 if it attacks and KOes another Pokemon.",name: "Limb Enhancers",id: "limbenhancers",},
"mirrormirror":{shortDesc: "On switch-in, the opponent transforms into it.",name: "Mirror Mirror",id: "mirrormirror",},
"voltboost":{shortDesc: "Teravolt + Speed Boost.",name: "Volt Boost",id: "voltboost",},
"nightterror":{shortDesc: "No Guard + Bad Dreams.",name: "Night Terror",id: "nightterror",},
"mercilessbeast":{shortDesc: "If it lands a hit on a poisoned Pokémon, its most proficient stat goes up by 1.",name: "Merciless Beast",id: "mercilessbeast",},
"ability":{shortDesc: "This Pokemon's Fire-type moves have their power and PP consumption doubled.",name: "Ability",id: "ability",},
"typetrap":{shortDesc: "Prevents adjacent foes from choosing to switch if they match the type of a held Plate/Z-Crystal.",name: "Type Trap",id: "typetrap",},
"constellation":{shortDesc: "Contact Moves used by the holder don't make contact; whenever the holder uses a contact move, its status is cured.",name: "Constellation",id: "constellation",},
"lavadive":{shortDesc: "Power of Fire-type moves alternates between x1.5 and x0.5 when it attacks.",name: "Lava Dive",id: "lavadive",},
"disguiseburden":{shortDesc: "The first hit this Pokemon takes in battle deals 0 neutral damage and doubles its Speed.",name: "Disguise Burden",id: "disguiseburden",},
"twofaced":{shortDesc: "All stats except for the highest have inverted stat changes. The highest stat is boosted whenever this Pokemon lands a KO or has a different stat changed. If two stats tie, both stats are ignored in the boost reversal.",name: "Two-Faced",id: "twofaced",},
"genometree":{shortDesc: "This Pokemon can hit Ghost types with Normal- and Fighting-type moves. If it does so or hits a boosted Pokemon with such a move, boosts its highest stat. Normal- and Fighting-type moves ignore stat changes.",name: "Genome Tree",id: "genometree",},
"blessedprotection":{shortDesc: "Infiltrator effects + when a move break this Pokémon’s substitute, that move gets disabled until the target switches out.",name: "Blessed Protection",id: "blessedprotection",},
"gutsybeast":{shortDesc: "If this Pokemon is statused, its highest stat is 1.5x; Ignores status-based reductions to this stat.",name: "Gutsy Beast",id: "gutsybeast",},
"auraoffailure":{shortDesc: "Halves Attack and Special Attack of all Pokemon on the field at 50% max HP or less.",name: "Aura of Failure",id: "auraoffailure",},
"slownsteady":{shortDesc: "This Pokemon takes 1/2 damage from attacks if it moves last.",name: "Slow 'n' Steady",id: "slownsteady",},
"chainheal":{shortDesc: "Upon switching out, this Pokemon is healed for 1/3 of its max HP. Its replacement's ability is then replaced with Chain Heal.",name: "Chain Heal",id: "chainheal",},
"360noscope":{shortDesc: "All of this Pokémon's attacking moves strike for a critical hit. Crit power is 2*.",name: "360 No-Scope",id: "360noscope",},
"agelessblizzard":{shortDesc: "On switch-in, hail starts and only ends when this Ability is not active in battle.",name: "Ageless Blizzard",id: "agelessblizzard",},
"deceiver":{shortDesc: "Inverts SpA changes. Boosts this stat if it lands a KO.",name: "Deceiver",id: "deceiver",},
"stanceshield":{shortDesc: "If Minislash, changes Forme to Blade before attacks and Meteor before King's Shield.",name: "Stance Shield",id: "stanceshield",},
"staredown":{shortDesc: "This Pokemon skips every other turn instead of using a move, but lowers opponents' Attack in doing so.",name: "Stare Down",id: "staredown",},
"dirtnap":{shortDesc: "The Evasion stats of the opponents are ignored.",name: "Dirt Nap",id: "dirtnap",},
"quicktrap":{shortDesc: "Prevents adjacent foes from choosing to switch unless they are Electric-type.",name: "Quick Trap",id: "quicktrap",},
"teraarmor":{shortDesc: "Moves targeting this Pokémon are unaffected by the Ability of the move user.",name: "Tera Armor",id: "teraarmor",},
"turbocurse":{shortDesc: "Moves targeting this Pokémon are unaffected by the Ability of the move user.",name: "Turbo Curse",id: "turbocurse",},
"melodyoftheheart":{shortDesc: "Recovers 33% of max HP upon switching out, or at the end of every turn in Hail. Takes no Hail damage.",name: "Melody of the Heart",id: "melodyoftheheart",},
"mixtape":{shortDesc: "If hit by a Fire-type or Sound-based move, the Pokemon's own moves of that sort are powered up. Immune to both. ",name: "Mix Tape",id: "mixtape",},
"beastroar":{shortDesc: "Lowers the foe’s highest stat by 1 stage.",name: "Beast Roar",id: "beastroar",},
"sturdymold":{shortDesc: "This Pokemon cannot be KO'd in one hit, and the abilities of attacking Pokemon are nullified.",name: "Sturdy Mold",id: "sturdymold",},
"unamazed":{shortDesc: "Moves used by and against this Pokémon ignore the foe’s ability and stat changes.",name: "Unamazed",id: "unamazed",},
"jealousaggressor":{shortDesc: "Deals double damage to Pokemon not holding an item.",name: "Jealous Aggressor",id: "jealousaggressor",},
"snowsucker":{shortDesc: "Summons hail upon switch-in; This Pokemon heals 1/4 of its max HP and summons hail when hit by Electric moves or under hail; Immune to both.",name: "Snow Sucker",id: "snowsucker",},
"hailveil":{shortDesc: "Cannot be burned. Sets up Hail if it would otherwise be burned, and heals 6.25% of HP in that weather.",name: "Hail Veil",id: "hailveil",},
"veteran":{shortDesc: "Sniper + Merciless, with the addition that if it crits a non-poisoned mon, the target will get poisoned.",name: "Veteran",id: "veteran",},
"lighteninglightning":{shortDesc: "When this Pokemon consumes its held item, its speed is doubled. Also restores 25% of its max HP when hit by an Electric-type move or when consuming its held item.",name: "Lightening Lightning",id: "lighteninglightning",},
"technologicalarmor":{shortDesc: "Attacks with a BP of 60 or less that target the user have their power halved.",name: "Technological Armor",id: "technologicalarmor",},
"solidsand":{shortDesc: "On switch-in, this Pokemon summons Sandstorm. It cannot be OHKO'd in clear skies, and summons Sandstorm if this would happen.",name: "Solid Sand",id: "solidsand",},
"ambulance":{shortDesc: "This Pokemon cannot be statused, sharply raising Speed if this happens. Doubles Speed upon use of item.",name: "Ambulance",id: "ambulance",},
"temporaryguard":{shortDesc: "The user is immune to non-super-effective attacks for the first 5 turns after it is sent out.",name: "Temporary Guard",id: "temporaryguard",},
"synchroveil":{shortDesc: "If another Pokemon burns/poisons/paralyzes this Pokemon, the status is transferred onto that Pokemon.",name: "Synchro Veil",id: "synchroveil",},
"pressuratefried":{shortDesc: "Post Pressurate ability.",name: "Pressurate Fried",id: "pressuratefried",},
"pressurate":{shortDesc: "Opponent's moves' PPs are halved when this Pokémon enters the field.",name: "Pressurate",id: "pressurate",},
"metalmonster":{shortDesc: "This Pokemon's Steel-type moves deal 1.5x damage and if this Pokemon gets a KO with a Steel-type move, its highest non-HP stat goes up by 2 stages.",name: "Metal Monster",id: "metalmonster",},
"magicmirror":{shortDesc: "Non-damaging moves and Dark-type moves targeting this Pokemon increase its Attack by 1 stage and are reflected back to the opponent.",name: "Magic Mirror",id: "magicmirror",},
"beautifulobliterationweapon":{shortDesc: "On switch-in, this Pokemon summons Beautiful Terrain, which powers up Fire- and Fairy-type moves and burns anything that can be burned. Contact can inflict burn.",name: "Beautiful Obliteration Weapon",id: "beautifulobliterationweapon",},
"advocatescale":{shortDesc: "Weaknesses become resistances, and resistances become weaknesses.",name: "Advocate Scale",id: "advocatescale",},
"inversearmor":{shortDesc: "Type effectiveness in moves that target or are used by this Pokemon is inverted.",name: "Inverse Armor",id: "inversearmor",},
"mentalfear":{shortDesc: "Always appear as full health to the opponent.",name: "Mental Fear",id: "mentalfear",},
"magicworker":{shortDesc: "Indirect damage powers up this Pokemon's attacks and is nullified.",name: "Magicworker",id: "magicworker",},
"poisonpores":{shortDesc: "Doubles the speed of all active Poison- and Steel-types, and halves the speed of all active poisoned Pokemon.",name: "Poison Pores",id: "poisonpores",},
"paudancer":{shortDesc: "After another Pokemon uses a dance move or a Psychic-type move, this Pokemon uses the same move.",name: "Pa'u Dancer",id: "paudancer",},
"pompomdancer":{shortDesc: "After another Pokemon uses a dance move or an Electric-type move, this Pokemon uses the same move.",name: "Pom-Pom Dancer",id: "pompomdancer",},
"bailedancer":{shortDesc: "After another Pokemon uses a dance move or a Grass-type move, this Pokemon uses the same move.",name: "Baile Dancer",id: "bailedancer",},
"sensudancer":{shortDesc: "After another Pokemon uses a dance move or a Fairy-type move, this Pokemon uses the same move.",name: "Sensu Dancer",id: "sensudancer",},
"radioactivesurge":{shortDesc: "On switch-in, this Pokemon summons Radioactive Terrain, which powers up Electric- and Poison-type moves and poisons anything that can be poisoned. Contact can inflict poison.",name: "Radioactive Surge",id: "radioactivesurge",},
"zeroawareness":{shortDesc: "Increases power of moves with secondary effects by 30%. Ignores the opponent's stat boosts and their moves' secondary effects.",name: "Zero Awareness",id: "zeroawareness",},
"ravage":{shortDesc: "This Pokémon's moves always crit and it cannot be critted.",name: "Ravage",id: "ravage",},
"noimmigrants":{shortDesc: "If a Pokémon switches in, this Pokémon's highest stat is raised by one, and if the Pokémon is knocked out, this Pokémon receives another +1 boost to its highest stat.",name: "NO IMMIGRANTS",id: "noimmigrants",},
"dramaticrage":{shortDesc: "This Pokémon's Special Attacks with secondary effects are boosted by 1.5* and have their secondary effects removed. When this Pokémon is below half health, this rises to 2*. Also removes Life Orb recoil.",name: "Dramatic Rage",id: "dramaticrage",},
"nautralcurse":{shortDesc: "This Pokemon restores 1/3 of its maximum HP, rounded down, when it switches out.",name: "Nautral Curse",id: "nautralcurse",},
"thehiddenone":{shortDesc: "Pokemon making contact with this Pokemon have their Ability changed to Mummy.",name: "The Hidden One",id: "thehiddenone",},
"compoundpressure":{shortDesc: "Doubles accuracy, but moves with less than 100 accuracy will use up 2 PP rather than 1.",name: "Compound Pressure",id: "compoundpressure",},
"sanddreams":{shortDesc: "Opposing sleeping Pokemon take sandstorm chip damage while on the field with this Pokemon.",name: "Sand Dreams",id: "sanddreams",},
"horsetailarmor":{shortDesc: "Multi-strike attacks always hit the maximum number of times. This Pokemon is immune to moves and entry hazards of the same type as any multi-strike moves it knows, as long as it is holding an item.",name: "Horsetail Armor",id: "horsetailarmor",},
"sandpressure":{shortDesc: "Opponent's moves' PPs are halved when this Pokémon and Sandstorm become active simultaneously.",name: "Sand Pressure",id: "sandpressure",},
"sheerflight":{shortDesc: "During the turn that a move with a secondary effect was used by this Pokemon, it is immune to ground and takes no Life Orb recoil.",name: "Sheer Flight",id: "sheerflight",},
"powerforward":{shortDesc: "Moves with a chance to flinch heal this Pokémon for 12.5% of its HP.",name: "Power Forward",id: "powerforward",},
"weathercaster":{shortDesc: "While this Pokemon is active, its secondary type changes.",name: "Weather Caster",id: "weathercaster",},
"victorysystem":{shortDesc: "Holding a Memory changes this Pokemon's primary type and multiplies its accuracy by 1.5.",name: "Victory System",id: "victorysystem",},
"resurrection":{shortDesc: "When this Pokémon gets KOed for the first time, it gains 25% of its original HP and changes to Reborn form.",name: "Resurrection",id: "resurrection",},
"resurrectiondone":{shortDesc: "Post Resurrection ability.",name: "Resurrection Done",id: "resurrectiondone",},
"upgrade":{shortDesc: "On switch in, doubles the power of Water- or Bug-type moves, in base of the effectiveness on the opponent (for example if opponent is resistant to Water-type, the power of Bug-type moves is doubled).",name: "Upgrade",id: "upgrade",},
"danceposter":{shortDesc: "On switchin, this Pokémon uses each of the foe's moves in a random order.",name: "Danceposter",id: "danceposter",},
"cosmology":{shortDesc: "Astrolith's type changes depending on the weather.",name: "Cosmology",id: "cosmology",},
"summonspirits":{shortDesc: "On switch-in, this Pokemon summons Spirit Skies.",name: "Summon Spirits",id: "summonspirits",},
"rockysurge":{shortDesc: "On switch-in, this Pokemon summons Rocky Terrain.",name: "Rocky Surge",id: "rockysurge",},
"spiralpower":{shortDesc: "Changes secondary type and doubles Speed while holding a plate or Z-Crystal.",name: "Spiral Power",id: "spiralpower",},
"compassionatesoul":{shortDesc: "When this Pokemon lands a KO, its status is cured and its Special Attack is boosted. When this Pokemon switches out, its status is cured and the switch-in's Special Attack is boosted.",name: "Compassionate Soul",id: "compassionatesoul",},
"movestat":{shortDesc: "On switchin, this Pokémon makes its base stats equal to that of the foes' move of the highest power.",name: "Move~Stat",id: "movestat",},
"revitalize":{shortDesc: "Upon switching out, this Pokemon regains 1/3 of its max HP and 1/3 of the PP of all its moves (rounded down).",name: "Revitalize",id: "revitalize",},
"soakingaura":{shortDesc: "Moves of this Pokémon that have a type which is immune to its attacks (For example, Electric moves) as well as Fairy moves have 1.33x power.",name: "Soaking Aura",id: "soakingaura",},
"pokemon":{shortDesc: "This Pokemon's highest stat is raised by 1 if it attacks and KOes another Pokemon or it's under weather. Blocks the effects of weather.",name: "Cloud Boost",id: "pokemon",},
"sporespreading":{shortDesc: "Healing Moves and moves with a chance to Poison, Sleep, or Paralyze the opponent have +1 priority.",name: "Spore Spreading",id: "sporespreading",},
"goddesstrace":{shortDesc: "Upon being sent out, the Pokemon copies the opposing Pokemon's ability and halves the PP of their moves.",name: "Goddess Trace",id: "goddesstrace",},
"sensei":{shortDesc: "This Pokemon's punching moves have the same base power as its most powerful move.",name: "Sensei",id: "sensei",},
"appropriation":{shortDesc: "If this Pokemon is a Mimukyu, the first hit it takes in battle deals 0 neutral damage and copies the attacker's ability.",name: "Appropriation",id: "appropriation",},
"scarilyadorable":{shortDesc: "On switch-in, the foe's attack and speed is lowered by one stage. If this Pokemon is targeted with a contact move, the foe has a 30% chance to have their Attack lowered by one stage.",name: "Scarily Adorable",id: "scarilyadorable",},
"creepy":{shortDesc: "Status moves have +1 priority and lower the foe's Attack by one stage, but cannot affect Dark-types.",name: "Creepy",id: "creepy",},
"prismskin":{shortDesc: "Restores 1/4 HP when hit by a super-effective move (recovery first then damage). Super-effective moves do 1/2 of the damage. This ability can be bypassed by Fire-type moves and only Fire-type moves, regardless of whether the attacker has Mold Breaker or its variants.",name: "Prism Skin",id: "prismskin",},
"terabeast":{shortDesc: "This Pokemon's move with the highest base power deals 1.5x damage. All of this Pokemon's moves ignore the target's ability.",name: "Terabeast",id: "terabeast",},
"powersaver":{shortDesc: "Physical moves do 50% more damage every other turn.",name: "Power Saver",id: "powersaver",},
"christmasparade":{shortDesc: "Super effective attacks against this Pokemon becomes Ice-type and do 0.75x damage. Normal-type moves become Ice-type and do 1.45x damage.",name: "Christmas Parade",id: "christmasparade",},
"shocktrap":{shortDesc: "Takes 50% damage from all attacks when its HP is full. If it takes a direct attack at full HP, the attacker is paralyzed. (Note: the latter effect only works once.)",name: "Shock Trap",id: "shocktrap",},
"auraofpain":{shortDesc: "While this Pokemon is active, all Pokemon are prevented from healing.",name: "Aura Of Pain",id: "auraofpain",},
"pouchaura":{shortDesc: "While this Pokémon is on the field, moves that heal the user gain a 1.7x boost and heal for 1.7x more than usual.",name: "Pouch Aura",id: "pouchaura",},
"voltfield":{shortDesc: "As long as the holder is on the field, any non-Dark-type opponents are under the effect of Taunt.",name: "Volt Field",id: "voltfield",},
"hiddenadvantage":{shortDesc: "This Pokemon is immune to types of its moves.",name: "Hidden Advantage",id: "hiddenadvantage",},
"galelevitation":{shortDesc: "This Pokémon is not grounded and can't be hit with Ground or Flying-Type moves. Attempting to use one of those moves on this Pokémon gives this Pokémon +1 priority to all its attacks untill it switches out.",name: "Gale Levitation",id: "galelevitation",},
"frictioncharge":{shortDesc: "When hit by an Electric-type move or contact move, increases the power of own contact moves by 1.5x (similar to what Flash Fire does with Fire moves). Grants immunity to Electric-type moves.",name: "Friction Charge",id: "frictioncharge",},
"tommysroom":{shortDesc: "This Pokémon ignores other Pokémon's stat stages when attacking or being attacked. Takes half damage from Pokémon with stat changes.",name: "Tommy's Room",id: "tommysroom",},
"crystallizedshield":{shortDesc: "If Miniancie, switch-in/end of turn it changes to Jewel at 1/2 max HP or less, else Ore.",name: "Crystallized Shield",id: "crystallizedshield",},
"foodcoloring":{shortDesc: "This Pokemon eats certain berries earlier. If a Pokemon on this team (including itself) is holding a berry, this Pokemon has 1.5x Special Attack.",name: "Food Coloring",id: "foodcoloring",},
"scarysandwich":{shortDesc: "The foe cannot eat berries or use Ground, Rock or Steel-type moves. This Pokemon's moves have 1.3x power if it is holding a berry.",name: "Scary Sandwich",id: "scarysandwich",},
"testcram":{shortDesc: "This Pokemon is immune to Ground-Type moves. If a move against this Pokémon ended up on a Critical Hit, it won't affect the Pokémon. This Pokemon's critical hit ratio is raised by 1 stage.",name: "Test Cram",id: "testcram",},
"sippityhoo":{shortDesc: "If a foe with a removable item attacks the Pokémon with this ability, the item is lost and this Pokémon's Attack goes up by one stage. Furthermore, if the pokémon with this ability is not holding an item, it will steal the item and won't take damage from the attack. ",name: "Sippity Hoo",id: "sippityhoo",},
"mirage":{shortDesc: "If the foe has any boosted stat, this Pokemon is immune to their contact moves.",name: "Mirage",id: "mirage",},
"titaniumtoothpaste":{shortDesc: "This Pokemon cannot be statused or have its stats lowered. If either of these would have occured or if this Pokemon is switching out, it heals 33% of its HP.",name: "Titanium Toothpaste",id: "titaniumtoothpaste",},
"farmersdelight":{shortDesc: "Upon consuming a Berry or knocking a foe out, boosts this pokémon's highest non-HP stat by one stage. Upon knocking a foe out, or under sun, 100% chance to restore berry. Otherwise, 50% chance to restore berry at the end of every turn.",name: "Farmer's Delight",id: "farmersdelight",},
"calamity":{shortDesc: "Prevents the increase the PP cost of the user.",name: "Calamity",id: "calamity",},
"blackhole":{shortDesc: "Any moves used against this Pokemon that would affect its stats negatively will fail. Note that abilities like Intimidate can decrease its stats.",name: "Black Hole",id: "blackhole",},
"itemize":{shortDesc: "Normal-type moves change to match the held item. Moves that would otherwise be Normal-type have 1.2x power.",name: "Itemize",id: "itemize",},
"shutupandjam":{shortDesc: "Cannot be stopped from selecting and using a move (unless it is switching).",name: "Shut Up And Jam",id: "shutupandjam",},
"mellowvibe":{shortDesc: "This Pokémon can never be prevented from selecting a move and using it. This Pokémon is unaffected by debuffs and damage from its own moves.",name: "Mellow Vibe",id: "mellowvibe",},
"inflate":{shortDesc: "After each consecutive kill, This pokemon gets +1 Special Attack, and +1 to it's highest stat. If Highest stat is Special Attack, then the second boost will be nullified.",name: "Inflate",id: "inflate",},
"bodyguard":{shortDesc: "Grants immunity to moves that would lower this Pokemon's stats.",name: "Bodyguard",id: "bodyguard",},
"apathy":{shortDesc: "Whenever this pokemon is afflicted by a status or move restricting affect, it is removed from it and applied to the opposing pokemon. If the effect cannot be inflicted, it is removed. Item induced restrictions do not count.",name: "Apathy",id: "apathy",},
"powerdrain":{shortDesc: "This Pokemon paralyzes any Pokemon that would try to reduce its PP.",name: "Power Drain",id: "powerdrain",},
"adaptingbody":{shortDesc: "Gains Adaptability and heals for 12% max HP when in weather for more than one turn.",name: "Adapting Body",id: "adaptingbody",},
"diamondarmor":{shortDesc: "This Pokemon receives 3/4 damage from supereffective attacks. It also ignores the effects of abilities that deplete PP.",name: "Diamond Armor",id: "diamondarmor",},
"beastscopycat":{shortDesc: "Upon switchin in, replace one of user's stats with the foe's highest non-HP stat. Upon knocking a foe out, this Pokémon's highest stat is raised by one stage.",name: "Beast's Copycat",id: "beastscopycat",},
"unfriend":{shortDesc: "If Happislash, changes to Unfriendly Forme before attempting to use an attacking move, and changes to Friendly Forme before attempting to use King's Shield. Takes 3/4 damage from other Pokemon's attacks when in Friendly Forme.",name: "Unfriend",id: "unfriend",},
"beasteye":{shortDesc: "Highest non-HP stat can't be lowered by external means. If this would happen or if this Pokémon is to land a KO, it gets +1 to that stat.",name: "Beast Eye",id: "beasteye",},
"weatherbreak":{shortDesc: "When this Pokemon is active, all weather-based effects are reversed.",name: "Weather Break",id: "weatherbreak",},
"atmosphericperversion":{shortDesc: "When this Pokemon is active, all weather-based effects are reversed.",name: "Atmospheric Perversion",id: "atmosphericperversion",},
"weathercontradiction":{shortDesc: "The effects of stat changes (for this Pokemon only) and weather is reversed.",name: "Weather Contradiction",id: "weathercontradiction",},
"sleepingsystem":{shortDesc: "This Pokemon is treated as if it were asleep and also all types at once.",name: "Sleeping System",id: "sleepingsystem",},
"prototype":{shortDesc: "Changes secondary type and doubles Speed while holding a plate or Z-Crystal.",name: "Prototype",id: "prototype",},
"afterstorm":{shortDesc: "On switch-in, this Pokemon summons Rainbow Sky for five turns.",name: "Afterstorm",id: "afterstorm",},
"singularity":{shortDesc: "This Pokemon can only be KOed every other turn, unless it uses Protect when it could be KOed.",name: "Singularity",id: "singularity",},
"combinationdrive":{shortDesc: "If Golislash, changes Forme to Power before attacks and Defense before King's Shield. Certain moves are boosted whilst transitioning.",name: "Combination Drive",id: "combinationdrive",},
"aeonflux":{shortDesc: "This Pokemon's punch-based and Electric-type attacks have 1.2x power, which stack. Punching moves calculate damage based on this Pokemon's Special Attack instead of its Attack.",name: "Aeon Flux",id: "aeonflux",},
"techequip":{shortDesc: "Holding a memory item will change the user's primary type to that of the memory, and make the user immune to that memory's type.",name: "Tech Equip",id: "techequip",},
"technicalsystem":{shortDesc: "If this Pokémon is holding a Memory, it changes type to match that memory and all it's moves are boosted by 1.5.",name: "Technical System",id: "technicalsystem",},
"triagesystem":{shortDesc: "If this Pokémon is holding a Memory, it changes type to match that memory and all it's moves are boosted by 1.5.",name: "Triage System",id: "triagesystem",},
"rainregen":{shortDesc: "Sets Rain on switchin. Heals 33% of its max HP every time it sets Rain.",name: "Rain Regen",id: "rainregen",},
"mosscleaner":{shortDesc: "Absorbs Grass and Water moves. Boosts Attack by one stage whenever hit by either.",name: "Moss Cleaner",id: "mosscleaner",},
"denticles":{shortDesc: "Pokemon making contact with this Pokemon lose 1/8 of their max HP. This damage and this Pokemon's Speed both double in rain.",name: "Denticles",id: "denticles",},
"toxicbarrage":{shortDesc: "This Pokemon's Attack is 1.5x and accuracy of its attacks is 0.8x. Moves will always hit poisoned targets.",name: "Toxic Barrage",id: "toxicbarrage",},
"goopskin":{shortDesc: "This Pokemon is healed 1/8 by Rain; is hurt 1.25x by Fire, 1/8 by Sun. Immune to Water-type moves and if hit by one, lowers the attacker's Speed by 1 stage.",name: "Goop Skin",id: "goopskin",},
"nightlight":{shortDesc: "This Pokemon's Fire attacks do 1.5x damage if hit by a single Bug-, Dark-, or Ghost-type attack.",name: "Nightlight",id: "nightlight",},
"magicalflame":{shortDesc: "This Pokemon can only be damaged by direct attacks. Damage negated in this way burns a random adjacent opponent.",name: "Magical Flame",id: "magicalflame",},
"rattlingskin":{shortDesc: "If hit by a contact move, damages the attacker for 1/8 max HP. If hit by a Bug-, Ghost-, or Dark-type attack, damages the attacker for 1/16 max HP. These stack.",name: "Rattling Skin",id: "rattlingskin",},
"miraclehide":{shortDesc: "This Pokemon is healed by 1/8 of its max HP each turn when statused; no HP loss from burn or poison.",name: "Miracle Hide",id: "miraclehide",},
"chlorohide":{shortDesc: "If this Pokemon is statused, its Speed is 2x; ignores Speed drop from paralysis.",name: "Chloro Hide",id: "chlorohide",},
"vileskin":{shortDesc: "30% chance of poison/paralysis/sleep/burn on others making contact with this Pokemon. This Pokemon has a 33% chance to have its status cured at the end of each turn.",name: "Vile Skin",id: "vileskin",},
"magneticfield":{shortDesc: "This Pokemon is treated as airborne. Allies that are also airborne have the power of their special attacks multiplied by 1.3.",name: "Magnetic Field",id: "magneticfield",},
"magicvigor":{shortDesc: "This Pokemon cannot lose its held item due to another Pokemon's attack.",name: "Magic Vigor",id: "magicvigor",},
"grimreminder":{shortDesc: "Upon switch-in, this Pokemon copies and suppresses the opponent's ability.",name: "Grim Reminder",id: "grimreminder",},
"resuscitate":{shortDesc: "Regenerator + Sturdy.",name: "Resuscitate",id: "resuscitate",},
"healingprovocation":{shortDesc: "Upon switching out or having a stat lowered, recovers 1/3 of max HP.",name: "Healing Provocation",id: "healingprovocation",},
"adaptiveclutch":{shortDesc: "This Pokemon's same-type attack bonus (STAB) is 2 instead of 1.5. Prevents foes sharing this Pokemon's type from choosing to switch.",name: "Adaptive Clutch",id: "adaptiveclutch",},
"bunsenburner":{shortDesc: "If this Pokemon is at full HP, this Pokemon's attacking stat is 1.5x with Fire attacks and it survives one hit with at least 1 HP. Immune to OHKO.",name: "Bunsen Burner",id: "bunsenburner",},
"interception":{shortDesc: "When this Pokemon has a stat lowered by the foe, +2 Attack. If an opponent faints, this Pokemon gets +1 Attack, +2 if the foe had a lowered stat upon death. Multiple stats lowered do not stack.",name: "Interception",id: "interception",},
"scrapheap":{shortDesc: "This Pokemon's Fighting- and Normal-type moves can hit Ghost-types and will attempt to remove the target's held item upon hitting.",name: "Scrap Heap",id: "scrapheap",},
"antivirus":{shortDesc: "On switch-in, this Pokemon lowers the Attack or Special Attack of adjacent opponents by 1 stage, whichever is higher.",name: "Antivirus",id: "antivirus",},
"magicalvoice":{shortDesc: "This Pokemon's sound-based moves become Water type and restore 1/6 of its HP after use. This Pokemon restores 1/3 of its maximum HP, rounded down, when it switches out.",name: "Magical Voice",id: "magicalvoice",},
"levitimidate":{shortDesc: "On switch-in, this Pokemon removes any type-based immunities of adjacent opposing Pokemon.",name: "Levitimidate",id: "levitimidate",},
"ailmentmaster":{shortDesc: "This Pokemon can inflict any status on any other Pokemon regardless of their typing.",name: "Ailment Master",id: "ailmentmaster",},
"monarchoftherain":{shortDesc: "This Pokemon's HP-restoring moves double in power.",name: "Monarch of the Rain",id: "monarchoftherain",},
"slimedrench":{shortDesc: "If the foe is poisoned, whenever it tries to heal (with an item or move), it takes that amount of damage.",name: "Slime Drench",id: "slimedrench",},
"overthelimit":{shortDesc: "This Pokemon's same-type attack bonus (STAB) is 3 instead of 1.5, and the accuracy of damaging moves matching one of this Pokemon's types is 0.8x. ",name: "Over the Limit",id: "overthelimit",},
"guardsshield":{shortDesc: "This Pokemon takes no damage in the turn it switches in. Immune to Ground-type, Spikes, Toxic Spikes, Sticky Web and other ground-based hazards.",name: "Guard's Shield",id: "guardsshield",},
"weatherman":{shortDesc: "Ignores weather effects. At the end of each turn in weather, this Pokemon's Attack is boosted by 1 stage.",name: "Weather Man",id: "weatherman",},
"shortcircuit":{shortDesc: "At the end of each turn, this Pokemon paralyzes any opponents with Pressure or derived abilities.",name: "Short Circuit",id: "shortcircuit",},
"desertmirage":{shortDesc: "If Aegipass, changes Forme to Directional before attacks and Magnetic before King's Shield or Ancient Shield. Damage from Rock-, Ground-, or Steel-type moves is reduced by 1.3x as Magnetic. Directional's Rock-, Ground-, and Steel-type moves have 1.3x power.",name: "Desert Mirage",id: "desertmirage",},
"adaptivebias":{shortDesc: "This Pokemon's same-type attack bonus (STAB) is 2 instead of 1.5. Negates STAB of incoming moves.",name: "Adaptive Bias",id: "adaptivebias",},
"goldentouch":{shortDesc: "On switch-in, this Pokemon copies the effects of a random opposing Pokemon's held item.",name: "Golden Touch",id: "goldentouch",},
"adaptableillusion":{shortDesc: "This Pokemon appears as the last Pokemon in the party until it takes direct damage. Moves matching that Pokemon's primary type have 1.3x power while the illusion is active.",name: "Adaptable Illusion",id: "adaptableillusion",},
"compression":{shortDesc: "If Giramini, switch-in/end of turn it changes to Unleashed at 1/2 max HP or less, else Captive.",name: "Compression",id: "compression",},
"typeillusionist":{shortDesc: "This Pokemon's primary typing changes to match its plate or Z-Crystal. This typing is hidden from the opponent.",name: "Type Illusionist",id: "typeillusionist",},
"floatinggrounds":{shortDesc: "This Pokemon is protected from Ground-type moves and Ground-based hazards. For the first three turns on the battlefield, it uses Spikes.",name: "Floating Grounds",id: "floatinggrounds",},
"engarde":{shortDesc: "When this Pokemon is active, all Pokemon on the field have their held items suppressed.",name: "En Garde",id: "engarde",},
"beastcostume":{shortDesc: "If this Pokemon is a Kyutana, the first hit it takes in battle or after landing a KO deals 0 neutral damage.",name: "Beast Costume",id: "beastcostume",},
"memestealer":{shortDesc: "If this Pokemon is hit by or uses a contact move, it steals other Pokemon's stat boosts, decreases that Pokemon's highest stat, and increases it on this Pokemon.",name: "Meme Stealer",id: "memestealer",},
"tacticalcomputer":{shortDesc: "If Aegivally, changes Forme to Guerilla before attacks and Bulwark before King's Shield. Primary type changes to match its Held Memory in Bulwark Forme and its first move in Guerilla Forme.",name: "Tactical Computer",id: "tacticalcomputer",},
"indigestion":{shortDesc: "This Pokemon consumes berries that affect stats as soon as possible.",name: "Indigestion",id: "indigestion",},
"bloodmadecrops":{shortDesc: "This Pokemon's highest stat is raised by 1 if it attacks and KOes another Pokemon or if it eats a berry. Consumes pinch Berries at 50% HP or less and if it attacks and KOes another Pokemon.",name: "Blood-Made Crops",id: "bloodmadecrops",},
"nutcracker":{shortDesc: "Speed is doubled and opponents lose 12.5% Max HP on held item loss; boost is lost if it switches, gets new item/Ability. Pokemon making contact with this Pokemon lose 1/8 of their max HP, 1/4 if holding an item.",name: "Nutcracker",id: "nutcracker",},
"speedstopper":{shortDesc: "While this Pokemon is active, it prevents opposing Pokemon from using their Berries and items that affect their Speed. This Pokemon gets +1 Speed on Switch-in if an opponent has such an item.",name: "Speed Stopper",id: "speedstopper",},
"mitosis":{shortDesc: "If user is Washox, changes to Chromosome Form if it has > 1/4 max HP, else Strand Form. Chromosome uses up one additional PP per move, but Strand doubles the PP of incoming enemy moves.",name: "Mitosis",id: "mitosis",},
"cursedcloak":{shortDesc: "If this Pokemon is a Baneky, the first hit it takes in battle deals 0 neutral damage and disables the attacker's ability if it isn't from confusion.",name: "Cursed Cloak",id: "cursedcloak",},
"pawprayer":{shortDesc: "x1.5 power on contact moves. If Lycanitan and has a Psychic-type move, turn into Daydream Form. As Daydream, x1.5 power to Psychic-type moves and turns all contact moves Special.",name: "Paw Prayer",id: "pawprayer",},
"tourtorussia":{shortDesc: "If boosted, heals 6.25% of max HP for each boost at the end of each turn, maxing out at 37.5%. Stats cannot be lowered. Summons hail after its first stat boost or when an enemy tries to decrease a stat.",name: "Tour To Russia",id: "tourtorussia",},
"mirageguard":{shortDesc: "This Pokemon appears as the last Pokemon in the party and copies its type-based immunities until it takes direct damage.",name: "Mirage Guard",id: "mirageguard",},
"beastbootleg":{shortDesc: "If this Pokemon attacks and KOes another Pokemon, it copies that Pokemon's held item's effects. Two effects can be copied this way, the earlier being overwritten if it copies a new one.",name: "Beast Bootleg",id: "beastbootleg",},
"vegetarian":{shortDesc: "This Pokemon summons and eats a randomly chosen berry if hit by a Grass move; Grass immunity.",name: "Vegetarian",id: "vegetarian",},
"airraider":{shortDesc: "This Pokemon is immune to Ground-type attacks. Its own attacks are critical hits if the target is neither grounded nor has this ability.",name: "Air Raider",id: "airraider",},
"sluggishaura":{shortDesc: "As long as this Pokemon is active, slower Pokemon move first. At the end of each turn, its Speed is reduced by 1 stage. Trick Room cannot be used when this Pokemon is active.",name: "Sluggish Aura",id: "sluggishaura",},
"pressurizer":{shortDesc: "Damaging moves targeting this Pokemon have 60 Base Power, while non-damaging have their PP consumption doubled.",name: "Pressurizer",id: "pressurizer",},
"sandyconstruct":{shortDesc: "If Sandgarde, changes to Castle if at 1/2 max HP or less at end of turn. In Sandstorm, this transformation also has a 20% chance of occurring regardless of HP.",name: "Sandy Construct",id: "sandyconstruct",},

};
Object.values(mons).forEach(monster => {
let monname = document.getElementById("monname").value;
let speedtierplusscarf = Math.floor((2.2 * monster.baseStats.spe + 108.9) * 1.5);
let speedtierscarf = Math.floor((2 * monster.baseStats.spe + 99) * 1.5);
let speedtierplus = Math.floor(2.2 * monster.baseStats.spe + 108.9);
let speedtier = Math.floor(2 * monster.baseStats.spe + 99);
let speedtierzero = Math.floor(2 * monster.baseStats.spe + 36);
Object.values(abilities).forEach(abe => {
let bst=+monster.baseStats.hp + +monster.baseStats.atk + +monster.baseStats.def + +monster.baseStats.spa + +monster.baseStats.spd + +monster.baseStats.spe;
let monsmall=monster.species.toLowerCase();
monsmall=monsmall.replace(" ","");
let abilitysmall=monster.abilities[0].toLowerCase();
abilitysmall=abilitysmall.replace(" ","");
if (monname === monster.species) {
if (monster.abilities[0] === abe.name) {
document.getElementById("info").innerHTML = `<img src="https://raw.githubusercontent.com/XpRienzo/Pokemon-Showdown-Client/master/data/sprites/xydex/${monsmall}.png" alt="${monsmall}" /><img src="https://raw.githubusercontent.com/XpRienzo/Pokemon-Showdown-Client/master/data/sprites/xydex-shiny/${monsmall}.png" alt="${monsmall}" /><h2>${monster.species}</h2><img src="http://play.pokemonshowdown.com/sprites/types/${monster.types[0]}.png" width="32" height="14" /><img src="http://play.pokemonshowdown.com/sprites/types/${monster.types[1]}.png" width="32" height="14" /><br /><br /><b>${monster.abilities[0]}:</b> ${abe.shortDesc}<br /><h3>Stats</h3><table><tr><td>HP:</td><td><b>${monster.baseStats.hp}</b></td><td><meter value="${monster.baseStats.hp}" min="0" max="255" low="70" high="150"></td></tr><tr><td>Atk:</td><td><b>${monster.baseStats.atk}</b></td><td><meter value="${monster.baseStats.atk}" min="0" max="233" low="70" high="150" optimum="120"></td></tr><tr><td>Def:</td><td><b>${monster.baseStats.def}</b></td><td><meter value="${monster.baseStats.def}" min="0" max="230" low="70" high="150"></td></tr><tr><td>SpA:</td><td><b>${monster.baseStats.spa}</b></td><td><meter value="${monster.baseStats.spa}" min="0" max="194" low="70" high="150"></td></tr><tr><td>SpD:</td><td><b>${monster.baseStats.spd}</b></td><td><meter value="${monster.baseStats.spd}" min="0" max="230" low="70" high="150"></td></tr><tr><td>Spe:</td><td><b>${monster.baseStats.spe}</b></td><td><meter value="${monster.baseStats.spe}" min="0" max="180" low="70" high="150"></td></tr><tr><td>BST:</td><td><b>${bst}<b></td><td><meter value="${bst}" min="0" max="780" low="300" high="700"></td></tr></table><br /><b>Weight:</b> ${monster.weightkg} kg <br> <h3>Speed Tier</h3>${speedtierplusscarf}: +1 252+ EVs<br>${speedtierscarf}: +1 252 EVs<br>${speedtierplus}: 252+ EVs<br>${speedtier}: 252 EVs<br>${speedtierzero}: 0 EVs`;

document.getElementById("omega").innerHTML = `<h2>Omega</h2>[IMG]https://raw.githubusercontent.com/XpRienzo/Pokemon-Showdown-Client/master/data/sprites/xydex/${monsmall}.png[/IMG]<br>[B]Name of the Pokemon[/B]: ${monster.species}<br>[B]Role(s)[/B]: <br>[B]Types[/B]: [IMG]http://play.pokemonshowdown.com/sprites/types/${monster.types[0]}.png[/IMG][IMG]http://play.pokemonshowdown.com/sprites/types/${monster.types[1]}.png[/IMG]<br>[B]Ability and Description:[/B] [I]${monster.abilities[0]}[/I] - ${abe.shortDesc} <br> [B]Stat Distribution[/B]: ${monster.baseStats.hp} / ${monster.baseStats.atk} / ${monster.baseStats.def} / ${monster.baseStats.spa} / ${monster.baseStats.spd} / ${monster.baseStats.spe} | BST: ${bst} <br> [B]Justification[/B]: `;
}
}
});
});
}
