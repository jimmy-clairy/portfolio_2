/**
 * Récupère des données à partir d'une URL en utilisant la méthode Fetch.
 * @param {string} url - L'URL à partir de laquelle récupérer les données.
 * @returns {Promise} - Une promesse contenant les données au format JSON.
 * @throws {Error} - Une erreur est lancée si le serveur rencontre un problème.
 */
export async function fetchData(url) {
    /**
     * Effectue une requête Fetch pour récupérer les données.
     * @type {Response}
     */
    const res = await fetch(url);

    if (res.ok) {
        return res.json();
    }

    throw new Error("Problème serveur");
}