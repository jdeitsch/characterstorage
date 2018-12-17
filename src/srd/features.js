import SpellCasting from "./spellCasting";

const Features = {
      "1": {
    	"class": "Barbarian",
        "subclass": {},
        "name": "Rage",
        "level": 1,
        "desc": [
          "In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action. While raging, you gain the following benefits if you aren't wearing heavy armor:",
          "• You have advantage on Strength checks and Strength saving throws.",
          "• When you make a melee weapon Attack using Strength, you gain a +2 bonus to the damage roll. This bonus increases as you level.",
          "• You have Resistance to bludgeoning, piercing, and slashing damage.",
          "If you are able to cast Spells, you can't cast them or concentrate on them while raging.",
          "Your rage lasts for 1 minute. It ends early if you are knocked Unconscious or if Your Turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on Your Turn as a Bonus Action.",
          "Once you have raged the maximum number of times for your barbarian level, you must finish a Long Rest before you can rage again. You may rage 2 times at 1st level, 3 at 3rd, 4 at 6th, 5 at 12th, and 6 at 17th."
        ]
      },
      "2": {
    	"class": "Barbarian",
        "subclass": {},
        "name": "Unarmored Defense",
        "level": 1,
        "desc": [
          "While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit."
        ]
      },
      "3": {
    	"class": "Barbarian",
        "subclass": {},
        "name": "Reckless Attack",
        "level": 2,
        "desc": [
          "Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn."
        ]
      },
      "4": {
    	"class": "Barbarian",
        "subclass": {},
        "name": "Danger Sense",
        "level": 2,
        "desc": [
          "At 2nd level, you gain an uncanny sense of when things nearby aren't as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can’t be blinded, deafened, or incapacitated."
        ]
      },
      "5": {
    	"class": "Barbarian",
        "subclass": {},
        "name": "Primal Path",
        "level": 3,
        "desc": [
          "At 3rd level, you choose a path that shapes the nature of your rage. Choose the Path of the Berserker or the Path of the Totem Warrior, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels."
        ]
      },
      "6": {
    	"class": "Barbarian",
        "subclass":"Berserker",
        "name": "Frenzy",
        "level": 3,
        "desc": [
          "Starting when you choose this path at 3rd level, you can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion (as described in appendix A)."
        ]
      },
      "7": {
    	"class": "Barbarian",
        "subclass": {},
        "name": "Ability Score Improvement 1",
        "level": 4,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "8": {
    	"class": "Barbarian",
        "subclass": {},
        "name": "Extra Attack",
        "level": 5,
        "desc": [
          "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
        ]
      },
      "9": {
    	"class": "Barbarian",
        "subclass": {},
        "name": "Fast Movement",
        "level": 5,
        "desc": [
          "Starting at 5th level, your speed increases by 10 feet while you aren’t wearing heavy armor."
        ]
      },
      "10": {
    	"class": "Barbarian",
        "subclass":"Berserker",
        "name": "Mindless Rage",
        "level": 6,
        "desc": [
          "Beginning at 6th level, you can't be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage."
        ]
      },
      "11": {
    	"class": "Barbarian",
        "subclass": {},
        "name": "Feral Instinct",
        "level": 7,
        "desc": [
          "By 7th level, your instincts are so honed that you have advantage on initiative rolls.",
          "Additionally, if you are surprised at the beginning of combat and aren't incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn."
        ]
      },
      "12": {
    	"class": "Barbarian",
        "subclass": {},
        "name": "Ability Score Improvement 2",
        "level": 8,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "13": {
    	"class": "Barbarian",
        "subclass": {},
        "name": "Brutal Critical (1 die)",
        "level": 9,
        "desc": [
          "Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level and three additional dice at 17th level."
        ]
      },
      "14": {
    	"class": "Barbarian",
        "subclass":"Berserker",
        "name": "Intimidating Presence",
        "level": 10,
        "desc": [
          "Beginning at 10th level, you can use your action to frighten someone with your menacing presence. When you do so, choose one creature that you can see within 30 feet of you. If the creature can see or hear you, it must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) or be frightened of you until the end of your next turn. On subsequent turns, you can use your action to extend the duration of this effect on the frightened creature until the end of your next turn. This effect ends if the creature ends its turn out of line of sight or more than 60 feet away from you.",
          " If the creature succeeds on its saving throw, you can't use this feature on that creature again for 24 hours."
        ]
      },
      "15": {
    	"class": "Barbarian",
        "subclass": {},
        "name": "Relentless Rage",
        "level": 11,
        "desc": [
          "Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you're raging and don't die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead.",
          "Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10."
        ]
      },
      "16": {
    	"class": "Barbarian",
        "subclass": {},
        "name": "Ability Score Improvement 3",
        "level": 12,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "17": {
    	"class": "Barbarian",
        "subclass": {},
        "name": "Brutal Critical (2 dice)",
        "level": 13,
        "desc": [
          "Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level and three additional dice at 17th level."
        ]
      },
      "18": {
    	"class": "Barbarian",
        "subclass":"Berserker",
        "name": "Retaliation",
        "level": 14,
        "desc": [
          "Starting at 14th level, when you take damage from a creature that is within 5 feet of you, you can use your reaction to make a melee weapon Attack against that creature."
        ]
      },
      "19": {
    	"class": "Barbarian",
        "subclass": {},
        "name": "Persistent Rage",
        "level": 15,
        "desc": [
          "Beginning at 15th level, your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it."
        ]
      },
      "20": {
    	"class": "Barbarian",
        "subclass": {},
        "name": "Ability Score Improvement 4",
        "level": 16,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "21": {
    	"class": "Barbarian",
        "subclass": {},
        "name": "Brutal Critical (3 dice)",
        "level": 17,
        "desc": [
          "Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level and three additional dice at 17th level."
        ]
      },
      "22": {
    	"class": "Barbarian",
        "subclass": {},
        "name": "Indomitable Might",
        "level": 18,
        "desc": [
          "Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total."
        ]
      },
      "23": {
    	"class": "Barbarian",
        "subclass": {},
        "name": "Ability Score Improvement 5",
        "level": 19,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "24": {
    	"class": "Barbarian",
        "subclass": {},
        "name": "Fast Movement",
        "level": 20,
        "desc": [
          "At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24."
        ]
      },
      "25": {
    	"class": "Bard",
        "subclass": {},
        "name": "Spellcasting",
        "level": 1,
        "desc": [
          "You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music. Your spells are part of your vast repertoire, magic that you can tune to different situations."
        ],
        "reference": SpellCasting["1"]
      },
      "26": {
    	"class": "Bard",
        "subclass": {},
        "name": "Bardic Inspiration (d6)",
        "level": 1,
        "desc": [
          "You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the GM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.",
          "You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest. ",
          "Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level."
        ]
      },
      "27": {
    	"class": "Bard",
        "subclass": {},
        "name": "Jack of All Trades",
        "level": 2,
        "desc": [
          "Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn’t already include your proficiency bonus."
        ]
      },
      "28": {
    	"class": "Bard",
        "subclass": {},
        "name": "Song of Rest (d6)",
        "level": 2,
        "desc": [
          "Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points. ",
          "The extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level."
        ]
      },
      "29": {
    	"class": "Bard",
        "subclass": {},
        "name": "Bard College",
        "level": 3,
        "desc": [
          "At 3rd level, you delve into the advanced techniques of a bard college of your choice: the College of Lore or the College of Valor, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 6th and 14th level."
        ]
      },
      "30": {
    	"class": "Bard",
        "subclass":"College of Lore",
        "name": "Bonus Proficiencies",
        "level": 3,
        "desc": [
          "When you join the College of Lore at 3rd level, you gain proficiency with three skills of your choice."
        ]
      },
      "31": {
    	"class": "Bard",
        "subclass":"College of Lore",
        "name": "Cutting Words",
        "level": 3,
        "desc": [
          "Also at 3rd level, you learn how to use your wit to distract, confuse, and otherwise sap the confidence and competence of others.",
          "When a creature that you can see within 60 feet of you makes an attack roll, an ability check, or a damage roll, you can use your reaction to expend one of your uses of Bardic Inspiration, rolling a Bardic Inspiration die and subtracting the number rolled from the creature's roll.",
          "You can choose to use this feature after the creature makes its roll, but before the GM determines whether the attack roll or ability check succeeds or fails, or before the creature deals its damage. The creature is immune if it can't hear you or if it's immune to being charmed."
        ]
      },
      "32": {
    	"class": "Bard",
        "subclass": {},
        "name": "Choose: Expertise 1",
        "level": 3,
        "desc": [
          "At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies. At 10th level, you can choose another two skill proficiencies to gain this benefit."
        ],
        "choice": {
          "choose": 2,
          "type": "feature",
          "from": [ "278", "277", "261", "262", "263", "264", "265", "266", "267", "268", "269", "270", "271", "272", "273", "274", "275", "276" ]
        }
      },
      "33": {
    	"class": "Bard",
        "subclass": {},
        "name": "Expertise: Acrobatics",
        "prerequisites": [
          {
            "type": "skill",
            "proficiency": "1" }
        ],
        "desc": [
          "Your proficiency bonus is doubled for any ability check you make for this skill."
        ],
        "group": "Expertise (Bard)"
      },
      "34": {
    	"class": "Bard",
        "subclass": {},
        "name": "Expertise: Animal Handling",
        "prerequisites": [
          {
            "type": "skill",
            "proficiency": "2"  }
        ],
        "desc": [
          "Your proficiency bonus is doubled for any ability check you make for this skill."
        ],
        "group": "Expertise (Bard)"
      },
      "35": {
    	"class": "Bard",
        "subclass": {},
        "name": "Expertise: Arcana",
        "prerequisites": [
          {
            "type": "skill",
            "proficiency": "3" }
        ],
        "desc": [
          "Your proficiency bonus is doubled for any ability check you make for this skill."
        ],
        "group": "Expertise (Bard)"
      },
      "36": {
    	"class": "Bard",
        "subclass": {},
        "name": "Expertise: Athletics",
        "prerequisites": [
          {
            "type": "skill",
            "proficiency": "4" }
        ],
        "desc": [
          "Your proficiency bonus is doubled for any ability check you make for this skill."
        ],
        "group": "Expertise (Bard)"
      },
      "37": {
    	"class": "Bard",
        "subclass": {},
        "name": "Expertise: Deception",
        "prerequisites": [
          {
            "type": "skill",
            "proficiency": "5" }
        ],
        "desc": [
          "Your proficiency bonus is doubled for any ability check you make for this skill."
        ],
        "group": "Expertise (Bard)"
      },
      "38": {
    	"class": "Bard",
        "subclass": {},
        "name": "Expertise: History",
        "prerequisites": [
          {
            "type": "skill",
            "proficiency": "6" }
        ],
        "desc": [
          "Your proficiency bonus is doubled for any ability check you make for this skill."
        ],
        "group": "Expertise (Bard)"
      },
      "39": {
    	"class": "Bard",
        "subclass": {},
        "name": "Expertise: Insight",
        "prerequisites": [
          {
            "type": "skill",
            "proficiency": "7" }
        ],
        "desc": [
          "Your proficiency bonus is doubled for any ability check you make for this skill."
        ],
        "group": "Expertise (Bard)"
      },
      "40": {
    	"class": "Bard",
        "subclass": {},
        "name": "Expertise: Intimidation",
        "prerequisites": [
          {
            "type": "skill",
            "proficiency": "8" }
        ],
        "desc": [
          "Your proficiency bonus is doubled for any ability check you make for this skill."
        ],
        "group": "Expertise (Bard)"
      },
      "41": {
    	"class": "Bard",
        "subclass": {},
        "name": "Expertise: Investigation",
        "prerequisites": [
          {
            "type": "skill",
            "proficiency": "9" }
        ],
        "desc": [
          "Your proficiency bonus is doubled for any ability check you make for this skill."
        ],
        "group": "Expertise (Bard)"
      },
      "42": {
    	"class": "Bard",
        "subclass": {},
        "name": "Expertise: Medicine",
        "prerequisites": [
          {
            "type": "skill",
            "proficiency": "10" }
        ],
        "desc": [
          "Your proficiency bonus is doubled for any ability check you make for this skill."
        ],
        "group": "Expertise (Bard)"
      },
      "43": {
    	"class": "Bard",
        "subclass": {},
        "name": "Expertise: Nature",
        "prerequisites": [
          {
            "type": "skill",
            "proficiency": "11" }
        ],
        "desc": [
          "Your proficiency bonus is doubled for any ability check you make for this skill."
        ],
        "group": "Expertise (Bard)"
      },
      "44": {
    	"class": "Bard",
        "subclass": {},
        "name": "Expertise: Perception",
        "prerequisites": [
          {
            "type": "skill",
            "proficiency": "12" }
        ],
        "desc": [
          "Your proficiency bonus is doubled for any ability check you make for this skill."
        ],
        "group": "Expertise (Bard)"
      },
      "45": {
    	"class": "Bard",
        "subclass": {},
        "name": "Expertise: Performance",
        "prerequisites": [
          {
            "type": "skill",
            "proficiency": "13" }
        ],
        "desc": [
          "Your proficiency bonus is doubled for any ability check you make for this skill."
        ],
        "group": "Expertise (Bard)"
      },
      "46": {
    	"class": "Bard",
        "subclass": {},
        "name": "Expertise: Persuasion",
        "prerequisites": [
          {
            "type": "skill",
            "proficiency": "14" }
        ],
        "desc": [
          "Your proficiency bonus is doubled for any ability check you make for this skill."
        ],
        "group": "Expertise (Bard)"
      },
      "47": {
    	"class": "Bard",
        "subclass": {},
        "name": "Expertise: Religion",
        "prerequisites": [
          {
            "type": "skill",
            "proficiency": "15" }
        ],
        "desc": [
          "Your proficiency bonus is doubled for any ability check you make for this skill."
        ],
        "group": "Expertise (Bard)"
      },
      "48": {
    	"class": "Bard",
        "subclass": {},
        "name": "Expertise: Sleight of Hand",
        "prerequisites": [
          {
            "type": "skill",
            "proficiency": "16" }
        ],
        "desc": [
          "Your proficiency bonus is doubled for any ability check you make for this skill."
        ],
        "group": "Expertise (Bard)"
      },
      "49": {
    	"class": "Bard",
        "subclass": {},
        "name": "Expertise: Stealth",
        "prerequisites": [
          {
            "type": "skill",
            "proficiency": "17" }
        ],
        "desc": [
          "Your proficiency bonus is doubled for any ability check you make for this skill."
        ],
        "group": "Expertise (Bard)"
      },
      "50": {
    	"class": "Bard",
        "subclass": {},
        "name": "Expertise: Survival",
        "prerequisites": [
          {
            "type": "skill",
            "proficiency": "18" }
        ],
        "desc": [
          "Your proficiency bonus is doubled for any ability check you make for this skill."
        ],
        "group": "Expertise (Bard)"
      },
      "51": {
    	"class": "Bard",
        "subclass": {},
        "name": "Ability Score Improvement 1",
        "level": 4,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "52": {
    	"class": "Bard",
        "subclass": {},
        "name": "Bardic Inspiration (d8)",
        "level": 5,
        "desc": [
          "You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the GM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.",
          "You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest. ",
          "Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level."
        ]
      },
      "53": {
    	"class": "Bard",
        "subclass": {},
        "name": "Font of Inspiration",
        "level": 5,
        "desc": [
          "Beginning when you reach 5th level, you regain all of your expended uses of Bardic Inspiration when you finish a short or long rest."
        ]
      },
      "54": {
    	"class": "Bard",
        "subclass": {},
        "name": "Countercharm",
        "level": 6,
        "desc": [
          "At 6th level, you gain the ability to use musical notes or words of power to disrupt mind-influencing effects. As an action, you can start a performance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet of you have advantage on saving throws against being frightened or charmed. A creature must be able to hear you to gain this benefit. The performance ends early if you are incapacitated or silenced or if you voluntarily end it (no action required)."
        ]
      },
      "55": {
    	"class": "Bard",
        "subclass":"College of Lore",
        "name": "Additional Magical Secrets",
        "level": 6,
        "desc": [
          "At 6th level, you learn two spells of your choice from any class. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. The chosen spells count as bard spells for you but don't count against the number of bard spells you know."
        ]
      },
      "56": {
    	"class": "Bard",
        "subclass": {},
        "name": "Ability Score Improvement 2",
        "level": 8,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "57": {
    	"class": "Bard",
        "subclass": {},
        "name": "Song of Rest (d8)",
        "level": 9,
        "desc": [
          "Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points. ",
          "The extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level."
        ]
      },
      "58": {
    	"class": "Bard",
        "subclass": {},
        "name": "Bardic Inspiration (d10)",
        "level": 10,
        "desc": [
          "You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the GM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.",
          "You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest. ",
          "Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level."
        ]
      },
      "59": {
    	"class": "Bard",
        "subclass": {},
        "name": "Choose: Expertise 2",
        "level": 10,
        "desc": [
          "At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies. At 10th level, you can choose another two skill proficiencies to gain this benefit."
        ],
        "choice": {
          "choose": 2,
          "type": "feature",
          "from": [ "278", "277", "261", "262", "263", "264", "265", "266", "267", "268", "269", "270", "271", "272", "273", "274", "275", "276" ]
        }
      },
      "60": {
    	"class": "Bard",
        "subclass": {},
        "name": "Magical Secrets 1",
        "level": 10,
        "desc": [
          "By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any class, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. ",
          "The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table. ",
          "You learn two additional spells from any class at 14th level and again at 18th level."
        ]
      },
      "61": {
    	"class": "Bard",
        "subclass": {},
        "name": "Ability Score Improvement 3",
        "level": 12,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "62": {
    	"class": "Bard",
        "subclass": {},
        "name": "Song of Rest (d10)",
        "level": 13,
        "desc": [
          "Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points. ",
          "The extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level."
        ]
      },
      "63": {
    	"class": "Bard",
        "subclass": {},
        "name": "Magical Secrets 2",
        "level": 14,
        "desc": [
          "By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any class, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. ",
          "The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table. ",
          "You learn two additional spells from any class at 14th level and again at 18th level."
        ]
      },
      "64": {
    	"class": "Bard",
        "subclass":"College of Lore",
        "name": "Peerless Skill",
        "level": 14,
        "desc": [
          "Starting at 14th level, when you make an ability check, you can expend one use of Bardic Inspiration. Roll a Bardic Inspiration die and add the number rolled to your ability check. You can choose to do so after you roll the die for the ability check, but before the GM tells you whether you succeed or fail."
        ]
      },
      "65": {
    	"class": "Bard",
        "subclass": {},
        "name": "Bardic Inspiration (d12)",
        "level": 15,
        "desc": [
          "You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the GM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.",
          "You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest. ",
          "Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level."
        ]
      },
      "66": {
    	"class": "Bard",
        "subclass": {},
        "name": "Ability Score Improvement 4",
        "level": 16,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "67": {
    	"class": "Bard",
        "subclass": {},
        "name": "Song of Rest (d12)",
        "level": 17,
        "desc": [
          "Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points. ",
          "The extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level."
        ]
      },
      "68": {
    	"class": "Bard",
        "subclass": {},
        "name": "Magical Secrets 3",
        "level": 18,
        "desc": [
          "By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any class, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. ",
          "The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table. ",
          "You learn two additional spells from any class at 14th level and again at 18th level."
        ]
      },
      "69": {
    	"class": "Bard",
        "subclass": {},
        "name": "Ability Score Improvement 5",
        "level": 19,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "70": {
    	"class": "Bard",
        "subclass": {},
        "name": "Superior Inspiration",
        "level": 20,
        "desc": [
          "At 20th level, when you roll initiative and have no uses of Bardic Inspiration left, you regain one use."
        ]
      },
      "71": {
    	"class": "Cleric",
        "subclass": {},
        "name": "Spellcasting",
        "level": 1,
        "desc": [
          "As a conduit for divine power, you can cast cleric spells."
        ],
        "reference": SpellCasting["2"]
      },
      "72": {
    	"class": "Cleric",
        "subclass": {},
        "name": "Divine Domain",
        "level": 1,
        "desc": [
          "Choose one domain related to your deity: Knowledge, Life, Light, Nature, Tempest, Trickery, or War.",
          "Your domain grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels."
        ]
      },
      "73": {
    	"class": "Cleric",
        "subclass": {},
        "name": "Domain Spells 1",
        "level": 1,
        "desc": [
          "Each domain has a list of spells—its domain spells— that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day.",
          "If you have a domain spell that doesn’t appear on the cleric spell list, the spell is nonetheless a cleric spell for you."
        ]
      },
      "74": {
    	"class": "Cleric",
        "subclass":"Life Domain",
        "name": "Bonus Proficiency",
        "level": 1,
        "desc": [
          "When you choose this domain at 1st level, you gain proficiency with heavy armor."
        ]
      },
      "75": {
    	"class": "Cleric",
        "subclass":"Life Domain",
        "name": "Disciple of Life",
        "level": 1,
        "desc": [
          "Also starting at 1st level, your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spell’s level."
        ]
      },
      "76": {
    	"class": "Cleric",
        "subclass": {},
        "name": "Channel Divinity (1/rest)",
        "level": 2,
        "desc": [
          "At 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain. Some domains grant you additional effects as you advance in levels, as noted in the domain description.",
          "When you use your Channel Divinity, you choose which effect to create. You must then finish a short or long rest to use your Channel Divinity again.",
          "Some Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your cleric spell save DC.",
          "Beginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses."
        ]
      },
      "77": {
    	"class": "Cleric",
        "subclass": {},
        "name": "Channel Divinity: Turn Undead",
        "level": 2,
        "desc": [
          "As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.",
          "A turned creature must spend its turns trying to move as far away from you as it can, and it can’t willingly move to a space within 30 feet of you. It also can’t take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there’s nowhere to move, the creature can use the Dodge action."
        ]
      },
      "78": {
    	"class": "Cleric",
        "subclass":"Life Domain",
        "name": "Channel Divinity: Preserve Life",
        "level": 2,
        "desc": [
          "Starting at 2nd level, you can use your Channel Divinity to heal the badly injured.",
          "As an action, you present your holy symbol and evoke healing energy that can restore a number of hit points equal to five times your cleric level.",
          "Choose any creatures within 30 feet of you, and divide those hit points among them. This feature can restore a creature to no more than half of its hit point maximum. You can’t use this feature on an undead or a construct."
        ]
      },
      "79": {
    	"class": "Cleric",
        "subclass": {},
        "name": "Domain Spells 2",
        "level": 3,
        "desc": [
          "Each domain has a list of spells—its domain spells— that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day.",
          "If you have a domain spell that doesn’t appear on the cleric spell list, the spell is nonetheless a cleric spell for you."
        ]
      },
      "80": {
    	"class": "Cleric",
        "subclass": {},
        "name": "Ability Score Improvement 1",
        "level": 4,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "81": {
    	"class": "Cleric",
        "subclass": {},
        "name": "Domain Spells 3",
        "level": 5,
        "desc": [
          "Each domain has a list of spells—its domain spells— that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day.",
          "If you have a domain spell that doesn’t appear on the cleric spell list, the spell is nonetheless a cleric spell for you."
        ]
      },
      "82": {
    	"class": "Cleric",
        "subclass": {},
        "name": "Destroy Undead (CR 1/2 or below)",
        "level": 5,
        "desc": [
          "Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold."
        ]
      },
      "83": {
    	"class": "Cleric",
        "subclass": {},
        "name": "Channel Divinity (2/rest)",
        "level": 6,
        "desc": [
          "Beginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses."
        ]
      },
      "84": {
    	"class": "Cleric",
        "subclass":"Life Domain",
        "name": "Blessed Healer",
        "level": 6,
        "desc": [
          "Beginning at 6th level, the healing spells you cast on others heal you as well. When you cast a spell of 1st level or higher that restores hit points to a creature other than you, you regain hit points equal to 2 + the spell’s level."
        ]
      },
      "85": {
    	"class": "Cleric",
        "subclass": {},
        "name": "Domain Spells 4",
        "level": 7,
        "desc": [
          "Each domain has a list of spells—its domain spells— that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day.",
          "If you have a domain spell that doesn’t appear on the cleric spell list, the spell is nonetheless a cleric spell for you."
        ]
      },
      "86": {
    	"class": "Cleric",
        "subclass": {},
        "name": "Ability Score Improvement 2",
        "level": 8,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "87": {
    	"class": "Cleric",
        "subclass": {},
        "name": "Destroy Undead (CR 1 or below)",
        "level": 8,
        "desc": [
          "Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold."
        ]
      },
      "88": {
    	"class": "Cleric",
        "subclass":"Life Domain",
        "name": "Divine Strike",
        "level": 8,
        "desc": [
          "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8."
        ]
      },
      "89": {
    	"class": "Cleric",
        "subclass": {},
        "name": "Domain Spells 5",
        "level": 9,
        "desc": [
          "Each domain has a list of spells—its domain spells— that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day.",
          "If you have a domain spell that doesn’t appear on the cleric spell list, the spell is nonetheless a cleric spell for you."
        ]
      },
      "90": {
    	"class": "Cleric",
        "subclass": {},
        "name": "Divine Intervention",
        "level": 10,
        "desc": [
          "Beginning at 10th level, you can call on your deity to intervene on your behalf when your need is great.",
          "Imploring your deity’s aid requires you to use your action. Describe the assistance you seek, and roll percentile dice. If you roll a number equal to or lower than your cleric level, your deity intervenes. The GM chooses the nature of the intervention; the effect of any cleric spell or cleric domain spell would be appropriate.",
          "If your deity intervenes, you can’t use this feature again for 7 days. Otherwise, you can use it again after you finish a long rest.",
          "At 20th level, your call for intervention succeeds automatically, no roll required."
        ]
      },
      "91": {
    	"class": "Cleric",
        "subclass": {},
        "name": "Destroy Undead (CR 2 or below)",
        "level": 11,
        "desc": [
          "Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold."
        ]
      },
      "92": {
    	"class": "Cleric",
        "subclass": {},
        "name": "Ability Score Improvement 3",
        "level": 12,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "93": {
    	"class": "Cleric",
        "subclass": {},
        "name": "Destroy Undead (CR 3 or below)",
        "level": 14,
        "desc": [
          "Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold."
        ]
      },
      "94": {
    	"class": "Cleric",
        "subclass": {},
        "name": "Ability Score Improvement 4",
        "level": 16,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "95": {
    	"class": "Cleric",
        "subclass": {},
        "name": "Destroy Undead (CR 4 or below)",
        "level": 17,
        "desc": [
          "Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold."
        ]
      },
      "96": {
    	"class": "Cleric",
        "subclass": {},
        "name": "Supreme Healing",
        "level": 17,
        "desc": [
          "Starting at 17th level, when you would normally roll one or more dice to restore hit points with a spell, you instead use the highest number possible for each die. For example, instead of restoring 2d6 hit points to a creature, you restore 12."
        ]
      },
      "97": {
    	"class": "Cleric",
        "subclass": {},
        "name": "Channel Divinity (3/rest)",
        "level": 18,
        "desc": [
          "Beginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses."
        ]
      },
      "98": {
    	"class": "Cleric",
        "subclass": {},
        "name": "Ability Score Improvement 5",
        "level": 19,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "99": {
    	"class": "Cleric",
        "subclass": {},
        "name": "Divine Intervention Improvement",
        "level": 20,
        "desc": [
          "At 20th level, your call for intervention succeeds automatically, no roll required."
        ]
      },
      "100": {
    	"class": "Druid",
        "subclass": {},
        "name": "Spellcasting",
        "level": 1,
        "desc": [
          "Drawing on the divine essence of nature itself, you can cast spells to shape that essence to your will."
        ],
        "reference": SpellCasting["3"]
      },
      "101": {
    	"class": "Druid",
        "subclass": {},
        "name": "Druidic",
        "level": 1,
        "desc": [
          "You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message's presence with a successful DC 15 Wisdom (Perception) check but can't decipher it without magic."
        ]
      },
      "102": {
    	"class": "Druid",
        "subclass": {},
        "name": "Wild Shape (CR 1/4 or below, no flying or swim speed)",
        "level": 2,
        "desc": [
          "Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.",
          "Your druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn't have a flying or swimming speed.",
          "You can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.",
          "While you are transformed, the following rules apply:",
          "• Your game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creature's bonus instead of yours. If the creature has any legendary or lair actions, you can't use them.",
          "• When you transform, you assume the beast's hit points and Hit Dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. For example, if you take 10 damage in animal form and have only 1 hit point left, you revert and take 9 damage. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious.",
          "• You can't cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn't break your concentration on a spell you've already cast, however, or prevent you from taking actions that are part of a spell, such as call lightning, that you've already cast.",
          "• You retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you can't use any of your special senses, such as darkvision, unless your new form also has that sense.",
          "• You choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the GM decides whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form."
        ]
      },
      "103": {
    	"class": "Druid",
        "subclass": {},
        "name": "Druid Circle",
        "level": 2,
        "desc": [
          "At 2nd level, you choose to identify with a circle of druids: the Circle of the Land or the Circle of the Moon, both detailed at the end of the class description. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level."
        ]
      },
      "104": {
    	"class": "Druid",
        "subclass":"Circle of the Land",
        "name": "Choose: Circle of the Land",
        "level": 2,
        "desc": [
          "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle’s wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle’s mysterious rites."
        ],
        "choice": {
          "choose": 1,
          "type": "feature",
          "from": [ "105", "106", "107", "108", "109", "110", "111" ]
        }
      },
      "105": {
    	"class": "Druid",
        "subclass":"Circle of the Land",
        "name": "Circle of the Land: Arctic",
        "level": 2,
        "desc": [
          "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle’s wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle’s mysterious rites."
        ],
        "group": "Circle of the Land"
      },
      "106": {
    	"class": "Druid",
        "subclass":"Circle of the Land",
        "name": "Circle of the Land: Coast",
        "level": 2,
        "desc": [
          "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle’s wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle’s mysterious rites."
        ],
        "group": "Circle of the Land"
      },
      "107": {
    	"class": "Druid",
        "subclass":"Circle of the Land",
        "name": "Circle of the Land: Desert",
        "level": 2,
        "desc": [
          "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle’s wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle’s mysterious rites."
        ],
        "group": "Circle of the Land"
      },
      "108": {
    	"class": "Druid",
        "subclass":"Circle of the Land",
        "name": "Circle of the Land: Forest",
        "level": 2,
        "desc": [
          "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle’s wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle’s mysterious rites."
        ],
        "group": "Circle of the Land"
      },
      "109": {
    	"class": "Druid",
        "subclass":"Circle of the Land",
        "name": "Circle of the Land: Grassland",
        "level": 2,
        "desc": [
          "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle’s wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle’s mysterious rites."
        ],
        "group": "Circle of the Land"
      },
      "110": {
    	"class": "Druid",
        "subclass":"Circle of the Land",
        "name": "Circle of the Land: Mountain",
        "level": 2,
        "desc": [
          "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle’s wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle’s mysterious rites."
        ],
        "group": "Circle of the Land"
      },
      "111": {
    	"class": "Druid",
        "subclass":"Circle of the Land",
        "name": "Circle of the Land: Swamp",
        "level": 2,
        "desc": [
          "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle’s wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle’s mysterious rites."
        ],
        "group": "Circle of the Land"
      },
      "112": {
    	"class": "Druid",
        "subclass":"Circle of the Land",
        "name": "Bonus Cantrip",
        "level": 2,
        "desc": [
          "When you choose this circle at 2nd level, you learn one additional druid cantrip of your choice."
        ]
      },
      "113": {
    	"class": "Druid",
        "subclass":"Circle of the Land",
        "name": "Natural Recovery",
        "level": 2,
        "desc": [
          "Starting at 2nd level, you can regain some of your magical energy by sitting in meditation and communing with nature. During a short rest, you choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your druid level (rounded up), and none of the slots can be 6th level or higher. You can’t use this feature again until you finish a long rest.",
          "For example, when you are a 4th-level druid, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level slot or two 1st-level slots."
        ]
      },
      "114": {
    	"class": "Druid",
        "subclass":"Circle of the Land",
        "name": "Circle Spells 1",
        "level": 3,
        "desc": [
          "Your mystical connection to the land infuses you with the ability to cast certain spells. At 3rd, 5th, 7th, and 9th level you gain access to circle spells connected to the land where you became a druid.",
          "Choose that land—arctic, coast, desert, forest, grassland, mountain, or swamp—and consult the associated list of spells.",
          "Once you gain access to a circle spell, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day. If you gain access to a spell that doesn’t appear on the druid spell list, the spell is nonetheless a druid spell for you."
        ]
      },
      "115": {
    	"class": "Druid",
        "subclass": {},
        "name": "Wild Shape (CR 1/2 or below, no flying speed)",
        "level": 4,
        "desc": [
          "Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.",
          "Your druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn't have a flying or swimming speed.",
          "You can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.",
          "While you are transformed, the following rules apply:",
          "• Your game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creature's bonus instead of yours. If the creature has any legendary or lair actions, you can't use them.",
          "• When you transform, you assume the beast's hit points and Hit Dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. For example, if you take 10 damage in animal form and have only 1 hit point left, you revert and take 9 damage. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious.",
          "• You can't cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn't break your concentration on a spell you've already cast, however, or prevent you from taking actions that are part of a spell, such as call lightning, that you've already cast.",
          "• You retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you can't use any of your special senses, such as darkvision, unless your new form also has that sense.",
          "• You choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the GM decides whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form."
        ]
      },
      "116": {
    	"class": "Druid",
        "subclass": {},
        "name": "Ability Score Improvement 1",
        "level": 4,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ]
      },
      "117": {
    	"class": "Druid",
        "subclass":"Circle of the Land",
        "name": "Circle Spells 2",
        "level": 5,
        "desc": [
          "Your mystical connection to the land infuses you with the ability to cast certain spells. At 3rd, 5th, 7th, and 9th level you gain access to circle spells connected to the land where you became a druid.",
          "Choose that land—arctic, coast, desert, forest, grassland, mountain, or swamp—and consult the associated list of spells.",
          "Once you gain access to a circle spell, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day. If you gain access to a spell that doesn’t appear on the druid spell list, the spell is nonetheless a druid spell for you."
        ]
      },
      "118": {
    	"class": "Druid",
        "subclass":"Circle of the Land",
        "name": "Land's Stride",
        "level": 6,
        "desc": [
          "Starting at 6th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.",
          "In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the entangle spell."
        ]
      },
      "119": {
    	"class": "Druid",
        "subclass":"Circle of the Land",
        "name": "Circle Spells 3",
        "level": 7,
        "desc": [
          "Your mystical connection to the land infuses you with the ability to cast certain spells. At 3rd, 5th, 7th, and 9th level you gain access to circle spells connected to the land where you became a druid.",
          "Choose that land—arctic, coast, desert, forest, grassland, mountain, or swamp—and consult the associated list of spells.",
          "Once you gain access to a circle spell, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day. If you gain access to a spell that doesn’t appear on the druid spell list, the spell is nonetheless a druid spell for you."
        ]
      },
      "120": {
    	"class": "Druid",
        "subclass": {},
        "name": "Wild Shape (CR 1 or below)",
        "level": 8,
        "desc": [
          "Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.",
          "Your druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn't have a flying or swimming speed.",
          "You can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.",
          "While you are transformed, the following rules apply:",
          "• Your game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creature's bonus instead of yours. If the creature has any legendary or lair actions, you can't use them.",
          "• When you transform, you assume the beast's hit points and Hit Dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. For example, if you take 10 damage in animal form and have only 1 hit point left, you revert and take 9 damage. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious.",
          "• You can't cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn't break your concentration on a spell you've already cast, however, or prevent you from taking actions that are part of a spell, such as call lightning, that you've already cast.",
          "• You retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you can't use any of your special senses, such as darkvision, unless your new form also has that sense.",
          "• You choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the GM decides whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form."
        ]
      },
      "121": {
    	"class": "Druid",
        "subclass": {},
        "name": "Ability Score Improvement 2",
        "level": 8,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ]
      },
      "122": {
    	"class": "Druid",
        "subclass":"Circle of the Land",
        "name": "Circle Spells 4",
        "level": 9,
        "desc": [
          "Your mystical connection to the land infuses you with the ability to cast certain spells. At 3rd, 5th, 7th, and 9th level you gain access to circle spells connected to the land where you became a druid.",
          "Choose that land—arctic, coast, desert, forest, grassland, mountain, or swamp—and consult the associated list of spells.",
          "Once you gain access to a circle spell, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day. If you gain access to a spell that doesn’t appear on the druid spell list, the spell is nonetheless a druid spell for you."
        ]
      },
      "123": {
    	"class": "Druid",
        "subclass":"Circle of the Land",
        "name": "Nature's Ward",
        "level": 10,
        "desc": [
          "When you reach 10th level, you can't be charmed or frightened by elementals or fey, and you are immune to poison and disease."
        ]
      },
      "124": {
    	"class": "Druid",
        "subclass": {},
        "name": "Ability Score Improvement 3",
        "level": 12,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ]
      },
      "125": {
    	"class": "Druid",
        "subclass":"Circle of the Land",
        "name": "Nature's Sanctuary",
        "level": 14,
        "desc": [
          "When you reach 14th level, creatures of the natural world sense your connection to nature and become hesitant to attack you. When a beast or plant creature attacks you, that creature must make a Wisdom saving throw against your druid spell save DC. On a failed save, the creature must choose a different target, or the attack automatically misses. On a successful save, the creature is immune to this effect for 24 hours. The creature is aware of this effect before it makes its attack against you."
        ]
      },
      "126": {
    	"class": "Druid",
        "subclass": {},
        "name": "Ability Score Improvement 4",
        "level": 16,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ]
      },
      "127": {
    	"class": "Druid",
        "subclass": {},
        "name": "Timeless Body",
        "level": 18,
        "desc": [
          "Starting at 18th level, the primal magic that you wield causes you to age more slowly. For every 10 years that pass, your body ages only 1 year."
        ]
      },
      "128": {
    	"class": "Druid",
        "subclass": {},
        "name": "Beast Spells",
        "level": 18,
        "desc": [
          "Beginning at 18th level, you can cast many of your druid spells in any shape you assume using Wild Shape. You can perform the somatic and verbal components of a druid spell while in a beast shape, but you aren't able to provide material components."
        ]
      },
      "129": {
    	"class": "Druid",
        "subclass": {},
        "name": "Ability Score Improvement 5",
        "level": 19,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ]
      },
      "130": {
    	"class": "Druid",
        "subclass": {},
        "name": "Archdruid",
        "level": 20,
        "desc": [
          "At 20th level, you can use your Wild Shape an unlimited number of times.",
          "Additionally, you can ignore the verbal and somatic components of your druid spells, as well as any material components that lack a cost and aren't consumed by a spell. You gain this benefit in both your normal shape and your beast shape from Wild Shape."
        ]
      },
      "131": {
    	"class": "Fighter",
        "subclass": {},
        "name": "Choose: Fighting Style",
        "level": 1,
        "desc": [
          "You adopt a particular style of fighting as your specialty. Choose one of the following options. You can’t take a Fighting Style option more than once, even if you later get to choose again."
        ],
        "choice": {
          "choose": 1,
          "type": "feature",
          "from": [ "132", "133", "134", "135", "136", "137" ]
        }
      },
      "132": {
    	"class": "Fighter",
        "subclass": {},
        "name": "Fighting Style: Archery",
        "level": 1,
        "desc": [
          "You gain a +2 bonus to attack rolls you make with ranged weapons."
        ],
        "group": "Fighting Style (Fighter)"
      },
      "133": {
    	"class": "Fighter",
        "subclass": {},
        "name": "Fighting Style: Defense",
        "level": 1,
        "desc": [
          "While you are wearing armor, you gain a +1 bonus to AC."
        ],
        "group": "Fighting Style (Fighter)"
      },
      "134": {
    	"class": "Fighter",
        "subclass": {},
        "name": "Fighting Style: Dueling",
        "level": 1,
        "desc": [
          "When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon."
        ],
        "group": "Fighting Style (Fighter)"
      },
      "135": {
    	"class": "Fighter",
        "subclass": {},
        "name": "Fighting Style: Great Weapon Fighting",
        "level": 1,
        "desc": [
          "When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit."
        ],
        "group": "Fighting Style (Fighter)"
      },
      "136": {
    	"class": "Fighter",
        "subclass": {},
        "name": "Fighting Style: Protection",
        "level": 1,
        "desc": [
          "When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield."
        ],
        "group": "Fighting Style (Fighter)"
      },
      "137": {
    	"class": "Fighter",
        "subclass": {},
        "name": "Fighting Style: Two-Weapon Fighting",
        "level": 1,
        "desc": [
          "When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack."
        ],
        "group": "Fighting Style (Fighter)"
      },
      "138": {
    	"class": "Fighter",
        "subclass": {},
        "name": "Second Wind",
        "level": 1,
        "desc": [
          "You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again."
        ]
      },
      "139": {
    	"class": "Fighter",
        "subclass": {},
        "name": "Action Surge (1 use)",
        "level": 2,
        "desc": [
          "Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action.",
          "Once you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn."
        ]
      },
      "140": {
    	"class": "Fighter",
        "subclass": {},
        "name": "Martial Archetype",
        "level": 3,
        "desc": [
          "At 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques. Choose Champion, Battle Master, or Eldritch Knight, all detailed at the end of the class description. The archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level."
        ]
      },
      "141": {
    	"class": "Fighter",
        "subclass":"Champion",
        "name": "Improved Critical",
        "level": 3,
        "desc": [
          "Beginning when you choose this archetype at 3rd level, your weapon attacks score a critical hit on a roll of 19 or 20."
        ]
      },
      "142": {
    	"class": "Fighter",
        "subclass": {},
        "name": "Ability Score Improvement 1",
        "level": 4,
        "desc": [
          "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ]
      },
      "143": {
    	"class": "Fighter",
        "subclass": {},
        "name": "Extra Attack (1)",
        "level": 5,
        "desc": [
          "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. The number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class."
        ]
      },
      "144": {
    	"class": "Fighter",
        "subclass": {},
        "name": "Ability Score Improvement 2",
        "level": 6,
        "desc": [
          "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ]
      },
      "145": {
    	"class": "Fighter",
        "subclass":"Champion",
        "name": "Remarkable Athlete",
        "level": 7,
        "desc": [
          "Starting at 7th level, you can add half your proficiency bonus (round up) to any Strength, Dexterity, or Constitution check you make that doesn’t already use your proficiency bonus. In addition, when you make a running long jump, the distance you can cover increases by a number of feet equal to your Strength modifier."
        ]
      },
      "146": {
    	"class": "Fighter",
        "subclass": {},
        "name": "Ability Score Improvement 3",
        "level": 8,
        "desc": [
          "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ]
      },
      "147": {
    	"class": "Fighter",
        "subclass": {},
        "name": "Indomitable (1 use)",
        "level": 9,
        "desc": [
          "Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can’t use this feature again until you finish a long rest. You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level."
        ]
      },
      "148": {
    	"class": "Fighter",
        "subclass":"Champion",
        "name": "Choose: Additional Fighting Style",
        "level": 10,
        "desc": [
          "At 10th level, you can choose a second option from the Fighting Style class feature. Superior Critical Starting at 15th level, your weapon attacks score a critical hit on a roll of 18–20."
        ],
        "choice": {
          "choose": 1,
          "type": "feature",
          "from": [ "132", "133", "134", "135", "136", "137" ]
        }
      },
      "149": {
    	"class": "Fighter",
        "subclass": {},
        "name": "Extra Attack (2)",
        "level": 11,
        "desc": [
          "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. The number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class."
        ]
      },
      "150": {
    	"class": "Fighter",
        "subclass": {},
        "name": "Ability Score Improvement 4",
        "level": 12,
        "desc": [
          "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ]
      },
      "151": {
    	"class": "Fighter",
        "subclass": {},
        "name": "Indomitable (2 uses)",
        "level": 13,
        "desc": [
          "Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can’t use this feature again until you finish a long rest. You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level."
        ]
      },
      "152": {
    	"class": "Fighter",
        "subclass": {},
        "name": "Ability Score Improvement 5",
        "level": 14,
        "desc": [
          "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ]
      },
      "153": {
    	"class": "Fighter",
        "subclass":"Champion",
        "name": "Superior Critical",
        "level": 15,
        "desc": [
          "Starting at 15th level, your weapon attacks score a critical hit on a roll of 18–20."
        ]
      },
      "154": {
    	"class": "Fighter",
        "subclass": {},
        "name": "Ability Score Improvement 6",
        "level": 16,
        "desc": [
          "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ]
      },
      "155": {
    	"class": "Fighter",
        "subclass": {},
        "name": "Action Surge (2 uses)",
        "level": 2,
        "desc": [
          "Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action.",
          "Once you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn."
        ]
      },
      "156": {
    	"class": "Fighter",
        "subclass": {},
        "name": "Indomitable (3 uses)",
        "level": 17,
        "desc": [
          "Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can’t use this feature again until you finish a long rest. You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level."
        ]
      },
      "157": {
    	"class": "Fighter",
        "subclass":"Champion",
        "name": "Survivor",
        "level": 18,
        "desc": [
          "At 18th level, you attain the pinnacle of resilience in battle. At the start of each of your turns, you regain hit points equal to 5 + your Constitution modifier if you have no more than half of your hit points left. You don’t gain this benefit if you have 0 hit points."
        ]
      },
      "158": {
    	"class": "Fighter",
        "subclass": {},
        "name": "Ability Score Improvement 7",
        "level": 19,
        "desc": [
          "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ]
      },
      "159": {
    	"class": "Fighter",
        "subclass": {},
        "name": "Extra Attack (3)",
        "level": 20,
        "desc": [
          "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. The number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class."
        ]
      },
      "160": {
    	"class": "Monk",
        "subclass": {},
        "name": "Unarmored Defense",
        "level": 1,
        "desc": [
          "Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier."
        ]
      },
      "161": {
    	"class": "Monk",
        "subclass": {},
        "name": "Martial Arts",
        "level": 1,
        "desc": [
          "At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don’t have the two- handed or heavy property.",
          "You gain the following benefits while you are unarmed or wielding only monk weapons and you aren’t wearing armor or wielding a shield:",
          "• You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.",
          "• You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of Table: The Monk.",
          "• When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven’t already taken a bonus action this turn.",
          "Certain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama). Whatever name you use for a monk weapon, you can use the game statistics provided for the weapon."
        ]
      },
      "162": {
    	"class": "Monk",
        "subclass": {},
        "name": "Ki",
        "level": 2,
        "desc": [
          "Starting at 2nd level, your training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have, as shown in the Ki Points column of Table: The Monk.",
          "You can spend these points to fuel various ki features. You start knowing three such features: Flurry of Blows, Patient Defense, and Step of the Wind. You learn more ki features as you gain levels in this class.",
          "When you spend a ki point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points.",
          "Some of your ki features require your target to make a saving throw to resist the feature’s effects. The saving throw DC is calculated as follows:",
          "Ki save DC = 8 + your proficiency bonus + your Wisdom modifier"
        ]
      },
      "163": {
    	"class": "Monk",
        "subclass": {},
        "name": "Flurry of Blows",
        "level": 2,
        "desc": [
          "Immediately after you take the Attack action on your turn, you can spend 1 ki point to make two unarmed strikes as a bonus action."
        ]
      },
      "164": {
    	"class": "Monk",
        "subclass": {},
        "name": "Patient Defense",
        "level": 2,
        "desc": [
          "You can spend 1 ki point to take the Dodge action as a bonus action on your turn."
        ]
      },
      "165": {
    	"class": "Monk",
        "subclass": {},
        "name": "Step of the Wind",
        "level": 2,
        "desc": [
          "You can spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn."
        ]
      },
      "166": {
    	"class": "Monk",
        "subclass": {},
        "name": "Unarmored Movement 1",
        "level": 2,
        "desc": [
          "Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in Table: The Monk.",
          "At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move."
        ]
      },
      "167": {
    	"class": "Monk",
        "subclass": {},
        "name": "Monastic Tradition",
        "level": 3,
        "desc": [
          "When you reach 3rd level, you commit yourself to a monastic tradition: the Way of the Open Hand, the Way of Shadow, or the Way of the Four Elements, all detailed at the end of the class description. Your tradition grants you features at 3rd level and again at 6th, 11th, and 17th level."
        ]
      },
      "168": {
    	"class": "Monk",
        "subclass": {},
        "name": "Deflect Missiles",
        "level": 3,
        "desc": [
          "Starting at 3rd level, you can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + your Dexterity modifier + your monk level.",
          "If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack with the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack, which has a normal range of 20 feet and a long range of 60 feet."
        ]
      },
      "169": {
    	"class": "Monk",
        "subclass":"Way of the Open Hand",
        "name": "Open Hand Technique",
        "level": 3,
        "desc": [
          "Starting when you choose this tradition at 3rd level, you can manipulate your enemy’s ki when you harness your own. Whenever you hit a creature with one of the attacks granted by your Flurry of Blows, you can impose one of the following effects on that target:",
          "• It must succeed on a Dexterity saving throw or be knocked prone.",
          "• It must make a Strength saving throw. If it fails, you can push it up to 15 feet away from you.",
          "• It can’t take reactions until the end of your next turn."
        ]
      },
      "170": {
    	"class": "Monk",
        "subclass": {},
        "name": "Ability Score Improvement 1",
        "level": 4,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "171": {
    	"class": "Monk",
        "subclass": {},
        "name": "Slow Fall",
        "level": 4,
        "desc": [
          "Beginning at 4th level, you can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level."
        ]
      },
      "172": {
    	"class": "Monk",
        "subclass": {},
        "name": "Extra Attack",
        "level": 5,
        "desc": [
          "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
        ]
      },
      "173": {
    	"class": "Monk",
        "subclass": {},
        "name": "Stunning Strike",
        "level": 5,
        "desc": [
          "Starting at 5th level, you can interfere with the flow of ki in an opponent’s body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn."
        ]
      },
      "174": {
    	"class": "Monk",
        "subclass": {},
        "name": "Ki Empowered Strikes",
        "level": 6,
        "desc": [
          "Starting at 6th level, your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage."
        ]
      },
      "175": {
    	"class": "Monk",
        "subclass":"Way of the Open Hand",
        "name": "Wholeness of Body",
        "level": 6,
        "desc": [
          "At 6th level, you gain the ability to heal yourself. As an action, you can regain hit points equal to three times your monk level. You must finish a long rest before you can use this feature again."
        ]
      },
      "176": {
    	"class": "Monk",
        "subclass": {},
        "name": "Evasion",
        "level": 7,
        "desc": [
          "At 7th level, your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon’s lightning breath or a fireball spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail."
        ]
      },
      "177": {
    	"class": "Monk",
        "subclass": {},
        "name": "Stillness of Mind",
        "level": 7,
        "desc": [
          "Starting at 7th level, you can use your action to end one effect on yourself that is causing you to be charmed or frightened."
        ]
      },
      "178": {
    	"class": "Monk",
        "subclass": {},
        "name": "Ability Score Improvement 2",
        "level": 8,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "179": {
    	"class": "Monk",
        "subclass": {},
        "name": "Unarmored Movement 2",
        "level": 9,
        "desc": [
          "Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in Table: The Monk.",
          "At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move."
        ]
      },
      "180": {
    	"class": "Monk",
        "subclass": {},
        "name": "Purity of Body",
        "level": 10,
        "desc": [
          "At 10th level, your mastery of the ki flowing through you makes you immune to disease and poison."
        ]
      },
      "181": {
    	"class": "Monk",
        "subclass":"Way of the Open Hand",
        "name": "Tranquility",
        "level": 11,
        "desc": [
          "Beginning at 11th level, you can enter a special meditation that surrounds you with an aura of peace. At the end of a long rest, you gain the effect of a sanctuary spell that lasts until the start of your next long rest (the spell can end early as normal). The saving throw DC for the spell equals 8 + your Wisdom modifier + your proficiency bonus."
        ]
      },
      "182": {
    	"class": "Monk",
        "subclass": {},
        "name": "Ability Score Improvement 3",
        "level": 12,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "183": {
    	"class": "Monk",
        "subclass": {},
        "name": "Tongue of the Sun and Moon",
        "level": 13,
        "desc": [
          "Starting at 13th level, you learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say."
        ]
      },
      "184": {
    	"class": "Monk",
        "subclass": {},
        "name": "Diamond Soul",
        "level": 14,
        "desc": [
          "Beginning at 14th level, your mastery of ki grants you proficiency in all saving throws.",
          "Additionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result."
        ]
      },
      "185": {
    	"class": "Monk",
        "subclass": {},
        "name": "Timeless Body",
        "level": 15,
        "desc": [
          "At 15th level, your ki sustains you so that you suffer none of the frailty of old age, and you can’t be aged magically. You can still die of old age, however. In addition, you no longer need food or water."
        ]
      },
      "186": {
    	"class": "Monk",
        "subclass": {},
        "name": "Ability Score Improvement 4",
        "level": 16,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "187": {
    	"class": "Monk",
        "subclass":"Way of the Open Hand",
        "name": "Quivering Palm",
        "level": 17,
        "desc": [
          "At 17th level, you gain the ability to set up lethal vibrations in someone’s body. When you hit a creature with an unarmed strike, you can spend 3 ki points to start these imperceptible vibrations, which last for a number of days equal to your monk level. The vibrations are harmless unless you use your action to end them. To do so, you and the target must be on the same plane of existence. When you use this action, the creature must make a Constitution saving throw. If it fails, it is reduced to 0 hit points. If it succeeds, it takes 10d10 necrotic damage.",
          "You can have only one creature under the effect of this feature at a time. You can choose to end the vibrations harmlessly without using an action."
        ]
      },
      "188": {
    	"class": "Monk",
        "subclass": {},
        "name": "Empty Body",
        "level": 18,
        "desc": [
          "Beginning at 18th level, you can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but force damage.",
          "Additionally, you can spend 8 ki points to cast the astral projection spell, without needing material components. When you do so, you can’t take any other creatures with you."
        ]
      },
      "189": {
    	"class": "Monk",
        "subclass": {},
        "name": "Ability Score Improvement 5",
        "level": 19,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "190": {
    	"class": "Monk",
        "subclass": {},
        "name": "Perfect Self",
        "level": 20,
        "desc": [
          "At 20th level, when you roll for initiative and have no ki points remaining, you regain 4 ki points."
        ]
      },
      "191": {
    	"class": "Paladin",
        "subclass": {},
        "name": "Divine Sense",
        "level": 1,
        "desc": [
          "The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity. Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the hallow spell.",
          "You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses."
        ]
      },
      "192": {
    	"class": "Paladin",
        "subclass": {},
        "name": "Lay on Hands",
        "level": 1,
        "desc": [
          "Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level × 5.",
          "As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool.",
          "Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one.",
          "This feature has no effect on undead and constructs."
        ]
      },
      "193": {
    	"class": "Paladin",
        "subclass": {},
        "name": "Choose: Fighting Style",
        "level": 2,
        "desc": [
          "At 2nd level, you adopt a style of fighting as your specialty. Choose one of the following options. You can’t take a Fighting Style option more than once, even if you later get to choose again."
        ],
        "choice": {
          "choose": 1,
          "type": "feature",
          "from": [ "194", "195", "196", "197" ]
        }
      },
      "194": {
    	"class": "Paladin",
        "subclass": {},
        "name": "Fighting Style: Defense",
        "level": 2,
        "desc": [
          "While you are wearing armor, you gain a +1 bonus to AC."
        ],
        "group": "Fighting Style (Paladin)"
      },
      "195": {
    	"class": "Paladin",
        "subclass": {},
        "name": "Fighting Style: Dueling",
        "level": 2,
        "desc": [
          "When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon."
        ],
        "group": "Fighting Style (Paladin)"
      },
      "196": {
    	"class": "Paladin",
        "subclass": {},
        "name": "Fighting Style: Great Weapon Fighting",
        "level": 2,
        "desc": [
          "When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll. The weapon must have the two-handed or versatile property for you to gain this benefit."
        ],
        "group": "Fighting Style (Paladin)"
      },
      "197": {
    	"class": "Paladin",
        "subclass": {},
        "name": "Fighting Style: Protection",
        "level": 2,
        "desc": [
          "When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield."
        ],
        "group": "Fighting Style (Paladin)"
      },
      "198": {
    	"class": "Paladin",
        "subclass": {},
        "name": "Spellcasting",
        "level": 2,
        "desc": [
          "By 2nd level, you have learned to draw on divine magic through meditation and prayer to cast spells as a cleric does."
        ],
        "reference": SpellCasting["4"]
      },
      "199": {
    	"class": "Paladin",
        "subclass": {},
        "name": "Divine Smite",
        "level": 2,
        "desc": [
          "Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapon’s damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend."
        ]
      },
      "200": {
    	"class": "Paladin",
        "subclass": {},
        "name": "Divine Health",
        "level": 3,
        "desc": [
          "By 3rd level, the divine magic flowing through you makes you immune to disease."
        ]
      },
      "201": {
    	"class": "Paladin",
        "subclass": {},
        "name": "Sacred Oath",
        "level": 3,
        "desc": [
          "When you reach 3rd level, you swear the oath that binds you as a paladin forever. Up to this time you have been in a preparatory stage, committed to the path but not yet sworn to it. Now you choose the Oath of Devotion, the Oath of the Ancients, or the Oath of Vengeance, all detailed at the end of the class description.",
          "Your choice grants you features at 3rd level and again at 7th, 15th, and 20th level. Those features include oath spells and the Channel Divinity feature."
        ]
      },
      "202": {
    	"class": "Paladin",
        "subclass": {},
        "name": "Oath Spells",
        "level": 3,
        "desc": [
          "Each oath has a list of associated spells. You gain access to these spells at the levels specified in the oath description. Once you gain access to an oath spell, you always have it prepared. Oath spells don’t count against the number of spells you can prepare each day.",
          "If you gain an oath spell that doesn’t appear on the paladin spell list, the spell is nonetheless a paladin spell for you."
        ]
      },
      "203": {
    	"class": "Paladin",
        "subclass": {},
        "name": "Channel Divinity",
        "level": 3,
        "desc": [
          "Your oath allows you to channel divine energy to fuel magical effects. Each Channel Divinity option provided by your oath explains how to use it.",
          "When you use your Channel Divinity, you choose which option to use. You must then finish a short or long rest to use your Channel Divinity again.",
          "Some Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your paladin spell save DC."
        ]
      },
      "204": {
    	"class": "Paladin",
        "subclass":"Oath of Devotion",
        "name": "Channel Divinity: Sacred Weapon",
        "level": 3,
        "desc": [
          "As an action, you can imbue one weapon that you are holding with positive energy, using your Channel Divinity. For 1 minute, you add your Charisma modifier to attack rolls made with that weapon (with a minimum bonus of +1). The weapon also emits bright light in a 20-foot radius and dim light 20 feet beyond that. If the weapon is not already magical, it becomes magical for the duration.",
          "You can end this effect on your turn as part of any other action. If you are no longer holding or carrying this weapon, or if you fall unconscious, this effect ends."
        ]
      },
      "205": {
    	"class": "Paladin",
        "subclass":"Oath of Devotion",
        "name": "Channel Divinity: Turn the Unholy",
        "level": 3,
        "desc": [
          "As an action, you present your holy symbol and speak a prayer censuring fiends and undead, using your Channel Divinity. Each fiend or undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes damage.",
          "A turned creature must spend its turns trying to move as far away from you as it can, and it can’t willingly move to a space within 30 feet of you. It also can’t take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there’s nowhere to move, the creature can use the Dodge action."
        ]
      },
      "206": {
    	"class": "Paladin",
        "subclass": {},
        "name": "Ability Score Improvement 1",
        "level": 4,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "207": {
    	"class": "Paladin",
        "subclass": {},
        "name": "Extra Attack",
        "level": 5,
        "desc": [
          "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
        ]
      },
      "208": {
    	"class": "Paladin",
        "subclass": {},
        "name": "Aura of Protection",
        "level": 6,
        "desc": [
          "Starting at 6th level, whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1). You must be conscious to grant this bonus.",
          "At 18th level, the range of this aura increases to 30 feet."
        ]
      },
      "209": {
    	"class": "Paladin",
        "subclass":"Oath of Devotion",
        "name": "Aura of Devotion",
        "level": 7,
        "desc": [
          "Starting at 7th level, you and friendly creatures within 10 feet of you can’t be charmed while you are conscious.",
          "At 18th level, the range of this aura increases to 30 feet."
        ]
      },
      "210": {
    	"class": "Paladin",
        "subclass": {},
        "name": "Ability Score Improvement 2",
        "level": 8,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "211": {
    	"class": "Paladin",
        "subclass": {},
        "name": "Aura of Courage",
        "level": 10,
        "desc": [
          "Starting at 10th level, you and friendly creatures within 10 feet of you can’t be frightened while you are conscious.",
          "At 18th level, the range of this aura increases to 30 feet."
        ]
      },
      "212": {
    	"class": "Paladin",
        "subclass": {},
        "name": "Improved Divine Smite",
        "level": 11,
        "desc": [
          "By 11th level, you are so suffused with righteous might that all your melee weapon strikes carry divine power with them. Whenever you hit a creature with a melee weapon, the creature takes an extra 1d8 radiant damage. If you also use your Divine Smite with an attack, you add this damage to the extra damage of your Divine Smite."
        ]
      },
      "213": {
    	"class": "Paladin",
        "subclass": {},
        "name": "Ability Score Improvement 3",
        "level": 12,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "214": {
    	"class": "Paladin",
        "subclass": {},
        "name": "Cleansing Touch",
        "level": 14,
        "desc": [
          "Beginning at 14th level, you can use your action to end one spell on yourself or on one willing creature that you touch.",
          "You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain expended uses when you finish a long rest."
        ]
      },
      "215": {
    	"class": "Paladin",
        "subclass":"Oath of Devotion",
        "name": "Purity of Spirit",
        "level": 15,
        "desc": [
          "Beginning at 15th level, you are always under the effects of a protection from evil and good spell."
        ]
      },
      "216": {
    	"class": "Paladin",
        "subclass": {},
        "name": "Ability Score Improvement 4",
        "level": 16,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "217": {
    	"class": "Paladin",
        "subclass": {},
        "name": "Aura improvements",
        "level": 18,
        "desc": [
          "At 18th level, the range of your auras increase to 30 feet."
        ]
      },
      "218": {
    	"class": "Paladin",
        "subclass": {},
        "name": "Ability Score Improvement 5",
        "level": 19,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "219": {
    	"class": "Paladin",
        "subclass":"Oath of Devotion",
        "name": "Nimbus",
        "level": 20,
        "desc": [
          "At 20th level, as an action, you can emanate an aura of sunlight. For 1 minute, bright light shines from you in a 30-foot radius, and dim light shines 30 feet beyond that.",
          "Whenever an enemy creature starts its turn in the bright light, the creature takes 10 radiant damage.",
          "In addition, for the duration, you have advantage on saving throws against spells cast by fiends or undead."
        ]
      },
      "220": {
    	"class": "Ranger",
        "subclass": {},
        "name": "Favored Enemy (1 type)",
        "level": 1,
        "desc": [
          "Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.",
          "Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.",
          "You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.",
          "When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.",
          "You choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures."
        ]
      },
      "221": {
    	"class": "Ranger",
        "subclass": {},
        "name": "Natural Explorer (1 terrain type)",
        "level": 1,
        "desc": [
          "You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, or swamp. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you’re proficient in.",
          "While traveling for an hour or more in your favored terrain, you gain the following benefits:",
          "• Difficult terrain doesn’t slow your group’s travel.",
          "• Your group can’t become lost except by magical means.",
          "• Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.",
          "• If you are traveling alone, you can move stealthily at a normal pace.",
          "• When you forage, you find twice as much food as you normally would.",
          "• While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.",
          "You choose additional favored terrain types at 6th and 10th level."
        ]
      },
      "222": {
    	"class": "Ranger",
        "subclass": {},
        "name": "Choose: Fighting Style",
        "level": 2,
        "desc": [
          "At 2nd level, you adopt a particular style of fighting as your specialty. Choose one of the following options. You can’t take a Fighting Style option more than once, even if you later get to choose again."
        ],
        "choice": {
          "choose": 1,
          "type": "feature",
          "from": [ "223", "224", "225", "226" ]
        }
      },
      "223": {
    	"class": "Ranger",
        "subclass": {},
        "name": "Fighting Style: Archery",
        "level": 2,
        "desc": [
          "You gain a +2 bonus to attack rolls you make with ranged weapons."
        ],
        "group": "Fighting Style (Ranger)"
      },
      "224": {
    	"class": "Ranger",
        "subclass": {},
        "name": "Fighting Style: Defense",
        "level": 2,
        "desc": [
          "While you are wearing armor, you gain a +1 bonus to AC."
        ],
        "group": "Fighting Style (Ranger)"
      },
      "225": {
    	"class": "Ranger",
        "subclass": {},
        "name": "Fighting Style: Dueling",
        "level": 2,
        "desc": [
          "When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon."
        ],
        "group": "Fighting Style (Ranger)"
      },
      "226": {
    	"class": "Ranger",
        "subclass": {},
        "name": "Fighting Style: Two-Weapon Fighting",
        "level": 2,
        "desc": [
          "When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack."
        ],
        "group": "Fighting Style (Ranger)"
      },
      "227": {
    	"class": "Ranger",
        "subclass": {},
        "name": "Spellcasting",
        "level": 2,
        "desc": [
          "By the time you reach 2nd level, you have learned to use the magical essence of nature to cast spells, much as a druid does."
        ],
        "reference": SpellCasting["5"]
      },
      "228": {
    	"class": "Ranger",
        "subclass": {},
        "name": "Ranger Archetype",
        "level": 3,
        "desc": [
          "At 3rd level, you choose an archetype that you strive to emulate: Hunter or Beast Master, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 7th, 11th, and 15th level."
        ]
      },
      "229": {
    	"class": "Ranger",
        "subclass":"Hunter",
        "name": "Choose: Hunter's Prey",
        "level": 3,
        "desc": [
          "At 3rd level, you gain one of the following features of your choice.",
          "Colossus Slayer",
          "Giant Killer",
          "Horde Breaker"
        ],
        "choice": {
          "choose": 1,
          "type": "feature",
          "from": [ "230", "231", "232" ]
        }
      },
      "230": {
    	"class": "Ranger",
        "subclass":"Hunter",
        "name": "Hunter's Prey: Colossus Slayer",
        "level": 3,
        "desc": [
          "Your tenacity can wear down the most potent foes. When you hit a creature with a weapon attack, the creature takes an extra 1d8 damage if it’s below its hit point maximum. You can deal this extra damage only once per turn."
        ],
        "group": "Hunter's Prey"
      },
      "231": {
    	"class": "Ranger",
        "subclass":"Hunter",
        "name": "Hunter's Prey: Giant Killer",
        "level": 3,
        "desc": [
          "When a Large or larger creature within 5 feet of you hits or misses you with an attack, you can use your reaction to attack that creature immediately after its attack, provided that you can see the creature."
        ],
        "group": "Hunter's Prey"
      },
      "232": {
    	"class": "Ranger",
        "subclass":"Hunter",
        "name": "Hunter's Prey: Horde Breaker",
        "level": 3,
        "desc": [
          "Once on each of your turns when you make a weapon attack, you can make another attack with the same weapon against a different creature that is within 5 feet of the original target and within range of your weapon."
        ],
        "group": "Hunter's Prey"
      },
      "233": {
    	"class": "Ranger",
        "subclass": {},
        "name": "Primeval Awareness",
        "level": 3,
        "desc": [
          "Beginning at 3rd level, you can use your action and expend one ranger spell slot to focus your awareness on the region around you. For 1 minute per level of the spell slot you expend, you can sense whether the following types of creatures are present within 1 mile of you (or within up to 6 miles if you are in your favored terrain): aberrations, celestials, dragons, elementals, fey, fiends, and undead. This feature doesn’t reveal the creatures’ location or number."
        ]
      },
      "234": {
    	"class": "Ranger",
        "subclass": {},
        "name": "Ability Score Improvement 1",
        "level": 4,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "235": {
    	"class": "Ranger",
        "subclass": {},
        "name": "Extra Attack",
        "level": 5,
        "desc": [
          "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
        ]
      },
      "236": {
    	"class": "Ranger",
        "subclass": {},
        "name": "Favored Enemy (2 types)",
        "level": 6,
        "desc": [
          "Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.",
          "Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.",
          "You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.",
          "When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.",
          "You choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures."
        ]
      },
      "237": {
    	"class": "Ranger",
        "subclass": {},
        "name": "Natural Explorer (2 terrain types)",
        "level": 6,
        "desc": [
          "You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, or swamp. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you’re proficient in.",
          "While traveling for an hour or more in your favored terrain, you gain the following benefits:",
          "• Difficult terrain doesn’t slow your group’s travel.",
          "• Your group can’t become lost except by magical means.",
          "• Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.",
          "• If you are traveling alone, you can move stealthily at a normal pace.",
          "• When you forage, you find twice as much food as you normally would.",
          "• While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.",
          "You choose additional favored terrain types at 6th and 10th level."
        ]
      },
      "238": {
    	"class": "Ranger",
        "subclass":"Hunter",
        "name": "Choose: Defensive Tactics",
        "level": 7,
        "desc": [
          "At 7th level, you gain one of the following features of your choice.",
          "Escape the Horde",
          "Multiattack Defense",
          "Steel Will"
        ],
        "choice": {
          "choose": 1,
          "type": "feature",
          "from": [ "239", "240", "241" ]
        }
      },
      "239": {
    	"class": "Ranger",
        "subclass":"Hunter",
        "name": "Defensive Tactics: Escape the Horde",
        "level": 7,
        "desc": [
          "Opportunity attacks against you are made with disadvantage."
        ],
        "group": "Defensive Tactics"
      },
      "240": {
    	"class": "Ranger",
        "subclass":"Hunter",
        "name": "Defensive Tactics: Multiattack Defense",
        "level": 7,
        "desc": [
          "When a creature hits you with an attack, you gain a +4 bonus to AC against all subsequent attacks made by that creature for the rest of the turn."
        ],
        "group": "Defensive Tactics"
      },
      "241": {
    	"class": "Ranger",
        "subclass":"Hunter",
        "name": "Defensive Tactics: Steel Will",
        "level": 7,
        "desc": [
          "You have advantage on saving throws against being frightened."
        ],
        "group": "Defensive Tactics"
      },
      "242": {
    	"class": "Ranger",
        "subclass": {},
        "name": "Ability Score Improvement 2",
        "level": 8,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "243": {
    	"class": "Ranger",
        "subclass": {},
        "name": "Land’s Stride",
        "level": 8,
        "desc": [
          "Starting at 8th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.",
          "In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the entangle spell."
        ]
      },
      "244": {
    	"class": "Ranger",
        "subclass": {},
        "name": "Natural Explorer (3 terrain types)",
        "level": 10,
        "desc": [
          "You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, or swamp. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you’re proficient in.",
          "While traveling for an hour or more in your favored terrain, you gain the following benefits:",
          "• Difficult terrain doesn’t slow your group’s travel.",
          "• Your group can’t become lost except by magical means.",
          "• Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.",
          "• If you are traveling alone, you can move stealthily at a normal pace.",
          "• When you forage, you find twice as much food as you normally would.",
          "• While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.",
          "You choose additional favored terrain types at 6th and 10th level."
        ]
      },
      "245": {
    	"class": "Ranger",
        "subclass": {},
        "name": "Hide in Plain Sight",
        "level": 10,
        "desc": [
          "Starting at 10th level, you can spend 1 minute creating camouflage for yourself. You must have access to fresh mud, dirt, plants, soot, and other naturally occurring materials with which to create your camouflage.",
          "Once you are camouflaged in this way, you can try to hide by pressing yourself up against a solid surface, such as a tree or wall, that is at least as tall and wide as you are. You gain a +10 bonus to Dexterity (Stealth) checks as long as you remain there without moving or taking actions. Once you move or take an action or a reaction, you must camouflage yourself again to gain this benefit."
        ]
      },
      "246": {
    	"class": "Ranger",
        "subclass":"Hunter",
        "name": "Choose: Multiattack",
        "level": 11,
        "desc": [
          "At 11th level, you gain one of the following features of your choice.",
          "Volley",
          "Whirlwind Attack"
        ],
        "choice": {
          "choose": 1,
          "type": "feature",
          "from": [ "247", "248" ]
        }
      },
      "247": {
    	"class": "Ranger",
        "subclass":"Hunter",
        "name": "Multiattack: Volley",
        "level": 11,
        "desc": [
          "You can use your action to make a ranged attack against any number of creatures within 10 feet of a point you can see within your weapon’s range. You must have ammunition for each target, as normal, and you make a separate attack roll for each target."
        ],
        "group": "Multiattack"
      },
      "248": {
    	"class": "Ranger",
        "subclass":"Hunter",
        "name": "Multiattack: Whirlwind Attack",
        "level": 11,
        "desc": [
          "You can use your action to make a melee attack against any number of creatures within 5 feet of you, with a separate attack roll for each target."
        ],
        "group": "Multiattack"
      },
      "249": {
    	"class": "Ranger",
        "subclass": {},
        "name": "Ability Score Improvement 4",
        "level": 12,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "250": {
    	"class": "Ranger",
        "subclass": {},
        "name": "Favored Enemy (3 enemies)",
        "level": 14,
        "desc": [
          "Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.",
          "Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.",
          "You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.",
          "When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.",
          "You choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures."
        ]
      },
      "251": {
    	"class": "Ranger",
        "subclass": {},
        "name": "Vanish",
        "level": 14,
        "desc": [
          "Starting at 14th level, you can use the Hide action as a bonus action on your turn. Also, you can’t be tracked by nonmagical means, unless you choose to leave a trail."
        ]
      },
      "252": {
    	"class": "Ranger",
        "subclass":"Hunter",
        "name": "Choose: Superior Hunter's Defense",
        "level": 15,
        "desc": [
          "At 15th level, you gain one of the following features of your choice.",
          "Evasion",
          "Stand Against the Tide",
          "Uncanny Dodge"
        ],
        "choice": {
          "choose": 1,
          "type": "feature",
          "from": [ "253", "254", "255" ]
        }
      },
      "253": {
    	"class": "Ranger",
        "subclass":"Hunter",
        "name": "Superior Hunter's Defense: Evasion",
        "level": 15,
        "desc": [
          "When you are subjected to an effect, such as a red dragon’s fiery breath or a lightning bolt spell, that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail."
        ],
        "group": "Superior Hunter's Defense"
      },
      "254": {
    	"class": "Ranger",
        "subclass":"Hunter",
        "name": "Superior Hunter's Defense: Stand Against the Tide",
        "level": 15,
        "desc": [
          "When a hostile creature misses you with a melee attack, you can use your reaction to force that creature to repeat the same attack against another creature (other than itself) of your choice."
        ],
        "group": "Superior Hunter's Defense"
      },
      "255": {
    	"class": "Ranger",
        "subclass":"Hunter",
        "name": "Superior Hunter's Defense: Uncanny Dodge",
        "level": 15,
        "desc": [
          "When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack’s damage against you."
        ],
        "group": "Superior Hunter's Defense"
      },
      "256": {
    	"class": "Ranger",
        "subclass": {},
        "name": "Ability Score Improvement 4",
        "level": 16,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "257": {
    	"class": "Ranger",
        "subclass": {},
        "name": "Feral Senses",
        "level": 18,
        "desc": [
          "At 18th level, you gain preternatural senses that help you fight creatures you can’t see. When you attack a creature you can’t see, your inability to see it doesn’t impose disadvantage on your attack rolls against it.",
          "You are also aware of the location of any invisible creature within 30 feet of you, provided that the creature isn’t hidden from you and you aren’t blinded or deafened."
        ]
      },
      "258": {
    	"class": "Ranger",
        "subclass": {},
        "name": "Ability Score Improvement 5",
        "level": 19,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "259": {
    	"class": "Ranger",
        "subclass": {},
        "name": "Foe Slayer",
        "level": 20,
        "desc": [
          "At 20th level, you become an unparalleled hunter of your enemies. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make against one of your favored enemies. You can choose to use this feature before or after the roll, but before any effects of the roll are applied."
        ]
      },
      "260": {
    	"class": "Rogue",
        "subclass": {},
        "name": "Choose: Expertise 1",
        "level": 1,
        "desc": [
          "At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves’ tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.",
          "At 6th level, you can choose two more of your proficiencies (in skills or with thieves’ tools) to gain this benefit"
        ],
        "choice": {
          "choose": 2,
          "type": "feature",
          "from": [ "278", "277", "261", "262", "263", "264", "265", "266", "267", "268", "269", "270", "271", "272", "273", "274", "275", "276" ]
        }
      },
      "261": {
    	"class": "Rogue",
        "subclass": {},
        "name": "Expertise: Acrobatics",
        "prerequisites": [
          {
            "type": "skill",
            "proficiency": "1" }
        ],
        "desc": [
          "Your proficiency bonus is doubled for any ability check you make for this skill."
        ],
        "group": "Expertise (Rogue)"
      },
      "262": {
    	"class": "Rogue",
        "subclass": {},
        "name": "Expertise: Animal Handling",
        "prerequisites": [
          {
            "type": "skill",
            "proficiency": "2" }
        ],
        "desc": [
          "Your proficiency bonus is doubled for any ability check you make for this skill."
        ],
        "group": "Expertise (Rogue)"
      },
      "263": {
    	"class": "Rogue",
        "subclass": {},
        "name": "Expertise: Arcana",
        "prerequisites": [
          {
            "type": "skill",
            "proficiency": "3" }
        ],
        "desc": [
          "Your proficiency bonus is doubled for any ability check you make for this skill."
        ],
        "group": "Expertise (Rogue)"
      },
      "264": {
    	"class": "Rogue",
        "subclass": {},
        "name": "Expertise: Athletics",
        "prerequisites": [
          {
            "type": "skill",
            "proficiency": "4" }
        ],
        "desc": [
          "Your proficiency bonus is doubled for any ability check you make for this skill."
        ],
        "group": "Expertise (Rogue)"
      },
      "265": {
    	"class": "Rogue",
        "subclass": {},
        "name": "Expertise: Deception",
        "prerequisites": [
          {
            "type": "skill",
            "proficiency": "5" }
        ],
        "desc": [
          "Your proficiency bonus is doubled for any ability check you make for this skill."
        ],
        "group": "Expertise (Rogue)"
      },
      "266": {
    	"class": "Rogue",
        "subclass": {},
        "name": "Expertise: History",
        "prerequisites": [
          {
            "type": "skill",
            "proficiency": "6" }
        ],
        "desc": [
          "Your proficiency bonus is doubled for any ability check you make for this skill."
        ],
        "group": "Expertise (Rogue)"
      },
      "267": {
    	"class": "Rogue",
        "subclass": {},
        "name": "Expertise: Insight",
        "prerequisites": [
          {
            "type": "skill",
            "proficiency": "7" }
        ],
        "desc": [
          "Your proficiency bonus is doubled for any ability check you make for this skill."
        ],
        "group": "Expertise (Rogue)"
      },
      "268": {
    	"class": "Rogue",
        "subclass": {},
        "name": "Expertise: Intimidation",
        "prerequisites": [
          {
            "type": "skill",
            "proficiency": "8" }
        ],
        "desc": [
          "Your proficiency bonus is doubled for any ability check you make for this skill."
        ],
        "group": "Expertise (Rogue)"
      },
      "269": {
    	"class": "Rogue",
        "subclass": {},
        "name": "Expertise: Investigation",
        "prerequisites": [
          {
            "type": "skill",
            "proficiency": "9" }
        ],
        "desc": [
          "Your proficiency bonus is doubled for any ability check you make for this skill."
        ],
        "group": "Expertise (Rogue)"
      },
      "270": {
    	"class": "Rogue",
        "subclass": {},
        "name": "Expertise: Medicine",
        "prerequisites": [
          {
            "type": "skill",
            "proficiency": "10"  }
        ],
        "desc": [
          "Your proficiency bonus is doubled for any ability check you make for this skill."
        ],
        "group": "Expertise (Rogue)"
      },
      "271": {
    	"class": "Rogue",
        "subclass": {},
        "name": "Expertise: Nature",
        "prerequisites": [
          {
            "type": "skill",
            "proficiency": "11" }
        ],
        "desc": [
          "Your proficiency bonus is doubled for any ability check you make for this skill."
        ],
        "group": "Expertise (Rogue)"
      },
      "272": {
    	"class": "Rogue",
        "subclass": {},
        "name": "Expertise: Perception",
        "prerequisites": [
          {
            "type": "skill",
            "proficiency": "12" }
        ],
        "desc": [
          "Your proficiency bonus is doubled for any ability check you make for this skill."
        ],
        "group": "Expertise (Rogue)"
      },
      "273": {
    	"class": "Rogue",
        "subclass": {},
        "name": "Expertise: Performance",
        "prerequisites": [
          {
            "type": "skill",
            "proficiency": "13" }
        ],
        "desc": [
          "Your proficiency bonus is doubled for any ability check you make for this skill."
        ],
        "group": "Expertise (Rogue)"
      },
      "274": {
    	"class": "Rogue",
        "subclass": {},
        "name": "Expertise: Persuasion",
        "prerequisites": [
          {
            "type": "skill",
            "proficiency": "14"  }
        ],
        "desc": [
          "Your proficiency bonus is doubled for any ability check you make for this skill."
        ],
        "group": "Expertise (Rogue)"
      },
      "275": {
    	"class": "Rogue",
        "subclass": {},
        "name": "Expertise: Religion",
        "prerequisites": [
          {
            "type": "skill",
            "proficiency": "15" }
        ],
        "desc": [
          "Your proficiency bonus is doubled for any ability check you make for this skill."
        ],
        "group": "Expertise (Rogue)"
      },
      "276": {
    	"class": "Rogue",
        "subclass": {},
        "name": "Expertise: Sleight of Hand",
        "prerequisites": [
          {
            "type": "skill",
            "proficiency": "16"  }
        ],
        "desc": [
          "Your proficiency bonus is doubled for any ability check you make for this skill."
        ],
        "group": "Expertise (Rogue)"
      },
      "277": {
    	"class": "Rogue",
        "subclass": {},
        "name": "Expertise: Stealth",
        "prerequisites": [
          {
            "type": "skill",
            "proficiency": "17" }
        ],
        "desc": [
          "Your proficiency bonus is doubled for any ability check you make for this skill."
        ],
        "group": "Expertise (Rogue)"
      },
      "278": {
    	"class": "Rogue",
        "subclass": {},
        "name": "Expertise: Survival",
        "prerequisites": [
          {
            "type": "skill",
            "proficiency": "18" }
        ],
        "desc": [
          "Your proficiency bonus is doubled for any ability check you make for this skill."
        ],
        "group": "Expertise (Rogue)"
      },
      "279": {
    	"class": "Rogue",
        "subclass": {},
        "name": "Expertise: Thieves' Tools",
        "prerequisites": [
          {
            "type": "proficiency",
            "proficiency": "96" }
        ],
        "desc": [
          "Your proficiency bonus is doubled for any ability check you make for this skill."
        ],
        "group": "Expertise (Rogue)"
      },
      "280": {
    	"class": "Rogue",
        "subclass": {},
        "name": "Sneak Attack",
        "level": 1,
        "desc": [
          "Beginning at 1st level, you know how to strike subtly and exploit a foe’s distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.",
          "You don’t need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn’t incapacitated, and you don’t have disadvantage on the attack roll.",
          "The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table."
        ]
      },
      "281": {
    	"class": "Rogue",
        "subclass": {},
        "name": "Thieves' Cant",
        "level": 1,
        "desc": [
          "During your rogue training you learned thieves’ cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves’ cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly.",
          "In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves’ guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run."
        ]
      },
      "282": {
    	"class": "Rogue",
        "subclass": {},
        "name": "Cunning Action",
        "level": 2,
        "desc": [
          "Starting at 2nd level, your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action."
        ]
      },
      "283": {
    	"class": "Rogue",
        "subclass": {},
        "name": "Roguish Archetype",
        "level": 3,
        "desc": [
          "At 3rd level, you choose an archetype that you emulate in the exercise of your rogue abilities. The Thief archetype is detailed at the bottom of this page. Additional archetypes are available in the original source material. Your archetype choice grants you features at 3rd level and then again at 9th, 13th, and 17th level."
        ]
      },
      "284": {
    	"class": "Rogue",
        "subclass":"Thief",
        "name": "Fast Hands",
        "level": 3,
        "desc": [
          "Starting at 3rd level, you can use the bonus action granted by your Cunning Action to make a Dexterity (Sleight of Hand) check, use your thieves' tools to disarm a trap or open a lock, or take the Use an Object action."
        ]
      },
      "285": {
    	"class": "Rogue",
        "subclass":"Thief",
        "name": "Second-Story Work",
        "level": 3,
        "desc": [
          "When you choose this archetype at 3rd level, you gain the ability to climb faster than normal; climbing no longer costs you extra movement.",
          "In addition, when you make a running jump, the distance you cover increases by a number of feet equal to your Dexterity modifier."
        ]
      },
      "286": {
    	"class": "Rogue",
        "subclass": {},
        "name": "Ability Score Improvement 1",
        "level": 4,
        "desc": [
          "When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "287": {
    	"class": "Rogue",
        "subclass": {},
        "name": "Uncanny Dodge",
        "level": 5,
        "desc": [
          "Starting at 5th level, when an attacker that you can see hits you with an attack, you can use your reaction to halve the attack’s damage against you."
        ]
      },
      "288": {
    	"class": "Rogue",
        "subclass": {},
        "name": "Choose: Expertise 2",
        "level": 6,
        "desc": [
          "At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves’ tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.",
          "At 6th level, you can choose two more of your proficiencies (in skills or with thieves’ tools) to gain this benefit"
        ],
        "choice": {
          "choose": 2,
          "type": "feature",
          "from": [ "278", "277", "261", "262", "263", "264", "265", "266", "267", "268", "269", "270", "271", "272", "273", "274", "275", "276" ]
        }
      },
      "289": {
    	"class": "Rogue",
        "subclass": {},
        "name": "Evasion",
        "level": 7,
        "desc": [
          "Beginning at 7th level, you can nimbly dodge out of the way of certain area effects, such as a red dragon’s fiery breath or an ice storm spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail."
        ]
      },
      "290": {
    	"class": "Rogue",
        "subclass": {},
        "name": "Ability Score Improvement 2",
        "level": 8,
        "desc": [
          "When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "291": {
    	"class": "Rogue",
        "subclass":"Thief",
        "name": "Supreme Sneak",
        "level": 9,
        "desc": [
          "Starting at 9th level, you have advantage on a Dexterity (Stealth) check if you move no more than half your speed on the same turn."
        ]
      },
      "292": {
    	"class": "Rogue",
        "subclass": {},
        "name": "Ability Score Improvement 3",
        "level": 10,
        "desc": [
          "When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "293": {
    	"class": "Rogue",
        "subclass": {},
        "name": "Reliable Talent",
        "level": 11,
        "desc": [
          "By 11th level, you have refined your chosen skills until they approach perfection. Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10."
        ]
      },
      "294": {
    	"class": "Rogue",
        "subclass": {},
        "name": "Ability Score Improvement 4",
        "level": 12,
        "desc": [
          "When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "295": {
    	"class": "Rogue",
        "subclass":"Thief",
        "name": "Use Magic Device",
        "level": 13,
        "desc": [
          "By 13th level, you have learned enough about the workings of magic that you can improvise the use of items even when they are not intended for you. You ignore all class, race, and level requirements on the use of magic items."
        ]
      },
      "296": {
    	"class": "Rogue",
        "subclass": {},
        "name": "Blindsense",
        "level": 14,
        "desc": [
          "Starting at 14th level, if you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you."
        ]
      },
      "297": {
    	"class": "Rogue",
        "subclass": {},
        "name": "Slippery Mind",
        "level": 15,
        "desc": [
          "By 15th level, you have acquired greater mental strength. You gain proficiency in Wisdom saving throws."
        ]
      },
      "298": {
    	"class": "Rogue",
        "subclass": {},
        "name": "Ability Score Improvement 5",
        "level": 16,
        "desc": [
          "When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "299": {
    	"class": "Rogue",
        "subclass":"Thief",
        "name": "Thief's Reflexes",
        "level": 17,
        "desc": [
          "When you reach 17th level, you have become adept at laying ambushes and quickly escaping danger. You can take two turns during the first round of any combat. You take your first turn at your normal initiative and your second turn at your initiative minus 10. You can't use this feature when you are surprised."
        ]
      },
      "300": {
    	"class": "Rogue",
        "subclass": {},
        "name": "Elusive",
        "level": 18,
        "desc": [
          "Beginning at 18th level, you are so evasive that attackers rarely gain the upper hand against you. No attack roll has advantage against you while you aren’t incapacitated."
        ]
      },
      "301": {
    	"class": "Rogue",
        "subclass": {},
        "name": "Ability Score Improvement 6",
        "level": 19,
        "desc": [
          "When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "302": {
    	"class": "Rogue",
        "subclass": {},
        "name": "Stroke of Luck",
        "level": 20,
        "desc": [
          "At 20th level, you have an uncanny knack for succeeding when you need to. If your attack misses a target within range, you can turn the miss into a hit. Alternatively, if you fail an ability check, you can treat the d20 roll as a 20.",
          "Once you use this feature, you can't use it again until you finish a short or long rest."
        ]
      },
      "303": {
    	"class": "Sorcerer",
        "subclass": {},
        "name": "Spellcasting",
        "level": 1,
        "desc": [
          "An event in your past, or in the life of a parent or ancestor, left an indelible mark on you, infusing you with arcane magic. This font of magic, whatever its origin, fuels your spells."
        ],
        "reference": SpellCasting["6"]
      },
      "304": {
    	"class": "Sorcerer",
        "subclass": {},
        "name": "Sorcerous Origin",
        "level": 1,
        "desc": [
          "Choose a sorcerous origin, which describes the source of your innate magical power: Draconic Bloodline or Wild Magic, both detailed at the end of the class description.",
          "Your choice grants you features when you choose it at 1st level and again at 6th, 14th, and 18th level."
        ]
      },
      "305": {
    	"class": "Sorcerer",
        "subclass":"Draconic Bloodline",
        "name": "Choose: Dragon Ancestor",
        "level": 1,
        "desc": [
          "At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.",
          "You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check."
        ],
        "choice": {
          "choose": 2,
          "type": "feature",
          "from": [ "306", "307", "308", "309", "310", "311", "312", "313", "314", "315" ]
        }
      },
      "306": {
    	"class": "Sorcerer",
        "subclass":"Draconic Bloodline",
        "name": "Dragon Ancestor: Black - Acid Damage",
        "level": 1,
        "desc": [
          "At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.",
          "You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check."
        ],
        "group": "Dragon Ancestor"
      },
      "307": {
    	"class": "Sorcerer",
        "subclass":"Draconic Bloodline",
        "name": "Dragon Ancestor: Blue - Lightning Damage",
        "level": 1,
        "desc": [
          "At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.",
          "You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check."
        ],
        "group": "Dragon Ancestor"
      },
      "308": {
    	"class": "Sorcerer",
        "subclass":"Draconic Bloodline",
        "name": "Dragon Ancestor: Brass - Fire Damage",
        "level": 1,
        "desc": [
          "At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.",
          "You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check."
        ],
        "group": "Dragon Ancestor"
      },
      "309": {
    	"class": "Sorcerer",
        "subclass":"Draconic Bloodline",
        "name": "Dragon Ancestor: Bronze - Lightning Damage",
        "level": 1,
        "desc": [
          "At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.",
          "You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check."
        ],
        "group": "Dragon Ancestor"
      },
      "310": {
    	"class": "Sorcerer",
        "subclass":"Draconic Bloodline",
        "name": "Dragon Ancestor: Copper - Acid Damage",
        "level": 1,
        "desc": [
          "At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.",
          "You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check."
        ],
        "group": "Dragon Ancestor"
      },
      "311": {
    	"class": "Sorcerer",
        "subclass":"Draconic Bloodline",
        "name": "Dragon Ancestor: Gold - Fire Damage",
        "level": 1,
        "desc": [
          "At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.",
          "You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check."
        ],
        "group": "Dragon Ancestor"
      },
      "312": {
    	"class": "Sorcerer",
        "subclass":"Draconic Bloodline",
        "name": "Dragon Ancestor: Green - Poison Damage",
        "level": 1,
        "desc": [
          "At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.",
          "You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check."
        ],
        "group": "Dragon Ancestor"
      },
      "313": {
    	"class": "Sorcerer",
        "subclass":"Draconic Bloodline",
        "name": "Dragon Ancestor: Red - Fire Damage",
        "level": 1,
        "desc": [
          "At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.",
          "You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check."
        ],
        "group": "Dragon Ancestor"
      },
      "314": {
    	"class": "Sorcerer",
        "subclass":"Draconic Bloodline",
        "name": "Dragon Ancestor: Silver - Cold Damage",
        "level": 1,
        "desc": [
          "At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.",
          "You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check."
        ],
        "group": "Dragon Ancestor"
      },
      "315": {
    	"class": "Sorcerer",
        "subclass":"Draconic Bloodline",
        "name": "Dragon Ancestor: White - Cold Damage",
        "level": 1,
        "desc": [
          "At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.",
          "You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check."
        ],
        "group": "Dragon Ancestor"
      },
      "316": {
    	"class": "Sorcerer",
        "subclass":"Draconic Bloodline",
        "name": "Draconic Resilience",
        "level": 1,
        "desc": [
          "As magic flows through your body, it causes physical traits of your dragon ancestors to emerge. At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class.",
          "Additionally, parts of your skin are covered by a thin sheen of dragon-like scales. When you aren’t wearing armor, your AC equals 13 + your Dexterity modifier."
        ]
      },
      "317": {
    	"class": "Sorcerer",
        "subclass": {},
        "name": "Font of Magic",
        "level": 2,
        "desc": [
          "At 2nd level, you tap into a deep wellspring of magic within yourself. This wellspring is represented by sorcery points, which allow you to create a variety of magical effects.",
          "Sorcery Points",
          "You have 2 sorcery points, and you gain more as you reach higher levels, as shown in the Sorcery Points column of the Sorcerer table. You can never have more sorcery points than shown on the table for your level. You regain all spent sorcery points when you finish a long rest."
        ]
      },
      "318": {
    	"class": "Sorcerer",
        "subclass": {},
        "name": "Flexible Casting: Creating Spell Slots",
        "level": 2,
        "desc": [
          "You can transform unexpended sorcery points into one spell slot as a bonus action on your turn. The Creating Spell Slots table shows the cost of creating a spell slot of a given level. You can create spell slots no higher in level than 5th. ",
          "Any spell slot you create with this feature vanishes when you finish a long rest."
        ]
      },
      "319": {
    	"class": "Sorcerer",
        "subclass": {},
        "name": "Flexible Casting: Converting Spell Slot",
        "level": 2,
        "desc": [
          "As a bonus action on your turn, you can expend one spell slot and gain a number of sorcery points equal to the slot’s level.."
        ]
      },
      "320": {
    	"class": "Sorcerer",
        "subclass": {},
        "name": "Choose: Metamagic",
        "level": 3,
        "desc": [
          "At 3rd level, you gain the ability to twist your spells to suit your needs. You gain two of the following Metamagic options of your choice. You gain another one at 10th and 17th level.",
          "You can use only one Metamagic option on a spell when you cast it, unless otherwise noted."
        ],
        "choice": {
          "choose": 2,
          "type": "feature",
          "from": [ "321", "322", "323", "324", "325", "326", "327", "328" ]
        }
      },
      "321": {
    	"class": "Sorcerer",
        "subclass": {},
        "name": "Metamagic: Careful Spell",
        "level": 3,
        "desc": [
          "When you cast a spell that forces other creatures to make a saving throw, you can protect some of those creatures from the spell’s full force. To do so, you spend 1 sorcery point and choose a number of those creatures up to your Charisma modifier (minimum of one creature). A chosen creature automatically succeeds on its saving throw against the spell."
        ],
        "group": "Metamagic"
      },
      "322": {
    	"class": "Sorcerer",
        "subclass": {},
        "name": "Metamagic: Distant Spell",
        "level": 3,
        "desc": [
          "When you cast a spell that has a range of 5 feet or greater, you can spend 1 sorcery point to double the range of the spell.",
          "When you cast a spell that has a range of touch, you can spend 1 sorcery point to make the range of the spell 30 feet."
        ],
        "group": "Metamagic"
      },
      "323": {
    	"class": "Sorcerer",
        "subclass": {},
        "name": "Metamagic: Empowered Spell",
        "level": 3,
        "desc": [
          "When you roll damage for a spell, you can spend 1 sorcery point to reroll a number of the damage dice up to your Charisma modifier (minimum of one). You must use the new rolls.",
          "You can use Empowered Spell even if you have already used a different Metamagic option during the casting of the spell."
        ],
        "group": "Metamagic"
      },
      "324": {
    	"class": "Sorcerer",
        "subclass": {},
        "name": "Metamagic: Extended Spell",
        "level": 3,
        "desc": [
          "When you cast a spell that has a duration of 1 minute or longer, you can spend 1 sorcery point to double its duration, to a maximum duration of 24 hours."
        ],
        "group": "Metamagic"
      },
      "325": {
    	"class": "Sorcerer",
        "subclass": {},
        "name": "Metamagic: Heightened Spell",
        "level": 3,
        "desc": [
          "When you cast a spell that forces a creature to make a saving throw to resist its effects, you can spend 3 sorcery points to give one target of the spell disadvantage on its first saving throw made against the spell."
        ],
        "group": "Metamagic"
      },
      "326": {
    	"class": "Sorcerer",
        "subclass": {},
        "name": "Metamagic: Quickened Spell",
        "level": 3,
        "desc": [
          "When you cast a spell that has a casting time of 1 action, you can spend 2 sorcery points to change the casting time to 1 bonus action for this casting."
        ],
        "group": "Metamagic"
      },
      "327": {
    	"class": "Sorcerer",
        "subclass": {},
        "name": "Metamagic: Subtle Spell",
        "level": 3,
        "desc": [
          "When you cast a spell, you can spend 1 sorcery point to cast it without any somatic or verbal components."
        ],
        "group": "Metamagic"
      },
      "328": {
    	"class": "Sorcerer",
        "subclass": {},
        "name": "Metamagic: Twinned Spell",
        "level": 3,
        "desc": [
          "When you cast a spell that targets only one creature and doesn’t have a range of self, you can spend a number of sorcery points equal to the spell’s level to target a second creature in range with the same spell (1 sorcery point if the spell is a cantrip).",
          "To be eligible, a spell must be incapable of targeting more than one creature at the spell’s current level. For example, magic missile and scorching ray aren’t eligible, but ray of frost and chromatic orb are."
        ]
      },
      "329": {
    	"class": "Sorcerer",
        "subclass": {},
        "name": "Ability Score Improvement 1",
        "level": 4,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "330": {
    	"class": "Sorcerer",
        "subclass":"Draconic Bloodline",
        "name": "Elemental Affinity",
        "level": 6,
        "desc": [
          "Starting at 6th level, when you cast a spell that deals damage of the type associated with your draconic ancestry, you can add your Charisma modifier to one damage roll of that spell. At the same time, you can spend 1 sorcery point to gain resistance to that damage type for 1 hour."
        ],
        "reference":"Draconic Bloodline"  },
      "331": {
    	"class": "Sorcerer",
        "subclass": {},
        "name": "Ability Score Improvement 2",
        "level": 8,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "332": {
    	"class": "Sorcerer",
        "subclass": {},
        "name": "Choose: Additional Metamagic",
        "level": 10,
        "desc": [
          "At 3rd level, you gain the ability to twist your spells to suit your needs. You gain two of the following Metamagic options of your choice. You gain another one at 10th and 17th level.",
          "You can use only one Metamagic option on a spell when you cast it, unless otherwise noted."
        ],
        "choice": {
          "choose": 1,
          "type": "feature",
          "from": [ "328", "327", "321", "322", "323", "324", "325", "326" ]
        }
      },
      "333": {
    	"class": "Sorcerer",
        "subclass": {},
        "name": "Ability Score Improvement 3",
        "level": 12,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "334": {
    	"class": "Sorcerer",
        "subclass":"Draconic Bloodline",
        "name": "Dragon Wings",
        "level": 14,
        "desc": [
          "At 14th level, you gain the ability to sprout a pair of dragon wings from your back, gaining a flying speed equal to your current speed. You can create these wings as a bonus action on your turn. They last until you dismiss them as a bonus action on your turn.",
          "You can’t manifest your wings while wearing armor unless the armor is made to accommodate them, and clothing not made to accommodate your wings might be destroyed when you manifest them."
        ]
      },
      "335": {
    	"class": "Sorcerer",
        "subclass": {},
        "name": "Ability Score Improvement 4",
        "level": 16,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "336": {
    	"class": "Sorcerer",
        "subclass": {},
        "name": "Choose: Additional Metamagic",
        "level": 17,
        "desc": [
          "At 3rd level, you gain the ability to twist your spells to suit your needs. You gain two of the following Metamagic options of your choice. You gain another one at 10th and 17th level.",
          "You can use only one Metamagic option on a spell when you cast it, unless otherwise noted."
        ],
        "choice": {
          "choose": 1,
          "type": "feature",
          "from": [ "327", "328", "321", "322", "323", "324", "325", "326" ]
        }
      },
      "337": {
    	"class": "Sorcerer",
        "subclass":"Draconic Bloodline",
        "name": "Draconic Presence",
        "level": 18,
        "desc": [
          "Beginning at 18th level, you can channel the dread presence of your dragon ancestor, causing those around you to become awestruck or frightened. As an action, you can spend 5 sorcery points to draw on this power and exude an aura of awe or fear (your choice) to a distance of 60 feet. For 1 minute or until you lose your concentration (as if you were casting a concentration spell), each hostile creature that starts its turn in this aura must succeed on a Wisdom saving throw or be charmed (if you chose awe) or frightened (if you chose fear) until the aura ends. A creature that succeeds on this saving throw is immune to your aura for 24 hours."
        ]
      },
      "338": {
    	"class": "Sorcerer",
        "subclass": {},
        "name": "Ability Score Improvement 5",
        "level": 19,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "339": {
    	"class": "Sorcerer",
        "subclass": {},
        "name": "Sorcerous Restoration",
        "level": 20,
        "desc": [
          "At 20th level, you regain 4 expended sorcery points whenever you finish a short rest."
        ]
      },
      "340": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Otherworldly Patron",
        "level": 1,
        "desc": [
          "At 1st level, you have struck a bargain with an otherworldly being of your choice: the Archfey, the Fiend, or the Great Old One, each of which is detailed at the end of the class description. Your choice grants you features at 1st level and again at 6th, 10th, and 14th level."
        ]
      },
      "341": {
    	"class": "Warlock",
        "subclass":"Fiendish Patron",
        "name": "Dark One's Blessing",
        "level": 1,
        "desc": [
          "Starting at 1st level, when you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your Charisma modifier + your warlock level (minimum of 1)."
        ]
      },
      "342": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Pact Magic",
        "level": 1,
        "desc": [
          "Your arcane research and the magic bestowed on you by your patron have given you facility with spells."
        ],
        "reference": SpellCasting["7"]
      },
      "343": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Choose: Eldritch Invocations",
        "level": 2,
        "desc": [
          "In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability.",
          "At 2nd level, you gain two eldritch invocations of your choice. Your invocation options are detailed at the end of the class description. When you gain certain warlock levels, you gain additional invocations of your choice, as shown in the Invocations Known column of the Warlock table.",
          "Additionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level."
        ],
        "choice": {
          "choose": 2,
          "type": "feature",
          "from": [ "344", "345", "346", "347", "348", "349", "350", "351", "352", "353", "354", "355", "356", "357", "358", "359" ]
        }
      },
      "344": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Eldritch Invocation: Agonizing Blast",
        "level": 2,
        "prerequisites": [
          {
            "type": "Spell",
            "spell": "96" }
        ],
        "desc": [
          "When you cast eldritch blast, add your Charisma modifier to the damage it deals on a hit."
        ],
        "group": "Eldritch Invocations"
      },
      "345": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Eldritch Invocation: Armor of Shadows",
        "level": 2,
        "prerequisites": [],
        "desc": [
          "You can cast mage armor on yourself at will, without expending a spell slot or material components."
        ],
        "group": "Eldritch Invocations"
      },
      "346": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Eldritch Invocation: Beast Speech",
        "level": 2,
        "prerequisites": [],
        "desc": [
          "You can cast speak with animals at will, without expending a spell slot."
        ],
        "group": "Eldritch Invocations"
      },
      "347": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Eldritch Invocation: Beguiling Influence",
        "level": 2,
        "prerequisites": [],
        "desc": [
          "You gain proficiency in the Deception and Persuasion skills."
        ],
        "group": "Eldritch Invocations"
      },
      "348": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Eldritch Invocation: Book of Ancient Secrets",
        "level": 2,
        "prerequisites": [
          {
            "type": "feature",
            "feature": "379" }
        ],
        "desc": [
          "You can now inscribe magical rituals in your Book of Shadows. Choose two 1st-level spells that have the ritual tag from any class’s spell list (the two needn’t be from the same list). The spells appear in the book and don’t count against the number of spells you know. With your Book of Shadows in hand, you can cast the chosen spells as rituals. You can’t cast the spells except as rituals, unless you’ve learned them by some other means. You can also cast a warlock spell you know as a ritual if it has the ritual tag.",
          "On your adventures, you can add other ritual spells to your Book of Shadows. When you find such a spell, you can add it to the book if the spell’s level is equal to or less than half your warlock level (rounded up) and if you can spare the time to transcribe the spell. For each level of the spell, the transcription process takes 2 hours and costs 50 gp for the rare inks needed to inscribe it."
        ],
        "group": "Eldritch Invocations"
      },
      "349": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Eldritch Invocation: Devil’s Sight",
        "level": 2,
        "prerequisites": [],
        "desc": [
          "You can see normally in darkness, both magical and nonmagical, to a distance of 120 feet."
        ],
        "group": "Eldritch Invocations"
      },
      "350": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Eldritch Invocation: Eldritch Sight",
        "level": 2,
        "prerequisites": [],
        "desc": [
          "You can cast detect magic at will, without expending a spell slot."
        ],
        "group": "Eldritch Invocations"
      },
      "351": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Eldritch Invocation: Eldritch Spear",
        "level": 2,
        "prerequisites": [
          {
            "type": "Spell",
            "spell": "96" }
        ],
        "desc": [
          "When you cast eldritch blast, its range is 300 feet."
        ],
        "group": "Eldritch Invocations"
      },
      "352": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Eldritch Invocation: Eyes of the Rune Keeper",
        "level": 2,
        "prerequisites": [],
        "desc": [
          "You can read all writing."
        ],
        "group": "Eldritch Invocations"
      },
      "353": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Eldritch Invocation: Fiendish Vigor",
        "level": 2,
        "prerequisites": [],
        "desc": [
          "You can cast false life on yourself at will as a 1st-level spell, without expending a spell slot or material components."
        ],
        "group": "Eldritch Invocations"
      },
      "354": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Eldritch Invocation: Gaze of Two Minds",
        "level": 2,
        "prerequisites": [],
        "desc": [
          "You can use your action to touch a willing humanoid and perceive through its senses until the end of your next turn. As long as the creature is on the same plane of existence as you, you can use your action on subsequent turns to maintain this connection, extending the duration until the end of your next turn. While perceiving through the other creature’s senses, you benefit from any special senses possessed by that creature, and you are blinded and deafened to your own surroundings."
        ],
        "group": "Eldritch Invocations"
      },
      "355": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Eldritch Invocation: Mask of Many Faces",
        "level": 2,
        "prerequisites": [],
        "desc": [
          "You can cast disguise self at will, without expending a spell slot."
        ],
        "group": "Eldritch Invocations"
      },
      "356": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Eldritch Invocation: Misty Visions",
        "level": 2,
        "prerequisites": [],
        "desc": [
          "You can cast silent image at will, without expending a spell slot or material components."
        ],
        "group": "Eldritch Invocations"
      },
      "357": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Eldritch Invocation: Repelling Blast",
        "level": 2,
        "prerequisites": [
          {
            "type": "Spell",
            "spell": "96" }
        ],
        "desc": [
          "When you hit a creature with eldritch blast, you can push the creature up to 10 feet away from you in a straight line."
        ],
        "group": "Eldritch Invocations"
      },
      "358": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Eldritch Invocation: Thief of Five Fates",
        "level": 2,
        "prerequisites": [],
        "desc": [
          "You can cast bane once using a warlock spell slot. You can’t do so again until you finish a long rest."
        ],
        "group": "Eldritch Invocations"
      },
      "359": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Eldritch Invocation: Voice of the Chain Master",
        "level": 2,
        "prerequisites": [
          {
            "type": "feature",
            "feature": "377" }
        ],
        "desc": [
          "You can communicate telepathically with your familiar and perceive through your familiar’s senses as long as you are on the same plane of existence.",
          "Additionally, while perceiving through your familiar’s senses, you can also speak through your familiar in your own voice, even if your familiar is normally incapable of speech."
        ],
        "group": "Eldritch Invocations"
      },
      "360": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Eldritch Invocation: Mire the Mind",
        "level": 5,
        "prerequisites": [
          {
            "type": "level",
            "level": 5
          }
        ],
        "desc": [
          "You can cast slow once using a warlock spell slot. You can’t do so again until you finish a long rest."
        ],
        "group": "Eldritch Invocations"
      },
      "361": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Eldritch Invocation: One with Shadows",
        "level": 5,
        "prerequisites": [
          {
            "type": "level",
            "level": 5
          }
        ],
        "desc": [
          "When you are in an area of dim light or darkness, you can use your action to become invisible until you move or take an action or a reaction."
        ],
        "group": "Eldritch Invocations"
      },
      "362": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Eldritch Invocation: Sign of Ill Omen",
        "level": 5,
        "prerequisites": [
          {
            "type": "level",
            "level": 5
          }
        ],
        "desc": [
          "You can cast bestow curse once using a warlock spell slot. You can’t do so again until you finish a long rest."
        ],
        "group": "Eldritch Invocations"
      },
      "363": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Eldritch Invocation: Thirsting Blade",
        "level": 5,
        "prerequisites": [
          {
            "type": "level",
            "level": 5
          },
          {
            "type": "feature",
            "feature": "378" }
        ],
        "desc": [
          "You can attack with your pact weapon twice, instead of once, whenever you take the Attack action on your turn."
        ],
        "group": "Eldritch Invocations"
      },
      "364": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Eldritch Invocation: Bewitching Whispers",
        "level": 7,
        "prerequisites": [
          {
            "type": "level",
            "level": 7
          }
        ],
        "desc": [
          "You can cast compulsion once using a warlock spell slot. You can’t do so again until you finish a long rest."
        ],
        "group": "Eldritch Invocations"
      },
      "365": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Eldritch Invocation: Dreadful Word",
        "level": 7,
        "prerequisites": [
          {
            "type": "level",
            "level": 7
          }
        ],
        "desc": [
          "You can cast confusion once using a warlock spell slot. You can’t do so again until you finish a long rest."
        ],
        "group": "Eldritch Invocations"
      },
      "366": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Eldritch Invocation: Sculptor of Flesh",
        "level": 7,
        "prerequisites": [
          {
            "type": "level",
            "level": 7
          }
        ],
        "desc": [
          "You can cast polymorph once using a warlock spell slot. You can’t do so again until you finish a long rest."
        ],
        "group": "Eldritch Invocations"
      },
      "367": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Eldritch Invocation: Ascendant Step",
        "level": 9,
        "prerequisites": [
          {
            "type": "level",
            "level": 9
          }
        ],
        "desc": [
          "You can cast levitate on yourself at will, without expending a spell slot or material components."
        ],
        "group": "Eldritch Invocations"
      },
      "368": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Eldritch Invocation: Minions of Chaos",
        "level": 9,
        "prerequisites": [
          {
            "type": "level",
            "level": 9
          }
        ],
        "desc": [
          "You can cast conjure elemental once using a warlock spell slot. You can’t do so again until you finish a long rest."
        ],
        "group": "Eldritch Invocations"
      },
      "369": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Eldritch Invocation: Otherworldly Leap",
        "level": 9,
        "prerequisites": [
          {
            "type": "level",
            "level": 9
          }
        ],
        "desc": [
          "You can cast jump on yourself at will, without expending a spell slot or material components."
        ],
        "group": "Eldritch Invocations"
      },
      "370": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Eldritch Invocation: Whispers of the Grave",
        "level": 9,
        "prerequisites": [
          {
            "type": "level",
            "level": 9
          }
        ],
        "desc": [
          "You can cast speak with dead at will, without expending a spell slot."
        ],
        "group": "Eldritch Invocations"
      },
      "371": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Eldritch Invocation: Lifedrinker",
        "level": 12,
        "prerequisites": [
          {
            "type": "level",
            "level": 12
          },
          {
            "type": "feature",
            "feature": "378" }
        ],
        "desc": [
          "When you hit a creature with your pact weapon, the creature takes extra necrotic damage equal to your Charisma modifier (minimum 1)."
        ],
        "group": "Eldritch Invocations"
      },
      "372": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Eldritch Invocation: Chains of Carceri",
        "level": 15,
        "prerequisites": [
          {
            "type": "level",
            "level": 15
          },
          {
            "type": "feature",
            "feature": "377" }
        ],
        "desc": [
          "You can cast hold monster at will—targeting a celestial, fiend, or elemental—without expending a spell slot or material components. You must finish a long rest before you can use this invocation on the same creature again."
        ],
        "group": "Eldritch Invocations"
      },
      "373": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Eldritch Invocation: Master of Myriad Forms",
        "level": 15,
        "prerequisites": [
          {
            "type": "level",
            "level": 15
          }
        ],
        "desc": [
          "You can cast alter self at will, without expending a spell slot."
        ],
        "group": "Eldritch Invocations"
      },
      "374": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Eldritch Invocation: Visions of Distant Realms",
        "level": 15,
        "prerequisites": [
          {
            "type": "level",
            "level": 15
          }
        ],
        "desc": [
          "You can cast arcane eye at will, without expending a spell slot."
        ],
        "group": "Eldritch Invocations"
      },
      "375": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Eldritch Invocation: Witch Sight",
        "level": 15,
        "prerequisites": [
          {
            "type": "level",
            "level": 15
          }
        ],
        "desc": [
          "You can see the true form of any shapechanger or creature concealed by illusion or transmutation magic while the creature is within 30 feet of you and within line of sight."
        ],
        "group": "Eldritch Invocations"
      },
      "376": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Choose: Pact Boon",
        "level": 3,
        "desc": [
          "At 3rd level, your otherworldly patron bestows a gift upon you for your loyal service. You gain one of the following features of your choice."
        ],
        "choice": {
          "choose": 1,
          "type": "feature",
          "from": [ "377", "378", "379" ]
        }
      },
      "377": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Pact of the Chain",
        "level": 3,
        "desc": [
          "You learn the find familiar spell and can cast it as a ritual. The spell doesn’t count against your number of spells known.",
          "When you cast the spell, you can choose one of the normal forms for your familiar or one of the following special forms: imp, pseudodragon, quasit, or sprite.",
          "Additionally, when you take the Attack action, you can forgo one of your own attacks to allow your familiar to make one attack of its own with its reaction.",
          "Your familiar is more cunning than a typical familiar. Its default form can be a reflection of your patron, with sprites and pseudodragons tied to the Archfey and imps and quasits tied to the Fiend. Because the Great Old One’s nature is inscrutable, any familiar form is suitable for it."
        ],
        "group": "Warlock Pact"
      },
      "378": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Pact of the Blade",
        "level": 3,
        "desc": [
          "You can use your action to create a pact weapon in your empty hand. You can choose the form that this melee weapon takes each time you create it. You are proficient with it while you wield it. This weapon counts as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.",
          "Your pact weapon disappears if it is more than 5 feet away from you for 1 minute or more. It also disappears if you use this feature again, if you dismiss the weapon (no action required), or if you die.",
          "You can transform one magic weapon into your pact weapon by performing a special ritual while you hold the weapon. You perform the ritual over the course of 1 hour, which can be done during a short rest. You can then dismiss the weapon, shunting it into an extradimensional space, and it appears whenever you create your pact weapon thereafter. You can’t affect an artifact or a sentient weapon in this way. The weapon ceases being your pact weapon if you die, if you perform the 1-hour ritual on a different weapon, or if you use a 1-hour ritual to break your bond to it. The weapon appears at your feet if it is in the extradimensional space when the bond breaks.",
          "If your patron is the Archfey, your weapon might be a slender blade wrapped in leafy vines. If you serve the Fiend, your weapon could be an axe made of black metal and adorned with decorative flames. If your patron is the Great Old One, your weapon might be an ancient-­looking spear, with a gemstone embedded in its head, carved to look like a terrible unblinking eye."
        ],
        "group": "Warlock Pact"
      },
      "379": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Pact of the Tome",
        "level": 3,
        "desc": [
          "Your patron gives you a grimoire called a Book of Shadows. When you gain this feature, choose three cantrips from any class’s spell list (the three needn’t be from the same list). While the book is on your person, you can cast those cantrips at will. They don’t count against your number of cantrips known. If they don’t appear on the warlock spell list, they are nonetheless warlock spells for you.",
          "If you lose your Book of Shadows, you can perform a 1-hour ceremony to receive a replacement from your patron. This ceremony can be performed during a short or long rest, and it destroys the previous book. The book turns to ash when you die.",
          "Your Book of Shadows might be a fine, gilt-­edged tome with spells of enchantment and illusion, gifted to you by the lordly Archfey. It could be a weighty tome bound in demon hide studded with iron, holding spells of conjuration and a wealth of forbidden lore about the sinister regions of the cosmos, a gift of the Fiend. Or it could be the tattered diary of a lunatic driven mad by contact with the Great Old One, holding scraps of spells that only your own burgeoning insanity allows you to understand and cast."
        ],
        "group": "Warlock Pact"
      },
      "380": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Ability Score Improvement 1",
        "level": 4,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "381": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Choose: Additional Eldritch Invocation",
        "level": 5,
        "desc": [
          "In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability.",
          "At 2nd level, you gain two eldritch invocations of your choice. Your invocation options are detailed at the end of the class description. When you gain certain warlock levels, you gain additional invocations of your choice, as shown in the Invocations Known column of the Warlock table.",
          "Additionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level."
        ],
        "choice": {
          "choose": 1,
          "type": "feature",
          "from": [ "344", "345", "346", "347", "348", "349", "350", "351", "352", "353", "354", "355", "356", "357", "358", "359" ]
        }
      },
      "382": {
    	"class": "Warlock",
        "subclass":"Fiendish Patron",
        "name": "Dark One's Own Luck",
        "level": 6,
        "desc": [
          "Starting at 6th level, you can call on your patron to alter fate in your favor. When you make an ability check or a saving throw, you can use this feature to add a d10 to your roll. You can do so after seeing the initial roll but before any of the roll’s effects occur.",
          "Once you use this feature, you can’t use it again until you finish a short or long rest."
        ]
      },
      "383": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Choose: Additional Eldritch Invocation",
        "level": 7,
        "desc": [
          "In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability.",
          "At 2nd level, you gain two eldritch invocations of your choice. Your invocation options are detailed at the end of the class description. When you gain certain warlock levels, you gain additional invocations of your choice, as shown in the Invocations Known column of the Warlock table.",
          "Additionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level."
        ],
        "choice": {
          "choose": 1,
          "type": "feature",
          "from": [ "344", "345", "346", "347", "348", "349", "350", "351", "352", "353", "354", "355", "356", "357", "358", "359" ]
        }
      },
      "384": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Ability Score Improvement 2",
        "level": 8,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "385": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Choose: Additional Eldritch Invocation",
        "level": 9,
        "desc": [
          "In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability.",
          "At 2nd level, you gain two eldritch invocations of your choice. Your invocation options are detailed at the end of the class description. When you gain certain warlock levels, you gain additional invocations of your choice, as shown in the Invocations Known column of the Warlock table.",
          "Additionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level."
        ],
        "choice": {
          "choose": 1,
          "type": "feature",
          "from": [ "344", "345", "346", "347", "348", "349", "350", "351", "352", "353", "354", "355", "356", "357", "358", "359" ]
        }
      },
      "386": {
    	"class": "Warlock",
        "subclass":"Fiendish Patron",
        "name": "Fiendish Resilience",
        "level": 10,
        "desc": [
          "Starting at 10th level, you can choose one damage type when you finish a short or long rest. You gain resistance to that damage type until you choose a different one with this feature. Damage from magical weapons or silver weapons ignores this resistance."
        ]
      },
      "387": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Mystic Arcanum (6th level)",
        "level": 11,
        "desc": [
          "At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th- level spell from the warlock spell list as this arcanum.",
          "You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.",
          "At higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th- level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest."
        ]
      },
      "388": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Ability Score Improvement 3",
        "level": 12,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "389": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Choose: Additional Eldritch Invocation",
        "level": 12,
        "desc": [
          "In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability.",
          "At 2nd level, you gain two eldritch invocations of your choice. Your invocation options are detailed at the end of the class description. When you gain certain warlock levels, you gain additional invocations of your choice, as shown in the Invocations Known column of the Warlock table.",
          "Additionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level."
        ],
        "choice": {
          "choose": 1,
          "type": "feature",
          "from": [ "344", "345", "346", "347", "348", "349", "350", "351", "352", "353", "354", "355", "356", "357", "358", "359" ]
        }
      },
      "390": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Mystic Arcanum (7th level)",
        "level": 13,
        "desc": [
          "At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th- level spell from the warlock spell list as this arcanum.",
          "You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.",
          "At higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th- level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest."
        ]
      },
      "391": {
    	"class": "Warlock",
        "subclass":"Fiendish Patron",
        "name": "Hurl Through Hell",
        "level": 14,
        "desc": [
          "Starting at 14th level, when you hit a creature with an attack, you can use this feature to instantly transport the target through the lower planes. The creature disappears and hurtles through a nightmare landscape.",
          "At the end of your next turn, the target returns to the space it previously occupied, or the nearest unoccupied space. If the target is not a fiend, it takes 10d10 psychic damage as it reels from its horrific experience.",
          "Once you use this feature, you can’t use it again until you finish a long rest."
        ]
      },
      "392": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Mystic Arcanum (8th level)",
        "level": 15,
        "desc": [
          "At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th- level spell from the warlock spell list as this arcanum.",
          "You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.",
          "At higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th- level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest."
        ]
      },
      "393": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Choose: Additional Eldritch Invocation",
        "level": 15,
        "desc": [
          "In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability.",
          "At 2nd level, you gain two eldritch invocations of your choice. Your invocation options are detailed at the end of the class description. When you gain certain warlock levels, you gain additional invocations of your choice, as shown in the Invocations Known column of the Warlock table.",
          "Additionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level."
        ],
        "choice": {
          "choose": 1,
          "type": "feature",
          "from": [ "344", "345", "346", "347", "348", "349", "350", "351", "352", "353", "354", "355", "356", "357", "358", "359" ]
        }
      },
      "394": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Ability Score Improvement 5",
        "level": 16,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "395": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Mystic Arcanum (9th level)",
        "level": 17,
        "desc": [
          "At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th- level spell from the warlock spell list as this arcanum.",
          "You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.",
          "At higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th- level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest."
        ]
      },
      "396": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Choose: Additional Eldritch Invocation",
        "level": 18,
        "desc": [
          "In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability.",
          "At 2nd level, you gain two eldritch invocations of your choice. Your invocation options are detailed at the end of the class description. When you gain certain warlock levels, you gain additional invocations of your choice, as shown in the Invocations Known column of the Warlock table.",
          "Additionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level."
        ],
        "choice": {
          "choose": 1,
          "type": "feature",
          "from": [ "344", "345", "346", "347", "348", "349", "350", "351", "352", "353", "354", "355", "356", "357", "358", "359" ]
        }
      },
      "397": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Ability Score Improvement 6",
        "level": 19,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "398": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Eldritch Master",
        "level": 20,
        "desc": [
          "At 20th level, you can draw on your inner reserve of mystical power while entreating your patron to regain expended spell slots. You can spend 1 minute entreating your patron for aid to regain all your expended spell slots from your Pact Magic feature.",
          "Once you regain spell slots with this feature, you must finish a long rest before you can do so again."
        ]
      },
      "399": {
    	"class": "Warlock",
        "subclass": {},
        "name": "Choose: Additional Eldritch Invocation",
        "level": 20,
        "desc": [
          "In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability.",
          "At 2nd level, you gain two eldritch invocations of your choice. Your invocation options are detailed at the end of the class description. When you gain certain warlock levels, you gain additional invocations of your choice, as shown in the Invocations Known column of the Warlock table.",
          "Additionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level."
        ],
        "choice": {
          "choose": 1,
          "type": "feature",
          "from": [ "344", "345", "346", "347", "348", "349", "350", "351", "352", "353", "354", "355", "356", "357", "358", "359" ]
        }
      },
      "400": {
    	"class": "Wizard",
        "subclass": {},
        "name": "Spellcasting",
        "level": 1,
        "desc": [
          "As a student of arcane magic, you have a spellbook containing spells that show the first glimmerings of your true power."
        ],
        "reference": SpellCasting["8"]
      },
      "401": {
    	"class": "Wizard",
        "subclass": {},
        "name": "Arcane Recovery",
        "level": 1,
        "desc": [
          "You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.",
          "For example, if you’re a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell slot or two 1st-level spell slots."
        ]
      },
      "402": {
    	"class": "Wizard",
        "subclass": {},
        "name": "Arcane Tradition",
        "level": 2,
        "desc": [
          "When you reach 2nd level, you choose an arcane tradition, shaping your practice of magic through one of eight schools: Abjuration, Conjuration, Divination, Enchantment, Evocation, Illusion, Necromancy, or Transmutation, all detailed at the end of the class description.",
          "Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level."
        ]
      },
      "403": {
    	"class": "Wizard",
        "subclass":"School of Evocation",
        "name": "Evocation Savant",
        "level": 2,
        "desc": [
          "Beginning when you select this school at 2nd level, the gold and time you must spend to copy an evocation spell into your spellbook is halved."
        ]
      },
      "404": {
    	"class": "Wizard",
        "subclass":"School of Evocation",
        "name": "Sculpt Spells",
        "level": 2,
        "desc": [
          "Beginning at 2nd level, you can create pockets of relative safety within the effects of your evocation spells. When you cast an evocation spell that affects other creatures that you can see, you can choose a number of them equal to 1 + the spell’s level. The chosen creatures automatically succeed on their saving throws against the spell, and they take no damage if they would normally take half damage on a successful save."
        ]
      },
      "405": {
    	"class": "Wizard",
        "subclass": {},
        "name": "Ability Score Improvement 1",
        "level": 4,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "406": {
    	"class": "Wizard",
        "subclass":"School of Evocation",
        "name": "Potent Cantrip",
        "level": 6,
        "desc": [
          "Starting at 6th level, your damaging cantrips affect even creatures that avoid the brunt of the effect. When a creature succeeds on a saving throw against your cantrip, the creature takes half the cantrip’s damage (if any) but suffers no additional effect from the cantrip."
        ]
      },
      "407": {
    	"class": "Wizard",
        "subclass": {},
        "name": "Ability Score Improvement 2",
        "level": 8,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "409": {
    	"class": "Wizard",
        "subclass":"School of Evocation",
        "name": "Empowered Evocation",
        "level": 10,
        "desc": [
          "Beginning at 10th level, you can add your Intelligence modifier to one damage roll of any wizard evocation spell you cast."
        ]
      },
      "410": {
    	"class": "Wizard",
        "subclass": {},
        "name": "Ability Score Improvement 3",
        "level": 12,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "412": {
    	"class": "Wizard",
        "subclass":"School of Evocation",
        "name": "Overchannel",
        "level": 14,
        "desc": [
          "Starting at 14th level, you can increase the power of your simpler spells. When you cast a wizard spell of 1st through 5th level that deals damage, you can deal maximum damage with that spell.",
          "The first time you do so, you suffer no adverse effect. If you use this feature again before you finish a long rest, you take 2d12 necrotic damage for each level of the spell, immediately after you cast it. Each time you use this feature again before finishing a long rest, the necrotic damage per spell level increases by 1d12. This damage ignores resistance and immunity."
        ]
      },
      "413": {
    	"class": "Wizard",
        "subclass": {},
        "name": "Ability Score Improvement 4",
        "level": 16,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "414": {
    	"class": "Wizard",
        "subclass": {},
        "name": "Spell Mastery",
        "level": 18,
        "desc": [
          "At 18th level, you have achieved such mastery over certain spells that you can cast them at will. Choose a 1st-level wizard spell and a 2nd-level wizard spell that are in your spellbook. You can cast those spells at their lowest level without expending a spell slot when you have them prepared. If you want to cast either spell at a higher level, you must expend a spell slot as normal.",
          "By spending 8 hours in study, you can exchange one or both of the spells you chose for different spells of the same levels."
        ]
      },
      "415": {
    	"class": "Wizard",
        "subclass": {},
        "name": "Ability Score Improvement 5",
        "level": 19,
        "desc": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
        ]
      },
      "416": {
    	"class": "Wizard",
        "subclass": {},
        "name": "Signature Spell",
        "level": 20,
        "desc": [
          "When you reach 20th level, you gain mastery over two powerful spells and can cast them with little effort. Choose two 3rd-level wizard spells in your spellbook as your signature spells. You always have these spells prepared, they don’t count against the number of spells you have prepared, and you can cast each of them once at 3rd level without expending a spell slot. When you do so, you can’t do so again until you finish a short or long rest.",
          "If you want to cast either spell at a higher level, you must expend a spell slot as normal."
        ]
      }
}

export default Features;
