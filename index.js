/** @format */

const itemMakanan = [
  {
    makanan: 'Mie Ayam',
    harga: '14000',
  },
  {
    makanan: 'Mie Instant',
    harga: '12000',
  },
  {
    makanan: 'Soto Ayam',
    harga: '17000',
  },
  {
    makanan: 'Sop Kambing',
    harga: '19000',
  },
  {
    makanan: 'Nasi Goreng',
    harga: '15000',
  },
];

function produk() {
  var minuman = document.getElementById('minuman').value;
  var makanan = document.getElementById('makanan').value;

  var selectMinuman = document.getElementById('minuman').ariaSelected;
  var selectMakanan = document.getElementById('makanan').ariaSelected;

  var jumHarMak = makanan * parseInt(document.getElementById('jumlah_makanan').value);
  var jumHarMin = minuman * parseInt(document.getElementById('jumlah_minum').value);

  document.getElementById('harga_makan').value = jumHarMak;
  document.getElementById('harga_minum').value = jumHarMin;
}

var btn = document.querySelector('#btn a');
btn.addEventListener('click', function () {
  var jumMakan = parseInt(document.querySelector('#jumlah_makanan').value);
  var jumMinum = parseInt(document.querySelector('#jumlah_minum').value);
  var hargaMinum = parseInt(document.querySelector('#harga_minum').value);
  var hargaMakan = parseInt(document.querySelector('#harga_makan').value);
  // var minuman = document.getElementById('minuman').ariaSelected;
  // var makanan = document.getElementById('makanan').ariaSelected;

  // var selected = document.getElementById('op').ariaSelected;
  // for (let i = 0; i < selected.length; i++) {
  //   makanan = selected[i];
  // }

  var tb = document.querySelector('tbody');
  var trBaru = document.createElement('tr');
  var tdB1 = document.createElement('td');
  var tdB2 = document.createElement('td');
  var tdB3 = document.createElement('td');
  var tdB4 = document.createElement('td');
  // var textMakan = document.createTextNode(makanan);
  // var textMimun = document.createTextNode(minuman);
  var textJ = document.createTextNode(jumMakan + jumMinum);
  var inputH = document.createElement('input');
  var valMakanan = document.createElement('input');
  var valMinum = document.createElement('input');
  tb.appendChild(trBaru);
  trBaru.appendChild(tdB1);
  trBaru.appendChild(tdB2);
  trBaru.appendChild(tdB3);
  trBaru.appendChild(tdB4);
  tdB1.appendChild(valMakanan);
  tdB2.appendChild(valMinum);
  tdB3.appendChild(textJ);
  tdB4.appendChild(inputH);

  valMakanan.setAttribute('id', 'makanTxtInput');
  valMakanan.setAttribute('id', 'makanTxtInput');

  var makanVal = document.getElementById('makanan');
  var minumVal = document.getElementById('minuman');

  var tampilkanFood = makanVal.options[makanVal.selectedIndex].text;
  var tampilkanMinum = minumVal.options[minumVal.selectedIndex].text;

  // document.getElementById('makanTxtInput').value = tampilkanFood);
  // document.getElementById('minumTxtInput').value = tampilkanMinum);

  valMakanan.setAttribute('value', tampilkanFood);
  valMinum.setAttribute('value', tampilkanMinum);

  var dataVal = parseInt(hargaMinum) + parseInt(hargaMakan);

  inputH.setAttribute('type', 'text');
  inputH.setAttribute('value', `${dataVal}`);
  inputH.setAttribute('id', 'hargaTotal');

  var total = parseInt(document.getElementById('hargaTotal').value);

  // var valTotalHar = total * dataVal;
  // if

  // document.querySelector('#hargaT').innerHTML = 'Rp. ' + total;

  var ntTabel = document.querySelector('.container-nota');
  ntTabel.style.display = 'block';
});
