import { allProducts }
from '../data/allProducts.js';

export function generateTree() {

    const treeContainer =
        document.getElementById('tree');

    if (!treeContainer) {
        return;
    }

    const grouped = {};

    allProducts.forEach(product => {

        if (!grouped[product.family]) {
            grouped[product.family] = {};
        }

        if (!grouped[product.family][product.category]) {
            grouped[product.family][product.category] = [];
        }

        grouped[product.family][product.category]
            .push(product);

    });

    treeContainer.innerHTML = '';

    Object.keys(grouped)
        .sort()
        .forEach(family => {

            const familyNode =
                document.createElement('details');

            familyNode.classList.add(
                'family-node'
            );

            const familyTitle =
                document.createElement('summary');

            familyTitle.textContent =
                family;

            familyNode.appendChild(
                familyTitle
            );

            Object.keys(grouped[family])
                .sort()
                .forEach(category => {

                    const categoryNode =
                        document.createElement(
                            'details'
                        );

                    const categoryTitle =
                        document.createElement(
                            'summary'
                        );

                    categoryTitle.textContent =
                        category;

                    categoryNode.appendChild(
                        categoryTitle
                    );

                    grouped[family][category]
                        .forEach(product => {

                            const item =
                                document.createElement(
                                    'div'
                                );

                            item.className =
                                'tree-item';

                            item.textContent =
                                product.name;

                            item.addEventListener(
                                'click',
                                () => {
                                    showProduct(
                                        product
                                    );
                                }
                            );

                            categoryNode
                                .appendChild(item);

                        });

                    familyNode.appendChild(
                        categoryNode
                    );

                });

            treeContainer.appendChild(
                familyNode
            );

        });

}

function showProduct(product) {

    const panel =
        document.getElementById('info');

    if (!panel) {
        return;
    }

    const installation =
        product.installation
            ? product.installation.join(', ')
            : '-';

    const applications =
        product.applications
            ? product.applications.join(', ')
            : '-';

    const tags =
        product.tags
            ? product.tags.join(', ')
            : '-';

    panel.innerHTML = `

        <div class="product-card">

            <h2>${product.name}</h2>

            <hr>

            <p>
                <strong>Familia:</strong>
                ${product.family || '-'}
            </p>

            <p>
                <strong>Categoría:</strong>
                ${product.category || '-'}
            </p>

            <p>
                <strong>Conductor:</strong>
                ${product.conductor || '-'}
            </p>

            <p>
                <strong>Aislamiento:</strong>
                ${product.insulation || '-'}
            </p>

            <p>
                <strong>Tensión:</strong>
                ${product.voltage || '-'}
            </p>

            <p>
                <strong>Temperatura:</strong>
                ${product.temperature || '-'}
            </p>

            <p>
                <strong>Instalación:</strong>
                ${installation}
            </p>

            <p>
                <strong>Aplicaciones:</strong>
                ${applications}
            </p>

            <p>
                <strong>Tags:</strong>
                ${tags}
            </p>

            <p>
                <strong>Brochure:</strong>
                ${product.brochure || '-'}
            </p>

        </div>

    `;

}
