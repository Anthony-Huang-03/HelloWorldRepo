import Victim from "../models/victim.js";

const getVictims = async(req, res) => {
    try {
        const victims = await Victim.find();
        res.status(200).json({ victims });
    } catch(err) {
        throw err;
    }
};

const getVictimById = async(req, res) => {
    try {
        const victim = await Victim.findById(req.params.id);
        res.status(200).json({ victim });
    } catch(err) {
        throw err;
    }
};

const addVictim = async(req, res) => {
    try {
        const body = req.body;
        const victim = new Victim({
            category: body.category,
            description: body.description,
            name: body.name,
            contact: body.contact,
            latitude: body.latitude,
            longitude: body.longitude,
            heroId: body.heroId
        });
        const newVictim = await victim.save();
        const allVictims = await Victim.find();
        res.status(201).json({
            message: "Victim added",
            victim: newVictim,
            victims: allVictims
        });
    } catch(err) {
        throw err;
    }
};

const updateVictim = async(req, res) => {
    try {
        const {
            params: { id },
            body
        } = req;
        const updatedVictim = await Victim.findByIdAndUpdate(
            { _id: id },
            body,
            { new: true }
        );
        const allVictims = await Victim.find();
        res.status(200).json({
            message: "Victim updated",
            victim: updatedVictim,
            victims: allVictims
        });
    } catch(err) {
        throw err;
    }
};

const deleteVictim = async(req, res) => {
    try {
        const deletedVictim = await Victim.findByIdAndRemove(req.params.id);

        const allVictims = await Victim.find();

        res.status(200).json({
            message: "Column deleted",
            victim: deletedVictim,
            victims: allVictims
        });
    } catch(err) {
        throw err;
    }
};

export { getVictims, getVictimById, addVictim, updateVictim, deleteVictim };