const lista = document.querySelector('.lista')
const btn_adicionar = document.querySelector('#btn_adicionar')

let array_itens = []
let check = false

const adicionarItem = ()=>{
    const input = document.querySelector('#digite_tarefa')
    const digite_tarefa = input.value
    
    input.value = ''

    if(digite_tarefa == ''){
        alert('Digite a sua tarefa')
    }else if (array_itens.includes(digite_tarefa)){
        alert('Essa tarefa já foi adicionada na lista')
    }else{
        lista.innerHTML = ''
        array_itens.push(digite_tarefa)
        array_itens.map((i,index)=>{
            const novaDiv = document.createElement('div')
            novaDiv.setAttribute('class','container_item')

            novaDiv.addEventListener('click', (evt)=>{
                novoItem.classList.toggle('riscado')     
                novoBotaoSelecionar.classList.toggle('check')     
                novaDiv.classList.toggle('item_selecionado')

                if(novaDiv.classList.contains('item_selecionado')){
                    novaDiv.remove()
                    lista.appendChild(novaDiv)
                }
            })

            const novoItem = document.createElement('div')
            novoItem.setAttribute('class', 'item')
            novoItem.innerHTML = i

            const novoBotao = document.createElement('button')
            novoBotao.setAttribute('class', 'btn')
            novoBotao.innerHTML = 'deletar'
            novoBotao.addEventListener('click', (evt)=>{
                array_itens = array_itens.filter((i)=>{
                    evt.target.parentNode.remove()
                    return i != evt.target.parentNode.firstChild.nextSibling.textContent
                })
            })

            novoBotao.addEventListener('click', (evt)=>{
                evt.stopPropagation()
            })

            const novoBotaoSelecionar = document.createElement('button')
            novoBotaoSelecionar.setAttribute('class', 'radio')

            novaDiv.appendChild(novoBotaoSelecionar)
            novaDiv.appendChild(novoItem)
            novaDiv.appendChild(novoBotao)
            lista.appendChild(novaDiv)

        })   
    }
}

btn_adicionar.addEventListener('click', ()=>{
    adicionarItem()
})

window.addEventListener('keydown', (evt)=>{
    if(evt.key == 'Enter'){
        adicionarItem()
    }
})
