const names = ["johani", "anik", "talha", "jobayer"];
var tinyName = names[0];
for (let i = 0; i < names.length; i++) {
    const element = names[i];
    if(element.length < tinyName.length){
        tinyName = element;
    }
}
console.log(tinyName)