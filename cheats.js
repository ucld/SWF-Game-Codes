//=========================CODE-GENERATORS=========================\\

var generators = {
	'_query': '#generators',

	'B-Cubed': {
			levels: 29,
			url: 'http://www.coolmath-games.com/0-b-cubed',
			fn: bCubed
	},
	'Bloxorz': {
			levels: 32,
			url: 'https://www.albinoblacksheep.com/games/bloxorz',
			fn: bloxorz
	},
	'Fun Brain Arcade': {
			levels: 13,
			url: 'http://www.funbrain.com/brain/JustForFunBrain/JustForFunBrain.html',
			fn: funBrain
	},
	'Silversphere': {
			levels: 24,
			url: 'https://www.miniclip.com/games/silversphere/en/',
			fn: silversphere
	},
	'More Mindless Violence': {
			levels: 16,
			url: 'https://www.albinoblacksheep.com/games/mindlessviolence',
			fn: moreMindless
	},
	'ElectricMan 2': {
			levels: 0,
			url: 'https://electricman2.org/',
			fn: electricMan2Form
	}
}

function
bCubed(level)
{
	return [
		770838, 968549, 865087, 508908, 255277, 331673,
		854115, 329394, 120091, 219077, 575900, 447660,
		644386, 440356, 729049, 443245, 541043, 800886,
		839654, 305883, 259205, 279516, 833955, 515118,
		182740, 752999, 773310, 859647, 135636, 676534
	][level - 1]
}

function
bloxorz(level)
{
	return [
		"780464", "290299", "918660", "520967", "028431",
		"524383", "189493", "499707", "074355", "300590",
		"291709", "958640", "448106", "210362", "098598",
		"000241", "683596", "284933", "119785", "543019",
		"728724", "987319", "293486", "088198", "250453",
		"426329", "660141", "769721", "691859", "280351",
		"138620", "879021", "614955"
	][level - 1]
}

function funBrain(level) {
	return [
		["BALL", "COW", "BABY", "CAKE", "DOLL", "BITE", 
		"HARD", "HELP", "HIDE", "HILL", "HORN", "BELT", "HIGH"],

		["BEAR", "BARN", "FIRST", "FRUIT", "BELL", "FRONT", 
		"HOOP", "BOOK", "HUGE", "HEART", "HONEY", "HAMMER", "HUNGRY"],

		["BEEF", "COAT", "DANCE", "BATH", "DOOR", "DRAW",
		"DAY", "FAST", "FEED", "FIGHT", "GREASE", "HARP", "FETCH"],

		["BACK", "CAMP", "HOWL", "GHOST", "CUTE", "HOBBY",
		"BANG", "GILL", "HIVE", "BEAN", "HELMET", "HANG", "HANDLE"],

		["CAMEL", "CURL", "DRINK", "CHIP", "DRIP", "GALLON",
		"GASP", "HOBO", "HOPE", "BEARD", "FANCY", "HOPS", "CHIN"],

		["CHESS", "HANDY", "FLOAT", "FUZZY", "BEAT", "DASH",
		"CHIRP", "FLAT", "GUARD", "FURRY", "HUNK", "GRAVY", "GULP"],

		["BALD", "FLAKE", "HULK", "HIDDEN", "HAIRY", "BLOB",
		"DECK", "DIVER", "BULL", "CANE", "CHAT", "DEAL", "DROOL"],

		["HUBCAP", "CALF", "BUSY", "DEEP", "DOME", "DISCO",
		"DWARF", "GOALIE", "HYENA", "IVORY", "ICING", "IRON", "JAB"],

		["LEAF", "LUNCH", "KEY", "KID", "KITE", "NAP", "NAIL",
		"NICE", "PLANT", "ROCK", "SMILE", "SMELL", "SPOON"],

		["KISS", "NEW", "PAINT", "LUCK", "PANDA", "PURPLE",
		"KING", "PUNCH", "ROOM", "ROLL", "ROBOT", "RABBIT", "SHORT"],

		["LEFT", "KICK", "LEAP", "PIZZA", "RANCH", "LEMON",
		"KIT", "KNOT", "PORCH", "REACH", "ROOKIE", "RIVER", "SPIKE"],

		["KNOB", "KIND", "MUMMY", "MONKEY", "NAG", "PEST", "PHOTO",
		"MOLDY", "POUCH", "LOOT", "PUDDLE", "PUPPET", "PIRATE"],

		["MOVIE", "MOUSE", "POUND", "LASSO", "PUPPY", "LUCKY",
		"MUNCH", "MUSH", "LASER", "PUZZLE", "MOUTH", "MONEY", "PIGPEN"],

		["MUSIC", "MOWER", "MAYOR", "NERVE", "NEON", "OVAL",
		"PENNY", "MUTT", "PILOT", "PIANO", "POTATO", "PLAYER", "QUEEN"],

		["MYTH", "NOBODY", "NURSE", "LOCKED", "NOOK", "NEEDLE",
		"NAPKIN", "NATURE", "OASIS", "PAIN", "PARTY", "PASTA", "PICKY"],

		["NOODLE","RUGBY","LEFTY","METER","NICKEL","PEACH",
		"PINCH", "ROACH","NICK","PEACE","RUSTY","RAPID","RUNWAY"]
	][Math.floor(Math.random()*15)][level - 1] + Math.floor(Math.random()*8+1)
}

