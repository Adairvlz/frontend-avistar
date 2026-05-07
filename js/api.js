const API_URL = "https://backend-avistar-production.up.railway.app";

async function getSeries({ q = "", sort = "id", order = "asc" } = {}) {
    const url = `${API_URL}/series/?q=${q}&sort=${sort}&order=${order}&limit=100`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Error al cargar hospedajes");
    }

    return response.json();
}

async function createSeries(data) {
    const response = await fetch(`${API_URL}/series/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Error al crear hospedaje");
    }

    return response.json();
}

async function updateSeries(id, data) {
    const response = await fetch(`${API_URL}/series/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Error al actualizar hospedaje");
    }

    return response.json();
}

async function deleteSeries(id) {
    const response = await fetch(`${API_URL}/series/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error("Error al eliminar hospedaje");
    }
}

async function getRatings(seriesId) {
    const response = await fetch(`${API_URL}/series/${seriesId}/rating`);

    if (!response.ok) {
        throw new Error("Error al cargar ratings");
    }

    return response.json();
}

async function createRating(seriesId, data) {
    const response = await fetch(`${API_URL}/series/${seriesId}/rating`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Error al guardar rating");
    }

    return response.json();
}