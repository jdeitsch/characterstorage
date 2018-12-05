import Languages from "./languages";
import Proficiencies from "./proficiencies";
import Traits from "./traits";

const Subraces = {
    "Hill Dwarf":{
		"name": "Hill Dwarf",
		"race": "Dwarf",
		"desc": "As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience.",
		"ability_bonuses": [
			0,
			0,
			0,
			0,
			1,
			0
		],
		"starting_proficiencies:": [],
		"starting_proficiency_options": {},
		"languages": [],
		"language_options": {},
		"racial_traits": [ Traits["5"] ],
		"racial_trait_options": {}
	},
	"High Elf": {
		"name": "High Elf",
		"race": "Elf",
		"desc": "As a high elf, you have a keen mind and a mastery of at least the basics of magic. In many fantasy gaming worlds, there are two kinds of high elves. One type is haughty and reclusive, believing themselves to be superior to non-elves and even other elves. The other type is more common and more friendly, and often encountered among humans and other races.",
		"ability_bonuses": [
			0,
			0,
			0,
			1,
			0,
			0
		],
		"starting_proficiencies:": [ Proficiencies["42"], Proficiencies["48"], Proficiencies["33"], Proficiencies["56"] ],
		"starting_proficiency_options": {

		},
		"languages": [],
		"language_options": {
			"choose": 1,
			"from": [ Languages["2"], Languages["4"], Languages["5"], Languages["6"], Languages["7"], Languages["8"], Languages["9"],
            Languages["10"], Languages["11"], Languages["12"], Languages["13"], Languages["14"], Languages["15"], Languages["16"] ],
			"type": "language"
		},
		"racial_traits": [ Traits["9"] ],
		"racial_trait_options":
			{
				"choose": 1,
				"from": [ Traits["9a"], Traits["9b"], Traits["9c"], Traits["9d"], Traits["9e"], Traits["9f"], Traits["9g"], Traits["9h"], Traits["9i"], Traits["9j"], Traits["9k"] ],
				"type": "trait"
			}
	},
	"Lightfoot Halfling": {
		"name": "Lightfoot Halfling",
		"race": "Halfling",
		"desc": "As a lightfoot halfling, you can easily hide from notice, even using other people as cover. You’re inclined to be affable and get along well with others. Lightfoots are more prone to wanderlust than other halflings, and often dwell alongside other races or take up a nomadic life.",
		"ability_bonuses": [
			0,
			0,
			0,
			0,
			0,
			1
		],
		"starting_proficiencies:": [],
		"starting_proficiency_options": {},
		"languages": [],
		"language_options": {},
		"racial_traits": [ Traits["23"] ],
		"racial_trait_options": {}
	},
	"Mountain Dwarf": {
		"name": "Mountain Dwarf",
		"race": "Dwarf",
		"desc": "As a mountain dwarf, you're strong and hardy, accustomed to a difficult life in rugged terrain. You're probably on the tall side (for a dwarf), and tend toward lighter coloration.",
		"ability_bonuses": [
			2,
			0,
			0,
			0,
			0,
			0
		],
		"starting_proficiencies:": [ Proficiencies["2"], Proficiencies["3"] ],
		"starting_proficiency_options": {},
		"languages": [],
		"language_options": {},
		"racial_traits": [ Traits["35"] ],
		"racial_trait_options": {}
	},
	"Wood Elf": {
		"name": "Wood Elf",
		"race": "Elf",
		"desc": "As a wood elf, you have keen senses and intuition, and your fleet feet carry you quickly through your native forests.",
		"ability_bonuses": [
			0,
			0,
			0,
			0,
			1,
			0
		],
		"starting_proficiencies:": [ Proficiencies["42"], Proficiencies["48"], Proficiencies["33"], Proficiencies["56"] ],
		"starting_proficiency_options": {},
		"languages": [],
		"language_options": {},
		"racial_traits": [ Traits["32"], Traits["33"] ],
		"racial_trait_options": {}
	},
	"Drow": {
		"name": "Dark Elf (Drow)",
		"race": "Elf",
		"desc": "Descended from an earlier subrace of dark-skinned elves, drow were banished from the surface wordlfor following the goddess Lolth down the path of evil and corruption.",
		"ability_bonuses": [
			0,
			0,
			0,
			0,
			0,
			1
		],
		"starting_proficiencies:": [ Proficiencies["46"], Proficiencies["48"], Proficiencies["54"] ],
		"starting_proficiency_options": {},
		"languages": [],
		"language_options": {},
		"racial_traits": [ Traits["29"], Traits["30"], Traits["31"], Traits["34"] ],
		"racial_trait_options": {}
	},
    "Forest Gnome": {
        "name": "Forest Gnome",
        "race": "Gnome",
        "desc": "As a forest gnome, you have a natural knack for illusion and an inherent quickness and stealth.",
        "ability_bonuses": [
            0,
            1,
            0,
            0,
            0,
            0
        ],
        "starting_proficiencies:": [ ],
        "starting_proficiency_options": {},
        "languages": [],
        "language_options": { },
        "racial_traits": [ Traits["27"], Traits["28"] ],
        "racial_trait_options": {}
    },
    "Rock Gnome": {
        "name": "Rock Gnome",
        "race": "Gnome",
        "desc": "As a rock gnome, you have a natural inventiveness and hardiness beyond that of other gnomes.",
        "ability_bonuses": [
            0,
            0,
            1,
            0,
            0,
            0
        ],
        "starting_proficiencies:": [],
        "starting_proficiency_options": {},
        "languages": [],
        "language_options": { },
        "racial_traits": [ Traits["19"], Traits["20"] ],
        "racial_trait_options": {}
    }
}

export default Subraces;
