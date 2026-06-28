import { smartSearch } from '../data/allProducts.js';

export function initializeSearch() {

```
const searchInput =
    document.getElementById('searchInput');

const searchResults =
    document.getElementById('searchResults');

if (!searchInput)
    return;

searchInput.addEventListener('input', () => {

    const query =
        searchInput.value.trim();

    if (query.length < 3) {

        searchResults.innerHTML = '';
        return;

    }

    const results =
        smartSearch(query);

    renderResults(
        results.slice(0,10),
        searchResults
    );

});
```

}

function renderResults(results, container) {

```
if (results.length === 0) {

    container.innerHTML = `
        <div class="no-results">
            No se encontraron coincidencias
        </div>
    `;

    return;

}

container.innerHTML = '';

results.forEach(result => {

    const score =
        Math.min(
            Math.round(result.score),
            100
        );

    const card =
        document.createElement('div');

    card.className =
        'search-card';

    card.innerHTML = `

        <h3>${result.product.name}</h3>

        <p>
            ${result.product.category}
        </p>

        <p>
            <strong>
                Coincidencia:
            </strong>

            ${score}%
        </p>

        <button
            class="view-product"
            data-id="${result.product.id}">
            Ver detalle
        </button>

    `;

    container.appendChild(card);

});
```

}
