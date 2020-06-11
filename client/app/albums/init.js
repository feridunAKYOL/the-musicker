fetch('/api/albums')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    let tbl = document.getElementById('tbl');
    for(let i=0; i<data.length; i++){
     let row = document.createElement('tr');
     row.innerHTML = `
     <tr>
      <td >${JSON.stringify(data[i].AlbumId)}</td>
      <td>${JSON.stringify(data[i].Title)}</td>
      <td>${JSON.stringify(data[i].ArtistId)}</td>
     </tr>
     `
      tbl.appendChild(row);
    }
  })
  .catch(err => console.error(err));

