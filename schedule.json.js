const config_json = {
	// ====== Defining the overall layout of the timetable ====== //
	/*
	 * "periods" defines all the columns in the timetable
	 * Breaks are defined and labeled by "spanAll"
	 */
	"periods": [
		{ "key": 1    ,   "label":  "8:00" },
		{ "key": 2    ,   "label":  "8:50" },
		{ "key": 3    ,   "label":  "9:40" },
		{ "key": "TB" ,   "label": "10:30",   "spanAll": "Tiffin<br>Break" },
		{ "key": 4    ,   "label": "10:50" },
		{ "key": 5    ,   "label": "11:40" },
		{ "key": 6    ,   "label": "12:30" },
		{ "key": "LB" ,   "label":  "1:20",   "spanAll": "Lunch<br>Break" },
		{ "key": 7    ,   "label":  "2:30" },
		{ "key": 8    ,   "label":  "3:20" },
		{ "key": 9    ,   "label":  "4:10" },
		{ "key": "END",   "label":  "5:00",   "spanAll": "End" }
	],

	/*
	 * "days" defines all the rows in the timetable
	 */
	"days": [
		{"key": "sat", "label": "SAT"},
		{"key": "sun", "label": "SUN"},
		{"key": "mon", "label": "MON"},
		{"key": "tue", "label": "TUE"},
		{"key": "wed", "label": "WED"}
	],
	"entries": [
		// ====== How to write your own schedule entries ====== //
		/* [REQUIRED PROPERTIES]
		 * "day"     : Must be a key from "days" (case insensitive)
		 * "period"  : Must be a key from "periods" (case insensitive)
		 *
		 * [OPTIONAL PROPERTIES]
		 * "content" : A list of strings or a string with newlines. Auto-creates classes 'card-label-<string>'
		 * "desc"    : A list of strings or a string with newlines. Doesn't auto-create any classes
		 * "length"  : Number of periods the entry/event occupies (default is 1)
		 * "type"    : Specify the type of event. Mostly useful for styling (default is "class")
		 * "classes" : List of custom CSS classes for better customization
		 * "id"      : CSS ID for customization
		 */


		// ------- Class Tests ------- //
		/*
		{
			"day"    : "SAT",
			"period" : 6,
			"content": ["CSE 3101", "Even Week", "CT"],
			"type"   : "CT",
		},
		{
			"day"    : "SUN",
			"period" : 6,
			"content": ["CSE 3103", "Odd Week", "CT"],
			"type"   : "CT",
		},
		{
			"day"    : "MON",
			"period" : 6,
			"content": ["CSE 3105", "Even Week", "CT"],
			"type"   : "CT",
		},
		{
			"day"    : "TUE",
			"period" : 6,
			"content": ["CSE 3107", "Odd Week", "CT"],
			"type"   : "CT",
		},
		{
			"day"    : "WED",
			"period" : 6,
			"content": ["CSE 3109", "Even Week", "CT"],
			"type"   : "CT",
		},
		*/


		// ----------- SAT ----------- //
		{
			"day"    : "SAT",
			"period" : 2,
			"content": ["CSE 3109", "NOS", "102"],
			"length" : 2,
		},
		{
			"day"    : "SAT",
			"period" : 4,
			"content": ["CSE 3105", "FAR/SIA", "202"],
		},
		{
			"day"    : "SAT",
			"period" : 5,
			"content": ["CSE 3107", "UD", "202"],
		},
		{
			"day"    : "SAT",
			"period" : 7,
			"content": ["CSE 3108", "UD", "HPCL Lab"],
			"desc"   : ["Odd week - ⬤", "Even week - ⬤ ⬤"],
			"classes": ["group-1st-30", "group-2nd-30"],
			"type"   : "lab",
			"length" : 3,
		},


		// ----------- SUN ----------- //
		{
			"day"    : "SUN",
			"period" : 2,
			"content": ["CSE 3103", "KZN/SAM", "101"],
		},
		{
			"day"    : "SUN",
			"period" : 3,
			"content": ["CSE 3105", "FAR/SIA", "101"],
		},
		{
			"day"    : "SUN",
			"period" : 7,
			"content": ["CSE 3100"],
			"type"   : "lab",
			"length" : 3,
		},


		// ----------- MON ----------- //
		{
			"day"    : "MON",
			"period" : 2,
			"content": ["CSE 3105", "FAR/SIA", "Seminar"],
		},
		{
			"day"    : "MON",
			"period" : 3,
			"content": ["CSE 3109", "NOS", "Seminar"],
		},
		{
			"day"    : "MON",
			"period" : 4,
			"content": ["CSE 3101", "SeN/SZM", "102"],
			"length" : 2,
		},
		{
			"day"    : "MON",
			"period" : 7,
			"content": ["CSE 3107", "UD", "201"],
			"length" : 2,
		},


		// ----------- TUE ----------- //
		{
			"day"    : "TUE",
			"period" : 1,
			"content": ["CSE 3102", "SeN/SZM", "PG Lab", "⬤"],
			"classes": ["group-1st-30"],
			"type"   : "lab",
			"length" : 3,
		},
		{
			"day"    : "TUE",
			"period" : 7,
			"content": ["CSE 3106", "FAR/SIA", "HW Lab"],
			"desc"   : ["Odd week - ⬤ ⬤", "Even week - ⬤"],
			"classes": ["group-1st-30", "group-2nd-30"],
			"type"   : "lab",
			"length" : 3,
		},


		// ----------- WED ----------- //
		{
			"day"    : "WED",
			"period" : 1,
			"content": ["CSE 3103", "KZN/SAM", "202"],
			"length" : 2,
		},
		{
			"day"    : "WED",
			"period" : 3,
			"content": ["CSE 3101", "SeN/SZM", "202"]
		},
		{
			"day"    : "WED",
			"period" : 7,
			"content": ["CSE 3102", "SeN/SZM", "OS Lab", "⬤ ⬤"],
			"classes": ["group-2nd-30"],
			"type"   : "lab",
			"length" : 3,
		},
	]
}

