document.getElementById("propertyForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const inputs = this.querySelectorAll("input, textarea");
  const data = {};
  inputs.forEach((input) => {
    data[input.placeholder] = input.value;
    input.value = "";
  });

  const li = document.createElement("li");
  li.innerHTML = `
    <strong>${data["Nama Properti"]}</strong><br/>
    Harga: Rp${data["Harga (Rp)"]}<br/>
    Lokasi: ${data["Lokasi"]}<br/>
    Bangunan: ${data["Luas Bangunan (m²)"]} m²<br/>
    Tanah: ${data["Luas Tanah (m²)"]} m²<br/>
    <em>${data["Deskripsi Properti"]}</em>
  `;

  document.getElementById("listings").appendChild(li);
});