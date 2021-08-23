const axios = require('axios');
const numeral = require('numeral');

const productLimit = 4;
const URL = 'https://api.mercadolibre.com/';

/**
 * Formatted products
 * @param query
 * @param res
 */
exports.getProducts = (query, res) => {
    axios.get(`${URL}/sites/MLA/search?q=${query}&limit=${productLimit}`)
        .then(response => {
            res.json(productsFormat(response.data))
        })
        .catch(err => {
            res.status(500).json({ message: err });
        })
}

/**
 *
 * @param itemId
 * @param res
 */
exports.getProductDetails = (itemId, res) => {
    const detailResponse = {};
    axios.all([
        axios.get(`${URL}items/${itemId}`),
        axios.get(`${URL}items/${itemId}/description`)])
        .then(axios.spread((product, description) => {
            detailResponse.author = getAuthor();
            detailResponse.item = setItemValues(product.data, description.data);
            axios.get(`${URL}categories/${product.data.category_id}`)
                .then((response) => {
                    detailResponse.categories = response.data.path_from_root.map(
                        (category) => {
                            return category.name;
                        });
                    res.json(detailResponse);
                });
        }));
};

/**
 * Format Products
 * @param data
 * @returns {Array}
 */
const productsFormat = (data) => {
    const products = {};
    products.author = getAuthor();
    products.items = getItems(data);
    return products;
}

/**
 * Set Items
 * @param items
 * @returns {Array}
 */
const getItems = (items) => {
    let newItems = [];
    newItems = items.results.map((item) => {
        return {
            id: item.id,
            title: item.title,
            price: {
                currency: item.currency_id,
                amount: formatPrice(item.price),
            },
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
            address: item.address.state_name,
            category_id: item.category_id
        };
    });
    return newItems
}

/**
 * Set Item values
 * @param product
 * @param description
 * @returns {Object}
 */
const setItemValues = (product, description) => {
    const itemProduct = {};

    itemProduct.id = product.id;
    itemProduct.title = product.title;
    itemProduct.price = {
        amount: formatPrice(product.price),
        currency: product.currency_id
    };

    if (product.pictures.length) {
        itemProduct.picture = product.pictures[0].secure_url;
    }

    itemProduct.condition = product.condition === 'new' ? 'Nuevo' : 'Usado';
    itemProduct.free_shipping = product.shipping.free_shipping;
    itemProduct.sold_quantity = product.sold_quantity;
    itemProduct.description = description.plain_text;
    itemProduct.permalink = product.permalink;

    return itemProduct;
}

/**
 * Signature
 * @returns {{name: string, lastname: string}}
 */
const getAuthor = () => ({ name: 'John', lastname: 'Mejía' });

/**
 * Price format
 * @param price
 * @returns {string}
 */
const formatPrice = (price) => numeral(price).format('$ 0,00');