function
silversphere(level)
{
	return [
		"origin", "metallic", "linear", "fortress",
		"active", "islander", "gauntlet", "lateral",
		"obstacle", "guidance", "pathway", "sandbar",
		"patrol", "capture", "confusion", "consequence",
		"parallel", "temple", "courtyard", "tunnel", "traverse",
		"stampede", "pressure", "accuracy", "labyrinth"
	][level - 1]
}

function
moreMindless(level)
{
	return [
		"23987", "56520", "29479", "10397", "12042", "88325",
		"39475", "25793", "12167", "02922", "96835", "88394",
		"76291", "90231", "96533", "80881", "95735"
	][level - 1]
}

function
electricMan2(user, matches, round, color, skill)
{
	var user = user.substr(0, 10)

	var match = matches[0] + matches[1] * 2 + matches[2] * 4 + matches[3] * 8
	
	round = round > 6 ? 6 : round

	levelNum = String.fromCharCode(match + round * 15 + 33)
	
	if(levelNum == "0")
		levelNum = "z"
	
	var mn = String.fromCharCode(match + 65)
	var rn = String.fromCharCode(round + 7 * Math.floor(Math.random()*3) + 65)
	var sn = String.fromCharCode(skill * 6 + color + 65)
	var nl = String.fromCharCode(user.length + 8 * Math.floor(Math.random()*3) + 65)

	return user+'.'+[levelNum, mn, rn, sn, nl].join('')
}


//=========================USER-INTERFACE=========================\\


function
appendChildren(div, els)
{
	for(var i in els) {
		if(els[i][0] == '#')
			els[i] = document.createElement(els[i].substr(1))
		else if(typeof els[i] == 'string')
			els[i] = new Text(els[i])
		div.appendChild(els[i])
	}
}

function
clearForm(div)
{
	while(div.childElementCount > 0)
		for(var c in div.childNodes)
			if(typeof div.childNodes[c] == 'object')
				div.removeChild(div.childNodes[c])
}

function
outputArea()
{
	var output = document.createElement('textarea')
	output.style['vertical-align'] = 'initial'
	output.setAttribute("readonly","")
	output.style.resize = 'none'
	output.style.border = 'none'
	output.style.height = 15
	return output
}

function
backLink()
{
	var back = document.createElement('A')
	back.onclick = showMenu
	back.innerText = 'Go back'
	back.href = '#'
	return back
}

function
generateButton(fn)
{
	var generate = document.createElement('input')
	generate.value = 'Generate'
	generate.type = 'submit'
	generate.onclick = fn
	return generate
}

