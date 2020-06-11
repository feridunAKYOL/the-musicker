fetch('/api/playlists')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    let tbl = document.getElementById('tblPlaylists');
    for(let i=0; i<data.length; i++){
     let row = document.createElement('tr');
     row.innerHTML = `
     <tr>
      <td >${JSON.stringify(data[i].PlaylistId)}</td>
      <td>${JSON.stringify(data[i].Name)}</td>
     </tr>
     `
      tbl.appendChild(row);
    }
  })
  .catch(err => console.error(err));

