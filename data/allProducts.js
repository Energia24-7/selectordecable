import { buildingProducts } from './building.js';
import { renewableProducts } from './renewable.js';
import { miningProducts } from './mining.js';
import { telecomProducts } from './telecom.js';
import { powerProducts } from './power.js';
import { transmissionProducts } from './transmission.js';

export const allProducts = [

    ...buildingProducts,
    ...renewableProducts,
    ...miningProducts,
    ...telecomProducts,
    ...powerProducts,
    ...transmissionProducts

];

export function smartSearch(searchText) {

    const query = searchText.toLowerCase();

    return allProducts
        .map(product => {

            let score = 0;

            if (product.name.toLowerCase().includes(query))
                score += 100;

            if (product.tags) {

                product.tags.forEach(tag => {

                    if (
                        query.includes(tag) ||
                        tag.includes(query)
                    ) {
                        score += 25;
                    }

                });

            }

            return {
                product,
                score
            };

        })
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score);

}
