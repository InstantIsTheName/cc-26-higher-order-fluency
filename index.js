const averageAge = (arrOfObjs) => {

const initialValue = 0;
const sum = arrOfObjs.reduce((acc, obj) => acc + obj.age, 0)
return Math.round(sum/arrOfObjs.length); 
};


const alumni = [
{name:'Jarrit', job:'TPT',language:'JavaScript', age:23}, 
{name:'Stephanie', job:'JPMorgan',language:'JavaScript', age:24}, 
{name:'Devonte', job:'WW',language:'JavaScript', age:23}, 
{name:'Enmanuel', job:'Asana',language:'JavaScript', age:23},
{name:'Shemar', job:'SquareSpace',language:'JavaScript', age:23},
{name:'Cielo', job:'NYT',language:'JavaScript', age:22},
{name:'Carmen', job:'Marcy Lab School',language:'JavaScript', age:21},
{name:'Itzel', job:'Marcy Lab School',language:'JavaScript', age:22},
{name:'Ray', job:'Square Space',language:'JavaScript', age:21},
{name:'Jan', job:'Square Space',language:'JavaScript', age:22},
{name:'Uzma', job:'Thyme Care',language:'JavaScript', age:22}]

const orderedAlumni = (arr) => {
    const newArr = arr.sort((a, b) => b.age - a.age)
    return newArr
}

console.log(orderedAlumni(alumni))

const allUseJavaScript = arrOfObjs => {
    return arrOfObjs.every(alum => )
}