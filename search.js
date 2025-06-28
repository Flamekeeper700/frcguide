document.getElementById('search').addEventListener('input', async (e) => {
    const res = await fetch('data/components.json');
    const components = await res.json();
    const results = components.filter(c =>
      c.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    document.querySelector('main').innerHTML = `
      <h2>Search Results</h2>
      <ul>
        ${results.map(r => `<li><a href="${r.path}">${r.name}</a></li>`).join('')}
      </ul>
    `;
  });
  