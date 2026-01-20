

const saludo=prompt("igresa tu nombre")


const menu=
"Elegi una de la siguientes opciones "+
"1-agregar tarea "+ 
"2- maotrar tarea "+ 
"3- marcar tarea como hecha "+ 
"4-eliminar tarea "+ 
"5-salir"

let opcion= ""
let tareas= []


function pedirTarea(){
    let tarea= prompt("ingresa la tarea")
    return tarea
}

const validarTarea= function(tarea){
    return tarea !==  "" && tarea !== null
}

const mostrarTarea=()=>{
    console.log("Lista de Tareas")
    for(let i =1; i<tareas.length;i++){
        console.log(i+ "" + tareas[i])
    }
}
alert("Hola "+ saludo + " Bienvenido al gestor de tareas")
console.log("Hola "+ saludo + " Bienvenido al gestor de tareas")

while (opcion!== "5"){
    opcion=prompt(menu)

    switch(opcion){
        case "1":
            let nuevaTarea= pedirTarea()

            if(validarTarea(nuevaTarea)){
                tareas.push(nuevaTarea)
                alert("tarea agragada correctamente")
            }else{
                alert("tarea invalida")
            }
            break
        
        case"2":
            if(tareas.length===0){
                alert("no hay tareas cargadas")
            }else{
                mostrarTarea()
                alert("las tareas se mostraron por consola")
            }
            break

        case"3":
            if(tareas.length===0){
                alert("no hay tarea por marcar")
            }else{
                mostrarTarea()
                let indice= prompt("ingresa el numero de la tarea hecha")
            }
            if(indice>=0 && indice< tareas.length){
                tareas[indice]=tareas[indice] + "[hecha]"
                alert("tarea marcada como hecha")

            }else{
                alert("numero invalido")
            }
            break

        case"4":
            if(tareas.length===0){
                alert("no hay tarea por eliminar")
            }else{
                mostrarTarea()
                let borrar=prompt("ingresa el numero de tarea a eliminaar")

                if(borrar>=0 && borrar<tareas.length){
                    tareas.splice(borrar,1)
                    alert("tarea eliminada")
                }else{
                    alert("numero invalido")
                }
            }
            break

        case"5":
            alert("salir del programa")
            break
        
        default:
            alert("opciuon no valida")
    }   
}