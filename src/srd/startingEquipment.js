import Proficiencies from "./proficiencies";

const StartingEquipment = {
    "1": {
    	"class": "Barbarian",
    	"starting_equipment": [{
    		"item": { "item": "158", "name": "Explorer's Pack"}, "quantity": 1}, {
    		"item": { "item": "5", "name": "Javelin"}, "quantity": 4}],
    	"choices_to_make": 2,
    	"choice_1": [{
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "18", "name": "Greataxe"}, "quantity": 1}]
    	}, {
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "15", "name": "Battleaxe"}, "quantity": 1}, {
    			"item": { "item": "16", "name": "Flail"}, "quantity": 1}, {
    			"item": { "item": "17", "name": "Glaive"}, "quantity": 1}, {
    			"item": { "item": "18", "name": "Greataxe"}, "quantity": 1}, {
    			"item": { "item": "19", "name": "Greatsword"}, "quantity": 1}, {
    			"item": { "item": "20", "name": "Halberd"}, "quantity": 1}, {
    			"item": { "item": "21", "name": "Lance"}, "quantity": 1}, {
    			"item": { "item": "22", "name": "Longsword"}, "quantity": 1}, {
    			"item": { "item": "23", "name": "Maul"}, "quantity": 1}, {
    			"item": { "item": "24", "name": "Morningstar"}, "quantity": 1}, {
    			"item": { "item": "25", "name": "Pike"}, "quantity": 1}, {
    			"item": { "item": "26", "name": "Rapier"}, "quantity": 1}, {
    			"item": { "item": "27", "name": "Scimitar"}, "quantity": 1}, {
    			"item": { "item": "28", "name": "Shortsword"}, "quantity": 1}, {
    			"item": { "item": "29", "name": "Trident"}, "quantity": 1}, {
    			"item": { "item": "30", "name": "War pick"}, "quantity": 1}, {
    			"item": { "item": "31", "name": "Warhammer"}, "quantity": 1}, {
    			"item": { "item": "32", "name": "Whip"}, "quantity": 1}]
    	}],
    	"choice_2": [{
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "4", "name": "Handaxe"}, "quantity": 2}]
    	}, {
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "1", "name": "Club"}, "quantity": 1}, {
    			"item": { "item": "2", "name": "Dagger"}, "quantity": 1}, {
    			"item": { "item": "3", "name": "Greatclub"}, "quantity": 1}, {
    			"item": { "item": "4", "name": "Handaxe"}, "quantity": 1}, {
    			"item": { "item": "5", "name": "Javelin"}, "quantity": 1}, {
    			"item": { "item": "6", "name": "Light hammer"}, "quantity": 1}, {
    			"item": { "item": "7", "name": "Mace"}, "quantity": 1}, {
    			"item": { "item": "8", "name": "Quarterstaff"}, "quantity": 1}, {
    			"item": { "item": "9", "name": "Sickle"}, "quantity": 1}, {
    			"item": { "item": "10", "name": "Spear"}, "quantity": 1}, {
    			"item": { "item": "11", "name": "Crossbow, light"}, "quantity": 1}, {
    			"item": { "item": "12", "name": "Dart"}, "quantity": 1}, {
    			"item": { "item": "13", "name": "Shortbow"}, "quantity": 1}, {
    			"item": { "item": "14", "name": "Sling"}, "quantity": 1}]
    	}]
    },
    "2": {
    	"class": "Bard",
    	"starting_equipment": [{
    		"item": { "item": "39", "name": "Leather"}, "quantity": 1}, {
    		"item": { "item": "2", "name": "Dagger"}, "quantity": 1}],
    	"choices_to_make": 3,
    	"choice_1": [{
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "26", "name": "Rapier"}, "quantity": 1}]
    	}, {
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "22", "name": "Longsword"}, "quantity": 1}]
    	}, {
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "1", "name": "Club"}, "quantity": 1}, {
    			"item": { "item": "2", "name": "Dagger"}, "quantity": 1}, {
    			"item": { "item": "3", "name": "Greatclub"}, "quantity": 1}, {
    			"item": { "item": "4", "name": "Handaxe"}, "quantity": 1}, {
    			"item": { "item": "5", "name": "Javelin"}, "quantity": 1}, {
    			"item": { "item": "6", "name": "Light hammer"}, "quantity": 1}, {
    			"item": { "item": "7", "name": "Mace"}, "quantity": 1}, {
    			"item": { "item": "8", "name": "Quarterstaff"}, "quantity": 1}, {
    			"item": { "item": "9", "name": "Sickle"}, "quantity": 1}, {
    			"item": { "item": "10", "name": "Spear"}, "quantity": 1}, {
    			"item": { "item": "11", "name": "Crossbow, light"}, "quantity": 1}, {
    			"item": { "item": "12", "name": "Dart"}, "quantity": 1}, {
    			"item": { "item": "13", "name": "Shortbow"}, "quantity": 1}, {
    			"item": { "item": "14", "name": "Sling"}, "quantity": 1}]
    	}],
    	"choice_2": [{
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "155", "name": "Diplomat's Pack"}, "quantity": 1}]
    	}, {
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "157", "name": "Entertainer's Pack"}, "quantity": 1}]
    	}],
    	"choice_3": [{
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "184", "name": "Lute"}, "quantity": 1}]
    	}, {
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "180", "name": "Bagpipes"}, "quantity": 1}, {
    			"item": { "item": "181", "name": "Drum"}, "quantity": 1}, {
    			"item": { "item": "182", "name": "Dulcimer"}, "quantity": 1}, {
    			"item": { "item": "183", "name": "Flute"}, "quantity": 1}, {
    			"item": { "item": "184", "name": "Lute"}, "quantity": 1}, {
    			"item": { "item": "185", "name": "Lyre"}, "quantity": 1}, {
    			"item": { "item": "186", "name": "Horn"}, "quantity": 1}, {
    			"item": { "item": "187", "name": "Pan flute"}, "quantity": 1}, {
    			"item": { "item": "188", "name": "Shawm"}, "quantity": 1}, {
    			"item": { "item": "189", "name": "Viol"}, "quantity": 1}]
    	}]
    },
    "3": {
    	"class": "Cleric",
    	"starting_equipment": [{
    	"item": { "item": "50", "name": "Shield"}, "quantity": 1}],
    	"choices_to_make": 5,
    	"choice_1": [{
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "7", "name": "Mace" },"quantity": 1}]
    	}, {
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "31", "name": "Warhammer" }, "quantity": 1,
    			"prerequisites": [Proficiencies["15"]]
    		}]
    	}],
    	"choice_2": [{
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "43", "name": "Scale Mail"}, "quantity": 1}]
    	}, {
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "39", "name": "Leather"}, "quantity": 1}]
    	}, {
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "47", "name": "Chain Mail"}, "quantity": 1,	"prerequisites": [Proficiencies["14"]]
    		}]
    	}],
    	"choice_3": [{
    		"choose": 2,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "11", "name": "Crossbow, light"}, "quantity": 1}, {
    			"item": { "item": "56", "name": "Crossbow bolt"}, "quantity": 20}]
    	}, {
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "1", "name": "Club"}, "quantity": 1}, {
    			"item": { "item": "2", "name": "Dagger"}, "quantity": 1}, {
    			"item": { "item": "3", "name": "Greatclub"}, "quantity": 1}, {
    			"item": { "item": "4", "name": "Handaxe"}, "quantity": 1}, {
    			"item": { "item": "5", "name": "Javelin"}, "quantity": 1}, {
    			"item": { "item": "6", "name": "Light hammer"}, "quantity": 1}, {
    			"item": { "item": "7", "name": "Mace"}, "quantity": 1}, {
    			"item": { "item": "8", "name": "Quarterstaff"}, "quantity": 1}, {
    			"item": { "item": "9", "name": "Sickle"}, "quantity": 1}, {
    			"item": { "item": "10", "name": "Spear"}, "quantity": 1}, {
    			"item": { "item": "11", "name": "Crossbow, light"}, "quantity": 1}, {
    			"item": { "item": "12", "name": "Dart"}, "quantity": 1}, {
    			"item": { "item": "13", "name": "Shortbow"}, "quantity": 1}, {
    			"item": { "item": "14", "name": "Sling"}, "quantity": 1}]
    	}],
    	"choice_4": [{
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "159", "name": "Priest's Pack"}, "quantity": 1}]
    	}, {
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "158", "name": "Explorer's Pack"}, "quantity": 1}]
    	}],
    	"choice_5": [{
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "58", "name": "Amulet"}, "quantity": 1}, {
    			"item": { "item": "93", "name": "Emblem"}, "quantity": 1}, {
    			"item": { "item": "134", "name": "Reliquary"}, "quantity": 1}]
    	}]
    },
    "4": {
    	"class": "Druid",
    	"starting_equipment": [{
    		"item": { "item": "39", "name": "Leather"}, "quantity": 1}, {
    		"item": { "item": "158", "name": "Explorer's Pack"}, "quantity": 1}],
    	"choices_to_make": 3,
    	"choice_1": [{
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "50", "name": "Shield"}, "quantity": 1}]
    	}, {
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "1", "name": "Club"}, "quantity": 1}, {
    			"item": { "item": "2", "name": "Dagger"}, "quantity": 1}, {
    			"item": { "item": "3", "name": "Greatclub"}, "quantity": 1}, {
    			"item": { "item": "4", "name": "Handaxe"}, "quantity": 1}, {
    			"item": { "item": "5", "name": "Javelin"}, "quantity": 1}, {
    			"item": { "item": "6", "name": "Light hammer"}, "quantity": 1}, {
    			"item": { "item": "7", "name": "Mace"}, "quantity": 1}, {
    			"item": { "item": "8", "name": "Quarterstaff"}, "quantity": 1}, {
    			"item": { "item": "9", "name": "Sickle"}, "quantity": 1}, {
    			"item": { "item": "10", "name": "Spear"}, "quantity": 1}, {
    			"item": { "item": "11", "name": "Crossbow, light"}, "quantity": 1}, {
    			"item": { "item": "12", "name": "Dart"}, "quantity": 1}, {
    			"item": { "item": "13", "name": "Shortbow"}, "quantity": 1}, {
    			"item": { "item": "14", "name": "Sling"}, "quantity": 1}]
    	}],
    	"choice_2": [{
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "27", "name": "Scimitar"}, "quantity": 1}]
    	}, {
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "1", "name": "Club"}, "quantity": 1}, {
    			"item": { "item": "2", "name": "Dagger"}, "quantity": 1}, {
    			"item": { "item": "3", "name": "Greatclub"}, "quantity": 1}, {
    			"item": { "item": "4", "name": "Handaxe"}, "quantity": 1}, {
    			"item": { "item": "5", "name": "Javelin"}, "quantity": 1}, {
    			"item": { "item": "6", "name": "Light hammer"}, "quantity": 1}, {
    			"item": { "item": "7", "name": "Mace"}, "quantity": 1}, {
    			"item": { "item": "8", "name": "Quarterstaff"}, "quantity": 1}, {
    			"item": { "item": "9", "name": "Sickle"}, "quantity": 1}, {
    			"item": { "item": "10", "name": "Spear"}, "quantity": 1}]
    	}],
    	"choice_3": [{
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "89", "name": "Sprig of mistletoe"}, "quantity": 1}, {
    			"item": { "item": "90", "name": "Totem"}, "quantity": 1}, {
    			"item": { "item": "91", "name": "Wooden staff"}, "quantity": 1}, {
    			"item": { "item": "92", "name": "Yew wand"}, "quantity": 1}]
    	}]
    },
    "5": {
    	"class": "Fighter",
    	"starting_equipment": [],
    	"choices_to_make": 5,
    	"choice_1": [{
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "47", "name": "Chain Mail"}, "quantity": 1}]
    	}, {
    		"choose": 3,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "39", "name": "Leather"}, "quantity": 1}, {
    			"item": { "item": "36", "name": "Longbow"}, "quantity": 1}, {
    			"item": { "item": "54", "name": "Arrow"}, "quantity": 20}]
    	}],
    	"choice_2": [{
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    		"item": { "item": "50", "name": "Shield"}, "quantity": 1}]
    	}, {
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "15", "name": "Battleaxe"}, "quantity": 1}, {
    			"item": { "item": "16", "name": "Flail"}, "quantity": 1}, {
    			"item": { "item": "17", "name": "Glaive"}, "quantity": 1}, {
    			"item": { "item": "18", "name": "Greataxe"}, "quantity": 1}, {
    			"item": { "item": "19", "name": "Greatsword"}, "quantity": 1}, {
    			"item": { "item": "20", "name": "Halberd"}, "quantity": 1}, {
    			"item": { "item": "21", "name": "Lance"}, "quantity": 1}, {
    			"item": { "item": "22", "name": "Longsword"}, "quantity": 1}, {
    			"item": { "item": "23", "name": "Maul"}, "quantity": 1}, {
    			"item": { "item": "24", "name": "Morningstar"}, "quantity": 1}, {
    			"item": { "item": "25", "name": "Pike"}, "quantity": 1}, {
    			"item": { "item": "26", "name": "Rapier"}, "quantity": 1}, {
    			"item": { "item": "27", "name": "Scimitar"}, "quantity": 1}, {
    			"item": { "item": "28", "name": "Shortsword"}, "quantity": 1}, {
    			"item": { "item": "29", "name": "Trident"}, "quantity": 1}, {
    			"item": { "item": "30", "name": "War pick"}, "quantity": 1}, {
    			"item": { "item": "31", "name": "Warhammer"}, "quantity": 1}, {
    			"item": { "item": "32", "name": "Whip"}, "quantity": 1}, {
    			"item": { "item": "33", "name": "Blowgun"}, "quantity": 1}, {
    			"item": { "item": "34", "name": "Crossbow, hand"}, "quantity": 1}, {
    			"item": { "item": "35", "name": "Crossbow, heavy"}, "quantity": 1}, {
    			"item": { "item": "36", "name": "Longbow"}, "quantity": 1}, {
    			"item": { "item": "37", "name": "Net"}, "quantity": 1}]
    	}],
    	"choice_3": [{
    		"choose": 2,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "11", "name": "Crossbow, light"}, "quantity": 1}, {
    			"item": { "item": "56", "name": "Crossbow bolt"}, "quantity": 20}]
    	}, {
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "4", "name": "Handaxe"}, "quantity": 2}]
    	}],
    	"choice_4": [{
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "156", "name": "Dungeoneer's Pack"}, "quantity": 1}]
    	}, {
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "158", "name": "Explorer's Pack"}, "quantity": 1}]
    	}],
    	"choice_5": [{
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "15", "name": "Battleaxe"}, "quantity": 1}, {
    			"item": { "item": "16", "name": "Flail"}, "quantity": 1}, {
    			"item": { "item": "17", "name": "Glaive"}, "quantity": 1}, {
    			"item": { "item": "18", "name": "Greataxe"}, "quantity": 1}, {
    			"item": { "item": "19", "name": "Greatsword"}, "quantity": 1}, {
    			"item": { "item": "20", "name": "Halberd"}, "quantity": 1}, {
    			"item": { "item": "21", "name": "Lance"}, "quantity": 1}, {
    			"item": { "item": "22", "name": "Longsword"}, "quantity": 1}, {
    			"item": { "item": "23", "name": "Maul"}, "quantity": 1}, {
    			"item": { "item": "24", "name": "Morningstar"}, "quantity": 1}, {
    			"item": { "item": "25", "name": "Pike"}, "quantity": 1}, {
    			"item": { "item": "26", "name": "Rapier"}, "quantity": 1}, {
    			"item": { "item": "27", "name": "Scimitar"}, "quantity": 1}, {
    			"item": { "item": "28", "name": "Shortsword"}, "quantity": 1}, {
    			"item": { "item": "29", "name": "Trident"}, "quantity": 1}, {
    			"item": { "item": "30", "name": "War pick"}, "quantity": 1}, {
    			"item": { "item": "31", "name": "Warhammer"}, "quantity": 1}, {
    			"item": { "item": "32", "name": "Whip"}, "quantity": 1}, {
    			"item": { "item": "33", "name": "Blowgun"}, "quantity": 1}, {
    			"item": { "item": "34", "name": "Crossbow, hand"}, "quantity": 1}, {
    			"item": { "item": "35", "name": "Crossbow, heavy"}, "quantity": 1}, {
    			"item": { "item": "36", "name": "Longbow"}, "quantity": 1}, {
    			"item": { "item": "37", "name": "Net"}, "quantity": 1}]
    	}]
    },
    "6": {
    	"class": "Monk",
    	"starting_equipment": [{
    	"item": { "item": "12", "name": "Dart"}, "quantity": 10}],
    	"choices_to_make": 2,
    	"choice_1": [{
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "28", "name": "Shortsword"}, "quantity": 1}]
    	}, {
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "1", "name": "Club"}, "quantity": 1}, {
    			"item": { "item": "2", "name": "Dagger"}, "quantity": 1}, {
    			"item": { "item": "3", "name": "Greatclub"}, "quantity": 1}, {
    			"item": { "item": "4", "name": "Handaxe"}, "quantity": 1}, {
    			"item": { "item": "5", "name": "Javelin"}, "quantity": 1}, {
    			"item": { "item": "6", "name": "Light hammer"}, "quantity": 1}, {
    			"item": { "item": "7", "name": "Mace"}, "quantity": 1}, {
    			"item": { "item": "8", "name": "Quarterstaff"}, "quantity": 1}, {
    			"item": { "item": "9", "name": "Sickle"}, "quantity": 1}, {
    			"item": { "item": "10", "name": "Spear"}, "quantity": 1}, {
    			"item": { "item": "11", "name": "Crossbow, light"}, "quantity": 1}, {
    			"item": { "item": "12", "name": "Dart"}, "quantity": 1}, {
    			"item": { "item": "13", "name": "Shortbow"}, "quantity": 1}, {
    			"item": { "item": "14", "name": "Sling"}, "quantity": 1}]
    	}],
    	"choice_2": [{
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "156", "name": "Dungeoneer's Pack"}, "quantity": 1}]
    	}, {
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "158", "name": "Explorer's Pack"}, "quantity": 1}]
    	}]
    },
    "7": {
    	"class": "Paladin",
    	"starting_equipment": [{
    	"item": { "item": "47", "name": "Chain Mail"}, "quantity": 1}],
    	"choices_to_make": 5,
    	"choice_1": [{
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    		"item": { "item": "50", "name": "Shield"}, "quantity": 1}]
    	}, {
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "15", "name": "Battleaxe"}, "quantity": 1}, {
    			"item": { "item": "16", "name": "Flail"}, "quantity": 1}, {
    			"item": { "item": "17", "name": "Glaive"}, "quantity": 1}, {
    			"item": { "item": "18", "name": "Greataxe"}, "quantity": 1}, {
    			"item": { "item": "19", "name": "Greatsword"}, "quantity": 1}, {
    			"item": { "item": "20", "name": "Halberd"}, "quantity": 1}, {
    			"item": { "item": "21", "name": "Lance"}, "quantity": 1}, {
    			"item": { "item": "22", "name": "Longsword"}, "quantity": 1}, {
    			"item": { "item": "23", "name": "Maul"}, "quantity": 1}, {
    			"item": { "item": "24", "name": "Morningstar"}, "quantity": 1}, {
    			"item": { "item": "25", "name": "Pike"}, "quantity": 1}, {
    			"item": { "item": "26", "name": "Rapier"}, "quantity": 1}, {
    			"item": { "item": "27", "name": "Scimitar"}, "quantity": 1}, {
    			"item": { "item": "28", "name": "Shortsword"}, "quantity": 1}, {
    			"item": { "item": "29", "name": "Trident"}, "quantity": 1}, {
    			"item": { "item": "30", "name": "War pick"}, "quantity": 1}, {
    			"item": { "item": "31", "name": "Warhammer"}, "quantity": 1}, {
    			"item": { "item": "32", "name": "Whip"}, "quantity": 1}, {
    			"item": { "item": "33", "name": "Blowgun"}, "quantity": 1}, {
    			"item": { "item": "34", "name": "Crossbow, hand"}, "quantity": 1}, {
    			"item": { "item": "35", "name": "Crossbow, heavy"}, "quantity": 1}, {
    			"item": { "item": "36", "name": "Longbow"}, "quantity": 1}, {
    			"item": { "item": "37", "name": "Net"}, "quantity": 1}]
    	}],
    	"choice_2": [{
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "5", "name": "Javelin"}, "quantity": 5}]
    	}, {
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "1", "name": "Club"}, "quantity": 1}, {
    			"item": { "item": "2", "name": "Dagger"}, "quantity": 1}, {
    			"item": { "item": "3", "name": "Greatclub"}, "quantity": 1}, {
    			"item": { "item": "4", "name": "Handaxe"}, "quantity": 1}, {
    			"item": { "item": "5", "name": "Javelin"}, "quantity": 1}, {
    			"item": { "item": "6", "name": "Light hammer"}, "quantity": 1}, {
    			"item": { "item": "7", "name": "Mace"}, "quantity": 1}, {
    			"item": { "item": "8", "name": "Quarterstaff"}, "quantity": 1}, {
    			"item": { "item": "9", "name": "Sickle"}, "quantity": 1}, {
    			"item": { "item": "10", "name": "Spear"}, "quantity": 1}, {
    			"item": { "item": "11", "name": "Crossbow, light"}, "quantity": 1}, {
    			"item": { "item": "12", "name": "Dart"}, "quantity": 1}, {
    			"item": { "item": "13", "name": "Shortbow"}, "quantity": 1}, {
    			"item": { "item": "14", "name": "Sling"}, "quantity": 1}]
    	}],
    	"choice_3": [{
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "159", "name": "Priest's Pack"}, "quantity": 1}]
    	}, {
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "158", "name": "Explorer's Pack"}, "quantity": 1}]
    	}],
    	"choice_4": [{
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "58", "name": "Amulet"}, "quantity": 1}, {
    			"item": { "item": "93", "name": "Emblem"}, "quantity": 1}, {
    			"item": { "item": "134", "name": "Reliquary"}, "quantity": 1}]
    	}],
    	"choice_5": [{
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "15", "name": "Battleaxe"}, "quantity": 1}, {
    			"item": { "item": "16", "name": "Flail"}, "quantity": 1}, {
    			"item": { "item": "17", "name": "Glaive"}, "quantity": 1}, {
    			"item": { "item": "18", "name": "Greataxe"}, "quantity": 1}, {
    			"item": { "item": "19", "name": "Greatsword"}, "quantity": 1}, {
    			"item": { "item": "20", "name": "Halberd"}, "quantity": 1}, {
    			"item": { "item": "21", "name": "Lance"}, "quantity": 1}, {
    			"item": { "item": "22", "name": "Longsword"}, "quantity": 1}, {
    			"item": { "item": "23", "name": "Maul"}, "quantity": 1}, {
    			"item": { "item": "24", "name": "Morningstar"}, "quantity": 1}, {
    			"item": { "item": "25", "name": "Pike"}, "quantity": 1}, {
    			"item": { "item": "26", "name": "Rapier"}, "quantity": 1}, {
    			"item": { "item": "27", "name": "Scimitar"}, "quantity": 1}, {
    			"item": { "item": "28", "name": "Shortsword"}, "quantity": 1}, {
    			"item": { "item": "29", "name": "Trident"}, "quantity": 1}, {
    			"item": { "item": "30", "name": "War pick"}, "quantity": 1}, {
    			"item": { "item": "31", "name": "Warhammer"}, "quantity": 1}, {
    			"item": { "item": "32", "name": "Whip"}, "quantity": 1}, {
    			"item": { "item": "33", "name": "Blowgun"}, "quantity": 1}, {
    			"item": { "item": "34", "name": "Crossbow, hand"}, "quantity": 1}, {
    			"item": { "item": "35", "name": "Crossbow, heavy"}, "quantity": 1}, {
    			"item": { "item": "36", "name": "Longbow"}, "quantity": 1}, {
    			"item": { "item": "37", "name": "Net"}, "quantity": 1}]
    	}]
    },
    "8": {
    	"class": "Ranger",
    	"starting_equipment": [{
    		"item": { "item": "36", "name": "Longbow"}, "quantity": 1}, {
    		"item": { "item": "54", "name": "Arrow"}, "quantity": 20}],
    	"choices_to_make": 3,
    	"choice_1": [{
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "43", "name": "Scale Mail"}, "quantity": 1}]
    	}, {
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "28", "name": "Shortsword"}, "quantity": 1}]
    	}],
    	"choice_2": [{
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "156", "name": "Dungeoneer's Pack"}, "quantity": 2}]
    	}, {
    		"choose": 2,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "1", "name": "Club"}, "quantity": 1}, {
    			"item": { "item": "2", "name": "Dagger"}, "quantity": 1}, {
    			"item": { "item": "3", "name": "Greatclub"}, "quantity": 1}, {
    			"item": { "item": "4", "name": "Handaxe"}, "quantity": 1}, {
    			"item": { "item": "5", "name": "Javelin"}, "quantity": 1}, {
    			"item": { "item": "6", "name": "Light hammer"}, "quantity": 1}, {
    			"item": { "item": "7", "name": "Mace"}, "quantity": 1}, {
    			"item": { "item": "8", "name": "Quarterstaff"}, "quantity": 1}, {
    			"item": { "item": "9", "name": "Sickle"}, "quantity": 1}, {
    			"item": { "item": "10", "name": "Spear"}, "quantity": 1}]
    	}],
    	"choice_3": [{
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "156", "name": "Dungeoneer's Pack"}, "quantity": 1}]
    	}, {
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "158", "name": "Explorer's Pack"}, "quantity": 1}]
    	}]
    },
    "9": {
    	"class": "Rogue",
    	"starting_equipment": [{
    		"item": { "item": "39", "name": "Leather"}, "quantity": 1}, {
    		"item": { "item": "2", "name": "Dagger"}, "quantity": 2}, {
    		"item": { "item": "191", "name": "Thieves’ tools"}, "quantity": 1}],
    	"choices_to_make": 3,
    	"choice_1": [{
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "26", "name": "Rapier"}, "quantity": 1}]
    	}, {
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "28", "name": "Shortsword"}, "quantity": 1}]
    	}],
    	"choice_2": [{
    		"choose": 2,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "13", "name": "Shortbow"}, "quantity": 1}, {
    			"item": { "item": "54", "name": "Arrow"}, "quantity": 20}]
    	}, {
    		"choose": 2,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "28", "name": "Shortsword"}, "quantity": 1}]
    	}],
    	"choice_3": [{
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "154", "name": "Burglar's Pack"}, "quantity": 1}]
    	}, {
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "156", "name": "Dungeoneer's Pack"}, "quantity": 1}]
    	}, {
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "158", "name": "Explorer's Pack"}, "quantity": 1}]
    	}]
    },
    "10": {
    	"class": "Sorcerer",
    	"starting_equipment": [{
    	"item": { "item": "2", "name": "Dagger"}, "quantity": 2}],
    	"choices_to_make": 3,
    	"choice_1": [{
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "11", "name": "Crossbow, light"}, "quantity": 1}, {
    			"item": { "item": "56", "name": "Crossbow bolt"}, "quantity": 20}]
    	}, {
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "1", "name": "Club"}, "quantity": 1}, {
    			"item": { "item": "2", "name": "Dagger"}, "quantity": 1}, {
    			"item": { "item": "3", "name": "Greatclub"}, "quantity": 1}, {
    			"item": { "item": "4", "name": "Handaxe"}, "quantity": 1}, {
    			"item": { "item": "5", "name": "Javelin"}, "quantity": 1}, {
    			"item": { "item": "6", "name": "Light hammer"}, "quantity": 1}, {
    			"item": { "item": "7", "name": "Mace"}, "quantity": 1}, {
    			"item": { "item": "8", "name": "Quarterstaff"}, "quantity": 1}, {
    			"item": { "item": "9", "name": "Sickle"}, "quantity": 1}, {
    			"item": { "item": "10", "name": "Spear"}, "quantity": 1}, {
    			"item": { "item": "11", "name": "Crossbow, light"}, "quantity": 1}, {
    			"item": { "item": "12", "name": "Dart"}, "quantity": 1}, {
    			"item": { "item": "13", "name": "Shortbow"}, "quantity": 1}, {
    			"item": { "item": "14", "name": "Sling"}, "quantity": 1}]
    	}],
    	"choice_2": [{
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "87", "name": "Component pouch"}, "quantity": 2}]
    	}, {
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "60", "name": "Crystal"}, "quantity": 1}, {
    			"item": { "item": "61", "name": "Orb"}, "quantity": 1}, {
    			"item": { "item": "62", "name": "Rod"}, "quantity": 1}, {
    			"item": { "item": "63", "name": "Staff"}, "quantity": 1}, {
    			"item": { "item": "64", "name": "Wand"}, "quantity": 1}]
    	}],
    	"choice_3": [{
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "156", "name": "Dungeoneer's Pack"}, "quantity": 1}]
    	}, {
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "158", "name": "Explorer's Pack"}, "quantity": 1}]
    	}]
    },
    "11": {
    	"class": "Warlock",
    	"starting_equipment": [{
    		"item": { "item": "2", "name": "Dagger"}, "quantity": 2}, {
    		"item": { "item": "39", "name": "Leather"}, "quantity": 1}],
    	"choices_to_make": 4,
    	"choice_1": [{
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "11", "name": "Crossbow, light"}, "quantity": 1}, {
    			"item": { "item": "56", "name": "Crossbow bolt"}, "quantity": 20}]
    	}, {
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "1", "name": "Club"}, "quantity": 1}, {
    			"item": { "item": "2", "name": "Dagger"}, "quantity": 1}, {
    			"item": { "item": "3", "name": "Greatclub"}, "quantity": 1}, {
    			"item": { "item": "4", "name": "Handaxe"}, "quantity": 1}, {
    			"item": { "item": "5", "name": "Javelin"}, "quantity": 1}, {
    			"item": { "item": "6", "name": "Light hammer"}, "quantity": 1}, {
    			"item": { "item": "7", "name": "Mace"}, "quantity": 1}, {
    			"item": { "item": "8", "name": "Quarterstaff"}, "quantity": 1}, {
    			"item": { "item": "9", "name": "Sickle"}, "quantity": 1}, {
    			"item": { "item": "10", "name": "Spear"}, "quantity": 1}, {
    			"item": { "item": "11", "name": "Crossbow, light"}, "quantity": 1}, {
    			"item": { "item": "12", "name": "Dart"}, "quantity": 1}, {
    			"item": { "item": "13", "name": "Shortbow"}, "quantity": 1}, {
    			"item": { "item": "14", "name": "Sling"}, "quantity": 1}]
    	}],
    	"choice_2": [{
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "87", "name": "Component pouch"}, "quantity": 2}]
    	}, {
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "60", "name": "Crystal"}, "quantity": 1}, {
    			"item": { "item": "61", "name": "Orb"}, "quantity": 1}, {
    			"item": { "item": "62", "name": "Rod"}, "quantity": 1}, {
    			"item": { "item": "63", "name": "Staff"}, "quantity": 1}, {
    			"item": { "item": "64", "name": "Wand"}, "quantity": 1}]
    	}],
    	"choice_3": [{
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "160", "name": "Scholar's Pack"}, "quantity": 1}]
    	}, {
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "156", "name": "Dungeoneer's Pack"}, "quantity": 1}]
    	}],
    	"choice_4": [{
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "1", "name": "Club"}, "quantity": 1}, {
    			"item": { "item": "2", "name": "Dagger"}, "quantity": 1}, {
    			"item": { "item": "3", "name": "Greatclub"}, "quantity": 1}, {
    			"item": { "item": "4", "name": "Handaxe"}, "quantity": 1}, {
    			"item": { "item": "5", "name": "Javelin"}, "quantity": 1}, {
    			"item": { "item": "6", "name": "Light hammer"}, "quantity": 1}, {
    			"item": { "item": "7", "name": "Mace"}, "quantity": 1}, {
    			"item": { "item": "8", "name": "Quarterstaff"}, "quantity": 1}, {
    			"item": { "item": "9", "name": "Sickle"}, "quantity": 1}, {
    			"item": { "item": "10", "name": "Spear"}, "quantity": 1}, {
    			"item": { "item": "11", "name": "Crossbow, light"}, "quantity": 1}, {
    			"item": { "item": "12", "name": "Dart"}, "quantity": 1}, {
    			"item": { "item": "13", "name": "Shortbow"}, "quantity": 1}, {
    			"item": { "item": "14", "name": "Sling"}, "quantity": 1}]
    	}]
    },
    "12": {
    	"class": "Wizard",
    	"starting_equipment": [{
    	"item": { "item": "145", "name": "Spellbook"}, "quantity": 1}],
    	"choices_to_make": 4,
    	"choice_1": [{
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "2", "name": "Dagger"}, "quantity": 1}]
    	}, {
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "8", "name": "Quarterstaff"}, "quantity": 1}]
    	}],
    	"choice_2": [{
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "87", "name": "Component pouch"}, "quantity": 2}]
    	}, {
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "60", "name": "Crystal"}, "quantity": 1}, {
    			"item": { "item": "61", "name": "Orb"}, "quantity": 1}, {
    			"item": { "item": "62", "name": "Rod"}, "quantity": 1}, {
    			"item": { "item": "63", "name": "Staff"}, "quantity": 1}, {
    			"item": { "item": "64", "name": "Wand"}, "quantity": 1}]
    	}],
    	"choice_3": [{
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "160", "name": "Scholar's Pack"}, "quantity": 1}]
    	}, {
    		"choose": 1,
    		"type": "equipment",
    		"from": [{
    			"item": { "item": "156", "name": "Dungeoneer's Pack"}, "quantity": 1}]
    	}]
    }
}

export default StartingEquipment;
