const container = document.getElementById("seriesContainer");
const form = document.getElementById("seriesForm");

const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const orderSelect = document.getElementById("orderSelect");
const cancelEditBtn = document.getElementById("cancelEditBtn");
const exportCsvBtn = document.getElementById("exportCsvBtn");

let currentSeries = [];

async function loadSeries() {
    try {
        const q = searchInput.value;
        const sort = sortSelect.value;
        const order = orderSelect.value;

        currentSeries = await getSeries({ q, sort, order });
        renderSeries(currentSeries);
    } catch (error) {
        container.innerHTML = `<p class="error">${error.message}</p>`;
    }
}

function renderSeries(seriesList) {
    container.innerHTML = "";

    if (seriesList.length === 0) {
        container.innerHTML = `<p>No hay hospedajes registrados.</p>`;
        return;
    }

    seriesList.forEach((item) => {
        const card = document.createElement("article");
        card.className = "card";

        card.innerHTML = `
      <img src="${item.image_url || "https://images.unsplash.com/photo-1564013799919-ab600027ffc6"}" alt="${item.name}">
      <div class="card-content">
        <span class="badge">${item.available ? "Disponible" : "No disponible"}</span>
        <h3>${item.name}</h3>
        <p class="location">${item.location}</p>
        <p>${item.description}</p>
        <p class="price">Q${item.price_per_night} / noche</p>
        <p>Capacidad: ${item.capacity} personas</p>

        <div class="actions">
          <button onclick="startEdit(${item.id})">Editar</button>
          <button class="danger" onclick="removeSeries(${item.id})">Eliminar</button>
        </div>

        <div class="rating-box">
            <p id="rating-summary-${item.id}">Cargando rating...</p>

            <select id="rating-score-${item.id}">
                <option value="5">★★★★★</option>
                <option value="4">★★★★☆</option>
                <option value="3">★★★☆☆</option>
                <option value="2">★★☆☆☆</option>
                <option value="1">★☆☆☆☆</option>
            </select>

            <input id="rating-comment-${item.id}" placeholder="Comentario opcional" />

            <button onclick="submitRating(${item.id})">Calificar</button>
            </div>

      </div>
    `;

        container.appendChild(card);
        loadRatingsForSeries(item.id);
    });
}

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const id = document.getElementById("seriesId").value;

    const data = {
        name: document.getElementById("name").value,
        location: document.getElementById("location").value,
        description: document.getElementById("description").value,
        price_per_night: Number(document.getElementById("price").value),
        capacity: Number(document.getElementById("capacity").value),
        image_url: document.getElementById("imageUrl").value,
        available: document.getElementById("available").checked,
    };

    try {
        if (id) {
            await updateSeries(id, data);
        } else {
            await createSeries(data);
        }

        form.reset();
        document.getElementById("available").checked = true;
        document.getElementById("seriesId").value = "";
        cancelEditBtn.classList.add("hidden");

        loadSeries();
    } catch (error) {
        alert(error.message);
    }
});

function startEdit(id) {
    const item = currentSeries.find((series) => series.id === id);

    if (!item) return;

    document.getElementById("seriesId").value = item.id;
    document.getElementById("name").value = item.name;
    document.getElementById("location").value = item.location;
    document.getElementById("description").value = item.description;
    document.getElementById("price").value = item.price_per_night;
    document.getElementById("capacity").value = item.capacity;
    document.getElementById("imageUrl").value = item.image_url || "";
    document.getElementById("available").checked = item.available;

    cancelEditBtn.classList.remove("hidden");
    window.scrollTo({ top: 350, behavior: "smooth" });
}

async function removeSeries(id) {
    const confirmed = confirm("¿Seguro que quieres eliminar este hospedaje?");

    if (!confirmed) return;

    try {
        await deleteSeries(id);
        loadSeries();
    } catch (error) {
        alert(error.message);
    }
}

cancelEditBtn.addEventListener("click", () => {
    form.reset();
    document.getElementById("seriesId").value = "";
    document.getElementById("available").checked = true;
    cancelEditBtn.classList.add("hidden");
});

searchInput.addEventListener("input", loadSeries);
sortSelect.addEventListener("change", loadSeries);
orderSelect.addEventListener("change", loadSeries);

exportCsvBtn.addEventListener("click", () => {
    if (currentSeries.length === 0) {
        alert("No hay datos para exportar");
        return;
    }

    const headers = [
        "id",
        "name",
        "location",
        "description",
        "price_per_night",
        "capacity",
        "available",
    ];

    const rows = currentSeries.map((item) =>
        headers.map((header) => `"${item[header]}"`).join(",")
    );

    const csv = [headers.join(","), ...rows].join("\n");

    const blob = new Blob([csv], {
        type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "avistar_hospedajes.csv";
    link.click();

    URL.revokeObjectURL(url);
});

async function loadRatingsForSeries(seriesId) {
    try {
        const ratings = await getRatings(seriesId);
        const summary = document.getElementById(`rating-summary-${seriesId}`);

        if (ratings.length === 0) {
            summary.textContent = "Sin calificaciones todavía";
            return;
        }

        const average =
            ratings.reduce((sum, rating) => sum + rating.score, 0) / ratings.length;

        summary.textContent = `⭐ ${average.toFixed(1)} / 5 (${ratings.length} calificaciones)`;
    } catch (error) {
        console.error(error);
    }
}

async function submitRating(seriesId) {
    const score = Number(document.getElementById(`rating-score-${seriesId}`).value);
    const comment = document.getElementById(`rating-comment-${seriesId}`).value;

    try {
        await createRating(seriesId, {
            score,
            comment,
        });

        document.getElementById(`rating-comment-${seriesId}`).value = "";
        await loadRatingsForSeries(seriesId);

        alert("Rating guardado correctamente");
    } catch (error) {
        alert(error.message);
    }
}

loadSeries();

