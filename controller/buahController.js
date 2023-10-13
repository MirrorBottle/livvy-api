const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

BigInt.prototype.toJSON = function () {
    const int = Number.parseInt(this.toString());
    return int ?? this.toString();
};

module.exports = {
    createBuah: async (req, res) => {
        try {            
            const b = await prisma.buah.create({
                data: {
                    nama: req.body.nama
                }
            })
            return res.json({
                data: b
            })
        } catch (error) {
            console.log(error.message);
            return res.json({
                data: error
            })            
        }
    },

    getBuah: async (req, res) => {
        const b = await prisma.buah.findMany();
        return res.json({
            data: b
        });        
    }
}