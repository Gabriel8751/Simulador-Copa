function on_input() {

    var ptb = 0
    var ptsu = 0
    var ptc = 0
    var ptse = 0

    var saldob = 0
    var saldosu = 0
    var saldoc = 0
    var saldose = 0

    var jb = 0
    var jsu = 0
    var jc = 0
    var jse = 0

    var golb = 0
    var golsu = 0
    var golc = 0
    var golse = 0

    var vitb = 0
    var vitsu = 0
    var vitc = 0
    var vitse = 0

    
    var jogo1su = parseInt(document.querySelector('.sui1').value)
    var jogo1c = parseInt(document.querySelector('.cam1').value)
    var jogo1b = parseInt(document.querySelector('.bra1').value)
    var jogo1se = parseInt(document.querySelector('.ser1').value)

    var jogo2c = parseInt(document.querySelector('.cam2').value)
    var jogo2se = parseInt(document.querySelector('.ser2').value)
    var jogo2b = parseInt(document.querySelector('.bra2').value)
    var jogo2su = parseInt(document.querySelector('.sui2').value)

    var jogo3c = parseInt(document.querySelector('.cam3').value)
    var jogo3b = parseInt(document.querySelector('.bra3').value)
    var jogo3se = parseInt(document.querySelector('.ser3').value)
    var jogo3su = parseInt(document.querySelector('.sui3').value)

    //Jogo Suiça x Camarões
    if ((jogo1su == jogo1c)) {
        ptsu+=1
        ptc+=1
        golsu+= jogo1su
        golc+= jogo1c
        jsu+=1
        jc+=1
        saldosu += (jogo1su - jogo1c)
        saldoc += (jogo1c - jogo1su)
        change_suica(ptsu, jsu, vitsu, saldosu ,golsu)
        change_camaroes(ptc, jc, vitc, saldoc, golc)
        sortTable()

    } else if((jogo1su > jogo1c)) {
        ptsu+=3
        golsu+=jogo1su
        golc+=jogo1c
        vitsu+=1
        jsu+=1
        jc+=1
        saldosu += (jogo1su - jogo1c)
        saldoc += (jogo1c - jogo1su)
        change_camaroes(ptc, jc, vitc, saldoc, golc)
        change_suica(ptsu, jsu, vitsu, saldosu, golsu)
        sortTable()
        
    } else if((jogo1su < jogo1c)) {
        ptc+=3
        golsu+=jogo1su
        golc+=jogo1c
        vitc+=1
        jsu+=1
        jc+=1
        saldosu += (jogo1su - jogo1c)
        saldoc += (jogo1c - jogo1su)
        change_camaroes(ptc, jc, vitc, saldoc, golc)
        change_suica(ptsu, jsu, vitsu, saldosu, golsu)
        sortTable()
        console.log(jogo1c)
    }

    //Jogo Brasil x Servia
    if ((jogo1b == jogo1se)) {
        ptb+=1
        ptse+=1
        golb+= jogo1b
        golse+= jogo1se
        jb+=1
        jse+=1
        saldob += (jogo1b - jogo1se)
        saldose += (jogo1se - jogo1b)
        change_brasil(ptb, jb, vitb, saldob, golb)
        change_servia(ptse, jse, vitse, saldose, golse)
        sortTable()
    } else if((jogo1b > jogo1se)) {
        ptb+=3
        golb+=jogo1b
        golse+=jogo1se
        vitb+=1
        jb+=1
        jse+=1
        saldob += (jogo1b - jogo1se)
        saldose += (jogo1se - jogo1b)
        change_brasil(ptb, jb, vitb, saldob, golb)
        change_servia(ptse, jse, vitse, saldose, golse)
        sortTable()
    } else if((jogo1b < jogo1se)) {
        ptse+=3
        golb+=jogo1b
        golse+=jogo1se
        vitse+=1
        jb+=1
        jse+=1
        saldob += (jogo1b - jogo1se)
        saldose += (jogo1se - jogo1b)
        change_brasil(ptb, jb, vitb, saldob, golb)
        change_servia(ptse, jse, vitse, saldose, golse)
        sortTable()
    }

    //Jogo Camarões x Servia
    if ((jogo2c == jogo2se)) {
        ptc+=1
        ptse+=1
        golc+= jogo2c
        golse+= jogo2se
        jc+=1
        jse+=1
        saldoc += (jogo2c - jogo2se)
        saldose += (jogo2se - jogo2c)
        change_servia(ptse, jse, vitse, saldose, golse)
        change_camaroes(ptc, jc, vitc, saldoc, golc)
        sortTable()
    } else if((jogo2c > jogo2se)) {
        ptc+=3
        golc+=jogo2c
        golse+=jogo2se
        vitc+=1
        jc+=1
        jse+=1
        saldoc += (jogo2c - jogo2se)
        saldose += (jogo2se - jogo2c)
        change_servia(ptse, jse, vitse, saldose, golse)
        change_camaroes(ptc, jc, vitc, saldoc, golc)
        sortTable()
    } else if((jogo2c < jogo2se)) {
        ptse+=3
        golc+=jogo2c
        golse+=jogo2se
        vitse+=1
        jc+=1
        jse+=1
        saldoc += (jogo2c - jogo2se)
        saldose += (jogo2se - jogo2c)
        change_servia(ptse, jse, vitse, saldose, golse)
        change_camaroes(ptc, jc, vitc, saldoc, golc)
        sortTable()
    }

    //Jogo Brasil x Suica
    if ((jogo2b == jogo2su)) {
        ptb+=1
        ptsu+=1
        golb+= jogo2b
        golsu+= jogo2su
        jb+=1
        jsu+=1
        saldob += (jogo2b - jogo2su)
        saldosu += (jogo2su - jogo2b)
        change_brasil(ptb, jb, vitb, saldob, golb)
        change_suica(ptsu, jsu, vitsu, saldosu, golsu)
        sortTable()
    } else if((jogo2b > jogo2su)) {
        ptb+=3
        golb+=jogo2b
        golsu+=jogo2su
        vitb+=1
        jb+=1
        jsu+=1
        saldob += (jogo2b - jogo2su)
        saldosu += (jogo2su - jogo2b)
        change_brasil(ptb, jb, vitb, saldob, golb)
        change_suica(ptsu, jsu, vitsu, saldosu, golsu)
        sortTable()
    } else if((jogo2b < jogo2su)) {
        ptsu+=3
        golb+=jogo2b
        golsu+=jogo2su
        vitsu+=1
        jb+=1
        jsu+=1
        saldob += (jogo2b - jogo2su)
        saldosu += (jogo2su - jogo2b)
        change_brasil(ptb, jb, vitb, saldob, golb)
        change_suica(ptsu, jsu, vitsu, saldosu, golsu)
        sortTable()
    }

    //Jogo Camarões x Brasil
    if ((jogo3c == jogo3b)) {
        ptc+=1
        ptb+=1
        golc+= jogo3c
        golb+= jogo3b
        jc+=1
        jb+=1
        saldoc += (jogo3c - jogo3b)
        saldob += (jogo3b - jogo3c)
        change_camaroes(ptc, jc, vitc, saldoc, golc)
        change_brasil(ptb, jb, vitb, saldob, golb)
        sortTable()

    } else if((jogo3c > jogo3b)) {
        ptc+=3
        golc+=jogo3c
        golb+=jogo3b
        vitc+=1
        jc+=1
        jb+=1
        saldoc += (jogo3c - jogo3b)
        saldob += (jogo3b - jogo3c)
        change_camaroes(ptc, jc, vitc, saldoc, golc)
        change_brasil(ptb, jb, vitb, saldob, golb)
        sortTable()
    } else if((jogo3c < jogo3b)) {
        ptb+=3
        golc+=jogo3c
        golb+=jogo3b
        vitb+=1
        jc+=1
        jb+=1
        saldoc += (jogo3c - jogo3b)
        saldob += (jogo3b - jogo3c)
        change_camaroes(ptc, jc, vitc, saldoc, golc)
        change_brasil(ptb, jb, vitb, saldob, golb)
        sortTable()
    }

    //Jogo Servia x Suiça
    if ((jogo3se == jogo3su)) {
        ptse+=1
        ptsu+=1
        golse+= jogo3se
        golsu+= jogo3su
        jse+=1
        jsu+=1
        saldose += (jogo3se - jogo3su)
        saldosu += (jogo3su - jogo3se)
        change_servia(ptse, jse, vitse, saldose, golse)
        change_suica(ptsu, jsu, vitsu, saldosu ,golsu)
        sortTable()
    } else if((jogo3se > jogo3su)) {
        ptse+=3
        golse+=jogo3se
        golsu+=jogo3su
        vitse+=1
        jse+=1
        jsu+=1
        saldose += (jogo3se - jogo3su)
        saldosu += (jogo3su - jogo3se)
        change_servia(ptse, jse, vitse, saldose, golse)
        change_suica(ptsu, jsu, vitsu, saldosu ,golsu)
        sortTable()
    } else if((jogo3se < jogo3su)) {
        ptsu+=3
        golse+=jogo3se
        golsu+=jogo3su
        vitsu+=1
        jse+=1
        jsu+=1
        saldose += (jogo3se - jogo3su)
        saldosu += (jogo3su - jogo3se)
        change_servia(ptse, jse, vitse, saldose, golse)
        change_suica(ptsu, jsu, vitsu, saldosu ,golsu)
        sortTable()
    }

}

