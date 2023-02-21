
    var num = document.querySelector('input#num')
    var slc = document.querySelector('select#slc')
    var txt = document.querySelector('div#txt')
    var nums =[]
    var indice = 0

function adicionar(){
    if((num.value).length == 0){
        window.alert("Espaço vazio \n Digite um número por favor ")
        
    }else{
        
        n = Number(num.value)
        if (n>=1000) {
            window.alert("número maior do que o permitido")
        } else if(n<0){
            window.alert('número menor que o permitido')

        }else if (nums.indexOf(n) == -1){
            var item = document.createElement('option')
            slc.appendChild(item)

            
            
            nums[indice] = n
            item.text += `O  ${indice+1}º número colocado é colocado é ${n}`
            indice++;
            // não funciona dessa forma: num.setAttribute('value','')
            num.value = ''
            slc.setAttribute('size',indice+1)
            txt.innerHTML = ''
            num.value =''
            num.focus()

            
        }else{
            window.alert('digite um número diferente')
        } 
    }
    
}

function finalizar(){
    
    if(nums.length == 0 ){
        window.alert('números inválidos')

    }else{
    txt.innerHTML = `A quantidade de números é ${indice}`
    txt.innerHTML += `<br> O menor número é ${Math.min(...nums)}`
    txt.innerHTML += `<br> O maior número é ${Math.max(...nums)}`
    var sum = 0 ;
    for (let i in nums) {
        sum += Number(nums[i])     
    }
    txt.innerHTML += `<br> a soma dos números é ${sum}`
    txt.innerHTML += `<br>a média dos números é ${(sum/(indice)).toFixed(2)}`
    }


    }