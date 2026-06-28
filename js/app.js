const treeContainer = document.getElementById("tree");
const infoPanel = document.getElementById("info");

function renderTree(node) {

    const ul = document.createElement("ul");

    if (node.children) {

        const li = document.createElement("li");

        const folder = document.createElement("span");

        folder.className = "folder";
        folder.textContent = node.name;

        li.appendChild(folder);

        const childContainer = document.createElement("div");

        node.children.forEach(child => {

            childContainer.appendChild(
                renderTree(child)
            );

        });

        li.appendChild(childContainer);

        folder.addEventListener("click", () => {

            childContainer.classList.toggle("hidden");

        });

        ul.appendChild(li);

    } else {

        const li = document.createElement("li");

        const cable = document.createElement("span");

        cable.className = "cable";
        cable.textContent = node.name;

        cable.addEventListener("click", () => {

            showCable(node);

        });

        li.appendChild(cable);

        ul.appendChild(li);

    }

    return ul;
}

function showCable(cable) {

    infoPanel.innerHTML = `

        <div class="card">

            <h3>${cable.name}</h3>

            <p>
                <strong>Tensión:</strong><br>
                ${cable.voltage}
            </p>

            <p>
                <strong>Aplicación:</strong><br>
                ${cable.application}
            </p>

            <p>
                <strong>Estado:</strong><br>
                Disponible en catálogo Prysmian Ecuador.
            </p>

        </div>

    `;
}

treeContainer.appendChild(
    renderTree(cableTree)
);
