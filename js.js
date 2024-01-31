let date = new Date();  // 3 января 2012 года
let day = date.getDay()
const pattern = `<tr>
<td rowspan="2" class="num">NUM</td>
<td class="name">NAME</td>
</tr>
<tr>
<td class="desc">DESC</td>
</tr>
`
const empty_pattern = `
<tr>
<td class="num">NUM</td>
<td class="name">NAME</td>
</tr>
`
const days = ['Понедельник',"Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"]

function get_today_pari() {
    let today = PARI[day-1]
    let temp = ''
    document.querySelector('.today').innerHTML = 'Сегодня '+today['day']+':'
    if(today == 7){
        document.querySelector('.today').innerHTML = 'Сегодня Воскресенье:'
        document.getElementById('today').innerHTML = 'Спи дебил'
        return
    }

    for (let x = 0; x < today['pari'].length; x++) {
        const element = today['pari'][x];
        if(element['name'] == ''){
            var temp2 = empty_pattern.replace('NUM',x+1+'.')
            element['name'] = 'Спать'
        }
        else{
            var temp2 = pattern.replace('NUM',x+1+'.')
        }
        temp2 = temp2.replace('NAME',element['name'])
        temp2 = temp2.replace('DESC',element['desc'])
        temp += temp2
    }
    document.getElementById('today').innerHTML = temp
}
function get_vse_pari() {
    for (let x = 0; x < 6; x++) {
        vse_pari.innerHTML += '<tr><td class="DAY" colspan="2">'+days[x]+'</td></tr>'
        let pari_dlya_dna = PARI[x]
        let temp = ''
        for (let x = 0; x < pari_dlya_dna['pari'].length; x++) {
            const element = pari_dlya_dna['pari'][x];
            if(element['name'] == ''){
                var temp2 = empty_pattern.replace('NUM',x+1+'.')
                element['name'] = 'Спать'
            }
            else{
                var temp2 = pattern.replace('NUM',x+1+'.')
            }
            temp2 = temp2.replace('NAME',element['name'])
            temp2 = temp2.replace('DESC',element['desc'])
            temp += temp2
        }
        document.getElementById('vse_pari').innerHTML += temp
        // document.getElementById('vse_pari').innerHTML += '<tr><td class="skip" colspan="2" style="text-align:center"></td></tr>'
    }

    // let today = PARI[day-1]
    // let temp = ''
    // document.querySelector('.today').innerHTML = 'Сегодня '+today['day']+':'

    // for (let x = 0; x < today['pari'].length; x++) {
    //     const element = today['pari'][x];
    //     if(element['name'] == ''){
    //         var temp2 = empty_pattern.replace('NUM',x+1+'.')
    //         element['name'] = 'Спать'
    //     }
    //     else{
    //         var temp2 = pattern.replace('NUM',x+1+'.')
    //     }
    //     temp2 = temp2.replace('NAME',element['name'])
    //     temp2 = temp2.replace('DESC',element['desc'])
    //     temp += temp2
    // }
    // document.getElementById('today').innerHTML = temp

}
get_today_pari()
get_vse_pari()