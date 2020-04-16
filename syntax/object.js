var member = ['gyu', 'ha', 'hwang'];

console.log(member[2]); //hwang
var i = 0;
while(i<member.length){
    console.log(member[i]);
    i++;
}

var roles = {
    'programmer' :  'gyu',
    'design' : 'ha',
    'manager' : 'hwang'
}

console.log(roles.design); //ha

for(var n in roles){
    console.log('object=>', n, 'value=>', roles[n]);
}