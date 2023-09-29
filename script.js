// ----------------a----------------//

const data = ['Иван', 'Иванов', 'Отдел разработки', 'Программист', 2000];
function func(emp){
	let name 	= emp[0];
	let surname 	= emp[1];
	let department = emp[2];
	let position 	= emp[3];
	let salary 	= emp[4];
	console.log(name, surname, department, position, salary);
}
func(data);

const dataAnswer = ['Иван', 'Иванов', 'Отдел разработки', 'Программист', 2000];
// function funcanswer(emp){
// 	const [name, surname, department, position, salary] = dataAnswer
// 	console.log(name, surname, department, position, salary);
// }
// funcanswer(dataAnswer);
const [name, surname, department, position, salary] = dataAnswer
console.log(name, surname, department, position, salary);


// ----------------b----------------//

const dataAbridgement = ['Иван', 'Иванов', 'Отдел разработки', 'Программист', 2000];
function abridgement(emp){
	let name 	= emp[0];
	let surname 	= emp[1];
	let info 		= emp[2];
	console.log(name, surname, info);
}
abridgement(dataAbridgement);

const dataAbridgementanswer = ['Иван', 'Иванов', 'Отдел разработки', 'Программист', 2000];
// function abridgement(emp){
// 	const [name, surname, info] = dataAbridgementanswer
// 	console.log(name, surname, info);
// }
// abridgement(dataAbridgementanswer);

const [names, surnames, info] = dataAbridgementanswer
console.log(name, surname, department);


// ----------------c----------------//

const dataAdd = ['Иван', 'Иванов', 'Отдел разработки'];
function keyAdd(emp){
	let name 		= emp[0];
	let surname 		= emp[1];
	let department 	= emp[2];

	let position;
	if(emp[3] !== undefined){
	position = emp[3];
}
else{
	position = 'Junior';
}
console.log(name, surname, department, position);
}
keyAdd(dataAdd);

const dataAddanswer = ['Иван', 'Иванов', 'Отдел разработки'];
const [namen, surnamess, infoo, positionn = 'Junior'] = dataAddanswer
console.log(namen, surnamess, infoo, positionn);


// ----------------d----------------//

const dataColor = {
	color: 'red',
	width: 400,
	height: 500
};
function property(options){
	let color		= options.color;
	let width		= options.width;
	let height		= options.height;
	console.log(color, width, height);
}
property(dataColor);

const dataColoranswer = {
	color: 'red',
	width: 400,
	height: 500
};
const{color, width, height} = dataColoranswer
console.log(color, width, height);




