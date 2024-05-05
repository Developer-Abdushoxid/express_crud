import express from "express";

const router = express.Router();

const user = [
    {
        firstName: 'muhammadali',
        lastName: 'ismailjanov',
        email: 'ali@example.uz'
    },
    {
        firstName: 'muhammadjon',
        lastName: 'olimov',
        email: 'olimov@example.uz'
    },
];

router.get('/',(req, res) => {
    res.send(user);
});

export default router
