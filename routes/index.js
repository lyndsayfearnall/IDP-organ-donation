var express = require('express');
var router = express.Router();
const bcrypt = require("bcrypt")
const db = require("../db")

function auth(req, res, next) {
  req.session.first_name && req.session.last_name ?
    next() : res.redirect("/dashboard/login")
}

function addSectionTitle(section) {
  switch(section.sectionNumber) {
    case 1: 
      return {
        ...section,
        sectionTitle: "Home Page"
      }
    case 2: 
      return {
        ...section,
        sectionTitle: "Video Page"
      };
    case 7: 
      return {
        ...section,
        sectionTitle: "Register Page"
      }
    default:
      return {
        ...section,
        sectionTitle: `Can't do page #${section.sectionNumber - 2}`
      }
    }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  db.query("SELECT * FROM sections", (err, result) => {
    res.render('home', { sections: result });

  })
});

router.get('/dashboard/login', (req, res) => {
  res.render('dashboard/login', {dashboard: true})
})

router.get('/dashboard/welcome', auth, (req, res) => {
  /** Welcome page */
  const { first_name, last_name, email} = req.session
  console.log(req.session)
  res.render('dashboard/welcome', {
    user: {
      first_name, last_name, email
    },
    dashboard: true
  })
})

router.get('/dashboard/edit', auth, (req, res) => {
  /** Edit page */
  db.query("SELECT * FROM sections;", (err, result) => {
    if(err) console.log(err)
    try {
      const { first_name, last_name, email} = req.session
      res.render('dashboard/edit', {
        user: {
          first_name, last_name, email
        },
        sections: result.map(section => addSectionTitle(section)),
        dashboard: true
      })
    } catch(err) {
      console.log(err)
    }
  })
})

router.get('/dashboard/edit/:id', (req, res) => {
  db.query(`SELECT * FROM sections WHERE id = ${req.params.id}`, (err, result) => {
    try {
      if(err) console.log(err)
       
      res.render('dashboard/editSection', {
        dashboard: true,
        section: addSectionTitle(result[0])
      })
    } catch(err) {
      console.log(err)
    }
  })
})

router.post('/api/create', (req,res) => {
  try {
    const {
      firstName, lastName, email, password
    } = req.body
    bcrypt.genSalt(8, (err, salt) => 
      bcrypt.hash(password, salt, (err, hash) => {
        const user = {
          firstName, lastName, email, password: hash
        }
        db.connect()
        const query = `
          INSERT INTO users (first_name, last_name, email, password)
          VALUES ("${user.firstName}", "${user.lastName}", "${user.email}", "${user.password}"); 
        `
        console.log(query)
        db.query(query, (error, results) => {
          if(err) throw error
          console.dir(results)
          res.status(200).json(results)
        })
        db.end()
      }))

  } catch(err) {
    console.error(err)
    res.status(500)
  }
})
router.post('/api/login', (req, res) => {
  try {
    const { email, password } = req.body
    db.query(`SELECT * FROM users WHERE email = "${email}"`, (error, result) => {
      if(error) {
        res.status(401).json({ message: "unable to verify credentials" })
      }
      const [user] = result
      try {
        if(bcrypt.compareSync(password, user.password)) {
          for(let prop in user) {
            req.session[prop] = user[prop]
          }
          console.log(req.session)
          res.end("done")
        } else {
          throw new Error()
        }
      }catch(err) {
        res.status(500).json({
          message: "Unable to verify credentails",
          error: err.stack
        })
      }
    })
  } catch(err) {
    console.error(err)
    res.json(500).json(err)
  }
})
// TODO: Remove this for production :)
router.put('/api/section/:id', (req,res) => {
  const heading = req.body.heading.trim(), body = req.body.body.trim()
  const id = req.params.id
  db.query(`
      UPDATE sections
      SET heading="${heading}",
          body="${body}"
      WHERE id=${id};
    `, (err, result) => {
    console.log(result)
    if(err) console.log(err)
    res.status(200).json({
      mesage: "all good"
    })
  })
})

module.exports = router;
/**
 * {
 *  "id" : "auto incre num"
 *  "firstName":"String",
 *  "lastName" : "String",
 *  "email" : "String",
 *  "password" : "String"
 * }
 * 
 * 
 */