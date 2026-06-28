import { buildingProducts } from './building.js';
import { renewableProducts } from './renewable.js';
import { miningProducts } from './mining.js';
import { telecomProducts } from './telecom.js';
import { powerProducts } from './power.js';
import { transmissionProducts } from './transmission.js';

export const allProducts = [

```
...buildingProducts,

...renewableProducts,

...miningProducts,

...telecomProducts,

...powerProducts,

...transmissionProducts
```

];

export function findProductsByTag(searchText) {

```
const query = searchText.toLowerCase();

return allProducts.filter(product => {

    if (!product.tags)
        return false;

    return product.tags.some(tag =>
        tag.toLowerCase().includes(query)
    );

});
```

}

export function smartSearch(searchText) {

```
const words = searchText
    .toLowerCase()
    .split(" ")
    .filter(w => w.length > 2);

const results = [];

allProducts.forEach(product => {

    let score = 0;

    words.forEach(word => {

        if (!product.tags)
            return;

        product.tags.forEach(tag => {

            if (
                tag.toLowerCase()
                   .includes(word)
            ) {
                score += 10;
            }

        });

        if (
            product.name &&
            product.name.toLowerCase()
            .includes(word)
        ) {
            score += 20;
        }

        if (
            product.category &&
            product.category.toLowerCase()
            .includes(word)
        ) {
            score += 15;
        }

    });

    if (score > 0) {

        results.push({
            score,
            product
        });

    }

});

return results.sort(
    (a,b) => b.score - a.score
);
```

}