function add_brasil(ptb, jb, vitb, saldob, golb) {  
    var brasil = '<tr id="brasil"><td class="nome">Brasil</td><td>'+ptb+'</td><td>'+jb+'</td><td>'+vitb+'</td><td>'+saldob+'</td><td>'+golb+'</td></tr>'
    return brasil
}

function add_servia(ptse, jse, vitse, saldose, golse) {
    var servia = '<tr id="servia"><td class="nome">Servia</td><td>'+ptse+'</td><td>'+jse+'</td><td>'+vitse+'</td><td>'+saldose+'</td><td>'+golse+'</td></tr>'
    return servia
}

function add_suica(ptsu, jsu, vitsu, saldosu, golsu) {
    var suecia = '<tr id="suiça"><td class="nome">Suiça</td><td>'+ptsu+'</td><td>'+jsu+'</td><td>'+vitsu+'</td><td>'+saldosu+'</td><td>'+golsu+'</td></tr>'
    return suecia
}

function add_camaroes(ptc, jc, vitc, saldoc, golc) {
    var camaroes = '<tr id="camaroes"><td class="nome">Camarões</td><td>'+ptc+'</td><td>'+jc+'</td><td>'+vitc+'</td><td>'+saldoc+'</td><td>'+golc+'</td></tr>'
    return camaroes
}

