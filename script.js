let towers = [[5,4,3,2,1], [], []]
let positions = ['p1', 'p2', 'p3', 'p4', 'p5', 'p0', 't1', 't2', 't3', ]
let movements = []

function game(){
    towers.forEach((tower, towerid) => {
        tower.forEach((disk, position) => {
            let d=document.querySelector('.d'+disk)
            positions.forEach(position =>{
                d.classList.remove(position)
            })
            d.classList.add('t'+(towerid+1))
            d.classList.add('p'+(position+1))
        })
    })
}

function move(from, to){
    if(!towers[from].length)return
    let disk = towers [from].pop()
    if(towers[to].length){
        if(towers[to][towers[to].length-1]<disk){
            return towers[from].push(disk)
        }
    }
    let d = document.querySelector('.d'+disk)
    d.classList.add('p0')
    towers[to].push(disk)
    setTimeout(game,500)
}

function tower(n){
    if(movements.length && movements[0].length==1){
        movements[0].push(n)
    }else{
        movements.unshift([n])
    }
}

setInterval(() =>{
    if(movements.length && movements[movements.length-1].length==2){
        let m = movements.pop()
        move(m[0], m[1])
    }
},5)

game()