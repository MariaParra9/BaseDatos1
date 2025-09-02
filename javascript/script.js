function filterArticles() {
  let input = document.getElementById('filterInput');
  let filter = input.value.toLowerCase();
  let table = document.getElementById('articlesTable');
  let tr = table.getElementsByTagName('tr');

  for (let i = 1; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName('td');
    let rowText = '';
    for (let j = 0; j < td.length; j++) {
      rowText += td[j].textContent.toLowerCase();
    }
    tr[i].style.display = rowText.includes(filter) ? '' : 'none';
  }
}

function toggleAbstract(id) {
  let abstract = document.getElementById(id);
  abstract.style.display = abstract.style.display === 'block' ? 'none' : 'block';
}

function copyQuery(id) {
  let text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("Cadena copiada al portapapeles.");
  });
}
