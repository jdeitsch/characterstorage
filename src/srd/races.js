import Subraces from "./subraces";
import Languages from "./languages";
import Proficiencies from "./proficiencies";
import Traits from "./traits";

const Races = {
	"Dwarf": {
		"name": "Dwarf",
		"speed": 30,
		"ability_bonuses": [
			0,
			0,
			2,
			0,
			0,
			0
		],
		"alignment": "Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.",
		"age": "Dwarves mature at the same rate as humans, but they’re considered young until they reach the age of 50. On average, they live about 350 years.",
		"size": "Medium",
		"size_description": "Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.",
		"starting_proficiencies": [ Proficiencies["20"], Proficiencies["24"], Proficiencies["26"], Proficiencies["51"] ],
		"starting_proficiency_options": {
			"choose": 1,
			"type": "proficiencies",
			"from": [ Proficiencies["71"], Proficiencies["59"], Proficiencies["68"] ]
		},
		"languages": [ Languages["1"], Languages["2"] ],
		"language_options": {},
		"language_desc": "You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.",
		"traits": [ Traits["1"], Traits["2"], Traits["3"], Traits["4"] ],
		"subraces": [ Subraces['Hill Dwarf'] ]
        // , Subraces['4']
	},
	"Elf": {
		"name": "Elf",
		"speed": 30,
		"ability_bonuses": [
			0,
			2,
			0,
			0,
			0,
			0
		],
		"age": "Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",
		"alignment": "Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others’ freedom as well as their own, and they are more often good than not. The drow are an exception; their exile has made them vicious and dangerous. Drow are more often evil than not.",
		"size": "Medium",
		"size_description": "Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.",
		"starting_proficiencies": [ Proficiencies["116"] ],
		"starting_proficiency_options": {},
		"languages": [ Languages["1"], Languages["3"] ],
		"language_options": {},
		"language_desc": "You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.",
		"traits": [ Traits["1"], Traits["6"], Traits["7"], Traits["8"], Traits["8a"] ],
		"subraces": [ Subraces["High Elf"] ]
        // , Subraces["5"], Subraces["6"]
	},
	"Halfling": {
		"name": "Halfling",
		"speed": 25,
		"ability_bonuses": [
			0,
			2,
			0,
			0,
			0,
			0
		],
		"age": "A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.",
		"alignment": "Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.",
		"size": "Small",
		"size_description": "Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.",
		"starting_proficiencies": [],
		"starting_proficiency_options": {},
		"languages": [ Languages["1"], Languages["7"] ],
		"language_options": {},
		"language_desc": "You can speak, read, and write Common and Halfling. The Halfling language isn’t secret, but halflings are loath to share it with others. They write very little, so they don’t have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.",
		"traits": [ Traits["11"], Traits["12"], Traits["13"] ],
		"subraces": [ Subraces["Lightfoot Halfling"] ]
	},
	"Human": {
		"name": "Human",
		"speed": 30,
		"ability_bonuses": [
			1,
			1,
			1,
			1,
			1,
			1
		],
		"age": "Humans reach adulthood in their late teens and live less than a century.",
		"alignment": "Humans tend toward no particular alignment. The best and the worst are found among them.",
		"size": "Medium",
		"size_description": "Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.",
		"starting_proficiencies": [],
		"starting_proficiency_options": {},
		"languages": [ Languages["1"] ],
		"language_options": {
			"choose": 1,
			"type": "languages",
			"from": [ Languages["2"], Languages["3"], Languages["4"], Languages["5"], Languages["6"], Languages["7"], Languages["8"], Languages["9"],
            Languages["10"], Languages["11"], Languages["12"], Languages["13"], Languages["14"], Languages["15"], Languages["16"] ]
		},
		"language_desc": "You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.",
		"traits": [],
		"subraces": []
	},
	"Dragonborn": {
		"name": "Dragonborn",
		"speed": 30,
		"ability_bonuses": [
			2,
			0,
			0,
			0,
			0,
			1
		],
		"alignment": " Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil. Most dragonborn are good, but those who side with evil can be terrible villains.",
		"age": "Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.",
		"size": "Medium",
		"size_description": "Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.",
		"starting_proficiencies": [],
		"starting_proficiency_options": {},
		"languages": [ Languages["1"], Languages["11"] ],
		"language_options": { },
		"language_desc": "You can speak, read, and write Common and Draconic. Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.",
		"traits": [ Traits["15"], Traits["16"], Traits["17"] ],
		"trait_options":
			{
				"choose": 1,
				"from": [ Traits["16a"], Traits["16b"], Traits["16c"], Traits["16d"], Traits["16e"], Traits["16f"], Traits["16g"], Traits["16h"], Traits["16i"], Traits["16j"] ],
				"type": "trait"
			},
		"subraces": []
	},
	"Gnome": {
		"name": "Gnome",
		"speed": 25,
		"ability_bonuses": [
			0,
			0,
			0,
			2,
			0,
			0
		],
		"alignment": "Gnomes are most often good. Those who tend toward law are sages, engineers, researchers, scholars, investigators, or inventors. Those who tend toward chaos are minstrels, tricksters, wanderers, or fanciful jewelers. Gnomes are good-hearted, and even the tricksters among them are more playful than vicious.",
		"age": "Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.",
		"size": "Small",
		"size_description": "Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small.",
		"starting_proficiencies": [],
		"starting_proficiency_options": {},
		"languages": [ Languages["1"], Languages["5"] ],
		"language_options": {},
		"language_desc": " You can speak, read, and write Common and Gnomish. The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world.",
		"traits": [ Traits["1"], Traits["18"] ],
		"trait_options": {},
		"subraces": [ Subraces["Rock Gnome"] ]
        //  Subraces["7"],
	},
	"Half-Elf": {
		"name": "Half-Elf",
		"speed": 30,
		"ability_bonuses": [
			0,
			0,
			0,
			0,
			0,
			2
		],
		"alignment": "Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others' demands, and sometimes prove unreliable, or at least unpredictable.",
		"age": "Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.",
		"size": "Medium",
		"size_description": "Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.",
		"starting_proficiencies": [],
		"starting_proficiency_options": {},
		"languages": [ Languages["1"], Languages["3"] ],
		"language_options": {
			"choose": 1,
			"type": "languages",
			"from": [ Languages["2"], Languages["3"], Languages["4"], Languages["5"], Languages["6"], Languages["7"], Languages["8"], Languages["9"],
            Languages["10"], Languages["11"], Languages["12"], Languages["13"], Languages["14"], Languages["15"], Languages["16"] ]
		},
		"language_desc": "You can speak, read, and write Common, Elvish, and one extra language of your choice.",
		"traits": [ Traits["1"], Traits["7"], Traits["21"] ],
		"trait_options": {},
		"subraces": []
	},
	"Half-Orc": {
		"name": "Half-Orc",
		"speed": 30,
		"ability_bonuses": [
			2,
			0,
			1,
			0,
			0,
			0
		],
		"alignment": " Half-orcs inherit a tendency toward chaos from their orc parents and are not strongly inclined toward good. Half-orcs raised among orcs and willing to live out their lives among them are usually evil.",
		"age": "Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.",
		"size": "Medium",
		"size_description": "Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium.",
		"starting_proficiencies": [ Proficiencies["112"] ],
		"starting_proficiency_options": {},
		"languages": [ Languages["1"], Languages["8"] ],
		"language_options": {},
		"language_desc": "You can speak, read, and write Common and Orc. Orc is a harsh, grating language with hard consonants. It has no script of its own but is written in the Dwarvish script.",
		"traits": [ Traits["1"], Traits["22"], Traits["23"], Traits["24"] ],
		"trait_options": {},
		"subraces": [],
	},
	"Tiefling": {
		"name": "Tiefling",
		"speed": 30,
		"ability_bonuses": [
			0,
			0,
			0,
			1,
			0,
			2
		],
		"alignment": "Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent nature inclines many tieflings toward a chaotic alignment.",
		"age": "Tieflings mature at the same rate as humans but live a few years longer.",
		"size": "Medium",
		"size_description": "Tieflings are about the same size and build as humans. Your size is Medium.",
		"starting_proficiencies": [],
		"starting_proficiency_options": {},
		"languages": [ Languages["1"], Languages["9"] ],
		"language_options": {},
		"language_desc": "You can speak, read, and write Common and Infernal.",
		"traits": [ Traits["1"], Traits["25"], Traits["26"] ],
		"trait_options": {},
		"subraces": []
	}
}

export default Races;