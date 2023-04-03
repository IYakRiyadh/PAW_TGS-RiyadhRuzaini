<!-- @format -->

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- Bootstrap -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" />

  <link rel="stylesheet" href="style.css" />

  <title>Tugas 1</title>
</head>

<body>
  <div class="container">
    <nav class="navbar">
      <div class="container-lg justify-content-center">
        <a class="navbar-brand" href="#">
          <span>Tugas 1</span>
          <br />
          <span>Pengembangan Aplikasi Web</span>
        </a>
      </div>
    </nav>
  </div>

  <div class="container">
    <div class="row mt-4 justify-content-between">
      <h2 class="judul mb-5">Form Input</h2>
      <!-- <div class="col-md-5 from_input">
          <div class="container_form">
          </div>
        </div> -->
      <div class="col-md">
        <div class="input-group">
          <label class="input-group-text" for="inputGroupSelect01">Makanan</label>
          <select class="form-select" id="makanan" onchange="produk()">
            <option>Pilih...</option>
            <option id="op" value="13500" aria-selected="Mie">Mie Instan</option>
            <option id="op" value="14000" aria-selected="Mie_Ayam">Mie Ayam</option>
            <option id="op" value="17000" aria-selected="Soto">Soto</option>
            <option id="op" value="20000" aria-selected="Sop">Sop</option>
          </select>
        </div>
        <div class="input-group form-input2 justify-content-between">
          <label>Jumlah Makanan </label>
          <span> :</span>
          <input type="number" name="jumlah_makanan" id="jumlah_makanan" value="0" onchange="produk()" />
        </div>
        <div class="input-group form-input3 justify-content-between">
          <label>Harga Makanan </label>
          <span>:</span>
          <input id="harga_makan" type="number" value="" readonly />
        </div>
      </div>
      <?php echo 'iyak'; ?>

      <div class="col-md">
        <div class="input-group">
          <label class="input-group-text" for="inputGroupSelect01">Minuman</label>
          <select class="form-select" id="minuman" onchange="produk()">
            <option>Pilih...</option>
            <option id="op" value="5000" aria-selected="Air Mineral">Air Mineral</option>
            <option id="op" value="3500" aria-selected="Es Teh">Es Teh</option>
            <option id="op" value="4500" aria-selected="Es Jeruk">Es Jeruk</option>
            <option id="op" value="7500" aria-selected="Josua">Josua</option>
          </select>
        </div>
        <div class="input-group form-input2 justify-content-between">
          <label>Jumlah Minum </label>
          <span> :</span>
          <input type="number" name="jumlah_minum" id="jumlah_minum" value="0" onchange="produk()" />
        </div>
        <div class="input-group form-input3 justify-content-between">
          <label>Harga Minum </label>
          <span>:</span>
          <input id="harga_minum" type="number" value="" readonly />
        </div>
      </div>
    </div>
    <div id="btn">
      <a class="btn btn-primary mt-4" onclick="produk()">Bayar</a>
    </div>
    <div class="container-sm">
      <div class="mydividers"></div>
    </div>
    <div class="row">
      <div class="col-sm">
        <h2>Nota</h2>
        <div class="container-nota mt-4">
          <table class="table table-bordered border-info">
            <thead>
              <tr>
                <th scope="col">Nama Makanan</th>
                <th scope="col">Nama Minuman</th>
                <th scope="col">Jumlah Pesanan</th>
                <th scope="col">Harga</th>
              </tr>
            </thead>
            <tbody id="tbody">
              <!-- <tr id="row1">
                  <td></td>
                  <td></td>
                  <td>Rp.-</td>
                </tr>
                <tr id="row2">
                  <td></td>
                  <td></td>
                  <td>Rp.-</td>
                </tr> -->
            </tbody>
            <!-- <tfoot>
                <tr class="table-info">
                  <td class="text-center" colspan="3"><strong>Total Harga</strong></td>
                  <td id="hargaT">Rp. -</td>
                </tr>
              </tfoot> -->
          </table>
        </div>
      </div>
    </div>
  </div>
  <!-- js -->
  <script src="index.js"></script>

  <!-- js Bootstrap -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
</body>

</html>