function
showForm()
{
	var name = this.innerText
	var game = generators[name]
	var div = this.parentElement

	clearForm(div)

	//GENERATE TITLE
	var link = document.createElement('a')
	var title = document.createElement('h3')
	title.innerText = name
	link.href = game.url
	link.appendChild(title)
	div.appendChild(link)

	if(game.levels == 0)
		return game.fn(div)

	//LEVEL INPUT
	var level = document.createElement('input')
	level.style.width = 64
	level.max = game.levels
	level.min = 1
	level.value = 1
	level.type = 'number'

	//OUTPUT FORM
	var output = outputArea()
	var generate = generateButton(function(){
		if(level.value >= 1 && level.value <= game.levels)
			output.innerText = game.fn(level.value)
		else
			output.innerText = 'INVALID LEVEL!'
	})
	var back = backLink()
	var form = ['Choose a level: (1 - ' + level.max + '): ', 
	level, '#p', generate, '#p', 'Your code is: ', output, '#p', back]
	appendChildren(div, form)
}

function
showMenu(query) {
	if(typeof query == 'string')
		generators._query = query

	var div = document.querySelector(generators._query)

	clearForm(div)

	for(var game in generators)
	{
		if(game[0] == '_') continue
		var link = document.createElement("A")
		link.onclick = showForm
		link.href = '#'
		link.innerText = game
		div.appendChild(link)
		div.appendChild(document.createElement("P"))
	}
}

function
electricMan2Form(div)
{
	var name = 'ElectricMan 2'
	var game = generators[name]

	var uname = document.createElement('input')
	uname.value = 'John Doe'
	uname.setAttribute('maxlength', 8)

	//COMPLETED MATCHES
	var matches = [
		document.createElement('input'), document.createElement('input'),
		document.createElement('input'), document.createElement('input')
	]
	for(var i in matches)
		matches[i].type = 'checkbox'
	

	//COMPLETED ROUNDS
	var rounds = document.createElement('select')
	for(var i = 1; i <= 6; i++) {
		var opt = document.createElement('option')
		opt.innerText = (i < 5) ? i : ['Semi-Finals', 'Finals'][i-5]
		opt.value = i
		rounds.appendChild(opt)
	}
	rounds.onchange = function(e)
	{
		for(var i in matches)
			matches[i].disabled = false

		if(Number(this.value) >= 5)
			for(var i = 0; i < Number(this.value) - 3; i++)
				matches[3 - i].checked = !(matches[3 - i].disabled = true)
	
	}

	//PLAYER COLOR
	var color = document.createElement('select')
	var colorNames = ['Orange', 'White', 'Blue', 'Green', 'Turquoise']
	for(var i in colorNames) {
		var opt = document.createElement('option')
		opt.innerText = colorNames[i]
		opt.value = Number(i) + 1
		color.appendChild(opt)
	}

	//PLAYER SKILL LEVEL
	var skill = document.createElement('select')
	
	var easy = document.createElement('option')
	easy.value = 2; easy.innerText = 'Easy'
	skill.appendChild(easy)
	
	var normal = document.createElement('option')
	normal.value = 3; normal.innerText = 'Normal'
	skill.appendChild(normal)
	
	var pro = document.createElement('option')
	pro.value = 1; pro.innerText = 'Pro'
	skill.appendChild(pro)
	
	//GENERATE BUTTON
	var output = outputArea()
	var generate = generateButton(function(){
		output.innerText = electricMan2(
			uname.value,
			[
				matches[0].checked,
				matches[1].checked,
				matches[2].checked,
				matches[3].checked
			],
			Number(rounds.value),
			Number(color.value),
			Number(skill.value)
		)
	})
	var back = backLink()

	//GENERATE FORM
	var form = [
		'Your name: ', uname, '#br',
		'Completed Matches: ', matches[0], matches[1], matches[2], matches[3], '#br',
		'Round: ', rounds, '#br',
		'Color: ', color, '#br',
		'Skill: ', skill, '#p',
		generate, '#p',
		'Your code: ', output, '#p',
		back, '#p'
	]

	appendChildren(div, form)
}
