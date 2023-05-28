const btn = document.querySelector('#btn_add')
btn.addEventListener('click', function(){

    const name = document.querySelector('#name')
    window.location.href = `signup/${name.value}`

})