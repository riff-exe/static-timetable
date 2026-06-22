# Static Timetable
This is a simple hobby project I made to quickly create and style my class timetables. This is simple enough for anyone with basic knowledge in web-dev to configure, but powerful and flexible enough to adapt to anyone's needs. This is because your schedule data, page layout (HTML), style (CSS) and additional scripts (JS) all live in different files. We project avoids using any backend for simplicity, availability and to guarantee a low barrier for entry.



## Features
- No backend. Literally zero setup needed, let it be building, compilation, or package installation.
- Infinitely many styling options with CSS and scripting options with JS.
- Very fast and lightweight.
- You can treat this project as the starting point for your very own personalized scheduling system. Fork it and start adding more features.



## Usage
Download all source files or clone the repository. After downloading, simply open `index.html` with your browser and you should see the template timetable. That's it! No setup needed :)
```bash
git clone https://github.com/riff-exe/static-timetable.git
```

Now what you can do is:
1. Change the contents of `schedule.json.js`.
2. Choose CSS themes from the `styles/` folder, or create your own.
3. Choose JS scripts from the `scripts/` folder , or create your own.
4. Star ⭐ this repository if you like it.


```
Project File Structure:
├─  scripts/             // Premade JS scripts
├─  styles/              // Premade CSS styles
├─  index.html           // Main HTML static page
├─  schedule.json.js     // Schedule data stored as JSON (in a JS file)
└─  tabler.js            // Reads schedule.json.js to generate the HTML table
```

### Creating your timetable
Your schedule data (time, day & content) is written and saved in `schedule.json.js`. This data is then used to create an HTML table in `index.html` with `tabler.js`. `schedule.json.js` is made as simple and readable as possible. Here are all the elements of `schedule.json.js`:

**1. `periods`:** Defines all the columns in the timetable and the key and label of each period. Breaks are defined and labeled by "spanAll".
**2. `days`:** Defines all the rows in the timetable and the key and label of each day.
**3. `entries`:** List of schedule entries.


#### Example of `schedule.json.js`:

```js
const config_json = {
	"periodArray": [
		{ "key": 1    ,   "label":  "9:00" },
		{ "key": 2    ,   "label": "10:05" },
		{ "key": 3    ,   "label": "11:10" },
		{ "key": 4    ,   "label": "12:15" },
		{ "key": "B"  ,   "label":  "1:20",   "spanAll": "Break" },
		{ "key": 5    ,   "label":  "1:50" },
		{ "key": 6    ,   "label":  "2:55" },
		{ "key": "END",   "label":  "4:00",   "spanAll": "End" }
	],
	"dayArray": [
		{"key": "sun", "label": "Sunday"},
		{"key": "mon", "label": "Monday"},
		{"key": "tue", "label": "Tuesday"},
		{"key": "wed", "label": "Wednesday"},
		{"key": "thu", "label": "Saturday"}
	],
	"entries": [
		// ----------- SUN ----------- //
		{ "day": "SUN", "period": 3, "content": ["NILOY", "0521-3106", "306"]},
		{ "day": "SUN", "period": 5, "content": ["Dr. K.H.A", "0031-3105", "405"]},
		{ "day": "SUN", "period": 6, "content": ["Marzia", "0311-3102", "405"]},

		// ----------- MON ----------- //
		{ "day": "MON", "period": 1, "content": ["Dr. K.H.A", "0031-3105", "306"]},
		{ "day": "MON", "period": 2, "content": ["Tamal", "0412-3103", "405"]},
		{ "day": "MON", "period": 4, "content": ["Sohel", "0222-1001", "106"]},
		......
	]
}
```


#### All properties from `entries`:

| **Required Properties** | <u>**Description**</u>                                                                       |
| ----------------------- | :------------------------------------------------------------------------------------------- |
| 1. `day`                | Must be a key from "days" (_case insensitive_)                                               |
| 2. `period`             | Must be a key from "periods" (_case insensitive_)                                            |
| **Optional Properties** | <u>**Description**</u>                                                                       |
| 3. `content`            | A list of strings or a string with newlines. Auto-creates classes like `card-label-<string>` |
| 4. `desc`               | A list of strings or a string with newlines. Doesn't auto-create any classes                 |
| 5. `length`             | Number of periods the entry/event occupies (default is 1)                                    |
| 6. `type`               | Specify the type of event. Mostly useful for styling (default is "class")                    |
| 7. `classes`            | List of custom CSS classes for better customization                                          |
| 8. `id`                 | CSS ID for customization                                                                     |


### Creating your CSS themes
- that parses subject data, generates clean CSS selector hierarchies
- Classes of the same subject/course are automatically sorted by autogenerated CSS classes ('Math 2113' becomes `card-label-math-2113`)
