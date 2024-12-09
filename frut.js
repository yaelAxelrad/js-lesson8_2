const fruit1 = new Object()
fruit1.name = "apple"
fruit1.calory = 100
fruit1.price = 5
fruit1.print = function()
{
    return this.name + " " + this.calory + " " +this.price ;
}
const fruits = [
    {
        name: "orange",
        calory: 120,
        price: 7,
        print: function () { 
            return this.name + " " + this.calory + " " +this.price ;
        }
    },
    {
        name: "chery",
        calory: 50,
        price: 3,
        print: function () { 
            return this.name + " " + this.calory + " " +this.price ;
        }
    },
     fruit1
]
for(let i = 0; i<3;i++)
{
    //document.getElementById("fruitlist").innerHTML =+ fruits[i].print()
    console.log(fruits[i].print())
}
fruits[0].color = "green"

for(let i = 0; i<3;i++)
{
  if(fruits[i].color != undefined)
  {
    console.log(fruits[i].print() + " " + fruits[i].color)
  }
}
for (const key in fruits[0]) {
    console.log(key + ": " + fruits[0][key] )
}
delete(fruits[1].price) 
console.log(fruits[1].print())
document.getElementById("fruitlist").innerHTML = fruits[1].print()
function changePrice()
{
    fruits[0].price = document.getElementById("price").value
    console.log(fruits[0].print()) 

}
function deleteCalory()
{
   let r = (document.getElementById("calory").value)
   let fruits2 = fruits.filter((x) => x.calory < r)
   for(let i =0; i<fruits2.length; i++)
   {
    console.log(fruits[i].print() )
   }

}

for(let i =0; i<fruits.length; i++)
{
    Object.defineProperty(fruits[i] , "price" ,{
      set(item)
      {
            if(item>10 && item < 100)
            {
                fruits[i].price = item
            }
      }
    })
}
fruits[0].set = 45
console.log(fruits[0].price)

