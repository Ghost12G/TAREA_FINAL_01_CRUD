export const index = (req, res) => {
    res.render("index", { title: "Tu Restaurante Favorito" });
};

export const menu = (req, res) => {
    res.render("menu", { title: "Menu" });
};

export const login = (req, res) => {
    res.render("loginClientes", { title: "Login" });
};

export const registro = (req, res) => {
    res.render("registro", { title: "Registro" });
};

export const promociones = (req, res) => {
    res.render("promociones", { title: "Promociones" });
};

export const about = (req, res) => {
    res.render("about", { title: "About" });
};
