import AbilityScores from "./ability_scores";
import Proficiencies from "./proficiencies";
import Races from "./races";
import Skills from "./skills";
import SpellCasting from "./spellCasting";
import Subclasses from "./subclasses";
import StartingEquipment from "./startingEquipment";
import Levels from './levels';

const Classes = {
	"Barbarian": {
		"name": "Barbarian",
		"hit_die": 12,
		"skill_choices": [
			{
				"choose": 2,
				"type": "skills",
				"from": [
					Skills["2"],
					Skills["4"],
					Skills["8"],
					Skills["11"],
					Skills["12"],
					Skills["18"]
				]
			}
		],
        "proficiency_choices": [],
		"proficiencies": [
			Proficiencies["1"],
			Proficiencies["2"],
			Proficiencies["18"],
			Proficiencies["19"],
			Proficiencies["20"]
		],
		"saving_throws": [ AbilityScores[1], AbilityScores[3] ],
		"starting_equipment": StartingEquipment["1"],
		"class_levels": Levels["Barbarian"],
		"subclasses": [ Subclasses["Berserker"] ],
		"spellcasting": {}
	},
	"Bard": {
		"name": "Bard",
		"hit_die": 8,
		"proficiency_choices": [
			{
				"choose": 3,
				"type": "proficiencies",
				"from": [
					Proficiencies["81"],
					Proficiencies["82"],
					Proficiencies["83"],
					Proficiencies["84"],
					Proficiencies["85"],
					Proficiencies["86"],
					Proficiencies["87"],
					Proficiencies["88"],
					Proficiencies["89"],
					Proficiencies["90"]
				]
			}
		],
		"proficiencies": [
			Proficiencies["1"],
			Proficiencies["19"],
			Proficiencies["42"],
			Proficiencies["46"],
			Proficiencies["48"],
			Proficiencies["54"]
		],
		"saving_throws": [ AbilityScores[2], AbilityScores[6] ],
        "skill_choices": [
            {
                "choose": 3,
                "type": "skills",
                "from": [
                    Skills["1"],
                    Skills["2"],
                    Skills["3"],
                    Skills["4"],
                    Skills["5"],
                    Skills["6"],
                    Skills["7"],
                    Skills["8"],
                    Skills["9"],
                    Skills["10"],
                    Skills["11"],
                    Skills["12"],
                    Skills["13"],
                    Skills["14"],
                    Skills["15"],
                    Skills["16"],
                    Skills["17"],
                    Skills["18"]
                ]
            }
        ],
		"starting_equipment": StartingEquipment["2"],
		"class_levels": Levels["Bard"],
		"subclasses": [ Subclasses["College of Lore"] ],
		"spellcasting": SpellCasting["1"]
	},
	"Cleric": {
		"name": "Cleric",
		"hit_die": 8,
		"proficiency_choices": [],
		"proficiencies": [
			Proficiencies["1"],
			Proficiencies["2"],
			Proficiencies["18"],
			Proficiencies["19"]
		],
		"saving_throws": [ AbilityScores[5], AbilityScores[6] ],
        "skill_choices": [
            {
                "choose": 2,
                "type": "skills",
                "from": [
                    Skills["6"],
                    Skills["7"],
                    Skills["10"],
                    Skills["14"],
                    Skills["15"]
                ]
            }
        ],
		"starting_equipment": StartingEquipment["3"],
		"class_levels": Levels["Cleric"],
		"subclasses": [ Subclasses["Life Domain"] ],
		"spellcasting": SpellCasting["2"]
	},
	"Druid": {
		"name": "Druid",
		"hit_die": 8,
		"proficiency_choices": [],
		"proficiencies": [
			Proficiencies["1"],
			Proficiencies["2"],
			Proficiencies["18"],
			Proficiencies["21"],
			Proficiencies["22"],
			Proficiencies["25"],
			Proficiencies["27"],
			Proficiencies["28"],
			Proficiencies["29"],
			Proficiencies["30"],
			Proficiencies["32"],
			Proficiencies["34"],
			Proficiencies["47"],
			Proficiencies["93"]
		],
		"saving_throws": [ AbilityScores[4], AbilityScores[5] ],
        "skill_choices": [
            {
                "choose": 2,
                "type": "skills",
                "from": [
                    Skills["2"],
                    Skills["3"],
                    Skills["7"],
                    Skills["10"],
                    Skills["11"],
                    Skills["12"],
                    Skills["15"],
                    Skills["18"]
                ]
            }
        ],
		"starting_equipment": StartingEquipment["4"],
		"class_levels": Levels["Druid"],
		"subclasses": [ Subclasses["Circle of the Land"] ],
		"spellcasting": SpellCasting["3"]
	},
	"Fighter": {
		"name": "Fighter",
		"hit_die": 10,
		"proficiency_choices": [],
		"proficiencies": [
			Proficiencies["4"],
			Proficiencies["18"],
			Proficiencies["19"],
			Proficiencies["20"]
		],
		"saving_throws": [ AbilityScores[1], AbilityScores[3] ],
        "skill_choices": [
            {
                "choose": 2,
                "type": "skills",
                "from": [
                    Skills["1"],
                    Skills["2"],
                    Skills["4"],
                    Skills["6"],
                    Skills["7"],
                    Skills["8"],
                    Skills["12"],
                    Skills["18"]
                ]
            }
        ],
		"starting_equipment": StartingEquipment["5"],
		"class_levels": Levels["Fighter"],
		"subclasses": [ Subclasses["Champion"] ],
		"spellcasting": {}
	},
	"Monk": {
		"name": "Monk",
		"hit_die": 8,
		"proficiency_choices": [
			{
				"choose": 1,
				"type": "proficiencies",
				"from": [
					Proficiencies["58"],
					Proficiencies["59"],
					Proficiencies["60"],
					Proficiencies["61"],
					Proficiencies["62"],
					Proficiencies["63"],
					Proficiencies["64"],
					Proficiencies["65"],
					Proficiencies["66"],
					Proficiencies["67"],
					Proficiencies["68"],
					Proficiencies["69"],
					Proficiencies["70"],
					Proficiencies["71"],
					Proficiencies["72"],
					Proficiencies["73"],
					Proficiencies["74"],
					Proficiencies["75"],
					Proficiencies["76"]
				]
			},
			{
				"choose": 1,
				"type": "proficiencies",
				"from": [
					Proficiencies["81"],
					Proficiencies["82"],
					Proficiencies["83"],
					Proficiencies["84"],
					Proficiencies["85"],
					Proficiencies["86"],
					Proficiencies["87"],
					Proficiencies["88"],
					Proficiencies["89"],
					Proficiencies["90"]
				]
			}
		],
		"proficiencies": [
			Proficiencies["19"],
			Proficiencies["48"]
		],
		"saving_throws": [ AbilityScores[1], AbilityScores[2] ],
        "skill_choices": [
            {
                "choose": 2,
                "type": "skills",
                "from": [
                    Skills["1"],
                    Skills["4"],
                    Skills["6"],
                    Skills["7"],
                    Skills["15"],
                    Skills["17"]
                ]
            }
        ],
		"starting_equipment": StartingEquipment["6"],
		"class_levels": Levels["Monk"],
		"subclasses": [ Subclasses["Way of the Open Hand"] ],
		"spellcasting": {}
	},
	"Paladin": {
		"name": "Paladin",
		"hit_die": 10,
		"proficiency_choices": [],
		"proficiencies": [
			Proficiencies["4"],
			Proficiencies["18"],
			Proficiencies["19"],
			Proficiencies["20"]
		],
		"saving_throws": [ AbilityScores[5], AbilityScores[6] ],
        "skill_choices": [
            {
                "choose": 2,
                "type": "skills",
                "from": [
                    Skills["4"],
                    Skills["7"],
                    Skills["8"],
                    Skills["10"],
                    Skills["14"],
                    Skills["15"]
                ]
            }
        ],
		"starting_equipment": StartingEquipment["7"],
		"class_levels": Levels["Paladin"],
		"subclasses": [ Subclasses["Oath of Devotion"] ],
		"spellcasting": SpellCasting["4"]
	},
	"Ranger": {
		"name": "Ranger",
		"hit_die": 10,
		"proficiency_choices": [],
		"proficiencies": [
			Proficiencies["1"],
			Proficiencies["2"],
			Proficiencies["18"],
			Proficiencies["19"],
			Proficiencies["20"]
		],
		"saving_throws": [ AbilityScores[1], AbilityScores[2] ],
        "skill_choices": [
            {
                "choose": 3,
                "type": "skills",
                "from": [
                    Skills["2"],
                    Skills["4"],
                    Skills["7"],
                    Skills["9"],
                    Skills["11"],
                    Skills["12"],
                    Skills["17"],
                    Skills["18"]
                ]
            }
        ],
		"starting_equipment": StartingEquipment["8"],
		"class_levels": Levels["Ranger"],
		"subclasses": [ Subclasses["Hunter"] ],
		"spellcasting": SpellCasting["5"]
	},
	"Rogue": {
		"name": "Rogue",
		"hit_die": 8,
		"proficiency_choices": [],
		"proficiencies": [
			Proficiencies["1"],
			Proficiencies["19"],
			Proficiencies["42"],
			Proficiencies["46"],
			Proficiencies["48"],
			Proficiencies["54"],
			Proficiencies["96"]
		],
		"saving_throws": [ AbilityScores[2], AbilityScores[4] ],
        "skill_choices": [
            {
                "choose": 4,
                "type": "skills",
                "from": [
                    Skills["1"],
                    Skills["4"],
                    Skills["5"],
                    Skills["7"],
                    Skills["8"],
                    Skills["9"],
                    Skills["12"],
                    Skills["13"],
                    Skills["14"],
                    Skills["16"],
                    Skills["17"]
                ]
            }
        ],
		"starting_equipment": StartingEquipment["9"],
		"class_levels": Levels["Rogue"],
		"subclasses": [ Subclasses["Thief"] ],
		"spellcasting": {}
	},
	"Sorcerer": {
		"name": "Sorcerer",
		"hit_die": 6,
		"proficiency_choices": [],
		"proficiencies": [
			Proficiencies["22"],
			Proficiencies["28"],
			Proficiencies["32"],
			Proficiencies["34"]
		],
		"saving_throws": [ AbilityScores[3], AbilityScores[6] ],
        "skill_choices": [
            {
                "choose": 2,
                "type": "skills",
                "from": [
                    Skills["3"],
                    Skills["5"],
                    Skills["7"],
                    Skills["8"],
                    Skills["14"],
                    Skills["15"]
                ]
            }
        ],
		"starting_equipment": StartingEquipment["10"],
		"class_levels": Levels["Sorcerer"],
		"subclasses": [ Subclasses["Draconic Bloodline"] ],
		"spellcasting": SpellCasting["6"]
	},
	"Warlock": {
		"name": "Warlock",
		"hit_die": 8,
		"proficiency_choices": [],
		"proficiencies": [
			Proficiencies["1"],
			Proficiencies["19"]
		],
		"saving_throws": [ AbilityScores[5], AbilityScores[6] ],
        "skill_choices": [
            {
                "choose": 2,
                "type": "skills",
                "from": [
                    Skills["3"],
                    Skills["5"],
                    Skills["6"],
                    Skills["8"],
                    Skills["9"],
                    Skills["11"],
                    Skills["15"]
                ]
            }
        ],
		"starting_equipment": StartingEquipment["11"],
		"class_levels": Levels["Warlock"],
		"subclasses": [ Subclasses["Fiendish Patron"] ],
		"spellcasting": SpellCasting["7"]
	},
	"Wizard": {
		"name": "Wizard",
		"hit_die": 6,
		"proficiency_choices": [],
		"proficiencies": [
			Proficiencies["22"],
			Proficiencies["28"],
			Proficiencies["32"],
			Proficiencies["34"]
		],
		"saving_throws": [ AbilityScores[4], AbilityScores[5] ],
        "skill_choices": [
            {
                "choose": 2,
                "type": "skills",
                "from": [
                    Skills["3"],
                    Skills["6"],
                    Skills["7"],
                    Skills["9"],
                    Skills["10"],
                    Skills["15"]
                ]
            }
        ],
		"starting_equipment": StartingEquipment["12"],
		"class_levels": Levels["Wizard"],
		"subclasses": [ Subclasses["School of Evocation"] ],
		"spellcasting": SpellCasting["8"]
	}
}

export default Classes;
