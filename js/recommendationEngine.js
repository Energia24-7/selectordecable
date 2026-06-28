import {
allProducts
}
from '../data/allProducts.js';

export function
initializeRecommendationEngine() {

```
const btn =
    document.getElementById(
        'searchButton'
    );

if (!btn)
    return;

btn.addEventListener(
    'click',
    executeRecommendation
);
```

}

function executeRecommendation() {

```
const input =
    document.getElementById(
        'searchInput'
    );

const results =
    document.getElementById(
        'searchResults'
    );

const query =
    input.value.toLowerCase();

const recommendations =
    scoreProducts(query);

renderRecommendations(
    recommendations,
    results
);
```

}

function scoreProducts(query) {

```
const words =
    query.split(" ");

const scored = [];

allProducts.forEach(product => {

    let score = 0;

    words.forEach(word => {

        if (
            product.tags &&
            product.tags.includes(word)
        ) {
            score += 25;
        }

        if (
            product.name &&
            product.name
            .toLowerCase()
            .includes(word)
        ) {
            score += 15;
        }

        if (
            product.category &&
            product.category
            .toLowerCase()
            .includes(word)
        ) {
            score += 10;
        }

    });

    score +=
        evaluateRules(
            query,
            product
        );

    if (score > 0) {

        scored.push({
            product,
            score
        });

    }

});

return scored
    .sort(
        (a,b) =>
        b.score - a.score
    )
    .slice(0,5);
```

}

function evaluateRules(
query,
product
) {

```
let score = 0;

if (
    query.includes("solar")
) {

    if (
        product.tags?.includes(
            "solar"
        )
    ) {
        score += 100;
    }

}

if (
    query.includes("fotovolta")
) {

    if (
        product.tags?.includes(
            "solar"
        )
    ) {
        score += 100;
    }

}

if (
    query.includes("bomba")
) {

    if (
        product.tags?.includes(
            "bomba"
        )
    ) {
        score += 80;
    }

}

if (
    query.includes("sumergible")
) {

    if (
        product.tags?.includes(
            "sumergible"
        )
    ) {
        score += 100;
    }

}

if (
    query.includes("variador")
) {

    if (
        product.tags?.includes(
            "vfd"
        )
    ) {
        score += 120;
    }

}

if (
    query.includes("motor")
) {

    if (
        product.tags?.includes(
            "motor"
        )
    ) {
        score += 60;
    }

}

if (
    query.includes("scada")
) {

    if (
        product.tags?.includes(
            "scada"
        )
    ) {
        score += 150;
    }

}

if (
    query.includes("ethernet")
) {

    if (
        product.tags?.includes(
            "ethernet"
        )
    ) {
        score += 120;
    }

}

if (
    query.includes("fibra")
) {

    if (
        product.tags?.includes(
            "fibra"
        )
    ) {
        score += 120;
    }

}

if (
    query.includes("linea")
    &&
    query.includes("aerea")
) {

    if (
        product.tags?.includes(
            "linea aerea"
        )
    ) {
        score += 120;
    }

}

if (
    query.includes("mineria")
) {

    if (
        product.family ===
        "Minería"
    ) {
        score += 150;
    }

}

return score;
```

}

function renderRecommendations(
recommendations,
container
) {

```
container.innerHTML = '';

if (
    recommendations.length === 0
) {

    container.innerHTML = `
    <p>
    No se encontraron
    recomendaciones.
    </p>
    `;

    return;

}

recommendations.forEach(item => {

    const confidence =
        Math.min(
            item.score,
            100
        );

    container.innerHTML += `

    <div
        class="recommendation-card">

        <h3>
        ${item.product.name}
        </h3>

        <p>
        ${item.product.category}
        </p>

        <p>
        Confianza:
        ${confidence}%
        </p>

    </div>

    `;

});
```

}
