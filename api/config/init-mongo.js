db.createUser({
    user : "boboman",
    pwd : "thistoowillchange",
    roles : [
        {
            role: "readWrite",
            db: "bobo_db"
        }
    ]
})