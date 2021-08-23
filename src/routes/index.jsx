const routes = [
    {
        path: "/",
        component: HomePage,
        exact: true
    },
    {
        path: "/items",
        component: SearchPage,
        exact: true
    },
    {
        path: "/items/:id",
        component: ProductPage,
        exact: true
    },
    {
        component: NotFoundPage
    }
];

export default routes;