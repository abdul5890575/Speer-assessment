module.exports = (db) => {

    const getUserByEmail = email => {

        const query = {
            text: `SELECT * FROM users WHERE email = $1` ,
            values: [email]
        }

        return db
            .query(query)
            .then(result => result.rows[0])
            .catch((err) => err); 
    }

    const addUser = (firstName, lastName, email, password) => {
        const query = {
            text: `INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *` ,
            values: [firstName, lastName, email, password]
        }

        return db.query(query)
            .then(result => result.rows[0])
            .catch(err => err);
    }

    const getUserPosts = (user_id) => {
        const query = {
            text: `SELECT * FROM posts  WHERE user_id = $1 `,
            values: [user_id]
        }
        return db.query(query)
            .then(result => result.rows)
            .catch(err => err);
    }


    const createPost = (title, content, user_id) => {
        const query = {
            text: `INSERT INTO posts(title, content, user_id)
            VALUES ($1, $2, $3) RETURNING *`,
            values: [title,content,user_id]
        }
        return db.query(query)
            .then(result => result.rows)
            .catch(err => err);

    }

    return {
        getUserByEmail,
        addUser,
        getUserPosts,
        createPost
    };
};