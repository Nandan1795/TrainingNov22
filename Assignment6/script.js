const canvas =document.getElementById("canvas")
const ctx = canvas.getContext("2d");

// canvas.width = window.innerWidth
ctx.fillStyle = "green";
ctx.fillRect(50, 50, 150, 100);

ctx.strokeStyle ="yellow"
// ctx.lineWidth = 5
ctx.strokeRect(250, 50, 150, 100)


ctx.fillStyle = "orange"
ctx.roundRect(50, 200, 150, 100,[10])
ctx.fill()



ctx.font ="30px arial"
ctx.fillStyle ="black"
ctx.fillText("helo All",100 ,100)

ctx.strokeStyle ='pink'
ctx.strokeText("helo All",150 ,150)

ctx.clearRect(0,0,canvas.width,canvas.height)


// Line formation
ctx.strokeStyle ="red"
ctx.beginPath()
ctx.moveTo(50,50)
ctx.lineTo(150,50)
ctx.lineTo(100,200)
// ctx.lineTo(50,50)
ctx.closePath()
ctx.stroke()
ctx.fillStyle ='yellow'
ctx.fill()

ctx.strokeStyle ="red"
ctx.beginPath()
ctx.moveTo(300,50)
ctx.lineTo(350,200)
ctx.lineTo(250,200)
ctx.closePath()
ctx.stroke()

ctx.clearRect(0,0,canvas.width,canvas.height)



// circle
ctx.strokeStyle ="red"
ctx.beginPath()
ctx.arc(200,200,100,0,(Math.PI)*2,)
ctx.fill()
ctx.stroke()
ctx.clearRect(0,0,canvas.width,canvas.height)

ctx.strokeStyle ="purple"
ctx.beginPath()
ctx.arc(canvas.width/2,canvas.height/2,200,0,(Math.PI)*2)
ctx.fillStyle ='yellow'
ctx.fill()
ctx.stroke()

ctx.strokeStyle ="purple"
ctx.beginPath()
ctx.arc(canvas.width/2,canvas.height/2,100,0,(Math.PI),)
ctx.stroke()

ctx.strokeStyle ="purple"
ctx.beginPath()
ctx.arc(150,150,20,0,(Math.PI)*2)
ctx.fillStyle ='pink'
ctx.fill()
ctx.stroke()


ctx.strokeStyle ="purple"
ctx.beginPath()
ctx.arc(350,150,20,0,(Math.PI)*2)
ctx.fillStyle ='pink'
ctx.fill()
ctx.stroke()


