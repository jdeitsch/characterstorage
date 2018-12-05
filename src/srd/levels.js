import Features from "./features";

const Levels = {
    "Barbarian": {
      1: {
    	"ability_score_bonuses": 0,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [
    		Features["1"],
    		Features["2"]
    	],
    	"class_specific": {
    		"rage_count": 2,
    		"rage_damage_bonus": 2,
    		"brutal_critical_dice": 0
    	},
    	"subclass": {}
      },
      2: {
    	"ability_score_bonuses": 0,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [
    		Features["3"],
    		Features["4"]
    	],
    	"class_specific": {
    		"rage_count": 2,
    		"rage_damage_bonus": 2,
    		"brutal_critical_dice": 0
    	},
    	"subclass": {}
      },
      3: {
    	"ability_score_bonuses": 0,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [
    		Features["5"]
    	],
    	"class_specific": {
    		"rage_count": 3,
    		"rage_damage_bonus": 2,
    		"brutal_critical_dice": 0
    	},
    	"subclass": {}
      },
      4: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [
    		Features["7"]
    	],
    	"class_specific": {
    		"rage_count": 3,
    		"rage_damage_bonus": 2,
    		"brutal_critical_dice": 0
    	},
    	"subclass": {}
      },
      5: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [
    		Features["8"],
    	  Features["9"]
    	],
    	"class_specific": {
    		"rage_count": 3,
    		"rage_damage_bonus": 2,
    		"brutal_critical_dice": 0
    	},
    	"subclass": {}
      },
      6: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {},
    	"class_specific": {
    		"rage_count": 4,
    		"rage_damage_bonus": 2,
    		"brutal_critical_dice": 0
    	},
    	"subclass": {}
      },
      7: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [ Features["10"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"rage_count": 4,
    		"rage_damage_bonus": 2,
    		"brutal_critical_dice": 0
    	},
    	"subclass": {}
      },
      8: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [ Features["11"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"rage_count": 4,
    		"rage_damage_bonus": 2,
    		"brutal_critical_dice": 0
    	},
    	"subclass": {}
      },
      9: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [
    		Features["12"]
    	],
    	"spellcasting": {},
    	"class_specific": {
    		"rage_count": 4,
    		"rage_damage_bonus": 3,
    		"brutal_critical_dice": 1
    	},
    	"subclass": {}
      },
      10: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {},
    	"class_specific": {
    		"rage_count": 4,
    		"rage_damage_bonus": 3,
    		"brutal_critical_dice": 1
    	},
    	"subclass": {}
      },
      11: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [ Features["15"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"rage_count": 4,
    		"rage_damage_bonus": 3,
    		"brutal_critical_dice": 1
    	},
    	"subclass": {}
      },
      12: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [ Features["16"] ],
    	"class_specific": {
    		"rage_count": 5,
    		"rage_damage_bonus": 3,
    		"brutal_critical_dice": 1
    	},
    	"subclass": {}
      },
      13: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [ Features["17"] ],
    	"class_specific": {
    		"rage_count": 5,
    		"rage_damage_bonus": 3,
    		"brutal_critical_dice": 2
    	},
    	"subclass": {}
      },
      14: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [],
    	"class_specific": {
    		"rage_count": 5,
    		"rage_damage_bonus": 3,
    		"brutal_critical_dice": 2
    	},
    	"subclass": {}
      },
      15: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [ Features["19"] ],
    	"class_specific": {
    		"rage_count": 5,
    		"rage_damage_bonus": 3,
    		"brutal_critical_dice": 2
    	},
    	"subclass": {}
      },
      16: {
    	"ability_score_bonuses": 4,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [ Features["20"] ],
    	"class_specific": {
    		"rage_count": 5,
    		"rage_damage_bonus": 4,
    		"brutal_critical_dice": 2
    	},
    	"subclass": {}
      },
      17: {
    	"ability_score_bonuses": 4,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [ Features["21"] ],
    	"class_specific": {
    		"rage_count": 6,
    		"rage_damage_bonus": 4,
    		"brutal_critical_dice": 3
    	},
    	"subclass": {}
      },
      18: {
    	"ability_score_bonuses": 4,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [ Features["22"] ],
    	"class_specific": {
    		"rage_count": 6,
    		"rage_damage_bonus": 4,
    		"brutal_critical_dice": 3
    	},
    	"subclass": {}
      },
      19: {
    	"ability_score_bonuses": 5,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [ Features["23"] ],
    	"class_specific": {
    		"rage_count": 6,
    		"rage_damage_bonus": 4,
    		"brutal_critical_dice": 3
    	},
    	"subclass": {}
      },
      20: {
    	"ability_score_bonuses": 5,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [ Features["24"] ],
    	"class_specific": {
    		"rage_count": 9999,
    		"rage_damage_bonus": 4,
    		"brutal_critical_dice": 3
    	},
    	"subclass": {}
      }
    },
    "Bard": {
    	1: {
    	"ability_score_bonuses": 0,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [ Features["25"], Features["26"], Features["70"] ],
    	"spellcasting": {
    		"cantrips_known": 2,
    		"spells_known": 4,
    		"spell_slots_level_1": 2,
    		"spell_slots_level_2": 0,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"bardic_inspiration_die": 6,
    		"song_of_rest_die": 0,
    		"magical_secrets_max_5": 0,
    		"magical_secrets_max_7": 0,
    		"magical_secrets_max_9": 0
    	},
    	"subclass": {},
      },
      2: {
    	"ability_score_bonuses": 0,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [ Features["27"], Features["28"] ],
    	"spellcasting": {
    		"cantrips_known": 2,
    		"spells_known": 5,
    		"spell_slots_level_1": 3,
    		"spell_slots_level_2": 0,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"bardic_inspiration_die": 6,
    		"song_of_rest_die": 6,
    		"magical_secrets_max_5": 0,
    		"magical_secrets_max_7": 0,
    		"magical_secrets_max_9": 0
    	},
    	"subclass": {},
      },
      3: {
    	"ability_score_bonuses": 0,
    	"prof_bonus": 2,
    	"feature_choices": [ Features["32"], Features["29"] ],
    	"spellcasting": {
    		"cantrips_known": 2,
    		"spells_known": 6,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 2,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"bardic_inspiration_die": 6,
    		"song_of_rest_die": 6,
    		"magical_secrets_max_5": 0,
    		"magical_secrets_max_7": 0,
    		"magical_secrets_max_9": 0
    	},
    	"subclass": {},
      },
      4: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [ Features["51"] ],
    	"spellcasting": {
    		"cantrips_known": 3,
    		"spells_known": 7,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"bardic_inspiration_die": 6,
    		"song_of_rest_die": 6,
    		"magical_secrets_max_5": 0,
    		"magical_secrets_max_7": 0,
    		"magical_secrets_max_9": 0
    	},
    	"subclass": {},
      },
      5: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [ Features["52"], Features["53"] ],
    	"spellcasting": {
    		"cantrips_known": 3,
    		"spells_known": 8,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 2,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"bardic_inspiration_die": 8,
    		"song_of_rest_die": 6,
    		"magical_secrets_max_5": 0,
    		"magical_secrets_max_7": 0,
    		"magical_secrets_max_9": 0
    	},
    	"subclass": {},
      },
      6: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 3,
    		"spells_known": 9,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"bardic_inspiration_die": 8,
    		"song_of_rest_die": 6,
    		"magical_secrets_max_5": 0,
    		"magical_secrets_max_7": 0,
    		"magical_secrets_max_9": 0
    	},
    	"subclass": {},
      },
      7: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [ Features["54"] ],
    	"spellcasting": {
    		"cantrips_known": 3,
    		"spells_known": 10,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 1,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"bardic_inspiration_die": 8,
    		"song_of_rest_die": 6,
    		"magical_secrets_max_5": 0,
    		"magical_secrets_max_7": 0,
    		"magical_secrets_max_9": 0
    	},
    	"subclass": {},
      },
      8: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 3,
    	"feature_choices": [ Features["56"] ],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 3,
    		"spells_known": 11,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 2,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"bardic_inspiration_die": 8,
    		"song_of_rest_die": 6,
    		"magical_secrets_max_5": 0,
    		"magical_secrets_max_7": 0,
    		"magical_secrets_max_9": 0
    	},
    	"subclass": {},
      },
      9: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [ Features["57"] ],
    	"spellcasting": {
    		"cantrips_known": 3,
    		"spells_known": 12,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 1,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"bardic_inspiration_die": 8,
    		"song_of_rest_die": 8,
    		"magical_secrets_max_5": 0,
    		"magical_secrets_max_7": 0,
    		"magical_secrets_max_9": 0
    	},
    	"subclass": {},
      },
      10: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 4,
    	"feature_choices": [ Features["59"] ],
    	"features": [ Features["58"], Features["60"] ],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spells_known": 14,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"bardic_inspiration_die": 10,
    		"song_of_rest_die": 8,
    		"magical_secrets_max_5": 2,
    		"magical_secrets_max_7": 0,
    		"magical_secrets_max_9": 0
    	},
    	"subclass": {},
      },
      11: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spells_known": 15,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"bardic_inspiration_die": 10,
    		"song_of_rest_die": 8,
    		"magical_secrets_max_5": 2,
    		"magical_secrets_max_7": 0,
    		"magical_secrets_max_9": 0
    	},
    	"subclass": {},
      },
      12: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [ Features["61"] ],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spells_known": 15,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"bardic_inspiration_die": 10,
    		"song_of_rest_die": 8,
    		"magical_secrets_max_5": 2,
    		"magical_secrets_max_7": 0,
    		"magical_secrets_max_9": 0
    	},
    	"subclass": {},
      },
      13: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [ Features["62"] ],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spells_known": 16,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 1,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"bardic_inspiration_die": 10,
    		"song_of_rest_die": 10,
    		"magical_secrets_max_5": 2,
    		"magical_secrets_max_7": 0,
    		"magical_secrets_max_9": 0
    	},
    	"subclass": {},
      },
      14: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [ Features["63"] ],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spells_known": 18,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 1,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"bardic_inspiration_die": 10,
    		"song_of_rest_die": 10,
    		"magical_secrets_max_5": 2,
    		"magical_secrets_max_7": 2,
    		"magical_secrets_max_9": 0
    	},
    	"subclass": {},
      },
      15: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [ Features["65"] ],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spells_known": 19,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 1,
    		"spell_slots_level_8": 1,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"bardic_inspiration_die": 12,
    		"song_of_rest_die": 10,
    		"magical_secrets_max_5": 2,
    		"magical_secrets_max_7": 2,
    		"magical_secrets_max_9": 0
    	},
    	"subclass": {},
      },
      16: {
    	"ability_score_bonuses": 4,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [ Features["66"] ],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spells_known": 19,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 1,
    		"spell_slots_level_8": 1,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"bardic_inspiration_die": 12,
    		"song_of_rest_die": 10,
    		"magical_secrets_max_5": 2,
    		"magical_secrets_max_7": 2,
    		"magical_secrets_max_9": 0
    	},
    	"subclass": {},
      },
      17: {
    	"ability_score_bonuses": 4,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [ Features["67"] ],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spells_known": 20,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 1,
    		"spell_slots_level_8": 1,
    		"spell_slots_level_9": 1
    	},
    	"class_specific": {
    		"bardic_inspiration_die": 12,
    		"song_of_rest_die": 12,
    		"magical_secrets_max_5": 2,
    		"magical_secrets_max_7": 2,
    		"magical_secrets_max_9": 0
    	},
    	"subclass": {},
      },
      18: {
    	"ability_score_bonuses": 4,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [ Features["68"] ],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spells_known": 22,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 3,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 1,
    		"spell_slots_level_8": 1,
    		"spell_slots_level_9": 1
    	},
    	"class_specific": {
    		"bardic_inspiration_die": 12,
    		"song_of_rest_die": 12,
    		"magical_secrets_max_5": 2,
    		"magical_secrets_max_7": 2,
    		"magical_secrets_max_9": 2
    	},
    	"subclass": {},
      },
      19: {
    	"ability_score_bonuses": 5,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [ Features["69"] ],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spells_known": 22,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 3,
    		"spell_slots_level_6": 2,
    		"spell_slots_level_7": 1,
    		"spell_slots_level_8": 1,
    		"spell_slots_level_9": 1
    	},
    	"class_specific": {
    		"bardic_inspiration_die": 12,
    		"song_of_rest_die": 12,
    		"magical_secrets_max_5": 2,
    		"magical_secrets_max_7": 2,
    		"magical_secrets_max_9": 2
    	},
    	"subclass": {},
      },
      20: {
    	"ability_score_bonuses": 5,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [ Features["70"] ],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spells_known": 22,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 3,
    		"spell_slots_level_6": 2,
    		"spell_slots_level_7": 2,
    		"spell_slots_level_8": 1,
    		"spell_slots_level_9": 1
    	},
    	"class_specific": {
    		"bardic_inspiration_die": 12,
    		"song_of_rest_die": 12,
    		"magical_secrets_max_5": 2,
    		"magical_secrets_max_7": 2,
    		"magical_secrets_max_9": 2
    	},
    	"subclass": {},
      }
    },
    "Cleric": {
      1: {
    	"ability_score_bonuses": 0,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [ Features["71"], Features["72"], Features["73"] ],
    	"spellcasting": {
    		"cantrips_known": 3,
    		"spells_known": 4,
    		"spell_slots_level_1": 2,
    		"spell_slots_level_2": 0,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"channel_divinity_charges": 0,
    		"destroy_undead_cr": 0
    	},
    	"subclass": {},
      },
      2: {
    	"ability_score_bonuses": 0,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [
    		{
    		  "name": "Channel Divinity (1/rest)",
    		  "url": "http://www.dnd5eapi.co/api/features/76"
    		},
    		{
    		  "name": "Channel Divinity: Turn Undead",
    		  "url": "http://www.dnd5eapi.co/api/features/77"
    		}
    	],
    	"spellcasting": {
    		"cantrips_known": 3,
    		"spells_known": 5,
    		"spell_slots_level_1": 3,
    		"spell_slots_level_2": 0,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"channel_divinity_charges": 1,
    		"destroy_undead_cr": 0
    	},
    	"subclass": {},
      },
      3: {
    	"ability_score_bonuses": 0,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [ Features["79"] ],
    	"spellcasting": {
    		"cantrips_known": 3,
    		"spells_known": 6,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 2,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"channel_divinity_charges": 1,
    		"destroy_undead_cr": 0
    	},
    	"subclass": {},
      },
      4: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [ Features["80"] ],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spells_known": 7,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"channel_divinity_charges": 1,
    		"destroy_undead_cr": 0
    	},
    	"subclass": {},
      },
      5: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [ Features["81"], Features["82"] ],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spells_known": 8,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 2,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"channel_divinity_charges": 1,
    		"destroy_undead_cr": 0.5
    	},
    	"subclass": {},
      },
      6: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [ Features["83"] ],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spells_known": 9,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"channel_divinity_charges": 2,
    		"destroy_undead_cr": 0.5
    	},
    	"subclass": {},
      },
      7: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [ Features["85"] ],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spells_known": 10,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 1,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"channel_divinity_charges": 2,
    		"destroy_undead_cr": 0.5
    	},
    	"subclass": {},
      },
      8: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [ Features["86"], Features["87"] ],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spells_known": 11,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 2,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"channel_divinity_charges": 2,
    		"destroy_undead_cr": 1
    	},
    	"subclass": {},
      },
      9: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [ Features["89"] ],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spells_known": 12,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 1,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"channel_divinity_charges": 2,
    		"destroy_undead_cr": 1
    	},
    	"subclass": {},
      },
      10: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [ Features["90"] ],
    	"spellcasting": {
    		"cantrips_known": 5,
    		"spells_known": 14,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"channel_divinity_charges": 2,
    		"destroy_undead_cr": 1
    	},
    	"subclass": {},
      },
      11: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [ Features["91"] ],
    	"spellcasting": {
    		"cantrips_known": 5,
    		"spells_known": 15,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"channel_divinity_charges": 2,
    		"destroy_undead_cr": 2
    	},
    	"subclass": {},
      },
      12: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [ Features["92"] ],
    	"spellcasting": {
    		"cantrips_known": 5,
    		"spells_known": 15,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"channel_divinity_charges": 2,
    		"destroy_undead_cr": 2
    	},
    	"subclass": {},
      },
      13: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 5,
    		"spells_known": 16,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 1,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"channel_divinity_charges": 2,
    		"destroy_undead_cr": 2
    	},
    	"subclass": {},
      },
      14: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [ Features["93"] ],
    	"spellcasting": {
    		"cantrips_known": 5,
    		"spells_known": 18,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 1,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"channel_divinity_charges": 2,
    		"destroy_undead_cr": 3
    	},
    	"subclass": {},
      },
      15: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 5,
    		"spells_known": 19,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 1,
    		"spell_slots_level_8": 1,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"channel_divinity_charges": 2,
    		"destroy_undead_cr": 3
    	},
    	"subclass": {},
      },
      16: {
    	"ability_score_bonuses": 4,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [ Features["94"] ],
    	"spellcasting": {
    		"cantrips_known": 5,
    		"spells_known": 19,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 1,
    		"spell_slots_level_8": 1,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"channel_divinity_charges": 2,
    		"destroy_undead_cr": 3
    	},
    	"subclass": {},
      },
      17: {
    	"ability_score_bonuses": 4,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [ Features["95"], Features["96"] ],
    	"spellcasting": {
    		"cantrips_known": 5,
    		"spells_known": 20,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 1,
    		"spell_slots_level_8": 1,
    		"spell_slots_level_9": 1
    	},
    	"class_specific": {
    		"channel_divinity_charges": 2,
    		"destroy_undead_cr": 4
    	},
    	"subclass": {},
      },
      18: {
    	"ability_score_bonuses": 4,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [ Features["97"] ],
    	"spellcasting": {
    		"cantrips_known": 5,
    		"spells_known": 22,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 3,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 1,
    		"spell_slots_level_8": 1,
    		"spell_slots_level_9": 1
    	},
    	"class_specific": {
    		"channel_divinity_charges": 3,
    		"destroy_undead_cr": 4
    	},
    	"subclass": {},
      },
      19: {
    	"ability_score_bonuses": 5,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [ Features["98"] ],
    	"spellcasting": {
    		"cantrips_known": 5,
    		"spells_known": 22,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 3,
    		"spell_slots_level_6": 2,
    		"spell_slots_level_7": 1,
    		"spell_slots_level_8": 1,
    		"spell_slots_level_9": 1
    	},
    	"class_specific": {
    		"channel_divinity_charges": 3,
    		"destroy_undead_cr": 4
    	},
    	"subclass": {},
      },
      20: {
    	"ability_score_bonuses": 5,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [ Features["99"] ],
    	"spellcasting": {
    		"cantrips_known": 5,
    		"spells_known": 22,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 3,
    		"spell_slots_level_6": 2,
    		"spell_slots_level_7": 2,
    		"spell_slots_level_8": 1,
    		"spell_slots_level_9": 1
    	},
    	"class_specific": {
    		"channel_divinity_charges": 3,
    		"destroy_undead_cr": 4
    	},
    	"subclass": {},
      }
    },
    "Druid": {
      1: {
    	"ability_score_bonuses": 0,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [ Features["100"], Features["101"] ],
    	"spellcasting": {
    		"cantrips_known": 2,
    		"spell_slots_level_1": 2,
    		"spell_slots_level_2": 0,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"wild_shape_max_cr": 0,
    		"wild_shape_swim": false,
    		"wild_shape_fly": false
    	},
    	"subclass": {},
      },
      2: {
    	"ability_score_bonuses": 0,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [ Features["102"], Features["103"] ],
    	"spellcasting": {
    		"cantrips_known": 2,
    		"spell_slots_level_1": 3,
    		"spell_slots_level_2": 0,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"wild_shape_max_cr": 0.25,
    		"wild_shape_swim": false,
    		"wild_shape_fly": false
    	},
    	"subclass": {},
      },
      3: {
    	"ability_score_bonuses": 0,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 2,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 2,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"wild_shape_max_cr": 0.25,
    		"wild_shape_swim": false,
    		"wild_shape_fly": false
    	},
    	"subclass": {},
      },
      4: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [ Features["115"], Features["116"] ],
    	"spellcasting": {
    		"cantrips_known": 3,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"wild_shape_max_cr": 0.5,
    		"wild_shape_swim": true,
    		"wild_shape_fly": false
    	},
    	"subclass": {},
      },
      5: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 3,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 2,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"wild_shape_max_cr": 0.5,
    		"wild_shape_swim": true,
    		"wild_shape_fly": false
    	},
    	"subclass": {},
      },
      6: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 3,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"wild_shape_max_cr": 0.5,
    		"wild_shape_swim": true,
    		"wild_shape_fly": false
    	},
    	"subclass": {},
      },
      7: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 3,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 1,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"wild_shape_max_cr": 1,
    		"wild_shape_swim": true,
    		"wild_shape_fly": false
    	},
    	"subclass": {},
      },
      8: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [ Features["120"], Features["121"] ],
    	"spellcasting": {
    		"cantrips_known": 3,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 2,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"wild_shape_max_cr": 1,
    		"wild_shape_swim": true,
    		"wild_shape_fly": true
    	},
    	"subclass": {},
      },
      9: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 3,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 1,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"wild_shape_max_cr": 1,
    		"wild_shape_swim": true,
    		"wild_shape_fly": true
    	},
    	"subclass": {},
      },
      10: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"wild_shape_max_cr": 1,
    		"wild_shape_swim": true,
    		"wild_shape_fly": true
    	},
    	"subclass": {},
      },
      11: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"wild_shape_max_cr": 1,
    		"wild_shape_swim": true,
    		"wild_shape_fly": true
    	},
    	"subclass": {},
      },
      12: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [ Features["124"] ],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"wild_shape_max_cr": 1,
    		"wild_shape_swim": true,
    		"wild_shape_fly": true
    	},
    	"subclass": {},
      },
      13: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 1,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"wild_shape_max_cr": 1,
    		"wild_shape_swim": true,
    		"wild_shape_fly": true
    	},
    	"subclass": {},
      },
      14: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 1,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"wild_shape_max_cr": 1,
    		"wild_shape_swim": true,
    		"wild_shape_fly": true
    	},
    	"subclass": {},
      },
      15: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 1,
    		"spell_slots_level_8": 1,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"wild_shape_max_cr": 1,
    		"wild_shape_swim": true,
    		"wild_shape_fly": true
    	},
    	"subclass": {},
      },
      16: {
    	"ability_score_bonuses": 4,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [ Features["126"] ],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 1,
    		"spell_slots_level_8": 1,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"wild_shape_max_cr": 1,
    		"wild_shape_swim": true,
    		"wild_shape_fly": true
    	},
    	"subclass": {},
      },
      17: {
    	"ability_score_bonuses": 4,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 1,
    		"spell_slots_level_8": 1,
    		"spell_slots_level_9": 1
    	},
    	"class_specific": {
    		"wild_shape_max_cr": 1,
    		"wild_shape_swim": true,
    		"wild_shape_fly": true
    	},
    	"subclass": {},
      },
      18: {
    	"ability_score_bonuses": 4,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [ Features["127"], Features["128"] ],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 3,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 1,
    		"spell_slots_level_8": 1,
    		"spell_slots_level_9": 1
    	},
    	"class_specific": {
    		"wild_shape_max_cr": 1,
    		"wild_shape_swim": true,
    		"wild_shape_fly": true
    	},
    	"subclass": {},
      },
      19: {
    	"ability_score_bonuses": 5,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [ Features["129"] ],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 3,
    		"spell_slots_level_6": 2,
    		"spell_slots_level_7": 1,
    		"spell_slots_level_8": 1,
    		"spell_slots_level_9": 1
    	},
    	"class_specific": {
    		"wild_shape_max_cr": 1,
    		"wild_shape_swim": true,
    		"wild_shape_fly": true
    	},
    	"subclass": {},
      },
      20: {
    	"ability_score_bonuses": 5,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [ Features["130"] ],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 3,
    		"spell_slots_level_6": 2,
    		"spell_slots_level_7": 2,
    		"spell_slots_level_8": 1,
    		"spell_slots_level_9": 1
    	},
    	"class_specific": {
    		"wild_shape_max_cr": 1,
    		"wild_shape_swim": true,
    		"wild_shape_fly": true
    	},
    	"subclass": {},
      }
    },
    "Fighter": {
      1: {
    	"ability_score_bonuses": 0,
    	"prof_bonus": 2,
    	"feature_choices": [ Features["131"] ],
    	"features": [ Features["138"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"action_surges": 0,
    		"indomitable_uses": 0,
    		"extra_attacks": 0
    	},
    	"subclass": {},
      },
      2: {
    	"ability_score_bonuses": 0,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [ Features["139"], Features["155"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"action_surges": 1,
    		"indomitable_uses": 0,
    		"extra_attacks": 0
    	},
    	"subclass": {},
      },
      3: {
    	"ability_score_bonuses": 0,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [ Features["140"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"action_surges": 1,
    		"indomitable_uses": 0,
    		"extra_attacks": 0
    	},
    	"subclass": {},
      },
      4: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [ Features["142"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"action_surges": 1,
    		"indomitable_uses": 0,
    		"extra_attacks": 0
    	},
    	"subclass": {},
      },
      5: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [ Features["143"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"action_surges": 1,
    		"indomitable_uses": 0,
    		"extra_attacks": 1
    	},
    	"subclass": {},
      },
      6: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [ Features["144"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"action_surges": 1,
    		"indomitable_uses": 0,
    		"extra_attacks": 1
    	},
    	"subclass": {},
      },
      7: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {},
    	"class_specific": {
    		"action_surges": 1,
    		"indomitable_uses": 0,
    		"extra_attacks": 1
    	},
    	"subclass": {},
      },
      8: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [ Features["146"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"action_surges": 1,
    		"indomitable_uses": 0,
    		"extra_attacks": 1
    	},
    	"subclass": {},
      },
      9: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [ Features["147"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"action_surges": 1,
    		"indomitable_uses": 1,
    		"extra_attacks": 1
    	},
    	"subclass": {},
      },
      10: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {},
    	"class_specific": {
    		"action_surges": 1,
    		"indomitable_uses": 1,
    		"extra_attacks": 1
    	},
    	"subclass": {},
      },
      11: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [ Features["149"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"action_surges": 1,
    		"indomitable_uses": 1,
    		"extra_attacks": 2
    	},
    	"subclass": {},
      },
      12: {
    	"ability_score_bonuses": 4,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [ Features["150"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"action_surges": 1,
    		"indomitable_uses": 1,
    		"extra_attacks": 2
    	},
    	"subclass": {},
      },
      13: {
    	"ability_score_bonuses": 4,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [ Features["151"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"action_surges": 1,
    		"indomitable_uses": 2,
    		"extra_attacks": 2
    	},
    	"subclass": {},
      },
      14: {
    	"ability_score_bonuses": 5,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [ Features["152"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"action_surges": 1,
    		"indomitable_uses": 2,
    		"extra_attacks": 2
    	},
    	"subclass": {}
      },
      15: {
    	"ability_score_bonuses": 5,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {},
    	"class_specific": {
    		"action_surges": 1,
    		"indomitable_uses": 2,
    		"extra_attacks": 2
    	},
    	"subclass": {},
      },
      16: {
    	"ability_score_bonuses": 6,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [ Features["154"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"action_surges": 1,
    		"indomitable_uses": 2,
    		"extra_attacks": 2
    	},
    	"subclass": {},
      },
      17: {
    	"ability_score_bonuses": 6,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [ Features["156"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"action_surges": 2,
    		"indomitable_uses": 3,
    		"extra_attacks": 2
    	},
    	"subclass": {},
      },
      18: {
    	"ability_score_bonuses": 6,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {},
    	"class_specific": {
    		"action_surges": 2,
    		"indomitable_uses": 3,
    		"extra_attacks": 2
    	},
    	"subclass": {},
      },
      19: {
    	"ability_score_bonuses": 7,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [ Features["158"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"action_surges": 2,
    		"indomitable_uses": 3,
    		"extra_attacks": 2
    	},
    	"subclass": {},
      },
      20: {
    	"ability_score_bonuses": 7,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [ Features["159"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"action_surges": 2,
    		"indomitable_uses": 3,
    		"extra_attacks": 3
    	},
    	"subclass": {},
      }
    },
    "Monk": {
      1: {
    	"ability_score_bonuses": 0,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [ Features["160"], Features["161"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"martial_arts": {
    		  "dice_count": 1,
    		  "dice_value": 4
    		},
    		"ki_points": 0,
    		"unarmored_movement": 10
    	},
    	"subclass": {},
      },
      2: {
    	"ability_score_bonuses": 0,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [ Features["162"], Features["163"], Features["164"], Features["165"], Features["166"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"martial_arts": {
    		  "dice_count": 1,
    		  "dice_value": 4
    		},
    		"ki_points": 2,
    		"unarmored_movement": 10
    	},
    	"subclass": {},
      },
      3: {
    	"ability_score_bonuses": 0,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [ Features["167"], Features["168"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"martial_arts": {
    		  "dice_count": 1,
    		  "dice_value": 4
    		},
    		"ki_points": 3,
    		"unarmored_movement": 10
    	},
    	"subclass": {},
      },
      4: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [ Features["170"], Features["171"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"martial_arts": {
    		  "dice_count": 1,
    		  "dice_value": 4
    		},
    		"ki_points": 4,
    		"unarmored_movement": 10
    	},
    	"subclass": {},
      },
      5: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [ Features["172"], Features["173"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"martial_arts": {
    		  "dice_count": 1,
    		  "dice_value": 6
    		},
    		"ki_points": 5,
    		"unarmored_movement": 15
    	},
    	"subclass": {},
      },
      6: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [ Features["174"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"martial_arts": {
    		  "dice_count": 1,
    		  "dice_value": 6
    		},
    		"ki_points": 6,
    		"unarmored_movement": 15
    	},
    	"subclass": {},
      },
      7: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [ Features["176"], Features["177"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"martial_arts": {
    		  "dice_count": 1,
    		  "dice_value": 6
    		},
    		"ki_points": 7,
    		"unarmored_movement": 15
    	},
    	"subclass": {},
      },
      8: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [ Features["178"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"martial_arts": {
    		  "dice_count": 1,
    		  "dice_value": 6
    		},
    		"ki_points": 8,
    		"unarmored_movement": 15
    	},
    	"subclass": {},
      },
      9: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [ Features["179"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"martial_arts": {
    		  "dice_count": 1,
    		  "dice_value": 6
    		},
    		"ki_points": 9,
    		"unarmored_movement": 15
    	},
    	"subclass": {},
      },
      10: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [ Features["180"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"martial_arts": {
    		  "dice_count": 1,
    		  "dice_value": 6
    		},
    		"ki_points": 10,
    		"unarmored_movement": 20
    	},
    	"subclass": {},
      },
      11: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {},
    	"class_specific": {
    		"martial_arts": {
    		  "dice_count": 1,
    		  "dice_value": 8
    		},
    		"ki_points": 11,
    		"unarmored_movement": 20
    	},
    	"subclass": {},
      },
      12: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [ Features["182"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"martial_arts": {
    		  "dice_count": 1,
    		  "dice_value": 8
    		},
    		"ki_points": 12,
    		"unarmored_movement": 20
    	},
    	"subclass": {},
      },
      13: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [ Features["183"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"martial_arts": {
    		  "dice_count": 1,
    		  "dice_value": 8
    		},
    		"ki_points": 13,
    		"unarmored_movement": 20
    	},
    	"subclass": {},
      },
      14: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [ Features["184"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"martial_arts": {
    		  "dice_count": 1,
    		  "dice_value": 8
    		},
    		"ki_points": 14,
    		"unarmored_movement": 25
    	},
    	"subclass": {},
      },
      15: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [ Features["185"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"martial_arts": {
    		  "dice_count": 1,
    		  "dice_value": 8
    		},
    		"ki_points": 15,
    		"unarmored_movement": 25
    	},
    	"subclass": {},
      },
      16: {
    	"ability_score_bonuses": 4,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [ Features["186"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"martial_arts": {
    		  "dice_count": 1,
    		  "dice_value": 8
    		},
    		"ki_points": 16,
    		"unarmored_movement": 25
    	},
    	"subclass": {},
      },
      17: {
    	"ability_score_bonuses": 4,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {},
    	"class_specific": {
    		"martial_arts": {
    		  "dice_count": 1,
    		  "dice_value": 10
    		},
    		"ki_points": 17,
    		"unarmored_movement": 25
    	},
    	"subclass": {},
      },
      18: {
    	"ability_score_bonuses": 4,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [ Features["188"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"martial_arts": {
    		  "dice_count": 1,
    		  "dice_value": 10
    		},
    		"ki_points": 18,
    		"unarmored_movement": 30
    	},
    	"subclass": {},
      },
      19: {
    	"ability_score_bonuses": 5,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [ Features["189"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"martial_arts": {
    		  "dice_count": 1,
    		  "dice_value": 10
    		},
    		"ki_points": 19,
    		"unarmored_movement": 30
    	},
    	"subclass": {},
      },
      20: {
    	"ability_score_bonuses": 5,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [ Features["190"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"martial_arts": {
    		  "dice_count": 1,
    		  "dice_value": 10
    		},
    		"ki_points": 20,
    		"unarmored_movement": 30
    	},
    	"subclass": {},
      }
    },
    "Paladin": {
      1: {
    	"ability_score_bonuses": 0,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [ Features["191"], Features["192"] ],
    	"spellcasting": {
    		"spell_slots_level_1": 0,
    		"spell_slots_level_2": 0,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0
    	},
    	"class_specific": {
    		"aura_range": 0
    	},
    	"subclass": {},
      },
      2: {
    	"ability_score_bonuses": 0,
    	"prof_bonus": 2,
    	"feature_choices": [ Features["193"] ],
    	"features": [ Features["198"], Features["199"] ],
    	"spellcasting": {
    		"spell_slots_level_1": 2,
    		"spell_slots_level_2": 0,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0
    	},
    	"class_specific": {
    		"aura_range": 0
    	},
    	"subclass": {},
      },
      3: {
    	"ability_score_bonuses": 0,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [ Features["200"], Features["201"], Features["202"], Features["203"] ],
    	"spellcasting": {
    		"spell_slots_level_1": 3,
    		"spell_slots_level_2": 0,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0
    	},
    	"class_specific": {
    		"aura_range": 0
    	},
    	"subclass": {},
      },
      4: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [ Features["206"] ],
    	"spellcasting": {
    		"spell_slots_level_1": 3,
    		"spell_slots_level_2": 0,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0
    	},
    	"class_specific": {
    		"aura_range": 0
    	},
    	"subclass": {},
      },
      5: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [ Features["207"] ],
    	"spellcasting": {
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 2,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0
    	},
    	"class_specific": {
    		"aura_range": 0
    	},
    	"subclass": {},
      },
      6: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [ Features["208"] ],
    	"spell_slots_level_1": 4,
    	"spell_slots_level_2": 2,
    	"spell_slots_level_3": 0,
    	"spell_slots_level_4": 0,
    	"spell_slots_level_5": 0,
    	"aura_range": 10,
    	"subclass": {},
      },
      7: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [],
    	"spell_slots_level_1": 4,
    	"spell_slots_level_2": 3,
    	"spell_slots_level_3": 0,
    	"spell_slots_level_4": 0,
    	"spell_slots_level_5": 0,
    	"aura_range": 10,
    	"subclass": {},
      },
      8: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [ Features["210"] ],
    	"spell_slots_level_1": 4,
    	"spell_slots_level_2": 3,
    	"spell_slots_level_3": 0,
    	"spell_slots_level_4": 0,
    	"spell_slots_level_5": 0,
    	"aura_range": 10,
    	"subclass": {},
      },
      9: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [],
    	"spell_slots_level_1": 4,
    	"spell_slots_level_2": 3,
    	"spell_slots_level_3": 2,
    	"spell_slots_level_4": 0,
    	"spell_slots_level_5": 0,
    	"aura_range": 10,
    	"subclass": {},
      },
      10: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [ Features["211"] ],
    	"spell_slots_level_1": 4,
    	"spell_slots_level_2": 3,
    	"spell_slots_level_3": 2,
    	"spell_slots_level_4": 0,
    	"spell_slots_level_5": 0,
    	"aura_range": 10,
    	"subclass": {},
      },
      11: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [ Features["212"] ],
    	"spell_slots_level_1": 4,
    	"spell_slots_level_2": 3,
    	"spell_slots_level_3": 3,
    	"spell_slots_level_4": 0,
    	"spell_slots_level_5": 0,
    	"aura_range": 10,
    	"subclass": {},
      },
      12: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [ Features["213"] ],
    	"spell_slots_level_1": 4,
    	"spell_slots_level_2": 3,
    	"spell_slots_level_3": 3,
    	"spell_slots_level_4": 0,
    	"spell_slots_level_5": 0,
    	"aura_range": 10,
    	"subclass": {},
      },
      13: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [],
    	"spell_slots_level_1": 4,
    	"spell_slots_level_2": 3,
    	"spell_slots_level_3": 3,
    	"spell_slots_level_4": 1,
    	"spell_slots_level_5": 0,
    	"aura_range": 10,
    	"subclass": {},
      },
      14: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [ Features["214"] ],
    	"spell_slots_level_1": 4,
    	"spell_slots_level_2": 3,
    	"spell_slots_level_3": 3,
    	"spell_slots_level_4": 1,
    	"spell_slots_level_5": 0,
    	"aura_range": 10,
    	"subclass": {},
      },
      15: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 2,
    		"spell_slots_level_5": 0
    	},
    	"class_specific": {
    		"aura_range": 0
    	},
    	"subclass": {},
      },
      16: {
    	"ability_score_bonuses": 4,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [ Features["216"] ],
    	"spell_slots_level_1": 4,
    	"spell_slots_level_2": 3,
    	"spell_slots_level_3": 3,
    	"spell_slots_level_4": 2,
    	"spell_slots_level_5": 0,
    	"aura_range": 10,
    	"subclass": {},
      },
      17: {
    	"ability_score_bonuses": 4,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [],
    	"spell_slots_level_1": 4,
    	"spell_slots_level_2": 3,
    	"spell_slots_level_3": 3,
    	"spell_slots_level_4": 3,
    	"spell_slots_level_5": 1,
    	"aura_range": 10,
    	"subclass": {},
      },
      18: {
    	"ability_score_bonuses": 4,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [ Features["217"] ],
    	"spell_slots_level_1": 4,
    	"spell_slots_level_2": 3,
    	"spell_slots_level_3": 3,
    	"spell_slots_level_4": 3,
    	"spell_slots_level_5": 1,
    	"aura_range": 30,
    	"subclass": {},
      },
      19: {
    	"ability_score_bonuses": 5,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [ Features["218"] ],
    	"spell_slots_level_1": 4,
    	"spell_slots_level_2": 3,
    	"spell_slots_level_3": 3,
    	"spell_slots_level_4": 3,
    	"spell_slots_level_5": 2,
    	"aura_range": 30,
    	"subclass": {},
      },
      20: {
    	"ability_score_bonuses": 5,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [],
    	"spell_slots_level_1": 4,
    	"spell_slots_level_2": 3,
    	"spell_slots_level_3": 3,
    	"spell_slots_level_4": 3,
    	"spell_slots_level_5": 2,
    	"aura_range": 30,
    	"subclass": {},
      }
    },
    "Ranger": {
      1: {
    	"ability_score_bonuses": 0,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [ Features["220"], Features["221"] ],
    	"spellcasting": {
    		"spells_known": 0,
    		"spell_slots_level_1": 0,
    		"spell_slots_level_2": 0,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0
    	},
    	"class_specific": {
    		"favored_enemies": 1,
    		"favored_terrain": 1
    	},
    	"subclass": {},
      },
      2: {
    	"ability_score_bonuses": 0,
    	"prof_bonus": 2,
    	"feature_choices": [ Features["222"] ],
    	"features": [ Features["227"] ],
    	"spellcasting": {
    		"spells_known": 2,
    		"spell_slots_level_1": 2,
    		"spell_slots_level_2": 0,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0
    	},
    	"class_specific": {
    		"favored_enemies": 1,
    		"favored_terrain": 1
    	},
    	"subclass": {},
      },
      3: {
    	"ability_score_bonuses": 0,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [ Features["228"], Features["233"] ],
    	"spellcasting": {
    		"spells_known": 3,
    		"spell_slots_level_1": 3,
    		"spell_slots_level_2": 0,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0
    	},
    	"class_specific": {
    		"favored_enemies": 1,
    		"favored_terrain": 1
    	},
    	"subclass": {},
      },
      4: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [ Features["234"] ],
    	"spellcasting": {
    		"spells_known": 3,
    		"spell_slots_level_1": 3,
    		"spell_slots_level_2": 0,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0
    	},
    	"class_specific": {
    		"favored_enemies": 1,
    		"favored_terrain": 1
    	},
    	"subclass": {},
      },
      5: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [ Features["235"] ],
    	"spellcasting": {
    		"spells_known": 4,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 2,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0
    	},
    	"class_specific": {
    		"favored_enemies": 1,
    		"favored_terrain": 1
    	},
    	"subclass": {},
      },
      6: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [ Features["236"], Features["237"] ],
    	"spellcasting": {
    		"spells_known": 4,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 2,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0
    	},
    	"class_specific": {
    		"favored_enemies": 2,
    		"favored_terrain": 2
    	},
    	"subclass": {},
      },
      7: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"spells_known": 5,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0
    	},
    	"class_specific": {
    		"favored_enemies": 2,
    		"favored_terrain": 2
    	},
    	"subclass": {},
      },
      8: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [ Features["242"], Features["243"] ],
    	"spellcasting": {
    		"spells_known": 5,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0
    	},
    	"class_specific": {
    		"favored_enemies": 2,
    		"favored_terrain": 2
    	},
    	"subclass": {},
      },
      9: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"spells_known": 6,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 2,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0
    	},
    	"class_specific": {
    		"favored_enemies": 2,
    		"favored_terrain": 2
    	},
    	"subclass": {},
      },
      10: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [ Features["244"], Features["245"] ],
    	"spellcasting": {
    		"spells_known": 6,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 2,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0
    	},
    	"class_specific": {
    		"favored_enemies": 2,
    		"favored_terrain": 3
    	},
    	"subclass": {},
      },
      11: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"spells_known": 7,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0
    	},
    	"class_specific": {
    		"favored_enemies": 2,
    		"favored_terrain": 3
    	},
    	"subclass": {},
      },
      12: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [ Features["249"] ],
    	"spellcasting": {
    		"spells_known": 7,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0
    	},
    	"class_specific": {
    		"favored_enemies": 2,
    		"favored_terrain": 3
    	},
    	"subclass": {},
      },
      13: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"spells_known": 8,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 1,
    		"spell_slots_level_5": 0
    	},
    	"class_specific": {
    		"favored_enemies": 2,
    		"favored_terrain": 3
    	},
    	"subclass": {},
      },
      14: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [ Features["250"], Features["251"] ],
    	"spellcasting": {
    		"spells_known": 8,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 1,
    		"spell_slots_level_5": 0
    	},
    	"class_specific": {
    		"favored_enemies": 3,
    		"favored_terrain": 3
    	},
    	"subclass": {},
      },
      15: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"spells_known": 9,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 2,
    		"spell_slots_level_5": 0
    	},
    	"class_specific": {
    		"favored_enemies": 3,
    		"favored_terrain": 3
    	},
    	"subclass": {},
      },
      16: {
    	"ability_score_bonuses": 4,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [ Features["256"] ],
    	"spellcasting": {
    		"spells_known": 9,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 2,
    		"spell_slots_level_5": 0
    	},
    	"class_specific": {
    		"favored_enemies": 3,
    		"favored_terrain": 3
    	},
    	"subclass": {},
      },
      17: {
    	"ability_score_bonuses": 4,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"spells_known": 10,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 1
    	},
    	"class_specific": {
    		"favored_enemies": 3,
    		"favored_terrain": 3
    	},
    	"subclass": {},
      },
      18: {
    	"ability_score_bonuses": 4,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [ Features["257"] ],
    	"spellcasting": {
    		"spells_known": 10,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 1
    	},
    	"class_specific": {
    		"favored_enemies": 3,
    		"favored_terrain": 3
    	},
    	"subclass": {},
      },
      19: {
    	"ability_score_bonuses": 5,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [ Features["258"] ],
    	"spellcasting": {
    		"spells_known": 11,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2
    	},
    	"class_specific": {
    		"favored_enemies": 3,
    		"favored_terrain": 3
    	},
    	"subclass": {},
      },
      20: {
    	"ability_score_bonuses": 5,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [ Features["259"] ],
    	"spellcasting": {
    		"spells_known": 11,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2
    	},
    	"class_specific": {
    		"favored_enemies": 3,
    		"favored_terrain": 3
    	},
    	"subclass": {},
      }
    },
    "Rogue": {
      1: {
    	"ability_score_bonuses": 0,
    	"prof_bonus": 2,
    	"feature_choices": [ Features["260"] ],
    	"features": [ Features["280"], Features["281"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"sneak_attack": {
    		  "dice_count": 1,
    		  "dice_value": 6
    		}
    	},
    	"subclass": {},
      },
      2: {
    	"ability_score_bonuses": 0,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [ Features["282"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"sneak_attack": {
    		  "dice_count": 1,
    		  "dice_value": 6
    		}
    	},
    	"subclass": {},
      },
      3: {
    	"ability_score_bonuses": 0,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [ Features["283"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"sneak_attack": {
    		  "dice_count": 2,
    		  "dice_value": 6
    		}
    	},
    	"subclass": {},
      },
      4: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [ Features["286"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"sneak_attack": {
    		  "dice_count": 2,
    		  "dice_value": 6
    		}
    	},
    	"subclass": {},
      },
      5: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [ Features["287"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"sneak_attack": {
    		  "dice_count": 3,
    		  "dice_value": 6
    		}
    	},
    	"subclass": {},
      },
      6: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 3,
    	"feature_choices": [ Features["288"] ],
    	"features": [],
    	"spellcasting": {},
    	"class_specific": {
    		"sneak_attack": {
    		  "dice_count": 3,
    		  "dice_value": 6
    		}
    	},
    	"subclass": {},
      },
      7: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [ Features["289"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"sneak_attack": {
    		  "dice_count": 4,
    		  "dice_value": 6
    		}
    	},
    	"subclass": {},
      },
      8: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [ Features["290"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"sneak_attack": {
    		  "dice_count": 4,
    		  "dice_value": 6
    		}
    	},
    	"subclass": {},
      },
      9: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {},
    	"class_specific": {
    		"sneak_attack": {
    		  "dice_count": 5,
    		  "dice_value": 6
    		}
    	},
    	"subclass": {},
      },
      10: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [ Features["292"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"sneak_attack": {
    		  "dice_count": 5,
    		  "dice_value": 6
    		}
    	},
    	"subclass": {},
      },
      11: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [ Features["293"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"sneak_attack": {
    		  "dice_count": 6,
    		  "dice_value": 6
    		}
    	},
    	"subclass": {},
      },
      12: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [ Features["294"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"sneak_attack": {
    		  "dice_count": 6,
    		  "dice_value": 6
    		}
    	},
    	"subclass": {},
      },
      13: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {},
    	"class_specific": {
    		"sneak_attack": {
    		  "dice_count": 7,
    		  "dice_value": 6
    		}
    	},
    	"subclass": {},
      },
      14: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [ Features["296"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"sneak_attack": {
    		  "dice_count": 7,
    		  "dice_value": 6
    		}
    	},
    	"subclass": {},
      },
      15: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [ Features["297"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"sneak_attack": {
    		  "dice_count": 8,
    		  "dice_value": 6
    		}
    	},
    	"subclass": {},
      },
      16: {
    	"ability_score_bonuses": 4,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [ Features["298"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"sneak_attack": {
    		  "dice_count": 8,
    		  "dice_value": 6
    		}
    	},
    	"subclass": {},
      },
      17: {
    	"ability_score_bonuses": 4,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {},
    	"class_specific": {
    		"sneak_attack": {
    		  "dice_count": 9,
    		  "dice_value": 6
    		}
    	},
    	"subclass": {},
      },
      18: {
    	"ability_score_bonuses": 4,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [ Features["300"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"sneak_attack": {
    		  "dice_count": 9,
    		  "dice_value": 6
    		}
    	},
    	"subclass": {},
      },
      19: {
    	"ability_score_bonuses": 5,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [ Features["301"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"sneak_attack": {
    		  "dice_count": 10,
    		  "dice_value": 6
    		}
    	},
    	"subclass": {},
      },
      20: {
    	"ability_score_bonuses": 5,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [ Features["302"] ],
    	"spellcasting": {},
    	"class_specific": {
    		"sneak_attack": {
    		  "dice_count": 10,
    		  "dice_value": 6
    		}
    	},
    	"subclass": {},
      }
    },
    "Sorcerer": {
      1: {
    	"ability_score_bonuses": 0,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [ Features["303"], Features["304"] ],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spells_known": 2,
    		"spell_slots_level_1": 2,
    		"spell_slots_level_2": 0,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"sorcery_points": 0,
    		"metamagic_known": 0,
    		"creating_spell_slots": []
    	},
    	"subclass": {},
      },
      2: {
    	"ability_score_bonuses": 0,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [ Features["317"], Features["318"], Features["319"] ],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spells_known": 3,
    		"spell_slots_level_1": 3,
    		"spell_slots_level_2": 0,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"sorcery_points": 2,
    		"metamagic_known": 0,
    		"creating_spell_slots": [
    		  {
    			"spell_slot_level": 1,
    			"sorcery_point_cost": 2
    		  },
    		  {
    			"spell_slot_level": 2,
    			"sorcery_point_cost": 3
    		  },
    		  {
    			"spell_slot_level": 3,
    			"sorcery_point_cost": 5
    		  },
    		  {
    			"spell_slot_level": 4,
    			"sorcery_point_cost": 6
    		  },
    		  {
    			"spell_slot_level": 5,
    			"sorcery_point_cost": 7
    		  }
    		]
    	},
    	"subclass": {},
      },
      3: {
    	"ability_score_bonuses": 0,
    	"prof_bonus": 2,
    	"feature_choices": [ Features["320"] ],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spells_known": 4,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 2,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"sorcery_points": 3,
    		"metamagic_known": 2,
    		"creating_spell_slots": [
    		  {
    			"spell_slot_level": 1,
    			"sorcery_point_cost": 2
    		  },
    		  {
    			"spell_slot_level": 2,
    			"sorcery_point_cost": 3
    		  },
    		  {
    			"spell_slot_level": 3,
    			"sorcery_point_cost": 5
    		  },
    		  {
    			"spell_slot_level": 4,
    			"sorcery_point_cost": 6
    		  },
    		  {
    			"spell_slot_level": 5,
    			"sorcery_point_cost": 7
    		  }
    		]
    	},
    	"subclass": {},
      },
      4: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [ Features["329"] ],
    	"spellcasting": {
    		"cantrips_known": 5,
    		"spells_known": 5,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"sorcery_points": 4,
    		"metamagic_known": 2,
    		"creating_spell_slots": [
    		  {
    			"spell_slot_level": 1,
    			"sorcery_point_cost": 2
    		  },
    		  {
    			"spell_slot_level": 2,
    			"sorcery_point_cost": 3
    		  },
    		  {
    			"spell_slot_level": 3,
    			"sorcery_point_cost": 5
    		  },
    		  {
    			"spell_slot_level": 4,
    			"sorcery_point_cost": 6
    		  },
    		  {
    			"spell_slot_level": 5,
    			"sorcery_point_cost": 7
    		  }
    		]
    	},
    	"subclass": {},
      },
      5: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 5,
    		"spells_known": 6,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 2,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"sorcery_points": 5,
    		"metamagic_known": 2,
    		"creating_spell_slots": [
    		  {
    			"spell_slot_level": 1,
    			"sorcery_point_cost": 2
    		  },
    		  {
    			"spell_slot_level": 2,
    			"sorcery_point_cost": 3
    		  },
    		  {
    			"spell_slot_level": 3,
    			"sorcery_point_cost": 5
    		  },
    		  {
    			"spell_slot_level": 4,
    			"sorcery_point_cost": 6
    		  },
    		  {
    			"spell_slot_level": 5,
    			"sorcery_point_cost": 7
    		  }
    		]
    	},
    	"subclass": {},
      },
      6: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 5,
    		"spells_known": 7,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"sorcery_points": 6,
    		"metamagic_known": 2,
    		"creating_spell_slots": [
    		  {
    			"spell_slot_level": 1,
    			"sorcery_point_cost": 2
    		  },
    		  {
    			"spell_slot_level": 2,
    			"sorcery_point_cost": 3
    		  },
    		  {
    			"spell_slot_level": 3,
    			"sorcery_point_cost": 5
    		  },
    		  {
    			"spell_slot_level": 4,
    			"sorcery_point_cost": 6
    		  },
    		  {
    			"spell_slot_level": 5,
    			"sorcery_point_cost": 7
    		  }
    		]
    	},
    	"subclass": {},
      },
      7: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 5,
    		"spells_known": 8,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 1,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"sorcery_points": 7,
    		"metamagic_known": 2,
    		"creating_spell_slots": [
    		  {
    			"spell_slot_level": 1,
    			"sorcery_point_cost": 2
    		  },
    		  {
    			"spell_slot_level": 2,
    			"sorcery_point_cost": 3
    		  },
    		  {
    			"spell_slot_level": 3,
    			"sorcery_point_cost": 5
    		  },
    		  {
    			"spell_slot_level": 4,
    			"sorcery_point_cost": 6
    		  },
    		  {
    			"spell_slot_level": 5,
    			"sorcery_point_cost": 7
    		  }
    		]
    	},
    	"subclass": {},
      },
      8: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [ Features["331"] ],
    	"spellcasting": {
    		"cantrips_known": 5,
    		"spells_known": 9,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 2,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"sorcery_points": 8,
    		"metamagic_known": 2,
    		"creating_spell_slots": [
    		  {
    			"spell_slot_level": 1,
    			"sorcery_point_cost": 2
    		  },
    		  {
    			"spell_slot_level": 2,
    			"sorcery_point_cost": 3
    		  },
    		  {
    			"spell_slot_level": 3,
    			"sorcery_point_cost": 5
    		  },
    		  {
    			"spell_slot_level": 4,
    			"sorcery_point_cost": 6
    		  },
    		  {
    			"spell_slot_level": 5,
    			"sorcery_point_cost": 7
    		  }
    		]
    	},
    	"subclass": {},
      },
      9: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 5,
    		"spells_known": 10,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 1,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"sorcery_points": 9,
    		"metamagic_known": 2,
    		"creating_spell_slots": [
    		  {
    			"spell_slot_level": 1,
    			"sorcery_point_cost": 2
    		  },
    		  {
    			"spell_slot_level": 2,
    			"sorcery_point_cost": 3
    		  },
    		  {
    			"spell_slot_level": 3,
    			"sorcery_point_cost": 5
    		  },
    		  {
    			"spell_slot_level": 4,
    			"sorcery_point_cost": 6
    		  },
    		  {
    			"spell_slot_level": 5,
    			"sorcery_point_cost": 7
    		  }
    		]
    	},
    	"subclass": {},
      },
      10: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 4,
    	"feature_choices": [ Features["332"] ],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 6,
    		"spells_known": 11,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"sorcery_points": 10,
    		"metamagic_known": 3,
    		"creating_spell_slots": [
    		  {
    			"spell_slot_level": 1,
    			"sorcery_point_cost": 2
    		  },
    		  {
    			"spell_slot_level": 2,
    			"sorcery_point_cost": 3
    		  },
    		  {
    			"spell_slot_level": 3,
    			"sorcery_point_cost": 5
    		  },
    		  {
    			"spell_slot_level": 4,
    			"sorcery_point_cost": 6
    		  },
    		  {
    			"spell_slot_level": 5,
    			"sorcery_point_cost": 7
    		  }
    		]
    	},
    	"subclass": {},
      },
      11: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 6,
    		"spells_known": 12,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"sorcery_points": 11,
    		"metamagic_known": 3,
    		"creating_spell_slots": [
    		  {
    			"spell_slot_level": 1,
    			"sorcery_point_cost": 2
    		  },
    		  {
    			"spell_slot_level": 2,
    			"sorcery_point_cost": 3
    		  },
    		  {
    			"spell_slot_level": 3,
    			"sorcery_point_cost": 5
    		  },
    		  {
    			"spell_slot_level": 4,
    			"sorcery_point_cost": 6
    		  },
    		  {
    			"spell_slot_level": 5,
    			"sorcery_point_cost": 7
    		  }
    		]
    	},
    	"subclass": {},
      },
      12: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [ Features["333"] ],
    	"spellcasting": {
    		"cantrips_known": 6,
    		"spells_known": 12,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"sorcery_points": 12,
    		"metamagic_known": 3,
    		"creating_spell_slots": [
    		  {
    			"spell_slot_level": 1,
    			"sorcery_point_cost": 2
    		  },
    		  {
    			"spell_slot_level": 2,
    			"sorcery_point_cost": 3
    		  },
    		  {
    			"spell_slot_level": 3,
    			"sorcery_point_cost": 5
    		  },
    		  {
    			"spell_slot_level": 4,
    			"sorcery_point_cost": 6
    		  },
    		  {
    			"spell_slot_level": 5,
    			"sorcery_point_cost": 7
    		  }
    		]
    	},
    	"subclass": {},
      },
      13: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 6,
    		"spells_known": 13,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 1,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"sorcery_points": 13,
    		"metamagic_known": 3,
    		"creating_spell_slots": [
    		  {
    			"spell_slot_level": 1,
    			"sorcery_point_cost": 2
    		  },
    		  {
    			"spell_slot_level": 2,
    			"sorcery_point_cost": 3
    		  },
    		  {
    			"spell_slot_level": 3,
    			"sorcery_point_cost": 5
    		  },
    		  {
    			"spell_slot_level": 4,
    			"sorcery_point_cost": 6
    		  },
    		  {
    			"spell_slot_level": 5,
    			"sorcery_point_cost": 7
    		  }
    		]
    	},
    	"subclass": {},
      },
      14: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 6,
    		"spells_known": 13,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 1,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"sorcery_points": 14,
    		"metamagic_known": 3,
    		"creating_spell_slots": [
    		  {
    			"spell_slot_level": 1,
    			"sorcery_point_cost": 2
    		  },
    		  {
    			"spell_slot_level": 2,
    			"sorcery_point_cost": 3
    		  },
    		  {
    			"spell_slot_level": 3,
    			"sorcery_point_cost": 5
    		  },
    		  {
    			"spell_slot_level": 4,
    			"sorcery_point_cost": 6
    		  },
    		  {
    			"spell_slot_level": 5,
    			"sorcery_point_cost": 7
    		  }
    		]
    	},
    	"subclass": {},
      },
      15: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 6,
    		"spells_known": 14,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 1,
    		"spell_slots_level_8": 1,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"sorcery_points": 15,
    		"metamagic_known": 3,
    		"creating_spell_slots": [
    		  {
    			"spell_slot_level": 1,
    			"sorcery_point_cost": 2
    		  },
    		  {
    			"spell_slot_level": 2,
    			"sorcery_point_cost": 3
    		  },
    		  {
    			"spell_slot_level": 3,
    			"sorcery_point_cost": 5
    		  },
    		  {
    			"spell_slot_level": 4,
    			"sorcery_point_cost": 6
    		  },
    		  {
    			"spell_slot_level": 5,
    			"sorcery_point_cost": 7
    		  }
    		]
    	},
    	"subclass": {},
      },
      16: {
    	"ability_score_bonuses": 4,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [ Features["335"] ],
    	"spellcasting": {
    		"cantrips_known": 6,
    		"spells_known": 14,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 1,
    		"spell_slots_level_8": 1,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"sorcery_points": 16,
    		"metamagic_known": 4,
    		"creating_spell_slots": [
    		  {
    			"spell_slot_level": 1,
    			"sorcery_point_cost": 2
    		  },
    		  {
    			"spell_slot_level": 2,
    			"sorcery_point_cost": 3
    		  },
    		  {
    			"spell_slot_level": 3,
    			"sorcery_point_cost": 5
    		  },
    		  {
    			"spell_slot_level": 4,
    			"sorcery_point_cost": 6
    		  },
    		  {
    			"spell_slot_level": 5,
    			"sorcery_point_cost": 7
    		  }
    		]
    	},
    	"subclass": {},
      },
      17: {
    	"ability_score_bonuses": 4,
    	"prof_bonus": 6,
    	"feature_choices": [ Features["336"] ],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 6,
    		"spells_known": 15,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 1,
    		"spell_slots_level_8": 1,
    		"spell_slots_level_9": 1
    	},
    	"class_specific": {
    		"sorcery_points": 17,
    		"metamagic_known": 4,
    		"creating_spell_slots": [
    		  {
    			"spell_slot_level": 1,
    			"sorcery_point_cost": 2
    		  },
    		  {
    			"spell_slot_level": 2,
    			"sorcery_point_cost": 3
    		  },
    		  {
    			"spell_slot_level": 3,
    			"sorcery_point_cost": 5
    		  },
    		  {
    			"spell_slot_level": 4,
    			"sorcery_point_cost": 6
    		  },
    		  {
    			"spell_slot_level": 5,
    			"sorcery_point_cost": 7
    		  }
    		]
    	},
    	"subclass": {},
      },
      18: {
    	"ability_score_bonuses": 4,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 6,
    		"spells_known": 15,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 3,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 1,
    		"spell_slots_level_8": 1,
    		"spell_slots_level_9": 1
    	},
    	"class_specific": {
    		"sorcery_points": 18,
    		"metamagic_known": 4,
    		"creating_spell_slots": [
    		  {
    			"spell_slot_level": 1,
    			"sorcery_point_cost": 2
    		  },
    		  {
    			"spell_slot_level": 2,
    			"sorcery_point_cost": 3
    		  },
    		  {
    			"spell_slot_level": 3,
    			"sorcery_point_cost": 5
    		  },
    		  {
    			"spell_slot_level": 4,
    			"sorcery_point_cost": 6
    		  },
    		  {
    			"spell_slot_level": 5,
    			"sorcery_point_cost": 7
    		  }
    		]
    	},
    	"subclass": {},
      },
      19: {
    	"ability_score_bonuses": 5,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [ Features["338"] ],
    	"spellcasting": {
    		"cantrips_known": 6,
    		"spells_known": 15,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 3,
    		"spell_slots_level_6": 2,
    		"spell_slots_level_7": 1,
    		"spell_slots_level_8": 1,
    		"spell_slots_level_9": 1
    	},
    	"class_specific": {
    		"sorcery_points": 19,
    		"metamagic_known": 4,
    		"creating_spell_slots": [
    		  {
    			"spell_slot_level": 1,
    			"sorcery_point_cost": 2
    		  },
    		  {
    			"spell_slot_level": 2,
    			"sorcery_point_cost": 3
    		  },
    		  {
    			"spell_slot_level": 3,
    			"sorcery_point_cost": 5
    		  },
    		  {
    			"spell_slot_level": 4,
    			"sorcery_point_cost": 6
    		  },
    		  {
    			"spell_slot_level": 5,
    			"sorcery_point_cost": 7
    		  }
    		]
    	},
    	"subclass": {},
      },
      20: {
    	"ability_score_bonuses": 5,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [ Features["339"] ],
    	"spellcasting": {
    		"cantrips_known": 6,
    		"spells_known": 15,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 3,
    		"spell_slots_level_6": 2,
    		"spell_slots_level_7": 2,
    		"spell_slots_level_8": 1,
    		"spell_slots_level_9": 1
    	},
    	"class_specific": {
    		"sorcery_points": 20,
    		"metamagic_known": 4,
    		"creating_spell_slots": [
    		  {
    			"spell_slot_level": 1,
    			"sorcery_point_cost": 2
    		  },
    		  {
    			"spell_slot_level": 2,
    			"sorcery_point_cost": 3
    		  },
    		  {
    			"spell_slot_level": 3,
    			"sorcery_point_cost": 5
    		  },
    		  {
    			"spell_slot_level": 4,
    			"sorcery_point_cost": 6
    		  },
    		  {
    			"spell_slot_level": 5,
    			"sorcery_point_cost": 7
    		  }
    		]
    	},
    	"subclass": {},
      }
    },
    "Warlock": {
      1: {
    	"ability_score_bonuses": 0,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [ Features["340"], Features["342"] ],
    	"spellcasting": {
    		"cantrips_known": 2,
    		"spells_known": 2,
    		"spell_slots_level_1": 1,
    		"spell_slots_level_2": 0,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"invocations_known": 0,
    		"mystic_arcanum_level_6": 0,
    		"mystic_arcanum_level_7": 0,
    		"mystic_arcanum_level_8": 0,
    		"mystic_arcanum_level_9": 0
    	},
    	"subclass": {},
      },
      2: {
    	"ability_score_bonuses": 0,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [ Features["343"] ],
    	"spellcasting": {
    		"cantrips_known": 2,
    		"spells_known": 3,
    		"spell_slots_level_1": 2,
    		"spell_slots_level_2": 0,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"invocations_known": 2,
    		"mystic_arcanum_level_6": 0,
    		"mystic_arcanum_level_7": 0,
    		"mystic_arcanum_level_8": 0,
    		"mystic_arcanum_level_9": 0
    	},
    	"subclass": {},
      },
      3: {
    	"ability_score_bonuses": 0,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [ Features["376"] ],
    	"spellcasting": {
    		"cantrips_known": 2,
    		"spells_known": 4,
    		"spell_slots_level_1": 0,
    		"spell_slots_level_2": 2,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"invocations_known": 2,
    		"mystic_arcanum_level_6": 0,
    		"mystic_arcanum_level_7": 0,
    		"mystic_arcanum_level_8": 0,
    		"mystic_arcanum_level_9": 0
    	},
    	"subclass": {},
      },
      4: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [ Features["380"] ],
    	"spellcasting": {
    		"cantrips_known": 3,
    		"spells_known": 5,
    		"spell_slots_level_1": 0,
    		"spell_slots_level_2": 2,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"invocations_known": 3,
    		"mystic_arcanum_level_6": 0,
    		"mystic_arcanum_level_7": 0,
    		"mystic_arcanum_level_8": 0,
    		"mystic_arcanum_level_9": 0
    	},
    	"subclass": {},
      },
      5: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [ Features["381"] ],
    	"spellcasting": {
    		"cantrips_known": 3,
    		"spells_known": 6,
    		"spell_slots_level_1": 0,
    		"spell_slots_level_2": 0,
    		"spell_slots_level_3": 2,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"invocations_known": 3,
    		"mystic_arcanum_level_6": 0,
    		"mystic_arcanum_level_7": 0,
    		"mystic_arcanum_level_8": 0,
    		"mystic_arcanum_level_9": 0
    	},
    	"subclass": {},
      },
      6: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 3,
    		"spells_known": 7,
    		"spell_slots_level_1": 0,
    		"spell_slots_level_2": 0,
    		"spell_slots_level_3": 2,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"invocations_known": 4,
    		"mystic_arcanum_level_6": 0,
    		"mystic_arcanum_level_7": 0,
    		"mystic_arcanum_level_8": 0,
    		"mystic_arcanum_level_9": 0
    	},
    	"subclass": {},
      },
      7: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [ Features["383"] ],
    	"spellcasting": {
    		"cantrips_known": 3,
    		"spells_known": 8,
    		"spell_slots_level_1": 0,
    		"spell_slots_level_2": 0,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 2,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"invocations_known": 4,
    		"mystic_arcanum_level_6": 0,
    		"mystic_arcanum_level_7": 0,
    		"mystic_arcanum_level_8": 0,
    		"mystic_arcanum_level_9": 0
    	},
    	"subclass": {},
      },
      8: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [ Features["384"] ],
    	"spellcasting": {
    		"cantrips_known": 3,
    		"spells_known": 9,
    		"spell_slots_level_1": 0,
    		"spell_slots_level_2": 0,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 2,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"invocations_known": 4,
    		"mystic_arcanum_level_6": 0,
    		"mystic_arcanum_level_7": 0,
    		"mystic_arcanum_level_8": 0,
    		"mystic_arcanum_level_9": 0
    	},
    	"subclass": {},
      },
      9: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [ Features["385"] ],
    	"spellcasting": {
    		"cantrips_known": 3,
    		"spells_known": 10,
    		"spell_slots_level_1": 0,
    		"spell_slots_level_2": 0,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"invocations_known": 5,
    		"mystic_arcanum_level_6": 0,
    		"mystic_arcanum_level_7": 0,
    		"mystic_arcanum_level_8": 0,
    		"mystic_arcanum_level_9": 0
    	},
    	"subclass": {},
      },
      10: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spells_known": 10,
    		"spell_slots_level_1": 0,
    		"spell_slots_level_2": 0,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"invocations_known": 5,
    		"mystic_arcanum_level_6": 0,
    		"mystic_arcanum_level_7": 0,
    		"mystic_arcanum_level_8": 0,
    		"mystic_arcanum_level_9": 0
    	},
    	"subclass": {},
      },
      11: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [ Features["387"] ],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spells_known": 11,
    		"spell_slots_level_1": 0,
    		"spell_slots_level_2": 0,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 3,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"invocations_known": 5,
    		"mystic_arcanum_level_6": 1,
    		"mystic_arcanum_level_7": 0,
    		"mystic_arcanum_level_8": 0,
    		"mystic_arcanum_level_9": 0
    	},
    	"subclass": {},
      },
      12: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [ Features["388"], Features["389"] ],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spells_known": 11,
    		"spell_slots_level_1": 0,
    		"spell_slots_level_2": 0,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 3,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"invocations_known": 6,
    		"mystic_arcanum_level_6": 1,
    		"mystic_arcanum_level_7": 0,
    		"mystic_arcanum_level_8": 0,
    		"mystic_arcanum_level_9": 0
    	},
    	"subclass": {},
      },
      13: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [ Features["390"] ],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spells_known": 12,
    		"spell_slots_level_1": 0,
    		"spell_slots_level_2": 0,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 3,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"invocations_known": 6,
    		"mystic_arcanum_level_6": 1,
    		"mystic_arcanum_level_7": 1,
    		"mystic_arcanum_level_8": 0,
    		"mystic_arcanum_level_9": 0
    	},
    	"subclass": {},
      },
      14: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spells_known": 12,
    		"spell_slots_level_1": 0,
    		"spell_slots_level_2": 0,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 3,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"invocations_known": 6,
    		"mystic_arcanum_level_6": 1,
    		"mystic_arcanum_level_7": 1,
    		"mystic_arcanum_level_8": 0,
    		"mystic_arcanum_level_9": 0
    	},
    	"subclass": {},
      },
      15: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [ Features["392"], Features["393"] ],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spells_known": 13,
    		"spell_slots_level_1": 0,
    		"spell_slots_level_2": 0,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 3,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"invocations_known": 7,
    		"mystic_arcanum_level_6": 1,
    		"mystic_arcanum_level_7": 1,
    		"mystic_arcanum_level_8": 1,
    		"mystic_arcanum_level_9": 0
    	},
    	"subclass": {},
      },
      16: {
    	"ability_score_bonuses": 4,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [ Features["394"] ],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spells_known": 13,
    		"spell_slots_level_1": 0,
    		"spell_slots_level_2": 0,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 3,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"invocations_known": 7,
    		"mystic_arcanum_level_6": 1,
    		"mystic_arcanum_level_7": 1,
    		"mystic_arcanum_level_8": 1,
    		"mystic_arcanum_level_9": 0
    	},
    	"subclass": {},
      },
      17: {
    	"ability_score_bonuses": 4,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [ Features["395"] ],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spells_known": 14,
    		"spell_slots_level_1": 0,
    		"spell_slots_level_2": 0,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 4,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"invocations_known": 7,
    		"mystic_arcanum_level_6": 1,
    		"mystic_arcanum_level_7": 1,
    		"mystic_arcanum_level_8": 1,
    		"mystic_arcanum_level_9": 1
    	},
    	"subclass": {},
      },
      18: {
    	"ability_score_bonuses": 4,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [ Features["396"] ],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spells_known": 14,
    		"spell_slots_level_1": 0,
    		"spell_slots_level_2": 0,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 4,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"invocations_known": 8,
    		"mystic_arcanum_level_6": 1,
    		"mystic_arcanum_level_7": 1,
    		"mystic_arcanum_level_8": 1,
    		"mystic_arcanum_level_9": 1
    	},
    	"subclass": {},
      },
      19: {
    	"ability_score_bonuses": 5,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [ Features["397"] ],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spells_known": 15,
    		"spell_slots_level_1": 0,
    		"spell_slots_level_2": 0,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 4,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"invocations_known": 8,
    		"mystic_arcanum_level_6": 1,
    		"mystic_arcanum_level_7": 1,
    		"mystic_arcanum_level_8": 1,
    		"mystic_arcanum_level_9": 1
    	},
    	"subclass": {},
      },
      20: {
    	"ability_score_bonuses": 5,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [ Features["398"], Features["399"] ],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spells_known": 15,
    		"spell_slots_level_1": 0,
    		"spell_slots_level_2": 0,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 4,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"invocations_known": 8,
    		"mystic_arcanum_level_6": 1,
    		"mystic_arcanum_level_7": 1,
    		"mystic_arcanum_level_8": 1,
    		"mystic_arcanum_level_9": 1
    	},
    	"subclass": {},
      }
    },
    "Wizard": {
      1: {
    	"ability_score_bonuses": 0,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [ Features["400"], Features["401"] ],
    	"spellcasting": {
    		"cantrips_known": 3,
    		"spell_slots_level_1": 2,
    		"spell_slots_level_2": 0,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"arcane_recovery_levels": 1
    	},
    	"subclass": {},
      },
      2: {
    	"ability_score_bonuses": 0,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [ Features["402"] ],
    	"spellcasting": {
    		"cantrips_known": 3,
    		"spell_slots_level_1": 3,
    		"spell_slots_level_2": 0,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"arcane_recovery_levels": 1
    	},
    	"subclass": {},
      },
      3: {
    	"ability_score_bonuses": 0,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 3,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 2,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"arcane_recovery_levels": 2
    	},
    	"subclass": {},
      },
      4: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 2,
    	"feature_choices": [],
    	"features": [ Features["405"] ],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 0,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"arcane_recovery_levels": 2
    	},
    	"subclass": {},
      },
      5: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 2,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"arcane_recovery_levels": 3
    	},
    	"subclass": {},
      },
      6: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 0,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"arcane_recovery_levels": 3
    	},
    	"subclass": {},
      },
      7: {
    	"ability_score_bonuses": 1,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 1,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"arcane_recovery_levels": 4
    	},
    	"subclass": {},
      },
      8: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 3,
    	"feature_choices": [],
    	"features": [ Features["407"] ],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 2,
    		"spell_slots_level_5": 0,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"arcane_recovery_levels": 4
    	},
    	"subclass": {},
      },
      9: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 4,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 1,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"arcane_recovery_levels": 5
    	},
    	"subclass": {},
      },
      10: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 5,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 0,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"arcane_recovery_levels": 5
    	},
    	"subclass": {},
      },
      11: {
    	"ability_score_bonuses": 2,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 5,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"arcane_recovery_levels": 6
    	},
    	"subclass": {},
      },
      12: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 4,
    	"feature_choices": [],
    	"features": [ Features["410"] ],
    	"spellcasting": {
    		"cantrips_known": 5,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 0,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"arcane_recovery_levels": 6
    	},
    	"subclass": {},
      },
      13: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 5,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 1,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"arcane_recovery_levels": 7
    	},
    	"subclass": {},
      },
      14: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 5,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 1,
    		"spell_slots_level_8": 0,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"arcane_recovery_levels": 7
    	},
    	"subclass": {},
      },
      15: {
    	"ability_score_bonuses": 3,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 5,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 1,
    		"spell_slots_level_8": 1,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"arcane_recovery_levels": 8
    	},
    	"subclass": {},
      },
      16: {
    	"ability_score_bonuses": 4,
    	"prof_bonus": 5,
    	"feature_choices": [],
    	"features": [ Features["413"] ],
    	"spellcasting": {
    		"cantrips_known": 5,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 1,
    		"spell_slots_level_8": 1,
    		"spell_slots_level_9": 0
    	},
    	"class_specific": {
    		"arcane_recovery_levels": 8
    	},
    	"subclass": {},
      },
      17: {
    	"ability_score_bonuses": 4,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [],
    	"spellcasting": {
    		"cantrips_known": 5,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 2,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 1,
    		"spell_slots_level_8": 1,
    		"spell_slots_level_9": 1
    	},
    	"class_specific": {
    		"arcane_recovery_levels": 9
    	},
    	"subclass": {},
      },
      18: {
    	"ability_score_bonuses": 4,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [ Features["414"] ],
    	"spellcasting": {
    		"cantrips_known": 5,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 3,
    		"spell_slots_level_6": 1,
    		"spell_slots_level_7": 1,
    		"spell_slots_level_8": 1,
    		"spell_slots_level_9": 1
    	},
    	"class_specific": {
    		"arcane_recovery_levels": 9
    	},
    	"subclass": {},
      },
      19: {
    	"ability_score_bonuses": 5,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [ Features["415"] ],
    	"spellcasting": {
    		"cantrips_known": 5,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 3,
    		"spell_slots_level_6": 2,
    		"spell_slots_level_7": 1,
    		"spell_slots_level_8": 1,
    		"spell_slots_level_9": 1
    	},
    	"class_specific": {
    		"arcane_recovery_levels": 10
    	},
    	"subclass": {},
      },
      20: {
    	"ability_score_bonuses": 5,
    	"prof_bonus": 6,
    	"feature_choices": [],
    	"features": [ Features["416"] ],
    	"spellcasting": {
    		"cantrips_known": 5,
    		"spell_slots_level_1": 4,
    		"spell_slots_level_2": 3,
    		"spell_slots_level_3": 3,
    		"spell_slots_level_4": 3,
    		"spell_slots_level_5": 3,
    		"spell_slots_level_6": 2,
    		"spell_slots_level_7": 2,
    		"spell_slots_level_8": 1,
    		"spell_slots_level_9": 1
    	},
    	"class_specific": {
    		"arcane_recovery_levels": 10
    	},
    	"subclass": {},
      }
    },
    "Berserker": {
      3: {
    	"feature_choices": [],
    	"features": [ Features["5"], Features["6"] ],
    	"spellcasting": {}
      },
      6: {
    	"feature_choices": [],
    	"features": [ Features["10"] ],
    	"spellcasting": {}
      },
      10: {
    	"feature_choices": [],
    	"features": [ Features["14"] ],
    	"spellcasting": {}
      },
      14: {
    	"feature_choices": [],
    	"features": [ Features["18"] ],
    	"spellcasting": {}
      }
    },
    "College of Lore": {
      3: {
    	"feature_choices": [],
    	"features": [ Features["30"], Features["31"] ],
    	"spellcasting": {},
    	"subclass_specific": {
    		"additional_magical_secrets_max_lvl": 0
    	}
      },
      6: {
    	"feature_choices": [],
    	"features": [ Features["55"] ],
    	"spellcasting": {},
    	"subclass_specific": {
    		"additional_magical_secrets_max_lvl": 3
    	}
      },
      14: {
    	"feature_choices": [],
    	"features": [ Features["64"] ],
    	"spellcasting": {},
    	"subclass_specific": {
    		"additional_magical_secrets_max_lvl": 3
    	}
      }
  },
  "Life Domain": {
      1: {
          "feature_choices": [],
          "features": [ Features["74"], Features["75"] ],
          "spellcasting": {}
      },
      2: {
          "feature_choices": [],
          "features": [ Features["78"] ],
          "spellcasting": {}
      },
      6: {
          "feature_choices": [],
          "features": [ Features["84"] ],
          "spellcasting": {}
      },
      8: {
          "feature_choices": [],
          "features": [ Features["88"] ],
          "spellcasting": {}
      }
  },
  "Circle of the Land": {
      2: {
          "feature_choices": [ Features["104"] ],
          "features": [ Features["112"], Features["113"], Features["114"] ],
          "spellcasting": {}
      },
      5: {
          "feature_choices": [],
          "features": [ Features["117"] ],
          "spellcasting": {}
      },
      6: {
          "feature_choices": [],
          "features": [ Features["118"] ],
          "spellcasting": {}
      },
      7: {
          "feature_choices": [],
          "features": [ Features["119"] ],
          "spellcasting": {}
      },
      9: {
          "feature_choices": [],
          "features": [ Features["122"] ],
          "spellcasting": {}
      },
      10: {
          "feature_choices": [],
          "features": [ Features["123"] ],
          "spellcasting": {}
      },
      14: {
          "feature_choices": [],
          "features": [ Features["125"] ],
          "spellcasting": {}
      }
  },
  "Champion": {
      3: {
          "feature_choices": [],
          "features": [ Features["141"] ],
          "spellcasting": {}
      },
      7: {
          "feature_choices": [],
          "features": [ Features["145"] ],
          "spellcasting": {}
      },
      10: {
          "feature_choices": [ Features["148"] ],
          "features": [],
          "spellcasting": {}
      },
      15: {
          "feature_choices": [],
          "features": [ Features["153"] ],
          "spellcasting": {}
      },
      18: {
          "feature_choices": [],
          "features": [ Features["157"] ],
          "spellcasting": {}
      }
  },
  "Way of the Open Hand": {
      3: {
          "feature_choices": [],
          "features": [ Features["169"] ],
          "spellcasting": {}
      },
      6: {
          "feature_choices": [],
          "features": [ Features["175"] ],
          "spellcasting": {}
      },
      11: {
          "feature_choices": [],
          "features": [ Features["181"] ],
          "spellcasting": {}
      },
      17: {
          "feature_choices": [],
          "features": [ Features["187"] ],
          "spellcasting": {}
      }
  },
  "Oath of Devotion": {
      3: {
          "feature_choices": [],
          "features": [ Features["204"], Features["205"] ],
          "spellcasting": {}
      },
      7: {
          "feature_choices": [],
          "features": [ Features["209"] ],
          "spellcasting": {}
      },
      15: {
          "feature_choices": [],
          "features": [ Features["215"] ],
          "spellcasting": {}
      },
      20: {
          "feature_choices": [],
          "features": [ Features["219"] ],
          "spellcasting": {}
      }
  },
  "Hunter": {
      3: {
          "feature_choices": [ Features["229"] ],
          "features": [],
          "spellcasting": {}
      },
      7: {
          "feature_choices": [ Features["238"] ],
          "features": [],
          "spellcasting": {}
      },
      11: {
          "feature_choices": [ Features["246"] ],
          "features": [],
          "spellcasting": {}
      },
      15: {
          "feature_choices": [ Features["252"] ],
          "features": [],
          "spellcasting": {}
      }
  },
  "Thief": {
      3: {
          "feature_choices": [],
          "features": [ Features["284"], Features["285"] ],
          "spellcasting": {}
      },
      9: {
          "feature_choices": [],
          "features": [ Features["291"] ],
          "spellcasting": {}
      },
      13: {
          "feature_choices": [],
          "features": [ Features["295"] ],
          "spellcasting": {}
      },
      17: {
          "feature_choices": [],
          "features": [ Features["299"] ],
          "spellcasting": {}
      }
  },
  "Draconic Bloodline": {
      1: {
          "feature_choices": [ Features["305"] ],
          "features": [ Features["316"] ],
          "spellcasting": {}
      },
      6: {
          "feature_choices": [],
          "features": [ Features["330"] ],
          "spellcasting": {}
      },
      14: {
          "feature_choices": [],
          "features": [ Features["334"] ],
          "spellcasting": {}
      },
      18: {
          "feature_choices": [],
          "features": [ Features["337"] ],
          "spellcasting": {}
      }
  },
  "Fiendish Patron": {
      1: {
          "feature_choices": [],
          "features": [ Features["341"] ],
          "spellcasting": {}
      },
      6: {
          "feature_choices": [],
          "features": [ Features["382"] ],
          "spellcasting": {}
      },
      10: {
          "feature_choices": [],
          "features": [ Features["386"] ],
          "spellcasting": {}
      },
      14: {
          "feature_choices": [],
          "features": [ Features["391"] ],
          "spellcasting": {}
      }
  },
  "School of Evocation": {
      2: {
          "feature_choices": [],
          "features": [ Features["403"], Features["404"] ],
          "spellcasting": {}
      },
      6: {
          "feature_choices": [],
          "features": [ Features["406"] ],
          "spellcasting": {}
      },
      10: {
          "feature_choices": [],
          "features": [ Features["409"] ],
          "spellcasting": {}
      },
      14: {
          "feature_choices": [],
          "features": [ Features["412"] ],
          "spellcasting": {}
      }
  }
}

export default Levels;
