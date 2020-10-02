

//membuat fuction untuk memunculkan modal

const showModal = () => {

    //kita ambil element yang akan di SHOW
    let modal = document.querySelector('.modalmenu')

    //kita  atus STYLE dari element tersebut
    //jadikan dia terlihat
    modal.style.display = 'flex'

}

//kita buat fungsi untuk hide element
const hideModal = () => {
    //kita ambil element yang akan di SHOW
    let modal = document.querySelector('.modalmenu')

    //kita atus STYLE dari element tersebut
    //jadikan dia tersembunyi
    modal.style.display = 'none'
}
const hideaboutalert = () => {
    let aboutalert = document.querySelector('.aboutalert')
    aboutalert.style.display = 'none'


}

let product = document.getElementById('container-product')

let img = 50



for (let i = 0; i < 150; i++) {
    product.innerHTML += `
    <img src='https://picsum.photos/seed/${img++}/100'/>

    `
}  