import Hero from "../models/hero.js";

const getHeros = async(req, res) => {
    try {
        const heros = await Hero.find();
        res.status(200).json({ heros });
    } catch(err) {
        throw err;
    }
};

const getHeroById = async(req, res) => {
    try {
        const hero = await Hero.findById(req.params.id);
        res.status(200).json({ hero });
    } catch(err) {
        throw err;
    }
};

const addHero = async(req, res) => {
    try {
        const body = req.body;
        const hero = new Hero({
            name: body.name,
            contact: body.contact,
            latitude: body.latitude,
            longitude: body.longitude
        });
        const newHero = await hero.save();
        const allHeros = await Hero.find();
        res.status(201).json({
            message: "Hero added",
            hero: newHero,
            heros: allHeros
        });
    } catch(err) {
        throw err;
    }
};

const updateHero = async(req, res) => {
    try {
        const {
            params: { id },
            body
        } = req;
        const updatedHero = await Hero.findByIdAndUpdate(
            { _id: id },
            body,
            { new: true }
        );
        const allHeros = await Hero.find();
        res.status(200).json({
            message: "Hero updated",
            hero: updatedHero,
            heros: allHeros
        });
    } catch(err) {
        throw err;
    }
};

const deleteHero = async(req, res) => {
    try {
        const deletedHero = await Hero.findByIdAndRemove(req.params.id);

        const allHeros = await Hero.find();

        res.status(200).json({
            message: "Column deleted",
            hero: deletedHero,
            heros: allHeros
        });
    } catch(err) {
        throw err;
    }
};

export { getHeros, getHeroById, addHero, updateHero, deleteHero };