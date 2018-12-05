import Spells from "./spells";
import Features from "./features";

const Subclasses = {
    "Berserker": {
    	"class": "Barbarian",
    	"name": "Berserker",
    	"subclass_flavor": "Primal Path",
    	"desc": ["For some barbarians, rage is a means to an end— that end being violence. The Path of the Berserker is a path of untrammeled fury, slick with blood. As you enter the berserker’s rage, you thrill in the chaos of battle, heedless of your own health or well-being."],
    	"features": [
    		Features["5"],
    		Features["6"]
    	]
    },
    "College of Lore": {
    	"class": "Bard",
    	"name": "College of Lore",
    	"subclass_flavor": "Bard College",
    	"desc": ["Bards of the College of Lore know something about most things, collecting bits of knowledge from sources as diverse as scholarly tomes and peasant tales. Whether singing folk ballads in taverns or elaborate compositions in royal courts, these bards use their gifts to hold audiences spellbound. When the applause dies down, the audience members might find themselves questioning everything they held to be true, from their faith in the priesthood of the local temple to their loyalty to the king. The loyalty of these bards lies in the pursuit of beauty and truth, not in fealty to a monarch or following the tenets of a deity. A noble who keeps such a bard as a herald or advisor knows that the bard would rather be honest than politic. The college's members gather in libraries and sometimes in actual colleges, complete with classrooms and dormitories, to share their lore with one another. They also meet at festivals or affairs of state, where they can expose corruption, unravel lies, and poke fun at self-important figures of authority."],
    	"features": []
    },
    "Life Domain": {
    	"class": "Cleric",
    	"name": "Life Domain",
    	"subclass_flavor": "Divine Domain",
    	"desc": ["The Life domain focuses on the vibrant positive energy—one of the fundamental forces of the universe—that sustains all life. The gods of life promote vitality and health through healing the sick and wounded, caring for those in need, and driving away the forces of death and undeath. Almost any non-evil deity can claim influence over this domain, particularly agricultural deities, sun gods, gods of healing or endurance, and gods of home and community."],
    	"features": [],
    	"spells": [{
    		"level_acquired": 1,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [],
    		"spell": Spells["28"]
    	}, {
    		"level_acquired": 1,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [],
    		"spell": Spells["66"]
    	}, {
    		"level_acquired": 3,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [],
    		"spell": Spells["167"]
    	}, {
    		"level_acquired": 3,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [],
    		"spell": Spells["265"]
    	}, {
    		"level_acquired": 5,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [],
    		"spell": Spells["24"]
    	}, {
    		"level_acquired": 5,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [],
    		"spell": Spells["236"]
    	}, {
    		"level_acquired": 7,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [],
    		"spell": Spells["71"]
    	}, {
    		"level_acquired": 9,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [],
    		"spell": Spells["184"]
    	}, {
    		"level_acquired": 9,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [],
    		"spell": Spells["226"]
    	}]
    },
    "Circle of the Land": {
    	"class": "Druid",
    	"name": "Circle of the Land",
    	"subclass_flavor": "Druid Circle",
    	"desc": ["The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle’s wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle’s mysterious rites."],
    	"features": [],
    	"spells": [{
    		"level_acquired": 3,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["105"] ],
    		"spell": Spells["151"]
    	}, {
    		"level_acquired": 3,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["105"] ],
    		"spell": Spells["263"]
    	}, {
    		"level_acquired": 5,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["105"] ],
    		"spell": Spells["257"]
    	}, {
    		"level_acquired": 5,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["105"] ],
    		"spell": Spells["258"]
    	}, {
    		"level_acquired": 7,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["105"] ],
    		"spell": Spells["123"]
    	}, {
    		"level_acquired": 7,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["105"] ],
    		"spell": Spells["152"]
    	}, {
    		"level_acquired": 9,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["105"] ],
    		"spell": Spells["45"]
    	}, {
    		"level_acquired": 9,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["105"] ],
    		"spell": Spells["47"]
    	}, {
    		"level_acquired": 3,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["106"] ],
    		"spell": Spells["196"]
    	}, {
    		"level_acquired": 3,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["106"] ],
    		"spell": Spells["198"]
    	}, {
    		"level_acquired": 5,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["106"] ],
    		"spell": Spells["297"]
    	}, {
    		"level_acquired": 5,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["106"] ],
    		"spell": Spells["298"]
    	}, {
    		"level_acquired": 7,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["106"] ],
    		"spell": Spells["60"]
    	}, {
    		"level_acquired": 7,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["106"] ],
    		"spell": Spells["123"]
    	}, {
    		"level_acquired": 9,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["106"] ],
    		"spell": Spells["52"]
    	}, {
    		"level_acquired": 9,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["106"] ],
    		"spell": Spells["241"]
    	}, {
    		"level_acquired": 3,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["107"] ],
    		"spell": Spells["32"]
    	}, {
    		"level_acquired": 3,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["107"] ],
    		"spell": Spells["253"]
    	}, {
    		"level_acquired": 5,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["107"] ],
    		"spell": Spells["62"]
    	}, {
    		"level_acquired": 5,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["107"] ],
    		"spell": Spells["222"]
    	}, {
    		"level_acquired": 7,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["107"] ],
    		"spell": Spells["29"]
    	}, {
    		"level_acquired": 7,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["107"] ],
    		"spell": Spells["141"]
    	}, {
    		"level_acquired": 9,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["107"] ],
    		"spell": Spells["160"]
    	}, {
    		"level_acquired": 9,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["107"] ],
    		"spell": Spells["294"]
    	}, {
    		"level_acquired": 3,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["108"] ],
    		"spell": Spells["23"]
    	}, {
    		"level_acquired": 3,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["108"] ],
    		"spell": Spells["262"]
    	}, {
    		"level_acquired": 5,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["108"] ],
    		"spell": Spells["34"]
    	}, {
    		"level_acquired": 5,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["108"] ],
    		"spell": Spells["210"]
    	}, {
    		"level_acquired": 7,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["108"] ],
    		"spell": Spells["83"]
    	}, {
    		"level_acquired": 7,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["108"] ],
    		"spell": Spells["123"]
    	}, {
    		"level_acquired": 9,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["108"] ],
    		"spell": Spells["46"]
    	}, {
    		"level_acquired": 9,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["108"] ],
    		"spell": Spells["284"]
    	}, {
    		"level_acquired": 3,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["109"] ],
    		"spell": Spells["160"]
    	}, {
    		"level_acquired": 3,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["109"] ],
    		"spell": Spells["203"]
    	}, {
    		"level_acquired": 5,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["109"] ],
    		"spell": Spells["70"]
    	}, {
    		"level_acquired": 5,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["109"] ],
    		"spell": Spells["143"]
    	}, {
    		"level_acquired": 7,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["109"] ],
    		"spell": Spells["83"]
    	}, {
    		"level_acquired": 7,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["109"] ],
    		"spell": Spells["123"]
    	}, {
    		"level_acquired": 9,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["109"] ],
    		"spell": Spells["89"]
    	}, {
    		"level_acquired": 9,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["109"] ],
    		"spell": Spells["160"]
    	}, {
    		"level_acquired": 3,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["110"] ],
    		"spell": Spells["262"]
    	}, {
    		"level_acquired": 3,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["110"] ],
    		"spell": Spells["263"]
    	}, {
    		"level_acquired": 5,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["110"] ],
    		"spell": Spells["170"]
    	}, {
    		"level_acquired": 5,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["110"] ],
    		"spell": Spells["189"]
    	}, {
    		"level_acquired": 7,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["110"] ],
    		"spell": Spells["267"]
    	}, {
    		"level_acquired": 7,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["110"] ],
    		"spell": Spells["268"]
    	}, {
    		"level_acquired": 9,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["110"] ],
    		"spell": Spells["204"]
    	}, {
    		"level_acquired": 9,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["110"] ],
    		"spell": Spells["294"]
    	}, {
    		"level_acquired": 3,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["111"] ],
    		"spell": Spells["1"]
    	}, {
    		"level_acquired": 3,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["111"] ],
    		"spell": Spells["68"]
    	}, {
    		"level_acquired": 5,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["111"] ],
    		"spell": Spells["298"]
    	}, {
    		"level_acquired": 5,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["111"] ],
    		"spell": Spells["266"]
    	}, {
    		"level_acquired": 7,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["111"] ],
    		"spell": Spells["123"]
    	}, {
    		"level_acquired": 7,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["111"] ],
    		"spell": Spells["172"]
    	}, {
    		"level_acquired": 9,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["111"] ],
    		"spell": Spells["160"]
    	}, {
    		"level_acquired": 9,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [ Features["111"] ],
    		"spell": Spells["241"]
    	}]
    },
    "Champion": {
    	"class": "Fighter",
    	"name": "Champion",
    	"subclass_flavor": "Martial Archetype",
    	"desc": ["The archetypal Champion focuses on the development of raw physical power honed to deadly perfection. Those who model themselves on this archetype combine rigorous training with physical excellence to deal devastating blows."],
    	"features": []
    },
    "Way of the Open Hand": {
    	"class": "Monk",
    	"name": "Way of the Open Hand",
    	"subclass_flavor": "Monastic Tradition",
    	"desc": ["Monks of the Way of the Open Hand are the ultimate masters of martial arts combat, whether armed or unarmed. They learn techniques to push and trip their opponents, manipulate ki to heal damage to their bodies, and practice advanced meditation that can protect them from harm."],
    	"features": []
    },
    "Oath of Devotion": {
    	"class": "Paladin",
    	"name": "Oath of Devotion",
    	"subclass_flavor": "Sacred Oath",
    	"desc": ["The Oath of Devotion binds a paladin to the loftiest ideals of justice, virtue, and order. Sometimes called cavaliers, white knights, or holy warriors, these paladins meet the ideal of the knight in shining armor, acting with honor in pursuit of justice and the greater good. They hold themselves to the highest standards of conduct, and some, for better or worse, hold the rest of the world to the same standards. Many who swear this oath are devoted to gods of law and good and use their gods' tenets as the measure of their devotion. They hold angels--the perfect servants of good--as their ideals, and incorporate images of angelic wings into their helmets or coats of arms."],
    	"features": [],
    	"spells": [{
    		"level_acquired": 3,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [],
    		"spell": Spells["223"]
    	}, {
    		"level_acquired": 3,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [],
    		"spell": Spells["239"]
    	}, {
    		"level_acquired": 5,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [],
    		"spell": Spells["167"]
    	}, {
    		"level_acquired": 5,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [],
    		"spell": Spells["305"]
    	}, {
    		"level_acquired": 9,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [],
    		"spell": Spells["24"]
    	}, {
    		"level_acquired": 9,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [],
    		"spell": Spells["82"]
    	}, {
    		"level_acquired": 13,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [],
    		"spell": Spells["123"]
    	}, {
    		"level_acquired": 17,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [],
    		"spell": Spells["45"]
    	}, {
    		"level_acquired": 17,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [],
    		"spell": Spells["114"]
    	}]
    },
    "Hunter": {
    	"class": "Ranger",
    	"name": "Hunter",
    	"subclass_flavor": "Ranger Archetype",
    	"desc": ["Emulating the Hunter archetype means accepting your place as a bulwark between civilization and the terrors of the wilderness. As you walk the Hunter's path, you learn specialized techniques for fighting the threats you face, from rampaging ogres and hordes of orcs to towering giants and terrifying dragons."],
    	"features": []
    },
    "Thief": {
    	"class": "Rogue",
    	"name": "Thief",
    	"subclass_flavor": "Rogue Archetype",
    	"desc": ["You hone your skills in the larcenous arts. Burglars, bandits, cutpurses, and other criminals typically follow this archetype, but so do rogues who prefer to think of themselves as professional treasure seekers, explorers, delvers, and investigators. In addition to improving your agility and stealth, you learn skills useful for delving into ancient ruins, reading unfamiliar languages, and using magic items you normally couldn't employ."],
    	"features": []
    },
    "Draconic Bloodline": {
    	"class": "Sorcerer",
    	"name": "Draconic Bloodline",
    	"subclass_flavor": "Sorcerous Origins",
    	"desc": ["Your innate magic comes from draconic magic that was mingled with your blood or that of your ancestors. Most often, sorcerers with this origin trace their descent back to a mighty sorcerer of ancient times who made a bargain with a dragon or who might even have claimed a dragon parent. Some of these bloodlines are well established in the world, but most are obscure. Any given sorcerer could be the first of a new bloodline, as a result of a pact or some other exceptional circumstance."],
    	"features": []
    },
    "Fiendish Patron": {
    	"class": "Warlock",
    	"name": "Fiendish Patron",
    	"subclass_flavor": "Otherworldly Patron",
    	"desc": ["You have made a pact with a fiend from the lower planes of existence, a being whose aims are evil, even if you strive against those aims. Such beings desire the corruption or destruction of all things, ultimately including you. Fiends powerful enough to forge a pact include demon lords such as Demogorgon, Orcus, Fraz'Urb-luu, and Baphomet; archdevils such as Asmodeus, Dispater, Mephistopheles, and Belial; pit fiends and balors that are especially mighty; and ultroloths and other lords of the yugoloths."],
    	"features": [],
    	"spells": [{
    		"level_acquired": 1,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [],
    		"spell": Spells["33"]
    	}, {
    		"level_acquired": 1,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [],
    		"spell": Spells["44"]
    	}, {
    		"level_acquired": 1,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [],
    		"spell": Spells["30"]
    	}, {
    		"level_acquired": 1,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [],
    		"spell": Spells["240"]
    	}, {
    		"level_acquired": 1,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [],
    		"spell": Spells["110"]
    	}, {
    		"level_acquired": 1,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [],
    		"spell": Spells["266"]
    	}, {
    		"level_acquired": 1,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [],
    		"spell": Spells["111"]
    	}, {
    		"level_acquired": 1,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [],
    		"spell": Spells["291"]
    	}, {
    		"level_acquired": 1,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [],
    		"spell": Spells["114"]
    	}, {
    		"level_acquired": 1,
    		"spell_acquisition_method": {
    			"name": "level"
    		},
    		"prerequisites": [],
    		"spell": Spells["140"]
    	}]
    },
    "School of Evocation": {
    	"class": "Wizard",
    	"name": "School of Evocation",
    	"subclass_flavor": "Wizard School",
    	"desc": ["You focus your study on magic that creates powerful elemental effects such as bitter cold, searing flame, rolling thunder, crackling lightning, and burning acid. Some evokers find employment in military forces, serving as artillery to blast enemy armies from afar. Others use their spectacular power to protect the weak, while some seek their own gain as bandits, adventurers, or aspiring tyrants."],
    	"features": []
    }
}

export default Subclasses;