function change_brasil(ptb, jb, vitb, saldob, golb){
    var tabela = document.getElementById('table') 
    var brasil = document.getElementById('brasil')
    brasil.remove()
    tabela.innerHTML += add_brasil(ptb, jb, vitb, saldob, golb)
}

function change_servia(ptse, jse, vitse, saldose, golse){
    var tabela = document.getElementById('table') 
    var servia = document.getElementById('servia')
    servia.remove()
    tabela.innerHTML += add_servia(ptse, jse, vitse, saldose, golse)
}

function change_suica(ptsu, jsu, vitsu, saldosu ,golsu){
    var tabela = document.getElementById('table') 
    var suica = document.getElementById('suiça')
    suica.remove()
    tabela.innerHTML += add_suica(ptsu, jsu, vitsu, saldosu, golsu)
}

function change_camaroes(ptc, jc, vitc, saldoc, golc){
    var tabela = document.getElementById('table') 
    var camaroes = document.getElementById('camaroes')
    camaroes.remove()
    tabela.innerHTML += add_camaroes(ptc, jc, vitc, saldoc, golc)
}

function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("table");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            console.log(x = rows[i].getElementsByTagName("TD")[1])
            console.log(y = rows[i + 1].getElementsByTagName("TD")[1])
            if (Number(x.innerHTML) < Number(y.innerHTML)) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}